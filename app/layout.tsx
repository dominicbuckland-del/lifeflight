import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LifeFlight — Every Second Counts",
  description:
    "Queensland's largest aeromedical service. When every second counts, LifeFlight delivers critical care from the sky. 45 years of saving lives.",
  openGraph: {
    title: "LifeFlight — Every Second Counts",
    description: "Queensland's largest aeromedical service. Critical care from the sky.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
