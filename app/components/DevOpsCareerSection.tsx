import type { JSX } from "react";
import type { IconType } from "react-icons";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineServerStack,
  HiOutlineUsers,
  HiOutlineUserGroup,
} from "react-icons/hi2";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  accentColor: string;
  accentBg: string;
};

const features: Feature[] = [
  {
    id: "question-bank",
    title: "Question Bank",
    description:
      "Ace DevOps interviews with Linux troubleshooting, CI/CD debugging drills, Kubernetes clusters, and cloud automation scenarios.",
    icon: HiOutlineClipboardDocumentCheck,
    accentColor: "var(--global-palette1)",
    accentBg: "rgba(11, 120, 155, 0.12)",
  },
  {
    id: "projects",
    title: "Real-World DevOps Projects",
    description:
      "Ship FAANG-level DevOps builds: design resilient pipelines, codify infrastructure, and practice SRE-style incident response.",
    icon: HiOutlineServerStack,
    accentColor: "var(--global-palette2)",
    accentBg: "rgba(40, 155, 192, 0.14)",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Join a private network of platform engineers, SREs, and hiring managers to swap insights and unlock opportunities.",
    icon: HiOutlineUsers,
    accentColor: "var(--global-palette3)",
    accentBg: "rgba(10, 31, 65, 0.12)",
  },
  {
    id: "mentorship",
    title: "1-1 Mentorship",
    description:
      "Book focused sessions to review roadmaps, unblock projects, and create a personalized progression plan.",
    icon: HiOutlineUserGroup,
    accentColor: "var(--global-palette4)",
    accentBg: "rgba(110, 116, 124, 0.16)",
  },
];

export default function DevOpsCareerSection(): JSX.Element {
  return (
    <section className="space-y-10 rounded-3xl border border-[var(--global-palette7)] bg-white/90 p-10 shadow-lg">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
          All Our Courses Include
        </span>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--global-palette3)] sm:text-4xl">
          Build a Career in <span className="text-[var(--global-palette1)]">DevOps</span> With In-Demand Skills
        </h2>
        <p className="text-lg text-[var(--global-palette4)]">
          Level up faster with an ecosystem that blends practice, mentorship, and community so you can deliver production-ready infrastructure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ id, title, description, icon: Icon, accentColor, accentBg }) => (
          <article
            key={id}
            className="group flex h-full flex-col gap-4 rounded-2xl border border-[var(--global-palette7)] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span
              className="grid size-12 place-items-center rounded-xl text-2xl"
              style={{ color: accentColor, backgroundColor: accentBg }}
            >
              <Icon aria-hidden="true" />
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--global-palette3)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--global-palette4)]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
