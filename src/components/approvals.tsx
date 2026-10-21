import { approvals } from "@/lib/site";
import { Icon } from "./icon";
import { Container, SectionHeading } from "./ui";

export function Approvals() {
  return (
    <section className="border-y border-mist-200 bg-mist-50 py-20 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Approvals & calibration"
              title="Measurement that stands up in a dispute"
              lead="A number is only worth what the approval behind it is worth. PETROL Instruments meters are pattern-approved for fiscal use in the markets our customers trade in, and every meter is calibrated before it ships."
            />
            <div className="mt-8 rounded-xl border border-mist-200 bg-white p-6 shadow-card">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-600">
                  <Icon name="gauge" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Calibrated against certified provers
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                    The factory calibration laboratory runs four tank provers — 10,000, 5,000,
                    1,000 and 100 litres — attested by the Italian Metric Office. Every meter is
                    proven there before delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-900">
              Fiscal &amp; custody transfer approvals
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {approvals.fiscal.map((item) => (
                <li
                  key={item.region}
                  className="rounded-lg border border-mist-200 bg-white px-4 py-3.5 text-center shadow-card"
                >
                  <span className="block font-display text-[13px] font-bold text-navy-900">
                    {item.region}
                  </span>
                  <span className="mt-1 block text-[11px] leading-tight text-navy-800/60">
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-900">
              Standards &amp; certification
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {approvals.standards.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-md border border-mist-300 bg-white px-3 py-2 font-display text-[12px] font-bold text-brand-700"
                >
                  <Icon name="check" className="h-3.5 w-3.5 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-navy-800/65">
              Approvals vary by model and configuration. Tell us which authority the measurement
              has to satisfy and we will confirm what is certified for that duty.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
