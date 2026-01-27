'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type Mode = 'random' | 'order' | 'lottery';

interface PickedNumber {
  value: number;
  timestamp: number;
}

const modes: { id: Mode; name: string; emoji: string; description: string; color: string }[] = [
  { id: 'random', name: '숫자 뽑기', emoji: '🎲', description: '원하는 범위에서 숫자 하나 뽑기', color: 'from-blue-500 to-indigo-500' },
  { id: 'order', name: '순서 정하기', emoji: '📋', description: '인원수만큼 순서 랜덤 배정', color: 'from-green-500 to-emerald-500' },
  { id: 'lottery', name: '제비뽑기', emoji: '🎫', description: '당첨자 뽑기 (1명 ~ N명)', color: 'from-purple-500 to-pink-500' },
];

export default function NumberPickerPage() {
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);

  // Random Number states
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<PickedNumber[]>([]);

  // Order states
  const [peopleCount, setPeopleCount] = useState(4);
  const [orderResult, setOrderResult] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Lottery states
  const [totalPeople, setTotalPeople] = useState(10);
  const [winnerCount, setWinnerCount] = useState(1);
  const [winners, setWinners] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Random Number
  const rollNumber = useCallback(() => {
    if (minNumber >= maxNumber) return;

    setIsRolling(true);
    setPickedNumber(null);

    let rollCount = 0;
    const maxRolls = 15;
    const interval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      setPickedNumber(randomNum);
      rollCount++;

      if (rollCount >= maxRolls) {
        clearInterval(interval);
        const finalNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        setPickedNumber(finalNum);
        setIsRolling(false);
        setHistory(prev => [{ value: finalNum, timestamp: Date.now() }, ...prev.slice(0, 9)]);
      }
    }, 80);
  }, [minNumber, maxNumber]);

  // Order
  const shuffleOrder = useCallback(() => {
    if (peopleCount < 2) return;

    setIsShuffling(true);
    setOrderResult([]);

    setTimeout(() => {
      const numbers = Array.from({ length: peopleCount }, (_, i) => i + 1);
      // Fisher-Yates shuffle
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      setOrderResult(numbers);
      setIsShuffling(false);
    }, 1500);
  }, [peopleCount]);

  // Lottery
  const drawLottery = useCallback(() => {
    if (winnerCount > totalPeople || winnerCount < 1) return;

    setIsDrawing(true);
    setWinners([]);

    setTimeout(() => {
      const numbers = Array.from({ length: totalPeople }, (_, i) => i + 1);
      // Shuffle and pick winners
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      setWinners(numbers.slice(0, winnerCount));
      setIsDrawing(false);
    }, 2000);
  }, [totalPeople, winnerCount]);

  const resetMode = useCallback(() => {
    setSelectedMode(null);
    setPickedNumber(null);
    setOrderResult([]);
    setWinners([]);
  }, []);

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      {!selectedMode && (
        <div>
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎲</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">랜덤 뽑기</h2>
            <p className="text-gray-600 dark:text-gray-400">
              숫자 뽑기, 순서 정하기, 제비뽑기까지!
            </p>
          </div>

          <div className="grid gap-3">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`bg-gradient-to-r ${mode.color} p-4 rounded-2xl text-left transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{mode.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{mode.name}</h3>
                    <p className="text-white/80 text-sm">{mode.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Random Number Mode */}
      {selectedMode === 'random' && (
        <div>
          <button
            onClick={resetMode}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mb-4 text-sm"
          >
            ← 모드 선택으로
          </button>

          <div className="text-center mb-6">
            <div className="text-5xl mb-2">🎲</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">숫자 뽑기</h2>
          </div>

          {/* Range Settings */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-gray-600 dark:text-gray-400 text-sm block mb-2">최소값</label>
                <input
                  type="number"
                  value={minNumber}
                  onChange={(e) => setMinNumber(Number(e.target.value))}
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-xl text-center text-xl font-bold"
                />
              </div>
              <div>
                <label className="text-gray-600 dark:text-gray-400 text-sm block mb-2">최대값</label>
                <input
                  type="number"
                  value={maxNumber}
                  onChange={(e) => setMaxNumber(Number(e.target.value))}
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-xl text-center text-xl font-bold"
                />
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              {minNumber}부터 {maxNumber}까지
            </p>
          </div>

          {/* Result Display */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-500/30 rounded-2xl p-12 mb-6">
            <div className={`text-center ${isRolling ? 'animate-pulse' : ''}`}>
              {pickedNumber !== null ? (
                <span className="text-7xl md:text-9xl font-bold text-gray-900 dark:text-white">{pickedNumber}</span>
              ) : (
                <span className="text-5xl text-gray-400">?</span>
              )}
            </div>
          </div>

          {/* Roll Button */}
          <button
            onClick={rollNumber}
            disabled={isRolling || minNumber >= maxNumber}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            {isRolling ? '🎲 뽑는 중...' : '🎲 숫자 뽑기!'}
          </button>

          {/* History */}
          {history.length > 0 && (
            <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">최근 기록</p>
              <div className="flex flex-wrap gap-2">
                {history.map((item, index) => (
                  <span
                    key={item.timestamp}
                    className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  >
                    {item.value}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Order Mode */}
      {selectedMode === 'order' && (
        <div>
          <button
            onClick={resetMode}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mb-4 text-sm"
          >
            ← 모드 선택으로
          </button>

          <div className="text-center mb-6">
            <div className="text-5xl mb-2">📋</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">순서 정하기</h2>
          </div>

          {/* People Count */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
            <label className="text-gray-600 dark:text-gray-400 text-sm block mb-4 text-center">인원수</label>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setPeopleCount(prev => Math.max(2, prev - 1))}
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-gray-900 dark:text-white text-2xl font-bold"
              >
                -
              </button>
              <span className="text-4xl font-bold text-gray-900 dark:text-white w-16 text-center">{peopleCount}</span>
              <button
                onClick={() => setPeopleCount(prev => Math.min(20, prev + 1))}
                className="w-12 h-12 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-gray-900 dark:text-white text-2xl font-bold"
              >
                +
              </button>
            </div>
            <p className="text-gray-500 text-sm text-center mt-2">최소 2명 ~ 최대 20명</p>
          </div>

          {/* Result Display */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-500/30 rounded-2xl p-6 mb-6">
            {isShuffling ? (
              <div className="text-center py-8">
                <div className="animate-spin text-5xl mb-4">🔄</div>
                <p className="text-gray-600 dark:text-gray-400">순서 정하는 중...</p>
              </div>
            ) : orderResult.length > 0 ? (
              <div className="space-y-3">
                {orderResult.map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <span className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-amber-600' : 'bg-gray-500'}`}>
                      {index + 1}
                    </span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{person}번</span>
                    {index === 0 && <span className="ml-auto text-yellow-500">👑 첫 번째!</span>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">버튼을 눌러 순서를 정하세요!</p>
              </div>
            )}
          </div>

          {/* Shuffle Button */}
          <button
            onClick={shuffleOrder}
            disabled={isShuffling}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            {isShuffling ? '🔄 섞는 중...' : '🎯 순서 정하기!'}
          </button>

          {/* Share */}
          {orderResult.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">결과 공유하기</p>
              <ShareButtons
                title="순서 정하기 결과!"
                description={`순서: ${orderResult.map((p, i) => `${i+1}번째-${p}번`).join(', ')}`}
              />
            </div>
          )}
        </div>
      )}

      {/* Lottery Mode */}
      {selectedMode === 'lottery' && (
        <div>
          <button
            onClick={resetMode}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mb-4 text-sm"
          >
            ← 모드 선택으로
          </button>

          <div className="text-center mb-6">
            <div className="text-5xl mb-2">🎫</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">제비뽑기</h2>
          </div>

          {/* Settings */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600 dark:text-gray-400 text-sm block mb-2 text-center">총 인원</label>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setTotalPeople(prev => Math.max(2, prev - 1))}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white w-12 text-center">{totalPeople}</span>
                  <button
                    onClick={() => setTotalPeople(prev => Math.min(100, prev + 1))}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="text-gray-600 dark:text-gray-400 text-sm block mb-2 text-center">당첨자 수</label>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setWinnerCount(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white w-12 text-center">{winnerCount}</span>
                  <button
                    onClick={() => setWinnerCount(prev => Math.min(totalPeople, prev + 1))}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center mt-4">
              {totalPeople}명 중 {winnerCount}명 당첨 (확률: {((winnerCount / totalPeople) * 100).toFixed(1)}%)
            </p>
          </div>

          {/* Result Display */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-500/30 rounded-2xl p-6 mb-6">
            {isDrawing ? (
              <div className="text-center py-8">
                <div className="animate-bounce text-6xl mb-4">🎰</div>
                <p className="text-gray-600 dark:text-gray-400">당첨자 추첨 중...</p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            ) : winners.length > 0 ? (
              <div className="text-center">
                <p className="text-indigo-500 mb-4">🎉 당첨자 발표!</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {winners.map((winner, index) => (
                    <div
                      key={index}
                      className="bg-indigo-500 px-6 py-4 rounded-2xl"
                    >
                      <span className="text-white text-3xl font-bold">{winner}번</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm">
                  {totalPeople}명 중 {winners.length}명 당첨!
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">버튼을 눌러 당첨자를 뽑으세요!</p>
              </div>
            )}
          </div>

          {/* Draw Button */}
          <button
            onClick={drawLottery}
            disabled={isDrawing || winnerCount > totalPeople}
            className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            {isDrawing ? '🎰 추첨 중...' : '🎫 당첨자 뽑기!'}
          </button>

          {/* Share */}
          {winners.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">결과 공유하기</p>
              <ShareButtons
                title="제비뽑기 당첨 결과!"
                description={`${totalPeople}명 중 당첨자: ${winners.map(w => `${w}번`).join(', ')}! 🎉`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
