'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'playing' | 'finished';

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "How vexingly quick daft zebras jump!",
  "The five boxing wizards jump quickly.",
  "Sphinx of black quartz, judge my vow.",
  "Two driven jocks help fax my big quiz.",
  "The jay, pig, fox, zebra and my wolves quack!",
  "Crazy Frederick bought many very exquisite opal jewels.",
  "We promptly judged antique ivory buckles for the next prize.",
  "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.",
];

const koreanTexts = [
  "다람쥐 헌 쳇바퀴에 타고파",
  "정 , , , 참 쉬운 문장",
  "키스의 고유 조건은 입술끼리 만나야 한다",
  "빠르고 정확한 타이핑 연습을 해봐요",
  "오늘 하루도 열심히 살아가는 당신을 응원합니다",
  "프로그래밍은 창의력과 논리력이 필요한 분야입니다",
  "커피 한 잔의 여유가 일상을 풍요롭게 만들어요",
  "좋은 아침입니다 오늘도 좋은 하루 보내세요",
  "연습이 완벽을 만든다는 말은 진리입니다",
  "타이핑 속도를 높이려면 꾸준한 연습이 필요해요",
];

function getGrade(wpm: number, accuracy: number): { grade: string; emoji: string; description: string; color: string } {
  const score = wpm * (accuracy / 100);
  
  if (score >= 80) {
    return { grade: '전문가', emoji: '🏆', description: '프로 타이피스트 수준! 놀라운 속도예요!', color: 'text-yellow-400' };
  } else if (score >= 60) {
    return { grade: '고급', emoji: '⚡', description: '매우 빠른 타이핑 실력이에요!', color: 'text-orange-400' };
  } else if (score >= 40) {
    return { grade: '중급', emoji: '⭐', description: '평균 이상의 타이핑 속도!', color: 'text-green-400' };
  } else if (score >= 25) {
    return { grade: '초급', emoji: '👍', description: '조금 더 연습하면 빨라질 거예요!', color: 'text-blue-400' };
  } else {
    return { grade: '입문', emoji: '🌱', description: '꾸준히 연습하면 실력이 늘어요!', color: 'text-gray-400' };
  }
}

export default function TypingSpeedPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [targetText, setTargetText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [totalTyped, setTotalTyped] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const testDuration = 60; // seconds

  const getRandomText = useCallback((lang: 'en' | 'ko') => {
    const texts = lang === 'en' ? sampleTexts : koreanTexts;
    return texts[Math.floor(Math.random() * texts.length)];
  }, []);

  const startGame = useCallback(() => {
    const text = getRandomText(language);
    setTargetText(text);
    setTypedText('');
    setGameState('playing');
    setTimeLeft(testDuration);
    setStartTime(Date.now());
    setTotalTyped(0);
    setCorrectChars(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [language, getRandomText]);

  const resetGame = useCallback(() => {
    setGameState('idle');
    setTargetText('');
    setTypedText('');
    setTimeLeft(testDuration);
    setStartTime(null);
    setWpm(0);
    setCpm(0);
    setAccuracy(100);
    setTotalTyped(0);
    setCorrectChars(0);
  }, []);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameState !== 'playing') return;
    
    const value = e.target.value;
    setTypedText(value);
    setTotalTyped(prev => prev + 1);

    // Check if current character is correct
    if (value.length > 0) {
      const lastChar = value[value.length - 1];
      const targetChar = targetText[value.length - 1];
      if (lastChar === targetChar) {
        setCorrectChars(prev => prev + 1);
      }
    }

    // Check if completed current text
    if (value === targetText) {
      const newText = getRandomText(language);
      setTargetText(newText);
      setTypedText('');
    }
  }, [gameState, targetText, language, getRandomText]);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  // Calculate WPM and accuracy
  useEffect(() => {
    if (gameState !== 'playing' || !startTime) return;

    const elapsedMinutes = (Date.now() - startTime) / 60000;
    if (elapsedMinutes > 0) {
      const words = correctChars / 5; // Standard: 5 chars = 1 word
      setWpm(Math.round(words / elapsedMinutes));
      setCpm(Math.round(correctChars / elapsedMinutes));
      setAccuracy(totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100);
    }
  }, [gameState, startTime, correctChars, totalTyped]);

  // Final calculation when finished
  useEffect(() => {
    if (gameState === 'finished' && startTime) {
      const elapsedMinutes = testDuration / 60;
      const words = correctChars / 5;
      setWpm(Math.round(words / elapsedMinutes));
      setCpm(Math.round(correctChars / elapsedMinutes));
      setAccuracy(totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100);
    }
  }, [gameState, startTime, correctChars, totalTyped]);

  const grade = getGrade(wpm, accuracy);

  const renderTargetText = () => {
    return targetText.split('').map((char, i) => {
      let className = 'text-gray-500';
      if (i < typedText.length) {
        className = typedText[i] === char ? 'text-green-400' : 'text-red-400 bg-red-400/20';
      } else if (i === typedText.length) {
        className = 'text-white bg-white/20 animate-pulse';
      }
      return (
        <span key={i} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 목록으로
          </Link>
          <h1 className="text-lg font-bold text-white">타이핑 속도 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Idle Screen */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">⌨️</div>
            <h2 className="text-2xl font-bold text-white mb-4">타이핑 속도 테스트</h2>
            <p className="text-gray-400 mb-6">
              {testDuration}초 동안 얼마나 빠르게 타이핑할 수 있는지 측정해보세요!<br/>
              화면에 표시된 문장을 정확하게 입력하세요.
            </p>
            
            {/* Language Selection */}
            <div className="flex justify-center gap-3 mb-8">
              <button
                onClick={() => setLanguage('en')}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => setLanguage('ko')}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  language === 'ko' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                🇰🇷 한글
              </button>
            </div>

            <button
              onClick={startGame}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
            >
              시작하기
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-2">📊 WPM이란?</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• WPM = Words Per Minute (분당 단어 수)</li>
              <li>• 평균 타이핑 속도: 40-50 WPM</li>
              <li>• 전문 타이피스트: 80+ WPM</li>
              <li>• 5글자 = 1단어로 계산</li>
            </ul>
          </div>
        </div>
      )}

      {/* Playing Screen */}
      {gameState === 'playing' && (
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Stats Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <div className="bg-gray-800 rounded-lg px-4 py-2">
                <span className="text-gray-400 text-xs">WPM</span>
                <p className="text-2xl font-bold text-white">{wpm}</p>
              </div>
              <div className="bg-gray-800 rounded-lg px-4 py-2">
                <span className="text-gray-400 text-xs">정확도</span>
                <p className="text-2xl font-bold text-green-400">{accuracy}%</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg px-6 py-2">
              <span className="text-gray-400 text-xs">남은 시간</span>
              <p className={`text-3xl font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
                {timeLeft}s
              </p>
            </div>
          </div>

          {/* Target Text */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-4">
            <p className="text-xl md:text-2xl leading-relaxed font-mono tracking-wide">
              {renderTargetText()}
            </p>
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={typedText}
            onChange={handleInput}
            className="w-full bg-gray-800 border-2 border-indigo-500 rounded-xl px-6 py-4 text-xl text-white font-mono focus:outline-none focus:border-indigo-400"
            placeholder="여기에 입력하세요..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full transition-all duration-1000"
              style={{ width: `${((testDuration - timeLeft) / testDuration) * 100}%` }}
            />
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
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">WPM</p>
                <p className="text-3xl font-bold text-white">{wpm}</p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">CPM</p>
                <p className="text-3xl font-bold text-blue-400">{cpm}</p>
              </div>
              <div className="bg-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-sm">정확도</p>
                <p className="text-3xl font-bold text-green-400">{accuracy}%</p>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-400 text-sm mb-2">📊 타이핑 속도 비교</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-yellow-400">🏆 전문가</span>
                  <span className="text-gray-400">80+ WPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-400">⚡ 고급</span>
                  <span className="text-gray-400">60-80 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">⭐ 중급</span>
                  <span className="text-gray-400">40-60 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">👍 초급</span>
                  <span className="text-gray-400">25-40 WPM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`타이핑 속도 테스트 결과: ${wpm} WPM (${grade.grade})`}
              description={`나의 타이핑 속도는 ${wpm} WPM! 정확도 ${accuracy}% ${grade.emoji} ${grade.description}`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
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
