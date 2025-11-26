// 금전 감각 테스트

export interface MoneySenseQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MoneySenseResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  spendingHabit: string;
  savingHabit: string;
  financeTips: string[];
  futureOutlook: string;
  moneyScore: number;
}

// 금전 감각 유형
export const moneySenseTypes = ['saver', 'spender', 'investor', 'balanced', 'yolo', 'planner'] as const;
export type MoneySenseType = typeof moneySenseTypes[number];

// 질문 데이터 (12문항)
export const questions: MoneySenseQuestion[] = [
  {
    id: 1,
    question: "월급이 들어오면 가장 먼저 하는 일은?",
    options: [
      { text: "바로 저축/적금 이체부터", scores: { saver: 2, planner: 1 } },
      { text: "일단 쇼핑 리스트 확인", scores: { spender: 2, yolo: 1 } },
      { text: "투자 계좌로 이체", scores: { investor: 2 } },
      { text: "생활비 먼저 빼놓기", scores: { balanced: 2, planner: 1 } },
    ],
  },
  {
    id: 2,
    question: "갖고 싶었던 물건이 세일 중이라면?",
    options: [
      { text: "그래도 필요 없으면 안 사요", scores: { saver: 2 } },
      { text: "기다렸다! 바로 구매", scores: { spender: 2 } },
      { text: "가격 대비 가치 따져보고 결정", scores: { investor: 2, balanced: 1 } },
      { text: "예산 내면 사고, 아니면 패스", scores: { planner: 2, balanced: 1 } },
    ],
  },
  {
    id: 3,
    question: "친구들과 비싼 맛집을 가자고 하면?",
    options: [
      { text: "솔직히 부담스러워요...", scores: { saver: 2 } },
      { text: "가야지! 맛있는 건 먹어야 해", scores: { spender: 2, yolo: 1 } },
      { text: "한 달에 한 번 정도는 괜찮아요", scores: { balanced: 2 } },
      { text: "이번 달 외식비 남았나 확인해봐요", scores: { planner: 2 } },
    ],
  },
  {
    id: 4,
    question: "보너스를 받으면 어떻게 하나요?",
    options: [
      { text: "전액 저축!", scores: { saver: 2 } },
      { text: "나에게 선물~ 쇼핑 고고", scores: { spender: 2, yolo: 1 } },
      { text: "일부 투자, 일부 저축", scores: { investor: 2, balanced: 1 } },
      { text: "비율 정해서 저축/소비 분배", scores: { planner: 2, balanced: 1 } },
    ],
  },
  {
    id: 5,
    question: "통장 잔액이 적어지면?",
    options: [
      { text: "불안해서 지출을 더 줄여요", scores: { saver: 2 } },
      { text: "다음 달에 줄이면 되지~", scores: { spender: 2, yolo: 1 } },
      { text: "왜 줄었는지 분석해봐요", scores: { investor: 2, planner: 1 } },
      { text: "비상금이 있으니 괜찮아요", scores: { planner: 2, balanced: 1 } },
    ],
  },
  {
    id: 6,
    question: "투자에 대한 생각은?",
    options: [
      { text: "원금 손실이 무서워요, 적금이 최고", scores: { saver: 2 } },
      { text: "투자보다 쓰는 게 행복", scores: { spender: 2, yolo: 1 } },
      { text: "적극적으로 투자해요, 수익률이 중요", scores: { investor: 2 } },
      { text: "안전한 것과 공격적인 것 분산", scores: { balanced: 2, planner: 1 } },
    ],
  },
  {
    id: 7,
    question: "가계부를 쓰나요?",
    options: [
      { text: "매일 꼼꼼하게 기록해요", scores: { saver: 2, planner: 1 } },
      { text: "귀찮아서 안 써요", scores: { spender: 2, yolo: 1 } },
      { text: "자산 현황은 체크해요", scores: { investor: 2 } },
      { text: "앱으로 대략적으로 관리해요", scores: { balanced: 2, planner: 1 } },
    ],
  },
  {
    id: 8,
    question: "돈을 쓸 때 기분이 어떤가요?",
    options: [
      { text: "아까워요, 최대한 안 쓰고 싶어요", scores: { saver: 2 } },
      { text: "쓸 때가 제일 행복해요!", scores: { spender: 2, yolo: 1 } },
      { text: "투자가 아니면 아깝게 느껴요", scores: { investor: 2 } },
      { text: "계획된 지출이면 만족스러워요", scores: { planner: 2, balanced: 1 } },
    ],
  },
  {
    id: 9,
    question: "미래를 위한 재정 계획은?",
    options: [
      { text: "노후 대비 열심히 모으는 중", scores: { saver: 2, planner: 1 } },
      { text: "미래는 나중에, 지금을 즐겨야지", scores: { yolo: 2, spender: 1 } },
      { text: "투자로 자산을 불리는 중", scores: { investor: 2 } },
      { text: "단기/중기/장기 목표별로 준비 중", scores: { planner: 2 } },
    ],
  },
  {
    id: 10,
    question: "로또에 당첨되면 어떻게 할까요?",
    options: [
      { text: "전액 저축, 이자로 생활", scores: { saver: 2 } },
      { text: "일단 갖고 싶던 것들 다 사기", scores: { spender: 2, yolo: 1 } },
      { text: "대부분 투자, 부동산/주식 등", scores: { investor: 2 } },
      { text: "비율 정해서 저축/투자/소비 분배", scores: { planner: 2, balanced: 1 } },
    ],
  },
  {
    id: 11,
    question: "할인 쿠폰이나 적립금을 어떻게 하나요?",
    options: [
      { text: "꼼꼼히 챙겨서 최대한 활용", scores: { saver: 2 } },
      { text: "귀찮아서 잘 안 챙겨요", scores: { spender: 2, yolo: 1 } },
      { text: "시간 대비 효율 계산해서 선택적으로", scores: { investor: 2, balanced: 1 } },
      { text: "잘 쓰는 것만 체계적으로 관리", scores: { planner: 2 } },
    ],
  },
  {
    id: 12,
    question: "돈에 대한 나의 철학은?",
    options: [
      { text: "아끼고 모으는 게 미덕", scores: { saver: 2 } },
      { text: "인생은 한 번, 쓸 때 써야지", scores: { yolo: 2, spender: 1 } },
      { text: "돈이 돈을 벌게 해야 해", scores: { investor: 2 } },
      { text: "균형 있게 쓰고 모으는 게 중요", scores: { balanced: 2, planner: 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<MoneySenseType, MoneySenseResult> = {
  saver: {
    type: 'saver',
    title: '철저한 저축형',
    emoji: '🐿️',
    subtitle: 'The Super Saver',
    description: '당신은 다람쥐처럼 알뜰하게 모으는 저축왕! 돈을 쓰는 것보다 모으는 것에서 만족을 느끼며, 미래를 위해 현재를 희생할 수 있는 사람입니다.',
    characteristics: ['절약 정신', '미래 지향적', '안정 추구', '검소함', '계획적'],
    strengths: ['높은 저축률', '재정적 안정감', '위기 대처 능력', '목돈 마련 능력'],
    weaknesses: ['현재를 즐기지 못함', '인색해 보일 수 있음', '기회비용 손실', '삶의 질 저하 가능'],
    spendingHabit: '필요한 것만 최소한으로 구매, 세일/쿠폰 적극 활용',
    savingHabit: '수입의 50% 이상 저축을 목표로, 적금과 예금 선호',
    financeTips: ['가끔은 자신에게 투자하세요', '적절한 투자로 돈을 불리세요', '삶의 질을 위한 지출도 필요해요'],
    futureOutlook: '노후 대비는 확실! 하지만 젊을 때 즐기지 못하면 후회할 수도',
    moneyScore: 85,
  },
  spender: {
    type: 'spender',
    title: '화끈한 소비형',
    emoji: '💸',
    subtitle: 'The Big Spender',
    description: '현재를 즐기는 당신! 돈은 쓰라고 있는 것이라 생각하며, 소비를 통해 행복과 만족을 느낍니다. 인생을 즐길 줄 아는 사람이에요.',
    characteristics: ['현재 지향', '즐거움 추구', '관대함', '충동적', '낙천적'],
    strengths: ['삶의 질 높음', '주변에 베풀음', '트렌드에 민감', '스트레스 해소'],
    weaknesses: ['저축 부족', '충동 구매', '재정 불안정', '노후 대비 부족'],
    spendingHabit: '원하는 건 바로 구매, 쇼핑이 취미이자 스트레스 해소',
    savingHabit: '남는 돈만 저축, 솔직히 잘 안 남음...',
    financeTips: ['자동 이체로 먼저 저축하세요', '한 달 예산을 정해보세요', '큰 구매 전 24시간 생각해보세요'],
    futureOutlook: '현재는 행복하지만, 미래 재정 계획이 필요해요',
    moneyScore: 55,
  },
  investor: {
    type: 'investor',
    title: '공격적 투자형',
    emoji: '📈',
    subtitle: 'The Investor',
    description: '돈이 돈을 벌게 하는 투자 마인드! 단순 저축보다 자산을 불리는 데 관심이 많으며, 수익률과 투자 기회에 민감한 사람입니다.',
    characteristics: ['수익 지향', '리스크 감수', '분석적', '정보 민감', '도전적'],
    strengths: ['자산 증식', '재테크 능력', '경제 이해도', '기회 포착'],
    weaknesses: ['과도한 리스크', '원금 손실 가능', '스트레스', '도박처럼 될 수 있음'],
    spendingHabit: '가치 있는 것에 투자, 불필요한 소비는 아까움',
    savingHabit: '저축보다 투자 계좌로, 수익률이 중요',
    financeTips: ['비상금은 안전하게 보관하세요', '분산 투자를 잊지 마세요', '장기적 관점을 유지하세요'],
    futureOutlook: '잘하면 자산가, 실패하면 원금 손실... 리스크 관리가 중요!',
    moneyScore: 75,
  },
  balanced: {
    type: 'balanced',
    title: '균형잡힌 밸런스형',
    emoji: '⚖️',
    subtitle: 'The Balanced One',
    description: '저축과 소비의 균형을 아는 당신! 미래도 준비하면서 현재도 즐길 줄 아는 재정적으로 건강한 사람입니다.',
    characteristics: ['균형감각', '유연함', '현실적', '합리적', '안정적'],
    strengths: ['재정 건강', '스트레스 없음', '지속 가능', '융통성'],
    weaknesses: ['크게 모으기 어려움', '큰 수익 기회 놓칠 수 있음', '무난해서 지루할 수 있음'],
    spendingHabit: '필요한 것과 원하는 것 구분, 계획적 소비',
    savingHabit: '수입의 30% 정도 저축, 꾸준히 모음',
    financeTips: ['가끔은 공격적인 투자도 고려해보세요', '목표 금액을 높여보세요', '현재 상태에 안주하지 마세요'],
    futureOutlook: '안정적인 미래가 예상됩니다. 꾸준함이 무기!',
    moneyScore: 80,
  },
  yolo: {
    type: 'yolo',
    title: '욜로 인생형',
    emoji: '🎉',
    subtitle: 'YOLO Life',
    description: 'You Only Live Once! 인생은 한 번뿐이라는 철학으로, 돈보다 경험과 행복을 중시합니다. 후회 없는 삶을 추구하는 사람이에요.',
    characteristics: ['경험 중시', '자유로움', '낙천적', '대담함', '즉흥적'],
    strengths: ['풍부한 경험', '후회 없는 삶', '추억 많음', '스트레스 프리'],
    weaknesses: ['재정 불안정', '미래 대비 부족', '나이 들면 걱정', '갑작스러운 위기에 취약'],
    spendingHabit: '경험에 투자! 여행, 맛집, 취미 등에 아낌없이',
    savingHabit: '솔직히 저축은 뒷전, 있으면 쓰고 없으면 안 씀',
    financeTips: ['작은 금액이라도 자동 저축을 시작하세요', '비상금 최소 3개월치는 마련하세요', '노후 대비를 조금씩이라도 시작하세요'],
    futureOutlook: '현재는 행복하지만, 미래 재정 계획이 시급해요!',
    moneyScore: 45,
  },
  planner: {
    type: 'planner',
    title: '철저한 계획형',
    emoji: '📊',
    subtitle: 'The Financial Planner',
    description: '재정 관리의 달인! 예산을 세우고 계획대로 실천하며, 단기/중기/장기 목표를 체계적으로 관리하는 사람입니다.',
    characteristics: ['체계적', '목표 지향', '분석적', '자기 통제력', '미래 준비'],
    strengths: ['목표 달성 능력', '재정 안정', '위기 대비', '효율적 자원 활용'],
    weaknesses: ['융통성 부족', '즉흥적 즐거움 부족', '너무 계산적', '스트레스'],
    spendingHabit: '예산 내에서만 지출, 카테고리별 한도 설정',
    savingHabit: '목표별 통장 분리, 자동 이체로 철저히 관리',
    financeTips: ['가끔은 계획 없이 즐겨보세요', '예상치 못한 즐거움도 예산에 넣으세요', '너무 빡빡하면 지치니 여유를 두세요'],
    futureOutlook: '계획대로라면 안정적인 미래! 목표 달성 가능성 높음',
    moneyScore: 88,
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): MoneySenseResult {
  const scores: Record<MoneySenseType, number> = {
    saver: 0,
    spender: 0,
    investor: 0,
    balanced: 0,
    yolo: 0,
    planner: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as MoneySenseType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: MoneySenseType = 'balanced';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as MoneySenseType;
    }
  });

  return results[resultType];
}
