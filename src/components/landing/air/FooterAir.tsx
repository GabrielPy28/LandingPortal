"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function FooterAir() {
  return (
    <footer className="border-t border-slate-700 bg-air-darker text-white">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
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
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.laneta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-air-lime"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/LaNetaSiempre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-air-lime"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/lanetasiempre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-air-lime"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/showcase/lanetasiempre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-air-lime"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.laneta.com/terms-conditions-creator-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-air-lime"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.laneta.com/policess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-air-lime"
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
                className="rounded-lg bg-air-blue/30 p-2 text-white transition-colors hover:bg-air-blue"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/lanetasiempre/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-air-blue/30 p-2 text-white transition-colors hover:bg-air-blue"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/lanetasiempre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-air-blue/30 p-2 text-white transition-colors hover:bg-air-blue"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © 2026 La Neta × AIR Media-Tech | Global Creator Opportunities
        </div>
      </div>
    </footer>
  );
}
