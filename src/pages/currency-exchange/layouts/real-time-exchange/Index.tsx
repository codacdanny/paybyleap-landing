import { useEffect, useRef, useState } from "react";
import { LandingInset } from "@/components/landing-inset/Index";
import { figma } from "@/data/images/Index";

type Currency = { code: string; name: string; flag: string };

const CURRENCIES: Currency[] = [
  { code: "USD", name: "United States Dollar", flag: figma.flagUs },
  { code: "EUR", name: "Euro", flag: figma.euFlag },
  { code: "GBP", name: "British Pound", flag: figma.flagUk },
  { code: "CAD", name: "Canadian Dollar", flag: figma.flagCa },
  { code: "NGN", name: "Nigerian Naira", flag: figma.flagNg },
];

const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.36,
  NGN: 1550,
};

function currencyOf(code: string): Currency {
  return CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
}

function sanitizeAmount(value: string): string {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const parts = cleaned.split(".");
  return parts.length <= 1 ? cleaned : `${parts[0]}.${parts.slice(1).join("")}`;
}

function convert(
  amount: string,
  from: string,
  to: string,
  rates: Record<string, number>,
): number | null {
  const value = parseFloat(amount);
  if (!Number.isFinite(value)) return null;
  const rateFrom = rates[from];
  const rateTo = rates[to];
  if (!rateFrom || !rateTo) return null;
  return value * (rateTo / rateFrom);
}

function formatAmount(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function ExchangeField({
  currency,
  caption,
  value,
  isOpen,
  onToggle,
  onSelect,
  onAmountChange,
}: {
  currency: Currency;
  caption: string;
  value: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (code: string) => void;
  onAmountChange: (value: string) => void;
}) {
  return (
    <div className="relative flex w-full flex-1 items-center justify-between rounded-[24px] border border-grey-20 bg-less-white p-5 lg:h-[96px] lg:w-[453px] lg:p-[30px]">
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="flex items-center gap-[12px] rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <img loading="lazy" decoding="async"
            src={currency.flag}
            alt={`${currency.name} flag`}
            className="size-[32px] rounded-full object-cover"
          />
          <span className="font-spartan text-[18px] font-medium leading-none text-grey-90">
            {currency.code}
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className={`size-5 text-grey-100 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path
              d="m5 7.5 5 5 5-5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            role="listbox"
            className="absolute left-0 top-full z-50 mt-3 w-[240px] rounded-2xl border border-grey-10 bg-white p-2 shadow-card"
          >
            {CURRENCIES.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.code === currency.code}
                  onClick={() => onSelect(c.code)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#FFF3F3] ${
                    c.code === currency.code ? "bg-[#FFF3F3]" : ""
                  }`}
                >
                  <img loading="lazy" decoding="async"
                    src={c.flag}
                    alt=""
                    className="size-[28px] rounded-full object-cover"
                    aria-hidden
                  />
                  <span className="flex flex-col">
                    <span className="font-spartan text-[15px] font-semibold leading-5 text-grey-90">
                      {c.code}
                    </span>
                    <span className="text-[12px] leading-4 text-grey-60">
                      {c.name}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col items-end">
        <p className="text-[12px] font-normal leading-none text-grey-100">
          {caption}
        </p>
        <input
          type="text"
          inputMode="decimal"
          value={value}
          placeholder="00.00"
          onChange={(e) => onAmountChange(e.target.value)}
          aria-label={caption}
          className="mt-[9px] w-[150px] bg-transparent py-2 text-right font-spartan text-[24px] font-semibold leading-none tracking-[-0.02em] text-grey-90 caret-primary outline-none placeholder:text-grey-90"
        />
      </div>
    </div>
  );
}

export function CurrencyConverterSection() {
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
  const [fromCode, setFromCode] = useState("USD");
  const [toCode, setToCode] = useState("NGN");
  const [amount, setAmount] = useState("100");
  const [direction, setDirection] = useState<"from" | "to">("from");
  const [openSelect, setOpenSelect] = useState<"from" | "to" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data: { rates?: Record<string, number> }) => {
        if (active && data?.rates) setRates(data.rates);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpenSelect(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeCode = direction === "from" ? fromCode : toCode;
  const passiveCode = direction === "from" ? toCode : fromCode;
  const convertedNum =
    amount === "" ? null : convert(amount, activeCode, passiveCode, rates);
  const converted = convertedNum === null ? "" : formatAmount(convertedNum);

  const fromValue = direction === "from" ? amount : converted;
  const toValue = direction === "to" ? amount : converted;

  function handleFromChange(value: string) {
    setDirection("from");
    setAmount(sanitizeAmount(value));
  }

  function handleToChange(value: string) {
    setDirection("to");
    setAmount(sanitizeAmount(value));
  }

  function selectCurrency(field: "from" | "to", code: string) {
    if (field === "from") {
      if (code === toCode) setToCode(fromCode);
      setFromCode(code);
    } else {
      if (code === fromCode) setFromCode(toCode);
      setToCode(code);
    }
    setOpenSelect(null);
  }

  function swap() {
    setFromCode(toCode);
    setToCode(fromCode);
    setDirection((d) => (d === "from" ? "to" : "from"));
    setOpenSelect(null);
  }

  return (
    <div id="real-time-exchange" className="relative z-20 mt-0 lg:-mt-[176px]">
      <LandingInset>
        <div
          ref={cardRef}
          className="w-full max-w-[1120px] rounded-[24px] border border-grey-10 bg-white p-6 pb-10 shadow-[0_4px_18px_rgba(154,0,0,0.12)] sm:p-8 lg:p-[48px] lg:pb-[76px]"
        >
          <h2 className="font-spartan text-[26px] font-semibold leading-none text-grey-90 sm:text-[32px]">
            Real-Time Exchange
          </h2>
          <p className="mt-[21px] max-w-[850px] text-[16px] font-normal leading-[1.55] tracking-[-0.01em] text-grey-80 sm:text-[18px] lg:text-[24px] 2xl:mt-[26px] 2xl:max-w-[1050px] 2xl:text-[29px]">
            Paybyleap delivers real-time competitive exchange rates with no
            hidden fees, ensuring transparent and reliable global currency
            conversion.
          </p>

          <div className="mt-[35px] flex flex-col items-center gap-[28px] lg:flex-row">
            <ExchangeField
              currency={currencyOf(fromCode)}
              caption="Amount to swap"
              value={fromValue}
              isOpen={openSelect === "from"}
              onToggle={() =>
                setOpenSelect((p) => (p === "from" ? null : "from"))
              }
              onSelect={(code) => selectCurrency("from", code)}
              onAmountChange={handleFromChange}
            />
            <button
              type="button"
              onClick={swap}
              aria-label="Swap currencies"
              className="flex size-[37px] shrink-0 items-center justify-center rounded-full bg-white text-grey-100 shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <img loading="lazy" decoding="async"
                src={figma.exhangeIcon}
                alt=""
                className="h-[15px] w-[14px]"
                aria-hidden
              />
            </button>
            <ExchangeField
              currency={currencyOf(toCode)}
              caption="Amount to receive"
              value={toValue}
              isOpen={openSelect === "to"}
              onToggle={() => setOpenSelect((p) => (p === "to" ? null : "to"))}
              onSelect={(code) => selectCurrency("to", code)}
              onAmountChange={handleToChange}
            />
          </div>
        </div>
      </LandingInset>
    </div>
  );
}
