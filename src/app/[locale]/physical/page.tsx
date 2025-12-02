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
  {
    slug: 'eye-tracking',
    title: '안구 운동',
    emoji: '👁️',
    description: '눈 건강을 위한 안구 스트레칭! 눈의 피로를 풀어보세요',
    duration: '2분',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    slug: 'typing-speed',
    title: '타이핑 속도 테스트',
    emoji: '⌨️',
    description: '60초 동안 얼마나 빨리 타이핑할 수 있을까? WPM 측정!',
    duration: '1분',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    slug: 'number-memory',
    title: '숫자 기억력 테스트',
    emoji: '🔢',
    description: '점점 길어지는 숫자를 기억하라! 기억력 한계 도전',
    duration: '무제한',
    color: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'aim-trainer',
    title: '조준 테스트',
    emoji: '🎯',
    description: '나타나는 타겟을 빠르고 정확하게 클릭하세요!',
    duration: '2분',
    color: 'from-red-500 to-rose-600',
  },
  {
    slug: 'hearing-test',
    title: '청력 테스트',
    emoji: '👂',
    description: '다양한 주파수의 소리를 들을 수 있는지 테스트하세요!',
    duration: '3분',
    color: 'from-amber-500 to-orange-600',
  },
  {
    slug: 'stroop-test',
    title: '스트룹 테스트',
    emoji: '🎨',
    description: '글자가 아닌 색상을 맞추세요! 뇌의 정보 처리 능력 테스트',
    duration: '2분',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    slug: 'time-perception',
    title: '시간 감각 테스트',
    emoji: '⏱️',
    description: '시계 없이 정확히 시간을 맞춰보세요! 내부 시계 정확도 측정',
    duration: '3분',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'peripheral-vision',
    title: '시야각 테스트',
    emoji: '👀',
    description: '화면 가장자리에서 나타나는 물체를 감지하세요!',
    duration: '2분',
    color: 'from-emerald-500 to-green-600',
  },
  {
    slug: 'pattern-recognition',
    title: '패턴 인식 테스트',
    emoji: '🔲',
    description: '다른 색상 하나를 찾아라! 패턴 인식 능력 측정',
    duration: '2분',
    color: 'from-sky-500 to-blue-600',
  },
  {
    slug: 'steady-hand',
    title: '손 떨림 테스트',
    emoji: '✋',
    description: '좁은 통로를 마우스로 통과하세요! 손 안정성 측정',
    duration: '2분',
    color: 'from-lime-500 to-green-600',
  },
  {
    slug: 'multitasking',
    title: '멀티태스킹 테스트',
    emoji: '🧩',
    description: '수학 문제와 클릭을 동시에! 멀티태스킹 능력 측정',
    duration: '2분',
    color: 'from-rose-500 to-pink-600',
  },
  {
    slug: 'rhythm-test',
    title: '리듬 감각 테스트',
    emoji: '🥁',
    description: '비트에 맞춰 탭하세요! 리듬 감각 측정',
    duration: '2분',
    color: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'color-sequence',
    title: '색상 기억력 테스트',
    emoji: '🌈',
    description: '사이먼 게임! 색상 순서를 기억하고 따라하세요',
    duration: '무제한',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    slug: 'word-memory',
    title: '단어 기억력 테스트',
    emoji: '📝',
    description: '단어를 기억하고 모두 입력하세요! 언어 기억력 측정',
    duration: '3분',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    slug: 'direction-sense',
    title: '방향 감각 테스트',
    emoji: '🧭',
    description: '회전 후 올바른 방향을 찾으세요! 방향 감각 측정',
    duration: '2분',
    color: 'from-orange-500 to-red-600',
  },
];

export default function PhysicalTestsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-base sm:text-lg font-bold text-white">피지컬 테스트</h1>
          <div className="w-12 sm:w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        {/* Hero */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            🎮 피지컬 테스트
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg">
            당신의 신체 능력과 인지 능력을 테스트해보세요!
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4">
          {physicalTests.map((test) => (
            <Link
              key={test.slug}
              href={`/physical/${test.slug}`}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${test.color} rounded-xl sm:rounded-2xl p-3 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full`}>
                <div className="flex items-start justify-between mb-2 sm:mb-4">
                  <span className="text-2xl sm:text-5xl">{test.emoji}</span>
                  <span className="bg-white/20 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    {test.duration}
                  </span>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-1">{test.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2">{test.description}</p>
                <div className="mt-2 sm:mt-4 flex items-center text-white/60 text-xs sm:text-sm group-hover:text-white transition-colors">
                  <span>시작</span>
                  <span className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div className="mt-6 sm:mt-12 bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-4">📌 안내</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
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
