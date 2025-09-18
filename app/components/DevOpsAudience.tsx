import type { JSX } from "react";
import { RiServerLine, RiCodeBoxLine, RiRocketLine } from "react-icons/ri";

type BenefitAudience = {
  title: string;
  subtitle: string;
  outcomes: string[];
  icon: JSX.Element;
};

const iconWrapClass =
  "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--global-palette1)]/12 text-[var(--global-palette1)]";

const audiences: BenefitAudience[] = [
  {
    title: "Ops & IT professionals",
    subtitle: "You manage infrastructure today and need modern automation skills.",
    outcomes: [
      "Replace manual runbooks with Terraform, Ansible, and GitOps",
      "Ship secure CI/CD pipelines on GitHub Actions",
      "Stand up resilient cloud landing zones on AWS or Azure",
    ],
    icon: (
      <span className={iconWrapClass}>
        <RiServerLine size={26} aria-hidden="true" />
      </span>
    ),
  },
  {
    title: "Software engineers",
    subtitle: "You ship features but want to own delivery and reliability end-to-end.",
    outcomes: [
      "Design release pipelines with automated testing and policy gates",
      "Add observability with Prometheus, Grafana, and OpenTelemetry",
      "Learn SRE playbooks for on-call, rollback, and postmortems",
    ],
    icon: (
      <span className={iconWrapClass}>
        <RiCodeBoxLine size={26} aria-hidden="true" />
      </span>
    ),
  },
  {
    title: "Career switchers",
    subtitle: "You have technical curiosity and want a guided path into DevOps roles.",
    outcomes: [
      "Follow a weekly roadmap from Linux fundamentals to cloud deployments",
      "Build 8+ portfolio projects reviewed by senior mentors",
      "Get interview coaching, resume support, and salary negotiation scripts",
    ],
    icon: (
      <span className={iconWrapClass}>
        <RiRocketLine size={26} aria-hidden="true" />
      </span>
    ),
  },
];

const proofPoints = [
  {
    label: "Industry mentors",
    detail: "Platform engineers from Atlassian, HashiCorp, and AWS review your work weekly.",
  },
  {
    label: "Hiring outcomes",
    detail: "Graduates report average $32k salary lifts within 3 months of completion.",
  },
  {
    label: "Team-based practice",
    detail: "Every cohort ships incident drills, migration plans, and postmortems together.",
  },
];

export default function DevOpsAudience(): JSX.Element {
  return (
    <section
      id="who-benefits"
      className="relative overflow-hidden rounded-3xl border border-[var(--global-palette7)] bg-white px-6 py-14 shadow-lg sm:px-10"
    >
      <div className="pointer-events-none absolute -right-20 bottom-[-6rem] h-56 w-56 rounded-full bg-[var(--global-palette1)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-[-8rem] h-64 w-64 rounded-full bg-[var(--global-palette2)]/10 blur-3xl" />
      <div className="relative z-10 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
            Who Benefits Most
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
            DevOps Workbench is built for people ready to ship reliable software
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--global-palette4)]">
            We focus on practitioners who need practical infrastructure, automation, and delivery skills—not
            lecture-only theory. If any of these sound like you, you&apos;ll move faster here than trying to piece it
            together alone.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-6 text-left shadow-sm"
            >
              <div className="flex items-start gap-4">
                {audience.icon}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--global-palette3)]">{audience.title}</h3>
                  <p className="mt-1 text-sm text-[var(--global-palette5)]">{audience.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[var(--global-palette4)]">
                {audience.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--global-palette1)]/15 text-xs font-semibold text-[var(--global-palette1)]">
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid gap-4 rounded-2xl border border-[var(--global-palette7)] bg-[var(--global-palette1)]/5 p-6 sm:grid-cols-3">
          {proofPoints.map((point) => (
            <div key={point.label} className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--global-palette1)]">
                {point.label}
              </p>
              <p className="text-sm leading-relaxed text-[var(--global-palette3)]">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
