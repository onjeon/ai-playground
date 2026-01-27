'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ChevronRight, Gift, Moon, Check, X } from 'lucide-react';
import { DREAM_CATEGORIES } from '@/lib/fortune/dream';

export default function DreamPage() {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(DREAM_CATEGORIES[0].id);

  const toggleKeyword = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(k => k !== id);
      }
      if (prev.length >= 5) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  const handleStart = () => {
    if (selectedIds.length === 0) return;
    const params = selectedIds.join(',');
    router.push(`/fortune/dream/result?keywords=${params}`);
  };

  const activeKeywords = DREAM_CATEGORIES.find(c => c.id === activeCategory)?.keywords || [];

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          <Moon className="w-4 h-4 text-indigo-500" />
          <span className="text-indigo-600 dark:text-indigo-300 text-sm font-medium">꿈해몽</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          꿈해몽
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          꿈에서 본 것들을 선택하면<br />
          종합 해석을 알려드립니다
        </p>
      </div>

      {/* 메인 카드 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        {/* 꿈해몽 설명 */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-4 mb-6 border border-indigo-100 dark:border-indigo-800/30">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            꿈에 나타난 상징들을 <strong className="text-gray-900 dark:text-white">최대 5개</strong>까지 선택하세요.
            선택한 요소들의 조합으로 꿈의 의미와 길흉화복을 분석해 드립니다.
            동양 전통 해몽학을 기반으로 재물운, 연애운, 직장운, 건강운을 알려드립니다.
          </p>
        </div>

        {/* 선택된 키워드 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              선택한 키워드 ({selectedIds.length}/5)
            </span>
            {selectedIds.length > 0 && (
              <button
                onClick={clearAll}
                className="text-gray-400 dark:text-gray-500 text-xs hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                전체 삭제
              </button>
            )}
          </div>
          <div className="min-h-[48px] p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
            {selectedIds.length === 0 ? (
              <span className="text-gray-400 dark:text-gray-500 text-sm">아래에서 꿈에 나온 것을 선택하세요</span>
            ) : (
              selectedIds.map(id => {
                const keyword = DREAM_CATEGORIES.flatMap(c => c.keywords).find(k => k.id === id);
                return keyword ? (
                  <button
                    key={id}
                    onClick={() => toggleKeyword(id)}
                    className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm flex items-center gap-1.5 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                  >
                    {keyword.name}
                    <X className="w-3 h-3" />
                  </button>
                ) : null;
              })
            )}
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex overflow-x-auto gap-2 mb-4 pb-2 scrollbar-hide">
          {DREAM_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </div>

        {/* 키워드 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {activeKeywords.map(keyword => {
            const isSelected = selectedIds.includes(keyword.id);
            const fortuneColors = {
              great: 'border-amber-200 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-500/10',
              good: 'border-green-200 dark:border-green-500/50 bg-green-50 dark:bg-green-500/10',
              neutral: 'border-gray-200 dark:border-gray-500/50 bg-gray-50 dark:bg-gray-500/10',
              caution: 'border-red-200 dark:border-red-500/50 bg-red-50 dark:bg-red-500/10',
            };
            const fortuneLabels = {
              great: '대길',
              good: '길',
              neutral: '평',
              caution: '주의',
            };

            return (
              <button
                key={keyword.id}
                onClick={() => toggleKeyword(keyword.id)}
                disabled={!isSelected && selectedIds.length >= 5}
                className={`relative p-4 rounded-2xl border transition-all text-left ${
                  isSelected
                    ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-500/20 ring-2 ring-indigo-400/50'
                    : selectedIds.length >= 5
                    ? 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 opacity-50 cursor-not-allowed'
                    : `${fortuneColors[keyword.fortune]} hover:scale-[1.02]`
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="font-bold text-gray-900 dark:text-white mb-1">{keyword.name}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 truncate">{keyword.meaning.substring(0, 20)}...</div>
                <div className={`mt-2 inline-block px-2 py-0.5 rounded text-xs font-medium ${
                  keyword.fortune === 'great' ? 'bg-amber-100 dark:bg-amber-500/30 text-amber-600 dark:text-amber-300' :
                  keyword.fortune === 'good' ? 'bg-green-100 dark:bg-green-500/30 text-green-600 dark:text-green-300' :
                  keyword.fortune === 'neutral' ? 'bg-gray-100 dark:bg-gray-500/30 text-gray-600 dark:text-gray-300' :
                  'bg-red-100 dark:bg-red-500/30 text-red-600 dark:text-red-300'
                }`}>
                  {fortuneLabels[keyword.fortune]}
                </div>
              </button>
            );
          })}
        </div>

        {/* 가격 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 px-6 py-3 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
            <Gift className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-600 dark:text-indigo-300 font-bold text-xl">무료</span>
            <span className="text-gray-400 dark:text-gray-500 text-sm line-through">900</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">신년 특별 무료 이벤트</p>
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={handleStart}
          disabled={selectedIds.length === 0}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
            selectedIds.length > 0
              ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg hover:scale-[1.02]'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedIds.length > 0 ? (
            <>
              꿈 해몽하기 ({selectedIds.length}개 선택)
              <ChevronRight className="w-5 h-5" />
            </>
          ) : (
            '꿈에 나온 것을 선택하세요'
          )}
        </button>
      </div>

      {/* 안내 문구 */}
      <div className="text-center">
        <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed">
          동양 전통 해몽학을 기반으로 한 꿈 해석입니다<br />
          재미로 참고하시고, 좋은 하루 되세요
        </p>
      </div>

      {/* 별점 리뷰 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-indigo-400 text-indigo-400" />
          ))}
          <span className="text-gray-900 dark:text-white font-bold ml-2">4.8</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center italic">
          &quot;꿈에서 용을 봤는데, 정말 그 주에 좋은 일이 생겼어요! 신기해요&quot;
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs text-center mt-2">- 이용자 후기</p>
      </div>
    </div>
  );
}
