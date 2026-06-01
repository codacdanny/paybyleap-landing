import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

interface TransferCardProps {
  title: string;
  desc: string;
  bg: string;
  textColor?: "white" | "dark";
  image?: string;

}

function TransferCard({ title, desc, bg, textColor = "white", image,  }: TransferCardProps) {
  const heading = textColor === "dark" ? "text-grey-90" : "text-white";
  const body = textColor === "dark" ? "text-grey-70" : "text-white/80";

  return (
    <div className={`relative overflow-hidden rounded-2xl p-4 ${bg}`} style={{ minHeight: 481 }}>
      <h3 className={`text-[22px] font-semibold leading-7 min-[1440px]:text-[26px] ${heading}`}>{title}</h3>
      <p className={`mt-3 max-w-[280px] text-[16px] leading-6 min-[1440px]:text-[18px] ${body}`}>{desc}</p>

      {image && (
        <img src={image} alt="" aria-hidden className="absolute bottom-0 left-0 w-full object-contain object-bottom" />
      )}

    </div>
  );
}



const cards: TransferCardProps[] = [
  {
    title: "Fast International Transfers",
    desc: "Send money across borders quickly and reliably with minimal delays.",
    bg: "bg-[#1F2065]",
    image: figma.fastTransferBg,
    
  },
  {
    title: "Multi-currency Support",
    desc: "Manage and transact in multiple currencies from a single account with ease.",
    bg: "bg-[#EDEDED]",
    textColor: "dark",
    image: figma.multicurrencyBg,
  },
  {
    title: "Track Payment in Real-time",
    desc: "Stay informed and in control with real-time tracking and notifications.",
    bg: "bg-grey-100",
    
  },
];

export function TransferChannelsSection() {
  return (
    <section className="bg-off-white py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <h2 className="max-w-[625px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          Send &amp; Receive Money Across Globe with Ease
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3 min-[1440px]:mt-[52px]">
          {cards.map((card) => (
            <TransferCard key={card.title} {...card} />
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
