import { LandingInset } from "@/components/landing-inset/Index";

export function GettingStartedSection() {
  return (
    <section className="bg-[#1D1111] py-20 min-[1440px]:py-[120px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[800px] text-center font-nohemi text-[40px] font-bold leading-[1.15] text-white md:text-[52px] min-[1440px]:text-[60px]">
          We are just getting started: continuously building, improving &
          expanding to serve more users globally
        </h2>
      </LandingInset>
    </section>
  );
}
