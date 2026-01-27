'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import {
  Star, Briefcase, Coins, Heart, Activity,
  Hash, Palette, ArrowLeft, Share2, Sparkles, Moon
} from 'lucide-react';
import { generateDreamInterpretation, DREAM_CATEGORIES } from '@/lib/fortune/dream';

function DreamResultContent() {
  const searchParams = useSearchParams();
  const keywordsParam = searchParams.get('keywords') || '';
  const selectedIds = keywordsParam.split(',').filter(Boolean);

  // 꿈해몽 결과 생성
  const result = generateDreamInterpretation(selectedIds);

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-purple-400 text-purple-400' : 'text-gray-300 dark:text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  // 분야별 아이콘
  const categoryIcons: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
    wealth: { icon: <Coins className="w-5 h-5" />, label: '재물운', color: 'from-amber-500 to-yellow-500' },
    love: { icon: <Heart className="w-5 h-5" />, label: '연애운', color: 'from-pink-500 to-rose-500' },
    career: { icon: <Briefcase className="w-5 h-5" />, label: '직장운', color: 'from-blue-500 to-cyan-500' },
    health: { icon: <Activity className="w-5 h-5" />, label: '건강운', color: 'from-green-500 to-emerald-500' },
  };

  // 운세 레벨 텍스트
  const getFortuneText = (fortune: string) => {
    switch (fortune) {
      case 'great': return { text: '대길 (大吉)', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/20 border-amber-200 dark:border-amber-500/40' };
      case 'good': return { text: '길 (吉)', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/20 border-green-200 dark:border-green-500/40' };
      case 'neutral': return { text: '평 (平)', color: 'text-gray-600 dark:text-gray-300', bg: 'bg-gray-50 dark:bg-gray-500/20 border-gray-200 dark:border-gray-500/40' };
      case 'caution': return { text: '주의 (注意)', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-500/20 border-red-200 dark:border-red-500/40' };
      default: return { text: '평', color: 'text-gray-600 dark:text-gray-300', bg: 'bg-gray-50 dark:bg-gray-500/20 border-gray-200 dark:border-gray-500/40' };
    }
  };

  const fortuneInfo = getFortuneText(result.overallFortune);

  const handleShare = async () => {
    const keywordNames = result.selectedKeywords.map(k => k.name).join(', ');
    const shareText = `꿈해몽 결과\n\n꿈에 나온 것: ${keywordNames}\n결과: ${fortuneInfo.text}\n\n나도 꿈해몽 해보기`;
    const fullText = shareText + '\n' + window.location.origin + '/fortune/dream';

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

  // 선택된 키워드의 카테고리 찾기
  const getKeywordCategory = (keywordId: string) => {
    for (const category of DREAM_CATEGORIES) {
      if (category.keywords.some(k => k.id === keywordId)) {
        return category;
      }
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <Link
          href="/fortune/dream"
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

      {/* 메인 카드 - 기본 정보 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 dark:bg-purple-500/20 rounded-full mb-4">
            <Moon className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">꿈해몽 결과</span>
          </div>

          <div className="text-5xl mb-4">🌙</div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            꿈 해석 결과
          </h1>

          {/* 선택한 키워드들 */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {result.selectedKeywords.map((keyword) => {
              const category = getKeywordCategory(keyword.id);
              return (
                <span
                  key={keyword.id}
                  className="px-3 py-1.5 bg-purple-50 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 rounded-full text-purple-700 dark:text-purple-200 text-sm"
                >
                  {category?.emoji} {keyword.name}
                </span>
              );
            })}
          </div>

          {/* 총운 등급 */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-600 dark:text-gray-400 text-sm">종합 운세</span>
            {renderStars(result.overallRating)}
            <span className={`px-3 py-1 ${fortuneInfo.bg} border rounded-full text-sm font-bold ${fortuneInfo.color}`}>
              {fortuneInfo.text}
            </span>
          </div>
        </div>
      </div>

      {/* 종합 해석 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
          종합 해석
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          {result.summary}
        </p>
      </div>

      {/* 상세 해석 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">📖</span> 상세 해석
        </h2>
        <div className="space-y-4">
          {result.selectedKeywords.map((keyword) => {
            const category = getKeywordCategory(keyword.id);
            const kFortuneInfo = getFortuneText(keyword.fortune);
            return (
              <div
                key={keyword.id}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">
                    {category?.emoji} {keyword.name}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs ${kFortuneInfo.bg} border ${kFortuneInfo.color}`}>
                    {kFortuneInfo.text}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {keyword.meaning}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 분야별 운세 */}
      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white px-2">
          <span className="text-2xl">📊</span> 분야별 해석
        </h2>

        {Object.entries(result.categories).map(([key, value]) => {
          const category = categoryIcons[key];
          return (
            <div
              key={key}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{category.label}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {value}
              </p>
            </div>
          );
        })}
      </div>

      {/* 행운 정보 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">🍀</span> 행운의 요소
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-purple-50 dark:bg-purple-500/20 rounded-full">
              <Hash className="w-6 h-6 text-purple-500 dark:text-purple-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 숫자</div>
            <div className="text-purple-600 dark:text-purple-300 font-bold">
              {result.luckyNumbers.length > 0 ? result.luckyNumbers.join(', ') : '-'}
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-purple-50 dark:bg-purple-500/20 rounded-full">
              <Palette className="w-6 h-6 text-purple-500 dark:text-purple-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 색</div>
            <div className="text-purple-600 dark:text-purple-300 font-bold">
              {result.luckyColor}
            </div>
          </div>
        </div>
      </div>

      {/* 조언 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">💡</span> 오늘의 조언
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          {result.advice}
        </p>
      </div>

      {/* 푸터 */}
      <div className="text-center space-y-4">
        <p className="text-gray-400 dark:text-gray-500 text-xs">
          동양 전통 해몽학을 기반으로 한 꿈 해석입니다<br />
          재미로 참고하시고, 좋은 하루 되세요
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
            href="/fortune/dream"
            className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            다른 꿈 해몽하기
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

export default function DreamResultPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    }>
      <DreamResultContent />
    </Suspense>
  );
}
