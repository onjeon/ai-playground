'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trophy, RotateCcw, Share2, Crown, Medal } from 'lucide-react';
import { getWorldCupBySlug, getAvailableRounds, shuffleArray, WorldCupItem, WorldCupResult } from '@/data/worldcup';

type GamePhase = 'select-round' | 'playing' | 'result';

export default function WorldCupGamePage() {
  const params = useParams();
  const slug = params.slug as string;

  const worldCup = getWorldCupBySlug(slug);

  // 게임 상태
  const [phase, setPhase] = useState<GamePhase>('select-round');
  const [selectedRound, setSelectedRound] = useState<number>(16);
  const [currentRound, setCurrentRound] = useState<number>(16);
  const [currentPair, setCurrentPair] = useState<number>(0);
  const [candidates, setCandidates] = useState<WorldCupItem[]>([]);
  const [winners, setWinners] = useState<WorldCupItem[]>([]);
  const [result, setResult] = useState<WorldCupResult | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // 라운드 표시 텍스트
  const getRoundText = (round: number) => {
    if (round === 2) return '결승';
    if (round === 4) return '준결승';
    return `${round}강`;
  };

  // 게임 시작
  const startGame = useCallback((round: number) => {
    if (!worldCup) return;

    const shuffled = shuffleArray(worldCup.items).slice(0, round);
    setCandidates(shuffled);
    setWinners([]);
    setCurrentRound(round);
    setSelectedRound(round);
    setCurrentPair(0);
    setResult(null);
    setPhase('playing');
  }, [worldCup]);

  // 선택 처리
  const handleSelect = useCallback((item: WorldCupItem) => {
    if (isAnimating) return;

    setSelectedItem(item.id);
    setIsAnimating(true);

    setTimeout(() => {
      const newWinners = [...winners, item];

      // 현재 라운드의 모든 대결이 끝났는지 확인
      const pairsInRound = Math.floor(currentRound / 2);
      const nextPair = currentPair + 1;

      if (nextPair >= pairsInRound) {
        // 다음 라운드로
        if (newWinners.length === 1) {
          // 우승자 결정!
          setResult({
            winner: newWinners[0],
            runnerUp: candidates[currentPair * 2] === item
              ? candidates[currentPair * 2 + 1]
              : candidates[currentPair * 2],
            semifinalists: [],
            totalRounds: selectedRound,
          });
          setPhase('result');
        } else {
          // 다음 라운드 시작
          const nextRound = newWinners.length;
          setCandidates(newWinners);
          setWinners([]);
          setCurrentRound(nextRound);
          setCurrentPair(0);
        }
      } else {
        setWinners(newWinners);
        setCurrentPair(nextPair);
      }

      setSelectedItem(null);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating, winners, currentRound, currentPair, candidates, selectedRound]);

  // 재시작
  const handleRestart = () => {
    setPhase('select-round');
    setCandidates([]);
    setWinners([]);
    setResult(null);
    setCurrentPair(0);
  };

  // SNS 공유
  const handleShare = async () => {
    if (!result || !worldCup) return;

    const shareText = `🏆 ${worldCup.title} 결과!\n\n나의 1위: ${result.winner.image} ${result.winner.name}\n\n당신의 취향은? 지금 바로 도전하세요!`;
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${worldCup.title} 결과`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // 사용자가 공유를 취소한 경우
      }
    } else {
      // 클립보드에 복사
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert('결과가 클립보드에 복사되었습니다!');
      } catch (err) {
        alert('공유하기를 지원하지 않는 브라우저입니다.');
      }
    }
  };

  if (!worldCup) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-900 dark:text-white text-xl mb-4">월드컵을 찾을 수 없습니다</p>
        <Link href="/games/worldcup" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
          ← 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const availableRounds = getAvailableRounds(worldCup.items.length);
  const currentItems = [
    candidates[currentPair * 2],
    candidates[currentPair * 2 + 1],
  ].filter(Boolean);

  const progress = phase === 'playing'
    ? Math.round(((selectedRound - currentRound + currentPair) / (selectedRound - 1)) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <Link
          href="/games/worldcup"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          월드컵 목록으로
        </Link>

        <div className="text-center">
          <span className="text-5xl mb-2 block">{worldCup.emoji}</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {worldCup.title}
          </h1>
        </div>
      </div>

      {/* 라운드 선택 화면 */}
      {phase === 'select-round' && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
            토너먼트 라운드를 선택하세요
          </h2>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {availableRounds.map((round) => (
              <button
                key={round}
                onClick={() => startGame(round)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                {getRoundText(round)}
                <span className="block text-sm font-normal opacity-80">
                  {round}개 후보
                </span>
              </button>
            ))}
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-6">
            총 {worldCup.items.length}개의 후보 중 랜덤으로 선택됩니다
          </p>
        </div>
      )}

      {/* 게임 진행 화면 */}
      {phase === 'playing' && currentItems.length === 2 && (
        <div>
          {/* 진행 상황 */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {getRoundText(currentRound)} {currentPair + 1}/{Math.floor(currentRound / 2)}
              </span>
              <span className="text-indigo-500 font-bold">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* VS 대결 */}
          <div className="grid grid-cols-2 gap-4">
            {currentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                disabled={isAnimating}
                className={`relative bg-white dark:bg-gray-800 border-2 rounded-2xl p-6 transition-all duration-300 ${
                  selectedItem === item.id
                    ? 'border-indigo-400 scale-105 bg-indigo-50 dark:bg-indigo-900/30'
                    : selectedItem && selectedItem !== item.id
                    ? 'border-gray-200 dark:border-gray-700 opacity-40 scale-95'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:scale-[1.02]'
                }`}
              >
                {/* 번호 뱃지 */}
                <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                  index === 0 ? 'bg-blue-500' : 'bg-red-500'
                }`}>
                  {index + 1}
                </div>

                {/* 이미지/이모지 */}
                <div className="text-7xl md:text-8xl mb-4 mt-4">
                  {item.image}
                </div>

                {/* 이름 */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.name}
                </h3>

                {/* 설명 */}
                {item.description && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 결과 화면 */}
      {phase === 'result' && result && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center">
          {/* 우승 효과 */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 animate-ping bg-indigo-400/30 rounded-full" />
            <Crown className="w-16 h-16 text-amber-400 relative" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {worldCup.title} 우승!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {selectedRound}강 토너먼트 완료
          </p>

          {/* 우승자 카드 */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 mb-6 border border-indigo-200 dark:border-indigo-500/30">
            <div className="text-8xl md:text-9xl mb-4">
              {result.winner.image}
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-6 h-6 text-amber-400" />
              <span className="text-amber-500 font-bold">1위</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {result.winner.name}
            </h3>
            {result.winner.description && (
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {result.winner.description}
              </p>
            )}
          </div>

          {/* 준우승자 */}
          <div className="bg-gray-100 dark:bg-gray-700/30 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl">{result.runnerUp.image}</span>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">준우승</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">{result.runnerUp.name}</span>
              </div>
            </div>
          </div>

          {/* 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
            >
              <Share2 className="w-5 h-5" />
              결과 공유하기
            </button>

            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              다시 하기
            </button>
          </div>
        </div>
      )}

      {/* 홈 링크 */}
      <div className="text-center">
        <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
