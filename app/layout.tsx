import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trucking Insurance for New Authority & Owner Operators | GetBigRigInsurance",
    template: "%s | GetBigRigInsurance",
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    title: "Trucking Insurance for New Authority & Owner Operators",
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Trucking Insurance for New Authority & Owner Operators",
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2a",
  width: "device-width",
  initialScale: 1,
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: `+1-${site.phone}`,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "US",
  },
  areaServed: "United States",
  priceRange: "$$",
  sameAs: ["https://vantagepointrisk.com", "https://truckpolicy.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
        <JsonLd data={businessSchema} />
      </body>
    </html>
  );
}
