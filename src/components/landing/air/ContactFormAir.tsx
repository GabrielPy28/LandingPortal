"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  mainAccountUrl: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  mainAccountUrl: "",
  subject: "AIR Media-Tech / Microsoft Network opportunity",
  message: "",
};

const CALENDLY_URL = "https://calendly.com/ana-laneta/30min";

export function ContactFormAir() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClass =
    "w-full rounded-lg border border-air-blue/30 bg-white px-4 py-3 text-air-dark placeholder:text-slate-400 focus:border-air-blue focus:outline-none focus:ring-2 focus:ring-air-blue/20 transition-colors";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="scroll-mt-20 bg-gradient-to-b from-white to-air-bg py-24"
    >
      <div className="container mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-4xl" aria-hidden>
            📬
          </span>
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-air-dark sm:text-4xl"
          >
            Have a Question?
          </h2>
          <p className="mt-3 text-air-dark/80">
            We&apos;re here to help. Send us your inquiry or book a
            consultation directly.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-air-lime px-8 py-6 text-lg font-semibold text-air-darker hover:bg-air-lime/90"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Book a Consultation
            </Link>
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-2xl border-2 border-air-blue/20 bg-white p-8 shadow-xl shadow-air-blue/5 md:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-40 rounded-full bg-air-lime/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 size-40 rounded-full bg-air-blue/10 blur-3xl"
            aria-hidden
          />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative space-y-6"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-air-dark"
              >
                Full Name <span className="text-air-blue">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-air-dark"
              >
                Email <span className="text-air-blue">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="creator@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-air-dark"
              >
                Phone Number (with country code) <span className="text-air-blue">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 555 123 4567"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="mainAccountUrl"
                className="mb-2 block text-sm font-semibold text-air-dark"
              >
                Main Account (URL) <span className="text-air-blue">*</span>
              </label>
              <input
                type="url"
                id="mainAccountUrl"
                name="mainAccountUrl"
                value={formData.mainAccountUrl}
                onChange={handleChange}
                required
                placeholder="https://youtube.com/yourchannel or Instagram/TikTok URL"
                className={inputClass}
              />
              <p className="mt-1.5 text-xs text-air-dark/60">
                YouTube, Instagram, or TikTok channel URL
              </p>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-air-dark"
              >
                Subject <span className="text-air-blue">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="AIR Media-Tech / Microsoft Network opportunity"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-air-dark"
              >
                Message <span className="text-air-blue">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your question or message here..."
                className={`${inputClass} min-h-[120px] resize-y`}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700">
                <AlertCircle className="size-5 shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-700">
                <CheckCircle2 className="size-5 shrink-0" />
                <p className="text-sm font-medium">
                  Message sent successfully! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              size="lg"
              className="w-full bg-air-blue py-6 text-lg font-semibold hover:bg-air-blue/90 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 size-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 size-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
