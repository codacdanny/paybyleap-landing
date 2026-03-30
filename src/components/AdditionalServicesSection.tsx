import { useRef } from "react";
import { figma } from "../assets/figma";
import { Button } from "./Button";

const cards = [
  {
    title: "Bill Payments",
    body: "Bill Payments enable users to conveniently pay for utilities and subscription services across the globe, allowing seamless, secure, and timely transactions",
    image: figma.serviceBillPayments,
    gradient:
      "linear-gradient(234deg, rgba(0,0,0,0) 25.5%, rgb(0,0,0) 84.4%)",
  },
  {
    title: "Expenses Management",
    body: "It allows users to effectively monitor, track, and categorize their spending in real time, providing clear insights into where their money goes by organizing expenses into meaningful categories",
    image: figma.serviceExpenses,
    gradient:
      "linear-gradient(222deg, rgba(0,0,0,0) 25%, rgb(0,0,0) 81.7%)",
  },
  {
    title: "Global Invoicing",
    body: "empowers users to seamlessly create, send, and manage professional invoices in multiple currencies, enabling them to work with international clients effortlessly",
    image: figma.serviceInvoice,
    gradient:
      "linear-gradient(221deg, rgba(0,0,0,0) 29.3%, rgb(0,0,0) 84%)",
  },
];

export function AdditionalServicesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[708px]">
            <h2 className="text-[28px] font-semibold leading-tight text-grey-100 md:text-[36px] md:leading-[56px]">
              Additional Services Available in the App
            </h2>
            <Button className="mt-8 h-[58px] min-w-[190px] border-2 border-secondary bg-primary px-4 text-[18px] font-medium">
              Download the app
            </Button>
          </div>
          <div className="flex shrink-0 items-center gap-0 md:gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition hover:bg-grey-10 md:h-[72px] md:w-[72px] lg:h-[100px] lg:w-[100px]"
              aria-label="Previous services"
            >
              <img
                src={figma.carouselArrowLeft}
                alt=""
                className="h-full w-full object-contain"
              />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition hover:bg-grey-10 md:h-[72px] md:w-[72px] lg:h-[100px] lg:w-[100px]"
              aria-label="Next services"
            >
              <img
                src={figma.carouselArrowRight}
                alt=""
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 md:mt-10"
        >
          {cards.map((c) => (
            <article
              key={c.title}
              className="relative h-[420px] w-[min(85vw,555px)] shrink-0 snap-center overflow-hidden rounded-2xl md:h-[480px] lg:h-[575px]"
            >
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundImage: c.gradient }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="text-heading-5 text-white md:text-[32px] md:leading-10">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[489px] text-body-3 text-white md:text-[18px] md:leading-7">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
