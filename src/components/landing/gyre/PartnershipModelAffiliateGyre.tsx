"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const AFFILIATE_CRITERIA = [
  { label: "Target", value: "Active YouTube creators who need increased watch time or passive revenue." },
  { label: "Platform", value: "YouTube." },
  { label: "Subscribers", value: "Recommended: 5,000 – 500,000 (sweet spot for budget and growth need)." },
  { label: "Monetization", value: "Highly recommended: active in YouTube Partner Program (YPP)." },
  { label: "Content library", value: "Sufficient for a non-repetitive loop (e.g. 20+ videos ~10 min, or fewer very long videos)." },
  { label: "Activity", value: "At least 1 video uploaded in the last month." },
];

const TARGET_TOPICS = [
  "Music & Audio: Lo-fi, ambient, relaxation, ASMR.",
  "Gaming: Long-play playthroughs, non-competitive background gaming.",
  "Podcasts & Talk Shows: Video podcasts with large back catalogs.",
  "Education: Tutorials, documentaries, Study With Me loops.",
  "Niche Hobbyists: Extended process videos (painting, building, coding).",
];

const KEY_SELLING_POINTS = [
  "Passive Watch Time: Boost channel watch hours while the creator sleeps.",
  "Back Catalog Monetization: Generate revenue from old videos with zero views.",
  "Gap Filling: Keep the channel active between regular uploads.",
];

const PLANS_HD = [
  {
    name: "Free Trial",
    price: "$0",
    period: "7 Days",
    features: [
      "Simultaneous streams: 1 (HD)",
      "Platforms: YouTube",
      "Gyre Video Converter: Automatic video optimization",
      "Playlists: +",
      "Stream scheduler: +",
      "Storage: 20 GB, up to 15 files",
      "Format: Full HD 30fps",
      "Gyre Watermark: +",
    ],
  },
  {
    name: "Start",
    price: "$49",
    period: "month",
    features: [
      "Simultaneous streams: 1 (HD)",
      "Platforms: YouTube, Twitch, Facebook, Instagram, X, Kick & MixCloud",
      "Gyre Video Converter: +",
      "Playlists: –",
      "Stream scheduler: –",
      "Storage: 35 GB",
      "Format: Full HD 60fps",
      "Gyre Watermark: –",
    ],
  },
  {
    name: "Start+",
    price: "$99",
    period: "month",
    features: [
      "Simultaneous streams: 4 (HD)",
      "Platforms: YouTube, Twitch, Facebook, Instagram, X, Kick & MixCloud",
      "Gyre Video Converter: +",
      "Playlists: +",
      "Stream scheduler: +",
      "Storage: 75 GB",
      "Format: Full HD 60fps",
      "Gyre Watermark: –",
    ],
  },
  {
    name: "PRO+",
    price: "$169",
    period: "month",
    features: [
      "Simultaneous streams: 8 (HD)",
      "Platforms: YouTube, Twitch, Facebook, Instagram, X, Kick & MixCloud",
      "Gyre Video Converter: +",
      "Playlists: +",
      "Stream scheduler: +",
      "Storage: 150 GB",
      "Format: Full HD 60fps",
      "Gyre Watermark: –",
    ],
  },
];

const PLANS_4K = [
  {
    name: "4k Start",
    price: "$75",
    period: "month",
    features: [
      "Simultaneous streams: 1 (4K)",
      "Platforms: YouTube, Twitch, Facebook, Instagram, X, Kick & MixCloud",
      "Gyre Video Converter: +",
      "Playlists: –",
      "Stream scheduler: –",
      "Storage: 90 GB",
      "Format: 4K 60fps",
      "Gyre Watermark: –",
    ],
  },
  {
    name: "4k Start+",
    price: "$179",
    period: "month",
    features: [
      "Simultaneous streams: 2 (HD) & 2 (4K)",
      "Platforms: YouTube, Twitch, Facebook, Instagram, X, Kick & MixCloud",
      "Gyre Video Converter: +",
      "Playlists: +",
      "Stream scheduler: +",
      "Storage: 225 GB",
      "Format: 4K 60fps",
      "Gyre Watermark: –",
    ],
  },
  {
    name: "4k Pro+",
    price: "$289",
    period: "month",
    features: [
      "Simultaneous streams: 4 (HD) & 4 (4K)",
      "Platforms: YouTube, Twitch, Facebook, Instagram, X, Kick & MixCloud",
      "Gyre Video Converter: +",
      "Playlists: +",
      "Stream scheduler: +",
      "Storage: 450 GB",
      "Format: 4K 60fps",
      "Gyre Watermark: –",
    ],
  },
];

function PlanCard({
  name,
  price,
  period,
  features,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gyre-red/20">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <h4 className="text-lg font-semibold text-white">{name}</h4>
        <span className="text-2xl font-bold text-gyre-red">
          {price}
          <span className="ml-1 text-sm font-normal text-gyre-muted">/{period}</span>
        </span>
      </div>
      <ul className="mb-6 flex-1 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gyre-muted">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gyre-red/80" aria-hidden />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="block w-full rounded-xl bg-gyre-red px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gyre-red/90"
      >
        Get this plan
      </a>
    </div>
  );
}

type PlanView = "hd" | "4k";

export function PartnershipModelAffiliateGyre() {
  const [planView, setPlanView] = useState<PlanView>("hd");

  const plans = planView === "hd" ? PLANS_HD : PLANS_4K;
  const isHd = planView === "hd";
  const gridClass = isHd
    ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id="partnership-affiliate"
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
      <div className="container relative mx-auto max-w-6xl px-6">
        <header className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gyre-red">
            Do it yourself
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            Partnership Model: Affiliate Sales / Software Subscription via Referral
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gyre-muted">
            Select the plan that suits your content and growth goals. All packages use the La Neta referral code.
          </p>
        </header>

        {/* Criterios de selección (Perfect Match) */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-lg font-semibold text-white">
            Who is this for? (Perfect Match)
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AFFILIATE_CRITERIA.map(({ label, value }, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gyre-red" aria-hidden />
                <div>
                  <p className="font-medium text-white">{label}</p>
                  <p className="text-sm text-gyre-muted">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="mb-3 font-medium text-white">Target topics (most likely buyers)</p>
              <ul className="space-y-2 text-sm text-gyre-muted">
                {TARGET_TOPICS.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gyre-red">·</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="mb-3 font-medium text-white">Key selling points</p>
              <ul className="space-y-2 text-sm text-gyre-muted">
                {KEY_SELLING_POINTS.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gyre-red" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Switch HD / 4K */}
        <div className="mb-10 flex flex-col items-center">
          <p className="mb-4 text-sm font-medium text-gyre-muted">Choose plan type</p>
          <div
            role="tablist"
            aria-label="Plan type"
            className="relative flex rounded-full border border-white/20 bg-white/5 p-1 shadow-inner"
          >
            {/* Sliding pill */}
            <div
              className="absolute top-1 bottom-1 rounded-full bg-gyre-red transition-all duration-300 ease-out"
              style={{
                left: "4px",
                width: "calc(50% - 4px)",
                transform: isHd ? "translateX(0)" : "translateX(100%)",
              }}
            />
            <button
              type="button"
              role="tab"
              aria-selected={isHd}
              aria-controls="plans-panel"
              id="tab-hd"
              onClick={() => setPlanView("hd")}
              className="relative z-10 min-w-[7rem] rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 sm:min-w-[8rem]"
            >
              <span className={isHd ? "text-white" : "text-gyre-muted"}>HD</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!isHd}
              aria-controls="plans-panel"
              id="tab-4k"
              onClick={() => setPlanView("4k")}
              className="relative z-10 min-w-[7rem] rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 sm:min-w-[8rem]"
            >
              <span className={!isHd ? "text-white" : "text-gyre-muted"}>4K</span>
            </button>
          </div>
          <p className="mt-3 text-sm text-gyre-muted">
            {isHd ? "Option HD (month)" : "Option 4K (month)"}
          </p>
        </div>

        {/* Planes (una sola vista animada) */}
        <div
          id="plans-panel"
          role="tabpanel"
          aria-labelledby={isHd ? "tab-hd" : "tab-4k"}
          className="mb-14 min-h-[280px]"
        >
          <div
            key={planView}
            className={`animate-in fade-in-0 duration-300 ${gridClass}`}
            style={{ animationFillMode: "both" }}
          >
            {plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
