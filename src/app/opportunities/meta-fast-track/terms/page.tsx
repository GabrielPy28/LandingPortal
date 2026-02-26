import Image from "next/image";
import Link from "next/link";

export default function CreatorFastTrackTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link
            href="/opportunities/meta-fast-track"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="La Neta - Back to Creator Fast Track"
          >
            <Image
              src="/images/new_logo.png"
              alt="La Neta"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold text-slate-800">La Neta</span>
          </Link>
          <span className="rounded-full border border-meta-purple/30 bg-meta-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-meta-purple">
            Creator Fast Track
          </span>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-6 py-12 pb-24">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mb-12 text-slate-500">
          Last updated for the Creator Fast Track onboarding process.
        </p>

        <div className="space-y-12">
          {/* 1. Meta Creator Fast Track & Monetization Disclaimer */}
          <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
              <span className="flex size-8 items-center justify-center rounded-lg bg-meta-purple/15 text-sm font-bold text-meta-purple">
                1
              </span>
              Meta Creator Fast Track & Monetization Disclaimer
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                By participating in this onboarding process, you acknowledge that
                the Creator Fast Track program, including all monetization
                opportunities, guaranteed payments, and platform benefits, is
                managed and funded directly by Meta.
              </p>
              <p>
                Global Media Review Inc. (d/b/a La Neta) is an official partner
                agency assisting with discovery and onboarding, but we do not
                issue payments.
              </p>
              <p>
                All payments are processed directly through Facebook Content
                Monetization, and creators are solely responsible for setting
                up their valid tax and payout information with Meta. Delaying
                payout and tax setup could result in lost earnings for the
                creator.
              </p>
              <p>
                Meta will perform a review of all creators and reserves the
                right to determine eligibility and final application approval at
                its sole discretion.
              </p>
              <p>
                Global Media Review Inc. is not responsible or liable for missed
                payments, rejected applications, technical platform errors, or
                any changes Meta makes to the program terms, timelines, or
                benefits.
              </p>
            </div>
          </section>

          {/* 2. Program Eligibility & Posting Requirements */}
          <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
              <span className="flex size-8 items-center justify-center rounded-lg bg-meta-blue/15 text-sm font-bold text-meta-blue">
                2
              </span>
              Program Eligibility & Posting Requirements
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                By applying, you confirm that you meet Meta&apos;s baseline
                eligibility criteria, which includes being 18 years of age or
                older, residing in the United States or Canada, having at least
                100,000 followers on Instagram, TikTok, or YouTube, and having a
                standard Facebook Page.
              </p>
              <p>
                You acknowledge that to receive the guaranteed monthly payout
                ($1,000 or $3,000, depending on follower tier), you must strictly
                follow Meta&apos;s program terms.
              </p>
              <p>
                This includes successfully onboarding to Facebook Content
                Monetization and posting at least 15 eligible Reels on 10
                separate days within each 30-day cycle.
              </p>
              <p>
                If you fail to meet these posting requirements in any 30-day
                cycle, you will not receive your payout for that period. Global
                Media Review Inc. assumes no liability for forfeited earnings due
                to missed requirements.
              </p>
            </div>
          </section>

          {/* 3. Consent for Communication, Data Usage & Future Opportunities */}
          <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
              <span className="flex size-8 items-center justify-center rounded-lg bg-meta-pink/15 text-sm font-bold text-meta-pink">
                3
              </span>
              Consent for Communication, Data Usage & Future Opportunities
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                By completing this application process, you explicitly authorize
                and grant Global Media Review Inc. permission to contact you
                directly regarding the Fast Track program, as well as future,
                non-Meta collaboration proposals, brand deals, and promotional
                materials. We may contact you via:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 text-slate-600">
                <li>Email</li>
                <li>SMS/Text Messages</li>
                <li>WhatsApp</li>
                <li>
                  Direct Messages (Instagram, Messenger, or similar channels)
                </li>
              </ul>
              <p>
                You explicitly consent to our storage, processing, and use of
                your provided personal and professional data, including but not
                limited to:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 text-slate-600">
                <li>Full Name, Email Address, and Phone Number</li>
                <li>
                  Social Media Usernames (Instagram, Facebook, TikTok, YouTube,
                  etc.)
                </li>
                <li>Audience Metrics, engagement rates, and follower counts</li>
              </ul>
              <p>
                You further authorize us to share your provided metrics and
                public profile information with trusted third-party partners and
                brands strictly for the purpose of facilitating future creator
                partnerships, marketing opportunities, or commercial
                engagements.
              </p>
            </div>
          </section>

          {/* 4. Content Rights & Liability */}
          <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
              <span className="flex size-8 items-center justify-center rounded-lg bg-meta-purple/15 text-sm font-bold text-meta-purple">
                4
              </span>
              Content Rights & Liability
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                All content you create and submit to Meta platforms is your sole
                responsibility. You acknowledge that:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 text-slate-600">
                <li>
                  The content shared must be high-quality, original work filmed
                  or created by you, and must comply with Meta&apos;s Partner
                  Monetization Policies and Content Policies.
                </li>
                <li>
                  You own or possess appropriate rights and clearances for all
                  content posted.
                </li>
                <li>
                  The provided creator tips, resources, and onboarding support
                  from our agency are for guidance purposes only and do not
                  guarantee audience growth.
                </li>
              </ul>
              <p>
                Global Media Review Inc. explicitly disclaims liability for any
                claims, disputes, copyright infringements, account suspensions,
                or legal consequences related to the content you publish.
              </p>
            </div>
          </section>

          {/* 5. Modification & Termination Rights */}
          <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
              <span className="flex size-8 items-center justify-center rounded-lg bg-meta-blue/15 text-sm font-bold text-meta-blue">
                5
              </span>
              Modification & Termination Rights
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>We reserve the right to:</p>
              <ul className="list-inside list-disc space-y-1 pl-2 text-slate-600">
                <li>
                  Modify, suspend, or terminate this agency onboarding process at
                  our sole discretion.
                </li>
                <li>
                  Update or modify our agency&apos;s eligibility criteria, terms,
                  and conditions, or any aspect of our onboarding support by
                  providing notice via email or SMS.
                </li>
              </ul>
            </div>
          </section>

          {/* By Applying, You Agree */}
          <section className="rounded-2xl border-2 border-meta-purple/20 bg-gradient-to-br from-meta-purple/5 to-meta-pink/5 p-6 sm:p-8">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              By Applying, You Agree (No Signature Required)
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Because this is an online application process, no physical or
              digital signature is required. By proceeding with your
              application, sharing your details with our team, or clicking the
              application link provided by our agency, you confirm that you have
              read, understood, and agreed to these terms in their entirety.
            </p>
          </section>
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/opportunities/meta-fast-track"
            className="inline-flex items-center text-sm font-medium text-meta-purple underline decoration-meta-purple/40 underline-offset-4 transition-colors hover:text-meta-purple/80"
          >
            Back to Creator Fast Track
          </Link>
        </p>
      </main>
    </div>
  );
}
