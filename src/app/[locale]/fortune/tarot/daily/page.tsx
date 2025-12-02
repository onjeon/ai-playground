'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Sparkles } from 'lucide-react';
import { 
  generateTarotReading, 
  checkDailyLimit, 
  recordDailyReading,
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
    // 오늘 이미 읽었는지 확인
    const canRead = checkDailyLimit(type);
    setHasReadToday(!canRead);
  }, [type]);

  const handleDraw = async () => {
    if (hasReadToday) return;
    
    setIsDrawing(true);
    
    // 카드 뽑기 애니메이션 효과
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = generateTarotReading(type);
    setReading(result);
    recordDailyReading(type);
    setHasReadToday(true);
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

  // 이미 읽은 경우
  if (hasReadToday && step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🌙</div>
          <h1 className="text-2xl font-bold text-white mb-4">
            오늘의 {spreadInfo.title}을 이미 확인하셨습니다
          </h1>
          <p className="text-purple-200/70 mb-8">
            내일 오전 0시 이후에 다시 확인하실 수 있어요
          </p>
          <div className="space-y-3">
            <Link
              href="/fortune/tarot"
              className="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors"
            >
              다른 타로 보기
            </Link>
            <Link
              href="/"
              className="block w-full py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors"
            >
              홈으로
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 인트로 화면
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
        <div className="max-w-2xl mx-auto px-4 py-12">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/fortune/tarot" className="text-purple-300 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>뒤로</span>
            </Link>
          </div>

          {/* 메인 */}
          <div className="text-center">
            <div className="text-6xl mb-6">{spreadInfo.icon}</div>
            <h1 className="text-3xl font-bold text-white mb-4">{spreadInfo.title}</h1>
            <p className="text-purple-200/80 text-lg mb-8">{spreadInfo.description}</p>

            {/* 카드 뽑기 버튼 */}
            <button
              onClick={handleDraw}
              disabled={isDrawing}
              className={`relative w-48 h-48 mx-auto rounded-2xl border-2 transition-all duration-300 ${
                isDrawing 
                  ? 'border-purple-400 bg-purple-500/20 animate-pulse' 
                  : 'border-purple-500/50 bg-slate-800/50 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105'
              }`}
            >
              {isDrawing ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <Sparkles className="w-12 h-12 text-purple-400 animate-spin" />
                  <p className="text-purple-300 mt-4">카드를 섞는 중...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-5xl mb-3">🎴</div>
                  <p className="text-white font-medium">카드 뽑기</p>
                  <p className="text-purple-300/60 text-sm mt-1">터치하세요</p>
                </div>
              )}
            </button>

            <p className="text-purple-300/50 text-sm mt-8">
              마음을 가다듬고 카드를 뽑아주세요
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (step === 'result' && reading) {
    const card = reading.cards[0];
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/fortune/tarot" className="text-purple-300 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 hover:bg-purple-500/30"
            >
              <Share2 className="w-4 h-4" />
              <span>공유</span>
            </button>
          </div>

          {/* 제목 */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-amber-300 mb-2">{reading.title}</h1>
            <p className="text-purple-200/70">{reading.description}</p>
          </div>

          {/* 카드 결과 */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-6">
            {/* 카드 이미지 */}
            <div className="flex justify-center mb-6">
              <div className={`relative ${card.card.isReversed ? 'rotate-180' : ''}`}>
                <Image
                  src={card.card.imagePath}
                  alt={card.card.nameKo}
                  width={120}
                  height={180}
                  className="rounded-lg shadow-lg border-2 border-amber-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* 카드 정보 */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-amber-300 mb-1">{card.card.nameKo}</h2>
              <p className="text-purple-200/70 text-sm mb-2">{card.card.nameEn}</p>
              {card.card.isReversed && (
                <span className="inline-block px-3 py-1 bg-violet-600/30 rounded-full text-sm text-violet-300">
                  역방향
                </span>
              )}
            </div>

            {/* 키워드 */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {card.card.keywords.map((keyword, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-amber-500/20 rounded-full text-sm text-amber-300 border border-amber-500/30"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* 해석 */}
            <div className="mb-6">
              <h3 className="text-amber-300 font-medium mb-2 flex items-center gap-2">
                <span>📖</span> 해석
              </h3>
              <p className="text-white leading-relaxed">
                {card.interpretation}
              </p>
            </div>

            {/* 조언 */}
            <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
              <h3 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                <span>💡</span> 조언
              </h3>
              <p className="text-purple-100/90 text-sm leading-relaxed">
                {card.card.isReversed ? card.card.reversed.advice : card.card.upright.advice}
              </p>
            </div>
          </div>

          {/* 종합 해석 */}
          <div className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-5 mb-6">
            <h3 className="text-amber-300 font-medium mb-2">🌟 종합</h3>
            <p className="text-purple-100/80 text-sm leading-relaxed">
              {reading.overall}
            </p>
          </div>

          {/* 버튼들 */}
          <div className="space-y-3">
            <button
              onClick={handleShare}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              결과 공유하기
            </button>
            <Link
              href="/fortune/tarot"
              className="block w-full py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-medium rounded-xl text-center transition-colors"
            >
              다른 타로 보기
            </Link>
          </div>

          {/* 안내 */}
          <p className="text-center text-purple-300/50 text-xs mt-6">
            🕰️ {spreadInfo.title}은 하루에 한 번만 확인할 수 있습니다
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default function DailyTarotPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-950 flex items-center justify-center">
        <div className="text-purple-300">로딩 중...</div>
      </div>
    }>
      <DailyTarotContent />
    </Suspense>
  );
}
