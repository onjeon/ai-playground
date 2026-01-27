'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { 
  Sun, 
  Sparkles, 
  Palette,
  ArrowRight,
  Calendar,
  Zap,
  Battery,
  Star
} from 'lucide-react';

// Color keys for translation lookup
const colorKeys = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'mint', 'gold', 'silver'];
const colorHexValues: Record<string, string> = {
  red: '#EF4444',
  orange: '#F97316',
  yellow: '#EAB308',
  green: '#22C55E',
  blue: '#3B82F6',
  purple: '#A855F7',
  pink: '#EC4899',
  mint: '#14B8A6',
  gold: '#CA8A04',
  silver: '#9CA3AF'
};

// Lucky numbers data
const luckyNumbers = [1, 3, 7, 8, 9, 11, 13, 17, 21, 23, 27, 33, 37, 42, 77];

// Date-based seed generation
function getDailySeed() {
  const today = new Date();
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

// Seeded random function
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function DailyPage() {
  const t = useTranslations('dailyPage');
  const locale = useLocale();
  const [greeting, setGreeting] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [luckyColorKey, setLuckyColorKey] = useState('red');
  const [luckyNumber, setLuckyNumber] = useState(7);

  useEffect(() => {
    // Time-based greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting(t('greetingMorning'));
    else if (hour < 18) setGreeting(t('greetingAfternoon'));
    else setGreeting(t('greetingEvening'));

    // Today's date with locale
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric', 
      weekday: 'long' 
    };
    setTodayDate(today.toLocaleDateString(locale, options));

    // Today's lucky color & number (date-based)
    const seed = getDailySeed();
    const colorIndex = Math.floor(seededRandom(seed) * colorKeys.length);
    const numberIndex = Math.floor(seededRandom(seed + 1) * luckyNumbers.length);
    
    setLuckyColorKey(colorKeys[colorIndex]);
    setLuckyNumber(luckyNumbers[numberIndex]);
  }, [t, locale]);

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-4">
            <Sun className="w-5 h-5 text-amber-500" />
            <span className="text-amber-700 dark:text-amber-300 font-medium">{t('daily')}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {greeting}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            {todayDate}
          </p>
        </div>

        {/* Today's luck cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Lucky color */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-purple-500" />
              <span className="font-medium text-gray-900 dark:text-white">{t('todayColor')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full shadow-lg"
                style={{ backgroundColor: colorHexValues[luckyColorKey] }}
              />
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{t(`colors.${luckyColorKey}.name`)}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t(`colors.${luckyColorKey}.meaning`)}</div>
              </div>
            </div>
          </div>

          {/* Lucky number */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium text-gray-900 dark:text-white">{t('todayNumber')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {luckyNumber}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{luckyNumber}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('luckyNumberMeaning')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily content */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            {t('todayContent')}
          </h2>

          {/* Daily fortune */}
          <Link href="/fortune/daily-fortune" className="block group">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-4 text-white transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    🔮
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-0.5">{t('dailyFortune')}</h3>
                    <p className="text-purple-100 text-sm">{t('dailyFortuneDesc')}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          {/* Daily tarot */}
          <Link href="/fortune/tarot/daily" className="block group">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-4 text-white transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    🃏
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-0.5">{t('dailyTarot')}</h3>
                    <p className="text-violet-100 text-sm">{t('dailyTarotDesc')}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          {/* Condition check */}
          <Link href="/daily/condition" className="block group">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 text-white transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    <Battery className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-0.5">{t('todayCondition')}</h3>
                    <p className="text-emerald-100 text-sm">{t('todayConditionDesc')}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </div>

        {/* Recommended tests */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-orange-500" />
            {t('recommendedTests')}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/test/stress-level" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">😰</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('tests.stressLevel.title')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('tests.stressLevel.desc')}</div>
              </div>
            </Link>
            <Link href="/test/social-battery" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">🔋</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('tests.socialBattery.title')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('tests.socialBattery.desc')}</div>
              </div>
            </Link>
            <Link href="/test/burnout-level" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">🔥</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('tests.burnoutLevel.title')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('tests.burnoutLevel.desc')}</div>
              </div>
            </Link>
            <Link href="/test/mental-strength" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">💪</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">{t('tests.mentalStrength.title')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('tests.mentalStrength.desc')}</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer link */}
        <div className="text-center">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">
            ← {t('backHome')}
          </Link>
        </div>
    </div>
  );
}
