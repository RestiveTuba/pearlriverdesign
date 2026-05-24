interface LogoProps {
  variant?: "primary" | "inverse";
  height?: number;
  className?: string;
}

const c = {
  primary: {
    diamond: "#0D1F3C",
    wordmark: "#1C1C1E",
    rule: "rgba(28,28,30,0.25)",
    design: "#6A6A66",
  },
  inverse: {
    diamond: "#ffffff",
    wordmark: "#ffffff",
    rule: "rgba(255,255,255,0.35)",
    design: "rgba(255,255,255,0.7)",
  },
};

export default function Logo({ variant = "primary", height = 28, className }: LogoProps) {
  const col = c[variant];

  return (
    <svg
      viewBox="460 163 280 80"
      height={height}
      aria-label="Pearl River Design"
      role="img"
      className={className}
      style={{ display: "block", width: "auto" }}
    >
      <title>Pearl River Design</title>
      <polygon points="471.68,193 478.68,200 471.68,207 464.68,200" fill={col.diamond} />
      <text
        x="496.7"
        y="194.2"
        fontFamily="var(--font-space-grotesk), Space Grotesk, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="38"
        letterSpacing="-0.38"
        fill={col.wordmark}
      >
        PEARL RIVER
      </text>
      <rect x="496.7" y="210.0" width="238.6" height="1" fill={col.rule} />
      <text
        x="616.0"
        y="233.9"
        fontFamily="var(--font-space-grotesk), Space Grotesk, Helvetica, sans-serif"
        fontWeight="300"
        fontSize="17"
        letterSpacing="7.14"
        fill={col.design}
        textAnchor="middle"
      >
        DESIGN
      </text>
    </svg>
  );
}
