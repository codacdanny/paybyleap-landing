import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";

function ForeignAccountsVisual() {
  const rows = [
    "Account Name",
    "IBAN",
    "SWIFT/BIC CODE",
    "Bank Name",
    "Address",
  ];
  return (
    <div className="relative mt-6 min-h-[320px] overflow-hidden rounded-2xl bg-[#fcf0f1] md:min-h-[380px]">
      <div className="absolute -left-[30%] bottom-[-20%] h-[120%] w-[120%] max-w-none">
        <img
          src={figma.foreignAccountsGlobe}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="relative z-[1] ml-auto mr-0 mt-24 max-w-[320px] rounded-2xl border border-primary/10 bg-white p-4 shadow-soft md:mt-32 md:p-5">
        <div className="flex items-center gap-2 border-b border-grey-10 pb-3">
          <img
            src={figma.flagUs3}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
          <img
            src={figma.flagCa3}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <img
              src={figma.euFlag2}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-1 h-1.5 flex-1 rounded-2xl bg-[rgba(31,32,101,0.2)]" />
        </div>
        <ul className="mt-4 space-y-4">
          {rows.map((label) => (
            <li
              key={label}
              className="flex items-center justify-between gap-3 px-2 py-1"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[12px] leading-4 text-grey-100">{label}</p>
                <div className="mt-1 h-2.5 rounded bg-grey-10" />
              </div>
              <img
                src={figma.copyIcon}
                alt=""
                className="h-5 w-5 shrink-0"
              />
            </li>
          ))}
        </ul>
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
  const cards = [
    {
      bg: "bg-[#f6c03a]",
      texture: figma.cardTexture,
      cur: "CAD",
      bottom: 0,
      z: 1,
    },
    { bg: "bg-black", texture: figma.cardTexture, cur: "NGN", bottom: 77, z: 2 },
    {
      bg: "bg-primary",
      texture: figma.cardTextureFront,
      cur: "USD",
      bottom: 154,
      z: 3,
    },
  ];
  return (
    <div className="relative mx-auto mt-8 h-[300px] w-full max-w-[369px] md:h-[368px]">
      {cards.map((c) => (
        <div
          key={c.cur}
          className={`absolute left-1/2 h-[195px] w-full max-w-[369px] -translate-x-1/2 overflow-hidden rounded-[9.134px] shadow-[0px_9px_4px_rgba(154,0,0,0.05)] ${c.bg}`}
          style={{ bottom: c.bottom, zIndex: c.z }}
        >
          <img
            src={c.texture}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-[2] flex h-full flex-col justify-between p-4 text-[13px] text-white">
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono tracking-wide">**** **** **** 7564</span>
              <span className="text-[14px] font-bold text-white/50">{c.cur}</span>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-[13px]">JANET KHLOE</p>
              <div className="flex items-center gap-2">
                <img
                  src={figma.chipDetail}
                  alt=""
                  className="h-7 w-5 object-cover"
                />
                <img src={figma.visa} alt="" className="h-5 w-9" />
              </div>
            </div>
          </div>
        </div>
      ))}
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
            <h2 className="mt-6 max-w-[313px] text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:max-w-[595px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
              Global Payments <br /> Powered by Stablecoins
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 min-[1440px]:mt-[56px] min-[1440px]:grid-cols-[minmax(0,545px)_minmax(0,548px)] min-[1440px]:gap-[27px]">
            <article className="flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fcf0f1] p-3 min-[1440px]:min-h-[711px] min-[1440px]:rounded-[16px] min-[1440px]:p-[22px] md:p-6 lg:p-8">
              <h3 className="text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
                Foreign Accounts
              </h3>
              <p className="mt-2 text-[14px] leading-[22px] text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
                Open Global accounts for international payments.
              </p>
              <a
                href="#foreign"
                className="mt-4 inline-flex h-10 items-center gap-2 rounded-2xl px-2 text-[18px] font-medium text-primary min-[1440px]:mt-6"
              >
                Explore
                <img
                  src={figma.exploreArrow}
                  alt=""
                  className="size-6"
                />
              </a>
              <div className="lg:hidden">
                <ForeignAccountsVisualMobile />
              </div>
              <div className="hidden lg:block">
                <ForeignAccountsVisual />
              </div>
            </article>

            <article className="flex min-h-[464px] flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-3 min-[1440px]:min-h-[711px] min-[1440px]:rounded-[16px] min-[1440px]:p-[18px] md:p-6 lg:p-8">
              <h3 className="text-[20px] font-semibold leading-7 text-grey-100 min-[1440px]:text-[32px] min-[1440px]:leading-10">
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
                  src={figma.arrowCircle}
                  alt=""
                  className="size-6 rotate-90"
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
