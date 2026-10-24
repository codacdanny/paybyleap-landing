import { LandingInset } from "@/components/landing-inset/Index";
import { sharedImages } from "@/data/images/shared";

// Figma 4549:36321 is a 640x448 group: card boxes are percentages of that
// box and everything inside them is in cqw (1cqw = 6.4px at full size), so
// the whole illustration scales down to the 340px mobile frame (4788:13122).
const conversionCards = [
  {
    label: "From",
    caption: "Amount to swap",
    amount: "USD 00.00",
    flag: sharedImages.heroFlagUs,
    flagAlt: "United States flag",
    hasCursor: true,
    box: "left-[49.53%] top-0 h-[39.73%] bg-[#FFF4F4]",
    pill: "left-[4.84cqw]",
    captionPos: "left-[6.09cqw] top-[8.75cqw]",
    flagPos: "left-[5.31cqw] top-[11.25cqw]",
    amountPos: "left-[16.09cqw] top-[13.28cqw]",
  },
  {
    label: "To",
    caption: "Amount to receive",
    amount: "EUR 00.00",
    flag: sharedImages.heroFlagEu,
    flagAlt: "European Union flag",
    hasCursor: false,
    box: "left-0 top-[61.83%] h-[38.17%] bg-[#FDF2D8]",
    pill: "left-[3.28cqw]",
    captionPos: "left-[4.22cqw] top-[8.91cqw]",
    flagPos: "left-[4.22cqw] top-[12.66cqw]",
    amountPos: "left-[14.69cqw] top-[14.375cqw]",
  },
];

function PlayIcon() {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[#FFF4F4]">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-[1px] size-[11px]" aria-hidden="true">
        <path d="M7 4.5v15l12.5-7.5z" />
      </svg>
    </span>
  );
}

function ConversionCard({ card }: { card: (typeof conversionCards)[number] }) {
  return (
    <div
      className={`absolute w-[50.47%] rounded-[2.5cqw] border border-b-[0.9375cqw] border-grey-100 ${card.box}`}
    >
      <span
        className={`absolute top-[2.81cqw] rounded-[2.5cqw] border border-primary-light bg-white px-[1.25cqw] py-[0.3125cqw] text-[length:2.5cqw] leading-[3.75cqw] text-grey-100 ${card.pill}`}
      >
        {card.label}
      </span>
      <span
        className={`absolute whitespace-nowrap text-[length:1.875cqw] leading-[2.5cqw] text-grey-100 ${card.captionPos}`}
      >
        {card.caption}
      </span>
      <img
        src={card.flag}
        alt={card.flagAlt}
        className={`absolute size-[9.375cqw] ${card.flagPos}`}
      />
      <span
        className={`absolute flex items-center whitespace-nowrap text-[length:5cqw] font-semibold leading-[6.25cqw] text-grey-90 ${card.amountPos}`}
      >
        {card.amount}
        {card.hasCursor && (
          <span className="ml-[0.3cqw] h-[4.4cqw] w-[0.25cqw] bg-grey-90" aria-hidden />
        )}
      </span>
    </div>
  );
}

export function CurrencyHero() {
  return (
    <section className="overflow-hidden bg-white bg-[linear-gradient(180deg,rgba(255,244,244,0.1)_63%,#FFF4F4_87%,rgba(241,222,226,0.5)_100%)] pb-[142px] pt-[23px] lg:pb-[177px] xl:h-[736px] xl:pb-0 xl:pt-[100px]">
      <LandingInset>
        <div className="relative">
          <div className="relative z-[2]">
            <h1 className="font-spartan text-heading-5 text-grey-90 md:max-w-[640px] md:text-heading-3 xl:max-w-[795px] xl:text-heading-1">
              Convert currencies instantly at competitive rate
            </h1>
            <p className="mt-[17px] max-w-[289px] text-body-4 text-grey-80 md:max-w-none xl:mt-[18px] xl:text-[24px] xl:leading-8">
              PayByLeap gives you seamless access to global currencies.
            </p>

            <a
              href="#real-time-exchange"
              className="mt-8 flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary px-2 text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary xl:mt-[67px]"
            >
              Convert Now
            </a>
            <a
              href="#real-time-exchange"
              className="mt-4 flex h-[69px] w-[296px] items-center justify-center gap-3 rounded-lg border border-grey-20 bg-[#FFF4F4] px-2 text-[16px] font-medium leading-6 text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:h-12 md:w-[357px] md:text-[18px] xl:mt-6"
            >
              <PlayIcon />
              <span className="max-w-[215px] md:max-w-none">
                Learn more about currency exchange
              </span>
            </a>
          </div>

          <div
            className="relative mt-8 aspect-[640/448] w-full max-w-[340px] [container-type:inline-size] md:max-w-[640px] xl:absolute xl:right-0 xl:top-0 xl:mt-0 xl:w-[640px] min-[1440px]:-right-16"
          >
            {conversionCards.map((card) => (
              <ConversionCard key={card.label} card={card} />
            ))}
            <img
              src={sharedImages.convertIcon}
              alt=""
              aria-hidden
              className="absolute left-[42.89%] top-[45.87%] w-[7.34%]"
            />
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
