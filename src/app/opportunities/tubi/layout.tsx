import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tubi | La Neta - Distribute Your Horror & Mystery Content",
  description:
    "Partner with La Neta to distribute your long-form horror, thriller, and mystery content on Tubi. Reach 97M+ monthly viewers. YouTube creators, apply now.",
  openGraph: {
    title: "Tubi | La Neta - Distribute Your Horror & Mystery Content",
    description:
      "Partner with La Neta to distribute your long-form horror, thriller, and mystery content on Tubi. Reach 97M+ monthly viewers.",
    url: "/opportunities/tubi",
    type: "website",
    siteName: "La Neta",
    images: [
      {
        url: "/images/images_tubi/horror.jpg",
        width: 1200,
        height: 630,
        alt: "La Neta x Tubi - Creator Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tubi | La Neta - Distribute Your Horror & Mystery Content",
    description:
      "Partner with La Neta to distribute your long-form content on Tubi. Reach 97M+ monthly viewers.",
    images: ["/images/images_tubi/horror.jpg"],
  },
};

export default function TubiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
