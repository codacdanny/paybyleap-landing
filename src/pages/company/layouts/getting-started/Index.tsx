import { sharedImages } from "@/data/images/shared";
import { companyImages } from "@/data/images/company";
import { LandingInset } from "@/components/landing-inset/Index";
import { useSectionReveal } from "../../reveal";

export function GrowthMissionBanner() {
  const { ref, revealClass } = useSectionReveal<HTMLElement>(0.2);

  return (
    <section ref={ref} className={`overflow-hidden bg-[#1D1212] pt-20 xl:pt-[236px]${revealClass}`}>
      <LandingInset className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={companyImages.swoosh}
          alt=""
          aria-hidden
          className="co-pop mx-auto aspect-[216/71] w-[160px] xl:w-[216px]"
        />
        <h2
          className="co-rise mx-auto mt-10 max-w-[1099px] font-nohemi text-[32px] font-semibold leading-10 text-white md:text-[48px] md:leading-[60px] xl:mt-14 xl:text-[64px] xl:leading-[76px]"
          style={{ ["--d" as string]: "150ms" }}
        >
          We are just getting started: continuously building, improving &amp;
          expanding to serve more users globally
        </h2>
      </LandingInset>

      <img
        loading="lazy"
        decoding="async"
        src={sharedImages.pageDividerShort}
        alt=""
        aria-hidden
        className="co-fade pointer-events-none mt-16 aspect-[1440/110] mix-blend-color-dodge w-full xl:mx-auto xl:mt-[217px] xl:w-[1440px]"
        style={{ ["--d" as string]: "300ms" }}
      />
    </section>
  );
}
