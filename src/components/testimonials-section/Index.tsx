import { useRef, useState, useEffect, useCallback } from "react";
import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";

const testimonials = [
  {
    name: "Sarah Gatewill",
    role: "Freelance Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      '"Finally, a payment app that actually understands borderless work." "Before PayByLeap, I was losing a huge chunk of my freelance income to hidden exchange fees and slow bank transfers. Now, I can generate an invoice, get paid in USD or stablecoins, and withdraw to my local currency instantly. It\'s an absolute game-changer for my business."',
  },
  {
    name: "David Odera",
    role: "International Student",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      '"Paying my tuition overseas used to be a nightmare." "Paying international fees used to mean multiple bank visits and ridiculous exchange rates. With PayByLeap\'s global accounts, I can convert my local currency to Euros in seconds and pay my university directly. The virtual stablecoin card is also perfect for my daily coffee runs!"',
  },
  {
    name: "Elena Joseph",
    role: "E-commerce Founder",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      '"The fastest way to send money to my suppliers globally." "We import goods from three different continents, and the global money transfer feature has saved us thousands in fees. The interface is incredibly clean, and the transaction speed is unmatched. I love how I can track all my expenses in one place."',
  },
  {
    name: "Marcus John",
    role: "Tech Consultant",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      '"A seamless experience!" "The virtual card feature is brilliant. I converted my crypto to USD and started spending online in less than two minutes. Highly recommend!"',
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article className="relative flex w-[min(84vw,340px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#EFD8D8] p-5 pb-16 md:min-h-[432px] md:w-[46vw] md:p-7 min-[1440px]:h-[432px] min-[1440px]:w-[604px] min-[1440px]:p-7">
      <div className="flex items-center gap-3 md:gap-4">
        <img loading="lazy" decoding="async"
          src={t.avatar}
          alt={t.name}
          className="size-12 rounded-full object-cover md:size-[80px] min-[1440px]:size-[128px]"
        />
        <div>
          <div className="flex items-center gap-3">
            <p className="text-[16px] font-semibold leading-5 text-grey-100 md:text-[22px] md:leading-10 min-[1440px]:text-[32px]">
              {t.name}
            </p>
            <div className="hidden h-1 w-20 rounded-2xl bg-grey-100 min-[1440px]:block" />
          </div>
          <p className="mt-0.5 text-[13px] leading-[18px] text-grey-70 md:mt-0 md:text-[16px] md:leading-7 md:text-grey-100 min-[1440px]:text-[18px]">
            {t.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-[14px] leading-[22px] text-grey-90 md:mt-6 md:text-[16px] md:leading-7 min-[1440px]:text-[20px] min-[1440px]:leading-7">
        {t.quote}
      </p>
      <img loading="lazy" decoding="async"
        src={figma.testimonialQuoteMark}
        alt=""
        className="pointer-events-none absolute -bottom-[34px] -right-[8px] w-[84px] md:-bottom-[50px] md:-right-[15px] md:w-[120px] min-[1440px]:w-[140px]"
      />
    </article>
  );
}

interface TestimonialsSectionProps {
  heading?: string;
}

export function TestimonialsSection({
  heading = "See what our customers say about us",
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStride = (el: HTMLDivElement) => {
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return card ? card.offsetWidth + gap : 636;
  };

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setActive(
      atEnd ? testimonials.length - 1 : Math.round(el.scrollLeft / cardStride(el)),
    );
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncActive, { passive: true });
    return () => el.removeEventListener("scroll", syncActive);
  }, [syncActive]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: cardStride(el) * idx, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 min-[1440px]:py-[84px]">
      <LandingInset>
        <p className="text-center text-[16px] font-medium leading-6 text-grey-90 min-[1440px]:text-[18px]">
          GLOBAL FEEDBACK: REAL STORIES FROM USERS
        </p>
        <h2 className="mx-auto mt-4 max-w-[708px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          {heading}
        </h2>
      </LandingInset>

      <div
        ref={scrollRef}
        className="scrollbar-hide mt-8 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 md:mt-10 md:scroll-px-8 md:gap-8 md:px-8 min-[1440px]:mt-[62px] min-[1440px]:scroll-px-[112px] min-[1440px]:px-[112px]"
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-1.5 md:mt-10 min-[1440px]:mt-14">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`relative before:absolute before:-inset-x-1 before:-top-[18px] before:-bottom-[18px] before:content-[''] h-1.5 rounded-2xl transition-all md:h-2 ${
              i === active ? "w-10 bg-primary md:w-20 md:bg-[#EFD8D8]" : "w-5 bg-grey-20 md:w-7 md:bg-grey-30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
