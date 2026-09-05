import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to top on client-side navigations, or to the anchor when the URL carries one. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frame = 0;
    let attempts = 0;

    function jump() {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "instant" });
        return;
      }
      if (attempts++ < 10) frame = window.requestAnimationFrame(jump);
    }

    frame = window.requestAnimationFrame(jump);
    document.fonts?.ready.then(() => {
      attempts = 0;
      jump();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
