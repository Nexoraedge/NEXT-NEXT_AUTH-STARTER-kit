import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DhoniDev-Ai | Full Stack AI Developer",
  description: "Full Stack AI Developer crafting smart products & frictionless experiences. Watch dev logs, AI builds & breakdowns on YouTube.",
  keywords: ["AI Developer", "Full Stack Developer", "AI Products", "YouTube", "ToneGenie", "Next.js"],
  authors: [{ name: "DhoniDev-Ai" }],
  openGraph: {
    title: "DhoniDev-Ai | Full Stack AI Developer",
    description: "Full Stack AI Developer crafting smart products & frictionless experiences.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}