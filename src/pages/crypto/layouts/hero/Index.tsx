import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { IconPlayCircle } from "@/components/ui/icons/Index";
import { REVEAL_EASE } from "@/hooks/useRevealOnScroll";

// The wallet UI is split into the card and the panels lifted out of it, so it
// assembles on load and the network list drifts above the card at rest.
const css = `
  @keyframes cxRise {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes cxPop {
    from { opacity: 0; transform: translateY(14px) scale(.94); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes cxDrift {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes cxLift {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }

  .cx-card     { animation: cxRise .9s ${REVEAL_EASE} .1s both; }
  .cx-drift    { animation: cxDrift 8s ease-in-out 1.6s infinite; }
  .cx-usdc     { animation: cxPop .7s ${REVEAL_EASE} .5s both; }
  .cx-usdt     { animation: cxPop .7s ${REVEAL_EASE} .62s both; }
  .cx-networks { animation: cxRise .8s ${REVEAL_EASE} .8s both, cxLift 6s ease-in-out 1.8s infinite; }

  @media (prefers-reduced-motion: reduce) {
    .cx-card, .cx-drift, .cx-usdc, .cx-usdt, .cx-networks { animation: none !important; }
  }
`;

// Layer bounds are the source pixels each piece was cut from (990x1120).
const layers = [
  { src: figma.cryptoHeroWalletUsdc, className: "cx-usdc left-[10.909%] top-[21.429%] w-[36.566%]" },
  { src: figma.cryptoHeroWalletUsdt, className: "cx-usdt left-[50.707%] top-[21.429%] w-[36.566%]" },
  { src: figma.cryptoHeroNetworks, className: "cx-networks left-[10.909%] top-[63.929%] w-[79.596%]" },
];

// Figma 4643:38492 (1440) and 4884:6337 (390).
export function CryptoHero() {
  return (
    <section className="overflow-hidden bg-[#FFF4F4] pb-[57px] pt-[19px] md:pb-20 md:pt-12 xl:h-[743px] xl:pb-0 xl:pt-[118px]">
      <style>{css}</style>
      <LandingInset>
        <div className="relative">
          <div className="relative z-[1] xl:max-w-[589px]">
            <h1 className="max-w-[337px] text-heading-5 text-grey-90 md:max-w-[589px] md:text-heading-3 xl:text-heading-1">
              Buy, Sell or Transfer Crypto easily with Paybyleap
            </h1>
            <p className="mt-[19px] text-body-4 text-grey-80 md:text-[24px] md:leading-8 xl:mt-5">
              Move your money anywhere and anytime.
            </p>
            <div className="mt-10 flex flex-col items-start gap-[19px] xl:mt-12 xl:gap-4">
              <a
                href="#"
                className="flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:w-[201px]"
              >
                Transfer Now
              </a>
              <a
                href="#"
                className="flex h-14 w-[296px] items-center justify-center gap-3 rounded-lg border border-grey-20 bg-white text-[16px] font-medium leading-6 text-grey-90 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:h-12 md:w-[275px] md:text-[18px]"
              >
                <IconPlayCircle className="size-6 shrink-0 text-primary" />
                Learn how crypto work
              </a>
            </div>
          </div>

          <div
            role="img"
            aria-label="Paybyleap crypto wallet showing USDC and USDT balances and supported networks"
            className="cx-card mt-10 w-[345px] md:mx-auto md:w-[562px] xl:absolute xl:left-[611px] xl:top-[-50px] xl:mt-0"
          >
            <div className="cx-drift relative">
              <img src={figma.cryptoHeroBase} alt="" className="w-full" />
              {layers.map(({ src, className }) => (
                <img key={src} src={src} alt="" className={`absolute ${className}`} />
              ))}
            </div>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
