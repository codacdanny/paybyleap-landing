import { figma } from "../assets/figma";

export function MoneyTransferSection() {
  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] text-white">
          <div className="relative grid items-end gap-6 lg:grid-cols-[1fr_minmax(280px,409px)] lg:gap-10">
            <div className="z-[2] max-w-lg px-8 pb-10 pt-10 md:px-12 md:pb-12 md:pt-14 lg:px-16">
              <h2 className="text-heading-4 text-white md:text-[32px] md:leading-10">
                Global Money Transfer
              </h2>
              <p className="mt-3 text-body-3 text-white/95">
                Send and receive money worldwide.
              </p>
              <a
                href="#transfer"
                className="mt-8 inline-flex items-center gap-2 text-[18px] font-medium text-secondary"
              >
                Transfer now
                <img
                  src={figma.transferArrow}
                  alt=""
                  className="h-6 w-6 rotate-90"
                />
              </a>
            </div>

            <div className="relative min-h-[280px] lg:min-h-[329px]">
              <img
                src={figma.flagCa2}
                alt=""
                className="absolute left-[8%] top-[28%] z-[3] h-6 w-6 object-contain"
              />
              <img
                src={figma.flagNg2}
                alt=""
                className="absolute right-[18%] top-[8%] z-[3] h-6 w-6 object-contain"
              />
              <img
                src={figma.flagUs2}
                alt=""
                className="absolute bottom-[32%] left-[6%] z-[3] h-6 w-6 object-contain"
              />
              <div className="absolute bottom-[28%] right-[10%] z-[3] h-6 w-6 overflow-hidden rounded-full blur-[0.5px]">
                <img
                  src={figma.euFlag}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <img
                src={figma.flagUk2}
                alt=""
                className="absolute right-[8%] top-[12%] z-[3] h-6 w-6 object-contain"
              />

              <div className="relative ml-auto h-[352px] w-full max-w-[409px] overflow-hidden lg:h-full lg:min-h-[352px]">
                <img
                  src={figma.femalePhoneMockup}
                  alt="Person using PayByLeap on a phone"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="flex flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-8 md:p-10">
            <h3 className="text-heading-5 text-grey-100">Send/Receive Crypto</h3>
            <p className="mt-2 text-body-4 text-grey-80">
              Buy, sell, or transfer crypto easily
            </p>
            <a
              href="#crypto"
              className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-primary"
            >
              Explore Crypto
              <img
                src={figma.arrowCircle}
                alt=""
                className="h-6 w-6 rotate-90"
              />
            </a>
            <div className="relative mt-8 min-h-[200px] w-full">
              <img
                src={figma.cryptoGraphic}
                alt=""
                className="h-auto w-full max-w-[500px] object-contain"
              />
            </div>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-2xl bg-[#fff4f4] p-8 md:p-10">
            <h3 className="text-heading-5 text-grey-100">
              International Fees Payments
            </h3>
            <p className="mt-2 text-body-4 text-grey-80">
              Pay tuition, WES, and global fees seamlessly.
            </p>
            <a
              href="#fees"
              className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-primary"
            >
              Pay Fees
              <img
                src={figma.arrowCircle}
                alt=""
                className="h-6 w-6 rotate-90"
              />
            </a>
            <div className="relative mt-8 min-h-[240px]">
              <div className="pointer-events-none absolute -right-8 top-0 opacity-90">
                <img
                  src={figma.feesPolygon}
                  alt=""
                  className="h-48 w-48 rotate-[21deg] object-contain"
                />
              </div>
              <div className="relative z-[1] rounded-2xl border-[3px] border-grey-100 bg-white p-5 shadow-[0px_4px_30px_rgba(0,0,0,0.07)]">
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
                    className="ml-auto h-10 w-10 rounded-full object-cover"
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
    </section>
  );
}
