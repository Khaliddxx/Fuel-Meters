export const site = {
  name: "Fuel-Meters",
  domain: "fuel-meters.com",
  url: "https://fuel-meters.com",
  tagline: "Trusted brands. Superior solutions.",
  description:
    "BROSCO pressure, temperature and level instruments and AQUAMETRO flow measurement solutions for vessel and tanker operations. Supplied and supported across Malaysia and South East Asia.",
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
    body: "Accurate and reliable measurement to prevent overfills, leaks and operational risks.",
  },
  {
    icon: "gear",
    title: "Improved efficiency",
    body: "Real-time data for better decision making and smoother operations.",
  },
  {
    icon: "stopwatch",
    title: "Rugged & reliable",
    body: "Designed for demanding marine environments with long service life.",
  },
  {
    icon: "wrench",
    title: "Low maintenance",
    body: "Robust design reduces downtime and total cost of ownership.",
  },
  {
    icon: "globe",
    title: "Global support",
    body: "Backed by experienced teams and trusted partners worldwide.",
  },
] as const;

export type Brand = {
  slug: "brosco" | "aquametro";
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
    slug: "brosco",
    name: "BROSCO",
    strapline: "Pressure | Temperature | Level",
    logo: "/img/logo-brosco.png",
    logoAlt: "BROSCO — pressure, temperature and level instrumentation",
    image: "/img/brosco-products.webp",
    imageWidth: 1000,
    imageHeight: 1282,
    imageAlt:
      "BROSCO pressure transmitter, bourdon tube pressure gauge, bimetal temperature gauge and thermowell on a vessel deck",
    intro:
      "Mechanical and digital instrumentation for pressure, temperature and level — built for the vibration, salt air and duty cycles of life at sea.",
    categories: [
      {
        icon: "gauge",
        title: "Pressure gauges",
        items: ["Bourdon tube", "Diaphragm", "Digital"],
        body: "Dial and digital pressure instruments for cargo lines, ballast systems, engine room services and hydraulic circuits, with liquid-filled options for high-vibration mounting.",
      },
      {
        icon: "thermometer",
        title: "Temperature instruments",
        items: ["RTDs", "Thermocouples", "Bimetal"],
        body: "Sensors, thermowells and local indication for fuel, lube oil, cooling water and cargo temperature monitoring across the vessel.",
      },
      {
        icon: "level",
        title: "Level measurement",
        items: ["Radar", "Guided wave", "Ultrasonic"],
        body: "Continuous level measurement for cargo, bunker, ballast and service tanks — non-contact and guided wave options for difficult media.",
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
      "Flow metering, totalising and batch control for fuel, oil, water and process media — the measurement layer behind bunkering, cargo transfer and fuel management.",
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
  "Pressure gauges & transmitters",
  "Temperature instruments",
  "Level measurement",
  "Flow meters",
  "Totalisers & batch controllers",
  "Fuel consumption / bunker metering",
  "Spares, service or calibration",
  "Something else",
] as const;
