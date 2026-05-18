import { LandingInset } from "@/components/landing-inset/Index";

const benefits = [
  {
    title: "Instant Crypto Transfer",
    desc: "Send and receive crypto instantly with fast, seamless transactions.",
  },
  {
    title: "Multi-coin Support",
    desc: "Manage and transact across multiple cryptocurrencies in one place.",
  },
  {
    title: "Easy Integration with Wallets",
    desc: "Connect seamlessly with your wallets for quick and easy crypto access.",
  },
  {
    title: "Low Fees",
    desc: "Buy, sell or transfer your crypto globally with low fees charge.",
  },
];

export function CryptoBenefitsSection() {
  return (
    <section className="bg-off-white py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[760px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          What you gain using Paybyleap for your Crypto transactions
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 min-[1440px]:mt-[52px] min-[1440px]:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-6 shadow-soft min-[1440px]:p-8"
            >
              <div className="flex size-[70px] items-center justify-center rounded-xl bg-[#FFF3F3]">
                <svg viewBox="0 0 24 24" fill="none" className="size-8 text-primary">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-[18px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[20px]">
                {b.title}
              </h3>
              <p className="mt-2 text-[14px] leading-5 text-grey-70 min-[1440px]:text-[16px] min-[1440px]:leading-6">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
