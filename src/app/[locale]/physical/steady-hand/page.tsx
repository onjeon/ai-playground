'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'playing' | 'finished';
type Difficulty = 'easy' | 'medium' | 'hard';

interface PathPoint {
  x: number;
  y: number;
}

const difficulties: { id: Difficulty; name: string; pathWidth: number; description: string }[] = [
  { id: 'easy', name: '쉬움', pathWidth: 40, description: '넓은 통로' },
  { id: 'medium', name: '보통', pathWidth: 25, description: '중간 통로' },
  { id: 'hard', name: '어려움', pathWidth: 15, description: '좁은 통로' },
];

export default function SteadyHandPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [isInPath, setIsInPath] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [wallHits, setWallHits] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState<{ time: number; hits: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathRef = useRef<PathPoint[]>([]);
  const animationRef = useRef<number>(0);

  const currentDifficulty = difficulties.find(d => d.id === difficulty)!;

  // 경로 생성
  const generatePath = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const pathWidth = currentDifficulty.pathWidth;

    // 캔버스 클리어
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, width, height);

    // 경로 포인트 생성 (지그재그 패턴)
    const points: PathPoint[] = [];
    const segments = 5 + currentLevel;
    const segmentWidth = width / segments;

    points.push({ x: 0, y: height / 2 });

    for (let i = 1; i < segments; i++) {
      const x = segmentWidth * i;
      const yVariation = (Math.random() - 0.5) * (height * 0.6);
      const y = Math.max(pathWidth + 20, Math.min(height - pathWidth - 20, height / 2 + yVariation));
      points.push({ x, y });
    }

    points.push({ x: width, y: height / 2 });
    pathRef.current = points;

    // 경로 그리기
    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = pathWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();

    // 시작점 표시
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(10, height / 2, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('S', 10, height / 2 + 4);

    // 끝점 표시
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(width - 10, height / 2, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText('E', width - 10, height / 2 + 4);
  }, [currentDifficulty.pathWidth, currentLevel]);

  // 마우스가 경로 안에 있는지 확인
  const checkPosition = useCallback((x: number, y: number): boolean => {
    const canvas = canvasRef.current;
    if (!canvas) return false;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    const pathWidth = currentDifficulty.pathWidth;
    const points = pathRef.current;

    // 각 세그먼트에 대해 거리 확인
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      
      // 점과 선분 사이의 거리 계산
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      
      if (length === 0) continue;
      
      const t = Math.max(0, Math.min(1, ((x - p1.x) * dx + (y - p1.y) * dy) / (length * length)));
      const nearestX = p1.x + t * dx;
      const nearestY = p1.y + t * dy;
      
      const distance = Math.sqrt((x - nearestX) ** 2 + (y - nearestY) ** 2);
      
      if (distance <= pathWidth / 2) {
        return true;
      }
    }

    return false;
  }, [currentDifficulty.pathWidth]);

  // 마우스/터치 이동 핸들러
  const handleMove = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || gameState !== 'playing') return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // 시작 영역 확인
    if (!hasStarted && x < 30 && Math.abs(y - canvas.height / 2) < 30) {
      setHasStarted(true);
      setStartTime(Date.now());
    }

    if (!hasStarted) return;

    const inPath = checkPosition(x, y);
    
    if (!inPath && isInPath) {
      // 벽에 부딪힘
      setWallHits(prev => prev + 1);
    }
    
    setIsInPath(inPath);

    // 끝점 도달 확인
    if (x > canvas.width - 30 && Math.abs(y - canvas.height / 2) < 30) {
      const time = Date.now() - startTime;
      setEndTime(time);
      setCompletedLevels(prev => [...prev, { time, hits: wallHits }]);
      
      if (currentLevel < 3) {
        // 다음 레벨
        setTimeout(() => {
          setCurrentLevel(prev => prev + 1);
          setHasStarted(false);
          setWallHits(0);
          setIsInPath(false);
          generatePath();
        }, 1000);
      } else {
        // 게임 종료
        setGameState('finished');
      }
    }
  }, [gameState, hasStarted, checkPosition, isInPath, startTime, wallHits, currentLevel, generatePath]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    handleMove(e.clientX, e.clientY);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [handleMove]);

  const startGame = useCallback(() => {
    setGameState('playing');
    setCurrentLevel(1);
    setCompletedLevels([]);
    setHasStarted(false);
    setWallHits(0);
    setIsInPath(false);
    setTimeout(() => {
      generatePath();
    }, 100);
  }, [generatePath]);

  // 캔버스 크기 조정
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const updateSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = Math.min(container.clientWidth - 32, 500);
        canvas.height = 300;
        if (gameState === 'playing') {
          generatePath();
        }
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [gameState, generatePath]);

  // 결과 계산
  const totalTime = completedLevels.reduce((sum, l) => sum + l.time, 0);
  const totalHits = completedLevels.reduce((sum, l) => sum + l.hits, 0);
  const avgTime = completedLevels.length > 0 ? Math.round(totalTime / completedLevels.length) : 0;

  const getGrade = () => {
    if (totalHits === 0 && avgTime < 5000) return { grade: 'S', description: '외과의사 손! 완벽한 컨트롤!', color: 'text-yellow-400' };
    if (totalHits <= 3 && avgTime < 8000) return { grade: 'A', description: '훌륭해요! 안정적인 손!', color: 'text-green-400' };
    if (totalHits <= 6) return { grade: 'B', description: '좋아요! 괜찮은 컨트롤!', color: 'text-blue-400' };
    if (totalHits <= 10) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '손이 많이 떨리셨군요!', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">손 떨림 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">✋</div>
            <h2 className="text-2xl font-bold text-white mb-4">손 떨림 테스트</h2>
            <p className="text-gray-400 mb-2">
              마우스/손가락으로 좁은 통로를 통과하세요!
            </p>
            <p className="text-gray-500 text-sm">
              손의 안정성과 미세 컨트롤 능력을 테스트합니다
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
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <div>{d.name}</div>
                  <div className="text-xs opacity-70">{d.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 마우스/손가락을 시작점(S)에 올리세요</p>
              <p>2. 초록색 경로를 따라 끝점(E)까지 이동</p>
              <p>3. 벽에 닿지 않도록 조심!</p>
              <p>4. 3개 레벨을 완료하세요</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            ✋ 테스트 시작!
          </button>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>레벨 {currentLevel} / 3</span>
              <span>벽 충돌: {wallHits}</span>
            </div>
          </div>

          {/* Status */}
          <div className={`text-center mb-4 py-2 rounded-lg ${
            !hasStarted ? 'bg-blue-500/20 text-blue-400' :
            isInPath ? 'bg-green-500/20 text-green-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {!hasStarted ? '시작점(S)에 마우스/손가락을 올리세요' :
             isInPath ? '좋아요! 계속 가세요!' :
             '⚠️ 벽에 닿았어요!'}
          </div>

          {/* Canvas */}
          <div className="bg-gray-800 rounded-2xl p-4 mb-6">
            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="w-full rounded-lg cursor-none touch-none"
              style={{ touchAction: 'none' }}
            />
          </div>

          {/* Level Progress */}
          <div className="flex gap-2 justify-center">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  level < currentLevel ? 'bg-green-500 text-white' :
                  level === currentLevel ? 'bg-blue-500 text-white' :
                  'bg-gray-700 text-gray-500'
                }`}
              >
                {level < currentLevel ? '✓' : level}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">총 시간</p>
                <p className="text-3xl font-bold text-white">{(totalTime / 1000).toFixed(1)}초</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">벽 충돌</p>
                <p className="text-3xl font-bold text-white">{totalHits}회</p>
              </div>
            </div>

            {/* Level Details */}
            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <p className="text-gray-400 text-sm mb-3 text-center">레벨별 결과</p>
              <div className="space-y-2">
                {completedLevels.map((level, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-2">
                    <span className="text-gray-400">레벨 {index + 1}</span>
                    <span className="text-white">{(level.time / 1000).toFixed(1)}초</span>
                    <span className={level.hits === 0 ? 'text-green-400' : 'text-orange-400'}>
                      {level.hits}회 충돌
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`손 떨림 테스트 결과: ${result.grade}등급!`}
              description={`총 시간 ${(totalTime / 1000).toFixed(1)}초, 벽 충돌 ${totalHits}회! ✋`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
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
