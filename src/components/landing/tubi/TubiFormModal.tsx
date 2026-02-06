"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { submitToGoogleForm } from "@/lib/googleForm";

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
  subject: "Tubi distribution opportunity - La Neta",
  message: "",
};

interface TubiFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TubiFormModal({ isOpen, onClose }: TubiFormModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    submitToGoogleForm(formData);
    setStatus("success");
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !backdropRef.current || !panelRef.current) return;
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(panel, { opacity: 0, y: 24, scale: 0.96 });
    const tl = gsap.timeline({ overwrite: true });
    tl.to(backdrop, { opacity: 1, duration: 0.2, ease: "power2.out" });
    tl.to(panel, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }, "-=0.1");
    return () => {
      tl.kill();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const inputClass =
    "w-full rounded-lg border border-tubi-purple/30 bg-tubi-dark/95 px-4 py-3 text-base text-tubi-yellow placeholder:text-tubi-yellow/50 focus:border-tubi-yellow focus:outline-none focus:ring-2 focus:ring-tubi-yellow/20 transition-colors";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="tubi-form-title"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-tubi-dark/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-4 top-4 h-16 w-16 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, transparent 40%, rgba(247,245,144,0.15) 41%, rgba(247,245,144,0.15) 45%, transparent 46%)`,
          backgroundSize: "100% 100%",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-4 right-4 h-16 w-16 rotate-180 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, transparent 40%, rgba(247,245,144,0.15) 41%, rgba(247,245,144,0.15) 45%, transparent 46%)`,
          backgroundSize: "100% 100%",
        }}
        aria-hidden
      />

      <div
        ref={panelRef}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border-2 border-tubi-yellow/30 bg-tubi-dark shadow-2xl shadow-tubi-purple/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-tubi-yellow/20 bg-tubi-dark/95 px-6 py-4 backdrop-blur-sm">
          <h2 id="tubi-form-title" className="text-xl font-bold text-tubi-yellow md:text-2xl">
            Apply for Tubi × La Neta
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-tubi-yellow/80 transition-colors hover:bg-tubi-yellow/10 hover:text-tubi-yellow"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label htmlFor="tubi-fullName" className="mb-2 block text-base font-semibold text-tubi-yellow">
              Full Name <span className="text-laneta-pink">*</span>
            </label>
            <input
              type="text"
              id="tubi-fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="tubi-email" className="mb-2 block text-base font-semibold text-tubi-yellow">
              Email <span className="text-laneta-pink">*</span>
            </label>
            <input
              type="email"
              id="tubi-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="creator@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="tubi-phone" className="mb-2 block text-base font-semibold text-tubi-yellow">
              Phone (with country code) <span className="text-laneta-pink">*</span>
            </label>
            <input
              type="tel"
              id="tubi-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 555 123 4567"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="tubi-mainAccountUrl" className="mb-2 block text-base font-semibold text-tubi-yellow">
              YouTube channel (URL) <span className="text-laneta-pink">*</span>
            </label>
            <input
              type="url"
              id="tubi-mainAccountUrl"
              name="mainAccountUrl"
              value={formData.mainAccountUrl}
              onChange={handleChange}
              required
              placeholder="https://youtube.com/@yourchannel"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="tubi-subject" className="mb-2 block text-base font-semibold text-tubi-yellow">
              Subject <span className="text-laneta-pink">*</span>
            </label>
            <input
              type="text"
              id="tubi-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="tubi-message" className="mb-2 block text-base font-semibold text-tubi-yellow">
              Message <span className="text-laneta-pink">*</span>
            </label>
            <textarea
              id="tubi-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell us about your channel and content..."
              className={`${inputClass} min-h-[100px] resize-y`}
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/50 p-4 text-base text-red-200">
              <AlertCircle className="size-5 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}
          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg border border-tubi-yellow/30 bg-green-950/30 p-4 text-base text-tubi-yellow">
              <CheckCircle2 className="size-5 shrink-0" />
              <p className="font-medium">Message sent! We&apos;ll get back to you soon.</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-tubi-purple py-6 text-lg font-semibold text-tubi-yellow hover:bg-tubi-purple/90 disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 size-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 size-5" />
                Send
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
