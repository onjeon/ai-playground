'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'playing' | 'finished';

function getGrade(cps: number): { grade: string; emoji: string; description: string; color: string } {
  if (cps >= 12) {
    return { grade: '초인', emoji: '⚡', description: '믿기 힘든 속도! 당신은 클릭 마스터!', color: 'text-yellow-400' };
  } else if (cps >= 10) {
    return { grade: '엘리트', emoji: '🔥', description: '마인크래프트 PVP 고수 수준!', color: 'text-orange-400' };
  } else if (cps >= 8) {
    return { grade: '고수', emoji: '⭐', description: '꽤 빠른 클릭 속도네요!', color: 'text-green-400' };
  } else if (cps >= 6) {
    return { grade: '평균', emoji: '👍', description: '일반적인 클릭 속도입니다.', color: 'text-blue-400' };
  } else if (cps >= 4) {
    return { grade: '느림', emoji: '🐢', description: '조금 느린 편이에요.', color: 'text-gray-400' };
  } else {
    return { grade: '거북이', emoji: '😴', description: '손가락 스트레칭 필요!', color: 'text-gray-500' };
  }
}

export default function ClickSpeedTestPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [finalCPS, setFinalCPS] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const duration = 10; // 10초

  const resetGame = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setGameState('idle');
    setClicks(0);
    setTimeLeft(duration);
    setFinalCPS(0);
  }, []);

  const startGame = useCallback(() => {
    setGameState('playing');
    setClicks(1); // 시작 클릭 포함
    startTimeRef.current = Date.now();
    
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = duration - elapsed;
      
      if (remaining <= 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        setTimeLeft(0);
        setGameState('finished');
      } else {
        setTimeLeft(remaining);
      }
    }, 100);
  }, []);

  const handleClick = useCallback(() => {
    if (gameState === 'idle') {
      startGame();
    } else if (gameState === 'playing') {
      setClicks(prev => prev + 1);
    }
  }, [gameState, startGame]);

  useEffect(() => {
    if (gameState === 'finished') {
      const cps = clicks / duration;
      setFinalCPS(Math.round(cps * 10) / 10);
    }
  }, [gameState, clicks]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const grade = finalCPS > 0 ? getGrade(finalCPS) : null;
  const currentCPS = gameState === 'playing' 
    ? Math.round((clicks / Math.max(duration - timeLeft, 0.1)) * 10) / 10 
    : 0;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">클릭 속도 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Game Area */}
      {gameState !== 'finished' ? (
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
          {/* Timer & Stats */}
          <div className="mb-8 text-center">
            <div className="text-7xl font-bold text-white mb-2">
              {gameState === 'idle' ? duration : timeLeft}
              <span className="text-2xl text-gray-400">초</span>
            </div>
            {gameState === 'playing' && (
              <div className="flex gap-6 justify-center text-gray-400">
                <div>
                  <span className="text-2xl font-bold text-white">{clicks}</span>
                  <span className="ml-1">클릭</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-400">{currentCPS}</span>
                  <span className="ml-1">CPS</span>
                </div>
              </div>
            )}
          </div>

          {/* Click Button */}
          <button
            onClick={handleClick}
            className={`w-72 h-72 rounded-full text-white font-bold text-2xl transition-all active:scale-95 select-none ${
              gameState === 'idle' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500'
            }`}
            style={{ touchAction: 'manipulation' }}
          >
            {gameState === 'idle' ? (
              <div>
                <div className="text-4xl mb-2">👆</div>
                <div>클릭하여 시작</div>
              </div>
            ) : (
              <div>
                <div className="text-6xl mb-2">👆</div>
                <div>계속 클릭!</div>
              </div>
            )}
          </button>

          {/* Instructions */}
          <p className="mt-8 text-gray-400 text-center">
            {gameState === 'idle' 
              ? '버튼을 클릭하면 10초 동안 측정이 시작됩니다'
              : '시간이 끝날 때까지 최대한 빨리 클릭하세요!'}
          </p>
        </div>
      ) : (
        /* Results Screen */
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">{grade?.emoji}</div>
            <h2 className={`text-3xl font-bold mb-2 ${grade?.color}`}>{grade?.grade}</h2>
            <p className="text-gray-400 mb-6">{grade?.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">초당 클릭 (CPS)</p>
                <p className="text-4xl font-bold text-white">{finalCPS}</p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">총 클릭 수</p>
                <p className="text-4xl font-bold text-blue-400">{clicks}</p>
              </div>
            </div>

            {/* CPS Comparison */}
            <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
              <p className="text-gray-400 text-sm mb-3">CPS 비교</p>
              <div className="space-y-2">
                {[
                  { label: '⚡ 버터플라이 클릭', range: '12+ CPS', highlight: finalCPS >= 12 },
                  { label: '🔥 젤리 클릭', range: '10-12 CPS', highlight: finalCPS >= 10 && finalCPS < 12 },
                  { label: '⭐ 빠른 클릭', range: '8-10 CPS', highlight: finalCPS >= 8 && finalCPS < 10 },
                  { label: '👍 일반 클릭', range: '6-8 CPS', highlight: finalCPS >= 6 && finalCPS < 8 },
                ].map(({ label, range, highlight }) => (
                  <div 
                    key={label}
                    className={`flex justify-between px-3 py-2 rounded-lg ${
                      highlight ? 'bg-blue-500/20 border border-blue-500/30' : ''
                    }`}
                  >
                    <span className={highlight ? 'text-blue-400' : 'text-gray-400'}>{label}</span>
                    <span className={highlight ? 'text-blue-400' : 'text-gray-500'}>{range}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar Visual */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>0</span>
                <span>6</span>
                <span>12+</span>
              </div>
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                  style={{ width: `${Math.min(finalCPS / 12 * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`클릭 속도 테스트 결과: ${finalCPS} CPS (${grade?.grade})`}
              description={`나의 클릭 속도는 ${finalCPS} CPS! ${grade?.emoji} 10초에 ${clicks}번 클릭했어요!`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
            >
              다시 하기
            </button>
            <Link
              href="/"
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors text-center"
            >
              홈으로
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
