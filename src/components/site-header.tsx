"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/site";
import { Icon } from "./icon";
import { Container } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="hidden bg-navy-900 text-white md:block">
        <Container className="flex h-9 items-center justify-between text-[13px]">
          <p className="text-mist-200">
            {contact.role.replace("—", "·")} · Sales, service and technical support
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${contact.phoneHref}`} className="inline-flex items-center gap-1.5 hover:text-brand-400">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1.5 hover:text-brand-400">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {contact.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Fuel-Meters home">
          <Image
            src="/img/logo-petrol.png"
            alt="PETROL Instruments"
            width={900}
            height={236}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span aria-hidden="true" className="h-8 w-px bg-mist-300" />
          <Image
            src="/img/logo-aquametro.png"
            alt="AQUAMETRO"
            width={760}
            height={248}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3.5 py-2 font-display text-sm font-semibold transition-colors ${
                  active ? "text-brand-600" : "text-navy-800 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-brand-700"
          >
            Request a quote
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-mist-200 text-navy-800 lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-mist-200 bg-white lg:hidden">
          <Container className="py-3">
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`border-b border-mist-100 py-3.5 font-display text-base font-semibold ${
                      active ? "text-brand-600" : "text-navy-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex flex-col gap-2 pb-2">
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-navy-800"
              >
                <Icon name="phone" className="h-4 w-4 text-brand-600" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-navy-800"
              >
                <Icon name="mail" className="h-4 w-4 text-brand-600" />
                {contact.email}
              </a>
              <Link
                href="/contact"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 font-display text-sm font-bold text-white"
              >
                Request a quote
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
