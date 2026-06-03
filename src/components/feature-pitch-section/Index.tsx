import type { ReactNode } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { FeaturePill } from "@/components/ui/feature-pill/Index";

interface FeaturePitchSectionProps {
  heading: ReactNode;
  pills: string[];
  image: string;
  ctaHeading: ReactNode;
  ctaButtonLabel?: string;
}

export function FeaturePitchSection({
  heading,
  pills,
  image,
  ctaHeading,
  ctaButtonLabel = "Get Started - it's Free",
}: FeaturePitchSectionProps) {
  return (
    <section className="relative overflow-hidden bg-grey-100">
      <img
        src={figma.leapLogoLarge}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <LandingInset className="relative z-10 pb-0 pt-16 min-[1440px]:pt-[88px]">
        <h2 className="text-center font-spartan text-[48px] font-semibold leading-[1.2] text-white">
          {heading}
        </h2>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-[34px] min-[1440px]:mt-12">
          {pills.map((label) => (
            <FeaturePill key={label} label={label} />
          ))}
        </div>
      </LandingInset>

      <div className="relative z-10 mt-[-20px] flex justify-center min-[1440px]:mt-[-32px]">
        <img
          src={image}
          alt=""
          aria-hidden
          className="w-full max-w-[850px] max-h-[796px] object-contain"
        />
      </div>

      <div className="relative z-10 mt-12 flex flex-col items-center gap-6 pb-20 text-center min-[1440px]:pb-24">
        <h2 className="font-nohemi text-[40px] font-bold leading-[1.15] text-white md:text-[52px] min-[1440px]:text-[62px]">
          {ctaHeading}
        </h2>
        <a
          href="#"
          className="inline-flex h-[52px] items-center justify-center rounded-lg bg-primary px-10 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 min-[1440px]:h-[56px] min-[1440px]:text-[17px]"
        >
          {ctaButtonLabel}
        </a>
      </div>
    </section>
  );
}
