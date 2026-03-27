import type { Metadata, Viewport } from "next";
import { Roboto, Mulish } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-mulish",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "LifeFlight Queensland Mission Report",
  description:
    "Find out how many times LifeFlight flew near your home this year.",
  openGraph: {
    title: "LifeFlight Queensland Mission Report",
    description:
      "Enter your postcode and see how many LifeFlight rescue missions flew near your home in 2025.",
    siteName: "LifeFlight Queensland",
    type: "website",
    url: "https://lifeflight.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeFlight Queensland Mission Report",
    description:
      "Enter your postcode and see how many LifeFlight rescue missions flew near your home in 2025.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${mulish.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
