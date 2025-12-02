'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowLeft, Flame, Clock, Tag, X, ChevronDown, ChevronUp } from 'lucide-react';
import { TestGrid } from '@/components/test';
import { tests, categories, getAllTags } from '@/lib/data';

type SortType = 'popular' | 'new' | 'name';

// 인기 태그 (상위 15개) - 태그 문자열만 추출
const popularTags = getAllTags().slice(0, 15).map(t => t.tag);

function TestsContent() {
  const searchParams = useSearchParams();
  
  // URL 파라미터에서 초기값 읽기
  const initialSort = (searchParams.get('sort') as SortType) || 'popular';
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<SortType>(initialSort);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // URL 변경 시 상태 업데이트
  useEffect(() => {
    const sort = searchParams.get('sort') as SortType;
    const query = searchParams.get('q') || '';
    
    if (sort && ['popular', 'new', 'name'].includes(sort)) {
      setSortBy(sort);
    }
    setSearchQuery(query);
  }, [searchParams]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearTags = () => setSelectedTags([]);

  const filteredTests = useMemo(() => {
    let result = [...tests];

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      result = result.filter(test => test.categoryId === selectedCategory);
    }

    // 태그 필터
    if (selectedTags.length > 0) {
      result = result.filter(test =>
        selectedTags.some(tag => test.tags.includes(tag))
      );
    }

    // 검색 필터
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(test =>
        test.title.toLowerCase().includes(query) ||
        test.description.toLowerCase().includes(query) ||
        test.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // 정렬
    if (sortBy === 'popular') {
      result.sort((a, b) => b.participantCount - a.participantCount);
    } else if (sortBy === 'new') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, sortBy, selectedCategory, selectedTags]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
        {/* 타이틀 */}
        <div className="flex items-center gap-2 mb-3">
          <Link 
            href="/"
            className="p-1.5 -ml-1.5 text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white flex-1">
            전체 테스트
          </h1>
          <span className="text-sm text-gray-400">{filteredTests.length}개</span>
        </div>

        {/* 검색 */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="테스트 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* 모바일 필터 UI */}
        <div className="sm:hidden space-y-2">
          {/* 1행: 카테고리 + 정렬 (2분할) */}
          <div className="grid grid-cols-2 gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">전체 카테고리</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-0.5">
              <button
                onClick={() => setSortBy('popular')}
                className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  sortBy === 'popular'
                    ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                인기
              </button>
              <button
                onClick={() => setSortBy('new')}
                className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  sortBy === 'new'
                    ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                최신
              </button>
            </div>
          </div>

          {/* 2행: 태그 버튼 */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`w-full py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1 ${
              showFilters || selectedTags.length > 0
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            태그 필터
            {selectedTags.length > 0 && (
              <span className="px-1 bg-indigo-600 text-white rounded text-[10px]">
                {selectedTags.length}
              </span>
            )}
          </button>
        </div>

        {/* 데스크탑 필터 UI */}
        <div className="hidden sm:flex flex-wrap items-center gap-2">
          {/* 카테고리 */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border-0 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">전체</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          {/* 정렬 */}
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-0.5">
            <button
              onClick={() => setSortBy('popular')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                sortBy === 'popular'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              인기
            </button>
            <button
              onClick={() => setSortBy('new')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                sortBy === 'new'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              최신
            </button>
          </div>

          {/* 태그 필터 토글 */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              showFilters || selectedTags.length > 0
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            태그
            {selectedTags.length > 0 && (
              <span className="px-1.5 py-0.5 bg-indigo-600 text-white rounded-full text-[10px]">
                {selectedTags.length}
              </span>
            )}
            {showFilters ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* 태그 선택 영역 (토글) */}
        {showFilters && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">인기 태그</span>
              {selectedTags.length > 0 && (
                <button
                  onClick={clearTags}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                  초기화
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {popularTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Tests Grid */}
      <section>
        <TestGrid 
          tests={filteredTests} 
          emptyMessage={searchQuery ? `"${searchQuery}"에 대한 검색 결과가 없습니다.` : "조건에 맞는 테스트가 없습니다."}
          showAds={true}
          adInterval={8}
        />
      </section>
    </div>
  );
}

export default function TestsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-400">로딩 중...</div>
      </div>
    }>
      <TestsContent />
    </Suspense>
  );
}
