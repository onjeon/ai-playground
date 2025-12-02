'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'playing' | 'finished';

interface Question {
  id: number;
  type: 'ishihara' | 'differentColor';
  colors: string[];
  correctIndex: number;
  difficulty: number;
  description: string;
}

// 이시하라 스타일 색상 테스트 (원 안에 숫자 찾기는 복잡하므로, 다른 색 찾기로 대체)
function generateDifferentColorQuestion(round: number): Question {
  const baseColors = [
    { base: '#e74c3c', similar: ['#c0392b', '#e74c3c', '#d35400'] }, // 빨강 계열
    { base: '#3498db', similar: ['#2980b9', '#3498db', '#1abc9c'] }, // 파랑 계열
    { base: '#2ecc71', similar: ['#27ae60', '#2ecc71', '#1abc9c'] }, // 초록 계열
    { base: '#9b59b6', similar: ['#8e44ad', '#9b59b6', '#e74c3c'] }, // 보라 계열
    { base: '#f1c40f', similar: ['#f39c12', '#f1c40f', '#e67e22'] }, // 노랑 계열
    { base: '#1abc9c', similar: ['#16a085', '#1abc9c', '#2ecc71'] }, // 청록 계열
  ];
  
  // 난이도에 따라 색상 차이 조절
  const difficulty = Math.min(Math.floor(round / 3) + 1, 5);
  const colorDiffs = [40, 30, 20, 15, 10]; // HSL 기준 차이
  const diff = colorDiffs[Math.min(difficulty - 1, colorDiffs.length - 1)];
  
  // 그리드 크기 (난이도에 따라)
  const gridSizes = [9, 16, 25, 36, 49];
  const gridSize = gridSizes[Math.min(difficulty - 1, gridSizes.length - 1)];
  
  // 기본 색상 선택
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60 + Math.floor(Math.random() * 20);
  const lightness = 45 + Math.floor(Math.random() * 15);
  
  const baseColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const differentColor = `hsl(${(hue + diff) % 360}, ${saturation}%, ${lightness}%)`;
  
  const colors: string[] = Array(gridSize).fill(baseColor);
  const correctIndex = Math.floor(Math.random() * gridSize);
  colors[correctIndex] = differentColor;
  
  return {
    id: round,
    type: 'differentColor',
    colors,
    correctIndex,
    difficulty,
    description: `다른 색상을 찾으세요! (난이도 ${difficulty})`,
  };
}

function getGrade(score: number, total: number): { grade: string; emoji: string; description: string; color: string } {
  const percentage = (score / total) * 100;
  
  if (percentage >= 90) {
    return { grade: '완벽한 색각', emoji: '🎨', description: '색상 구별 능력이 매우 뛰어납니다!', color: 'text-green-400' };
  } else if (percentage >= 70) {
    return { grade: '정상 색각', emoji: '👁️', description: '색상을 잘 구별합니다.', color: 'text-blue-400' };
  } else if (percentage >= 50) {
    return { grade: '약간의 어려움', emoji: '🔍', description: '일부 색상 구별에 어려움이 있을 수 있어요.', color: 'text-yellow-400' };
  } else {
    return { grade: '색각 검사 권장', emoji: '⚠️', description: '정밀 색각 검사를 받아보시는 것을 권장합니다.', color: 'text-orange-400' };
  }
}

export default function ColorBlindTestPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const [showResult, setShowResult] = useState(false);
  const totalRounds = 15;

  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentRound(1);
    setScore(0);
    setQuestion(generateDifferentColorQuestion(1));
    setTimeLeft(5);
    setShowResult(false);
  }, []);

  const handleAnswer = useCallback((selectedIndex: number) => {
    if (!question || showResult) return;
    
    const isCorrect = selectedIndex === question.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentRound >= totalRounds) {
        setGameState('finished');
      } else {
        setCurrentRound(prev => prev + 1);
        setQuestion(generateDifferentColorQuestion(currentRound + 1));
        setShowResult(false);
        setTimeLeft(5);
      }
    }, 800);
  }, [question, currentRound, showResult]);

  const resetGame = useCallback(() => {
    setGameState('idle');
    setCurrentRound(0);
    setScore(0);
    setQuestion(null);
    setShowResult(false);
  }, []);

  const grade = gameState === 'finished' ? getGrade(score, totalRounds) : null;

  // 그리드 크기 계산
  const gridCols = question ? Math.sqrt(question.colors.length) : 3;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">색각 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Game Content */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-white mb-4">색각 테스트</h2>
            <p className="text-gray-400 mb-2">
              여러 개의 색상 중에서 다른 하나를 찾으세요!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              총 {totalRounds}라운드 / 난이도가 점점 올라갑니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">테스트 방법</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>격자 안에서 다른 색상의 칸을 찾아 클릭하세요</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>라운드가 진행될수록 색상 차이가 줄어듭니다</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>격자 크기도 점점 커집니다</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">
            <p className="text-yellow-400 text-sm">
              ⚠️ 이 테스트는 간이 테스트로 정확한 색각 진단을 대체할 수 없습니다. 
              색각에 대한 정밀 검사가 필요하시면 안과 전문의와 상담하세요.
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-lg"
          >
            테스트 시작하기
          </button>
        </div>
      )}

      {gameState === 'playing' && question && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>라운드 {currentRound}/{totalRounds}</span>
              <span>난이도 {question.difficulty}/5</span>
              <span>점수: {score}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(currentRound / totalRounds) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="text-center mb-6">
            <p className="text-white text-lg">다른 색상을 찾으세요!</p>
          </div>

          {/* Color Grid */}
          <div 
            className="grid gap-2 mb-6 mx-auto"
            style={{ 
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              maxWidth: `${Math.min(gridCols * 60, 400)}px`
            }}
          >
            {question.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`aspect-square rounded-lg transition-all ${
                  showResult && index === question.correctIndex
                    ? 'ring-4 ring-green-400 scale-105'
                    : ''
                } ${showResult ? 'cursor-default' : 'hover:scale-105 cursor-pointer'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Result Feedback */}
          {showResult && (
            <div className="text-center">
              <p className={`text-xl font-bold ${
                question.correctIndex !== undefined ? 'text-green-400' : 'text-red-400'
              }`}>
                {showResult ? '다음 문제로...' : ''}
              </p>
            </div>
          )}
        </div>
      )}

      {gameState === 'finished' && grade && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">{grade.emoji}</div>
            <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.grade}</h2>
            <p className="text-gray-400 mb-6">{grade.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">맞춘 문제</p>
                <p className="text-3xl font-bold text-white">{score}<span className="text-lg text-gray-400">/{totalRounds}</span></p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">정확도</p>
                <p className="text-3xl font-bold text-green-400">{Math.round((score / totalRounds) * 100)}%</p>
              </div>
            </div>

            {/* Score Bar */}
            <div className="mb-6">
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    score / totalRounds >= 0.7 ? 'bg-green-500' : 
                    score / totalRounds >= 0.5 ? 'bg-yellow-500' : 'bg-orange-500'
                  }`}
                  style={{ width: `${(score / totalRounds) * 100}%` }}
                />
              </div>
            </div>

            {/* Result Breakdown */}
            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-400 text-sm mb-3">난이도별 결과</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">쉬움 (1-2)</span>
                  <span className="text-green-400">대부분 정답</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">보통 (3-4)</span>
                  <span className="text-blue-400">대체로 정답</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">어려움 (5)</span>
                  <span className="text-yellow-400">도전적</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-left">
              <p className="text-blue-400 text-sm">
                💡 <strong>참고:</strong> 이 테스트는 색상 구별 능력을 간단히 확인하는 용도입니다. 
                실제 색각 이상 여부는 전문 안과 검사를 통해 확인하세요.
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`색각 테스트 결과: ${grade.grade}`}
              description={`색각 테스트에서 ${score}/${totalRounds}점을 받았어요! ${grade.emoji} ${grade.description}`}
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
