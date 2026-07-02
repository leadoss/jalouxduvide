interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size * 0.51}
      height={size}
      viewBox="0 0 90 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Top pointed oval — left edge */}
      <path
        d="M45,5 C40,5 34,11 34,20 C34,29 39,36 45,40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Top pointed oval — right edge */}
      <path
        d="M45,5 C50,5 56,11 56,20 C56,29 51,36 45,40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Strand A: from oval base, arcs LEFT then sweeps back RIGHT */}
      <path
        d="M45,40 C35,45 10,59 10,76 C10,93 36,99 45,102 C54,105 74,117 74,132 C74,141 60,145 45,146"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Strand B: mirror — arcs RIGHT then sweeps back LEFT */}
      <path
        d="M45,40 C55,45 80,59 80,76 C80,93 54,99 45,102 C36,105 16,117 16,132 C16,141 30,145 45,146"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Hanging teardrop — solid fill */}
      <path
        d="M45,146 C41,146 36,152 36,160 C36,168 40,174 45,174 C50,174 54,168 54,160 C54,152 49,146 45,146"
        fill="currentColor"
      />
    </svg>
  );
}

interface LogoProps {
  markOnly?: boolean;
  size?: number;
  className?: string;
  textClassName?: string;
}

export default function Logo({ markOnly = false, size = 40, className, textClassName }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark size={size} />
      {!markOnly && (
        <span
          className={`text-sm font-500 tracking-[0.22em] uppercase ${textClassName ?? ""}`}
        >
          Jaloux Du Vide
        </span>
      )}
    </span>
  );
}
