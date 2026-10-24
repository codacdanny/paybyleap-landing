import { stablecoinVirtualCardImages } from "@/data/images/stablecoin-virtual-card";
import { LandingInset } from "@/components/landing-inset/Index";

// Art is placed inside the grey panel: below xl as a share of the 318x281
// mobile panel (Figma 4789:13414), from xl in px of the 498px desktop panel
// (Figma 4643:37900). The first panel is 15px taller on desktop.
const benefits = [
  {
    title: "Instant Card Issuance",
    desc: "Instant card issuance lets you get a Paybyleap virtual card instantly and start paying right away.",
    panel: "xl:mt-[28px] xl:h-[365px]",
    art: [
      { src: stablecoinVirtualCardImages.virtualCardMirror, className: "left-[7.86%] top-[7.12%] w-[84.28%] xl:hidden" },
      { src: stablecoinVirtualCardImages.virtualCardUsd, className: "hidden rounded-2xl xl:left-[83px] xl:top-[21px] xl:block xl:w-[321px]" },
      { src: stablecoinVirtualCardImages.virtualCardUsd, className: "hidden rounded-2xl opacity-[.19] blur-[2px] xl:left-[88px] xl:top-[258px] xl:block xl:w-[321px]" },
    ],
  },
  {
    title: "Spend Crypto Anywhere",
    desc: "Spend seamlessly online with your virtual card anytime, anywhere.",
    panel: "xl:mt-[43px] xl:h-[350px]",
    art: [
      { src: stablecoinVirtualCardImages.virtualCardPhoneStablecoins, className: "left-[11.32%] top-[7.83%] w-[75.47%] xl:left-[85px] xl:top-[30px] xl:w-[329px]" },
    ],
  },
  {
    title: "Easy Online Payments",
    desc: "Make payment instantly using your virtual card, also withdraw from your card to make payment.",
    panel: "xl:mt-[43px] xl:h-[350px]",
    art: [
      { src: stablecoinVirtualCardImages.virtualCardPhoneWithdraw, className: "left-[13.84%] top-[10.32%] w-[66.35%] xl:left-[108px] xl:top-[27px] xl:w-[282px]" },
    ],
  },
  {
    title: "Secure Transactions",
    desc: "Secure transactions with advanced protection on every payment.",
    panel: "xl:mt-[43px] xl:h-[350px]",
    art: [
      { src: stablecoinVirtualCardImages.virtualCardSecure, className: "-left-[5.66%] top-[2.85%] w-[111.32%] xl:left-[7px] xl:top-[-6px] xl:w-[483px]" },
    ],
  },
];

export function ProductBenefitsGrid() {
  return (
    <section className="bg-[#FFF4F4] pb-[87px] pt-[52px] xl:pb-[140px] xl:pt-[111px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[329px] text-center font-nohemi text-[20px] font-semibold leading-7 text-grey-90 md:max-w-[520px] md:text-heading-5 xl:max-w-[693px] xl:text-heading-3">
          Benefits of using Paybyleap Virtual Card
        </h2>

        <div className="mt-[33px] grid gap-6 md:grid-cols-2 xl:mt-[93px] xl:grid-cols-[575px_575px] xl:justify-center xl:gap-x-[22px] xl:gap-y-10">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl bg-white pb-[25px] pt-6 xl:h-[592px] xl:rounded-3xl xl:border xl:border-grey-10 xl:pb-0 xl:pt-0 xl:shadow-[0_4px_36px_rgba(0,0,0,0.05)]"
            >
              <div
                className={`relative ml-[19px] mr-3 aspect-[318/281] overflow-hidden rounded-lg bg-less-white xl:ml-[38px] xl:mr-0 xl:aspect-auto xl:w-[498px] xl:rounded-2xl ${b.panel}`}
              >
                {b.art.map((a, i) => (
                  <img
                    key={i}
                    loading="lazy"
                    decoding="async"
                    src={a.src}
                    alt=""
                    className={`absolute max-w-none ${a.className}`}
                  />
                ))}
              </div>
              <h3 className="mt-6 pl-[19px] font-nohemi text-[16px] font-semibold leading-7 text-grey-90 xl:mt-[42px] xl:pl-[27px] xl:text-heading-5">
                {b.title}
              </h3>
              <p className="mt-[7px] max-w-[317px] pl-[19px] text-body-5 text-grey-90 xl:mt-[11px] xl:max-w-[516px] xl:pl-[27px] xl:text-[20px] xl:leading-7">
                {b.desc}
              </p>
            </article>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
