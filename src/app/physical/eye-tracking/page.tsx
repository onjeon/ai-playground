'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'playing' | 'rest' | 'finished';
type Direction = 'left' | 'right' | 'up' | 'down' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface ExerciseSet {
  name: string;
  emoji: string;
  description: string;
  duration: number; // seconds
  pattern: Direction[];
}

const exerciseSets: ExerciseSet[] = [
  {
    name: '좌우 운동',
    emoji: '↔️',
    description: '눈으로 공을 따라가세요',
    duration: 15,
    pattern: ['left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'center'],
  },
  {
    name: '상하 운동',
    emoji: '↕️',
    description: '눈으로 공을 따라가세요',
    duration: 15,
    pattern: ['up', 'down', 'up', 'down', 'up', 'down', 'up', 'down', 'center'],
  },
  {
    name: '대각선 운동',
    emoji: '↗️',
    description: '대각선으로 눈을 움직이세요',
    duration: 20,
    pattern: ['top-left', 'bottom-right', 'top-right', 'bottom-left', 'top-left', 'bottom-right', 'top-right', 'bottom-left', 'center'],
  },
  {
    name: '원형 운동',
    emoji: '🔄',
    description: '원을 그리듯 따라가세요',
    duration: 24,
    pattern: ['up', 'top-right', 'right', 'bottom-right', 'down', 'bottom-left', 'left', 'top-left', 'up', 'top-right', 'right', 'bottom-right', 'down', 'bottom-left', 'left', 'top-left', 'center'],
  },
];

function getGrade(completedSets: number): { grade: string; emoji: string; description: string; color: string } {
  if (completedSets === 4) {
    return { grade: '완벽', emoji: '🏆', description: '모든 운동을 완료했어요! 눈이 시원해졌나요?', color: 'text-yellow-400' };
  } else if (completedSets >= 3) {
    return { grade: '훌륭', emoji: '⭐', description: '거의 다 했어요! 꾸준히 하면 눈 건강에 좋아요.', color: 'text-green-400' };
  } else if (completedSets >= 2) {
    return { grade: '좋음', emoji: '👍', description: '절반 이상 완료! 나머지도 해보세요.', color: 'text-blue-400' };
  } else {
    return { grade: '시작', emoji: '💪', description: '좋은 시작이에요! 매일 조금씩 해보세요.', color: 'text-gray-400' };
  }
}

export default function EyeTrackingPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [currentSet, setCurrentSet] = useState(0);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [completedSets, setCompletedSets] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [position, setPosition] = useState<Direction>('center');

  const startExercise = useCallback(() => {
    setGameState('playing');
    setCurrentPatternIndex(0);
    setTimeLeft(exerciseSets[currentSet].duration);
    setPosition('center');
  }, [currentSet]);

  const nextSet = useCallback(() => {
    setCompletedSets(prev => prev + 1);
    if (currentSet < exerciseSets.length - 1) {
      setCurrentSet(prev => prev + 1);
      setGameState('rest');
    } else {
      setGameState('finished');
    }
  }, [currentSet]);

  const resetGame = useCallback(() => {
    setGameState('idle');
    setCurrentSet(0);
    setCurrentPatternIndex(0);
    setCompletedSets(0);
    setTimeLeft(0);
    setPosition('center');
  }, []);

  const skipSet = useCallback(() => {
    if (currentSet < exerciseSets.length - 1) {
      setCurrentSet(prev => prev + 1);
      setGameState('rest');
    } else {
      setGameState('finished');
    }
  }, [currentSet]);

  // Timer and pattern animation
  useEffect(() => {
    if (gameState !== 'playing') return;

    const exercise = exerciseSets[currentSet];
    const patternInterval = (exercise.duration * 1000) / exercise.pattern.length;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          nextSet();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const patternTimer = setInterval(() => {
      setCurrentPatternIndex(prev => {
        const nextIndex = (prev + 1) % exercise.pattern.length;
        setPosition(exercise.pattern[nextIndex]);
        return nextIndex;
      });
    }, patternInterval);

    // Set initial position
    setPosition(exercise.pattern[0]);

    return () => {
      clearInterval(timer);
      clearInterval(patternTimer);
    };
  }, [gameState, currentSet, nextSet]);

  const getPositionStyle = () => {
    switch (position) {
      case 'left': return 'left-[10%] top-1/2 -translate-y-1/2';
      case 'right': return 'left-[90%] top-1/2 -translate-y-1/2 -translate-x-full';
      case 'up': return 'left-1/2 top-[10%] -translate-x-1/2';
      case 'down': return 'left-1/2 top-[90%] -translate-x-1/2 -translate-y-full';
      case 'top-left': return 'left-[15%] top-[15%]';
      case 'top-right': return 'left-[85%] top-[15%] -translate-x-full';
      case 'bottom-left': return 'left-[15%] top-[85%] -translate-y-full';
      case 'bottom-right': return 'left-[85%] top-[85%] -translate-x-full -translate-y-full';
      case 'center': return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
      default: return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
    }
  };

  const exercise = exerciseSets[currentSet];
  const grade = getGrade(completedSets);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 목록으로
          </Link>
          <h1 className="text-lg font-bold text-white">안구 운동</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Idle Screen */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold text-white mb-4">안구 운동 테스트</h2>
            <p className="text-gray-400 mb-6">
              화면의 공을 눈으로 따라가며 안구 근육을 풀어주세요.<br/>
              머리는 고정하고 눈만 움직여야 효과가 좋아요!
            </p>
            
            <div className="space-y-3 mb-8">
              {exerciseSets.map((set, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{set.emoji}</span>
                    <span className="text-white">{set.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{set.duration}초</span>
                </div>
              ))}
            </div>

            <button
              onClick={startExercise}
              className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors"
            >
              시작하기
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-2">💡 팁</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 화면과 40-60cm 거리를 유지하세요</li>
              <li>• 머리는 움직이지 말고 눈만 움직이세요</li>
              <li>• 눈이 피로하면 잠시 쉬었다가 계속하세요</li>
              <li>• 매일 2-3회 반복하면 효과적이에요</li>
            </ul>
          </div>
        </div>
      )}

      {/* Playing Screen */}
      {gameState === 'playing' && (
        <div className="relative min-h-[calc(100vh-64px)] bg-gray-900">
          {/* Info Bar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-gray-800/80 backdrop-blur rounded-full px-6 py-2 flex items-center gap-4">
            <span className="text-2xl">{exercise.emoji}</span>
            <span className="text-white font-medium">{exercise.name}</span>
            <span className="text-teal-400 font-bold">{timeLeft}초</span>
          </div>

          {/* Progress */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
            <div className="flex gap-2">
              {exerciseSets.map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < currentSet ? 'bg-teal-500' : i === currentSet ? 'bg-teal-400 animate-pulse' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Skip Button */}
          <button
            onClick={skipSet}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            건너뛰기 →
          </button>

          {/* Moving Ball */}
          <div 
            className={`absolute w-16 h-16 md:w-24 md:h-24 transition-all duration-700 ease-in-out ${getPositionStyle()}`}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-teal-500/50 animate-pulse" />
          </div>

          {/* Center Guide */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-gray-600 rounded-full opacity-30" />
        </div>
      )}

      {/* Rest Screen */}
      {gameState === 'rest' && (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-2xl p-8 text-center max-w-md w-full">
            <div className="text-5xl mb-4">😌</div>
            <h2 className="text-2xl font-bold text-white mb-2">잠시 쉬세요</h2>
            <p className="text-gray-400 mb-6">
              눈을 감고 잠시 쉬어가세요.<br/>
              다음 운동: {exerciseSets[currentSet].emoji} {exerciseSets[currentSet].name}
            </p>
            <button
              onClick={startExercise}
              className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors"
            >
              다음 운동 시작
            </button>
          </div>
        </div>
      )}

      {/* Finished Screen */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">{grade.emoji}</div>
            <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.grade}</h2>
            <p className="text-gray-400 mb-6">{grade.description}</p>
            
            <div className="bg-gray-700 rounded-xl p-4 mb-6">
              <p className="text-gray-400 text-sm">완료한 운동</p>
              <p className="text-3xl font-bold text-white">{completedSets}<span className="text-lg text-gray-400">/{exerciseSets.length}</span></p>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-6">
              {exerciseSets.map((set, i) => (
                <div 
                  key={i}
                  className={`p-3 rounded-lg ${i < completedSets ? 'bg-teal-500/20 border border-teal-500/30' : 'bg-gray-700'}`}
                >
                  <span className="text-2xl">{set.emoji}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-white font-medium mb-2">👁️ 안구 운동의 효과</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• 눈의 피로 해소</li>
                <li>• 안구 근육 강화</li>
                <li>• 집중력 향상</li>
                <li>• 시력 유지에 도움</li>
              </ul>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`안구 운동 완료! ${completedSets}/${exerciseSets.length} 세트`}
              description={`오늘도 눈 건강을 챙겼어요! ${grade.emoji} ${grade.description}`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors"
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
