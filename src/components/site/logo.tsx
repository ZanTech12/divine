/**
 * Brand logo for Divine Vine-Edo Global Resources Ltd.
 * A golden sun rising over a green vine — "divine light, growing value".
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* sun rays */}
      <g stroke="#F59E0B" strokeWidth="3.4" strokeLinecap="round">
        <line x1="32" y1="6" x2="32" y2="13" />
        <line x1="14.9" y1="13.9" x2="19.8" y2="18.8" />
        <line x1="49.1" y1="13.9" x2="44.2" y2="18.8" />
        <line x1="7" y1="31" x2="14" y2="31" />
        <line x1="57" y1="31" x2="50" y2="31" />
      </g>
      {/* sun */}
      <circle cx="32" cy="33" r="11" fill="#F59E0B" />
      <circle cx="32" cy="33" r="6.5" fill="#FBBF24" />
      {/* vine leaf cup */}
      <path
        d="M10 40c4 12 12 18 22 18s18-6 22-18c-6 5-13 7.5-22 7.5S16 45 10 40z"
        fill="#15803D"
      />
      <path
        d="M32 47.5c-1.8-4.2-4.6-7.2-8.5-9.2 3.9-1.6 7.9-1.5 8.5-1.5s4.6-.1 8.5 1.5c-3.9 2-6.7 5-8.5 9.2z"
        fill="#22C55E"
      />
    </svg>
  );
}

export function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const nameColor = variant === "light" ? "text-white" : "text-foreground";
  const subColor = variant === "light" ? "text-amber-300" : "text-primary";
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span
          className={`text-[15px] font-extrabold tracking-tight sm:text-base ${nameColor}`}
        >
          Divine Vine-Edo
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${subColor}`}
        >
          Global Resources Ltd
        </span>
      </span>
    </span>
  );
}