// 완벽주의 테스트 - 당신의 완벽주의 성향은?

export interface PerfectionismQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface PerfectionismResult {
  type: string;
  title: string;
  emoji: string;
  level: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  stressPoints: string[];
  copingTips: string[];
  atWork: string;
  inRelationships: string;
  selfCareAdvice: string;
}

export const perfectionismTypes = ['relaxed', 'balanced', 'high-achiever', 'perfectionist', 'extreme'] as const;
export type PerfectionismType = typeof perfectionismTypes[number];

export const questions: PerfectionismQuestion[] = [
  {
    id: 1,
    question: "프로젝트를 끝낸 후 기분은?",
    options: [
      { text: "끝났으니 됐지! 다음 할 일로 넘어감", scores: { relaxed: 3 } },
      { text: "괜찮게 했네~ 적당히 만족", scores: { balanced: 3 } },
      { text: "좀 더 잘할 수 있었는데... 아쉬움이 남음", scores: { 'high-achiever': 3 } },
      { text: "완벽하지 않아서 계속 신경 쓰임", scores: { perfectionist: 3, extreme: 1 } },
    ],
  },
  {
    id: 2,
    question: "실수를 했을 때 나는?",
    options: [
      { text: "에이 뭐~ 누구나 실수하지", scores: { relaxed: 3 } },
      { text: "다음엔 안 그러면 되지 뭐", scores: { balanced: 3 } },
      { text: "왜 그랬을까 분석하고 개선점 찾음", scores: { 'high-achiever': 3 } },
      { text: "한동안 자책하고 두고두고 떠올림", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 3,
    question: "남들이 나한테 기대하는 수준은?",
    options: [
      { text: "남들 기대? 나는 내 기준으로 살아", scores: { relaxed: 3 } },
      { text: "적당히 맞추되 무리하진 않음", scores: { balanced: 3 } },
      { text: "기대에 부응하려고 노력함", scores: { 'high-achiever': 3 } },
      { text: "기대 이상을 해야 직성이 풀림", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 4,
    question: "계획대로 일이 안 풀리면?",
    options: [
      { text: "그럴 수 있지~ 유연하게 대처", scores: { relaxed: 3 } },
      { text: "약간 스트레스 받지만 금방 적응", scores: { balanced: 3 } },
      { text: "불안하지만 새로운 계획 세움", scores: { 'high-achiever': 3 } },
      { text: "엄청 스트레스! 처음부터 다시 해야 할 것 같음", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 5,
    question: "일을 시작하기 전에?",
    options: [
      { text: "일단 시작! 하다 보면 됨", scores: { relaxed: 3 } },
      { text: "대략적인 계획 세우고 시작", scores: { balanced: 3 } },
      { text: "꼼꼼하게 준비하고 시작", scores: { 'high-achiever': 3 } },
      { text: "완벽한 조건이 될 때까지 시작 못 함", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 6,
    question: "칭찬을 받으면?",
    options: [
      { text: "오 고마워~ 기분 좋게 받음", scores: { relaxed: 3, balanced: 1 } },
      { text: "고맙지만 겸손하게 받아넘김", scores: { balanced: 3 } },
      { text: "고맙긴 한데, 아직 부족한 점이 있어서...", scores: { 'high-achiever': 2, perfectionist: 1 } },
      { text: "진짜 잘한 건지 의심됨. 빈말 아닐까?", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 7,
    question: "다른 사람의 결과물을 볼 때?",
    options: [
      { text: "잘했네~ 하고 넘어감", scores: { relaxed: 3 } },
      { text: "좋은 점 배우고 참고함", scores: { balanced: 3 } },
      { text: "나와 비교하게 됨 (더 잘해야 하는데...)", scores: { 'high-achiever': 2, perfectionist: 2 } },
      { text: "내 기준에 안 맞으면 답답함", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 8,
    question: "마감 기한이 다가오면?",
    options: [
      { text: "대충이라도 끝내면 됨", scores: { relaxed: 3 } },
      { text: "시간 내에 최선을 다함", scores: { balanced: 3 } },
      { text: "밤새서라도 퀄리티 올려야 함", scores: { 'high-achiever': 2, perfectionist: 2 } },
      { text: "완벽하지 않으면 제출 못 함 (마감 연장 요청)", scores: { extreme: 3 } },
    ],
  },
  {
    id: 9,
    question: "스스로에게 하는 말은?",
    options: [
      { text: "난 괜찮아~ 충분해", scores: { relaxed: 3 } },
      { text: "잘하고 있어. 조금만 더 노력하자", scores: { balanced: 3 } },
      { text: "더 잘할 수 있어. 만족하면 안 돼", scores: { 'high-achiever': 3 } },
      { text: "왜 이것밖에 못 해? 한심해", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 10,
    question: "취미 활동을 할 때도?",
    options: [
      { text: "재밌으면 그만! 결과는 상관없음", scores: { relaxed: 3 } },
      { text: "즐기면서 조금씩 실력 늘리기", scores: { balanced: 3 } },
      { text: "취미도 잘하고 싶어서 열심히 연습", scores: { 'high-achiever': 3 } },
      { text: "잘 못하면 스트레스라 쉽게 포기", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 11,
    question: "'좋은 게 좋은 거지'라는 말에?",
    options: [
      { text: "맞아맞아! 적당히가 최고", scores: { relaxed: 3 } },
      { text: "일리 있는 말이지", scores: { balanced: 3 } },
      { text: "글쎄... 좋은 건 제대로 해야지", scores: { 'high-achiever': 3 } },
      { text: "절대 동의 못 함. 제대로 해야 좋은 거임", scores: { perfectionist: 2, extreme: 2 } },
    ],
  },
  {
    id: 12,
    question: "내가 완벽주의자인 것 같냐고 물으면?",
    options: [
      { text: "아니? 난 되게 느긋한 편인데", scores: { relaxed: 3 } },
      { text: "상황에 따라 다른 것 같아", scores: { balanced: 3 } },
      { text: "좀 그런 편이긴 해...", scores: { 'high-achiever': 2, perfectionist: 2 } },
      { text: "완벽주의 아니면 어떻게 살아?", scores: { extreme: 3 } },
    ],
  },
];

export const results: Record<PerfectionismType, PerfectionismResult> = {
  relaxed: {
    type: 'relaxed',
    title: '여유로운 낙천가',
    emoji: '😎',
    level: 20,
    description: '완벽주의와는 거리가 먼 타입! 결과보다 과정을, 성과보다 마음의 평화를 중시합니다. "적당히"와 "괜찮아"가 입버릇이에요.',
    characteristics: [
      '스트레스 관리 능력 우수',
      '유연한 사고방식',
      '낮은 자기 비판',
      '과정 중심 사고',
    ],
    strengths: [
      '정신 건강이 좋음',
      '대인관계가 편안함',
      '실패를 두려워하지 않음',
      '새로운 시도에 열려있음',
    ],
    stressPoints: [
      '완벽주의자에게 답답하게 보일 수 있음',
      '중요한 일에서 디테일 놓칠 수 있음',
      '동기 부여가 안 될 때 있음',
    ],
    copingTips: [
      '중요한 일에서는 조금 더 꼼꼼하게',
      '목표 설정으로 동기 부여하기',
      '가끔은 자기 점검 시간 갖기',
    ],
    atWork: '분위기 메이커! 팀의 긴장을 풀어주지만, 중요한 디테일 체크 필요',
    inRelationships: '편안한 파트너. 상대에게 부담을 주지 않아요',
    selfCareAdvice: '당신의 여유로움은 장점이에요. 다만 가끔은 목표를 세워 성취감도 느껴보세요.',
  },
  balanced: {
    type: 'balanced',
    title: '균형 잡힌 현실주의자',
    emoji: '⚖️',
    level: 40,
    description: '완벽과 현실 사이에서 균형을 잘 잡는 타입! 높은 기준을 갖되, 상황에 따라 유연하게 조절할 줄 알아요.',
    characteristics: [
      '현실적인 목표 설정',
      '상황 판단력 우수',
      '건강한 자기 기준',
      '효율적인 에너지 관리',
    ],
    strengths: [
      '번아웃 위험이 낮음',
      '지속 가능한 성과 창출',
      '스트레스 관리 능력',
      '좋은 대인관계 유지',
    ],
    stressPoints: [
      '가끔 더 해야 하나 고민될 때',
      '완벽주의자와 갈등 가능',
      '중요한 기회를 놓칠까 걱정',
    ],
    copingTips: [
      '자신의 기준을 믿으세요',
      '비교보다 자기 성장에 집중',
      '지금의 밸런스를 유지하세요',
    ],
    atWork: '신뢰받는 팀원! 꾸준하고 안정적인 성과를 냄',
    inRelationships: '이상적인 파트너. 기대하되 강요하지 않아요',
    selfCareAdvice: '당신의 균형 감각은 소중해요. 스스로를 믿고, 가끔은 자기 칭찬도 해주세요.',
  },
  'high-achiever': {
    type: 'high-achiever',
    title: '열정적 성취자',
    emoji: '🔥',
    level: 60,
    description: '높은 목표를 향해 달려가는 타입! 완벽주의 성향이 있지만, 건강한 방식으로 발현돼요. 성장과 발전에 대한 열망이 강합니다.',
    characteristics: [
      '높은 성취 욕구',
      '자기 발전 지향',
      '목표 지향적',
      '건강한 승부욕',
    ],
    strengths: [
      '뛰어난 성과 창출',
      '끊임없는 자기 계발',
      '강한 추진력',
      '리더십 잠재력',
    ],
    stressPoints: [
      '과로 위험',
      '자기 비판이 심해질 때',
      '쉬는 것에 죄책감',
      '실패에 대한 두려움',
    ],
    copingTips: [
      '완벽보다 최선을 목표로',
      '휴식도 생산성의 일부',
      '과정의 성장을 인정하세요',
      '실패는 배움의 기회',
    ],
    atWork: '에이스! 높은 성과를 내지만 번아웃 주의 필요',
    inRelationships: '서로 성장하는 관계를 원해요. 다만 상대에게도 높은 기준 적용 주의',
    selfCareAdvice: '당신의 열정은 대단해요. 하지만 쉬어가는 것도 성장이에요. 자신에게 관대해지세요.',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '디테일 장인',
    emoji: '💎',
    level: 80,
    description: '완벽을 추구하는 타입! 높은 기준과 섬세함으로 뛰어난 결과물을 만들어내지만, 스스로에게 너무 가혹할 때가 있어요.',
    characteristics: [
      '높은 자기 기준',
      '디테일에 강함',
      '실수를 못 넘김',
      '강한 책임감',
    ],
    strengths: [
      '뛰어난 품질의 결과물',
      '섬세함과 정확성',
      '신뢰성 높음',
      '프로페셔널함',
    ],
    stressPoints: [
      '만성적인 불만족',
      '자기 비판과 자책',
      '번아웃 고위험군',
      '관계에서 갈등 발생',
    ],
    copingTips: [
      '80%도 충분히 훌륭해요',
      '실수해도 괜찮다고 말해주세요',
      '타인의 기준이 아닌 내 기준으로',
      '완벽한 건 없다는 걸 받아들이기',
    ],
    atWork: '디테일 장인! 최고 품질을 만들지만 번아웃과 팀 갈등 주의',
    inRelationships: '진심 가득하지만, 상대에게 완벽 강요는 금물',
    selfCareAdvice: '당신은 이미 충분히 잘하고 있어요. 완벽하지 않아도 사랑받을 자격이 있어요.',
  },
  extreme: {
    type: 'extreme',
    title: '극단적 완벽주의자',
    emoji: '⚡',
    level: 95,
    description: '완벽이 아니면 의미 없다고 느끼는 타입. 높은 성취를 이뤄내지만, 스스로를 너무 몰아붙여서 힘들 때가 많아요. 자신을 돌봐주세요.',
    characteristics: [
      '극도로 높은 기준',
      '전부 아니면 전무',
      '강한 자기 비판',
      '타인 평가에 민감',
    ],
    strengths: [
      '탁월한 결과물',
      '강한 의지력',
      '뛰어난 집중력',
      '높은 전문성',
    ],
    stressPoints: [
      '만성 스트레스',
      '자존감 저하',
      '번아웃 매우 높음',
      '대인관계 어려움',
      '시작조차 못 하는 마비 상태',
    ],
    copingTips: [
      '전문 상담을 고려해보세요',
      '"충분히 좋음"을 연습하세요',
      '자기 자비(self-compassion) 훈련',
      '완벽하지 않아도 가치있다는 걸 기억하세요',
      '작은 성공을 축하하는 습관',
    ],
    atWork: '최고의 결과물을 내지만, 건강과 관계가 희생될 수 있어요',
    inRelationships: '진심은 깊지만, 완벽 강요로 상대가 지칠 수 있어요',
    selfCareAdvice: '당신은 있는 그대로 충분히 가치있는 사람이에요. 완벽하지 않아도 괜찮아요. 자신에게 친절해지는 연습을 시작해보세요.',
  },
};

export function calculateResult(answers: number[]): PerfectionismResult {
  const scores: Record<PerfectionismType, number> = {
    relaxed: 0,
    balanced: 0,
    'high-achiever': 0,
    perfectionist: 0,
    extreme: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as PerfectionismType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: PerfectionismType = 'balanced';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as PerfectionismType;
    }
  });

  return results[resultType];
}
