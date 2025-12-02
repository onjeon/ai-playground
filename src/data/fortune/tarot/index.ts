// 타로 3카드 데이터 및 로직
import tarotCards from './cards.json';

export interface TarotCard {
  id: string;
  nameKo: string;
  nameEn: string;
  keywords: string[];
  upright: {
    general: string;
    advice: string;
    love: string;
    career: string;
  };
  reversed: {
    general: string;
    advice: string;
    love: string;
    career: string;
  };
  imagePath: string;
}

export type SpreadPosition = 'past' | 'present' | 'future';
export type ReadingType = 'general' | 'love' | 'career';

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position: SpreadPosition;
}

export interface TarotReading {
  question: string;
  readingType: ReadingType;
  cards: DrawnCard[];
  timestamp: string;
}

// 카드 이모지 매핑 (메이저 아르카나)
const CARD_EMOJIS: Record<string, string> = {
  'major_00': '🃏', // 광대
  'major_01': '🎩', // 마법사
  'major_02': '🌙', // 여사제
  'major_03': '👑', // 여제
  'major_04': '🏰', // 황제
  'major_05': '⛪', // 교황
  'major_06': '💕', // 연인
  'major_07': '🏎️', // 전차
  'major_08': '🦁', // 힘
  'major_09': '🏔️', // 은둔자
  'major_10': '🎡', // 운명의 수레바퀴
  'major_11': '⚖️', // 정의
  'major_12': '🙃', // 매달린 남자
  'major_13': '💀', // 죽음
  'major_14': '🏺', // 절제
  'major_15': '😈', // 악마
  'major_16': '🗼', // 탑
  'major_17': '⭐', // 별
  'major_18': '🌕', // 달
  'major_19': '☀️', // 태양
  'major_20': '📯', // 심판
  'major_21': '🌍', // 세계
  // 마이너 아르카나 - 지팡이
  'wands_01': '🔥', 'wands_02': '🌐', 'wands_03': '🚀', 'wands_04': '🏠',
  'wands_05': '⚔️', 'wands_06': '🏆', 'wands_07': '💪', 'wands_08': '✈️',
  'wands_09': '🛡️', 'wands_10': '😰', 'wands_page': '📨', 'wands_knight': '🐎',
  'wands_queen': '👸', 'wands_king': '🤴',
  // 마이너 아르카나 - 컵
  'cups_01': '🏆', 'cups_02': '💑', 'cups_03': '🎉', 'cups_04': '😔',
  'cups_05': '😢', 'cups_06': '🧒', 'cups_07': '🌈', 'cups_08': '🚶',
  'cups_09': '😊', 'cups_10': '👨‍👩‍👧‍👦', 'cups_page': '💌', 'cups_knight': '🦄',
  'cups_queen': '💝', 'cups_king': '🎭',
  // 마이너 아르카나 - 검
  'swords_01': '🗡️', 'swords_02': '🤔', 'swords_03': '💔', 'swords_04': '😴',
  'swords_05': '😤', 'swords_06': '⛵', 'swords_07': '🕵️', 'swords_08': '🔒',
  'swords_09': '😱', 'swords_10': '🔚', 'swords_page': '👀', 'swords_knight': '⚡',
  'swords_queen': '❄️', 'swords_king': '👨‍⚖️',
  // 마이너 아르카나 - 펜타클
  'pentacles_01': '💰', 'pentacles_02': '🎭', 'pentacles_03': '🏗️', 'pentacles_04': '🏦',
  'pentacles_05': '❄️', 'pentacles_06': '🤝', 'pentacles_07': '🌱', 'pentacles_08': '🔨',
  'pentacles_09': '🍇', 'pentacles_10': '👨‍👩‍👧‍👦', 'pentacles_page': '📚', 'pentacles_knight': '🐢',
  'pentacles_queen': '🌻', 'pentacles_king': '💎',
};

/**
 * 카드 이모지 가져오기
 */
export function getCardEmoji(cardId: string): string {
  return CARD_EMOJIS[cardId] || '🎴';
}

/**
 * 전체 타로 카드 가져오기
 */
export function getAllCards(): TarotCard[] {
  return tarotCards as TarotCard[];
}

/**
 * 메이저 아르카나만 가져오기
 */
export function getMajorArcana(): TarotCard[] {
  return (tarotCards as TarotCard[]).filter(card => card.id.startsWith('major_'));
}

/**
 * 랜덤으로 카드 3장 뽑기
 */
export function drawThreeCards(useMajorOnly: boolean = false): DrawnCard[] {
  const deck = useMajorOnly ? getMajorArcana() : getAllCards();
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  const positions: SpreadPosition[] = ['past', 'present', 'future'];
  
  return positions.map((position, index) => ({
    card: shuffled[index],
    isReversed: Math.random() > 0.5,
    position,
  }));
}

/**
 * 시드 기반 카드 뽑기 (같은 질문이면 같은 결과)
 */
export function drawCardsWithSeed(question: string, readingType: ReadingType): DrawnCard[] {
  // 질문 + 날짜로 시드 생성
  const today = new Date().toDateString();
  const seed = hashString(question + today + readingType);
  const random = seededRandom(seed);
  
  const deck = getAllCards();
  const shuffled = [...deck].sort(() => random() - 0.5);
  const positions: SpreadPosition[] = ['past', 'present', 'future'];
  
  return positions.map((position, index) => ({
    card: shuffled[index],
    isReversed: random() > 0.5,
    position,
  }));
}

/**
 * 문자열 해시
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * 시드 기반 난수 생성기
 */
function seededRandom(seed: number) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

/**
 * 포지션 라벨
 */
export function getPositionLabel(position: SpreadPosition): string {
  const labels: Record<SpreadPosition, string> = {
    past: '과거',
    present: '현재',
    future: '미래',
  };
  return labels[position];
}

/**
 * 포지션 설명
 */
export function getPositionDescription(position: SpreadPosition): string {
  const descriptions: Record<SpreadPosition, string> = {
    past: '이 상황의 배경과 원인',
    present: '현재 당신이 처한 상황',
    future: '앞으로 펼쳐질 가능성',
  };
  return descriptions[position];
}

/**
 * 리딩 타입 라벨
 */
export function getReadingTypeLabel(type: ReadingType): string {
  const labels: Record<ReadingType, string> = {
    general: '전체 운세',
    love: '연애/관계',
    career: '직장/커리어',
  };
  return labels[type];
}

/**
 * 카드 해석 가져오기
 */
export function getCardInterpretation(
  card: TarotCard,
  isReversed: boolean,
  readingType: ReadingType
): string {
  const meaning = isReversed ? card.reversed : card.upright;
  
  switch (readingType) {
    case 'love':
      return meaning.love;
    case 'career':
      return meaning.career;
    default:
      return meaning.general;
  }
}

/**
 * 종합 해석 생성
 */
export function generateOverallReading(cards: DrawnCard[], readingType: ReadingType): string {
  const pastCard = cards.find(c => c.position === 'past')!;
  const presentCard = cards.find(c => c.position === 'present')!;
  const futureCard = cards.find(c => c.position === 'future')!;

  const typeLabel = getReadingTypeLabel(readingType);
  
  return `
**${typeLabel}에 대한 타로 리딩**

📜 **과거 - ${pastCard.card.nameKo}${pastCard.isReversed ? ' (역방향)' : ''}**
${getCardInterpretation(pastCard.card, pastCard.isReversed, readingType)}

🔮 **현재 - ${presentCard.card.nameKo}${presentCard.isReversed ? ' (역방향)' : ''}**
${getCardInterpretation(presentCard.card, presentCard.isReversed, readingType)}

✨ **미래 - ${futureCard.card.nameKo}${futureCard.isReversed ? ' (역방향)' : ''}**
${getCardInterpretation(futureCard.card, futureCard.isReversed, readingType)}

💡 **조언**
${presentCard.isReversed ? presentCard.card.reversed.advice : presentCard.card.upright.advice}
  `.trim();
}
