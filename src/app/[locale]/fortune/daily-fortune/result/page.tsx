'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Share2, Sun, Heart, Briefcase, Coins, Activity,
  Compass, Palette, Clock, AlertTriangle
} from 'lucide-react';
import { generateDailyFortune, getScoreColor, getScoreBg } from '@/data/fortune/daily-fortune';

function DailyFortuneResult() {
  const searchParams = useSearchParams();
  const birth = searchParams.get('birth');

  if (!birth || birth.length !== 8) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center text-gray-900 dark:text-white">
          <p className="mb-4">잘못된 접근입니다.</p>
          <Link href="/fortune/daily-fortune" className="text-indigo-600 dark:text-indigo-400 underline">
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
    const fullText = shareText + '\n' + window.location.origin + '/fortune/daily-fortune';

    // 클립보드 복사
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(fullText);
        alert('클립보드에 복사되었습니다!');
        return;
      } catch {
        // 클립보드 API 실패 시 fallback
      }
    }

    // Fallback
    try {
      const textarea = document.createElement('textarea');
      textarea.value = fullText;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('클립보드에 복사되었습니다!');
    } catch {
      alert('공유 기능을 사용할 수 없습니다.');
    }
  };

  // 점수 바
  const ScoreBar = ({ score, label, icon: Icon }: { score: number; label: string; icon: React.ElementType }) => (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${getScoreColor(score)}`} />
          <span className="text-gray-900 dark:text-white font-medium">{label}</span>
        </div>
        <span className={`font-bold text-lg ${getScoreColor(score)}`}>{score}점</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
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
    <div className="space-y-6">
      {/* 네비게이션 */}
      <div className="flex justify-between items-center">
        <Link
          href="/fortune/daily-fortune"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>다시 보기</span>
        </Link>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span>공유</span>
        </button>
      </div>

      {/* 메인 결과 카드 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center">
          {/* 날짜 */}
          <div className="text-gray-600 dark:text-gray-400 mb-2">{fortune.date}</div>

          {/* 아이콘 & 점수 */}
          <Sun className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <div className={`text-6xl font-bold mb-2 ${getScoreColor(fortune.overall.score)}`}>
            {fortune.overall.score}
          </div>
          <div className="text-gray-900 dark:text-white text-xl font-medium mb-4">오늘의 총운</div>

          {/* 메시지 */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {fortune.overall.message}
          </p>

          {/* 조언 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <p className="text-amber-600 dark:text-amber-400 text-sm">
              💡 {fortune.overall.advice}
            </p>
          </div>
        </div>
      </div>

      {/* 분야별 운세 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-2xl">📊</span>
          분야별 운세
        </h2>

        <ScoreBar score={fortune.categories.love.score} label="연애운" icon={Heart} />
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 -mt-2 ml-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{fortune.categories.love.message}</p>
        </div>

        <ScoreBar score={fortune.categories.work.score} label="직장운" icon={Briefcase} />
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 -mt-2 ml-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{fortune.categories.work.message}</p>
        </div>

        <ScoreBar score={fortune.categories.money.score} label="금전운" icon={Coins} />
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 -mt-2 ml-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{fortune.categories.money.message}</p>
        </div>

        <ScoreBar score={fortune.categories.health.score} label="건강운" icon={Activity} />
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 -mt-2 ml-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{fortune.categories.health.message}</p>
        </div>
      </div>

      {/* 행운의 요소 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-xl">🍀</span>
          오늘의 행운 요소
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-2">
              <Palette className="w-4 h-4" />
              행운의 색상
            </div>
            <div className="text-gray-900 dark:text-white font-bold text-lg">{fortune.lucky.color}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-2">
              <span className="text-lg">🔢</span>
              행운의 숫자
            </div>
            <div className="text-gray-900 dark:text-white font-bold text-lg">{fortune.lucky.number}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-2">
              <Compass className="w-4 h-4" />
              행운의 방향
            </div>
            <div className="text-gray-900 dark:text-white font-bold text-lg">{fortune.lucky.direction}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-2">
              <Clock className="w-4 h-4" />
              행운의 시간
            </div>
            <div className="text-gray-900 dark:text-white font-bold text-lg">{fortune.lucky.time}</div>
          </div>
        </div>
      </div>

      {/* 주의사항 */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 border border-red-200 dark:border-red-800">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-red-600 dark:text-red-400 font-medium text-sm mb-1">오늘의 주의사항</div>
            <p className="text-red-600 dark:text-red-400 text-sm">{fortune.warning}</p>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="space-y-3">
        <button
          onClick={handleShare}
          className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
        >
          <Share2 className="w-5 h-5" />
          결과 공유하기
        </button>
        <Link
          href="/fortune/fortune-2025"
          className="block w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          🐍 2025 신년운세 보기
        </Link>
        <Link
          href="/fortune/compatibility"
          className="block w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          💕 궁합 운세 보기
        </Link>
        <Link
          href="/"
          className="block w-full py-3 text-gray-500 dark:text-gray-400 text-center hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>

      {/* 면책 */}
      <div className="text-center">
        <p className="text-gray-400 text-xs leading-relaxed">
          본 운세는 재미를 위한 콘텐츠입니다.<br />
          실제 결정은 본인의 판단에 따라 신중하게 내려주세요.
        </p>
      </div>
    </div>
  );
}

export default function DailyFortuneResultPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    }>
      <DailyFortuneResult />
    </Suspense>
  );
}
