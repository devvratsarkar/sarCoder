/** Shared config for logo layout animation (loading screen → header). Must match in both. */
export const LOGO_LAYOUT = {
  duration: 1.15,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
  stagger: 0.048,
};

export const LOGO_TEXT = "SarCODER";
export const LOGO_LETTERS = LOGO_TEXT.split("");
