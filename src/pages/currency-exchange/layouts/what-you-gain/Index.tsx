import { figma } from "@/data/images/Index";
import { ProductBenefitsCarousel, type ProductBenefitCard } from "@/components/what-you-gain-carousel/Index";

const cards: ProductBenefitCard[] = [
  {
    id: "real-time",
    title: "Real-time conversion",
    desc: "Instantly updates using live exchange rates for accurate and seamless transactions.",
  },
  {
    id: "multi-currency",
    title: "Multi-currency Support",
    desc: "Access and transact in multiple global currencies from a single account with ease.",
    currencySymbols: ["₦", "$", "€"],
  },
  {
    id: "low-fees",
    title: "Low Fees",
    desc: "All costs are transparent and shown upfront — no hidden charges, ever.",
    icon: figma.realtimeconversionIcon,
  },
  {
    id: "instant",
    title: "Instant Conversion",
    desc: "Convert between currencies instantly without processing delays.",
    icon: figma.realtimeconversionIcon,
  },
];

export function CurrencyBenefitsCarouselSection() {
  return (
    <ProductBenefitsCarousel
      heading={
        <>
          What you gain using <span className="text-primary">Paybyleap</span>
          <br />
          <span className="text-primary">Currency</span> Exchange
        </>
      }
      sectionClassName="bg-[#FBF2D6] mt-[35px]"
      cards={cards}
    />
  );
}
