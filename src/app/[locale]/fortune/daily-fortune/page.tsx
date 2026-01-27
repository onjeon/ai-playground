'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Sparkles, ChevronRight, Sun } from 'lucide-react';

export default function DailyFortunePage() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
  const [isValid, setIsValid] = useState(false);

  // 오늘 날짜
  const today = new Date();
  const todayStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const todayFull = `${todayStr} (${weekdays[today.getDay()]})`;

  const handleInputChange = (field: 'year' | 'month' | 'day', value: string, maxLength: number) => {
    // 숫자만 허용
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, maxLength);
    const newBirthDate = { ...birthDate, [field]: numericValue };
    setBirthDate(newBirthDate);

    const year = parseInt(newBirthDate.year);
    const month = parseInt(newBirthDate.month);
    const day = parseInt(newBirthDate.day);

    const isValidDate =
      year >= 1940 && year <= 2024 &&
      month >= 1 && month <= 12 &&
      day >= 1 && day <= 31;

    setIsValid(isValidDate);
  };

  const handleStart = () => {
    if (!isValid) return;

    const birth = `${birthDate.year}${birthDate.month.padStart(2, '0')}${birthDate.day.padStart(2, '0')}`;
    router.push(`/fortune/daily-fortune/result?birth=${birth}`);
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-indigo-600 dark:text-indigo-300 text-sm font-medium">오늘의 운세</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          <Sun className="inline w-10 h-10 text-yellow-400 mr-2" />
          오늘의 운세
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          매일 새롭게 바뀌는 나만의 운세<br />
          오늘 하루를 미리 알아보세요
        </p>

        {/* 오늘 날짜 */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-700">
          <Calendar className="w-4 h-4 text-indigo-500" />
          <span className="text-gray-900 dark:text-white font-medium">{todayFull}</span>
        </div>
      </div>

      {/* 메인 카드 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        {/* 특징 */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { icon: '🌟', title: '총운', desc: '오늘의 전체 운세' },
            { icon: '💕', title: '연애운', desc: '사랑과 인연' },
            { icon: '💼', title: '직장운', desc: '업무와 커리어' },
            { icon: '💰', title: '금전운', desc: '재물과 투자' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="text-gray-900 dark:text-white font-medium text-xs">{item.title}</div>
              <div className="text-gray-400 dark:text-gray-500 text-[10px]">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 생년월일 입력 */}
        <div className="mb-6">
          <label className="block text-gray-600 dark:text-gray-400 text-sm font-medium mb-3 text-center">
            <Calendar className="w-4 h-4 inline mr-2" />
            생년월일을 입력하세요 (양력)
          </label>
          <div className="flex gap-3 justify-center">
            <div className="flex-1 max-w-[100px]">
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="1990"
                value={birthDate.year}
                onChange={(e) => handleInputChange('year', e.target.value, 4)}
                className="w-full px-3 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white text-center focus:outline-none focus:border-indigo-500 transition-colors"
                maxLength={4}
              />
              <div className="text-gray-400 dark:text-gray-500 text-xs text-center mt-1">YYYY</div>
            </div>
            <div className="flex-1 max-w-[80px]">
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="01"
                value={birthDate.month}
                onChange={(e) => handleInputChange('month', e.target.value, 2)}
                className="w-full px-3 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white text-center focus:outline-none focus:border-indigo-500 transition-colors"
                maxLength={2}
              />
              <div className="text-gray-400 dark:text-gray-500 text-xs text-center mt-1">MM</div>
            </div>
            <div className="flex-1 max-w-[80px]">
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="01"
                value={birthDate.day}
                onChange={(e) => handleInputChange('day', e.target.value, 2)}
                className="w-full px-3 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white text-center focus:outline-none focus:border-indigo-500 transition-colors"
                maxLength={2}
              />
              <div className="text-gray-400 dark:text-gray-500 text-xs text-center mt-1">DD</div>
            </div>
          </div>
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={handleStart}
          disabled={!isValid}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
            isValid
              ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isValid ? (
            <>
              오늘의 운세 보기
              <ChevronRight className="w-5 h-5" />
            </>
          ) : (
            '생년월일을 입력하세요'
          )}
        </button>
      </div>

      {/* 안내 문구 */}
      <div className="text-center">
        <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed">
          생년월일과 오늘 날짜를 기반으로 매일 새롭게 생성됩니다<br />
          같은 날 같은 생년월일이면 같은 결과가 나와요
        </p>
      </div>

      {/* 특징 설명 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
          <Sun className="w-5 h-5 text-yellow-400" />
          오늘의 운세 특징
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-xl">📅</span>
            <div>
              <div className="text-gray-900 dark:text-white font-medium">매일 새롭게</div>
              <div className="text-gray-400 dark:text-gray-500 text-xs">날짜가 바뀌면 운세도 바뀝니다</div>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <div className="text-gray-900 dark:text-white font-medium">분야별 상세 운세</div>
              <div className="text-gray-400 dark:text-gray-500 text-xs">총운, 연애, 직장, 금전, 건강까지</div>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🍀</span>
            <div>
              <div className="text-gray-900 dark:text-white font-medium">행운의 요소</div>
              <div className="text-gray-400 dark:text-gray-500 text-xs">오늘의 행운 색상, 숫자, 방향, 시간</div>
            </div>
          </div>
        </div>
      </div>

      {/* 리뷰 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400">★</span>
          ))}
          <span className="text-gray-900 dark:text-white font-bold ml-2">4.7</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center italic">
          &quot;매일 아침 확인하는 습관이 생겼어요. 하루 시작이 달라져요!&quot;
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs text-center mt-2">- 실제 이용자 후기</p>
      </div>
    </div>
  );
}
