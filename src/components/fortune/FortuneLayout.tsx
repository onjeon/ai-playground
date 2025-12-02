'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';

export interface FortuneLayoutProps {
  children: ReactNode;
  backHref: string;
  backLabel?: string;
  onShare: () => void;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  starCount?: number;
  starColor?: string;
  accentColor?: string;
}

export default function FortuneLayout({
  children,
  backHref,
  backLabel = '다시 보기',
  onShare,
  gradientFrom = 'from-indigo-950',
  gradientVia = 'via-purple-950',
  gradientTo = 'to-slate-950',
  starCount = 40,
  starColor = 'bg-white',
  accentColor = 'text-purple-300',
}: FortuneLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradientFrom} ${gradientVia} ${gradientTo}`}>
      {/* 별 배경 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(starCount)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${starColor} rounded-full animate-pulse`}
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 19) % 100}%`,
              opacity: 0.2 + (i % 4) * 0.15,
              animationDelay: `${(i % 4) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link 
            href={backHref}
            className={`flex items-center gap-2 ${accentColor} hover:text-white transition-colors`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">{backLabel}</span>
          </Link>
          <button
            onClick={onShare}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 hover:bg-white/20 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">공유하기</span>
          </button>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}
