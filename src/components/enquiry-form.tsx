"use client";

import { useRef, useState } from "react";
import { contact, productInterests } from "@/lib/site";
import { Icon } from "./icon";

const MESSAGE_MAX = 1200;

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  vessel: string;
  interest: string;
  message: string;
};

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  vessel: "",
  interest: "",
  message: "",
};

function subjectFor(f: Fields) {
  const suffix = f.company ? ` — ${f.company}` : "";
  return f.interest ? `Enquiry: ${f.interest}${suffix}` : `Website enquiry${suffix}`;
}

/** The enquiry as plain text, used for email, WhatsApp and clipboard alike. */
function bodyFor(f: Fields) {
  // null drops an unfilled optional field; "" is a deliberate blank line.
  const optional = (label: string, value: string) => (value ? `${label}: ${value}` : null);
  const lines: (string | null)[] = [
    f.message.trim(),
    "",
    "—",
    `Name: ${f.name}`,
    optional("Company", f.company),
    `Email: ${f.email}`,
    optional("Phone", f.phone),
    optional("Vessel / fleet", f.vessel),
    optional("Interested in", f.interest),
    "",
    "Sent from fuel-meters.com",
  ];
  return lines.filter((line) => line !== null).join("\n");
}

function mailtoFor(f: Fields) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subjectFor(f))}&body=${encodeURIComponent(bodyFor(f))}`;
}

function whatsappFor(f: Fields) {
  const text = `${subjectFor(f)}\n\n${bodyFor(f)}`;
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

const labelClass = "block font-display text-[13px] font-bold tracking-wide text-navy-900";
const fieldClass =
  "mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-[15px] text-navy-900 placeholder:text-navy-800/40 transition-colors focus:border-brand-500 focus:outline-none focus-visible:outline-none";

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [handedOff, setHandedOff] = useState<null | "email" | "whatsapp">(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  /** Run native validation before handing the enquiry to any external app. */
  const validate = () => formRef.current?.reportValidity() ?? false;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    // The mail client may silently fail to open (common with browser-based
    // webmail), so the fallback panel is shown either way.
    window.location.href = mailtoFor(fields);
    setHandedOff("email");
  }

  function handleWhatsApp() {
    if (!validate()) return;
    window.open(whatsappFor(fields), "_blank", "noopener,noreferrer");
    setHandedOff("whatsapp");
  }

  async function handleCopy() {
    const text = `To: ${contact.email}\nSubject: ${subjectFor(fields)}\n\n${bodyFor(fields)}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    } catch {
      // Clipboard can be blocked; the enquiry stays on screen to copy by hand.
      setCopied(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            className={fieldClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={fields.company}
            onChange={set("company")}
            className={fieldClass}
            placeholder="Shipowner, operator or yard"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={set("phone")}
            className={fieldClass}
            placeholder="+60 ..."
          />
        </div>
        <div>
          <label htmlFor="vessel" className={labelClass}>
            Vessel or fleet
          </label>
          <input
            id="vessel"
            name="vessel"
            value={fields.vessel}
            onChange={set("vessel")}
            className={fieldClass}
            placeholder="Vessel name, type or fleet size"
          />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>
            I&rsquo;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={set("interest")}
            className={`${fieldClass} appearance-none bg-[length:18px] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23014a8f' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select a category</option>
            {productInterests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={MESSAGE_MAX}
          value={fields.message}
          onChange={set("message")}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us the application, media, line size, pressure and temperature range, and quantities if you have them."
        />
        <p className="mt-2 text-right text-xs text-navy-800/50">
          {fields.message.length}/{MESSAGE_MAX}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 font-display text-sm font-bold text-white transition-colors hover:bg-brand-700"
        >
          <Icon name="mail" className="h-4 w-4" />
          Send by email
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 font-display text-sm font-bold text-white transition-colors hover:bg-navy-800"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Send on WhatsApp
        </button>
      </div>

      <p className="text-sm leading-relaxed text-navy-800/65">
        Both options open the enquiry ready to send — nothing is submitted until you send it. You
        can also write to{" "}
        <a
          href={`mailto:${contact.email}`}
          className="font-semibold text-brand-600 underline underline-offset-2"
        >
          {contact.email}
        </a>{" "}
        or call {contact.name.split(" ")[0]} on{" "}
        <a
          href={`tel:${contact.phoneHref}`}
          className="font-semibold text-brand-600 underline underline-offset-2"
        >
          {contact.phone}
        </a>
        .
      </p>

      {handedOff ? (
        <div
          role="status"
          className="rounded-lg border border-brand-500/30 bg-mist-50 p-5 text-sm text-navy-900"
        >
          <p className="flex items-start gap-3 font-semibold">
            <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            {handedOff === "email"
              ? "Your email app should have opened with the enquiry ready to send."
              : "WhatsApp should have opened with the enquiry ready to send."}
          </p>
          <p className="mt-3 leading-relaxed text-navy-800/75">
            Nothing happened?{" "}
            {handedOff === "email"
              ? "That happens when the browser has no mail app set up — common with webmail like Gmail."
              : "That happens if WhatsApp is not installed or the pop-up was blocked."}{" "}
            Copy the enquiry and send it yourself, or reach {contact.name.split(" ")[0]} directly.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md border border-mist-300 bg-white px-4 py-2.5 font-display text-[13px] font-bold text-navy-900 transition-colors hover:border-brand-500"
            >
              <Icon name={copied ? "check" : "copy"} className="h-4 w-4 text-brand-600" />
              {copied ? "Copied to clipboard" : "Copy enquiry"}
            </button>
            {handedOff === "email" ? (
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 rounded-md border border-mist-300 bg-white px-4 py-2.5 font-display text-[13px] font-bold text-navy-900 transition-colors hover:border-brand-500"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-brand-600" />
                Try WhatsApp instead
              </button>
            ) : (
              <a
                href={mailtoFor(fields)}
                className="inline-flex items-center gap-2 rounded-md border border-mist-300 bg-white px-4 py-2.5 font-display text-[13px] font-bold text-navy-900 transition-colors hover:border-brand-500"
              >
                <Icon name="mail" className="h-4 w-4 text-brand-600" />
                Try email instead
              </a>
            )}
            <a
              href={`tel:${contact.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-md border border-mist-300 bg-white px-4 py-2.5 font-display text-[13px] font-bold text-navy-900 transition-colors hover:border-brand-500"
            >
              <Icon name="phone" className="h-4 w-4 text-brand-600" />
              {contact.phone}
            </a>
          </div>

          <details className="mt-4">
            <summary className="cursor-pointer font-display text-[13px] font-bold text-brand-600">
              Show the enquiry text
            </summary>
            <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap rounded-md border border-mist-200 bg-white p-4 font-sans text-[13px] leading-relaxed text-navy-800">
              {`To: ${contact.email}\nSubject: ${subjectFor(fields)}\n\n${bodyFor(fields)}`}
            </pre>
          </details>
        </div>
      ) : null}
    </form>
  );
}
