// 본성 테스트 - 가면 뒤에 숨겨진 진짜 나는?

export interface TrueNatureQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface TrueNatureResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  hiddenSelf: string;
  publicMask: string;
  characteristics: string[];
  triggers: string[];
  darkSide: string[];
  strengths: string[];
  acceptanceTips: string[];
  warning: string;
  affirmation: string;
}

export const trueNatureTypes = ['rebel', 'controller', 'avoider', 'pleaser', 'perfectionist', 'survivor'] as const;
export type TrueNatureType = typeof trueNatureTypes[number];

export const questions: TrueNatureQuestion[] = [
  {
    id: 1,
    question: "정말 화났을 때 속으로 하는 생각은?",
    options: [
      { text: "다 부숴버리고 싶어", scores: { rebel: 3 } },
      { text: "내가 통제권을 잡아야 해", scores: { controller: 3 } },
      { text: "그냥 사라져버리고 싶어", scores: { avoider: 3 } },
      { text: "나만 참으면 되잖아", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 2,
    question: "가장 숨기고 싶은 나의 모습은?",
    options: [
      { text: "규칙 무시하고 싶은 충동", scores: { rebel: 3 } },
      { text: "사람들을 조종하고 싶은 욕구", scores: { controller: 3 } },
      { text: "책임에서 도망치고 싶은 마음", scores: { avoider: 3 } },
      { text: "인정받고 싶어 안달하는 모습", scores: { pleaser: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 3,
    question: "스트레스 극한 상황에서 나는?",
    options: [
      { text: "폭발하거나 반항적으로 변함", scores: { rebel: 3 } },
      { text: "더 빡빡하게 통제하려 함", scores: { controller: 2, perfectionist: 1 } },
      { text: "아무것도 안 하고 회피함", scores: { avoider: 3 } },
      { text: "억지로 괜찮은 척 함", scores: { pleaser: 2, survivor: 1 } },
    ],
  },
  {
    id: 4,
    question: "아무도 안 볼 때 하고 싶은 행동은?",
    options: [
      { text: "금지된 것, 일탈", scores: { rebel: 3 } },
      { text: "모든 것을 내 방식대로 정리", scores: { controller: 2, perfectionist: 1 } },
      { text: "아무 것도 안 하고 숨기", scores: { avoider: 3 } },
      { text: "남 신경 안 쓰고 내 맘대로", scores: { pleaser: 2, rebel: 1 } },
    ],
  },
  {
    id: 5,
    question: "인정받지 못했을 때 진짜 감정은?",
    options: [
      { text: "분노, 복수심", scores: { rebel: 3 } },
      { text: "좌절, 더 열심히 하려는 강박", scores: { perfectionist: 3 } },
      { text: "포기, 무기력", scores: { avoider: 3 } },
      { text: "상처, 더 잘 보이려 노력", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 6,
    question: "가장 인정하기 싫은 약점은?",
    options: [
      { text: "충동적이고 파괴적인 면", scores: { rebel: 3 } },
      { text: "통제와 완벽에 대한 집착", scores: { controller: 2, perfectionist: 1 } },
      { text: "무책임하고 회피하는 면", scores: { avoider: 3 } },
      { text: "눈치 보고 맞추려는 면", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 7,
    question: "어린 시절 가장 듣기 싫었던 말은?",
    options: [
      { text: "말 좀 들어, 왜 이렇게 반항하니", scores: { rebel: 3 } },
      { text: "그게 뭐 대수라고, 좀 내려놔", scores: { controller: 2, perfectionist: 1 } },
      { text: "책임감 좀 가져, 도망가지 마", scores: { avoider: 3 } },
      { text: "왜 남 눈치만 봐", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 8,
    question: "관계에서 반복되는 패턴은?",
    options: [
      { text: "갈등 후 폭발/단절", scores: { rebel: 3 } },
      { text: "내가 주도권 잡으려 함", scores: { controller: 3 } },
      { text: "문제 생기면 피함/연락 끊음", scores: { avoider: 3 } },
      { text: "맞추다 지쳐서 터짐", scores: { pleaser: 2, survivor: 1 } },
    ],
  },
  {
    id: 9,
    question: "아무도 모르는 나만의 비밀 욕구는?",
    options: [
      { text: "모든 제약을 부수고 싶어", scores: { rebel: 3 } },
      { text: "모든 것을 완벽하게 통제하고 싶어", scores: { controller: 2, perfectionist: 1 } },
      { text: "아무 책임 없이 사라지고 싶어", scores: { avoider: 3 } },
      { text: "한 번쯤 나만 생각하고 살고 싶어", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 10,
    question: "실패했을 때 진짜 반응은?",
    options: [
      { text: "남 탓, 세상 탓하며 화냄", scores: { rebel: 3 } },
      { text: "자책하고 더 완벽해지려 함", scores: { perfectionist: 3 } },
      { text: "모른 척, 없었던 일처럼", scores: { avoider: 3 } },
      { text: "남들이 어떻게 볼지 걱정", scores: { pleaser: 2, survivor: 1 } },
    ],
  },
  {
    id: 11,
    question: "내가 참는 것 중 가장 힘든 것은?",
    options: [
      { text: "불합리한 규칙과 권위", scores: { rebel: 3 } },
      { text: "내 뜻대로 안 되는 상황", scores: { controller: 3 } },
      { text: "감당해야 할 책임과 압박", scores: { avoider: 3 } },
      { text: "나를 싫어하는 사람", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 12,
    question: "가끔 상상하는 극단적인 시나리오는?",
    options: [
      { text: "모든 걸 불태우고 새로 시작", scores: { rebel: 2, survivor: 1 } },
      { text: "모든 것이 완벽하게 정리된 세상", scores: { controller: 2, perfectionist: 1 } },
      { text: "아무도 나를 모르는 곳에서 혼자", scores: { avoider: 3 } },
      { text: "모두가 나를 좋아하는 세상", scores: { pleaser: 3 } },
    ],
  },
];

export const results: Record<TrueNatureType, TrueNatureResult> = {
  rebel: {
    type: 'rebel',
    title: '숨겨진 반항아',
    emoji: '🔥',
    subtitle: '규칙? 깨라고 있는 거지',
    description: '겉으로는 적당히 순응하지만, 당신의 내면에는 반항아가 살고 있어요. 불합리한 규칙, 억압적인 권위에 대한 분노가 있고, 때로는 모든 것을 부숴버리고 싶은 충동을 느끼죠.',
    hiddenSelf: '분노하고 반항하고 싶은 나',
    publicMask: '적당히 맞추는 순한 사람',
    characteristics: ['내면의 분노', '권위에 대한 반감', '규칙 파괴 충동', '자유 갈망'],
    triggers: ['통제당할 때', '불합리한 요구', '무시당할 때', '억압적 상황'],
    darkSide: ['폭발적 분노', '파괴적 충동', '극단적 반응', '관계 단절'],
    strengths: ['용기', '불의에 대한 저항', '변화 추구', '진정성'],
    acceptanceTips: [
      '분노는 나쁜 감정이 아니에요, 표현 방법을 찾으세요',
      '건강한 방식으로 반항 욕구를 해소하세요',
      '당신의 저항 정신은 세상을 바꿀 힘이에요',
      '파괴가 아닌 창조적 반항을 시도해보세요',
    ],
    warning: '분노를 계속 억누르면 더 큰 폭발로 돌아와요',
    affirmation: '나의 분노는 불의에 대한 건강한 반응이에요',
  },
  controller: {
    type: 'controller',
    title: '숨겨진 통제자',
    emoji: '👁️',
    subtitle: '모든 건 내 계획대로',
    description: '겉으로는 유연해 보이지만, 당신의 내면에는 모든 것을 통제하고 싶은 욕구가 있어요. 예측 불가능한 상황을 불안해하고, 무의식적으로 사람과 상황을 조종하려 해요.',
    hiddenSelf: '통제하고 조종하고 싶은 나',
    publicMask: '유연하고 여유로운 사람',
    characteristics: ['통제 욕구', '완벽주의 경향', '계획 집착', '조종 욕구'],
    triggers: ['예상 밖 상황', '통제력 상실', '계획 어긋남', '무력함'],
    darkSide: ['강박적 통제', '타인 조종', '유연성 부족', '관계에서 지배적'],
    strengths: ['리더십', '계획 능력', '책임감', '위기 관리'],
    acceptanceTips: [
      '통제할 수 없는 것을 받아들이는 연습을 하세요',
      '완벽하지 않아도 괜찮다는 것을 기억하세요',
      '타인에게 주도권을 주는 경험을 해보세요',
      '불확실함 속에서도 안전할 수 있어요',
    ],
    warning: '모든 것을 통제하려 하면 오히려 잃는 게 많아요',
    affirmation: '나는 통제를 내려놓아도 안전해요',
  },
  avoider: {
    type: 'avoider',
    title: '숨겨진 회피자',
    emoji: '🚪',
    subtitle: '그냥 사라지고 싶어',
    description: '겉으로는 잘 대처하는 것 같지만, 당신의 내면에는 모든 것에서 도망치고 싶은 욕구가 있어요. 책임, 갈등, 복잡한 감정에서 벗어나 아무도 모르는 곳으로 사라지고 싶죠.',
    hiddenSelf: '도망치고 회피하고 싶은 나',
    publicMask: '잘 대처하는 어른스러운 사람',
    characteristics: ['회피 성향', '책임 부담', '갈등 기피', '현실 도피'],
    triggers: ['복잡한 문제', '감정적 상황', '책임 요구', '갈등 상황'],
    darkSide: ['무책임', '관계 단절', '현실 외면', '성장 정체'],
    strengths: ['평화 추구', '갈등 조절', '여유', '적응력'],
    acceptanceTips: [
      '회피는 일시적 해결책일 뿐이에요',
      '작은 것부터 직면하는 연습을 하세요',
      '도망치고 싶은 감정도 인정해주세요',
      '모든 걸 한 번에 해결할 필요 없어요',
    ],
    warning: '계속 피하면 문제는 더 커져서 돌아와요',
    affirmation: '나는 어려운 상황도 감당할 수 있는 힘이 있어요',
  },
  pleaser: {
    type: 'pleaser',
    title: '숨겨진 피플플리저',
    emoji: '🎭',
    subtitle: '모두가 날 좋아해야 해',
    description: '겉으로는 자기주장도 하고 당당해 보이지만, 당신의 내면에는 모든 사람에게 인정받고 싶은 욕구가 있어요. 거절당하거나 싫어하는 게 두렵고, 무의식적으로 맞추려 해요.',
    hiddenSelf: '인정받고 싶고 버림받기 싫은 나',
    publicMask: '당당하고 자기 주관 있는 사람',
    characteristics: ['인정 욕구', '거절 공포', '과도한 배려', '자기 희생'],
    triggers: ['거절당했을 때', '비판 받을 때', '싫어하는 사람', '갈등 상황'],
    darkSide: ['자기 상실', '억압된 분노', '관계 피로', '번아웃'],
    strengths: ['공감 능력', '배려심', '사회성', '조화 능력'],
    acceptanceTips: [
      '모든 사람에게 사랑받을 필요 없어요',
      '"No"라고 말하는 연습을 하세요',
      '자기 욕구도 중요하게 여겨주세요',
      '거절해도 관계는 유지될 수 있어요',
    ],
    warning: '계속 맞추다 보면 진짜 나를 잃어버려요',
    affirmation: '나는 있는 그대로도 사랑받을 자격이 있어요',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '숨겨진 완벽주의자',
    emoji: '✨',
    subtitle: '완벽해야만 해, 실수는 용납 못해',
    description: '겉으로는 여유로워 보이지만, 당신의 내면에는 완벽을 향한 강박이 있어요. 실수나 실패를 두려워하고, 자신에게 가혹한 기준을 적용하며 항상 부족함을 느끼죠.',
    hiddenSelf: '완벽해지고 싶고 실패가 두려운 나',
    publicMask: '여유롭고 괜찮은 척하는 사람',
    characteristics: ['완벽 강박', '자기 비판', '높은 기준', '실패 공포'],
    triggers: ['실수했을 때', '비교당할 때', '기대에 못 미칠 때', '평가 상황'],
    darkSide: ['극심한 자책', '완벽 강박', '성공해도 불만족', '번아웃'],
    strengths: ['높은 성취', '책임감', '꼼꼼함', '발전 욕구'],
    acceptanceTips: [
      '"충분히 잘했다"고 스스로에게 말해주세요',
      '완벽하지 않아도 가치 있다는 것을 기억하세요',
      '실패는 성장의 과정이에요',
      '자기에게 관대해지는 연습을 하세요',
    ],
    warning: '완벽을 추구하다 보면 시작조차 못해요',
    affirmation: '나는 불완전해도 충분히 괜찮아요',
  },
  survivor: {
    type: 'survivor',
    title: '숨겨진 생존자',
    emoji: '🛡️',
    subtitle: '살아남아야 해, 무슨 수를 써서라도',
    description: '겉으로는 강하고 잘 지내는 것 같지만, 당신의 내면에는 생존에 대한 불안이 있어요. 언제든 위험이 올 수 있다고 느끼고, 어떤 상황에서든 살아남기 위해 경계하죠.',
    hiddenSelf: '불안하고 경계하는 나',
    publicMask: '강하고 잘 지내는 사람',
    characteristics: ['생존 본능', '경계심', '위기 대비', '자기 보호'],
    triggers: ['위협 느낄 때', '불안정한 상황', '신뢰 문제', '예측 불가'],
    darkSide: ['과도한 경계', '신뢰 어려움', '항상 긴장', '관계 문제'],
    strengths: ['회복력', '위기 대처', '자립심', '생존력'],
    acceptanceTips: [
      '지금은 안전하다는 것을 상기시켜주세요',
      '모든 것을 혼자 감당할 필요 없어요',
      '누군가를 믿어보는 연습을 하세요',
      '경계를 낮춰도 괜찮은 관계가 있어요',
    ],
    warning: '항상 경계하면 진정한 편안함을 느끼기 어려워요',
    affirmation: '나는 안전하고, 도움받아도 괜찮아요',
  },
};

export function calculateResult(answers: number[]): TrueNatureResult {
  const scores: Record<TrueNatureType, number> = {
    rebel: 0,
    controller: 0,
    avoider: 0,
    pleaser: 0,
    perfectionist: 0,
    survivor: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as TrueNatureType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: TrueNatureType = 'pleaser';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as TrueNatureType;
    }
  });

  return results[resultType];
}
