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

function CheckIcon() {
  return (
    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#E6F9F0]">
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
  );
}

function PhoneScreen() {
  return (
    <div className="relative mx-auto w-[260px] min-[1440px]:w-[300px]">
      {/* Phone shell */}
      <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-grey-90 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-grey-90 px-5 py-2">
          <span className="text-[10px] font-semibold text-white">9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm bg-white opacity-80" />
            <span className="h-2 w-1 rounded-sm bg-white opacity-60" />
            <span className="h-2 w-2 rounded-full bg-white opacity-80" />
          </div>
        </div>

        {/* App content */}
        <div className="bg-white px-4 pb-6 pt-4">
          {/* Screen header */}
          <p className="text-[13px] font-semibold text-grey-90">Swap Currency</p>
          <p className="mt-0.5 text-[11px] text-grey-50">Quick and easy</p>

          {/* Feature rows */}
          <div className="mt-4 flex flex-col gap-2.5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-3 rounded-xl border border-grey-10 bg-[#FAFAFA] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <div className="size-2 rounded-full bg-primary" />
                </div>
                <p className="flex-1 text-[11px] font-semibold leading-4 text-grey-90">
                  {f.title}
                </p>
                <CheckIcon />
              </div>
            ))}
          </div>

          {/* Exchange rate display */}
          <div className="mt-4 rounded-xl bg-[#F8F8F8] p-3">
            <p className="text-[10px] font-medium text-grey-50">Exchange Rate</p>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <img src={figma.flagUs} alt="" className="size-4 rounded-full object-cover" />
                <span className="text-[11px] font-semibold text-grey-90">1 USD</span>
              </div>
              <span className="text-[11px] text-grey-50">=</span>
              <div className="flex items-center gap-1.5">
                <img src={figma.euFlag} alt="" className="size-4 rounded-full object-cover" />
                <span className="text-[11px] font-semibold text-grey-90">0.92 EUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

