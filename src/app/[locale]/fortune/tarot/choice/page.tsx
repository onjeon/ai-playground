'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Sparkles, GitBranch } from 'lucide-react';
import { generateTarotReading, TarotReading } from '@/lib/fortune/tarot';

export default function ChoiceTarotPage() {
  const [step, setStep] = useState<'input' | 'drawing' | 'result'>('input');
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [choiceA, setChoiceA] = useState('');
  const [choiceB, setChoiceB] = useState('');

  const canProceed = choiceA.trim().length > 0 && choiceB.trim().length > 0;

  const handleDraw = async () => {
    if (!canProceed) return;

    setStep('drawing');
    await new Promise(resolve => setTimeout(resolve, 2500));

    const result = generateTarotReading('choice', {
      choiceA: choiceA.trim(),
      choiceB: choiceB.trim()
    });
    setReading(result);
    setStep('result');
  };

  const handleShare = async () => {
    if (!reading) return;

    const shareText = `🔮 선택의 기로 타로 - "${choiceA}" vs "${choiceB}"

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

  // 선택지 입력
  if (step === 'input') {
    return (
      <div className="space-y-6">
        <div className="flex items-center">
          <Link href="/fortune/tarot" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span>뒤로</span>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
            <GitBranch className="w-4 h-4 text-indigo-500" />
            <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">3카드 스프레드</span>
          </div>

          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">선택의 기로</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            고민 중인 두 가지 선택지를 입력하세요<br />타로가 각 선택의 결과를 알려드립니다
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
              선택 A
            </label>
            <input
              type="text"
              value={choiceA}
              onChange={(e) => setChoiceA(e.target.value)}
              placeholder="예: 이직하기"
              maxLength={30}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center text-indigo-500 font-bold text-xl">VS</div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
              선택 B
            </label>
            <input
              type="text"
              value={choiceB}
              onChange={(e) => setChoiceB(e.target.value)}
              placeholder="예: 현 직장에서 버티기"
              maxLength={30}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* 3장 카드 미리보기 */}
        <div className="flex justify-center gap-4">
          {['현재', choiceA || 'A', choiceB || 'B'].map((label, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-28 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg flex items-center justify-center mb-2">
                <span className="text-3xl">🎴</span>
              </div>
              <span className="text-gray-500 text-xs truncate block max-w-[80px]">{label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleDraw}
          disabled={!canProceed}
          className={`w-full px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
            canProceed
              ? 'bg-indigo-500 hover:bg-indigo-600 text-white hover:scale-[1.02]'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
          }`}
        >
          3장의 카드 뽑기
        </button>

        <p className="text-gray-500 text-sm text-center">
          💳 프리미엄 콘텐츠 · 900원
        </p>
      </div>
    );
  }

  // 드로잉 중
  if (step === 'drawing') {
    return (
      <div className="py-12 text-center">
        <div className="text-6xl mb-6 animate-pulse">🔮</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">카드를 섞는 중...</h2>
        <p className="text-gray-600 dark:text-gray-400">
          "{choiceA}" vs "{choiceB}"<br />
          당신의 선택을 위한 카드를 준비하고 있습니다
        </p>
        <Sparkles className="w-8 h-8 text-indigo-500 mx-auto mt-6 animate-spin" />
      </div>
    );
  }

  // 결과
  if (step === 'result' && reading) {
    const positionColors = [
      'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700',
      'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700',
      'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700'
    ];
    const positionIcons = ['🔍', '🅰️', '🅱️'];

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            "{choiceA}" vs "{choiceB}"
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{reading.description}</p>
        </div>

        {/* 3장 카드 */}
        <div className="space-y-4">
          {reading.cards.map((cardData, index) => (
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
          ))}
        </div>

        {/* 종합 해석 */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5">
          <h3 className="text-gray-900 dark:text-white font-bold mb-3 flex items-center gap-2">
            <GitBranch className="w-5 h-5" />
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
