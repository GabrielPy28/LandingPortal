"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, ArrowLeft, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitConnectOpportunitiesForm } from "@/lib/connectOpportunitiesForm";

const CONTENT_NICHES = [
  "Entertainment",
  "Education",
  "Horror",
  "Lifestyle",
  "Food",
  "Gaming",
  "Tech",
  "Finance",
  "Beauty / Fashion",
] as const;

const BEST_CONTACT_OPTIONS = [
  { value: "Email", label: "Email", placeholder: "Your email address" },
  { value: "Phone number/WhatsApp", label: "Phone number / WhatsApp", placeholder: "WhatsApp number (with country code)" },
  { value: "Manager", label: "Manager", placeholder: "Manager email or WhatsApp" },
] as const;

const PLATFORM_OPTIONS = [
  "YouTube",
  "Instagram",
  "TikTok",
  "Facebook",
  "Multiple platforms",
  "Other",
] as const;

const EXPLORE_OPTIONS = ["Yes", "Maybe", "Not right now"] as const;

interface ConnectOpportunitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectOpportunitiesModal({ isOpen, onClose }: ConnectOpportunitiesModalProps) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [platformError, setPlatformError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    userEmail: "",
    userPhone: "",
    bestContactType: "" as string,
    contactDetail: "",
    managerPhone: "",
    mainPlatform: "" as string,
    youtubeUrl: "",
    instagramUrl: "",
    tiktokUrl: "",
    facebookUrl: "",
    twitchUrl: "",
    otherUrl: "",
    contentNiche: [] as string[],
    contentNicheOther: "",
    exploreOptions: "" as string,
  });

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setStatus("idle");
      setPlatformError("");
    }
  }, [isOpen]);

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

  const handleSubmit = () => {
    setStatus("loading");
    const nicheText = [
      ...formData.contentNiche,
      ...(formData.contentNicheOther.trim() ? [`Other: ${formData.contentNicheOther.trim()}`] : []),
    ].join(", ");
    submitConnectOpportunitiesForm({
      fullName: formData.fullName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,
      typeOfContact: formData.bestContactType,
      contactDetail: formData.contactDetail,
      managerPhone: formData.managerPhone,
      mainPlatform: formData.mainPlatform,
      youtubeChannel: formData.youtubeUrl,
      instagramAccount: formData.instagramUrl,
      tiktokAccount: formData.tiktokUrl,
      facebookPage: formData.facebookUrl,
      twitchAccount: formData.twitchUrl,
      other: formData.otherUrl,
      contentNiche: nicheText || "",
      exploreOptions: formData.exploreOptions,
    });
    setStatus("success");
    setTimeout(onClose, 3000);
  };

  const isValidEmail = (value: string) => {
    const email = value.trim();
    if (!email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 7;
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.fullName.trim().length > 0;
      case 2:
        return isValidEmail(formData.userEmail);
      case 3:
        return isValidPhone(formData.userPhone);
      case 4:
        if (!formData.bestContactType) return false;
        if (formData.bestContactType === "Manager")
          return (
            isValidEmail(formData.contactDetail) &&
            isValidPhone(formData.managerPhone)
          );
        if (formData.bestContactType === "Email") {
          return isValidEmail(formData.contactDetail);
        }
        if (formData.bestContactType === "Phone number/WhatsApp") {
          return isValidPhone(formData.contactDetail);
        }
        return false;
      case 5:
        if (!formData.mainPlatform) return false;
        const main = formData.mainPlatform.toLowerCase();
        if (main === "youtube") return formData.youtubeUrl.trim().length > 0;
        if (main === "instagram") return formData.instagramUrl.trim().length > 0;
        if (main === "tiktok") return formData.tiktokUrl.trim().length > 0;
        if (main === "facebook") return formData.facebookUrl.trim().length > 0;
        if (main === "twitch") return formData.twitchUrl.trim().length > 0;
        if (main === "other") return formData.otherUrl.trim().length > 0;
        if (main === "multiple platforms")
          return [
            formData.youtubeUrl,
            formData.instagramUrl,
            formData.tiktokUrl,
            formData.facebookUrl,
            formData.twitchUrl,
            formData.otherUrl,
          ].some((u) => u.trim().length > 0);
        return true;
      case 6:
        return formData.contentNiche.length > 0 || formData.contentNicheOther.trim().length > 0;
      case 7:
        return !!formData.exploreOptions;
      default:
        return true;
    }
  };

  const inputClass =
    "w-full rounded-lg border border-meta-purple/30 bg-white px-4 py-3 text-meta-dark placeholder:text-slate-400 focus:border-meta-purple focus:outline-none focus:ring-2 focus:ring-meta-purple/20";

  if (!isOpen) return null;

  const totalSteps = 8;
  const isLastStep = step === 7;

  const validatePlatformStep = () => {
    if (!formData.mainPlatform) {
      setPlatformError("Please choose where you mainly publish today.");
      return false;
    }

    const urlMatchesPlatform = (platform: string, url: string) => {
      const value = url.toLowerCase().trim();
      if (!value) return false;
      if (platform === "youtube") return value.includes("youtube.com") || value.includes("youtu.be");
      if (platform === "instagram") return value.includes("instagram.com");
      if (platform === "tiktok") return value.includes("tiktok.com");
      if (platform === "facebook") return value.includes("facebook.com");
      if (platform === "twitch") return value.includes("twitch.tv");
      return true;
    };

    const isValidHttpUrlFormat = (url: string) => /^https?:\/\//i.test(url.trim());

    // First, validate that any filled profile URL matches its platform
    if (formData.youtubeUrl.trim() && !urlMatchesPlatform("youtube", formData.youtubeUrl)) {
      setPlatformError("Please enter a valid YouTube channel URL in the YouTube field.");
      return false;
    }
    if (formData.instagramUrl.trim() && !urlMatchesPlatform("instagram", formData.instagramUrl)) {
      setPlatformError("Please enter a valid Instagram profile URL in the Instagram field.");
      return false;
    }
    if (formData.tiktokUrl.trim() && !urlMatchesPlatform("tiktok", formData.tiktokUrl)) {
      setPlatformError("Please enter a valid TikTok profile URL in the TikTok field.");
      return false;
    }
    if (formData.facebookUrl.trim() && !urlMatchesPlatform("facebook", formData.facebookUrl)) {
      setPlatformError("Please enter a valid Facebook page URL in the Facebook field.");
      return false;
    }
    if (formData.twitchUrl.trim() && !urlMatchesPlatform("twitch", formData.twitchUrl)) {
      setPlatformError("Please enter a valid Twitch channel URL in the Twitch field.");
      return false;
    }
    if (formData.otherUrl.trim() && !isValidHttpUrlFormat(formData.otherUrl)) {
      setPlatformError("Please enter a valid URL starting with http:// or https:// in the Other platform field.");
      return false;
    }

    const main = formData.mainPlatform.toLowerCase();

    if (main === "youtube") {
      if (!formData.youtubeUrl.trim()) {
        setPlatformError("Please add your YouTube channel URL.");
        return false;
      }
      if (!urlMatchesPlatform("youtube", formData.youtubeUrl)) {
        setPlatformError("The main URL should be a YouTube link when YouTube is your primary platform.");
        return false;
      }
    } else if (main === "instagram") {
      if (!formData.instagramUrl.trim()) {
        setPlatformError("Please add your Instagram profile URL.");
        return false;
      }
      if (!urlMatchesPlatform("instagram", formData.instagramUrl)) {
        setPlatformError("The main URL should be an Instagram link when Instagram is your primary platform.");
        return false;
      }
    } else if (main === "tiktok") {
      if (!formData.tiktokUrl.trim()) {
        setPlatformError("Please add your TikTok profile URL.");
        return false;
      }
      if (!urlMatchesPlatform("tiktok", formData.tiktokUrl)) {
        setPlatformError("The main URL should be a TikTok link when TikTok is your primary platform.");
        return false;
      }
    } else if (main === "facebook") {
      if (!formData.facebookUrl.trim()) {
        setPlatformError("Please add your Facebook page URL.");
        return false;
      }
      if (!urlMatchesPlatform("facebook", formData.facebookUrl)) {
        setPlatformError("The main URL should be a Facebook link when Facebook is your primary platform.");
        return false;
      }
    } else if (main === "twitch") {
      if (!formData.twitchUrl.trim()) {
        setPlatformError("Please add your Twitch channel URL.");
        return false;
      }
      if (!urlMatchesPlatform("twitch", formData.twitchUrl)) {
        setPlatformError("The main URL should be a Twitch link when Twitch is your primary platform.");
        return false;
      }
    } else if (main === "other") {
      if (!formData.otherUrl.trim()) {
        setPlatformError("Please add the URL for your main platform.");
        return false;
      }
      if (!isValidHttpUrlFormat(formData.otherUrl)) {
        setPlatformError("Please enter a valid URL starting with http:// or https:// for your main platform.");
        return false;
      }
    } else if (main === "multiple platforms") {
      const urls = [
        formData.youtubeUrl,
        formData.instagramUrl,
        formData.tiktokUrl,
        formData.facebookUrl,
        formData.otherUrl,
      ].filter((u) => u.trim().length > 0);
      if (!urls.length) {
        setPlatformError("Please add at least one profile URL for your main platforms.");
        return false;
      }
    }

    setPlatformError("");
    return true;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="connect-opportunities-title"
    >
      <div
        className="absolute inset-0 bg-meta-dark/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-white to-meta-purple/5 px-6 py-4">
          <h2 id="connect-opportunities-title" className="text-xl font-bold text-meta-dark">
            Unlock the Full World of La Neta Opportunities
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-meta-dark"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="p-6">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-5 py-8 text-center">
              <CheckCircle2 className="size-14 text-green-500" />
              <div className="space-y-3 text-meta-dark">
                <p className="text-lg font-medium">
                  Thanks for sharing your info! 🙌
                </p>
                <p className="text-sm text-meta-dark/90">
                  We&apos;re checking it out to see if we vibe and there&apos;s a potential match.
                </p>
                <p className="text-sm text-meta-dark/90">
                  If it clicks, we&apos;ll reach out through your preferred contact.
                </p>
                <p className="text-sm text-meta-dark/90">
                  Talk soon ✨
                </p>
                <p className="text-sm font-semibold">
                  Team La Neta
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-6 flex gap-1.5">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      i <= step
                        ? "bg-gradient-to-r from-meta-purple to-meta-purple/80 shadow-sm shadow-meta-purple/30"
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Step 0: Welcome */}
              {step === 0 && (
                <div className="space-y-6">
                  <div className="rounded-xl bg-gradient-to-br from-meta-purple/10 via-meta-purple/5 to-transparent p-5 ring-1 ring-meta-purple/10">
                    <div className="mb-4 flex items-center gap-2 text-meta-purple">
                      <Sparkles className="size-5 shrink-0" aria-hidden />
                      <span className="text-sm font-semibold tracking-wide">What’s waiting for you</span>
                    </div>
                    <div className="space-y-4 text-meta-dark/90">
                      <p className="leading-relaxed">
                        Here at La Neta, we have a wide range of opportunities waiting for you—from{" "}
                        <span className="font-medium text-meta-dark">brand deals</span>,{" "}
                        <span className="font-medium text-meta-dark">exclusive events</span>, and{" "}
                        <span className="font-medium text-meta-dark">streaming options</span> to new ways to distribute your content that you might not know about.
                      </p>
                      <p className="leading-relaxed">
                        To match you with the best offers, we need to know a little more about your content.{" "}
                        <span className="font-semibold text-meta-dark">Complete your profile</span> so we can contact you with the right opportunities.
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setStep(1)}
                    className="w-full bg-gradient-to-r from-meta-purple to-meta-purple/90 py-6 text-base font-semibold shadow-lg shadow-meta-purple/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-meta-purple/30 active:scale-[0.99]"
                  >
                    Get Started
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </div>
              )}

              {/* Step 1: Full Name */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-meta-dark">Full Name</p>
                  </div>
                  <label className="block">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData((d) => ({ ...d, fullName: e.target.value }))}
                      className={inputClass}
                      placeholder="John Doe"
                      autoFocus
                    />
                  </label>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(0)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      Next
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: User email */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">Email</p>
                    <p className="text-xs text-meta-dark/70">
                      We&apos;ll use this email for confirmations and, if you prefer, as your main contact for opportunities.
                    </p>
                  </div>
                  <label className="block space-y-1">
                    <span className="block text-sm font-semibold text-meta-dark">Your email</span>
                    <input
                      type="email"
                      value={formData.userEmail}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, userEmail: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="you@example.com"
                      autoFocus
                    />
                  </label>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      Next
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: User phone */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">Phone / WhatsApp</p>
                    <p className="text-xs text-meta-dark/70">
                      Share a number where we can reach you for time-sensitive or high-priority opportunities.
                    </p>
                  </div>
                  <label className="block space-y-1">
                    <span className="block text-sm font-semibold text-meta-dark">Your phone number</span>
                    <input
                      type="tel"
                      value={formData.userPhone}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, userPhone: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="+1 555 123 4567"
                      autoFocus
                    />
                  </label>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(4)}
                      disabled={!canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      Next
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Best contact */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">
                      What&apos;s the best way to reach you?
                    </p>
                    <p className="text-xs text-meta-dark/70">
                      This tells us how to follow up with you or your team without sending messages
                      where you don&apos;t usually respond.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {BEST_CONTACT_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 has-[:checked]:border-meta-purple has-[:checked]:bg-meta-purple/5"
                      >
                        <input
                          type="radio"
                          name="bestContact"
                          value={opt.value}
                          checked={formData.bestContactType === opt.value}
                          onChange={() =>
                            setFormData((d) => {
                              let nextContactDetail = d.contactDetail;
                              if (opt.value === "Email") {
                                nextContactDetail = d.userEmail;
                              } else if (opt.value === "Phone number/WhatsApp") {
                                nextContactDetail = d.userPhone;
                              } else if (opt.value === "Manager") {
                                nextContactDetail = "";
                              }
                              return {
                                ...d,
                                bestContactType: opt.value,
                                contactDetail: nextContactDetail,
                                managerPhone: opt.value === "Manager" ? d.managerPhone : "",
                              };
                            })
                          }
                          className="size-4 text-meta-purple"
                        />
                        <span className="text-meta-dark">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {formData.bestContactType && formData.bestContactType !== "Manager" && (
                    <label className="block space-y-1">
                      <span className="block text-sm font-semibold text-meta-dark">Contact detail</span>
                      <span className="block text-xs text-meta-dark/70">
                        Share the specific email or number where you actually manage partnership conversations.
                      </span>
                      <input
                        type="text"
                        value={formData.contactDetail}
                        onChange={(e) =>
                          setFormData((d) => ({ ...d, contactDetail: e.target.value }))
                        }
                        className={inputClass}
                        placeholder={
                          BEST_CONTACT_OPTIONS.find((o) => o.value === formData.bestContactType)
                            ?.placeholder ?? "Your answer"
                        }
                      />
                    </label>
                  )}
                  {formData.bestContactType === "Manager" && (
                    <>
                      <label className="block space-y-1">
                        <span className="block text-sm font-semibold text-meta-dark">Manager email</span>
                        <span className="block text-xs text-meta-dark/70">
                          We need the manager&apos;s email to reach out about opportunities.
                        </span>
                        <input
                          type="email"
                          value={formData.contactDetail}
                          onChange={(e) =>
                            setFormData((d) => ({ ...d, contactDetail: e.target.value }))
                          }
                          className={inputClass}
                          placeholder="manager@example.com"
                        />
                      </label>
                      <label className="block space-y-1">
                        <span className="block text-sm font-semibold text-meta-dark">Manager phone (with country code)</span>
                        <span className="block text-xs text-meta-dark/70">
                          We also need a phone number (e.g. WhatsApp) for the manager.
                        </span>
                        <input
                          type="tel"
                          value={formData.managerPhone}
                          onChange={(e) =>
                            setFormData((d) => ({ ...d, managerPhone: e.target.value }))
                          }
                          className={inputClass}
                          placeholder="+1 555 123 4567"
                        />
                      </label>
                    </>
                  )}
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(3)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(5)}
                      disabled={!canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      Next
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 5: Primary platform + URLs */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">
                      Social Media Profiles
                    </p>
                    <p className="text-xs text-meta-dark/70">
                      Please provide links to all your active social profiles below. The comprehensive view of your
                      content helps us effectively match you with the right branded partnerships and growth opportunities.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-meta-dark/80">
                        Where do you mainly publish content today?
                      </p>
                      <p className="text-[11px] text-meta-dark/60">
                        We use this to understand where you upload most of your content, while still reviewing all
                        your social profiles.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {PLATFORM_OPTIONS.map((p) => (
                        <label
                          key={p}
                          className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 has-[:checked]:border-meta-purple has-[:checked]:bg-meta-purple/5"
                        >
                          <input
                            type="radio"
                            name="platform"
                            value={p}
                            checked={formData.mainPlatform === p}
                            onChange={() => {
                              setFormData((d) => ({ ...d, mainPlatform: p }));
                              setPlatformError("");
                            }}
                            className="size-4 text-meta-purple"
                          />
                          <span className="text-sm text-meta-dark">{p}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                    <p className="text-xs text-meta-dark/70">
                      Add links to all your active profiles below. Your main platform is required; the others are optional
                      but strongly recommended.
                    </p>
                    <input
                      type="url"
                      placeholder="Instagram profile URL"
                      value={formData.instagramUrl}
                      onChange={(e) => {
                        setFormData((d) => ({ ...d, instagramUrl: e.target.value }));
                        setPlatformError("");
                      }}
                      className={inputClass}
                    />
                    <input
                      type="url"
                      placeholder="YouTube channel URL"
                      value={formData.youtubeUrl}
                      onChange={(e) => {
                        setFormData((d) => ({ ...d, youtubeUrl: e.target.value }));
                        setPlatformError("");
                      }}
                      className={inputClass}
                    />
                    <input
                      type="url"
                      placeholder="Facebook page URL"
                      value={formData.facebookUrl}
                      onChange={(e) => {
                        setFormData((d) => ({ ...d, facebookUrl: e.target.value }));
                        setPlatformError("");
                      }}
                      className={inputClass}
                    />
                    <input
                      type="url"
                      placeholder="TikTok profile URL"
                      value={formData.tiktokUrl}
                      onChange={(e) => {
                        setFormData((d) => ({ ...d, tiktokUrl: e.target.value }));
                        setPlatformError("");
                      }}
                      className={inputClass}
                    />
                    <input
                      type="url"
                      placeholder="Twitch channel URL"
                      value={formData.twitchUrl}
                      onChange={(e) => {
                        setFormData((d) => ({ ...d, twitchUrl: e.target.value }));
                        setPlatformError("");
                      }}
                      className={inputClass}
                    />
                    <input
                      type="url"
                      placeholder="Other platform URL (optional)"
                      value={formData.otherUrl}
                      onChange={(e) => {
                        setFormData((d) => ({ ...d, otherUrl: e.target.value }));
                        setPlatformError("");
                      }}
                      className={inputClass}
                    />
                  </div>
                  {platformError && (
                    <p className="text-sm text-red-600">{platformError}</p>
                  )}
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(4)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => {
                        if (validatePlatformStep()) setStep(6);
                      }}
                      disabled={!canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      Next
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 6: Content niche */}
              {step === 6 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">
                      How would you describe your content? (select all that apply)
                    </p>
                    <p className="text-xs text-meta-dark/70">
                      This helps us match you with opportunities that fit your style and audience.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {CONTENT_NICHES.map((niche) => (
                      <label
                        key={niche}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 has-[:checked]:border-meta-purple has-[:checked]:bg-meta-purple/5"
                      >
                        <input
                          type="checkbox"
                          checked={formData.contentNiche.includes(niche)}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              contentNiche: e.target.checked
                                ? [...d.contentNiche, niche]
                                : d.contentNiche.filter((n) => n !== niche),
                            }))
                          }
                          className="size-4 rounded text-meta-purple"
                        />
                        <span className="text-meta-dark">{niche}</span>
                      </label>
                    ))}
                  </div>
                  <label className="block space-y-1">
                    <span className="block text-sm font-semibold text-meta-dark">Other</span>
                    <span className="block text-xs text-meta-dark/70">
                      If your niche doesn&apos;t fit neatly in the list, describe it in your own words here.
                    </span>
                    <input
                      type="text"
                      value={formData.contentNicheOther}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, contentNicheOther: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="Describe your content"
                    />
                  </label>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(5)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(7)}
                      disabled={!canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      Next
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 7: Explore options */}
              {step === 7 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">
                      Are you open to exploring new distribution or monetization options?
                    </p>
                    <p className="text-xs text-meta-dark/70">
                      This simply tells us how proactive to be with new ideas&mdash;we respect your pace,
                      whether you&apos;re ready now or just curious.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {EXPLORE_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 has-[:checked]:border-meta-purple has-[:checked]:bg-meta-purple/5"
                      >
                        <input
                          type="radio"
                          name="explore"
                          value={opt}
                          checked={formData.exploreOptions === opt}
                          onChange={() =>
                            setFormData((d) => ({ ...d, exploreOptions: opt }))
                          }
                          className="size-4 text-meta-purple"
                        />
                        <span className="text-meta-dark">{opt}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(6)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={status === "loading" || !canProceed()}
                      className="flex-1 bg-meta-purple hover:bg-meta-purple/90"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 size-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
