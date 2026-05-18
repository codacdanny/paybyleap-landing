import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const stats = [
  { value: "180+", label: "Countries supported" },
  { value: "0%", label: "Hidden fees" },
  { value: "24/7", label: "Availability" },
];

export function FeePaymentHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-16 min-[1440px]:min-h-[884px] min-[1440px]:pt-[105px]">
      <LandingInset className="relative z-10 pb-16 min-[1440px]:pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: copy */}
          <div className="max-w-[580px]">
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-secondary bg-cream px-3 py-1.5">
              <img src={figma.saintLouisCrest} alt="" className="size-4 object-contain" />
              <span className="text-[14px] font-medium leading-5 text-grey-80 min-[1440px]:text-[16px]">
                INTERNATIONAL PAYMENTS
              </span>
            </div>

            <h1 className="mt-10 font-nohemi text-[36px] font-semibold leading-[44px] text-grey-90 md:text-[48px] md:leading-[56px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              Pay International Fees and Tuition Seamlessly
            </h1>

            <p className="mt-4 max-w-[583px] text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px]">
              Send school fees, tuition, and international payments with ease. No hidden charges, no delays.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[201px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Pay Now
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
                Learn how fee payments work
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-grey-10 pt-8 min-[1440px]:mt-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-nohemi text-[28px] font-semibold text-primary min-[1440px]:text-[36px]">
                    {s.value}
                  </p>
                  <p className="text-[14px] text-grey-60 min-[1440px]:text-[16px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              <img
                src={figma.saintLouisCrest}
                alt="International fee payment"
                className="w-full rounded-2xl object-contain"
              />
              {/* Success overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-grey-10 bg-white p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-success/10">
                    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-success">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-grey-90">Payment Successful!</p>
                    <p className="text-[12px] text-grey-60">Tuition fee sent to Oxford University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
