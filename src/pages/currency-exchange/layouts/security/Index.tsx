import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const features = [
  {
    title: "Regulated Exchange",
    desc: "Our exchange rate is aligned with market value — always fair and regulated.",
  },
  {
    title: "2FA Authentication",
    desc: "Verify your identity to grant access before any currency conversion.",
  },
  {
    title: "Instant Alert",
    desc: "Receive an immediate notification the moment a currency conversion completes.",
  },
];

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-grey-10 bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] min-[1440px]:p-5">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#1F2065] to-[#3E40CB] min-[1440px]:size-14 min-[1440px]:rounded-2xl" />
      <div className="flex-1 min-w-0">
        <p className="text-[16px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[18px]">
          {title}
        </p>
        <p className="mt-1 text-[13px] leading-5 text-grey-60 min-[1440px]:text-[14px] min-[1440px]:leading-6">
          {desc}
        </p>
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E6F9F0]">
        <svg viewBox="0 0 20 20" fill="none" className="size-4 text-[#16A34A]" aria-hidden>
          <path
            d="M4.167 10.833 7.5 14.167l8.333-8.334"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function CurrencySecuritySection() {
  return (
    <section className="overflow-hidden bg-primary-light py-16 min-[1440px]:py-[80px]">
      <LandingInset>
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-20">
          {/* Left: phone mockup */}
          <div className="flex items-center justify-center">
            <img
              src={figma.iphoneAirMockup}
              alt="PayByLeap currency exchange app"
              className="h-auto w-[220px] object-contain md:w-[260px] min-[1440px]:w-[300px]"
            />
          </div>

          {/* Right: heading + security cards */}
          <div>
            <h2 className="max-w-[480px] font-nohemi text-[28px] font-semibold leading-[36px] text-grey-90 md:text-[36px] md:leading-[44px] min-[1440px]:text-[44px] min-[1440px]:leading-[52px]">
              Convert your money with ease and safety measures
            </h2>
            <p className="mt-4 max-w-[440px] text-[16px] leading-6 text-grey-70 min-[1440px]:mt-5 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              Converting money is now very easy and fast with Paybyleap
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[1440px]:mt-10 min-[1440px]:gap-4">
              {features.map((f) => (
                <FeatureCard key={f.title} title={f.title} desc={f.desc} />
              ))}
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
