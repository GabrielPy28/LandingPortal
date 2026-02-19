import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gyre | La Neta - 24/7 Pre-recorded Live Streaming for YouTube",
  description:
    "An opportunity for YouTube creators: explore 24/7 pre-recorded live streaming with Gyre. Grow watch time, reach new audiences, and keep your channel active—we're here to help you see if it's a fit.",
  openGraph: {
    title: "Gyre | La Neta - 24/7 Live Streaming for YouTube Creators",
    description:
      "An opportunity for YouTube creators: explore 24/7 pre-recorded live streaming with Gyre. Grow watch time and keep your channel active.",
    url: "/opportunities/gyre",
    type: "website",
    siteName: "La Neta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyre | La Neta - 24/7 Live Streaming for YouTube",
    description:
      "An opportunity for YouTube creators: explore 24/7 pre-recorded live streaming with Gyre.",
  },
};

export default function GyreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
