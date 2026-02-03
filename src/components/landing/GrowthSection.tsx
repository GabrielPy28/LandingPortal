"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const CHART_DATA = [
  {
    subject: "Monetization",
    Current: 45,
    "With Meta Program": 95,
    fullMark: 100,
  },
  {
    subject: "Platform Reach",
    Current: 50,
    "With Meta Program": 95,
    fullMark: 100,
  },
  {
    subject: "Income Potential",
    Current: 35,
    "With Meta Program": 100,
    fullMark: 100,
  },
  {
    subject: "Content Diversity",
    Current: 70,
    "With Meta Program": 95,
    fullMark: 100,
  },
  {
    subject: "Audience Growth",
    Current: 55,
    "With Meta Program": 90,
    fullMark: 100,
  },
  {
    subject: "Brand Opportunities",
    Current: 45,
    "With Meta Program": 90,
    fullMark: 100,
  },
];

const STATS = [
  { value: "100K+", label: "Satisfied Creators", sub: "In our network" },
  { value: "24K+", label: "Active Members", sub: "+4% this month" },
  { value: "1.5B", label: "Video Views", sub: "Across campaigns" },
  { value: "700M", label: "Organic Reach", sub: "Creator content" },
];

export function GrowthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, scale: 0.95 },
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

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: imageRef.current,
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
      className="scroll-mt-20 bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-3xl font-bold text-meta-dark sm:text-4xl md:text-5xl"
        >
          How This Program Boosts Your Growth
        </h2>
        <p className="mb-16 text-center text-lg text-slate-600">
          Compare your current growth with the growth you&apos;ll achieve with
          the Meta Breakthrough Bonus Program
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div ref={chartRef} className="order-2 lg:order-1">
            <Card className="overflow-hidden border-meta-blue/20">
              <CardContent className="p-6">
                <h3 className="mb-6 font-semibold text-meta-dark">
                  Your Growth: Current vs. With Meta Program
                </h3>
                <div
                  className="mx-auto aspect-square w-full max-w-[400px]"
                  style={{ minHeight: 320 }}
                >
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    minHeight={320}
                    minWidth={280}
                  >
                    <RadarChart
                      data={CHART_DATA}
                      outerRadius="80%"
                      margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
                    >
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#64748b", fontSize: 11 }}
                      />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        tick={{ fill: "#94a3b8", fontSize: 10 }}
                      />
                      <Radar
                        name="Current Growth"
                        dataKey="Current"
                        stroke="#79bcf7"
                        fill="#79bcf7"
                        fillOpacity={0.4}
                        strokeWidth={2}
                      />
                      <Radar
                        name="With Meta Program"
                        dataKey="With Meta Program"
                        stroke="#6641ed"
                        fill="#6641ed"
                        fillOpacity={0.5}
                        strokeWidth={2}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: 12 }}
                        formatter={(value) => (
                          <span className="text-slate-600">{value}</span>
                        )}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                          fontSize: 12,
                        }}
                        formatter={(value: number | undefined, name?: string) => [
                          `${value ?? 0}/100`,
                          name ?? "Value",
                        ]}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-center text-sm text-slate-500">
                  Unlock higher scores across every growth dimension
                </p>
              </CardContent>
            </Card>
          </div>

          <div ref={contentRef} className="order-1 space-y-8 lg:order-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-meta-dark">
                We Represent the Best Creators
              </h3>
              <p className="text-slate-600">
                We represent you, help you monetize, get you contracts and
                campaigns, and train you to grow. La Neta is the #1 agency for
                creator growth in the region.
              </p>
            </div>

            <div ref={imageRef}>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/content_cretor_with_neon_lights.jpg"
                  alt="Content creator with neon lights"
                  width={500}
                  height={320}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-meta-dark">
                La Neta by the Numbers
              </h3>
              <div ref={statsRef} className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-meta-purple/20 bg-white p-4 shadow-sm"
                  >
                    <p className="text-2xl font-bold text-meta-purple">
                      {stat.value}
                    </p>
                    <p className="font-medium text-meta-dark">{stat.label}</p>
                    <p className="text-sm text-slate-500">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="La Neta"
                width={48}
                height={48}
              />
              <p className="text-slate-600">
                Leaders in Influencer Marketing across the U.S. and LATAM.
                Connecting creators, brands, and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
