'use client';

import Link from 'next/link';
import { Share2 } from 'lucide-react';

interface FortuneFooterProps {
  onShare: () => void;
  retryHref: string;
  retryLabel?: string;
  shareButtonGradient?: string;
  shareButtonShadow?: string;
  retryButtonBg?: string;
  retryButtonText?: string;
  disclaimer?: string;
  disclaimerColor?: string;
  additionalLinks?: Array<{
    href: string;
    label: string;
  }>;
}

export default function FortuneFooter({
  onShare,
  retryHref,
  retryLabel = '다시 하기',
  shareButtonGradient = 'from-purple-500 to-pink-500',
  shareButtonShadow = 'shadow-purple-500/30',
  retryButtonBg = 'bg-white/10',
  retryButtonText = 'text-purple-200',
  disclaimer,
  disclaimerColor = 'text-purple-300/50',
  additionalLinks,
}: FortuneFooterProps) {
  return (
    <div className="text-center space-y-4">
      {disclaimer && (
        <p className={`${disclaimerColor} text-xs`}>
          {disclaimer.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < disclaimer.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onShare}
          className={`px-6 py-3 bg-gradient-to-r ${shareButtonGradient} text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${shareButtonShadow}`}
        >
          <Share2 className="w-4 h-4" />
          결과 공유하기
        </button>
        
        <Link
          href={retryHref}
          className={`px-6 py-3 ${retryButtonBg} ${retryButtonText} font-medium rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2`}
        >
          {retryLabel}
        </Link>
      </div>
      
      {additionalLinks && additionalLinks.length > 0 && (
        <div className="flex flex-col gap-2">
          {additionalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`inline-block ${disclaimerColor} text-sm hover:opacity-80 transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      
      <Link
        href="/"
        className={`inline-block ${disclaimerColor} text-sm hover:opacity-80 transition-colors`}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
