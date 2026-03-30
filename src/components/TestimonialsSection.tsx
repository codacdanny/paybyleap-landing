import { useRef, useState } from "react";
import { figma } from "../assets/figma";

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
    <section className="bg-primary-dark py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <p className="text-center text-[18px] font-medium">
          GLOBAL FEEDBACK: REAL STORIES FROM USERS
        </p>
        <h2 className="mx-auto mt-6 max-w-[708px] text-center text-heading-3 md:text-[48px] md:leading-[56px]">
          See what our customers says about our platform
        </h2>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="scrollbar-hide mt-16 flex gap-8 overflow-x-auto pb-4 md:mt-20"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative w-[min(90vw,604px)] shrink-0 overflow-hidden rounded-2xl bg-[#EFD8D8] p-6 text-grey-100 md:p-8"
            >
              <div className="flex gap-6">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-24 w-24 shrink-0 rounded-full object-cover md:h-32 md:w-32"
                />
                <div className="min-w-0 flex-1 pt-2">
                  <div className="h-1 w-20 rounded-full bg-black" />
                  <h3 className="mt-4 text-heading-5 md:text-[32px] md:leading-10">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-body-3 text-grey-100 md:text-[18px]">
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="relative mt-8 min-h-[120px] text-body-3 md:text-[20px] md:leading-7">
                <p className="text-grey-100">{t.quote}</p>
                <img
                  src={figma.testimonialQuoteMark}
                  alt=""
                  className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 opacity-90 md:h-[140px] md:w-[140px]"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-1.5">
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
      </div>
    </section>
  );
}
