'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'playing' | 'finished';

interface GameStats {
  mathCorrect: number;
  mathWrong: number;
  clickScore: number;
  missedClicks: number;
}

const GAME_DURATION = 30; // 30초

export default function MultitaskingPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [stats, setStats] = useState<GameStats>({ mathCorrect: 0, mathWrong: 0, clickScore: 0, missedClicks: 0 });
  
  // Math Task
  const [mathProblem, setMathProblem] = useState({ a: 0, b: 0, operator: '+', answer: 0 });
  const [mathInput, setMathInput] = useState('');
  
  // Click Task
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [showTarget, setShowTarget] = useState(false);
  const [targetSize, setTargetSize] = useState(40);
  
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const targetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 수학 문제 생성
  const generateMathProblem = useCallback(() => {
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a: number, b: number, answer: number;
    
    if (operator === '+') {
      a = Math.floor(Math.random() * 50) + 1;
      b = Math.floor(Math.random() * 50) + 1;
      answer = a + b;
    } else if (operator === '-') {
      a = Math.floor(Math.random() * 50) + 20;
      b = Math.floor(Math.random() * 20) + 1;
      answer = a - b;
    } else {
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      answer = a * b;
    }
    
    setMathProblem({ a, b, operator, answer });
    setMathInput('');
  }, []);

  // 타겟 생성
  const spawnTarget = useCallback(() => {
    if (!gameAreaRef.current) return;
    
    const area = gameAreaRef.current;
    const maxX = area.clientWidth - targetSize;
    const maxY = area.clientHeight - targetSize;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    setTargetPosition({ x, y });
    setShowTarget(true);
    
    // 타겟 타임아웃 (놓치면 사라짐)
    targetTimeoutRef.current = setTimeout(() => {
      setShowTarget(false);
      setStats(prev => ({ ...prev, missedClicks: prev.missedClicks + 1 }));
      
      // 다음 타겟
      setTimeout(spawnTarget, 500 + Math.random() * 1000);
    }, 2000);
  }, [targetSize]);

  // 타겟 클릭
  const handleTargetClick = useCallback(() => {
    if (!showTarget) return;
    
    if (targetTimeoutRef.current) {
      clearTimeout(targetTimeoutRef.current);
    }
    
    setStats(prev => ({ ...prev, clickScore: prev.clickScore + 1 }));
    setShowTarget(false);
    
    // 점점 어려워짐
    setTargetSize(prev => Math.max(25, prev - 1));
    
    // 다음 타겟
    setTimeout(spawnTarget, 300 + Math.random() * 700);
  }, [showTarget, spawnTarget]);

  // 수학 답 제출
  const handleMathSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    const userAnswer = parseInt(mathInput);
    if (isNaN(userAnswer)) return;
    
    if (userAnswer === mathProblem.answer) {
      setStats(prev => ({ ...prev, mathCorrect: prev.mathCorrect + 1 }));
    } else {
      setStats(prev => ({ ...prev, mathWrong: prev.mathWrong + 1 }));
    }
    
    generateMathProblem();
  }, [mathInput, mathProblem.answer, generateMathProblem]);

  // 게임 시작
  const startGame = useCallback(() => {
    setGameState('playing');
    setTimeLeft(GAME_DURATION);
    setStats({ mathCorrect: 0, mathWrong: 0, clickScore: 0, missedClicks: 0 });
    setTargetSize(40);
    
    generateMathProblem();
    setTimeout(spawnTarget, 1000);
  }, [generateMathProblem, spawnTarget]);

  // 타이머
  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          setShowTarget(false);
          if (targetTimeoutRef.current) {
            clearTimeout(targetTimeoutRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => {
      clearInterval(interval);
      if (targetTimeoutRef.current) {
        clearTimeout(targetTimeoutRef.current);
      }
    };
  }, [gameState]);

  // 결과 계산
  const totalMath = stats.mathCorrect + stats.mathWrong;
  const mathAccuracy = totalMath > 0 ? Math.round((stats.mathCorrect / totalMath) * 100) : 0;
  const totalTargets = stats.clickScore + stats.missedClicks;
  const clickAccuracy = totalTargets > 0 ? Math.round((stats.clickScore / totalTargets) * 100) : 0;
  const overallScore = stats.mathCorrect * 10 + stats.clickScore * 5;

  const getGrade = () => {
    if (overallScore >= 200 && mathAccuracy >= 80) return { grade: 'S', description: '멀티태스킹 천재! 완벽한 동시 처리!', color: 'text-yellow-400' };
    if (overallScore >= 150 && mathAccuracy >= 70) return { grade: 'A', description: '훌륭해요! 뛰어난 멀티태스킹!', color: 'text-green-400' };
    if (overallScore >= 100) return { grade: 'B', description: '좋아요! 괜찮은 멀티태스킹!', color: 'text-blue-400' };
    if (overallScore >= 50) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '한 번에 하나씩이 맞을지도!', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">멀티태스킹 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧩</div>
            <h2 className="text-2xl font-bold text-white mb-4">멀티태스킹 테스트</h2>
            <p className="text-gray-400 mb-2">
              두 가지 일을 동시에!
            </p>
            <p className="text-gray-500 text-sm">
              분할 주의력과 작업 전환 능력을 테스트합니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-400 font-bold mb-2">📊 작업 1: 수학 문제</p>
                <p className="text-gray-400 text-sm">간단한 덧셈, 뺄셈, 곱셈 문제를 풀어주세요</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <p className="text-green-400 font-bold mb-2">🎯 작업 2: 타겟 클릭</p>
                <p className="text-gray-400 text-sm">화면에 나타나는 초록 원을 빠르게 클릭하세요</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center mt-4">
              {GAME_DURATION}초 동안 두 가지 작업을 동시에 수행하세요!
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            🧩 테스트 시작!
          </button>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && (
        <div className="max-w-2xl mx-auto px-4 py-4">
          {/* Timer & Stats */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-blue-400">
              수학: <span className="font-bold">{stats.mathCorrect}</span>
            </div>
            <div className="text-2xl font-bold text-white bg-gray-800 px-4 py-2 rounded-full">
              {timeLeft}초
            </div>
            <div className="text-green-400">
              클릭: <span className="font-bold">{stats.clickScore}</span>
            </div>
          </div>

          {/* Math Task */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4 mb-4">
            <p className="text-blue-400 text-sm mb-2 text-center">수학 문제</p>
            <div className="text-center mb-3">
              <span className="text-3xl font-bold text-white">
                {mathProblem.a} {mathProblem.operator} {mathProblem.b} = ?
              </span>
            </div>
            <form onSubmit={handleMathSubmit} className="flex gap-2">
              <input
                type="number"
                value={mathInput}
                onChange={(e) => setMathInput(e.target.value)}
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-center text-xl"
                placeholder="답"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg"
              >
                확인
              </button>
            </form>
          </div>

          {/* Click Task */}
          <div 
            ref={gameAreaRef}
            className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 relative overflow-hidden"
            style={{ height: '250px' }}
          >
            <p className="text-green-400 text-sm mb-2 text-center">타겟 클릭</p>
            
            {showTarget && (
              <button
                onClick={handleTargetClick}
                className="absolute bg-green-500 hover:bg-green-400 rounded-full transition-all animate-pulse"
                style={{
                  width: targetSize,
                  height: targetSize,
                  left: targetPosition.x,
                  top: targetPosition.y + 30,
                }}
              />
            )}
            
            {!showTarget && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">타겟 대기 중...</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-2">{result.description}</p>
            <p className="text-yellow-400 text-2xl font-bold mb-6">총점: {overallScore}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-500/20 rounded-xl p-4">
                <p className="text-blue-400 text-sm font-bold mb-2">📊 수학</p>
                <p className="text-2xl font-bold text-white">{stats.mathCorrect}문제</p>
                <p className="text-gray-400 text-sm">정확도 {mathAccuracy}%</p>
              </div>
              <div className="bg-green-500/20 rounded-xl p-4">
                <p className="text-green-400 text-sm font-bold mb-2">🎯 클릭</p>
                <p className="text-2xl font-bold text-white">{stats.clickScore}회</p>
                <p className="text-gray-400 text-sm">정확도 {clickAccuracy}%</p>
              </div>
            </div>

            {/* Detail Stats */}
            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">수학 정답:</span>
                  <span className="text-green-400">{stats.mathCorrect}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">수학 오답:</span>
                  <span className="text-red-400">{stats.mathWrong}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">타겟 성공:</span>
                  <span className="text-green-400">{stats.clickScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">타겟 실패:</span>
                  <span className="text-red-400">{stats.missedClicks}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`멀티태스킹 테스트 결과: ${result.grade}등급!`}
              description={`총점 ${overallScore}점! 수학 ${stats.mathCorrect}문제, 클릭 ${stats.clickScore}회! 🧩`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
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
