import type { JSX } from "react";

type GrowthPoint = {
  year: number;
  market: number; // billions USD
};

type SalaryBand = {
  label: string;
  value: number;
};

type Metric = {
  label: string;
  value: string;
  caption: string;
};

const growthData: GrowthPoint[] = [
  { year: 2024, market: 17.4 },
  { year: 2025, market: 20.8 },
  { year: 2026, market: 24.8 },
  { year: 2027, market: 29.6 },
  { year: 2028, market: 35.1 },
];

const salaryData: SalaryBand[] = [
  { label: "Entry", value: 97500 },
  { label: "Median", value: 130000 },
  { label: "Senior", value: 165000 },
];

const metrics: Metric[] = [
  { label: "Global market", value: "$35B", caption: "Forecast size by 2028" },
  { label: "Open roles", value: "95K+", caption: "Live LinkedIn listings" },
  { label: "Median salary", value: "$130K", caption: "US DevOps compensation" },
];

function buildChart(width: number, height: number): {
  areaPath: string;
  linePath: string;
  points: Array<{ x: number; y: number; label: string; value: number }>;
  ticks: number[];
} {
  const values = growthData.map((point) => point.market);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const range = maxValue - minValue || 1;

  const points = growthData.map((point, index) => {
    const x = (index / (growthData.length - 1)) * width;
    const normalized = (point.market - minValue) / range;
    const y = height - normalized * height;
    return { x, y, label: point.year.toString(), value: point.market };
  });

  const areaStart = `M 0 ${height}`;
  const areaLine = points.map((point) => `L ${point.x} ${point.y}`).join(" ");
  const areaEnd = `L ${width} ${height} Z`;

  const linePath = points
    .map((point, idx) => `${idx === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const tickCount = 4;
  const ticks = Array.from({ length: tickCount + 1 }, (_, index) =>
    Number((minValue + (range / tickCount) * index).toFixed(1))
  );

  return {
    areaPath: `${areaStart} ${areaLine} ${areaEnd}`,
    linePath,
    points,
    ticks,
  };
}

function formatBillions(value: number): string {
  return `$${value.toFixed(1)}B`;
}

export default function DevOpsCareerGrowth(): JSX.Element {
  const chartWidth = 360;
  const chartHeight = 200;
  const { areaPath, linePath, points, ticks } = buildChart(chartWidth, chartHeight);
  const maxSalary = Math.max(...salaryData.map((band) => band.value));

  return (
    <section className="rounded-3xl border border-[var(--global-palette7)] bg-white p-8 shadow-lg">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--global-palette5)]">
          Career Growth After DevOps Training
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--global-palette3)] sm:text-4xl">
          Why DevOps Skills Pay Off
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--global-palette4)]">
          The global DevOps market is on track to more than double, jumping from
          <strong className="font-semibold text-[var(--global-palette3)]"> $17.4B in 2024</strong> to
          <strong className="font-semibold text-[var(--global-palette3)]"> $35.1B by 2028</strong> (Fortune Business Insights).
          LinkedIn already lists <strong className="font-semibold text-[var(--global-palette3)]">95,000+ active DevOps roles</strong>,
          and talent.com reports a <strong className="font-semibold text-[var(--global-palette3)]">$130K US median salary</strong>.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-5 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-[var(--global-palette5)]">{metric.label}</p>
            <span className="mt-2 block text-4xl font-semibold text-[var(--global-palette1)]">{metric.value}</span>
            <p className="text-xs text-[var(--global-palette4)]">{metric.caption}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <article className="flex h-full flex-col rounded-3xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-6 shadow-sm">
          <header className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[var(--global-palette3)]">Global DevOps Market (Billions USD)</h3>
              <p className="text-xs text-[var(--global-palette5)]">Source: Fortune Business Insights, 2024 forecast</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--global-palette1)]/10 px-3 py-1 text-xs font-semibold text-[var(--global-palette1)]">
              2024 → 2028
            </span>
          </header>
          <figure className="mt-7 flex-1">
            <svg
              role="img"
              aria-labelledby="devops-growth-title devops-growth-desc"
              viewBox={`0 0 ${chartWidth + 80} ${chartHeight + 48}`}
              className="w-full"
            >
              <title id="devops-growth-title">Projected global DevOps market size in billions of US dollars</title>
              <desc id="devops-growth-desc">
                Line chart showing the DevOps market rising from 17.4 billion dollars in 2024 to 35.1 billion dollars in 2028.
              </desc>
              <defs>
                <linearGradient id="growth-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--global-palette1)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--global-palette2)" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g transform="translate(40 20)">
                {ticks.map((tick) => {
                  const normalized =
                    1 - (tick - ticks[0]) / (ticks[ticks.length - 1] - ticks[0] || 1);
                  const y = normalized * chartHeight;
                  return (
                    <g key={`tick-${tick}`}>
                      <line
                        x1={0}
                        y1={y}
                        x2={chartWidth}
                        y2={y}
                        stroke="var(--global-palette7)"
                        strokeDasharray="4 6"
                      />
                      <text
                        x={-12}
                        y={y + 4}
                        textAnchor="end"
                        className="fill-[var(--global-palette5)] text-[10px]"
                      >
                        {formatBillions(tick)}
                      </text>
                    </g>
                  );
                })}

                <path d={areaPath} fill="url(#growth-area)" />
                <path d={linePath} fill="none" stroke="var(--global-palette1)" strokeWidth={3} strokeLinecap="round" />

                {points.map((point) => {
                  const valueLabelY = Math.max(point.y - 14, 12);
                  return (
                    <g key={point.label}>
                      <circle cx={point.x} cy={point.y} r={5} fill="var(--global-palette1)" />
                      <text
                        x={point.x}
                        y={valueLabelY}
                        textAnchor="middle"
                        className="fill-[var(--global-palette3)] text-xs font-semibold"
                      >
                        {formatBillions(point.value)}
                      </text>
                      <text
                        x={point.x}
                        y={chartHeight + 24}
                        textAnchor="middle"
                        className="fill-[var(--global-palette5)] text-[10px]"
                      >
                        {point.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </figure>
        </article>

        <article className="flex h-full flex-col gap-6 rounded-3xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-6 shadow-sm">
          <header>
            <h3 className="text-lg font-semibold text-[var(--global-palette3)]">US DevOps Salary Benchmarks</h3>
            <p className="mt-1 text-xs text-[var(--global-palette5)]">Source: talent.com, 2024</p>
          </header>
          <div className="space-y-4 flex-1">
            {salaryData.map((band) => {
              const width = Math.max(28, Math.round((band.value / maxSalary) * 100));
              return (
                <div key={band.label} className="space-y-1">
                  <div className="flex items-center justify-between text-sm font-semibold text-[var(--global-palette3)]">
                    <span>{band.label}</span>
                    <span>${band.value.toLocaleString()}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-[var(--global-palette7)]/60">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--global-palette2)] to-[var(--global-palette1)]"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-[var(--global-palette4)]">
            Salaries reflect 2024 US averages. Adjust expectations for your region, experience, and company stage.
          </p>
        </article>
      </div>

      <div className="mt-10 grid gap-4 rounded-3xl border border-[var(--global-palette7)] bg-[var(--global-palette9)] p-6 shadow-sm sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--global-palette3)]">Hiring managers say…</p>
          <p className="text-xs text-[var(--global-palette4)]">
            Average time-to-fill a DevOps role is <strong>41 days</strong> (OpsRamp). Teams need engineers who can ship
            automation faster.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--global-palette3)]">Students report…</p>
          <p className="text-xs text-[var(--global-palette4)]">
            Learners who finish the full roadmap saw a <strong>32% salary lift</strong> within six months (internal cohort
            survey, 2023).
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--global-palette3)]">You can start now</p>
          <p className="text-xs text-[var(--global-palette4)]">
            Plug into live coaching, labs, and hiring preparation to hit the market while the demand curve is still
            climbing.
          </p>
        </div>
      </div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[var(--global-palette1)] bg-[var(--global-palette1)]/10 px-6 py-4 text-sm text-[var(--global-palette3)] sm:flex-row">
        <span>Use these numbers to secure your next DevOps offer.</span>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--global-palette1)] bg-[var(--global-palette1)] px-4 py-2 font-semibold text-white transition hover:bg-[var(--global-palette2)]"
        >
          Explore the program
        </a>
      </footer>
    </section>
  );
}
