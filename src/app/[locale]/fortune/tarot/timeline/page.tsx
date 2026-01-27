'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Sparkles, Clock } from 'lucide-react';
import { generateTarotReading, TarotReading } from '@/lib/fortune/tarot';

export default function TimelineTarotPage() {
  const [step, setStep] = useState<'intro' | 'result'>('intro');
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = async () => {
    setIsDrawing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const result = generateTarotReading('timeline');
    setReading(result);
    setIsDrawing(false);
    setStep('result');
  };

  const handleShare = async () => {
    if (!reading) return;

    const shareText = `🔮 과거-현재-미래 타로 리딩

${reading.cards.map(c => `${c.positionMeaning}: ${c.card.nameKo} (${c.card.isReversed ? '역방향' : '정방향'})`).join('\n')}

${reading.overall}

나도 타로 보기 👉`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: reading.title,
          text: shareText,
          url: window.location.origin + '/fortune/tarot'
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(shareText + ' ' + window.location.origin + '/fortune/tarot');
      alert('클립보드에 복사되었습니다!');
    }
  };

  // 인트로
  if (step === 'intro') {
    return (
      <div className="space-y-6">
        <div className="flex items-center">
          <Link href="/fortune/tarot" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span>뒤로</span>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">3카드 스프레드</span>
          </div>

          <div className="text-6xl mb-6">⏳</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">과거 - 현재 - 미래</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            시간의 흐름 속에서 상황의 원인과<br />발전 방향을 3장의 카드로 살펴봅니다
          </p>

          {/* 3장 카드 미리보기 */}
          <div className="flex justify-center gap-4 mb-8">
            {['과거', '현재', '미래'].map((label, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-28 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-3xl">🎴</span>
                </div>
                <span className="text-gray-500 text-sm">{label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleDraw}
            disabled={isDrawing}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              isDrawing
                ? 'bg-indigo-300 text-white'
                : 'bg-indigo-500 hover:bg-indigo-600 text-white hover:scale-105'
            }`}
          >
            {isDrawing ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-spin" />
                카드를 섞는 중...
              </span>
            ) : (
              '3장의 카드 뽑기'
            )}
          </button>

          <p className="text-gray-500 text-sm mt-6">
            💳 프리미엄 콘텐츠 · 900원
          </p>
        </div>
      </div>
    );
  }

  // 결과
  if (step === 'result' && reading) {
    return (
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <Link href="/fortune/tarot" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 rounded-full text-white hover:bg-indigo-600"
          >
            <Share2 className="w-4 h-4" />
            <span>공유</span>
          </button>
        </div>

        {/* 제목 */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{reading.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{reading.description}</p>
        </div>

        {/* 3장 카드 */}
        <div className="space-y-4">
          {reading.cards.map((cardData, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5"
            >
              {/* 포지션 */}
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  {cardData.positionMeaning}
                </span>
              </div>

              {/* 카드 이미지 */}
              <div className="flex justify-center mb-4">
                <div className={`${cardData.card.isReversed ? 'rotate-180' : ''}`}>
                  <Image
                    src={cardData.card.imagePath}
                    alt={cardData.card.nameKo}
                    width={100}
                    height={150}
                    className="rounded-lg border border-indigo-200 dark:border-indigo-700"
                  />
                </div>
              </div>

              {/* 카드 정보 */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cardData.card.nameKo}</h3>
                <p className="text-gray-500 text-xs">{cardData.card.nameEn}</p>
                {cardData.card.isReversed && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-800/50 rounded text-xs text-indigo-600 dark:text-indigo-400">
                    역방향
                  </span>
                )}
              </div>

              {/* 키워드 */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {cardData.card.keywords.slice(0, 3).map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 rounded text-xs text-indigo-600 dark:text-indigo-400">
                    {kw}
                  </span>
                ))}
              </div>

              {/* 해석 */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {cardData.interpretation}
              </p>
            </div>
          ))}
        </div>

        {/* 종합 해석 */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5">
          <h3 className="text-gray-900 dark:text-white font-bold mb-3">🌟 종합 해석</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{reading.overall}</p>
        </div>

        {/* 버튼 */}
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            결과 공유하기
          </button>
          <Link
            href="/fortune/tarot"
            className="block w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-2xl text-center border border-gray-200 dark:border-gray-700"
          >
            다른 타로 보기
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
