import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { useSectionReveal } from "../../reveal";

// Figma 4669:12603: each circle's left edge from the frame centre and its top
// within a 154px stage that sits on the hero's bottom edge, which crops them.
// The 20% opacity and the 15deg turn are baked into the exports.
const avatars = [
  { src: figma.companyHeroNg, left: -653, top: 0, size: 208 },
  { src: figma.companyHeroPerson1, left: -445.5, top: 19.5, size: 169 },
  { src: figma.companyHeroPerson2, left: -263.5, top: 19.5, size: 169 },
  { src: figma.companyHeroUs, left: -102, top: 0, size: 208 },
  { src: figma.companyHeroCa, left: 84, top: 0, size: 208 },
  { src: figma.companyHeroPerson3, left: 285.5, top: 26.5, size: 169 },
  { src: figma.companyHeroUk, left: 450, top: 4, size: 208 },
  { src: figma.companyHeroPerson3, left: 652.5, top: 30.5, size: 169 },
];

export function CompanyHero() {
  const { ref, revealClass } = useSectionReveal<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-[#1D1212] pb-[120px] pt-14 md:pb-[160px] xl:h-[707px] xl:pb-0 xl:pt-[79px]${revealClass}`}
    >
      <LandingInset className="relative z-10 text-center">
        <p className="co-rise text-[18px] font-medium leading-6 text-white">ABOUT US</p>

        <h1
          className="co-rise mx-auto mt-6 max-w-[1074px] bg-[linear-gradient(90deg,#F6C03A_36%,#D52B1E_68%)] bg-clip-text font-spartan text-heading-5 text-transparent md:text-heading-3 xl:mt-8 xl:text-heading-1"
          style={{ ["--d" as string]: "80ms" }}
        >
          <span className="text-white">Simplifying</span> Global Payments{" "}
          <span className="text-white">for a Connected World</span>
        </h1>

        <p
          className="co-rise mx-auto mt-5 max-w-[755px] text-body-4 text-white md:text-body-2 xl:mt-[25px]"
          style={{ ["--d" as string]: "160ms" }}
        >
          At PayByLeap, we are building the future of global finance, where
          sending, receiving, and managing money across borders is simple, fast,
          and accessible to everyone.
        </p>

        <div
          className="co-rise mt-8 flex flex-wrap justify-center gap-4 xl:mt-[46px]"
          style={{ ["--d" as string]: "240ms" }}
        >
          <a
            href="#"
            className="flex h-12 w-[213px] items-center justify-center rounded-lg border-b-[3px] border-l-[3px] border-secondary bg-primary px-2 text-[18px] font-medium leading-6 text-white transition-colors hover:bg-primary-dark"
          >
            Download the App
          </a>
          <a
            href="#"
            className="flex h-12 w-[186px] items-center justify-center rounded-lg border border-grey-20 bg-[#FFF4F4] px-2 text-[18px] font-medium leading-6 text-grey-90 transition-colors hover:bg-white"
          >
            Create Account
          </a>
        </div>
      </LandingInset>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[154px] w-[1440px] origin-bottom -translate-x-1/2 scale-50 md:scale-75 xl:scale-100"
      >
        <div className="co-sway absolute inset-0">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a.src}
              alt=""
              className="co-rise absolute"
              style={{
                left: `calc(50% + ${a.left}px)`,
                top: a.top,
                width: a.size,
                height: a.size,
                ["--d" as string]: `${300 + i * 70}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
