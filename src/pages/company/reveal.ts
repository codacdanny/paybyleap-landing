import { REVEAL_EASE, useRevealOnScroll } from "@/hooks/useRevealOnScroll";

// One stylesheet for every Company section. A section opts in with
// useSectionReveal(); its children pick an entrance (co-rise, co-pop, co-left,
// co-right, co-fade) staggered by --d, and optional idle loops after it.
export const companyRevealCss = `
  .co-armed .co-rise, .co-armed .co-pop, .co-armed .co-left,
  .co-armed .co-right, .co-armed .co-fade { opacity: 0; }

  @keyframes coRise  { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
  @keyframes coPop   { from { opacity: 0; transform: translateY(18px) scale(.95); } to { opacity: 1; transform: none; } }
  @keyframes coLeft  { from { opacity: 0; transform: translateX(-56px); } to { opacity: 1; transform: none; } }
  @keyframes coRight { from { opacity: 0; transform: translateX(56px); } to { opacity: 1; transform: none; } }
  @keyframes coFade  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes coFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
  @keyframes coSway  { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-28px); } }

  .co-armed.co-in .co-rise  { animation: coRise .75s ${REVEAL_EASE} var(--d, 0s) both; }
  .co-armed.co-in .co-pop   { animation: coPop .7s ${REVEAL_EASE} var(--d, 0s) both; }
  .co-armed.co-in .co-left  { animation: coLeft .8s ${REVEAL_EASE} var(--d, 0s) both; }
  .co-armed.co-in .co-right { animation: coRight .8s ${REVEAL_EASE} var(--d, 0s) both; }
  .co-armed.co-in .co-fade  { animation: coFade 1s ease-out var(--d, 0s) both; }

  .co-in .co-float { animation: coFloat 6s ease-in-out var(--f, 1.2s) infinite; }
  .co-in .co-sway  { animation: coSway 18s ease-in-out infinite; }

  .co-glass-pill {
    position: relative;
    background: rgba(77, 77, 77, .5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  /* Figma's stroke gradient runs top to bottom across the pill: only its red
     to faint-orange middle is visible, so these are the stops it shows. */
  .co-glass-pill::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1.5px;
    border-radius: inherit;
    background: linear-gradient(180deg, #9A0000, rgba(154, 0, 0, .75) 35%, rgba(200, 96, 29, .55));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .co-armed .co-rise, .co-armed .co-pop, .co-armed .co-left,
    .co-armed .co-right, .co-armed .co-fade { opacity: 1; }
    .co-rise, .co-pop, .co-left, .co-right, .co-fade, .co-float, .co-sway {
      animation: none !important;
    }
  }
`;

export function useSectionReveal<T extends HTMLElement>(threshold = 0.15) {
  const { ref, armed, revealed } = useRevealOnScroll<T>(threshold);
  return {
    ref,
    revealClass: `${armed ? " co-armed" : ""}${revealed ? " co-in" : ""}`,
  };
}
