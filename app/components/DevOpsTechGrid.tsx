"use client";
import type { JSX } from "react";
import { useRef } from "react";

type TechItem = {
  id: string;
  name: string;
  abbr: string;
  color: string;
  href?: string;
};

const devopsTechItems: TechItem[] = [
  { id: "docker", name: "Docker", abbr: "Dk", color: "#0db7ed", href: "#" },
  { id: "kubernetes", name: "Kubernetes", abbr: "K8s", color: "#326ce5", href: "#" },
  { id: "terraform", name: "Terraform", abbr: "Tf", color: "#7B42BC", href: "#" },
  { id: "github", name: "GitHub", abbr: "GH", color: "#24292e", href: "#" },
  { id: "gitlab", name: "GitLab CI", abbr: "GL", color: "#E24329", href: "#" },
  { id: "ansible", name: "Ansible", abbr: "An", color: "#EE0000", href: "#" },
  { id: "helm", name: "Helm", abbr: "Hm", color: "#277A9F", href: "#" },
  { id: "argocd", name: "Argo CD", abbr: "Ar", color: "#F74A00", href: "#" },
  { id: "prometheus", name: "Prometheus", abbr: "Pr", color: "#E6522C", href: "#" },
  { id: "grafana", name: "Grafana", abbr: "Gr", color: "#F46800", href: "#" },
  { id: "nginx", name: "NGINX", abbr: "Nx", color: "#009639", href: "#" },
  { id: "istio", name: "Istio", abbr: "Is", color: "#466BB0", href: "#" },
  { id: "vault", name: "HashiCorp Vault", abbr: "Va", color: "#000000", href: "#" },
  { id: "circleci", name: "CircleCI", abbr: "Cc", color: "#343434", href: "#" },
  { id: "cloudflare", name: "Cloudflare", abbr: "Cf", color: "#F38020", href: "#" },
  { id: "pulumi", name: "Pulumi", abbr: "Pu", color: "#512D6D", href: "#" },
  { id: "packer", name: "Packer", abbr: "Pk", color: "#02A8EF", href: "#" },
  { id: "aws", name: "AWS", abbr: "AWS", color: "#ff9900", href: "#" },
  { id: "azure", name: "Azure", abbr: "Az", color: "#0078D4", href: "#" },
  { id: "gcp", name: "Google Cloud", abbr: "GCP", color: "#4285F4", href: "#" },
  { id: "jenkins", name: "Jenkins", abbr: "Jk", color: "#D33833", href: "#" },
];

export default function DevOpsTechGrid(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function getColumnWidth(node: HTMLDivElement): number {
    const firstItem = node.querySelector("a");
    if (!firstItem) return 0;
    const rect = (firstItem as HTMLElement).getBoundingClientRect();
    const styles = getComputedStyle(node);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return rect.width + gap;
  }

  function scroll(direction: "left" | "right"): void {
    const node = scrollerRef.current;
    if (!node) return;
    const colWidth = getColumnWidth(node);
    if (colWidth <= 0) {
      const fallback = Math.round(node.clientWidth * 0.9);
      node.scrollBy({ left: direction === "left" ? -fallback : fallback, behavior: "smooth" });
      return;
    }

    const currentIndex = Math.round(node.scrollLeft / colWidth);
    const visibleCols = Math.max(1, Math.floor(node.clientWidth / colWidth));
    const advance = Math.max(1, visibleCols - 1);
    const targetIndex = Math.max(0, direction === "left" ? currentIndex - advance : currentIndex + advance);
    node.scrollTo({ left: targetIndex * colWidth, behavior: "smooth" });
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
          New technologies <span className="text-[var(--global-palette1)]">we teach</span>
        </h2>
        <p className="mx-auto max-w-3xl text-[var(--global-palette4)]">
          Master essential DevOps and Cloud concepts, whether you&apos;re starting as
          a complete beginner or refining your professional expertise.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="grid grid-rows-2 grid-flow-col auto-cols-[18rem] md:auto-cols-[20rem] gap-4 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory py-2 px-2 sm:px-4 md:px-6 scroll-px-6"
          role="region"
          aria-label="DevOps technologies carousel"
        >
          {devopsTechItems.map((tech) => (
            <a
              key={tech.id}
              href={tech.href ?? "#"}
              className="group snap-start flex items-center justify-between rounded-2xl border border-[var(--global-palette7)] bg-white px-5 py-4 shadow-sm transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
            >
              <span className="flex items-center gap-4">
                <span
                  className="grid size-10 place-items-center rounded-xl text-sm font-semibold text-white"
                  style={{ backgroundColor: tech.color }}
                  aria-hidden="true"
                >
                  {tech.abbr}
                </span>
                <span className="text-lg font-semibold text-[var(--global-palette3)]">{tech.name}</span>
              </span>
              <span
                className="grid size-9 place-items-center rounded-full bg-[var(--global-palette8)] text-[var(--global-palette1)] transition group-hover:bg-[var(--global-palette1)] group-hover:text-white"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div className="absolute inset-y-0 -left-6 md:-left-8 flex items-center z-20">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--global-palette7)] bg-white text-[var(--global-palette1)] shadow-md transition hover:bg-[var(--global-palette8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
          >
            ←
          </button>
        </div>
        <div className="absolute inset-y-0 -right-6 md:-right-8 flex items-center z-20">
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--global-palette7)] bg-white text-[var(--global-palette1)] shadow-md transition hover:bg-[var(--global-palette8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}


