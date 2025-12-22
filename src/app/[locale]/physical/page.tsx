'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface PhysicalTest {
  slug: string;
  emoji: string;
  color: string;
}

const physicalTests: PhysicalTest[] = [
  { slug: 'reaction-speed', emoji: '⚡', color: 'from-green-500 to-emerald-600' },
  { slug: 'click-speed', emoji: '👆', color: 'from-blue-500 to-cyan-600' },
  { slug: 'color-blind', emoji: '🎨', color: 'from-purple-500 to-pink-600' },
  { slug: 'memory-test', emoji: '🧠', color: 'from-orange-500 to-red-600' },
  { slug: 'eye-tracking', emoji: '👁️', color: 'from-teal-500 to-cyan-600' },
  { slug: 'typing-speed', emoji: '⌨️', color: 'from-indigo-500 to-purple-600' },
  { slug: 'number-memory', emoji: '🔢', color: 'from-violet-500 to-purple-600' },
  { slug: 'aim-trainer', emoji: '🎯', color: 'from-red-500 to-rose-600' },
  { slug: 'hearing-test', emoji: '👂', color: 'from-amber-500 to-orange-600' },
  { slug: 'stroop-test', emoji: '🎨', color: 'from-fuchsia-500 to-pink-600' },
  { slug: 'time-perception', emoji: '⏱️', color: 'from-cyan-500 to-blue-600' },
  { slug: 'peripheral-vision', emoji: '👀', color: 'from-emerald-500 to-green-600' },
  { slug: 'pattern-recognition', emoji: '🔲', color: 'from-sky-500 to-blue-600' },
  { slug: 'steady-hand', emoji: '✋', color: 'from-lime-500 to-green-600' },
  { slug: 'multitasking', emoji: '🧩', color: 'from-rose-500 to-pink-600' },
  { slug: 'rhythm-test', emoji: '🥁', color: 'from-violet-500 to-purple-600' },
  { slug: 'color-sequence', emoji: '🌈', color: 'from-yellow-500 to-amber-600' },
  { slug: 'word-memory', emoji: '📝', color: 'from-teal-500 to-emerald-600' },
  { slug: 'direction-sense', emoji: '🧭', color: 'from-orange-500 to-red-600' },
];

export default function PhysicalTestsPage() {
  const t = useTranslations('physical');
  const tCommon = useTranslations('common');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
            ← {tCommon('home')}
          </Link>
          <h1 className="text-base sm:text-lg font-bold text-white">{t('pageTitle')}</h1>
          <div className="w-12 sm:w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        {/* Hero */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            🎮 {t('pageTitle')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg">
            {t('pageDescription')}
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
                    {t(`tests.${test.slug}.duration`)}
                  </span>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-1">{t(`tests.${test.slug}.title`)}</h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2">{t(`tests.${test.slug}.description`)}</p>
                <div className="mt-2 sm:mt-4 flex items-center text-white/60 text-xs sm:text-sm group-hover:text-white transition-colors">
                  <span>{tCommon('start')}</span>
                  <span className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div className="mt-6 sm:mt-12 bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-4">📌 {t('info.title')}</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>• {t('info.tip1')}</li>
            <li>• {t('info.tip2')}</li>
            <li>• {t('info.tip3')}</li>
            <li>• {t('info.tip4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
