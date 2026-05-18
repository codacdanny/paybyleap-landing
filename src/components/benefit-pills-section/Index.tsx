import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

interface BenefitPillsSectionProps {
  heading: string;
  subheading?: string;
  pills: string[];
}

export function BenefitPillsSection({
  heading,
  subheading,
  pills,
}: BenefitPillsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-grey-100 py-16 min-[1440px]:py-[100px]">
      {/* Background image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <img
          src={figma.herobg}
          alt=""
          className="size-full object-cover"
        />
      </div>

      <LandingInset className="relative z-10">
        <h2 className="max-w-[605px] font-nohemi text-[32px] font-semibold leading-[40px] text-white md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-4 max-w-[605px] text-[20px] font-semibold leading-7 text-white/80 min-[1440px]:text-[24px]">
            {subheading}
          </p>
        )}

        <div className="mt-8 flex max-w-[1120px] flex-wrap gap-3 min-[1440px]:mt-12 min-[1440px]:gap-4">
          {pills.map((pill) => (
            <div
              key={pill}
              className="inline-flex h-[48px] items-center gap-3 rounded-3xl border border-grey-10/20 bg-off-white px-5 min-[1440px]:h-[60px] min-[1440px]:gap-4 min-[1440px]:px-6"
            >
              <img
                src={figma.star}
                alt=""
                className="size-5 shrink-0 min-[1440px]:size-6"
              />
              <span className="whitespace-nowrap text-[14px] font-medium leading-8 text-grey-90 min-[1440px]:text-[20px]">
                {pill}
              </span>
            </div>
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
