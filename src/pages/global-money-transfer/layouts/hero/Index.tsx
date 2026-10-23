import { LandingInset } from "@/components/landing-inset/Index";
import { IconPlayCircle } from "@/components/ui/icons/Index";
import { TransferGlobe } from "./transfer-globe/Index";

// Figma 4643:38105 (1440) and 4884:6043 (390).
export function MoneyTransferHero() {
  return (
    <section className="overflow-hidden bg-white pt-[19px] md:pt-12 xl:pt-[58px]">
      <LandingInset>
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-[332px] text-heading-5 text-grey-90 md:max-w-[680px] md:text-heading-3 xl:max-w-[927px] xl:text-heading-1">
            Send and Receive Money Worldwide Quickly and Securely
          </h1>
          <p className="mt-[25px] text-body-4 text-grey-80 md:mt-[39px] md:text-[24px] md:leading-8">
            Move your money anywhere and anytime.
          </p>
          <div className="mt-[70px] flex flex-col items-center gap-6 md:mt-[39px] md:flex-row md:gap-4">
            <a
              href="#"
              className="flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:w-[201px]"
            >
              Transfer Now
            </a>
            <a
              href="#"
              className="flex h-14 w-[296px] items-center justify-center gap-3 rounded-lg border border-grey-20 bg-[#FFF4F4] text-[16px] font-medium leading-6 text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:h-12 md:w-[275px] md:text-[18px]"
            >
              <IconPlayCircle className="size-6 shrink-0 text-primary" />
              Learn how transfers work
            </a>
          </div>
        </div>
      </LandingInset>

      <TransferGlobe className="mt-[88px] md:mt-[31px]" />
    </section>
  );
}
