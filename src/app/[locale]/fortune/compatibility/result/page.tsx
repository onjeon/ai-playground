'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Heart, ArrowLeft, Share2, 
  MessageCircle, Zap, Lightbulb, TrendingUp
} from 'lucide-react';
import { calculateCompatibility } from '@/lib/fortune/compatibility';
import { 
  getCompatibilityAdvice, 
  COMPATIBILITY_MESSAGES,
  getScoreEmoji,
  getScoreGradient
} from '@/data/fortune/compatibility';

function CompatibilityResult() {
  const searchParams = useSearchParams();
  const birth1 = searchParams.get('birth1');
  const birth2 = searchParams.get('birth2');

  if (!birth1 || !birth2 || birth1.length !== 8 || birth2.length !== 8) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-950 to-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="mb-4">잘못된 접근입니다.</p>
          <Link href="/fortune/compatibility" className="text-pink-400 underline">
            다시 시작하기
          </Link>
        </div>
      </div>
    );
  }

  // 궁합 계산
  const result = calculateCompatibility(birth1, birth2);
  const advice = getCompatibilityAdvice(result.overall.score, result.zodiac.type, result.constellation.type);
  const zodiacMessage = COMPATIBILITY_MESSAGES.zodiac[result.zodiac.type];
  const constMessage = COMPATIBILITY_MESSAGES.constellation[result.constellation.type];

  // 공유 함수
  const handleShare = async () => {
    const shareText = `💕 궁합 운세 결과\n\n${result.zodiac.person1.emoji}${result.zodiac.person1.name} + ${result.zodiac.person2.emoji}${result.zodiac.person2.name}\n${result.constellation.person1.symbol}${result.constellation.person1.name} + ${result.constellation.person2.symbol}${result.constellation.person2.name}\n\n종합 궁합: ${result.overall.score}점 ${getScoreEmoji(result.overall.score)}\n${result.overall.grade}\n\n나도 궁합 보기`;
    const fullText = shareText + '\n' + window.location.origin + '/fortune/compatibility';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '궁합 운세 결과',
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch {
        // 공유 취소 또는 실패 시 클립보드로 fallback
      }
    }
    
    // 클립보드 복사 (HTTPS 또는 localhost에서만 작동)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(fullText);
        alert('클립보드에 복사되었습니다!');
        return;
      } catch {
        // 클립보드 API 실패 시 fallback
      }
    }
    
    // Fallback: execCommand 사용
    try {
      const textarea = document.createElement('textarea');
      textarea.value = fullText;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('클립보드에 복사되었습니다!');
    } catch {
      alert('공유 기능을 사용할 수 없습니다. URL을 직접 복사해주세요.');
    }
  };

  // 점수 원형 프로그레스
  const ScoreCircle = ({ score, label, size = 'large' }: { score: number; label: string; size?: 'large' | 'small' }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (score / 100) * circumference;
    const isLarge = size === 'large';
    
    return (
      <div className={`flex flex-col items-center ${isLarge ? 'mb-4' : ''}`}>
        <div className={`relative ${isLarge ? 'w-32 h-32' : 'w-20 h-20'}`}>
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`font-bold text-white ${isLarge ? 'text-3xl' : 'text-xl'}`}>{score}</span>
            <span className={`text-pink-300/70 ${isLarge ? 'text-sm' : 'text-xs'}`}>점</span>
          </div>
        </div>
        <span className={`text-pink-200 ${isLarge ? 'text-sm mt-2' : 'text-xs mt-1'}`}>{label}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-950 via-rose-950 to-slate-950">
      {/* 하트 배경 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500/10 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              fontSize: `${12 + (i % 5) * 4}px`,
              animationDelay: `${(i % 5) * 0.4}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <div className="flex justify-between items-center mb-6">
          <Link 
            href="/fortune/compatibility" 
            className="flex items-center gap-2 text-pink-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>다시 보기</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 hover:bg-pink-500/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>공유</span>
          </button>
        </div>

        {/* 메인 결과 카드 */}
        <div className={`bg-gradient-to-br ${getScoreGradient(result.overall.score)} p-1 rounded-3xl mb-6`}>
          <div className="bg-slate-900/95 rounded-3xl p-6 md:p-8">
            <div className="text-center">
              {/* 두 사람 정보 */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">{result.zodiac.person1.emoji}</div>
                  <div className="text-white text-sm">{result.zodiac.person1.name}</div>
                  <div className="text-pink-300/70 text-xs">{result.constellation.person1.symbol} {result.constellation.person1.name}</div>
                </div>
                <div className="text-3xl">💕</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">{result.zodiac.person2.emoji}</div>
                  <div className="text-white text-sm">{result.zodiac.person2.name}</div>
                  <div className="text-pink-300/70 text-xs">{result.constellation.person2.symbol} {result.constellation.person2.name}</div>
                </div>
              </div>

              {/* 종합 점수 */}
              <ScoreCircle score={result.overall.score} label="종합 궁합" size="large" />
              
              {/* 등급 */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 rounded-full mb-4">
                <span className="text-2xl">{getScoreEmoji(result.overall.score)}</span>
                <span className="text-white font-bold text-xl">{result.overall.grade}</span>
              </div>
              
              {/* 요약 */}
              <p className="text-pink-100/90 leading-relaxed">
                {result.overall.summary}
              </p>
            </div>
          </div>
        </div>

        {/* 띠/별자리 궁합 상세 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* 띠 궁합 */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="text-center mb-4">
              <div className="text-2xl mb-2">{zodiacMessage.emoji}</div>
              <div className="text-white font-medium text-sm">{zodiacMessage.title}</div>
            </div>
            <ScoreCircle score={result.zodiac.score} label="띠 궁합" size="small" />
          </div>
          
          {/* 별자리 궁합 */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="text-center mb-4">
              <div className="text-2xl mb-2">{constMessage.emoji}</div>
              <div className="text-white font-medium text-sm">{constMessage.title}</div>
            </div>
            <ScoreCircle score={result.constellation.score} label="별자리 궁합" size="small" />
          </div>
        </div>

        {/* 띠 궁합 설명 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 border border-pink-500/20 mb-6">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">🐲</span>
            띠 궁합 분석
          </h2>
          <p className="text-pink-100/80 text-sm leading-relaxed mb-4">
            {result.zodiac.description}
          </p>
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <p className="text-pink-200/70 text-xs leading-relaxed">
              {zodiacMessage.message}
            </p>
          </div>
        </div>

        {/* 별자리 궁합 설명 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 border border-pink-500/20 mb-6">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">⭐</span>
            별자리 궁합 분석
          </h2>
          <p className="text-pink-100/80 text-sm leading-relaxed mb-4">
            {result.constellation.description}
          </p>
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <p className="text-pink-200/70 text-xs leading-relaxed">
              {constMessage.message}
            </p>
          </div>
        </div>

        {/* 분야별 조언 */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-pink-400" />
            관계 조언
          </h2>
          
          {/* 연애 궁합 */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-white font-semibold">연애 궁합</h3>
            </div>
            <p className="text-pink-100/80 text-sm leading-relaxed">
              {advice.love}
            </p>
          </div>

          {/* 소통 방식 */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">소통 방식</h3>
            </div>
            <p className="text-pink-100/80 text-sm leading-relaxed">
              {advice.communication}
            </p>
          </div>

          {/* 갈등 해결 */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold">갈등 해결</h3>
            </div>
            <p className="text-pink-100/80 text-sm leading-relaxed">
              {advice.conflict}
            </p>
          </div>

          {/* 미래 전망 */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-white font-semibold">미래 전망</h3>
            </div>
            <p className="text-pink-100/80 text-sm leading-relaxed">
              {advice.future}
            </p>
          </div>
        </div>

        {/* 관계 개선 팁 */}
        <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-3xl p-6 border border-pink-500/30 mb-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>
            관계 개선 팁
          </h2>
          <div className="space-y-3">
            {advice.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pink-300 text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-pink-100/80 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all"
          >
            <Share2 className="w-5 h-5" />
            결과 공유하기
          </button>
          <Link
            href="/fortune/fortune-2025"
            className="block w-full py-4 bg-white/10 text-white font-medium rounded-2xl text-center hover:bg-white/20 transition-colors"
          >
            🐍 2025 신년운세 보기
          </Link>
          <Link
            href="/fortune/zodiac-fortune"
            className="block w-full py-4 bg-white/10 text-white font-medium rounded-2xl text-center hover:bg-white/20 transition-colors"
          >
            ⭐ 별자리 운세 보기
          </Link>
          <Link
            href="/"
            className="block w-full py-3 text-pink-300/70 text-center hover:text-pink-300 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>

        {/* 면책 */}
        <div className="mt-8 text-center">
          <p className="text-pink-300/40 text-xs leading-relaxed">
            본 궁합 분석은 동양 사주학과 서양 점성술을 기반으로 한 재미 콘텐츠입니다.<br />
            실제 관계는 서로의 노력과 이해에 달려 있습니다 💕
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CompatibilityResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-pink-950 to-slate-950 flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    }>
      <CompatibilityResult />
    </Suspense>
  );
}
