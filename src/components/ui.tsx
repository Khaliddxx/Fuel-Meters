import Link from "next/link";
import { Icon } from "./icon";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "light" }) {
  return (
    <p className={`eyebrow ${tone === "light" ? "text-brand-400" : "text-brand-600"}`}>
      <span className="inline-flex items-center gap-2.5">
        <span aria-hidden="true" className="h-px w-7 bg-current opacity-60" />
        {children}
      </span>
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const light = tone === "light";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow tone={light ? "light" : "brand"}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 text-balance text-3xl font-extrabold leading-[1.12] sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-4 text-pretty text-[17px] leading-relaxed ${light ? "text-mist-200" : "text-navy-800/75"}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: string;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-display text-sm font-bold tracking-wide transition-colors duration-150";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-white text-navy-900 hover:bg-mist-100",
  ghost: "border border-white/35 text-white hover:border-white hover:bg-white/10",
} as const;

export function Button({ href, children, variant = "primary", icon, className = "", ...rest }: ButtonProps) {
  const content = (
    <>
      {children}
      {icon ? <Icon name={icon} className="h-4 w-4 shrink-0" /> : null}
    </>
  );
  const classes = `${buttonBase} ${variants[variant]} ${className}`;

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-mist-200 bg-white p-6 shadow-card transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ name, tone = "brand" }: { name: string; tone?: "brand" | "light" | "solid" }) {
  const tones = {
    brand: "bg-mist-100 text-brand-600",
    light: "bg-white/10 text-white ring-1 ring-white/25",
    solid: "bg-brand-600 text-white",
  } as const;
  return (
    <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${tones[tone]}`}>
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
