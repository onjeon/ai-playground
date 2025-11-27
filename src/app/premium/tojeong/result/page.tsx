'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Star, Briefcase, Coins, Heart, Activity, Users,
  Calendar, Compass, Palette, Hash, ArrowLeft, Share2,
  Sparkles, Sun, Cloud, Leaf, Snowflake
} from 'lucide-react';
import { generateTojeongResult } from '@/lib/fortune/tojeong';

function TojeongResultContent() {
  const searchParams = useSearchParams();
  const birth = searchParams.get('birth') || '';
  
  // 토정비결 결과 생성
  const result = generateTojeongResult(birth);
  
  // 생년월일 파싱
  const birthYear = parseInt(birth.substring(0, 4));
  const birthMonth = parseInt(birth.substring(4, 6));
  const birthDay = parseInt(birth.substring(6, 8));

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  // 계절 아이콘
  const seasonIcons: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
    spring: { icon: <Sun className="w-5 h-5" />, label: '봄 (1~3월)', color: 'from-pink-500 to-rose-500' },
    summer: { icon: <Cloud className="w-5 h-5" />, label: '여름 (4~6월)', color: 'from-amber-500 to-orange-500' },
    autumn: { icon: <Leaf className="w-5 h-5" />, label: '가을 (7~9월)', color: 'from-orange-500 to-red-500' },
    winter: { icon: <Snowflake className="w-5 h-5" />, label: '겨울 (10~12월)', color: 'from-blue-500 to-cyan-500' },
  };

  // 분야별 아이콘
  const categoryIcons: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
    wealth: { icon: <Coins className="w-5 h-5" />, label: '재물운', color: 'from-amber-500 to-yellow-500' },
    career: { icon: <Briefcase className="w-5 h-5" />, label: '직장/관직운', color: 'from-blue-500 to-cyan-500' },
    health: { icon: <Activity className="w-5 h-5" />, label: '건강운', color: 'from-green-500 to-emerald-500' },
    family: { icon: <Heart className="w-5 h-5" />, label: '가정운', color: 'from-pink-500 to-rose-500' },
    relationship: { icon: <Users className="w-5 h-5" />, label: '인간관계', color: 'from-purple-500 to-violet-500' },
  };

  // 월별 키워드 색상
  const getKeywordColor = (keyword: string) => {
    const positive = ['순조', '발전', '기회', '행운', '성과', '화합', '안정', '풍요', '만남', '성공', '희망', '감사'];
    const caution = ['신중', '인내', '절약', '주의', '조심', '보류', '재고', '점검', '양보', '회피', '대비', '보수'];
    
    if (positive.includes(keyword)) return 'bg-amber-500/20 border-amber-500/40 text-amber-300';
    if (caution.includes(keyword)) return 'bg-red-500/20 border-red-500/40 text-red-300';
    return 'bg-slate-500/20 border-slate-500/40 text-slate-300';
  };

  const handleShare = async () => {
    const shareText = `2025 토정비결 결과\n\n${result.zodiac} (${birthYear}년생)\n괘: ${result.gwaeName}\n총운: ${result.overallRating}점\n\n나도 토정비결 보러가기`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '2025 토정비결',
          text: shareText,
          url: window.location.origin + '/premium/tojeong',
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(shareText + '\n' + window.location.origin + '/premium/tojeong');
      alert('링크가 복사되었습니다!');
    }
  };

  // 등급 텍스트
  const getRatingText = (rating: number) => {
    if (rating >= 5) return '대길 (大吉)';
    if (rating >= 4) return '중길 (中吉)';
    if (rating >= 3) return '평운 (平運)';
    if (rating >= 2) return '소흉 (小凶)';
    return '주의 (注意)';
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

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/premium/tojeong" 
            className="flex items-center gap-2 text-amber-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">다시 보기</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-amber-200 hover:bg-white/20 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">공유하기</span>
          </button>
        </div>

        {/* 메인 카드 - 기본 정보 */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-amber-500/20 shadow-2xl shadow-amber-500/10 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">2025 을사년 토정비결</span>
            </div>
            
            <div className="text-5xl mb-4">📜</div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {birthYear}년 {birthMonth}월 {birthDay}일생
            </h1>
            <p className="text-amber-300/80 text-lg">
              {result.zodiac} · {result.gwaeName}
            </p>
          </div>

          {/* 괘 정보 */}
          <div className="bg-amber-500/10 rounded-2xl p-4 mb-6 border border-amber-500/20">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-amber-300/60 text-xs mb-1">상괘</div>
                <div className="text-2xl font-bold text-white">{result.gwae.upper}</div>
              </div>
              <div className="text-amber-500/50">-</div>
              <div className="text-center">
                <div className="text-amber-300/60 text-xs mb-1">중괘</div>
                <div className="text-2xl font-bold text-white">{result.gwae.middle}</div>
              </div>
              <div className="text-amber-500/50">-</div>
              <div className="text-center">
                <div className="text-amber-300/60 text-xs mb-1">하괘</div>
                <div className="text-2xl font-bold text-white">{result.gwae.lower}</div>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-amber-300/70 text-sm">괘 코드: {result.gwaeCode}</span>
            </div>
          </div>

          {/* 총운 등급 */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-amber-200 text-sm">2025년 총운</span>
            {renderStars(result.overallRating)}
            <span className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-300 text-sm font-bold">
              {getRatingText(result.overallRating)}
            </span>
          </div>
        </div>

        {/* 총운 설명 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-amber-500/20 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <span className="text-2xl">🎯</span> 2025년 총운
          </h2>
          <p className="text-amber-100/90 leading-relaxed text-sm md:text-base">
            {result.overall}
          </p>
        </div>

        {/* 계절별 운세 */}
        <div className="space-y-4 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white px-2">
            <span className="text-2xl">🌸</span> 계절별 운세
          </h2>
          
          {Object.entries(result.seasonal).map(([season, fortune]) => {
            const seasonInfo = seasonIcons[season];
            return (
              <div
                key={season}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-5 border border-amber-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${seasonInfo.color} text-white`}>
                    {seasonInfo.icon}
                  </div>
                  <h3 className="font-bold text-white">{seasonInfo.label}</h3>
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {fortune}
                </p>
              </div>
            );
          })}
        </div>

        {/* 분야별 운세 */}
        <div className="space-y-4 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white px-2">
            <span className="text-2xl">📊</span> 분야별 상세 운세
          </h2>
          
          {Object.entries(result.categories).map(([key, value]) => {
            const category = categoryIcons[key];
            return (
              <div
                key={key}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-5 border border-amber-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white">{category.label}</h3>
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {value}
                </p>
              </div>
            );
          })}
        </div>

        {/* 월별 키워드 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-amber-500/20 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <Calendar className="w-5 h-5 text-amber-400" />
            월별 핵심 키워드
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {result.monthlyKeywords.map((keyword, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl border text-center ${getKeywordColor(keyword)}`}
              >
                <div className="text-xs text-white/60 mb-1">{index + 1}월</div>
                <div className="font-bold text-sm">{keyword}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500/30"></div>
              <span className="text-amber-300/70">길운 키워드</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500/30"></div>
              <span className="text-amber-300/70">평운 키워드</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
              <span className="text-amber-300/70">주의 키워드</span>
            </div>
          </div>
        </div>

        {/* 행운 정보 */}
        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <span className="text-2xl">🍀</span> 2025년 행운의 요소
          </h2>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-500/20 rounded-full">
                <Compass className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-xs text-amber-300/60 mb-1">행운의 방향</div>
              <div className="text-amber-300 font-bold">
                {result.luckyElements.direction}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-500/20 rounded-full">
                <Palette className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-xs text-amber-300/60 mb-1">행운의 색</div>
              <div className="text-amber-300 font-bold">
                {result.luckyElements.color}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-amber-500/20 rounded-full">
                <Hash className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-xs text-amber-300/60 mb-1">행운의 숫자</div>
              <div className="text-amber-300 font-bold">
                {result.luckyElements.number}
              </div>
            </div>
          </div>
        </div>

        {/* 조언 */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-amber-500/20 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
            <span className="text-2xl">💡</span> 2025년 조언
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 font-bold">올해 꼭 해야 할 것</span>
              </div>
              <p className="text-green-100/80 text-sm">
                {result.advice.doThis}
              </p>
            </div>
            
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400 font-bold">올해 피해야 할 것</span>
              </div>
              <p className="text-red-100/80 text-sm">
                {result.advice.avoidThis}
              </p>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center space-y-4">
          <p className="text-amber-300/50 text-xs">
            전통 토정비결을 현대적으로 해석한 운세입니다<br />
            재미로 참고하시고, 더 좋은 한 해를 만들어가세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              결과 공유하기
            </button>
            
            <Link
              href="/premium/tojeong"
              className="px-6 py-3 bg-white/10 text-amber-200 font-medium rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              다른 생년월일로 보기
            </Link>
          </div>
          
          <Link
            href="/"
            className="inline-block text-amber-300/60 text-sm hover:text-amber-200 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TojeongResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-950 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">📜</div>
          <p className="text-amber-200">토정비결을 불러오는 중...</p>
        </div>
      </div>
    }>
      <TojeongResultContent />
    </Suspense>
  );
}
