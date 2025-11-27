'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'showing' | 'input' | 'correct' | 'wrong' | 'finished';

function getGrade(level: number): { grade: string; emoji: string; description: string; color: string } {
  if (level >= 12) {
    return { grade: '천재', emoji: '🧠', description: '놀라운 기억력! 천재 수준이에요!', color: 'text-yellow-400' };
  } else if (level >= 10) {
    return { grade: '수재', emoji: '⚡', description: '매우 뛰어난 기억력이에요!', color: 'text-orange-400' };
  } else if (level >= 8) {
    return { grade: '우수', emoji: '⭐', description: '평균보다 훌륭한 기억력!', color: 'text-green-400' };
  } else if (level >= 6) {
    return { grade: '보통', emoji: '👍', description: '평균적인 기억력이에요.', color: 'text-blue-400' };
  } else if (level >= 4) {
    return { grade: '노력', emoji: '💪', description: '조금 더 연습하면 늘어요!', color: 'text-purple-400' };
  } else {
    return { grade: '시작', emoji: '🌱', description: '꾸준히 연습해보세요!', color: 'text-gray-400' };
  }
}

export default function NumberMemoryPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [currentNumber, setCurrentNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [showTime, setShowTime] = useState(1500);
  const [highScore, setHighScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateNumber = useCallback((digits: number) => {
    let number = '';
    for (let i = 0; i < digits; i++) {
      number += Math.floor(Math.random() * 10).toString();
    }
    // Ensure first digit is not 0 for better readability
    if (number[0] === '0') {
      number = (Math.floor(Math.random() * 9) + 1).toString() + number.slice(1);
    }
    return number;
  }, []);

  const startGame = useCallback(() => {
    setLevel(1);
    setUserInput('');
    const number = generateNumber(1);
    setCurrentNumber(number);
    setShowTime(1500);
    setGameState('showing');
  }, [generateNumber]);

  const nextLevel = useCallback(() => {
    const nextLvl = level + 1;
    setLevel(nextLvl);
    setUserInput('');
    const number = generateNumber(nextLvl);
    setCurrentNumber(number);
    // Increase show time slightly for longer numbers
    setShowTime(Math.min(1500 + (nextLvl - 1) * 200, 4000));
    setGameState('showing');
  }, [level, generateNumber]);

  const checkAnswer = useCallback(() => {
    if (userInput === currentNumber) {
      setGameState('correct');
      if (level > highScore) {
        setHighScore(level);
        localStorage.setItem('number-memory-highscore', level.toString());
      }
    } else {
      setGameState('wrong');
    }
  }, [userInput, currentNumber, level, highScore]);

  const resetGame = useCallback(() => {
    setGameState('idle');
    setLevel(1);
    setCurrentNumber('');
    setUserInput('');
  }, []);

  const finishGame = useCallback(() => {
    if (level > highScore) {
      setHighScore(level);
      localStorage.setItem('number-memory-highscore', level.toString());
    }
    setGameState('finished');
  }, [level, highScore]);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('number-memory-highscore');
    if (saved) {
      setHighScore(parseInt(saved));
    }
  }, []);

  // Show number timer
  useEffect(() => {
    if (gameState !== 'showing') return;

    const timer = setTimeout(() => {
      setGameState('input');
      setTimeout(() => inputRef.current?.focus(), 100);
    }, showTime);

    return () => clearTimeout(timer);
  }, [gameState, showTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.length > 0) {
      checkAnswer();
    }
  };

  const grade = getGrade(level);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 목록으로
          </Link>
          <h1 className="text-lg font-bold text-white">숫자 기억력 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Idle Screen */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">🔢</div>
            <h2 className="text-2xl font-bold text-white mb-4">숫자 기억력 테스트</h2>
            <p className="text-gray-400 mb-6">
              화면에 표시되는 숫자를 기억하고 입력하세요!<br/>
              레벨이 올라갈수록 숫자가 길어집니다.
            </p>
            
            {highScore > 0 && (
              <div className="bg-gray-700 rounded-xl p-4 mb-6">
                <p className="text-gray-400 text-sm">최고 기록</p>
                <p className="text-3xl font-bold text-yellow-400">{highScore}자리</p>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors"
            >
              시작하기
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-2">📊 평균 기억 범위</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 일반인 평균: 5-7자리</li>
              <li>• 훈련된 사람: 8-10자리</li>
              <li>• 기억력 챔피언: 12자리 이상</li>
              <li>• 세계 기록: 500자리 이상! 🤯</li>
            </ul>
          </div>
        </div>
      )}

      {/* Showing Number */}
      {gameState === 'showing' && (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">이 숫자를 기억하세요!</p>
            <p className="text-5xl md:text-7xl font-bold text-white font-mono tracking-widest animate-pulse">
              {currentNumber}
            </p>
            <div className="mt-8">
              <div className="w-32 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
                <div 
                  className="h-full bg-purple-500 animate-shrink"
                  style={{ 
                    animation: `shrink ${showTime}ms linear forwards`,
                  }}
                />
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes shrink {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}</style>
        </div>
      )}

      {/* Input Screen */}
      {gameState === 'input' && (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="text-center mb-6">
              <p className="text-gray-400 text-lg mb-2">레벨 {level}</p>
              <p className="text-white text-xl">숫자를 입력하세요</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-gray-800 border-2 border-purple-500 rounded-xl px-6 py-4 text-3xl text-white font-mono text-center tracking-widest focus:outline-none focus:border-purple-400"
                placeholder="???"
                autoComplete="off"
                maxLength={level + 2}
              />
              
              <button
                type="submit"
                disabled={userInput.length === 0}
                className="w-full mt-4 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold rounded-xl transition-colors"
              >
                확인
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Correct Screen */}
      {gameState === 'correct' && (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="text-center max-w-md w-full">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-green-400 mb-2">정답!</h2>
            <p className="text-gray-400 mb-6">
              {currentNumber}를 정확히 기억했어요!
            </p>
            
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <p className="text-gray-400 text-sm">현재 레벨</p>
              <p className="text-4xl font-bold text-white">{level}자리</p>
            </div>
            
            <button
              onClick={nextLevel}
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
            >
              다음 레벨 →
            </button>
          </div>
        </div>
      )}

      {/* Wrong Screen */}
      {gameState === 'wrong' && (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="text-center max-w-md w-full">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-3xl font-bold text-red-400 mb-2">틀렸어요!</h2>
            
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">정답</p>
                  <p className="text-2xl font-bold text-green-400 font-mono">{currentNumber}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">입력</p>
                  <p className="text-2xl font-bold text-red-400 font-mono">{userInput || '-'}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={finishGame}
                className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors"
              >
                결과 보기
              </button>
              <button
                onClick={startGame}
                className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors"
              >
                다시 시작
              </button>
            </div>
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
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최종 레벨</p>
                <p className="text-3xl font-bold text-white">{level}<span className="text-lg text-gray-400">자리</span></p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최고 기록</p>
                <p className="text-3xl font-bold text-yellow-400">{highScore}<span className="text-lg text-gray-400">자리</span></p>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-400 text-sm mb-2">📊 기억력 등급</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-yellow-400">🧠 천재</span>
                  <span className="text-gray-400">12자리 이상</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-400">⚡ 수재</span>
                  <span className="text-gray-400">10-11자리</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">⭐ 우수</span>
                  <span className="text-gray-400">8-9자리</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">👍 보통</span>
                  <span className="text-gray-400">6-7자리</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`숫자 기억력 테스트 결과: ${level}자리 (${grade.grade})`}
              description={`나의 숫자 기억력은 ${level}자리! ${grade.emoji} ${grade.description}`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors"
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
