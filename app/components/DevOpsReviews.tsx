"use client";

import Image from "next/image";
import { useState, type JSX } from "react";

type Review = {
  id: string;
  name: string;
  title: string;
  company: string;
  headline: string;
  body: string;
};

const reviews: Review[] = [
  {
    id: "maya-j",
    name: "Maya Jennings",
    title: "Cloud Support Engineer",
    company: "ScaleCloud",
    headline: "From support queues to shipping resilient pipelines",
    body: "The Academy made the jump from tooling to full-blown infrastructure feel achievable. The Terraform and GitHub Actions labs mirrored the problems I solve every day in my new role.",
  },
  {
    id: "daniel-h",
    name: "Daniel Huerta",
    title: "Site Reliability Engineer",
    company: "CoreOps",
    headline: "Interview confidence came from the live incident drills",
    body: "Mock on-calls, chaos engineering walkthroughs, and weekly feedback let me talk through reliability trade-offs with real stories. My offer came two weeks after finishing the program.",
  },
  {
    id: "rachel-p",
    name: "Rachel Patel",
    title: "DevOps Engineer",
    company: "Northwind Labs",
    headline: "Kubernetes finally clicked thanks to the hands-on coaching",
    body: "Shipping a blue/green rollout in class gave me the exact experience recruiters asked about. The career coaches shaped my LinkedIn profile and referrals.",
  },
];

const PREVIEW_CHAR_LIMIT = 180;

export default function DevOpsReviews(): JSX.Element {
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  const handleOpenReview = (review: Review): void => {
    setActiveReview(review);
  };

  const handleCloseReview = (): void => {
    setActiveReview(null);
  };

  return (
    <section className="rounded-3xl border border-[var(--global-palette7)] bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
            Real DevOps Outcomes
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
            Real DevOps Engineer Reviews
          </h2>
          <p className="text-base text-[var(--global-palette4)]">
            Honest feedback from students who turned their skills into job offers — and shared the full story.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => {
          const isLongBody = review.body.length > PREVIEW_CHAR_LIMIT;
          const previewText = isLongBody
            ? `${review.body.slice(0, PREVIEW_CHAR_LIMIT).trimEnd()}…`
            : review.body;

          return (
            <article
              key={review.id}
              className="flex flex-col gap-4 rounded-2xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-6 shadow-md shadow-[rgba(10,31,65,0.06)] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--global-palette7)]">
                  <Image
                    src="/avatar-placeholder.svg"
                    alt="Placeholder LinkedIn profile"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[var(--global-palette3)]">{review.name}</span>
                    <Image src="/LinkedIn_logo_initials.png" alt="LinkedIn" width={18} height={18} />
                  </div>
                  <span className="text-xs text-[var(--global-palette5)]">
                    {review.title} • {review.company}
                  </span>
                </div>
              </div>
              <h3
                id={`review-${review.id}-title`}
                className="text-lg font-semibold text-[var(--global-palette3)]"
              >
                {review.headline}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--global-palette4)]">{previewText}</p>
              {isLongBody && (
                <button
                  type="button"
                  onClick={() => handleOpenReview(review)}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--global-palette1)] transition hover:text-[var(--global-palette2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
                >
                  Show more
                  <span aria-hidden="true">&gt;</span>
                </button>
              )}
            </article>
          );
        })}
      </div>

      {activeReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-review-${activeReview.id}-title`}
          onClick={handleCloseReview}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl border border-[var(--global-palette7)] bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseReview}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--global-palette9)] text-[var(--global-palette3)] shadow hover:bg-[var(--global-palette8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
            >
              <span className="sr-only">Close review</span>
              <span aria-hidden="true" className="text-base font-semibold">
                X
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--global-palette7)]">
                <Image
                  src="/avatar-placeholder.svg"
                  alt="Placeholder LinkedIn profile"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[var(--global-palette3)]">{activeReview.name}</span>
                  <Image src="/LinkedIn_logo_initials.png" alt="LinkedIn" width={18} height={18} />
                </div>
                <span className="text-xs text-[var(--global-palette5)]">
                  {activeReview.title} • {activeReview.company}
                </span>
              </div>
            </div>
            <h3
              id={`modal-review-${activeReview.id}-title`}
              className="mt-4 text-xl font-semibold text-[var(--global-palette3)]"
            >
              {activeReview.headline}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--global-palette4)]">
              {activeReview.body}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
