import { ProductBenefitsCarousel, type ProductBenefitCard } from "@/components/what-you-gain-carousel/Index";

const cards: ProductBenefitCard[] = [
  {
    id: "instant-transfer",
    title: "Instant Crypto Transfer",
    desc: "Send and receive crypto instantly with fast, seamless transactions.",
  },
  {
    id: "multi-coin",
    title: "Multi-coin Support",
    desc: "Manage and transact across multiple cryptocurrencies in one place.",
    currencySymbols: ["₦", "$", "€"],
  },
  {
    id: "wallet-integration",
    title: "Easy Integration with Wallets",
    desc: "Connect seamlessly with your wallets for quick and easy crypto access.",
  },
  {
    id: "low-fees",
    title: "Low Fees",
    desc: "Buy, sell or transfer your crypto globally with low fees charge.",
  },
];

export function CryptoBenefitsCarouselSection() {
  return (
    <ProductBenefitsCarousel
      heading={
        <>
          What you gain using <span className="text-primary">Paybyleap</span>
          <br />
          for your <span className="text-primary">Crypto</span> transactions
        </>
      }
      sectionClassName="bg-[#ffffff]"
      cards={cards}
    />
  );
}
