import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitejk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juliah & Kayky",
  description: "Convite de casamento de Juliah e Kayky",
  openGraph: {
    title: "Juliah & Kayky",
    description: "Convite de casamento de Juliah e Kayky",
    url: siteUrl,
    siteName: "Juliah & Kayky",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/jek.png",
        width: 1200,
        height: 630,
        alt: "Juliah & Kayky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juliah & Kayky",
    description: "Convite de casamento de Juliah e Kayky",
    images: ["/images/jek.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
