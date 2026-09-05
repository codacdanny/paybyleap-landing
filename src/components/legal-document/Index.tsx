import { useEffect, useState } from "react";
import { LandingInset } from "@/components/landing-inset/Index";

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "ordered"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "callout"; text: string };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

type Props = {
  title: string;
  summary: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSection[];
};

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="mt-4 text-[16px] leading-7 text-grey-80 first:mt-0 xl:text-[17px] xl:leading-8">
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h3 className="mt-8 font-nohemi text-[18px] font-semibold leading-7 text-grey-90 first:mt-0 xl:text-[20px]">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="relative pl-6 text-[16px] leading-7 text-grey-80 before:absolute before:left-0 before:top-[11px] before:size-1.5 before:rounded-full before:bg-primary xl:text-[17px] xl:leading-8"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "ordered":
      return (
        <ol className="mt-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={item}
              className="relative pl-8 text-[16px] leading-7 text-grey-80 xl:text-[17px] xl:leading-8"
            >
              <span className="absolute left-0 top-0 text-[15px] font-semibold text-primary">
                {i + 1}.
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mt-5 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-grey-20">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="py-3 pr-4 align-bottom font-nohemi text-[14px] font-semibold uppercase tracking-wide text-grey-90 last:pr-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-b border-grey-10">
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="py-3 pr-4 align-top text-[15px] leading-6 text-grey-80 last:pr-0"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <p className="mt-5 rounded-2xl border border-primary/15 bg-primary-light/60 px-5 py-4 text-[15px] font-medium leading-7 text-grey-90">
          {block.text}
        </p>
      );
  }
}

function useActiveSection(idList: string): string {
  const [active, setActive] = useState(idList.split("|")[0] ?? "");

  useEffect(() => {
    const ids = idList.split("|");
    let frame = 0;

    function measure() {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1] ?? "");
        return;
      }
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [idList]);

  return active;
}

export function LegalDocument({
  title,
  summary,
  effectiveDate,
  lastUpdated,
  sections,
}: Props) {
  const [tocOpen, setTocOpen] = useState(false);
  const active = useActiveSection(sections.map((s) => s.id).join("|"));

  return (
    <main>
      <section className="border-b border-grey-10 bg-gradient-to-b from-primary-light to-white">
        <LandingInset className="py-12 lg:py-16 xl:py-20">
          <p className="font-nohemi text-[13px] font-semibold uppercase tracking-[0.14em] text-primary">
            Legal
          </p>
          <h1 className="mt-3 max-w-[760px] font-nohemi text-[32px] font-semibold leading-10 text-grey-90 md:text-[40px] md:leading-[48px] xl:text-[48px] xl:leading-[56px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[720px] text-[16px] leading-7 text-grey-80 xl:text-[18px] xl:leading-8">
            {summary}
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-[13px] uppercase tracking-wide text-grey-60">
                Effective date
              </dt>
              <dd className="mt-1 text-[15px] font-medium text-grey-90">
                {effectiveDate}
              </dd>
            </div>
            <div>
              <dt className="text-[13px] uppercase tracking-wide text-grey-60">
                Last updated
              </dt>
              <dd className="mt-1 text-[15px] font-medium text-grey-90">
                {lastUpdated}
              </dd>
            </div>
          </dl>
        </LandingInset>
      </section>

      <LandingInset className="pb-20 pt-10 lg:pb-24 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,280px)_minmax(0,1fr)] xl:gap-16">
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-[100px] lg:max-h-[calc(100vh-140px)] lg:self-start lg:overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setTocOpen((o) => !o)}
              aria-expanded={tocOpen}
              className="flex w-full items-center justify-between rounded-xl border border-grey-10 bg-off-white px-4 py-3.5 text-left font-nohemi text-[13px] font-semibold uppercase tracking-[0.14em] text-grey-70 lg:hidden"
            >
              On this page
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className={`size-5 transition-transform ${tocOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="hidden font-nohemi text-[13px] font-semibold uppercase tracking-[0.14em] text-grey-60 lg:block">
              On this page
            </p>
            <ol
              className={`mt-4 space-y-0.5 lg:block ${tocOpen ? "" : "hidden"}`}
            >
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setTocOpen(false)}
                    aria-current={active === s.id ? "true" : undefined}
                    className={`flex gap-2.5 rounded-lg px-3 py-2 text-[14px] leading-5 transition-colors hover:bg-primary-light ${
                      active === s.id
                        ? "bg-primary-light font-semibold text-primary"
                        : "text-grey-70"
                    }`}
                  >
                    <span className="shrink-0 tabular-nums opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-[760px]">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-[110px] border-t border-grey-10 pb-10 pt-10 first:border-t-0 first:pt-0"
              >
                <h2 className="font-nohemi text-[22px] font-semibold leading-8 text-grey-90 xl:text-[26px] xl:leading-9">
                  <span className="mr-2 text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                <div className="mt-5">
                  {s.blocks.map((block, bi) => (
                    <Block key={bi} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </LandingInset>
    </main>
  );
}
