import { figma } from "../data/images/Index";
import { LandingInset } from "./LandingInset";

export function MoneyTransferSection() {
  return (
    <section className="bg-off-white">
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
                  <img
                    src={figma.transferArrow}
                    alt=""
                    className="size-6"
                  />
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
                <img
                  src={figma.exploreArrow}
                  alt=""
                  className="size-6"
                />
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
                <img
                  src={figma.exploreArrow}
                  alt=""
                  className="size-6"
                />
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
