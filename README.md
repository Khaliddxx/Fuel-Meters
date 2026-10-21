# Fuel-Meters

Marketing site for **Fuel-Meters** (fuel-meters.com) — PETROL Instruments positive displacement
flowmeters and AQUAMETRO flow measurement solutions for vessel and tanker operations.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every route is
statically prerendered, so the site deploys to Vercel with no server runtime or environment
variables.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/` | Routes: home, `/products`, `/applications`, `/about`, `/contact`, plus `robots.ts`, `sitemap.ts` and `not-found.tsx` |
| `src/components/` | Header, footer, hero, CTA band, enquiry form, icon set and UI primitives |
| `src/lib/site.ts` | All editable content: contact details, navigation, brands, product categories, applications, benefits |
| `public/img/` | Product photography and brand logos, derived from the Petrol technical bulletin and supplied product shots |
| `public/petrol-aquametro-marine-brochure.pdf` | Brochure offered as a download |

## Editing content

Most copy changes are a single edit to `src/lib/site.ts`:

- **Contact details** — the `contact` object (name, role, email, phone, region). The phone number
  appears twice: `phone` for display and `phoneHref` for `tel:` links.
- **Products** — the `brands` array drives both the home page and `/products`.
- **Approvals** — the `approvals` object (fiscal pattern approvals and standards) and `accuracy` stats.
- **Applications**, **benefits**, **delivery steps**, **customers** — their respective exports.

Design tokens (brand navy and blue, fonts, shadows) live in the `@theme` block of
`src/app/globals.css`.

## Enquiry form

The contact form has no backend. On submit it composes a prefilled `mailto:` to the address in
`contact.email` and hands off to the visitor's email client, so there is nothing to host, secure or
monitor. To move to server-side submissions later, replace the `handleSubmit` in
`src/components/enquiry-form.tsx` with a POST to a route handler.

## Brochure

`public/petrol-aquametro-marine-brochure.pdf` is generated from `brochure/brochure.html`:

```bash
npm install --no-save playwright
node brochure/render.mjs
```

The script downscales the web images to print size, renders both pages to A4 with headless
Chromium, and fails if a page overflows its box or an image does not load. Regenerate it after
changing brand content so the download stays in step with the site.

## Deployment

Deployed on Vercel. The default Next.js build settings apply — no configuration or secrets needed.
