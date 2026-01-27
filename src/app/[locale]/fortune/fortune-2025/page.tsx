'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Star, Sparkles, ChevronRight } from 'lucide-react';

export default function Fortune2025Page() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (field: 'year' | 'month' | 'day', value: string, maxLength: number) => {
    // 숫자만 허용
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, maxLength);
    const newBirthDate = { ...birthDate, [field]: numericValue };
    setBirthDate(newBirthDate);

    // 유효성 검사
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
    router.push(`/fortune/fortune-2025/result?birth=${birth}`);
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-indigo-600 dark:text-indigo-300 text-sm font-medium">2025 을사년 신년운세</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          🐍 2025 신년운세
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          을사년, 푸른 뱀의 해<br />
          당신의 한 해를 미리 만나보세요
        </p>
      </div>

      {/* 메인 카드 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        {/* 특징 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { icon: '🎯', title: '총운 분석', desc: '2025년 전체 흐름' },
            { icon: '💼', title: '5대 분야', desc: '직장/재물/연애/건강/학업' },
            { icon: '📅', title: '월별 운세', desc: '12개월 상세 예측' },
            { icon: '🍀', title: '행운 정보', desc: '숫자/색상/방향' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-gray-900 dark:text-white font-medium text-sm">{item.title}</div>
              <div className="text-gray-400 dark:text-gray-500 text-xs">{item.desc}</div>
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
              2025 운세 보기
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
          ✨ 동양 전통 사주학을 기반으로 한 2025년 운세입니다<br />
          재미로 참고하시고, 더 좋은 한 해를 만들어가세요
        </p>
      </div>

      {/* 별점 리뷰 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-gray-900 dark:text-white font-bold ml-2">4.8</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center italic">
          &quot;월별 운세가 정말 도움됐어요. 미리 준비할 수 있어서 좋았습니다!&quot;
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs text-center mt-2">- 2024년 이용자 후기</p>
      </div>
    </div>
  );
}
