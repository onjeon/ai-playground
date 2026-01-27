'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Share2, User, Compass, Palette
} from 'lucide-react';
import {
  splitName,
  calculateNameNumbers,
  calculateNameStrokes,
  getNumberFortune,
  getElementFromNumber,
  getElementColor
} from '@/lib/fortune/name';
import {
  getWonAnalysis,
  getHyungAnalysis,
  getYiAnalysis,
  getJungAnalysis,
  getElementPersonality,
  getElementAdvice,
  getYinYangAnalysis,
  calculateOverallScore,
  getScoreGrade,
  getLuckyColors,
  getLuckyDirection,
} from '@/data/fortune/name-analysis';

function NameAnalysisResult() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  if (!name) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center text-gray-900 dark:text-white">
          <p className="mb-4">잘못된 접근입니다.</p>
          <Link href="/fortune/name-analysis" className="text-indigo-600 dark:text-indigo-400 underline">
            다시 시작하기
          </Link>
        </div>
      </div>
    );
  }

  // 이름 분리
  const splitResult = splitName(name);
  if (!splitResult) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center text-gray-900 dark:text-white">
          <p className="mb-4">올바른 한글 이름을 입력해주세요.</p>
          <Link href="/fortune/name-analysis" className="text-indigo-600 dark:text-indigo-400 underline">
            다시 시작하기
          </Link>
        </div>
      </div>
    );
  }

  const { lastName, firstName } = splitResult;

  // 획수 계산
  const numbers = calculateNameNumbers(lastName, firstName);
  const lastNameStrokes = calculateNameStrokes(lastName);
  const firstNameStrokes = calculateNameStrokes(firstName);

  // 각 격의 길흉
  const wonFortune = getNumberFortune(numbers.won);
  const hyungFortune = getNumberFortune(numbers.hyung);
  const yiFortune = getNumberFortune(numbers.yi);
  const jungFortune = getNumberFortune(numbers.jung);

  // 오행 분석
  const jungElement = getElementFromNumber(numbers.jung);

  // 음양 분석
  const allNumbers = [numbers.won, numbers.hyung, numbers.yi, numbers.jung];
  const yinCount = allNumbers.filter(n => n % 2 === 0).length;
  const yangCount = allNumbers.filter(n => n % 2 === 1).length;

  // 종합 점수
  const overallScore = calculateOverallScore(
    wonFortune.fortune,
    hyungFortune.fortune,
    yiFortune.fortune,
    jungFortune.fortune
  );
  const scoreGrade = getScoreGrade(overallScore);

  // 행운 요소
  const luckyColors = getLuckyColors(jungElement.element);
  const luckyDirection = getLuckyDirection(jungElement.element);

  // 공유 함수
  const handleShare = async () => {
    const shareText = `📜 이름 풀이 결과\n\n이름: ${name}\n총획: ${numbers.total}획\n종합 등급: ${scoreGrade.emoji} ${scoreGrade.grade}\n오행: ${jungElement.name}\n\n나도 이름 풀이 보기`;
    const fullText = shareText + '\n' + window.location.origin + '/fortune/name-analysis';

    if (navigator.share) {
      try {
        await navigator.share({
          title: '이름 풀이 결과',
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch {
        // fallback
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(fullText);
        alert('클립보드에 복사되었습니다!');
        return;
      } catch {
        // fallback
      }
    }

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

  // 길흉 색상
  const getFortuneColor = (fortune: string) => {
    switch (fortune) {
      case 'great': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'neutral': return 'text-gray-400';
      case 'bad': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getFortuneBg = (fortune: string) => {
    switch (fortune) {
      case 'great': return 'bg-green-50 dark:bg-green-500/20 border-green-200 dark:border-green-500/30';
      case 'good': return 'bg-blue-50 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/30';
      case 'neutral': return 'bg-gray-50 dark:bg-gray-500/20 border-gray-200 dark:border-gray-500/30';
      case 'bad': return 'bg-red-50 dark:bg-red-500/20 border-red-200 dark:border-red-500/30';
      default: return 'bg-gray-50 dark:bg-gray-500/20 border-gray-200 dark:border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* 네비게이션 */}
      <div className="flex justify-between items-center">
        <Link
          href="/fortune/name-analysis"
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
          {/* 이름 표시 */}
          <div className="text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-wider">
            {name}
          </div>

          {/* 획수 분해 */}
          <div className="flex justify-center gap-4 mb-6">
            {lastNameStrokes.chars.map((c, i) => (
              <div key={`last-${i}`} className="text-center">
                <div className="text-2xl text-gray-900 dark:text-white">{c.char}</div>
                <div className="text-amber-600 dark:text-amber-300 text-sm">{c.strokes}획</div>
              </div>
            ))}
            <div className="text-gray-300 dark:text-amber-500/50 text-2xl">+</div>
            {firstNameStrokes.chars.map((c, i) => (
              <div key={`first-${i}`} className="text-center">
                <div className="text-2xl text-gray-900 dark:text-white">{c.char}</div>
                <div className="text-amber-600 dark:text-amber-300 text-sm">{c.strokes}획</div>
              </div>
            ))}
          </div>

          {/* 총획 */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-full mb-4">
            <span className="text-gray-600 dark:text-gray-400">총획</span>
            <span className="text-gray-900 dark:text-white text-2xl font-bold">{numbers.total}획</span>
          </div>

          {/* 종합 등급 */}
          <div className="mt-4">
            <div className="text-4xl mb-2">{scoreGrade.emoji}</div>
            <div className="text-gray-900 dark:text-white text-xl font-bold">{scoreGrade.grade}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">{scoreGrade.description}</div>
          </div>
        </div>
      </div>

      {/* 4격 분석 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📊</span>
          원형이정(元亨利貞) 분석
        </h2>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
          4가지 격으로 인생의 시기별 운세를 분석합니다
        </p>

        <div className="space-y-4">
          {/* 원격 */}
          <div className={`rounded-xl p-4 border ${getFortuneBg(wonFortune.fortune)}`}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-gray-900 dark:text-white font-medium">원격(元格)</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs ml-2">성의 획수 · 기본 성향</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white font-bold">{numbers.won}획</span>
                <span className={`text-sm font-medium ${getFortuneColor(wonFortune.fortune)}`}>
                  {wonFortune.label}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{getWonAnalysis(numbers.won)}</p>
          </div>

          {/* 형격 */}
          <div className={`rounded-xl p-4 border ${getFortuneBg(hyungFortune.fortune)}`}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-gray-900 dark:text-white font-medium">형격(亨格)</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs ml-2">성+이름 첫 글자 · 청년기</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white font-bold">{numbers.hyung}획</span>
                <span className={`text-sm font-medium ${getFortuneColor(hyungFortune.fortune)}`}>
                  {hyungFortune.label}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{getHyungAnalysis(numbers.hyung)}</p>
          </div>

          {/* 이격 */}
          <div className={`rounded-xl p-4 border ${getFortuneBg(yiFortune.fortune)}`}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-gray-900 dark:text-white font-medium">이격(利格)</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs ml-2">이름 획수 · 중년기</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white font-bold">{numbers.yi}획</span>
                <span className={`text-sm font-medium ${getFortuneColor(yiFortune.fortune)}`}>
                  {yiFortune.label}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{getYiAnalysis(numbers.yi)}</p>
          </div>

          {/* 정격 */}
          <div className={`rounded-xl p-4 border ${getFortuneBg(jungFortune.fortune)}`}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-gray-900 dark:text-white font-medium">정격(貞格)</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs ml-2">총획 · 총운</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white font-bold">{numbers.jung}획</span>
                <span className={`text-sm font-medium ${getFortuneColor(jungFortune.fortune)}`}>
                  {jungFortune.label}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{getJungAnalysis(numbers.jung)}</p>
          </div>
        </div>
      </div>

      {/* 음양오행 분석 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">☯️</span>
          음양오행 분석
        </h2>

        {/* 오행 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600 dark:text-gray-400 text-sm">주요 오행</span>
            <span className="text-gray-900 dark:text-white font-bold text-lg">{jungElement.name}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {getElementPersonality(jungElement.element)}
          </p>
        </div>

        {/* 음양 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600 dark:text-gray-400 text-sm">음양 조화</span>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-50 dark:bg-red-500/20 rounded-full text-red-600 dark:text-red-300 text-sm">
                양 {yangCount}
              </span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/20 rounded-full text-blue-600 dark:text-blue-300 text-sm">
                음 {yinCount}
              </span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {getYinYangAnalysis(yinCount, yangCount)}
          </p>
        </div>
      </div>

      {/* 성격 및 조언 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          맞춤 조언
        </h2>

        <div className="bg-amber-50 dark:bg-amber-500/10 rounded-xl p-4 border border-amber-200 dark:border-amber-500/20">
          <div className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-2">💡 오행 기반 조언</div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {getElementAdvice(jungElement.element)}
          </p>
        </div>
      </div>

      {/* 행운의 요소 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-xl">🍀</span>
          행운의 요소
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-2">
              <Palette className="w-4 h-4" />
              행운의 색상
            </div>
            <div className="text-gray-900 dark:text-white font-medium">
              {luckyColors.join(', ')}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-2">
              <Compass className="w-4 h-4" />
              행운의 방향
            </div>
            <div className="text-gray-900 dark:text-white font-medium">
              {luckyDirection}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="text-gray-400 dark:text-gray-500 text-xs mb-2">행운의 색상 (오행)</div>
            <div className="text-gray-900 dark:text-white font-medium">
              {getElementColor(jungElement.element)}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="text-gray-400 dark:text-gray-500 text-xs mb-2">음양</div>
            <div className="text-gray-900 dark:text-white font-medium">
              {jungElement.yinYang === 'yang' ? '양(陽)' : '음(陰)'}
            </div>
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
          href="/fortune/compatibility"
          className="block w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          💕 궁합 운세 보기
        </Link>
        <Link
          href="/fortune/fortune-2025"
          className="block w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          🐍 2025 신년운세 보기
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
          본 이름 풀이는 전통 성명학을 기반으로 한 재미 콘텐츠입니다.<br />
          이름이 운명을 결정하는 것은 아니며, 참고용으로만 활용해주세요.
        </p>
      </div>
    </div>
  );
}

export default function NameAnalysisResultPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    }>
      <NameAnalysisResult />
    </Suspense>
  );
}
