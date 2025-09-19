import Image from "next/image";
import type { JSX } from "react";
import { RiCheckLine } from "react-icons/ri";

const highlights = [
  "Followed the Workbench roadmap from infrastructure fundamentals to production automation",
  "Closed skills gaps with weekly mentor reviews and Fullscript-style delivery drills",
  "Shipped portfolio projects showcasing GitOps, observability, and resilient cloud pipelines",
  "Leveraged career coaching to negotiate a $160K offer with Fullscript",
];

export default function DevOpsSuccessStory(): JSX.Element {
  return (
    <section
      id="success-story"
      className="grid gap-10 rounded-3xl border border-[var(--global-palette7)] bg-white px-6 py-14 shadow-lg sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"
    >
      <div className="relative overflow-hidden rounded-3xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,123,244,0.18),transparent_70%)]" aria-hidden="true" />
        <div className="relative z-10 space-y-5">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src="/omar-nasr.png"
              alt="Omar Nasr, Platform Engineer"
              width={320}
              height={320}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
              Alumni Spotlight
            </p>
            <h3 className="text-2xl font-semibold text-[var(--global-palette3)]">Omar Nasr</h3>
            <p className="text-sm text-[var(--global-palette4)]">Platform Engineer · Fullscript · $160K salary</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 text-sm text-[var(--global-palette3)] shadow-sm">
            <p>
              “DevOps Workbench gave me the exact playbook I needed. I went from scattered tutorials to leading
              infrastructure initiatives within months—and Fullscript noticed.”
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
            The roadmap that worked
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
            From aspiring engineer to $160K platform role in under 6 months
          </h2>
          <p className="text-base leading-relaxed text-[var(--global-palette4)]">
            Omar swapped a stalled support role for a platform engineering offer at Fullscript. He credits the
            structured weekly deliverables, mentor accountability, and production-grade labs for the leap.
          </p>
        </header>

        <ul className="space-y-3 text-sm text-[var(--global-palette4)]">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--global-palette1)]/15 text-[var(--global-palette1)]">
                <RiCheckLine aria-hidden="true" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 rounded-2xl border border-[var(--global-palette1)] bg-[var(--global-palette1)]/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[var(--global-palette3)]">
            Ready to follow Omar&apos;s path? Join the waitlist and we&apos;ll send the cohort schedule and prep checklist.
          </div>
          <a
            href="mailto:hello@example.com?subject=DevOps%20Workbench%20Waitlist"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--global-palette1)] bg-[var(--global-palette1)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--global-palette2)]"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
