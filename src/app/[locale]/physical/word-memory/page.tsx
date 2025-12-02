'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'memorize' | 'input' | 'result' | 'finished';

const WORD_LISTS = [
  // 쉬운 단어들
  ['사과', '바나나', '포도', '딸기', '수박', '참외', '복숭아', '배', '귤', '감'],
  ['강아지', '고양이', '토끼', '햄스터', '거북이', '앵무새', '금붕어', '고슴도치', '다람쥐', '병아리'],
  ['자동차', '비행기', '기차', '배', '버스', '자전거', '오토바이', '트럭', '택시', '지하철'],
  ['피아노', '기타', '드럼', '바이올린', '플루트', '트럼펫', '첼로', '하프', '색소폰', '우쿨렐레'],
  ['빨강', '파랑', '노랑', '초록', '보라', '주황', '분홍', '하늘', '갈색', '검정'],
];

const LEVELS = [
  { words: 3, time: 5, name: '레벨 1' },
  { words: 4, time: 6, name: '레벨 2' },
  { words: 5, time: 7, name: '레벨 3' },
  { words: 6, time: 8, name: '레벨 4' },
  { words: 7, time: 10, name: '레벨 5' },
];

export default function WordMemoryPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [results, setResults] = useState<{ level: number; correct: number; total: number }[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 단어 선택
  const selectWords = useCallback((count: number) => {
    const listIndex = Math.floor(Math.random() * WORD_LISTS.length);
    const words = [...WORD_LISTS[listIndex]];
    // 셔플
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words.slice(0, count);
  }, []);

  // 레벨 시작
  const startLevel = useCallback((levelIndex: number) => {
    const level = LEVELS[levelIndex];
    const words = selectWords(level.words);
    setCurrentWords(words);
    setUserInputs([]);
    setCurrentInputIndex(0);
    setInputValue('');
    setTimeLeft(level.time);
    setShowAnswer(false);
    setGameState('memorize');
  }, [selectWords]);

  // 게임 시작
  const startGame = useCallback(() => {
    setCurrentLevel(0);
    setResults([]);
    startLevel(0);
  }, [startLevel]);

  // 타이머
  useEffect(() => {
    if (gameState !== 'memorize') return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('input');
          setTimeout(() => inputRef.current?.focus(), 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [gameState]);

  // 입력 제출
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newInputs = [...userInputs, inputValue.trim()];
    setUserInputs(newInputs);
    setInputValue('');
    
    if (newInputs.length >= currentWords.length) {
      // 채점
      let correct = 0;
      newInputs.forEach((input) => {
        if (currentWords.some(word => word === input)) {
          correct++;
        }
      });
      
      setResults(prev => [...prev, {
        level: currentLevel + 1,
        correct,
        total: currentWords.length,
      }]);
      
      setGameState('result');
    } else {
      setCurrentInputIndex(prev => prev + 1);
    }
  }, [inputValue, userInputs, currentWords, currentLevel]);

  // 다음 레벨 또는 종료
  const handleNext = useCallback(() => {
    if (currentLevel + 1 >= LEVELS.length) {
      setGameState('finished');
    } else {
      setCurrentLevel(prev => prev + 1);
      startLevel(currentLevel + 1);
    }
  }, [currentLevel, startLevel]);

  // 결과 계산
  const totalCorrect = results.reduce((sum, r) => sum + r.correct, 0);
  const totalWords = results.reduce((sum, r) => sum + r.total, 0);
  const accuracy = totalWords > 0 ? Math.round((totalCorrect / totalWords) * 100) : 0;
  const completedLevels = results.filter(r => r.correct === r.total).length;

  const getGrade = () => {
    if (accuracy >= 90 && completedLevels >= 4) return { grade: 'S', description: '천재적 기억력! 완벽!', color: 'text-yellow-400' };
    if (accuracy >= 80 && completedLevels >= 3) return { grade: 'A', description: '훌륭해요! 뛰어난 기억력!', color: 'text-green-400' };
    if (accuracy >= 70) return { grade: 'B', description: '좋아요! 괜찮은 기억력!', color: 'text-blue-400' };
    if (accuracy >= 50) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '단어 기억이 어려웠나요?', color: 'text-red-400' };
  };

  const result = getGrade();

  // 현재 라운드 결과에서 맞은 단어 확인
  const getWordStatus = (word: string) => {
    return userInputs.includes(word);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 피지컬 테스트
          </Link>
          <h1 className="text-lg font-bold text-white">단어 기억력 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-white mb-4">단어 기억력 테스트</h2>
            <p className="text-gray-400 mb-2">
              단어를 외우고 입력하세요!
            </p>
            <p className="text-gray-500 text-sm">
              언어 기억력과 회상 능력을 테스트합니다
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 화면에 단어들이 표시됩니다</p>
              <p>2. 제한 시간 내에 모두 외우세요</p>
              <p>3. 시간이 지나면 순서 상관없이 입력!</p>
              <p>4. 5레벨까지 진행됩니다</p>
            </div>
          </div>

          {/* Level Preview */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">레벨 구성</p>
            <div className="space-y-2">
              {LEVELS.map((level, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="text-gray-400">{level.name}</span>
                  <span className="text-white">{level.words}단어</span>
                  <span className="text-gray-500">{level.time}초</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            📝 테스트 시작!
          </button>
        </div>
      )}

      {/* Memorize */}
      {gameState === 'memorize' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-gray-400">{LEVELS[currentLevel].name}</span>
            <div className="text-5xl font-bold text-white mt-2">{timeLeft}</div>
            <p className="text-gray-500 text-sm">초 남음</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-6">
            <p className="text-gray-400 text-sm mb-6 text-center">이 단어들을 외우세요!</p>
            <div className="flex flex-wrap justify-center gap-3">
              {currentWords.map((word, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-400 px-6 py-3 rounded-xl text-xl font-bold"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
              style={{ width: `${(timeLeft / LEVELS[currentLevel].time) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Input */}
      {gameState === 'input' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-gray-400">{LEVELS[currentLevel].name}</span>
            <p className="text-white text-xl mt-2">기억나는 단어를 입력하세요!</p>
          </div>

          {/* Progress */}
          <div className="flex justify-center gap-2 mb-6">
            {currentWords.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < userInputs.length ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-500'
                }`}
              >
                {index < userInputs.length ? '✓' : index + 1}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`${currentInputIndex + 1}번째 단어`}
                className="flex-1 bg-gray-800 text-white px-6 py-4 rounded-xl text-xl text-center"
                autoFocus
              />
              <button
                type="submit"
                className="px-8 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-colors"
              >
                입력
              </button>
            </div>
          </form>

          {/* Already Entered */}
          {userInputs.length > 0 && (
            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-2">입력한 단어</p>
              <div className="flex flex-wrap gap-2">
                {userInputs.map((word, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Result */}
      {gameState === 'result' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 mb-6 text-center">
            <p className="text-gray-400 mb-2">{LEVELS[currentLevel].name} 결과</p>
            <div className="text-6xl font-bold text-white mb-4">
              {results[results.length - 1]?.correct} / {results[results.length - 1]?.total}
            </div>
            <p className={`text-xl ${results[results.length - 1]?.correct === results[results.length - 1]?.total ? 'text-green-400' : 'text-orange-400'}`}>
              {results[results.length - 1]?.correct === results[results.length - 1]?.total ? '완벽해요!' : '아쉬워요!'}
            </p>
          </div>

          {/* Show Answer */}
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full mb-4 py-3 bg-gray-800 text-gray-400 rounded-xl"
          >
            {showAnswer ? '정답 숨기기 ▲' : '정답 보기 ▼'}
          </button>

          {showAnswer && (
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {currentWords.map((word, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg font-bold ${
                      getWordStatus(word) ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {word} {getWordStatus(word) ? '✓' : '✗'}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleNext}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            {currentLevel + 1 >= LEVELS.length ? '최종 결과 보기' : '다음 레벨 →'}
          </button>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">정확도</p>
                <p className="text-3xl font-bold text-white">{accuracy}%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">총점</p>
                <p className="text-3xl font-bold text-white">{totalCorrect}/{totalWords}</p>
              </div>
            </div>

            {/* Level Results */}
            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <p className="text-gray-400 text-sm mb-3 text-center">레벨별 결과</p>
              <div className="space-y-2">
                {results.map((r, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-2">
                    <span className="text-gray-400">레벨 {r.level}</span>
                    <span className={r.correct === r.total ? 'text-green-400' : 'text-orange-400'}>
                      {r.correct} / {r.total}
                    </span>
                    <span className="text-gray-500">
                      {r.correct === r.total ? '✓' : '△'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`단어 기억력 테스트 결과: ${result.grade}등급!`}
              description={`정확도 ${accuracy}%, ${totalCorrect}/${totalWords} 정답! 📝`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
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
