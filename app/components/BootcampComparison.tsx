import type { JSX } from "react";

const comparisonRows = [
  {
    label: "Curriculum depth",
    ours: "24-week roadmap with live labs covering cloud, IaC, CI/CD, SRE, and incident response",
    others: "8-12 week overview focused on theory and basic scripting",
  },
  {
    label: "Hands-on projects",
    ours: "Production-grade capstones: GitOps platform, blue/green rollout, observability stack",
    others: "Single demo project or simulated lab exercises",
  },
  {
    label: "Instructor access",
    ours: "Weekly coaching calls, async code reviews, private Slack for Q&A with senior engineers",
    others: "Pre-recorded videos with limited mentor availability",
  },
  {
    label: "Career support",
    ours: "Portfolio review, mock interviews, recruiter network, salary negotiation coaching",
    others: "Generic resume template and job board links",
  },
  {
    label: "Alumni outcomes",
    ours: "32% avg salary lift and 84% job placement within 6 months (2023 cohort)",
    others: "Outcome data not disclosed or limited to marketing testimonials",
  },
  {
    label: "Total investment",
    ours: "$5,500 (installments available)",
    others: "$12K - $18K upfront with limited payment flexibility",
  },
];

export default function BootcampComparison(): JSX.Element {
  return (
    <section className="rounded-3xl border border-[var(--global-palette7)] bg-white p-8 shadow-lg">
      <header className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
          Why Students Choose Us
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
          DevOps Workbench vs. Typical Bootcamps
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--global-palette4)]">
          We combine senior-level coaching, production-level projects, and career support that continues until you sign
          an offer. Here’s how the program compares to the average bootcamp experience.
        </p>
      </header>

      <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--global-palette7)]">
        <table className="min-w-full text-left">
          <thead className="bg-[var(--global-palette9)] text-[var(--global-palette3)]">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--global-palette5)]">
                What matters
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[var(--global-palette3)]">Our bootcamp</th>
              <th className="px-6 py-4 text-sm font-semibold text-[var(--global-palette3)]">Typical bootcamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--global-palette7)] bg-white text-sm leading-relaxed text-[var(--global-palette4)]">
            {comparisonRows.map((row) => (
              <tr key={row.label} className="transition hover:bg-[var(--global-palette8)]/40">
                <th scope="row" className="w-48 px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--global-palette5)]">
                  {row.label}
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--global-palette1)]" aria-hidden="true" />
                    <span className="text-[var(--global-palette3)]">{row.ours}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--global-palette5)]" aria-hidden="true" />
                    <span>{row.others}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[var(--global-palette1)] bg-[var(--global-palette1)]/10 px-6 py-4 text-sm text-[var(--global-palette3)] sm:flex-row">
        <span>Want the DevOps Workbench advantage for your career?</span>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--global-palette1)] bg-[var(--global-palette1)] px-4 py-2 font-semibold text-white transition hover:bg-[var(--global-palette2)]"
        >
          Chat with the team
        </a>
      </footer>
    </section>
  );
}
