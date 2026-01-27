'use client';

import Link from 'next/link';
import { Sparkles, Star, Heart, Coins, Users, Clock, GitBranch } from 'lucide-react';

export default function TarotIndexPage() {
  const dailyReadings = [
    {
      href: '/fortune/tarot/daily?type=general',
      icon: Star,
      emoji: '🌟',
      title: '오늘의 총운',
      desc: '하루를 이끌 메시지',
      color: 'from-amber-500 to-orange-500',
      cards: 1
    },
    {
      href: '/fortune/tarot/daily?type=love',
      icon: Heart,
      emoji: '💕',
      title: '오늘의 연애운',
      desc: '사랑과 관계 운세',
      color: 'from-pink-500 to-rose-500',
      cards: 1
    },
    {
      href: '/fortune/tarot/daily?type=money',
      icon: Coins,
      emoji: '💰',
      title: '오늘의 금전운',
      desc: '재정과 커리어 운세',
      color: 'from-emerald-500 to-green-500',
      cards: 1
    },
  ];

  const premiumReadings = [
    {
      href: '/fortune/tarot/relationship',
      icon: Users,
      emoji: '💑',
      title: '연인관계 분석',
      desc: '4장 카드로 관계 심층 분석',
      color: 'from-purple-500 to-violet-500',
      cards: 4
    },
    {
      href: '/fortune/tarot/timeline',
      icon: Clock,
      emoji: '⏳',
      title: '과거-현재-미래',
      desc: '시간의 흐름 속 운명 분석',
      color: 'from-blue-500 to-cyan-500',
      cards: 3
    },
    {
      href: '/fortune/tarot/choice',
      icon: GitBranch,
      emoji: '🔮',
      title: '선택의 기로',
      desc: '두 가지 선택 결과 비교',
      color: 'from-indigo-500 to-purple-500',
      cards: 3
    },
  ];

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">AI 타로</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          🔮 타로 카드 리딩
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          78장의 타로 카드가 전하는 메시지를 확인하세요
        </p>
      </div>

      {/* 데일리 타로 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🌅</span>
          오늘의 타로
          <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">무료</span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {dailyReadings.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white font-bold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>🎴 {item.cards}장</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 심층 분석 타로 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          심층 분석 타로
          <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">무료</span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {premiumReadings.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white font-bold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.desc}</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <span>🎴 {item.cards}장</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 안내 문구 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white font-bold mb-3 flex items-center gap-2">
          <span>🃏</span> 타로 리딩 안내
        </h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
          <li>• 모든 타로 리딩은 무료로 이용 가능합니다</li>
          <li>• 정방향/역방향에 따라 다른 해석이 제공됩니다</li>
          <li>• 타로는 재미를 위한 콘텐츠로, 중요한 결정은 신중하게 내려주세요</li>
        </ul>
      </div>

      {/* 홈 링크 */}
      <div className="text-center">
        <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
