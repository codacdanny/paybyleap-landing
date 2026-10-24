import { sharedImages } from "@/data/images/shared";
import { REVEAL_EASE, useRevealOnScroll } from "@/hooks/useRevealOnScroll";

// Figma: PAYBYLEAP OUTPUT File, node 4549:36214 — a 1438x918 frame.
const features = [
  {
    title: "Protected and Regulated",
    desc: "Our exchange rate is considerate and of market value",
    icon: sharedImages.txnSwap,
  },
  {
    title: "2FA Authentication",
    desc: "Verify to grant access to convert your money",
    icon: sharedImages.txnShield,
  },
  {
    title: "Instant Notifications for Payment",
    desc: "Receive alert immediately after you convert currency",
    icon: sharedImages.txnBell,
  },
];

// The two decorative arcs are one shape placed twice, stretched to the node
// box Figma reports (790.8x715.5) and turned 2.011deg anticlockwise.
const arcs = [
  { left: -208, top: 340 },
  { left: 715, top: 299 },
];

// Mobile frame 4787:12933 (389px) uses a smaller arc, the second copy turned
// 41.07deg about its top-left corner.
const mobileArcs = [
  { left: 184, top: 206, rotate: 0 },
  { left: 210, top: 588, rotate: 41.07 },
];

// Figma's angular gradient on the 56px icon disc: #1F2065 at 0, #3E40CB at
// 0.4575, wrapping back round to the start.
const iconDisc =
  "conic-gradient(from 0turn at 50% 64%, #1F2065 0turn, #3E40CB 0.4575turn, #1F2065 1turn)";

const cardShadow = "0px 4px 24px rgba(0,0,0,0.10)";

const css = `
  .txn-armed .txn-head, .txn-armed .txn-sub, .txn-armed .txn-phone,
  .txn-armed .txn-card, .txn-armed .txn-seal { opacity: 0; }

  .txn-arc { transform: rotate(-2.011deg); }

  @keyframes txnRise {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes txnSlide {
    from { opacity: 0; transform: translateX(-52px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes txnPop {
    0%   { opacity: 0; transform: scale(.3) rotate(-30deg); }
    65%  { opacity: 1; transform: scale(1.2) rotate(6deg); }
    100% { opacity: 1; transform: none; }
  }
  @keyframes txnFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }
  @keyframes txnArcDrift {
    0%, 100% { transform: rotate(-2.011deg) scale(1); }
    50%      { transform: rotate(1.6deg) scale(1.04); }
  }

  .txn-armed.txn-in .txn-head  { animation: txnRise .7s ${REVEAL_EASE} both; }
  .txn-armed.txn-in .txn-sub   { animation: txnRise .7s ${REVEAL_EASE} .12s both; }
  .txn-armed.txn-in .txn-phone { animation: txnRise .85s ${REVEAL_EASE} .08s both; }
  .txn-armed.txn-in .txn-card  { animation: txnSlide .65s ${REVEAL_EASE} var(--d, 0s) both; }
  .txn-armed.txn-in .txn-seal  { animation: txnPop .5s ${REVEAL_EASE} calc(var(--d, 0s) + .42s) both; }

  .txn-in .txn-float { animation: txnFloat 9s ease-in-out 1.4s infinite; }
  .txn-in .txn-arc   { animation: txnArcDrift 30s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .txn-armed .txn-head, .txn-armed .txn-sub, .txn-armed .txn-phone,
    .txn-armed .txn-card, .txn-armed .txn-seal { opacity: 1; }
    .txn-armed.txn-in .txn-head, .txn-armed.txn-in .txn-sub,
    .txn-armed.txn-in .txn-phone, .txn-armed.txn-in .txn-card,
    .txn-armed.txn-in .txn-seal, .txn-in .txn-float, .txn-in .txn-arc {
      animation: none !important;
    }
  }
`;

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  return (
    <div
      className="flex items-center rounded-xl border border-grey-20/70 bg-white py-3 pl-4 pr-3.5 md:rounded-[24px] md:py-4 md:pl-6 md:pr-5 lg:border-0 min-[1440px]:h-[106px] min-[1440px]:py-0 min-[1440px]:pl-[58px] min-[1440px]:pr-[33px]"
      style={{ boxShadow: cardShadow }}
    >
      <div
        className="flex size-8 shrink-0 items-center justify-center rounded-full md:size-11 min-[1440px]:size-[56px]"
        style={{ background: iconDisc }}
      >
        <img loading="lazy" decoding="async" src={feature.icon} alt="" className="size-5 md:size-7 min-[1440px]:size-9" />
      </div>
      <div className="ml-2.5 flex-1 md:ml-3 min-[1440px]:ml-[13px]">
        <p className="text-[14px] font-semibold leading-[18px] text-grey-90 md:text-[17px] md:leading-6 min-[1440px]:text-[24px] min-[1440px]:leading-7">
          {feature.title}
        </p>
        <p className="mt-0.5 text-[12px] leading-4 text-grey-70 md:mt-1 md:text-[13px] md:leading-5 min-[1440px]:mt-[7px] min-[1440px]:text-[16px] min-[1440px]:leading-6">
          {feature.desc}
        </p>
      </div>
      <img loading="lazy" decoding="async"
        src={sharedImages.txnSealCheck}
        alt=""
        className="txn-seal ml-2 size-[18px] shrink-0 md:ml-3 md:size-6 min-[1440px]:size-8"
      />
    </div>
  );
}

export function TransactionSecuritySection() {
  const { ref: sectionRef, armed, revealed } = useRevealOnScroll<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-primary-light${armed ? " txn-armed" : ""}${revealed ? " txn-in" : ""}`}
    >
      <style>{css}</style>

      {/* Decorative arcs, placed against the 1438px Figma frame */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="relative mx-auto h-full max-w-[1438px]">
          {arcs.map((arc) => (
            <img loading="lazy" decoding="async"
              key={arc.left}
              src={sharedImages.txnArc}
              alt=""
              className="txn-arc absolute hidden min-[1440px]:block"
              style={{ left: `${arc.left}px`, top: `${arc.top}px`, width: "790.8px", height: "715.5px" }}
            />
          ))}
          {mobileArcs.map((arc) => (
            <img loading="lazy" decoding="async"
              key={arc.left}
              src={sharedImages.txnArcMobile}
              alt=""
              className="absolute h-[290px] w-[205px] origin-top-left lg:hidden"
              style={{ left: `${arc.left}px`, top: `${arc.top}px`, transform: `rotate(${arc.rotate}deg)` }}
            />
          ))}
        </div>
      </div>

      {/* The columns are 610 and 554 with a 36px gutter, inset 158 left /
          80 right. Those land exactly at 1440 and relax to a fluid
          two-column below that. */}
      <div className="relative z-10 mx-auto flex max-w-[1438px] flex-col gap-[86px] px-6 pb-[98px] pt-[49px] sm:px-8 md:gap-14 md:py-16 lg:flex-row lg:items-start lg:gap-[36px] lg:px-10 min-[1440px]:gap-[36px] min-[1440px]:py-0 min-[1440px]:pb-[79px] min-[1440px]:pl-[158px] min-[1440px]:pr-[80px] min-[1440px]:pt-[97px]">

        {/* ── Left: phone with the three cards laid over it ── */}
        <div className="relative mx-auto w-full max-w-[351px] shrink-0 md:max-w-[480px] lg:mx-0 lg:max-w-none lg:flex-1 min-[1440px]:h-[742px] min-[1440px]:w-[610px] min-[1440px]:flex-none">

          {/* Below 1440 the phone stays in flow so it gives the column its
              height; at 1440 it takes the exact Figma offset instead. */}
          <div
            className="pointer-events-none mx-auto w-[80%] lg:w-[78%] min-[1440px]:absolute min-[1440px]:left-[40px] min-[1440px]:top-0 min-[1440px]:mx-0 min-[1440px]:w-[529px]"
            aria-hidden
          >
            <div className="txn-float">
              <img loading="lazy" decoding="async"
                src={sharedImages.transactionsPhoneFigma}
                alt=""
                className="txn-phone w-full"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 top-[33.7%] z-10 flex flex-col gap-2 md:gap-4 lg:top-1/2 lg:-translate-y-1/2 min-[1440px]:static min-[1440px]:block min-[1440px]:translate-y-0">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="txn-card min-[1440px]:absolute min-[1440px]:left-0 min-[1440px]:w-[610px]"
                /* top is inert below 1440 where the card is still static */
                style={{ top: `${249 + i * 122}px`, ["--d" as string]: `${220 + i * 140}ms` }}
              >
                <FeatureCard feature={f} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: heading + body ── */}
        <div className="order-first w-full lg:order-none lg:flex-1 min-[1440px]:w-[554px] min-[1440px]:flex-none min-[1440px]:pt-[98px]">
          <h2 className="txn-head max-w-[317px] font-nohemi text-[24px] font-semibold leading-8 text-grey-90 md:max-w-none md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
            Carry out Global Transactions with ease and safety measures
          </h2>
          <p className="txn-sub mt-[17px] max-w-[292px] text-[16px] leading-6 text-grey-90 md:mt-6 md:max-w-[458px] md:leading-7 min-[1440px]:mt-[27px] min-[1440px]:text-[20px] min-[1440px]:leading-7">
            Converting money is now very easy and fast with paybyleap
          </p>
        </div>

      </div>
    </section>
  );
}
