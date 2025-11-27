'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Star, Sparkles, ChevronRight, Gift, BookOpen } from 'lucide-react';

export default function TojeongPage() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (field: 'year' | 'month' | 'day', value: string) => {
    const newBirthDate = { ...birthDate, [field]: value };
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
    router.push(`/premium/tojeong/result?birth=${birth}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-950 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 23) % 100}%`,
              opacity: 0.2 + (i % 4) * 0.1,
              animationDelay: `${(i % 4) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">전통 토정비결</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            📜 2025 토정비결
          </h1>
          <p className="text-amber-200/80 text-lg">
            조선시대부터 이어온 전통 운세<br />
            괘(卦)로 보는 2025년 상세 운세
          </p>
        </div>

        {/* 메인 카드 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-amber-500/20 shadow-2xl mb-6">
          {/* 토정비결 설명 */}
          <div className="bg-amber-500/10 rounded-2xl p-4 mb-6 border border-amber-500/20">
            <p className="text-amber-200/80 text-sm leading-relaxed">
              <strong className="text-amber-300">토정비결</strong>은 조선시대 학자 이지함 선생이 만든 
              전통 운세 예측법입니다. 생년월일로 괘(卦)를 산출하여 
              한 해의 길흉화복을 점치는 방식으로, 500년 이상 이어져 온 
              대표적인 동양 점술입니다.
            </p>
          </div>

          {/* 특징 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: '📿', title: '괘(卦) 산출', desc: '생년월일 기반 괘 계산' },
              { icon: '🌸', title: '계절별 운세', desc: '봄/여름/가을/겨울' },
              { icon: '💰', title: '5대 분야', desc: '재물/직장/건강/가정/인간관계' },
              { icon: '📆', title: '월별 키워드', desc: '12개월 핵심 키워드' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl p-4 text-center border border-white/10"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-white font-medium text-sm">{item.title}</div>
                <div className="text-amber-300/60 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 생년월일 입력 */}
          <div className="mb-6">
            <label className="block text-amber-200 text-sm font-medium mb-3 text-center">
              <Calendar className="w-4 h-4 inline mr-2" />
              생년월일을 입력하세요 (양력)
            </label>
            <div className="flex gap-3 justify-center">
              <div className="flex-1 max-w-[100px]">
                <input
                  type="number"
                  placeholder="년도"
                  value={birthDate.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="w-full px-3 py-3 bg-slate-800/80 border border-amber-500/30 rounded-xl text-white text-center focus:outline-none focus:border-amber-400 transition-colors"
                  min="1940"
                  max="2024"
                />
                <div className="text-amber-300/50 text-xs text-center mt-1">YYYY</div>
              </div>
              <div className="flex-1 max-w-[80px]">
                <input
                  type="number"
                  placeholder="월"
                  value={birthDate.month}
                  onChange={(e) => handleInputChange('month', e.target.value)}
                  className="w-full px-3 py-3 bg-slate-800/80 border border-amber-500/30 rounded-xl text-white text-center focus:outline-none focus:border-amber-400 transition-colors"
                  min="1"
                  max="12"
                />
                <div className="text-amber-300/50 text-xs text-center mt-1">MM</div>
              </div>
              <div className="flex-1 max-w-[80px]">
                <input
                  type="number"
                  placeholder="일"
                  value={birthDate.day}
                  onChange={(e) => handleInputChange('day', e.target.value)}
                  className="w-full px-3 py-3 bg-slate-800/80 border border-amber-500/30 rounded-xl text-white text-center focus:outline-none focus:border-amber-400 transition-colors"
                  min="1"
                  max="31"
                />
                <div className="text-amber-300/50 text-xs text-center mt-1">DD</div>
              </div>
            </div>
          </div>

          {/* 가격 */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-2xl border border-amber-500/30">
              <Gift className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-xl">₩900</span>
              <span className="text-amber-300/60 text-sm line-through">₩2,000</span>
            </div>
            <p className="text-amber-300/60 text-xs mt-2">신년 특별가 · 한정 기간</p>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={handleStart}
            disabled={!isValid}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              isValid
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/30 hover:scale-[1.02]'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isValid ? (
              <>
                토정비결 보기
                <ChevronRight className="w-5 h-5" />
              </>
            ) : (
              '생년월일을 입력하세요'
            )}
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="text-center">
          <p className="text-amber-300/50 text-xs leading-relaxed">
            ✨ 전통 토정비결을 현대적으로 해석한 운세입니다<br />
            재미로 참고하시고, 더 좋은 한 해를 만들어가세요
          </p>
        </div>

        {/* 별점 리뷰 */}
        <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white font-bold ml-2">4.7</span>
          </div>
          <p className="text-amber-200/70 text-sm text-center italic">
            &quot;계절별 운세가 정말 신기하게 맞았어요. 조상의 지혜가 느껴집니다!&quot;
          </p>
          <p className="text-amber-300/50 text-xs text-center mt-2">- 이용자 후기</p>
        </div>
      </div>
    </div>
  );
}
