'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

interface Question {
  text: string;
  category: string;
  forWhom: 'A' | 'B' | 'both';
}

const questions: Question[] = [
  // 기본 정보
  { text: '상대방의 생일은?', category: '기본', forWhom: 'both' },
  { text: '상대방이 가장 좋아하는 음식은?', category: '기본', forWhom: 'both' },
  { text: '상대방이 가장 싫어하는 음식은?', category: '기본', forWhom: 'both' },
  { text: '상대방의 발 사이즈는?', category: '기본', forWhom: 'both' },
  { text: '상대방이 가장 좋아하는 색깔은?', category: '기본', forWhom: 'both' },
  { text: '상대방의 MBTI는?', category: '기본', forWhom: 'both' },
  { text: '상대방의 혈액형은?', category: '기본', forWhom: 'both' },
  { text: '상대방이 자주 쓰는 말버릇은?', category: '기본', forWhom: 'both' },

  // 취향
  { text: '상대방이 가장 좋아하는 영화 장르는?', category: '취향', forWhom: 'both' },
  { text: '상대방이 가장 좋아하는 노래/가수는?', category: '취향', forWhom: 'both' },
  { text: '상대방이 주로 보는 유튜브 채널은?', category: '취향', forWhom: 'both' },
  { text: '상대방의 인생 드라마/영화는?', category: '취향', forWhom: 'both' },
  { text: '상대방이 선호하는 데이트 장소는?', category: '취향', forWhom: 'both' },
  { text: '상대방이 스트레스 받을 때 하는 행동은?', category: '취향', forWhom: 'both' },
  { text: '상대방이 가장 좋아하는 계절은?', category: '취향', forWhom: 'both' },
  { text: '상대방이 주말에 하고 싶어하는 것은?', category: '취향', forWhom: 'both' },

  // 연애
  { text: '처음 만난 날짜와 장소는?', category: '연애', forWhom: 'both' },
  { text: '상대방이 먼저 고백했나? 아니면 내가?', category: '연애', forWhom: 'both' },
  { text: '첫 키스는 어디서 했나요?', category: '연애', forWhom: 'both' },
  { text: '상대방에게 반한 포인트는?', category: '연애', forWhom: 'both' },
  { text: '가장 기억에 남는 데이트는?', category: '연애', forWhom: 'both' },
  { text: '상대방의 첫인상은?', category: '연애', forWhom: 'both' },
  { text: '우리의 기념일은 총 몇 개?', category: '연애', forWhom: 'both' },
  { text: '상대방이 주로 사용하는 애칭은?', category: '연애', forWhom: 'both' },

  // 심화
  { text: '상대방이 요즘 가장 고민하는 것은?', category: '심화', forWhom: 'both' },
  { text: '상대방의 버킷리스트 1위는?', category: '심화', forWhom: 'both' },
  { text: '상대방이 가장 소중히 여기는 것은?', category: '심화', forWhom: 'both' },
  { text: '상대방의 어릴 적 꿈은?', category: '심화', forWhom: 'both' },
  { text: '상대방이 가장 무서워하는 것은?', category: '심화', forWhom: 'both' },
  { text: '상대방이 가장 행복해하는 순간은?', category: '심화', forWhom: 'both' },
  { text: '상대방이 바꾸고 싶어하는 습관은?', category: '심화', forWhom: 'both' },
  { text: '상대방의 5년 후 목표는?', category: '심화', forWhom: 'both' },

  // 빈칸 채우기
  { text: '상대방은 ___ 할 때 가장 매력적이다', category: '빈칸', forWhom: 'both' },
  { text: '상대방의 최애 간식은 ___이다', category: '빈칸', forWhom: 'both' },
  { text: '상대방은 화가 나면 ___한다', category: '빈칸', forWhom: 'both' },
  { text: '상대방이 몰래 좋아하는 것은 ___이다', category: '빈칸', forWhom: 'both' },
  { text: '상대방의 잠버릇은 ___이다', category: '빈칸', forWhom: 'both' },
  { text: '상대방은 ___를 정말 못한다', category: '빈칸', forWhom: 'both' },
  { text: '상대방은 아침에 일어나면 제일 먼저 ___한다', category: '빈칸', forWhom: 'both' },
  { text: '상대방이 요즘 가장 갖고 싶은 것은 ___이다', category: '빈칸', forWhom: 'both' },
];

type Category = '전체' | '기본' | '취향' | '연애' | '심화' | '빈칸';

const categories: Category[] = ['전체', '기본', '취향', '연애', '심화', '빈칸'];

const categoryColors: Record<Category, string> = {
  '전체': 'from-pink-500 to-rose-500',
  '기본': 'from-blue-500 to-cyan-500',
  '취향': 'from-purple-500 to-violet-500',
  '연애': 'from-pink-500 to-rose-500',
  '심화': 'from-indigo-500 to-purple-500',
  '빈칸': 'from-orange-500 to-amber-500',
};

const categoryEmojis: Record<Category, string> = {
  '전체': '💑',
  '기본': '📋',
  '취향': '🎯',
  '연애': '💕',
  '심화': '💎',
  '빈칸': '✏️',
};

export default function CoupleQuizPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<'A' | 'B'>('A');
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const getFilteredQuestions = useCallback(() => {
    return selectedCategory === '전체'
      ? questions
      : questions.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const getNextQuestion = useCallback(() => {
    const filtered = getFilteredQuestions();
    const availableIndices = filtered
      .map((_, idx) => idx)
      .filter(idx => !usedQuestions.has(questions.indexOf(filtered[idx])));

    if (availableIndices.length === 0) {
      setUsedQuestions(new Set());
      const randomIdx = Math.floor(Math.random() * filtered.length);
      return filtered[randomIdx];
    }

    const randomIdx = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const question = filtered[randomIdx];
    setUsedQuestions(prev => new Set([...Array.from(prev), questions.indexOf(question)]));
    return question;
  }, [getFilteredQuestions, usedQuestions]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestion(getNextQuestion());
    setCurrentPlayer('A');
    setShowAnswer(false);
    setQuestionCount(1);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  const handleScore = (correct: boolean) => {
    if (correct) {
      setScores(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
      }));
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    setCurrentQuestion(getNextQuestion());
    setCurrentPlayer(prev => prev === 'A' ? 'B' : 'A');
    setShowAnswer(false);
    setQuestionCount(prev => prev + 1);
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentQuestion(null);
    setUsedQuestions(new Set());
    setScores({ A: 0, B: 0 });
    setShowAnswer(false);
    setQuestionCount(0);
  };

  const changeCategory = (category: Category) => {
    setSelectedCategory(category);
    setUsedQuestions(new Set());
  };

  return (
    <div className="space-y-6">
      {!gameStarted ? (
        <>
          {/* Intro */}
          <div className="text-center">
            <div className="text-7xl mb-4">💑</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">커플 궁합 테스트</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              상대방에 대해 얼마나 알고 있나요?
            </p>
            <p className="text-gray-500 text-sm">
              서로 번갈아가며 질문에 답하고 점수를 매겨보세요!
            </p>
          </div>

          {/* Category Selection */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-center">카테고리 선택</h3>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => changeCategory(category)}
                  className={`px-3 py-3 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${categoryColors[category]} text-white`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-1">{categoryEmojis[category]}</span>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">📖 게임 방법</h3>
            <ol className="space-y-2 text-gray-600 dark:text-gray-400 text-sm list-decimal list-inside">
              <li>두 사람이 번갈아가며 문제를 풉니다</li>
              <li>질문이 나오면 상대방에 대해 답해보세요</li>
              <li>&quot;정답 확인&quot;을 눌러 상대방이 맞는지 확인!</li>
              <li>맞으면 1점, 틀리면 0점!</li>
              <li>누가 상대방을 더 잘 아는지 겨뤄보세요 💕</li>
            </ol>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-bold rounded-xl transition-colors"
          >
            💕 게임 시작!
          </button>
        </>
      ) : (
        <>
          {/* Score Board */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl text-center ${currentPlayer === 'A' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-400' : 'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700'}`}>
              <div className="text-2xl mb-1">👤</div>
              <div className="text-gray-900 dark:text-white font-semibold">Player A</div>
              <div className="text-3xl font-bold text-blue-500">{scores.A}</div>
            </div>
            <div className={`p-4 rounded-xl text-center ${currentPlayer === 'B' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-400' : 'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700'}`}>
              <div className="text-2xl mb-1">👤</div>
              <div className="text-gray-900 dark:text-white font-semibold">Player B</div>
              <div className="text-3xl font-bold text-pink-500">{scores.B}</div>
            </div>
          </div>

          {/* Current Turn */}
          <div className="text-center">
            <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${
              currentPlayer === 'A' ? 'bg-blue-500' : 'bg-pink-500'
            }`}>
              🎯 Player {currentPlayer}의 차례!
            </span>
            <div className="text-gray-500 text-sm mt-2">
              {questionCount}번째 질문
            </div>
          </div>

          {/* Question Card */}
          {currentQuestion && (
            <div className={`bg-gradient-to-br ${categoryColors[currentQuestion.category as Category]} rounded-2xl p-6`}>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
                  {categoryEmojis[currentQuestion.category as Category]} {currentQuestion.category}
                </span>
                <p className="text-white text-xl font-medium">
                  {currentQuestion.text}
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {!showAnswer ? (
            <button
              onClick={revealAnswer}
              className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold rounded-xl transition-colors"
            >
              🔍 정답 확인하기
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">상대방의 대답이 맞았나요?</p>
                <p className="text-gray-900 dark:text-white">
                  Player {currentPlayer === 'A' ? 'B' : 'A'}가 확인해주세요!
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleScore(true)}
                  className="flex-1 py-4 bg-green-500 text-white text-lg font-bold rounded-xl hover:bg-green-600 transition-colors"
                >
                  ⭕ 정답!
                </button>
                <button
                  onClick={() => handleScore(false)}
                  className="flex-1 py-4 bg-red-500 text-white text-lg font-bold rounded-xl hover:bg-red-600 transition-colors"
                >
                  ❌ 오답!
                </button>
              </div>
            </div>
          )}

          {/* Reset Button */}
          <button
            onClick={resetGame}
            className="w-full py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            🔄 처음부터
          </button>
        </>
      )}
    </div>
  );
}
