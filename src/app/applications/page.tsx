import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Container, IconBadge, SectionHeading } from "@/components/ui";
import { applications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marine applications — tankers, bunkering, offshore and fleet",
  description:
    "Proven marine applications for BROSCO and AQUAMETRO instruments: oil and chemical tankers, LNG/LPG carriers, bunkering, offshore support vessels, fuel management, cargo transfer and engine room measurement.",
  alternates: { canonical: "/applications" },
};

const scenarios = [
  {
    icon: "bunker",
    title: "A bunker delivery both parties can sign",
    body: "Disputed bunker quantities cost money and goodwill. A calibrated flow meter with a sealed totaliser turns an argument into a reading — logged, timestamped and repeatable across every barge that comes alongside.",
  },
  {
    icon: "fleet",
    title: "Fuel consumption you can actually report",
    body: "Charter party and emissions reporting both rest on consumption figures. Metering at the engine and generator gives technical teams a defensible number instead of an estimate from soundings.",
  },
  {
    icon: "tanker",
    title: "Cargo operations without the guesswork",
    body: "Pressure at the manifold, temperature in the tank and continuous level through loading and discharge — so the deck crew sees the operation as it happens, not after the fact.",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proven marine applications"
        title="Where these instruments already work"
        lead="Tankers, gas carriers, bunker barges, offshore support vessels and the utility systems that keep all of them running."
        image="/img/jetty-sunset.webp"
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Application areas"
            title="Eight duties, one measurement partner"
            lead="Each of these has its own media, pressures and approvals. We specify to the duty rather than pushing a single product family at every problem."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app) => (
              <li
                key={app.title}
                className="flex h-full flex-col rounded-xl border border-mist-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <IconBadge name={app.icon} />
                <h2 className="mt-5 font-display text-base font-bold leading-snug text-navy-900">
                  {app.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{app.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist-50 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What good measurement buys you"
                title="The three questions that come up most"
              />
              <div className="mt-8 space-y-4">
                <Image
                  src="/img/manifold-deck.webp"
                  alt="Cargo manifold pipework running along a tanker deck"
                  width={634}
                  height={632}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="h-56 w-full rounded-xl object-cover shadow-card"
                />
                <Image
                  src="/img/tanker.webp"
                  alt="Loaded product tanker under way at sunset"
                  width={756}
                  height={353}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="h-44 w-full rounded-xl object-cover shadow-card"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5">
                {scenarios.map((s) => (
                  <article key={s.title} className="rounded-xl border border-mist-200 bg-white p-7 shadow-card">
                    <div className="flex items-start gap-4">
                      <IconBadge name={s.icon} />
                      <div>
                        <h3 className="font-display text-lg font-bold text-navy-900">{s.title}</h3>
                        <p className="mt-2 text-pretty leading-relaxed text-navy-800/75">{s.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-4 rounded-xl bg-navy-900 p-7 text-white">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-400 ring-1 ring-white/25">
                  <Icon name="wrench" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">Not sure which principle fits?</h3>
                  <p className="mt-2 leading-relaxed text-mist-200">
                    Electromagnetic, ultrasonic, turbine and Coriolis each have duties they suit and
                    duties they do not. Tell us the media, viscosity and line size and we will tell you
                    which one belongs there — and which one does not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Describe the duty and we will specify the instrument."
        lead="Media, line size, pressure, temperature, accuracy and approvals — send what you have and we will fill in the rest."
      />
    </>
  );
}
