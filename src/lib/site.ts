export const site = {
  name: "Fuel-Meters",
  domain: "fuel-meters.com",
  url: "https://fuel-meters.com",
  tagline: "Trusted brands. Superior solutions.",
  description:
    "PETROL Instruments positive displacement flowmeters and AQUAMETRO flow measurement solutions for vessel and tanker operations. Custody transfer accuracy, supplied and supported across Malaysia and South East Asia.",
} as const;

export const contact = {
  name: "Mike Garwood",
  role: "Regional Manager — Malaysia",
  email: "mike@fuel-meters.com",
  phone: "+60 12 444 7347",
  phoneHref: "+60124447347",
  whatsapp: "60124447347",
  region: "Malaysia & South East Asia",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const benefits = [
  {
    icon: "shield",
    title: "Enhanced safety",
    body: "Accurate, repeatable measurement to prevent overfills, leaks and operational risk during transfer.",
  },
  {
    icon: "gear",
    title: "Improved efficiency",
    body: "Real-time data for better decision making and smoother operations.",
  },
  {
    icon: "stopwatch",
    title: "No wear by design",
    body: "Floating rotors never touch each other or the measuring chamber, so accuracy does not drift with service hours.",
  },
  {
    icon: "wrench",
    title: "Serviceable in place",
    body: "The double case lets the measuring unit come out for checking without dismounting the meter from the line.",
  },
  {
    icon: "globe",
    title: "Global support",
    body: "Backed by experienced teams and trusted partners worldwide.",
  },
] as const;

export type Brand = {
  slug: "petrol" | "aquametro";
  name: string;
  strapline: string;
  logo: string;
  logoAlt: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  intro: string;
  categories: {
    icon: string;
    title: string;
    items: string[];
    body: string;
  }[];
};

export const brands: Brand[] = [
  {
    slug: "petrol",
    name: "PETROL",
    strapline: "PD Flowmeters since 1970",
    logo: "/img/logo-petrol.png",
    logoAlt: "PETROL Instruments — positive displacement flowmeters since 1970",
    image: "/img/petrol-double-case.webp",
    imageWidth: 900,
    imageHeight: 1051,
    imageAlt:
      "PETROL Instruments double case positive displacement flowmeter with digital transmitter",
    intro:
      "Italian-built positive displacement flowmeters for custody transfer and fiscal measurement. Floating rotors that never touch, magnetic transmission and a double case you can service without breaking the line — accurate to ±0.15% on fiscal duty and ±0.02% repeatable.",
    categories: [
      {
        icon: "flow",
        title: "Double case PD flowmeters",
        items: ["1\" to 16\"", "Up to 2,000 m³/h", "150 bar", "250 °C"],
        body: "The flagship meter for custody transfer and crude oil. The measuring unit lifts out for recalibration without dismounting the meter from the line, and handles viscosities to 50,000 cP.",
      },
      {
        icon: "gauge",
        title: "Single case PD flowmeters",
        items: ["1\" to 4\"", "10 bar", "100 °C", "Pocketless option"],
        body: "The compact version of the same measuring principle for lighter duty — no upstream or downstream straight pipe runs needed, so it fits where space is tight.",
      },
      {
        icon: "controller",
        title: "Counters & transmitters",
        items: ["Mechanical", "Preset batch", "Electronic fiscal", "HART"],
        body: "Mechanical totalisers through to intrinsically safe and explosion proof digital indicators with pulse or 4–20 mA output, preset batch control and ticket printing.",
      },
      {
        icon: "level",
        title: "Master meters & tank provers",
        items: ["±0.1% master meters", "50 to 10,000 litres", "Portable 4\""],
        body: "Reference meters and provers legalised by the Italian Metric Office, so the accuracy of a working meter can be proven on site rather than argued about.",
      },
      {
        icon: "wrench",
        title: "Strainers & control valves",
        items: ["0.5\" to 16\"", "40/80/200 mesh", "Batch control"],
        body: "Basket strainers that keep debris out of the measuring chamber, and balanced piston control valves for precise flowrate and batch control at up to 40 bar.",
      },
    ],
  },
  {
    slug: "aquametro",
    name: "AQUAMETRO",
    strapline: "Flow Measurement Solutions",
    logo: "/img/logo-aquametro.png",
    logoAlt: "AQUAMETRO — flow measurement solutions",
    image: "/img/aquametro-products.webp",
    imageWidth: 1000,
    imageHeight: 1214,
    imageAlt:
      "AQUAMETRO flow computer, electromagnetic flow meter and compact flow meter with digital displays",
    intro:
      "Electronic flow metering, totalising and batch control for fuel, oil, water and process media — the measurement layer behind bunkering, cargo transfer and fuel management.",
    categories: [
      {
        icon: "flow",
        title: "Flow meters",
        items: ["Electromagnetic", "Ultrasonic", "Turbine", "Coriolis"],
        body: "A measuring principle for every duty: conductive liquids, clean hydrocarbons, viscous fuels and mass-based custody measurement.",
      },
      {
        icon: "controller",
        title: "Totalisers & controllers",
        items: ["Batch control", "Data logging", "Alarms"],
        body: "Local and remote totalising, batch control for transfer operations, logged consumption data and configurable alarms for abnormal flow.",
      },
      {
        icon: "droplet",
        title: "Specialist solutions",
        items: ["Fuel & oil", "Water & wastewater", "Chemical & petrochemical"],
        body: "Application-engineered packages for bunker measurement, engine fuel consumption, fresh and waste water, and aggressive chemical service.",
      },
    ],
  },
];

export const applications = [
  {
    icon: "tanker",
    title: "Oil & chemical tankers",
    body: "Cargo line pressure and temperature, tank level and transfer metering across loading, discharge and tank cleaning operations.",
  },
  {
    icon: "lng",
    title: "LNG / LPG carriers",
    body: "Instrumentation for cargo handling and utility systems on gas carriers, where measurement integrity is part of the safety case.",
  },
  {
    icon: "bunker",
    title: "Bunkering operations",
    body: "Flow meters and totalisers that give both parties a defensible number on every bunker delivery and barge transfer.",
  },
  {
    icon: "offshore",
    title: "Offshore support vessels",
    body: "Measurement for fuel, bulk and liquid mud systems on OSVs, PSVs and AHTS vessels working to offshore duty cycles.",
  },
  {
    icon: "fleet",
    title: "Fleet monitoring & fuel management",
    body: "Consumption data from engines and generators, logged and reported, so technical teams can see true performance across a fleet.",
  },
  {
    icon: "transfer",
    title: "Cargo transfer & metering",
    body: "Batch control and totalising for ship-to-ship, ship-to-shore and internal transfers, with alarms on abnormal flow.",
  },
  {
    icon: "engine",
    title: "Engine room fuel measurement",
    body: "Main engine, auxiliary and boiler fuel measurement, including viscous heavy fuel oil and mass-based consumption figures.",
  },
  {
    icon: "process",
    title: "Process & utility systems",
    body: "Fresh water, ballast, cooling, steam and compressed air services — the everyday systems that keep a vessel operational.",
  },
] as const;

export const deliverySteps = [
  { icon: "order", title: "Order confirmed", body: "Specification agreed and order placed." },
  { icon: "production", title: "Production & testing", body: "Built, calibrated and tested to specification." },
  { icon: "shipping", title: "Shipping", body: "Documentation prepared and goods dispatched." },
  { icon: "delivery", title: "Delivery", body: "Delivered within 14 days of order confirmation." },
] as const;

export const credentials = [
  "Proven performance in demanding marine applications",
  "Supplied to leading shipowners, operators and energy companies",
  "Reliable, accurate data for operational efficiency",
  "Long-term partnerships and global support",
] as const;

export const customers = ["Shell", "OSM Thome", "ADNOC Logistics & Services"] as const;

export const productInterests = [
  "PD flowmeters — custody transfer & fiscal",
  "Electronic flow meters",
  "Master meters & tank provers",
  "Counters, transmitters & batch control",
  "Strainers & control valves",
  "Fuel consumption / bunker metering",
  "Calibration, spares or service",
  "Something else",
] as const;

/** Fiscal and quality approvals that matter when a meter has to stand up in a dispute. */
export const approvals = {
  fiscal: [
    { region: "Malaysia", body: "NMIM / SIRIM" },
    { region: "Indonesia", body: "MIGAS" },
    { region: "Europe", body: "MID / WELMEC" },
    { region: "Nigeria", body: "DPR" },
    { region: "China", body: "AQSIC (PAC)" },
    { region: "Russia", body: "Metrological Approval" },
    { region: "Greece", body: "Hellenic Metrology" },
    { region: "Kazakhstan", body: "Pattern Approval" },
  ],
  standards: [
    "OIML R117",
    "API MPMS",
    "PED 2014/68/EU",
    "ATEX",
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "Lloyd's Register type approval",
  ],
} as const;

export const accuracy = [
  { value: "±0.15%", label: "Accuracy on fiscal applications" },
  { value: "±0.02%", label: "Repeatability" },
  { value: "2,000", label: "m³/h maximum flow rate" },
  { value: "1970", label: "Building PD flowmeters since" },
] as const;
