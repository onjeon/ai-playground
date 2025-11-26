// 바람기 지수 테스트 - 나의 숨겨진 바람기는?

export interface CheatingRiskQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface CheatingRiskResult {
  type: string;
  title: string;
  emoji: string;
  level: number; // 1-5
  subtitle: string;
  description: string;
  percentage: string;
  characteristics: string[];
  riskFactors: string[];
  warningSignals: string[];
  loyaltyFactors: string[];
  partnerAdvice: string[];
  selfAdvice: string[];
  conclusion: string;
}

export const cheatingRiskTypes = ['saint', 'loyal', 'tempted', 'risky', 'danger'] as const;
export type CheatingRiskType = typeof cheatingRiskTypes[number];

export const questions: CheatingRiskQuestion[] = [
  {
    id: 1,
    question: "매력적인 이성이 호감을 보일 때 나는?",
    options: [
      { text: "상대하지 않고 거리 둔다", scores: { saint: 3 } },
      { text: "기분은 좋지만 선을 지킨다", scores: { loyal: 3 } },
      { text: "적당히 응대하며 즐긴다", scores: { tempted: 3 } },
      { text: "은근히 기대되고 설렌다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 2,
    question: "연인과 권태기가 왔을 때 나는?",
    options: [
      { text: "더 노력해서 관계를 지킨다", scores: { saint: 2, loyal: 1 } },
      { text: "힘들어도 참고 기다린다", scores: { loyal: 3 } },
      { text: "다른 곳에서 자극을 찾게 된다", scores: { tempted: 2, risky: 1 } },
      { text: "새로운 만남이 생각난다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 3,
    question: "썸 타는 것에 대한 생각은?",
    options: [
      { text: "연인 있으면 절대 안 됨", scores: { saint: 3 } },
      { text: "선 넘지 않으면 괜찮다고 생각하지만 안 함", scores: { loyal: 3 } },
      { text: "가벼운 썸 정도는 괜찮지 않나?", scores: { tempted: 3 } },
      { text: "썸 타는 재미가 있어야 삶이 즐겁지", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 4,
    question: "과거 연애에서 마음이 흔들린 적?",
    options: [
      { text: "단 한 번도 없다", scores: { saint: 3 } },
      { text: "있었지만 행동으로 옮기진 않았다", scores: { loyal: 2, tempted: 1 } },
      { text: "몇 번 아슬아슬했던 적 있다", scores: { tempted: 2, risky: 1 } },
      { text: "솔직히 꽤 자주 있었다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 5,
    question: "연인 몰래 이성과 연락하는 것은?",
    options: [
      { text: "절대 용납 못함", scores: { saint: 3 } },
      { text: "내용에 따라 다르지만 기본적으로 안 함", scores: { loyal: 3 } },
      { text: "친구면 괜찮지 않나?", scores: { tempted: 3 } },
      { text: "연인이 모르면 상관없다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 6,
    question: "이상형을 만났을 때 연인이 있다면?",
    options: [
      { text: "연인에게 더 집중한다", scores: { saint: 3 } },
      { text: "눈에 담고만 있는다", scores: { loyal: 2, tempted: 1 } },
      { text: "친구로 알아가고 싶다", scores: { tempted: 2, risky: 1 } },
      { text: "연인과 비교하게 된다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 7,
    question: "술자리에서 분위기 좋은 이성과 둘이 남으면?",
    options: [
      { text: "바로 자리를 피한다", scores: { saint: 3 } },
      { text: "선을 지키며 대화만 한다", scores: { loyal: 3 } },
      { text: "분위기 즐기되 선은 지킨다... 아마도", scores: { tempted: 3 } },
      { text: "그 순간을 즐긴다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 8,
    question: "바람에 대한 솔직한 생각은?",
    options: [
      { text: "어떤 상황에서도 절대 안 됨", scores: { saint: 3 } },
      { text: "이해는 하지만 나는 안 함", scores: { loyal: 3 } },
      { text: "상황과 감정에 따라 다를 수 있다", scores: { tempted: 2, risky: 1 } },
      { text: "인간의 본능이니 어쩔 수 없다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 9,
    question: "연인이 나보다 매력적인 이성과 친하면?",
    options: [
      { text: "믿지만 불편하다", scores: { saint: 2, loyal: 1 } },
      { text: "신경 쓰이지만 참는다", scores: { loyal: 2, tempted: 1 } },
      { text: "나도 그렇게 해야겠다는 생각", scores: { tempted: 2, risky: 1 } },
      { text: "나도 자유롭게 행동할 명분이 생김", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 10,
    question: "새로운 만남/인연에 대한 욕구는?",
    options: [
      { text: "연인만 있으면 충분하다", scores: { saint: 3 } },
      { text: "가끔 궁금하지만 행동은 안 함", scores: { loyal: 2, tempted: 1 } },
      { text: "새로운 사람 만나는 건 언제나 설렌다", scores: { tempted: 2, risky: 1 } },
      { text: "항상 새로운 인연에 열려있다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 11,
    question: "연애 중 외로움을 느낄 때?",
    options: [
      { text: "연인에게 솔직히 말한다", scores: { saint: 2, loyal: 1 } },
      { text: "혼자 삭이거나 친구를 찾는다", scores: { loyal: 3 } },
      { text: "다른 이성에게 관심이 간다", scores: { tempted: 2, risky: 1 } },
      { text: "다른 곳에서 위로받고 싶다", scores: { risky: 2, danger: 1 } },
    ],
  },
  {
    id: 12,
    question: "솔직히 나의 자제력은?",
    options: [
      { text: "철벽, 흔들리지 않는다", scores: { saint: 3 } },
      { text: "대체로 강하지만 가끔 힘들 때도", scores: { loyal: 2, tempted: 1 } },
      { text: "상황에 따라 다르다", scores: { tempted: 2, risky: 1 } },
      { text: "솔직히 약한 편이다", scores: { risky: 2, danger: 1 } },
    ],
  },
];

export const results: Record<CheatingRiskType, CheatingRiskResult> = {
  saint: {
    type: 'saint',
    title: '성자급 충성파',
    emoji: '😇',
    level: 1,
    subtitle: '바람? 그게 뭔가요?',
    description: '당신의 바람기 지수는 거의 0에 가까워요! 연인에 대한 충성심이 매우 강하고, 유혹에도 흔들리지 않는 철벽 마인드를 가졌어요. 한 사람만 바라보는 진정한 일편단심 타입이에요.',
    percentage: '0~10%',
    characteristics: ['강한 충성심', '확고한 가치관', '유혹 면역', '일편단심'],
    riskFactors: ['거의 없음'],
    warningSignals: ['지나친 의심은 상대를 지치게 할 수 있음'],
    loyaltyFactors: ['도덕적 가치관', '깊은 사랑', '자기 통제력', '관계에 대한 존중'],
    partnerAdvice: [
      '축하해요! 믿을 수 있는 파트너예요',
      '그래도 관계에 소홀하지 마세요',
      '당연하게 여기지 말고 감사 표현하세요',
    ],
    selfAdvice: [
      '너무 엄격한 잣대로 타인을 판단하지 마세요',
      '융통성도 필요할 때가 있어요',
      '상대방도 같은 기준을 가지길 기대하지 마세요',
    ],
    conclusion: '당신은 연애의 모범생! 믿고 사귈 수 있는 파트너예요.',
  },
  loyal: {
    type: 'loyal',
    title: '충성스러운 연인',
    emoji: '🐕',
    level: 2,
    subtitle: '흔들려도 지키는 편',
    description: '당신은 기본적으로 충성스러운 타입이에요. 가끔 마음이 흔들릴 때도 있지만, 행동으로 옮기진 않죠. 이성과 감정 사이에서 이성을 선택하는 믿음직한 파트너예요.',
    percentage: '10~30%',
    characteristics: ['기본적 충성심', '자기 통제력', '이성적 판단', '죄책감 강함'],
    riskFactors: ['극심한 권태기', '연인의 무관심'],
    warningSignals: ['마음이 흔들리면 솔직하게 대화하세요'],
    loyaltyFactors: ['양심과 책임감', '관계에 대한 존중', '상대를 향한 사랑', '평판 의식'],
    partnerAdvice: [
      '믿어도 좋지만 관계 관리는 필요해요',
      '권태기에 주의하세요',
      '꾸준한 애정 표현을 해주세요',
    ],
    selfAdvice: [
      '흔들리는 마음도 인정하고 대화하세요',
      '관계에서 부족함은 직접 해결하세요',
      '도망치지 말고 마주하세요',
    ],
    conclusion: '믿을 수 있는 연인! 하지만 관계 관리는 계속 필요해요.',
  },
  tempted: {
    type: 'tempted',
    title: '유혹에 약한 타입',
    emoji: '😏',
    level: 3,
    subtitle: '마음은 흔들려도 이성으로 버팀',
    description: '당신은 솔직히 유혹에 약한 편이에요. 매력적인 이성이 다가오면 마음이 흔들리고, 가끔 아슬아슬한 줄타기를 해요. 아직까지는 선을 지키지만, 상황에 따라 위험할 수도 있어요.',
    percentage: '30~50%',
    characteristics: ['유혹에 약함', '호기심 많음', '새로움 추구', '자극 필요'],
    riskFactors: ['연인과의 갈등', '매력적인 유혹', '술자리', '권태기'],
    warningSignals: ['아슬아슬한 상황 자체를 피하세요', '경계가 흐려지고 있어요'],
    loyaltyFactors: ['양심', '관계에 대한 투자', '발각에 대한 두려움'],
    partnerAdvice: [
      '방심하면 안 돼요!',
      '관계에 자극과 재미를 더해주세요',
      '상대의 욕구를 파악하세요',
    ],
    selfAdvice: [
      '위험한 상황 자체를 피하세요',
      '관계의 문제를 외부에서 해결하려 하지 마세요',
      '흔들리는 이유를 직면하세요',
    ],
    conclusion: '주의 필요! 상황 관리와 자기 인식이 중요해요.',
  },
  risky: {
    type: 'risky',
    title: '위험 신호 감지',
    emoji: '⚠️',
    level: 4,
    subtitle: '언제 터질지 모르는 시한폭탄',
    description: '솔직히 말하면, 당신의 바람기 지수는 꽤 높은 편이에요. 새로운 자극을 추구하고, 유혹에 약하며, 상황에 따라 선을 넘을 가능성이 높아요. 스스로 인정하고 관리가 필요해요.',
    percentage: '50~70%',
    characteristics: ['새로움 추구', '자극 필요', '선 긋기 애매', '합리화 경향'],
    riskFactors: ['연애 권태기', '불만족', '매력적인 유혹', '기회'],
    warningSignals: ['이미 위험한 상황을 경험했을 수 있어요', '합리화하고 있지 않나요?'],
    loyaltyFactors: ['발각에 대한 두려움', '상대에 대한 미안함'],
    partnerAdvice: [
      '주의가 필요해요',
      '관계를 점검해보세요',
      '상대의 불만족 포인트를 파악하세요',
    ],
    selfAdvice: [
      '왜 밖에서 자극을 찾는지 생각해보세요',
      '현재 관계가 맞는지 점검하세요',
      '충동과 진심을 구분하세요',
    ],
    conclusion: '경고! 자기 인식과 관계 점검이 시급해요.',
  },
  danger: {
    type: 'danger',
    title: '바람둥이 포텐셜',
    emoji: '🚨',
    level: 5,
    subtitle: '한 사람은 좀 심심해',
    description: '당신의 바람기 지수는 매우 높아요. 한 사람에게 만족하기 어렵고, 새로운 자극과 만남을 끊임없이 추구해요. 이것이 나쁜 건 아니지만, 모노가미 관계에서는 문제가 될 수 있어요.',
    percentage: '70~100%',
    characteristics: ['강한 자극 추구', '쉽게 지루함', '다양성 선호', '충동적'],
    riskFactors: ['기회가 있을 때', '조금이라도 불만족', '새로운 매력적인 상대'],
    warningSignals: ['일부일처제가 맞는지 고민해보세요', '상대에게 솔직해지세요'],
    loyaltyFactors: ['강한 사랑에 빠졌을 때만'],
    partnerAdvice: [
      '신중하게 생각해보세요',
      '열린 관계 등 대안도 논의해보세요',
      '상대의 본성을 바꾸긴 어려워요',
    ],
    selfAdvice: [
      '일부일처제가 나에게 맞는지 고민해보세요',
      '정직하게 소통하세요',
      '상대방에게도 선택권을 주세요',
      '왜 한 사람에게 만족하지 못하는지 탐구해보세요',
    ],
    conclusion: '높은 바람기! 나와 상대 모두를 위해 솔직해질 필요가 있어요.',
  },
};

export function calculateResult(answers: number[]): CheatingRiskResult {
  const scores: Record<CheatingRiskType, number> = {
    saint: 0,
    loyal: 0,
    tempted: 0,
    risky: 0,
    danger: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as CheatingRiskType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: CheatingRiskType = 'loyal';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as CheatingRiskType;
    }
  });

  return results[resultType];
}
