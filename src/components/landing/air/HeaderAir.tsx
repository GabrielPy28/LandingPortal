"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/ana-laneta/30min";

const NAV_LINKS = [
  { href: "#la-neta", label: "La Neta" },
  { href: "#why-contacted", label: "Why Contacted" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#translation-demo", label: "See Technology" },
  { href: "#growth", label: "Growth" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function HeaderAir() {
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
        isScrolled ? "bg-air-darker/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 pl-4 pr-6 sm:px-6">
        <Link href="#" className="flex items-center gap-2">
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
              className="text-sm font-medium text-slate-300 transition-colors hover:text-air-lime"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-air-lime text-air-darker hover:bg-air-lime/90"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Consultation
            </Link>
          </Button>
        </nav>

        <button
          className="flex size-10 min-w-10 shrink-0 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-700 bg-air-darker/98 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-air-lime"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-air-lime text-air-darker hover:bg-air-lime/90"
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
