import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Container, IconBadge, SectionHeading } from "@/components/ui";
import { brands, contact, credentials, customers, deliverySteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — marine measurement specialists in Malaysia",
  description:
    "Fuel-Meters supplies and supports BROSCO and AQUAMETRO measurement instrumentation for vessel and tanker operations, with regional sales and technical support across Malaysia and South East Asia.",
  alternates: { canonical: "/about" },
};

const support = [
  {
    icon: "gauge",
    title: "Specification",
    body: "We work from the duty — media, line size, pressure, temperature, approvals — and recommend the instrument that fits it, including the cases where a cheaper principle will do the job.",
  },
  {
    icon: "shipping",
    title: "Supply",
    body: "Confirmed orders delivered within 14 days, with documentation prepared for class, customs and the vessel's own records.",
  },
  {
    icon: "wrench",
    title: "Technical support",
    body: "Help with installation, commissioning, configuration and fault-finding — before the instrument goes in, and for as long as it is in service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Measurement specialists for vessel and tanker operations"
        lead="We supply and support two established instrumentation brands for the marine and energy sector, with sales and technical support based in the region our customers operate in."
        image="/img/tanker.webp"
      />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who we are"
                title="Trusted brands. Superior solutions."
                lead="Fuel-Meters brings together BROSCO instrumentation and AQUAMETRO flow measurement under a single point of contact for shipowners, operators, managers and yards."
              />
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-navy-800/80">
                <p>
                  Marine measurement is unforgiving. Instruments sit in salt air and constant
                  vibration, run continuously for years between dockings, and the numbers they
                  produce end up in bunker disputes, charter party claims and emissions reports. An
                  instrument that drifts is not an inconvenience — it is a commercial exposure.
                </p>
                <p>
                  That is the standard both brands are built to. BROSCO covers pressure, temperature
                  and level with mechanical and digital instruments proven in marine service.
                  AQUAMETRO covers flow — electromagnetic, ultrasonic, turbine and Coriolis — with
                  the totalising, batch control and data logging that fuel management and cargo
                  transfer depend on.
                </p>
                <p>
                  Between them they cover effectively everything a vessel measures, which means one
                  specification conversation, one order and one point of support instead of four.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                {brands.map((brand) => (
                  <Image
                    key={brand.slug}
                    src={brand.logo}
                    alt={brand.logoAlt}
                    width={760}
                    height={261}
                    sizes="230px"
                    className="h-12 w-auto"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-mist-200 bg-mist-50 p-7 shadow-card">
                <p className="eyebrow text-brand-600">Your regional contact</p>
                <p className="mt-4 font-display text-2xl font-extrabold text-navy-900">
                  {contact.name}
                </p>
                <p className="mt-1 text-navy-800/70">{contact.role}</p>
                <div className="mt-6 space-y-3 text-[15px]">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 font-medium text-navy-900 hover:text-brand-600"
                  >
                    <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-600" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="flex items-center gap-3 font-medium text-navy-900 hover:text-brand-600"
                  >
                    <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-600" />
                    {contact.phone}
                  </a>
                  <p className="flex items-center gap-3 font-medium text-navy-900">
                    <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-600" />
                    {contact.region}
                  </p>
                </div>
                <p className="mt-6 border-t border-mist-200 pt-5 text-sm leading-relaxed text-navy-800/70">
                  Enquiries, quotations and technical questions all come to the same place. No call
                  centre, no ticket queue.
                </p>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl shadow-card">
                <Image
                  src="/img/jetty-sunset.webp"
                  alt="Loading jetty pipework at sunset"
                  width={610}
                  height={632}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="h-52 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Specification, supply and support"
            lead="Three things, done properly, for the life of the instrument."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {support.map((item) => (
              <li key={item.title} className="rounded-xl border border-mist-200 bg-white p-7 shadow-card">
                <IconBadge name={item.icon} />
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-800/70">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="delivery" className="scroll-mt-28 bg-navy-950 py-20 text-white md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Order to delivery"
            tone="light"
            align="center"
            title={
              <>
                <span className="text-brand-400">14 days.</span> Fast, reliable, on time.
              </>
            }
            lead="Planned maintenance and dry dock windows do not move. Neither does our lead time."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, i) => (
              <li key={step.title} className="relative rounded-xl border border-white/12 bg-white/[0.04] p-6">
                <span className="font-display text-4xl font-extrabold text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconBadge name={step.icon} tone="light" />
                <h3 className="mt-5 font-display text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist-200/75">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-xl border border-white/12 bg-white/[0.04] p-8">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <p className="eyebrow text-brand-400">Trusted by industry leaders</p>
                <p className="mt-4 text-pretty leading-relaxed text-mist-200">
                  Supplied to leading shipowners, operators and energy companies — including{" "}
                  {customers.slice(0, -1).join(", ")} and {customers.at(-1)} — and many more.
                </p>
              </div>
              <ul className="grid gap-3.5 sm:grid-cols-2 md:col-span-7">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist-200/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Talk to someone who knows the instruments." />
    </>
  );
}
