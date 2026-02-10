"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
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
    bestContactType: "" as string,
    contactDetail: "",
    mainPlatform: "" as string,
    youtubeUrl: "",
    instagramUrl: "",
    tiktokUrl: "",
    facebookUrl: "",
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
      typeOfContact: formData.bestContactType,
      contactDetail: formData.contactDetail,
      mainPlatform: formData.mainPlatform,
      youtubeChannel: formData.youtubeUrl,
      instagramAccount: formData.instagramUrl,
      tiktokAccount: formData.tiktokUrl,
      facebookPage: formData.facebookUrl,
      other: formData.otherUrl,
      contentNiche: nicheText || "",
      exploreOptions: formData.exploreOptions,
    });
    setStatus("success");
    setTimeout(onClose, 3000);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.fullName.trim().length > 0;
      case 2:
        return formData.bestContactType && formData.contactDetail.trim().length > 0;
      case 3:
        if (!formData.mainPlatform) return false;
        const main = formData.mainPlatform.toLowerCase();
        if (main === "youtube") return formData.youtubeUrl.trim().length > 0;
        if (main === "instagram") return formData.instagramUrl.trim().length > 0;
        if (main === "tiktok") return formData.tiktokUrl.trim().length > 0;
        if (main === "facebook") return formData.facebookUrl.trim().length > 0;
        if (main === "other") return formData.otherUrl.trim().length > 0;
        if (main === "multiple platforms")
          return [
            formData.youtubeUrl,
            formData.instagramUrl,
            formData.tiktokUrl,
            formData.facebookUrl,
            formData.otherUrl,
          ].some((u) => u.trim().length > 0);
        return true;
      case 4:
        return formData.contentNiche.length > 0 || formData.contentNicheOther.trim().length > 0;
      case 5:
        return !!formData.exploreOptions;
      default:
        return true;
    }
  };

  const inputClass =
    "w-full rounded-lg border border-meta-purple/30 bg-white px-4 py-3 text-meta-dark placeholder:text-slate-400 focus:border-meta-purple focus:outline-none focus:ring-2 focus:ring-meta-purple/20";

  if (!isOpen) return null;

  const totalSteps = 6;
  const isLastStep = step === 5;

  const validatePlatformStep = () => {
    if (!formData.mainPlatform) {
      setPlatformError("Please choose where you mainly publish today.");
      return false;
    }

    const urlMatchesPlatform = (platform: string, url: string) => {
      const value = url.toLowerCase();
      if (!value.trim()) return false;
      if (platform === "youtube") return value.includes("youtube.com") || value.includes("youtu.be");
      if (platform === "instagram") return value.includes("instagram.com");
      if (platform === "tiktok") return value.includes("tiktok.com");
      if (platform === "facebook") return value.includes("facebook.com");
      return true;
    };

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
    } else if (main === "other") {
      if (!formData.otherUrl.trim()) {
        setPlatformError("Please add the URL for your main platform.");
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
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <h2 id="connect-opportunities-title" className="text-xl font-bold text-meta-dark">
            Connect me to new opportunities
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
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle2 className="size-14 text-green-500" />
              <p className="text-center text-lg font-medium text-meta-dark">
                Thanks! We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i <= step ? "bg-meta-purple" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Step 0: Welcome */}
              {step === 0 && (
                <div className="space-y-6">
                  <p className="text-meta-dark/90">
                    To connect you with the right opportunities, we first need to understand a bit about you
                    and your content. This helps us avoid generic offers and keep everything relevant.
                  </p>
                  <p className="text-sm text-meta-dark/70">
                    We&apos;ll ask a few quick questions about who you are, how to contact you, where you publish,
                    and what kind of content you create.
                  </p>
                  <Button
                    onClick={() => setStep(1)}
                    className="w-full bg-meta-purple py-6 hover:bg-meta-purple/90"
                  >
                    Get started
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </div>
              )}

              {/* Step 1: Full Name */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-meta-dark">Full Name</p>
                    <p className="text-xs text-meta-dark/70">
                      We use your name to personalize communication and keep your profile consistent
                      across the opportunities we propose.
                    </p>
                  </div>
                  <label className="block">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData((d) => ({ ...d, fullName: e.target.value }))}
                      className={inputClass}
                      placeholder="Your name"
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

              {/* Step 2: Best contact */}
              {step === 2 && (
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
                            setFormData((d) => ({
                              ...d,
                              bestContactType: opt.value,
                              contactDetail: "",
                            }))
                          }
                          className="size-4 text-meta-purple"
                        />
                        <span className="text-meta-dark">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {formData.bestContactType && (
                    <label className="block space-y-1">
                      <span className="block text-sm font-semibold text-meta-dark">Contact detail</span>
                      <span className="block text-xs text-meta-dark/70">
                        Share the specific email, number, or manager contact where you actually
                        manage partnership conversations.
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

              {/* Step 3: Primary platform + URLs */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">
                      Where do you mainly publish content today?
                    </p>
                    <p className="text-xs text-meta-dark/70">
                      Knowing your main platform helps us understand your current audience, format,
                      and what kind of distribution or monetization options make the most sense.
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
                  {formData.mainPlatform && formData.mainPlatform !== "Other" && (
                    <div className="space-y-3 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-meta-dark">
                        Add your profile URLs (main platform required, others optional)
                      </p>
                      <p className="text-xs text-meta-dark/70">
                        We review your public profiles only to understand your content, audience and fit
                        for specific programs&mdash;not to judge style or production quality.
                      </p>
                      {(formData.mainPlatform === "YouTube" ||
                        formData.mainPlatform === "Multiple platforms") && (
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
                      )}
                      {(formData.mainPlatform === "Instagram" ||
                        formData.mainPlatform === "Multiple platforms") && (
                        <input
                          type="url"
                          placeholder="Instagram URL"
                          value={formData.instagramUrl}
                          onChange={(e) => {
                            setFormData((d) => ({ ...d, instagramUrl: e.target.value }));
                            setPlatformError("");
                          }}
                          className={inputClass}
                        />
                      )}
                      {(formData.mainPlatform === "TikTok" ||
                        formData.mainPlatform === "Multiple platforms") && (
                        <input
                          type="url"
                          placeholder="TikTok URL"
                          value={formData.tiktokUrl}
                          onChange={(e) => {
                            setFormData((d) => ({ ...d, tiktokUrl: e.target.value }));
                            setPlatformError("");
                          }}
                          className={inputClass}
                        />
                      )}
                      {(formData.mainPlatform === "Facebook" ||
                        formData.mainPlatform === "Multiple platforms") && (
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
                      )}
                      {(formData.mainPlatform === "Other" ||
                        formData.mainPlatform === "Multiple platforms") && (
                        <input
                          type="url"
                          placeholder="Other platform URL"
                          value={formData.otherUrl}
                          onChange={(e) => {
                            setFormData((d) => ({ ...d, otherUrl: e.target.value }));
                            setPlatformError("");
                          }}
                          className={inputClass}
                        />
                      )}
                    </div>
                  )}
                  {formData.mainPlatform === "Other" && (
                    <div className="space-y-3 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-meta-dark">Other platform URL</p>
                      <p className="text-xs text-meta-dark/70">
                        If your main presence is elsewhere, share the link where brands or partners
                        can best understand your work.
                      </p>
                      <input
                        type="url"
                        placeholder="Your profile URL"
                        value={formData.otherUrl}
                        onChange={(e) => {
                          setFormData((d) => ({ ...d, otherUrl: e.target.value }));
                          setPlatformError("");
                        }}
                        className={inputClass}
                      />
                    </div>
                  )}
                  {platformError && (
                    <p className="text-sm text-red-600">{platformError}</p>
                  )}
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={() => {
                        if (validatePlatformStep()) setStep(4);
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

              {/* Step 4: Content niche */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-meta-dark">
                      How would you describe your content? (select all that apply)
                    </p>
                    <p className="text-xs text-meta-dark/70">
                      This helps us match you with opportunities that fit your style and audience,
                      instead of sending you completely random programs.
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

              {/* Step 5: Explore options */}
              {step === 5 && (
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
                    <Button variant="outline" onClick={() => setStep(4)}>
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
