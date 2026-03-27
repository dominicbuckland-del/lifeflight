import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "LifeFlight Queensland Mission Report",
  description:
    "Find out how many times LifeFlight flew near your home this year.",
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
