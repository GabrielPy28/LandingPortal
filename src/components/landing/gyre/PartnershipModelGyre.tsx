"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, ClipboardCheck, FileInput, Gauge } from "lucide-react";

const REQUIREMENTS = [
  { label: "Platform", value: "YouTube" },
  { label: "Subscribers", value: "No specific number required" },
  { label: "Monthly views", value: "1,000,000+ views" },
  { label: "Content library", value: "At least 100 long-form videos OR 200 Shorts" },
  { label: "Activity", value: "At least 1 video uploaded in the last month" },
  { label: "Frequency", value: "Regular uploads of 1–2 videos per month" },
  { label: "Target topics", value: "Kids & Teens, Gaming, Music, Entertainment & Fun, Business, Fashion & Beauty, Lifestyle, Culinary / Food, Education & Science, DIY" },
  { label: "Restricted", value: "NO Podcasts, NO Tech Reviews, NO Interviews" },
];

const TARGET_VERTICALS = [
  "Kids & Teens",
  "Gaming",
  "Music",
  "Entertainment & Fun",
  "Business",
  "Fashion & Beauty",
  "Lifestyle",
  "Culinary / Food",
  "Education & Science",
  "DIY",
];

const RESTRICTED_TYPES = ["Podcast", "Tech Reviews", "Interviews"];

const CRITERIA_LABELS = [
  "Not restricted content",
  "Monthly views ≥ 1M",
  "100+ long-form OR 200+ Shorts",
  "1+ upload in last month",
  "Frequency ≥ 1 video/month",
  "Target vertical",
];

function parseNumber(s: string): number {
  const n = parseInt(s.replace(/\D/g, ""), 10);
  return Number.isNaN(n) ? 0 : n;
}

export function PartnershipModelGyre() {
  const [monthlyViews, setMonthlyViews] = useState("");
  const [longFormCount, setLongFormCount] = useState("");
  const [shortsCount, setShortsCount] = useState("");
  const [uploadsLastMonth, setUploadsLastMonth] = useState("");
  const [lastVideoDate, setLastVideoDate] = useState("");
  const [frequency, setFrequency] = useState("");
  const [vertical, setVertical] = useState("");
  const [restricted, setRestricted] = useState("");

  const criteria = useMemo(() => {
    const views = parseNumber(monthlyViews);
    const longForm = parseNumber(longFormCount);
    const shorts = parseNumber(shortsCount);
    const lastMonth = parseNumber(uploadsLastMonth);

    return [
      true /* Not restricted: siempre aceptable en la barra; el valor se envía para validación final */,
      views >= 1_000_000,
      longForm >= 100 || shorts >= 200,
      lastMonth >= 1,
      frequency === "1-2" || frequency === "more",
      vertical !== "" && TARGET_VERTICALS.includes(vertical),
    ];
  }, [monthlyViews, longFormCount, shortsCount, uploadsLastMonth, frequency, vertical, restricted]);

  const passedCount = criteria.filter(Boolean).length;
  const totalCount = criteria.length;
  const eligibilityPercent = passedCount * 16.5 + (passedCount === totalCount ? 1 : 0);

  return (
    <section
      id="partnership-model"
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
      <div className="container relative mx-auto max-w-6xl px-6">
        <header className="mb-14 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gyre-red">
            How to approach this opportunity
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            Partnership Model: YouTube 24/7 Live Stream Looping
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gyre-muted">
            Check if your channel meets our requirements. Fill in your data to see your eligibility — we take your info to AIR/Gyre for final validation.
          </p>
          <p className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gyre-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-gyre-red" aria-hidden />
              Quick check
            </span>
            <span className="text-white/40" aria-hidden>·</span>
            <span>No commitment</span>
            <span className="text-white/40" aria-hidden>·</span>
            <span>Validation by AIR/Gyre</span>
          </p>
        </header>

        {/* Flujo visual: 3 pasos */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gyre-red/20 text-gyre-red">
              <ClipboardCheck className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-medium text-white">1. Review requirements</span>
          </div>
          <ArrowRight className="size-5 shrink-0 text-white/40" aria-hidden />
          <div className="flex items-center gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gyre-muted">
              <FileInput className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-medium text-white">2. Fill your data</span>
          </div>
          <ArrowRight className="size-5 shrink-0 text-white/40" aria-hidden />
          <div className="flex items-center gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gyre-muted">
              <Gauge className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-medium text-white">3. See eligibility</span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Requisitos */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-gyre-red/30 bg-gyre-red/10 text-gyre-red">
                <ClipboardCheck className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Requirements
                </h3>
                <p className="text-xs text-gyre-muted">Does your channel fit?</p>
              </div>
            </div>
            <ul className="space-y-3">
              {REQUIREMENTS.map(({ label, value }, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gyre-red" aria-hidden />
                  <div>
                    <p className="font-medium text-white">{label}</p>
                    <p className="text-sm text-gyre-muted">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario (fila arriba) + barra de elegibilidad horizontal (fila abajo) */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-8 rounded-2xl border-2 border-gyre-red/20 bg-white/5 p-6 sm:p-10">
              {/* Fila 1: Formulario a ancho completo */}
              <form
                className="flex flex-col space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-gyre-red/30 bg-gyre-red/10 text-gyre-red">
                    <FileInput className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Check your eligibility
                    </h3>
                    <p className="text-xs text-gyre-muted">Enter your channel data below</p>
                  </div>
                </div>

                {/* Fila 1 desktop: Monthly views | Long-form videos */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <label htmlFor="monthly-views" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Monthly views
                    </label>
                    <input
                      id="monthly-views"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 1500000"
                      value={monthlyViews}
                      onChange={(e) => setMonthlyViews(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="long-form" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Long-form videos
                    </label>
                    <input
                      id="long-form"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 120"
                      value={longFormCount}
                      onChange={(e) => setLongFormCount(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    />
                  </div>
                </div>

                {/* Fila 2 desktop: Uploads in last month | Last video published */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <label htmlFor="uploads-month" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Uploads in last month
                    </label>
                    <input
                      id="uploads-month"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 2"
                      value={uploadsLastMonth}
                      onChange={(e) => setUploadsLastMonth(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-video-date" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Last video published
                    </label>
                    <input
                      id="last-video-date"
                      type="date"
                      value={lastVideoDate}
                      onChange={(e) => setLastVideoDate(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50 [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Fila 3 desktop: Shorts | Upload frequency */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <label htmlFor="shorts" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Shorts
                    </label>
                    <input
                      id="shorts"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 250"
                      value={shortsCount}
                      onChange={(e) => setShortsCount(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="frequency" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Upload frequency
                    </label>
                    <select
                      id="frequency"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    >
                      <option value="">Select</option>
                      <option value="1-2">1–2 videos per month</option>
                      <option value="more">More than 2/month</option>
                      <option value="less">Less than 1/month</option>
                    </select>
                  </div>
                </div>

                {/* Fila 4 desktop: Channel vertical | My content is */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <label htmlFor="vertical" className="mb-2 block text-sm font-medium text-gyre-muted">
                      Channel vertical
                    </label>
                    <select
                      id="vertical"
                      value={vertical}
                      onChange={(e) => setVertical(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    >
                      <option value="">Select</option>
                      {TARGET_VERTICALS.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="restricted" className="mb-2 block text-sm font-medium text-gyre-muted">
                      My content is (if none, leave empty)
                    </label>
                    <select
                      id="restricted"
                      value={restricted}
                      onChange={(e) => setRestricted(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white focus:border-gyre-red/50 focus:outline-none focus:ring-1 focus:ring-gyre-red/50"
                    >
                      <option value="">None of these</option>
                      {RESTRICTED_TYPES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-gyre-red px-6 py-4 text-base font-semibold text-white transition hover:bg-gyre-red/90 focus:outline-none focus:ring-2 focus:ring-gyre-red/50"
                >
                  Submit for validation
                </button>
              </form>

              {/* Fila 2: Barra de elegibilidad horizontal */}
              <div className="space-y-4 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <Gauge className="size-4 text-gyre-red" aria-hidden />
                  <p className="text-xs font-medium uppercase tracking-wider text-gyre-muted">
                    Your eligibility
                  </p>
                  <span className="rounded-md bg-gyre-red/20 px-2 py-0.5 text-sm font-semibold tabular-nums text-gyre-red">
                    {eligibilityPercent}%
                  </span>
                </div>
                <div
                  className="flex w-full gap-1.5 rounded-xl border border-white/15 bg-white/5 p-2"
                  role="progressbar"
                  aria-valuenow={passedCount}
                  aria-valuemin={0}
                  aria-valuemax={totalCount}
                  aria-label={`${passedCount} of ${totalCount} criteria met`}
                >
                  {criteria.map((met, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-lg py-2 transition-colors ${
                        met ? "bg-gyre-red" : "bg-white/15"
                      }`}
                      title={CRITERIA_LABELS[i]}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm font-medium text-white">
                    {passedCount === totalCount
                      ? "All criteria met"
                      : `${passedCount} of ${totalCount} met`}
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gyre-muted">
                    {CRITERIA_LABELS.map((label, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-1.5 ${criteria[i] ? "text-gyre-red" : ""}`}
                        title={label}
                      >
                        {criteria[i] ? (
                          <CheckCircle2 className="size-3.5 shrink-0" />
                        ) : (
                          <XCircle className="size-3.5 shrink-0 text-white/40" />
                        )}
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
                {passedCount === totalCount ? (
                  <p className="rounded-lg bg-gyre-red/10 px-4 py-2 text-center text-sm font-medium text-gyre-red">
                    You may qualify. Submit for validation.
                  </p>
                ) : passedCount >= totalCount / 2 ? (
                  <p className="text-center text-sm text-gyre-muted">
                    You’re close. Adjust the fields above to improve.
                  </p>
                ) : (
                  <p className="text-center text-sm text-gyre-muted">
                    Review requirements and try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
