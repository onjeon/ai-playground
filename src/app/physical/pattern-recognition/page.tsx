'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'playing' | 'finished';
type Difficulty = 'easy' | 'medium' | 'hard';

interface Round {
  gridSize: number;
  differentIndex: number;
  baseColor: string;
  differentColor: string;
  timeLimit: number;
  reactionTime: number;
  success: boolean;
}

const difficulties: { id: Difficulty; name: string; description: string }[] = [
  { id: 'easy', name: '쉬움', description: '3x3, 색상 차이 큼' },
  { id: 'medium', name: '보통', description: '4x4, 색상 차이 중간' },
  { id: 'hard', name: '어려움', description: '5x5, 색상 차이 작음' },
];

const baseColors = [
  { base: '#ef4444', variants: ['#f87171', '#dc2626', '#fca5a5'] }, // red
  { base: '#3b82f6', variants: ['#60a5fa', '#2563eb', '#93c5fd'] }, // blue
  { base: '#22c55e', variants: ['#4ade80', '#16a34a', '#86efac'] }, // green
  { base: '#eab308', variants: ['#facc15', '#ca8a04', '#fde047'] }, // yellow
  { base: '#a855f7', variants: ['#c084fc', '#9333ea', '#d8b4fe'] }, // purple
  { base: '#f97316', variants: ['#fb923c', '#ea580c', '#fdba74'] }, // orange
];

const TOTAL_ROUNDS = 10;

export default function PatternRecognitionPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [currentRound, setCurrentRound] = useState(0);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [grid, setGrid] = useState<{ color: string; isDifferent: boolean }[]>([]);
  const [gridSize, setGridSize] = useState(4);
  const [roundStartTime, setRoundStartTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | 'timeout' | null>(null);

  const getGridSize = useCallback((diff: Difficulty, round: number): number => {
    const baseSize = diff === 'easy' ? 3 : diff === 'medium' ? 4 : 5;
    // 라운드가 진행될수록 점점 커짐
    return Math.min(baseSize + Math.floor(round / 4), 6);
  }, []);

  const getTimeLimit = useCallback((diff: Difficulty): number => {
    return diff === 'easy' ? 5000 : diff === 'medium' ? 4000 : 3000;
  }, []);

  const getColorDifference = useCallback((diff: Difficulty, round: number): number => {
    // 난이도와 라운드에 따라 색상 차이 조절 (작을수록 어려움)
    const baseDiff = diff === 'easy' ? 40 : diff === 'medium' ? 25 : 15;
    return Math.max(baseDiff - round * 2, 5);
  }, []);

  const generateRound = useCallback(() => {
    const size = getGridSize(difficulty, currentRound);
    setGridSize(size);
    
    const totalCells = size * size;
    const differentIndex = Math.floor(Math.random() * totalCells);
    
    // 베이스 색상 선택
    const colorSet = baseColors[Math.floor(Math.random() * baseColors.length)];
    const baseColor = colorSet.base;
    
    // 다른 색상 생성 (HSL 조절)
    const diff = getColorDifference(difficulty, currentRound);
    const differentColor = colorSet.variants[Math.floor(Math.random() * colorSet.variants.length)];
    
    // 그리드 생성
    const newGrid = Array.from({ length: totalCells }, (_, i) => ({
      color: i === differentIndex ? differentColor : baseColor,
      isDifferent: i === differentIndex,
    }));
    
    setGrid(newGrid);
    setRoundStartTime(Date.now());
    setTimeLeft(getTimeLimit(difficulty));
    setShowFeedback(null);
  }, [difficulty, currentRound, getGridSize, getColorDifference, getTimeLimit]);

  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentRound(0);
    setRounds([]);
    setTimeout(() => {
      generateRound();
    }, 500);
  }, [generateRound]);

  const handleCellClick = useCallback((index: number, isDifferent: boolean) => {
    if (showFeedback) return;
    
    const reactionTime = Date.now() - roundStartTime;
    const success = isDifferent;
    
    const roundResult: Round = {
      gridSize,
      differentIndex: grid.findIndex(g => g.isDifferent),
      baseColor: grid[0]?.color || '',
      differentColor: grid.find(g => g.isDifferent)?.color || '',
      timeLimit: getTimeLimit(difficulty),
      reactionTime,
      success,
    };
    
    setRounds(prev => [...prev, roundResult]);
    setShowFeedback(success ? 'correct' : 'wrong');
    
    setTimeout(() => {
      if (currentRound + 1 >= TOTAL_ROUNDS) {
        setGameState('finished');
      } else {
        setCurrentRound(prev => prev + 1);
        generateRound();
      }
    }, 500);
  }, [showFeedback, roundStartTime, gridSize, grid, difficulty, currentRound, getTimeLimit, generateRound]);

  // 타이머
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 100) {
          // 시간 초과
          const roundResult: Round = {
            gridSize,
            differentIndex: grid.findIndex(g => g.isDifferent),
            baseColor: grid[0]?.color || '',
            differentColor: grid.find(g => g.isDifferent)?.color || '',
            timeLimit: getTimeLimit(difficulty),
            reactionTime: getTimeLimit(difficulty),
            success: false,
          };
          setRounds(prev => [...prev, roundResult]);
          setShowFeedback('timeout');
          
          setTimeout(() => {
            if (currentRound + 1 >= TOTAL_ROUNDS) {
              setGameState('finished');
            } else {
              setCurrentRound(prev => prev + 1);
              generateRound();
            }
          }, 500);
          
          return 0;
        }
        return prev - 100;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [gameState, showFeedback, gridSize, grid, difficulty, currentRound, getTimeLimit, generateRound]);

  // 결과 계산
  const successRounds = rounds.filter(r => r.success);
  const accuracy = Math.round((successRounds.length / rounds.length) * 100) || 0;
  const avgReactionTime = successRounds.length > 0
    ? Math.round(successRounds.reduce((sum, r) => sum + r.reactionTime, 0) / successRounds.length)
    : 0;

  const getGrade = () => {
    if (accuracy >= 90 && avgReactionTime < 1500) return { grade: 'S', description: '독수리 눈! 완벽한 패턴 인식!', color: 'text-yellow-400' };
    if (accuracy >= 80 && avgReactionTime < 2000) return { grade: 'A', description: '훌륭해요! 뛰어난 관찰력!', color: 'text-green-400' };
    if (accuracy >= 70) return { grade: 'B', description: '좋아요! 괜찮은 관찰력!', color: 'text-blue-400' };
    if (accuracy >= 50) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '차이를 찾기 어려웠나요?', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">패턴 인식 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-white mb-4">패턴 인식 테스트</h2>
            <p className="text-gray-400 mb-2">
              다른 색상 하나를 찾아내세요!
            </p>
            <p className="text-gray-500 text-sm">
              관찰력과 색상 구별 능력을 테스트합니다
            </p>
          </div>

          {/* Difficulty */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">난이도 선택</p>
            <div className="grid grid-cols-3 gap-3">
              {difficulties.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDifficulty(d.id)}
                  className={`py-3 px-4 rounded-xl font-bold transition-all ${
                    difficulty === d.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <div>{d.name}</div>
                  <div className="text-xs opacity-70">{d.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Example */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">예시</p>
            <div className="grid grid-cols-3 gap-2 max-w-[150px] mx-auto">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-lg ${i === 4 ? 'bg-blue-400' : 'bg-blue-600'}`}
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm text-center mt-4">
              가운데 칸의 색이 다릅니다!
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            🔍 테스트 시작!
          </button>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Round {currentRound + 1} / {TOTAL_ROUNDS}</span>
              <span>{Math.ceil(timeLeft / 1000)}초</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100"
                style={{ width: `${(timeLeft / getTimeLimit(difficulty)) * 100}%` }}
              />
            </div>
          </div>

          {/* Grid */}
          <div 
            className={`grid gap-2 mb-6 mx-auto ${showFeedback ? 'pointer-events-none' : ''}`}
            style={{ 
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              maxWidth: `${gridSize * 60}px`
            }}
          >
            {grid.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleCellClick(index, cell.isDifferent)}
                className={`aspect-square rounded-lg transition-all hover:scale-105 active:scale-95 ${
                  showFeedback && cell.isDifferent ? 'ring-4 ring-white' : ''
                }`}
                style={{ backgroundColor: cell.color }}
              />
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="text-center">
              <div className={`inline-block px-6 py-3 rounded-full text-white font-bold ${
                showFeedback === 'correct' ? 'bg-green-500' :
                showFeedback === 'wrong' ? 'bg-red-500' :
                'bg-orange-500'
              }`}>
                {showFeedback === 'correct' ? '✓ 정답!' :
                 showFeedback === 'wrong' ? '✗ 틀렸어요!' :
                 '⏱ 시간 초과!'}
              </div>
            </div>
          )}

          <p className="text-gray-500 text-sm text-center mt-4">
            다른 색상의 칸을 클릭하세요!
          </p>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-8 text-center mb-6">
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
                <p className="text-gray-400 text-sm">정답</p>
                <p className="text-3xl font-bold text-green-400">{successRounds.length}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">오답</p>
                <p className="text-3xl font-bold text-red-400">{rounds.length - successRounds.length}</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`패턴 인식 테스트 결과: ${result.grade}등급!`}
              description={`정확도 ${accuracy}%, 평균 반응시간 ${avgReactionTime}ms! 🔍`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
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
