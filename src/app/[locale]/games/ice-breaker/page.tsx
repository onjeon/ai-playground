'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

interface Question {
  text: string;
  category: string;
  emoji: string;
}

const questions: Question[] = [
  // 가벼운 대화
  { text: '올해 가장 기억에 남는 일은?', category: '가벼운', emoji: '📅' },
  { text: '요즘 빠져있는 취미가 있다면?', category: '가벼운', emoji: '🎨' },
  { text: '최근에 본 영화나 드라마 추천해주세요!', category: '가벼운', emoji: '🎬' },
  { text: '가장 좋아하는 음식은?', category: '가벼운', emoji: '🍽️' },
  { text: '주말에 주로 뭐 하세요?', category: '가벼운', emoji: '🌈' },
  { text: '아침형 인간 vs 저녁형 인간?', category: '가벼운', emoji: '⏰' },
  { text: '가장 최근에 웃었던 일은?', category: '가벼운', emoji: '😄' },
  { text: '지금 핸드폰 배경화면은 뭔가요?', category: '가벼운', emoji: '📱' },
  { text: '가장 좋아하는 계절은?', category: '가벼운', emoji: '🌸' },
  { text: '가장 최근에 들은 노래는?', category: '가벼운', emoji: '🎵' },

  // 재미있는
  { text: '초능력이 생긴다면 어떤 능력?', category: '재미있는', emoji: '✨' },
  { text: '복권에 당첨되면 제일 먼저 할 일은?', category: '재미있는', emoji: '💰' },
  { text: '무인도에 가져갈 3가지는?', category: '재미있는', emoji: '🏝️' },
  { text: '과거로 돌아간다면 언제로?', category: '재미있는', emoji: '⏳' },
  { text: '연예인 중 닮은꼴이 있다면?', category: '재미있는', emoji: '🌟' },
  { text: '다음 생에 태어난다면 어떤 동물?', category: '재미있는', emoji: '🦁' },
  { text: '영화 속 살고 싶은 세계관은?', category: '재미있는', emoji: '🎥' },
  { text: '마지막 식사로 먹고 싶은 음식은?', category: '재미있는', emoji: '🍱' },
  { text: '유명해진다면 어떤 분야로?', category: '재미있는', emoji: '🏆' },
  { text: '100년 후에도 살아있다면?', category: '재미있는', emoji: '🚀' },

  // 친해지기
  { text: '첫인상과 실제 성격이 다르다고 느낀 적?', category: '친해지기', emoji: '🎭' },
  { text: '가장 자신 있는 장점은?', category: '친해지기', emoji: '💪' },
  { text: '스트레스 받을 때 푸는 방법은?', category: '친해지기', emoji: '🧘' },
  { text: '인생에서 가장 중요하게 생각하는 가치는?', category: '친해지기', emoji: '💎' },
  { text: '가장 기억에 남는 여행지는?', category: '친해지기', emoji: '✈️' },
  { text: '10년 후 자신의 모습은?', category: '친해지기', emoji: '🔮' },
  { text: '가장 감사한 사람은?', category: '친해지기', emoji: '🙏' },
  { text: '최근 가장 열심히 하고 있는 일은?', category: '친해지기', emoji: '🔥' },
  { text: '어릴 때 꿈은 뭐였어요?', category: '친해지기', emoji: '👶' },
  { text: '좌우명이나 자주 하는 말은?', category: '친해지기', emoji: '💬' },

  // 심화
  { text: '후회하는 선택이 있다면?', category: '심화', emoji: '😔' },
  { text: '가장 두려운 것은?', category: '심화', emoji: '😰' },
  { text: '인생의 전환점이 된 순간은?', category: '심화', emoji: '🔄' },
  { text: '자신만의 원칙이 있다면?', category: '심화', emoji: '📋' },
  { text: '가장 행복했던 순간은?', category: '심화', emoji: '😊' },
  { text: '죽기 전에 꼭 하고 싶은 것은?', category: '심화', emoji: '📝' },
  { text: '나를 가장 잘 아는 사람은?', category: '심화', emoji: '❤️' },
  { text: '가장 힘들었던 시기는?', category: '심화', emoji: '💔' },
  { text: '성공의 기준은 뭐라고 생각해요?', category: '심화', emoji: '🎯' },
  { text: '용서가 어려웠던 경험이 있다면?', category: '심화', emoji: '🕊️' },

  // 도전
  { text: '즉석에서 노래 한 소절 불러주세요!', category: '도전', emoji: '🎤' },
  { text: '지금 기분을 몸짓으로 표현해주세요!', category: '도전', emoji: '💃' },
  { text: '오른쪽 사람에게 칭찬 한마디!', category: '도전', emoji: '👏' },
  { text: '가장 자신있는 성대모사를 해주세요!', category: '도전', emoji: '🎪' },
  { text: '30초 안에 자기소개 해주세요!', category: '도전', emoji: '⏱️' },
  { text: '가장 웃긴 이모지 표정 따라하기!', category: '도전', emoji: '😜' },
  { text: '오늘 하루를 3단어로 표현하면?', category: '도전', emoji: '📖' },
  { text: '왼쪽 사람의 장점 3가지를 말해주세요!', category: '도전', emoji: '🌟' },
  { text: '즉석에서 시 한 줄 지어보세요!', category: '도전', emoji: '✍️' },
  { text: '가장 최근 사진 보여주세요!', category: '도전', emoji: '📸' },
];

type Category = '전체' | '가벼운' | '재미있는' | '친해지기' | '심화' | '도전';

const categories: Category[] = ['전체', '가벼운', '재미있는', '친해지기', '심화', '도전'];

const categoryColors: Record<Category, string> = {
  '전체': 'from-gray-600 to-gray-700',
  '가벼운': 'from-green-500 to-emerald-600',
  '재미있는': 'from-yellow-500 to-orange-500',
  '친해지기': 'from-blue-500 to-indigo-600',
  '심화': 'from-purple-500 to-violet-600',
  '도전': 'from-red-500 to-rose-600',
};

const categoryDescriptions: Record<Category, string> = {
  '전체': '모든 질문',
  '가벼운': '부담 없는 가벼운 대화',
  '재미있는': '웃음 가득한 재미있는 질문',
  '친해지기': '서로를 알아가는 질문',
  '심화': '깊이 있는 대화',
  '도전': '즉석 미션!',
};

export default function IceBreakerPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());
  const [questionCount, setQuestionCount] = useState(0);

  const getFilteredQuestions = useCallback(() => {
    return selectedCategory === '전체'
      ? questions
      : questions.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const spinRoulette = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setQuestionCount(prev => prev + 1);

    const filtered = getFilteredQuestions();
    let availableIndices = filtered
      .map((_, idx) => idx)
      .filter(idx => !usedQuestions.has(questions.indexOf(filtered[idx])));

    if (availableIndices.length === 0) {
      setUsedQuestions(new Set());
      availableIndices = filtered.map((_, idx) => idx);
    }

    // Spin animation with multiple random questions
    let spinCount = 0;
    const maxSpins = 15;
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * filtered.length);
      setCurrentQuestion(filtered[randomIdx]);
      spinCount++;

      if (spinCount >= maxSpins) {
        clearInterval(interval);
        // Final selection
        const finalIdx = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        const finalQuestion = filtered[finalIdx];
        setCurrentQuestion(finalQuestion);
        setUsedQuestions(prev => new Set([...Array.from(prev), questions.indexOf(finalQuestion)]));
        setIsSpinning(false);
      }
    }, 100);
  }, [isSpinning, getFilteredQuestions, usedQuestions]);

  const changeCategory = (category: Category) => {
    setSelectedCategory(category);
    setUsedQuestions(new Set());
    setCurrentQuestion(null);
    setQuestionCount(0);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <div className="text-7xl mb-4">🎰</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">아이스브레이킹 룰렛</h2>
        <p className="text-gray-600 dark:text-gray-400">
          어색한 분위기를 깨는 마법의 질문!
        </p>
      </div>

      {/* Category Selection */}
      <div>
        <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-center">카테고리 선택</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => changeCategory(category)}
              className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${categoryColors[category]} text-white`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="text-gray-500 text-center text-sm">
          {categoryDescriptions[selectedCategory]}
        </p>
      </div>

      {/* Question Display */}
      <div className={`bg-gradient-to-br ${currentQuestion ? categoryColors[currentQuestion.category as Category] : 'from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800'} rounded-2xl p-8 transition-all duration-300 min-h-[200px] flex flex-col items-center justify-center ${isSpinning ? 'animate-pulse' : ''}`}>
        {currentQuestion ? (
          <>
            <div className="text-6xl mb-4">{currentQuestion.emoji}</div>
            <p className="text-white text-xl font-medium text-center mb-4">
              {currentQuestion.text}
            </p>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {currentQuestion.category}
            </span>
          </>
        ) : (
          <>
            <div className="text-6xl mb-4 opacity-50">🎲</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              버튼을 눌러 질문을 뽑아보세요!
            </p>
          </>
        )}
      </div>

      {/* Spin Button */}
      <button
        onClick={spinRoulette}
        disabled={isSpinning}
        className={`w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-bold rounded-xl transition-all ${
          isSpinning
            ? 'opacity-50 cursor-not-allowed animate-bounce'
            : 'hover:scale-[1.02]'
        }`}
      >
        {isSpinning ? '🎰 돌아가는 중...' : currentQuestion ? '🎲 다음 질문!' : '🎲 질문 뽑기!'}
      </button>

      {/* Stats */}
      {questionCount > 0 && (
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{questionCount}</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">뽑은 질문</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">
              {getFilteredQuestions().length - usedQuestions.size}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">남은 질문</div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-3">💡 활용 팁</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
          <li>• 처음엔 &apos;가벼운&apos; 카테고리로 시작하세요!</li>
          <li>• 분위기가 풀리면 &apos;친해지기&apos;나 &apos;심화&apos;로!</li>
          <li>• &apos;도전&apos; 카테고리는 즉석 미션이에요!</li>
          <li>• 모든 사람이 돌아가며 답하면 더 재밌어요!</li>
        </ul>
      </div>
    </div>
  );
}
