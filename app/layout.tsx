import type { Metadata } from "next";
import { Geist, Geist_Mono, Neuton, Bodoni_Moda, Gloock } from "next/font/google";
import "./globals.css";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Ryusei",
  description: "Landing Page for Ryusei Homelab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neuton.variable} ${gloock.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
