"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GYRE_CONTACT_SUBJECT = "Gyre Inquiry – Consultation Needed";

const inputBaseClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gyre-muted/70 focus:border-gyre-red focus:outline-none focus:ring-2 focus:ring-gyre-red/20 transition-colors";

export function CTASectionGyre() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current && sectionRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact/gyre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: GYRE_CONTACT_SUBJECT,
          phone: phone.trim() || undefined,
          channelUrl: channelUrl.trim() || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setChannelUrl("");
    } catch {
      setStatus("error");
      setErrorMessage("Could not send the message. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
      <div className="container relative mx-auto max-w-2xl px-6">
        <div
          ref={headerRef}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gyre-red">
            <MessageCircle className="size-3.5" aria-hidden />
            Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            Let&apos;s talk & start streaming!
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-gyre-muted md:text-lg">
            Have questions about the Gyre opportunity? Send us a consultation request and we&apos;ll get back to you.
          </p>
        </div>

        <div
          ref={formRef}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="cta-gyre-subject" className="mb-2 block text-sm font-medium text-white">
                Consultation request
              </label>
              <input
                id="cta-gyre-subject"
                type="text"
                name="subject"
                value={GYRE_CONTACT_SUBJECT}
                readOnly
                aria-readonly="true"
                tabIndex={-1}
                className={`${inputBaseClass} cursor-default bg-white/[0.07] text-gyre-muted focus:ring-0`}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-gyre-name" className="mb-2 block text-sm font-medium text-white">
                  Name <span className="text-gyre-red">*</span>
                </label>
                <input
                  id="cta-gyre-name"
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Your name"
                  className={inputBaseClass}
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <label htmlFor="cta-gyre-email" className="mb-2 block text-sm font-medium text-white">
                  Email <span className="text-gyre-red">*</span>
                </label>
                <input
                  id="cta-gyre-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className={inputBaseClass}
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-gyre-phone" className="mb-2 block text-sm font-medium text-white">
                  Phone <span className="text-gyre-muted">(optional)</span>
                </label>
                <input
                  id="cta-gyre-phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555 000 0000"
                  className={inputBaseClass}
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <label htmlFor="cta-gyre-channel" className="mb-2 block text-sm font-medium text-white">
                  YouTube / channel URL <span className="text-gyre-muted">(optional)</span>
                </label>
                <input
                  id="cta-gyre-channel"
                  type="url"
                  name="channelUrl"
                  value={channelUrl}
                  onChange={(e) => setChannelUrl(e.target.value)}
                  placeholder="https://youtube.com/@yourchannel"
                  className={inputBaseClass}
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="cta-gyre-message" className="mb-2 block text-sm font-medium text-white">
                Message <span className="text-gyre-red">*</span>
              </label>
              <textarea
                id="cta-gyre-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Ask us anything about the Gyre opportunity..."
                className={`${inputBaseClass} min-h-[140px] resize-y`}
                disabled={status === "loading"}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200">
                <AlertCircle className="size-5 shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-200">
                <CheckCircle2 className="size-5 shrink-0" />
                <p className="text-sm font-medium">Message sent. We&apos;ll get back to you soon.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gyre-red px-6 py-4 text-base font-semibold text-white transition hover:bg-gyre-red/90 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-5 animate-spin" aria-hidden />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="size-5" aria-hidden />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
