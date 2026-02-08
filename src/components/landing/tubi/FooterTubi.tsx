"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { CobwebDecoration } from "./CobwebDecoration";

export function FooterTubi() {
  return (
    <footer className="relative border-t border-tubi-yellow/20 bg-tubi-dark text-tubi-yellow/90">
      <CobwebDecoration position="top-left" size="sm" opacity={0.1} />
      <CobwebDecoration position="top-right" size="sm" opacity={0.08} />
      <div className="container relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image src="/images/new_logo.png" alt="La Neta" width={60} height={60} />
            <p className="text-base text-tubi-yellow/80 md:text-lg">La Neta × Tubi</p>
            <p className="text-base text-tubi-yellow/70 md:text-lg">
              174 Nassau Street, Princeton, NJ 08542 USA
            </p>
            <p className="text-base text-tubi-yellow/70 md:text-lg">+52 1 55 3478 9920</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-tubi-yellow md:text-xl">Company</h4>
            <ul className="space-y-2 text-base md:text-lg">
              <li>
                <Link
                  href="https://www.laneta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tubi-yellow/70 hover:text-tubi-yellow"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/LaNetaSiempre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tubi-yellow/70 hover:text-tubi-yellow"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/lanetasiempre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tubi-yellow/70 hover:text-tubi-yellow"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/showcase/lanetasiempre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tubi-yellow/70 hover:text-tubi-yellow"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-tubi-yellow md:text-xl">Legal</h4>
            <ul className="space-y-2 text-base md:text-lg">
              <li>
                <Link
                  href="https://www.laneta.com/terms-conditions-creator-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tubi-yellow/70 hover:text-tubi-yellow"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.laneta.com/policess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tubi-yellow/70 hover:text-tubi-yellow"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-tubi-yellow md:text-xl">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/LaNetaSiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-tubi-purple/50 p-2 text-tubi-yellow transition-colors hover:bg-white/20 hover:text-tubi-dark"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/lanetasiempre/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-tubi-purple/50 p-2 text-tubi-yellow transition-colors hover:bg-white/20 hover:text-tubi-dark"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/lanetasiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-tubi-purple/50 p-2 text-tubi-yellow transition-colors hover:bg-white/20 hover:text-tubi-dark"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-tubi-yellow/20 pt-8 text-center text-base text-tubi-yellow/60 md:text-lg">
          © 2026 La Neta × Tubi | Creator Distribution Opportunity
        </div>
      </div>
    </footer>
  );
}
