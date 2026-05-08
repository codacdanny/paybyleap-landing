import { useRef, useState, useCallback, useEffect } from "react";
import { figma } from "../../../../data/images/Index";
import { LandingInset } from "../../../../components/landing-inset/Index";

const testimonials = [
  {
    name: "Sarah Gatewill",
    role: "Freelance Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;Finally, a payment app that actually understands borderless
          work.&rdquo;
        </span>{" "}
        &ldquo;Before PayByLeap, I was losing a huge chunk of my freelance
        income to hidden exchange fees and slow bank transfers. Now, I can
        generate an invoice, get paid in USD or stablecoins, and withdraw to my
        local currency instantly. It&apos;s an absolute game-changer for my
        business.&rdquo;
      </>
    ),
  },
  {
    name: "David Odera",
    role: "International Student",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;Paying my tuition overseas used to be a nightmare.&rdquo;
        </span>{" "}
        &ldquo;Paying international fees used to mean multiple bank visits and
        ridiculous exchange rates. With PayByLeap&apos;s global accounts, I can
        convert my local currency to Euros in seconds and pay my university
        directly. The virtual stablecoin card is also perfect for my daily
        coffee runs!&rdquo;
      </>
    ),
  },
  {
    name: "Elena Joseph",
    role: "E-commerce Founder",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;The fastest way to send money to my suppliers globally.&rdquo;
        </span>{" "}
        &ldquo;We import goods from three different continents, and the global
        money transfer feature has saved us thousands in fees. The interface is
        incredibly clean, and the transaction speed is unmatched. I love how I
        can track all my expenses in one place.&rdquo;
      </>
    ),
  },
  {
    name: "Marcus John",
    role: "Tech Consultant",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;A seamless experience!&rdquo;
        </span>{" "}
        &ldquo;The virtual card feature is brilliant. I converted my crypto to
        USD and started spending online in less than two minutes. Highly
        recommend!&rdquo;
      </>
    ),
  },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  t,
  variant,
}: {
  t: Testimonial;
  variant: "stack" | "carousel";
}) {
  const isStack = variant === "stack";
  return (
    <article
      className={
        isStack
          ? "relative w-full overflow-hidden rounded-[16px] bg-[#F0DEDE] p-5 text-grey-100"
          : "relative w-[min(90vw,480px)] shrink-0 snap-center overflow-hidden rounded-[16px] bg-[#F0DEDE] p-6 text-grey-100 md:w-[min(85vw,520px)] md:p-8 min-[1440px]:h-[432px] min-[1440px]:w-[520px] min-[1440px]:p-10"
      }
    >
      {/* Header: avatar + name/role */}
      <div
        className={`flex items-start ${isStack ? "gap-3" : "gap-4 min-[1440px]:gap-6"}`}
      >
        <img
          src={t.avatar}
          alt={t.name}
          className={`shrink-0 rounded-full object-cover ${
            isStack ? "size-14" : "size-20 md:size-24 min-[1440px]:size-[128px]"
          }`}
        />
        <div className="min-w-0 flex-1 pt-2 min-[1440px]:pt-4">
          <div className="flex items-center gap-3 min-[1440px]:gap-4">
            <h3
              className={`shrink-0 font-semibold ${
                isStack
                  ? "text-[16px] leading-5"
                  : "text-[18px] leading-6 md:text-[22px] md:leading-7 min-[1440px]:text-[28px] min-[1440px]:leading-9"
              }`}
            >
              {t.name}
            </h3>
            <div
              className={`shrink-0 bg-grey-100 ${
                isStack
                  ? "h-[1.5px] w-10"
                  : "h-[2px] w-12 md:w-16 min-[1440px]:w-[72px]"
              }`}
            />
          </div>
          <p
            className={`text-grey-80 ${
              isStack
                ? "mt-0.5 text-[12px] leading-4"
                : "mt-1 text-[13px] leading-4 md:text-[14px] md:leading-5 min-[1440px]:text-[16px] min-[1440px]:leading-5"
            }`}
          >
            {t.role}
          </p>
        </div>
      </div>

      {/* Quote text */}
      <div
        className={
          isStack
            ? "mt-4 text-[13px] leading-5"
            : "mt-5 text-[14px] leading-[22px] md:mt-6 md:text-[15px] md:leading-6 min-[1440px]:mt-8 min-[1440px]:text-[16px] min-[1440px]:leading-[26px]"
        }
      >
        <p className="text-grey-100">{t.quote}</p>
      </div>

      {/* Quote mark — pinned to the exact bottom-right corner, clipped by overflow-hidden */}
      <img
        src={figma.testimonialQuoteMark}
        alt=""
        className={`pointer-events-none absolute ${
          isStack
            ? "-bottom-[30px] -right-[10px] w-[100px]"
            : "-bottom-[40px] -right-[12px] w-[140px] md:-bottom-[50px] md:-right-[15px] md:w-[170px] min-[1440px]:-bottom-[55px] min-[1440px]:-right-[15px] min-[1440px]:w-[200px]"
        }`}
      />
    </article>
  );
}

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardSpan = el.scrollWidth / testimonials.length;
    const idx = Math.round(el.scrollLeft / Math.max(cardSpan, 1));
    setActive(Math.min(Math.max(0, idx), testimonials.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  return (
    <section className="bg-primary-dark py-14 text-white md:py-20 lg:py-28 min-[1440px]:py-[120px]">
      <LandingInset>
        <p className="text-center text-[14px] font-medium leading-5 tracking-wide md:text-[18px] md:leading-6">
          GLOBAL FEEDBACK: REAL STORIES FROM USERS
        </p>
        <h2 className="mx-auto mt-4 max-w-[330px] text-center font-nohemi text-[24px] font-semibold leading-8 md:mt-6 md:max-w-[708px] md:text-[36px] md:leading-[44px] min-[1440px]:mt-10 min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          See what our customers says about our platform
        </h2>

        {/* Mobile stacked cards */}
        <div className="mx-auto mt-10 flex max-w-[330px] flex-col gap-4 lg:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={`stack-${t.name}`} t={t} variant="stack" />
          ))}
        </div>

        {/* Desktop carousel */}
        <div
          ref={scrollerRef}
          className="scrollbar-hide mt-16 hidden snap-x snap-mandatory gap-8 overflow-x-auto pb-4 lg:flex min-[1440px]:mt-[120px] min-[1440px]:gap-10"
        >
          {testimonials.map((t) => (
            <TestimonialCard
              key={`carousel-${t.name}`}
              t={t}
              variant="carousel"
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-10 hidden justify-center gap-[6px] lg:flex min-[1440px]:mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const card = el.querySelectorAll("article")[i] as HTMLElement;
                card?.scrollIntoView({ behavior: "smooth", inline: "start" });
              }}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                i === active
                  ? "w-14 bg-[#F0DEDE] min-[1440px]:w-[72px]"
                  : "w-5 bg-white/30 min-[1440px]:w-6"
              }`}
            />
          ))}
        </div>

        {/* Mobile dots */}
        <div className="mt-8 flex justify-center gap-[5px] lg:hidden">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-10 bg-[#F0DEDE]" : "w-5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
