'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
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
  Zap,
  Gamepad2,
  Sun,
  Battery,
  Moon,
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
  const t = useTranslations('sidebar');
  const tCategories = useTranslations('categories');
  
  // Extract category slug considering locale prefix
  const pathParts = pathname.split('/');
  const categoryIndex = pathParts.findIndex(part => part === 'category');
  const currentCategorySlug = categoryIndex !== -1 ? pathParts[categoryIndex + 1] : null;
  
  // Check if current path matches (considering locale prefix)
  const isPath = (path: string) => {
    return pathname === path || pathname.endsWith(path) || pathname.includes(path);
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2 truncate">{t('categories')}</h3>
          <nav className="space-y-1">
            <Link
              href="/tests"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isPath('/tests')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-5 h-5 shrink-0" />
              <span className="truncate">{t('allTests')}</span>
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
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="truncate">{tCategories(category.slug)}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Daily */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-800/50 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2 flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="truncate">{t('daily')}</span>
          </h3>
          <nav className="space-y-1">
            <Link
              href="/daily"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                pathname.endsWith('/daily')
                  ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Sun className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="truncate">{t('dailyHub')}</span>
            </Link>
            <Link
              href="/daily/condition"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isPath('/daily/condition')
                  ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Battery className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="truncate">{t('condition')}</span>
            </Link>
            <Link
              href="/fortune"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isPath('/fortune')
                  ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Moon className="w-5 h-5 text-purple-500 shrink-0" />
              <span className="truncate">{t('fortune')}</span>
            </Link>
          </nav>
        </div>

        {/* Physical & Games */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2 truncate">{t('physicalGames')}</h3>
          <nav className="space-y-1">
            <Link
              href="/physical"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isPath('/physical')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Zap className="w-5 h-5 text-yellow-500 shrink-0" />
              <span className="truncate">{t('physical')}</span>
            </Link>
            <Link
              href="/games"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isPath('/games')
                  ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Gamepad2 className="w-5 h-5 text-green-500 shrink-0" />
              <span className="truncate">{t('games')}</span>
            </Link>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2 truncate">{t('quickLinks')}</h3>
          <nav className="space-y-1">
            <Link
              href="/tests?sort=popular"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <TrendingUp className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="truncate">{t('popularTests')}</span>
            </Link>
            <Link
              href="/tests?sort=new"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <Star className="w-5 h-5 text-yellow-500 shrink-0" />
              <span className="truncate">{t('newTests')}</span>
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
}
