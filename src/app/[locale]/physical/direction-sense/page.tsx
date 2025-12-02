'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'playing' | 'feedback' | 'finished';
type Direction = 'north' | 'south' | 'east' | 'west';

interface Round {
  rotations: number;
  targetDirection: Direction;
  userAnswer: Direction;
  correct: boolean;
  reactionTime: number;
}

const DIRECTIONS: { id: Direction; name: string; emoji: string; angle: number }[] = [
  { id: 'north', name: '북', emoji: '⬆️', angle: 0 },
  { id: 'east', name: '동', emoji: '➡️', angle: 90 },
  { id: 'south', name: '남', emoji: '⬇️', angle: 180 },
  { id: 'west', name: '서', emoji: '⬅️', angle: 270 },
];

const TOTAL_ROUNDS = 10;

export default function DirectionSensePage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [rotation, setRotation] = useState(0);
  const [targetDirection, setTargetDirection] = useState<Direction>('north');
  const [isRotating, setIsRotating] = useState(false);
  const [roundStartTime, setRoundStartTime] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: Direction } | null>(null);

  // 새 라운드 생성
  const generateRound = useCallback(() => {
    // 랜덤 회전 (1~4번, 각 90도씩)
    const rotationCount = Math.floor(Math.random() * 4) + 1 + Math.floor(currentRound / 3);
    const rotationDirection = Math.random() > 0.5 ? 1 : -1; // 시계 or 반시계
    const totalRotation = rotationCount * 90 * rotationDirection;
    
    // 타겟 방향 설정
    const targetDir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    setTargetDirection(targetDir.id);
    
    // 회전 애니메이션
    setIsRotating(true);
    let currentRotation = 0;
    const step = rotationDirection * 90;
    const interval = setInterval(() => {
      currentRotation += step;
      setRotation(prev => prev + step);
      
      if (Math.abs(currentRotation) >= Math.abs(totalRotation)) {
        clearInterval(interval);
        setIsRotating(false);
        setRoundStartTime(Date.now());
      }
    }, 300);
    
    return { rotations: rotationCount, targetDir: targetDir.id };
  }, [currentRound]);

  // 게임 시작
  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentRound(0);
    setRounds([]);
    setRotation(0);
    setFeedback(null);
    
    setTimeout(() => {
      generateRound();
    }, 500);
  }, [generateRound]);

  // 방향 선택
  const handleDirectionSelect = useCallback((direction: Direction) => {
    if (isRotating || feedback) return;
    
    const reactionTime = Date.now() - roundStartTime;
    
    // 현재 회전 상태에서 실제 방향 계산
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const targetAngle = DIRECTIONS.find(d => d.id === targetDirection)!.angle;
    const actualAngle = (targetAngle - normalizedRotation + 360) % 360;
    const actualDirection = DIRECTIONS.find(d => d.angle === actualAngle)!.id;
    
    const correct = direction === actualDirection;
    
    const roundResult: Round = {
      rotations: Math.abs(rotation / 90),
      targetDirection,
      userAnswer: direction,
      correct,
      reactionTime,
    };
    
    setRounds(prev => [...prev, roundResult]);
    setFeedback({ correct, answer: actualDirection });
    setGameState('feedback');
    
    setTimeout(() => {
      setFeedback(null);
      if (currentRound + 1 >= TOTAL_ROUNDS) {
        setGameState('finished');
      } else {
        setCurrentRound(prev => prev + 1);
        setGameState('playing');
        generateRound();
      }
    }, 1500);
  }, [isRotating, feedback, rotation, targetDirection, roundStartTime, currentRound, generateRound]);

  // 결과 계산
  const correctRounds = rounds.filter(r => r.correct);
  const accuracy = rounds.length > 0 ? Math.round((correctRounds.length / rounds.length) * 100) : 0;
  const avgReactionTime = correctRounds.length > 0
    ? Math.round(correctRounds.reduce((sum, r) => sum + r.reactionTime, 0) / correctRounds.length)
    : 0;

  const getGrade = () => {
    if (accuracy >= 90 && avgReactionTime < 2000) return { grade: 'S', description: '완벽한 방향감각! 나침반 마스터!', color: 'text-yellow-400' };
    if (accuracy >= 80 && avgReactionTime < 3000) return { grade: 'A', description: '훌륭해요! 뛰어난 방향감각!', color: 'text-green-400' };
    if (accuracy >= 70) return { grade: 'B', description: '좋아요! 괜찮은 방향감각!', color: 'text-blue-400' };
    if (accuracy >= 50) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '길 찾기가 어려우셨군요!', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">방향 감각 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧭</div>
            <h2 className="text-2xl font-bold text-white mb-4">방향 감각 테스트</h2>
            <p className="text-gray-400 mb-2">
              회전 후 방향을 찾으세요!
            </p>
            <p className="text-gray-500 text-sm">
              공간 인지력과 방향 감각을 테스트합니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 나침반이 회전합니다</p>
              <p>2. 회전 후 특정 방향(예: 북쪽)이 어디인지 묻습니다</p>
              <p>3. 회전된 상태에서 그 방향을 선택하세요</p>
              <p>4. {TOTAL_ROUNDS}라운드 진행됩니다</p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">예시</p>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">나침반이 90도 시계방향으로 회전하면...</p>
              <p className="text-white">원래 위(북)에 있던 것이 오른쪽(동)으로!</p>
              <p className="text-blue-400 text-sm mt-2">&quot;북쪽은?&quot; → 왼쪽을 선택!</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            🧭 테스트 시작!
          </button>
        </div>
      )}

      {/* Playing / Feedback */}
      {(gameState === 'playing' || gameState === 'feedback') && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Round {currentRound + 1} / {TOTAL_ROUNDS}</span>
              <span>정답: {correctRounds.length}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
                style={{ width: `${((currentRound + 1) / TOTAL_ROUNDS) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className={`text-center mb-6 py-4 rounded-xl ${
            feedback ? (feedback.correct ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400') :
            isRotating ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-800 text-white'
          }`}>
            {isRotating ? '🔄 회전 중...' :
             feedback ? (feedback.correct ? '✓ 정답!' : `✗ 정답은 ${DIRECTIONS.find(d => d.id === feedback.answer)?.name}쪽!`) :
             `${DIRECTIONS.find(d => d.id === targetDirection)?.emoji} ${DIRECTIONS.find(d => d.id === targetDirection)?.name}쪽은 어디?`}
          </div>

          {/* Compass */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative w-48 h-48 bg-gray-800 rounded-full border-4 border-gray-700 transition-transform duration-300"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Cardinal Points */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-red-500 font-bold text-xl">N</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-400 font-bold text-xl">S</div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xl">E</div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xl">W</div>
              
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">🧭</div>
              
              {/* Needle */}
              <div className="absolute top-4 left-1/2 w-1 h-16 -translate-x-1/2 bg-gradient-to-b from-red-500 to-transparent rounded-full" />
            </div>
          </div>

          {/* Direction Buttons */}
          <div className="grid grid-cols-3 gap-3 max-w-[280px] mx-auto">
            <div />
            <button
              onClick={() => handleDirectionSelect('north')}
              disabled={isRotating || !!feedback}
              className={`aspect-square rounded-xl text-3xl flex items-center justify-center transition-all ${
                feedback?.answer === 'north' ? 'bg-green-500' :
                isRotating || feedback ? 'bg-gray-700 opacity-50' : 'bg-gray-700 hover:bg-gray-600 active:scale-95'
              }`}
            >
              ⬆️
            </button>
            <div />
            
            <button
              onClick={() => handleDirectionSelect('west')}
              disabled={isRotating || !!feedback}
              className={`aspect-square rounded-xl text-3xl flex items-center justify-center transition-all ${
                feedback?.answer === 'west' ? 'bg-green-500' :
                isRotating || feedback ? 'bg-gray-700 opacity-50' : 'bg-gray-700 hover:bg-gray-600 active:scale-95'
              }`}
            >
              ⬅️
            </button>
            <div className="aspect-square rounded-xl bg-gray-800 flex items-center justify-center text-gray-500">
              ●
            </div>
            <button
              onClick={() => handleDirectionSelect('east')}
              disabled={isRotating || !!feedback}
              className={`aspect-square rounded-xl text-3xl flex items-center justify-center transition-all ${
                feedback?.answer === 'east' ? 'bg-green-500' :
                isRotating || feedback ? 'bg-gray-700 opacity-50' : 'bg-gray-700 hover:bg-gray-600 active:scale-95'
              }`}
            >
              ➡️
            </button>
            
            <div />
            <button
              onClick={() => handleDirectionSelect('south')}
              disabled={isRotating || !!feedback}
              className={`aspect-square rounded-xl text-3xl flex items-center justify-center transition-all ${
                feedback?.answer === 'south' ? 'bg-green-500' :
                isRotating || feedback ? 'bg-gray-700 opacity-50' : 'bg-gray-700 hover:bg-gray-600 active:scale-95'
              }`}
            >
              ⬇️
            </button>
            <div />
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-8 text-center mb-6">
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
                <p className="text-3xl font-bold text-green-400">{correctRounds.length}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">오답</p>
                <p className="text-3xl font-bold text-red-400">{rounds.length - correctRounds.length}</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`방향 감각 테스트 결과: ${result.grade}등급!`}
              description={`정확도 ${accuracy}%, 평균 반응시간 ${avgReactionTime}ms! 🧭`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
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
