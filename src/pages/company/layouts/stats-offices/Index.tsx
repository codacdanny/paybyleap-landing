import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { useSectionReveal } from "../../reveal";

// Figma 4669:12732, in the order they stack on mobile. From xl each pill takes
// its spot in the 1440 frame: x, y, box size, and the width its label wraps at.
const pills = [
  { label: "OPEN AND MANAGE FOREIGN ACCOUNTS", side: "top", x: 483, y: 426, w: 534, h: 60, tw: 438 },
  { label: "PERFORM INSTANT CURRENCY EXCHANGE", side: "left", x: 132, y: 640, w: 440, h: 85, tw: 338 },
  { label: "SEND & RECEIVE GLOBAL PAYMENTS", side: "right", x: 900, y: 580, w: 416, h: 85, tw: 300 },
  { label: "PAY INTERNATIONAL SCHOOL FEES & BILLS", side: "left", x: 132, y: 945, w: 440, h: 85, tw: 338 },
  { label: "GENERATE & MANAGE GLOBAL INVOICES", side: "right", x: 902, y: 823, w: 440, h: 85, tw: 338 },
  { label: "USE STABLECOIN POWERED VISUAL CARDS", side: "left", x: 132, y: 1160, w: 440, h: 85, tw: 338 },
  { label: "SEND & RECEIVE CRYPTO SEAMLESSLY", side: "right", x: 902, y: 1129, w: 440, h: 85, tw: 338 },
];

const entrance = { top: "co-rise", left: "co-left", right: "co-right" } as const;

export function ProductEcosystemSection() {
  const { ref, revealClass } = useSectionReveal<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-[#1D1212] pb-20 pt-16 xl:h-[1817px] xl:p-0${revealClass}`}
    >
      <LandingInset className="relative z-10 text-center xl:pt-[160px]">
        <p className="co-rise text-[18px] font-semibold leading-6 text-secondary">WHAT WE DO</p>
        <h2
          className="co-rise mt-6 font-nohemi text-[32px] font-semibold leading-10 text-white xl:text-[48px] xl:leading-[64px]"
          style={{ ["--d" as string]: "80ms" }}
        >
          Our Financial Ecosystem
        </h2>
        <p
          className="co-rise mx-auto mt-2 max-w-[478px] text-body-3 text-white xl:mt-0"
          style={{ ["--d" as string]: "160ms" }}
        >
          Mobile-first platform enabling global financial transactions with speed and control.
        </p>
      </LandingInset>

      <div className="relative mt-10 flex flex-col items-center gap-4 px-6 xl:absolute xl:left-1/2 xl:top-0 xl:mt-0 xl:block xl:h-full xl:w-[1440px] xl:-translate-x-1/2 xl:px-0">
        <img
          loading="lazy"
          decoding="async"
          src={figma.companyAppPhone}
          alt="PayByLeap app home screen"
          className="co-rise order-1 my-4 w-[240px] xl:absolute xl:left-[551px] xl:top-[547px] xl:my-0 xl:w-[397px]"
          style={{ ["--d" as string]: "200ms" }}
        />

        {pills.map((p, i) => (
          <div
            key={p.label}
            className={`${entrance[p.side as keyof typeof entrance]} w-full max-w-[440px] xl:absolute xl:z-10 xl:w-[var(--w)] xl:max-w-none ${i === 0 ? "order-0" : "order-2"}`}
            style={{
              left: p.x,
              top: p.y,
              ["--w" as string]: `${p.w}px`,
              ["--d" as string]: `${280 + i * 90}ms`,
            }}
          >
            <div
              className="co-float co-glass-pill flex items-center justify-center gap-4 rounded-3xl px-5 py-4 xl:h-[var(--h)] xl:px-0 xl:py-0"
              style={{ ["--h" as string]: `${p.h}px`, ["--f" as string]: `${1.4 + (i % 3) * 0.7}s` }}
            >
              <img src={figma.star} alt="" className="size-5 shrink-0 xl:size-6" />
              <span
                className="text-center text-[16px] font-medium leading-6 text-white xl:w-[var(--tw)] xl:text-[24px] xl:leading-8"
                style={{ ["--tw" as string]: `${p.tw}px` }}
              >
                {p.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="co-rise relative mx-auto mt-16 max-w-[833px] bg-[linear-gradient(90deg,#F6C03A_36%,#D52B1E_68%)] bg-clip-text px-6 text-center font-nohemi text-[36px] font-semibold leading-[44px] text-transparent md:text-[48px] md:leading-[60px] xl:absolute xl:inset-x-0 xl:top-[1465px] xl:mt-0 xl:w-[833px] xl:px-0 xl:text-[64px] xl:leading-[76px]">
        <span className="text-white">All-in-one</span>{" "}
        <span className="bg-[linear-gradient(90deg,#F6C03A_74%,#D52B1E_114%)] bg-clip-text">platform</span>
        <span className="text-white">,</span> <br className="hidden xl:inline" />
        <span className="text-white">Instant and</span> transparent{" "}
        <br className="hidden xl:inline" />
        <span className="text-white">transactions</span>
      </h2>
    </section>
  );
}
