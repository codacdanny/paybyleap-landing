import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const flagPairs = [
  { img: figma.flagNg, label: "Nigeria" },
  { img: figma.flagUs, label: "United States" },
  { img: figma.flagCa, label: "Canada" },
  { img: figma.euFlag, label: "Europe" },
  { img: figma.flagUk, label: "United Kingdom" },
  { img: figma.flagCn, label: "China" },
];

export function TransferChannelsSection() {
  return (
    <section className="bg-off-white py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <h2 className="max-w-[625px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          Send &amp; Receive Money Across Globe with Ease
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3 min-[1440px]:mt-[52px]">
          {/* Card 1: Fast International Transfers */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1F2065] p-6 min-[1440px]:p-8" style={{ minHeight: 481 }}>
            <h3 className="text-[22px] font-semibold leading-7 text-white min-[1440px]:text-[26px]">
              Fast International Transfers
            </h3>
            <p className="mt-3 max-w-[324px] text-[16px] leading-6 text-white/80 min-[1440px]:text-[18px]">
              Send money across borders quickly and reliably with minimal delays.
            </p>
            <div className="absolute bottom-6 right-6 flex gap-2">
              <div className="size-2.5 rounded-full bg-white" />
              <div className="size-2.5 rounded-full bg-white/40" />
              <div className="size-2.5 rounded-full bg-white/40" />
            </div>
          </div>

          {/* Card 2: Multi-currency Support */}
          <div className="relative overflow-hidden rounded-2xl bg-[#EDEDED] p-6 min-[1440px]:p-8" style={{ minHeight: 481 }}>
            <h3 className="text-[22px] font-semibold leading-7 text-grey-90 min-[1440px]:text-[26px]">
              Multi-currency Support
            </h3>
            <p className="mt-3 max-w-[324px] text-[16px] leading-6 text-grey-70 min-[1440px]:text-[18px]">
              Manage and transact in multiple currencies from a single account with ease.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {flagPairs.map((f) => (
                <div
                  key={f.label}
                  className="flex size-[76px] items-center justify-center overflow-hidden rounded-full border border-grey-10 bg-white shadow-soft"
                >
                  <img src={f.img} alt={f.label} className="size-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Track Payment in Real-time */}
          <div className="relative overflow-hidden rounded-2xl bg-grey-100 p-6 min-[1440px]:p-8" style={{ minHeight: 481 }}>
            <h3 className="text-[22px] font-semibold leading-7 text-white min-[1440px]:text-[26px]">
              Track Payment in Real-time
            </h3>
            <p className="mt-3 max-w-[324px] text-[16px] leading-6 text-white/80 min-[1440px]:text-[18px]">
              Stay informed and in control with real-time tracking and notifications.
            </p>

            {/* Mini transfer status UI */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-white/60">Transfer Status</span>
                  <span className="rounded-full bg-success/20 px-2 py-0.5 text-[12px] font-medium text-success">
                    Live
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-success" />
                  </div>
                  <span className="text-[12px] text-white/60">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
