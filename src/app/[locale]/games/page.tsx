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
    slug: 'worldcup',
    title: '이상형 월드컵',
    emoji: '🏆',
    description: '라면, 디저트, 강아지 등 다양한 월드컵! 나의 취향을 찾아보세요',
    color: 'from-amber-500 to-yellow-600',
  },
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
  {
    slug: 'random-menu',
    title: '오늘 뭐 먹지?',
    emoji: '🍽️',
    description: '메뉴 선택이 어려울 때! 점심, 저녁, 야식까지 랜덤 추천',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    slug: 'number-picker',
    title: '랜덤 뽑기',
    emoji: '🎲',
    description: '숫자 뽑기, 순서 정하기, 제비뽑기까지! 공정한 랜덤 추첨',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    slug: 'team-divider',
    title: '팀 나누기',
    emoji: '👥',
    description: '인원수와 팀 수만 입력하면 공정하게 팀을 나눠드려요!',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    slug: 'penalty-picker',
    title: '벌칙 뽑기',
    emoji: '🎰',
    description: '라이트부터 하드코어까지! 재밌는 벌칙을 뽑아보세요',
    color: 'from-red-500 to-rose-500',
  },
  {
    slug: 'role-picker',
    title: '역할 뽑기',
    emoji: '🎭',
    description: '마피아, 스파이, 늑대인간! 게임 역할을 랜덤으로 배정',
    color: 'from-purple-500 to-violet-600',
  },
  {
    slug: 'would-you-rather',
    title: '이것 vs 저것',
    emoji: '🤔',
    description: '둘 중 하나만 선택해야 한다면? 친구들과 토론해보세요!',
    color: 'from-amber-500 to-orange-500',
  },
  {
    slug: 'ice-breaker',
    title: '아이스브레이킹',
    emoji: '🎰',
    description: '어색한 분위기를 깨는 마법의 질문 룰렛!',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    slug: 'couple-quiz',
    title: '커플 테스트',
    emoji: '💑',
    description: '상대방에 대해 얼마나 알고 있나요? 커플 궁합 테스트!',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-base sm:text-lg font-bold text-white">게임</h1>
          <div className="w-12 sm:w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        {/* Hero */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            🎲 게임 & 카드
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg">
            모임에서 즐길 수 있는 다양한 게임들!
          </p>
        </div>

        {/* Game Cards - Grid on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-6">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group block"
            >
              {/* Mobile: Compact card */}
              <div className={`sm:hidden bg-gradient-to-br ${game.color} rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full`}>
                <div className="flex flex-col">
                  <span className="text-2xl mb-2">{game.emoji}</span>
                  <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{game.title}</h3>
                  <p className="text-white/80 text-xs line-clamp-2 flex-1">{game.description}</p>
                  <div className="mt-2 flex items-center text-white/60 text-xs group-hover:text-white transition-colors">
                    <span>시작</span>
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
              {/* Desktop: Full card */}
              <div className={`hidden sm:block bg-gradient-to-br ${game.color} rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
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
        <div className="mt-6 sm:mt-8 bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            🚧 더 많은 게임이 준비 중입니다!
          </p>
        </div>
      </div>
    </div>
  );
}
