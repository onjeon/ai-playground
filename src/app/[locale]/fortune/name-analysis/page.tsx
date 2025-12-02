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
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-950 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-500/10 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              fontSize: `${14 + (i % 5) * 4}px`,
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          >
            {['文', '名', '字', '書'][i % 4]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">전통 성명학</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            📜 이름 풀이
          </h1>
          <p className="text-amber-200/80 text-lg">
            당신의 이름에 담긴 의미와 운명<br />
            한글 획수로 분석하는 성명학
          </p>
        </div>

        {/* 메인 카드 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-amber-500/20 shadow-2xl mb-6">
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
                className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
              >
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-white font-medium text-xs">{item.title}</div>
                <div className="text-amber-300/60 text-[10px]">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 이름 입력 */}
          <div className="mb-6">
            <label className="block text-amber-200 text-sm font-medium mb-3 text-center">
              <User className="w-4 h-4 inline mr-2" />
              이름을 입력하세요 (한글)
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="예: 홍길동"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                className="w-full px-6 py-4 bg-slate-800/80 border border-amber-500/30 rounded-2xl text-white text-center text-xl focus:outline-none focus:border-amber-400 transition-colors"
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
            <p className="text-amber-300/50 text-xs text-center mt-2">
              성+이름 전체를 입력해주세요 (예: 김철수, 이영희)
            </p>
          </div>

          {/* 가격 */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-2xl border border-amber-500/30">
              <Gift className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-xl">900</span>
              <span className="text-amber-300/60 text-sm line-through">3,000</span>
            </div>
            <p className="text-amber-300/60 text-xs mt-2">내 이름의 숨겨진 의미 발견</p>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={handleStart}
            disabled={!isValid}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              isValid
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
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
          <p className="text-amber-300/50 text-xs leading-relaxed">
            전통 성명학을 기반으로 한 이름 분석입니다<br />
            재미로 참고하시고, 자신을 이해하는 계기로 삼으세요
          </p>
        </div>

        {/* 분석 방법 설명 */}
        <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">📖</span>
            성명학이란?
          </h3>
          <div className="space-y-3 text-sm text-amber-200/70">
            <p>
              성명학(姓名學)은 이름의 획수와 음양오행을 분석하여 그 사람의 성격, 적성, 운세를 해석하는 동양의 전통 학문입니다.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-amber-400 font-medium text-xs mb-1">81수리</div>
                <p className="text-xs text-amber-200/60">1~81의 숫자에 각각 길흉의 의미가 있습니다</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-amber-400 font-medium text-xs mb-1">원형이정(元亨利貞)</div>
                <p className="text-xs text-amber-200/60">4가지 격으로 인생의 시기별 운세를 봅니다</p>
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰 */}
        <div className="mt-6 bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-amber-400">★</span>
            ))}
            <span className="text-white font-bold ml-2">4.8</span>
          </div>
          <p className="text-amber-200/70 text-sm text-center italic">
            &quot;제 이름의 의미를 처음 알았어요. 성격 분석이 정말 맞아서 놀랐습니다!&quot;
          </p>
          <p className="text-amber-300/50 text-xs text-center mt-2">- 실제 이용자 후기</p>
        </div>
      </div>
    </div>
  );
}
