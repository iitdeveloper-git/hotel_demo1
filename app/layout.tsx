import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { StructuredData } from "@/components/schema";
import { hotel } from "@/lib/hotel-data";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: `${hotel.name} | Luxury Oceanfront Hotel`,
    template: `%s | ${hotel.name}`
  },
  description: "A cinematic luxury hotel website for oceanfront suites, fine dining, spa rituals, weddings, conferences, and private coastal escapes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${hotel.name} | Experience Timeless Luxury`,
    description: hotel.tagline,
    url: absoluteUrl(),
    siteName: hotel.name,
    images: [{ url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${hotel.name} | Luxury Oceanfront Hotel`,
    description: hotel.tagline
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#273127"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body id="top">
        <MotionProvider />
        <Navbar />
        {children}
        <Footer />
        <StructuredData />
        <div className="noise" />
      </body>
    </html>
  );
}
