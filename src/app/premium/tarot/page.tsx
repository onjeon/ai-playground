'use client';

import Link from 'next/link';
import { Sparkles, Star, Heart, Coins, Users, Clock, GitBranch } from 'lucide-react';

export default function TarotIndexPage() {
  const dailyReadings = [
    { 
      href: '/premium/tarot/daily?type=general', 
      icon: Star, 
      emoji: '🌟',
      title: '오늘의 총운', 
      desc: '하루를 이끌 메시지',
      color: 'from-amber-500 to-orange-500',
      cards: 1,
      free: true
    },
    { 
      href: '/premium/tarot/daily?type=love', 
      icon: Heart, 
      emoji: '💕',
      title: '오늘의 연애운', 
      desc: '사랑과 관계 운세',
      color: 'from-pink-500 to-rose-500',
      cards: 1,
      free: true
    },
    { 
      href: '/premium/tarot/daily?type=money', 
      icon: Coins, 
      emoji: '💰',
      title: '오늘의 금전운', 
      desc: '재정과 커리어 운세',
      color: 'from-emerald-500 to-green-500',
      cards: 1,
      free: true
    },
  ];

  const premiumReadings = [
    { 
      href: '/premium/tarot/relationship', 
      icon: Users, 
      emoji: '💑',
      title: '연인관계 분석', 
      desc: '4장 카드로 관계 심층 분석',
      color: 'from-purple-500 to-violet-500',
      cards: 4,
      price: 900
    },
    { 
      href: '/premium/tarot/timeline', 
      icon: Clock, 
      emoji: '⏳',
      title: '과거-현재-미래', 
      desc: '시간의 흐름 속 운명 분석',
      color: 'from-blue-500 to-cyan-500',
      cards: 3,
      price: 900
    },
    { 
      href: '/premium/tarot/choice', 
      icon: GitBranch, 
      emoji: '🔮',
      title: '선택의 기로', 
      desc: '두 가지 선택 결과 비교',
      color: 'from-indigo-500 to-purple-500',
      cards: 3,
      price: 900
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI 타로</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            🔮 타로 카드 리딩
          </h1>
          <p className="text-purple-200/80 text-lg">
            78장의 타로 카드가 전하는 메시지를 확인하세요
          </p>
        </div>

        {/* 데일리 타로 (무료) */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🌅</span>
            오늘의 타로 
            <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">무료</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyReadings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-purple-500/50 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-1 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-300/70 text-sm mb-2">{item.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-purple-400/60">
                      <span>🎴 {item.cards}장</span>
                      <span>•</span>
                      <span>하루 1회</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 프리미엄 타로 (유료) */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            프리미엄 타로
            <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">유료</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {premiumReadings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/50 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-1 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-300/70 text-sm mb-2">{item.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-purple-400/60">🎴 {item.cards}장</span>
                      <span className="text-amber-400 font-bold">{item.price.toLocaleString()}원</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 안내 문구 */}
        <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <span>🃏</span> 타로 리딩 안내
          </h3>
          <ul className="space-y-2 text-purple-200/70 text-sm">
            <li>• 데일리 타로는 하루에 각 1회씩 무료로 이용 가능합니다</li>
            <li>• 프리미엄 타로는 결제 후 무제한 이용 가능합니다</li>
            <li>• 정방향/역방향에 따라 다른 해석이 제공됩니다</li>
            <li>• 타로는 재미를 위한 콘텐츠로, 중요한 결정은 신중하게 내려주세요</li>
          </ul>
        </div>

        {/* 홈 링크 */}
        <div className="text-center mt-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
