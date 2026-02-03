import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OpportunitiesNav } from "@/components/landing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.laneta.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Meta Breakthrough Bonus Program | La Neta - Creator Opportunity",
  description:
    "Unlock your earning potential with Meta's Breakthrough Bonus Program. Earn up to $5,000 in bonuses during your first 90 days. Apply through La Neta, Meta's official partner agency.",
  icons: {
    icon: "/images/laneta.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "La Neta",
    title: "Meta Breakthrough Bonus Program | La Neta - Creator Opportunity",
    description:
      "Unlock your earning potential with Meta's Breakthrough Bonus Program. Earn up to $5,000 in bonuses during your first 90 days. Apply through La Neta, Meta's official partner agency.",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "La Neta - Creator Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Breakthrough Bonus Program | La Neta - Creator Opportunity",
    description:
      "Unlock your earning potential with Meta's Breakthrough Bonus Program. Earn up to $5,000 in bonuses during your first 90 days.",
    images: ["/images/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-w-0 overflow-x-hidden antialiased`}
      >
        {children}
        <OpportunitiesNav />
      </body>
    </html>
  );
}
