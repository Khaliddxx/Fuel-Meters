import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-navy-950">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow text-brand-400">404</p>
        <h1 className="mt-4 text-balance text-3xl font-extrabold text-white sm:text-4xl">
          That page is not on our charts
        </h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-mist-200">
          The page you were looking for has moved or never existed. Head back to the home page or
          get in touch and we will point you the right way.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="secondary" icon="arrow">
            Back to home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
