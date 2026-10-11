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

function buildMailto(f: Fields) {
  const subject = f.interest
    ? `Enquiry: ${f.interest}${f.company ? ` — ${f.company}` : ""}`
    : `Website enquiry${f.company ? ` — ${f.company}` : ""}`;

  const lines = [
    f.message.trim(),
    "",
    "—",
    `Name: ${f.name}`,
    f.company && `Company: ${f.company}`,
    `Email: ${f.email}`,
    f.phone && `Phone: ${f.phone}`,
    f.vessel && `Vessel / fleet: ${f.vessel}`,
    f.interest && `Interested in: ${f.interest}`,
    "",
    "Sent from fuel-meters.com",
  ].filter(Boolean) as string[];

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

const labelClass = "block font-display text-[13px] font-bold tracking-wide text-navy-900";
const fieldClass =
  "mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-[15px] text-navy-900 placeholder:text-navy-800/40 transition-colors focus:border-brand-500 focus:outline-none focus-visible:outline-none";

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;
    window.location.href = buildMailto(fields);
    setSent(true);
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

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 font-display text-sm font-bold text-white transition-colors hover:bg-brand-700 sm:w-auto"
      >
        <Icon name="mail" className="h-4 w-4" />
        Send enquiry
      </button>

      <p className="text-sm leading-relaxed text-navy-800/65">
        This opens your email app with the message ready to send to{" "}
        <a href={`mailto:${contact.email}`} className="font-semibold text-brand-600 underline underline-offset-2">
          {contact.email}
        </a>
        . Prefer to write it yourself? Email or call {contact.name} on{" "}
        <a href={`tel:${contact.phoneHref}`} className="font-semibold text-brand-600 underline underline-offset-2">
          {contact.phone}
        </a>
        .
      </p>

      {sent ? (
        <div
          role="status"
          className="flex items-start gap-3 rounded-md border border-brand-500/30 bg-mist-50 p-4 text-sm text-navy-900"
        >
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <span>
            Your email app should now be open with the enquiry drafted. If nothing happened, send it
            directly to{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-brand-600 underline underline-offset-2">
              {contact.email}
            </a>
            .
          </span>
        </div>
      ) : null}
    </form>
  );
}
