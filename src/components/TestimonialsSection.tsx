import { useRef, useState } from "react";
import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";

const testimonials = [
  {
    name: "Sarah Gatewill",
    role: "Freelance Designer",
    avatar: figma.testimonialAvatar1,
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;Finally, a payment app that actually understands borderless
          work.&rdquo;
        </span>{" "}
        &ldquo;Before PayByLeap, I was losing a huge chunk of my freelance income
        to hidden exchange fees and slow bank transfers. Now, I can generate an
        invoice, get paid in USD or stablecoins, and withdraw to my local currency
        instantly. It&apos;s an absolute game-changer for my business.&rdquo;
      </>
    ),
  },
  {
    name: "David Odera",
    role: "International Student",
    avatar: figma.testimonialAvatar2,
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;Paying my tuition overseas used to be a nightmare.&rdquo;
        </span>{" "}
        &ldquo;Paying international fees used to mean multiple bank visits and
        ridiculous exchange rates. With PayByLeap&apos;s global accounts, I can
        convert my local currency to Euros in seconds and pay my university
        directly. The virtual stablecoin card is also perfect for my daily coffee
        runs!&rdquo;
      </>
    ),
  },
  {
    name: "Elena Joseph",
    role: "E-commerce Founder",
    avatar: figma.testimonialAvatar3,
    quote: (
      <>
        <span className="font-semibold">
          &ldquo;The fastest way to send money to my suppliers globally.&rdquo;
        </span>{" "}
        &ldquo;We import goods from three different continents, and the global money
        transfer feature has saved us thousands in fees. The interface is
        incredibly clean, and the transaction speed is unmatched. I love how I
        can track all my expenses in one place.&rdquo;
      </>
    ),
  },
  {
    name: "Marcus John",
    role: "Tech Consultant",
    avatar: figma.testimonialAvatar4,
    quote: (
      <>
        <span className="font-semibold">&ldquo;A seamless experience!&rdquo;</span>{" "}
        &ldquo;The virtual card feature is brilliant. I converted my crypto to USD
        and started spending online in less than two minutes. Highly
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
  return (
    <article
      className={
        variant === "stack"
          ? "relative min-h-[280px] w-full overflow-hidden rounded-2xl bg-[#EFD8D8] p-5 text-grey-100 min-[1440px]:rounded-[16px]"
          : "relative min-h-[432px] w-[min(90vw,604px)] shrink-0 overflow-hidden rounded-2xl bg-[#EFD8D8] p-6 text-grey-100 md:p-8 min-[1440px]:rounded-[16px]"
      }
    >
      <div className="flex gap-4 md:gap-6">
        <img
          src={t.avatar}
          alt=""
          className="size-20 shrink-0 rounded-full object-cover md:size-24 min-[1440px]:size-32"
        />
        <div className="min-w-0 flex-1 pt-1 md:pt-2">
          <div className="h-1 w-16 rounded-full bg-black md:w-20" />
          <h3 className="mt-3 text-[20px] font-semibold leading-7 md:mt-4 md:text-[32px] md:leading-10">
            {t.name}
          </h3>
          <p className="mt-1 text-[14px] leading-5 text-grey-100 md:text-[18px]">
            {t.role}
          </p>
        </div>
      </div>
      <div
        className={
          variant === "stack"
            ? "relative mt-6 min-h-[100px] text-[14px] leading-6"
            : "relative mt-8 min-h-[120px] text-body-3 min-[1440px]:mt-6 min-[1440px]:text-[20px] min-[1440px]:leading-7"
        }
      >
        <p className="text-grey-100">{t.quote}</p>
        <img
          src={figma.testimonialQuoteMark}
          alt=""
          className={`pointer-events-none absolute bottom-0 right-0 opacity-90 min-[1440px]:size-[140px] ${
            variant === "stack" ? "size-16" : "size-24"
          }`}
        />
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardSpan = el.scrollWidth / testimonials.length;
    const idx = Math.round(el.scrollLeft / Math.max(cardSpan, 1));
    setActive(Math.min(Math.max(0, idx), testimonials.length - 1));
  };

  return (
    <section className="bg-primary-dark py-14 text-white md:py-20 lg:py-28">
      <LandingInset>
        <p className="text-center text-[14px] font-medium leading-5 tracking-wide md:text-[18px] md:leading-6">
          GLOBAL FEEDBACK: REAL STORIES FROM USERS
        </p>
        <h2 className="mx-auto mt-4 max-w-[330px] text-center text-[24px] font-semibold leading-8 md:mt-6 md:max-w-[708px] md:text-[36px] md:leading-[44px] min-[1440px]:mt-10 min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          See what our customers says about our platform
        </h2>

        <div className="mx-auto mt-10 flex max-w-[330px] flex-col gap-4 lg:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={`stack-${t.name}`} t={t} variant="stack" />
          ))}
        </div>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="scrollbar-hide mt-16 hidden gap-8 overflow-x-auto pb-4 lg:flex min-[1440px]:mt-[120px] min-[1440px]:gap-8"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={`carousel-${t.name}`} t={t} variant="carousel" />
          ))}
        </div>

        <div className="mt-12 hidden justify-center gap-[5px] lg:flex min-[1440px]:mt-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const card = el.querySelectorAll("article")[i] as HTMLElement;
                card?.scrollIntoView({ behavior: "smooth", inline: "center" });
              }}
              className={`h-2 rounded-2xl transition-all ${
                i === active ? "w-20 bg-[#EFD8D8]" : "w-7 bg-grey-30"
              }`}
            />
          ))}
        </div>
      </LandingInset>
    </section>
  );
}
