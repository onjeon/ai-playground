'use client';

import Link from 'next/link';

interface Game {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
}

const games: Game[] = [
  {
    slug: 'balance',
    title: '밸런스 게임',
    emoji: '⚖️',
    description: '둘 중 하나만 골라야 한다면? 연애, 직장, 극한 상황까지!',
    color: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'cards',
    title: '대화 카드',
    emoji: '🃏',
    description: '어색한 분위기를 깨는 대화 주제 카드! 소개팅, 회식, 커플용까지.',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">게임</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎲 게임 & 카드
          </h2>
          <p className="text-gray-400 text-lg">
            모임에서 즐길 수 있는 다양한 게임들!
          </p>
        </div>

        {/* Game Cards */}
        <div className="grid gap-6">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${game.color} rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <div className="flex items-start gap-6">
                  <span className="text-6xl">{game.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-white/80">{game.description}</p>
                    <div className="mt-4 flex items-center text-white/60 group-hover:text-white transition-colors">
                      <span>게임 시작</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Coming Soon */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400">
            🚧 더 많은 게임이 준비 중입니다!
          </p>
        </div>
      </div>
    </div>
  );
}
