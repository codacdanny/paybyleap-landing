import { useRef, useState, useEffect, useCallback } from "react";
import { figma } from "../assets/figma";
import { LandingInset } from "../components/LandingInset";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const featurePills = [
  { label: "100% DIGITAL SIGNUP", bold: "100%", rest: " DIGITAL SIGNUP", wide: false },
  { label: "ZERO MAINTANCE CHARGES", wide: false },
  { label: "NO ACCOUNT OPENING FEES", wide: false },
  { label: "MULTI-CURRENCY IBAN", wide: false },
  { label: "WITHDRAWAL TO LOCAL ACCOUNTS", wide: true },
  { label: "ACCOUNT STATEMENT & PROOF OF ACCOUNT", wide: true },
  { label: "GNERATE PAYMENT INVOICE", wide: false },
  { label: "LOW TRANSACTION FEE", wide: false },
  { label: "INSTANT TRANSACTION NOTIFICATIONS", wide: true },
  { label: "ANTI-FRAUD PROTECTION", wide: false },
];

const transactionFeatures = [
  {
    title: "Protected and Regulated",
    desc: "Our exchange rate is considerate and of market value",
    icon: figma.faExchangeIcon,
  },
  {
    title: "2FA Authentication",
    desc: "Verify to grant access to convert your money",
    icon: figma.faSafetyIcon,
  },
  {
    title: "Instant Notifications for Payment",
    desc: "Receive alert immediately after you convert currency",
    icon: figma.faNotificationIcon,
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

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function FAHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4F4] min-[1440px]:h-[764px]">
      {/* Globe background - desktop only */}
      <div className="pointer-events-none absolute right-[-200px] top-[150px] hidden h-[839px] w-[1038px] opacity-30 min-[1440px]:block">
        <img
          src={figma.faGlobe}
          alt=""
          className="size-full object-contain"
        />
      </div>

      <LandingInset className="relative z-10 pb-16 pt-24 min-[1440px]:pb-0 min-[1440px]:pt-[105px]">
        <div className="grid items-start gap-10 lg:grid-cols-2 min-[1440px]:gap-0">
          {/* Left: content */}
          <div className="max-w-[602px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-0.5 rounded-2xl border border-secondary bg-[#FBF2D6] px-2 py-1">
              <img
                src={figma.ionPlanet}
                alt=""
                className="size-4"
              />
              <span className="text-center text-[16px] leading-6 text-grey-80">
                GLOBAL ACCOUNTS
              </span>
            </div>

            <h1 className="mt-[52px] font-nohemi text-[40px] font-semibold leading-[48px] text-grey-90 md:text-[52px] md:leading-[60px] min-[1440px]:text-[64px] min-[1440px]:leading-[72px]">
              The next-gen account for professional
            </h1>

            <p className="mt-4 max-w-[583px] text-[18px] leading-7 text-grey-80 min-[1440px]:text-[20px] min-[1440px]:leading-7">
              Open global accounts to receive international payments instantly.
              No minimum deposits required
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center min-[1440px]:mt-12">
              <a
                href="#"
                className="inline-flex h-12 w-[190px] items-center justify-center rounded-lg bg-primary text-[18px] font-medium leading-6 text-white"
              >
                Get Yours Now
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-3 rounded-lg border border-grey-20 bg-white/60 px-2 text-[18px] font-medium leading-6 text-grey-90"
              >
                <img
                  src={figma.faMaskGroup}
                  alt=""
                  className="size-5"
                />
                Learn more about how foreign account work
              </a>
            </div>
          </div>

          {/* Right: hero illustration */}
          <div className="relative hidden min-[1440px]:block">
            <div className="absolute -right-[160px] top-[-33px] h-[776px] w-[518px]">
              <img
                src={figma.faHeroMan}
                alt="Professional with phone"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute right-[76px] top-[40px] h-[314px] w-[244px]">
              <img
                src={figma.faHeroSmallIllustration}
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>

          {/* Mobile hero image */}
          <div className="relative mx-auto h-[400px] w-full max-w-[400px] min-[1440px]:hidden">
            <img
              src={figma.faHeroMan}
              alt="Professional with phone"
              className="size-full rounded-2xl object-cover object-top"
            />
          </div>
        </div>
      </LandingInset>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GET PAID SEAMLESSLY — 3 FEATURE CARDS                              */
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
            <div className="pointer-events-none absolute -left-[148px] top-[161px] size-[475px]">
              <img src={figma.faStar2} alt="" className="size-full" />
            </div>
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Quick Transfers
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-white/90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Send and receive money in seconds with a seamless, secure payment
              experience designed to keep up with your pace
            </p>
            {/* Mini transfer UI illustration */}
            <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
              <div className="w-[263px] rounded-lg bg-white p-3 text-grey-100">
                <div className="flex items-center gap-2 text-[10px]">
                  <img src={figma.faMoneyWings} alt="" className="size-[18px]" />
                  <span className="font-medium">Send money through</span>
                </div>
                <div className="mt-2 border-t border-grey-10 pt-2">
                  {["Paybyleap Tag", "NGN Bank Account", "Global Bank Account", "Digital Wallet"].map((item) => (
                    <div key={item} className="mt-1.5 flex items-center gap-2 text-[10px] first:mt-0">
                      <div className="size-[18px] rounded bg-grey-10" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto mt-1 flex h-[45px] w-[263px] items-center rounded-lg border border-success bg-white px-5">
                <span className="text-[12px] font-medium text-grey-100">
                  Transfer Successfull!
                </span>
                <img
                  src={figma.faSealCheck}
                  alt=""
                  className="ml-auto size-8"
                />
              </div>
            </div>
          </article>

          {/* Card 2: Smooth Process */}
          <article className="relative h-[400px] overflow-hidden rounded-2xl border border-grey-10 bg-[#FBF2D6] p-5 min-[1440px]:h-[464px] min-[1440px]:p-5">
            <div className="pointer-events-none absolute left-[15px] top-[239px] size-[475px]">
              <img src={figma.faStar3} alt="" className="size-full" />
            </div>
            <div className="pointer-events-none absolute -left-[31px] top-[177px] size-[505px] -rotate-[26deg]">
              <img src={figma.faStar4} alt="" className="size-full" />
            </div>
            <h3 className="relative z-10 max-w-[219px] text-[20px] font-semibold leading-7 text-grey-90 min-[1440px]:text-[24px] min-[1440px]:leading-7">
              Smooth, Stress-Free Process
            </h3>
            <p className="relative z-10 mt-2 max-w-[324px] text-[14px] leading-5 text-grey-90 min-[1440px]:text-[16px] min-[1440px]:leading-6">
              Enjoy a streamlined experience with no complications, delays, or
              unnecessary steps.
            </p>
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
            {/* Crypto logos illustration */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
              <div className="relative h-[228px] w-[293px]">
                <img
                  src={figma.faVector284}
                  alt=""
                  className="size-full object-contain"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 mx-auto flex h-[169px] w-[305px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10">
                <div className="flex items-center gap-6">
                  <img src={figma.faImage26} alt="" className="h-[51px] w-[54px] object-contain" />
                  <div className="size-[47px] overflow-hidden rounded-full bg-white">
                    <img src={figma.faImage28} alt="" className="size-full object-cover" />
                  </div>
                  <img src={figma.faImage27} alt="" className="size-[46px] mix-blend-hard-light" />
                </div>
              </div>
            </div>
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
    <section className="relative overflow-hidden bg-[#FBF2D6] py-16 min-[1440px]:py-[99px]">
      <LandingInset>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] min-[1440px]:gap-16">
          {/* Left column: heading + pills */}
          <div>
            <h2 className="max-w-[605px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
              Get more from Paybyleap Foreign Account
            </h2>

            <div className="mt-8 flex max-w-[900px] flex-wrap gap-3 min-[1440px]:mt-[126px] min-[1440px]:gap-4">
              {featurePills.map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex h-[48px] items-center gap-3 rounded-3xl border-[1.5px] border-primary bg-off-white-2 px-5 min-[1440px]:h-[60px] min-[1440px]:gap-4 min-[1440px]:px-6"
                >
                  <img
                    src={figma.faStar1}
                    alt=""
                    className="size-5 shrink-0 min-[1440px]:size-6"
                  />
                  <span className="whitespace-nowrap text-[16px] font-medium leading-8 text-grey-90 min-[1440px]:text-[24px]">
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

          {/* Right: Hand holding phone */}
          <div className="relative hidden h-[843px] w-[500px] min-[1440px]:block">
            <img
              src={figma.faHandPhone}
              alt=""
              className="absolute -right-[160px] top-[126px] h-[843px] w-[639px] object-cover object-left"
            />
          </div>
        </div>
      </LandingInset>

      {/* Mobile illustration */}
      <div className="mt-8 flex justify-center min-[1440px]:hidden">
        <img
          src={figma.faHandPhone}
          alt=""
          className="h-[300px] w-auto object-contain sm:h-[400px]"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA SECTION                                                        */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-grey-100 py-16 min-[1440px]:py-0 min-[1440px]:h-[528px]">
      {/* Subtle grid overlay blocks */}
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
    <section className="relative overflow-hidden bg-[#FFF0E3] py-16 min-[1440px]:py-0 min-[1440px]:h-[918px]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-[208px] top-[340px] hidden h-[715px] w-[791px] min-[1440px]:block">
        <img
          src={figma.faVector262}
          alt=""
          className="size-full rotate-[115deg] object-contain opacity-30"
        />
      </div>
      <div className="pointer-events-none absolute right-[-100px] top-[299px] hidden h-[715px] w-[791px] min-[1440px]:block">
        <img
          src={figma.faVector262}
          alt=""
          className="size-full rotate-[115deg] object-contain opacity-30"
        />
      </div>

      <LandingInset className="relative z-10 min-[1440px]:pt-[97px]">
        <div className="grid items-start gap-10 lg:grid-cols-2 min-[1440px]:gap-16">
          {/* Left: Phone + feature cards */}
          <div className="relative">
            {/* Phone mockup */}
            <div className="relative mx-auto h-[500px] w-[350px] min-[1440px]:mx-0 min-[1440px]:h-[742px] min-[1440px]:w-[529px]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={figma.faPhoneMockup}
                  alt=""
                  className="h-[144%] w-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[83%] to-[#FFF0E3]" />
            </div>

            {/* Feature cards overlaying the phone area */}
            <div className="absolute left-0 top-[180px] z-10 hidden w-[610px] flex-col gap-4 min-[1440px]:flex">
              {transactionFeatures.map((f) => (
                <div
                  key={f.title}
                  className="flex h-[106px] items-center gap-4 overflow-hidden rounded-3xl border border-grey-30 bg-white px-6 shadow-[0px_4px_24px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1F2065] to-[#3E40CB]">
                    <img src={f.icon} alt="" className="size-9" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[20px] font-semibold leading-7 text-grey-90 min-[1440px]:text-[24px]">
                      {f.title}
                    </p>
                    <p className="mt-1 text-[14px] leading-6 text-grey-70 min-[1440px]:text-[16px]">
                      {f.desc}
                    </p>
                  </div>
                  <img
                    src={figma.faSealCheck}
                    alt=""
                    className="size-8 shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="min-[1440px]:pt-[98px]">
            <h2 className="max-w-[554px] font-nohemi text-[32px] font-semibold leading-[40px] text-grey-90 md:text-[40px] md:leading-[52px] min-[1440px]:text-[48px] min-[1440px]:leading-[64px]">
              Carry out Global Transactions with ease and safety measures
            </h2>
            <p className="mt-6 max-w-[458px] text-[18px] leading-7 text-grey-90 min-[1440px]:text-[20px] min-[1440px]:leading-7">
              Converting money is now very easy and fast with paybyleap
            </p>
          </div>
        </div>

        {/* Mobile feature cards */}
        <div className="mt-8 flex flex-col gap-4 min-[1440px]:hidden">
          {transactionFeatures.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-4 rounded-2xl border border-grey-30 bg-white p-4 shadow-card"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1F2065] to-[#3E40CB]">
                <img src={f.icon} alt="" className="size-7" />
              </div>
              <div className="flex-1">
                <p className="text-[18px] font-semibold leading-6 text-grey-90">
                  {f.title}
                </p>
                <p className="mt-0.5 text-[14px] leading-5 text-grey-70">
                  {f.desc}
                </p>
              </div>
              <img
                src={figma.faSealCheck}
                alt=""
                className="size-7 shrink-0"
              />
            </div>
          ))}
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
      {/* Header */}
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

      {/* Quote */}
      <p className="mt-6 text-[16px] leading-7 text-grey-90 min-[1440px]:text-[20px] min-[1440px]:leading-7">
        {t.quote}
      </p>

      {/* Quote decoration circle */}
      <img
        src={figma.faQuoteMark}
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

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 md:px-8 min-[1440px]:mt-[62px] min-[1440px]:gap-8 min-[1440px]:px-[112px]"
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      {/* Dots */}
      <div className="mt-10 flex items-center justify-center gap-1.5 min-[1440px]:mt-14">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-2xl transition-all ${
              i === active
                ? "w-20 bg-[#EFD8D8]"
                : "w-7 bg-grey-30"
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
