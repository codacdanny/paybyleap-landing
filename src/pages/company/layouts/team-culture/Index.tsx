import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const perks = [
  {
    title: "Remote-first culture",
    desc: "Work from anywhere. Our team spans 3 continents and collaborates asynchronously.",
  },
  {
    title: "Competitive compensation",
    desc: "We pay top-of-market salaries with equity participation for all full-time roles.",
  },
  {
    title: "Learning & growth",
    desc: "Annual learning budget, conference sponsorship, and clear career ladders.",
  },
  {
    title: "Meaningful mission",
    desc: "Work on technology that genuinely improves millions of people's financial lives.",
  },
];

export function TeamCultureSection() {
  return (
    <section className="bg-off-white py-16 min-[1440px]:py-[120px]">
      <LandingInset>
        <div className="grid items-center gap-12 lg:grid-cols-2 min-[1440px]:gap-20">
          {/* Left: image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={figma.femalePhoneMockup}
              alt="PayByLeap team culture"
              className="h-[420px] w-full object-cover min-[1440px]:h-[560px]"
            />
          </div>

          {/* Right: copy + perks */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-widest text-primary">
              Careers at Paybyleap
            </p>
            <h2 className="mt-4 font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[40px] min-[1440px]:leading-[48px]">
              Join a team building the future of global finance
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-grey-70">
              We're a small, high-impact team moving fast. If you care about financial inclusion and love building great products, we'd love to meet you.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg viewBox="0 0 24 24" fill="none" className="size-3 text-white">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold text-grey-90">{p.title}</p>
                    <p className="mt-0.5 text-[15px] leading-5 text-grey-70">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-[18px] font-medium text-white"
            >
              View Open Roles
            </a>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
