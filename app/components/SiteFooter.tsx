import type { JSX } from "react";
import { RiLinkedinBoxLine, RiYoutubeLine, RiMailLine } from "react-icons/ri";

const quickLinks = [
  { label: "Alumni success", href: "#success-story" },
  { label: "Who we help", href: "#who-benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Get started", href: "#get-started" },
];

const resources = [
  { label: "Join the waitlist", href: "mailto:hello@example.com" },
  { label: "Request syllabus", href: "mailto:hello@example.com?subject=Syllabus%20Request" },
  { label: "Partner with us", href: "mailto:hello@example.com?subject=Partner%20Inquiry" },
];

export default function SiteFooter(): JSX.Element {
  return (
    <footer className="rounded-3xl border border-[var(--global-palette7)] bg-[var(--global-palette3)] text-white">
      <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xl font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-[var(--global-palette1)]">
              DW
            </span>
            DevOps Workbench
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/80">
            A cohort-based bootcamp for builders who want to master automation, platform reliability, and collaborative delivery. Our mentors coach you through every design review and deployment.
          </p>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <RiMailLine aria-hidden="true" />
            <a href="mailto:hello@example.com" className="hover:underline">
              hello@example.com
            </a>
          </div>
          <div className="flex gap-3 text-2xl text-white/80">
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <RiLinkedinBoxLine />
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              className="transition hover:text-white"
            >
              <RiYoutubeLine />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Explore</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Get Involved</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {resources.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/60 sm:px-10">
        © {new Date().getFullYear()} DevOps Workbench. All rights reserved.
      </div>
    </footer>
  );
}
