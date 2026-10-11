import Image from "next/image";
import { Container } from "./ui";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50"
      />
      <Container className="relative py-16 md:py-20">
        <p className="eyebrow text-brand-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-mist-200">{lead}</p>
      </Container>
    </section>
  );
}
