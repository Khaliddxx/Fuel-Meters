import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — quotations and technical support",
  description: `Contact ${contact.name}, ${contact.role}, for quotations, specifications and technical support on BROSCO and AQUAMETRO marine measurement instrumentation. Email ${contact.email} or call ${contact.phone}.`,
  alternates: { canonical: "/contact" },
};

const helpWith = [
  "Specifications and product selection",
  "Quotations and lead times",
  "Spares, service and calibration",
  "Installation and commissioning support",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us today"
        title="For information, quotations or technical support"
        lead="Tell us what you are measuring and we will come back with a specification, a price and a delivery date."
        image="/img/hero-ocean.webp"
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-extrabold text-navy-900">Send an enquiry</h2>
              <p className="mt-2 text-navy-800/70">
                Fields marked <span className="font-semibold text-brand-600">*</span> are required.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-navy-900 p-7 text-white shadow-lift">
                <p className="eyebrow text-brand-400">Regional contact</p>
                <p className="mt-4 font-display text-2xl font-extrabold">{contact.name}</p>
                <p className="mt-1 text-mist-200/75">{contact.role}</p>

                <div className="mt-7 space-y-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-3.5 rounded-lg bg-white/[0.06] p-4 transition-colors hover:bg-white/10"
                  >
                    <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <span>
                      <span className="block font-display text-[11px] font-bold uppercase tracking-[0.14em] text-mist-200/60">
                        Email
                      </span>
                      <span className="font-semibold">{contact.email}</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="flex items-start gap-3.5 rounded-lg bg-white/[0.06] p-4 transition-colors hover:bg-white/10"
                  >
                    <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <span>
                      <span className="block font-display text-[11px] font-bold uppercase tracking-[0.14em] text-mist-200/60">
                        Phone
                      </span>
                      <span className="font-semibold">{contact.phone}</span>
                    </span>
                  </a>
                  <div className="flex items-start gap-3.5 rounded-lg bg-white/[0.06] p-4">
                    <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <span>
                      <span className="block font-display text-[11px] font-bold uppercase tracking-[0.14em] text-mist-200/60">
                        Region
                      </span>
                      <span className="font-semibold">{contact.region}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-mist-200 bg-mist-50 p-7">
                <h2 className="font-display text-lg font-bold text-navy-900">We can help with</h2>
                <ul className="mt-4 space-y-3">
                  {helpWith.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-navy-800/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/brosco-aquametro-marine-brochure.pdf"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-brand-600 hover:text-brand-700"
                >
                  <Icon name="download" className="h-4 w-4" />
                  Download the marine brochure
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-mist-200 bg-mist-50 py-12">
        <Container>
          <p className="text-center font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-800/60">
            {site.tagline}
          </p>
        </Container>
      </section>
    </>
  );
}
