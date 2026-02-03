import type { Metadata } from "next";
import Link from "next/link";
import { Construction, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pinterest Opportunity | La Neta - Coming Soon",
  description: "The Pinterest opportunity with La Neta will be available soon.",
  openGraph: {
    title: "Pinterest Opportunity | La Neta - Coming Soon",
    description: "The Pinterest opportunity with La Neta will be available soon.",
    url: "/opportunities/pinterest",
    type: "website",
    siteName: "La Neta",
    images: [
      {
        url: "/images/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "La Neta - Pinterest Opportunity Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Opportunity | La Neta - Coming Soon",
    description: "The Pinterest opportunity with La Neta will be available soon.",
    images: ["/images/Banner.jpg"],
  },
};

export default function PinterestComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-meta-dark px-6">
      <div className="relative max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-red-500/20" />
            <div className="relative flex size-32 items-center justify-center rounded-full bg-red-500/20">
              <Construction className="size-16 text-red-400" />
            </div>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-sm sm:text-5xl">
          Under construction...
        </h1>
        <p className="mb-8 text-lg text-slate-200">
          The <strong className="text-white">Pinterest</strong> opportunity with
          La Neta will be available soon. Stay tuned!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-meta-purple px-6 py-3 font-semibold text-white transition-colors hover:bg-meta-purple/90"
        >
          <ArrowLeft className="size-5" />
          Back to opportunities
        </Link>
      </div>
    </div>
  );
}
