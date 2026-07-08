import type { Metadata } from "next";
import { Poppins, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const brandSans = Poppins({
  variable: "--font-brandsans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://arambhservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arambh Advisory · Registration, Compliance & Funding for Indian Founders",
    template: "%s · Arambh Advisory",
  },
  description:
    "Arambh Advisory Services LLP is the boutique Ahmedabad advisory that takes founders from idea to incorporated, and everything after. Company registration, GST and tax compliance, Startup India and DPIIT recognition, collateral-free funding, digital presence and strategy. One advisor. One number. Zero surprises.",
  keywords: [
    "business registration Ahmedabad",
    "company incorporation India",
    "GST registration",
    "Startup India",
    "DPIIT recognition",
    "MSME funding",
    "CGTMSE",
    "Mudra loan",
    "LLP registration",
    "startup consultant Gujarat",
    "business advisory Ahmedabad",
  ],
  authors: [{ name: "Arambh Advisory Services LLP" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Arambh Advisory Services LLP",
    title: "Arambh Advisory · From Registration to Revenue",
    description:
      "From idea to incorporated, and everything after. One advisor who knows your file, keeps the date, and stays on as you grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arambh Advisory · From Registration to Revenue",
    description:
      "The boutique advisory that picks up the phone, keeps the date, and stays until you are growing.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${brandSans.variable} ${inter.variable} ${instrument.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
