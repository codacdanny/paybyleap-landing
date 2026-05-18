import { LandingInset } from "@/components/landing-inset/Index";

const features = [
  {
    title: "Professional Invoice Templates",
    desc: "Create branded invoices in seconds with customizable templates that look great.",
  },
  {
    title: "Accept Global Payments",
    desc: "Receive payments in USD, EUR, GBP, and other currencies from clients worldwide.",
  },
  {
    title: "Auto Payment Reminders",
    desc: "Automatically remind clients about due invoices so you always get paid on time.",
  },
  {
    title: "Expense Tracking",
    desc: "Track all your invoices and payments in one place for easy financial management.",
  },
];

export function InvoiceFeaturesSection() {
  return (
    <section className="bg-off-white py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[625px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          What you gain using Paybyleap Global Invoicing
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-[52px]">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-soft min-[1440px]:p-8"
            >
              <div className="flex size-[70px] items-center justify-center rounded-xl bg-[#FFF3F3]">
                <svg viewBox="0 0 24 24" fill="none" className="size-8 text-primary">
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-[20px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[24px]">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-grey-70 min-[1440px]:text-[16px] min-[1440px]:leading-6">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
