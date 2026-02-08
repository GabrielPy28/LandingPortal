"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "#la-neta", label: "La Neta" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#why-tubi", label: "Why Tubi" },
  { href: "#coverage", label: "Coverage" },
  { href: "#how-it-works", label: "Our Values" },
  { href: "#faq", label: "FAQ" },
];

export function HeaderTubi() {
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
        isScrolled ? "bg-tubi-dark/95 backdrop-blur-md shadow-lg shadow-tubi-purple/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 pl-4 pr-6 sm:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/images/new_logo.png" alt="La Neta" width={40} height={40} />
          <span className="font-bold text-tubi-yellow">La Neta</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-tubi-yellow/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="flex size-10 min-w-10 shrink-0 items-center justify-center rounded-lg text-tubi-yellow md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-tubi-yellow/20 bg-tubi-dark/98 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-tubi-yellow/90 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
