// 타로 카드 리더 로직
import tarotData from '@/data/premium/tarot/cards.json';

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

export interface SelectedCard extends TarotCard {
  isReversed: boolean;
  position: number;
}

export interface CardInterpretation {
  card: SelectedCard;
  positionMeaning: string;
  interpretation: string;
}

export interface TarotReading {
  title: string;
  description: string;
  cards: CardInterpretation[];
  overall: string;
}

export type SpreadType = 'general' | 'love' | 'money' | 'relationship' | 'timeline' | 'choice';

// 타로 데이터 로드
const cards: TarotCard[] = tarotData as TarotCard[];

/**
 * Fisher-Yates 셔플
 */
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 랜덤 카드 뽑기 (버튼 클릭 시 바로 결과)
 */
export function drawCards(count: number): SelectedCard[] {
  const shuffled = shuffle(cards);
  return shuffled.slice(0, count).map((card, index) => ({
    ...card,
    isReversed: Math.random() < 0.3, // 30% 역방향
    position: index,
    // 이미지 경로 수정 (ai_playground용)
    imagePath: `/images/tarot/${card.imagePath.split('/').pop()}`
  }));
}

/**
 * 스프레드별 필요 카드 수
 */
export function getCardCount(spreadType: SpreadType): number {
  const counts: Record<SpreadType, number> = {
    general: 1,
    love: 1,
    money: 1,
    relationship: 4,
    timeline: 3,
    choice: 3
  };
  return counts[spreadType];
}

/**
 * 스프레드별 정보
 */
export function getSpreadInfo(spreadType: SpreadType, userChoices?: { choiceA: string; choiceB: string }) {
  const info: Record<SpreadType, { title: string; description: string; icon: string }> = {
    general: {
      title: '오늘의 총운',
      description: '오늘 하루를 이끌어갈 전체적인 운세와 조언',
      icon: '🌟'
    },
    love: {
      title: '오늘의 연애운',
      description: '사랑과 관계에서 오늘 주의할 부분',
      icon: '💕'
    },
    money: {
      title: '오늘의 금전운',
      description: '재정과 직업에서 오늘의 흐름',
      icon: '💰'
    },
    relationship: {
      title: '연인관계 분석',
      description: '현재 관계를 4장의 카드로 심층 분석',
      icon: '💑'
    },
    timeline: {
      title: '과거-현재-미래',
      description: '시간의 흐름 속 상황의 원인과 방향',
      icon: '⏳'
    },
    choice: {
      title: userChoices ? `${userChoices.choiceA} vs ${userChoices.choiceB}` : '선택의 기로',
      description: userChoices 
        ? `두 선택 중 어떤 것이 더 나은지 분석`
        : '두 가지 선택의 결과와 최선의 방향',
      icon: '🔮'
    }
  };
  return info[spreadType];
}

/**
 * 위치별 의미 가져오기
 */
function getPositionMeaning(spreadType: SpreadType, index: number, userChoices?: { choiceA: string; choiceB: string }): string {
  const positions: Record<SpreadType, string[]> = {
    general: ['오늘의 메시지'],
    love: ['연애 에너지'],
    money: ['금전 에너지'],
    relationship: ['내 마음', '상대 마음', '장애물', '조언'],
    timeline: ['과거', '현재', '미래'],
    choice: userChoices 
      ? ['현재 상황', `"${userChoices.choiceA}" 선택`, `"${userChoices.choiceB}" 선택`]
      : ['현재 상황', 'A 선택', 'B 선택']
  };
  return positions[spreadType][index] || `${index + 1}번째 카드`;
}

/**
 * 해석 텍스트 가져오기
 */
function getInterpretationText(card: SelectedCard, spreadType: SpreadType): string {
  const meaning = card.isReversed ? card.reversed : card.upright;
  
  switch (spreadType) {
    case 'love':
    case 'relationship':
      return meaning.love;
    case 'money':
      return meaning.career;
    default:
      return meaning.general;
  }
}

/**
 * 종합 해석 생성
 */
function generateOverall(cards: CardInterpretation[], spreadType: SpreadType, userChoices?: { choiceA: string; choiceB: string }): string {
  const hasReversed = cards.some(c => c.card.isReversed);
  
  switch (spreadType) {
    case 'general':
    case 'love':
    case 'money':
      return `${cards[0].card.nameKo} 카드가 오늘의 에너지를 나타냅니다. ${
        hasReversed 
          ? '역방향 에너지가 나타나 신중한 접근이 필요합니다.' 
          : '정방향 에너지로 긍정적인 흐름이 예상됩니다.'
      }`;
      
    case 'relationship':
      return `관계의 전체적인 흐름을 보면, ${
        hasReversed
          ? '일부 어려움이 있을 수 있지만 극복할 방법이 제시되었습니다.'
          : '대체로 조화로운 관계 발전이 가능합니다.'
      }`;
      
    case 'timeline':
      return '과거의 경험이 현재에 영향을 주고 있으며, 현재의 선택이 미래의 중요한 전환점이 될 것입니다.';
      
    case 'choice':
      if (userChoices) {
        return `"${userChoices.choiceA}"와 "${userChoices.choiceB}" 모두 각각의 장단점이 있습니다. 카드의 메시지를 종합하면, 내면의 목소리에 귀 기울이며 결정하시는 것이 좋겠습니다.`;
      }
      return '두 선택 모두 각각의 장단점이 있습니다. 내면의 목소리에 귀 기울이며 결정하세요.';
      
    default:
      return '';
  }
}

/**
 * 타로 리딩 생성 (메인 함수)
 */
export function generateTarotReading(
  spreadType: SpreadType, 
  userChoices?: { choiceA: string; choiceB: string }
): TarotReading {
  const cardCount = getCardCount(spreadType);
  const drawnCards = drawCards(cardCount);
  const spreadInfo = getSpreadInfo(spreadType, userChoices);
  
  const interpretations: CardInterpretation[] = drawnCards.map((card, index) => ({
    card,
    positionMeaning: getPositionMeaning(spreadType, index, userChoices),
    interpretation: getInterpretationText(card, spreadType)
  }));
  
  return {
    title: spreadInfo.title,
    description: spreadInfo.description,
    cards: interpretations,
    overall: generateOverall(interpretations, spreadType, userChoices)
  };
}

/**
 * 일일 리딩 제한 체크
 */
export function checkDailyLimit(spreadType: SpreadType): boolean {
  if (typeof window === 'undefined') return true;
  
  const today = new Date().toDateString();
  const key = `tarot_${spreadType}_${today}`;
  return !localStorage.getItem(key);
}

/**
 * 일일 리딩 기록
 */
export function recordDailyReading(spreadType: SpreadType): void {
  if (typeof window === 'undefined') return;
  
  const today = new Date().toDateString();
  const key = `tarot_${spreadType}_${today}`;
  localStorage.setItem(key, 'true');
}

/**
 * 카드 이모지 (이미지 로딩 실패 시 대체용)
 */
export function getCardEmoji(cardId: string): string {
  const emojis: Record<string, string> = {
    'major_00': '🃏', 'major_01': '🎩', 'major_02': '🌙', 'major_03': '👑',
    'major_04': '🏰', 'major_05': '⛪', 'major_06': '💕', 'major_07': '🏎️',
    'major_08': '🦁', 'major_09': '🏔️', 'major_10': '🎡', 'major_11': '⚖️',
    'major_12': '🙃', 'major_13': '💀', 'major_14': '🏺', 'major_15': '😈',
    'major_16': '🗼', 'major_17': '⭐', 'major_18': '🌕', 'major_19': '☀️',
    'major_20': '📯', 'major_21': '🌍'
  };
  return emojis[cardId] || '🎴';
}
