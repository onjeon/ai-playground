'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'showing' | 'input' | 'result' | 'finished';

function getGrade(level: number): { grade: string; emoji: string; description: string; color: string } {
  if (level >= 10) {
    return { grade: '천재', emoji: '🧠', description: '놀라운 기억력! 멘사 수준!', color: 'text-yellow-400' };
  } else if (level >= 8) {
    return { grade: '우수', emoji: '⭐', description: '매우 뛰어난 단기 기억력!', color: 'text-green-400' };
  } else if (level >= 6) {
    return { grade: '양호', emoji: '👍', description: '평균 이상의 기억력입니다.', color: 'text-blue-400' };
  } else if (level >= 4) {
    return { grade: '평균', emoji: '😊', description: '일반적인 수준입니다.', color: 'text-gray-400' };
  } else {
    return { grade: '노력 필요', emoji: '💪', description: '연습하면 늘어요!', color: 'text-orange-400' };
  }
}

export default function MemoryTestPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [sequence, setSequence] = useState<number[]>([]);
  const [userInput, setUserInput] = useState<number[]>([]);
  const [level, setLevel] = useState(0);
  const [showingIndex, setShowingIndex] = useState(-1);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [highScore, setHighScore] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const gridSize = 9; // 3x3 grid

  const generateSequence = useCallback((length: number) => {
    const newSequence: number[] = [];
    for (let i = 0; i < length; i++) {
      newSequence.push(Math.floor(Math.random() * gridSize));
    }
    return newSequence;
  }, []);

  const showSequence = useCallback((seq: number[]) => {
    setGameState('showing');
    let index = 0;
    
    const showNext = () => {
      if (index < seq.length) {
        setShowingIndex(seq[index]);
        timeoutRef.current = setTimeout(() => {
          setShowingIndex(-1);
          timeoutRef.current = setTimeout(() => {
            index++;
            showNext();
          }, 200);
        }, 600);
      } else {
        setShowingIndex(-1);
        setGameState('input');
      }
    };
    
    // 시작 전 잠깐 대기
    timeoutRef.current = setTimeout(showNext, 500);
  }, []);

  const startGame = useCallback(() => {
    const newLevel = 1;
    const initialLength = 3; // 3개부터 시작
    const newSequence = generateSequence(initialLength);
    
    setLevel(newLevel);
    setSequence(newSequence);
    setUserInput([]);
    setIsCorrect(null);
    showSequence(newSequence);
  }, [generateSequence, showSequence]);

  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    const newLength = 2 + newLevel; // 레벨 + 2개
    const newSequence = generateSequence(newLength);
    
    setLevel(newLevel);
    setSequence(newSequence);
    setUserInput([]);
    setIsCorrect(null);
    showSequence(newSequence);
  }, [level, generateSequence, showSequence]);

  const handleCellClick = useCallback((index: number) => {
    if (gameState !== 'input') return;
    
    const newUserInput = [...userInput, index];
    setUserInput(newUserInput);
    
    // 현재까지 맞는지 확인
    const currentIndex = newUserInput.length - 1;
    if (newUserInput[currentIndex] !== sequence[currentIndex]) {
      // 틀림
      setIsCorrect(false);
      setGameState('result');
      if (level > highScore) {
        setHighScore(level);
      }
      return;
    }
    
    // 모두 맞췄는지 확인
    if (newUserInput.length === sequence.length) {
      setIsCorrect(true);
      setGameState('result');
    }
  }, [gameState, userInput, sequence, level, highScore]);

  const handleResult = useCallback(() => {
    if (isCorrect) {
      nextLevel();
    } else {
      setGameState('finished');
    }
  }, [isCorrect, nextLevel]);

  const resetGame = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setGameState('idle');
    setSequence([]);
    setUserInput([]);
    setLevel(0);
    setShowingIndex(-1);
    setIsCorrect(null);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const grade = level > 0 ? getGrade(level) : null;
  const currentSequenceLength = 2 + level;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">순간 기억력 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Game Content */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold text-white mb-4">순간 기억력 테스트</h2>
            <p className="text-gray-400 mb-2">
              화면에 나타나는 순서를 기억하고 따라 클릭하세요!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              레벨이 올라갈수록 기억해야 할 순서가 늘어납니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">게임 방법</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">1.</span>
                <span>화면에 순서대로 빛나는 칸을 집중해서 봅니다</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">2.</span>
                <span>순서가 끝나면 기억한 순서대로 클릭합니다</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">3.</span>
                <span>틀리면 게임 오버! 맞추면 다음 레벨로!</span>
              </li>
            </ul>
          </div>

          {highScore > 0 && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6 text-center">
              <p className="text-yellow-400">
                🏆 최고 기록: 레벨 {highScore} ({2 + highScore}칸)
              </p>
            </div>
          )}

          <button
            onClick={startGame}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-lg"
          >
            시작하기
          </button>
        </div>
      )}

      {(gameState === 'showing' || gameState === 'input' || gameState === 'result') && (
        <div className="max-w-md mx-auto px-4 py-8">
          {/* Stats */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-center">
              <p className="text-gray-500 text-xs">레벨</p>
              <p className="text-2xl font-bold text-white">{level}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs">기억할 칸</p>
              <p className="text-2xl font-bold text-blue-400">{currentSequenceLength}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs">입력</p>
              <p className="text-2xl font-bold text-green-400">{userInput.length}/{sequence.length}</p>
            </div>
          </div>

          {/* Status Message */}
          <div className="text-center mb-6 h-12">
            {gameState === 'showing' && (
              <p className="text-xl text-yellow-400 animate-pulse">순서를 기억하세요!</p>
            )}
            {gameState === 'input' && (
              <p className="text-xl text-blue-400">순서대로 클릭하세요!</p>
            )}
            {gameState === 'result' && isCorrect && (
              <p className="text-xl text-green-400">정답! 🎉</p>
            )}
            {gameState === 'result' && !isCorrect && (
              <p className="text-xl text-red-400">틀렸습니다! 😢</p>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6 aspect-square max-w-xs mx-auto">
            {Array.from({ length: gridSize }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleCellClick(index)}
                disabled={gameState !== 'input'}
                className={`aspect-square rounded-xl transition-all duration-200 ${
                  showingIndex === index
                    ? 'bg-yellow-400 scale-105 shadow-lg shadow-yellow-400/50'
                    : userInput.includes(index) && gameState === 'input'
                      ? 'bg-blue-500'
                      : 'bg-gray-700 hover:bg-gray-600'
                } ${gameState === 'input' ? 'cursor-pointer' : 'cursor-default'}`}
              />
            ))}
          </div>

          {/* Result Actions */}
          {gameState === 'result' && (
            <button
              onClick={handleResult}
              className={`w-full py-4 font-bold rounded-xl transition-colors text-lg ${
                isCorrect 
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {isCorrect ? '다음 레벨 →' : '결과 보기'}
            </button>
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
                <p className="text-gray-400 text-sm">도달 레벨</p>
                <p className="text-4xl font-bold text-white">{level}</p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최대 기억 칸</p>
                <p className="text-4xl font-bold text-blue-400">{2 + level}</p>
              </div>
            </div>

            {/* Level Comparison */}
            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-400 text-sm mb-3">기억력 수준</p>
              <div className="space-y-2">
                {[
                  { label: '🧠 천재', range: '10개 이상', highlight: level >= 10 },
                  { label: '⭐ 우수', range: '8-9개', highlight: level >= 8 && level < 10 },
                  { label: '👍 양호', range: '6-7개', highlight: level >= 6 && level < 8 },
                  { label: '😊 평균', range: '4-5개', highlight: level >= 4 && level < 6 },
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

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-left">
              <p className="text-blue-400 text-sm">
                💡 <strong>Tip:</strong> 단기 기억력은 훈련으로 향상시킬 수 있어요! 
                매일 조금씩 연습해보세요.
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`순간 기억력 테스트 결과: 레벨 ${level} (${grade.grade})`}
              description={`순간 기억력 테스트에서 레벨 ${level}까지 도달! ${grade.emoji} ${2 + level}개를 기억했어요!`}
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
