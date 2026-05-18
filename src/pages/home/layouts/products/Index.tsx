import { Link } from "react-router-dom";
import { figma } from "@/data/images/Index";
import { ROUTES } from "@/routes/paths";
import { LandingInset } from "@/components/landing-inset/Index";

function ForeignAccountsVisual() {
  return (
    <div className="relative mt-6 min-h-[320px] overflow-hidden rounded-2xl bg-transparent md:min-h-[380px] min-[1440px]:mt-[43px] min-[1440px]:h-[512px] min-[1440px]:min-h-0 min-[1440px]:overflow-visible min-[1440px]:rounded-none">
      <div className="relative z-[1] ml-auto mr-0 mt-14 max-w-[320px] rounded-2xl border border-primary/10 bg-white p-4 shadow-soft md:mt-32 md:p-5 min-[1440px]:absolute min-[1440px]:right-[22px] min-[1440px]:top-[56px] min-[1440px]:mt-[0] min-[1440px]:w-[320px] min-[1440px]:max-w-none min-[1440px]:rounded-[16px] min-[1440px]:border-0 min-[1440px]:bg-transparent min-[1440px]:p-0 min-[1440px]:shadow-none">
        <img
          src={figma.foreignImage}
          alt=""
          className="h-auto w-full rounded-2xl min-[1440px]:rounded-[16px]"
        />
      </div>
    </div>
  );
}

function StackedCardsVisualDesktop() {
  return (
    <div className="relative mx-auto mt-24 h-[300px] w-full max-w-[369px] md:h-[368px]">
      <img
        src={figma.cardsImage}
        alt=""
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export function MoneyTransferSection() {
  return (
    <section className="">
      <LandingInset>
        <div className="mx-auto max-w-[1120px]">
          <div className="relative max-h-[464px] overflow-hidden rounded-2xl bg-[#1a1a1a] text-white min-[1440px]:h-[329px] min-[1440px]:rounded-[16px]">
            <div className="relative grid items-start gap-4 lg:grid-cols-[1fr_minmax(280px,409px)] lg:gap-0 min-[1440px]:min-h-[329px]">
              <div className="z-[2] max-w-lg px-4 pb-6 pt-8 md:px-8 md:pb-10 md:pt-10 lg:px-12 lg:pb-12 lg:pt-14 min-[1440px]:max-w-[530px] min-[1440px]:px-[31px] min-[1440px]:pb-0 min-[1440px]:pt-[70px]">
                <h2 className="font-nohemi text-[20px] font-semibold leading-7 text-white min-[1440px]:text-[32px] min-[1440px]:leading-10">
                  Global Money Transfer
                </h2>
                <p className="mt-3 text-[14px] leading-[22px] text-white/95 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                  Send and receive money worldwide.
                </p>
                <a
                  href="#transfer"
                  className="mt-8 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-medium text-secondary min-[1440px]:mt-[34px]"
                >
                  Transfer Now
                  <img src={figma.transferArrow} alt="" className="size-6" />
                </a>
              </div>

              <div className="relative min-h-[280px] lg:min-h-[329px] min-[1440px]:min-h-[329px]">
                <div className="relative mx-auto h-[232px] w-full max-w-[270px] overflow-hidden rounded-t-lg lg:mx-0 lg:ml-auto lg:h-[352px] lg:max-w-[409px] lg:rounded-none lg:absolute lg:bottom-0 lg:right-0 min-[1440px]:h-[329px] min-[1440px]:w-[409px] min-[1440px]:max-w-none">
                  <img
                    src={figma.femalePhoneMockup}
                    alt="Person using PayByLeap on a phone"
                    className="h-full w-full object-cover object-[center_12%]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent to-[30%] lg:hidden"
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            {/* Floating country flags — positioned relative to the whole card */}
            <img
              src={figma.flagNg2}
              alt=""
              className="absolute z-[4] hidden size-7 object-contain min-[1440px]:block"
              style={{ top: 42, right: 386 }}
            />
            <img
              src={figma.flagUk2}
              alt=""
              className="absolute z-[4] hidden size-7 object-contain min-[1440px]:block"
              style={{ top: 42, right: 34 }}
            />
            <img
              src={figma.flagCa2}
              alt=""
              className="absolute z-[4] hidden size-7 object-contain min-[1440px]:block"
              style={{ top: 144, right: 460 }}
            />
            <img
              src={figma.flagUs2}
              alt=""
              className="absolute z-[4] hidden size-7 object-contain min-[1440px]:block"
              style={{ bottom: 48, right: 420 }}
            />
            <div
              className="absolute z-[4] hidden size-7 overflow-hidden rounded-full min-[1440px]:block"
              style={{ bottom: 54, right: 36 }}
            >
              <img
                src={figma.euFlag}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-6 min-[1440px]:mt-[27px] min-[1440px]:grid-cols-[minmax(0,545px)_minmax(0,548px)] min-[1440px]:gap-[27px]">
            {/* ── Send/Receive Crypto ── */}
            <article className="flex max-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-4 md:p-8 min-[1440px]:min-h-[587px] min-[1440px]:rounded-[16px] min-[1440px]:p-[22px]">
              <h3 className="font-nohemi text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                Send/Receive Crypto
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:mt-3 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Buy, sell, or transfer crypto easily
              </p>
              <a
                href="#crypto"
                className="mt-4 inline-flex h-10 items-center gap-2 px-2 text-[18px] font-medium text-primary min-[1440px]:mt-6"
              >
                Explore Crypto
                <img src={figma.exploreArrow} alt="" className="size-6" />
              </a>
              <div className="relative mt-6 flex w-full flex-1 items-end justify-center overflow-hidden min-[1440px]:mt-8 min-[1440px]:-mx-[22px] min-[1440px]:mb-0 min-[1440px]:w-[calc(100%+44px)]">
                <img
                  src={figma.cryptoGraphic}
                  alt=""
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>

            {/* ── International Fees Payments ── */}
            <article className="relative flex max-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fff4f4] p-4 md:p-8 min-[1440px]:min-h-[587px] min-[1440px]:rounded-[16px] min-[1440px]:p-[22px]">
              <h3 className="font-nohemi text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                International Fees Payments
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:mt-3 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Pay tuition, WES, and global fees seamlessly.
              </p>
              <a
                href="#fees"
                className="mt-4 inline-flex h-10 items-center gap-2 px-2 text-[18px] font-medium text-primary min-[1440px]:mt-6"
              >
                Pay Fees
                <img src={figma.exploreArrow} alt="" className="size-6" />
              </a>
              <div className="relative mt-6 flex-1 min-[1440px]:mt-8">
                {/* Desktop: polygon bg + card image as one unit */}
                <div className="relative mx-auto max-w-[504px]">
                  <img
                    src={figma.feesPolygon}
                    alt=""
                    className="pointer-events-none absolute -right-[60px] top-[10px] z-0  rotate-[300deg] object-contain"
                  />
                  <div className="relative z-[1] overflow-hidden rounded-[16px] ">
                    <img
                      src={figma.saintLouisCrest}
                      alt=""
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-28">
      <LandingInset>
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-7 items-center gap-1 rounded-[999px] border border-primary/50 bg-primary-light px-2 py-1 text-[14px] leading-5 text-primary min-[1440px]:h-10 min-[1440px]:gap-2 min-[1440px]:px-3 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              <img
                src={figma.smarterLogo}
                alt=""
                className="shrink-0 min-[1440px]:size-[18px]"
              />
              Smarter finance for you
            </div>
            <h2 className="mt-6 max-w-[313px] font-nohemi text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:max-w-[595px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
              Global Payments <br /> Powered by Stablecoins
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 min-[1440px]:mt-[56px] min-[1440px]:grid-cols-[545px_545px] min-[1440px]:gap-[27px]">
            <article className="relative flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fcf0f1] p-3 min-[1440px]:h-[711px] min-[1440px]:w-[545px] min-[1440px]:max-w-[545px] min-[1440px]:rounded-[16px] min-[1440px]:p-[22px] md:p-6 lg:p-8">
              <img
                src={figma.bgGlobe}
                alt=""
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 z-0 h-[300px] w-auto max-w-none -translate-x-[40%] translate-y-[12%] object-contain object-left-bottom sm:h-[460px] md:h-[500px] min-[1440px]:h-[552px] min-[1440px]:max-h-[576px] min-[1440px]:-translate-x-[14%] min-[1440px]:translate-y-[16%]"
              />
              <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
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
                  <img src={figma.exploreArrow} alt="" className="size-6" />
                </Link>
                <ForeignAccountsVisual />
              </div>
            </article>

            <article className="flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-3 min-[1440px]:h-[711px] min-[1440px]:w-[545px] min-[1440px]:max-w-[545px] min-[1440px]:rounded-[16px] min-[1440px]:p-[18px] md:p-6 lg:p-8">
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
                <img src={figma.exploreArrow} alt="" className="size-6" />
              </a>
              <StackedCardsVisualDesktop />
            </article>
          </div>
        </div>
      </LandingInset>
      <MoneyTransferSection />
    </section>
  );
}
