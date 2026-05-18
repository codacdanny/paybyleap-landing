import { LandingInset } from "@/components/landing-inset/Index";
import { figma } from "@/data/images/Index";

const features = [
  {
    icon: figma.transferArrow,
    title: "Real-time conversion",
    desc: "Instantly converts currencies using live exchange rates for accurate, seamless transactions.",
  },
  {
    icon: figma.ionPlanet,
    title: "Multi-currency Support",
    desc: "Access and transact in multiple global currencies from a single account with ease.",
  },
  {
    icon: figma.arrowRightWhite,
    title: "Low Fees",
    desc: "All costs are transparent and shown upfront — no hidden charges, ever.",
  },
  {
    icon: figma.transferArrow,
    title: "Fast Settlement",
    desc: "Currency conversions settle instantly, so your funds are available right away.",
  },
];

export function CurrencyFeatureCards() {
  return (
    <section className="bg-white pb-16 pt-8 min-[1440px]:pb-[80px] min-[1440px]:pt-10">
      <LandingInset>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 min-[1440px]:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-grey-10 bg-white p-5 shadow-[0px_4px_16px_rgba(0,0,0,0.06)] min-[1440px]:p-6"
            >
              <div className="flex size-[52px] items-center justify-center rounded-xl bg-[#FFF3F3] min-[1440px]:size-[60px]">
                <img
                  src={f.icon}
                  alt=""
                  className="size-6 object-contain min-[1440px]:size-7"
                />
              </div>
              <p className="mt-4 text-[16px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[18px]">
                {f.title}
              </p>
              <p className="mt-2 text-[13px] leading-5 text-grey-60 min-[1440px]:text-[14px] min-[1440px]:leading-6">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
