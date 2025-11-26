'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowLeft, Grid3X3, Flame, Clock, Sparkles } from 'lucide-react';
import { TestGrid } from '@/components/test';
import { tests, categories } from '@/lib/data';

type SortType = 'popular' | 'new' | 'name';
type FilterType = 'all' | 'free' | 'premium';

export default function TestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortType>('popular');
  const [filterBy, setFilterBy] = useState<FilterType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTests = useMemo(() => {
    let result = [...tests];

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      result = result.filter(test => test.categoryId === selectedCategory);
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

    // 유료/무료 필터
    if (filterBy === 'free') {
      result = result.filter(test => !test.isPremium);
    } else if (filterBy === 'premium') {
      result = result.filter(test => test.isPremium);
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
  }, [searchQuery, sortBy, filterBy, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Grid3X3 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">전체 테스트</h1>
              <p className="text-gray-500 dark:text-gray-400">총 {tests.length}개의 테스트</p>
            </div>
          </div>
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">홈으로</span>
          </Link>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="테스트 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">전체 카테고리</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          {/* Sort */}
          <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setSortBy('popular')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'popular'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              인기순
            </button>
            <button
              onClick={() => setSortBy('new')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'new'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              최신순
            </button>
          </div>

          {/* Free/Premium Filter */}
          <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setFilterBy('all')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filterBy === 'all'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setFilterBy('free')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filterBy === 'free'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              무료
            </button>
            <button
              onClick={() => setFilterBy('premium')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filterBy === 'premium'
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              프리미엄
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      {(searchQuery || selectedCategory !== 'all' || filterBy !== 'all') && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {filteredTests.length}개의 테스트를 찾았습니다
        </div>
      )}

      {/* Tests Grid */}
      <section>
        <TestGrid 
          tests={filteredTests} 
          emptyMessage={searchQuery ? `"${searchQuery}"에 대한 검색 결과가 없습니다.` : "조건에 맞는 테스트가 없습니다."}
        />
      </section>
    </div>
  );
}
