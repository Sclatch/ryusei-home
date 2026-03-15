import type { Metadata } from "next";
import { Neuton, Gloock, WDXL_Lubrifont_JP_N } from "next/font/google";
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

const lubrifont = WDXL_Lubrifont_JP_N({
  variable: "--font-wdxl-lubrifont",
  subsets: ["latin"],
  weight: "400",
  /* IDK man, it gives warning for some reason */
  adjustFontFallback: false, 
})

export const metadata: Metadata = {
  title: "Ryusei - Home",
  description: "Welcome to Ryusei's personal homelab website! Explore projects and services provided for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neuton.variable} ${gloock.variable} ${lubrifont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
