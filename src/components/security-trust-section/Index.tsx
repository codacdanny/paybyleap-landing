import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

export interface SecurityFeature {
  title: string;
  desc: string;
}

interface SecurityTrustSectionProps {
  heading: string;
  subtitle?: string;
  features?: SecurityFeature[];
}

const defaultFeatures: SecurityFeature[] = [
  {
    title: "Protected and Regulated",
    desc: "Our platform is fully regulated and protected for any transaction.",
  },
  {
    title: "2FA Authentication",
    desc: "Verify your identity to securely access your account and funds.",
  },
  {
    title: "Instant Notifications",
    desc: "Receive alerts immediately after every transaction or account activity.",
  },
];

function SecurityCard({ feature }: { feature: SecurityFeature }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-grey-10 bg-white p-5 shadow-[0px_4px_24px_rgba(0,0,0,0.1)]">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1F2065] to-[#3E40CB]" />
      <div className="flex-1">
        <p className="text-[18px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[24px]">
          {feature.title}
        </p>
        <p className="mt-1 text-[14px] leading-5 text-grey-70 min-[1440px]:text-[16px]">
          {feature.desc}
        </p>
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-success/10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5 text-success"
          aria-hidden
        >
          <path
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.497 3.31c-.609.443-1.33.68-2.082.68a3.745 3.745 0 01-3.45 2.32c-.563 0-1.09-.128-1.566-.353a3.744 3.744 0 01-3.453-2.32c-.752 0-1.473-.237-2.082-.681a3.745 3.745 0 01-.497-3.31A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.497-3.31c.61-.443 1.33-.68 2.082-.68a3.745 3.745 0 013.45-2.32c.563 0 1.09.128 1.566.353a3.744 3.744 0 013.452 2.32c.752 0 1.473.237 2.082.68a3.745 3.745 0 01.497 3.31A3.745 3.745 0 0121 12z"
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

export function SecurityTrustSection({
  heading,
  subtitle = "Transacting is now very easy and fast with Paybyleap",
  features = defaultFeatures,
}: SecurityTrustSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary-light py-16 min-[1440px]:py-[97px]">
      <LandingInset className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: text */}
          <div>
            <h2 className="max-w-[509px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
              {heading}
            </h2>
            <p className="mt-6 max-w-[458px] text-[18px] leading-7 text-grey-90 min-[1440px]:text-[20px]">
              {subtitle}
            </p>
            <div className="mt-8 hidden min-[1440px]:block">
              <img
                src={figma.iphoneAirMockup}
                alt=""
                className="h-auto w-[260px] object-contain"
              />
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((f) => (
              <SecurityCard key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
