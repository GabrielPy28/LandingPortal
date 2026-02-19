"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function FooterGyre() {
  return (
    <footer className="relative border-t border-white/10 bg-gyre-dark text-gyre-muted">
      <div className="container relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/new_logo.png"
              alt="La Neta"
              width={48}
              height={48}
              className="object-contain"
            />
            <p className="text-base font-medium text-gyre-muted/90 md:text-lg">La Neta × Gyre</p>
            <p className="text-base text-gyre-muted/70 md:text-lg">
              174 Nassau Street, Princeton, NJ 08542 USA
            </p>
            <p className="text-base text-gyre-muted/70 md:text-lg">
              +52 1 55 3478 9920
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white md:text-xl">
              Sections
            </h4>
            <ul className="space-y-2 text-base md:text-lg">
              <li>
                <a href="#la-neta" className="text-gyre-muted/70 hover:text-gyre-muted">
                  Who is La Neta
                </a>
              </li>
              <li>
                <a href="#opportunity" className="text-gyre-muted/70 hover:text-gyre-muted">
                  The opportunity
                </a>
              </li>
              <li>
                <a href="#why-contacted" className="text-gyre-muted/70 hover:text-gyre-muted">
                  Why contacted
                </a>
              </li>
              <li>
                <a href="#partnership-model" className="text-gyre-muted/70 hover:text-gyre-muted">
                  Partnership (24/7)
                </a>
              </li>
              <li>
                <a href="#partnership-affiliate" className="text-gyre-muted/70 hover:text-gyre-muted">
                  Plans (HD / 4K)
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gyre-muted/70 hover:text-gyre-muted">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#cta" className="text-gyre-muted/70 hover:text-gyre-muted">
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white md:text-xl">
              Company
            </h4>
            <ul className="space-y-2 text-base md:text-lg">
              <li>
                <Link
                  href="https://www.laneta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gyre-muted/70 hover:text-gyre-muted"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/LaNetaSiempre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gyre-muted/70 hover:text-gyre-muted"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/lanetasiempre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gyre-muted/70 hover:text-gyre-muted"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/showcase/lanetasiempre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gyre-muted/70 hover:text-gyre-muted"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white md:text-xl">
              Legal
            </h4>
            <ul className="space-y-2 text-base md:text-lg">
              <li>
                <Link
                  href="https://www.laneta.com/terms-conditions-creator-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gyre-muted/70 hover:text-gyre-muted"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.laneta.com/policess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gyre-muted/70 hover:text-gyre-muted"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white md:text-xl">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/LaNetaSiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 text-gyre-muted transition-colors hover:bg-gyre-red/20 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/lanetasiempre/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 text-gyre-muted transition-colors hover:bg-gyre-red/20 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/lanetasiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 text-gyre-muted transition-colors hover:bg-gyre-red/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-base text-gyre-muted/60 md:text-lg">
          © 2026 La Neta. Gyre opportunity for YouTube creators.
        </div>
      </div>
    </footer>
  );
}
