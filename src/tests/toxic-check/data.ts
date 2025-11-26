// 독성 관계 체크 테스트 - 이 관계, 괜찮은 걸까?

export const questions = [
  {
    id: 1,
    question: "그 사람과 함께 있으면 기분이?",
    options: [
      { text: "대체로 좋다", type: "healthy", score: 0 },
      { text: "때에 따라 다르다", type: "mild", score: 2 },
      { text: "자주 불안하거나 지친다", type: "moderate", score: 4 },
      { text: "항상 긴장되거나 우울하다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 2,
    question: "그 사람이 내 의견을 존중하나?",
    options: [
      { text: "항상 존중한다", type: "healthy", score: 0 },
      { text: "대체로 존중한다", type: "mild", score: 1 },
      { text: "자주 무시한다", type: "moderate", score: 4 },
      { text: "전혀 존중 안 한다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 3,
    question: "그 사람 때문에 다른 관계가?",
    options: [
      { text: "변함없다", type: "healthy", score: 0 },
      { text: "약간 영향 있다", type: "mild", score: 2 },
      { text: "많이 멀어졌다", type: "moderate", score: 4 },
      { text: "고립되었다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 4,
    question: "잘못은 주로 누구 탓이 되나?",
    options: [
      { text: "공평하게 나눈다", type: "healthy", score: 0 },
      { text: "상황에 따라", type: "mild", score: 2 },
      { text: "대체로 내 탓", type: "moderate", score: 4 },
      { text: "항상 내 탓", type: "toxic", score: 5 },
    ],
  },
  {
    id: 5,
    question: "그 사람 앞에서 진짜 나를 보여줄 수 있나?",
    options: [
      { text: "완전히 그렇다", type: "healthy", score: 0 },
      { text: "대체로 그렇다", type: "mild", score: 1 },
      { text: "숨기는 게 많다", type: "moderate", score: 4 },
      { text: "전혀 못한다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 6,
    question: "그 사람과의 다툼 후 나는?",
    options: [
      { text: "대화로 해결된다", type: "healthy", score: 0 },
      { text: "시간이 좀 걸린다", type: "mild", score: 2 },
      { text: "내가 사과해야 끝난다", type: "moderate", score: 4 },
      { text: "항상 상처받고 끝난다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 7,
    question: "그 사람이 내 성공을 어떻게 받아들이나?",
    options: [
      { text: "진심으로 기뻐한다", type: "healthy", score: 0 },
      { text: "축하한다", type: "mild", score: 1 },
      { text: "시큰둥하다", type: "moderate", score: 3 },
      { text: "질투하거나 깎아내린다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 8,
    question: "그 사람이 나를 통제하려 하나?",
    options: [
      { text: "전혀 아니다", type: "healthy", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "항상", type: "toxic", score: 5 },
    ],
  },
  {
    id: 9,
    question: "그 관계에서 나의 자존감은?",
    options: [
      { text: "올라갔다", type: "healthy", score: 0 },
      { text: "비슷하다", type: "mild", score: 1 },
      { text: "약간 떨어졌다", type: "moderate", score: 3 },
      { text: "많이 떨어졌다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 10,
    question: "그 사람 없이 결정을 내릴 수 있나?",
    options: [
      { text: "당연히", type: "healthy", score: 0 },
      { text: "대체로", type: "mild", score: 1 },
      { text: "어렵다", type: "moderate", score: 4 },
      { text: "불가능하다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 11,
    question: "그 사람 연락이 오면 기분이?",
    options: [
      { text: "반갑다", type: "healthy", score: 0 },
      { text: "보통", type: "mild", score: 1 },
      { text: "긴장된다", type: "moderate", score: 4 },
      { text: "불안하다", type: "toxic", score: 5 },
    ],
  },
  {
    id: 12,
    question: "이 관계를 주변에 어떻게 설명하나?",
    options: [
      { text: "좋다고 말한다", type: "healthy", score: 0 },
      { text: "장단점이 있다", type: "mild", score: 2 },
      { text: "불평을 많이 한다", type: "moderate", score: 4 },
      { text: "숨기거나 변명한다", type: "toxic", score: 5 },
    ],
  },
];

export interface ToxicCheckResult {
  level: string;
  title: string;
  emoji: string;
  toxicScore: number;
  description: string;
  redFlags: string[];
  effects: string[];
  advice: string[];
  boundaryTips: string[];
  resources: string[];
  importantMessage: string;
}

const resultTypes: Record<string, ToxicCheckResult> = {
  healthy: {
    level: 'healthy',
    title: '건강한 관계',
    emoji: '💚',
    toxicScore: 10,
    description: '이 관계는 건강해 보입니다! 서로 존중하고, 함께 성장하며, 진정한 연결이 있어요. 이 좋은 관계를 소중히 여기세요.',
    redFlags: [],
    effects: ['긍정적 자존감', '정서적 안정', '개인 성장'],
    advice: ['현재 관계 유지', '감사 표현하기', '계속 소통하기'],
    boundaryTips: ['건강한 경계 유지'],
    resources: [],
    importantMessage: '건강한 관계를 맺고 계시네요. 서로를 계속 소중히 여기세요.',
  },
  mild: {
    level: 'mild',
    title: '주의 필요',
    emoji: '🟡',
    toxicScore: 35,
    description: '약간의 주의가 필요한 패턴이 보입니다. 완전히 독성 관계는 아니지만, 몇 가지 개선할 점이 있어요. 소통으로 해결해보세요.',
    redFlags: ['가끔 불편함', '소통 개선 필요'],
    effects: ['간헐적 스트레스', '약간의 갈등'],
    advice: ['솔직한 대화 시도', '경계 설정 연습', '자기 감정 확인'],
    boundaryTips: ['불편함 표현하기', '필요한 것 요청하기'],
    resources: ['관계 개선 자료', '소통 스킬 학습'],
    importantMessage: '개선의 여지가 있어요. 대화를 통해 더 나은 관계를 만들어보세요.',
  },
  moderate: {
    level: 'moderate',
    title: '경계 필요',
    emoji: '🟠',
    toxicScore: 60,
    description: '이 관계에서 독성 패턴이 보입니다. 자존감 하락, 고립, 불안 등이 느껴질 수 있어요. 경계를 세우고 자신을 보호하세요.',
    redFlags: ['자존감 하락', '통제 경향', '비난/무시', '고립'],
    effects: ['스트레스', '불안', '자존감 하락', '관계 고립'],
    advice: ['경계 설정', '신뢰할 사람과 상담', '전문 도움 고려', '자기 돌봄'],
    boundaryTips: ['NO라고 말하기', '시간/공간 확보', '기대 명확히 하기'],
    resources: ['심리상담센터', '관계 전문가'],
    importantMessage: '당신의 감정은 유효합니다. 자신을 보호하는 것은 이기적인 게 아니에요.',
  },
  toxic: {
    level: 'toxic',
    title: '독성 관계',
    emoji: '🔴',
    toxicScore: 85,
    description: '이 관계는 당신에게 해로울 수 있습니다. 통제, 조종, 정서적 학대의 징후가 보여요. 전문가의 도움을 받고, 자신을 보호하세요.',
    redFlags: ['심한 통제', '정서적 학대', '가스라이팅', '고립', '자존감 파괴'],
    effects: ['심한 불안/우울', '자존감 심각 하락', '완전 고립', '트라우마'],
    advice: ['전문 상담 필수', '신뢰할 수 있는 사람에게 도움 요청', '거리두기 고려', '안전 확보'],
    boundaryTips: ['안전이 최우선', '혼자 해결하려 하지 않기', '도움 요청하기'],
    resources: ['심리상담센터', '여성긴급전화 1366', '정신건강위기상담 1577-0199'],
    importantMessage: '당신은 잘못하지 않았어요. 이 관계를 떠나는 것은 용기 있는 선택입니다. 도움을 요청하세요.',
  },
};

export function calculateToxicCheckResult(answers: number[]): ToxicCheckResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage < 20) {
    return { ...resultTypes.healthy, toxicScore: Math.round(percentage) };
  } else if (percentage < 45) {
    return { ...resultTypes.mild, toxicScore: Math.round(percentage) };
  } else if (percentage < 70) {
    return { ...resultTypes.moderate, toxicScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.toxic, toxicScore: Math.round(percentage) };
  }
}
