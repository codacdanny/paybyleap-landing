import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { useSectionReveal } from "../../reveal";

// Figma 4669:12826. Cards are 364x481; art keeps its Figma offset, with x and
// width as a share of the card so it scales on narrower cards.
const values = [
  {
    num: "01",
    title: "Transparency first: Users know what they are paying and why",
    image: figma.companyValueTransparency,
    artClass: "left-[7.69%] top-[184px] w-[84.62%]",
  },
  {
    num: "02",
    title: "User-centric innovation: solutions that solve real problem",
    image: figma.companyValueInnovation,
    artClass: "left-[4.67%] top-[143px] w-[90.93%]",
  },
  {
    num: "03",
    title: "Global accessibility: financial tools for everyone, everywhere",
    image: figma.companyValueAccessibility,
    artClass: "left-[6.32%] top-[187px] w-[82.42%]",
  },
  {
    num: "04",
    title: "Reliability and trust: secure, stable & consistent transactions",
    image: figma.companyValueReliability,
    artClass: "left-[37.64%] top-[140px] w-[62.36%]",
  },
  {
    num: "05",
    title: "Continuous improvement: evolving with a changing world",
    image: figma.companyValueImprovement,
    artClass: "left-[6.32%] top-[206px] w-[93.68%]",
  },
];

export function CoreValuesSection() {
  const { ref, revealClass } = useSectionReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className={`bg-[#1D1212] pt-16 xl:pt-[206px]${revealClass}`}>
      <LandingInset>
        <div className="grid gap-6 md:grid-cols-2 xl:-ml-5 xl:grid-cols-[364px_364px_364px] xl:gap-y-[86px]">
          <h2 className="co-rise font-nohemi text-[32px] font-semibold leading-10 text-white xl:relative xl:-top-[75px] xl:ml-[19px] xl:text-[48px] xl:leading-[64px]">
            Our Core
            <br />
            Values
          </h2>

          {values.map((v, i) => (
            <article
              key={v.num}
              className="co-pop group relative h-[481px] overflow-hidden rounded-2xl bg-grey-80 px-5 pt-[26px]"
              style={{ ["--d" as string]: `${120 + i * 100}ms` }}
            >
              <div className="ml-[3px] flex items-center gap-3 text-white opacity-80">
                <span className="text-[16px] font-medium leading-6">{v.num}</span>
                <span className="h-[1.5px] w-[212px] max-w-full rounded-full bg-white" />
                <svg viewBox="0 0 1024 1024" fill="currentColor" className="size-4 shrink-0" aria-hidden>
                  <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" />
                </svg>
              </div>
              <h3 className="relative z-10 mt-9 max-w-[271px] text-heading-6 text-white">{v.title}</h3>
              <img
                loading="lazy"
                decoding="async"
                src={v.image}
                alt=""
                className={`absolute max-w-none transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.03] ${v.artClass}`}
              />
            </article>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
