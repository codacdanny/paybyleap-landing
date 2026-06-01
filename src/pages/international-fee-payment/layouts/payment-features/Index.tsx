import { WhatYouGainCarousel, type WhatYouGainCard } from "@/components/what-you-gain-carousel/Index";

const cards: WhatYouGainCard[] = [
  {
    id: "fast-payment",
    title: "Fast International Payment",
    desc: "Pay for school fees, tuition, application fees and all international payment instantly without delay.",
  },
  {
    id: "multi-currency",
    title: "Multi-currency Support",
    desc: "Support payment of fees in any currencies available in the app.",
    currencySymbols: ["₦", "$", "€"],
  },
  {
    id: "secure",
    title: "Secure Transactions",
    desc: "Instantly updates values using live exchange rates for accurate and seamless transactions.",
  },
  {
    id: "instant-confirm",
    title: "Instant Confirmations",
    desc: "Receive payment confirmations in real-time so institutions are notified immediately.",
  },
];

export function PaymentFeaturesSection() {
  return (
    <WhatYouGainCarousel
      heading={
        <>
          What you gain using <span className="text-primary">Paybyleap</span>
          <br />
          for <span className="text-primary">international</span> Payment
        </>
      }
      sectionClassName="bg-white"
      cards={cards}
    />
  );
}
