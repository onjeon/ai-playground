import { WorldCup } from './types';
import { ramenWorldCup } from './ramen';
import { dessertWorldCup } from './dessert';
import { dogWorldCup } from './dog';

export * from './types';

// 모든 월드컵 데이터
export const worldCups: WorldCup[] = [
  ramenWorldCup,
  dessertWorldCup,
  dogWorldCup,
];

// 유틸리티 함수
export function getWorldCupBySlug(slug: string): WorldCup | undefined {
  return worldCups.find(wc => wc.slug === slug);
}

export function getWorldCupsByCategory(category: WorldCup['category']): WorldCup[] {
  return worldCups.filter(wc => wc.category === category);
}

// 토너먼트 라운드 계산
export function getAvailableRounds(itemCount: number): number[] {
  const rounds: number[] = [];
  let round = 4; // 최소 4강
  while (round <= itemCount) {
    rounds.push(round);
    round *= 2;
  }
  return rounds.reverse(); // 큰 수부터
}

// 셔플 함수
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
