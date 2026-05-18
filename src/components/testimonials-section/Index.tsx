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
    <article className="relative h-[400px] shrink-0 overflow-hidden rounded-2xl bg-[#EFD8D8] p-5 md:h-[432px] md:p-7 min-[1440px]:w-[604px] min-[1440px]:p-7">
      <div className="flex items-center gap-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="size-[80px] rounded-full object-cover md:size-[100px] min-[1440px]:size-[128px]"
        />
        <div>
          <div className="flex items-center gap-3">
            <p className="text-[24px] font-semibold leading-10 text-grey-100 md:text-[28px] min-[1440px]:text-[32px]">
              {t.name}
            </p>
            <div className="hidden h-1 w-20 rounded-2xl bg-grey-100 md:block" />
          </div>
          <p className="text-[16px] leading-7 text-grey-100 min-[1440px]:text-[18px]">
            {t.role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-[16px] leading-7 text-grey-90 min-[1440px]:text-[20px] min-[1440px]:leading-7">
        {t.quote}
      </p>
      <img
        src={figma.testimonialQuoteMark}
        alt=""
        className="pointer-events-none absolute -bottom-[40px] -right-[10px] w-[100px] md:-bottom-[50px] md:-right-[15px] md:w-[120px] min-[1440px]:w-[140px]"
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

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW =
      el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 32
        : 636;
    setActive(Math.round(el.scrollLeft / cardW));
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
    const cardW =
      el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 32
        : 636;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
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
        className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 md:px-8 min-[1440px]:mt-[62px] min-[1440px]:gap-8 min-[1440px]:px-[112px]"
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-1.5 min-[1440px]:mt-14">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-2xl transition-all ${
              i === active ? "w-20 bg-[#EFD8D8]" : "w-7 bg-grey-30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
