import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Creator Fast Track | La Neta — Guaranteed* Monthly Payouts for Creators",
  description:
    "La Neta is Meta's official partner for the Creator Fast Track. Creators with 100K+ followers earn $1,000–$3,000/mo in guaranteed* payouts by cross-posting existing content to Facebook. Apply now.",
  openGraph: {
    title: "Creator Fast Track | La Neta",
    description:
      "Earn $1,000–$3,000/mo guaranteed*. Repost your existing content to Facebook. 100K+ followers? Apply now.",
    url: "/opportunities/meta-fast-track",
    type: "website",
    siteName: "La Neta",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "La Neta - Creator Fast Track",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Fast Track | La Neta",
    description:
      "Earn $1,000–$3,000/mo guaranteed*. Repost your existing content to Facebook. 100K+ followers? Apply now.",
    images: ["/images/banner.jpg"],
  },
};

export default function MetaFastTrackOpportunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

