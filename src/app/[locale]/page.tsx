'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
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
  Crown,
  Gift,
  Sun,
  Battery,
  Palette,
  ArrowRight,
  Moon,
} from 'lucide-react';
import { TestGrid } from '@/components/test';
import {
  getTestsForLocale,
  getCategoriesForLocale,
  getPopularTestsForLocale,
  getNewTestsForLocale,
  getTodaysPicksForLocale,
} from '@/lib/data-loader';

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
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const tCategories = useTranslations('categories');
  const locale = useLocale();
  
  // 로케일별 데이터 가져오기
  const tests = getTestsForLocale(locale);
  const categories = getCategoriesForLocale(locale);
  const popularTests = getPopularTestsForLocale(locale, 8);
  const newTests = getNewTestsForLocale(locale, 4);
  const todaysPicks = getTodaysPicksForLocale(locale, 2);

  return (
    <div className="space-y-6 sm:space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
              {t('aiBased')}
            </span>
            <span className="px-2.5 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-xs sm:text-sm font-medium">
              {tCommon('free')}
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {t('heroTitle')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              {t('heroHighlight')}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6 max-w-2xl whitespace-pre-line">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Link 
              href="/category/personality"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-indigo-600 rounded-full font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span className="truncate">{t('startTest')}</span>
            </Link>
            <Link 
              href="/tests"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full font-medium hover:bg-white/30 transition-colors text-sm sm:text-base"
            >
              <Grid3X3 className="w-4 h-4 shrink-0" />
              <span className="truncate">{t('viewAll')}</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-white/20">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{t('stats.participantsCount')}</div>
              <div className="text-xs sm:text-sm text-white/70 truncate">{t('stats.participants')}</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{tests.length}</div>
              <div className="text-xs sm:text-sm text-white/70 truncate">{t('stats.tests')}</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{t('stats.sharesCount')}</div>
              <div className="text-xs sm:text-sm text-white/70 truncate">{t('stats.shares')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filter Buttons - 2x2 그리드 */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Link
          href="/tests?sort=popular"
          className="flex items-center justify-center gap-1.5 px-3 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all min-w-0"
        >
          <Flame className="w-4 h-4 shrink-0" />
          <span className="truncate">{t('quickButtons.popular')}</span>
        </Link>
        <Link
          href="/tests?sort=new"
          className="flex items-center justify-center gap-1.5 px-3 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all min-w-0"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="truncate">{t('quickButtons.new')}</span>
        </Link>
        <Link
          href="/fortune/tarot"
          className="flex items-center justify-center gap-1.5 px-3 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all min-w-0"
        >
          <Crown className="w-4 h-4 shrink-0" />
          <span className="truncate">{t('quickButtons.tarot')}</span>
        </Link>
        <Link
          href="/fortune/daily-fortune"
          className="flex items-center justify-center gap-1.5 px-3 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all min-w-0"
        >
          <Gift className="w-4 h-4 shrink-0" />
          <span className="truncate">{t('quickButtons.fortune')}</span>
        </Link>
      </section>

      {/* Daily Section */}
      <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-rose-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{t('sections.daily')}</h2>
          </div>
          <Link 
            href="/daily" 
            className="flex items-center gap-1 text-xs sm:text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-medium shrink-0"
          >
            <span className="hidden sm:inline">{tCommon('viewAll')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/fortune/daily-fortune" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-amber-100 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-md h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-xl shrink-0">
                  🔮
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{t('daily.todayFortune')}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t('daily.fortuneDesc')}</div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/daily/condition" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-amber-100 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-md h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Battery className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{t('daily.condition')}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t('daily.conditionDesc')}</div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/daily" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-amber-100 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-md h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{t('daily.luckyColor')}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t('daily.luckyColorDesc')}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Fortune Section */}
      <section>
        <Link
          href="/fortune"
          className="group relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl block"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-5 left-10 w-20 h-20 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-5 right-10 w-24 h-24 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Moon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-bold truncate">{t('fortune.title')}</h3>
                <p className="text-white/80 text-xs sm:text-sm truncate">{t('fortune.description')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('fortune.tarot')}</span>
              <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('fortune.dailyFortune')}</span>
              <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('fortune.compatibility')}</span>
              <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('fortune.saju')}</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </Link>
      </section>

      {/* Category Buttons */}
      <section>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{t('sections.category')}</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Brain;
            const colors = categoryColors[category.slug] || categoryColors.personality;
            const testCount = tests.filter(t => t.categoryId === category.id).length;
            
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`flex flex-col items-center gap-1 sm:gap-2 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 ${colors.bg} ${colors.hover} transition-all hover:scale-105`}
              >
                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.text} shrink-0`} />
                <span className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm text-center truncate w-full">{tCategories(category.slug)}</span>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{testCount}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Physical & Games Section */}
      <section>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{t('sections.physicalGames')}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Link
            href="/physical"
            className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-xl font-bold truncate">{t('physical.title')}</h3>
                  <p className="text-white/80 text-xs sm:text-sm truncate">{t('physical.description')}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('physical.reaction')}</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('physical.click')}</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('physical.color')}</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('physical.memory')}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Link>

          <Link
            href="/games"
            className="group relative overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-xl font-bold truncate">{t('games.title')}</h3>
                  <p className="text-white/80 text-xs sm:text-sm truncate">{t('games.description')}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('games.balance')}</span>
                <span className="px-2 py-0.5 sm:py-1 bg-white/20 rounded-full text-[10px] sm:text-xs">{t('games.cards')}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Link>
        </div>
      </section>

      {/* Popular Tests */}
      <section>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{t('sections.popular')}</h2>
          </div>
          <Link 
            href="/tests" 
            className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
          >
            <span className="hidden sm:inline">{tCommon('more')}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <TestGrid tests={popularTests} showAds={true} adInterval={6} />
      </section>

      {/* Today's Picks */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <Shuffle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{t('sections.todayPicks')}</h2>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 shrink-0">{tCommon('dailyUpdate')}</span>
        </div>
        <TestGrid tests={todaysPicks} />
      </section>

      {/* New Tests */}
      <section>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{t('sections.new')}</h2>
          </div>
          <Link 
            href="/tests" 
            className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
          >
            <span className="hidden sm:inline">{tCommon('more')}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <TestGrid tests={newTests} />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center text-white">
        <h2 className="text-lg sm:text-2xl font-bold mb-1.5 sm:mb-2">{t('cta.title')}</h2>
        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{t('cta.description', { count: tests.length })}</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
          <Link
            href="/tests"
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors text-sm sm:text-base"
          >
            {t('cta.viewAll')}
          </Link>
          <Link
            href="/category/fun"
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            {t('cta.funTests')}
          </Link>
        </div>
      </section>
    </div>
  );
}
