import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";

const quickLinks = [
  { label: "Personal", href: "#" },
  { label: "Business", href: "#" },
  { label: "Bank & Fintech", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "The Leap Community", href: "#" },
];

const supportLinks = [
  { label: "Video Tutorials", href: "#" },
  { label: "Help Centers", href: "#" },
  { label: "Contact Us", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Acceptance Use of Policy", href: "#" },
  { label: "Global Card Usage Terms", href: "#" },
];

const social = [
  { label: "Instagram", href: "#", icon: figma.socialInstagram },
  { label: "Facebook", href: "#", icon: figma.socialFacebook },
  { label: "LinkedIn", href: "#", icon: figma.socialLinkedin },
  { label: "YouTube", href: "#", icon: figma.socialYoutube },
  { label: "X (Twitter)", href: "#", icon: figma.socialX },
];

export function SiteFooter() {
  return (
    <footer className="bg-grey-100 text-white">
      <LandingInset className="pb-12 pt-12 md:pb-16 md:pt-16 lg:pb-24 lg:pt-20">
        <h2 className="mx-auto max-w-[330px] text-center text-[32px] font-semibold leading-10 text-white min-[1440px]:max-w-[764px] min-[1440px]:text-[56px] min-[1440px]:leading-[72px] md:max-w-[800px] md:text-[40px] md:leading-[48px]">
          Experience Seamless{" "}
          <span className="text-secondary">
            <span className="lg:hidden">Global Payment</span>
            <span className="hidden lg:inline">Global Payments</span>
          </span>{" "}
          Today
        </h2>

        <div className="mt-10 flex flex-col items-stretch gap-3 min-[1440px]:mt-16 min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:justify-center min-[1440px]:gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-4">
          <a
            href="#"
            className="inline-flex h-16 min-h-[64px] w-full min-w-0 items-center justify-center gap-1 rounded-lg bg-white px-4 text-grey-100 min-[1440px]:min-w-[201px] min-[1440px]:w-auto md:min-w-[201px] md:w-auto"
          >
            <img
              src={figma.footerAppleWhite}
              alt=""
              className="size-10 object-contain"
            />
            <span className="text-left leading-tight">
              <span className="block text-[14px] font-normal text-grey-80">
                Download app on
              </span>
              <span className="text-[16px] font-semibold">Apple Store</span>
            </span>
          </a>
          <a
            href="#"
            className="inline-flex h-16 min-h-[64px] w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-white px-4 text-grey-100 min-[1440px]:min-w-[201px] min-[1440px]:w-auto md:min-w-[201px] md:w-auto"
          >
            <img
              src={figma.footerGooglePlayWhite}
              alt=""
              className="h-[34px] w-[37px] object-cover"
            />
            <span className="text-left leading-tight">
              <span className="block text-[14px] font-normal text-grey-80">
                Get app on
              </span>
              <span className="text-[16px] font-semibold">
                Google Play Store
              </span>
            </span>
          </a>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1300px] min-[1440px]:mt-24">
          <img
            src={figma.footerDividerLine}
            alt=""
            className="h-px w-full opacity-60"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 min-[1440px]:mt-16 min-[1440px]:gap-6">
          <div>
            <p className="text-[18px] font-semibold leading-6 min-[1440px]:text-[20px]">
              QUICK LINKS
            </p>
            <ul className="mt-4 space-y-2 text-[16px] leading-7 text-white/95 min-[1440px]:mt-6 min-[1440px]:space-y-3 min-[1440px]:text-[18px]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-secondary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-semibold leading-6 min-[1440px]:text-[20px]">
              COMPANY
            </p>
            <ul className="mt-4 space-y-2 text-[16px] leading-7 text-white/95 min-[1440px]:mt-6 min-[1440px]:space-y-3 min-[1440px]:text-[18px]">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-secondary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-semibold leading-6 min-[1440px]:text-[20px]">
              SUPPORT
            </p>
            <ul className="mt-4 space-y-2 text-[16px] leading-7 text-white/95 min-[1440px]:mt-6 min-[1440px]:space-y-3 min-[1440px]:text-[18px]">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-secondary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-semibold leading-6 min-[1440px]:text-[20px]">
              LEGAL
            </p>
            <ul className="mt-4 space-y-2 text-[16px] leading-7 text-white/95 min-[1440px]:mt-6 min-[1440px]:space-y-3 min-[1440px]:text-[18px]">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-secondary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-[20px] font-medium min-[1440px]:mt-[88px]">
          Our Offices:
        </p>
        <div className="mt-6 grid gap-10 gap-x-14 md:grid-cols-2 min-[1440px]:mt-6 min-[1440px]:gap-x-14">
          <div>
            <p className="text-[18px] leading-7">United States</p>
            <p className="mt-1 text-[18px] leading-7 text-white/80">
              8 The Green, Ste A, Dover, Delaware, 19901 United States
            </p>
          </div>
          <div>
            <p className="text-[18px] leading-7">Lagos State, Nigeria</p>
            <p className="mt-1 text-[18px] leading-7 text-white/80">
              Block 59, Plot 12B Kusenla Rd, Ikate, Lekki Lagos. 42 Olowu St,
              Opebi 101233, Ikeja, Lagos, Nigeria.
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1300px] min-[1440px]:mt-16">
          <img
            src={figma.footerDividerLine}
            alt=""
            className="h-px w-full opacity-60"
          />
        </div>

        <div className="mx-auto mt-10 max-w-[1196px] overflow-x-auto rounded-2xl border border-white/50 md:overflow-visible min-[1440px]:mt-14">
          <div className="flex min-w-max items-stretch md:min-w-0 md:w-full">
            {social.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                className={`flex flex-1 items-center justify-center gap-2.5 px-4 py-3 text-[18px] leading-7 transition hover:bg-white/5 md:px-6 md:py-4 ${
                  i > 0 ? "border-l border-white/50" : ""
                }`}
              >
                <span className="whitespace-nowrap">{s.label}</span>
                <img
                  src={s.icon}
                  alt=""
                  className="size-6 shrink-0 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-body-5 text-white/60">
          © {new Date().getFullYear()} PayByLeap. All rights reserved.
        </p>
      </LandingInset>
    </footer>
  );
}
