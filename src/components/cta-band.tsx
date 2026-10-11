import { contact } from "@/lib/site";
import { Icon } from "./icon";
import { Button, Container } from "./ui";

export function CtaBand({
  title = "Tell us the application — we will specify the instrument.",
  lead = "Send the media, line size, pressure and temperature range and we will come back with a specification and a quotation.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-navy-900">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-brand-400">Contact us today</p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist-200">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="secondary" icon="arrow">
                Request a quotation
              </Button>
              <Button href={`mailto:${contact.email}`} variant="ghost" icon="mail">
                Email {contact.name.split(" ")[0]}
              </Button>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-xl border border-white/15 bg-white/[0.06] p-6">
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-400">
                Regional contact
              </p>
              <p className="mt-4 font-display text-xl font-extrabold text-white">{contact.name}</p>
              <p className="text-sm text-mist-200/75">{contact.role}</p>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-mist-200 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-400" />
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-3 text-mist-200 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-400" />
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
