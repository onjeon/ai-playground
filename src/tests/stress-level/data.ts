// 스트레스 지수 측정 테스트

export interface StressLevelQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface StressLevelResult {
  type: string;
  title: string;
  emoji: string;
  level: 'low' | 'mild' | 'moderate' | 'high' | 'severe';
  score: number;
  maxScore: number;
  percentage: number;
  description: string;
  symptoms: string[];
  causes: string[];
  tips: string[];
  warningSign: string;
  recommendation: string;
  selfCare: string[];
}

// 질문 데이터 (15문항)
export const questions: StressLevelQuestion[] = [
  {
    id: 1,
    question: "최근 2주간 잠들기 어렵거나 자주 깨는 경험이 있나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 2,
    question: "사소한 일에도 짜증이 나거나 화가 나는 편인가요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 3,
    question: "집중하기 어렵거나 기억력이 떨어진다고 느끼나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 4,
    question: "두통, 어깨 결림, 소화불량 등 신체 증상이 있나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 5,
    question: "쉬는 날에도 충분히 쉬었다는 느낌이 들지 않나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 6,
    question: "일이나 해야 할 것들에 대한 걱정으로 불안한가요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 7,
    question: "평소 즐기던 활동에 흥미가 없어졌나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 8,
    question: "식욕이 크게 늘거나 줄었나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 9,
    question: "사람들과 만나는 것이 피곤하거나 귀찮게 느껴지나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 10,
    question: "미래에 대해 부정적이거나 희망이 없다고 느끼나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 11,
    question: "술, 담배, 카페인 등에 의존하게 되었나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 12,
    question: "감정 기복이 심하거나 이유 없이 눈물이 나나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 13,
    question: "자신이 무능하다고 느끼거나 자책하는 편인가요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 14,
    question: "일상생활(출근, 집안일 등)이 힘겹게 느껴지나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
  {
    id: 15,
    question: "심장이 두근거리거나 숨이 막히는 느낌이 있나요?",
    options: [
      { text: "전혀 없다", score: 0 },
      { text: "가끔 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "거의 매일 그렇다", score: 3 },
    ],
  },
];

// 결과 데이터
const resultTemplates: Record<string, Omit<StressLevelResult, 'score' | 'maxScore' | 'percentage'>> = {
  low: {
    type: 'low',
    title: '안정적인 상태',
    emoji: '😊',
    level: 'low',
    description: '현재 스트레스 수준이 낮고 안정적인 상태입니다. 일상생활에서 스트레스를 잘 관리하고 있으며, 정서적으로도 건강한 상태를 유지하고 있습니다.',
    symptoms: ['전반적으로 안정된 기분', '충분한 수면', '일상 활동에 대한 흥미 유지'],
    causes: ['현재 특별한 스트레스 요인 없음', '효과적인 스트레스 관리', '안정적인 생활 패턴'],
    tips: ['현재 상태를 유지하세요', '규칙적인 운동을 지속하세요', '취미 활동을 즐기세요'],
    warningSign: '특별한 경고 신호 없음',
    recommendation: '현재의 좋은 습관을 유지하면서, 예방 차원에서 스트레스 관리 기술을 익혀두면 좋습니다.',
    selfCare: ['규칙적인 수면 유지', '균형 잡힌 식사', '취미 활동', '사회적 관계 유지'],
  },
  mild: {
    type: 'mild',
    title: '경미한 스트레스',
    emoji: '🙂',
    level: 'mild',
    description: '약간의 스트레스를 경험하고 있지만, 일상생활에 큰 지장은 없는 상태입니다. 간단한 스트레스 관리로 충분히 회복할 수 있습니다.',
    symptoms: ['가끔 피로감', '때때로 걱정이 됨', '가벼운 긴장'],
    causes: ['일상적인 업무 부담', '가벼운 대인관계 스트레스', '시간 관리 문제'],
    tips: ['충분한 휴식을 취하세요', '가벼운 스트레칭을 해보세요', '친구와 대화를 나눠보세요'],
    warningSign: '스트레스가 지속되면 관리가 필요할 수 있습니다.',
    recommendation: '일상에서 작은 휴식 시간을 만들고, 스트레스 해소 활동을 규칙적으로 하면 좋습니다.',
    selfCare: ['짧은 산책', '심호흡 연습', '좋아하는 음악 듣기', '충분한 수면'],
  },
  moderate: {
    type: 'moderate',
    title: '주의가 필요한 상태',
    emoji: '😐',
    level: 'moderate',
    description: '중간 수준의 스트레스를 경험하고 있습니다. 일상생활에 영향을 미치기 시작할 수 있으므로, 적극적인 스트레스 관리가 필요합니다.',
    symptoms: ['자주 피로함', '수면 문제', '집중력 저하', '가벼운 신체 증상'],
    causes: ['업무/학업 과중', '대인관계 갈등', '재정적 걱정', '불확실한 미래'],
    tips: ['규칙적인 운동을 시작하세요', '명상이나 요가를 시도해보세요', '걱정되는 일을 글로 적어보세요', '필요하면 주변에 도움을 요청하세요'],
    warningSign: '증상이 2주 이상 지속되면 전문가 상담을 고려하세요.',
    recommendation: '스트레스 원인을 파악하고, 해결 가능한 것부터 하나씩 정리해 나가세요. 혼자 해결하기 어렵다면 주변의 도움을 받는 것이 좋습니다.',
    selfCare: ['규칙적인 운동', '명상/요가', '일기 쓰기', '신뢰할 수 있는 사람과 대화'],
  },
  high: {
    type: 'high',
    title: '높은 스트레스 상태',
    emoji: '😟',
    level: 'high',
    description: '높은 수준의 스트레스를 경험하고 있습니다. 일상생활에 상당한 영향을 미치고 있을 수 있으며, 적극적인 관리와 필요시 전문적 도움이 권장됩니다.',
    symptoms: ['지속적인 피로', '수면 장애', '집중력/기억력 저하', '신체 증상 (두통, 소화불량 등)', '감정 기복'],
    causes: ['과도한 업무 부담', '심각한 대인관계 문제', '재정/건강 문제', '삶의 큰 변화'],
    tips: ['전문가 상담을 고려해보세요', '가능한 업무량을 줄여보세요', '규칙적인 생활 패턴을 만드세요', '알코올/카페인을 줄이세요'],
    warningSign: '신체적, 정신적 증상이 심해지면 빠른 시일 내 전문가 상담을 받으세요.',
    recommendation: '스트레스 원인을 해결하기 위한 구체적인 계획을 세우고, 주변의 지원을 적극적으로 활용하세요. 전문 상담을 받는 것도 좋은 방법입니다.',
    selfCare: ['충분한 휴식', '전문가 상담', '스트레스 원인 파악/해결', '건강한 생활 습관'],
  },
  severe: {
    type: 'severe',
    title: '심각한 스트레스 상태',
    emoji: '😰',
    level: 'severe',
    description: '매우 높은 수준의 스트레스를 경험하고 있습니다. 전문적인 도움이 필요한 상태일 수 있으니, 가능한 빨리 전문가와 상담하시기 바랍니다.',
    symptoms: ['극심한 피로', '심한 수면 장애', '일상생활 어려움', '다양한 신체 증상', '심한 감정 기복', '무기력함'],
    causes: ['만성적인 과부하', '심각한 삶의 위기', '복합적인 스트레스 요인', '지지체계 부족'],
    tips: ['전문가 상담을 꼭 받으세요', '무리하지 말고 쉬세요', '혼자 해결하려 하지 마세요', '가까운 사람에게 현재 상태를 알리세요'],
    warningSign: '이 상태가 지속되면 번아웃, 우울증 등으로 발전할 수 있습니다. 꼭 전문가와 상담하세요.',
    recommendation: '현재 상태를 심각하게 받아들이고, 전문가의 도움을 받는 것이 가장 중요합니다. 필요하다면 일시적으로 책임을 줄이고 회복에 집중하세요.',
    selfCare: ['전문가 상담 (필수)', '충분한 휴식', '업무/활동 축소', '지지체계 활용'],
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): StressLevelResult {
  const maxScore = questions.length * 3; // 45점 만점
  
  // 총점 계산
  let totalScore = 0;
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  // 레벨 결정
  let level: string;
  if (percentage <= 20) {
    level = 'low';
  } else if (percentage <= 40) {
    level = 'mild';
  } else if (percentage <= 60) {
    level = 'moderate';
  } else if (percentage <= 80) {
    level = 'high';
  } else {
    level = 'severe';
  }

  const template = resultTemplates[level];

  return {
    ...template,
    score: totalScore,
    maxScore,
    percentage,
  };
}
