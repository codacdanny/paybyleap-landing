import { useEffect, useRef, useState } from "react";

export const REVEAL_EASE = "cubic-bezier(.16,.8,.26,1)";

/**
 * Drives scroll-triggered reveals. `armed` is only set once JS runs, so the
 * hidden start state can be scoped behind it and content is never stranded
 * invisible when the observer cannot run.
 */
export function useRevealOnScroll<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, armed, revealed };
}
