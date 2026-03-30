import { figma } from "../assets/figma";
import { Button } from "./Button";

const navLinks = ["Products", "Company", "Support", "Legal"];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-primary/10 bg-[#FFF0E3]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-5 md:text-body-4">
            <a
              href="#individual"
              className="border-b-[3px] border-primary font-medium text-grey-100"
            >
              For Individual
            </a>
            <span className="flex items-center gap-1.5 text-grey-70">
              For Business
              <span className="rounded-2xl bg-secondary px-3 py-1 text-[8px] font-normal leading-tight text-grey-100">
                Coming Soon
              </span>
            </span>
            <span className="flex items-center gap-1.5 text-grey-70">
              For Banks &amp; Fintechs
              <span className="rounded-2xl bg-secondary px-3 py-1 text-[8px] font-normal leading-tight text-grey-100">
                Coming Soon
              </span>
            </span>
          </div>
          <button
            type="button"
            className="flex items-center gap-0.5 text-[18px] font-medium leading-7 text-grey-100"
          >
            <img
              src={figma.globeGridEarth}
              alt=""
              className="h-6 w-6 object-cover"
            />
            <span className="w-[27px] text-center">EN</span>
            <img
              src={figma.riArrowUp}
              alt=""
              className="h-5 w-5 rotate-180"
            />
          </button>
        </div>
      </div>

      <div className="border-b border-grey-10 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.05)]">
        <div className="mx-auto flex max-w-[1122px] flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
          <a href="#" className="shrink-0">
            <img
              src={figma.logo}
              alt="PayByLeap"
              className="h-10 w-[152px] object-contain object-left"
            />
          </a>

          <nav className="hidden flex-1 justify-center gap-2.5 lg:flex">
            {navLinks.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="px-2.5 py-2 text-[18px] font-medium leading-6 text-grey-100 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-12 w-[110px] border-primary px-2 text-[18px] font-medium text-grey-100 sm:inline-flex"
            >
              Book a call
            </Button>
            <Button className="h-12 w-[190px] bg-primary-dark px-2 text-[18px] font-medium">
              Download the app
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
