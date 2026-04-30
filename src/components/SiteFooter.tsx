import { type ReactNode } from "react";
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
  { label: "Instagram", href: "https://www.instagram.com/paybyleap/", icon: "/images/fe_instagram.svg" },
  { label: "Facebook", href: "#", icon: "/images/fe_fb.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/paybyleap/", icon: "/images/fe_linkedin.svg" },
  { label: "YouTube", href: "#", icon: figma.socialYoutube },
  { label: "X (Twitter)", href: "https://x.com/paybyleap", icon: figma.socialX },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[16px] font-semibold leading-6 min-[1440px]:text-[20px]">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-[14px] leading-6 text-white/80 min-[1440px]:mt-6 min-[1440px]:space-y-3 min-[1440px]:text-[18px] min-[1440px]:leading-7">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const defaultHeading = (
  <>
    Experience Seamless{" "}
    <span className="text-secondary">
      <span className="lg:hidden">Global Payment</span>
      <span className="hidden lg:inline">Global Payments</span>
    </span>{" "}
    Today
  </>
);

interface SiteFooterProps {
  heading?: ReactNode;
}

export function SiteFooter({ heading = defaultHeading }: SiteFooterProps) {
  return (
    <footer className="bg-grey-100 text-white">
      <LandingInset className="pb-10 pt-12 md:pb-16 md:pt-16 lg:pb-16 lg:pt-20 min-[1440px]:pb-[60px] min-[1440px]:pt-[80px]">
        {/* Heading */}
        <h2 className="mx-auto max-w-[330px] text-center font-nohemi text-[32px] font-semibold leading-10 text-white md:max-w-[800px] md:text-[40px] md:leading-[48px] min-[1440px]:max-w-[764px] min-[1440px]:text-[56px] min-[1440px]:leading-[72px]">
          {heading}
        </h2>

        {/* Store buttons */}
        <div className="mt-10 flex flex-col items-stretch gap-3 md:mt-12 md:flex-row md:flex-wrap md:justify-center md:gap-4 min-[1440px]:mt-16">
          <a
            href="#"
            className="inline-flex h-16 w-full items-center justify-center gap-1 rounded-lg bg-white px-4 text-grey-100 md:w-[201px]"
          >
            <img
              src="/images/blackapplelogo.svg"
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
            className="inline-flex h-16 w-full items-center justify-center gap-2 rounded-lg bg-white px-4 text-grey-100 md:w-[201px]"
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

        {/* Divider */}
        <div className="mx-auto mt-16 max-w-[1300px] border-t border-white/20 min-[1440px]:mt-24" />

        {/* Link columns */}
        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-2 gap-10 gap-y-8 lg:grid-cols-4 min-[1440px]:mt-16 min-[1440px]:gap-6">
          <LinkColumn title="QUICK LINKS" links={quickLinks} />
          <LinkColumn title="COMPANY" links={companyLinks} />
          <LinkColumn title="SUPPORT" links={supportLinks} />
          <LinkColumn title="LEGAL" links={legalLinks} />
        </div>

        {/* Our Offices */}
        <p className="mt-14 text-[18px] font-medium min-[1440px]:mt-[88px] min-[1440px]:text-[20px]">
          Our Offices:
        </p>
        <div className="mt-4 grid gap-8 md:grid-cols-2 min-[1440px]:mt-6 min-[1440px]:gap-x-14">
          <div>
            <p className="text-[16px] font-medium leading-6 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              United States
            </p>
            <p className="mt-1 text-[14px] leading-6 text-white/60 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              8 The Green, Ste A, Dover, Delaware, 19901 United States
            </p>
          </div>
          <div>
            <p className="text-[16px] font-medium leading-6 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              Lagos State, Nigeria
            </p>
            <p className="mt-1 text-[14px] leading-6 text-white/60 min-[1440px]:text-[18px] min-[1440px]:leading-7">
              Block 59, Plot 12B Kusenla Rd, Ikate, Lekki Lagos. 42 Olowu St,
              Opebi 101233, Ikeja, Lagos, Nigeria.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-14 max-w-[1300px] border-t border-white/20 min-[1440px]:mt-16" />

        {/* Social bar */}
        <div className="mx-auto mt-10 max-w-[1196px] overflow-x-auto rounded-2xl border border-white/30 md:overflow-visible min-[1440px]:mt-14">
          <div className="flex min-w-max items-stretch md:min-w-0 md:w-full">
            {social.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                className={`flex flex-1 items-center justify-center gap-2.5 px-4 py-3 text-[16px] leading-6 transition-colors hover:bg-white/5 md:px-6 md:py-4 min-[1440px]:text-[18px] min-[1440px]:leading-7 ${
                  i > 0 ? "border-l border-white/30" : ""
                }`}
              >
                <span className="whitespace-nowrap">{s.label}</span>
                <img
                  src={s.icon}
                  alt=""
                  className="size-5 shrink-0 object-contain min-[1440px]:size-6"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-[14px] leading-5 text-white/50 min-[1440px]:mt-12">
          © {new Date().getFullYear()} PayByLeap. All rights reserved.
        </p>
      </LandingInset>
    </footer>
  );
}
