'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Sparkles, ChevronRight, Gift, Users } from 'lucide-react';

export default function CompatibilityPage() {
  const router = useRouter();
  const [person1, setPerson1] = useState({ year: '', month: '', day: '' });
  const [person2, setPerson2] = useState({ year: '', month: '', day: '' });
  const [isValid, setIsValid] = useState(false);

  const validateDate = (date: { year: string; month: string; day: string }) => {
    const year = parseInt(date.year);
    const month = parseInt(date.month);
    const day = parseInt(date.day);
    return year >= 1940 && year <= 2024 && month >= 1 && month <= 12 && day >= 1 && day <= 31;
  };

  const handleInputChange = (
    person: 'person1' | 'person2',
    field: 'year' | 'month' | 'day',
    value: string
  ) => {
    const setter = person === 'person1' ? setPerson1 : setPerson2;
    const currentData = person === 'person1' ? person1 : person2;
    const otherData = person === 'person1' ? person2 : person1;
    
    const newData = { ...currentData, [field]: value };
    setter(newData);
    
    // 유효성 검사
    setIsValid(validateDate(newData) && validateDate(otherData));
  };

  const handleStart = () => {
    if (!isValid) return;
    
    const birth1 = `${person1.year}${person1.month.padStart(2, '0')}${person1.day.padStart(2, '0')}`;
    const birth2 = `${person2.year}${person2.month.padStart(2, '0')}${person2.day.padStart(2, '0')}`;
    router.push(`/fortune/compatibility/result?birth1=${birth1}&birth2=${birth2}`);
  };

  const DateInput = ({ 
    label, 
    emoji,
    data, 
    person 
  }: { 
    label: string;
    emoji: string;
    data: { year: string; month: string; day: string };
    person: 'person1' | 'person2';
  }) => (
    <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
      <label className="block text-pink-200 text-sm font-medium mb-3 text-center">
        <span className="text-xl mr-2">{emoji}</span>
        {label}
      </label>
      <div className="flex gap-2 justify-center">
        <div className="flex-1 max-w-[90px]">
          <input
            type="number"
            placeholder="년도"
            value={data.year}
            onChange={(e) => handleInputChange(person, 'year', e.target.value)}
            className="w-full px-2 py-3 bg-slate-800/80 border border-pink-500/30 rounded-xl text-white text-center text-sm focus:outline-none focus:border-pink-400 transition-colors"
            min="1940"
            max="2024"
          />
          <div className="text-pink-300/50 text-xs text-center mt-1">YYYY</div>
        </div>
        <div className="flex-1 max-w-[70px]">
          <input
            type="number"
            placeholder="월"
            value={data.month}
            onChange={(e) => handleInputChange(person, 'month', e.target.value)}
            className="w-full px-2 py-3 bg-slate-800/80 border border-pink-500/30 rounded-xl text-white text-center text-sm focus:outline-none focus:border-pink-400 transition-colors"
            min="1"
            max="12"
          />
          <div className="text-pink-300/50 text-xs text-center mt-1">MM</div>
        </div>
        <div className="flex-1 max-w-[70px]">
          <input
            type="number"
            placeholder="일"
            value={data.day}
            onChange={(e) => handleInputChange(person, 'day', e.target.value)}
            className="w-full px-2 py-3 bg-slate-800/80 border border-pink-500/30 rounded-xl text-white text-center text-sm focus:outline-none focus:border-pink-400 transition-colors"
            min="1"
            max="31"
          />
          <div className="text-pink-300/50 text-xs text-center mt-1">DD</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-950 via-rose-950 to-slate-950">
      {/* 하트 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500/20 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              fontSize: `${12 + (i % 5) * 4}px`,
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium">2025 궁합 운세</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            💕 궁합 운세
          </h1>
          <p className="text-pink-200/80 text-lg">
            동양 사주학 + 서양 점성술<br />
            두 사람의 운명적 궁합을 확인하세요
          </p>
        </div>

        {/* 메인 카드 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-pink-500/20 shadow-2xl mb-6">
          {/* 특징 */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { icon: '🐲', title: '띠 궁합', desc: '삼합/육합/상충 분석' },
              { icon: '⭐', title: '별자리 궁합', desc: '원소 조화 분석' },
              { icon: '💑', title: '연애 궁합', desc: '관계 발전 가능성' },
              { icon: '💬', title: '소통 조언', desc: '갈등 해결 팁' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
              >
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-white font-medium text-xs">{item.title}</div>
                <div className="text-pink-300/60 text-[10px]">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 생년월일 입력 */}
          <div className="space-y-4 mb-6">
            <DateInput 
              label="첫 번째 사람 (양력)" 
              emoji="👤"
              data={person1} 
              person="person1" 
            />
            
            {/* 하트 연결 */}
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </div>
            </div>
            
            <DateInput 
              label="두 번째 사람 (양력)" 
              emoji="👤"
              data={person2} 
              person="person2" 
            />
          </div>

          {/* 가격 */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 px-6 py-3 rounded-2xl border border-pink-500/30">
              <Gift className="w-5 h-5 text-pink-400" />
              <span className="text-pink-300 font-bold text-xl">900</span>
              <span className="text-pink-300/60 text-sm line-through">3,000</span>
            </div>
            <p className="text-pink-300/60 text-xs mt-2">두 사람의 궁합을 한 번에!</p>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={handleStart}
            disabled={!isValid}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              isValid
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isValid ? (
              <>
                궁합 보기
                <ChevronRight className="w-5 h-5" />
              </>
            ) : (
              '두 사람의 생년월일을 입력하세요'
            )}
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="text-center">
          <p className="text-pink-300/50 text-xs leading-relaxed">
            동양 사주학(띠)과 서양 점성술(별자리)을 결합한 궁합 분석입니다<br />
            재미로 참고하시고, 서로를 이해하는 계기로 삼으세요 💕
          </p>
        </div>

        {/* 궁합 설명 */}
        <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-pink-400" />
            궁합 분석 방식
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-xl">🐲</span>
              <div>
                <div className="text-white font-medium">띠 궁합 (60%)</div>
                <div className="text-pink-300/70 text-xs">삼합(三合), 육합(六合), 상충(相沖) 등 전통 사주학 기반</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xl">⭐</span>
              <div>
                <div className="text-white font-medium">별자리 궁합 (40%)</div>
                <div className="text-pink-300/70 text-xs">불/흙/공기/물 4원소의 조화와 상생 관계 분석</div>
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰 */}
        <div className="mt-6 bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Heart key={star} className="w-4 h-4 fill-pink-400 text-pink-400" />
            ))}
            <span className="text-white font-bold ml-2">4.9</span>
          </div>
          <p className="text-pink-200/70 text-sm text-center italic">
            &quot;남자친구랑 해봤는데 천생연분이래요! 소통 팁도 도움됐어요 ㅎㅎ&quot;
          </p>
          <p className="text-pink-300/50 text-xs text-center mt-2">- 실제 이용자 후기</p>
        </div>
      </div>
    </div>
  );
}
