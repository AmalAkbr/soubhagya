import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soubhagya — Handcrafted Indian Textiles",
  description:
    "Soubhagya celebrates the timeless art of Indian handwoven textiles. Discover our curated collection of silk sarees, banarasi weaves, and heritage fabrics.",
  keywords: "silk saree, indian textiles, handloom, banarasi, kanjivaram, soubhagya",
  openGraph: {
    title: "Soubhagya — Handcrafted Indian Textiles",
    description: "Where tradition meets elegance. Discover the finest handwoven Indian textiles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
