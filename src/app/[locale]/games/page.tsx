'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface GameConfig {
  slug: string;
  emoji: string;
  color: string;
}

const gameConfigs: GameConfig[] = [
  { slug: 'worldcup', emoji: '🏆', color: 'from-amber-500 to-yellow-600' },
  { slug: 'balance', emoji: '⚖️', color: 'from-violet-500 to-purple-600' },
  { slug: 'cards', emoji: '🃏', color: 'from-emerald-500 to-teal-600' },
  { slug: 'random-menu', emoji: '🍽️', color: 'from-yellow-500 to-orange-500' },
  { slug: 'number-picker', emoji: '🎲', color: 'from-blue-500 to-indigo-500' },
  { slug: 'team-divider', emoji: '👥', color: 'from-cyan-500 to-teal-500' },
  { slug: 'penalty-picker', emoji: '🎰', color: 'from-red-500 to-rose-500' },
  { slug: 'role-picker', emoji: '🎭', color: 'from-purple-500 to-violet-600' },
  { slug: 'would-you-rather', emoji: '🤔', color: 'from-amber-500 to-orange-500' },
  { slug: 'ice-breaker', emoji: '🎰', color: 'from-teal-500 to-cyan-500' },
  { slug: 'couple-quiz', emoji: '💑', color: 'from-pink-500 to-rose-500' },
];

export default function GamesPage() {
  const t = useTranslations('gamesPage');

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🎲 {t('pageTitle')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {t('pageDescription')}
        </p>
      </div>

      {/* Game Cards */}
      <div className="grid grid-cols-2 gap-2">
        {gameConfigs.map((game) => (
          <Link
            key={game.slug}
            href={`/games/${game.slug}`}
            className="group block"
          >
            <div className={`bg-gradient-to-br ${game.color} rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full`}>
              <div className="flex flex-col">
                <span className="text-2xl mb-2">{game.emoji}</span>
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{t(`gameList.${game.slug}.title`)}</h3>
                <p className="text-white/80 text-xs line-clamp-2 flex-1">{t(`gameList.${game.slug}.description`)}</p>
                <div className="mt-2 flex items-center text-white/60 text-xs group-hover:text-white transition-colors">
                  <span>{t('start')}</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* More Coming Soon */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          🚧 {t('moreComingSoon')}
        </p>
      </div>
    </div>
  );
}
