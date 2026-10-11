import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { Button, Card, Container, IconBadge, SectionHeading } from "@/components/ui";
import { applications, benefits, brands, credentials, customers, deliverySteps } from "@/lib/site";

const capabilities = [
  { icon: "gauge", label: "Pressure gauges" },
  { icon: "thermometer", label: "Temperature instruments" },
  { icon: "level", label: "Level measurement" },
  { icon: "flow", label: "Flow meters" },
  { icon: "droplet", label: "Water & wastewater" },
  { icon: "process", label: "Industrial & process" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <Image
          src="/img/hero-ocean.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />

        <Container className="relative py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-400">Vessel and tanker operations</p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Reliable measurement. Safer operations. Greater efficiency.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist-200">
              BROSCO pressure, temperature and level instrumentation and AQUAMETRO flow
              measurement solutions — specified, supplied and supported for the vessels and
              terminals that cannot afford a bad number.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" icon="arrow">
                Request a quotation
              </Button>
              <Button href="/products" variant="ghost">
                Explore the range
              </Button>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-mist-200/80">
              <span>Accurate measurement</span>
              <span aria-hidden="true" className="text-brand-400">
                |
              </span>
              <span>Safe operations</span>
              <span aria-hidden="true" className="text-brand-400">
                |
              </span>
              <span>Maximum uptime</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Capability strip */}
      <section className="border-b border-mist-200 bg-mist-50">
        <Container className="py-8">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((item) => (
              <li key={item.label} className="flex flex-col items-center gap-2.5 text-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/30 text-brand-600">
                  <Icon name={item.icon} className="h-5.5 w-5.5" />
                </span>
                <span className="font-display text-[11px] font-bold uppercase leading-tight tracking-[0.1em] text-navy-800">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Brands */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our products"
            title="Two trusted brands, one measurement partner"
            lead="Everything a vessel measures — pressure, temperature, level and flow — from brands built for marine duty and backed by regional support."
          />

          <div className="mt-14 space-y-16">
            {brands.map((brand, index) => (
              <div
                key={brand.slug}
                id={brand.slug}
                className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14"
              >
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-xl bg-navy-950 shadow-lift">
                    <Image
                      src={brand.image}
                      alt={brand.imageAlt}
                      width={brand.imageWidth}
                      height={brand.imageHeight}
                      sizes="(min-width: 1024px) 460px, (min-width: 640px) 90vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt}
                    width={760}
                    height={261}
                    sizes="240px"
                    className="h-14 w-auto"
                  />
                  <p className="mt-5 text-pretty text-[17px] leading-relaxed text-navy-800/80">
                    {brand.intro}
                  </p>

                  <div className="mt-8 space-y-4">
                    {brand.categories.map((cat) => (
                      <div
                        key={cat.title}
                        className="flex gap-4 rounded-lg border border-mist-200 bg-mist-50/60 p-5"
                      >
                        <IconBadge name={cat.icon} />
                        <div>
                          <h3 className="font-display text-base font-bold text-navy-900">
                            {cat.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-navy-800/70">{cat.body}</p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {cat.items.map((item) => (
                              <li
                                key={item}
                                className="rounded border border-mist-300 bg-white px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-brand-700"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/products#${brand.slug}`}
                    className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold text-brand-600 hover:text-brand-700"
                  >
                    See the full {brand.name} range
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-mist-50 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Key benefits"
            title="Why operators specify these instruments"
            lead="Measurement that holds up to salt air, vibration and continuous duty — and to the scrutiny that follows a disputed figure."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <Card className="h-full hover:shadow-lift">
                  <IconBadge name={benefit.icon} />
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{benefit.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-800/70">{benefit.body}</p>
                </Card>
              </li>
            ))}
            <li>
              <div className="flex h-full flex-col justify-between rounded-xl bg-navy-900 p-6 text-white shadow-card">
                <div>
                  <IconBadge name="order" tone="light" />
                  <h3 className="mt-5 font-display text-lg font-bold">Order to delivery in 14 days</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist-200/85">
                    Fast, reliable and on time — from confirmed order to delivered instrument.
                  </p>
                </div>
                <Link
                  href="/about#delivery"
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-brand-400 hover:text-white"
                >
                  How it works
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Proven marine applications"
                title="Measured on deck, in the engine room and at the manifold"
                lead="From cargo transfer on a chemical tanker to fuel consumption on an auxiliary engine, these instruments are already doing the job at sea."
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Image
                  src="/img/manifold-deck.webp"
                  alt="Cargo manifold pipework running along a tanker deck"
                  width={634}
                  height={632}
                  sizes="(min-width: 1024px) 230px, 45vw"
                  className="h-44 w-full rounded-lg object-cover shadow-card"
                />
                <Image
                  src="/img/jetty-sunset.webp"
                  alt="Loading jetty pipework at sunset"
                  width={610}
                  height={632}
                  sizes="(min-width: 1024px) 230px, 45vw"
                  className="h-44 w-full rounded-lg object-cover shadow-card"
                />
              </div>
              <Button href="/applications" variant="primary" icon="arrow" className="mt-8">
                All applications
              </Button>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {applications.map((app) => (
                  <li
                    key={app.title}
                    className="rounded-lg border border-mist-200 p-5 transition-colors hover:border-brand-400 hover:bg-mist-50"
                  >
                    <Icon name={app.icon} className="h-7 w-7 text-brand-600" />
                    <h3 className="mt-3.5 font-display text-[15px] font-bold leading-snug text-navy-900">
                      {app.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-800/65">{app.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Delivery + trust */}
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Order to delivery"
                tone="light"
                title={
                  <>
                    <span className="text-brand-400">14 days</span> from confirmed order to delivery
                  </>
                }
                lead="Fast, reliable, on time. Four steps, no surprises — so planned maintenance and dry dock windows hold."
              />
              <ol className="mt-10 grid gap-5 sm:grid-cols-2">
                {deliverySteps.map((step, i) => (
                  <li key={step.title} className="rounded-lg border border-white/12 bg-white/[0.04] p-5">
                    <div className="flex items-center gap-3">
                      <IconBadge name={step.icon} tone="light" />
                      <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-400">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist-200/75">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/12 bg-white/[0.04] p-7">
                <p className="eyebrow text-brand-400">Trusted by industry leaders</p>
                <p className="mt-4 text-pretty leading-relaxed text-mist-200">
                  Supplied to leading shipowners, operators and energy companies — including{" "}
                  {customers.slice(0, -1).join(", ")} and {customers.at(-1)} — and many more.
                </p>
                <ul className="mt-7 space-y-3.5">
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

              <div className="mt-5 overflow-hidden rounded-xl">
                <Image
                  src="/img/tanker.webp"
                  alt="Loaded product tanker under way at sunset"
                  width={756}
                  height={353}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="h-52 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
