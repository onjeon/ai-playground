'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Sparkles } from 'lucide-react';
import {
  generateTarotReading,
  getSpreadInfo,
  SpreadType,
  TarotReading
} from '@/lib/fortune/tarot';

function DailyTarotContent() {
  const searchParams = useSearchParams();
  const type = (searchParams.get('type') || 'general') as SpreadType;

  const [step, setStep] = useState<'intro' | 'result'>('intro');
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [hasReadToday, setHasReadToday] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const spreadInfo = getSpreadInfo(type);

  useEffect(() => {
    // 제한 없이 항상 가능하게 설정
    setHasReadToday(false);
  }, [type]);

  const handleDraw = async () => {
    if (hasReadToday) return;

    setIsDrawing(true);

    // 카드 뽑기 애니메이션 효과
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = generateTarotReading(type);
    setReading(result);
    setIsDrawing(false);
    setStep('result');
  };

  const handleShare = async () => {
    if (!reading) return;

    const card = reading.cards[0];
    const shareText = `🔮 ${reading.title}

🎴 ${card.card.nameKo} (${card.card.isReversed ? '역방향' : '정방향'})
✨ ${card.card.keywords.slice(0, 3).join(', ')}

📝 ${card.interpretation.slice(0, 100)}...

💡 ${card.card.isReversed ? card.card.reversed.advice : card.card.upright.advice}

나도 타로 보기 👉`;

    try {
      await navigator.clipboard.writeText(shareText + ' ' + window.location.origin + '/fortune/tarot');
      alert('클립보드에 복사되었습니다!');
    } catch {
      alert('공유 기능을 사용할 수 없습니다.');
    }
  };

  // 이미 읽은 경우
  if (hasReadToday && step === 'intro') {
    return (
      <div className="py-2 text-center">
        <div className="text-6xl mb-6">🌙</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          오늘의 {spreadInfo.title}을 이미 확인하셨습니다
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          내일 오전 0시 이후에 다시 확인하실 수 있어요
        </p>
        <div className="space-y-3">
          <Link
            href="/fortune/tarot"
            className="block w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-medium transition-colors"
          >
            다른 타로 보기
          </Link>
          <Link
            href="/"
            className="block w-full py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-medium transition-colors border border-gray-200 dark:border-gray-700"
          >
            홈으로
          </Link>
        </div>
      </div>
    );
  }

  // 인트로 화면
  if (step === 'intro') {
    return (
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <Link href="/fortune/tarot" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span>뒤로</span>
          </Link>
        </div>

        {/* 메인 */}
        <div className="text-center">
          <div className="text-6xl mb-6">{spreadInfo.icon}</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{spreadInfo.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">{spreadInfo.description}</p>

          {/* 카드 뽑기 버튼 */}
          <button
            onClick={handleDraw}
            disabled={isDrawing}
            className={`relative w-48 h-48 mx-auto rounded-2xl border-2 transition-all duration-300 ${
              isDrawing
                ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 animate-pulse'
                : 'border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/30 hover:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800/50 hover:scale-105'
            }`}
          >
            {isDrawing ? (
              <div className="flex flex-col items-center justify-center h-full">
                <Sparkles className="w-12 h-12 text-indigo-500 animate-spin" />
                <p className="text-gray-600 dark:text-gray-400 mt-4">카드를 섞는 중...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-5xl mb-3">🎴</div>
                <p className="text-gray-900 dark:text-white font-medium">카드 뽑기</p>
                <p className="text-gray-500 text-sm mt-1">터치하세요</p>
              </div>
            )}
          </button>

          <p className="text-gray-500 text-sm mt-8">
            마음을 가다듬고 카드를 뽑아주세요
          </p>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (step === 'result' && reading) {
    const card = reading.cards[0];

    return (
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <Link href="/fortune/tarot" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
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

        {/* 카드 결과 */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5">
          {/* 카드 이미지 */}
          <div className="flex justify-center mb-6">
            <div className={`relative ${card.card.isReversed ? 'rotate-180' : ''}`}>
              <Image
                src={card.card.imagePath}
                alt={card.card.nameKo}
                width={120}
                height={180}
                className="rounded-lg shadow-lg border-2 border-indigo-200 dark:border-indigo-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* 카드 정보 */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{card.card.nameKo}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{card.card.nameEn}</p>
            {card.card.isReversed && (
              <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-800/50 rounded-full text-sm text-indigo-600 dark:text-indigo-400">
                역방향
              </span>
            )}
          </div>

          {/* 키워드 */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {card.card.keywords.map((keyword, i) => (
              <span
                key={i}
                className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-sm text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* 해석 */}
          <div className="mb-6">
            <h3 className="text-gray-900 dark:text-white font-medium mb-2 flex items-center gap-2">
              <span>📖</span> 해석
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {card.interpretation}
            </p>
          </div>

          {/* 조언 */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 flex items-center gap-2">
              <span>💡</span> 조언
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {card.card.isReversed ? card.card.reversed.advice : card.card.upright.advice}
            </p>
          </div>
        </div>

        {/* 종합 해석 */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5">
          <h3 className="text-gray-900 dark:text-white font-medium mb-2">🌟 종합</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {reading.overall}
          </p>
        </div>

        {/* 버튼들 */}
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
            className="block w-full py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-2xl text-center transition-colors border border-gray-200 dark:border-gray-700"
          >
            다른 타로 보기
          </Link>
        </div>

        {/* 안내 */}
        <p className="text-center text-gray-500 text-xs">
          🔮 타로는 재미를 위한 콘텐츠입니다
        </p>
      </div>
    );
  }

  return null;
}

export default function DailyTarotPage() {
  return (
    <Suspense fallback={
      <div className="py-12 text-center">
        <div className="text-gray-600 dark:text-gray-400">로딩 중...</div>
      </div>
    }>
      <DailyTarotContent />
    </Suspense>
  );
}
