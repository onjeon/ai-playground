'use client';

import { Star } from 'lucide-react';

interface FortuneStarsProps {
  rating: number;
  maxRating?: number;
  filledColor?: string;
  emptyColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FortuneStars({
  rating,
  maxRating = 5,
  filledColor = 'fill-amber-400 text-amber-400',
  emptyColor = 'text-slate-600',
  size = 'sm',
}: FortuneStarsProps) {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  return (
    <div className="flex gap-0.5">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`${sizeClass} ${
            index < rating ? filledColor : emptyColor
          }`}
        />
      ))}
    </div>
  );
}
