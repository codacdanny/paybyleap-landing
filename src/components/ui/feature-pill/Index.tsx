import { figma } from "@/data/images/Index";

interface FeaturePillProps {
  label: string;
  bold?: string;
  rest?: string;
}

export function FeaturePill({ label, bold, rest }: FeaturePillProps) {
  return (
    <div
      className="inline-flex min-h-[48px] items-center gap-3 rounded-3xl px-4 py-2 lg:h-[60px] lg:gap-4 lg:px-6 lg:py-0"
      style={{
        background:
          "linear-gradient(#FBF7FB, #FBF7FB) padding-box, linear-gradient(to right, #9A0000, #F6C03A) border-box",
        border: "1.5px solid transparent",
      }}
    >
      <img loading="lazy" decoding="async" src={figma.star} alt="" className="size-5 shrink-0 lg:size-6" />
      <span className="text-[13px] font-medium leading-5 text-grey-90 lg:whitespace-nowrap lg:text-[24px] lg:leading-8">
        {bold ? (
          <>
            <span className="font-bold text-primary">{bold}</span>
            {rest}
          </>
        ) : (
          label
        )}
      </span>
    </div>
  );
}
