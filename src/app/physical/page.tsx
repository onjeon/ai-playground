'use client';

import Link from 'next/link';

interface PhysicalTest {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  duration: string;
  color: string;
}

const physicalTests: PhysicalTest[] = [
  {
    slug: 'reaction-speed',
    title: '반응속도 테스트',
    emoji: '⚡',
    description: '초록색이 되면 최대한 빨리 클릭! 당신의 반응속도는?',
    duration: '1분',
    color: 'from-green-500 to-emerald-600',
  },
  {
    slug: 'click-speed',
    title: '클릭 속도 테스트',
    emoji: '👆',
    description: '10초 동안 얼마나 빨리 클릭할 수 있을까?',
    duration: '10초',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    slug: 'color-blind',
    title: '색각 테스트',
    emoji: '🎨',
    description: '다른 색상을 찾아라! 색상 구별 능력 테스트',
    duration: '2분',
    color: 'from-purple-500 to-pink-600',
  },
  {
    slug: 'memory-test',
    title: '순간 기억력 테스트',
    emoji: '🧠',
    description: '순서를 기억하고 따라하기! 기억력 한계에 도전',
    duration: '3분',
    color: 'from-orange-500 to-red-600',
  },
];

export default function PhysicalTestsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">피지컬 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎮 피지컬 테스트
          </h2>
          <p className="text-gray-400 text-lg">
            당신의 신체 능력과 인지 능력을 테스트해보세요!
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {physicalTests.map((test) => (
            <Link
              key={test.slug}
              href={`/physical/${test.slug}`}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${test.color} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{test.emoji}</span>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    {test.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{test.title}</h3>
                <p className="text-white/80 text-sm">{test.description}</p>
                <div className="mt-4 flex items-center text-white/60 text-sm group-hover:text-white transition-colors">
                  <span>테스트 시작</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div className="mt-12 bg-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">📌 안내</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• 피지컬 테스트는 PC/모바일 모두에서 플레이할 수 있습니다.</li>
            <li>• 정확한 결과를 위해 조용한 환경에서 진행하세요.</li>
            <li>• 클릭 테스트는 마우스보다 터치가 유리할 수 있습니다.</li>
            <li>• 결과는 재미로만 참고해주세요!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
