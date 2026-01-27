'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Moon,
  Sparkles,
  ArrowRight,
  Star,
} from 'lucide-react';

const fortuneServiceConfigs = [
  {
    id: 'fortune-2025',
    emoji: '🐍',
    href: '/fortune/fortune-2025',
    gradient: 'from-red-500 to-orange-600',
    lightBg: 'from-red-50 to-orange-50',
  },
  {
    id: 'tojeong',
    emoji: '📜',
    href: '/fortune/tojeong',
    gradient: 'from-amber-500 to-yellow-600',
    lightBg: 'from-amber-50 to-yellow-50',
  },
  {
    id: 'zodiac-fortune',
    emoji: '⭐',
    href: '/fortune/zodiac-fortune',
    gradient: 'from-indigo-500 to-blue-600',
    lightBg: 'from-indigo-50 to-blue-50',
  },
  {
    id: 'compatibility',
    emoji: '💕',
    href: '/fortune/compatibility',
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'from-pink-50 to-rose-50',
  },
  {
    id: 'tarot',
    emoji: '🎴',
    href: '/fortune/tarot',
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'from-violet-50 to-purple-50',
  },
  {
    id: 'daily-fortune',
    emoji: '🔮',
    href: '/fortune/daily-fortune',
    gradient: 'from-purple-500 to-indigo-600',
    lightBg: 'from-purple-50 to-indigo-50',
  },
  {
    id: 'dream',
    emoji: '🌙',
    href: '/fortune/dream',
    gradient: 'from-slate-600 to-gray-700',
    lightBg: 'from-slate-50 to-gray-100',
  },
  {
    id: 'name-analysis',
    emoji: '📝',
    href: '/fortune/name-analysis',
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'from-emerald-50 to-teal-50',
  },
  {
    id: 'face-reading',
    emoji: '🎭',
    href: '/fortune/face-reading',
    gradient: 'from-orange-500 to-amber-600',
    lightBg: 'from-orange-50 to-amber-50',
  },
];

export default function FortunePage() {
  const t = useTranslations('fortunePage');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          <Moon className="w-5 h-5 text-indigo-500" />
          <span className="text-indigo-600 dark:text-indigo-300 font-medium">{t('category')}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {t('pageTitle')}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t('pageSubtitle')}
        </p>
      </div>

      {/* Featured Fortune */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500" />
          {t('newYear')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* New Year Fortune */}
          <Link href="/fortune/fortune-2025" className="block group">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    🐍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t('services.fortune-2025.title')}</h3>
                    <p className="text-red-100 text-sm">{t('services.fortune-2025.description')}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          {/* Tojeong */}
          <Link href="/fortune/tojeong" className="block group">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    📜
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t('services.tojeong.title')}</h3>
                    <p className="text-amber-100 text-sm">{t('services.tojeong.description')}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* All Fortune Services */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          {t('allServices')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fortuneServiceConfigs.map((service) => (
            <Link key={service.id} href={service.href} className="block group">
              <div className={`bg-gradient-to-br ${service.lightBg} dark:from-gray-800 dark:to-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all h-full`}>
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {service.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {t(`services.${service.id}.title`)}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {t(`services.${service.id}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center">
        <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">
          ← {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
