'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Share2, Sun, Heart, Briefcase, Coins, Activity,
  Compass, Palette, Clock, AlertTriangle
} from 'lucide-react';
import { generateDailyFortune, getScoreColor, getScoreBg } from '@/data/premium/daily-fortune';

function DailyFortuneResult() {
  const searchParams = useSearchParams();
  const birth = searchParams.get('birth');

  if (!birth || birth.length !== 8) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-950 to-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="mb-4">잘못된 접근입니다.</p>
          <Link href="/premium/daily-fortune" className="text-sky-400 underline">
            다시 시작하기
          </Link>
        </div>
      </div>
    );
  }

  // 운세 생성
  const fortune = generateDailyFortune(birth);

  // 공유 함수
  const handleShare = async () => {
    const shareText = `☀️ 오늘의 운세 (${fortune.date})\n\n총운: ${fortune.overall.score}점\n연애: ${fortune.categories.love.score}점\n직장: ${fortune.categories.work.score}점\n금전: ${fortune.categories.money.score}점\n건강: ${fortune.categories.health.score}점\n\n행운의 색: ${fortune.lucky.color}\n행운의 숫자: ${fortune.lucky.number}\n\n나도 오늘의 운세 보기`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '오늘의 운세',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // 공유 취소
      }
    } else {
      await navigator.clipboard.writeText(shareText + '\n' + window.location.origin + '/premium/daily-fortune');
      alert('클립보드에 복사되었습니다!');
    }
  };

  // 점수 바
  const ScoreBar = ({ score, label, icon: Icon }: { score: number; label: string; icon: React.ElementType }) => (
    <div className={`rounded-xl p-4 border ${getScoreBg(score)}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${getScoreColor(score)}`} />
          <span className="text-white font-medium">{label}</span>
        </div>
        <span className={`font-bold text-lg ${getScoreColor(score)}`}>{score}점</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${
            score >= 80 ? 'bg-green-400' :
            score >= 60 ? 'bg-blue-400' :
            score >= 40 ? 'bg-yellow-400' : 'bg-red-400'
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 via-blue-950 to-slate-950">
      {/* 배경 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <div className="flex justify-between items-center mb-6">
          <Link 
            href="/premium/daily-fortune" 
            className="flex items-center gap-2 text-sky-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>다시 보기</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full text-sky-300 hover:bg-sky-500/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>공유</span>
          </button>
        </div>

        {/* 메인 결과 카드 */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-3xl p-6 md:p-8 border border-yellow-500/30 shadow-2xl mb-6">
          <div className="text-center">
            {/* 날짜 */}
            <div className="text-sky-200/80 mb-2">{fortune.date}</div>
            
            {/* 아이콘 & 점수 */}
            <Sun className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(fortune.overall.score)}`}>
              {fortune.overall.score}
            </div>
            <div className="text-white text-xl font-medium mb-4">오늘의 총운</div>
            
            {/* 메시지 */}
            <p className="text-sky-100/90 leading-relaxed mb-4">
              {fortune.overall.message}
            </p>
            
            {/* 조언 */}
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-yellow-200/90 text-sm">
                💡 {fortune.overall.advice}
              </p>
            </div>
          </div>
        </div>

        {/* 분야별 운세 */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📊</span>
            분야별 운세
          </h2>
          
          <ScoreBar score={fortune.categories.love.score} label="연애운" icon={Heart} />
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 -mt-2 ml-4">
            <p className="text-sky-100/80 text-sm">{fortune.categories.love.message}</p>
          </div>
          
          <ScoreBar score={fortune.categories.work.score} label="직장운" icon={Briefcase} />
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 -mt-2 ml-4">
            <p className="text-sky-100/80 text-sm">{fortune.categories.work.message}</p>
          </div>
          
          <ScoreBar score={fortune.categories.money.score} label="금전운" icon={Coins} />
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 -mt-2 ml-4">
            <p className="text-sky-100/80 text-sm">{fortune.categories.money.message}</p>
          </div>
          
          <ScoreBar score={fortune.categories.health.score} label="건강운" icon={Activity} />
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 -mt-2 ml-4">
            <p className="text-sky-100/80 text-sm">{fortune.categories.health.message}</p>
          </div>
        </div>

        {/* 행운의 요소 */}
        <div className="bg-gradient-to-br from-sky-900/30 to-blue-900/30 rounded-3xl p-6 border border-sky-500/30 mb-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">🍀</span>
            오늘의 행운 요소
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sky-300/70 text-xs mb-2">
                <Palette className="w-4 h-4" />
                행운의 색상
              </div>
              <div className="text-white font-bold text-lg">{fortune.lucky.color}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sky-300/70 text-xs mb-2">
                <span className="text-lg">🔢</span>
                행운의 숫자
              </div>
              <div className="text-white font-bold text-lg">{fortune.lucky.number}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sky-300/70 text-xs mb-2">
                <Compass className="w-4 h-4" />
                행운의 방향
              </div>
              <div className="text-white font-bold text-lg">{fortune.lucky.direction}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sky-300/70 text-xs mb-2">
                <Clock className="w-4 h-4" />
                행운의 시간
              </div>
              <div className="text-white font-bold text-lg">{fortune.lucky.time}</div>
            </div>
          </div>
        </div>

        {/* 주의사항 */}
        <div className="bg-red-500/10 rounded-2xl p-5 border border-red-500/20 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-red-400 font-medium text-sm mb-1">오늘의 주의사항</div>
              <p className="text-red-200/80 text-sm">{fortune.warning}</p>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all"
          >
            <Share2 className="w-5 h-5" />
            결과 공유하기
          </button>
          <Link
            href="/premium/fortune-2025"
            className="block w-full py-4 bg-white/10 text-white font-medium rounded-2xl text-center hover:bg-white/20 transition-colors"
          >
            🐍 2025 신년운세 보기
          </Link>
          <Link
            href="/premium/compatibility"
            className="block w-full py-4 bg-white/10 text-white font-medium rounded-2xl text-center hover:bg-white/20 transition-colors"
          >
            💕 궁합 운세 보기
          </Link>
          <Link
            href="/"
            className="block w-full py-3 text-sky-300/70 text-center hover:text-sky-300 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>

        {/* 면책 */}
        <div className="mt-8 text-center">
          <p className="text-sky-300/40 text-xs leading-relaxed">
            본 운세는 재미를 위한 콘텐츠입니다.<br />
            실제 결정은 본인의 판단에 따라 신중하게 내려주세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DailyFortuneResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-sky-950 to-slate-950 flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    }>
      <DailyFortuneResult />
    </Suspense>
  );
}
