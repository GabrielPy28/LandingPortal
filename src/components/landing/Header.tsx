"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const META_APPLY_URL =
  "https://www.facebook.com/creator_programs/signup?referral_code=RJDWEF&id=1";

const NAV_LINKS = [
  { href: "#meta-opportunity", label: "Program" },
  { href: "#why-contacted", label: "Why Contacted" },
  { href: "#meta-opportunity-benefits", label: "Benefits" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#la-neta", label: "La Neta" },
];

interface HeaderProps {
  onOpenConnectModal?: () => void;
}

export function Header({ onOpenConnectModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] transition-all duration-300 ${
        isScrolled
          ? "bg-meta-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 pl-4 pr-6 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/new_logo.png"
            alt="La Neta"
            width={40}
            height={40}
          />
          <span className="font-bold text-white">La Neta</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
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
              Try it
            </Link>
          </Button>
        </nav>

        <button
          className="flex size-10 min-w-10 shrink-0 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-700 bg-meta-dark/98 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
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
                Try it
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
