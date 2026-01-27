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

  const tests = getTestsForLocale(locale);
  const categories = getCategoriesForLocale(locale);
  const popularTests = getPopularTestsForLocale(locale, 8);
  const newTests = getNewTestsForLocale(locale, 4);
  const todaysPicks = getTodaysPicksForLocale(locale, 2);

  return (
    <div className="space-y-5">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-xl p-4 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              {t('aiBased')}
            </span>
            <span className="px-2 py-0.5 bg-yellow-400/90 text-yellow-900 rounded-full text-xs font-medium">
              {tCommon('free')}
            </span>
          </div>

          <h1 className="text-xl font-bold mb-2 leading-tight">
            {t('heroTitle')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              {t('heroHighlight')}
            </span>
          </h1>

          <p className="text-sm text-white/80 mb-4 whitespace-pre-line leading-relaxed">
            {t('heroDescription')}
          </p>

          <div className="flex gap-2">
            <Link
              href="/category/personality"
              className="flex-1 text-center py-2 bg-white text-indigo-600 rounded-full font-semibold text-[13px]"
            >
              {t('startTest')}
            </Link>
            <Link
              href="/tests"
              className="flex-1 text-center py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium text-[13px]"
            >
              {t('viewAll')}
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-5 pt-4 border-t border-white/20">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-lg font-bold">{t('stats.participantsCount')}</div>
              <div className="text-[11px] text-white/70">{t('stats.participants')}</div>
            </div>
            <div>
              <div className="text-lg font-bold">{tests.length}</div>
              <div className="text-[11px] text-white/70">{t('stats.tests')}</div>
            </div>
            <div>
              <div className="text-lg font-bold">{t('stats.sharesCount')}</div>
              <div className="text-[11px] text-white/70">{t('stats.shares')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filter Buttons */}
      <section className="grid grid-cols-4 gap-1.5">
        <Link href="/tests?sort=popular" className="flex flex-col items-center gap-1 px-2 py-2.5 bg-gradient-to-b from-orange-500 to-red-500 text-white rounded-xl text-[11px] font-medium">
          <Flame className="w-4 h-4" />
          <span>{t('quickButtons.popular')}</span>
        </Link>
        <Link href="/tests?sort=new" className="flex flex-col items-center gap-1 px-2 py-2.5 bg-gradient-to-b from-green-500 to-emerald-500 text-white rounded-xl text-[11px] font-medium">
          <Sparkles className="w-4 h-4" />
          <span>{t('quickButtons.new')}</span>
        </Link>
        <Link href="/fortune/tarot" className="flex flex-col items-center gap-1 px-2 py-2.5 bg-gradient-to-b from-purple-500 to-violet-500 text-white rounded-xl text-[11px] font-medium">
          <Crown className="w-4 h-4" />
          <span>{t('quickButtons.tarot')}</span>
        </Link>
        <Link href="/fortune/daily-fortune" className="flex flex-col items-center gap-1 px-2 py-2.5 bg-gradient-to-b from-amber-500 to-yellow-500 text-white rounded-xl text-[11px] font-medium">
          <Gift className="w-4 h-4" />
          <span>{t('quickButtons.fortune')}</span>
        </Link>
      </section>

      {/* Daily Section */}
      <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-rose-900/20 rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Sun className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">{t('sections.daily')}</h2>
          </div>
          <Link href="/daily" className="text-amber-600 dark:text-amber-400">
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-2">
          <Link href="/fortune/daily-fortune" className="block bg-white dark:bg-gray-800 rounded-lg p-3 border border-amber-100 dark:border-amber-800/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-lg shrink-0">🔮</div>
              <div className="min-w-0">
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('daily.todayFortune')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t('daily.fortuneDesc')}</div>
              </div>
            </div>
          </Link>
          <Link href="/daily/condition" className="block bg-white dark:bg-gray-800 rounded-lg p-3 border border-amber-100 dark:border-amber-800/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center shrink-0">
                <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('daily.condition')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t('daily.conditionDesc')}</div>
              </div>
            </div>
          </Link>
          <Link href="/daily" className="block bg-white dark:bg-gray-800 rounded-lg p-3 border border-amber-100 dark:border-amber-800/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center shrink-0">
                <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('daily.luckyColor')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{t('daily.luckyColorDesc')}</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Fortune Section */}
      <section>
        <Link href="/fortune" className="block relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 rounded-xl p-4 text-white">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-6 h-6 shrink-0" />
              <div className="min-w-0">
                <h3 className="text-base font-bold">{t('fortune.title')}</h3>
                <p className="text-white/80 text-xs">{t('fortune.description')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('fortune.tarot')}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('fortune.dailyFortune')}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('fortune.compatibility')}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('fortune.saju')}</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </Link>
      </section>

      {/* Category Buttons */}
      <section>
        <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3">{t('sections.category')}</h2>
        <div className="grid grid-cols-3 gap-2">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Brain;
            const colors = categoryColors[category.slug] || categoryColors.personality;
            const testCount = tests.filter(t => t.categoryId === category.id).length;

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700 ${colors.bg} ${colors.hover} transition-all active:scale-95`}
              >
                <Icon className={`w-6 h-6 ${colors.text}`} />
                <span className="font-medium text-gray-900 dark:text-white text-xs text-center truncate w-full">{tCategories(category.slug)}</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">{testCount}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Physical & Games */}
      <section>
        <div className="flex items-center gap-1.5 mb-3">
          <Zap className="w-5 h-5 text-yellow-500" />
          <h2 className="text-base font-bold text-gray-900 dark:text-white">{t('sections.physicalGames')}</h2>
        </div>
        <div className="space-y-2">
          <Link href="/physical" className="block relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-6 h-6 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base font-bold">{t('physical.title')}</h3>
                  <p className="text-white/80 text-xs">{t('physical.description')}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('physical.reaction')}</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('physical.click')}</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('physical.color')}</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('physical.memory')}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Link>
          <Link href="/games" className="block relative overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-4 text-white">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Gamepad2 className="w-6 h-6 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base font-bold">{t('games.title')}</h3>
                  <p className="text-white/80 text-xs">{t('games.description')}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('games.balance')}</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">{t('games.cards')}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Link>
        </div>
      </section>

      {/* Popular Tests */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Flame className="w-5 h-5 text-orange-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">{t('sections.popular')}</h2>
          </div>
          <Link href="/tests" className="text-gray-400">
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <TestGrid tests={popularTests} showAds={true} adInterval={6} />
      </section>

      {/* Today's Picks */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Shuffle className="w-5 h-5 text-indigo-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">{t('sections.todayPicks')}</h2>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{tCommon('dailyUpdate')}</span>
        </div>
        <TestGrid tests={todaysPicks} />
      </section>

      {/* New Tests */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Clock className="w-5 h-5 text-green-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">{t('sections.new')}</h2>
          </div>
          <Link href="/tests" className="text-gray-400">
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <TestGrid tests={newTests} />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-5 text-center text-white">
        <h2 className="text-base font-bold mb-1.5">{t('cta.title')}</h2>
        <p className="text-sm text-gray-400 mb-4">{t('cta.description', { count: tests.length })}</p>
        <div className="flex gap-2 justify-center">
          <Link href="/tests" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-sm">
            {t('cta.viewAll')}
          </Link>
          <Link href="/category/fun" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium text-sm">
            {t('cta.funTests')}
          </Link>
        </div>
      </section>
    </div>
  );
}
