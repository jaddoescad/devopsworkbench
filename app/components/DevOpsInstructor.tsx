import Image from "next/image";
import type { JSX } from "react";

export default function DevOpsInstructor(): JSX.Element {
  return (
    <section className="rounded-3xl border border-[var(--global-palette7)] bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-3xl border border-[var(--global-palette7)] shadow-xl sm:h-56 sm:w-56">
          <Image
            src="/rayan-instructor.jpeg"
            alt="Portrait of Rayan Slim"
            fill
            sizes="(max-width: 768px) 224px, 280px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
            Your Instructor
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
            Rayan Slim
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--global-palette4)]">
            Rayan Slim is a senior DevOps engineer and instructor whose courses have helped thousands of
            developers build confidence with cloud automation, CI/CD, and site reliability practices. He brings a
            practical approach drawn from leading platform initiatives across fast-growing startups and global teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="rounded-full bg-[var(--global-palette1)]/10 px-4 py-2 text-sm font-semibold text-[var(--global-palette1)]">
              AWS & Kubernetes Specialist
            </span>
            <span className="rounded-full bg-[var(--global-palette2)]/10 px-4 py-2 text-sm font-semibold text-[var(--global-palette2)]">
              Zero To Mastery Mentor
            </span>
            <span className="rounded-full bg-[var(--global-palette3)]/8 px-4 py-2 text-sm font-semibold text-[var(--global-palette3)]">
              DevOps Career Coach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
