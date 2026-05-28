import { figma } from "@/data/images/Index";

interface FeaturePillProps {
  label: string;
  bold?: string;
  rest?: string;
}

export function FeaturePill({ label, bold, rest }: FeaturePillProps) {
  return (
    <div
      className="inline-flex h-[60px] items-center gap-4 rounded-3xl px-6"
      style={{
        background:
          "linear-gradient(#FBF7FB, #FBF7FB) padding-box, linear-gradient(to right, #9A0000, #F6C03A) border-box",
        border: "1.5px solid transparent",
      }}
    >
      <img src={figma.star} alt="" className="size-6 shrink-0" />
      <span className="whitespace-nowrap text-[24px] font-medium leading-8 text-grey-90">
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
