import { LandingInset } from "@/components/landing-inset/Index";

const features = [
  {
    title: "Pay University Fees Directly",
    desc: "Send tuition and school fees directly to institutions worldwide with zero complications.",
    bg: "bg-[#FBF2D6]",
    textColor: "text-grey-90",
  },
  {
    title: "Multi-currency Transfers",
    desc: "Convert your local currency to any foreign currency and pay instantly.",
    bg: "bg-[#1F2065]",
    textColor: "text-white",
  },
  {
    title: "Invoice Generation",
    desc: "Generate payment invoices automatically for your records and verification.",
    bg: "bg-grey-100",
    textColor: "text-white",
  },
  {
    title: "Instant Confirmations",
    desc: "Receive payment confirmations in real-time so institutions are notified immediately.",
    bg: "bg-[#FFF3F3]",
    textColor: "text-grey-90",
  },
];

export function PaymentFeaturesSection() {
  return (
    <section className="bg-white py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[625px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          What you gain using Paybyleap for International Payments
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-[52px] min-[1440px]:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 min-[1440px]:p-8 ${f.bg}`}
              style={{ minHeight: 240 }}
            >
              <h3 className={`text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] ${f.textColor}`}>
                {f.title}
              </h3>
              <p
                className={`mt-3 text-[15px] leading-6 min-[1440px]:text-[16px] ${
                  f.textColor === "text-white" ? "text-white/80" : "text-grey-70"
                }`}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
