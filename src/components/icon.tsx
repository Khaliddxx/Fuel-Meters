type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3 4.5 6v6c0 4.2 3 7.8 7.5 9 4.5-1.2 7.5-4.8 7.5-9V6L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  gear: (
    <>
      <path d="M 18.53 8.96 L 21.65 9.77 L 21.65 14.23 L 18.53 15.04 L 18.77 14.46 L 20.40 17.25 L 17.25 20.40 L 14.46 18.77 L 15.04 18.53 L 14.23 21.65 L 9.77 21.65 L 8.96 18.53 L 9.54 18.77 L 6.75 20.40 L 3.60 17.25 L 5.23 14.46 L 5.47 15.04 L 2.35 14.23 L 2.35 9.77 L 5.47 8.96 L 5.23 9.54 L 3.60 6.75 L 6.75 3.60 L 9.54 5.23 L 8.96 5.47 L 9.77 2.35 L 14.23 2.35 L 15.04 5.47 L 14.46 5.23 L 17.25 3.60 L 20.40 6.75 L 18.77 9.54 Z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.3" />
    </>
  ),
  stopwatch: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 9.8v3.7l2.4 2.1M9.4 2.8h5.2M18.6 7.2l1.5-1.5" />
    </>
  ),
  wrench: (
    <path d="M20 5.6a4.8 4.8 0 0 1-6.3 6l-6.4 6.4a2 2 0 0 1-2.8-2.8l6.4-6.4a4.8 4.8 0 0 1 6-6.3l-3 3 2.1 2.1 3-3Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.6h17.6M3.2 14.4h17.6" />
      <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
    </>
  ),
  gauge: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 12 4.3-3.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <path d="M5.4 15.3 4 16M18.6 15.3 20 16M12 3v1.6" />
    </>
  ),
  thermometer: (
    <>
      <path d="M13.9 13.9V5.2a1.9 1.9 0 1 0-3.8 0v8.7a3.6 3.6 0 1 0 3.8 0Z" />
      <path d="M12 16.2v-5.4M16.4 7.2h2.6M16.4 10.4h2" />
    </>
  ),
  level: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2.2" />
      <path d="M4.4 12.8c1.6 0 1.6 1.6 3.2 1.6s1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 2.4 1.6" />
      <path d="M4.4 16.8c1.6 0 1.6 1.6 3.2 1.6s1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 2.4 1.6" />
    </>
  ),
  flow: (
    <>
      <path d="M2.6 12h3.2M18.2 12h3.2" />
      <rect x="5.8" y="7.6" width="12.4" height="8.8" rx="1.6" />
      <path d="m10 12 4.4 0M13 10.4 14.8 12 13 13.6" />
    </>
  ),
  controller: (
    <>
      <rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.2" />
      <rect x="6.6" y="7.6" width="10.8" height="5" rx="1" />
      <path d="M7.6 16.4h1.6M11.2 16.4h1.6M14.8 16.4h1.6" />
    </>
  ),
  droplet: <path d="M12 3.2c3.4 3.6 5.4 6.4 5.4 9a5.4 5.4 0 0 1-10.8 0c0-2.6 2-5.4 5.4-9Z" />,
  tanker: (
    <>
      <path d="M3 16.4h18l-1.8 4.2H4.8L3 16.4Z" />
      <path d="M5.6 16.4V11h12.8v5.4" />
      <path d="M8.4 11V8.2h3.2V11M15 11V9.2h2.2" />
    </>
  ),
  lng: (
    <>
      <path d="M2.8 17.2h18.4l-1.6 3.6H4.4l-1.6-3.6Z" />
      <path d="M5.2 17.2v-4.6h13.6v4.6" />
      <circle cx="9" cy="9.6" r="2.4" />
      <circle cx="15.4" cy="9.6" r="2.4" />
    </>
  ),
  bunker: (
    <>
      <path d="M2.8 17.4h18.4l-1.6 3.4H4.4l-1.6-3.4Z" />
      <path d="M5.4 17.4v-4.8h9.4v4.8" />
      <path d="M17.6 13.4V6.8l2.6 2.4v4.2M14.8 13.4h5.4" />
    </>
  ),
  offshore: (
    <>
      <path d="M2.8 19.6h18.4" />
      <path d="M6.4 19.6V10h11.2v9.6" />
      <path d="M9 10V5.4h6V10M12 5.4V2.8M8.4 13.6h7.2" />
    </>
  ),
  fleet: (
    <>
      <path d="M3 14.4a7.8 7.8 0 0 1 18 0" />
      <path d="M12 14.4 15.6 9" />
      <circle cx="12" cy="14.4" r="1.2" fill="currentColor" stroke="none" />
      <path d="M3 19.4h18" />
    </>
  ),
  transfer: (
    <>
      <path d="M4 8.6h12.4M13.6 5.8 16.4 8.6l-2.8 2.8" />
      <path d="M20 15.4H7.6M10.4 12.6 7.6 15.4l2.8 2.8" />
    </>
  ),
  engine: (
    <>
      <rect x="3.2" y="9" width="12.6" height="8.4" rx="1.6" />
      <path d="M15.8 12.2h2.4l2.6-2.4v7.6l-2.6-2.4h-2.4" />
      <path d="M6.6 9V6.4h5.4V9" />
    </>
  ),
  process: (
    <>
      <path d="M3.4 20.4V9.6L12 4.2l8.6 5.4v10.8" />
      <path d="M9 20.4v-5.2h6v5.2M9.6 10.6h4.8" />
    </>
  ),
  order: (
    <>
      <path d="M6 3.4h8.4L18.6 7v13.6H6V3.4Z" />
      <path d="M14 3.4V7.2h4.4M9 12h7M9 15.6h5" />
    </>
  ),
  production: (
    <>
      <path d="M4.2 20.4V11l5.1 3.2V11l5.1 3.2V5.6l5.4 3.4v11.4Z" />
      <path d="M2.8 20.4h18.4" />
    </>
  ),
  shipping: (
    <>
      <path d="m12 3 8.4 4.2v9.6L12 21l-8.4-4.2V7.2L12 3Z" />
      <path d="m3.6 7.2 8.4 4.2 8.4-4.2M12 11.4V21" />
    </>
  ),
  delivery: (
    <>
      <path d="M3 17.6h18l-1.8 3.8H4.8L3 17.6Z" />
      <path d="M5.8 17.6V9.4h12.4v8.2" />
      <path d="M9.4 9.4V5.8h5.2v3.6M12 2.6v3.2" />
    </>
  ),
  check: <path d="m5 12.6 4.4 4.4L19 7.4" />,
  whatsapp: (
    <>
      <path d="M3.4 20.6 4.7 16a8.3 8.3 0 1 1 3.3 3.3l-4.6 1.3Z" />
      <path d="M9.1 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.3 0 .5-.1.7l-.4.5c-.2.2-.3.4-.1.7a6.6 6.6 0 0 0 2.9 2.5c.3.1.5.1.7-.1l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5a1.8 1.8 0 0 1-1.8 1.7c-2.9 0-6.9-4-6.9-6.9a2 2 0 0 1 .1-.7Z" />
    </>
  ),
  copy: (
    <>
      <rect x="8.6" y="8.6" width="11.4" height="11.4" rx="2" />
      <path d="M15.4 5.6a2 2 0 0 0-2-1.6H6a2 2 0 0 0-2 2v7.4a2 2 0 0 0 1.6 2" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="m3.6 6.6 8.4 6.2 8.4-6.2" />
    </>
  ),
  phone: (
    <path d="M7.2 3.4 9.6 3l2 4.4-2 1.6a12.4 12.4 0 0 0 5.4 5.4l1.6-2 4.4 2-.4 2.4a2 2 0 0 1-2.2 1.8C12.2 18.2 5.8 11.8 5.4 5.6a2 2 0 0 1 1.8-2.2Z" />
  ),
  pin: (
    <>
      <path d="M12 21.2s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.6v11M7.8 10.6 12 14.8l4.2-4.2" />
      <path d="M4.4 19.4h15.2" />
    </>
  ),
  arrow: <path d="M4.6 12h14.2M13.8 7.2 18.6 12l-4.8 4.8" />,
};

export function Icon({ name, className }: IconProps) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {d}
    </svg>
  );
}
