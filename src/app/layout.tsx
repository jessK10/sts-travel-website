import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "STS – Sarika's Travel Solutions | We Plan Your Memories",
    template: "%s | STS – Sarika's Travel Solutions",
  },
  description:
    "Discover unforgettable travel experiences with STS – Sarika's Travel Solutions. We craft personalized journeys for honeymoons, family holidays, luxury escapes, corporate travel, and adventure trips.",
  keywords: [
    "travel agency",
    "travel solutions",
    "honeymoon packages",
    "family holidays",
    "luxury travel",
    "corporate travel",
    "adventure travel",
    "personalized travel",
  ],
  openGraph: {
    title: "STS – Sarika's Travel Solutions",
    description: "We plan your memories — premium travel experiences crafted just for you.",
    type: "website",
    locale: "en_US",
    siteName: "STS – Sarika's Travel Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
