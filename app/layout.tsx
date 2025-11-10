import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oak & Kin Crest",
  description: "A bespoke family logo featuring an oak acorn motif."
};

const displayFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={displayFont.variable}>{children}</body>
    </html>
  );
}
