// 연애 트라우마 테스트 - 과거 연애가 남긴 상처는?

export const questions = [
  {
    id: 1,
    question: "새로운 사람에게 마음을 여는 것은?",
    options: [
      { text: "쉽게 열린다", type: "open", score: 0 },
      { text: "시간이 좀 걸린다", type: "cautious", score: 2 },
      { text: "매우 조심스럽다", type: "guarded", score: 4 },
      { text: "거의 못한다", type: "closed", score: 5 },
    ],
  },
  {
    id: 2,
    question: "연인이 연락이 늦으면?",
    options: [
      { text: "별 생각 없다", type: "secure", score: 0 },
      { text: "약간 신경 쓰인다", type: "mild", score: 2 },
      { text: "불안해진다", type: "anxious", score: 4 },
      { text: "최악의 상상을 한다", type: "severe", score: 5 },
    ],
  },
  {
    id: 3,
    question: "과거 연애를 떠올리면?",
    options: [
      { text: "좋은 추억이다", type: "healed", score: 0 },
      { text: "담담하다", type: "neutral", score: 1 },
      { text: "아프다", type: "hurt", score: 4 },
      { text: "아직도 힘들다", type: "traumatized", score: 5 },
    ],
  },
  {
    id: 4,
    question: "'또 버림받을 것 같다'는 생각이?",
    options: [
      { text: "전혀 안 든다", type: "secure", score: 0 },
      { text: "가끔 든다", type: "mild", score: 2 },
      { text: "자주 든다", type: "anxious", score: 4 },
      { text: "항상 든다", type: "severe", score: 5 },
    ],
  },
  {
    id: 5,
    question: "연애 중 불안을 느끼는 정도는?",
    options: [
      { text: "거의 없다", type: "secure", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "anxious", score: 4 },
      { text: "항상 불안하다", type: "severe", score: 5 },
    ],
  },
  {
    id: 6,
    question: "이별에 대한 두려움은?",
    options: [
      { text: "별로 없다", type: "secure", score: 0 },
      { text: "약간 있다", type: "mild", score: 2 },
      { text: "많이 있다", type: "anxious", score: 4 },
      { text: "이별이 무서워 시작을 못한다", type: "severe", score: 5 },
    ],
  },
  {
    id: 7,
    question: "과거 연인과 비슷한 유형을 만나면?",
    options: [
      { text: "상관없다", type: "healed", score: 0 },
      { text: "조금 조심하게 된다", type: "cautious", score: 2 },
      { text: "경계한다", type: "guarded", score: 4 },
      { text: "피한다", type: "avoidant", score: 5 },
    ],
  },
  {
    id: 8,
    question: "연인의 과거 연애가 신경 쓰이나?",
    options: [
      { text: "전혀", type: "secure", score: 0 },
      { text: "약간", type: "mild", score: 2 },
      { text: "많이", type: "anxious", score: 4 },
      { text: "매우 많이", type: "severe", score: 5 },
    ],
  },
  {
    id: 9,
    question: "자신을 사랑받을 자격이 있다고 느끼나?",
    options: [
      { text: "당연히 있다", type: "healthy", score: 0 },
      { text: "그런 것 같다", type: "mild", score: 1 },
      { text: "잘 모르겠다", type: "uncertain", score: 3 },
      { text: "없는 것 같다", type: "wounded", score: 5 },
    ],
  },
  {
    id: 10,
    question: "연애 실패가 내 탓이라는 생각이?",
    options: [
      { text: "그렇지 않다", type: "healthy", score: 0 },
      { text: "가끔 든다", type: "mild", score: 2 },
      { text: "자주 든다", type: "guilty", score: 4 },
      { text: "항상 내 탓인 것 같다", type: "self_blame", score: 5 },
    ],
  },
  {
    id: 11,
    question: "연애를 다시 시작하는 것은?",
    options: [
      { text: "설렌다", type: "ready", score: 0 },
      { text: "괜찮다", type: "open", score: 1 },
      { text: "무섭다", type: "fearful", score: 4 },
      { text: "당분간 안 할 것 같다", type: "avoidant", score: 5 },
    ],
  },
  {
    id: 12,
    question: "과거 연애의 상처가 현재에 영향을 주나?",
    options: [
      { text: "전혀 없다", type: "healed", score: 0 },
      { text: "조금", type: "mild", score: 2 },
      { text: "많이", type: "affected", score: 4 },
      { text: "지배적이다", type: "dominated", score: 5 },
    ],
  },
];

export interface LoveTraumaResult {
  level: string;
  title: string;
  emoji: string;
  traumaScore: number;
  description: string;
  symptoms: string[];
  rootCauses: string[];
  healingSteps: string[];
  selfCareAdvice: string[];
  relationshipAdvice: string[];
  professionalHelp: boolean;
  affirmation: string;
}

const resultTypes: Record<string, LoveTraumaResult> = {
  healed: {
    level: 'healed',
    title: '건강한 상태',
    emoji: '💚',
    traumaScore: 10,
    description: '당신은 과거 연애 경험을 잘 정리하고 건강한 상태입니다! 새로운 연애에 열려있고, 과거에 얽매이지 않아요. 이런 건강한 마음을 유지하세요.',
    symptoms: [],
    rootCauses: [],
    healingSteps: ['현재 상태 유지', '건강한 관계 패턴 지속'],
    selfCareAdvice: ['자기 돌봄 지속', '건강한 경계 유지'],
    relationshipAdvice: ['열린 마음으로 사랑하기', '소통 중시하기'],
    professionalHelp: false,
    affirmation: '당신은 사랑받을 자격이 있고, 건강하게 사랑할 준비가 되어있어요!',
  },
  mild: {
    level: 'mild',
    title: '가벼운 상처',
    emoji: '🩹',
    traumaScore: 35,
    description: '약간의 조심스러움이 있지만 정상적인 수준입니다. 과거의 경험이 교훈이 되어 더 성숙한 연애를 할 수 있어요. 천천히 신뢰를 쌓아가세요.',
    symptoms: ['약간의 조심스러움', '신중함'],
    rootCauses: ['과거의 실망 경험'],
    healingSteps: ['자기 감정 인정하기', '신뢰 천천히 쌓기'],
    selfCareAdvice: ['자기 가치 확인하기', '긍정적 자기 대화'],
    relationshipAdvice: ['솔직한 소통', '천천히 가기'],
    professionalHelp: false,
    affirmation: '상처는 교훈이 되었어요. 당신은 더 현명하게 사랑할 수 있어요.',
  },
  moderate: {
    level: 'moderate',
    title: '치유가 필요한 상처',
    emoji: '💔',
    traumaScore: 60,
    description: '과거 연애의 상처가 현재에 영향을 주고 있어요. 불안, 두려움, 자존감 문제가 있을 수 있습니다. 시간을 갖고 스스로를 돌보며 치유하세요.',
    symptoms: ['연애 불안', '이별 두려움', '신뢰 어려움', '자존감 흔들림'],
    rootCauses: ['과거의 상처', '버림받은 경험', '배신 경험'],
    healingSteps: ['상처 인정하기', '감정 표현하기', '자기 돌봄', '시간 갖기'],
    selfCareAdvice: ['혼자 있는 시간 갖기', '취미 활동', '친구와 대화', '일기 쓰기'],
    relationshipAdvice: ['천천히 시작하기', '경계 설정', '솔직하게 소통'],
    professionalHelp: true,
    affirmation: '상처받은 것은 당신 잘못이 아니에요. 치유는 가능합니다.',
  },
  severe: {
    level: 'severe',
    title: '깊은 트라우마',
    emoji: '🖤',
    traumaScore: 85,
    description: '과거 연애가 깊은 상처를 남겼어요. 연애에 대한 두려움, 불안, 자존감 문제가 크게 느껴질 수 있습니다. 전문가의 도움을 받는 것을 권장합니다.',
    symptoms: ['심한 불안', '연애 회피', '깊은 두려움', '자존감 저하', '신뢰 불가'],
    rootCauses: ['심각한 배신', '정서적 학대', '반복적 상처', '버림받은 경험'],
    healingSteps: ['전문가 상담 권장', '자기 인정', '작은 것부터 시작', '지지 시스템 구축'],
    selfCareAdvice: ['전문 상담 고려', '자기 돌봄 우선', '무리하지 않기', '작은 성취에 집중'],
    relationshipAdvice: ['치유 먼저', '강요받지 않기', '준비될 때 시작'],
    professionalHelp: true,
    affirmation: '당신은 혼자가 아니에요. 도움을 요청하는 것은 용기 있는 행동입니다.',
  },
};

export function calculateLoveTraumaResult(answers: number[]): LoveTraumaResult {
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
    return { ...resultTypes.healed, traumaScore: Math.round(percentage) };
  } else if (percentage < 45) {
    return { ...resultTypes.mild, traumaScore: Math.round(percentage) };
  } else if (percentage < 70) {
    return { ...resultTypes.moderate, traumaScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.severe, traumaScore: Math.round(percentage) };
  }
}
