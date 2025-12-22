import { WorldCup } from './types';
import { ramenWorldCup } from './ramen';
import { dessertWorldCup } from './dessert';
import { dogWorldCup } from './dog';
import { indianFoodWorldCup } from './indian-food';
import { indianSweetsWorldCup } from './indian-sweets';
import { bollywoodWorldCup } from './bollywood';
import { cricketWorldCup } from './cricket';
import { mexicanFoodWorldCup } from './mexican-food';
import { mexicanDulcesWorldCup } from './mexican-dulces';
import { mexicanCelebritiesWorldCup } from './mexican-celebrities';
import { mexicanFutbolWorldCup } from './mexican-futbol';
import { japaneseFoodWorldCup } from './japanese-food';
import { japaneseSweetsWorldCup } from './japanese-sweets';
import { japaneseCelebritiesWorldCup } from './japanese-celebrities';
import { japaneseAnimeWorldCup } from './japanese-anime';
import { taiwaneseFoodWorldCup } from './taiwanese-food';
import { taiwaneseSnacksWorldCup } from './taiwanese-snacks';
import { taiwaneseCelebritiesWorldCup } from './taiwanese-celebrities';
import { taiwaneseNightMarketWorldCup } from './taiwanese-night-market';
import { thaiFoodWorldCup } from './thai-food';
import { thaiDessertsWorldCup } from './thai-desserts';
import { thaiCelebritiesWorldCup } from './thai-celebrities';
import { thaiPlacesWorldCup } from './thai-places';
import { indonesianFoodWorldCup } from './indonesian-food';
import { indonesianSnacksWorldCup } from './indonesian-snacks';
import { indonesianCelebritiesWorldCup } from './indonesian-celebrities';
import { indonesianPlacesWorldCup } from './indonesian-places';
import { vietnameseFoodWorldCup } from './vietnamese-food';
import { vietnameseDessertsWorldCup } from './vietnamese-desserts';
import { vietnameseCelebritiesWorldCup } from './vietnamese-celebrities';
import { vietnamesePlacesWorldCup } from './vietnamese-places';
import { filipinoFoodWorldCup } from './filipino-food';
import { filipinoDessertsWorldCup } from './filipino-desserts';
import { filipinoCelebritiesWorldCup } from './filipino-celebrities';
import { filipinoPlacesWorldCup } from './filipino-places';
import { malaysianFoodWorldCup } from './malaysian-food';
import { malaysianDessertsWorldCup } from './malaysian-desserts';
import { malaysianCelebritiesWorldCup } from './malaysian-celebrities';
import { malaysianPlacesWorldCup } from './malaysian-places';
import { brazilianFoodWorldCup } from './brazilian-food';
import { brazilianDessertsWorldCup } from './brazilian-desserts';
import { brazilianCelebritiesWorldCup } from './brazilian-celebrities';
import { brazilianPlacesWorldCup } from './brazilian-places';

export * from './types';

// 모든 월드컵 데이터
export const worldCups: WorldCup[] = [
  ramenWorldCup,
  dessertWorldCup,
  dogWorldCup,
  // India
  indianFoodWorldCup,
  indianSweetsWorldCup,
  bollywoodWorldCup,
  cricketWorldCup,
  // Mexico
  mexicanFoodWorldCup,
  mexicanDulcesWorldCup,
  mexicanCelebritiesWorldCup,
  mexicanFutbolWorldCup,
  // Japan
  japaneseFoodWorldCup,
  japaneseSweetsWorldCup,
  japaneseCelebritiesWorldCup,
  japaneseAnimeWorldCup,
  // Taiwan
  taiwaneseFoodWorldCup,
  taiwaneseSnacksWorldCup,
  taiwaneseCelebritiesWorldCup,
  taiwaneseNightMarketWorldCup,
  // Thailand
  thaiFoodWorldCup,
  thaiDessertsWorldCup,
  thaiCelebritiesWorldCup,
  thaiPlacesWorldCup,
  // Indonesia
  indonesianFoodWorldCup,
  indonesianSnacksWorldCup,
  indonesianCelebritiesWorldCup,
  indonesianPlacesWorldCup,
  // Vietnam
  vietnameseFoodWorldCup,
  vietnameseDessertsWorldCup,
  vietnameseCelebritiesWorldCup,
  vietnamesePlacesWorldCup,
  // Philippines
  filipinoFoodWorldCup,
  filipinoDessertsWorldCup,
  filipinoCelebritiesWorldCup,
  filipinoPlacesWorldCup,
  // Malaysia
  malaysianFoodWorldCup,
  malaysianDessertsWorldCup,
  malaysianCelebritiesWorldCup,
  malaysianPlacesWorldCup,
  // Brazil
  brazilianFoodWorldCup,
  brazilianDessertsWorldCup,
  brazilianCelebritiesWorldCup,
  brazilianPlacesWorldCup,
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
