export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-baseline gap-0 font-spartan ${className}`}>
      <span className="text-[22px] font-semibold tracking-tight text-grey-100 md:text-[24px]">
        PayBy
      </span>
      <span className="text-[22px] font-semibold tracking-tight text-primary md:text-[24px]">
        Le
        <span className="relative inline-block">
          a
          <span
            className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-secondary"
            aria-hidden
          />
        </span>
        p
      </span>
    </div>
  );
}
