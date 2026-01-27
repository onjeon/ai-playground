'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ChevronRight, Gift, User, AlertCircle } from 'lucide-react';
import { isValidKoreanName } from '@/lib/fortune/name';

export default function NameAnalysisPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (value: string) => {
    setName(value);
    setError('');
  };

  const isValid = isValidKoreanName(name);

  const handleStart = () => {
    if (!name) {
      setError('이름을 입력해주세요.');
      return;
    }

    if (!isValid) {
      setError('한글 이름 2~4글자만 입력 가능합니다.');
      return;
    }

    router.push(`/fortune/name-analysis/result?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-indigo-600 dark:text-indigo-300 text-sm font-medium">전통 성명학</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          📜 이름 풀이
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          당신의 이름에 담긴 의미와 운명<br />
          한글 획수로 분석하는 성명학
        </p>
      </div>

      {/* 메인 카드 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        {/* 특징 */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { icon: '📊', title: '81수리 분석', desc: '획수별 길흉 판단' },
            { icon: '☯️', title: '음양오행', desc: '기운의 조화 분석' },
            { icon: '🔮', title: '원형이정', desc: '4격 운세 분석' },
            { icon: '💡', title: '맞춤 조언', desc: '성격/적성/관계' },
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

        {/* 이름 입력 */}
        <div className="mb-6">
          <label className="block text-gray-600 dark:text-gray-400 text-sm font-medium mb-3 text-center">
            <User className="w-4 h-4 inline mr-2" />
            이름을 입력하세요 (한글)
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="예: 홍길동"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white text-center text-xl focus:outline-none focus:border-indigo-500 transition-colors"
              maxLength={4}
            />
            {name && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isValid ? (
                  <span className="text-green-400 text-sm">✓</span>
                ) : (
                  <span className="text-red-400 text-sm">✗</span>
                )}
              </div>
            )}
          </div>
          {error && (
            <div className="flex items-center justify-center gap-2 mt-3 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
          <p className="text-gray-400 dark:text-gray-500 text-xs text-center mt-2">
            성+이름 전체를 입력해주세요 (예: 김철수, 이영희)
          </p>
        </div>

        {/* 가격 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 px-6 py-3 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
            <Gift className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-600 dark:text-indigo-300 font-bold text-xl">900</span>
            <span className="text-gray-400 dark:text-gray-500 text-sm line-through">3,000</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">내 이름의 숨겨진 의미 발견</p>
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
              이름 풀이 보기
              <ChevronRight className="w-5 h-5" />
            </>
          ) : (
            '한글 이름을 입력하세요'
          )}
        </button>
      </div>

      {/* 안내 문구 */}
      <div className="text-center">
        <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed">
          전통 성명학을 기반으로 한 이름 분석입니다<br />
          재미로 참고하시고, 자신을 이해하는 계기로 삼으세요
        </p>
      </div>

      {/* 분석 방법 설명 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
          <span className="text-xl">📖</span>
          성명학이란?
        </h3>
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <p>
            성명학(姓名學)은 이름의 획수와 음양오행을 분석하여 그 사람의 성격, 적성, 운세를 해석하는 동양의 전통 학문입니다.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
              <div className="text-indigo-600 dark:text-indigo-400 font-medium text-xs mb-1">81수리</div>
              <p className="text-xs text-gray-400 dark:text-gray-500">1~81의 숫자에 각각 길흉의 의미가 있습니다</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
              <div className="text-indigo-600 dark:text-indigo-400 font-medium text-xs mb-1">원형이정(元亨利貞)</div>
              <p className="text-xs text-gray-400 dark:text-gray-500">4가지 격으로 인생의 시기별 운세를 봅니다</p>
            </div>
          </div>
        </div>
      </div>

      {/* 리뷰 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-amber-400">★</span>
          ))}
          <span className="text-gray-900 dark:text-white font-bold ml-2">4.8</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center italic">
          &quot;제 이름의 의미를 처음 알았어요. 성격 분석이 정말 맞아서 놀랐습니다!&quot;
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs text-center mt-2">- 실제 이용자 후기</p>
      </div>
    </div>
  );
}
