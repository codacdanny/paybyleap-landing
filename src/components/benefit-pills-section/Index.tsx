import type { ReactNode } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

interface BenefitPillsSectionProps {
  heading: ReactNode;
  subheading?: ReactNode;
  pills: string[];
  image?: string;
}

export function BenefitPillsSection({
  heading,
  subheading,
  pills,
  image,
}: BenefitPillsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-hero-dark py-16 min-[1440px]:py-[100px]">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <img src={figma.herobg} alt="" className="size-full object-cover" />
      </div>

      <LandingInset className="relative z-10">
        <div className={`grid items-start gap-10 ${image ? "lg:grid-cols-[1fr_auto]" : ""}`}>
          {/* Left: heading + pills */}
          <div>
            <h2 className="max-w-[560px] font-nohemi text-[32px] font-semibold leading-[40px] text-white md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-3 max-w-[560px] text-[18px] font-semibold leading-7 text-white/80 min-[1440px]:text-[22px]">
                {subheading}
              </p>
            )}

            <div className="mt-8 flex max-w-[840px] flex-wrap gap-3 min-[1440px]:mt-12 min-[1440px]:gap-4">
              {pills.map((pill) => (
                <div
                  key={pill}
                  className="inline-flex h-[44px] items-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-5 min-[1440px]:h-[52px] min-[1440px]:px-6"
                >
                  <img src={figma.star} alt="" className="size-4 shrink-0 min-[1440px]:size-5" />
                  <span className="whitespace-nowrap text-[13px] font-medium text-white min-[1440px]:text-[15px]">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional right column: phone/product image */}
          {image && (
            <div className="hidden items-end justify-center lg:flex">
              <img
                src={image}
                alt=""
                className="h-[340px] w-auto object-contain drop-shadow-2xl min-[1440px]:h-[400px]"
              />
            </div>
          )}
        </div>
      </LandingInset>
    </section>
  );
}
