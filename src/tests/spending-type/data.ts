// 소비 유형 테스트 - 당신의 소비 패턴은?

export const questions = [
  {
    id: 1,
    question: "월급날 후 나는?",
    options: [
      { text: "바로 저축부터", type: "saver", score: 5 },
      { text: "계획대로 배분", type: "planner", score: 4 },
      { text: "일단 쓰고 남으면 저축", type: "spender", score: 2 },
      { text: "어디 갔는지 모름", type: "impulse", score: 1 },
    ],
  },
  {
    id: 2,
    question: "갖고 싶은 게 생기면?",
    options: [
      { text: "진짜 필요한지 고민", type: "saver", score: 5 },
      { text: "예산 확인 후 결정", type: "planner", score: 4 },
      { text: "고민하다 결국 삼", type: "spender", score: 2 },
      { text: "바로 산다", type: "impulse", score: 1 },
    ],
  },
  {
    id: 3,
    question: "쇼핑 스타일은?",
    options: [
      { text: "필요한 것만 목록 보고", type: "saver", score: 5 },
      { text: "비교하고 할인 찾아서", type: "planner", score: 4 },
      { text: "구경하다 끌리면 구매", type: "spender", score: 2 },
      { text: "즉흥 쇼핑 즐김", type: "impulse", score: 1 },
    ],
  },
  {
    id: 4,
    question: "세일 기간에 나는?",
    options: [
      { text: "필요 없으면 안 삼", type: "saver", score: 5 },
      { text: "필요한 것만 저렴하게", type: "planner", score: 4 },
      { text: "좋은 기회니까 사둠", type: "spender", score: 2 },
      { text: "대량 구매", type: "impulse", score: 1 },
    ],
  },
  {
    id: 5,
    question: "카드 명세서를 보면?",
    options: [
      { text: "예상대로다", type: "saver", score: 5 },
      { text: "대체로 예상 범위", type: "planner", score: 4 },
      { text: "생각보다 많네", type: "spender", score: 2 },
      { text: "충격받음", type: "impulse", score: 1 },
    ],
  },
  {
    id: 6,
    question: "스트레스 받으면?",
    options: [
      { text: "돈 안 쓰는 방법으로 풀음", type: "saver", score: 5 },
      { text: "예산 내에서 작은 사치", type: "planner", score: 4 },
      { text: "쇼핑으로 푼다", type: "spender", score: 2 },
      { text: "지르고 본다", type: "impulse", score: 1 },
    ],
  },
  {
    id: 7,
    question: "가계부/지출 관리는?",
    options: [
      { text: "꼼꼼히 기록", type: "saver", score: 5 },
      { text: "앱으로 관리", type: "planner", score: 4 },
      { text: "가끔 확인", type: "spender", score: 2 },
      { text: "안 한다", type: "impulse", score: 1 },
    ],
  },
  {
    id: 8,
    question: "저축 상태는?",
    options: [
      { text: "목표 이상 저축 중", type: "saver", score: 5 },
      { text: "계획대로 저축 중", type: "planner", score: 4 },
      { text: "조금 하는 중", type: "spender", score: 2 },
      { text: "거의 못하고 있음", type: "impulse", score: 1 },
    ],
  },
  {
    id: 9,
    question: "친구들과 비교하면 내 소비는?",
    options: [
      { text: "훨씬 적다", type: "saver", score: 5 },
      { text: "적은 편", type: "planner", score: 4 },
      { text: "비슷하다", type: "spender", score: 3 },
      { text: "많은 편", type: "impulse", score: 1 },
    ],
  },
  {
    id: 10,
    question: "충동구매 빈도는?",
    options: [
      { text: "거의 없다", type: "saver", score: 5 },
      { text: "가끔", type: "planner", score: 4 },
      { text: "자주", type: "spender", score: 2 },
      { text: "습관이다", type: "impulse", score: 1 },
    ],
  },
  {
    id: 11,
    question: "비싼 것을 살 때?",
    options: [
      { text: "오래 고민하고 비교", type: "saver", score: 5 },
      { text: "예산 확인 후 결정", type: "planner", score: 4 },
      { text: "마음에 들면 산다", type: "spender", score: 2 },
      { text: "할부라도 산다", type: "impulse", score: 1 },
    ],
  },
  {
    id: 12,
    question: "돈에 대한 생각은?",
    options: [
      { text: "미래를 위해 모아야", type: "saver", score: 5 },
      { text: "계획적으로 써야", type: "planner", score: 4 },
      { text: "인생 즐기며 써야", type: "spender", score: 2 },
      { text: "있으면 쓰는 거지", type: "impulse", score: 1 },
    ],
  },
];

export interface SpendingTypeResult {
  type: string;
  title: string;
  emoji: string;
  savingScore: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  moneyHabits: string[];
  improvementTips: string[];
  budgetAdvice: string;
  longTermOutlook: string;
}

const resultTypes: Record<string, SpendingTypeResult> = {
  saver: {
    type: 'saver',
    title: '저축왕',
    emoji: '🏦',
    savingScore: 95,
    description: '당신은 돈을 아끼고 모으는 것을 중시하는 저축형! 미래를 위해 현재를 절제하고, 재정적으로 안정적입니다. 다만 가끔은 즐기는 것도 필요해요.',
    characteristics: ['절약', '계획적', '미래 지향', '검소함'],
    strengths: ['재정 안정', '목표 달성', '긴급 자금 확보'],
    weaknesses: ['과도한 절약', '현재 즐기기 어려움', '가끔 구두쇠'],
    moneyHabits: ['선저축 후소비', '꼼꼼한 가계부', '할인 사냥'],
    improvementTips: ['가끔은 자신에게 투자', '경험에도 돈 쓰기', '적절한 균형'],
    budgetAdvice: '좋은 습관이지만 삶의 질도 고려하세요',
    longTermOutlook: '재정적으로 매우 안정적인 미래',
  },
  planner: {
    type: 'planner',
    title: '계획적 소비자',
    emoji: '📊',
    savingScore: 75,
    description: '당신은 계획적으로 돈을 관리하는 타입! 예산을 세우고 그 안에서 소비하며, 저축과 소비의 균형을 잘 맞춥니다. 건강한 재정 습관입니다.',
    characteristics: ['계획적', '균형잡힘', '예산 관리', '합리적'],
    strengths: ['균형', '목표 달성', '스트레스 적음'],
    weaknesses: ['가끔 경직될 수 있음', '예외 상황 대처'],
    moneyHabits: ['월 예산 설정', '저축 자동화', '비교 쇼핑'],
    improvementTips: ['유연성 확보', '비상금 더 확보', '투자 공부'],
    budgetAdvice: '현재 상태 유지하면서 투자도 고려하세요',
    longTermOutlook: '안정적이고 건강한 재정 상태',
  },
  spender: {
    type: 'spender',
    title: '소비 즐기는 타입',
    emoji: '🛍️',
    savingScore: 40,
    description: '당신은 돈 쓰는 것을 즐기는 타입! 현재를 즐기고 싶고, 저축보다 소비에 더 관심이 있어요. 재정 관리에 좀 더 신경 쓰면 좋겠습니다.',
    characteristics: ['소비 지향', '현재 즐김', '충동 구매 경향'],
    strengths: ['삶의 즐거움', '관대함', '스트레스 해소'],
    weaknesses: ['저축 부족', '충동 구매', '재정 불안정'],
    moneyHabits: ['남으면 저축', '쇼핑으로 기분 전환', '세일 좋아함'],
    improvementTips: ['선저축 후소비', '충동구매 24시간 룰', '예산 앱 사용'],
    budgetAdvice: '수입의 최소 20%는 저축하는 습관을 들이세요',
    longTermOutlook: '재정 관리 개선 필요, 지금 시작하면 OK',
  },
  impulse: {
    type: 'impulse',
    title: '충동 소비자',
    emoji: '💸',
    savingScore: 15,
    description: '당신은 충동적으로 소비하는 경향이 있어요! 돈이 어디로 가는지 모를 때가 많고, 저축이 어렵습니다. 재정 건강을 위해 변화가 필요합니다.',
    characteristics: ['충동적', '즉흥적', '돈 관리 어려움'],
    strengths: ['순간을 즐김'],
    weaknesses: ['재정 불안정', '저축 없음', '빚 가능성', '스트레스'],
    moneyHabits: ['있으면 씀', '충동구매', '가계부 없음'],
    improvementTips: ['자동 저축 설정', '현금만 사용하기', '24시간 룰', '전문 상담'],
    budgetAdvice: '재정 상담 권장, 자동 저축부터 시작하세요',
    longTermOutlook: '변화가 필요합니다. 지금 시작하면 충분히 개선 가능!',
  },
};

export function calculateSpendingTypeResult(answers: number[]): SpendingTypeResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 80) {
    return { ...resultTypes.saver, savingScore: Math.round(percentage) };
  } else if (percentage >= 55) {
    return { ...resultTypes.planner, savingScore: Math.round(percentage) };
  } else if (percentage >= 30) {
    return { ...resultTypes.spender, savingScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.impulse, savingScore: Math.round(percentage) };
  }
}
