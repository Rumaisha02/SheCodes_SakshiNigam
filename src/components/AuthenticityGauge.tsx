import { useMemo } from "react";

interface AuthenticityGaugeProps {
  score: number;
  size?: number;
}

const AuthenticityGauge = ({ score, size = 80 }: AuthenticityGaugeProps) => {
  const { color, label } = useMemo(() => {
    if (score >= 80) return { color: "hsl(142, 71%, 45%)", label: "Excellent" };
    if (score >= 60) return { color: "hsl(38, 92%, 50%)", label: "Good" };
    return { color: "hsl(0, 84%, 60%)", label: "Low" };
  }, [score]);

  const strokeWidth = size * 0.08;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke="hsl(var(--muted))" strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" className="transition-all duration-1000 ease-out" />
        <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central"
          className="fill-foreground font-heading font-bold transform rotate-90 origin-center"
          style={{ fontSize: size * 0.28 }}>
          {score}
        </text>
      </svg>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
};

export default AuthenticityGauge;
