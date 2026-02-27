"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=laneta";
const LA_NETA_INSTAGRAM_URL = "https://www.instagram.com/lanetasiempre/";

export const DEFAULT_NAV_LINKS = [
  { href: "#meta-opportunity", label: "Program" },
  { href: "#why-contacted", label: "Why Contacted" },
  { href: "#meta-opportunity-benefits", label: "Benefits" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#la-neta", label: "La Neta" },
];

export const FAST_TRACK_NAV_LINKS = [
  { href: "#meta-opportunity", label: "Program" },
  { href: "#why-contacted", label: "Why Contacted" },
  { href: "#how-it-works-payout", label: "How It Works" },
  { href: "#meta-opportunity-benefits", label: "Benefits" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#la-neta", label: "La Neta" },
];

interface HeaderProps {
  onOpenConnectModal?: () => void;
  navLinks?: { href: string; label: string }[];
  applyButtonLabel?: string;
}

export function Header({
  onOpenConnectModal,
  navLinks = DEFAULT_NAV_LINKS,
  applyButtonLabel = "Try it",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active nav with URL hash when user clicks a nav link
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hashLinks = navLinks.filter((link) => link.href.startsWith("#"));

    const applyHash = () => {
      const hash = window.location.hash || "";
      const match = hashLinks.find((link) => link.href === hash);
      if (match) setActiveHash(match.href);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [navLinks]);

  // Scroll spy: which section is most in view (prefer section whose top is in upper viewport)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => link.href.slice(1));

    const getVisibleSection = (): string | null => {
      const headerOffset = 120;
      const viewportMid = headerOffset + window.innerHeight / 2;
      let best: { id: string; top: number } | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        if (top > window.innerHeight || bottom < headerOffset) continue;
        const distanceFromTop = Math.abs(top - headerOffset);
        if (!best || distanceFromTop < best.top) {
          best = { id, top: distanceFromTop };
        }
      }
      return best ? `#${best.id}` : null;
    };

    const onScroll = () => {
      const href = getVisibleSection();
      if (href) {
        const match = navLinks.find((link) => link.href === href);
        if (match) setActiveHash(match.href);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navLinks]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] transition-all duration-300 ${
        isScrolled
          ? "bg-meta-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 pl-4 pr-6 sm:px-6">
        <Link
          href="https://www.laneta.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/new_logo.png"
            alt="La Neta"
            width={40}
            height={40}
          />
          <span className="font-bold text-white">La Neta</span>
        </Link>

        <nav className="hidden items-center gap-6 min-[986px]:flex">
          {navLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-2">
              {index === 0 && (
                <a
                  href={LA_NETA_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-lg text-pink-300 transition-colors hover:text-pink-200"
                  aria-label="La Neta on Instagram"
                >
                  <Instagram className="size-5" />
                </a>
              )}
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeHash === link.href
                    ? "text-meta-pink"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </span>
          ))}
          {onOpenConnectModal && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onOpenConnectModal}
              className="border-meta-pink/60 bg-meta-pink/10 font-medium text-meta-pink hover:border-meta-pink hover:bg-meta-pink/20 hover:text-meta-pink"
            >
              Connect me
            </Button>
          )}
          <Button
            asChild
            size="sm"
            className="bg-meta-purple hover:bg-meta-purple/90"
          >
            <Link
              href={META_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {applyButtonLabel}
            </Link>
          </Button>
        </nav>

        <button
          className="flex size-10 min-w-10 shrink-0 items-center justify-center rounded-lg text-white min-[986px]:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-700 bg-meta-dark/98 px-6 py-4 min-[986px]:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                {index === 0 && (
                  <a
                    href={LA_NETA_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg text-pink-300 transition-colors hover:text-pink-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="La Neta on Instagram"
                  >
                    <Instagram className="size-5" />
                  </a>
                )}
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeHash === link.href
                      ? "text-meta-pink"
                      : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </span>
            ))}
            {onOpenConnectModal && (
              <Button
                type="button"
                variant="outline"
                className="w-full border-meta-pink/60 bg-meta-pink/10 font-medium text-meta-pink hover:border-meta-pink hover:bg-meta-pink/20 hover:text-meta-pink"
                onClick={() => {
                  onOpenConnectModal();
                  setIsMobileMenuOpen(false);
                }}
              >
                Match me
              </Button>
            )}
            <Button
              asChild
              className="w-full bg-meta-purple hover:bg-meta-purple/90"
            >
              <Link
                href={META_APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {applyButtonLabel}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
