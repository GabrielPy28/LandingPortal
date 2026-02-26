"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  programTitle?: string;
  navLinks?: { href: string; label: string }[];
  /** When provided (e.g. for Creator Fast Track), Terms & Conditions link points here instead of default. */
  termsHref?: string;
}

export function Footer({ programTitle, navLinks, termsHref }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-meta-dark text-white">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/new_logo.png"
              alt="La Neta"
              width={60}
              height={60}
            />
            <p className="text-sm text-slate-400">La Neta</p>
            <p className="text-sm text-slate-400">
              174 Nassau Street, Princeton, NJ 08542 USA
            </p>
            <p className="text-sm text-slate-400">+52 1 55 3478 9920</p>
          </div>

          <div>
            {programTitle && navLinks && navLinks.length > 0 ? (
              <>
                <h4 className="mb-4 font-semibold">{programTitle}</h4>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-meta-pink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h4 className="mb-4 font-semibold">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://www.laneta.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-meta-pink"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/LaNetaSiempre"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-meta-pink"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/lanetasiempre/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-meta-pink"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/showcase/lanetasiempre"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-meta-pink"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={termsHref ?? "https://www.laneta.com/terms-conditions-creator-program"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-meta-pink"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.laneta.com/policess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-meta-pink"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/LaNetaSiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-meta-purple/30 p-2 text-white transition-colors hover:bg-meta-purple"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/lanetasiempre/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-meta-purple/30 p-2 text-white transition-colors hover:bg-meta-purple"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/lanetasiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-meta-purple/30 p-2 text-white transition-colors hover:bg-meta-purple"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © 2026 Global Media Review Inc. | All Systems Operational
        </div>
      </div>
    </footer>
  );
}
