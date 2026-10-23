export function IconGlobe({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 0 0 18M12 3a15 15 0 0 1 0 18" />
    </svg>
  );
}

export function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

export function IconArrowCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.95" />
      <path
        d="M10 12h5m0 0l-2-2m2 2l-2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPlanetBadge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7" stroke="#9A0000" strokeWidth="1.2" />
      <ellipse cx="10" cy="10" rx="7" ry="2.5" stroke="#9A0000" strokeWidth="1" />
      <path d="M3 10h14" stroke="#9A0000" strokeWidth="0.8" />
    </svg>
  );
}

export function IconStarSmall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 0l1.2 3.6h3.8L8.5 5.8 9.7 9.5 6 7.4 2.3 9.5 3.5 5.8 0 3.6h3.8L6 0z" />
    </svg>
  );
}

export function IconPlayCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 1a11 11 0 1 1 0 22a11 11 0 1 1 0-22ZM10.5 7.67l6 3.464a1 1 0 0 1 0 1.732l-6 3.464A1 1 0 0 1 9 15.464V8.536a1 1 0 0 1 1.5-.866Z"
      />
    </svg>
  );
}
