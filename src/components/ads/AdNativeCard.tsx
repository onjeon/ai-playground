'use client';

import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdNativeCardProps {
  className?: string;
}

// 테스트 카드와 비슷한 스타일의 네이티브 광고
export function AdNativeCard({ className = '' }: AdNativeCardProps) {
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
    <Card className={`group h-full p-3 sm:p-4 relative overflow-hidden ${className}`}>
      {/* 광고 라벨 */}
      <div className="absolute top-2 right-2 z-10">
        <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
          AD
        </span>
      </div>

      {/* 광고 컨텐츠 */}
      <div className="min-h-[120px] sm:min-h-[150px] flex items-center justify-center">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%', minHeight: '120px' }}
          data-ad-client="ca-pub-5204107675448262"
          data-ad-slot="YOUR_NATIVE_CARD_SLOT_ID" // AdSense에서 생성한 슬롯 ID로 교체
          data-ad-format="fluid"
          data-ad-layout-key="-6t+ed+2i-1n-4w" // 인피드 광고 레이아웃 키
        />
      </div>
    </Card>
  );
}
