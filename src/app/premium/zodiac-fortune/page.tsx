'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Star, Sparkles, ChevronRight, Gift } from 'lucide-react';
import { getConstellationByDate, getConstellationInfo } from '@/lib/fortune/constellation';

export default function ZodiacFortunePage() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
  const [isValid, setIsValid] = useState(false);
  const [previewConstellation, setPreviewConstellation] = useState<string | null>(null);

  const handleInputChange = (field: 'year' | 'month' | 'day', value: string) => {
    const newBirthDate = { ...birthDate, [field]: value };
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

    // 별자리 미리보기
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const constellation = getConstellationByDate(month, day);
      const info = getConstellationInfo(constellation);
      setPreviewConstellation(`${info.symbol} ${info.name}`);
    } else {
      setPreviewConstellation(null);
    }
  };

  const handleStart = () => {
    if (!isValid) return;
    
    const birth = `${birthDate.year}${birthDate.month.padStart(2, '0')}${birthDate.day.padStart(2, '0')}`;
    router.push(`/premium/zodiac-fortune/result?birth=${birth}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-950">
      {/* 별 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 19) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.15,
              animationDelay: `${(i % 7) * 0.3}s`,
              animationDuration: `${2 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">2025 별자리 운세</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            2025 별자리 운세
          </h1>
          <p className="text-blue-200/80 text-lg">
            서양 점성술로 보는 2025년<br />
            당신의 별이 알려주는 한 해의 운명
          </p>
        </div>

        {/* 별자리 아이콘들 */}
        <div className="flex justify-center gap-2 mb-8 text-2xl opacity-60">
          <span>♈</span><span>♉</span><span>♊</span><span>♋</span>
          <span>♌</span><span>♍</span><span>♎</span><span>♏</span>
          <span>♐</span><span>♑</span><span>♒</span><span>♓</span>
        </div>

        {/* 메인 카드 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl mb-6">
          {/* 특징 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: '⭐', title: '총운 분석', desc: '2025년 전체 흐름' },
              { icon: '🌙', title: '5대 분야', desc: '직장/재물/연애/건강/학업' },
              { icon: '📅', title: '월별 운세', desc: '12개월 상세 예측' },
              { icon: '🔮', title: '행운 정보', desc: '숫자/색상/요일/방향' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl p-4 text-center border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-white font-medium text-sm">{item.title}</div>
                <div className="text-blue-300/60 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 생년월일 입력 */}
          <div className="mb-6">
            <label className="block text-blue-200 text-sm font-medium mb-3 text-center">
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
                  className="w-full px-3 py-3 bg-slate-800/80 border border-blue-500/30 rounded-xl text-white text-center focus:outline-none focus:border-blue-400 transition-colors"
                  min="1940"
                  max="2024"
                />
                <div className="text-blue-300/50 text-xs text-center mt-1">YYYY</div>
              </div>
              <div className="flex-1 max-w-[80px]">
                <input
                  type="number"
                  placeholder="월"
                  value={birthDate.month}
                  onChange={(e) => handleInputChange('month', e.target.value)}
                  className="w-full px-3 py-3 bg-slate-800/80 border border-blue-500/30 rounded-xl text-white text-center focus:outline-none focus:border-blue-400 transition-colors"
                  min="1"
                  max="12"
                />
                <div className="text-blue-300/50 text-xs text-center mt-1">MM</div>
              </div>
              <div className="flex-1 max-w-[80px]">
                <input
                  type="number"
                  placeholder="일"
                  value={birthDate.day}
                  onChange={(e) => handleInputChange('day', e.target.value)}
                  className="w-full px-3 py-3 bg-slate-800/80 border border-blue-500/30 rounded-xl text-white text-center focus:outline-none focus:border-blue-400 transition-colors"
                  min="1"
                  max="31"
                />
                <div className="text-blue-300/50 text-xs text-center mt-1">DD</div>
              </div>
            </div>

            {/* 별자리 미리보기 */}
            {previewConstellation && (
              <div className="text-center mt-4">
                <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm">
                  {previewConstellation}
                </span>
              </div>
            )}
          </div>

          {/* 가격 */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 px-6 py-3 rounded-2xl border border-blue-500/30">
              <Gift className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-bold text-xl">900</span>
              <span className="text-blue-300/60 text-sm line-through">3,000</span>
            </div>
            <p className="text-blue-300/60 text-xs mt-2">신년 특별가 한정 기간</p>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={handleStart}
            disabled={!isValid}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              isValid
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isValid ? (
              <>
                2025 별자리 운세 보기
                <ChevronRight className="w-5 h-5" />
              </>
            ) : (
              '생년월일을 입력하세요'
            )}
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="text-center">
          <p className="text-blue-300/50 text-xs leading-relaxed">
            서양 점성술을 기반으로 한 2025년 운세입니다<br />
            재미로 참고하시고, 더 좋은 한 해를 만들어가세요
          </p>
        </div>

        {/* 별점 리뷰 */}
        <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-blue-400 text-blue-400" />
            ))}
            <span className="text-white font-bold ml-2">4.7</span>
          </div>
          <p className="text-blue-200/70 text-sm text-center italic">
            &quot;별자리별 특성을 잘 반영한 운세예요. 행운의 색상 참고해서 새해 준비했어요!&quot;
          </p>
          <p className="text-blue-300/50 text-xs text-center mt-2">- 2024년 이용자 후기</p>
        </div>

        {/* 별자리 간단 설명 */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            { symbol: '♈', name: '양자리', date: '3/21~4/19' },
            { symbol: '♉', name: '황소자리', date: '4/20~5/20' },
            { symbol: '♊', name: '쌍둥이자리', date: '5/21~6/21' },
            { symbol: '♋', name: '게자리', date: '6/22~7/22' },
            { symbol: '♌', name: '사자자리', date: '7/23~8/22' },
            { symbol: '♍', name: '처녀자리', date: '8/23~9/22' },
            { symbol: '♎', name: '천칭자리', date: '9/23~10/22' },
            { symbol: '♏', name: '전갈자리', date: '10/23~11/21' },
            { symbol: '♐', name: '사수자리', date: '11/22~12/21' },
            { symbol: '♑', name: '염소자리', date: '12/22~1/19' },
            { symbol: '♒', name: '물병자리', date: '1/20~2/18' },
            { symbol: '♓', name: '물고기자리', date: '2/19~3/20' },
          ].map((sign, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-3 text-center border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="text-xl mb-1">{sign.symbol}</div>
              <div className="text-white text-xs font-medium">{sign.name}</div>
              <div className="text-blue-300/50 text-[10px]">{sign.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
