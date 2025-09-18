import type { JSX } from "react";
import { RiQuestionLine } from "react-icons/ri";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How much time should I plan to invest each week?",
    answer:
      "Expect 6-8 hours weekly. Live workshops, async design reviews, and lab work are all scheduled with replay access so you can keep momentum even if you miss a session.",
  },
  {
    question: "Do I need prior cloud or coding experience?",
    answer:
      "No. We start with Linux, Git, and scripting fundamentals before layering on Terraform, containerization, and cloud resources. Mentors help you bridge any gaps quickly.",
  },
  {
    question: "What kind of projects will I complete?",
    answer:
      "You will deliver production-style work: provisioning environments with Terraform, building GitHub Actions pipelines, standing up observability stacks, and running incident response simulations.",
  },
  {
    question: "How long do I have access to the material?",
    answer:
      "You retain lifetime access to recordings, lab guides, and templates. Alumni also keep access to the private Slack community for peer support and job leads.",
  },
];

export default function DevOpsFAQ(): JSX.Element {
  return (
    <section
      id="faq"
      className="rounded-3xl border border-[var(--global-palette7)] bg-white px-6 py-14 shadow-lg sm:px-10"
    >
      <header className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">FAQ</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
          Answers before you join the waitlist
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--global-palette4)]">
          Still wondering if DevOps Workbench is the right fit? Start here, and ping the team if you need more detail on curriculum, payment plans, or cohort timing.
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-5 text-left shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <span className="flex items-center gap-3 text-left text-base font-semibold text-[var(--global-palette3)]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--global-palette1)]/15 text-[var(--global-palette1)]">
                  <RiQuestionLine aria-hidden="true" />
                </span>
                {item.question}
              </span>
              <span className="text-sm font-medium text-[var(--global-palette5)] opacity-70 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="mt-4 text-sm leading-relaxed text-[var(--global-palette4)]">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
