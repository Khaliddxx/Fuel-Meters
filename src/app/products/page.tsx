import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Approvals } from "@/components/approvals";
import { Button, Container, IconBadge, SectionHeading } from "@/components/ui";
import { brands } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products — PD flowmeters, master meters and flow measurement",
  description:
    "PETROL Instruments positive displacement flowmeters, master meters, tank provers, strainers and control valves, plus AQUAMETRO electromagnetic, ultrasonic, turbine and Coriolis flow meters for marine service.",
  alternates: { canonical: "/products" },
};

const specifyWith = [
  "Media and operating conditions",
  "Line size and connection type",
  "Pressure and temperature range",
  "Accuracy and output signal required",
  "Approvals and class requirements",
  "Quantity and required delivery date",
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Positive displacement and electronic flow measurement, specified for marine duty"
        lead="Two complementary brands, from a fiscal-grade PD meter on a cargo line to mass-based bunker metering and the strainers, provers and valves around them."
        image="/img/manifold-deck.webp"
      />

      {brands.map((brand, index) => (
        <section
          key={brand.slug}
          id={brand.slug}
          className={`scroll-mt-28 py-20 md:py-24 ${index % 2 === 1 ? "bg-mist-50" : ""}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt}
                    width={760}
                    height={261}
                    sizes="260px"
                    className="h-14 w-auto"
                  />
                  <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                    {brand.strapline}
                  </p>
                  <p className="mt-4 text-pretty leading-relaxed text-navy-800/80">{brand.intro}</p>
                  <div className="mt-7 overflow-hidden rounded-xl shadow-card">
                    <Image
                      src={brand.image}
                      alt={brand.imageAlt}
                      width={brand.imageWidth}
                      height={brand.imageHeight}
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-6">
                  {brand.categories.map((cat) => (
                    <article
                      key={cat.title}
                      className="rounded-xl border border-mist-200 bg-white p-7 shadow-card"
                    >
                      <div className="flex items-start gap-4">
                        <IconBadge name={cat.icon} />
                        <div className="min-w-0">
                          <h2 className="font-display text-xl font-bold text-navy-900">{cat.title}</h2>
                          <p className="mt-2 text-pretty leading-relaxed text-navy-800/75">{cat.body}</p>
                        </div>
                      </div>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 rounded-lg bg-mist-50 px-4 py-3"
                          >
                            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                              <Icon name="check" className="h-3 w-3" />
                            </span>
                            <span className="font-display text-sm font-bold text-navy-900">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-navy-950 py-20 text-white md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Built around the meter"
            tone="light"
            title="The equipment that keeps a fiscal meter honest"
            lead="A custody transfer meter is only as good as what sits around it — a strainer keeping debris out of the chamber, a prover to check it against, and a reference meter to settle the question on site."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: "/img/petrol-pd-meters.webp",
                w: 1200,
                h: 653,
                alt: "Three PETROL Instruments positive displacement flowmeters with mechanical dial counters",
                title: "The PD range",
                body: "From 1\" line sizes up to 16\", single and double case, with mechanical dials or electronic fiscal counters.",
              },
              {
                src: "/img/petrol-master-meter.webp",
                w: 700,
                h: 731,
                alt: "PETROL Instruments 16-inch master meter with mechanical counter",
                title: "Master meters",
                body: "±0.1% reference meters from 1\" to 16\", including a portable 4\" unit on a trolley for proving meters in service.",
              },
              {
                src: "/img/petrol-strainers.webp",
                w: 900,
                h: 714,
                alt: "Range of PETROL Instruments basket type protection strainers",
                title: "Basket strainers",
                body: "0.5\" to 16\" with 40, 80 and 200 mesh screeners, keeping foreign particles out of the measuring chamber.",
              },
              {
                src: "/img/petrol-cutaway.webp",
                w: 1000,
                h: 806,
                alt: "Cutaway of a double case PD flowmeter showing rotors, magnetic transmission and counter",
                title: "Inside the double case",
                body: "Rotors, timing gears, magnetic transmission and counter — the measuring unit lifts out without breaking the line.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.04]"
              >
                <div className="bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
                    className="h-56 w-full object-contain p-5"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-200/75">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Approvals />

      <section className="border-t border-mist-200 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="How to specify"
                title="Send us the duty, not a part number"
                lead="Most enquiries arrive as an application rather than a model code. Give us the conditions and we will come back with a specification, a price and a lead time."
              />
              <Button href="/contact" icon="arrow" className="mt-8">
                Start an enquiry
              </Button>
            </div>
            <div className="lg:col-span-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {specifyWith.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-mist-200 p-4 text-sm font-medium text-navy-900"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-600">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/petrol-aquametro-marine-brochure.pdf"
                download
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-brand-600 hover:text-brand-700"
              >
                <Icon name="download" className="h-4 w-4" />
                Download the marine brochure (PDF)
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Need a specification or a price?" />
    </>
  );
}
