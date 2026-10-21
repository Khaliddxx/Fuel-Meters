import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fuel-Meters — Marine measurement for vessel and tanker operations",
    template: "%s | Fuel-Meters",
  },
  description: site.description,
  keywords: [
    "marine flow meter",
    "positive displacement flowmeter",
    "custody transfer metering",
    "bunker metering",
    "fuel consumption meter",
    "fiscal flow meter",
    "PETROL Instruments",
    "AQUAMETRO",
    "Malaysia",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Marine measurement for vessel and tanker operations",
    description: site.description,
    images: [{ url: "/img/hero-tankers.webp", width: 2400, height: 1029, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel-Meters — Marine measurement for vessel and tanker operations",
    description: site.description,
    images: ["/img/hero-tankers.webp"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2.5 focus:font-display focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
