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
      <div className="min-h-screen bg-gradient-to-b from-pink-950 via-purple-950 to-slate-950">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Link href="/fortune/tarot" className="text-purple-300 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>뒤로</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full mb-4">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-pink-300 text-sm font-medium">4카드 스프레드</span>
            </div>
            
            <div className="text-6xl mb-6">💑</div>
            <h1 className="text-3xl font-bold text-white mb-4">연인관계 분석</h1>
            <p className="text-purple-200/80 text-lg mb-8">
              나와 상대의 마음, 관계의 장애물과<br />조언을 4장의 카드로 심층 분석합니다
            </p>

            {/* 4장 카드 미리보기 */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              {['내 마음', '상대 마음', '장애물', '조언'].map((label, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-24 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">🎴</span>
                  </div>
                  <span className="text-purple-300/70 text-xs">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleDraw}
              disabled={isDrawing}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                isDrawing
                  ? 'bg-purple-600/50 text-purple-300'
                  : 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:scale-105 shadow-lg shadow-pink-500/30'
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

            <p className="text-purple-300/50 text-sm mt-6">
              💳 프리미엄 콘텐츠 · 900원
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 결과
  if (step === 'result' && reading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-950 via-purple-950 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/fortune/tarot" className="text-purple-300 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300"
            >
              <Share2 className="w-4 h-4" />
              <span>공유</span>
            </button>
          </div>

          {/* 제목 */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-pink-300 mb-2">{reading.title}</h1>
            <p className="text-purple-200/70">{reading.description}</p>
          </div>

          {/* 4장 카드 - 2x2 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {reading.cards.map((cardData, index) => {
              const positionColors = [
                'from-blue-500/20 to-blue-600/20 border-blue-500/30',   // 내 마음
                'from-pink-500/20 to-pink-600/20 border-pink-500/30',   // 상대 마음
                'from-orange-500/20 to-orange-600/20 border-orange-500/30', // 장애물
                'from-green-500/20 to-green-600/20 border-green-500/30' // 조언
              ];
              const positionIcons = ['💙', '💗', '⚡', '✨'];
              
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${positionColors[index]} border rounded-2xl p-5`}
                >
                  {/* 포지션 */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{positionIcons[index]}</span>
                    <span className="text-white font-medium">
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
                          className="rounded-lg border border-amber-500/30"
                        />
                      </div>
                    </div>

                    {/* 카드 정보 */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <h3 className="text-lg font-bold text-amber-300">{cardData.card.nameKo}</h3>
                        <p className="text-purple-300/70 text-xs">{cardData.card.nameEn}</p>
                        {cardData.card.isReversed && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-violet-600/30 rounded text-xs text-violet-300">
                            역방향
                          </span>
                        )}
                      </div>

                      {/* 키워드 */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cardData.card.keywords.slice(0, 3).map((kw, i) => (
                          <span key={i} className="px-2 py-0.5 bg-amber-500/10 rounded text-xs text-amber-300">
                            {kw}
                          </span>
                        ))}
                      </div>

                      {/* 해석 */}
                      <p className="text-white/90 text-sm leading-relaxed">
                        {cardData.interpretation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 종합 해석 */}
          <div className="bg-slate-800/30 border border-pink-500/20 rounded-2xl p-6 mb-6">
            <h3 className="text-pink-300 font-bold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              종합 해석
            </h3>
            <p className="text-purple-100/80 leading-relaxed">{reading.overall}</p>
          </div>

          {/* 버튼 */}
          <div className="space-y-3">
            <button
              onClick={handleShare}
              className="w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              결과 공유하기
            </button>
            <Link
              href="/fortune/tarot"
              className="block w-full py-4 bg-slate-700/50 text-white font-medium rounded-xl text-center"
            >
              다른 타로 보기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
