import { figma } from "../assets/figma";
import { Button } from "./Button";

const walletItems: { code: string; src: string }[] = [
  { code: "NGN", src: figma.flagNg },
  { code: "USD", src: figma.flagUs },
  { code: "CAD", src: figma.flagCa },
  { code: "EUR", src: figma.euFlag },
  { code: "GBP", src: figma.flagUk },
  { code: "YEN", src: figma.flagCn },
  { code: "USDC", src: figma.usdc },
  { code: "USDT", src: figma.usdt },
];

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="relative z-[1] flex justify-center lg:justify-end">
        <div className="relative w-[min(100%,397px)]">
          <img
            src={figma.iphoneAirMockup}
            alt="PayByLeap app on iPhone"
            className="relative z-[1] h-auto w-full drop-shadow-card"
          />

          <div className="absolute bottom-[8%] right-[-6%] z-[2] w-[min(100%,280px)] max-w-[78%] rotate-[-6deg] sm:right-0">
            <div className="relative aspect-[1.55/1] overflow-hidden rounded-[9px] shadow-xl">
              <img
                src={figma.cardTexture}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark/95" />
              <img
                src={figma.cardWatermark}
                alt=""
                className="pointer-events-none absolute left-3 top-1/2 z-[1] h-[60%] w-auto -translate-y-1/2 object-contain opacity-[0.12]"
              />
              <div className="relative z-[2] flex h-full flex-col justify-between p-3 text-[11px] text-white sm:p-4 sm:text-[12px]">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono tracking-wider">
                    **** **** **** 7564
                  </span>
                  <span className="font-bold text-white/50">USD</span>
                </div>
                <div className="flex items-end justify-between">
                  <p className="font-normal">JANET KHLOE</p>
                  <div className="flex items-center gap-2">
                    <div className="relative h-5 w-4 overflow-hidden rounded-[2px]">
                      <img
                        src={figma.chipDetail}
                        alt=""
                        className="absolute left-1/2 top-1/2 h-[220%] max-w-none -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <img src={figma.visa} alt="" className="h-5 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-page-gradient">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-organic-lines opacity-80 lg:block" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] lg:block">
        <img
          src={figma.heroDecor}
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(181deg, rgb(249, 238, 240) 14.6%, rgba(249, 238, 240, 0.2) 97.88%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:px-6 md:py-20 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h1 className="text-heading-3 text-grey-100 md:text-heading-2 xl:text-heading-1">
            Simplifying global payment for everyone
          </h1>
          <p className="mt-6 max-w-xl text-body-3 text-grey-60 md:text-body-2">
            PayByLeap makes international transactions fast, easy, and accessible
            for education, business, and local payments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="min-h-[48px] px-8">Download the app</Button>
            <Button variant="outline" className="min-h-[48px] px-8">
              Learn more
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-body-5 text-grey-50">
              Built for everyday people, to transact globally
            </p>
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
              {walletItems.map((w) => (
                <div
                  key={w.code}
                  className="flex items-center gap-2 px-1 py-2 text-body-4 text-grey-100"
                >
                  <img
                    src={w.src}
                    alt=""
                    className="h-6 w-6 shrink-0 rounded-full object-cover"
                  />
                  <span className="font-normal">{w.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center pb-8 md:min-h-[520px] md:pb-12">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
