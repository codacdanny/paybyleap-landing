import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const features = [
  {
    title: "Protected and Regulated",
    desc: "Our exchange rate is considerate and of market value",
  },
  {
    title: "2FA Authentication",
    desc: "Verify to grant access to convert your money",
  },
  {
    title: "Instant Notifications for Payment",
    desc: "Receive alert immediately after you convert currency",
  },
];

const icons = [
  /* currency swap */
  <svg key="swap" viewBox="0 0 24 24" fill="none" className="size-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16h10M17 16l-3-3M17 16l-3 3M17 8H7M7 8l3-3M7 8l3 3" />
  </svg>,
  /* shield */
  <svg key="shield" viewBox="0 0 24 24" fill="none" className="size-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  /* bell */
  <svg key="bell" viewBox="0 0 24 24" fill="none" className="size-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>,
];

export function TransactionSecuritySection() {
  return (
    <section className="relative overflow-hidden bg-primary-light py-16 min-[1440px]:py-[80px]">
      <LandingInset className="relative z-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start min-[1440px]:gap-10">

          {/* Phone + feature cards */}
          <div className="relative shrink-0 min-[1440px]:h-[620px] min-[1440px]:w-[540px]">
            <img
              src={figma.transactionsPhone}
              alt=""
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden w-[410px] -translate-x-1/2 -translate-y-1/2 object-contain min-[1440px]:block"
              aria-hidden
            />
            <div className="flex flex-col gap-4 min-[1440px]:absolute min-[1440px]:left-1/2 min-[1440px]:-translate-x-1/2 min-[1440px]:top-1/2 min-[1440px]:-translate-y-1/2 min-[1440px]:z-10 min-[1440px]:w-[480px]">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0px_4px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex size-[56px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1F2065] to-[#3E40CB]">
                    {icons[i]}
                  </div>
                  <div className="flex-1">
                    <p className="text-[16px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[18px]">
                      {f.title}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-5 text-grey-60 min-[1440px]:text-[14px]">
                      {f.desc}
                    </p>
                  </div>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
                    <svg viewBox="0 0 12 10" fill="none" className="size-3.5">
                      <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heading + body */}
          <div className="mt-20 flex-1">
            <h2 className="font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[60px]">
              Carry out Global Transactions with ease and safety measures
            </h2>
            <p className="mt-6 text-[16px] leading-7 text-grey-70 min-[1440px]:text-[20px] min-[1440px]:leading-8">
              Converting money is now very easy and fast with paybyleap
            </p>
          </div>

        </div>
      </LandingInset>
    </section>
  );
}
