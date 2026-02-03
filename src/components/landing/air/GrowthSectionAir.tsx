"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const SUBSCRIBER_GROWTH_DATA = [
  { name: "Original channel", subscribers: 113, fill: "#94a3b8" },
  { name: "With localization (Kids Diana Show example)", subscribers: 273, fill: "#b2f137" },
];

const VIEWS_MONETIZATION_DATA = [
  { metric: "Monthly views (B+)", current: 0.5, withAir: 2.5 },
  { metric: "Monetization potential", current: 45, withAir: 95 },
  { metric: "Global reach (%)", current: 25, withAir: 95 },
  { metric: "Revenue streams", current: 1, withAir: 3 },
];

const CHART_DATA = [
  { subject: "Subscribers (M)", Current: 45, "With AIR": 95, fullMark: 100 },
  { subject: "Monthly Views", Current: 40, "With AIR": 98, fullMark: 100 },
  { subject: "Monetization", Current: 50, "With AIR": 95, fullMark: 100 },
  { subject: "Global Reach", Current: 30, "With AIR": 100, fullMark: 100 },
  { subject: "Revenue Streams", Current: 35, "With AIR": 90, fullMark: 100 },
];

const STATS = [
  { value: "273M+", label: "Subscribers (example)", sub: "Kids Diana Show globally" },
  { value: "2.5B+", label: "Monthly views", sub: "With translated channels" },
  { value: "50+", label: "Languages", sub: "Full localization" },
  { value: "Day 1", label: "Earn on MSN", sub: "Passive income from start" },
];

export function GrowthSectionAir() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const barChartRef = useRef<HTMLDivElement>(null);

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
        chartRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        barChartRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: barChartRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        statsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="growth"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-air-bg/30 to-air-bg py-24"
    >
      {/* Background accent for impact */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--air-blue) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--air-lime) 0%, transparent 40%)`,
        }}
      />
      <div className="container relative mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-3xl font-bold text-air-dark sm:text-4xl md:text-5xl"
        >
          How Global Expansion Boosts Your Growth
        </h2>
        <p className="mb-12 text-center text-lg text-air-dark/80">
          Compare your current reach with the growth you can achieve with
          professional localization and Microsoft Network distribution
        </p>

        {/* Metrics strip - blue numbers in one line above charts */}
        <div
          ref={statsRef}
          className="mb-10 flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex min-w-0 flex-1 basis-[calc(50%-0.5rem)] flex-col items-center justify-center rounded-2xl border-2 border-air-blue/25 bg-white px-6 py-5 shadow-lg shadow-air-blue/10 transition-all hover:border-air-blue/50 hover:shadow-xl hover:shadow-air-blue/15 sm:basis-[calc(25%-1rem)]"
            >
              <p className="text-3xl font-extrabold tracking-tight text-air-blue sm:text-4xl md:text-[2.75rem]">
                {stat.value}
              </p>
              <p className="mt-1 text-center text-sm font-semibold text-air-dark">
                {stat.label}
              </p>
              <p className="mt-0.5 text-center text-xs text-air-dark/60">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div ref={chartRef} className="order-2 lg:order-1">
            <Card className="overflow-hidden border-2 border-air-blue/25 bg-white shadow-xl shadow-air-blue/10">
              <div className="border-b border-air-blue/15 bg-gradient-to-r from-air-blue/5 to-air-lime/5 px-6 py-4">
                <h3 className="font-bold text-air-dark">
                  Your Growth: Current vs. With AIR
                </h3>
              </div>
              <CardContent className="p-6">
                <div
                  className="mx-auto w-full"
                  style={{ minHeight: 320 }}
                >
                  <ResponsiveContainer
                    width="100%"
                    height={320}
                    minHeight={280}
                    minWidth={260}
                  >
                    <AreaChart
                      data={CHART_DATA}
                      margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis
                        dataKey="subject"
                        tick={{ fill: "#64748b", fontSize: 11 }}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fill: "#94a3b8", fontSize: 10 }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#030712",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                          fontSize: 12,
                        }}
                        formatter={(value: number | undefined) => [`${value ?? 0}/100`, ""]}
                        labelFormatter={(label) => label}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: 12 }}
                        formatter={(value) => (
                          <span className="text-air-dark/80">{value}</span>
                        )}
                      />
                      <Area
                        type="monotone"
                        dataKey="Current"
                        stroke="#94a3b8"
                        fill="#94a3b8"
                        fillOpacity={0.4}
                        strokeWidth={2}
                        name="Current"
                      />
                      <Area
                        type="monotone"
                        dataKey="With AIR"
                        stroke="#0c44fb"
                        fill="#b2f137"
                        fillOpacity={0.5}
                        strokeWidth={2}
                        name="With AIR"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-air-dark/70">
                  Higher scores across subscribers, views, monetization, and
                  global reach
                </p>
              </CardContent>
            </Card>
          </div>

          <div ref={contentRef} className="order-1 space-y-6 lg:order-2">
            <div className="rounded-2xl border-2 border-air-lime/20 bg-white p-6 shadow-xl shadow-air-lime/10">
              <h3 className="mb-3 text-xl font-bold text-air-dark">
                Real Results: Kids Diana Show
              </h3>
              <p className="leading-relaxed text-air-dark/80">
                With AIR as their translation and YouTube channel management
                partner, creators like Kids Diana Show expanded into 20+
                translated channels—growing from 113M subscribers to over 273M
                globally, reaching 2.5B+ monthly views.
              </p>
            </div>

            <div ref={barChartRef}>
              <Card className="overflow-hidden border-2 border-air-blue/25 bg-white shadow-xl shadow-air-blue/10">
                <div className="border-b border-air-blue/15 bg-gradient-to-r from-air-lime/5 to-air-blue/5 px-4 py-3">
                  <p className="text-center text-sm font-bold text-air-dark">
                    Subscriber growth (M) — example
                  </p>
                </div>
                <CardContent className="p-4">
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart
                      data={SUBSCRIBER_GROWTH_DATA}
                      layout="vertical"
                      margin={{ top: 5, right: 20, left: 60, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" domain={[0, 300]} tick={{ fontSize: 10 }} />
                      <YAxis type="category" dataKey="name" width={55} tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#030712",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                        }}
                        formatter={(value: number | undefined) => [`${value ?? 0}M`, "Subscribers"]}
                      />
                      <Bar dataKey="subscribers" fill="#b2f137" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border-2 border-laneta-purple/20 bg-white p-5 shadow-lg">
              <Image
                src="/images/logo.png"
                alt="La Neta"
                width={52}
                height={52}
                className="shrink-0"
              />
              <p className="text-air-dark/80">
                La Neta and AIR Media-Tech help creators go global—with
                professional localization and Microsoft Network distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
