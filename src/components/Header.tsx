import { useState } from "react";
import { figma } from "../assets/figma";
import { LandingInset } from "./LandingInset";
import { Button } from "./Button";

const navLinks = ["Products", "Company", "Support", "Legal"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-primary/10 bg-[#FFF0E3]">
        <LandingInset>
          <div className="mx-auto flex max-w-[1121px] flex-wrap items-center justify-between gap-x-2 gap-y-2 py-2.5 xl:py-[15px]">
            <div className="flex max-w-[calc(100%-4rem)] flex-wrap items-center gap-x-2 gap-y-2 text-[12px] font-medium leading-4 xl:gap-x-[21px] xl:text-[16px] xl:leading-6">
              <a
                href="#individual"
                className="border-b-2 border-primary px-1 py-0.5 font-medium text-grey-100 xl:border-b-[3px] xl:py-1"
              >
                For Individual
              </a>
              <span className="flex items-center gap-0.5 text-grey-70">
                For Business
                <span className="rounded-2xl bg-[#fbe6b0] px-[15px] py-[9px] text-[5px] font-normal leading-tight text-grey-100 xl:bg-secondary">
                  Coming Soon
                </span>
              </span>
              <span className="flex items-center gap-0.5 text-grey-70">
                For Banks &amp; Fintechs
                <span className="rounded-2xl bg-[#fbe6b0] px-[15px] py-[9px] text-[5px] font-normal leading-tight text-grey-100 xl:bg-secondary">
                  Coming Soon
                </span>
              </span>
            </div>
            <button
              type="button"
              className="flex shrink-0 items-center gap-0.5 text-[12px] font-medium leading-4 text-grey-100 xl:text-[18px] xl:leading-7"
            >
              <img
                src={figma.globeMobile}
                alt=""
                className="size-3.5 object-cover xl:hidden"
              />
              <img
                src={figma.globeGridEarth}
                alt=""
                className="hidden h-6 w-6 object-cover xl:block"
              />
              <span className="w-[18px] text-center xl:w-[27px]">EN</span>
              <img
                src={figma.riArrowUpMobile}
                alt=""
                className="size-3.5 rotate-180 xl:hidden"
              />
              <img
                src={figma.riArrowUp}
                alt=""
                className="hidden h-5 w-5 rotate-180 xl:block"
              />
            </button>
          </div>
        </LandingInset>
      </div>

      <div className="border-b border-grey-10 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.05)]">
        <LandingInset>
          <div className="flex items-center justify-between py-4 lg:mx-auto lg:w-full lg:max-w-[1122px] lg:justify-center lg:gap-[116px] lg:py-6">
            <a href="#" className="shrink-0">
              <img
                src={figma.mobileLogo}
                alt="PayByLeap"
                className="h-6 w-[99px] object-contain object-left lg:hidden"
              />
              <img
                src={figma.logo}
                alt="PayByLeap"
                className="hidden h-10 w-[152px] object-contain object-left lg:block"
              />
            </a>

            <button
              type="button"
              className="relative z-[61] flex size-6 shrink-0 items-center justify-center lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <img src={figma.menuIcon} alt="" className="size-6" />
            </button>

            <nav className="hidden lg:flex lg:w-[435px] lg:flex-none lg:justify-center lg:gap-2.5">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="flex h-10 items-center justify-center p-2.5 text-[18px] font-medium leading-6 text-grey-90 hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Button
                variant="outline"
                className="h-12 w-[110px] border-primary !bg-white px-2 text-[18px] font-medium !text-grey-90 hover:!bg-grey-10/80 hover:!text-grey-90"
              >
                Book a call
              </Button>
              <Button variant="primaryDark" className="w-[190px]">
                Download the app
              </Button>
            </div>
          </div>
        </LandingInset>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-6 bg-white px-6 py-8 shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-[18px] font-medium text-grey-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <Button
              variant="outline"
              className="w-full border-primary !bg-white text-[18px] font-medium !text-grey-90 hover:!bg-grey-10/80 hover:!text-grey-90"
            >
              Book a call
            </Button>
            <Button variant="primaryDark" className="w-full">
              Download the app
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
