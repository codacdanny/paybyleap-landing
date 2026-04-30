import { Link } from "react-router-dom";
import { figma } from "../assets/figma";
import { ROUTES } from "../routes/paths";
import { LandingInset } from "./LandingInset";

function ForeignAccountsVisual() {
  return (
    <div className="relative mt-6 min-h-[320px] overflow-hidden rounded-2xl bg-[#FCF0F1] md:min-h-[380px] min-[1440px]:mt-[43px] min-[1440px]:h-[512px] min-[1440px]:min-h-0 min-[1440px]:overflow-visible min-[1440px]:rounded-none">
      <div className="absolute -left-[34%] bottom-[-22%] h-[125%] w-[125%] max-w-none min-[1440px]:-left-[132px] min-[1440px]:bottom-[-102px] min-[1440px]:h-[560px] min-[1440px]:w-[560px]">
        <img
          src={figma.foreignAccountsGlobe}
          alt=""
          className="h-full w-full object-cover object-bottom-left"
        />
      </div>
      <div className="relative z-[1] ml-auto mr-0 mt-14 max-w-[320px] rounded-2xl border border-primary/10 bg-white p-4 shadow-soft md:mt-32 md:p-5 min-[1440px]:absolute min-[1440px]:right-[22px] min-[1440px]:top-[56px] min-[1440px]:mt-[0] min-[1440px]:w-[320px] min-[1440px]:max-w-none min-[1440px]:rounded-[16px] min-[1440px]:border-0 min-[1440px]:bg-transparent min-[1440px]:p-0 min-[1440px]:shadow-none">
        <img
          src="/images/foreign-image.png"
          alt=""
          className="h-auto w-full rounded-2xl min-[1440px]:rounded-[16px]"
        />
      </div>
    </div>
  );
}

function StackedCardsVisualMobile() {
  return (
    <div className="relative mx-auto mt-6 w-full max-w-[262px]">
      <img
        src={figma.cardsIllustrationMobile}
        alt=""
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

function StackedCardsVisualDesktop() {
 
  return (
    <div className="relative mx-auto mt-24 h-[300px] w-full max-w-[369px] md:h-[368px]">
      <img src={"/images/cards.png"} alt="" className="w-full h-auto object-cover" />
    </div>
  );
}

function ForeignAccountsVisualMobile() {
  return (
    <div className="relative mt-4 min-h-[200px] overflow-hidden rounded-2xl lg:hidden">
      <img
        src={figma.smallIllustrationMobile}
        alt=""
        className="mx-auto h-auto w-full max-w-[191px] object-contain"
      />
    </div>
  );
}

export function StablecoinSection() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-28">
      <LandingInset>
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-7 items-center gap-1 rounded-[999px] border border-primary/50 bg-[#fff0e3] px-2 py-1 text-[14px] leading-5 text-primary min-[1440px]:h-10 min-[1440px]:gap-2 min-[1440px]:px-3 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              <img
                src="/images/smarterlogo.svg"
                alt=""
                className=" shrink-0 min-[1440px]:size-[18px]"
              />
              Smarter finance for you
            </div>
            <h2 className="mt-6 max-w-[313px] font-nohemi text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:max-w-[595px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
              Global Payments <br /> Powered by Stablecoins
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 min-[1440px]:mt-[56px] min-[1440px]:grid-cols-[minmax(0,545px)_minmax(0,548px)] min-[1440px]:gap-[27px]">
            <article className="flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fcf0f1] p-3 min-[1440px]:max-h-[711px] min-[1440px]:rounded-[16px] min-[1440px]:p-[22px] md:p-6 lg:p-8">
              <h3 className="font-nohemi text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                Foreign Accounts
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Open Global accounts for international payments.
              </p>
              <Link
                to={ROUTES.FOREIGN_ACCOUNTS}
                className="mt-4 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-medium text-primary min-[1440px]:mt-6"
              >
                Explore
                <img
                  src={figma.exploreArrow}
                  alt=""
                  className="size-6"
                />
              </Link>
              <div className="lg:hidden">
                <ForeignAccountsVisualMobile />
              </div>
              <div className="hidden lg:block">
                <ForeignAccountsVisual />
              </div>
            </article>

            <article className="flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-3 min-[1440px]:max-h-[711px] min-[1440px]:rounded-[16px] min-[1440px]:p-[18px] md:p-6 lg:p-8">
              <h3 className="font-nohemi text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                Stablecoins Virtual/Physical Cards
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Spend crypto globally using Virtual Cards
              </p>
              <a
                href="#cards"
                className="mt-4 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-medium text-primary min-[1440px]:mt-6"
              >
                Get Card
                <img
                  src={figma.exploreArrow}
                  alt=""
                  className="size-6"
                />
              </a>
              <div className="lg:hidden">
                <StackedCardsVisualMobile />
              </div>
              <div className="hidden lg:block">
                <StackedCardsVisualDesktop />
              </div>
            </article>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
