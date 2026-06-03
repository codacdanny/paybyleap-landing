import { LandingInset } from "@/components/landing-inset/Index";
import { figma } from "@/data/images/Index";



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
    <div className="flex  flex-1 w-[453px] h-[96px] items-center justify-between rounded-[24px] border border-grey-20 bg-less-white p-[30px]">
      <div className="flex items-center gap-[12px]">
        <img src={flag} alt={alt} className="size-[32px] rounded-full object-cover" />
        <span className="font-spartan text-[18px] font-medium leading-none text-grey-90 ">
          {code}
        </span>
        <svg viewBox="0 0 20 20" fill="none" className="size-5 text-grey-100" aria-hidden="true">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col items-end ">
        <p className="text-[12px] font-regular leading-none text-grey-100">{caption}</p>
        <div className="mt-[17px] flex items-center gap-[12px]">
          <span className="font-spartan text-[24px] font-semibold leading-none tracking-[-0.02em] text-grey-90">
            00.00
          </span>
          <span className="h-[20px] w-px bg-grey-80" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function CurrencyConverterSection() {
  return (
    <div id="real-time-exchange" className="relative z-20 -mt-[176px]">
      <LandingInset>
        <div className="rounded-[24px] w-[1120px] border border-grey-10 bg-white p-[48px] pb-[76px]  shadow-[0_4px_18px_rgba(154,0,0,0.12)]">
          <h2 className="font-spartan text-[32px] font-semibold leading-none t text-grey-90">
            Real-Time Exchange
          </h2>
          <p className="mt-[21px] max-w-[850px] text-[22px] font-normal leading-[1.55] tracking-[-0.01em] text-grey-80 lg:text-[24px] 2xl:mt-[26px] 2xl:max-w-[1050px] 2xl:text-[29px]">
            Paybyleap delivers real-time competitive exchange rates with no hidden fees, ensuring transparent and reliable global currency conversion.
          </p>

          <div className="mt-[35px] flex flex-col items-center gap-[28px] lg:flex-row">
            <ExchangeField code="USD" flag={figma.flagUs} alt="United States flag" caption="Amount to swap" />
            <button
              type="button"
              aria-label="Swap currencies"
              className="flex size-[37px] shrink-0 items-center justify-center rounded-full bg-white text-grey-100 shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <img src={figma.exhangeIcon} alt="" className="h-[15px] w-[14px]" aria-hidden />
            </button>
            <ExchangeField code="EUR" flag={figma.euFlag} alt="European Union flag" caption="Amount to receive" />
          </div>
        </div>
      </LandingInset>
    </div>
  );
}
