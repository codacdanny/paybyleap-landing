import { Fragment } from "react";
import { figma } from "../../data/images/Index";
import { LandingInset } from "../../components/landing-inset/Index";
import { REVEAL_EASE, useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { FeaturePill } from "@/components/ui/feature-pill/Index";
import { AccountDetailsCard } from "@/components/account-details-card/Index";
import { TransactionSecuritySection } from "@/components/transaction-security-section/Index";
import { TestimonialsSection } from "@/components/testimonials-section/Index";
import { HeroGlobe } from "@/components/hero-globe/Index";


const featurePills = [
  { label: "100% DIGITAL SIGNUP", bold: "100%", rest: " DIGITAL SIGNUP" },
  { label: "ZERO MAINTANCE CHARGES" },
  { label: "NO ACCOUNT OPENING FEES" },
  { label: "MULTI-CURRENCY IBAN" },
  { label: "WITHDRAWAL TO LOCAL ACCOUNTS" },
  { label: "ACCOUNT STATEMENT & PROOF OF ACCOUNT", newLine: true },
  { label: "GNERATE PAYMENT INVOICE" },
  { label: "LOW TRANSACTION FEE" },
  { label: "INSTANT TRANSACTION NOTIFICATIONS" },
  { label: "ANTI-FRAUD PROTECTION", newLine: true },
];

// Mobile has its own design (Figma 4787:12890, 390px frame): nine pills with
// alternating alignment and widths fixed per pill. Widths are percentages of
// the 340px content column. Note it drops the "ACCOUNT STATEMENT & PROOF OF
// ACCOUNT" pill the desktop frame carries, and rewords several others.
const mobilePills = [
  { label: "100% DIGITAL SIGNUP", bold: "100%", rest: " DIGITAL SIGNUP", width: "75.3%" },
  { label: "ZERO MAINTANCES CHARGES", width: "80.6%" },
  { label: "NO ACCOUNT OPENING FEES", width: "77.6%" },
  { label: "MULTI-CURRENCY IBAN", width: "75.3%" },
  { label: "WITHDRAWAL TO LOCAL ACCOUNT", width: "90.3%" },
  { label: "GENERATE PAYMENT INVOICE", width: "86.2%" },
  { label: "LOW TRANSACTION FEES", width: "90.3%" },
  { label: "INSTANT TRANSACTION NOTIFICATIONS", width: "100%" },
  { label: "ANTI-FRAUD PROTECTION", width: "77.6%" },
];

const pillBorder = {
  background:
    "linear-gradient(#FBF7FB, #FBF7FB) padding-box, linear-gradient(to right, #9A0000, #F6C03A) border-box",
  border: "1.5px solid transparent",
};

function MobilePill({ label, bold, rest }: { label: string; bold?: string; rest?: string }) {
  return (
    <div
      className="flex h-[45px] items-center justify-center gap-2 rounded-3xl"
      style={pillBorder}
    >
      <img loading="lazy" decoding="async" src={figma.star} alt="" className="size-5 shrink-0" />
      <span className="whitespace-nowrap text-[16px] font-medium leading-8 text-grey-90">
        {bold ? (
          <>
            <span className="font-bold text-primary">{bold}</span>
            {rest}
          </>
        ) : (
          label
        )}
      </span>
    </div>
  );
}


function FAHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4F4] min-[1440px]:h-[764px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-8 min-[1440px]:pl-[160px] relative z-30 pb-0 pt-12 min-[1440px]:pt-[105px]">

        {/* Two-column: left = text, right = images */}
        <div className="flex flex-col items-stretch lg:flex-row lg:gap-8 min-[1440px]:h-[659px] min-[1440px]:gap-0">

          {/* ── Left column: text content ── */}
          <div className="w-full shrink-0 pt-4 lg:w-1/2 min-[1440px]:w-auto min-[1440px]:max-w-[680px]">
            <div className="inline-flex items-center gap-0.5 rounded-2xl border border-secondary bg-[#FBF2D6] px-2 py-1">
              <img loading="lazy" decoding="async" src={figma.ionPlanet} alt="" className="size-4" />
              <span className="text-center text-[16px] leading-6 text-grey-80">
                GLOBAL ACCOUNTS
              </span>
            </div>

            <h1 className="mt-12 font-spartan text-[40px] font-semibold leading-[48px] text-grey-90 md:text-[52px] md:leading-[60px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              The next-gen account for professional
            </h1>

            <p className="mt-4 text-[18px] font-spartan leading-7 text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
              Open global accounts to receive international payments instantly. No
              minimum deposits required
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Get Yours Now
              </a>
              <a
                href="#"
                className="inline-flex min-h-[48px] w-fit max-w-full items-center gap-3 rounded-lg border border-grey-20 bg-white/60 px-4 py-2.5 text-[16px] font-medium leading-6 text-grey-90 lg:text-[18px]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg viewBox="0 0 10 12" fill="none" className="ml-0.5 size-3">
                    <path d="M1 1l8 5-8 5V1z" fill="white" />
                  </svg>
                </span>
                Learn more about how foreign account work
              </a>
            </div>
          </div>

          {/* ── Right column: images — stacks under the text below lg ── */}
          <div className="relative mt-10 h-[300px] w-full sm:h-[400px] md:h-[440px] lg:mt-0 lg:h-[500px] lg:flex-1 xl:h-[580px] min-[1440px]:h-auto">

            {/* Globe arc — centered low so only the upper arc is visible */}
            <HeroGlobe className="absolute right-[-160px] top-[40px] size-[420px] sm:right-[-180px] sm:size-[540px] md:size-[600px] lg:right-[-200px] lg:top-[60px] lg:size-[620px] xl:top-[50px] xl:size-[720px] min-[1440px]:size-[800px]" />

            {/* Account card — left edge of right column, aligned with heading */}
            <div className="absolute left-0 top-0 z-20 w-[300px] origin-top-left scale-[0.6] sm:scale-[0.78] md:scale-[0.85] lg:top-[10px] lg:scale-[0.72] xl:scale-[0.85] min-[1440px]:scale-100">
              <AccountDetailsCard />
            </div>

            {/* Man with hat — bottom-right, bleeds off edge */}
            <div className="absolute bottom-0 right-[-40px] z-10 sm:right-[-56px] lg:right-[-80px] min-[1440px]:right-[-120px]" aria-hidden>
              <img loading="lazy" decoding="async"
                src={figma.freeAccountHero}
                alt=""
                className="h-[280px] w-auto object-contain object-bottom sm:h-[380px] md:h-[430px] lg:h-[470px] xl:h-[550px] min-[1440px]:h-[650px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GET PAID SEAMLESSLY                                                */
/* ------------------------------------------------------------------ */

// Entrance transforms live on the <img>, idle motion on its wrapper, so the
// two never overwrite each other's transform.
const getPaidCss = `
  /* Hidden only once JS has armed the reveal, so the artwork still shows
     if the observer never runs */
  .gp-armed .gp-rise, .gp-armed .gp-pop { opacity: 0; }

  @keyframes gpRise {
    from { opacity: 0; transform: translateY(26px) scale(.96); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes gpPop {
    0%   { opacity: 0; transform: translateY(10px) scale(.92); }
    60%  { opacity: 1; transform: translateY(-2px) scale(1.02); }
    100% { opacity: 1; transform: none; }
  }
  @keyframes gpFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes gpDriftA {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50%      { transform: translateY(-10px) rotate(2.2deg); }
  }
  @keyframes gpDriftB {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50%      { transform: translateY(-6px) rotate(-2.8deg); }
  }

  .gp-armed.gp-in .gp-rise { animation: gpRise .7s ${REVEAL_EASE} var(--d, 0s) both; }
  .gp-armed.gp-in .gp-pop  { animation: gpPop .55s ${REVEAL_EASE} calc(var(--d, 0s) + .5s) both; }

  .gp-in .gp-float   { animation: gpFloat 7s ease-in-out calc(var(--d, 0s) + 1s) infinite; }
  .gp-in .gp-drift-a { animation: gpDriftA 13s ease-in-out calc(var(--d, 0s) + 1s) infinite; }
  .gp-in .gp-drift-b { animation: gpDriftB 9s ease-in-out calc(var(--d, 0s) + 1s) infinite; }

  @media (prefers-reduced-motion: reduce) {
    .gp-armed .gp-rise, .gp-armed .gp-pop { opacity: 1; }
    .gp-armed.gp-in .gp-rise, .gp-armed.gp-in .gp-pop,
    .gp-in .gp-float, .gp-in .gp-drift-a, .gp-in .gp-drift-b {
      animation: none !important;
    }
  }
`;

function GetPaidSection() {
  const { ref: gridRef, armed, revealed } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-less-white py-16 min-[1440px]:py-[113px]">
      <style>{getPaidCss}</style>
      <LandingInset>
        <h2 className="mx-auto max-w-[480px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          Get Paid Seamlessly, World wide
        </h2>

        <div
          ref={gridRef}
          className={`mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 min-[1440px]:mt-[70px] min-[1440px]:gap-[16px]${armed ? " gp-armed" : ""}${revealed ? " gp-in" : ""}`}
        >
          {/* Card 1: Quick Transfers */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl bg-primary-dark p-5 text-white min-[1440px]:h-[464px] min-[1440px]:p-6">
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Quick Transfers
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-white/90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Send and receive money in seconds with a seamless, secure payment
              experience designed to keep up with your pace
            </p>
            {/* Panel and its success toast are one SVG, split by clip-path at
                the panel's bottom edge (176 of 222) so the toast can land after
                the panel has settled */}
            <div className="absolute top-[44%] left-1/2 z-10 w-[80%] -translate-x-1/2" aria-hidden>
              <div className="gp-float" style={{ ["--d" as string]: "0s" }}>
                <img loading="lazy" decoding="async"
                  src={figma.quickTransferImage}
                  alt=""
                  className="gp-rise w-full object-contain [clip-path:inset(0_0_20.72%_0)]"
                />
                <img loading="lazy" decoding="async"
                  src={figma.quickTransferImage}
                  alt=""
                  className="gp-pop absolute inset-0 w-full object-contain [clip-path:inset(79.28%_0_0_0)]"
                />
              </div>
            </div>
          </article>

          {/* Card 2: Smooth Process */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl border border-grey-10 bg-[#FBF2D6] p-5 min-[1440px]:h-[464px] min-[1440px]:p-5">
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 text-grey-90 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Smooth, Stress-Free Process
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-grey-90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Enjoy a streamlined experience with no complications, delays, or
              unnecessary steps.
            </p>

            {/* Solid cream star — behind */}
            <div className="absolute bottom-[-30px] left-1/2 z-0 w-[90%] -translate-x-1/2" aria-hidden>
              <div className="gp-drift-a" style={{ ["--d" as string]: ".12s" }}>
                <img loading="lazy" decoding="async"
                  src={figma.solidStar}
                  alt=""
                  className="gp-rise w-full object-contain"
                />
              </div>
            </div>
            {/* Dotted red star — in front, drifting against the solid one */}
            <div className="absolute bottom-[-20px] left-1/2 z-10 w-[95%] -translate-x-[48%]" aria-hidden>
              <div className="gp-drift-b" style={{ ["--d" as string]: ".22s" }}>
                <img loading="lazy" decoding="async"
                  src={figma.dottedStar}
                  alt=""
                  className="gp-rise w-full object-contain"
                />
              </div>
            </div>
          </article>

          {/* Card 3: Credit */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl bg-grey-100 p-5 text-white min-[1440px]:h-[464px] min-[1440px]:p-5">
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Credit from your Platform
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-white/90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Send and receive money in seconds with a seamless, secure payment
              experience designed to keep up with your pace
            </p>
            {/* Figma 'Credit' frame is 364x464: the 'Vector 284' backplate sits
                at 26,214 (293x228) under the glass panel at 30,243 (305x169).
                The pair is wrapped in one aspect box so they stay locked
                together as the card resizes. */}
            <div
              className="absolute left-[10.1%] top-[44%] z-10 aspect-[310.5/231] w-[78%] min-[1440px]:left-[6.73%] min-[1440px]:top-[45.8%] min-[1440px]:w-[85.3%]"
              aria-hidden
            >
              <div className="gp-float size-full" style={{ ["--d" as string]: ".24s" }}>
                <img loading="lazy" decoding="async"
                  src={figma.creditCardBackplate}
                  alt=""
                  className="gp-rise absolute left-0 top-0 w-[95.33%]"
                />
                <img loading="lazy" decoding="async"
                  src={figma.creditCardImage}
                  alt=""
                  className="gp-rise absolute left-[1.77%] top-[13.2%] w-[98.23%]"
                  style={{ ["--d" as string]: ".34s" }}
                />
              </div>
            </div>
          </article>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  BENEFITS PILLS                                                     */
/* ------------------------------------------------------------------ */

// Mobile pills alternate left/right, so they fly in from the side they sit on.
const benefitsCss = `
  .bp-armed .bp-rise, .bp-armed .bp-left, .bp-armed .bp-right { opacity: 0; }

  @keyframes bpRise {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes bpLeft {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes bpRight {
    from { opacity: 0; transform: translateX(32px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes bpFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }
  @keyframes bpDrift {
    0%, 100% { transform: scale(1) translate(0, 0); }
    50%      { transform: scale(1.05) translate(1.2%, -1%); }
  }

  .bp-armed.bp-in .bp-rise  { animation: bpRise .65s ${REVEAL_EASE} var(--d, 0s) both; }
  .bp-armed.bp-in .bp-left  { animation: bpLeft .6s ${REVEAL_EASE} var(--d, 0s) both; }
  .bp-armed.bp-in .bp-right { animation: bpRight .6s ${REVEAL_EASE} var(--d, 0s) both; }

  .bp-in .bp-float { animation: bpFloat 8s ease-in-out 1.3s infinite; }
  .bp-in .bp-drift { animation: bpDrift 26s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .bp-armed .bp-rise, .bp-armed .bp-left, .bp-armed .bp-right { opacity: 1; }
    .bp-armed.bp-in .bp-rise, .bp-armed.bp-in .bp-left, .bp-armed.bp-in .bp-right,
    .bp-in .bp-float, .bp-in .bp-drift { animation: none !important; }
  }
`;

function BenefitsPillsSection() {
  const { ref: sectionRef, armed, revealed } = useRevealOnScroll<HTMLElement>(0.12);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-[#FBF2D6]${armed ? " bp-armed" : ""}${revealed ? " bp-in" : ""}`}
    >
      <style>{benefitsCss}</style>

      {/* ─── Mobile (<lg) — Figma 4787:12890, a 390px frame. Offsets are
           percentages of that frame width so the whole thing scales. ─── */}
      <div className="mx-auto w-full max-w-[430px] pb-[12.8%] lg:hidden">
        <h2 className="bp-rise px-[9.23%] pt-[15.9%] text-center font-nohemi text-[24px] font-semibold leading-8 text-grey-90">
          Get more from Paybyleap Foreign Account
        </h2>

        <div className="mt-[14.6%] flex flex-col gap-4 px-[6.41%]">
          {mobilePills.map((pill, i) => (
            <div
              key={pill.label}
              style={{ width: pill.width, ["--d" as string]: `${160 + i * 70}ms` }}
              className={`${i % 2 ? "self-end bp-right" : "self-start bp-left"}`}
            >
              <MobilePill label={pill.label} bold={pill.bold} rest={pill.rest} />
            </div>
          ))}
        </div>

        {/* Watermark + tilted phone ride together: the watermark starts above
            the last pill, so the pair is offset up as one block */}
        <div className="relative ml-[-15.13%] mt-[-15.64%] aspect-[519/608] w-[133.08%]">
          <img loading="lazy" decoding="async"
            src={figma.benefitsWatermarkMobile}
            alt=""
            className="bp-drift pointer-events-none absolute left-0 top-0 w-full"
            aria-hidden
          />
          <div className="bp-float absolute left-[9.83%] top-[16.61%] w-[83.43%]">
            <img loading="lazy" decoding="async"
              src={figma.getMoreIphoneMobile}
              alt="PayByLeap foreign account app on iPhone"
              className="bp-rise w-full"
              style={{ ["--d" as string]: "820ms" }}
            />
          </div>
        </div>
      </div>

      {/* ─── Desktop (lg+) ─── */}
      <div className="hidden lg:block lg:py-16 min-[1440px]:min-h-[868px] min-[1440px]:py-[99px]">

      {/* Background leap mark — Figma places it at 24,232 (1007x711) in the
          1441px frame; its 10% opacity is baked into the export */}
      <img loading="lazy" decoding="async"
        src={figma.benefitsWatermark}
        alt=""
        className="bp-drift pointer-events-none absolute z-0"
        style={{ top: "232px", left: "calc(50% - 696px)", width: "1007px", height: "711px" }}
        aria-hidden
      />

      <LandingInset className="relative z-10">
        <div className="flex items-start gap-8 lg:gap-10">

          {/* ── Left: heading + pills ── */}
          <div className="flex-1">
            <h2 className="bp-rise max-w-[605px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
              Get more from Paybyleap Foreign Account
            </h2>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-[34px] min-[1440px]:mt-12">
              {featurePills.map((pill, i) => {
                const pillEl = (
                  <div className="bp-rise" style={{ ["--d" as string]: `${160 + i * 65}ms` }}>
                    <FeaturePill label={pill.label} bold={pill.bold} rest={pill.rest} />
                  </div>
                );
                return pill.newLine ? (
                  <div key={pill.label} className="basis-full">{pillEl}</div>
                ) : (
                  <Fragment key={pill.label}>{pillEl}</Fragment>
                );
              })}
            </div>
          </div>

          {/* ── Right: phone mockup (lg → 1440px in-flow) ── */}
          <div className="hidden shrink-0 self-stretch lg:flex lg:items-end min-[1440px]:hidden">
            <div className="bp-float">
              <img loading="lazy" decoding="async"
                src={figma.getMoreIphoneMock}
                alt="PayByLeap foreign account app on iPhone"
                className="bp-rise w-[300px] object-contain object-bottom"
                style={{ ["--d" as string]: "760ms" }}
              />
            </div>
          </div>

        </div>
      </LandingInset>

      
      <div
        className="bp-float pointer-events-none absolute z-0 hidden min-[1440px]:block"
        style={{ top: "225px", left: "calc(50% + 135px)", width: "639px", height: "843px" }}
      >
        <img loading="lazy" decoding="async"
          src={figma.getMoreIphoneMock}
          alt="PayByLeap foreign account app on iPhone"
          className="bp-rise size-full object-contain object-top"
          style={{ ["--d" as string]: "760ms" }}
        />
      </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA SECTION                                                        */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-grey-100">
      <LandingInset className="relative pb-[149px] pt-[114px] lg:h-[528px] lg:pb-0 lg:pt-[98px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[-128px] hidden w-[1440px] lg:block min-[1440px]:left-0"
        >
          <div className="absolute left-[1047px] top-0 h-[155px] w-[392px] bg-[rgba(239,216,216,0.2)]" />
          <div className="absolute left-[550px] top-[155px] h-[212px] w-[497px] bg-[rgba(239,216,216,0.2)]" />
          <div className="absolute left-[160px] top-0 h-[98px] w-[390px] bg-[rgba(239,216,216,0.2)]" />
          <div className="absolute left-[160px] top-[367px] h-[160px] w-[390px] bg-[rgba(239,216,216,0.2)]" />
          <div className="absolute left-[1047px] top-[367px] h-[164px] w-[390px] bg-[rgba(239,216,216,0.2)]" />
        </div>

        <div className="relative lg:w-[814px] lg:rounded-2xl lg:bg-white lg:px-12 lg:pb-[61px] lg:pt-[52px]">
          <h2 className="mx-auto max-w-[315px] text-center font-nohemi text-heading-5 text-white lg:mx-0 lg:max-w-[658px] lg:text-left lg:font-spartan lg:text-heading-3 lg:text-grey-90">
            Ready to experience borderless banking with PayByLeap?
          </h2>
          <div className="mt-[55px] flex justify-center lg:mt-14 lg:justify-start">
            <a
              href="#"
              className="inline-flex h-12 w-[216px] items-center justify-center rounded-lg bg-primary px-2 font-spartan text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark"
            >
              Get Started - it's Free
            </a>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export function ForeignAccountsPage() {
  return (
    <main>
      <FAHero />
      <GetPaidSection />
      <BenefitsPillsSection />
      <CTASection />
      <TransactionSecuritySection />
      <TestimonialsSection heading="See what our customers says about rates" />
    </main>
  );
}
