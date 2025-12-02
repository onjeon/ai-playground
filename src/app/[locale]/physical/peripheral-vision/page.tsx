'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'playing' | 'finished';

interface Target {
  id: number;
  position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  appeared: number;
}

interface Result {
  reactionTime: number;
  position: string;
  success: boolean;
}

const positions = [
  { id: 'top', style: 'top-4 left-1/2 -translate-x-1/2' },
  { id: 'bottom', style: 'bottom-4 left-1/2 -translate-x-1/2' },
  { id: 'left', style: 'left-4 top-1/2 -translate-y-1/2' },
  { id: 'right', style: 'right-4 top-1/2 -translate-y-1/2' },
  { id: 'top-left', style: 'top-4 left-4' },
  { id: 'top-right', style: 'top-4 right-4' },
  { id: 'bottom-left', style: 'bottom-4 left-4' },
  { id: 'bottom-right', style: 'bottom-4 right-4' },
];

const TOTAL_ROUNDS = 15;
const TARGET_TIMEOUT = 2000; // 2초 안에 클릭해야 함

export default function PeripheralVisionPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [currentTarget, setCurrentTarget] = useState<Target | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [showFeedback, setShowFeedback] = useState<'success' | 'miss' | 'timeout' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextTargetRef = useRef<NodeJS.Timeout | null>(null);

  const spawnTarget = useCallback(() => {
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const target: Target = {
      id: Date.now(),
      position: randomPosition.id as Target['position'],
      appeared: Date.now(),
    };
    setCurrentTarget(target);
    setShowFeedback(null);

    // 타임아웃 설정
    timeoutRef.current = setTimeout(() => {
      setResults(prev => [...prev, {
        reactionTime: TARGET_TIMEOUT,
        position: target.position,
        success: false,
      }]);
      setShowFeedback('timeout');
      setCurrentTarget(null);

      // 다음 라운드로
      setTimeout(() => {
        if (currentRound + 1 >= TOTAL_ROUNDS) {
          setGameState('finished');
        } else {
          setCurrentRound(prev => prev + 1);
          spawnTarget();
        }
      }, 500);
    }, TARGET_TIMEOUT);
  }, [currentRound]);

  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentRound(0);
    setResults([]);
    
    // 3초 후 시작
    setTimeout(() => {
      spawnTarget();
    }, 1000);
  }, [spawnTarget]);

  const handleTargetClick = useCallback(() => {
    if (!currentTarget) return;

    // 타임아웃 취소
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const reactionTime = Date.now() - currentTarget.appeared;
    setResults(prev => [...prev, {
      reactionTime,
      position: currentTarget.position,
      success: true,
    }]);
    setShowFeedback('success');
    setCurrentTarget(null);

    // 다음 라운드로
    nextTargetRef.current = setTimeout(() => {
      if (currentRound + 1 >= TOTAL_ROUNDS) {
        setGameState('finished');
      } else {
        setCurrentRound(prev => prev + 1);
        spawnTarget();
      }
    }, 500);
  }, [currentTarget, currentRound, spawnTarget]);

  const handleMiss = useCallback(() => {
    if (!currentTarget) return;
    setShowFeedback('miss');
  }, [currentTarget]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (nextTargetRef.current) clearTimeout(nextTargetRef.current);
    };
  }, []);

  // 결과 계산
  const successResults = results.filter(r => r.success);
  const accuracy = Math.round((successResults.length / results.length) * 100) || 0;
  const avgReactionTime = successResults.length > 0
    ? Math.round(successResults.reduce((sum, r) => sum + r.reactionTime, 0) / successResults.length)
    : 0;

  const getGrade = () => {
    if (accuracy >= 90 && avgReactionTime < 500) return { grade: 'S', description: '독수리 눈! 완벽한 시야!', color: 'text-yellow-400' };
    if (accuracy >= 80 && avgReactionTime < 700) return { grade: 'A', description: '훌륭해요! 넓은 시야!', color: 'text-green-400' };
    if (accuracy >= 70) return { grade: 'B', description: '좋아요! 괜찮은 주변 시야', color: 'text-blue-400' };
    if (accuracy >= 50) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '중앙에 집중하셨군요!', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">시야각 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold text-white mb-4">시야각 테스트</h2>
            <p className="text-gray-400 mb-2">
              화면 가장자리에 나타나는 원을 클릭하세요!
            </p>
            <p className="text-gray-500 text-sm">
              주변 시야(Peripheral Vision)를 테스트합니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 화면 중앙의 + 표시를 계속 바라보세요</p>
              <p>2. 화면 가장자리에 원이 나타납니다</p>
              <p>3. 원을 발견하면 최대한 빨리 클릭!</p>
              <p>4. {TOTAL_ROUNDS}라운드 진행됩니다</p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
            <p className="text-yellow-400 text-sm text-center">
              💡 팁: 중앙의 +를 보면서 주변을 감지하는 것이 핵심입니다!
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            👁️ 테스트 시작!
          </button>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && (
        <div className="h-[calc(100vh-60px)] relative" onClick={handleMiss}>
          {/* Progress */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-gray-800/80 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {currentRound + 1} / {TOTAL_ROUNDS}
              </span>
            </div>
          </div>

          {/* Center Focus Point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-4xl text-white font-bold">+</div>
          </div>

          {/* Target */}
          {currentTarget && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTargetClick();
              }}
              className={`absolute w-12 h-12 bg-green-500 rounded-full animate-pulse hover:bg-green-400 transition-colors ${positions.find(p => p.id === currentTarget.position)?.style}`}
            />
          )}

          {/* Feedback */}
          {showFeedback && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2">
              <div className={`px-4 py-2 rounded-full text-white font-bold ${
                showFeedback === 'success' ? 'bg-green-500' :
                showFeedback === 'miss' ? 'bg-red-500' :
                'bg-orange-500'
              }`}>
                {showFeedback === 'success' ? '✓ 좋아요!' :
                 showFeedback === 'miss' ? '✗ 빗나감!' :
                 '⏱ 시간 초과!'}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <p className="text-gray-500 text-sm">중앙의 +를 보면서 주변의 초록 원을 클릭하세요</p>
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">정확도</p>
                <p className="text-3xl font-bold text-white">{accuracy}%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">평균 반응시간</p>
                <p className="text-3xl font-bold text-white">{avgReactionTime}ms</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">성공</p>
                <p className="text-3xl font-bold text-green-400">{successResults.length}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">실패</p>
                <p className="text-3xl font-bold text-red-400">{results.length - successResults.length}</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <p className="text-gray-400 text-sm mb-2">📊 주변 시야란?</p>
              <p className="text-gray-500 text-xs">
                주변 시야(Peripheral Vision)는 중심 시야 외의 영역을 감지하는 능력입니다.
                운전, 스포츠, 게임 등에서 중요한 역할을 합니다.
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`시야각 테스트 결과: ${result.grade}등급!`}
              description={`정확도 ${accuracy}%, 평균 반응시간 ${avgReactionTime}ms! 👁️`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
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
