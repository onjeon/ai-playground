// 레드플래그 감별 테스트 - 이 사람, 괜찮은 사람일까?

export interface RedFlagDetectQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface RedFlagDetectResult {
  type: string;
  title: string;
  emoji: string;
  riskLevel: number;
  verdict: string;
  description: string;
  redFlags: string[];
  greenFlags: string[];
  analysis: string;
  advice: string[];
  watchOut: string[];
  nextSteps: string[];
  importantMessage: string;
}

export const redFlagTypes = ['safe', 'caution', 'warning', 'danger', 'run'] as const;
export type RedFlagType = typeof redFlagTypes[number];

export const questions: RedFlagDetectQuestion[] = [
  {
    id: 1,
    question: "그 사람이 화났을 때 어떻게 행동해?",
    options: [
      { text: "차분하게 대화하려고 해", score: 0 },
      { text: "조금 예민해지지만 금방 풀어", score: 1 },
      { text: "말이 심해지거나 소리를 질러", score: 2 },
      { text: "물건 던지거나 위협적인 행동을 해", score: 3 },
    ],
  },
  {
    id: 2,
    question: "전 애인 얘기를 할 때 어떤 식으로 말해?",
    options: [
      { text: "담담하게, 과거일로 정리됐다는 느낌", score: 0 },
      { text: "가끔 언급하지만 특별한 감정 없어 보여", score: 1 },
      { text: "전 애인 욕을 많이 하고 다 상대 잘못이래", score: 2 },
      { text: "아직도 연락하거나 미련이 있어 보여", score: 3 },
    ],
  },
  {
    id: 3,
    question: "너의 친구나 가족에 대한 태도는?",
    options: [
      { text: "존중하고 만나고 싶어해", score: 0 },
      { text: "관심은 없지만 존중은 해", score: 1 },
      { text: "내 친구들 안 좋게 말하거나 만나는 거 싫어해", score: 2 },
      { text: "내 인간관계를 통제하려고 해", score: 3 },
    ],
  },
  {
    id: 4,
    question: "연락 패턴은 어때?",
    options: [
      { text: "적당하고 건강해, 서로 배려함", score: 0 },
      { text: "조금 연락이 뜸하거나 불규칙해", score: 1 },
      { text: "답장 늦으면 화내거나 추궁해", score: 2 },
      { text: "감시하듯 연락하고 확인받으려 해", score: 3 },
    ],
  },
  {
    id: 5,
    question: "너의 의견이나 결정을 존중해?",
    options: [
      { text: "항상 존중하고 내 선택 지지해줘", score: 0 },
      { text: "대체로 존중하는 편이야", score: 1 },
      { text: "자기 의견이 항상 옳다고 해", score: 2 },
      { text: "내 의견 무시하고 자기 맘대로 해", score: 3 },
    ],
  },
  {
    id: 6,
    question: "돈이나 경제적인 부분에서 어때?",
    options: [
      { text: "합리적이고 투명해, 함께 계획해", score: 0 },
      { text: "각자 알아서 하는 편", score: 1 },
      { text: "돈 빌려달라거나 경제관념이 없어 보여", score: 2 },
      { text: "내 돈을 당연히 여기거나 착취하는 느낌", score: 3 },
    ],
  },
  {
    id: 7,
    question: "거짓말이나 숨기는 게 있어 보여?",
    options: [
      { text: "솔직하고 투명해, 숨기는 거 없어", score: 0 },
      { text: "가끔 말 안 하는 게 있지만 큰 거짓말은 아냐", score: 1 },
      { text: "거짓말을 종종 해서 신뢰가 흔들려", score: 2 },
      { text: "중요한 거짓말을 하거나 이중생활 의심돼", score: 3 },
    ],
  },
  {
    id: 8,
    question: "질투나 독점욕은 어느 정도야?",
    options: [
      { text: "건강한 수준, 신뢰 기반이야", score: 0 },
      { text: "조금 질투하지만 귀여운 정도", score: 1 },
      { text: "과하게 질투하고 의심해", score: 2 },
      { text: "다른 사람과 말하는 것도 통제하려 해", score: 3 },
    ],
  },
  {
    id: 9,
    question: "실수나 잘못에 대한 반응은?",
    options: [
      { text: "자기 잘못 인정하고 사과해", score: 0 },
      { text: "인정은 좀 늦지만 결국 사과해", score: 1 },
      { text: "자기 잘못인데 남 탓하거나 변명해", score: 2 },
      { text: "절대 인정 안 하고 오히려 내 탓으로 돌려", score: 3 },
    ],
  },
  {
    id: 10,
    question: "갈등 상황에서 어떻게 대처해?",
    options: [
      { text: "대화로 해결하려고 노력해", score: 0 },
      { text: "시간이 좀 걸리지만 결국 대화해", score: 1 },
      { text: "잠수타거나 무시해", score: 2 },
      { text: "협박, 막말, 또는 가스라이팅을 해", score: 3 },
    ],
  },
  {
    id: 11,
    question: "다른 이성에 대한 태도는?",
    options: [
      { text: "선 지키고 나를 안심시켜줘", score: 0 },
      { text: "평범하게 지내지만 불안하진 않아", score: 1 },
      { text: "다른 이성과 애매하게 지내거나 숨겨", score: 2 },
      { text: "바람피거나 양다리 의심이 들어", score: 3 },
    ],
  },
  {
    id: 12,
    question: "너의 감정에 대한 반응은?",
    options: [
      { text: "공감하고 이해하려고 노력해", score: 0 },
      { text: "다 이해하진 못해도 들어줘", score: 1 },
      { text: "내 감정 무시하거나 예민하다고 해", score: 2 },
      { text: "내 감정을 이용하거나 조종하려 해", score: 3 },
    ],
  },
];

export const results: Record<RedFlagType, RedFlagDetectResult> = {
  safe: {
    type: 'safe',
    title: '그린 플래그! 안전해요',
    emoji: '💚',
    riskLevel: 10,
    verdict: '건강한 관계의 신호가 보여요!',
    description: '이 사람에게서 위험 신호는 거의 보이지 않아요. 서로를 존중하고, 건강하게 소통하는 좋은 관계의 가능성이 높아요. 물론 완벽한 사람은 없지만, 현재 보이는 신호들은 매우 긍정적이에요.',
    redFlags: [],
    greenFlags: [
      '감정 조절 능력이 있음',
      '과거를 건강하게 정리함',
      '상대방을 존중함',
      '솔직하고 투명함',
    ],
    analysis: '건강한 관계를 맺을 수 있는 사람으로 보여요',
    advice: [
      '이 사람과의 관계를 발전시켜 나가세요',
      '서로에 대한 신뢰를 계속 쌓아가세요',
      '좋은 점을 서로 표현하고 감사하세요',
      '건강한 소통 패턴을 유지하세요',
    ],
    watchOut: ['완벽한 사람은 없으니 현실적 기대를 가지세요'],
    nextSteps: [
      '관계를 자연스럽게 발전시키세요',
      '서로를 알아가는 시간을 즐기세요',
      '미래를 함께 계획해봐도 좋아요',
    ],
    importantMessage: '좋은 사람을 만난 것 같아요! 이 관계를 소중히 여기세요.',
  },
  caution: {
    type: 'caution',
    title: '대체로 괜찮아요',
    emoji: '💛',
    riskLevel: 30,
    verdict: '작은 주의점은 있지만 크게 걱정은 없어요',
    description: '전반적으로 괜찮은 편이지만, 몇 가지 살펴볼 부분이 있어요. 대부분의 사람들이 가지고 있는 작은 단점들일 수 있어요. 대화로 해결 가능한 수준이니 너무 걱정하지 마세요.',
    redFlags: [],
    greenFlags: [
      '기본적인 존중은 있음',
      '대화가 통하는 편',
    ],
    analysis: '작은 단점은 있지만 함께 성장할 수 있어요',
    advice: [
      '불편한 점은 대화로 풀어가세요',
      '서로의 성장을 응원하세요',
      '열린 마음으로 소통하세요',
      '사소한 것에 너무 예민해지지 마세요',
    ],
    watchOut: [
      '작은 문제가 커지기 전에 대화하세요',
      '불편한 패턴이 반복되는지 지켜보세요',
    ],
    nextSteps: [
      '솔직한 대화 시간을 가져보세요',
      '서로의 기대치를 맞춰가세요',
      '함께 성장하는 관계를 만들어가세요',
    ],
    importantMessage: '완벽한 사람은 없어요. 함께 맞춰갈 수 있다면 좋은 관계가 될 수 있어요.',
  },
  warning: {
    type: 'warning',
    title: '주의가 필요해요',
    emoji: '🟡',
    riskLevel: 55,
    verdict: '몇 가지 걱정되는 신호가 있어요',
    description: '무시하기 어려운 주의 신호들이 보여요. 아직 심각한 수준은 아니지만, 이런 패턴이 계속된다면 관계에 문제가 생길 수 있어요. 눈 뜨고 지켜보면서, 필요하면 대화를 나눠보세요.',
    redFlags: [
      '소통에 어려움이 있음',
      '가끔 불편한 행동을 함',
      '갈등 해결 방식이 미숙함',
    ],
    greenFlags: [],
    analysis: '주의 깊게 지켜봐야 할 신호들이 있어요',
    advice: [
      '자신의 감정과 경계를 명확히 하세요',
      '불편한 점을 확실히 전달하세요',
      '변화 의지가 있는지 확인하세요',
      '친구나 가족의 의견도 들어보세요',
    ],
    watchOut: [
      '같은 문제가 반복되는지 체크하세요',
      '상황이 악화되면 거리를 두세요',
      '자신의 감정을 무시하지 마세요',
    ],
    nextSteps: [
      '진지한 대화를 통해 문제점 언급하기',
      '변화가 없다면 관계 재고하기',
      '자신의 바운더리 지키기',
    ],
    importantMessage: '지금 눈감으면 나중에 더 힘들어질 수 있어요. 현명하게 판단하세요.',
  },
  danger: {
    type: 'danger',
    title: '심각한 레드플래그!',
    emoji: '🚨',
    riskLevel: 80,
    verdict: '확실한 경고 신호가 있어요',
    description: '걱정되는 수준의 레드플래그들이 보여요. 이런 행동 패턴은 건강하지 않은 관계의 전형적인 신호예요. 감정에 휩쓸리지 말고 객관적으로 상황을 봐주세요. 당신의 안전과 행복이 가장 중요해요.',
    redFlags: [
      '존중 부족 또는 통제 시도',
      '거짓말이나 신뢰 문제',
      '감정적 조종 가능성',
      '건강하지 않은 갈등 해결',
    ],
    greenFlags: [],
    analysis: '이 관계가 당신에게 해로울 수 있어요',
    advice: [
      '객관적인 시각을 유지하세요',
      '신뢰할 수 있는 사람에게 상황을 공유하세요',
      '자신의 안전과 감정을 최우선으로 하세요',
      '거리를 두는 것을 고려하세요',
    ],
    watchOut: [
      '상대가 변하겠다는 말에 속지 마세요',
      '폭력이나 협박이 있다면 즉시 벗어나세요',
      '고립되지 않도록 주변 관계를 유지하세요',
    ],
    nextSteps: [
      '안전한 곳에서 거리를 두세요',
      '전문 상담을 고려해보세요',
      '관계 지속 여부를 진지하게 고민하세요',
    ],
    importantMessage: '사랑한다고 해서 모든 걸 참아야 하는 건 아니에요. 당신은 소중한 사람이에요.',
  },
  run: {
    type: 'run',
    title: '지금 당장 도망쳐!',
    emoji: '🏃‍♀️',
    riskLevel: 95,
    verdict: '위험한 관계입니다!',
    description: '매우 심각한 레드플래그들이 발견됐어요. 이 관계는 당신에게 해롭고, 더 오래 지속될수록 상처가 커질 수 있어요. 사랑이라는 이름으로 이런 행동을 정당화하면 안 돼요. 당신은 더 나은 대우를 받을 자격이 있어요.',
    redFlags: [
      '통제, 조종, 또는 가스라이팅',
      '심각한 신뢰 위반',
      '정서적/언어적 폭력',
      '고립 시키려는 시도',
    ],
    greenFlags: [],
    analysis: '이 관계를 즉시 재고해야 해요',
    advice: [
      '안전하게 이 관계에서 벗어나세요',
      '혼자 해결하려 하지 말고 도움을 구하세요',
      '전문가 상담을 받으세요',
      '당신 잘못이 아니에요',
    ],
    watchOut: [
      '상대의 협박이나 회유에 넘어가지 마세요',
      '연락을 차단하고 물리적 거리를 두세요',
      '위험하다면 경찰이나 전문 기관에 연락하세요',
    ],
    nextSteps: [
      '신뢰할 수 있는 사람에게 알리세요',
      '안전한 곳을 확보하세요',
      '전문 상담 기관 연락처를 저장해두세요',
      '관계를 끝내고 회복에 집중하세요',
    ],
    importantMessage: '당신은 이런 대우를 받을 이유가 없어요. 더 나은 사람, 더 나은 관계가 기다리고 있어요.',
  },
};

export function calculateResult(answers: number[]): RedFlagDetectResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: RedFlagType;
  
  if (percentage <= 15) {
    resultType = 'safe';
  } else if (percentage <= 35) {
    resultType = 'caution';
  } else if (percentage <= 55) {
    resultType = 'warning';
  } else if (percentage <= 80) {
    resultType = 'danger';
  } else {
    resultType = 'run';
  }

  return results[resultType];
}
