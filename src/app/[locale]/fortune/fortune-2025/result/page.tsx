'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import {
  Star, Briefcase, Coins, Heart, Activity, BookOpen,
  Calendar, Compass, Palette, Hash, ArrowLeft, Share2,
  Sparkles
} from 'lucide-react';
import { getZodiacByBirthDate, getZodiacInfo, calculateAge, YEAR_2025 } from '@/lib/fortune/zodiac';
import { getFortune2025 } from '@/data/fortune/fortune-2025';

function FortuneResultContent() {
  const searchParams = useSearchParams();
  const birth = searchParams.get('birth') || '';

  // 생년월일 파싱
  const birthYear = parseInt(birth.substring(0, 4));
  const zodiac = getZodiacByBirthDate(birth);
  const zodiacInfo = getZodiacInfo(zodiac);
  const fortune = getFortune2025(zodiac);
  const age = calculateAge(birthYear);

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  // 카테고리 아이콘 매핑
  const categoryIcons: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
    career: { icon: <Briefcase className="w-5 h-5" />, label: '직장/사업운', color: 'from-blue-500 to-cyan-500' },
    wealth: { icon: <Coins className="w-5 h-5" />, label: '재물운', color: 'from-amber-500 to-yellow-500' },
    love: { icon: <Heart className="w-5 h-5" />, label: '연애/결혼운', color: 'from-pink-500 to-rose-500' },
    health: { icon: <Activity className="w-5 h-5" />, label: '건강운', color: 'from-green-500 to-emerald-500' },
    study: { icon: <BookOpen className="w-5 h-5" />, label: '학업/자기계발', color: 'from-purple-500 to-violet-500' },
  };

  const handleShare = async () => {
    const shareText = `🐍 2025 신년운세 결과\n\n${zodiacInfo.emoji} ${zodiacInfo.name} (${birthYear}년생)\n올해의 키워드: ${fortune.keywords.join(', ')}\n\n나도 2025년 운세 보러가기 👇`;
    const fullText = shareText + '\n' + window.location.origin + '/fortune/fortune-2025';

    if (navigator.share) {
      try {
        await navigator.share({
          title: '2025 신년운세',
          text: shareText,
          url: window.location.origin + '/fortune/fortune-2025',
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
        alert('링크가 복사되었습니다!');
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
      alert('링크가 복사되었습니다!');
    } catch {
      alert('공유 기능을 사용할 수 없습니다. URL을 직접 복사해주세요.');
    }
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <Link
          href="/fortune/fortune-2025"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">다시 보기</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 dark:bg-amber-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">{YEAR_2025.name}</span>
          </div>

          <div className="text-6xl mb-4">{zodiacInfo.emoji}</div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {zodiacInfo.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {birthYear}년생 · 만 {age}세 · {zodiacInfo.hanja} · {zodiacInfo.element}
          </p>
        </div>

        {/* 키워드 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {fortune.keywords.map((keyword, i) => (
            <span
              key={i}
              className="px-4 py-1.5 bg-amber-50 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 rounded-full text-amber-700 dark:text-amber-300 text-sm font-medium"
            >
              #{keyword}
            </span>
          ))}
        </div>

        {/* 총운 별점 */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-gray-600 dark:text-gray-400 text-sm">2025년 총운</span>
          {renderStars(fortune.overallRating)}
        </div>
      </div>

      {/* 총운 설명 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">🎯</span> 2025년 총운
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          {fortune.overall}
        </p>
      </div>

      {/* 분야별 운세 */}
      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white px-2">
          <span className="text-2xl">📊</span> 분야별 상세 운세
        </h2>

        {Object.entries(fortune.categories).map(([key, value]) => {
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

      {/* 월별 운세 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <Calendar className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          월별 운세
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {fortune.monthly.map((month) => (
            <div
              key={month.month}
              className={`p-4 rounded-xl border ${
                fortune.lucky.months.includes(month.month)
                  ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30'
                  : fortune.lucky.avoidMonths.includes(month.month)
                  ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                  : 'bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900 dark:text-white">
                  {month.month}월
                  {fortune.lucky.months.includes(month.month) && (
                    <span className="ml-2 text-xs text-amber-500 dark:text-amber-400">✨ 행운</span>
                  )}
                  {fortune.lucky.avoidMonths.includes(month.month) && (
                    <span className="ml-2 text-xs text-red-600 dark:text-red-400">⚠️ 주의</span>
                  )}
                </span>
                {renderStars(month.rating)}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {month.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 행운 정보 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">🍀</span> 2025년 행운의 요소
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-50 dark:bg-amber-500/20 rounded-full">
              <Hash className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 숫자</div>
            <div className="text-amber-600 dark:text-amber-300 font-bold">
              {fortune.lucky.numbers.join(', ')}
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-50 dark:bg-amber-500/20 rounded-full">
              <Palette className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 색</div>
            <div className="text-amber-600 dark:text-amber-300 font-bold text-sm">
              {fortune.lucky.colors.join(', ')}
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-50 dark:bg-amber-500/20 rounded-full">
              <Compass className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 방향</div>
            <div className="text-amber-600 dark:text-amber-300 font-bold">
              {fortune.lucky.direction}
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-50 dark:bg-amber-500/20 rounded-full">
              <Calendar className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">행운의 달</div>
            <div className="text-amber-600 dark:text-amber-300 font-bold">
              {fortune.lucky.months.map(m => `${m}월`).join(', ')}
            </div>
          </div>
        </div>
      </div>

      {/* 조언 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-2xl">💡</span> 2025년 조언
        </h2>

        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓ 올해 꼭 해야 할 것</span>
            </div>
            <p className="text-green-700 dark:text-green-100/80 text-sm">
              {fortune.advice.doThis}
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-600 dark:text-red-400 font-bold">✗ 올해 피해야 할 것</span>
            </div>
            <p className="text-red-700 dark:text-red-100/80 text-sm">
              {fortune.advice.avoidThis}
            </p>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="text-center space-y-4">
        <p className="text-gray-400 dark:text-gray-500 text-xs">
          ✨ 동양 전통 사주학을 기반으로 한 2025년 운세입니다<br />
          재미로 참고하시고, 더 좋은 한 해를 만들어가세요
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
            href="/fortune/fortune-2025"
            className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            다른 생년월일로 보기
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

export default function Fortune2025ResultPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    }>
      <FortuneResultContent />
    </Suspense>
  );
}
