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
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
            ← {t('backHome')}
          </Link>
          <h1 className="text-base sm:text-lg font-bold text-white">{t('games')}</h1>
          <div className="w-12 sm:w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        {/* Hero */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            🎲 {t('pageTitle')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg">
            {t('pageDescription')}
          </p>
        </div>

        {/* Game Cards - Grid on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-6">
          {gameConfigs.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group block"
            >
              {/* Mobile: Compact card */}
              <div className={`sm:hidden bg-gradient-to-br ${game.color} rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full`}>
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
              {/* Desktop: Full card */}
              <div className={`hidden sm:block bg-gradient-to-br ${game.color} rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <div className="flex items-start gap-6">
                  <span className="text-6xl">{game.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{t(`gameList.${game.slug}.title`)}</h3>
                    <p className="text-white/80">{t(`gameList.${game.slug}.description`)}</p>
                    <div className="mt-4 flex items-center text-white/60 group-hover:text-white transition-colors">
                      <span>{t('startGame')}</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Coming Soon */}
        <div className="mt-6 sm:mt-8 bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            🚧 {t('moreComingSoon')}
          </p>
        </div>
      </div>
    </div>
  );
}
