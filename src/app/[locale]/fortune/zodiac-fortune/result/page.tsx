'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Star, ArrowLeft, Share2, Calendar, 
  Briefcase, Coins, Heart, Activity, BookOpen,
  Sparkles, Clover
} from 'lucide-react';
import { getConstellationByBirthDate, getConstellationInfo } from '@/lib/fortune/constellation';
import { getZodiacFortune } from '@/data/fortune/zodiac-fortune';

function ZodiacFortuneResult() {
  const searchParams = useSearchParams();
  const birth = searchParams.get('birth');

  if (!birth || birth.length !== 8) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="mb-4">잘못된 접근입니다.</p>
          <Link href="/fortune/zodiac-fortune" className="text-blue-400 underline">
            다시 시작하기
          </Link>
        </div>
      </div>
    );
  }

  // 별자리 계산
  const constellation = getConstellationByBirthDate(birth);
  const constellationInfo = getConstellationInfo(constellation);
  const fortune = getZodiacFortune(constellation);

  // 생년월일 파싱
  const birthYear = birth.substring(0, 4);
  const birthMonth = birth.substring(4, 6);
  const birthDay = birth.substring(6, 8);

  // 공유 함수
  const handleShare = async () => {
    const shareText = `${constellationInfo.symbol} 2025 ${constellationInfo.name} 운세\n\n올해의 키워드: ${fortune.keywords.join(', ')}\n행운지수: ${'★'.repeat(fortune.luckyScore)}${'☆'.repeat(5 - fortune.luckyScore)}\n\n나도 별자리 운세 보기`;
    const fullText = shareText + '\n' + window.location.origin + '/fortune/zodiac-fortune';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `2025 ${constellationInfo.name} 운세`,
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch {
        // fallback
      }
    }
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(fullText);
        alert('클립보드에 복사되었습니다!');
        return;
      } catch {
        // fallback
      }
    }
    
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
      alert('공유 기능을 사용할 수 없습니다.');
    }
  };

  // 분야별 아이콘
  const categoryIcons = {
    career: Briefcase,
    wealth: Coins,
    love: Heart,
    health: Activity,
    study: BookOpen,
  };

  const categoryLabels = {
    career: '직장/사업운',
    wealth: '재물운',
    love: '연애/결혼운',
    health: '건강운',
    study: '학업/자기계발운',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-950">
      {/* 별 배경 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 19) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.1,
              animationDelay: `${(i % 7) * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <div className="flex justify-between items-center mb-6">
          <Link 
            href="/fortune/zodiac-fortune" 
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>다시 보기</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 hover:bg-blue-500/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>공유</span>
          </button>
        </div>

        {/* 헤더 카드 */}
        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-3xl p-6 md:p-8 border border-blue-500/30 shadow-2xl mb-6">
          <div className="text-center">
            {/* 별자리 심볼 */}
            <div className="text-6xl mb-4">{constellationInfo.symbol}</div>
            
            {/* 별자리 정보 */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {constellationInfo.name}
            </h1>
            <p className="text-blue-200/80 text-lg mb-4">
              {constellationInfo.english} · {constellationInfo.dateRange}
            </p>

            {/* 생년월일 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-200 text-sm mb-4">
              <Calendar className="w-4 h-4" />
              {birthYear}년 {parseInt(birthMonth)}월 {parseInt(birthDay)}일생
            </div>

            {/* 원소 & 지배행성 */}
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300">
                {constellationInfo.element}
              </span>
              <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300">
                {constellationInfo.ruling}
              </span>
            </div>
          </div>
        </div>

        {/* 올해의 키워드 & 행운지수 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-2 text-blue-300 text-sm mb-3">
              <Sparkles className="w-4 h-4" />
              올해의 키워드
            </div>
            <div className="flex flex-wrap gap-2">
              {fortune.keywords.map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-white text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-2 text-blue-300 text-sm mb-3">
              <Star className="w-4 h-4" />
              행운 지수
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`w-6 h-6 ${
                    n <= fortune.luckyScore 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 총운 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 border border-blue-500/20 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            2025년 총운
          </h2>
          <p className="text-blue-100/90 leading-relaxed whitespace-pre-line">
            {fortune.overview}
          </p>
        </div>

        {/* 분야별 운세 */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📊</span>
            분야별 운세
          </h2>
          {Object.entries(fortune.categories).map(([key, text]) => {
            const Icon = categoryIcons[key as keyof typeof categoryIcons];
            const label = categoryLabels[key as keyof typeof categoryLabels];
            return (
              <div 
                key={key}
                className="bg-white/5 rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold">{label}</h3>
                </div>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        {/* 월별 운세 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 border border-blue-500/20 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">📅</span>
            월별 운세
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fortune.monthly.map((monthFortune, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-xl p-4 border border-white/5"
              >
                <p className="text-blue-100/80 text-sm">{monthFortune}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 행운의 요소 */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-3xl p-6 border border-blue-500/30 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clover className="w-6 h-6 text-green-400" />
            행운의 요소
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-blue-300/70 text-xs mb-1">행운의 숫자</div>
              <div className="text-white text-lg font-bold">
                {fortune.lucky.numbers.join(', ')}
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-blue-300/70 text-xs mb-1">행운의 색상</div>
              <div className="text-white text-lg font-bold">
                {fortune.lucky.colors.join(', ')}
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-blue-300/70 text-xs mb-1">행운의 요일</div>
              <div className="text-white text-lg font-bold">
                {fortune.lucky.day}
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-blue-300/70 text-xs mb-1">행운의 방향</div>
              <div className="text-white text-lg font-bold">
                {fortune.lucky.direction}
              </div>
            </div>
          </div>
        </div>

        {/* 2025년 조언 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 border border-blue-500/20 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            2025년 조언
          </h2>
          <div className="space-y-4">
            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
              <div className="text-green-400 text-sm font-medium mb-2">✓ 올해 꼭 해야 할 것</div>
              <p className="text-green-100/80 text-sm">{fortune.advice.do}</p>
            </div>
            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
              <div className="text-red-400 text-sm font-medium mb-2">✗ 올해 피해야 할 것</div>
              <p className="text-red-100/80 text-sm">{fortune.advice.dont}</p>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            <Share2 className="w-5 h-5" />
            결과 공유하기
          </button>
          <Link
            href="/fortune/fortune-2025"
            className="block w-full py-4 bg-white/10 text-white font-medium rounded-2xl text-center hover:bg-white/20 transition-colors"
          >
            🐍 띠 운세도 보기
          </Link>
          <Link
            href="/"
            className="block w-full py-3 text-blue-300/70 text-center hover:text-blue-300 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>

        {/* 면책 */}
        <div className="mt-8 text-center">
          <p className="text-blue-300/40 text-xs leading-relaxed">
            본 운세는 서양 점성술을 기반으로 한 재미 콘텐츠입니다.<br />
            중요한 결정은 전문가와 상담하시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ZodiacFortuneResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-950 flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    }>
      <ZodiacFortuneResult />
    </Suspense>
  );
}
