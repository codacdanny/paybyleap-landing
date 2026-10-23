import type { ReactNode } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { FastTransferArt } from "./fast-transfer-art/Index";

interface TransferCardProps {
  title: string;
  desc: string;
  className: string;
  art?: ReactNode;
}

function TransferCard({ title, desc, className, art }: TransferCardProps) {
  return (
    <div className={`relative min-h-[481px] overflow-hidden rounded-2xl px-5 pt-8 ${className}`}>
      <h3 className="max-w-[220px] text-heading-6">{title}</h3>
      <p className="mt-4 max-w-[324px] text-body-4">{desc}</p>
      {art}
    </div>
  );
}

const cards: TransferCardProps[] = [
  {
    title: "Fast International Transfers",
    desc: "Send money across borders quickly and reliably with minimal delays.",
    className: "bg-[#1F2065] text-white",
    art: <FastTransferArt />,
  },
  {
    title: "Multi-currency Support",
    desc: "Manage and transact in multiple currencies from a single account with ease.",
    className: "bg-[#EDECED] text-grey-90 ring-1 ring-inset ring-grey-10",
    art: (
      <img
        src={figma.moneyTransferCurrencyFlags}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute bottom-6 left-20 w-[247px] max-w-none md:left-24"
      />
    ),
  },
  {
    title: "Track Payment in Real-time",
    desc: "Stay informed and in control with real-time tracking and notifications.",
    className: "bg-grey-100 text-white md:col-span-2 md:min-h-[200px] xl:col-span-1 xl:min-h-[481px]",
  },
];

// Figma 4643:38372 (1440) and 4884:6064 (390).
export function ServiceFeaturesSection() {
  return (
    <section className="bg-off-white pb-32 pt-14 xl:pb-[173px] xl:pt-[121px]">
      <LandingInset>
        <h2 className="max-w-[329px] font-nohemi text-[24px] font-semibold leading-8 text-grey-90 md:max-w-[520px] md:text-[40px] md:leading-[48px] xl:max-w-[625px] xl:text-[48px] xl:leading-[58px]">
          Send &amp; Receive Money Across Globe with Ease
        </h2>

        <div className="mt-[39px] grid gap-8 md:grid-cols-2 md:gap-6 xl:mt-[65px] xl:grid-cols-[repeat(3,364px)] xl:justify-between min-[1440px]:justify-center">
          {cards.map((card) => (
            <TransferCard key={card.title} {...card} />
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
