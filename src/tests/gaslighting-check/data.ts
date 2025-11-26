// 가스라이팅 체크 테스트 - 혹시 가스라이팅 당하고 있나요?

export const questions = [
  {
    id: 1,
    question: "그 사람과 대화 후 내 감정은?",
    options: [
      { text: "내가 뭔가 잘못한 것 같음", type: "high", score: 5 },
      { text: "혼란스러움", type: "medium", score: 3 },
      { text: "그냥 평범함", type: "low", score: 1 },
      { text: "편안하고 좋음", type: "safe", score: 0 },
    ],
  },
  {
    id: 2,
    question: "'네가 너무 예민해'라는 말을 자주 들나요?",
    options: [
      { text: "자주 듣는다", type: "high", score: 5 },
      { text: "가끔 듣는다", type: "medium", score: 3 },
      { text: "거의 안 듣는다", type: "low", score: 1 },
      { text: "전혀 없다", type: "safe", score: 0 },
    ],
  },
  {
    id: 3,
    question: "내 기억과 그 사람 말이 다를 때?",
    options: [
      { text: "내 기억이 틀린 것 같음", type: "high", score: 5 },
      { text: "혼란스럽다", type: "medium", score: 3 },
      { text: "내 기억을 믿는다", type: "low", score: 1 },
      { text: "대화로 확인한다", type: "safe", score: 0 },
    ],
  },
  {
    id: 4,
    question: "그 사람 앞에서 내 의견을 말할 때?",
    options: [
      { text: "말하기 두렵다", type: "high", score: 5 },
      { text: "눈치를 많이 본다", type: "medium", score: 3 },
      { text: "자유롭게 말한다", type: "low", score: 1 },
      { text: "서로 존중하며 대화", type: "safe", score: 0 },
    ],
  },
  {
    id: 5,
    question: "'나 아니면 누가 널 좋아하겠어'란 말을 들은 적?",
    options: [
      { text: "자주 듣는다", type: "high", score: 5 },
      { text: "들은 적 있다", type: "medium", score: 3 },
      { text: "거의 없다", type: "low", score: 1 },
      { text: "전혀 없다", type: "safe", score: 0 },
    ],
  },
  {
    id: 6,
    question: "다른 사람들과의 관계는?",
    options: [
      { text: "점점 고립되고 있다", type: "high", score: 5 },
      { text: "만나기 어려워졌다", type: "medium", score: 3 },
      { text: "자유롭게 만난다", type: "low", score: 1 },
      { text: "오히려 응원받는다", type: "safe", score: 0 },
    ],
  },
  {
    id: 7,
    question: "그 사람 때문에 자존감이?",
    options: [
      { text: "많이 떨어졌다", type: "high", score: 5 },
      { text: "조금 흔들린다", type: "medium", score: 3 },
      { text: "변함없다", type: "low", score: 1 },
      { text: "오히려 올라갔다", type: "safe", score: 0 },
    ],
  },
  {
    id: 8,
    question: "'네가 그렇게 해서 내가 이러는 거야'라는 말을?",
    options: [
      { text: "자주 듣는다", type: "high", score: 5 },
      { text: "가끔 듣는다", type: "medium", score: 3 },
      { text: "거의 안 듣는다", type: "low", score: 1 },
      { text: "서로 책임을 나눈다", type: "safe", score: 0 },
    ],
  },
  {
    id: 9,
    question: "그 사람의 행동에 대해 지적하면?",
    options: [
      { text: "화내거나 나를 탓함", type: "high", score: 5 },
      { text: "무시하거나 넘어감", type: "medium", score: 3 },
      { text: "일단 들어줌", type: "low", score: 1 },
      { text: "인정하고 개선하려 함", type: "safe", score: 0 },
    ],
  },
  {
    id: 10,
    question: "그 사람 눈치를 보는 정도는?",
    options: [
      { text: "항상 눈치를 본다", type: "high", score: 5 },
      { text: "자주 눈치를 본다", type: "medium", score: 3 },
      { text: "가끔", type: "low", score: 1 },
      { text: "자유롭다", type: "safe", score: 0 },
    ],
  },
  {
    id: 11,
    question: "그 사람과 있을 때 나는?",
    options: [
      { text: "진짜 나를 숨긴다", type: "high", score: 5 },
      { text: "조심스럽다", type: "medium", score: 3 },
      { text: "대체로 편하다", type: "low", score: 1 },
      { text: "완전히 편하다", type: "safe", score: 0 },
    ],
  },
  {
    id: 12,
    question: "이 관계가 정상인지 헷갈리나요?",
    options: [
      { text: "자주 헷갈린다", type: "high", score: 5 },
      { text: "가끔 헷갈린다", type: "medium", score: 3 },
      { text: "대체로 괜찮다", type: "low", score: 1 },
      { text: "건강한 관계다", type: "safe", score: 0 },
    ],
  },
];

export interface GaslightingCheckResult {
  level: string;
  title: string;
  emoji: string;
  riskScore: number;
  description: string;
  signs: string[];
  effects: string[];
  advice: string[];
  resources: string[];
  importantMessage: string;
}

const resultTypes: Record<string, GaslightingCheckResult> = {
  high: {
    level: 'high',
    title: '주의 필요',
    emoji: '🚨',
    riskScore: 85,
    description: '가스라이팅의 여러 징후가 보입니다. 이 관계가 당신에게 해롭게 작용하고 있을 수 있어요. 전문가와 상담하거나 신뢰할 수 있는 사람과 이야기해보세요.',
    signs: [
      '자주 자신을 의심함',
      '감정 표현이 어려움',
      '고립감을 느낌',
      '자존감 하락',
      '상대 눈치를 과도하게 봄',
    ],
    effects: [
      '불안, 우울감 증가',
      '자기 판단력 저하',
      '대인관계 어려움',
      '자기 정체성 혼란',
    ],
    advice: [
      '당신의 감정은 유효합니다',
      '전문 상담을 고려하세요',
      '신뢰할 수 있는 사람에게 이야기하세요',
      '기록을 남겨두세요',
      '거리를 두는 것을 고려하세요',
    ],
    resources: ['심리상담센터', '여성긴급전화 1366', '정신건강위기상담 1577-0199'],
    importantMessage: '당신은 잘못하지 않았습니다. 도움을 요청하는 것은 용기 있는 행동입니다.',
  },
  medium: {
    level: 'medium',
    title: '관찰 필요',
    emoji: '⚠️',
    riskScore: 55,
    description: '일부 주의가 필요한 패턴이 보입니다. 이 관계에서 불편한 점이 있다면, 자신의 감정을 신뢰하고 객관적으로 살펴보세요.',
    signs: [
      '가끔 혼란을 느낌',
      '상대 말에 휘둘림',
      '의견 표현이 어려울 때가 있음',
    ],
    effects: [
      '간헐적 불안',
      '자신감 흔들림',
      '관계에 대한 의문',
    ],
    advice: [
      '자신의 감정을 기록해보세요',
      '신뢰할 수 있는 사람의 의견을 들어보세요',
      '건강한 관계의 기준을 알아보세요',
      '필요시 전문가 상담 고려',
    ],
    resources: ['심리상담센터', '관계 관련 서적/자료'],
    importantMessage: '불편한 감정을 느끼는 것은 자연스러운 일입니다. 스스로를 돌보세요.',
  },
  low: {
    level: 'low',
    title: '양호',
    emoji: '🌤️',
    riskScore: 25,
    description: '현재는 큰 문제가 보이지 않습니다. 하지만 관계에서 불편함을 느낀다면 그 감정을 무시하지 마세요.',
    signs: [
      '대체로 자유롭게 표현 가능',
      '상대와 소통이 됨',
    ],
    effects: [
      '특별한 부정적 영향 없음',
    ],
    advice: [
      '건강한 관계 유지하기',
      '서로 존중하는 소통 계속하기',
      '불편함이 생기면 바로 이야기하기',
    ],
    resources: ['관계 개선 관련 자료'],
    importantMessage: '건강한 관계를 유지하고 계시네요. 계속 서로를 존중해주세요.',
  },
  safe: {
    level: 'safe',
    title: '건강한 관계',
    emoji: '💚',
    riskScore: 5,
    description: '건강하고 존중받는 관계에 있는 것으로 보입니다. 이런 관계를 유지하는 것은 정말 소중한 일이에요.',
    signs: [
      '서로 존중함',
      '자유롭게 의견 표현',
      '감정이 인정받음',
      '함께 성장함',
    ],
    effects: [
      '정서적 안정',
      '자존감 유지/향상',
      '건강한 자기표현',
    ],
    advice: [
      '이 좋은 관계를 소중히 하세요',
      '서로에게 감사 표현하기',
      '계속 소통하며 성장하기',
    ],
    resources: [],
    importantMessage: '건강한 관계를 맺고 계시네요. 소중한 관계입니다.',
  },
};

export function calculateGaslightingCheckResult(answers: number[]): GaslightingCheckResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 60) {
    return resultTypes.high;
  } else if (percentage >= 35) {
    return resultTypes.medium;
  } else if (percentage >= 15) {
    return resultTypes.low;
  } else {
    return resultTypes.safe;
  }
}
