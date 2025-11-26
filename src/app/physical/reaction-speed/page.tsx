'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'waiting' | 'ready' | 'clicked' | 'too-early' | 'finished';

interface Result {
  time: number;
  attempt: number;
}

function getGrade(avgTime: number): { grade: string; emoji: string; description: string; color: string } {
  if (avgTime < 180) {
    return { grade: '초인', emoji: '⚡', description: '프로게이머 수준! 번개같은 반응속도!', color: 'text-yellow-400' };
  } else if (avgTime < 220) {
    return { grade: '엘리트', emoji: '🔥', description: '매우 빠른 반응속도! 게임에서 유리!', color: 'text-orange-400' };
  } else if (avgTime < 270) {
    return { grade: '우수', emoji: '⭐', description: '평균보다 빠른 편이에요!', color: 'text-green-400' };
  } else if (avgTime < 350) {
    return { grade: '평균', emoji: '👍', description: '일반적인 반응속도입니다.', color: 'text-blue-400' };
  } else if (avgTime < 450) {
    return { grade: '느림', emoji: '🐢', description: '조금 느린 편이에요. 연습하면 좋아져요!', color: 'text-gray-400' };
  } else {
    return { grade: '거북이', emoji: '😴', description: '많이 졸리신가요? 커피 한 잔 어때요?', color: 'text-gray-500' };
  }
}

export default function ReactionSpeedTestPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [results, setResults] = useState<Result[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [lastTime, setLastTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const maxAttempts = 5;

  const resetGame = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setGameState('idle');
    setResults([]);
    setCurrentAttempt(0);
    setLastTime(0);
  }, []);

  const startWaiting = useCallback(() => {
    setGameState('waiting');
    const delay = Math.random() * 3000 + 2000; // 2-5초 랜덤
    
    timerRef.current = setTimeout(() => {
      setGameState('ready');
      setStartTime(Date.now());
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (gameState === 'idle') {
      setCurrentAttempt(1);
      startWaiting();
    } else if (gameState === 'waiting') {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setGameState('too-early');
    } else if (gameState === 'ready') {
      const reactionTime = Date.now() - startTime;
      setLastTime(reactionTime);
      
      const newResults = [...results, { time: reactionTime, attempt: currentAttempt }];
      setResults(newResults);
      
      if (currentAttempt >= maxAttempts) {
        setGameState('finished');
      } else {
        setGameState('clicked');
      }
    } else if (gameState === 'clicked' || gameState === 'too-early') {
      setCurrentAttempt(prev => prev + 1);
      startWaiting();
    }
  }, [gameState, startTime, results, currentAttempt, startWaiting]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const avgTime = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + r.time, 0) / results.length)
    : 0;
  
  const bestTime = results.length > 0 
    ? Math.min(...results.map(r => r.time))
    : 0;

  const grade = avgTime > 0 ? getGrade(avgTime) : null;

  const getBackgroundColor = () => {
    switch (gameState) {
      case 'waiting': return 'bg-red-500';
      case 'ready': return 'bg-green-500';
      case 'too-early': return 'bg-yellow-500';
      case 'clicked': return 'bg-blue-500';
      case 'finished': return 'bg-gradient-to-br from-purple-600 to-indigo-700';
      default: return 'bg-gray-800';
    }
  };

  const getMessage = () => {
    switch (gameState) {
      case 'idle': return { main: '화면을 클릭하여 시작', sub: '초록색이 되면 최대한 빨리 클릭하세요!' };
      case 'waiting': return { main: '기다리세요...', sub: '초록색이 될 때까지 기다리세요' };
      case 'ready': return { main: '클릭!', sub: '' };
      case 'too-early': return { main: '너무 빨랐어요!', sub: '클릭하여 다시 시도' };
      case 'clicked': return { main: `${lastTime}ms`, sub: '클릭하여 계속' };
      case 'finished': return { main: '완료!', sub: '' };
      default: return { main: '', sub: '' };
    }
  };

  const message = getMessage();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">반응속도 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Game Area */}
      {gameState !== 'finished' ? (
        <div 
          className={`relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center cursor-pointer transition-colors duration-100 ${getBackgroundColor()}`}
          onClick={handleClick}
        >
          <div className="text-center select-none">
            <p className="text-5xl md:text-7xl font-bold text-white mb-4">{message.main}</p>
            {message.sub && (
              <p className="text-xl md:text-2xl text-white/80">{message.sub}</p>
            )}
          </div>
          
          {/* Progress */}
          {currentAttempt > 0 && gameState !== 'idle' && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="flex gap-2 justify-center">
                {Array.from({ length: maxAttempts }).map((_, i) => (
                  <div 
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < results.length 
                        ? 'bg-white' 
                        : i === results.length
                          ? 'bg-white/50 animate-pulse'
                          : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm text-center mt-2">
                {currentAttempt} / {maxAttempts}
              </p>
            </div>
          )}
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
                <p className="text-gray-400 text-sm">평균 반응속도</p>
                <p className="text-3xl font-bold text-white">{avgTime}<span className="text-lg text-gray-400">ms</span></p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최고 기록</p>
                <p className="text-3xl font-bold text-green-400">{bestTime}<span className="text-lg text-gray-400">ms</span></p>
              </div>
            </div>

            {/* Individual Results */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">시도별 기록</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {results.map((r, i) => (
                  <span 
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      r.time === bestTime 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {r.time}ms
                  </span>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
              <p className="text-gray-400 text-sm mb-2">반응속도 비교</p>
              <div className="space-y-2 text-left text-sm">
                <div className="flex justify-between">
                  <span className="text-yellow-400">⚡ 프로게이머</span>
                  <span className="text-gray-400">150-180ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-400">🔥 매우 빠름</span>
                  <span className="text-gray-400">180-220ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">⭐ 빠름</span>
                  <span className="text-gray-400">220-270ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">👍 평균</span>
                  <span className="text-gray-400">270-350ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`반응속도 테스트 결과: ${avgTime}ms (${grade?.grade})`}
              description={`나의 반응속도는 ${avgTime}ms! ${grade?.emoji} ${grade?.description}`}
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
