/**
 * UI that is built but hidden until its content is ready. Set a flag to
 * `true` to show it again everywhere it appears (header, mobile menu, footer).
 */
export const featureFlags: Record<"support" | "bookACall" | "community", boolean> = {
  support: false,
  bookACall: false,
  community: false,
};
