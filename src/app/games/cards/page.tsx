'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

type Category = 'light' | 'deep' | 'couple' | 'meeting' | 'dinner';

interface CardCategory {
  id: Category;
  name: string;
  emoji: string;
  description: string;
  color: string;
}

const categories: CardCategory[] = [
  { id: 'light', name: '가벼운 질문', emoji: '💬', description: '처음 만난 사람과 편하게', color: 'from-green-500 to-emerald-500' },
  { id: 'deep', name: '깊은 대화', emoji: '💭', description: '친한 사람과 진지하게', color: 'from-purple-500 to-indigo-500' },
  { id: 'couple', name: '커플용', emoji: '💕', description: '연인과 더 가까워지기', color: 'from-pink-500 to-rose-500' },
  { id: 'meeting', name: '소개팅용', emoji: '✨', description: '새로운 만남에서', color: 'from-orange-500 to-amber-500' },
  { id: 'dinner', name: '회식용', emoji: '🍺', description: '직장 동료들과', color: 'from-blue-500 to-cyan-500' },
];

const cards: Record<Category, string[]> = {
  light: [
    "요즘 빠져있는 취미가 있어요?",
    "최근에 본 영화나 드라마 중 추천할 거 있어요?",
    "좋아하는 음식은 뭐예요?",
    "어디서 태어났어요?",
    "주말에 보통 뭐 해요?",
    "요즘 듣는 노래 있어요?",
    "반려동물 키워요?",
    "여행 좋아해요? 가보고 싶은 곳은?",
    "아침형 인간이에요, 저녁형 인간이에요?",
    "커피 좋아해요? 어떤 커피?",
    "계절 중에 어떤 계절을 좋아해요?",
    "최근에 웃겼던 일이 있어요?",
    "어떤 장르의 음악을 좋아해요?",
    "술 좋아해요? 좋아하는 술은?",
    "스트레스 받으면 어떻게 풀어요?",
  ],
  deep: [
    "인생에서 가장 행복했던 순간은 언제였어요?",
    "10년 후 어떤 모습이고 싶어요?",
    "가장 후회되는 선택이 있어요?",
    "나를 가장 잘 아는 사람은 누구예요?",
    "죽기 전에 꼭 해보고 싶은 것은?",
    "어떤 사람이 되고 싶어요?",
    "가장 두려운 것은 뭐예요?",
    "행복의 기준이 뭐예요?",
    "지금 가장 고민되는 것은?",
    "부모님께 감사한 점이 있다면?",
    "인생의 터닝포인트가 있었어요?",
    "가장 소중하게 생각하는 가치는?",
    "나를 한 문장으로 표현한다면?",
    "지금 삶에 만족해요?",
    "가장 영향을 준 사람이 있어요?",
  ],
  couple: [
    "처음 만났을 때 첫인상 어땠어?",
    "나의 어떤 점이 제일 좋아?",
    "우리 처음 만난 날 기억나?",
    "나한테 바라는 거 있어?",
    "같이 해보고 싶은 것 있어?",
    "우리 관계에서 가장 행복한 순간은?",
    "내가 고쳤으면 하는 점 있어?",
    "결혼 생각 있어? (있다면) 어떤 결혼식?",
    "아이는 몇 명 갖고 싶어?",
    "같이 살면 어떤 집에서 살고 싶어?",
    "내가 없으면 뭐가 제일 그리울 것 같아?",
    "우리 첫 키스 기억나?",
    "싸웠을 때 어떻게 화해하고 싶어?",
    "나한테 비밀이 있어?",
    "나를 얼마나 사랑해? (구체적으로!)",
  ],
  meeting: [
    "요즘 어떻게 지내세요?",
    "직업이 뭐예요? 왜 그 일을 선택했어요?",
    "이상형이 어떻게 돼요?",
    "연애 스타일이 어때요?",
    "전 애인이랑 왜 헤어졌어요?",
    "얼마나 자주 연락하는 걸 좋아해요?",
    "데이트할 때 뭐 하는 거 좋아해요?",
    "결혼은 언제쯤 하고 싶어요?",
    "어떤 사람이랑 안 맞아요?",
    "가장 중요하게 생각하는 가치는?",
    "질투 많은 편이에요?",
    "주말에 보통 뭐 해요?",
    "친구들이 저를 어떻게 표현해요?",
    "연애에서 제일 중요한 게 뭐예요?",
    "첫인상 어때요?",
  ],
  dinner: [
    "회사 왜 들어왔어요?",
    "전 직장에선 뭐 했어요?",
    "회사에서 가장 힘든 점은?",
    "우리 팀장/사장님 어때요? (주의!)",
    "야근 많이 해요?",
    "점심은 보통 뭐 먹어요?",
    "출퇴근 얼마나 걸려요?",
    "이직 생각 있어요?",
    "회사에서 누구랑 제일 친해요?",
    "복지 중에 제일 좋은 거 뭐예요?",
    "연봉 만족해요? (주의!)",
    "회식 좋아해요?",
    "주말에 뭐 해요?",
    "술 얼마나 마셔요?",
    "직장에서 목표가 뭐예요?",
  ],
};

type GameState = 'select' | 'playing';

export default function ConversationCardsPage() {
  const [gameState, setGameState] = useState<GameState>('select');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState<string[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  const startGame = useCallback((category: Category) => {
    const categoryCards = [...cards[category]];
    // 셔플
    for (let i = categoryCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [categoryCards[i], categoryCards[j]] = [categoryCards[j], categoryCards[i]];
    }
    
    setSelectedCategory(category);
    setShuffledCards(categoryCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setGameState('playing');
  }, []);

  const nextCard = useCallback(() => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, shuffledCards.length]);

  const prevCard = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const shuffleAgain = useCallback(() => {
    if (selectedCategory) {
      const categoryCards = [...cards[selectedCategory]];
      for (let i = categoryCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [categoryCards[i], categoryCards[j]] = [categoryCards[j], categoryCards[i]];
      }
      setShuffledCards(categoryCards);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [selectedCategory]);

  const resetGame = useCallback(() => {
    setGameState('select');
    setSelectedCategory(null);
    setCurrentIndex(0);
    setShuffledCards([]);
    setIsFlipped(false);
  }, []);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-white">대화 카드</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Category Selection */}
      {gameState === 'select' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🃏</div>
            <h2 className="text-2xl font-bold text-white mb-4">대화 카드</h2>
            <p className="text-gray-400">
              어색한 분위기를 깨는 대화 주제 카드! 카테고리를 선택하세요.
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
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                  <span className="ml-auto text-white/60 text-sm">{cards[category.id].length}장</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">💡 사용법</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• 카드를 탭/클릭하면 질문이 나타납니다</li>
              <li>• 좌우 버튼으로 다른 질문으로 이동하세요</li>
              <li>• 대화가 끊기면 새 카드를 뽑아보세요!</li>
            </ul>
          </div>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && currentCategory && (
        <div className="max-w-md mx-auto px-4 py-8 flex flex-col items-center min-h-[calc(100vh-64px)]">
          {/* Category Info */}
          <div className="text-center mb-6">
            <span className="text-3xl">{currentCategory.emoji}</span>
            <h2 className="text-xl font-bold text-white">{currentCategory.name}</h2>
            <p className="text-gray-400 text-sm">
              {currentIndex + 1} / {shuffledCards.length}
            </p>
          </div>

          {/* Card */}
          <div 
            className="w-full aspect-[3/4] max-w-sm cursor-pointer perspective-1000 mb-8"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div 
              className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front (back of card) */}
              <div 
                className={`absolute w-full h-full rounded-3xl bg-gradient-to-br ${currentCategory.color} flex items-center justify-center shadow-2xl backface-hidden`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-center">
                  <span className="text-8xl opacity-50">🃏</span>
                  <p className="text-white/80 mt-4 text-lg">탭하여 질문 보기</p>
                </div>
              </div>
              
              {/* Back (question) */}
              <div 
                className="absolute w-full h-full rounded-3xl bg-white flex items-center justify-center p-8 shadow-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-2xl font-bold text-gray-800 text-center leading-relaxed">
                  {shuffledCards[currentIndex]}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 w-full max-w-sm mb-6">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                currentIndex === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              ← 이전
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === shuffledCards.length - 1}
              className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                currentIndex === shuffledCards.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              다음 →
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full max-w-sm">
            <button
              onClick={shuffleAgain}
              className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-colors"
            >
              🔀 셔플
            </button>
            <button
              onClick={resetGame}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-bold transition-colors"
            >
              카테고리 변경
            </button>
          </div>
        </div>
      )}

      {/* CSS for 3D flip */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
