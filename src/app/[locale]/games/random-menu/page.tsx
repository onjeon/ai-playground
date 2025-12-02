'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type MealTime = 'lunch' | 'dinner' | 'snack' | 'drink';
type FoodCategory = 'korean' | 'chinese' | 'japanese' | 'western' | 'snack' | 'fastfood' | 'cafe';

interface Menu {
  name: string;
  emoji: string;
  category: FoodCategory;
  tags: string[];
}

const mealTimes: { id: MealTime; name: string; emoji: string; color: string }[] = [
  { id: 'lunch', name: '점심', emoji: '🌞', color: 'from-yellow-500 to-orange-500' },
  { id: 'dinner', name: '저녁', emoji: '🌙', color: 'from-indigo-500 to-purple-500' },
  { id: 'snack', name: '야식/간식', emoji: '🌃', color: 'from-slate-600 to-slate-700' },
  { id: 'drink', name: '술/음료', emoji: '🍻', color: 'from-amber-500 to-yellow-600' },
];

const menus: Menu[] = [
  // 한식
  { name: '김치찌개', emoji: '🍲', category: 'korean', tags: ['따뜻한', '국물', '밥'] },
  { name: '된장찌개', emoji: '🍲', category: 'korean', tags: ['따뜻한', '국물', '밥'] },
  { name: '순두부찌개', emoji: '🍲', category: 'korean', tags: ['따뜻한', '국물', '밥'] },
  { name: '부대찌개', emoji: '🍲', category: 'korean', tags: ['따뜻한', '국물', '밥'] },
  { name: '삼겹살', emoji: '🥓', category: 'korean', tags: ['고기', '구이'] },
  { name: '불고기', emoji: '🥩', category: 'korean', tags: ['고기', '달달한'] },
  { name: '갈비찜', emoji: '🍖', category: 'korean', tags: ['고기', '특별한'] },
  { name: '비빔밥', emoji: '🍚', category: 'korean', tags: ['밥', '야채'] },
  { name: '김밥', emoji: '🍙', category: 'korean', tags: ['간편한', '가벼운'] },
  { name: '떡볶이', emoji: '🍢', category: 'korean', tags: ['매운', '분식'] },
  { name: '제육볶음', emoji: '🐷', category: 'korean', tags: ['고기', '매운', '밥'] },
  { name: '냉면', emoji: '🍜', category: 'korean', tags: ['시원한', '면'] },
  { name: '칼국수', emoji: '🍜', category: 'korean', tags: ['따뜻한', '면', '국물'] },
  { name: '삼계탕', emoji: '🐔', category: 'korean', tags: ['따뜻한', '보양식'] },
  { name: '감자탕', emoji: '🍖', category: 'korean', tags: ['따뜻한', '국물', '고기'] },
  { name: '육회', emoji: '🥩', category: 'korean', tags: ['날것', '특별한'] },
  { name: '보쌈', emoji: '🐷', category: 'korean', tags: ['고기', '술안주'] },
  { name: '족발', emoji: '🐷', category: 'korean', tags: ['고기', '술안주'] },
  { name: '해물탕', emoji: '🦐', category: 'korean', tags: ['따뜻한', '해산물', '국물'] },
  { name: '닭갈비', emoji: '🐔', category: 'korean', tags: ['고기', '매운'] },
  { name: '낙지볶음', emoji: '🐙', category: 'korean', tags: ['해산물', '매운'] },
  { name: '곱창', emoji: '🥘', category: 'korean', tags: ['고기', '술안주'] },
  { name: '순대국', emoji: '🍲', category: 'korean', tags: ['따뜻한', '국물'] },
  { name: '설렁탕', emoji: '🍲', category: 'korean', tags: ['따뜻한', '국물'] },

  // 중식
  { name: '짜장면', emoji: '🍜', category: 'chinese', tags: ['면', '달달한'] },
  { name: '짬뽕', emoji: '🍜', category: 'chinese', tags: ['면', '매운', '국물'] },
  { name: '탕수육', emoji: '🍖', category: 'chinese', tags: ['튀김', '달달한'] },
  { name: '깐풍기', emoji: '🐔', category: 'chinese', tags: ['튀김', '매운'] },
  { name: '마라탕', emoji: '🍲', category: 'chinese', tags: ['매운', '국물', '얼얼한'] },
  { name: '마라샹궈', emoji: '🥘', category: 'chinese', tags: ['매운', '볶음', '얼얼한'] },
  { name: '양꼬치', emoji: '🍢', category: 'chinese', tags: ['고기', '구이'] },
  { name: '볶음밥', emoji: '🍚', category: 'chinese', tags: ['밥', '간편한'] },
  { name: '유린기', emoji: '🐔', category: 'chinese', tags: ['튀김', '새콤한'] },
  { name: '꿔바로우', emoji: '🍖', category: 'chinese', tags: ['튀김', '새콤달콤'] },

  // 일식
  { name: '초밥', emoji: '🍣', category: 'japanese', tags: ['날것', '해산물'] },
  { name: '라멘', emoji: '🍜', category: 'japanese', tags: ['면', '국물', '따뜻한'] },
  { name: '우동', emoji: '🍜', category: 'japanese', tags: ['면', '국물', '따뜻한'] },
  { name: '돈카츠', emoji: '🐷', category: 'japanese', tags: ['튀김', '고기'] },
  { name: '카레', emoji: '🍛', category: 'japanese', tags: ['밥', '따뜻한'] },
  { name: '규카츠', emoji: '🥩', category: 'japanese', tags: ['튀김', '고기', '특별한'] },
  { name: '소바', emoji: '🍝', category: 'japanese', tags: ['면', '시원한'] },
  { name: '덮밥', emoji: '🍚', category: 'japanese', tags: ['밥', '간편한'] },
  { name: '오코노미야끼', emoji: '🥞', category: 'japanese', tags: ['철판', '간식'] },
  { name: '타코야키', emoji: '🐙', category: 'japanese', tags: ['간식', '해산물'] },

  // 양식
  { name: '파스타', emoji: '🍝', category: 'western', tags: ['면', '이탈리안'] },
  { name: '피자', emoji: '🍕', category: 'western', tags: ['빵', '치즈'] },
  { name: '스테이크', emoji: '🥩', category: 'western', tags: ['고기', '특별한'] },
  { name: '햄버거 스테이크', emoji: '🍔', category: 'western', tags: ['고기'] },
  { name: '리조또', emoji: '🍚', category: 'western', tags: ['밥', '이탈리안'] },
  { name: '샐러드', emoji: '🥗', category: 'western', tags: ['가벼운', '건강한'] },
  { name: '샌드위치', emoji: '🥪', category: 'western', tags: ['빵', '간편한'] },
  { name: '브런치', emoji: '🥞', category: 'western', tags: ['가벼운', '아침'] },
  { name: '오믈렛', emoji: '🍳', category: 'western', tags: ['달걀', '간편한'] },
  { name: '감바스', emoji: '🦐', category: 'western', tags: ['해산물', '술안주'] },

  // 간식/야식
  { name: '치킨', emoji: '🍗', category: 'snack', tags: ['튀김', '술안주', '야식'] },
  { name: '피자', emoji: '🍕', category: 'snack', tags: ['빵', '야식'] },
  { name: '라면', emoji: '🍜', category: 'snack', tags: ['면', '간편한', '야식'] },
  { name: '떡볶이', emoji: '🍢', category: 'snack', tags: ['매운', '분식'] },
  { name: '튀김', emoji: '🍤', category: 'snack', tags: ['튀김', '분식'] },
  { name: '핫도그', emoji: '🌭', category: 'snack', tags: ['간식', '빵'] },
  { name: '붕어빵', emoji: '🐟', category: 'snack', tags: ['간식', '달달한'] },
  { name: '호떡', emoji: '🥞', category: 'snack', tags: ['간식', '달달한'] },
  { name: '군고구마', emoji: '🍠', category: 'snack', tags: ['간식', '따뜻한'] },
  { name: '컵라면', emoji: '🍜', category: 'snack', tags: ['면', '간편한'] },

  // 패스트푸드
  { name: '햄버거', emoji: '🍔', category: 'fastfood', tags: ['빵', '간편한'] },
  { name: '감자튀김', emoji: '🍟', category: 'fastfood', tags: ['튀김', '간식'] },
  { name: '타코', emoji: '🌮', category: 'fastfood', tags: ['멕시칸', '간편한'] },
  { name: '핫도그', emoji: '🌭', category: 'fastfood', tags: ['빵', '간편한'] },
  { name: '서브웨이', emoji: '🥪', category: 'fastfood', tags: ['빵', '건강한'] },

  // 카페/음료
  { name: '커피', emoji: '☕', category: 'cafe', tags: ['음료', '카페인'] },
  { name: '버블티', emoji: '🧋', category: 'cafe', tags: ['음료', '달달한'] },
  { name: '스무디', emoji: '🥤', category: 'cafe', tags: ['음료', '시원한'] },
  { name: '빙수', emoji: '🍧', category: 'cafe', tags: ['디저트', '시원한'] },
  { name: '케이크', emoji: '🍰', category: 'cafe', tags: ['디저트', '달달한'] },
  { name: '아이스크림', emoji: '🍦', category: 'cafe', tags: ['디저트', '시원한'] },
  { name: '와플', emoji: '🧇', category: 'cafe', tags: ['디저트', '달달한'] },
];

// 시간대별 적합한 메뉴 필터링
const getMealMenus = (mealTime: MealTime): Menu[] => {
  switch (mealTime) {
    case 'lunch':
      return menus.filter(m => 
        ['korean', 'chinese', 'japanese', 'western', 'fastfood'].includes(m.category)
      );
    case 'dinner':
      return menus.filter(m => 
        ['korean', 'chinese', 'japanese', 'western'].includes(m.category) ||
        m.tags.includes('고기') || m.tags.includes('특별한')
      );
    case 'snack':
      return menus.filter(m => 
        m.category === 'snack' || 
        m.tags.includes('야식') || 
        m.tags.includes('간식') ||
        m.tags.includes('술안주')
      );
    case 'drink':
      return menus.filter(m => 
        m.category === 'cafe' || 
        m.tags.includes('술안주') ||
        m.tags.includes('디저트')
      );
    default:
      return menus;
  }
};

type GameState = 'select' | 'spinning' | 'result';

export default function RandomMenuPage() {
  const [gameState, setGameState] = useState<GameState>('select');
  const [selectedMealTime, setSelectedMealTime] = useState<MealTime | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [spinningMenu, setSpinningMenu] = useState<Menu | null>(null);
  const [history, setHistory] = useState<Menu[]>([]);

  const spinRoulette = useCallback((mealTime: MealTime) => {
    setSelectedMealTime(mealTime);
    setGameState('spinning');
    const availableMenus = getMealMenus(mealTime);
    let spinCount = 0;
    const maxSpins = 20;
    const spinInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableMenus.length);
      setSpinningMenu(availableMenus[randomIndex]);
      spinCount++;

      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        const finalIndex = Math.floor(Math.random() * availableMenus.length);
        const finalMenu = availableMenus[finalIndex];
        setSelectedMenu(finalMenu);
        setSpinningMenu(null);
        setGameState('result');
        setHistory(prev => [finalMenu, ...prev.slice(0, 4)]);
      }
    }, 100);
  }, []);

  const reroll = useCallback(() => {
    if (selectedMealTime) {
      spinRoulette(selectedMealTime);
    }
  }, [selectedMealTime, spinRoulette]);

  const resetGame = useCallback(() => {
    setGameState('select');
    setSelectedMealTime(null);
    setSelectedMenu(null);
    setSpinningMenu(null);
  }, []);

  const currentMealTime = mealTimes.find(m => m.id === selectedMealTime);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/games" className="text-gray-400 hover:text-white transition-colors">
            ← 게임 목록
          </Link>
          <h1 className="text-lg font-bold text-white">오늘 뭐 먹지?</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Meal Time Selection */}
      {gameState === 'select' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🍽️</div>
            <h2 className="text-2xl font-bold text-white mb-4">오늘 뭐 먹지?</h2>
            <p className="text-gray-400">
              메뉴 선택이 어려울 때! 랜덤으로 결정해드려요
            </p>
          </div>

          <div className="grid gap-4">
            {mealTimes.map((meal) => (
              <button
                key={meal.id}
                onClick={() => spinRoulette(meal.id)}
                className={`bg-gradient-to-r ${meal.color} p-6 rounded-2xl text-left transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{meal.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{meal.name}</h3>
                    <p className="text-white/80 text-sm">{getMealMenus(meal.id).length}개 메뉴</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* History */}
          {history.length > 0 && (
            <div className="mt-8 bg-gray-800 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-3">최근 추천 기록</p>
              <div className="flex flex-wrap gap-2">
                {history.map((menu, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {menu.emoji} {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Spinning Animation */}
      {gameState === 'spinning' && currentMealTime && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">{currentMealTime.emoji} {currentMealTime.name} 메뉴 추천 중...</p>
            
            <div className="bg-gray-800 rounded-3xl p-12 mb-8">
              <div className="animate-bounce">
                <span className="text-8xl block mb-4">{spinningMenu?.emoji || '🎰'}</span>
              </div>
              <p className="text-2xl font-bold text-white animate-pulse">
                {spinningMenu?.name || '두구두구...'}
              </p>
            </div>

            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Result */}
      {gameState === 'result' && selectedMenu && currentMealTime && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">{currentMealTime.emoji} {currentMealTime.name} 추천</p>
            <div className="text-8xl mb-4">{selectedMenu.emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedMenu.name}</h2>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selectedMenu.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Fun message */}
            <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
              <p className="text-gray-300">
                {getRandomMessage(selectedMenu)}
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">친구에게 공유하기</p>
            <ShareButtons 
              title={`오늘 ${currentMealTime.name}은 ${selectedMenu.name}!`}
              description={`${selectedMenu.emoji} 메뉴 고민 끝! AI 놀이터의 랜덤 메뉴 추천으로 ${selectedMenu.name}(으)로 결정했어요!`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={reroll}
              className="flex-1 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              🎲 다시 뽑기
            </button>
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors"
            >
              시간대 변경
            </button>
          </div>

          {/* Quick reroll for different categories */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {mealTimes.filter(m => m.id !== selectedMealTime).map((meal) => (
              <button
                key={meal.id}
                onClick={() => spinRoulette(meal.id)}
                className="py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl text-sm transition-colors"
              >
                {meal.emoji} {meal.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 재미있는 메시지 생성
function getRandomMessage(menu: Menu): string {
  const messages = [
    `${menu.name}, 오늘 딱이네요! 맛있게 드세요~`,
    `고민 끝! ${menu.name} 먹으러 가볼까요?`,
    `${menu.emoji} ${menu.name}! 이거다!`,
    `오늘의 선택은 ${menu.name}! 후회 없을 거예요`,
    `${menu.name} 어때요? 생각만 해도 맛있겠다!`,
    `운명이 정해준 메뉴: ${menu.name}!`,
    `${menu.name}! 바로 검색해보세요`,
    `오늘은 ${menu.name}이 땡기는 날!`,
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
