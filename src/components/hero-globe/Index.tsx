import { sharedImages } from "@/data/images/shared";

// Geometry mirrors Globebg.svg: a 736x557 viewBox holding a circle at
// (562, 562) with r=561.5, letterboxed by object-contain into a square
// box. Expressed as percentages so the arc stays put at every breakpoint.
const SPHERE = { size: "152.582%", left: "0.068%", top: "12.228%" };

// Continents that wrap the sphere TILES times. The track below is twice
// the sphere wide, so each tile is 50/TILES% of it; more tiles keeps the
// artwork nearer its native 459px and preserves the coastline detail.
// Keep 50/TILES an exact decimal so the half-track shift the animation
// makes lands on a whole number of tiles with no subpixel drift.
const TILES = 2;

const land = {
  WebkitMaskImage: `url(${sharedImages.faGlobeLand})`,
  maskImage: `url(${sharedImages.faGlobeLand})`,
  WebkitMaskRepeat: "repeat-x",
  maskRepeat: "repeat-x",
  // Only the sphere's northern crescent is on screen, so the band is
  // stretched and lifted to sit inside it rather than on the equator.
  WebkitMaskSize: `${50 / TILES}% 55%`,
  maskSize: `${50 / TILES}% 55%`,
  WebkitMaskPosition: "0 35%",
  maskPosition: "0 35%",
} as const;

export function HeroGlobe({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <style>{css}</style>
      <div
        className="absolute overflow-hidden rounded-full border border-[#FFA725] bg-[#FFF2E8] opacity-80"
        style={{
          width: SPHERE.size,
          height: SPHERE.size,
          left: SPHERE.left,
          top: SPHERE.top,
        }}
      >
        {/* Shifting this track by half its width advances the mask by a
            whole number of tiles, so the loop has no visible seam */}
        <div
          className="hero-globe-land absolute inset-y-0 left-0 w-[200%] bg-[#FFA725] opacity-25"
          style={land}
        />
      </div>
    </div>
  );
}

const css = `
  @keyframes heroGlobeSpin { to { transform: translateX(-50%); } }
  .hero-globe-land { animation: heroGlobeSpin 60s linear infinite; }

  @media (prefers-reduced-motion: reduce) {
    .hero-globe-land { animation: none !important; }
  }
`;
