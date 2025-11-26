// 다크 트라이어드 테스트 - 나르시시즘, 마키아벨리즘, 사이코패시 측정
// 참고: Short Dark Triad (SD3) 기반으로 재구성

export const questions = [
  // 나르시시즘 (Narcissism) - 1~9
  {
    id: 1,
    question: "나는 다른 사람들보다 특별한 존재라고 느낀다",
    options: [
      { text: "전혀 그렇지 않다", narcissism: 1 },
      { text: "그렇지 않다", narcissism: 2 },
      { text: "보통이다", narcissism: 3 },
      { text: "그렇다", narcissism: 4 },
      { text: "매우 그렇다", narcissism: 5 },
    ],
  },
  {
    id: 2,
    question: "나는 주목받는 것을 좋아한다",
    options: [
      { text: "전혀 그렇지 않다", narcissism: 1 },
      { text: "그렇지 않다", narcissism: 2 },
      { text: "보통이다", narcissism: 3 },
      { text: "그렇다", narcissism: 4 },
      { text: "매우 그렇다", narcissism: 5 },
    ],
  },
  {
    id: 3,
    question: "나는 다른 사람들에게 영향력을 행사하는 것을 즐긴다",
    options: [
      { text: "전혀 그렇지 않다", narcissism: 1 },
      { text: "그렇지 않다", narcissism: 2 },
      { text: "보통이다", narcissism: 3 },
      { text: "그렇다", narcissism: 4 },
      { text: "매우 그렇다", narcissism: 5 },
    ],
  },
  {
    id: 4,
    question: "나는 칭찬받는 것을 당연하게 여긴다",
    options: [
      { text: "전혀 그렇지 않다", narcissism: 1 },
      { text: "그렇지 않다", narcissism: 2 },
      { text: "보통이다", narcissism: 3 },
      { text: "그렇다", narcissism: 4 },
      { text: "매우 그렇다", narcissism: 5 },
    ],
  },
  {
    id: 5,
    question: "나는 내 외모나 능력에 자부심이 크다",
    options: [
      { text: "전혀 그렇지 않다", narcissism: 1 },
      { text: "그렇지 않다", narcissism: 2 },
      { text: "보통이다", narcissism: 3 },
      { text: "그렇다", narcissism: 4 },
      { text: "매우 그렇다", narcissism: 5 },
    ],
  },
  {
    id: 6,
    question: "내 업적이나 성과가 인정받지 못하면 화가 난다",
    options: [
      { text: "전혀 그렇지 않다", narcissism: 1 },
      { text: "그렇지 않다", narcissism: 2 },
      { text: "보통이다", narcissism: 3 },
      { text: "그렇다", narcissism: 4 },
      { text: "매우 그렇다", narcissism: 5 },
    ],
  },

  // 마키아벨리즘 (Machiavellianism) - 7~12
  {
    id: 7,
    question: "목적을 위해서라면 다른 사람을 이용하는 것도 괜찮다",
    options: [
      { text: "전혀 그렇지 않다", machiavellianism: 1 },
      { text: "그렇지 않다", machiavellianism: 2 },
      { text: "보통이다", machiavellianism: 3 },
      { text: "그렇다", machiavellianism: 4 },
      { text: "매우 그렇다", machiavellianism: 5 },
    ],
  },
  {
    id: 8,
    question: "나는 장기적인 계획을 세우고 전략적으로 행동한다",
    options: [
      { text: "전혀 그렇지 않다", machiavellianism: 1 },
      { text: "그렇지 않다", machiavellianism: 2 },
      { text: "보통이다", machiavellianism: 3 },
      { text: "그렇다", machiavellianism: 4 },
      { text: "매우 그렇다", machiavellianism: 5 },
    ],
  },
  {
    id: 9,
    question: "중요한 정보는 나만 알고 있는 것이 유리하다",
    options: [
      { text: "전혀 그렇지 않다", machiavellianism: 1 },
      { text: "그렇지 않다", machiavellianism: 2 },
      { text: "보통이다", machiavellianism: 3 },
      { text: "그렇다", machiavellianism: 4 },
      { text: "매우 그렇다", machiavellianism: 5 },
    ],
  },
  {
    id: 10,
    question: "때로는 거짓말이 필요하다고 생각한다",
    options: [
      { text: "전혀 그렇지 않다", machiavellianism: 1 },
      { text: "그렇지 않다", machiavellianism: 2 },
      { text: "보통이다", machiavellianism: 3 },
      { text: "그렇다", machiavellianism: 4 },
      { text: "매우 그렇다", machiavellianism: 5 },
    ],
  },
  {
    id: 11,
    question: "다른 사람의 약점을 파악해 두면 유용하다",
    options: [
      { text: "전혀 그렇지 않다", machiavellianism: 1 },
      { text: "그렇지 않다", machiavellianism: 2 },
      { text: "보통이다", machiavellianism: 3 },
      { text: "그렇다", machiavellianism: 4 },
      { text: "매우 그렇다", machiavellianism: 5 },
    ],
  },
  {
    id: 12,
    question: "나는 사람들의 심리를 읽고 조종하는 것에 능숙하다",
    options: [
      { text: "전혀 그렇지 않다", machiavellianism: 1 },
      { text: "그렇지 않다", machiavellianism: 2 },
      { text: "보통이다", machiavellianism: 3 },
      { text: "그렇다", machiavellianism: 4 },
      { text: "매우 그렇다", machiavellianism: 5 },
    ],
  },

  // 사이코패시 (Psychopathy) - 13~18
  {
    id: 13,
    question: "나는 위험하고 스릴 있는 활동을 즐긴다",
    options: [
      { text: "전혀 그렇지 않다", psychopathy: 1 },
      { text: "그렇지 않다", psychopathy: 2 },
      { text: "보통이다", psychopathy: 3 },
      { text: "그렇다", psychopathy: 4 },
      { text: "매우 그렇다", psychopathy: 5 },
    ],
  },
  {
    id: 14,
    question: "다른 사람이 상처받아도 크게 신경 쓰이지 않을 때가 있다",
    options: [
      { text: "전혀 그렇지 않다", psychopathy: 1 },
      { text: "그렇지 않다", psychopathy: 2 },
      { text: "보통이다", psychopathy: 3 },
      { text: "그렇다", psychopathy: 4 },
      { text: "매우 그렇다", psychopathy: 5 },
    ],
  },
  {
    id: 15,
    question: "나는 결과를 생각하지 않고 충동적으로 행동할 때가 많다",
    options: [
      { text: "전혀 그렇지 않다", psychopathy: 1 },
      { text: "그렇지 않다", psychopathy: 2 },
      { text: "보통이다", psychopathy: 3 },
      { text: "그렇다", psychopathy: 4 },
      { text: "매우 그렇다", psychopathy: 5 },
    ],
  },
  {
    id: 16,
    question: "복수는 빠르고 확실하게 해야 한다고 생각한다",
    options: [
      { text: "전혀 그렇지 않다", psychopathy: 1 },
      { text: "그렇지 않다", psychopathy: 2 },
      { text: "보통이다", psychopathy: 3 },
      { text: "그렇다", psychopathy: 4 },
      { text: "매우 그렇다", psychopathy: 5 },
    ],
  },
  {
    id: 17,
    question: "규칙은 어기기 위해 존재한다고 느낄 때가 있다",
    options: [
      { text: "전혀 그렇지 않다", psychopathy: 1 },
      { text: "그렇지 않다", psychopathy: 2 },
      { text: "보통이다", psychopathy: 3 },
      { text: "그렇다", psychopathy: 4 },
      { text: "매우 그렇다", psychopathy: 5 },
    ],
  },
  {
    id: 18,
    question: "나는 죄책감을 잘 느끼지 않는다",
    options: [
      { text: "전혀 그렇지 않다", psychopathy: 1 },
      { text: "그렇지 않다", psychopathy: 2 },
      { text: "보통이다", psychopathy: 3 },
      { text: "그렇다", psychopathy: 4 },
      { text: "매우 그렇다", psychopathy: 5 },
    ],
  },
];

export interface DarkTriadResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  narcissismScore: number;
  narcissismLevel: string;
  machiavellianismScore: number;
  machiavellianismLevel: string;
  psychopathyScore: number;
  psychopathyLevel: string;
  totalPercentage: number;
  dominantTrait: string;
  strengths: string[];
  warnings: string[];
  advice: string[];
  compatibility: string[];
  incompatibility: string[];
}

// 점수에 따른 레벨 판정
function getLevel(score: number, maxScore: number): string {
  const percentage = (score / maxScore) * 100;
  if (percentage <= 30) return '낮음';
  if (percentage <= 50) return '보통';
  if (percentage <= 70) return '높음';
  return '매우 높음';
}

// 결과 유형 정의
const resultTypes: Record<string, Omit<DarkTriadResult, 'narcissismScore' | 'narcissismLevel' | 'machiavellianismScore' | 'machiavellianismLevel' | 'psychopathyScore' | 'psychopathyLevel' | 'totalPercentage' | 'dominantTrait'>> = {
  light: {
    type: 'light',
    title: '라이트 소울',
    emoji: '😇',
    description: '당신은 다크 트라이어드 성향이 매우 낮습니다. 공감능력이 뛰어나고 타인을 배려하는 따뜻한 성격의 소유자입니다. 도덕적 기준이 명확하고 정직함을 중요시합니다.',
    strengths: ['높은 공감능력', '신뢰성 있는 인간관계', '도덕적 판단력', '따뜻한 리더십'],
    warnings: ['지나친 희생 주의', '때로는 단호함 필요', '자기 보호 능력 키우기'],
    advice: ['적절한 경계 설정하기', '가끔은 자신을 우선시하기', '단호하게 거절하는 연습'],
    compatibility: ['공감형', '협력형', '봉사형'],
    incompatibility: ['극단적 마키아벨리스트', '반사회적 성향'],
  },
  narcissist: {
    type: 'narcissist',
    title: '나르시시스트',
    emoji: '👑',
    description: '당신은 나르시시즘 성향이 두드러집니다. 자신감이 넘치고 리더십이 강하지만, 때로는 타인의 감정을 간과할 수 있습니다. 건강한 자존감과 과도한 자기애의 균형이 필요합니다.',
    strengths: ['강한 자신감', '카리스마 있는 리더십', '목표 지향적', '설득력 있는 소통'],
    warnings: ['타인의 감정 무시 위험', '비판에 민감함', '관계에서의 일방적 소통'],
    advice: ['타인의 피드백 경청하기', '겸손함 연습하기', '팀원들 인정하기'],
    compatibility: ['추종자형', '서포터형', '안정형'],
    incompatibility: ['또 다른 나르시시스트', '반항형'],
  },
  machiavellian: {
    type: 'machiavellian',
    title: '전략가',
    emoji: '🎭',
    description: '당신은 마키아벨리즘 성향이 높습니다. 전략적 사고와 목표 달성 능력이 뛰어나지만, 때로는 수단과 방법을 가리지 않을 수 있습니다. 윤리적 경계를 인식하는 것이 중요합니다.',
    strengths: ['뛰어난 전략적 사고', '목표 달성 능력', '상황 파악 능력', '협상 능력'],
    warnings: ['신뢰 관계 손상 위험', '장기적 평판 관리', '고립될 수 있음'],
    advice: ['진정성 있는 관계 맺기', '윈-윈 전략 추구', '단기 이익보다 장기 관계'],
    compatibility: ['실용주의자', '결과 지향형', '전략형'],
    incompatibility: ['순수형', '이상주의자'],
  },
  psychopath: {
    type: 'psychopath',
    title: '스릴 시커',
    emoji: '🔥',
    description: '당신은 사이코패시 성향이 높습니다. 대담하고 두려움이 적으며 새로운 경험을 추구합니다. 충동성과 감정 조절에 주의가 필요하며, 타인의 감정에 더 관심을 기울일 필요가 있습니다.',
    strengths: ['대담한 도전 정신', '스트레스 저항력', '빠른 의사결정', '두려움 없는 행동력'],
    warnings: ['충동적 결정의 위험', '타인 감정 무시', '장기적 결과 고려 부족'],
    advice: ['결정 전 숙고하기', '공감 연습하기', '행동의 결과 예측하기'],
    compatibility: ['모험가', '행동파', '자유로운 영혼'],
    incompatibility: ['안정 추구형', '규칙 중시형'],
  },
  dark_lord: {
    type: 'dark_lord',
    title: '다크 로드',
    emoji: '🖤',
    description: '당신은 다크 트라이어드의 세 가지 특성이 모두 높습니다. 강력한 카리스마와 전략적 능력, 대담함을 모두 갖추고 있습니다. 이 특성들을 긍정적으로 활용할지 여부는 당신의 선택에 달렸습니다.',
    strengths: ['강력한 영향력', '전략적 리더십', '목표 달성 능력', '스트레스 저항력'],
    warnings: ['관계 손상 위험', '고립 가능성', '장기적 신뢰 문제'],
    advice: ['공감능력 개발하기', '윤리적 리더십 연습', '진정한 관계 구축'],
    compatibility: ['강인한 정신력의 소유자'],
    incompatibility: ['민감한 성격', '순수형'],
  },
  balanced: {
    type: 'balanced',
    title: '균형잡힌 현실주의자',
    emoji: '⚖️',
    description: '당신은 다크 트라이어드 성향이 적당한 수준입니다. 자신감과 전략적 사고, 대담함을 적절히 갖추면서도 타인에 대한 배려를 잃지 않습니다. 상황에 따라 유연하게 대처할 수 있는 균형 잡힌 성격입니다.',
    strengths: ['상황 적응력', '균형 잡힌 판단', '적절한 자기주장', '유연한 사고'],
    warnings: ['극단적 상황에서 우유부단', '때로는 더 단호함 필요'],
    advice: ['상황에 맞는 대처 유지', '자신만의 원칙 정립', '건강한 경계 설정'],
    compatibility: ['대부분의 성격 유형'],
    incompatibility: ['극단적 성향'],
  },
};

export function calculateDarkTriadResult(answers: number[]): DarkTriadResult {
  // 각 특성별 점수 계산
  let narcissismScore = 0;
  let machiavellianismScore = 0;
  let psychopathyScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];

    if ('narcissism' in option) {
      narcissismScore += option.narcissism as number;
    }
    if ('machiavellianism' in option) {
      machiavellianismScore += option.machiavellianism as number;
    }
    if ('psychopathy' in option) {
      psychopathyScore += option.psychopathy as number;
    }
  });

  // 각 특성의 최대 점수
  const narcissismMax = 30; // 6문항 * 5점
  const machiavellianismMax = 30; // 6문항 * 5점
  const psychopathyMax = 30; // 6문항 * 5점

  // 레벨 판정
  const narcissismLevel = getLevel(narcissismScore, narcissismMax);
  const machiavellianismLevel = getLevel(machiavellianismScore, machiavellianismMax);
  const psychopathyLevel = getLevel(psychopathyScore, psychopathyMax);

  // 전체 비율
  const totalMax = narcissismMax + machiavellianismMax + psychopathyMax;
  const totalScore = narcissismScore + machiavellianismScore + psychopathyScore;
  const totalPercentage = Math.round((totalScore / totalMax) * 100);

  // 지배적인 특성 찾기
  const traits = [
    { name: '나르시시즘', score: narcissismScore },
    { name: '마키아벨리즘', score: machiavellianismScore },
    { name: '사이코패시', score: psychopathyScore },
  ];
  const dominantTrait = traits.sort((a, b) => b.score - a.score)[0].name;

  // 결과 유형 결정
  let resultType: string;
  
  const narcissismPercent = (narcissismScore / narcissismMax) * 100;
  const machiavellianismPercent = (machiavellianismScore / machiavellianismMax) * 100;
  const psychopathyPercent = (psychopathyScore / psychopathyMax) * 100;

  // 모든 특성이 높으면 다크 로드
  if (narcissismPercent > 60 && machiavellianismPercent > 60 && psychopathyPercent > 60) {
    resultType = 'dark_lord';
  }
  // 모든 특성이 낮으면 라이트 소울
  else if (totalPercentage <= 35) {
    resultType = 'light';
  }
  // 중간 수준이면 균형잡힌 현실주의자
  else if (totalPercentage <= 55) {
    resultType = 'balanced';
  }
  // 특정 특성이 두드러지면 해당 유형
  else if (narcissismPercent > machiavellianismPercent && narcissismPercent > psychopathyPercent) {
    resultType = 'narcissist';
  } else if (machiavellianismPercent > narcissismPercent && machiavellianismPercent > psychopathyPercent) {
    resultType = 'machiavellian';
  } else {
    resultType = 'psychopath';
  }

  const result = resultTypes[resultType];

  return {
    ...result,
    narcissismScore,
    narcissismLevel,
    machiavellianismScore,
    machiavellianismLevel,
    psychopathyScore,
    psychopathyLevel,
    totalPercentage,
    dominantTrait,
  };
}
