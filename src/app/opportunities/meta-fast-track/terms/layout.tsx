import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Creator Fast Track — La Neta",
  description:
    "Terms and conditions for the Creator Fast Track onboarding process. Meta Creator Fast Track program, eligibility, consent, and liability.",
  robots: "index, follow",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
