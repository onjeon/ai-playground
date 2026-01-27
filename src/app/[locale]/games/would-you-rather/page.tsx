'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

interface Question {
  optionA: string;
  optionB: string;
  category: string;
}

const questions: Question[] = [
  // 일상
  { optionA: '평생 여름만 있는 곳에서 살기', optionB: '평생 겨울만 있는 곳에서 살기', category: '일상' },
  { optionA: '맛없는 음식만 먹고 건강하게 살기', optionB: '맛있는 음식만 먹고 수명 10년 줄기', category: '일상' },
  { optionA: '평생 휴대폰 없이 살기', optionB: '평생 인터넷 없이 살기', category: '일상' },
  { optionA: '매일 아침 5시에 일어나기', optionB: '매일 새벽 2시에 자기', category: '일상' },
  { optionA: '평생 대중교통만 이용하기', optionB: '평생 걸어다니기만 하기', category: '일상' },
  { optionA: '100년 전으로 가서 살기', optionB: '100년 후로 가서 살기', category: '일상' },
  { optionA: '투명인간 되기', optionB: '하늘을 날 수 있게 되기', category: '일상' },
  { optionA: '생각을 읽을 수 있는 능력', optionB: '미래를 볼 수 있는 능력', category: '일상' },

  // 연애
  { optionA: '첫사랑과 재회하기', optionB: '완벽한 새로운 인연 만나기', category: '연애' },
  { optionA: '연인이 너무 질투하는 것', optionB: '연인이 전혀 관심 없는 것', category: '연애' },
  { optionA: '매일 싸우지만 화해 후 더 좋아지기', optionB: '싸우지 않지만 무덤덤한 관계', category: '연애' },
  { optionA: '연인의 전 애인을 아는 것', optionB: '모르고 사는 것', category: '연애' },
  { optionA: '연인이 나보다 훨씬 인기 많은 것', optionB: '내가 연인보다 훨씬 인기 많은 것', category: '연애' },
  { optionA: '연애 초반의 설렘이 영원히 지속', optionB: '오래된 연인의 편안함이 바로 시작', category: '연애' },
  { optionA: '장거리 연애 3년', optionB: '동거 후 헤어짐', category: '연애' },
  { optionA: '연인이 모든 것을 솔직하게 말하기', optionB: '가끔 선의의 거짓말 하기', category: '연애' },

  // 직장/돈
  { optionA: '연봉 3배, 하지만 주 6일 근무', optionB: '현재 연봉, 주 4일 근무', category: '직장' },
  { optionA: '상사가 무능하지만 친절한 것', optionB: '상사가 유능하지만 까칠한 것', category: '직장' },
  { optionA: '평생 좋아하는 일로 적게 벌기', optionB: '싫어하는 일로 많이 벌기', category: '직장' },
  { optionA: '회사에서 인정받지만 동료들이 싫어함', optionB: '동료들이 좋아하지만 인정 못 받음', category: '직장' },
  { optionA: '집에서 일하지만 24시간 대기', optionB: '출퇴근하지만 칼퇴 보장', category: '직장' },
  { optionA: '월급 500만원 평생 직장', optionB: '불안정하지만 억대 연봉 가능성', category: '직장' },
  { optionA: '10억 당첨되고 친구 잃기', optionB: '가난하지만 친구들과 함께하기', category: '직장' },
  { optionA: '창업해서 망하기', optionB: '평생 직장인으로 살기', category: '직장' },

  // 극한
  { optionA: '외딴섬에서 혼자 1년 살기', optionB: '10명과 좁은 방에서 1달 살기', category: '극한' },
  { optionA: '평생 같은 음식만 먹기', optionB: '평생 같은 옷만 입기', category: '극한' },
  { optionA: '과거로 가서 부끄러운 기억 지우기', optionB: '미래의 나에게 조언 한 번 듣기', category: '극한' },
  { optionA: '모든 동물과 대화 가능', optionB: '모든 언어 구사 가능', category: '극한' },
  { optionA: '평생 꿈을 기억하기', optionB: '평생 꿈을 꾸지 않기', category: '극한' },
  { optionA: '죽기 전 1년을 알기', optionB: '모르고 살기', category: '극한' },
  { optionA: '과거의 나에게 편지 보내기', optionB: '미래의 나에게서 편지 받기', category: '극한' },
  { optionA: '기억은 있지만 감정이 없는 것', optionB: '감정은 있지만 기억이 없는 것', category: '극한' },

  // 재미
  { optionA: '평생 노래방에서만 노래하기', optionB: '평생 샤워할 때만 노래하기', category: '재미' },
  { optionA: '항상 5분 일찍 도착하기', optionB: '항상 5분 늦게 도착하기', category: '재미' },
  { optionA: '평생 매운 음식 못 먹기', optionB: '평생 단 음식 못 먹기', category: '재미' },
  { optionA: '웃을 때마다 방귀 나오기', optionB: '방귀 뀔 때마다 웃음 나오기', category: '재미' },
  { optionA: '머리카락이 형광색', optionB: '피부가 파란색', category: '재미' },
  { optionA: '평생 속삭이듯 말하기', optionB: '평생 소리 지르듯 말하기', category: '재미' },
  { optionA: '모든 물건 이름을 알 수 있기', optionB: '모든 물건 가격을 알 수 있기', category: '재미' },
  { optionA: '거짓말할 때 코가 빨개지기', optionB: '화날 때 귀가 커지기', category: '재미' },
];

type Category = '전체' | '일상' | '연애' | '직장' | '극한' | '재미';

const categories: Category[] = ['전체', '일상', '연애', '직장', '극한', '재미'];

const categoryColors: Record<Category, string> = {
  '전체': 'from-gray-600 to-gray-700',
  '일상': 'from-blue-500 to-blue-600',
  '연애': 'from-pink-500 to-rose-600',
  '직장': 'from-green-500 to-emerald-600',
  '극한': 'from-purple-500 to-violet-600',
  '재미': 'from-yellow-500 to-orange-500',
};

export default function WouldYouRatherPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [stats, setStats] = useState({ totalPlayed: 0, optionA: 0, optionB: 0 });
  const [showResult, setShowResult] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());

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
    setCurrentQuestion(getNextQuestion());
    setSelectedOption(null);
    setShowResult(false);
  };

  const selectOption = (option: 'A' | 'B') => {
    if (selectedOption) return;

    setSelectedOption(option);
    setShowResult(true);
    setStats(prev => ({
      totalPlayed: prev.totalPlayed + 1,
      optionA: option === 'A' ? prev.optionA + 1 : prev.optionA,
      optionB: option === 'B' ? prev.optionB + 1 : prev.optionB,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestion(getNextQuestion());
    setSelectedOption(null);
    setShowResult(false);
  };

  const changeCategory = (category: Category) => {
    setSelectedCategory(category);
    setUsedQuestions(new Set());
    setCurrentQuestion(null);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="space-y-6">
      {!currentQuestion ? (
        <>
          {/* Intro */}
          <div className="text-center">
            <div className="text-7xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">이것 vs 저것</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              둘 중 하나만 선택해야 한다면?
            </p>
            <p className="text-gray-500 text-sm">
              친구들과 함께 선택하고 토론해보세요!
            </p>
          </div>

          {/* Category Selection */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-center">카테고리 선택</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => changeCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${categoryColors[category]} text-white`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-bold rounded-xl transition-colors"
          >
            게임 시작!
          </button>

          {/* Stats */}
          {stats.totalPlayed > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 text-center border border-gray-100 dark:border-gray-700">
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">내 통계</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalPlayed}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">총 선택</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-500">{stats.optionA}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">A 선택</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-500">{stats.optionB}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">B 선택</div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Question Card */}
          <div className="text-center">
            <span className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColors[currentQuestion.category as Category]} text-white text-sm rounded-full mb-4`}>
              {currentQuestion.category}
            </span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              둘 중 하나만 선택하세요!
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {/* Option A */}
            <button
              onClick={() => selectOption('A')}
              disabled={!!selectedOption}
              className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                selectedOption === 'A'
                  ? 'bg-blue-500 text-white scale-105'
                  : selectedOption === 'B'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 opacity-50'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 border-2 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                  selectedOption === 'A' ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'
                }`}>
                  A
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium">{currentQuestion.optionA}</p>
                </div>
                {selectedOption === 'A' && (
                  <span className="text-2xl">✓</span>
                )}
              </div>
            </button>

            {/* VS */}
            <div className="flex items-center justify-center">
              <div className="bg-indigo-500 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                VS
              </div>
            </div>

            {/* Option B */}
            <button
              onClick={() => selectOption('B')}
              disabled={!!selectedOption}
              className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                selectedOption === 'B'
                  ? 'bg-pink-500 text-white scale-105'
                  : selectedOption === 'A'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 opacity-50'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-500 border-2 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                  selectedOption === 'B' ? 'bg-white text-pink-500' : 'bg-pink-500 text-white'
                }`}>
                  B
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium">{currentQuestion.optionB}</p>
                </div>
                {selectedOption === 'B' && (
                  <span className="text-2xl">✓</span>
                )}
              </div>
            </button>
          </div>

          {/* Result / Next */}
          {showResult && (
            <div className="space-y-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 text-center border border-indigo-200 dark:border-indigo-500/30">
                <p className="text-gray-600 dark:text-gray-400 mb-2">당신의 선택</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedOption === 'A' ? currentQuestion.optionA : currentQuestion.optionB}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  친구들과 결과를 비교해보세요!
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={nextQuestion}
                  className="flex-1 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors"
                >
                  다음 질문 →
                </button>
                <button
                  onClick={() => {
                    setCurrentQuestion(null);
                    setSelectedOption(null);
                    setShowResult(false);
                  }}
                  className="px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  처음으로
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
