'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'waiting' | 'counting' | 'result' | 'finished';

interface Round {
  targetTime: number;
  userTime: number;
  difference: number;
  accuracy: number;
}

const targetTimes = [3, 5, 7, 10, 15]; // 초 단위

export default function TimePerceptionPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [targetTime, setTargetTime] = useState(0);
  const [userTime, setUserTime] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const startTimeRef = useRef<number>(0);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start a new round
  const startRound = useCallback((roundIndex: number) => {
    const target = targetTimes[roundIndex];
    setTargetTime(target);
    setGameState('waiting');
    setCountdown(3);

    // Countdown before starting
    let count = 3;
    countdownIntervalRef.current = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(countdownIntervalRef.current!);
        setGameState('counting');
        startTimeRef.current = Date.now();
      }
    }, 1000);
  }, []);

  // Start the game
  const startGame = useCallback(() => {
    setRounds([]);
    setCurrentRound(0);
    startRound(0);
  }, [startRound]);

  // User stops the timer
  const stopTimer = useCallback(() => {
    if (gameState !== 'counting') return;

    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const difference = Math.abs(elapsed - targetTime);
    const accuracy = Math.max(0, 100 - (difference / targetTime) * 100);

    const roundResult: Round = {
      targetTime,
      userTime: elapsed,
      difference,
      accuracy,
    };

    setUserTime(elapsed);
    setRounds(prev => [...prev, roundResult]);
    setGameState('result');
  }, [gameState, targetTime]);

  // Move to next round
  const nextRound = useCallback(() => {
    const nextIndex = currentRound + 1;
    if (nextIndex >= targetTimes.length) {
      setGameState('finished');
    } else {
      setCurrentRound(nextIndex);
      startRound(nextIndex);
    }
  }, [currentRound, startRound]);

  // Calculate overall results
  const averageAccuracy = rounds.length > 0
    ? Math.round(rounds.reduce((sum, r) => sum + r.accuracy, 0) / rounds.length)
    : 0;

  const averageDifference = rounds.length > 0
    ? (rounds.reduce((sum, r) => sum + r.difference, 0) / rounds.length).toFixed(2)
    : 0;

  const getGrade = () => {
    if (averageAccuracy >= 95) return { grade: 'S', description: '시간 마스터! 완벽한 내부 시계!', color: 'text-yellow-400' };
    if (averageAccuracy >= 85) return { grade: 'A', description: '훌륭해요! 정확한 시간 감각!', color: 'text-green-400' };
    if (averageAccuracy >= 70) return { grade: 'B', description: '좋아요! 괜찮은 시간 감각!', color: 'text-blue-400' };
    if (averageAccuracy >= 50) return { grade: 'C', description: '조금 더 연습해보세요!', color: 'text-orange-400' };
    return { grade: 'D', description: '시간이 빠르게 흐르나요?', color: 'text-red-400' };
  };

  const getTimeFeedback = (diff: number, target: number) => {
    const ratio = diff / target;
    if (ratio < 0.05) return { text: '완벽!', emoji: '🎯', color: 'text-yellow-400' };
    if (ratio < 0.1) return { text: '훌륭해요!', emoji: '✨', color: 'text-green-400' };
    if (ratio < 0.2) return { text: '좋아요!', emoji: '👍', color: 'text-blue-400' };
    if (ratio < 0.3) return { text: '괜찮아요', emoji: '😊', color: 'text-orange-400' };
    return { text: '아쉬워요', emoji: '😅', color: 'text-red-400' };
  };

  const result = getGrade();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 피지컬 테스트
          </Link>
          <h1 className="text-lg font-bold text-white">시간 감각 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⏱️</div>
            <h2 className="text-2xl font-bold text-white mb-4">시간 감각 테스트</h2>
            <p className="text-gray-400 mb-2">
              시계 없이 정확히 시간을 맞춰보세요!
            </p>
            <p className="text-gray-500 text-sm">
              내부 시계의 정확도를 테스트합니다
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 목표 시간이 주어집니다 (예: 5초)</p>
              <p>2. 카운트다운 후 시작되면 마음속으로 시간을 셉니다</p>
              <p>3. 목표 시간이 됐다고 생각하면 &quot;멈춤&quot; 버튼을 누르세요</p>
              <p>4. 실제 시간과 비교하여 정확도를 측정합니다</p>
            </div>
          </div>

          {/* Target Times Preview */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm text-center mb-4">테스트할 시간</p>
            <div className="flex justify-center gap-3">
              {targetTimes.map((time) => (
                <span key={time} className="bg-gray-700 px-4 py-2 rounded-full text-white font-bold">
                  {time}초
                </span>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            ⏱️ 테스트 시작!
          </button>
        </div>
      )}

      {/* Waiting (Countdown) */}
      {gameState === 'waiting' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4">
              Round {currentRound + 1} / {targetTimes.length}
            </p>
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-3xl p-8 mb-6">
              <p className="text-gray-400 mb-2">목표 시간</p>
              <div className="text-7xl font-bold text-cyan-400 mb-4">{targetTime}초</div>
              <p className="text-gray-500 text-sm">이 시간을 기억하세요!</p>
            </div>
            
            <div className="bg-gray-800 rounded-3xl p-12">
              <p className="text-gray-400 mb-4">준비...</p>
              <div className="text-9xl font-bold text-white animate-pulse">{countdown}</div>
            </div>
          </div>
        </div>
      )}

      {/* Counting */}
      {gameState === 'counting' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4">
              Round {currentRound + 1} / {targetTimes.length} | 목표: {targetTime}초
            </p>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-12 mb-6">
              <div className="text-8xl mb-4 animate-pulse">⏱️</div>
              <p className="text-2xl text-white font-bold mb-2">시간을 세는 중...</p>
              <p className="text-gray-400">{targetTime}초가 됐다고 생각하면 멈춤!</p>
            </div>

            <button
              onClick={stopTimer}
              className="w-full py-6 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-400 hover:to-rose-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-2xl"
            >
              ✋ 멈춤!
            </button>

            <p className="text-gray-500 text-sm mt-4">
              화면을 보지 말고 마음속으로 세요!
            </p>
          </div>
        </div>
      )}

      {/* Result */}
      {gameState === 'result' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4">
              Round {currentRound + 1} / {targetTimes.length}
            </p>
            
            {(() => {
              const diff = Math.abs(userTime - targetTime);
              const feedback = getTimeFeedback(diff, targetTime);
              return (
                <div className="bg-gray-800 rounded-3xl p-8 mb-6">
                  <span className="text-6xl block mb-4">{feedback.emoji}</span>
                  <p className={`text-2xl font-bold mb-6 ${feedback.color}`}>{feedback.text}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700/50 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">목표 시간</p>
                      <p className="text-3xl font-bold text-cyan-400">{targetTime}초</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">당신의 시간</p>
                      <p className="text-3xl font-bold text-white">{userTime.toFixed(2)}초</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">오차</p>
                    <p className={`text-2xl font-bold ${userTime > targetTime ? 'text-orange-400' : 'text-blue-400'}`}>
                      {userTime > targetTime ? '+' : '-'}{diff.toFixed(2)}초
                      ({userTime > targetTime ? '늦음' : '빠름'})
                    </p>
                  </div>
                </div>
              );
            })()}

            <button
              onClick={nextRound}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
            >
              {currentRound + 1 >= targetTimes.length ? '최종 결과 보기' : '다음 라운드 →'}
            </button>
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">평균 정확도</p>
                <p className="text-3xl font-bold text-white">{averageAccuracy}%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">평균 오차</p>
                <p className="text-3xl font-bold text-white">{averageDifference}초</p>
              </div>
            </div>

            {/* Round by Round Results */}
            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <p className="text-gray-400 text-sm mb-3 text-center">라운드별 결과</p>
              <div className="space-y-2">
                {rounds.map((round, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700/50 rounded-lg px-4 py-2">
                    <span className="text-gray-400 text-sm">{round.targetTime}초</span>
                    <span className="text-white">{round.userTime.toFixed(2)}초</span>
                    <span className={`text-sm ${round.accuracy >= 90 ? 'text-green-400' : round.accuracy >= 70 ? 'text-blue-400' : 'text-orange-400'}`}>
                      {Math.round(round.accuracy)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`시간 감각 테스트 결과: ${result.grade}등급!`}
              description={`평균 정확도 ${averageAccuracy}%, 평균 오차 ${averageDifference}초! ⏱️`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              다시 하기
            </button>
            <Link
              href="/physical"
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors text-center"
            >
              다른 테스트
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
