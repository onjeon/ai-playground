// 월드컵 아이템 타입
export interface WorldCupItem {
  id: string;
  name: string;
  image: string; // 이미지 URL 또는 이모지
  description?: string;
}

// 월드컵 카테고리 타입
export interface WorldCup {
  id: string;
  slug: string;
  title: string;
  description: string;
  emoji: string;
  category: 'food' | 'animal' | 'travel' | 'lifestyle' | 'etc';
  items: WorldCupItem[];
  backgroundColor?: string;
  participantCount: number;
}

// 월드컵 결과 타입
export interface WorldCupResult {
  winner: WorldCupItem;
  runnerUp: WorldCupItem;
  semifinalists: WorldCupItem[];
  totalRounds: number;
}
