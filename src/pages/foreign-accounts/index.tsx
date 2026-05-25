import { useRef, useState, useEffect, useCallback } from "react";
import { figma } from "../../data/images/Index";
import { LandingInset } from "../../components/landing-inset/Index";


const featurePills = [
  { label: "100% DIGITAL SIGNUP", bold: "100%", rest: " DIGITAL SIGNUP" },
  { label: "ZERO MAINTANCE CHARGES" },
  { label: "NO ACCOUNT OPENING FEES" },
  { label: "MULTI-CURRENCY IBAN" },
  { label: "WITHDRAWAL TO LOCAL ACCOUNTS" },
  { label: "ACCOUNT STATEMENT & PROOF OF ACCOUNT" },
  { label: "GNERATE PAYMENT INVOICE" },
  { label: "LOW TRANSACTION FEE" },
  { label: "INSTANT TRANSACTION NOTIFICATIONS" },
  { label: "ANTI-FRAUD PROTECTION" },
];

const transactionFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Our exchange rate is considerate and of market value",
  },
  {
    title: "2FA Authentication",
    desc: "Verify to grant access to convert your money",
  },
  {
    title: "Instant Notifications for Payment",
    desc: "Receive alert immediately after you convert currency",
  },
];

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


function FAHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4F4] min-[1440px]:h-[764px]">
      <LandingInset className="relative z-30 pb-16 pt-24 min-[1440px]:pb-0 min-[1440px]:pt-[105px]">

        {/* Two-column: left = text, right = images */}
        <div className="flex items-stretch min-[1440px]:h-[659px]">

          {/* ── Left column: text content ── */}
          <div className="max-w-[640px] shrink-0 pt-4">
            <div className="inline-flex items-center gap-0.5 rounded-2xl border border-secondary bg-[#FBF2D6] px-2 py-1">
              <img src={figma.ionPlanet} alt="" className="size-4" />
              <span className="text-center text-[16px] leading-6 text-grey-80">
                GLOBAL ACCOUNTS
              </span>
            </div>

            <h1 className="mt-12 font-nohemi text-[40px] font-semibold leading-[48px] text-grey-90 md:text-[52px] md:leading-[60px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              The next-gen account for professional
            </h1>

            <p className="mt-4 text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
              Open global accounts to receive international payments instantly. No
              minimum deposits required
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Get Yours Now
              </a>
              <a
                href="#"
                className="inline-flex h-12 w-fit items-center gap-3 rounded-lg border border-grey-20 bg-white/60 px-4 text-[18px] font-medium leading-6 text-grey-90"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg viewBox="0 0 10 12" fill="none" className="ml-0.5 size-3">
                    <path d="M1 1l8 5-8 5V1z" fill="white" />
                  </svg>
                </span>
                Learn more about how foreign account work
              </a>
            </div>
          </div>

          {/* ── Right column: images (desktop only) ── */}
          <div className="relative hidden flex-1 lg:block">

            {/* Globe arc — centered low so only the upper arc is visible */}
            <div
              className="pointer-events-none absolute"
              style={{ right: "-100px", top: "200px", width: "720px", height: "720px" }}
              aria-hidden
            >
              <img src={figma.faGlobe} alt="" className="size-full object-contain" />
            </div>

            {/* Account card — left edge of right column, aligned with heading */}
            <div className="absolute left-0 top-[10px] z-20 w-[270px] min-[1440px]:w-[300px]">
              <img
                src={figma.foreignImage}
                alt="Foreign account details"
                className="w-full rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
              />
            </div>

            {/* Man with hat — bottom-right, bleeds off edge */}
            <div className="absolute bottom-0 right-[-80px] z-10 min-[1440px]:right-[-120px]" aria-hidden>
              <img
                src={figma.freeAccountHero}
                alt=""
                className="h-[580px] w-auto object-contain object-bottom min-[1440px]:h-[650px]"
              />
            </div>

          </div>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GET PAID SEAMLESSLY                                                */
/* ------------------------------------------------------------------ */

function GetPaidSection() {
  return (
    <section className="bg-less-white py-16 min-[1440px]:py-[113px]">
      <LandingInset>
        <h2 className="mx-auto max-w-[480px] text-center font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[48px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
          Get Paid Seamlessly, World wide
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3 min-[1440px]:mt-[70px] min-[1440px]:gap-[16px]">
          {/* Card 1: Quick Transfers */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl bg-primary-dark p-5 text-white min-[1440px]:h-[464px] min-[1440px]:p-6">
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Quick Transfers
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-white/90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Send and receive money in seconds with a seamless, secure payment
              experience designed to keep up with your pace
            </p>
            <img
              src={figma.quickTransferImage}
              alt=""
              className="absolute top-[44%] left-1/2 z-10 w-[80%] -translate-x-1/2 object-contain"
              aria-hidden
            />
          </article>

          {/* Card 2: Smooth Process */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl border border-grey-10 bg-[#FBF2D6] p-5 min-[1440px]:h-[464px] min-[1440px]:p-5">
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 text-grey-90 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Smooth, Stress-Free Process
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-grey-90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Enjoy a streamlined experience with no complications, delays, or
              unnecessary steps.
            </p>

            {/* Solid cream star — behind */}
            <img
              src={figma.solidStar}
              alt=""
              className="absolute bottom-[-30px] left-1/2 z-0 w-[90%] -translate-x-1/2 object-contain"
              aria-hidden
            />
            {/* Dotted red star — in front */}
            <img
              src={figma.dottedStar}
              alt=""
              className="absolute bottom-[-20px] left-1/2 z-10 w-[95%] -translate-x-[48%] object-contain"
              aria-hidden
            />
          </article>

          {/* Card 3: Credit */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl bg-grey-100 p-5 text-white min-[1440px]:h-[464px] min-[1440px]:p-5">
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Credit from your Platform
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-white/90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Send and receive money in seconds with a seamless, secure payment
              experience designed to keep up with your pace
            </p>
            <img
              src={figma.creditCardImage}
              alt=""
              className="absolute top-[44%] left-1/2 z-10 w-[80%] -translate-x-1/2 object-contain"
              aria-hidden
            />
          </article>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  BENEFITS PILLS                                                     */
/* ------------------------------------------------------------------ */

function BenefitsPillsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF2D6] py-16 min-[1440px]:py-[99px] min-[1440px]:min-h-[868px]">

      {/* Decorative blob */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          left: "12%",
          top: "48%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(180,130,90,0.22) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
        aria-hidden
      />

      <LandingInset className="relative z-10">
        <div className="flex items-start gap-8 lg:gap-10">

          {/* ── Left: heading + pills ── */}
          <div className="flex-1">
            <h2 className="max-w-[605px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
              Get more from Paybyleap Foreign Account
            </h2>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-[54px] min-[1440px]:mt-12">
              {featurePills.map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex h-[60px] items-center gap-4 rounded-3xl px-6"
                  style={{
                    background:
                      "linear-gradient(#FBF7FB, #FBF7FB) padding-box, linear-gradient(to right, #9A0000, #F6C03A) border-box",
                    border: "1.5px solid transparent",
                  }}
                >
                  <img
                    src={figma.star}
                    alt=""
                    className="size-6 shrink-0"
                  />
                  <span className="whitespace-nowrap text-[24px] font-medium leading-8 text-grey-90">
                    {pill.bold ? (
                      <>
                        <span className="font-bold text-primary">{pill.bold}</span>
                        {pill.rest}
                      </>
                    ) : (
                      pill.label
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: phone mockup (lg → 1440px in-flow) ── */}
          <div className="hidden shrink-0 self-stretch lg:flex lg:items-end min-[1440px]:hidden">
            <img
              src={figma.getMoreIphoneMock}
              alt="PayByLeap foreign account app on iPhone"
              className="w-[360px] object-contain object-bottom"
            />
          </div>

        </div>
      </LandingInset>

      {/* Phone mockup at 1440px+: absolute, matches Figma coords exactly */}
      {/* left: calc(50% + 135px) keeps it at 855px from section left at 1440px viewport */}
      <img
        src={figma.getMoreIphoneMock}
        alt="PayByLeap foreign account app on iPhone"
        className="pointer-events-none absolute z-20 hidden min-[1440px]:block"
        style={{
          top: "225px",
          left: "calc(50% + 135px)",
          width: "639px",
          height: "843px",
          objectFit: "contain",
          objectPosition: "top",
        }}
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA SECTION                                                        */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-grey-100 py-16 min-[1440px]:py-0 min-[1440px]:h-[528px]">
      <div className="pointer-events-none absolute inset-0 hidden min-[1440px]:block">
        <div className="absolute right-[1px] top-0 h-[155px] w-[392px] bg-[rgba(239,216,216,0.2)]" />
        <div className="absolute left-[550px] top-[155px] h-[212px] w-[497px] bg-[rgba(239,216,216,0.2)]" />
        <div className="absolute left-[160px] top-0 h-[98px] w-[390px] bg-[rgba(239,216,216,0.2)]" />
        <div className="absolute bottom-0 left-[160px] h-[160px] w-[390px] bg-[rgba(239,216,216,0.2)]" />
        <div className="absolute bottom-0 right-[3px] h-[164px] w-[390px] bg-[rgba(239,216,216,0.2)]" />
      </div>

      <LandingInset className="relative z-10 flex items-center min-[1440px]:h-full">
        <div className="w-full overflow-hidden rounded-2xl bg-white p-8 md:p-12 min-[1440px]:max-w-[814px] min-[1440px]:p-12">
          <h2 className="max-w-[658px] font-nohemi text-[28px] font-semibold leading-[36px] text-grey-90 md:text-[36px] md:leading-[44px] min-[1440px]:text-[48px] min-[1440px]:leading-[56px]">
            Ready to experience borderless banking with PayByLeap?
          </h2>
          <a
            href="#"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-4 text-[18px] font-medium leading-6 text-white min-[1440px]:mt-10 min-[1440px]:w-[216px]"
          >
            Get Started - it's Free
          </a>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GLOBAL TRANSACTIONS                                                */
/* ------------------------------------------------------------------ */

function GlobalTransactionsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-light py-16 min-[1440px]:py-[97px]">
      <LandingInset className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: feature cards */}
          <div className="flex flex-col gap-4">
            {transactionFeatures.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-4 rounded-2xl border border-grey-30 bg-white p-5 shadow-[0px_4px_24px_rgba(0,0,0,0.1)]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1F2065] to-[#3E40CB]" />
                <div className="flex-1">
                  <p className="text-[18px] font-semibold leading-6 text-grey-90 min-[1440px]:text-[24px]">
                    {f.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-5 text-grey-70 min-[1440px]:text-[16px]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div>
            <h2 className="max-w-[554px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
              Carry out Global Transactions with ease and safety measures
            </h2>
            <p className="mt-6 max-w-[458px] text-[18px] leading-7 text-grey-90 min-[1440px]:text-[20px] min-[1440px]:leading-7">
              Converting money is now very easy and fast with paybyleap
            </p>
          </div>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                       */
/* ------------------------------------------------------------------ */

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

function FATestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.firstElementChild
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
    const cardW = el.firstElementChild
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
          See what our customers says about rates
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

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export function ForeignAccountsPage() {
  return (
    <main>
      <FAHero />
      <GetPaidSection />
      <BenefitsPillsSection />
      <CTASection />
      <GlobalTransactionsSection />
      <FATestimonialsSection />
    </main>
  );
}
