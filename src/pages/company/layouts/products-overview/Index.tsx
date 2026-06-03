import { useState } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const timeline = [
  {
    id: "founded",
    label: "Founded",
    year: "2024",
    text: "To simplify and expedite financial transactions across borders, making global business and learning and education payments more accessible.",
  },
  {
    id: "mission",
    label: "Our Mission",
    year: "",
    text: "To simplify global payments — making it faster, cheaper, and more accessible for individuals and businesses to transact across borders.",
  },
  {
    id: "vision",
    label: "Our Vision",
    year: "",
    text: "A world where money moves as freely as information — where geography is never a barrier to financial participation.",
  },
];

export function CompanyTimelineSection() {
  const [active, setActive] = useState("founded");

  return (
    <section className="bg-[#1D1111] py-16 min-[1440px]:py-[100px]">
      <LandingInset>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 min-[1440px]:gap-20">

          {/* ── Left: Timeline tabs ── */}
          <div className="rounded-2xl border border-white/10 bg-[#2A1A1A] p-8 min-[1440px]:p-10">
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className="group text-left"
                >
                  <div className="flex items-start gap-4 py-5">
                    {/* Dot + line */}
                    <div className="flex flex-col items-center pt-1">
                      <div
                        className={`size-3 shrink-0 rounded-full transition-colors ${active === item.id ? "bg-primary" : "bg-white/20"}`}
                      />
                      {i < timeline.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-white/10" style={{ minHeight: 40 }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[13px] font-semibold uppercase tracking-widest transition-colors ${active === item.id ? "text-primary" : "text-white/40"}`}
                        >
                          {item.label}
                        </span>
                        {item.year && (
                          <span className="text-[13px] font-bold text-white/60">{item.year}</span>
                        )}
                      </div>
                      <p
                        className={`mt-2 text-[15px] leading-6 transition-colors min-[1440px]:text-[16px] ${active === item.id ? "text-white/80" : "text-white/30"}`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Why Paybyleap Exists ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-nohemi text-[32px] font-bold leading-[1.2] text-white md:text-[40px] min-[1440px]:text-[44px]">
                Why Paybyleap Exists
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-white/60 min-[1440px]:text-[18px]">
                People and businesses are no longer limited by geography. Yet
                financial systems remain fragmented, slow, and expensive.
              </p>
              <p className="mt-4 text-[17px] leading-[1.75] text-white/60 min-[1440px]:text-[18px]">
                Paybyleap was built to change that — one seamless transaction at
                a time.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={figma.freeAccountHero}
                alt="PayByLeap team"
                className="h-[300px] w-full object-cover object-top min-[1440px]:h-[360px]"
              />
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
