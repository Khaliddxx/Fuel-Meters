import Link from "next/link";
import { brands, contact, nav, site } from "@/lib/site";
import { Icon } from "./icon";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-950 text-mist-200">
      <Container className="grid gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-display text-xl font-extrabold tracking-tight text-white">
            {site.name}
          </p>
          <p className="mt-1 font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-400">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-200/80">
            PETROL Instruments positive displacement flowmeters and AQUAMETRO flow
            measurement solutions for vessel and tanker operations.
          </p>
          <a
            href="/petrol-aquametro-marine-brochure.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/25 px-4 py-2.5 font-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <Icon name="download" className="h-4 w-4" />
            Marine brochure (PDF)
          </a>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Navigate
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mist-200/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Brands
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href={`/products#${brand.slug}`}
                  className="block text-mist-200/80 transition-colors hover:text-white"
                >
                  <span className="font-display font-bold text-mist-200">{brand.name}</span>
                  <span className="mt-0.5 block text-[13px] text-mist-200/60">
                    {brand.strapline.replaceAll(" | ", " · ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Contact
          </h2>
          <div className="mt-5 space-y-4 text-sm">
            <div>
              <p className="font-display font-bold text-white">{contact.name}</p>
              <p className="text-mist-200/70">{contact.role}</p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-3 text-mist-200/80 transition-colors hover:text-white"
            >
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-start gap-3 text-mist-200/80 transition-colors hover:text-white"
            >
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {contact.phone}
            </a>
            <p className="flex items-start gap-3 text-mist-200/80">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {contact.region}
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-mist-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>
            PETROL® and AQUAMETRO® are registered trademarks of their respective owners.
          </p>
        </Container>
      </div>
    </footer>
  );
}
