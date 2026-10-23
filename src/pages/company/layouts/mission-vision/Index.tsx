import { figma } from "@/data/images/Index";
import { LandingInset } from "@/components/landing-inset/Index";
import { useSectionReveal } from "../../reveal";

// Figma 4669:12654. Cards are 364x481; art sits at its Figma offset, with x
// and width as a share of the card so it scales on narrower cards.
const cards = [
  {
    title: "Seamless Cross-border Payments",
    titleWidth: "max-w-[271px]",
    desc: "Send money across borders quickly and reliably with minimal delays.",
    card: "bg-[#1F2065] text-white",
    art: figma.companyBenefitGlobe,
    artClass: "left-[16.2%] top-[144px] w-[117%]",
  },
  {
    title: "Mobile-first Platform",
    titleWidth: "max-w-[195px]",
    desc: "Mobile-friendly design ensures seamless access and ease of use on any device.",
    card: "border border-grey-10 bg-[#EDECED] text-grey-90",
    art: figma.companyAppPhone,
    artClass: "left-[15.9%] top-[184px] w-[68.1%]",
  },
  {
    title: "Unified Financial Ecosystem",
    titleWidth: "max-w-[219px]",
    desc: "Have all your currencies in one place, easy to carry out any transactions.",
    card: "bg-[#FBE6B0] text-grey-90",
    art: figma.companyBenefitUnified,
    artClass: "left-[3%] top-[194px] w-[93.7%]",
  },
  {
    title: "Global Accessibility",
    titleWidth: "max-w-[219px]",
    desc: "Stay informed and in control with real-time tracking and notifications.",
    card: "bg-primary text-white",
    art: figma.companyBenefitAccess,
    artClass: "left-[4.1%] top-[147px] w-[91.8%]",
  },
];

const statements = [
  {
    label: "OUR MISSION",
    text: "To simplify and expedite financial transactions across borders, making global business and international education payments more accessible.",
    width: "xl:ml-[30px] xl:w-[382px]",
    divider: "",
  },
  {
    label: "OUR VISION",
    text: "To create a world where money moves as freely as ideas, enabling individuals, students, and businesses to transact, grow, and thrive across borders effortlessly.",
    width: "xl:ml-[19px] xl:w-[408px]",
    divider: "xl:ml-[25px]",
  },
];

function Divider({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`mt-px hidden h-[175px] w-px shrink-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#999999_63%)] xl:block ${className}`}
    />
  );
}

export function ValuePropositionSection() {
  const { ref, revealClass } = useSectionReveal<HTMLElement>(0.08);

  return (
    <section ref={ref} className={`relative overflow-hidden bg-[#1D1212] pt-16 xl:pt-[113px]${revealClass}`}>
      <LandingInset>
        <div className="xl:grid xl:grid-cols-[367px_752px]">
          <h2 className="co-rise max-w-[431px] font-nohemi text-[32px] font-semibold leading-10 text-white xl:w-[431px] xl:text-[48px] xl:leading-[58px]">
            Benefits/Value proposition of Paybyleap
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-[125px] xl:grid-cols-[364px_364px] xl:gap-x-6 xl:gap-y-8">
            {cards.map((c, i) => (
              <article
                key={c.title}
                className={`co-pop group relative h-[481px] overflow-hidden rounded-2xl px-5 pt-8 ${c.card}`}
                style={{ ["--d" as string]: `${120 + i * 110}ms` }}
              >
                <h3 className={`relative z-10 text-heading-6 ${c.titleWidth}`}>{c.title}</h3>
                <p className="relative z-10 mt-4 max-w-[324px] text-body-4">{c.desc}</p>
                <img
                  loading="lazy"
                  decoding="async"
                  src={c.art}
                  alt=""
                  className={`absolute max-w-none transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] ${c.artClass}`}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="co-rise relative mt-16 rounded-[32px] border border-white bg-grey-80 p-6 md:p-10 xl:-ml-px xl:mt-[97px] xl:h-[974px] xl:w-[1124px] xl:rounded-[48px] xl:p-0">
          <div className="flex flex-col gap-8 xl:flex-row xl:gap-0 xl:pl-[65px] xl:pt-[82px]">
            <div className="co-rise xl:w-[171px]" style={{ ["--d" as string]: "150ms" }}>
              <p className="text-[18px] font-semibold leading-6 text-secondary">FOUNDED</p>
              <p className="mt-6 text-[24px] leading-10 text-white">2026</p>
            </div>
            {statements.map((s, i) => (
              <div key={s.label} className="flex">
                <Divider className={s.divider} />
                <div
                  className={`co-rise ${s.width}`}
                  style={{ ["--d" as string]: `${250 + i * 100}ms` }}
                >
                  <p className="text-[18px] font-semibold leading-6 text-secondary">{s.label}</p>
                  <p className="mt-6 text-[20px] leading-8 text-white xl:text-[24px]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-10 xl:mt-0">
            <div className="co-rise xl:absolute xl:left-[41px] xl:top-[458px] xl:w-[537px]" style={{ ["--d" as string]: "300ms" }}>
              <h3 className="font-nohemi text-[28px] font-semibold leading-10 text-white xl:text-[36px] xl:leading-[48px]">
                Why Paybyleap Exists
              </h3>
              <p className="mt-6 text-[20px] leading-8 text-white xl:mt-[37px] xl:text-[24px]">
                People and businesses are no longer limited by geography, yet
                financial systems remain fragmented, slow, and expensive.
              </p>
            </div>
            <div
              className="co-pop aspect-[443/545] w-full overflow-hidden rounded-3xl bg-white md:w-[443px] xl:absolute xl:left-[613px] xl:top-[381px]"
              style={{ ["--d" as string]: "380ms" }}
            >
              <img
                loading="lazy"
                decoding="async"
                src={figma.companyWhyPhoto}
                alt="Two smiling PayByLeap users"
                className="size-full object-cover object-right transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </LandingInset>

      <img
        loading="lazy"
        decoding="async"
        src={figma.pageDivider}
        alt=""
        aria-hidden
        className="co-fade pointer-events-none mt-16 aspect-[1440/133] mix-blend-color-dodge w-full xl:mx-auto xl:mt-[98px] xl:w-[1440px]"
      />
    </section>
  );
}
