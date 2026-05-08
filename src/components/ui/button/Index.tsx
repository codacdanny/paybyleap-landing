import type { ButtonHTMLAttributes } from "react";

/**
 * Figma desktop primary CTA (e.g. 4446:27337): h-48px, rounded 8px, px 8px, 18px medium, fill #6C0505.
 */
type Variant = "solid" | "primaryDark" | "outline" | "outline-dark" | "ghost";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark",
  /** Deep maroon download CTA — matches Figma Primary Buttons */
  primaryDark:
    "rounded-lg !px-2 !py-0 h-12 min-h-[48px] !text-[18px] font-medium leading-6 bg-primary-dark text-white border border-primary-dark hover:bg-primary hover:border-primary",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary/5",
  "outline-dark":
    "border border-grey-70 text-grey-90 bg-transparent hover:bg-grey-10/80",
  ghost: "border border-transparent text-white hover:bg-white/10",
};

export function Button({
  variant = "solid",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-button-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
