import type { CSSProperties } from "react";
import { figma } from "@/data/images/Index";

// The land drifts one globe-width per cycle with a second copy trailing a
// globe-width behind, so the loop restarts on an identical frame.
const css = `
  @keyframes gmtSpin { to { transform: translateX(100%); } }
  @keyframes gmtFlow { to { stroke-dashoffset: -4; } }
  @keyframes gmtPing {
    0%   { transform: scale(1); opacity: .45; }
    100% { transform: scale(3.2); opacity: 0; }
  }
  @keyframes gmtToastIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes gmtToastFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }

  .gmt-land { animation: gmtSpin 90s linear infinite; will-change: transform; }
  .gmt-arc  { stroke-dasharray: 2 2; animation: gmtFlow 1s linear infinite; }
  .gmt-ping { transform-box: fill-box; transform-origin: center; animation: gmtPing 2.8s ease-out infinite; }
  .gmt-toast {
    animation: gmtToastIn .7s cubic-bezier(.16,.8,.26,1) var(--in) both,
               gmtToastFloat 6s ease-in-out calc(var(--in) + .7s) infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .gmt-land, .gmt-arc, .gmt-ping, .gmt-toast { animation: none !important; }
    .gmt-ping { opacity: 0; }
  }
`;

// Land tiles as a share of the 1124px globe, with Figma's own transforms.
// Each tile crops the world map the way its Figma image fill does.
const worldCrop: CSSProperties = { left: "-6.456%", top: "0", width: "115.958%", height: "100%" };
const southAmericaCrop: CSSProperties = { left: "-19.6%", top: "-52.632%", width: "352.047%", height: "152.632%" };

const landTiles = [
  { crop: worldCrop, box: { left: "16.637%", top: "6.495%", width: "66.726%", height: "38.256%" } },
  {
    crop: southAmericaCrop,
    box: { left: "22.753%", top: "50.635%", width: "22.242%", height: "25.356%", transform: "matrix(-0.815, -0.5795, 0.5795, -0.815, 0, 0)" },
  },
  {
    crop: southAmericaCrop,
    box: { left: "81.433%", top: "18.238%", width: "22.242%", height: "25.356%", transform: "matrix(0.8292, 0.559, -0.559, 0.8292, 0, 0)" },
  },
];

const avatars = [
  { photo: figma.moneyTransferAvatarNg, flag: figma.roundFlagNg, x: 584, y: 547, flagX: 612, flagY: 542 },
  { photo: figma.moneyTransferAvatarUs, flag: figma.roundFlagUs, x: 787, y: 728, flagX: 812, flagY: 722 },
  { photo: figma.moneyTransferAvatarUk, flag: figma.roundFlagUk, x: 930, y: 547, flagX: 957, flagY: 545 },
  { photo: figma.moneyTransferAvatarCa, flag: figma.roundFlagCa, x: 319, y: 747, flagX: 343, flagY: 741 },
  { photo: figma.moneyTransferAvatarEu, flag: figma.roundFlagEu, x: 1126, y: 735, flagX: 1152, flagY: 731 },
];

const arcs = [
  "M362.6 760.3C435.5 702.4 508.8 646.2 598.4 621.7C675.3 600.4 755.8 622.1 826 654.8",
  "M782.5 756C666.3 788.6 528.9 741.8 470.2 635.5",
  "M969.2 578.6C1014.8 636.4 996.7 715.1 952.8 766.1",
];

const dots = [
  { cx: 831, cy: 657, delay: "0s" },
  { cx: 949, cy: 771, delay: ".9s" },
  { cx: 468, cy: 629, delay: "1.8s" },
];

const toasts = [
  {
    label: "Transfer of $5,000 successful",
    x: 1154,
    y: 670,
    delay: ".9s",
    outline: "M.5 52.5V24A23.5 23.5 0 0 1 24 .5h157A23.5 23.5 0 0 1 204.5 24v5A23.5 23.5 0 0 1 181 52.5Z",
  },
  {
    label: "You just received 6,300 CAD",
    x: 382,
    y: 492,
    delay: ".5s",
    outline: "M.5 29v-5A23.5 23.5 0 0 1 24 .5h157A23.5 23.5 0 0 1 204.5 24v28.5H24A23.5 23.5 0 0 1 .5 29Z",
  },
];

// Figma frame 4643:38133. Coordinates are those of the 1440 frame; the stage
// spans y 468–820 (the export bounds, toast shadow included). Below md it is
// cropped to the slice the 390 frame shows (4884:6063, x 350.57–1237.43).
export function TransferGlobe({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] overflow-hidden ${className}`} aria-hidden>
      <style>{css}</style>
      <div className="relative aspect-[886.86/352] md:aspect-[1440/352]">
        <div className="absolute inset-y-0 left-[-39.53%] w-[162.371%] md:left-0 md:w-full">
          <div className="absolute left-[12.986%] top-[4.83%] aspect-square w-[78.056%] overflow-hidden rounded-full border border-primary bg-[#FFF4F4]">
            <div className="gmt-land absolute -inset-px">
              {["0%", "-100%"].map((offset) => (
                <div key={offset} className="absolute inset-0" style={{ transform: `translateX(${offset})` }}>
                  {landTiles.map(({ box, crop }, i) => (
                    <div key={i} className="absolute origin-top-left overflow-hidden opacity-20" style={box}>
                      <img src={figma.moneyTransferWorldMap} alt="" className="absolute max-w-none" style={crop} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 468 1440 352" className="absolute inset-0 size-full overflow-visible">
            <defs>
              <clipPath id="gmt-avatar-clip" clipPathUnits="objectBoundingBox">
                <circle cx=".5" cy=".5" r=".5" />
              </clipPath>
              <filter id="gmt-toast-shadow" x="-20%" y="-60%" width="140%" height="240%">
                <feDropShadow dx="0" dy="4" stdDeviation="14" floodColor="#000" floodOpacity=".03" />
              </filter>
            </defs>

            {avatars.map(({ photo, flag, x, y, flagX, flagY }) => (
              <g key={photo}>
                <image href={photo} x={x} y={y} width="38" height="38" clipPath="url(#gmt-avatar-clip)" preserveAspectRatio="xMidYMid slice" />
                <circle cx={x + 19} cy={y + 19} r="18" fill="none" stroke="#F6C03A" strokeWidth="2" />
                <image href={flag} x={flagX} y={flagY} width="20" height="20" />
              </g>
            ))}

            {arcs.map((d) => (
              <path key={d} d={d} className="gmt-arc" fill="none" stroke="#9A0000" strokeWidth=".5" />
            ))}

            {dots.map(({ cx, cy, delay }) => (
              <g key={cx}>
                <circle cx={cx} cy={cy} r="3" fill="#9A0000" className="gmt-ping" style={{ animationDelay: delay }} />
                <circle cx={cx} cy={cy} r="3" fill="#9A0000" />
              </g>
            ))}

            {toasts.map(({ label, x, y, delay, outline }) => (
              <g key={label} transform={`translate(${x} ${y})`}>
                <g className="gmt-toast" style={{ "--in": delay } as CSSProperties}>
                  <path d={outline} fill="#DCF1E6" stroke="#27AE60" filter="url(#gmt-toast-shadow)" />
                  <text x="17" y="32" fontSize="12" fill="#000">
                    {label}
                  </text>
                  <image href={figma.txnSealCheck} x="169" y="17" width="24" height="24" />
                </g>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
