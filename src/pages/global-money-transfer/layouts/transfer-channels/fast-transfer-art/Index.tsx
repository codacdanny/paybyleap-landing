import { sharedImages } from "@/data/images/shared";
import { globalMoneyTransferImages } from "@/data/images/global-money-transfer";

const arcs = [
  "M61.3 232C37.1 197.2 35 152.7 57.2 118.3C76.2 88.8 109.5 64.3 146 66.4",
  "M187 62.4C224.2 67 250.7 96.2 256.8 130.5C265.8 178.7 238.6 226.6 201 255.2",
  "M91.3 241.9C101.8 195 130 154.8 172.5 134.9C206.8 118.7 247.6 113.3 283.9 126",
];

const dots = [
  { cx: 195.02, cy: 258.5 },
  { cx: 291.02, cy: 127.5 },
  { cx: 66.02, cy: 236.5 },
];

const avatars = [
  { photo: globalMoneyTransferImages.avatarUs, flag: sharedImages.roundFlagUs, cx: 279.07, cy: 291.46, r: 15.545, flagX: 283.97, flagY: 271, flagSize: 16.36 },
  { photo: globalMoneyTransferImages.avatarCa, flag: sharedImages.roundFlagCa, cx: 93.64, cy: 238.89, r: 15.115, flagX: 97.61, flagY: 219, flagSize: 15.91 },
  { photo: globalMoneyTransferImages.avatarNg, flag: sharedImages.roundFlagNg, cx: 149.4, cy: 61.58, r: 17.875, flagX: 157.86, flagY: 39, flagSize: 18.82 },
];

// Figma group 5044:6121, drawn in its own coordinates and anchored where the
// card places it; the card's overflow crops whatever doesn't fit.
export function FastTransferArt() {
  return (
    <svg
      viewBox="0 0 434.52 426"
      aria-hidden
      className="pointer-events-none absolute left-[50.48px] top-36 w-[434.52px] max-w-none"
    >
      <defs>
        <clipPath id="fast-transfer-avatar" clipPathUnits="objectBoundingBox">
          <circle cx=".5" cy=".5" r=".5" />
        </clipPath>
      </defs>
      <image href={globalMoneyTransferImages.blueGlobe} x="8.52" y="0" width="426" height="426" />
      {arcs.map((d) => (
        <path key={d} d={d} fill="none" stroke="#fff" strokeDasharray="2 2" />
      ))}
      {dots.map(({ cx, cy }) => (
        <circle key={cx} cx={cx} cy={cy} r="4.5" fill="#fff" />
      ))}
      {avatars.map(({ photo, flag, cx, cy, r, flagX, flagY, flagSize }) => (
        <g key={photo}>
          <image
            href={photo}
            x={cx - r}
            y={cy - r}
            width={r * 2}
            height={r * 2}
            clipPath="url(#fast-transfer-avatar)"
            preserveAspectRatio="xMidYMid slice"
          />
          <circle cx={cx} cy={cy} r={r - 1} fill="none" stroke="#F6C03A" strokeWidth="2" />
          <image href={flag} x={flagX} y={flagY} width={flagSize} height={flagSize} />
        </g>
      ))}
    </svg>
  );
}
