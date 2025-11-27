'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'showing' | 'input' | 'feedback' | 'finished';

const COLORS = [
  { id: 'red', name: '빨강', bg: 'bg-red-500', activeBg: 'bg-red-400' },
  { id: 'blue', name: '파랑', bg: 'bg-blue-500', activeBg: 'bg-blue-400' },
  { id: 'green', name: '초록', bg: 'bg-green-500', activeBg: 'bg-green-400' },
  { id: 'yellow', name: '노랑', bg: 'bg-yellow-500', activeBg: 'bg-yellow-400' },
  { id: 'purple', name: '보라', bg: 'bg-purple-500', activeBg: 'bg-purple-400' },
  { id: 'orange', name: '주황', bg: 'bg-orange-500', activeBg: 'bg-orange-400' },
];

const START_SEQUENCE_LENGTH = 3;
const MAX_SEQUENCE_LENGTH = 12;

export default function ColorSequencePage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [sequence, setSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [showingIndex, setShowingIndex] = useState(-1);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [highestLevel, setHighestLevel] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  // 새 시퀀스 생성
  const generateSequence = useCallback((length: number) => {
    const newSequence: string[] = [];
    for (let i = 0; i < length; i++) {
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      newSequence.push(randomColor.id);
    }
    return newSequence;
  }, []);

  // 시퀀스 보여주기
  const showSequence = useCallback((seq: string[]) => {
    setGameState('showing');
    setShowingIndex(-1);
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < seq.length) {
        setShowingIndex(index);
        setActiveColor(seq[index]);
        
        setTimeout(() => {
          setActiveColor(null);
        }, 400);
        
        index++;
      } else {
        clearInterval(interval);
        setShowingIndex(-1);
        setGameState('input');
      }
    }, 600);
  }, []);

  // 게임 시작
  const startGame = useCallback(() => {
    setLevel(1);
    setLives(3);
    setScore(0);
    setHighestLevel(0);
    
    const newSequence = generateSequence(START_SEQUENCE_LENGTH);
    setSequence(newSequence);
    setUserInput([]);
    
    setTimeout(() => {
      showSequence(newSequence);
    }, 500);
  }, [generateSequence, showSequence]);

  // 다음 레벨
  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setHighestLevel(Math.max(highestLevel, newLevel));
    
    const newLength = Math.min(START_SEQUENCE_LENGTH + newLevel - 1, MAX_SEQUENCE_LENGTH);
    const newSequence = generateSequence(newLength);
    setSequence(newSequence);
    setUserInput([]);
    
    setTimeout(() => {
      showSequence(newSequence);
    }, 1000);
  }, [level, highestLevel, generateSequence, showSequence]);

  // 색상 클릭
  const handleColorClick = useCallback((colorId: string) => {
    if (gameState !== 'input') return;
    
    setActiveColor(colorId);
    setTimeout(() => setActiveColor(null), 200);
    
    const newInput = [...userInput, colorId];
    setUserInput(newInput);
    
    // 현재까지 맞는지 확인
    const currentIndex = newInput.length - 1;
    if (sequence[currentIndex] !== colorId) {
      // 틀림
      setFeedback('wrong');
      setGameState('feedback');
      setLives(prev => prev - 1);
      setScore(prev => Math.max(0, prev - 10));
      
      setTimeout(() => {
        if (lives <= 1) {
          setGameState('finished');
        } else {
          // 같은 레벨 다시
          setUserInput([]);
          setFeedback(null);
          showSequence(sequence);
        }
      }, 1500);
      return;
    }
    
    // 시퀀스 완료 확인
    if (newInput.length === sequence.length) {
      // 성공!
      setFeedback('correct');
      setGameState('feedback');
      setScore(prev => prev + sequence.length * 10 + level * 5);
      
      setTimeout(() => {
        setFeedback(null);
        if (sequence.length >= MAX_SEQUENCE_LENGTH) {
          // 최대 레벨 달성
          setGameState('finished');
        } else {
          nextLevel();
        }
      }, 1000);
    }
  }, [gameState, userInput, sequence, lives, level, showSequence, nextLevel]);

  // 결과 계산
  const getGrade = () => {
    if (highestLevel >= 10) return { grade: 'S', description: '천재적 기억력! 완벽!', color: 'text-yellow-400' };
    if (highestLevel >= 7) return { grade: 'A', description: '훌륭해요! 뛰어난 기억력!', color: 'text-green-400' };
    if (highestLevel >= 5) return { grade: 'B', description: '좋아요! 괜찮은 기억력!', color: 'text-blue-400' };
    if (highestLevel >= 3) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '색상 기억이 어려웠나요?', color: 'text-red-400' };
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
          <h1 className="text-lg font-bold text-white">색상 기억력 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌈</div>
            <h2 className="text-2xl font-bold text-white mb-4">색상 기억력 테스트</h2>
            <p className="text-gray-400 mb-2">
              색상 순서를 기억하고 따라하세요!
            </p>
            <p className="text-gray-500 text-sm">
              사이먼 게임! 순차 기억력을 테스트합니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 색상이 순서대로 깜빡입니다</p>
              <p>2. 순서를 기억하고 같은 순서로 클릭!</p>
              <p>3. 레벨이 올라갈수록 길어집니다</p>
              <p>4. 목숨 3개, 틀리면 하나씩 감소</p>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">색상 미리보기</p>
            <div className="grid grid-cols-3 gap-3 max-w-[200px] mx-auto">
              {COLORS.map((color) => (
                <div
                  key={color.id}
                  className={`aspect-square rounded-xl ${color.bg}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            🌈 테스트 시작!
          </button>
        </div>
      )}

      {/* Game Screen */}
      {(gameState === 'showing' || gameState === 'input' || gameState === 'feedback') && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Status */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < lives ? '' : 'opacity-30'}`}>
                  ❤️
                </span>
              ))}
            </div>
            <div className="text-white font-bold">레벨 {level}</div>
            <div className="text-yellow-400 font-bold">{score}점</div>
          </div>

          {/* Status Message */}
          <div className={`text-center mb-6 py-3 rounded-xl ${
            gameState === 'showing' ? 'bg-blue-500/20 text-blue-400' :
            gameState === 'input' ? 'bg-green-500/20 text-green-400' :
            feedback === 'correct' ? 'bg-green-500/20 text-green-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {gameState === 'showing' ? `👀 순서를 기억하세요! (${showingIndex + 1}/${sequence.length})` :
             gameState === 'input' ? `🎯 따라하세요! (${userInput.length}/${sequence.length})` :
             feedback === 'correct' ? '✓ 정답!' : '✗ 틀렸어요!'}
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-[300px] mx-auto mb-6">
            {COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorClick(color.id)}
                disabled={gameState !== 'input'}
                className={`aspect-square rounded-2xl transition-all duration-150 ${
                  activeColor === color.id 
                    ? `${color.activeBg} scale-110 ring-4 ring-white` 
                    : color.bg
                } ${gameState === 'input' ? 'hover:scale-105 active:scale-95 cursor-pointer' : 'cursor-not-allowed'}`}
              />
            ))}
          </div>

          {/* Input Progress */}
          {gameState === 'input' && (
            <div className="flex justify-center gap-2">
              {sequence.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index < userInput.length ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">게임 종료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최고 레벨</p>
                <p className="text-3xl font-bold text-white">{highestLevel}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최종 점수</p>
                <p className="text-3xl font-bold text-yellow-400">{score}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">최대 시퀀스</p>
                <p className="text-3xl font-bold text-white">{Math.min(START_SEQUENCE_LENGTH + highestLevel - 1, MAX_SEQUENCE_LENGTH)}개</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">남은 목숨</p>
                <p className="text-3xl font-bold text-red-400">{lives}❤️</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`색상 기억력 테스트 결과: ${result.grade}등급!`}
              description={`최고 레벨 ${highestLevel}, 점수 ${score}점! 🌈`}
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
