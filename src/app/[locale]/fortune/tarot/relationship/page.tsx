'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Sparkles, Heart } from 'lucide-react';
import { generateTarotReading, TarotReading } from '@/lib/fortune/tarot';

export default function RelationshipTarotPage() {
  const [step, setStep] = useState<'intro' | 'result'>('intro');
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = async () => {
    setIsDrawing(true);
    await new Promise(resolve => setTimeout(resolve, 2500));

    const result = generateTarotReading('relationship');
    setReading(result);
    setIsDrawing(false);
    setStep('result');
  };

  const handleShare = async () => {
    if (!reading) return;

    const shareText = `💑 연인관계 분석 타로

${reading.cards.map(c => `${c.positionMeaning}: ${c.card.nameKo} (${c.card.isReversed ? '역방향' : '정방향'})`).join('\n')}

${reading.overall}

나도 타로 보기 👉`;

    try {
      await navigator.clipboard.writeText(shareText + ' ' + window.location.origin + '/fortune/tarot');
      alert('클립보드에 복사되었습니다!');
    } catch {
      alert('공유 기능을 사용할 수 없습니다.');
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 dark:bg-pink-900/20 rounded-full mb-4">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-pink-600 dark:text-pink-400 text-sm font-medium">4카드 스프레드</span>
          </div>

          <div className="text-6xl mb-6">💑</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">연인관계 분석</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            나와 상대의 마음, 관계의 장애물과<br />조언을 4장의 카드로 심층 분석합니다
          </p>

          {/* 4장 카드 미리보기 */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {['내 마음', '상대 마음', '장애물', '조언'].map((label, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-24 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🎴</span>
                </div>
                <span className="text-gray-500 text-xs">{label}</span>
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
              '4장의 카드 뽑기'
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

        {/* 4장 카드 */}
        <div className="space-y-4">
          {reading.cards.map((cardData, index) => {
            const positionColors = [
              'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700',
              'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-700',
              'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700',
              'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
            ];
            const positionIcons = ['💙', '💗', '⚡', '✨'];

            return (
              <div
                key={index}
                className={`${positionColors[index]} border rounded-2xl p-5`}
              >
                {/* 포지션 */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{positionIcons[index]}</span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {cardData.positionMeaning}
                  </span>
                </div>

                <div className="flex gap-4">
                  {/* 카드 이미지 */}
                  <div className="flex-shrink-0">
                    <div className={`${cardData.card.isReversed ? 'rotate-180' : ''}`}>
                      <Image
                        src={cardData.card.imagePath}
                        alt={cardData.card.nameKo}
                        width={80}
                        height={120}
                        className="rounded-lg border border-indigo-200 dark:border-indigo-700"
                      />
                    </div>
                  </div>

                  {/* 카드 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cardData.card.nameKo}</h3>
                      <p className="text-gray-500 text-xs">{cardData.card.nameEn}</p>
                      {cardData.card.isReversed && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-800/50 rounded text-xs text-indigo-600 dark:text-indigo-400">
                          역방향
                        </span>
                      )}
                    </div>

                    {/* 키워드 */}
                    <div className="flex flex-wrap gap-1 mb-3">
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
                </div>
              </div>
            );
          })}
        </div>

        {/* 종합 해석 */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5">
          <h3 className="text-gray-900 dark:text-white font-bold mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            종합 해석
          </h3>
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
