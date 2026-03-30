import { figma } from "../assets/figma";

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
      <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-20 lg:px-8">
        <h2 className="mx-auto max-w-[800px] text-center text-heading-3 text-white md:text-[56px] md:leading-[72px]">
          Experience Seamless{" "}
          <span className="text-secondary">Global Payments</span> Today
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex h-16 min-w-[201px] items-center justify-center gap-1 rounded-lg bg-white px-4 text-grey-100"
          >
            <img
              src={figma.footerAppleWhite}
              alt=""
              className="h-10 w-10 object-contain"
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
            className="inline-flex h-16 min-w-[201px] items-center justify-center gap-2 rounded-lg bg-white px-4 text-grey-100"
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

        <div className="relative mx-auto mt-16 max-w-[1300px]">
          <img
            src={figma.footerDividerLine}
            alt=""
            className="h-px w-full opacity-60"
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-[1100px] gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[20px] font-semibold leading-6">QUICK LINKS</p>
            <ul className="mt-6 space-y-3 text-[18px] leading-7 text-white/95">
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
            <p className="text-[20px] font-semibold leading-6">COMPANY</p>
            <ul className="mt-6 space-y-3 text-[18px] leading-7 text-white/95">
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
            <p className="text-[20px] font-semibold leading-6">SUPPORT</p>
            <ul className="mt-6 space-y-3 text-[18px] leading-7 text-white/95">
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
            <p className="text-[20px] font-semibold leading-6">LEGAL</p>
            <ul className="mt-6 space-y-3 text-[18px] leading-7 text-white/95">
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

        <p className="mt-16 text-[20px] font-medium">Our Offices:</p>
        <div className="mt-6 grid gap-10 gap-x-14 md:grid-cols-2">
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

        <div className="relative mx-auto mt-16 max-w-[1300px]">
          <img
            src={figma.footerDividerLine}
            alt=""
            className="h-px w-full opacity-60"
          />
        </div>

        <div className="mx-auto mt-10 max-w-[1200px] overflow-x-auto rounded-2xl border border-white/50 md:overflow-visible">
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
                <img src={s.icon} alt="" className="h-6 w-6 shrink-0 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-body-5 text-white/60">
          © {new Date().getFullYear()} PayByLeap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
