import { sharedImages } from "@/data/images/shared";
import { stablecoinVirtualCardImages } from "@/data/images/stablecoin-virtual-card";
import { LandingInset } from "@/components/landing-inset/Index";
import { REVEAL_EASE, useRevealOnScroll } from "@/hooks/useRevealOnScroll";

// Each card sits in three wrappers (entrance, hover fan, idle float) so the
// three motions never compete for the same transform.
const css = `
  .vc-armed .vc-red-in, .vc-armed .vc-black-in, .vc-armed .vc-pop { opacity: 0; }

  @keyframes vcRedIn {
    from { opacity: 0; transform: translate(-6%, 9%) rotate(-11deg) scale(.95); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes vcBlackIn {
    from { opacity: 0; transform: translate(7%, 11%) rotate(9deg) scale(.95); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes vcPop {
    from { opacity: 0; transform: translateY(18px) scale(.94); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes vcFloatRed {
    0%, 100% { transform: translateY(0) rotate(0); }
    50%      { transform: translateY(1.3%) rotate(-1.6deg); }
  }
  @keyframes vcFloatBlack {
    0%, 100% { transform: translateY(0) rotate(0); }
    50%      { transform: translateY(-1.6%) rotate(1.2deg); }
  }
  @keyframes vcBob {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }
  @keyframes vcSheen {
    0%        { background-position: 160% 0; }
    22%, 100% { background-position: -60% 0; }
  }

  .vc-armed.vc-in .vc-red-in   { animation: vcRedIn .95s ${REVEAL_EASE} .1s both; }
  .vc-armed.vc-in .vc-black-in { animation: vcBlackIn .95s ${REVEAL_EASE} .25s both; }
  .vc-armed.vc-in .vc-pop      { animation: vcPop .7s ${REVEAL_EASE} .7s both; }

  .vc-in .vc-float-red   { animation: vcFloatRed 8s ease-in-out 1.2s infinite; }
  .vc-in .vc-float-black { animation: vcFloatBlack 7s ease-in-out 1.4s infinite; }
  .vc-in .vc-bob         { animation: vcBob 6s ease-in-out 1.6s infinite; }

  .vc-sheen {
    background: linear-gradient(105deg, transparent 42%, rgba(255,255,255,.2) 50%, transparent 58%) no-repeat;
    background-size: 250% 100%;
    background-position: 160% 0;
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
  }
  .vc-in .vc-sheen { animation: vcSheen 6.5s ease-in-out 1.8s infinite; }

  .vc-fan-red, .vc-fan-black { transition: transform .7s ${REVEAL_EASE}; }
  @media (hover: hover) {
    .vc-visual:hover .vc-fan-red   { transform: translate(-3%, 2%) rotate(-4deg); }
    .vc-visual:hover .vc-fan-black { transform: translate(3%, -2%) rotate(3.5deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    .vc-armed .vc-red-in, .vc-armed .vc-black-in, .vc-armed .vc-pop { opacity: 1; }
    .vc-red-in, .vc-black-in, .vc-pop, .vc-float-red, .vc-float-black,
    .vc-bob, .vc-sheen { animation: none !important; }
    .vc-visual:hover .vc-fan-red, .vc-visual:hover .vc-fan-black { transform: none; }
  }
`;

function PlayIcon() {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[#FFF4F4]">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-[1px] size-[11px]" aria-hidden="true">
        <path d="M7 4.5v15l12.5-7.5z" />
      </svg>
    </span>
  );
}

// Mobile (Figma 4789:13411) shows this card at 2/3 of its desktop size. Below
// xl it is sized in cqw of the 441px-wide card image so it scales with it;
// from xl it takes the desktop frame's pixel values (4643:37882).
function InfoCard() {
  return (
    <div className="vc-pop absolute left-[7.48%] top-[71.05%] w-[46.26%] xl:left-[-53px] xl:top-[458px] xl:w-[306px]">
      <div className="vc-bob rounded-[2.42cqw] border border-grey-20 bg-white px-[2.19cqw] pb-[2.57cqw] pt-[2.65cqw] xl:rounded-2xl xl:px-[15px] xl:py-[18px]">
        <img src={sharedImages.virtualCardInfoIcon} alt="" className="size-[7.26cqw] xl:size-12" />
        <p className="mt-[1.81cqw] text-[length:2.72cqw] leading-[4.23cqw] text-grey-100 xl:mt-3 xl:text-[18px] xl:leading-7">
          Send crypto globally, take charge of your money using paybyleap virtual card
        </p>
      </div>
    </div>
  );
}

export function VirtualCardHero() {
  const { ref, armed, revealed } = useRevealOnScroll<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      className={`overflow-hidden bg-off-white pb-[75px] pt-[23px] md:pb-20 xl:h-[736px] xl:pb-0 xl:pt-[86px]${armed ? " vc-armed" : ""}${revealed ? " vc-in" : ""}`}
    >
      <style>{css}</style>
      <LandingInset>
        <div className="relative">
          <div className="relative z-[2] xl:max-w-[756px]">
            <h1 className="max-w-[342px] font-spartan text-heading-5 text-grey-90 md:max-w-[640px] md:text-heading-3 xl:max-w-[756px] xl:text-heading-1">
              Spend Crypto Globally Using Virtual Card
            </h1>
            <p className="mt-[17px] text-body-4 text-grey-80 xl:mt-[54px] xl:text-[24px] xl:leading-8">
              Access your crypto funds anywhere.
            </p>

            <a
              href="#"
              className="mt-10 flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary px-2 text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary xl:mt-[76px]"
            >
              Get Card
            </a>
            <a
              href="#"
              className="mt-4 flex h-[69px] w-[296px] items-center justify-center gap-3 rounded-lg border border-grey-20 bg-[#FFF4F4] px-2 text-[16px] font-medium leading-6 text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:h-12 md:w-[356px] md:text-[18px] xl:mt-6"
            >
              <PlayIcon />
              Learn how virtual cards work
            </a>
          </div>

          {/* Card group render bounds: 769x796 at (655, 66) in the 1440 frame,
              441x456 at (-11, 342) in the 390 frame. Each card layer is placed
              at its own Figma render bounds as a share of that box. */}
          <div
            role="img"
            aria-label="PayByLeap virtual cards"
            className="vc-visual pointer-events-none relative -ml-[35px] -mt-[31px] aspect-[769/796] w-[441px] [container-type:inline-size] md:ml-0 md:mt-6 md:w-[600px] xl:pointer-events-auto xl:absolute xl:left-[495px] xl:top-[-104px] xl:mt-0 xl:w-[769px]"
          >
            <div className="vc-red-in absolute left-[7.63%] top-[20.98%] h-[74.95%] w-[69.92%]">
              <div className="vc-fan-red size-full">
                <img src={stablecoinVirtualCardImages.virtualCardRed} alt="" fetchPriority="high" className="vc-float-red size-full" />
              </div>
            </div>
            <div className="vc-black-in absolute left-[31.74%] top-[3.4%] h-[81.67%] w-[68.26%]">
              <div className="vc-fan-black size-full">
                <div className="vc-float-black relative size-full">
                  <img src={stablecoinVirtualCardImages.virtualCardBlack} alt="" fetchPriority="high" className="size-full" />
                  <div
                    aria-hidden
                    className="vc-sheen absolute inset-0"
                    style={{
                      maskImage: `url(${stablecoinVirtualCardImages.virtualCardBlack})`,
                      WebkitMaskImage: `url(${stablecoinVirtualCardImages.virtualCardBlack})`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute left-0 top-[434px] hidden h-[305px] w-[633px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_22%,#FFFFFF_100%)] blur-[18px] xl:block"
            />
            <InfoCard />
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
