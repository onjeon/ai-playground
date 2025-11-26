// 피플플리저 테스트 - 나는 남의 눈치를 얼마나 볼까?

export const questions = [
  {
    id: 1,
    question: "부탁을 거절하는 것은?",
    options: [
      { text: "필요하면 거절한다", type: "healthy", score: 0 },
      { text: "좀 어렵다", type: "mild", score: 2 },
      { text: "거의 못한다", type: "moderate", score: 4 },
      { text: "절대 못한다", type: "severe", score: 5 },
    ],
  },
  {
    id: 2,
    question: "남들이 나를 어떻게 생각할까 신경 쓰는 정도는?",
    options: [
      { text: "별로 안 신경 씀", type: "healthy", score: 0 },
      { text: "약간 신경 씀", type: "mild", score: 2 },
      { text: "많이 신경 씀", type: "moderate", score: 4 },
      { text: "항상 신경 씀", type: "severe", score: 5 },
    ],
  },
  {
    id: 3,
    question: "갈등 상황에서 나는?",
    options: [
      { text: "내 의견을 말한다", type: "healthy", score: 0 },
      { text: "상황 봐서 결정", type: "mild", score: 2 },
      { text: "대체로 양보한다", type: "moderate", score: 4 },
      { text: "항상 내가 물러난다", type: "severe", score: 5 },
    ],
  },
  {
    id: 4,
    question: "'착하다'는 말을 들으면?",
    options: [
      { text: "그냥 그런가 보다", type: "healthy", score: 0 },
      { text: "나쁘지 않다", type: "mild", score: 1 },
      { text: "기분 좋다", type: "moderate", score: 3 },
      { text: "매우 중요하다", type: "severe", score: 5 },
    ],
  },
  {
    id: 5,
    question: "내 감정보다 남의 감정이 우선인 적이?",
    options: [
      { text: "거의 없다", type: "healthy", score: 0 },
      { text: "가끔 있다", type: "mild", score: 2 },
      { text: "자주 있다", type: "moderate", score: 4 },
      { text: "항상 그렇다", type: "severe", score: 5 },
    ],
  },
  {
    id: 6,
    question: "누군가 실망하면?",
    options: [
      { text: "그럴 수 있다 생각", type: "healthy", score: 0 },
      { text: "약간 신경 쓰인다", type: "mild", score: 2 },
      { text: "죄책감을 느낀다", type: "moderate", score: 4 },
      { text: "매우 괴롭다", type: "severe", score: 5 },
    ],
  },
  {
    id: 7,
    question: "칭찬받기 위해 행동한 적이?",
    options: [
      { text: "거의 없다", type: "healthy", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "늘 그렇다", type: "severe", score: 5 },
    ],
  },
  {
    id: 8,
    question: "내 진짜 의견을 말하는 것은?",
    options: [
      { text: "자연스럽다", type: "healthy", score: 0 },
      { text: "좀 어렵다", type: "mild", score: 2 },
      { text: "매우 어렵다", type: "moderate", score: 4 },
      { text: "거의 못한다", type: "severe", score: 5 },
    ],
  },
  {
    id: 9,
    question: "남이 화내면 내 탓인 것 같은 생각이?",
    options: [
      { text: "안 든다", type: "healthy", score: 0 },
      { text: "가끔 든다", type: "mild", score: 2 },
      { text: "자주 든다", type: "moderate", score: 4 },
      { text: "항상 내 탓 같다", type: "severe", score: 5 },
    ],
  },
  {
    id: 10,
    question: "싫은 일도 하게 되는 이유는?",
    options: [
      { text: "안 한다", type: "healthy", score: 0 },
      { text: "가끔 인간관계 때문에", type: "mild", score: 2 },
      { text: "미움받을까봐", type: "moderate", score: 4 },
      { text: "거절 자체가 안 됨", type: "severe", score: 5 },
    ],
  },
  {
    id: 11,
    question: "나를 위한 시간은?",
    options: [
      { text: "충분히 가진다", type: "healthy", score: 0 },
      { text: "노력 중이다", type: "mild", score: 2 },
      { text: "부족하다", type: "moderate", score: 4 },
      { text: "거의 없다", type: "severe", score: 5 },
    ],
  },
  {
    id: 12,
    question: "남들 기대에 맞추느라 지친 적이?",
    options: [
      { text: "거의 없다", type: "healthy", score: 0 },
      { text: "가끔 있다", type: "mild", score: 2 },
      { text: "자주 있다", type: "moderate", score: 4 },
      { text: "늘 지쳐있다", type: "severe", score: 5 },
    ],
  },
];

export interface PeoplePleserResult {
  level: string;
  title: string;
  emoji: string;
  pleaseScore: number;
  description: string;
  characteristics: string[];
  causes: string[];
  effects: string[];
  recoverySteps: string[];
  boundaryTips: string[];
  selfCareAdvice: string[];
  affirmation: string;
}

const resultTypes: Record<string, PeoplePleserResult> = {
  healthy: {
    level: 'healthy',
    title: '건강한 경계',
    emoji: '💪',
    pleaseScore: 15,
    description: '당신은 건강한 경계를 유지하고 있어요! 남의 눈치를 과도하게 보지 않고, 자신의 의견과 감정을 존중합니다. 이 균형을 유지하세요.',
    characteristics: ['건강한 자기 주장', '적절한 경계', '자기 존중'],
    causes: [],
    effects: ['건강한 관계', '자존감 유지', '스트레스 관리'],
    recoverySteps: ['현재 상태 유지'],
    boundaryTips: ['일관된 경계 유지', '필요시 거절하기'],
    selfCareAdvice: ['자기 돌봄 지속', '균형 잡힌 관계 유지'],
    affirmation: '당신은 자신을 존중하면서 타인도 배려하는 좋은 균형을 가지고 있어요!',
  },
  mild: {
    level: 'mild',
    title: '가벼운 피플플리저',
    emoji: '🙂',
    pleaseScore: 40,
    description: '약간의 피플플리저 성향이 있지만 관리 가능한 수준입니다. 가끔 남의 눈치를 보지만, 중요한 상황에서는 자기 의견을 말할 수 있어요.',
    characteristics: ['배려심', '때때로 눈치 봄', '갈등 회피 경향'],
    causes: ['사회적 기대', '좋은 관계 유지 욕구'],
    effects: ['가끔 피로감', '경계 흐릿'],
    recoverySteps: ['작은 거절 연습', '내 감정 확인하기'],
    boundaryTips: ['거절 연습하기', '"생각해볼게" 활용'],
    selfCareAdvice: ['나만의 시간 확보', '감정 일기'],
    affirmation: '배려하는 마음은 장점이에요. 나 자신도 그만큼 배려해주세요.',
  },
  moderate: {
    level: 'moderate',
    title: '피플플리저',
    emoji: '😓',
    pleaseScore: 65,
    description: '남의 눈치를 많이 보는 편이에요. 거절이 어렵고, 남의 기대에 맞추느라 지칠 때가 많습니다. 자신의 경계를 세우는 연습이 필요해요.',
    characteristics: ['거절 어려움', '과도한 눈치', '자기 희생', '갈등 회피'],
    causes: ['인정 욕구', '버림받음의 두려움', '낮은 자존감', '어린 시절 경험'],
    effects: ['번아웃', '분노 억압', '자존감 하락', '피로감'],
    recoverySteps: ['거절 연습', '경계 세우기', '자기 감정 인정', '작은 것부터 시작'],
    boundaryTips: ['NO라고 말하기 연습', '즉답 피하기', '내 필요 먼저 체크'],
    selfCareAdvice: ['나만의 시간 필수', '자기 돌봄', '감정 표현'],
    affirmation: '모두를 만족시킬 수는 없어요. 당신의 행복도 중요합니다.',
  },
  severe: {
    level: 'severe',
    title: '심한 피플플리저',
    emoji: '😔',
    pleaseScore: 90,
    description: '남의 눈치를 과도하게 보고 있어요. 자신을 희생하며 남을 기쁘게 하려다 지쳐있을 거예요. 전문가의 도움을 받는 것도 좋은 방법입니다.',
    characteristics: ['극도의 거절 어려움', '자기 희생', '자기 상실', '항상 남 우선'],
    causes: ['깊은 인정 욕구', '버림받음 트라우마', '어린 시절 상처', '낮은 자존감'],
    effects: ['심한 번아웃', '우울감', '분노 폭발', '관계 문제', '자기 상실'],
    recoverySteps: ['전문 상담 권장', '작은 거절부터', '자기 감정 인정', '지지 시스템'],
    boundaryTips: ['전문가와 함께', '아주 작은 것부터', '무리하지 않기'],
    selfCareAdvice: ['전문 상담 고려', '자기 돌봄 우선', '충분한 휴식'],
    affirmation: '당신은 있는 그대로 사랑받을 자격이 있어요. 남을 기쁘게 해야만 사랑받는 게 아니에요.',
  },
};

export function calculatePeoplePleserResult(answers: number[]): PeoplePleserResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage < 25) {
    return { ...resultTypes.healthy, pleaseScore: Math.round(percentage) };
  } else if (percentage < 50) {
    return { ...resultTypes.mild, pleaseScore: Math.round(percentage) };
  } else if (percentage < 75) {
    return { ...resultTypes.moderate, pleaseScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.severe, pleaseScore: Math.round(percentage) };
  }
}
