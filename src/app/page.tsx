import Link from "next/link";
import Image from "next/image";
import { FaMeta } from "react-icons/fa6";
import { SiTubi } from "react-icons/si";
import { ArrowRight } from "lucide-react";

const OPPORTUNITIES = [
  {
    id: "meta-fast-track",
    name: "Meta Fast Track Creator Program",
    href: "/opportunities/meta-fast-track",
    description:
      "Earn $1,000–$3,000/mo in guaranteed payouts by reposting your content to Facebook.",
    icon: "meta",
    gradient: "from-meta-purple to-meta-pink",
  },
  {
    id: "air-media",
    name: "Air Media Tech MSN",
    href: "/opportunities/air-media-msn",
    description: "Translation to 50+ languages and distribution on Microsoft Network.",
    icon: "air-media",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    id: "tubi",
    name: "Tubi",
    href: "/opportunities/tubi",
    description: "Distribute your long-form horror and mystery content on Tubi.",
    icon: "tubi",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "gyre",
    name: "Gyre",
    href: "/opportunities/gyre",
    description: "24/7 pre-recorded live streaming for YouTube. Opportunity for creators.",
    icon: "gyre",
    gradient: "from-gyre-red to-laneta-pink",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    href: "/opportunities/pinterest",
    description: "Coming soon.",
    icon: "pinterest",
    gradient: "from-red-500 to-rose-500",
    comingSoon: true,
  },
];

function OpportunityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "meta":
      return <FaMeta className="size-8 text-white" />;
    case "air-media":
      return (
        <Image
          src="/images/air_media_tech.png"
          alt=""
          width={64}
          height={64}
          className="object-contain brightness-0 invert"
        />
      );
    case "tubi":
      return <SiTubi className="size-8 text-white" />;
    case "gyre":
      return (
        <Image
          src="https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Gyre-Logo.png"
          alt=""
          width={64}
          height={24}
          className="h-6 w-auto object-contain brightness-0 invert"
        />
      );
    case "pinterest":
      return (
        <span className="text-2xl font-bold text-white">P</span>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <Image
          src="/images/new_logo.png"
          alt="La Neta"
          width={120}
          height={120}
          className="mb-8 object-contain"
        />
        <h1 className="mb-3 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          La Neta
        </h1>
        <p className="mb-12 max-w-md text-center text-lg text-slate-300">
          Creator opportunities. Choose a program to explore.
        </p>

        <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
          {OPPORTUNITIES.map((opp) => (
            <Link
              key={opp.id}
              href={opp.comingSoon ? "#" : opp.href}
              className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 ${
                opp.comingSoon ? "pointer-events-none opacity-60" : ""
              }`}
            >
              <div
                className={`flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${opp.gradient}`}
              >
                <OpportunityIcon icon={opp.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-white group-hover:text-white">
                  {opp.name}
                </h2>
                <p className="truncate text-sm text-slate-400">
                  {opp.description}
                </p>
              </div>
              {!opp.comingSoon && (
                <ArrowRight className="size-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              )}
              {opp.comingSoon && (
                <span className="shrink-0 text-xs text-slate-500">
                  Coming soon
                </span>
              )}
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Add <code className="rounded bg-white/10 px-1.5 py-0.5 text-slate-400">?show=all</code> to any
          opportunity URL to show the navigation bar and switch between programs.
        </p>
      </div>
    </div>
  );
}
