import { figma } from "@/data/images/Index";

function SwapIcon({ className = "h-[48px] w-[56px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 66 58" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 17.5h38.8c7.6 0 13.7 6.1 13.7 13.7v4.9"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M45.3 4.9 60 18.1 45.3 31.3"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.5 40.5H19.7C12.1 40.5 6 34.4 6 26.8v-4.9"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20.7 53.1 6 39.9l14.7-13.2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-[2px] size-[12px]" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

type HeroCurrencyCardProps = {
  label: string;
  caption: string;
  code: string;
  amount: string;
  flag: string;
  alt: string;
  variant: "from" | "to";
};

function HeroCurrencyCard({ label, caption, code, amount, flag, alt, variant }: HeroCurrencyCardProps) {
  const isFrom = variant === "from";

  return (
    <div
      className={`relative h-[178px] w-full rounded-[20px] border border-grey-100 px-[37px] pt-[24px] shadow-[0_7px_0_#000] 2xl:h-[222px] 2xl:w-[424px] 2xl:rounded-[22px] 2xl:px-[40px] 2xl:pt-[27px] ${
        isFrom ? "bg-[#FFF4F4]" : "bg-[#FFF6DD]"
      }`}
    >
      <span className="inline-flex h-[30px] min-w-[80px] items-center justify-center rounded-full bg-white px-4 text-[20px] font-medium leading-none text-grey-90 shadow-[0_0_0_1px_rgba(246,192,58,0.22)] 2xl:h-[35px] 2xl:min-w-[82px] 2xl:text-[22px]">
        {label}
      </span>
      <p className="mt-[25px] text-[14px] font-semibold leading-none text-grey-100 2xl:mt-[30px] 2xl:text-[16px]">
        {caption}
      </p>
      <div className="mt-[10px] flex items-center gap-[15px] 2xl:mt-[14px] 2xl:gap-[18px]">
        <img src={flag} alt={alt} className="size-[61px] rounded-full object-cover 2xl:size-[70px]" />
        <p className="font-nohemi text-[41px] font-semibold leading-none tracking-[-0.02em] text-grey-90 2xl:text-[46px]">
          {code} {amount}
        </p>
      </div>
    </div>
  );
}

function ExchangeField({
  code,
  flag,
  alt,
  caption,
}: {
  code: string;
  flag: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="flex h-[98px] flex-1 items-center justify-between rounded-[18px] border border-grey-20 bg-white px-[28px] 2xl:h-[145px] 2xl:rounded-[20px] 2xl:px-[35px]">
      <div className="flex items-center gap-[12px] 2xl:gap-[14px]">
        <img src={flag} alt={alt} className="size-[40px] rounded-full object-cover 2xl:size-[48px]" />
        <span className="font-nohemi text-[26px] font-semibold leading-none text-grey-90 2xl:text-[31px]">
          {code}
        </span>
        <svg viewBox="0 0 20 20" fill="none" className="size-5 text-grey-100 2xl:size-6" aria-hidden="true">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-[14px] font-medium leading-none text-grey-100 2xl:text-[16px]">{caption}</p>
        <div className="mt-[17px] flex items-center gap-[12px] 2xl:mt-[28px]">
          <span className="font-nohemi text-[32px] font-semibold leading-none tracking-[-0.02em] text-grey-90 2xl:text-[40px]">
            00.00
          </span>
          <span className="h-[25px] w-px bg-grey-80 2xl:h-[30px]" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function CurrencyHero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_58%,#FFF8F8_78%,#FFF4F4_100%)] pb-[51px] pt-[82px] lg:pt-[94px] 2xl:pt-[112px]">
      <div className="mx-auto w-full px-6 md:px-[8vw]">
        <div className="relative min-h-[680px] lg:min-h-[680px] 2xl:min-h-[708px]">
          <div className="relative z-[1] max-w-[920px] 2xl:max-w-[1120px]">
            <h1 className="font-nohemi text-[58px] font-semibold leading-[1.12] tracking-[-0.035em] text-grey-90 md:text-[72px] lg:text-[76px] 2xl:text-[90px]">
              Convert currencies instantly
              <br />
              at competitive rate
            </h1>
            <p className="mt-[31px] max-w-[760px] text-[26px] font-normal leading-[1.22] tracking-[-0.01em] text-grey-80 2xl:mt-[8px] 2xl:text-[29px]">
              PayByLeap gives you seamless access to global currencies.
            </p>

            <div className="mt-[72px] flex flex-col items-start gap-[26px] 2xl:mt-[96px] 2xl:gap-[31px]">
              <a
                href="#real-time-exchange"
                className="inline-flex h-[52px] min-w-[203px] items-center justify-center rounded-[8px] bg-primary px-[28px] text-[20px] font-medium leading-none text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:h-[64px] 2xl:min-w-[249px] 2xl:text-[24px]"
              >
                Convert Now
              </a>
              <a
                href="#real-time-exchange"
                className="inline-flex h-[52px] min-w-[382px] items-center justify-center gap-[14px] rounded-[8px] border border-grey-20 bg-[#FFF8F8] px-[23px] text-[19px] font-medium leading-none text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-sm:min-w-0 max-sm:w-full max-sm:text-[18px] 2xl:h-[64px] 2xl:min-w-[467px] 2xl:gap-[18px] 2xl:text-[24px]"
              >
                <PlayIcon />
                Learn more about currency exchange
              </a>
            </div>
          </div>

          <div
            className="mt-[58px] flex flex-col items-center gap-[44px] lg:absolute lg:top-[13px] lg:mt-0 lg:h-[528px] lg:w-[620px] 2xl:top-[6px] 2xl:h-[560px] 2xl:w-[830px]"
            style={{ right: "-64px" }}
          >
            <div className="w-full max-w-[489px] lg:absolute lg:right-0 lg:top-0 2xl:max-w-[424px]">
              <HeroCurrencyCard
                label="From"
                caption="Amount to swap"
                code="USD"
                amount="00.00"
                flag={figma.flagUs}
                alt="United States flag"
                variant="from"
              />
            </div>

            <div className="text-grey-100 lg:absolute lg:left-[304px] lg:top-[267px] 2xl:left-[342px] 2xl:top-[260px]">
              <SwapIcon />
            </div>

            <div className="w-full max-w-[489px] lg:absolute lg:left-0 lg:top-[376px] 2xl:left-[-12px] 2xl:top-[364px]">
              <HeroCurrencyCard
                label="To"
                caption="Amount to receive"
                code="EUR"
                amount="00.00"
                flag={figma.euFlag}
                alt="European Union flag"
                variant="to"
              />
            </div>
          </div>
        </div>

        <div
          id="real-time-exchange"
          className="relative z-[2] mt-[-8px] rounded-[28px] border border-grey-10 bg-white px-[28px] pb-[84px] pt-[40px] shadow-[0_4px_18px_rgba(154,0,0,0.12)] lg:mt-[-26px] lg:rounded-[30px] lg:px-[56px] lg:pb-[93px] lg:pt-[51px] 2xl:mt-[-56px] 2xl:px-[66px] 2xl:pb-[110px] 2xl:pt-[63px]"
        >
          <h2 className="font-nohemi text-[36px] font-semibold leading-none tracking-[-0.02em] text-grey-90 lg:text-[42px] 2xl:text-[48px]">
            Real-Time Exchange
          </h2>
          <p className="mt-[21px] max-w-[850px] text-[22px] font-normal leading-[1.55] tracking-[-0.01em] text-grey-80 lg:text-[24px] 2xl:mt-[26px] 2xl:max-w-[1050px] 2xl:text-[29px]">
            Paybyleap delivers real-time competitive exchange rates with no hidden fees, ensuring transparent and reliable global currency conversion.
          </p>

          <div className="mt-[51px] flex flex-col items-center gap-[28px] lg:flex-row lg:gap-[49px] 2xl:mt-[64px] 2xl:gap-[65px]">
            <ExchangeField code="USD" flag={figma.flagUs} alt="United States flag" caption="Amount to swap" />
            <button
              type="button"
              aria-label="Swap currencies"
              className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white text-grey-100 shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary 2xl:size-[58px]"
            >
              <SwapIcon className="h-[23px] w-[27px] 2xl:h-[27px] 2xl:w-[32px]" />
            </button>
            <ExchangeField code="EUR" flag={figma.euFlag} alt="European Union flag" caption="Amount to receive" />
          </div>
        </div>
      </div>
    </section>
  );
}
