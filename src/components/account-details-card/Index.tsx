import React, { useState, useEffect, useCallback } from "react";
import { CARD_IMG } from "./assets";

// ————————————————————————————————————————————————————————————————
// <AccountDetailsCard />
// The white "foreign account details" panel: flags auto-cycle through
// USD / CAD / EUR, the detail rows re-stagger in on every switch, the
// skeleton bars shimmer, and each copy button gives feedback.
//
// The card fills the width of whatever wraps it — positioning and
// sizing belong to the parent, so the same card works inside the
// products globe card and in the foreign-accounts hero.
// ————————————————————————————————————————————————————————————————

const MAROON = "#9B1414";
const INK = "#141110";
const EASE = "cubic-bezier(.16,.8,.26,1)";

export type AccountRegion = "USD" | "CAD" | "EUR";
type FlagKey = "flagUS" | "flagCA" | "flagEU";

interface RegionDef {
  flag: FlagKey;
  rows: [string, number][]; // [label, skeleton-bar width %]
}

const REGIONS: Record<AccountRegion, RegionDef> = {
  USD: {
    flag: "flagUS",
    rows: [
      ["Account Name", 62],
      ["ACH Routing Number", 44],
      ["Account Number", 52],
      ["Bank Name", 58],
      ["Address", 72],
    ],
  },
  CAD: {
    flag: "flagCA",
    rows: [
      ["Account Name", 62],
      ["Institution Number", 38],
      ["Transit Number", 46],
      ["Bank Name", 58],
      ["Address", 72],
    ],
  },
  EUR: {
    flag: "flagEU",
    rows: [
      ["Account Name", 62],
      ["IBAN", 74],
      ["SWIFT/BIC Code", 48],
      ["Bank Name", 58],
      ["Address", 72],
    ],
  },
};

const REGION_KEYS = Object.keys(REGIONS) as AccountRegion[];

export interface AccountDetailsCardProps {
  /** auto-cycle the country tabs (default true) */
  autoPlay?: boolean;
  /** which region is shown first (default "USD") */
  defaultRegion?: AccountRegion;
  /** lift the card on hover (default true) */
  hoverLift?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AccountDetailsCard({
  autoPlay = true,
  defaultRegion = "USD",
  hoverLift = true,
  className = "",
  style = {},
}: AccountDetailsCardProps) {
  const [region, setRegion] = useState<AccountRegion>(defaultRegion);
  const [manualUntil, setManualUntil] = useState(0);
  const [copied, setCopied] = useState(-1);

  useEffect(() => {
    if (!autoPlay) return;
    const idx = REGION_KEYS.indexOf(region);
    const wait = Math.max(4200, manualUntil - Date.now());
    const t = setTimeout(
      () => setRegion(REGION_KEYS[(idx + 1) % REGION_KEYS.length]),
      wait,
    );
    return () => clearTimeout(t);
  }, [region, manualUntil, autoPlay]);

  const pick = useCallback((r: AccountRegion) => {
    setRegion(r);
    setManualUntil(Date.now() + 9000);
  }, []);

  const copy = useCallback((i: number) => {
    setCopied(i);
    setTimeout(() => setCopied((c) => (c === i ? -1 : c)), 1300);
  }, []);

  return (
    <div
      className={`adc-panel${hoverLift ? " adc-panel-lift" : ""} ${className}`}
      style={{ ...styles.panel, ...style }}
    >
      <style>{css}</style>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {REGION_KEYS.map((r) => (
          <button
            key={r}
            onClick={() => pick(r)}
            aria-label={`${r} account details`}
            aria-pressed={r === region}
            style={{
              ...styles.flagBtn,
              boxShadow:
                r === region
                  ? `0 0 0 2.5px #fff, 0 0 0 4px ${MAROON}`
                  : "0 1px 4px rgba(0,0,0,.12)",
              transform: r === region ? "scale(1.06)" : "scale(1)",
            }}
          >
            <img
              src={CARD_IMG[REGIONS[r].flag]}
              alt={`${r} flag`}
              style={{ width: "100%", height: "100%", display: "block" }}
              draggable={false}
            />
          </button>
        ))}
        <span style={styles.flagSkeleton} />
      </div>

      {/* key re-mounts the rows so they re-stagger on every switch */}
      <div key={region} style={{ marginTop: 34 }}>
        {REGIONS[region].rows.map(([label, width], i) => (
          <div
            key={label}
            className="adc-row"
            style={{ ...styles.row, ["--i" as any]: i }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={styles.rowLabel}>{label}</div>
              <div
                className="adc-shimmer"
                style={{ ...styles.rowBar, width: `${width}%` }}
              />
            </div>
            <button
              onClick={() => copy(i)}
              aria-label={`Copy ${label}`}
              style={{
                ...styles.copyBtn,
                transform: copied === i ? "scale(1.12)" : "scale(1)",
              }}
            >
              {copied === i ? (
                <span style={styles.copiedCheck}>✓</span>
              ) : (
                <img
                  src={CARD_IMG.copyIcon}
                  alt=""
                  style={{ width: 22, height: 22, display: "block" }}
                  draggable={false}
                />
              )}
              {copied === i && (
                <span className="adc-copied" style={styles.copiedPill}>
                  Copied
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountDetailsCard;

// ————————————————— styles —————————————————

const styles: Record<string, React.CSSProperties> = {
  panel: {
    position: "relative",
    width: "100%",
    background: "#fff",
    borderRadius: 18,
    border: "1px solid rgba(155,20,20,.16)",
    boxShadow: "0 24px 50px rgba(120,50,40,.10)",
    padding: "26px 26px 28px",
    transition: `transform .5s ${EASE}, box-shadow .5s ${EASE}`,
    fontFamily:
      "'Avenir Next','Nunito Sans','Segoe UI',system-ui,-apple-system,sans-serif",
    color: INK,
  },
  flagBtn: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "none",
    overflow: "hidden",
    cursor: "pointer",
    background: "transparent",
    transition: `transform .4s ${EASE}, box-shadow .4s ${EASE}`,
    padding: 0,
    flexShrink: 0,
  },
  flagSkeleton: {
    width: 74,
    height: 8,
    borderRadius: 8,
    background: "#E4E0EE",
    marginLeft: 8,
  },
  row: { display: "flex", alignItems: "center", gap: 14, padding: "13px 0" },
  rowLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#2E2823",
    marginBottom: 9,
  },
  rowBar: {
    height: 9,
    borderRadius: 4,
    background: "#E5E5E5",
    position: "relative",
    overflow: "hidden",
  },
  copyBtn: {
    width: 26,
    height: 26,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    position: "relative",
    transition: `transform .35s ${EASE}`,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  copiedCheck: {
    width: 22,
    height: 22,
    borderRadius: 6,
    background: "#1E7A44",
    color: "#fff",
    fontSize: 13,
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copiedPill: {
    position: "absolute",
    top: -30,
    right: -6,
    background: "#1E7A44",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    borderRadius: 8,
    padding: "4px 8px",
    whiteSpace: "nowrap",
  },
};

const css = `
  @keyframes adcRowIn {
    from { opacity: 0; transform: translateX(22px); filter: blur(3px); }
    to   { opacity: 1; transform: translateX(0); filter: blur(0); }
  }
  .adc-row { animation: adcRowIn .6s ${EASE} both; animation-delay: calc(var(--i) * 90ms); }

  .adc-shimmer::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, transparent 32%, rgba(255,255,255,.6) 50%, transparent 68%);
    transform: translateX(-100%);
    animation: adcShimmer 3s ${EASE} infinite;
  }
  @keyframes adcShimmer { 55%, 100% { transform: translateX(100%); } }

  .adc-panel-lift:hover { transform: translateY(-6px); box-shadow: 0 32px 64px rgba(120,50,40,.16); }

  @keyframes adcCopied {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .adc-copied { animation: adcCopied .3s ${EASE} both; }

  @media (prefers-reduced-motion: reduce) {
    .adc-row, .adc-shimmer::after, .adc-copied { animation: none !important; }
  }
`;
