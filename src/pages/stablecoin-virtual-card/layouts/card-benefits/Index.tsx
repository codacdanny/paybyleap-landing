import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const benefits = [
  {
    title: "Instant Card Issuance",
    desc: "Instant card issuance lets you get a Paybyleap virtual card instantly and start paying right away.",
    image: figma.visacard,
  },
  {
    title: "Spend Crypto Anywhere",
    desc: "Spend seamlessly online with your virtual card anytime, anywhere.",
    image: figma.stablecoinphone,
  },
  {
    title: "Easy Online Payments",
    desc: "Make payment instantly using your virtual card, also withdraw from your card to make payment.",
    image: figma.easyphonemock,
  },
  {
    title: "Secure Transactions",
    desc: "Secure transactions with advanced protection on every payment.",
    image: figma.padlockimage,
  },
];

export function ProductBenefitsGrid() {
  return (
    <section className="bg-[#FFF3F3] py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[694px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          Benefits of using Paybyleap Virtual Card
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 min-[1440px]:mt-[60px] min-[1440px]:gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-[24px] h-[592px] w-[545px]  flex flex-col justify-between p-[39px] pb-[45px] "
            >
              {/* Image container — separate bg, rounded, padded from card edges */}
              <div className="flex h-[40%] items-center justify-center overflow-hidden rounded-2xl p-[16px] min-[1440px]:h-[320px]">
                <img
                  src={b.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="px-2 pb-2 pt-5 min-[1440px]:px-3 min-[1440px]:pt-6">
                <h3 className="text-[32px] font-nohemi font-semibold leading-7 text-grey-90  ">
                  {b.title}
                </h3>
                <p className="mt-2 text-[16px] leading-6 text-grey-70 min-[1440px]:text-[18px] ">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
