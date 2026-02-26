"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import { FaPinterestP } from "react-icons/fa";
import { SiTubi } from "react-icons/si";
import { ChevronRight, Zap } from "lucide-react";

const OPPORTUNITIES = [
  {
    id: "meta",
    name: "Meta Breakthrough Bonus",
    href: "/opportunities/meta",
    icon: "meta",
    color: "from-meta-purple to-meta-pink",
    bgColor: "bg-meta-purple/10",
    comingSoon: false,
  },
  {
    id: "air-media",
    name: "Air Media Tech MSN",
    href: "/opportunities/air-media-msn",
    icon: "air-media",
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-600/10",
    comingSoon: true,
  },
  {
    id: "tubi",
    name: "Tubi",
    href: "/opportunities/tubi",
    icon: "tubi",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    comingSoon: true,
  },
  {
    id: "gyre",
    name: "Gyre",
    href: "/opportunities/gyre",
    icon: "gyre",
    color: "from-gyre-red to-laneta-pink",
    bgColor: "bg-gyre-red/10",
    comingSoon: false,
  },
  {
    id: "pinterest",
    name: "Pinterest",
    href: "/opportunities/pinterest",
    icon: "pinterest",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
    comingSoon: true,
  },
];

function OpportunityIcon({
  icon,
  active,
  bgColor,
  size = "default",
}: {
  icon: string;
  active: boolean;
  bgColor: string;
  size?: "default" | "compact";
}) {
  const iconClass = `size-5 ${active ? "text-white" : "text-slate-300"}`;
  const isCompact = size === "compact";

  const getContainerClass = (customBg?: string) =>
    `flex shrink-0 items-center justify-center rounded-lg ${
      isCompact ? "size-10" : "size-12"
    } ${customBg ?? bgColor}`;

  switch (icon) {
    case "meta":
      return (
        <div className={getContainerClass()}>
          <span
            className={`font-bold tracking-tight ${
              isCompact ? "text-[10px]" : "text-xs"
            } ${active ? "text-white" : "text-slate-300"}`}
          >
            META
          </span>
        </div>
      );
    case "air-media":
      return (
        <div className={getContainerClass("bg-white/90") + " p-1.5"}>
          <Image
            src="/images/air_media_tech.png"
            alt="Air Media Tech"
            width={isCompact ? 28 : 32}
            height={isCompact ? 28 : 32}
            className="object-contain"
          />
        </div>
      );
    case "tubi":
      return (
        <div className={getContainerClass()}>
          <SiTubi className={isCompact ? "size-5 text-white" : iconClass} />
        </div>
      );
    case "pinterest":
      return (
        <div className={getContainerClass()}>
          <FaPinterestP className={isCompact ? "size-5 text-white" : iconClass} />
        </div>
      );
    case "gyre":
      return (
        <div className={getContainerClass("bg-white/90") + " p-1.5"}>
          <Image
            src="https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Gyre-Logo.png"
            alt="Gyre"
            width={isCompact ? 28 : 32}
            height={isCompact ? 28 : 32}
            className="h-full w-auto object-contain"
          />
        </div>
      );
    default:
      return null;
  }
}

export function OpportunitiesNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const menuRef = useRef<HTMLDivElement>(null);

  const showNav = searchParams.get("show") === "all";
  if (!showNav) return null;

  const activeOpportunity =
    OPPORTUNITIES.find(
      (opp) =>
        pathname === opp.href || pathname.startsWith(opp.href + "/")
    ) ?? OPPORTUNITIES[0];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      const targetWidth = isMobile ? 320 : 360;
      gsap.to(menuRef.current, {
        width: targetWidth,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
      const items = menuRef.current?.querySelectorAll("[data-opp-item]");
      items?.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            delay: 0.05 * i,
            ease: "back.out(1.2)",
          }
        );
      });
    } else {
      const targetWidth = isMobile ? 65 : 85;
      gsap.to(menuRef.current, {
        width: targetWidth,
        opacity: 1,
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [isOpen, isMobile]);

  const isActive = (opp: (typeof OPPORTUNITIES)[0]) =>
    pathname === opp.href || pathname.startsWith(opp.href + "/");

  const collapsedWidth = isMobile ? 48 : 72;

  return (
    <div className="fixed bottom-4 left-4 z-40 md:bottom-6 md:left-6">
      {/* Glow - smaller on mobile when collapsed */}
      <div
        className={`pointer-events-none absolute rounded-2xl bg-gradient-to-r from-meta-purple/20 to-meta-pink/20 blur-xl transition-all duration-500 ${
          isMobile && !isOpen
            ? "-inset-2"
            : "-inset-4"
        } ${isOpen ? "opacity-100" : "animate-pulse opacity-60"}`}
      />

      <div
        ref={menuRef}
        className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-meta-dark/95 shadow-2xl backdrop-blur-xl"
        style={{ width: collapsedWidth }}
      >
        {/* Toggle button - on mobile collapsed shows only current opportunity icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center gap-3 py-3 pl-3 pr-2 text-left transition-colors hover:bg-white/5 md:px-4 md:py-5 md:pl-4"
          aria-expanded={isOpen}
          aria-label={
            isOpen
              ? "Close opportunities menu"
              : "Open opportunities menu"
          }
        >
          {isMobile && !isOpen ? (
            <OpportunityIcon
              icon={activeOpportunity.icon}
              active={true}
              bgColor={activeOpportunity.bgColor}
              size="compact"
            />
          ) : (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-meta-purple to-meta-pink shadow-lg shadow-meta-purple/50 transition-transform hover:scale-105 md:size-12">
              <Zap className="size-5 text-white md:size-6" />
            </div>
          )}
          {isOpen && (
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-bold text-white">
                La Neta Opportunities
              </p>
              <p className="truncate text-xs text-slate-400">
                {OPPORTUNITIES.length} programs
              </p>
            </div>
          )}
          {(!isMobile || isOpen) && (
            <ChevronRight
              className={`size-4 shrink-0 text-slate-400 transition-transform duration-300 md:size-5 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          )}
        </button>

        {/* Opportunity list - hidden when collapsed on mobile */}
        <div
          className={`overflow-y-auto transition-all duration-300 ${
            isMobile && !isOpen
              ? "max-h-0 overflow-hidden opacity-0"
              : "max-h-[420px] opacity-100"
          }`}
        >
          {OPPORTUNITIES.map((opp) => {
            const active = isActive(opp);
            const content = (
              <>
                <OpportunityIcon
                  icon={opp.icon}
                  active={active}
                  bgColor={opp.bgColor}
                />
                {isOpen && (
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-white">
                      {opp.name}
                    </p>
                    <p className="truncate text-xs text-slate-400">
                      {opp.comingSoon ? "Coming soon..." : "Explore"}
                    </p>
                  </div>
                )}
                {isOpen && (
                  <ChevronRight className="size-4 shrink-0 text-slate-500" />
                )}
              </>
            );

            const className = `flex w-full items-center gap-3 px-3 py-3 transition-all md:px-4 md:py-4 ${
              active
                ? "bg-meta-purple/20 border-l-4 border-meta-pink"
                : "border-l-4 border-transparent hover:bg-white/5"
            }`;

            const hrefWithShow =
              opp.href + (opp.href.includes("?") ? "&" : "?") + "show=all";

            return (
              <Link
                key={opp.id}
                href={hrefWithShow}
                className={className}
                data-opp-item
                onClick={() => isMobile && setIsOpen(false)}
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Animated border gradient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
          style={{
            background:
              "linear-gradient(135deg, transparent, rgba(102,65,237,0.3), transparent, rgba(255,71,172,0.2))",
            backgroundSize: "200% 200%",
            animation: "gradientShift 4s ease infinite",
          }}
        />
      </div>
    </div>
  );
}
