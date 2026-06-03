import { ProductBenefitsCarousel, type ProductBenefitCard } from "@/components/what-you-gain-carousel/Index";

const cards: ProductBenefitCard[] = [
  {
    id: "templates",
    title: "Professional Invoice Templates",
    desc: "Create branded invoices in seconds with customizable templates that look great.",
  },
  {
    id: "multi-currency",
    title: "Multi-currency Invoices",
    desc: "Send and receive invoices in multiple currencies from clients worldwide.",
    currencySymbols: ["₦", "$", "€"],
  },
  {
    id: "reduce-delays",
    title: "Reduce Payment Delays",
    desc: "Instantly updates values using live exchange rates for accurate and seamless transactions.",
  },
  {
    id: "expense-tracking",
    title: "Expense Tracking",
    desc: "Track all your invoices and payments in one place for easy financial management.",
  },
];

export function InvoiceBenefitsCarouselSection() {
  return (
    <ProductBenefitsCarousel
      heading={
        <>
          What you gain creating Invoice
          <br />
          using <span className="text-primary">Paybyleap</span>
        </>
      }
      sectionClassName="bg-[#FBF2D6]"
      cards={cards}
    />
  );
}
