import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Breakthrough Bonus Program | La Neta - Creator Opportunity",
  description:
    "Unlock your earning potential with Meta's Breakthrough Bonus Program. Earn up to $5,000 in bonuses during your first 90 days. Apply through La Neta, Meta's official partner agency.",
  openGraph: {
    title: "Meta Breakthrough Bonus Program | La Neta - Creator Opportunity",
    description:
      "Unlock your earning potential with Meta's Breakthrough Bonus Program. Earn up to $5,000 in bonuses during your first 90 days.",
    url: "/opportunities/meta",
    type: "website",
    siteName: "La Neta",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "La Neta - Meta Breakthrough Bonus",
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

export default function MetaOpportunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
