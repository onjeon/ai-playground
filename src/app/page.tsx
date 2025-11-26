'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
  Brain,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  Lightbulb,
  ChevronRight,
  Flame,
  Clock,
  Shuffle,
  Grid3X3,
  Zap,
  Gamepad2,
} from 'lucide-react';
import { TestGrid } from '@/components/test';
import { tests, categories, getPopularTests } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  Lightbulb,
};

const categoryColors: Record<string, { bg: string; text: string; hover: string }> = {
  personality: { bg: 'bg-blue-50 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/50' },
  psychology: { bg: 'bg-rose-50 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', hover: 'hover:bg-rose-100 dark:hover:bg-rose-900/50' },
  relationship: { bg: 'bg-pink-50 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', hover: 'hover:bg-pink-100 dark:hover:bg-pink-900/50' },
  career: { bg: 'bg-emerald-50 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', hover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/50' },
  fun: { bg: 'bg-amber-50 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', hover: 'hover:bg-amber-100 dark:hover:bg-amber-900/50' },
  iq: { bg: 'bg-violet-50 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', hover: 'hover:bg-violet-100 dark:hover:bg-violet-900/50' },
};

export default function HomePage() {
  const popularTests = getPopularTests(8);
  
  const newTests = useMemo(() => {
    return [...tests]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 4);
  }, []);

  const todaysPicks = useMemo(() => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const shuffled = [...tests].sort((a, b) => {
      const hashA = (seed * a.participantCount) % 1000;
      const hashB = (seed * b.participantCount) % 1000;
      return hashA - hashB;
    });
    return shuffled.slice(0, 2);
  }, []);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              AI 기반 분석
            </span>
            <span className="px-3 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-sm font-medium">
              무료
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            나를 알아가는 시간,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              AI 놀이터
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl">
            심리 테스트, 성격 분석, MBTI까지!<br className="hidden sm:block" />
            AI가 분석하는 다양한 테스트로 진짜 나를 발견하세요.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/category/personality"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              <Brain className="w-4 h-4" />
              성격 테스트 시작
            </Link>
            <Link 
              href="/tests"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              <Grid3X3 className="w-4 h-4" />
              전체 테스트 보기
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-10 pt-8 border-t border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">50만+</div>
              <div className="text-sm text-white/70">누적 참여자</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">{tests.length}개</div>
              <div className="text-sm text-white/70">테스트</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">2만+</div>
              <div className="text-sm text-white/70">공유 횟수</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Buttons */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">카테고리</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Brain;
            const colors = categoryColors[category.slug] || categoryColors.personality;
            const testCount = tests.filter(t => t.categoryId === category.id).length;
            
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 ${colors.bg} ${colors.hover} transition-all hover:scale-105`}
              >
                <Icon className={`w-8 h-8 ${colors.text}`} />
                <span className="font-medium text-gray-900 dark:text-white text-sm">{category.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{testCount}개</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Physical & Games Section */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">피지컬 & 게임</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/physical"
            className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">피지컬 테스트</h3>
                  <p className="text-white/80 text-sm">반응속도, 클릭속도, 기억력 테스트</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">반응속도</span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">클릭속도</span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">색각</span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">기억력</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Link>

          <Link
            href="/games"
            className="group relative overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">게임 & 카드</h3>
                  <p className="text-white/80 text-sm">밸런스 게임, 대화 카드</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">밸런스 게임</span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">대화 카드</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Link>
        </div>
      </section>

      {/* Popular Tests */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">인기 테스트</h2>
          </div>
          <Link 
            href="/tests" 
            className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            더보기 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <TestGrid tests={popularTests} />
      </section>

      {/* Today's Picks */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Shuffle className="w-6 h-6 text-indigo-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">오늘의 추천</h2>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">매일 업데이트</span>
        </div>
        <TestGrid tests={todaysPicks} />
      </section>

      {/* New Tests */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">신규 테스트</h2>
          </div>
          <Link 
            href="/tests" 
            className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            더보기 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <TestGrid tests={newTests} />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">더 많은 테스트를 찾고 있나요?</h2>
        <p className="text-gray-400 mb-6">{tests.length}개의 테스트가 당신을 기다리고 있어요!</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/tests"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
          >
            전체 테스트 보기
          </Link>
          <Link
            href="/category/fun"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
          >
            재미있는 테스트
          </Link>
        </div>
      </section>
    </div>
  );
}
