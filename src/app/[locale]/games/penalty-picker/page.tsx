'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type Category = 'light' | 'medium' | 'extreme' | 'custom';

interface Penalty {
  id: number;
  text: string;
  emoji: string;
  category: Category;
}

const categories: { id: Category; name: string; emoji: string; description: string; color: string }[] = [
  { id: 'light', name: '라이트', emoji: '😊', description: '부담없는 가벼운 벌칙', color: 'from-green-500 to-emerald-500' },
  { id: 'medium', name: '미디엄', emoji: '😅', description: '조금 챙피한 벌칙', color: 'from-yellow-500 to-orange-500' },
  { id: 'extreme', name: '하드코어', emoji: '🔥', description: '진짜 각오해야 하는 벌칙', color: 'from-red-500 to-rose-500' },
  { id: 'custom', name: '커스텀', emoji: '✏️', description: '직접 벌칙 입력하기', color: 'from-purple-500 to-pink-500' },
];

const penalties: Record<Exclude<Category, 'custom'>, Penalty[]> = {
  light: [
    { id: 1, text: '애교 부리기', emoji: '🥺', category: 'light' },
    { id: 2, text: '하트 날리기', emoji: '💕', category: 'light' },
    { id: 3, text: '윙크하기', emoji: '😉', category: 'light' },
    { id: 4, text: '셀카 찍기', emoji: '🤳', category: 'light' },
    { id: 5, text: '웃긴 표정 짓기', emoji: '🤪', category: 'light' },
    { id: 6, text: '다음 게임 MC 하기', emoji: '🎤', category: 'light' },
    { id: 7, text: '칭찬 세례 받기', emoji: '👏', category: 'light' },
    { id: 8, text: '손하트 만들기', emoji: '🫶', category: 'light' },
    { id: 9, text: '귀여운 포즈 취하기', emoji: '✌️', category: 'light' },
    { id: 10, text: '응원 댄스 추기', emoji: '💃', category: 'light' },
    { id: 11, text: '다음 사람 칭찬하기', emoji: '😄', category: 'light' },
    { id: 12, text: '최근 찍은 사진 보여주기', emoji: '📷', category: 'light' },
    { id: 13, text: '좋아하는 노래 한 소절 부르기', emoji: '🎵', category: 'light' },
    { id: 14, text: '옆 사람과 하이파이브', emoji: '🖐️', category: 'light' },
    { id: 15, text: '30초간 눈 안 깜빡이기', emoji: '👀', category: 'light' },
  ],
  medium: [
    { id: 1, text: '개인기 보여주기', emoji: '🎭', category: 'medium' },
    { id: 2, text: '음료수 한 번에 들이키기', emoji: '🥤', category: 'medium' },
    { id: 3, text: '춤추기 (30초)', emoji: '🕺', category: 'medium' },
    { id: 4, text: '모창 하기', emoji: '🎤', category: 'medium' },
    { id: 5, text: '사투리로 1분간 말하기', emoji: '🗣️', category: 'medium' },
    { id: 6, text: '1분간 대화에 존댓말만 쓰기', emoji: '🙇', category: 'medium' },
    { id: 7, text: 'SNS에 지금 사진 올리기', emoji: '📱', category: 'medium' },
    { id: 8, text: '다음 라운드 꼴찌에게 쿠폰 주기', emoji: '🎫', category: 'medium' },
    { id: 9, text: '10초간 로봇 춤 추기', emoji: '🤖', category: 'medium' },
    { id: 10, text: '5분간 반말 금지', emoji: '🚫', category: 'medium' },
    { id: 11, text: '지금 느낌으로 시 한 편 읊기', emoji: '📜', category: 'medium' },
    { id: 12, text: '10초간 웃음 참기', emoji: '🤐', category: 'medium' },
    { id: 13, text: '즉석 개그 하기', emoji: '😂', category: 'medium' },
    { id: 14, text: '가장 창피했던 경험 말하기', emoji: '😳', category: 'medium' },
    { id: 15, text: '폰 잠금화면 보여주기', emoji: '🔐', category: 'medium' },
  ],
  extreme: [
    { id: 1, text: '전 연인에게 연락하기', emoji: '💔', category: 'extreme' },
    { id: 2, text: '오늘 술값 다 내기', emoji: '💸', category: 'extreme' },
    { id: 3, text: '다음 모임 벌칙왕 예약', emoji: '👑', category: 'extreme' },
    { id: 4, text: '소주 한 잔 원샷', emoji: '🍶', category: 'extreme' },
    { id: 5, text: '부모님께 사랑한다고 전화하기', emoji: '📞', category: 'extreme' },
    { id: 6, text: '인스타 스토리에 현재 상황 올리기', emoji: '📸', category: 'extreme' },
    { id: 7, text: '좋아하는 사람 고백하기', emoji: '💕', category: 'extreme' },
    { id: 8, text: '폰 갤러리 랜덤 사진 보여주기', emoji: '🎲', category: 'extreme' },
    { id: 9, text: '30초간 진지하게 사랑 고백 연기', emoji: '🎬', category: 'extreme' },
    { id: 10, text: '양 옆 사람에게 포옹하기', emoji: '🤗', category: 'extreme' },
    { id: 11, text: '제일 최근 카톡 대화 보여주기', emoji: '💬', category: 'extreme' },
    { id: 12, text: '3분간 모든 질문에 솔직하게 답하기', emoji: '🤥', category: 'extreme' },
    { id: 13, text: '여기 있는 사람 중 한 명에게 진심 고백', emoji: '❤️', category: 'extreme' },
    { id: 14, text: '다음 모임 전까지 프사 내가 고른 걸로', emoji: '🖼️', category: 'extreme' },
    { id: 15, text: '숨겨왔던 비밀 하나 공개', emoji: '🤫', category: 'extreme' },
  ],
};

export default function PenaltyPickerPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedPenalty, setSelectedPenalty] = useState<Penalty | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinningPenalty, setSpinningPenalty] = useState<Penalty | null>(null);
  const [history, setHistory] = useState<Penalty[]>([]);

  // Custom penalties
  const [customPenalties, setCustomPenalties] = useState<string[]>([]);
  const [newPenalty, setNewPenalty] = useState('');

  const selectCategory = useCallback((category: Category) => {
    setSelectedCategory(category);
    setSelectedPenalty(null);
  }, []);

  const addCustomPenalty = useCallback(() => {
    if (newPenalty.trim()) {
      setCustomPenalties(prev => [...prev, newPenalty.trim()]);
      setNewPenalty('');
    }
  }, [newPenalty]);

  const removeCustomPenalty = useCallback((index: number) => {
    setCustomPenalties(prev => prev.filter((_, i) => i !== index));
  }, []);

  const spinPenalty = useCallback(() => {
    if (!selectedCategory) return;

    let availablePenalties: Penalty[];

    if (selectedCategory === 'custom') {
      if (customPenalties.length === 0) return;
      availablePenalties = customPenalties.map((text, index) => ({
        id: index,
        text,
        emoji: '🎯',
        category: 'custom' as Category,
      }));
    } else {
      availablePenalties = penalties[selectedCategory];
    }

    setIsSpinning(true);
    setSelectedPenalty(null);

    let spinCount = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availablePenalties.length);
      setSpinningPenalty(availablePenalties[randomIndex]);
      spinCount++;

      if (spinCount >= maxSpins) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * availablePenalties.length);
        const finalPenalty = availablePenalties[finalIndex];
        setSelectedPenalty(finalPenalty);
        setSpinningPenalty(null);
        setIsSpinning(false);
        setHistory(prev => [finalPenalty, ...prev.slice(0, 4)]);
      }
    }, 100);
  }, [selectedCategory, customPenalties]);

  const resetGame = useCallback(() => {
    setSelectedCategory(null);
    setSelectedPenalty(null);
    setSpinningPenalty(null);
  }, []);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link href="/games" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 text-sm inline-block">
        ← 게임 목록
      </Link>

      {/* Category Selection */}
      {!selectedCategory && (
        <>
          <div className="text-center">
            <div className="text-6xl mb-4">🎰</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">벌칙 뽑기</h2>
            <p className="text-gray-500 dark:text-gray-400">
              강도를 선택하세요! 각오는 되셨나요? 😈
            </p>
          </div>

          <div className="grid gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => selectCategory(category.id)}
                className={`bg-gradient-to-r ${category.color} p-6 rounded-2xl text-left transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{category.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* History */}
          {history.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">최근 벌칙 기록</p>
              <div className="space-y-2">
                {history.map((penalty, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700/50 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {penalty.emoji} {penalty.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Custom Penalties Setup */}
      {selectedCategory === 'custom' && !selectedPenalty && !isSpinning && (
        <>
          <button
            onClick={resetGame}
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 text-sm"
          >
            ← 카테고리 선택으로
          </button>

          <div className="text-center">
            <div className="text-5xl mb-2">✏️</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">커스텀 벌칙</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">직접 벌칙을 입력하세요!</p>
          </div>

          {/* Add Penalty */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newPenalty}
                onChange={(e) => setNewPenalty(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomPenalty()}
                placeholder="벌칙 입력..."
                className="flex-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600"
              />
              <button
                onClick={addCustomPenalty}
                className="px-6 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-colors"
              >
                추가
              </button>
            </div>
          </div>

          {/* Penalty List */}
          {customPenalties.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">등록된 벌칙 ({customPenalties.length}개)</p>
              <div className="space-y-2">
                {customPenalties.map((penalty, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white dark:bg-gray-700/50 px-4 py-3 rounded-xl"
                  >
                    <span className="text-gray-900 dark:text-white">🎯 {penalty}</span>
                    <button
                      onClick={() => removeCustomPenalty(index)}
                      className="text-red-500 hover:text-red-400 text-sm"
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spin Button */}
          <button
            onClick={spinPenalty}
            disabled={customPenalties.length === 0}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 disabled:from-gray-300 disabled:to-gray-300 dark:disabled:from-gray-600 dark:disabled:to-gray-600 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            {customPenalties.length === 0 ? '벌칙을 추가해주세요' : '🎰 벌칙 뽑기!'}
          </button>
        </>
      )}

      {/* Spinning / Playing (Non-custom) */}
      {selectedCategory && selectedCategory !== 'custom' && !selectedPenalty && (
        <>
          <button
            onClick={resetGame}
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 text-sm"
          >
            ← 카테고리 선택으로
          </button>

          <div className="text-center">
            <div className="text-5xl mb-2">{currentCategory?.emoji}</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentCategory?.name} 벌칙</h2>
          </div>

          {/* Spinning Display */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-12">
            <div className={`text-center ${isSpinning ? 'animate-pulse' : ''}`}>
              {spinningPenalty ? (
                <>
                  <span className="text-6xl block mb-4">{spinningPenalty.emoji}</span>
                  <p className="text-xl text-gray-900 dark:text-white font-bold">{spinningPenalty.text}</p>
                </>
              ) : (
                <>
                  <span className="text-6xl block mb-4">🎰</span>
                  <p className="text-gray-500 dark:text-gray-400">버튼을 눌러 벌칙을 뽑으세요!</p>
                </>
              )}
            </div>
          </div>

          {/* Spin Button */}
          <button
            onClick={spinPenalty}
            disabled={isSpinning}
            className={`w-full py-4 bg-gradient-to-r ${currentCategory?.color} hover:opacity-90 disabled:from-gray-300 disabled:to-gray-300 dark:disabled:from-gray-600 dark:disabled:to-gray-600 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl`}
          >
            {isSpinning ? '🎰 뽑는 중...' : '🎰 벌칙 뽑기!'}
          </button>
        </>
      )}

      {/* Result */}
      {selectedPenalty && currentCategory && (
        <>
          <button
            onClick={resetGame}
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 text-sm"
          >
            ← 카테고리 선택으로
          </button>

          <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-3xl p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2">{currentCategory.emoji} {currentCategory.name} 벌칙</p>
            <div className="text-8xl mb-4">{selectedPenalty.emoji}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedPenalty.text}
            </h2>
            <p className="text-yellow-600 dark:text-yellow-400 text-lg">
              ⚠️ 각오하세요!
            </p>
          </div>

          {/* Share */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons
              title={`벌칙 당첨! ${selectedPenalty.emoji}`}
              description={`${currentCategory.name} 벌칙: "${selectedPenalty.text}" 당첨됐어요! 😱`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={spinPenalty}
              className={`flex-1 py-4 bg-gradient-to-r ${currentCategory.color} hover:opacity-90 text-white font-bold rounded-xl transition-all active:scale-[0.98]`}
            >
              🎰 다시 뽑기
            </button>
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-bold rounded-xl transition-colors"
            >
              강도 변경
            </button>
          </div>
        </>
      )}
    </div>
  );
}
