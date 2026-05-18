import { LandingInset } from "@/components/landing-inset/Index";

const values = [
  {
    title: "Transparency",
    desc: "We believe in full transparency — no hidden fees, no fine print. What you see is exactly what you get.",
    icon: "👁️",
  },
  {
    title: "Accessibility",
    desc: "Financial tools shouldn't be a luxury. We're building for everyone, everywhere — especially the underserved.",
    icon: "🌍",
  },
  {
    title: "Security",
    desc: "Your money and data are protected by industry-leading security, regulation, and compliance standards.",
    icon: "🔒",
  },
  {
    title: "Speed",
    desc: "Time is money. Our infrastructure is built to move funds faster than traditional banking systems.",
    icon: "⚡",
  },
];

export function MissionVisionSection() {
  return (
    <section className="bg-off-white py-16 min-[1440px]:py-[120px]">
      <LandingInset>
        {/* Mission */}
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-20">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-widest text-primary min-[1440px]:text-[16px]">
              Our Mission
            </p>
            <h2 className="mt-4 font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
              Making global payments accessible to all
            </h2>
            <p className="mt-6 text-[18px] leading-7 text-grey-70 min-[1440px]:text-[20px]">
              We're on a mission to democratize cross-border finance. Whether you're a freelancer in Lagos, a student in London, or a business in New York — Paybyleap gives you the tools to move money without friction.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-primary-dark p-8 text-white min-[1440px]:p-10">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-white/60">
              Our Vision
            </p>
            <h3 className="mt-4 font-nohemi text-[28px] font-semibold leading-[36px] min-[1440px]:text-[36px] min-[1440px]:leading-[44px]">
              A world where money flows as freely as information
            </h3>
            <p className="mt-4 text-[16px] leading-6 text-white/80 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              We envision a borderless financial future where anyone can transact globally — instantly, affordably, and securely.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 min-[1440px]:mt-20">
          <h2 className="mx-auto max-w-[480px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 min-[1440px]:text-[40px] min-[1440px]:leading-[48px]">
            The values we live by
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-14 min-[1440px]:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-grey-10 bg-white p-6 shadow-soft min-[1440px]:p-8"
              >
                <span className="text-[36px]">{v.icon}</span>
                <h3 className="mt-4 text-[20px] font-semibold text-grey-90 min-[1440px]:text-[22px]">
                  {v.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-grey-70 min-[1440px]:text-[16px]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
