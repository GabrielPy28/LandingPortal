"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import Image from "next/image";
import {
  MessageCircle,
  Bot,
  Gift,
  ShoppingBag,
  Star,
  CheckCircle2,
  ExternalLink,
  Target,
  Users,
  Radio,
  CircleDollarSign,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { SiNbc } from "react-icons/si";
import { TbBrandNationalGeographic } from "react-icons/tb";
import { FcBbc } from "react-icons/fc";

const GYRE_CHART_THEME = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#F20544" },
    background: { default: "#0D0D0D", paper: "rgba(255,255,255,0.05)" },
    text: { primary: "#F1F5F9", secondary: "rgba(241,245,249,0.8)" },
  },
  typography: { fontFamily: "inherit" },
});

const COMMUNITY_ITEMS = [
  {
    icon: MessageCircle,
    title: "People talk to people",
    text: "Increased engagement on your channel.",
  },
  {
    icon: Bot,
    title: "Chat bots are your friends",
    text: "Filter inappropriate content, interact with the community, and run CTAs: like, subscribe, share, donate, or buy.",
  },
];

const MONETIZATION_ITEMS = [
  { icon: Star, label: "Brand integrations" },
  { icon: Gift, label: "Superchat" },
  { icon: ShoppingBag, label: "Live shopping" },
];

const HIGHLIGHTS = [
  "Access to the channel is not required — login with email.",
  "Gyre works for all YouTube channels, even with 0 subs.",
  "Views and watch time from streams count toward YPP threshold.",
  "Streams can be saved only if the creator saves them; streams over 18 hours cannot be saved.",
];

const INRI_VIEWS_DATA = { vod: 2, live: 10.7 };
const INRI_AVD_DATA = { vod: 18, live: 27 };
const INRI_VIEWS_MULTIPLIER = (INRI_VIEWS_DATA.live / INRI_VIEWS_DATA.vod).toFixed(1);
const INRI_AVD_INCREASE_PCT = Math.round(((INRI_AVD_DATA.live - INRI_AVD_DATA.vod) / INRI_AVD_DATA.vod) * 100);
const INRI_WATCH_TIME = [
  { id: "vod", value: 11, label: "VODs", color: "rgba(255,255,255,0.25)" },
  { id: "live", value: 89, label: "Live", color: "#F20544" },
];

const COMPANIES = [
  { name: "Google", Icon: FaGoogle, category: "Tech" },
  { name: "National Geographic", Icon: TbBrandNationalGeographic, category: "Media" },
  { name: "BBC", Icon: FcBbc, category: "Media" },
  { name: "NBCUniversal", Icon: SiNbc, category: "Media" },
];

const COMPANY_LOGOS = [
  { name: "WildBrain", src: "/images/images_gyre/WildBrain-Logo.png", category: "Studios", largeLogo: true },
  { name: "Little Dot Studios", src: "/images/images_gyre/little_dot_studios.png", category: "Studios", largeLogo: true },
  { name: "Diwan videos", src: "/images/images_gyre/Diwan.png", category: "Studios", largeLogo: true },
];

const HELP_YOU_TO = [
  {
    icon: Target,
    title: "Complement your strategy",
    text: "Content promotion in any niche and on channels of any size.",
  },
  {
    icon: Users,
    title: "Bring new audience",
    text: "Reach more viewers and grow your channels with 24/7 presence.",
  },
  {
    icon: Radio,
    title: "Keep channels active",
    text: "Your partners' channels stay live when they cannot create new videos.",
  },
  {
    icon: CircleDollarSign,
    title: "Monetize existing content",
    text: "Additionally monetize existing videos of your partners.",
  },
];

function InriDashboard() {
  const axisColor = "rgba(241,245,249,0.7)";

  return (
    <div className="space-y-8">
      {/* Hero impact strip — alto impacto en un vistazo */}
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gyre-red/30 bg-gyre-red/10 px-6 py-5">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          <span className="rounded bg-gyre-red/20 px-2 py-0.5 text-gyre-red">79.9%</span>
          revenue from live
        </span>
        <span className="text-white/40" aria-hidden>·</span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          <span className="rounded bg-gyre-red/20 px-2 py-0.5 text-gyre-red">7×</span>
          longer watch time on live
        </span>
        <span className="text-white/40" aria-hidden>·</span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          <span className="rounded bg-gyre-red/20 px-2 py-0.5 text-gyre-red">+10.7M</span>
          views from live streams
        </span>
        <span className="text-white/40" aria-hidden>·</span>
        <span className="text-sm text-gyre-muted">in 123 days</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Views — destaque del multiplicador */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gyre-red">
            Views (millions)
          </p>
          <p className="mb-3 text-xs text-gyre-muted">
            VODs vs live streams · <span className="font-semibold text-gyre-red">{INRI_VIEWS_MULTIPLIER}× more from live</span>
          </p>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: ["VODs", "Live"],
                tickLabelStyle: { fill: axisColor, fontSize: 12 },
              },
            ]}
            series={[
              {
                data: [INRI_VIEWS_DATA.vod, INRI_VIEWS_DATA.live],
                color: "#F20544",
                barLabel: (item) => {
                const v = item?.value;
                return v != null ? `${v}M` : null;
              },
              },
            ]}
            height={200}
            margin={{ top: 20, right: 10, left: 30, bottom: 30 }}
            sx={{
              "& .MuiChartsAxis-tickLabel": { fill: axisColor },
              "& .MuiChartsAxis-line": { stroke: axisColor },
              "& .MuiChartsLegend-root": { display: "none" },
            }}
          />
          <p className="mt-2 text-center text-sm font-medium text-white">
            VODs: <span className="text-gyre-red">2M</span> · Live: <span className="text-gyre-red">10.7M</span> views
          </p>
        </div>

        {/* AVD — destaque del incremento */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gyre-red">
            Avg. view duration (min)
          </p>
          <p className="mb-3 text-xs text-gyre-muted">
            VODs vs live · <span className="font-semibold text-gyre-red">+{INRI_AVD_INCREASE_PCT}% on live</span>
          </p>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: ["VODs", "Live"],
                tickLabelStyle: { fill: axisColor, fontSize: 12 },
              },
            ]}
            series={[
              {
                data: [INRI_AVD_DATA.vod, INRI_AVD_DATA.live],
                color: "#F20544",
                barLabel: (item) => {
                const v = item?.value;
                return v != null ? `${v} min` : null;
              },
              },
            ]}
            height={200}
            margin={{ top: 20, right: 10, left: 30, bottom: 30 }}
            sx={{
              "& .MuiChartsAxis-tickLabel": { fill: axisColor },
              "& .MuiChartsAxis-line": { stroke: axisColor },
              "& .MuiChartsLegend-root": { display: "none" },
            }}
          />
          <p className="mt-2 text-center text-sm font-medium text-white">
            VODs: <span className="text-gyre-red">18 min</span> · Live: <span className="text-gyre-red">27 min</span> avg. view duration
          </p>
        </div>

        {/* Watch time share — 89% live */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gyre-red">
            Watch time share
          </p>
          <p className="mb-3 text-xs text-gyre-muted">
            <span className="font-semibold text-gyre-red">89% from live</span> in 123 days
          </p>
          <PieChart
            series={[
              {
                data: INRI_WATCH_TIME,
                arcLabel: (item) => `${item.value}% ${item.label ?? ""}`.trim(),
                arcLabelMinAngle: 20,
                innerRadius: 30,
                outerRadius: 80,
              },
            ]}
            height={200}
            sx={{ "& .MuiChartsLegend-root": { display: "none" } }}
          />
          <p className="mt-2 text-center text-sm font-medium text-white">
            VODs: <span className="text-gyre-red">11%</span> of watch time · Live: <span className="text-gyre-red">89%</span> of watch time
          </p>
        </div>

        {/* Revenue & impact summary — tarjeta de cierre */}
        <div className="flex flex-col justify-center gap-5 rounded-2xl border-2 border-gyre-red/30 bg-gyre-red/10 p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gyre-red">
              Revenue impact
            </p>
            <p className="mt-2 text-3xl font-bold leading-tight text-white">
              79.9%
            </p>
            <p className="mt-1 text-sm text-gyre-muted">
              of total channel revenue from live streams
            </p>
          </div>
          <div className="space-y-3 border-t border-white/10 pt-4">
            <p className="text-sm text-white">
              <span className="text-2xl font-bold text-gyre-red">7×</span>
              <span className="ml-1">longer AVD on live vs VODs</span>
            </p>
            <p className="text-sm text-gyre-muted">
              <span className="font-semibold text-white">15%</span> of total views from live — content working 24/7.
            </p>
          </div>
          <p className="text-xs font-medium uppercase tracking-wider text-gyre-red/90">
            Real results · One creator · 123 days
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServicePresentationGyrePart2() {
  return (
    <ThemeProvider theme={GYRE_CHART_THEME}>
      <section
        id="proof-and-trust"
        className="relative scroll-mt-20 overflow-hidden border-t-2 border-white/20 bg-gyre-dark py-20 md:py-28"
      >
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-gyre-red/40" aria-hidden />
        <div className="container relative mx-auto max-w-6xl px-6">
          {/* Título de sección fusionado con imagen global */}
          <div className="relative mb-16 min-h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 sm:min-h-[480px] md:min-h-[540px]">
            <Image
              src="/images/images_gyre/full-shot-man-recording-himself.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gyre-dark via-gyre-dark/70 to-transparent" aria-hidden />
            <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 px-6 pb-8 pt-16 text-center sm:gap-5 sm:pb-10 sm:pt-20 md:pb-12">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gyre-red drop-shadow-md sm:text-sm">
                Why creators and brands choose Gyre
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-[2.75rem]">
                Community, monetization & proof
              </h2>
              <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/90 drop-shadow-md sm:gap-x-6 sm:text-base">
                <span>Trust</span>
                <span className="text-white/50" aria-hidden>·</span>
                <span>24/7 presence</span>
                <span className="text-white/50" aria-hidden>·</span>
                <span>Revenue</span>
                <span className="text-white/50" aria-hidden>·</span>
                <span>Scale</span>
                <span className="text-white/50" aria-hidden>·</span>
                <span>Real results</span>
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Community activation
              </h3>
              <ul className="space-y-4">
                {COMMUNITY_ITEMS.map(({ icon: Icon, title, text }, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon className="size-5 shrink-0 text-gyre-red" aria-hidden />
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="mt-1 text-sm text-gyre-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Additional monetization
              </h3>
              <div className="flex flex-wrap gap-3">
                {MONETIZATION_ITEMS.map(({ icon: Icon, label }, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gyre-muted"
                  >
                    <Icon className="size-4 shrink-0 text-gyre-red" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>

              <h3 className="pt-4 text-lg font-semibold text-white">
                Important highlights
              </h3>
              <ul className="space-y-2">
                {HIGHLIGHTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gyre-muted">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gyre-red" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pre-recorded live streams can help you to — presentación destacada */}
          <div className="mt-24 rounded-2xl border-2 border-gyre-red/20 bg-white/5 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gyre-red">
                What Gyre can do for you
              </p>
              <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                Pre-recorded live streams with Gyre can help you to
              </h3>
              <p className="text-sm text-gyre-muted">
                Four ways to grow reach, keep channels active, and monetize content — without going live yourself.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HELP_YOU_TO.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-gyre-red/20 hover:bg-white/10"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gyre-red/30 bg-gyre-red/10">
                    <Icon className="size-5 text-gyre-red" aria-hidden />
                  </div>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="text-sm leading-relaxed text-gyre-muted">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs font-medium uppercase tracking-wider text-gyre-red/80">
              Strategy · Audience · Presence · Revenue
            </p>
          </div>

          <div className="mt-24">
            <p className="mb-2 text-center text-xs font-medium uppercase tracking-wider text-gyre-red">
              Some of the creators who work with us
            </p>
            <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-gyre-red/30 ring-2 ring-white/10 sm:size-20">
                <Image
                  src="https://yt3.googleusercontent.com/wGw7rlH4s2A4v7OUM_cC5eNUrfF1naLXMN504m4fHeT-cOyT7ub1yPTQkN8fTFBFqU1dNJj1ig=s160-c-k-c0x00ffffff-no-rj"
                  alt="INRI Motivation YouTube channel"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  INRI Motivation
                </h3>
                <p className="mt-0.5 text-sm text-gyre-muted">
                  417K subscribers · Motivation · 123 days on Gyre
                </p>
              </div>
            </div>
            <p className="mb-2 text-center text-base font-medium text-white/90">
              High impact in 123 days: more views, longer watch time, and most revenue from live.
            </p>
            <p className="mb-6 text-center text-sm text-gyre-muted">
              <a
                href="https://www.youtube.com/@INRImotivation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gyre-red hover:underline"
              >
                youtube.com/@INRImotivation
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
              {" · "}
              4–16 simultaneous streams
            </p>
            <InriDashboard />
          </div>

          {/* Companies — confianza e impacto */}
          <div className="mt-24 rounded-2xl border-2 border-white/15 bg-white/5 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gyre-red">
                Trusted by global leaders
              </p>
              <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                The same platform used by tech giants and top media brands
              </h3>
              <p className="text-sm text-gyre-muted">
                Gyre powers 24/7 streaming for household names in tech, broadcast, and production. When they choose Gyre, it is because results and reliability matter.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-8">
              {COMPANIES.map(({ name, Icon, category }) => (
                <div
                  key={name}
                  className="flex w-[180px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center transition hover:border-gyre-red/20 hover:bg-white/10 sm:w-[200px]"
                  title={name}
                >
                  <Icon className="size-12 text-gyre-muted sm:size-14" aria-hidden />
                  <div className="flex flex-col items-center">
                    <p className="font-medium text-white">{name}</p>
                    <p className="text-xs text-gyre-muted">{category}</p>
                  </div>
                </div>
              ))}
              {COMPANY_LOGOS.map(({ name, src, category, largeLogo }) => (
                <div
                  key={name}
                  className="flex w-[180px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center transition hover:border-gyre-red/20 hover:bg-white/10 sm:w-[200px]"
                >
                  <div className={`relative shrink-0 ${largeLogo ? "size-20 sm:size-24" : "size-14 sm:size-16"}`}>
                    <Image
                      src={src}
                      alt={name}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-medium text-white">{name}</p>
                    <p className="text-xs text-gyre-muted">{category}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs font-medium uppercase tracking-wider text-gyre-red/80">
              Trust · Scale · Results
            </p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
