import Image from "next/image";
import type { JSX } from "react";

const items: { id: string; text: string }[] = [
  { id: "ci", text: "1000+ CI/CD Hands-on Tasks (GitHub Actions, GitLab CI, Jenkins)" },
  { id: "k8s", text: "500+ Kubernetes Scenarios (Deployments, Ingress, Helm, Operators)" },
  { id: "cloud", text: "50+ End-to-End DevOps Projects (AWS, Azure, GCP)" },
  { id: "iac", text: "Terraform & Pulumi Infrastructure Labs (VPC, EKS/AKS/GKE, IAM)" },
  { id: "observability", text: "Observability Stacks (Prometheus, Grafana, Loki, Tempo)" },
  { id: "security", text: "DevSecOps Pipelines (SAST/DAST, OPA, Vault, SBOM)" },
  { id: "networking", text: "Traffic & Reliability (NGINX, Istio, Argo Rollouts)" },
  { id: "automation", text: "Server Automation (Ansible, Packer, Docker buildx)" },
];

export default function DevOpsStartCoding(): JSX.Element {
  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:items-center mt-14 sm:mt-16">
      <div className="surface-card relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--global-palette1)]/10 via-transparent to-[var(--global-palette2)]/15" />
        <div className="relative flex h-full items-center justify-center">
          <div className="rounded-2xl border border-[var(--global-palette7)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--global-palette4)] shadow-md">
            GIF Placeholder
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
            Start <span className="text-[var(--global-palette1)]">DevOps</span> Now
          </h2>
          <p className="text-[var(--global-palette4)]">
            Hands-on DevOps practice to take you from zero to production-ready.
          </p>
        </div>

        <ul className="grid gap-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--global-palette1)]" />
              <span className="leading-relaxed text-[var(--global-palette3)]">{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center rounded-lg border border-[var(--global-palette1)] bg-[var(--global-palette1)] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[var(--global-palette2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--global-palette1)]"
            href="#get-started"
          >
            Enroll Now
          </a>
          <span className="text-sm text-[var(--global-palette5)]">No experience required</span>
        </div>
      </div>
    </section>
  );
}


