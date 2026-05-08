import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Desktop (1440): 160px horizontal inset per Figma node 4446:27322.
 */
export function LandingInset({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-8 min-[1440px]:px-[160px] ${className}`}
    >
      {children}
    </div>
  );
}
