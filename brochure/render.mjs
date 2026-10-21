/**
 * Renders brochure.html to public/petrol-aquametro-marine-brochure.pdf.
 *
 *   npm install --no-save playwright && node brochure/render.mjs
 *
 * Images are downscaled to print size first — Chromium embeds each image at its
 * natural resolution, so feeding it the full-size web assets produces a PDF
 * several megabytes larger than it needs to be.
 */
import { chromium } from "playwright";
import fsSync from "node:fs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "petrol-aquametro-marine-brochure.pdf");
const work = await fs.mkdtemp(path.join(os.tmpdir(), "brochure-"));

// Print-sized copies, produced with Chromium itself so there is no image dependency.
const PRINT = [
  ["hero-tankers.webp", 1500],
  ["petrol-double-case.webp", 620],
  ["aquametro-products.webp", 620],
  ["logo-petrol.png", 520],
  ["logo-petrol-full.png", 560],
  ["logo-aquametro.png", 520],
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const [file, width] of PRINT) {
  const src = path.join(root, "public", "img", file);
  const jpg = await page.evaluate(
    async ({ dataUrl, width }) => {
      const img = new Image();
      img.src = dataUrl;
      await img.decode();
      const scale = Math.min(1, width / img.naturalWidth);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/jpeg", 0.86);
    },
    {
      dataUrl: `data:image/${file.endsWith(".png") ? "png" : "webp"};base64,${fsSync
        .readFileSync(src)
        .toString("base64")}`,
      width,
    },
  );
  const name = file.replace(/\.(webp|png)$/, ".jpg");
  await fs.writeFile(path.join(work, name), Buffer.from(jpg.split(",")[1], "base64"));
}

let html = await fs.readFile(path.join(root, "brochure", "brochure.html"), "utf8");
html = html.replaceAll("IMG/", `file://${work}/`);
const rendered = path.join(work, "render.html");
await fs.writeFile(rendered, html);

await page.goto(`file://${rendered}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1200);

// Fail loudly rather than silently shipping a clipped page.
const boxes = await page.evaluate(() =>
  [...document.querySelectorAll(".page")].map((p, i) => {
    const prev = p.style.overflow;
    p.style.overflow = "visible";
    const box = p.getBoundingClientRect();
    let lowest = 0;
    for (const el of p.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.height && r.bottom - box.top > lowest) lowest = r.bottom - box.top;
    }
    p.style.overflow = prev;
    return { page: i + 1, overflow: Math.round(lowest - box.height) };
  }),
);
const missing = await page.evaluate(() =>
  [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src),
);

await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();
await fs.rm(work, { recursive: true, force: true });

console.log("page overflow:", JSON.stringify(boxes));
if (missing.length) throw new Error(`images failed to load:\n${missing.join("\n")}`);
const bad = boxes.filter((b) => b.overflow > 0);
if (bad.length) throw new Error(`content overflows the A4 box: ${JSON.stringify(bad)}`);
console.log("wrote", path.relative(root, out));
