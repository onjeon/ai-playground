'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'countdown' | 'playing' | 'finished';

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface HitResult {
  time: number;
  distance: number; // distance from center (0-1)
}

function getGrade(avgTime: number, accuracy: number): { grade: string; emoji: string; description: string; color: string } {
  const score = (1000 / avgTime) * accuracy;
  
  if (score >= 15) {
    return { grade: '에임 신', emoji: '🎯', description: 'FPS 프로게이머 수준의 조준력!', color: 'text-yellow-400' };
  } else if (score >= 10) {
    return { grade: '명사수', emoji: '🔥', description: '빠르고 정확한 조준력!', color: 'text-orange-400' };
  } else if (score >= 7) {
    return { grade: '우수', emoji: '⭐', description: '평균 이상의 좋은 조준력!', color: 'text-green-400' };
  } else if (score >= 5) {
    return { grade: '보통', emoji: '👍', description: '무난한 조준력이에요.', color: 'text-blue-400' };
  } else {
    return { grade: '연습 필요', emoji: '💪', description: '꾸준히 연습하면 좋아져요!', color: 'text-gray-400' };
  }
}

export default function AimTrainerPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [countdown, setCountdown] = useState(3);
  const [target, setTarget] = useState<Target | null>(null);
  const [hits, setHits] = useState<HitResult[]>([]);
  const [targetCount, setTargetCount] = useState(0);
  const [lastSpawnTime, setLastSpawnTime] = useState(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const totalTargets = 30;
  const targetSize = 60;

  const spawnTarget = useCallback(() => {
    if (!gameAreaRef.current) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const padding = targetSize;
    const x = Math.random() * (rect.width - padding * 2) + padding;
    const y = Math.random() * (rect.height - padding * 2) + padding;
    
    setTarget({
      id: Date.now(),
      x,
      y,
      size: targetSize,
    });
    setLastSpawnTime(Date.now());
  }, []);

  const startGame = useCallback(() => {
    setGameState('countdown');
    setCountdown(3);
    setHits([]);
    setTargetCount(0);
  }, []);

  const handleTargetClick = useCallback((e: React.MouseEvent) => {
    if (!target || gameState !== 'playing') return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    // Calculate distance from center (normalized 0-1)
    const centerX = target.size / 2;
    const centerY = target.size / 2;
    const distance = Math.sqrt(
      Math.pow((clickX - centerX) / (target.size / 2), 2) + 
      Math.pow((clickY - centerY) / (target.size / 2), 2)
    );
    
    const hitTime = Date.now() - lastSpawnTime;
    
    setHits(prev => [...prev, { time: hitTime, distance: Math.min(distance, 1) }]);
    setTargetCount(prev => prev + 1);
    
    if (targetCount + 1 >= totalTargets) {
      setGameState('finished');
      setTarget(null);
    } else {
      spawnTarget();
    }
  }, [target, gameState, lastSpawnTime, targetCount, spawnTarget]);

  const handleMiss = useCallback((e: React.MouseEvent) => {
    if (gameState !== 'playing') return;
    
    // Only count as miss if click was outside target
    const target_el = (e.target as HTMLElement).closest('[data-target]');
    if (!target_el) {
      setHits(prev => [...prev, { time: 2000, distance: 2 }]); // Penalty for miss
    }
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState('idle');
    setTarget(null);
    setHits([]);
    setTargetCount(0);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (gameState !== 'countdown') return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameState('playing');
      spawnTarget();
    }
  }, [gameState, countdown, spawnTarget]);

  // Calculate stats
  const validHits = hits.filter(h => h.distance <= 1);
  const avgTime = validHits.length > 0 
    ? Math.round(validHits.reduce((sum, h) => sum + h.time, 0) / validHits.length)
    : 0;
  const bestTime = validHits.length > 0 
    ? Math.min(...validHits.map(h => h.time))
    : 0;
  const accuracy = hits.length > 0 
    ? Math.round((validHits.length / hits.length) * 100)
    : 0;
  const avgAccuracy = validHits.length > 0
    ? Math.round((1 - validHits.reduce((sum, h) => sum + h.distance, 0) / validHits.length) * 100)
    : 0;

  const grade = avgTime > 0 ? getGrade(avgTime, accuracy) : null;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 목록으로
          </Link>
          <h1 className="text-lg font-bold text-white">조준 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Idle Screen */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-white mb-4">조준 테스트</h2>
            <p className="text-gray-400 mb-6">
              화면에 나타나는 타겟을 최대한 빠르고 정확하게 클릭하세요!<br/>
              총 {totalTargets}개의 타겟을 맞춰야 합니다.
            </p>
            
            <button
              onClick={startGame}
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
            >
              시작하기
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-2">💡 팁</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 타겟 중앙을 클릭하면 더 높은 정확도!</li>
              <li>• 빠른 것보다 정확한 것이 중요해요</li>
              <li>• 마우스 감도를 조절해보세요</li>
              <li>• PC에서 플레이하면 더 정확해요</li>
            </ul>
          </div>
        </div>
      )}

      {/* Countdown Screen */}
      {gameState === 'countdown' && (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-xl mb-4">준비하세요!</p>
            <p className="text-8xl font-bold text-white animate-pulse">{countdown}</p>
          </div>
        </div>
      )}

      {/* Playing Screen */}
      {gameState === 'playing' && (
        <div className="h-[calc(100vh-64px)] flex flex-col">
          {/* Stats Bar */}
          <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <span className="text-gray-400 text-xs">타겟</span>
                <p className="text-lg font-bold text-white">{targetCount}/{totalTargets}</p>
              </div>
              <div>
                <span className="text-gray-400 text-xs">평균</span>
                <p className="text-lg font-bold text-green-400">{avgTime}ms</p>
              </div>
            </div>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500 transition-all"
                style={{ width: `${(targetCount / totalTargets) * 100}%` }}
              />
            </div>
          </div>

          {/* Game Area */}
          <div 
            ref={gameAreaRef}
            className="flex-1 bg-gray-900 relative cursor-crosshair"
            onClick={handleMiss}
          >
            {target && (
              <div
                data-target
                onClick={handleTargetClick}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                style={{
                  left: target.x,
                  top: target.y,
                  width: target.size,
                  height: target.size,
                }}
              >
                <div className="w-full h-full rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/50">
                  <div className="w-3/5 h-3/5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-2/5 h-2/5 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Finished Screen */}
      {gameState === 'finished' && grade && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">{grade.emoji}</div>
            <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.grade}</h2>
            <p className="text-gray-400 mb-6">{grade.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">평균 반응속도</p>
                <p className="text-3xl font-bold text-white">{avgTime}<span className="text-lg text-gray-400">ms</span></p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최고 기록</p>
                <p className="text-3xl font-bold text-green-400">{bestTime}<span className="text-lg text-gray-400">ms</span></p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">명중률</p>
                <p className="text-3xl font-bold text-blue-400">{accuracy}<span className="text-lg text-gray-400">%</span></p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">조준 정확도</p>
                <p className="text-3xl font-bold text-purple-400">{avgAccuracy}<span className="text-lg text-gray-400">%</span></p>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-400 text-sm mb-2">📊 조준력 비교</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-yellow-400">🎯 에임 신</span>
                  <span className="text-gray-400">&lt;250ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-400">🔥 명사수</span>
                  <span className="text-gray-400">250-350ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">⭐ 우수</span>
                  <span className="text-gray-400">350-450ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">👍 보통</span>
                  <span className="text-gray-400">450-600ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`조준 테스트 결과: ${avgTime}ms (${grade.grade})`}
              description={`나의 조준 속도는 ${avgTime}ms! 명중률 ${accuracy}% ${grade.emoji} ${grade.description}`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
            >
              다시 하기
            </button>
            <Link
              href="/physical"
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors text-center"
            >
              목록으로
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
