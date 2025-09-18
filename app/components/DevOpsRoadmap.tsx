import type { JSX } from "react";

const roadmapStages = [
  {
    id: "foundations",
    title: "Linux & Networking Fundamentals",
    summary: "Get comfortable with the terminal, package managers, networking layers, and shell scripting to automate the boring work.",
    milestones: [
      "Linux cli, processes, permissions",
      "TCP/IP, DNS, load balancing basics",
      "Bash scripting patterns & automation",
    ],
  },
  {
    id: "automation",
    title: "Infrastructure as Code & Automation",
    summary: "Model infrastructure with code, manage secrets, and understand how teams collaborate around repeatable environments.",
    milestones: [
      "Terraform core workflows",
      "Configuration with Ansible & Packer",
      "Git workflows, policy as code",
    ],
  },
  {
    id: "pipelines",
    title: "CI/CD & Observability",
    summary: "Design resilient delivery pipelines, add quality gates, and instrument systems so production tells you what it needs.",
    milestones: [
      "GitHub Actions & Jenkins pipelines",
      "Artifact management & security scans",
      "Metrics, logging, tracing with Prometheus & Grafana",
    ],
  },
  {
    id: "platform",
    title: "Cloud & Container Platforms",
    summary: "Build repeatable cloud platforms with containers, managed services, and infrastructure cost awareness.",
    milestones: [
      "AWS core services (VPC, IAM, ECS/EKS)",
      "Kubernetes day-2 operations",
      "FinOps & capacity planning",
    ],
  },
  {
    id: "resilience",
    title: "Reliability & Incident Response",
    summary: "Prepare for production chaos with playbooks, chaos drills, and feedback loops that keep teams calm under pressure.",
    milestones: [
      "SLIs, SLOs, and error budgets",
      "Incident response, postmortems",
      "Chaos engineering experiments",
    ],
  },
];

export default function DevOpsRoadmap(): JSX.Element {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[var(--global-palette7)] bg-white p-8 shadow-lg">
      <div className="relative z-10 flex flex-col gap-3 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
          Guided Progression
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
          DevOps <span className="text-[var(--global-palette1)]">Roadmap</span>
        </h2>
        <p className="max-w-2xl text-base text-[var(--global-palette4)]">
          A curated path inspired by roadmap.sh—designed for career changers who want clarity, confidence, and real-world reps.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-[var(--global-palette1)] via-[var(--global-palette2)]/60 to-transparent md:block" />
        <ol className="space-y-8">
          {roadmapStages.map((stage, index) => (
            <li key={stage.id} className="relative flex gap-6 md:gap-10">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--global-palette7)] bg-[var(--global-palette8)] text-lg font-semibold text-[var(--global-palette1)] shadow-md">
                {index + 1}
              </div>
              {index < roadmapStages.length - 1 && (
                <div
                  className="absolute left-[1.75rem] top-12 hidden h-full w-px bg-gradient-to-b from-[var(--global-palette1)]/80 to-transparent md:block"
                  aria-hidden="true"
                />
              )}
              <article className="relative flex-1 rounded-2xl border border-[var(--global-palette7)] bg-[var(--global-palette9)]/90 p-6 shadow-md shadow-[rgba(10,31,65,0.06)]">
                <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-[var(--global-palette3)]">{stage.title}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--global-palette1)]/40 bg-[var(--global-palette1)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--global-palette1)]">
                    {`Stage ${index + 1}`}
                  </span>
                </header>
                <p className="mt-3 text-sm leading-relaxed text-[var(--global-palette4)]">{stage.summary}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {stage.milestones.map((milestone) => (
                    <li
                      key={milestone}
                      className="flex items-start gap-2 rounded-xl border border-[var(--global-palette7)]/80 bg-white/60 px-3 py-2 text-sm text-[var(--global-palette3)]"
                    >
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--global-palette1)]" aria-hidden="true" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="absolute -inset-x-4 inset-y-0 -z-10 rounded-3xl bg-gradient-to-r from-[var(--global-palette1)]/4 via-transparent to-transparent blur-2xl" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>

      <div className="pointer-events-none absolute -right-24 top-24 h-48 w-48 rounded-full bg-[var(--global-palette1)]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-[var(--global-palette2)]/10 blur-3xl" aria-hidden="true" />
    </section>
  );
}
