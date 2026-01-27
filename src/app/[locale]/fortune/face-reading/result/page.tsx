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
    const fullText = shareText + '\n' + window.location.origin + '/fortune/face-reading';

    if (navigator.share) {
      try {
        await navigator.share({
          title: '관상 분석',
          text: shareText,
          url: window.location.origin + '/fortune/face-reading',
        });
        return;
      } catch {
        // fallback
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(fullText);
        alert('링크가 복사되었습니다!');
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
      alert('링크가 복사되었습니다!');
    } catch {
      alert('공유 기능을 사용할 수 없습니다.');
    }
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <Link
          href="/fortune/face-reading"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">다시 하기</span>
        </Link>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-sm">공유하기</span>
        </button>
      </div>

      {/* 메인 카드 - 종합 유형 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 dark:bg-rose-500/20 rounded-full mb-4">
            <Eye className="w-4 h-4 text-rose-500 dark:text-rose-400" />
            <span className="text-rose-600 dark:text-rose-400 text-sm font-medium">관상 분석 결과</span>
          </div>

          <div className="text-6xl mb-4">🎭</div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {result.overallType}
          </h1>
        </div>

        {/* 종합 설명 */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base text-center">
          {result.overallDescription}
        </p>
      </div>

      {/* 성격 특성 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <User className="w-5 h-5 text-rose-500 dark:text-rose-400" />
          성격 특성
        </h2>
        <div className="flex flex-wrap gap-2">
          {result.personality.map((trait, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-rose-50 dark:bg-rose-500/20 border border-rose-200 dark:border-rose-500/30 rounded-full text-rose-700 dark:text-rose-200 text-sm"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* 부위별 분석 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <Sparkles className="w-5 h-5 text-rose-500 dark:text-rose-400" />
          부위별 관상 분석
        </h2>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {result.traits.map((trait, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{trait.partEmoji}</span>
                <span className="font-bold text-gray-900 dark:text-white">{trait.part}</span>
                <span className="text-gray-400 dark:text-gray-500 text-sm">· {trait.trait}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{trait.meaning}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{trait.fortune}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 강점 & 주의점 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 강점 */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 border border-green-200 dark:border-green-800">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
            <Star className="w-5 h-5 text-green-500 dark:text-green-400" />
            강점
          </h3>
          <ul className="space-y-2">
            {result.strengths.map((strength, i) => (
              <li key={i} className="flex items-start gap-2 text-green-700 dark:text-green-100/80 text-sm">
                <span className="text-green-500 dark:text-green-400">✓</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* 주의점 */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            주의점
          </h3>
          <ul className="space-y-2">
            {result.cautions.map((caution, i) => (
              <li key={i} className="flex items-start gap-2 text-amber-700 dark:text-amber-100/80 text-sm">
                <span className="text-amber-500 dark:text-amber-400">!</span>
                {caution}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 적합 직업 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <Briefcase className="w-5 h-5 text-rose-500 dark:text-rose-400" />
          적합한 직업/분야
        </h2>
        <div className="flex flex-wrap gap-2">
          {result.careerFit.map((career, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 rounded-full text-blue-700 dark:text-blue-200 text-sm"
            >
              {career}
            </span>
          ))}
        </div>
      </div>

      {/* 연애운 & 재물운 */}
      <div className="space-y-4">
        {/* 연애운 */}
        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-5 border border-pink-200 dark:border-pink-800">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
            <Heart className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            연애운
          </h3>
          <p className="text-pink-700 dark:text-pink-100/80 text-sm leading-relaxed">
            {result.loveFortune}
          </p>
        </div>

        {/* 재물운 */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
            <Coins className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            재물운
          </h3>
          <p className="text-amber-700 dark:text-amber-100/80 text-sm leading-relaxed">
            {result.wealthFortune}
          </p>
        </div>

        {/* 건강 조언 */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 border border-green-200 dark:border-green-800">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3">
            <Activity className="w-5 h-5 text-green-500 dark:text-green-400" />
            건강 조언
          </h3>
          <p className="text-green-700 dark:text-green-100/80 text-sm leading-relaxed">
            {result.healthTip}
          </p>
        </div>
      </div>

      {/* 행운 요소 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">🍀</span> 행운의 요소
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-rose-50 dark:bg-rose-500/20 rounded-full">
              <Palette className="w-6 h-6 text-rose-500 dark:text-rose-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 색</div>
            <div className="text-rose-600 dark:text-rose-300 font-bold">
              {result.luckyColor}
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-rose-50 dark:bg-rose-500/20 rounded-full">
              <Hash className="w-6 h-6 text-rose-500 dark:text-rose-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 숫자</div>
            <div className="text-rose-600 dark:text-rose-300 font-bold">
              {result.luckyNumber}
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="text-center space-y-4">
        <p className="text-gray-400 dark:text-gray-500 text-xs">
          동양 전통 관상학을 기반으로 한 재미 콘텐츠입니다<br />
          참고용으로만 즐겨주세요
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleShare}
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            결과 공유하기
          </button>

          <Link
            href="/fortune/face-reading"
            className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            다시 분석하기
          </Link>
        </div>

        <Link
          href="/"
          className="inline-block text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default function FaceReadingResultPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    }>
      <FaceReadingResultContent />
    </Suspense>
  );
}
