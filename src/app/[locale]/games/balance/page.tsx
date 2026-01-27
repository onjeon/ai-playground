'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type Category = 'love' | 'work' | 'daily' | 'extreme';

interface BalanceQuestion {
  id: number;
  optionA: string;
  optionB: string;
  category: Category;
}

const categories: { id: Category; name: string; emoji: string; color: string }[] = [
  { id: 'love', name: '연애편', emoji: '💕', color: 'from-pink-500 to-rose-500' },
  { id: 'work', name: '직장편', emoji: '💼', color: 'from-blue-500 to-indigo-500' },
  { id: 'daily', name: '일상편', emoji: '☀️', color: 'from-yellow-500 to-orange-500' },
  { id: 'extreme', name: '극한편', emoji: '🔥', color: 'from-red-500 to-pink-500' },
];

const questions: Record<Category, BalanceQuestion[]> = {
  love: [
    { id: 1, optionA: '연락 자주 하는 바쁜 연인', optionB: '연락 뜸한 시간 많은 연인', category: 'love' },
    { id: 2, optionA: '잘생겼지만 재미없는 사람', optionB: '못생겼지만 재미있는 사람', category: 'love' },
    { id: 3, optionA: '내가 더 좋아하는 연애', optionB: '상대가 더 좋아하는 연애', category: 'love' },
    { id: 4, optionA: '집에만 있고 싶어하는 연인', optionB: '밖에 나가자고만 하는 연인', category: 'love' },
    { id: 5, optionA: '질투 많은 연인', optionB: '질투 0인 연인', category: 'love' },
    { id: 6, optionA: '썸만 3년', optionB: '사귀자마자 권태기', category: 'love' },
    { id: 7, optionA: '애인 휴대폰 보기', optionB: '평생 의심하며 살기', category: 'love' },
    { id: 8, optionA: '첫사랑과 재회', optionB: '새로운 이상형 만남', category: 'love' },
    { id: 9, optionA: '매일 싸우지만 화해 잘됨', optionB: '안 싸우지만 대화 없음', category: 'love' },
    { id: 10, optionA: '부모님이 반대하는 연애', optionB: '친구들이 반대하는 연애', category: 'love' },
  ],
  work: [
    { id: 1, optionA: '연봉 5천 워라밸 최악', optionB: '연봉 3천 워라밸 최고', category: 'work' },
    { id: 2, optionA: '칼퇴근 가능한 지방', optionB: '야근 많은 서울', category: 'work' },
    { id: 3, optionA: '능력 있는 독재 상사', optionB: '무능한 착한 상사', category: 'work' },
    { id: 4, optionA: '좋아하지만 안 맞는 일', optionB: '싫어하지만 잘하는 일', category: 'work' },
    { id: 5, optionA: '회식 매주 있는 회사', optionB: '동료와 대화 없는 회사', category: 'work' },
    { id: 6, optionA: '출퇴근 2시간 연봉 높음', optionB: '출퇴근 10분 연봉 낮음', category: 'work' },
    { id: 7, optionA: '재택근무 주5일', optionB: '출근근무 주3일', category: 'work' },
    { id: 8, optionA: '매일 새로운 업무', optionB: '매일 같은 업무', category: 'work' },
    { id: 9, optionA: '인정 못 받지만 편한 회사', optionB: '인정 받지만 빡센 회사', category: 'work' },
    { id: 10, optionA: '월급 1일 전 입금', optionB: '월급 7일 후 입금', category: 'work' },
  ],
  daily: [
    { id: 1, optionA: '여름만 1년', optionB: '겨울만 1년', category: 'daily' },
    { id: 2, optionA: '평생 단 음식만', optionB: '평생 짠 음식만', category: 'daily' },
    { id: 3, optionA: '눈치 없지만 솔직한 친구', optionB: '눈치 빠르지만 계산적인 친구', category: 'daily' },
    { id: 4, optionA: '잠 3시간에 정신 멀쩡', optionB: '잠 12시간에 항상 피곤', category: 'daily' },
    { id: 5, optionA: '평생 대중교통만', optionB: '평생 걸어다니기만', category: 'daily' },
    { id: 6, optionA: '10년 전으로 돌아가기', optionB: '10년 후로 가기', category: 'daily' },
    { id: 7, optionA: '항상 10분 늦는 인생', optionB: '항상 1시간 일찍 도착하는 인생', category: 'daily' },
    { id: 8, optionA: '모든 음식 맛있지만 살찜', optionB: '모든 음식 맛없지만 안 찜', category: 'daily' },
    { id: 9, optionA: '책만 있는 세상', optionB: '영상만 있는 세상', category: 'daily' },
    { id: 10, optionA: '기억력 천재 / 눈치 0', optionB: '기억력 0 / 눈치 천재', category: 'daily' },
  ],
  extreme: [
    { id: 1, optionA: '투명인간 1년', optionB: '거인 1년', category: 'extreme' },
    { id: 2, optionA: '과거를 아는 능력', optionB: '미래를 아는 능력', category: 'extreme' },
    { id: 3, optionA: '세상에서 제일 가난한 왕', optionB: '세상에서 제일 부유한 노예', category: 'extreme' },
    { id: 4, optionA: '모든 언어 가능 / 글 못 읽음', optionB: '모든 글 읽기 가능 / 말 못함', category: 'extreme' },
    { id: 5, optionA: '100억 받고 달 여행 1년', optionB: '1억 받고 지구 여행 1년', category: 'extreme' },
    { id: 6, optionA: '내 기억만 남기고 리셋', optionB: '남들 기억에서 나만 삭제', category: 'extreme' },
    { id: 7, optionA: '불로불사 (외로움)', optionB: '행복한 100살까지만', category: 'extreme' },
    { id: 8, optionA: '1억 받고 1년 감옥', optionB: '무일푼 자유', category: 'extreme' },
    { id: 9, optionA: '매일 다른 얼굴', optionB: '평생 같은 옷', category: 'extreme' },
    { id: 10, optionA: '모두에게 사랑받지만 외로움', optionB: '모두에게 미움받지만 행복', category: 'extreme' },
  ],
};

type GameState = 'select' | 'playing' | 'finished';

interface Answer {
  questionId: number;
  choice: 'A' | 'B';
}

export default function BalanceGamePage() {
  const [gameState, setGameState] = useState<GameState>('select');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showStats, setShowStats] = useState(false);

  const currentQuestions = selectedCategory ? questions[selectedCategory] : [];

  const startGame = useCallback((category: Category) => {
    setSelectedCategory(category);
    setGameState('playing');
    setCurrentIndex(0);
    setAnswers([]);
  }, []);

  const handleChoice = useCallback((choice: 'A' | 'B') => {
    const currentQuestion = currentQuestions[currentIndex];
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, choice }]);
    
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameState('finished');
    }
  }, [currentIndex, currentQuestions]);

  const resetGame = useCallback(() => {
    setGameState('select');
    setSelectedCategory(null);
    setCurrentIndex(0);
    setAnswers([]);
    setShowStats(false);
  }, []);

  // 통계 계산
  const stats = useMemo(() => {
    const aCount = answers.filter(a => a.choice === 'A').length;
    const bCount = answers.filter(a => a.choice === 'B').length;
    return { aCount, bCount };
  }, [answers]);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      {gameState === 'select' && (
        <div>
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">⚖️</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">밸런스 게임</h2>
            <p className="text-gray-600 dark:text-gray-400">
              둘 중 하나만 골라야 한다면? 카테고리를 선택하세요!
            </p>
          </div>

          <div className="grid gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => startGame(category.id)}
                className={`bg-gradient-to-r ${category.color} p-6 rounded-2xl text-left transition-all hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{category.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80 text-sm">{questions[category.id].length}문제</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && currentCategory && (
        <div>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{currentCategory.emoji} {currentCategory.name}</span>
              <span>{currentIndex + 1} / {currentQuestions.length}</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${currentCategory.color} transition-all duration-300`}
                style={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-2">둘 중 하나만 골라야 한다면?</p>
            <p className="text-center text-gray-900 dark:text-white text-xl font-bold">VS</p>
          </div>

          {/* Options */}
          <div className="space-y-4">
            <button
              onClick={() => handleChoice('A')}
              className="w-full p-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl text-white font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-blue-300 text-sm block mb-1">A</span>
              {currentQuestions[currentIndex]?.optionA}
            </button>
            
            <div className="flex items-center justify-center"><div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">VS</div></div>
            
            <button
              onClick={() => handleChoice('B')}
              className="w-full p-6 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 rounded-2xl text-white font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-rose-300 text-sm block mb-1">B</span>
              {currentQuestions[currentIndex]?.optionB}
            </button>
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && currentCategory && (
        <div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center mb-6 border border-gray-100 dark:border-gray-700">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">게임 완료!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{currentCategory.emoji} {currentCategory.name} 클리어!</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-500/20 rounded-xl p-4">
                <p className="text-blue-400 text-sm">A 선택</p>
                <p className="text-3xl font-bold text-blue-400">{stats.aCount}</p>
              </div>
              <div className="bg-rose-500/20 rounded-xl p-4">
                <p className="text-rose-400 text-sm">B 선택</p>
                <p className="text-3xl font-bold text-rose-400">{stats.bCount}</p>
              </div>
            </div>

            {/* Show Answers Toggle */}
            <button
              onClick={() => setShowStats(!showStats)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-sm mb-4"
            >
              {showStats ? '답변 숨기기 ▲' : '내 답변 보기 ▼'}
            </button>

            {showStats && (
              <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-4 text-left max-h-60 overflow-y-auto mb-4">
                {answers.map((answer, index) => {
                  const q = currentQuestions.find(q => q.id === answer.questionId);
                  return (
                    <div key={index} className="py-2 border-b border-gray-200 dark:border-gray-600 last:border-0">
                      <p className="text-gray-500 text-xs">Q{index + 1}</p>
                      <p className={`text-sm ${answer.choice === 'A' ? 'text-blue-400' : 'text-rose-400'}`}>
                        {answer.choice === 'A' ? q?.optionA : q?.optionB}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`밸런스 게임 (${currentCategory.name}) 완료!`}
              description={`${currentCategory.emoji} ${currentCategory.name} 밸런스 게임에서 A를 ${stats.aCount}번, B를 ${stats.bCount}번 선택했어요!`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => startGame(selectedCategory!)}
              className="flex-1 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors"
            >
              다시 하기
            </button>
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              다른 카테고리
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
