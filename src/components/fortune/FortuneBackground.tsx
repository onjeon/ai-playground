'use client';

interface FortuneBackgroundProps {
  count?: number;
  color?: string;
  size?: string;
}

export default function FortuneBackground({
  count = 30,
  color = 'bg-purple-400/40',
  size = 'w-1 h-1',
}: FortuneBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`absolute ${size} ${color} rounded-full animate-pulse`}
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
            opacity: 0.2 + (i % 4) * 0.15,
            animationDelay: `${(i % 5) * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
