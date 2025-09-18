import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { JSX } from "react";
import DevOpsTechGrid from "./components/DevOpsTechGrid";
import DevOpsStartCoding from "./components/DevOpsStartCoding";
import DevOpsCareerSection from "./components/DevOpsCareerSection";

type CompanyLogo = {
  name: string;
  src: string;
};

const heroHighlights = [
  {
    id: "roadmap",
    content: (
      <>
        Follow a <strong className="font-semibold">step-by-step roadmap</strong> to mastery
      </>
    ),
  },
  {
    id: "infrastructure",
    content: (
      <>
        Build <strong className="font-semibold">real-world CI/CD</strong> and cloud infrastructure
      </>
    ),
  },
  {
    id: "career",
    content: (
      <>
        Land your <strong className="font-semibold">dream tech job</strong>
      </>
    ),
  },
];

const logoExtensions = [".svg", ".webp", ".png", ".jpg", ".jpeg"] as const;

const logoDirectory = path.join(process.cwd(), "public", "companies_worked_at");

function formatLogoName(fileName: string): string {
  return fileName
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function collectCompanyLogos(): CompanyLogo[] {
  if (!existsSync(logoDirectory)) {
    return [];
  }

  const files = readdirSync(logoDirectory).filter((file) =>
    logoExtensions.some((extension) => file.toLowerCase().endsWith(extension))
  );

  const extensionPriority = new Map<string, number>(
    logoExtensions.map((extension, index) => [extension, index])
  );

  const logosByKey = new Map<string, { name: string; src: string; priority: number }>();

  files.forEach((file) => {
    const extension = path.extname(file).toLowerCase();
    const key = file.slice(0, file.length - extension.length).toLowerCase();
    const priority = extensionPriority.get(extension) ?? Number.MAX_SAFE_INTEGER;

    const existing = logosByKey.get(key);
    if (!existing || priority < existing.priority) {
      logosByKey.set(key, {
        name: formatLogoName(key),
        src: `/companies_worked_at/${file}`,
        priority,
      });
    }
  });

  return Array.from(logosByKey.values())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, src }) => ({ name, src }));
}

const companyLogos = collectCompanyLogos();

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--global-palette7)] bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0.5 sm:py-1.5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="DevOps Workbench logo"
              width={200}
              height={50}
              priority
            />
          </div>
          <a
            href="#get-started"
            className="inline-flex items-center rounded-xl bg-[var(--global-palette1)] px-6 py-2.5 text-base font-semibold text-white shadow-md transition hover:bg-[var(--global-palette2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-12 sm:pb-28">
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette1)]">
                Live Sessions and Courses
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-5xl">
                Land a Higher Paying Job with
                <span className="ml-2 text-[var(--global-palette1)]">DevOps</span>
              </h1>
              <p className="max-w-xl text-lg text-[var(--global-palette4)]">
                Learn <strong className="font-semibold">DevOps</strong> with no prior experience and move from
                fundamentals to production-ready skills.
              </p>
            </div>
            <ul className="space-y-3 text-base text-[var(--global-palette4)]">
              {heroHighlights.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--global-palette1)]" />
                  <span className="leading-relaxed">{item.content}</span>
                </li>
              ))}
            </ul>
            <div id="get-started" className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center rounded-lg border border-[var(--global-palette1)] bg-[var(--global-palette1)] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[var(--global-palette2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
                href="mailto:hello@example.com"
              >
                Launch Your Career
              </a>
              <span className="text-sm text-[var(--global-palette5)]">
                Step-by-step roadmap • Real-world infrastructure • Career support
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="trustpilot-tag">
              <span className="trustpilot-tag__header">Excellent</span>
              <div className="trustpilot-tag__stars" aria-hidden="true">
                <span className="trustpilot-star" />
                <span className="trustpilot-star" />
                <span className="trustpilot-star" />
                <span className="trustpilot-star" />
                <span className="trustpilot-star" />
              </div>
              <div className="trustpilot-tag__footer">
                <span className="trustpilot-score">4.8</span>
                <span className="trustpilot-label">Trustpilot</span>
              </div>
            </div>
            <div className="surface-card relative aspect-[16/9] w-full max-w-[520px] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--global-palette1)]/10 via-transparent to-[var(--global-palette2)]/15" />
              <div className="relative flex h-full flex-col items-center justify-center gap-4 px-10 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--global-palette5)]">
                  Program Preview
                </span>
                <p className="max-w-xs text-base font-semibold text-[var(--global-palette3)]">
                  Video Placeholder
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--global-palette1)]/12 text-[var(--global-palette1)]">
                  <span className="ml-1 text-xl font-semibold">▶</span>
                </div>
                <p className="text-xs text-[var(--global-palette5)]">
                  Drop in your welcome or overview video here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-[var(--global-palette7)] bg-white p-8 shadow-lg">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
              Our students work at
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="logo-slider-track">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="grid min-w-[140px] place-items-center px-6 py-4">
                  <div className="logo-tile">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={160}
                      height={64}
                      sizes="(max-width: 768px) 90px, 120px"
                      className="h-full w-auto object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>
        </section>

        <DevOpsTechGrid />

        <DevOpsStartCoding />

        <DevOpsCareerSection />
      </main>
    </div>
  );
}
