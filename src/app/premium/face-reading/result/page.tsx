'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Heart, Coins, Briefcase, Activity,
  Hash, Palette, ArrowLeft, Share2, Eye, Sparkles, User, AlertTriangle, Star
} from 'lucide-react';
import { generateFaceReadingResult, FACE_QUESTIONS } from '@/lib/fortune/face-reading';

function FaceReadingResultContent() {
  const searchParams = useSearchParams();
  
  // URL 파라미터에서 답변 추출
  const answers: Record<string, string> = {};
  FACE_QUESTIONS.forEach(q => {
    const value = searchParams.get(q.id);
    if (value) {
      answers[q.id] = value;
    }
  });
  
  // 관상 결과 생성
  const result = generateFaceReadingResult(answers);

  const handleShare = async () => {
    const shareText = `관상 분석 결과\n\n${result.overallType}\n성격: ${result.personality.slice(0, 2).join(', ')}\n\n나도 관상 분석 받기`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '관상 분석',
          text: shareText,
          url: window.location.origin + '/premium/face-reading',
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(shareText + '\n' + window.location.origin + '/premium/face-reading');
      alert('링크가 복사되었습니다!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-950 via-pink-950 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-rose-400/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 23) % 100}%`,
              opacity: 0.2 + (i % 4) * 0.1,
              animationDelay: `${(i % 4) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/premium/face-reading" 
            className="flex items-center gap-2 text-rose-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">다시 하기</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-rose-200 hover:bg-white/20 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">공유하기</span>
          </button>
        </div>

        {/* 메인 카드 - 종합 유형 */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-rose-500/20 shadow-2xl shadow-rose-500/10 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-500/20 rounded-full mb-4">
              <Eye className="w-4 h-4 text-rose-400" />
              <span className="text-rose-400 text-sm font-medium">관상 분석 결과</span>
            </div>
            
            <div className="text-6xl mb-4">🎭</div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {result.overallType}
            </h1>
          </div>

          {/* 종합 설명 */}
          <p className="text-rose-100/90 leading-relaxed text-sm md:text-base text-center">
            {result.overallDescription}
          </p>
        </div>

        {/* 성격 특성 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-rose-500/20 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <User className="w-5 h-5 text-rose-400" />
            성격 특성
          </h2>
          <div className="flex flex-wrap gap-2">
            {result.personality.map((trait, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-200 text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* 부위별 분석 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-rose-500/20 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <Sparkles className="w-5 h-5 text-rose-400" />
            부위별 관상 분석
          </h2>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {result.traits.map((trait, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{trait.partEmoji}</span>
                  <span className="font-bold text-white">{trait.part}</span>
                  <span className="text-rose-300/60 text-sm">· {trait.trait}</span>
                </div>
                <p className="text-rose-200/70 text-sm mb-1">{trait.meaning}</p>
                <p className="text-rose-300/90 text-sm">{trait.fortune}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 강점 & 주의점 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* 강점 */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-5 border border-green-500/30">
            <h3 className="flex items-center gap-2 font-bold text-white mb-3">
              <Star className="w-5 h-5 text-green-400" />
              강점
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, i) => (
                <li key={i} className="flex items-start gap-2 text-green-100/80 text-sm">
                  <span className="text-green-400">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* 주의점 */}
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-5 border border-amber-500/30">
            <h3 className="flex items-center gap-2 font-bold text-white mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              주의점
            </h3>
            <ul className="space-y-2">
              {result.cautions.map((caution, i) => (
                <li key={i} className="flex items-start gap-2 text-amber-100/80 text-sm">
                  <span className="text-amber-400">!</span>
                  {caution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 적합 직업 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-rose-500/20 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <Briefcase className="w-5 h-5 text-rose-400" />
            적합한 직업/분야
          </h2>
          <div className="flex flex-wrap gap-2">
            {result.careerFit.map((career, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-200 text-sm"
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* 연애운 & 재물운 */}
        <div className="space-y-4 mb-6">
          {/* 연애운 */}
          <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-2xl p-5 border border-pink-500/30">
            <h3 className="flex items-center gap-2 font-bold text-white mb-3">
              <Heart className="w-5 h-5 text-pink-400" />
              연애운
            </h3>
            <p className="text-pink-100/80 text-sm leading-relaxed">
              {result.loveFortune}
            </p>
          </div>

          {/* 재물운 */}
          <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-2xl p-5 border border-amber-500/30">
            <h3 className="flex items-center gap-2 font-bold text-white mb-3">
              <Coins className="w-5 h-5 text-amber-400" />
              재물운
            </h3>
            <p className="text-amber-100/80 text-sm leading-relaxed">
              {result.wealthFortune}
            </p>
          </div>

          {/* 건강 조언 */}
          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-2xl p-5 border border-green-500/30">
            <h3 className="flex items-center gap-2 font-bold text-white mb-3">
              <Activity className="w-5 h-5 text-green-400" />
              건강 조언
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              {result.healthTip}
            </p>
          </div>
        </div>

        {/* 행운 요소 */}
        <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 border border-rose-500/30 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <span className="text-2xl">🍀</span> 행운의 요소
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-rose-500/20 rounded-full">
                <Palette className="w-6 h-6 text-rose-400" />
              </div>
              <div className="text-xs text-rose-300/60 mb-1">행운의 색</div>
              <div className="text-rose-300 font-bold">
                {result.luckyColor}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-rose-500/20 rounded-full">
                <Hash className="w-6 h-6 text-rose-400" />
              </div>
              <div className="text-xs text-rose-300/60 mb-1">행운의 숫자</div>
              <div className="text-rose-300 font-bold">
                {result.luckyNumber}
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center space-y-4">
          <p className="text-rose-300/50 text-xs">
            동양 전통 관상학을 기반으로 한 재미 콘텐츠입니다<br />
            참고용으로만 즐겨주세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              결과 공유하기
            </button>
            
            <Link
              href="/premium/face-reading"
              className="px-6 py-3 bg-white/10 text-rose-200 font-medium rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              다시 분석하기
            </Link>
          </div>
          
          <Link
            href="/"
            className="inline-block text-rose-300/60 text-sm hover:text-rose-200 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FaceReadingResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-rose-950 via-pink-950 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">🎭</div>
          <p className="text-rose-200">관상을 분석하는 중...</p>
        </div>
      </div>
    }>
      <FaceReadingResultContent />
    </Suspense>
  );
}
