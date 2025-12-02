'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'playing' | 'finished';
type Difficulty = 'easy' | 'medium' | 'hard';

interface ColorWord {
  text: string;
  displayColor: string;
  correctAnswer: string;
}

const colors = [
  { name: '빨강', hex: '#ef4444' },
  { name: '파랑', hex: '#3b82f6' },
  { name: '초록', hex: '#22c55e' },
  { name: '노랑', hex: '#eab308' },
  { name: '보라', hex: '#a855f7' },
  { name: '주황', hex: '#f97316' },
];

const difficulties: { id: Difficulty; name: string; description: string; timeLimit: number; rounds: number }[] = [
  { id: 'easy', name: '쉬움', description: '15문제 / 5초', timeLimit: 5000, rounds: 15 },
  { id: 'medium', name: '보통', description: '20문제 / 3초', timeLimit: 3000, rounds: 20 },
  { id: 'hard', name: '어려움', description: '25문제 / 2초', timeLimit: 2000, rounds: 25 },
];

export default function StroopTestPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState<ColorWord | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [roundStartTime, setRoundStartTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentDifficulty = difficulties.find(d => d.id === difficulty)!;

  // Generate a random color word
  const generateWord = useCallback((): ColorWord => {
    const textColorIndex = Math.floor(Math.random() * colors.length);
    let displayColorIndex = Math.floor(Math.random() * colors.length);
    
    // Make sure text and display color are different (for the stroop effect)
    while (displayColorIndex === textColorIndex && Math.random() > 0.3) {
      displayColorIndex = Math.floor(Math.random() * colors.length);
    }

    return {
      text: colors[textColorIndex].name,
      displayColor: colors[displayColorIndex].hex,
      correctAnswer: colors[displayColorIndex].name,
    };
  }, []);

  // Start a new round
  const startRound = useCallback(() => {
    const newWord = generateWord();
    setCurrentWord(newWord);
    setTimeLeft(currentDifficulty.timeLimit);
    setRoundStartTime(Date.now());
    setShowFeedback(null);
  }, [generateWord, currentDifficulty.timeLimit]);

  // Start the game
  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentRound(1);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setReactionTimes([]);
    startRound();
  }, [startRound]);

  // Handle answer selection
  const handleAnswer = useCallback((selectedColor: string) => {
    if (!currentWord || showFeedback) return;

    const reactionTime = Date.now() - roundStartTime;
    const isCorrect = selectedColor === currentWord.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + Math.ceil((currentDifficulty.timeLimit - reactionTime) / 100));
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      setReactionTimes(prev => [...prev, reactionTime]);
      setShowFeedback('correct');
    } else {
      setStreak(0);
      setShowFeedback('wrong');
    }

    // Clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Move to next round after feedback
    setTimeout(() => {
      if (currentRound >= currentDifficulty.rounds) {
        setGameState('finished');
      } else {
        setCurrentRound(prev => prev + 1);
        startRound();
      }
    }, 500);
  }, [currentWord, showFeedback, roundStartTime, currentDifficulty.timeLimit, currentDifficulty.rounds, currentRound, bestStreak, startRound]);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || !currentWord) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 100) {
          // Time's up
          handleAnswer('');
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState, currentWord, handleAnswer]);

  // Calculate results
  const averageReactionTime = reactionTimes.length > 0
    ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length)
    : 0;

  const accuracy = Math.round((reactionTimes.length / currentDifficulty.rounds) * 100);

  const getGrade = () => {
    if (accuracy >= 90 && averageReactionTime < 1000) return { grade: 'S', description: '스트룹 마스터!', color: 'text-yellow-400' };
    if (accuracy >= 80 && averageReactionTime < 1500) return { grade: 'A', description: '훌륭해요!', color: 'text-green-400' };
    if (accuracy >= 70) return { grade: 'B', description: '좋아요!', color: 'text-blue-400' };
    if (accuracy >= 50) return { grade: 'C', description: '조금 더 연습하면 좋겠어요', color: 'text-orange-400' };
    return { grade: 'D', description: '처음엔 다 어려워요!', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">스트룹 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-white mb-4">스트룹 테스트</h2>
            <p className="text-gray-400 mb-2">
              글자가 아닌 <span className="text-yellow-400 font-bold">색상</span>을 맞추세요!
            </p>
            <p className="text-gray-500 text-sm">
              뇌의 정보 처리 능력과 인지 유연성을 테스트합니다
            </p>
          </div>

          {/* Example */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">예시</p>
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-4xl font-bold" style={{ color: '#3b82f6' }}>빨강</span>
              <span className="text-gray-500">→</span>
              <span className="text-2xl text-white">정답: <span className="text-blue-500 font-bold">파랑</span></span>
            </div>
            <p className="text-center text-gray-500 text-sm">
              글자는 &quot;빨강&quot;이지만, 색상은 파란색입니다
            </p>
          </div>

          {/* Difficulty Selection */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">난이도 선택</p>
            <div className="grid grid-cols-3 gap-3">
              {difficulties.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDifficulty(d.id)}
                  className={`py-3 px-4 rounded-xl font-bold transition-all ${
                    difficulty === d.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <div>{d.name}</div>
                  <div className="text-xs opacity-70">{d.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            🎮 테스트 시작!
          </button>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && currentWord && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Round {currentRound} / {currentDifficulty.rounds}</span>
              <span>점수: {score} | 연속: {streak}🔥</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100"
                style={{ width: `${(timeLeft / currentDifficulty.timeLimit) * 100}%` }}
              />
            </div>
          </div>

          {/* Word Display */}
          <div className={`bg-gray-800 rounded-3xl p-12 mb-6 text-center transition-all ${showFeedback === 'correct' ? 'bg-green-500/20 ring-2 ring-green-500' : showFeedback === 'wrong' ? 'bg-red-500/20 ring-2 ring-red-500' : ''}`}>
            <p className="text-gray-500 text-sm mb-4">이 글자의 색상은?</p>
            <span 
              className="text-6xl md:text-7xl font-bold"
              style={{ color: currentWord.displayColor }}
            >
              {currentWord.text}
            </span>
            {showFeedback && (
              <p className={`mt-4 text-xl font-bold ${showFeedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                {showFeedback === 'correct' ? '✓ 정답!' : '✗ 오답!'}
              </p>
            )}
          </div>

          {/* Color Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleAnswer(color.name)}
                disabled={showFeedback !== null}
                className="py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                style={{ backgroundColor: color.hex }}
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">정확도</p>
                <p className="text-3xl font-bold text-white">{accuracy}%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">점수</p>
                <p className="text-3xl font-bold text-white">{score}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">평균 반응시간</p>
                <p className="text-3xl font-bold text-white">{averageReactionTime}ms</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최고 연속</p>
                <p className="text-3xl font-bold text-white">{bestStreak}🔥</p>
              </div>
            </div>

            {/* Info */}
            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <p className="text-gray-400 text-sm mb-2">📊 스트룹 효과란?</p>
              <p className="text-gray-500 text-xs">
                글자의 의미와 색상이 다를 때 뇌가 혼란을 겪는 현상입니다. 
                이 테스트는 인지 유연성과 집중력을 측정합니다.
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`스트룹 테스트 결과: ${result.grade}등급!`}
              description={`정확도 ${accuracy}%, 평균 반응시간 ${averageReactionTime}ms! 🎨`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              다시 하기
            </button>
            <button
              onClick={() => setGameState('intro')}
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors"
            >
              난이도 변경
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
