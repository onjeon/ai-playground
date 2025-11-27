'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Brain,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  Lightbulb,
  LayoutGrid,
  TrendingUp,
  Star,
  Crown,
  Zap,
  Gamepad2,
} from 'lucide-react';
import { categories } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  Lightbulb,
};

export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const currentCategorySlug = pathname.startsWith('/category/') ? pathname.split('/')[2] : null;

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2">카테고리</h3>
          <nav className="space-y-1">
            <Link
              href="/tests"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                pathname === '/tests'
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
              전체 테스트
            </Link>
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Brain;
              const isActive = currentCategorySlug === category.slug;

              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Physical & Games */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2">피지컬 & 게임</h3>
          <nav className="space-y-1">
            <Link
              href="/physical"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <Zap className="w-5 h-5 text-yellow-500" />
              피지컬 테스트
            </Link>
            <Link
              href="/games"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <Gamepad2 className="w-5 h-5 text-green-500" />
              게임
            </Link>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2">바로가기</h3>
          <nav className="space-y-1">
            <Link
              href="/tests?sort=popular"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <TrendingUp className="w-5 h-5 text-orange-500" />
              인기 테스트
            </Link>
            <Link
              href="/tests?filter=free"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <Star className="w-5 h-5 text-yellow-500" />
              무료 테스트
            </Link>
            <Link
              href="/tests?filter=premium"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <Crown className="w-5 h-5 text-purple-500" />
              프리미엄 테스트
            </Link>
          </nav>
        </div>

        {/* Ad Banner */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-5 text-center border border-indigo-100 dark:border-gray-600">
          <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">AD</p>
          <div className="h-40 flex items-center justify-center">
            <div className="text-gray-400 text-sm">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg mx-auto mb-2" />
              광고 영역
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-5 text-white">
          <h4 className="font-bold mb-2">프리미엄 테스트</h4>
          <p className="text-sm text-white/80 mb-4">
            더 정밀한 AI 분석과 상세한 결과를 원하시나요?
          </p>
          <Link
            href="/tests?filter=premium"
            className="inline-block w-full text-center px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            프리미엄 보기
          </Link>
        </div>
      </div>
    </aside>
  );
}
