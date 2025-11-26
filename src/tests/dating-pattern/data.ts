// 연애 패턴 분석 테스트 - 내 연애, 왜 맨날 이럴까?

export interface DatingPatternQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface DatingPatternResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  patternExplanation: string;
  characteristics: string[];
  inRelationship: string[];
  breakupPattern: string;
  rootCause: string;
  growthTips: string[];
  idealPartner: string;
  warningForSelf: string;
  encouragement: string;
}

export const datingPatternTypes = ['anxious', 'avoidant', 'intense', 'caretaker', 'perfectionist', 'balanced'] as const;
export type DatingPatternType = typeof datingPatternTypes[number];

export const questions: DatingPatternQuestion[] = [
  {
    id: 1,
    question: "연애 초반에 나는 어떤 편이야?",
    options: [
      { text: "빠르게 빠져들고 올인함", scores: { anxious: 2, intense: 2 } },
      { text: "천천히 알아가며 거리 유지", scores: { avoidant: 2, balanced: 1 } },
      { text: "상대를 위해 뭐든 해주려 함", scores: { caretaker: 3 } },
      { text: "완벽한 연애를 꿈꾸며 기대가 높음", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 2,
    question: "연인에게서 연락이 늦게 오면?",
    options: [
      { text: "불안하고 계속 확인하게 됨", scores: { anxious: 3 } },
      { text: "편해, 나도 바쁘니까", scores: { avoidant: 2, balanced: 1 } },
      { text: "혹시 힘든 일 있나 걱정됨", scores: { caretaker: 2, anxious: 1 } },
      { text: "약속된 시간에 안 오면 불만", scores: { perfectionist: 2, intense: 1 } },
    ],
  },
  {
    id: 3,
    question: "연애 중 갈등이 생기면?",
    options: [
      { text: "버림받을까 봐 무서워서 양보함", scores: { anxious: 3 } },
      { text: "거리를 두거나 피하게 됨", scores: { avoidant: 3 } },
      { text: "내가 잘못한 것 같아 죄책감 느낌", scores: { caretaker: 2, anxious: 1 } },
      { text: "논리적으로 맞고 틀림을 따짐", scores: { perfectionist: 2, intense: 1 } },
    ],
  },
  {
    id: 4,
    question: "이별 후 나는 어떤 편이야?",
    options: [
      { text: "오래 힘들고 집착하게 됨", scores: { anxious: 2, intense: 2 } },
      { text: "빠르게 털고 다음으로 넘어감", scores: { avoidant: 3 } },
      { text: "내가 뭘 잘못했나 자책함", scores: { caretaker: 2, anxious: 1 } },
      { text: "왜 안 맞았는지 분석함", scores: { perfectionist: 2, balanced: 1 } },
    ],
  },
  {
    id: 5,
    question: "연인에게 바라는 것은?",
    options: [
      { text: "나만 봐주고 확실한 애정표현", scores: { anxious: 2, intense: 1 } },
      { text: "서로의 공간 존중, 편한 관계", scores: { avoidant: 2, balanced: 1 } },
      { text: "내 헌신을 알아주고 감사해했으면", scores: { caretaker: 3 } },
      { text: "성장하는 관계, 완벽한 파트너", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 6,
    question: "과거 연애 실패의 가장 큰 원인은?",
    options: [
      { text: "너무 집착하거나 불안해했음", scores: { anxious: 3, intense: 1 } },
      { text: "감정 표현이 부족했음", scores: { avoidant: 3 } },
      { text: "나만 너무 퍼줬음", scores: { caretaker: 3 } },
      { text: "이상이 너무 높았거나 맞지 않았음", scores: { perfectionist: 2, avoidant: 1 } },
    ],
  },
  {
    id: 7,
    question: "연애할 때 나의 연락 스타일은?",
    options: [
      { text: "자주 연락하고 싶고, 답장 빠르면 좋음", scores: { anxious: 2, intense: 1 } },
      { text: "연락 너무 많으면 부담스러움", scores: { avoidant: 3 } },
      { text: "상대가 원하는 만큼 맞춰줌", scores: { caretaker: 2, balanced: 1 } },
      { text: "적당히 규칙적으로", scores: { perfectionist: 1, balanced: 2 } },
    ],
  },
  {
    id: 8,
    question: "연인과의 관계에서 나는?",
    options: [
      { text: "상대의 사랑 확인이 필요해", scores: { anxious: 3 } },
      { text: "혼자만의 시간도 꼭 필요해", scores: { avoidant: 3 } },
      { text: "상대를 위해 희생하는 편", scores: { caretaker: 3 } },
      { text: "더 나은 관계를 위해 노력해", scores: { perfectionist: 2, balanced: 1 } },
    ],
  },
  {
    id: 9,
    question: "이상형을 고를 때 기준은?",
    options: [
      { text: "나를 진짜 사랑해줄 사람", scores: { anxious: 2, caretaker: 1 } },
      { text: "간섭 안 하고 편한 사람", scores: { avoidant: 3 } },
      { text: "내가 도와줄 수 있는 사람", scores: { caretaker: 3 } },
      { text: "조건과 성격이 잘 맞는 사람", scores: { perfectionist: 2, balanced: 1 } },
    ],
  },
  {
    id: 10,
    question: "연애 중 행복할 때는?",
    options: [
      { text: "상대가 나를 사랑한다고 확신할 때", scores: { anxious: 3 } },
      { text: "편하게 각자 잘 지낼 때", scores: { avoidant: 2, balanced: 1 } },
      { text: "상대가 기뻐하는 모습 볼 때", scores: { caretaker: 3 } },
      { text: "관계가 이상적으로 진행될 때", scores: { perfectionist: 2, intense: 1 } },
    ],
  },
  {
    id: 11,
    question: "연애하면서 가장 힘든 점은?",
    options: [
      { text: "불안하고 확인받고 싶은 마음", scores: { anxious: 3 } },
      { text: "감정 표현하고 가까워지는 것", scores: { avoidant: 3 } },
      { text: "내 욕구보다 상대 먼저 챙기는 것", scores: { caretaker: 3 } },
      { text: "기대에 미치지 못할 때", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 12,
    question: "솔직히, 연애에서 반복되는 패턴이 있다면?",
    options: [
      { text: "매번 너무 빠져들었다 상처받음", scores: { anxious: 2, intense: 2 } },
      { text: "어느 순간 도망가고 싶어짐", scores: { avoidant: 3 } },
      { text: "항상 더 많이 주는 쪽이 됨", scores: { caretaker: 3 } },
      { text: "이상과 현실의 괴리로 실망함", scores: { perfectionist: 3 } },
    ],
  },
];

export const results: Record<DatingPatternType, DatingPatternResult> = {
  anxious: {
    type: 'anxious',
    title: '불안형 연애 패턴',
    emoji: '😰',
    subtitle: '사랑의 확인이 필요한 당신',
    description: '연애할 때 상대의 사랑을 계속 확인받고 싶어하는 패턴이에요. 작은 변화에도 불안해하고, 버림받을까 봐 두려워서 과하게 매달리거나 확인하게 돼요.',
    patternExplanation: '어린 시절 안정적인 애정을 못 받았거나, 과거 연애에서 상처받은 경험이 원인일 수 있어요.',
    characteristics: [
      '연락 늦으면 불안함',
      '사랑 확인이 자주 필요',
      '버림받을까 봐 두려움',
      '연애에 올인하는 편',
    ],
    inRelationship: [
      '상대의 사소한 변화에 예민함',
      '확인 연락이 잦음',
      '질투나 의심이 생기기 쉬움',
      '이별 얘기에 과민반응',
    ],
    breakupPattern: '매달리거나, 이별 후 오래 힘들어함',
    rootCause: '자존감 부족, 애정 결핍의 경험',
    growthTips: [
      '자기 자신을 먼저 사랑하는 연습',
      '혼자 있는 시간 견디는 연습',
      '상대에게 모든 걸 기대지 않기',
      '불안할 때 행동 전에 생각하기',
      '필요하면 전문 상담 받아보기',
    ],
    idealPartner: '안정적이고 일관된 애정표현을 하는 사람',
    warningForSelf: '너무 매달리면 상대가 지칠 수 있어요',
    encouragement: '당신은 사랑받을 자격이 있어요. 스스로를 먼저 사랑해주세요.',
  },
  avoidant: {
    type: 'avoidant',
    title: '회피형 연애 패턴',
    emoji: '🚶',
    subtitle: '가까워지면 도망가고 싶은 당신',
    description: '친밀해지는 게 불편하고, 어느 정도 가까워지면 거리를 두고 싶어지는 패턴이에요. 감정 표현이 어렵고, 혼자만의 시간과 공간이 꼭 필요해요.',
    patternExplanation: '독립적으로 자란 경험이나, 가까운 관계에서 상처받아 스스로를 보호하려는 방어기제예요.',
    characteristics: [
      '감정 표현이 어려움',
      '혼자 시간 필요함',
      '너무 가까워지면 부담',
      '감정적 거리 유지',
    ],
    inRelationship: [
      '밀당처럼 보일 수 있음',
      '깊은 대화 피하는 경향',
      '위기 시 거리 두기',
      '상대가 답답해할 수 있음',
    ],
    breakupPattern: '어느 순간 갑자기 멀어지거나 떠남',
    rootCause: '친밀감에 대한 두려움, 상처받기 싫은 마음',
    growthTips: [
      '조금씩 감정 표현 연습하기',
      '친밀해지는 게 위험하지 않다는 것 배우기',
      '상대에게 솔직하게 말하기',
      '작은 것부터 마음 열어보기',
      '회피하고 싶을 때 한 번 더 생각하기',
    ],
    idealPartner: '인내심 있고 기다려줄 수 있는 사람',
    warningForSelf: '계속 회피하면 진정한 사랑을 놓칠 수 있어요',
    encouragement: '사랑받는 건 무섭지 않아요. 천천히 마음을 열어도 괜찮아요.',
  },
  intense: {
    type: 'intense',
    title: '열정형 연애 패턴',
    emoji: '🔥',
    subtitle: '뜨겁게 사랑하는 당신',
    description: '연애하면 모든 걸 쏟아붓는 열정적인 패턴이에요. 빠르게 빠져들고, 강렬하게 사랑하지만, 그만큼 감정 기복도 크고 지치기 쉬워요.',
    patternExplanation: '자극과 열정을 사랑의 증거로 생각하고, 평온함을 지루함으로 느낄 수 있어요.',
    characteristics: [
      '빠르게 빠져듦',
      '열정적 사랑',
      '감정 기복 있음',
      '올인하는 스타일',
    ],
    inRelationship: [
      '초반 매우 뜨거움',
      '시간 지나면 식을 수 있음',
      '자극이 필요함',
      '밀당이나 갈등도 사랑처럼 느낌',
    ],
    breakupPattern: '격렬하게 사랑하다 갑자기 식거나 폭발',
    rootCause: '안정보다 자극을 원하는 성향',
    growthTips: [
      '천천히 알아가는 연습하기',
      '평온함도 사랑임을 인식하기',
      '감정에만 의존하지 않기',
      '장기적 관점 갖기',
      '감정 조절 연습하기',
    ],
    idealPartner: '열정을 받아주면서도 안정감 주는 사람',
    warningForSelf: '너무 뜨거우면 빨리 타버릴 수 있어요',
    encouragement: '열정도 좋지만, 오래 타는 사랑도 아름다워요.',
  },
  caretaker: {
    type: 'caretaker',
    title: '헌신형 연애 패턴',
    emoji: '🤲',
    subtitle: '주는 사랑이 익숙한 당신',
    description: '연애에서 항상 더 많이 주고 챙기는 패턴이에요. 상대를 위해 희생하는 게 익숙하고, 정작 내 욕구는 뒤로 미루게 돼요.',
    patternExplanation: '사랑받으려면 뭔가를 해줘야 한다고 무의식적으로 생각해요.',
    characteristics: [
      '헌신적임',
      '상대 위주',
      '내 욕구 후순위',
      '거절 잘 못함',
    ],
    inRelationship: [
      '상대를 과하게 챙김',
      '희생이 당연해짐',
      '상대가 당연하게 여길 수 있음',
      '나중에 서운함 폭발',
    ],
    breakupPattern: '너무 퍼주다 지치거나, 이용당한 느낌에 상처',
    rootCause: '인정받고 싶은 욕구, 자존감 문제',
    growthTips: [
      '내 욕구도 중요하다는 걸 인식하기',
      '거절하는 연습하기',
      '받는 것도 연습하기',
      '나를 위한 시간 갖기',
      '상대에게 표현하기',
    ],
    idealPartner: '내 헌신을 알아주고 함께 주고받는 사람',
    warningForSelf: '일방적으로 주기만 하면 지쳐요',
    encouragement: '당신도 받을 자격이 있어요. 사랑은 주고받는 거예요.',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '이상주의형 연애 패턴',
    emoji: '👑',
    subtitle: '완벽한 사랑을 꿈꾸는 당신',
    description: '연애에 대한 이상이 높고, 완벽한 관계를 추구하는 패턴이에요. 기대에 미치지 못하면 실망하고, 현실과 이상의 괴리에 힘들어해요.',
    patternExplanation: '드라마나 영화 같은 사랑을 꿈꾸거나, 실패하기 싫은 마음이 커요.',
    characteristics: [
      '높은 기대치',
      '완벽 추구',
      '현실에 실망 쉬움',
      '비교하는 경향',
    ],
    inRelationship: [
      '상대에게 많은 걸 기대',
      '실망하면 비판적',
      '이상과 다르면 의문',
      '완벽해지려 노력',
    ],
    breakupPattern: '기대에 못 미쳐서 실망하거나, 더 좋은 사람 있을 것 같아서',
    rootCause: '높은 기준, 실패에 대한 두려움',
    growthTips: [
      '완벽한 사람/관계는 없다는 것 인정하기',
      '기대치 현실적으로 조정하기',
      '장점에 집중하기',
      '불완전함도 사랑하기',
      '과정을 즐기기',
    ],
    idealPartner: '성장 가능성 있고 함께 발전하는 사람',
    warningForSelf: '너무 높은 기준은 혼자 남게 할 수 있어요',
    encouragement: '완벽하지 않아도 행복한 사랑이 있어요.',
  },
  balanced: {
    type: 'balanced',
    title: '균형형 연애 패턴',
    emoji: '⚖️',
    subtitle: '건강하게 사랑하는 당신',
    description: '축하해요! 비교적 건강한 연애 패턴을 가지고 있어요. 자기 자신도 챙기면서 상대와 균형 잡힌 관계를 만들어가요.',
    patternExplanation: '안정적인 자존감과 건강한 관계 경험이 있어요.',
    characteristics: [
      '균형 잡힌 관계',
      '건강한 의사소통',
      '자기 관리 가능',
      '안정적 애착',
    ],
    inRelationship: [
      '서로 존중하며 지냄',
      '갈등도 건강하게 해결',
      '적당한 거리와 친밀감 유지',
      '서로 성장하는 관계',
    ],
    breakupPattern: '맞지 않으면 정리하고 회복함',
    rootCause: '안정적인 자존감과 건강한 경험',
    growthTips: [
      '지금처럼 유지하세요!',
      '좋은 관계 패턴 계속 발전시키기',
      '파트너 선택에 신중하기',
      '가끔 자기 점검하기',
    ],
    idealPartner: '비슷하게 건강한 연애관을 가진 사람',
    warningForSelf: '자만하지 말고 계속 노력하세요',
    encouragement: '건강한 연애 패턴을 가졌어요! 좋은 인연 만나세요!',
  },
};

export function calculateResult(answers: number[]): DatingPatternResult {
  const scores: Record<string, number> = {
    anxious: 0,
    avoidant: 0,
    intense: 0,
    caretaker: 0,
    perfectionist: 0,
    balanced: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const selectedOption = question.options[answerIndex];
    
    Object.entries(selectedOption.scores).forEach(([type, score]) => {
      scores[type] += score;
    });
  });

  // Find the type with highest score
  let maxType: DatingPatternType = 'balanced';
  let maxScore = 0;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type as DatingPatternType;
    }
  });

  // If balanced has a good score and no other type is dominant, return balanced
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  if (scores.balanced >= totalScore * 0.25 && maxScore < totalScore * 0.35) {
    return results.balanced;
  }

  return results[maxType];
}
