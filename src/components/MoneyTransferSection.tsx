import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";

export function MoneyTransferSection() {
  return (
    <section className="bg-off-white py-10 md:py-16 lg:py-24">
      <LandingInset>
        <div className="mx-auto max-w-[1120px]">
          <div className="relative min-h-[464px] overflow-hidden rounded-2xl bg-[#1a1a1a] text-white min-[1440px]:h-[329px] min-[1440px]:rounded-[16px]">
            <div className="relative grid items-end gap-4 lg:grid-cols-[1fr_minmax(280px,409px)] lg:gap-0 min-[1440px]:min-h-[329px]">
              <div className="z-[2] max-w-lg px-4 pb-6 pt-8 md:px-8 md:pb-10 md:pt-10 lg:px-12 lg:pb-12 lg:pt-14 min-[1440px]:px-[31px] min-[1440px]:pb-0 min-[1440px]:pt-[70px]">
                <h2 className="text-[20px] font-semibold leading-7 text-white min-[1440px]:text-[32px] min-[1440px]:leading-10">
                  Global Money Transfer
                </h2>
                <p className="mt-3 text-[14px] leading-[22px] text-white/95 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                  Send and receive money worldwide
                </p>
                <a
                  href="#transfer"
                  className="mt-8 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-medium text-secondary"
                >
                  Transfer now
                  <img
                    src={figma.transferArrow}
                    alt=""
                    className="size-6 rotate-90"
                  />
                </a>
              </div>

              <div className="relative min-h-[280px] lg:min-h-[329px] min-[1440px]:min-h-0">
                <img
                  src={figma.flagCa2}
                  alt=""
                  className="absolute left-[8%] top-[28%] z-[3] size-6 object-contain"
                />
                <img
                  src={figma.flagNg2}
                  alt=""
                  className="absolute right-[18%] top-[8%] z-[3] size-6 object-contain"
                />
                <img
                  src={figma.flagUs2}
                  alt=""
                  className="absolute bottom-[32%] left-[6%] z-[3] size-6 object-contain"
                />
                <div className="absolute bottom-[28%] right-[10%] z-[3] size-6 overflow-hidden rounded-full blur-[2px]">
                  <img
                    src={figma.euFlag}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <img
                  src={figma.flagUk2}
                  alt=""
                  className="absolute right-[8%] top-[12%] z-[3] size-6 object-contain"
                />

                <div className="relative mx-auto h-[232px] w-full max-w-[270px] overflow-hidden rounded-t-lg lg:mx-0 lg:ml-auto lg:h-[352px] lg:max-w-[409px] lg:rounded-none lg:absolute lg:bottom-0 lg:right-0">
                  <img
                    src={figma.femalePhoneMockup}
                    alt="Person using PayByLeap on a phone"
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent to-[30%] lg:hidden"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 min-[1440px]:mt-[27px] min-[1440px]:grid-cols-2 min-[1440px]:gap-[27px]">
            <article className="flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-4 md:p-8 lg:p-10 min-[1440px]:min-h-[587px] min-[1440px]:rounded-[16px]">
              <h3 className="text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                Send/Receive Crypto
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Buy, sell, or transfer crypto easily
              </p>
              <a
                href="#crypto"
                className="mt-6 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-semibold text-primary"
              >
                Explore Crypto
                <img
                  src={figma.arrowCircle}
                  alt=""
                  className="size-6 rotate-90"
                />
              </a>
              <div className="relative mt-8 flex min-h-[200px] w-full flex-1 items-end justify-center">
                <img
                  src={figma.cryptoGraphic}
                  alt=""
                  className="h-auto w-full max-w-[500px] object-contain"
                />
              </div>
            </article>

            <article className="relative flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fff4f4] p-4 md:p-8 lg:p-10 min-[1440px]:min-h-[587px] min-[1440px]:rounded-[16px]">
              <h3 className="text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                International Fees Payment
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Pay tuition, WES and global fees seamlessly
              </p>
              <a
                href="#fees"
                className="mt-6 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-semibold text-primary"
              >
                Pay Fees
                <img
                  src={figma.arrowCircle}
                  alt=""
                  className="size-6 rotate-90"
                />
              </a>
              <div className="relative mt-6 min-h-[200px] flex-1 min-[1440px]:mt-8 min-[1440px]:min-h-[240px]">
                <div className="relative z-[1] lg:hidden">
                  <img
                    src={figma.feeIllustrationMobile}
                    alt=""
                    className="h-auto w-full max-w-[335px] object-contain"
                  />
                </div>
                <div className="pointer-events-none absolute -right-8 top-0 hidden opacity-90 lg:block">
                  <img
                    src={figma.feesPolygon}
                    alt=""
                    className="h-48 w-48 rotate-[21deg] object-contain"
                  />
                </div>
                <div className="relative z-[1] hidden rounded-2xl border-[3px] border-grey-100 bg-white p-5 shadow-[0px_4px_30px_rgba(0,0,0,0.07)] lg:block">
                  <div className="flex items-start gap-3 border-b border-grey-10 pb-4">
                    <div className="relative h-10 w-7 shrink-0 overflow-hidden">
                      <img
                        src={figma.saintLouisCrest}
                        alt=""
                        className="h-full w-full object-contain object-left-top"
                      />
                    </div>
                    <p className="text-body-3 text-grey-100">
                      Saint Louis University, Missouri
                    </p>
                    <img
                      src={figma.flagUsFees}
                      alt=""
                      className="ml-auto size-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-4">
                    {["Student email", "Student legal name", "Portal link"].map(
                      (label) => (
                        <div key={label}>
                          <p className="text-[12px] text-grey-100">{label}</p>
                          <div className="mt-1 h-2.5 rounded bg-grey-10" />
                        </div>
                      )
                    )}
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
