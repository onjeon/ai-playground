'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// 기본 AdSense 컴포넌트
export function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
  style = {},
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (isAdLoaded.current) return;
    
    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-5204107675448262"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}

// 배너 광고 (결과 페이지용)
export function AdBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`my-4 ${className}`}>
      <p className="text-[10px] text-gray-400 text-center mb-1">광고</p>
      <AdSense
        adSlot="YOUR_BANNER_SLOT_ID" // AdSense에서 생성한 슬롯 ID로 교체
        adFormat="horizontal"
        className="min-h-[100px]"
      />
    </div>
  );
}

// 네이티브/인피드 광고 (목록 중간용)
export function AdNative({ className = '' }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <AdSense
        adSlot="YOUR_NATIVE_SLOT_ID" // AdSense에서 생성한 슬롯 ID로 교체
        adFormat="fluid"
        className="min-h-[150px]"
        style={{ minHeight: '150px' }}
      />
    </div>
  );
}

// 인터스티셜/전면 광고 컴포넌트
interface AdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  onAdComplete?: () => void;
  countdownSeconds?: number;
}

export function AdInterstitial({
  isOpen,
  onClose,
  onAdComplete,
  countdownSeconds = 5,
}: AdInterstitialProps) {
  const [countdown, setCountdown] = useState(countdownSeconds);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(countdownSeconds);
      setCanClose(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanClose(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, countdownSeconds]);

  const handleClose = () => {
    if (canClose) {
      onClose();
      onAdComplete?.();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400">광고</span>
          <button
            onClick={handleClose}
            disabled={!canClose}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              canClose
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {canClose ? '결과 보기' : `${countdown}초 후 닫기`}
          </button>
        </div>

        {/* Ad Content */}
        <div className="p-4">
          <AdSense
            adSlot="YOUR_INTERSTITIAL_SLOT_ID" // AdSense에서 생성한 슬롯 ID로 교체
            adFormat="rectangle"
            className="min-h-[250px] flex items-center justify-center"
            style={{ minHeight: '250px' }}
          />
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 text-center">
          <p className="text-xs text-gray-400">
            광고를 통해 무료 서비스가 유지됩니다
          </p>
        </div>
      </div>
    </div>
  );
}
