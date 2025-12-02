'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

// 오늘의 행운 컬러 데이터
const luckyColors = [
  { name: '레드', color: '#EF4444', meaning: '열정과 에너지가 넘치는 하루', emoji: '🔴' },
  { name: '오렌지', color: '#F97316', meaning: '창의력과 사교성이 빛나는 하루', emoji: '🟠' },
  { name: '옐로우', color: '#EAB308', meaning: '밝은 기운과 행운이 가득한 하루', emoji: '🟡' },
  { name: '그린', color: '#22C55E', meaning: '안정과 성장의 기운이 있는 하루', emoji: '🟢' },
  { name: '블루', color: '#3B82F6', meaning: '평화롭고 집중력 있는 하루', emoji: '🔵' },
  { name: '퍼플', color: '#A855F7', meaning: '직관력과 영감이 넘치는 하루', emoji: '🟣' },
  { name: '핑크', color: '#EC4899', meaning: '사랑과 행복이 가득한 하루', emoji: '🩷' },
  { name: '민트', color: '#14B8A6', meaning: '새로운 시작의 기운이 있는 하루', emoji: '🩵' },
  { name: '골드', color: '#CA8A04', meaning: '풍요와 성공의 기운이 있는 하루', emoji: '⭐' },
  { name: '실버', color: '#9CA3AF', meaning: '차분하고 지혜로운 하루', emoji: '🩶' },
];

// 오늘의 숫자 데이터
const luckyNumbers = [1, 3, 7, 8, 9, 11, 13, 17, 21, 23, 27, 33, 37, 42, 77];

// 날짜 기반 시드 생성
function getDailySeed() {
  const today = new Date();
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

// 시드 기반 랜덤 함수
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function DailyPage() {
  const [greeting, setGreeting] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [luckyColor, setLuckyColor] = useState(luckyColors[0]);
  const [luckyNumber, setLuckyNumber] = useState(7);

  useEffect(() => {
    // 시간대별 인사말
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('좋은 아침이에요!');
    else if (hour < 18) setGreeting('좋은 오후예요!');
    else setGreeting('좋은 저녁이에요!');

    // 오늘 날짜
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric', 
      weekday: 'long' 
    };
    setTodayDate(today.toLocaleDateString('ko-KR', options));

    // 오늘의 행운 컬러 & 숫자 (날짜 기반)
    const seed = getDailySeed();
    const colorIndex = Math.floor(seededRandom(seed) * luckyColors.length);
    const numberIndex = Math.floor(seededRandom(seed + 1) * luckyNumbers.length);
    
    setLuckyColor(luckyColors[colorIndex]);
    setLuckyNumber(luckyNumbers[numberIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-4">
            <Sun className="w-5 h-5 text-amber-500" />
            <span className="text-amber-700 dark:text-amber-300 font-medium">데일리</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {greeting}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            {todayDate}
          </p>
        </div>

        {/* 오늘의 행운 카드 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* 행운의 컬러 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-purple-500" />
              <span className="font-medium text-gray-900 dark:text-white">오늘의 컬러</span>
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full shadow-lg"
                style={{ backgroundColor: luckyColor.color }}
              />
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{luckyColor.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{luckyColor.meaning}</div>
              </div>
            </div>
          </div>

          {/* 행운의 숫자 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium text-gray-900 dark:text-white">오늘의 숫자</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {luckyNumber}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{luckyNumber}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">행운을 가져다줄 숫자</div>
              </div>
            </div>
          </div>
        </div>

        {/* 데일리 콘텐츠 */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            오늘의 콘텐츠
          </h2>

          {/* 오늘의 운세 */}
          <Link href="/fortune/daily-fortune" className="block group">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    🔮
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">오늘의 운세</h3>
                    <p className="text-purple-100 text-sm">생년월일로 보는 오늘 하루의 운세</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          {/* 오늘의 타로 */}
          <Link href="/fortune/tarot/daily" className="block group">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    🃏
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">오늘의 타로</h3>
                    <p className="text-violet-100 text-sm">하루를 시작하는 타로 카드 한 장</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>

          {/* 컨디션 체크 */}
          <Link href="/daily/condition" className="block group">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    <Battery className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">오늘의 컨디션</h3>
                    <p className="text-emerald-100 text-sm">3문항으로 체크하는 오늘의 상태</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </div>

        {/* 추천 테스트 */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-orange-500" />
            오늘의 추천 테스트
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/test/stress-level" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">😰</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">스트레스 지수</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">오늘의 스트레스 체크</div>
              </div>
            </Link>
            <Link href="/test/social-battery" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">🔋</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">소셜 배터리</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">오늘의 에너지 레벨</div>
              </div>
            </Link>
            <Link href="/test/burnout-level" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">🔥</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">번아웃 지수</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">지금 내 상태는?</div>
              </div>
            </Link>
            <Link href="/test/mental-strength" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="text-2xl mb-2">💪</div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">멘탈 강도</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">오늘의 멘탈 체크</div>
              </div>
            </Link>
          </div>
        </div>

        {/* 하단 링크 */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
