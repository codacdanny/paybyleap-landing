import { figma } from "../assets/figma";

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

function StackedCardsVisual() {
  const cards = [
    { bg: "bg-[#f6c03a]", texture: figma.cardTexture, cur: "CAD", bottom: 0, z: 1 },
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
    <div className="relative mx-auto mt-8 h-[300px] w-full max-w-[380px] md:h-[320px]">
      {cards.map((c) => (
        <div
          key={c.cur}
          className={`absolute left-1/2 h-[195px] w-[92%] max-w-[369px] -translate-x-1/2 overflow-hidden rounded-[9px] shadow-[0px_9px_4px_rgba(154,0,0,0.05)] ${c.bg}`}
          style={{ bottom: c.bottom, zIndex: c.z }}
        >
          <img
            src={c.texture}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90"
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

export function StablecoinSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/50 bg-[#fff0e3] px-3 py-1.5 text-body-4 text-primary">
            <img src={figma.ionPlanet} alt="" className="h-4 w-4" />
            Smarter finance for you
          </div>
          <h2 className="mt-6 max-w-3xl text-heading-3 text-grey-100 md:text-[48px] md:leading-[56px]">
            Global Payments Powered by Stablecoins
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="flex flex-col overflow-hidden rounded-2xl bg-[#fcf0f1] p-6 md:p-8 lg:p-10">
            <h3 className="text-heading-5 text-grey-100 md:text-[32px] md:leading-10">
              Foreign Accounts
            </h3>
            <p className="mt-2 text-body-4 text-grey-80">
              Open Global accounts for international payments.
            </p>
            <a
              href="#foreign"
              className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-primary"
            >
              Explore
              <img src={figma.exploreArrow} alt="" className="h-6 w-6 rotate-90" />
            </a>
            <ForeignAccountsVisual />
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl bg-[#fdf2d8] p-6 md:p-8 lg:p-10">
            <h3 className="text-heading-5 text-grey-100 md:text-[32px] md:leading-10">
              Stablecoin Virtual/Physical Cards
            </h3>
            <p className="mt-2 text-body-4 text-grey-80">
              Spend crypto globally using virtual cards.
            </p>
            <a
              href="#cards"
              className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-primary"
            >
              Get Card
              <img
                src={figma.arrowCircle}
                alt=""
                className="h-6 w-6 rotate-90"
              />
            </a>
            <StackedCardsVisual />
          </article>
        </div>
      </div>
    </section>
  );
}
