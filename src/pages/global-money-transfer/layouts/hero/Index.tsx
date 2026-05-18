import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const avatarFlags = [
  { img: figma.flagNg2, label: "Nigeria" },
  { img: figma.flagUs2, label: "United States" },
  { img: figma.flagUk2, label: "United Kingdom" },
];

export function MoneyTransferHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-16 min-[1440px]:min-h-[820px] min-[1440px]:pt-[105px]">
      <LandingInset className="relative z-10 pb-16 min-[1440px]:pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: copy */}
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-secondary bg-cream px-3 py-1.5">
              <img src={figma.ionPlanet} alt="" className="size-4" />
              <span className="text-[14px] font-medium leading-5 text-grey-80 min-[1440px]:text-[16px]">
                GLOBAL MONEY TRANSFER
              </span>
            </div>

            <h1 className="mt-10 font-nohemi text-[36px] font-semibold leading-[44px] text-grey-90 md:text-[48px] md:leading-[56px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Send and Receive Money Worldwide Quickly and Securely
            </h1>

            <p className="mt-4 max-w-[441px] text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px]">
              Move your money anywhere and anytime.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[201px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Transfer Now
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-grey-20 bg-[#FFF3F3] px-4 text-[16px] font-medium leading-6 text-grey-90"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-primary">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Learn how transfers work
              </a>
            </div>
          </div>

          {/* Right: globe illustration with flag avatars */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[420px] w-full max-w-[500px]">
              {/* Globe background circle */}
              <div className="absolute inset-8 rounded-full bg-[#FFF3F3] opacity-60" />

              {/* Globe image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={figma.faGlobe}
                  alt="Global network"
                  className="h-[360px] w-[360px] object-contain opacity-80"
                />
              </div>

              {/* Flag avatars */}
              {avatarFlags.map((f, i) => (
                <div
                  key={f.label}
                  className="absolute flex items-center gap-1"
                  style={{
                    top: i === 0 ? "20%" : i === 1 ? "55%" : "75%",
                    left: i === 0 ? "5%" : i === 1 ? "75%" : "15%",
                  }}
                >
                  <div className="relative">
                    <div className="size-10 overflow-hidden rounded-full border-2 border-white bg-grey-20 shadow-soft">
                      <img src={f.img} alt={f.label} className="size-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
