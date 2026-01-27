'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, Trophy, Users, Sparkles } from 'lucide-react';
import { worldCups } from '@/data/worldcup';

export default function WorldCupListPage() {
  const t = useTranslations('worldcup');
  const tCommon = useTranslations('common');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToGames')}
        </Link>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">{t('pageTitle')}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            🏆 {t('pageTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t('pageDescription')}
          </p>
        </div>
      </div>

      {/* Worldcup List */}
      <div className="grid gap-4">
        {worldCups.map((wc) => (
          <Link
            key={wc.id}
            href={`/games/worldcup/${wc.slug}`}
            className="group relative bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-indigo-400 rounded-2xl p-4 transition-all duration-300 overflow-hidden"
          >
            <div className="relative flex items-center gap-4">
              {/* Emoji icon */}
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${wc.backgroundColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                {wc.emoji}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {wc.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {wc.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <Sparkles className="w-4 h-4" />
                    {wc.items.length} {t('candidates')}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    {wc.participantCount.toLocaleString()} {t('participated')}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                <span className="text-gray-400 group-hover:text-indigo-500 text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Home link */}
      <div className="text-center">
        <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
          ← {tCommon('home')}
        </Link>
      </div>
    </div>
  );
}
