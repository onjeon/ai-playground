// 이별 원인 분석 테스트 - 왜 헤어지게 됐을까?

export interface BreakupReasonQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface BreakupReasonResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  coreIssue: string;
  warningSignals: string[];
  yourPattern: string[];
  partnerPattern: string[];
  lessonLearned: string;
  healingAdvice: string[];
  nextRelationshipTip: string[];
  encouragement: string;
}

export const breakupReasonTypes = ['communication', 'trust', 'values', 'timing', 'affection', 'growth'] as const;
export type BreakupReasonType = typeof breakupReasonTypes[number];

export const questions: BreakupReasonQuestion[] = [
  {
    id: 1,
    question: "연애할 때 가장 힘들었던 점은?",
    options: [
      { text: "말이 안 통하고 대화가 어려웠음", scores: { communication: 3 } },
      { text: "의심과 불안이 계속됐음", scores: { trust: 3 } },
      { text: "가치관이나 생각이 너무 달랐음", scores: { values: 3 } },
      { text: "타이밍이 안 맞았음 (바쁨, 거리 등)", scores: { timing: 3 } },
    ],
  },
  {
    id: 2,
    question: "싸울 때 주로 어떤 패턴이었어?",
    options: [
      { text: "서로 말하는데 전혀 이해를 못 함", scores: { communication: 3 } },
      { text: "숨기거나 거짓말한 게 문제가 됨", scores: { trust: 3 } },
      { text: "서로 양보 못 하는 주제가 있었음", scores: { values: 2, communication: 1 } },
      { text: "만날 시간이 없어서 감정이 쌓임", scores: { timing: 2, affection: 1 } },
    ],
  },
  {
    id: 3,
    question: "상대방에게 가장 서운했던 것은?",
    options: [
      { text: "내 말을 듣지 않고 무시하는 느낌", scores: { communication: 2, affection: 1 } },
      { text: "믿을 수 없는 행동들", scores: { trust: 3 } },
      { text: "나를 바꾸려고 하거나 인정 안 함", scores: { values: 2, growth: 1 } },
      { text: "시간을 안 내주고 우선순위에서 밀림", scores: { timing: 2, affection: 1 } },
    ],
  },
  {
    id: 4,
    question: "연애 중 가장 외로웠던 순간은?",
    options: [
      { text: "내 감정을 말해도 전달이 안 될 때", scores: { communication: 3 } },
      { text: "상대를 믿지 못하는 나를 발견했을 때", scores: { trust: 3 } },
      { text: "근본적으로 맞지 않는다고 느꼈을 때", scores: { values: 3 } },
      { text: "함께 있어도 각자 바쁠 때", scores: { timing: 2, affection: 1 } },
    ],
  },
  {
    id: 5,
    question: "주변에서 우리 관계를 보고 뭐라고 했어?",
    options: [
      { text: "둘이 대화가 안 되는 것 같다", scores: { communication: 3 } },
      { text: "서로 못 믿는 거 아니야?", scores: { trust: 3 } },
      { text: "생각이 너무 다른 것 같다", scores: { values: 3 } },
      { text: "만날 시간은 있어?", scores: { timing: 3 } },
    ],
  },
  {
    id: 6,
    question: "이별 직전 가장 많이 한 말은?",
    options: [
      { text: "네가 뭘 원하는지 모르겠어", scores: { communication: 3 } },
      { text: "이제 못 믿겠어 / 왜 그랬어", scores: { trust: 3 } },
      { text: "우린 너무 달라 / 맞지 않아", scores: { values: 3 } },
      { text: "난 네 우선순위가 아닌 것 같아", scores: { timing: 2, affection: 1 } },
    ],
  },
  {
    id: 7,
    question: "상대의 애정 표현은 어땠어?",
    options: [
      { text: "표현은 하는데 내가 원하는 방식이 아님", scores: { communication: 2, affection: 1 } },
      { text: "말과 행동이 달라서 헷갈림", scores: { trust: 3 } },
      { text: "애정보다 자기 생각이 우선인 느낌", scores: { values: 2, affection: 1 } },
      { text: "바빠서 애정 표현할 여유가 없었음", scores: { timing: 2, affection: 1 } },
    ],
  },
  {
    id: 8,
    question: "관계에서 가장 답답했던 건?",
    options: [
      { text: "아무리 말해도 변하지 않는 것", scores: { communication: 2, growth: 1 } },
      { text: "한번 깨진 신뢰가 회복이 안 됨", scores: { trust: 3 } },
      { text: "핵심적인 부분에서 양보가 안 됨", scores: { values: 3 } },
      { text: "물리적 시간이 너무 부족함", scores: { timing: 3 } },
    ],
  },
  {
    id: 9,
    question: "이별을 생각했을 때 어떤 감정이 컸어?",
    options: [
      { text: "지침, 대화해도 소용없다는 무력감", scores: { communication: 3 } },
      { text: "배신감, 실망감", scores: { trust: 3 } },
      { text: "이건 아니다, 맞지 않는다는 확신", scores: { values: 3 } },
      { text: "아쉬움, 상황이 달랐다면...", scores: { timing: 2, growth: 1 } },
    ],
  },
  {
    id: 10,
    question: "관계를 유지하려고 어떤 노력을 했어?",
    options: [
      { text: "대화하려고 많이 노력함, 하지만 벽이 있었음", scores: { communication: 3 } },
      { text: "믿으려고 노력함, 하지만 불안이 계속됨", scores: { trust: 3 } },
      { text: "맞추려고 했지만 본질이 안 바뀜", scores: { values: 3 } },
      { text: "시간 내려고 했지만 현실적 한계", scores: { timing: 3 } },
    ],
  },
  {
    id: 11,
    question: "돌이켜보면 우리 관계의 가장 큰 문제는?",
    options: [
      { text: "소통 부재, 대화 방식의 차이", scores: { communication: 3 } },
      { text: "신뢰의 금이 갔던 것", scores: { trust: 3 } },
      { text: "인생관, 가치관의 차이", scores: { values: 3 } },
      { text: "상황과 타이밍이 안 맞았음", scores: { timing: 3 } },
    ],
  },
  {
    id: 12,
    question: "만약 다시 만난다면 어떨 것 같아?",
    options: [
      { text: "소통 방법을 바꾸면 가능할 수도", scores: { communication: 3 } },
      { text: "신뢰가 회복되면... 근데 어려울 듯", scores: { trust: 3 } },
      { text: "근본적인 게 안 맞아서 힘들 듯", scores: { values: 3 } },
      { text: "상황이 바뀌면 될 것 같기도", scores: { timing: 3 } },
    ],
  },
];

export const results: Record<BreakupReasonType, BreakupReasonResult> = {
  communication: {
    type: 'communication',
    title: '소통 단절형 이별',
    emoji: '🔇',
    subtitle: '말이 안 통했어',
    description: '서로 다른 언어를 쓰는 것처럼 대화가 어려웠던 관계였어요. 같은 말을 해도 다르게 받아들이고, 감정 전달이 제대로 되지 않았죠. 소통의 벽은 서서히 관계를 멀어지게 만들어요.',
    coreIssue: '대화 방식과 감정 표현의 불일치',
    warningSignals: [
      '같은 얘기를 반복하게 됨',
      '말해도 소용없다는 무력감',
      '상대가 내 말을 곡해함',
      '중요한 대화를 피하게 됨',
    ],
    yourPattern: [
      '감정을 말로 표현하는 게 어려웠을 수 있음',
      '상대의 표현 방식을 이해하려 노력했지만 한계',
      '답답해서 포기하게 됨',
    ],
    partnerPattern: [
      '자기 방식으로만 이해하려 함',
      '당신의 감정보다 자기 논리가 우선',
      '대화보다 결론을 원했을 수 있음',
    ],
    lessonLearned: '사랑도 중요하지만, 소통 방식이 맞는 사람을 만나는 게 정말 중요해요.',
    healingAdvice: [
      '내 감정 표현 방식에 대해 돌아보기',
      '다음엔 대화 스타일이 맞는지 초반에 확인하기',
      '억울했던 감정 글로 써서 정리하기',
    ],
    nextRelationshipTip: [
      '초반에 사소한 갈등으로 소통 테스트하기',
      '감정 표현 방식이 비슷한 사람 찾기',
      '말하기 전에 정리하는 습관 들이기',
      '상대의 대화 스타일 존중하기',
    ],
    encouragement: '소통이 안 되는 관계는 정말 지치죠. 당신 잘못이 아니에요. 맞는 사람과는 대화가 술술 풀릴 거예요.',
  },
  trust: {
    type: 'trust',
    title: '신뢰 상실형 이별',
    emoji: '💔',
    subtitle: '믿음이 깨졌어',
    description: '한번 금이 간 신뢰는 회복하기 정말 어려워요. 거짓말, 숨김, 배신... 무엇이 됐든 믿음이 깨지면 함께 있어도 불안하고, 의심이 사랑을 갉아먹죠.',
    coreIssue: '신뢰의 붕괴와 지속적인 불안',
    warningSignals: [
      '작은 것도 의심하게 됨',
      '핸드폰이나 SNS를 확인하고 싶은 충동',
      '상대의 말을 곧이곧대로 못 믿음',
      '불안해서 잠을 못 잠',
    ],
    yourPattern: [
      '한번 깨진 신뢰를 회복하려 노력함',
      '믿고 싶지만 불안이 계속됨',
      '의심하는 자신이 싫었을 수 있음',
    ],
    partnerPattern: [
      '신뢰를 저버리는 행동을 함',
      '진심 어린 사과나 변화가 부족',
      '당신의 불안을 이해하지 못함',
    ],
    lessonLearned: '신뢰는 관계의 기초. 기초가 흔들리면 아무것도 쌓을 수 없어요.',
    healingAdvice: [
      '모든 사람이 그런 건 아니라는 걸 기억하기',
      '트라우마가 있다면 전문 상담 고려하기',
      '자존감 회복에 집중하기',
    ],
    nextRelationshipTip: [
      '과거 일로 새 사람을 의심하지 않기',
      '불안하면 대화로 풀기',
      '상대의 행동이 아닌 패턴을 보기',
      '건강한 신뢰를 쌓는 연습하기',
    ],
    encouragement: '배신은 정말 아파요. 하지만 이건 상대의 문제였어요. 당신은 다시 믿을 수 있는 사람을 만날 자격이 있어요.',
  },
  values: {
    type: 'values',
    title: '가치관 충돌형 이별',
    emoji: '⚖️',
    subtitle: '우린 너무 달랐어',
    description: '사랑만으로는 넘지 못하는 벽이 있어요. 결혼관, 돈, 가족, 미래 계획... 핵심 가치관이 다르면 사랑해도 함께할 수 없는 현실에 부딪히게 되죠.',
    coreIssue: '핵심 가치관과 인생관의 차이',
    warningSignals: [
      '미래 얘기만 하면 싸움',
      '서로 양보 못 하는 주제가 있음',
      '근본적으로 맞지 않는다는 생각',
      '상대를 바꾸고 싶은 마음',
    ],
    yourPattern: [
      '맞추려고 노력했지만 본질이 안 바뀜',
      '내 가치관을 양보해야 하나 고민함',
      '맞지 않는 걸 알면서도 버텼을 수 있음',
    ],
    partnerPattern: [
      '자기 가치관이 확고함',
      '당신의 생각을 존중하기보다 바꾸려 함',
      '타협점을 찾으려는 노력 부족',
    ],
    lessonLearned: '사랑과 호환성은 다른 문제예요. 둘 다 있어야 오래 갈 수 있어요.',
    healingAdvice: [
      '나의 핵심 가치관이 뭔지 명확히 하기',
      '양보할 수 있는 것/없는 것 구분하기',
      '맞지 않는 건 누구 잘못도 아니라는 것 인정하기',
    ],
    nextRelationshipTip: [
      '초반에 가치관 대화 충분히 나누기',
      '결혼관, 돈, 가족에 대한 생각 확인하기',
      '다르더라도 존중할 수 있는 사람인지 보기',
      '너무 다르면 빨리 결단하기',
    ],
    encouragement: '맞지 않는 걸 인정하는 건 용기 있는 선택이에요. 당신과 맞는 사람은 반드시 있어요.',
  },
  timing: {
    type: 'timing',
    title: '타이밍 불일치형 이별',
    emoji: '⏰',
    subtitle: '때가 아니었어',
    description: '사랑했지만 타이밍이 맞지 않았어요. 바쁜 일상, 물리적 거리, 다른 우선순위... 좋은 사람이었지만 지금 이 시기에는 함께할 수 없었던 거예요.',
    coreIssue: '시간과 상황의 불일치',
    warningSignals: [
      '만날 시간을 내기 어려움',
      '연애가 짐처럼 느껴짐',
      '각자 바쁘고 지쳐감',
      '미래보다 현재가 급함',
    ],
    yourPattern: [
      '상대를 이해하려고 기다림',
      '내 우선순위를 뒤로 미룸',
      '상황이 나아지길 기대함',
    ],
    partnerPattern: [
      '연애보다 다른 것이 우선이었음',
      '시간을 내려는 노력이 부족했을 수 있음',
      '당신을 당연하게 여겼을 수도',
    ],
    lessonLearned: '좋은 사람도 맞는 타이밍이 아니면 함께하기 어려워요.',
    healingAdvice: [
      '상대 탓도 내 탓도 아닌 상황이었음을 인정하기',
      '아쉬움은 자연스러운 거예요',
      '인연이면 다시 만날 수도 있어요',
    ],
    nextRelationshipTip: [
      '서로 여유가 있는 시기에 시작하기',
      '연애에 쏟을 에너지가 있는지 확인하기',
      '상대의 현재 상황도 고려하기',
      '기다림에도 한계가 있다는 걸 알기',
    ],
    encouragement: '타이밍이 안 맞았을 뿐, 당신이 부족해서가 아니에요. 맞는 때에 맞는 사람을 만날 거예요.',
  },
  affection: {
    type: 'affection',
    title: '애정 결핍형 이별',
    emoji: '🥀',
    subtitle: '사랑받지 못했어',
    description: '관계에서 충분한 사랑과 관심을 받지 못했어요. 노력은 내가 더 많이 하고, 상대는 당연하게 받기만 했죠. 일방적인 사랑은 지치게 만들어요.',
    coreIssue: '애정 표현과 관심의 불균형',
    warningSignals: [
      '내가 더 노력하는 느낌',
      '상대의 관심이 점점 줄어듦',
      '사랑받고 있다는 확신이 없음',
      '외로운 연애',
    ],
    yourPattern: [
      '상대에게 맞추려고 많이 노력함',
      '사랑받고 싶은 마음이 컸음',
      '부족한 관심을 이해하려 함',
    ],
    partnerPattern: [
      '애정 표현에 인색했음',
      '당신의 노력을 당연하게 여김',
      '관계에 투자하는 에너지가 적었음',
    ],
    lessonLearned: '사랑은 주고받는 거예요. 일방적인 관계는 오래 갈 수 없어요.',
    healingAdvice: [
      '나도 사랑받을 자격이 있다는 걸 기억하기',
      '혼자서도 나를 충분히 사랑하기',
      '다음엔 주는 만큼 받는 관계 찾기',
    ],
    nextRelationshipTip: [
      '상대의 애정 표현 방식 확인하기',
      '받기만 하는 사람은 피하기',
      '내 기준을 낮추지 않기',
      '균형 잡힌 관계인지 점검하기',
    ],
    encouragement: '당신은 충분히 사랑받을 자격이 있어요. 다음엔 당신을 소중히 여기는 사람을 만날 거예요.',
  },
  growth: {
    type: 'growth',
    title: '성장 방향형 이별',
    emoji: '🌿',
    subtitle: '함께 자랄 수 없었어',
    description: '서로 다른 방향으로 성장하고 있었어요. 처음엔 맞았지만, 시간이 지나며 달라졌거나, 한쪽만 변하고 한쪽은 그대로였죠. 함께 성장할 수 없는 관계는 멀어지게 돼요.',
    coreIssue: '성장 속도와 방향의 불일치',
    warningSignals: [
      '예전 같지 않다는 느낌',
      '대화 주제가 점점 달라짐',
      '서로의 꿈을 응원하기 어려움',
      '함께하는 미래가 그려지지 않음',
    ],
    yourPattern: [
      '관계 안에서 성장하고 싶었음',
      '상대도 함께 변하길 바랐음',
      '발전 없는 관계에 답답함을 느낌',
    ],
    partnerPattern: [
      '변화를 원하지 않았을 수 있음',
      '당신의 성장을 위협으로 느꼈을 수도',
      '다른 방향의 삶을 원했음',
    ],
    lessonLearned: '좋은 관계는 서로를 성장하게 해요. 발목 잡는 관계는 아니었는지 돌아보세요.',
    healingAdvice: [
      '혼자서도 계속 성장하기',
      '관계가 끝나도 배운 게 있다는 걸 기억하기',
      '더 나은 내가 되어 다음 인연 만나기',
    ],
    nextRelationshipTip: [
      '서로 성장을 응원할 수 있는 사람 찾기',
      '비슷한 발전 의지가 있는지 확인하기',
      '함께 꿈꾸는 미래가 있는지 보기',
      '변화에 열린 사람인지 파악하기',
    ],
    encouragement: '함께 자랄 수 없는 관계에서 벗어난 건 좋은 선택이에요. 당신은 계속 성장할 거예요.',
  },
};

export function calculateResult(answers: number[]): BreakupReasonResult {
  const scores: Record<BreakupReasonType, number> = {
    communication: 0,
    trust: 0,
    values: 0,
    timing: 0,
    affection: 0,
    growth: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as BreakupReasonType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: BreakupReasonType = 'communication';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as BreakupReasonType;
    }
  });

  return results[resultType];
}
