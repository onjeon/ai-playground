// 젠더 정체성 테스트 - 나의 젠더 스펙트럼은?

export interface GenderIdentityQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface GenderIdentityResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  expression: string[];
  comfort: string[];
  socialTips: string[];
  selfAcceptance: string[];
  resources: string[];
  affirmation: string;
}

export const genderIdentityTypes = ['traditional', 'flexible', 'androgynous', 'fluid', 'nonconforming', 'questioning'] as const;
export type GenderIdentityType = typeof genderIdentityTypes[number];

export const questions: GenderIdentityQuestion[] = [
  {
    id: 1,
    question: "나의 성별에 대해 어떻게 느끼나요?",
    options: [
      { text: "태어난 성별과 완전히 일치하고 편안해요", scores: { traditional: 3 } },
      { text: "대체로 일치하지만 가끔 다르게 느껴질 때도 있어요", scores: { flexible: 3 } },
      { text: "성별 구분 자체가 잘 와닿지 않아요", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "자주 다르게 느껴지고, 정의하기 어려워요", scores: { fluid: 2, questioning: 1 } },
    ],
  },
  {
    id: 2,
    question: "옷이나 스타일을 고를 때?",
    options: [
      { text: "내 성별에 맞는 전형적인 스타일을 선호해요", scores: { traditional: 3 } },
      { text: "보통은 전형적이지만 가끔 반대 성별 스타일도 좋아해요", scores: { flexible: 3 } },
      { text: "성별 구분 없이 내가 좋아하는 걸 입어요", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "그날 기분에 따라 완전히 달라져요", scores: { fluid: 3 } },
    ],
  },
  {
    id: 3,
    question: "'남자다움' 또는 '여자다움'에 대해?",
    options: [
      { text: "중요하고, 나도 그에 맞게 행동하려 해요", scores: { traditional: 3 } },
      { text: "이해는 하지만 꼭 따를 필요는 없다고 생각해요", scores: { flexible: 3 } },
      { text: "나에겐 별로 의미 없는 개념이에요", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "둘 다 가지고 있고, 상황에 따라 달라요", scores: { fluid: 2, androgynous: 1 } },
    ],
  },
  {
    id: 4,
    question: "누군가 나를 반대 성별로 착각하면?",
    options: [
      { text: "불편하고 바로 정정해요", scores: { traditional: 3 } },
      { text: "약간 어색하지만 크게 신경 안 써요", scores: { flexible: 3 } },
      { text: "별로 상관없어요", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "오히려 기분 좋거나 흥미로워요", scores: { fluid: 2, questioning: 1 } },
    ],
  },
  {
    id: 5,
    question: "성별 관련 사회적 기대(역할, 행동)에 대해?",
    options: [
      { text: "자연스럽고, 따르는 게 편해요", scores: { traditional: 3 } },
      { text: "대체로 따르지만 답답할 때도 있어요", scores: { flexible: 3 } },
      { text: "나에게 맞지 않는 것 같아 신경 안 써요", scores: { nonconforming: 3 } },
      { text: "상황/기분에 따라 다르게 대응해요", scores: { fluid: 2, androgynous: 1 } },
    ],
  },
  {
    id: 6,
    question: "내 안에 있는 '남성적 에너지'와 '여성적 에너지'는?",
    options: [
      { text: "내 성별에 맞는 한쪽이 압도적이에요", scores: { traditional: 3 } },
      { text: "한쪽이 더 강하지만 반대쪽도 있어요", scores: { flexible: 3 } },
      { text: "둘 다 비슷하게 있는 것 같아요", scores: { androgynous: 3 } },
      { text: "때에 따라 달라지고, 경계가 모호해요", scores: { fluid: 3 } },
    ],
  },
  {
    id: 7,
    question: "성별 정체성에 대해 고민해본 적 있나요?",
    options: [
      { text: "없어요, 항상 명확했어요", scores: { traditional: 3 } },
      { text: "가끔 생각하지만 결론은 명확해요", scores: { flexible: 3 } },
      { text: "자주 생각하고, 열린 마음으로 탐구해요", scores: { questioning: 2, fluid: 1 } },
      { text: "현재도 계속 탐구 중이에요", scores: { questioning: 3 } },
    ],
  },
  {
    id: 8,
    question: "거울을 볼 때 내 모습이?",
    options: [
      { text: "내 성별 정체성과 잘 맞아요", scores: { traditional: 3 } },
      { text: "대체로 괜찮지만 가끔 다르게 보이고 싶을 때도", scores: { flexible: 3 } },
      { text: "성별보다 '나'로서 보려고 해요", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "날마다 다르게 느껴져요", scores: { fluid: 3 } },
    ],
  },
  {
    id: 9,
    question: "호칭이나 대명사(그/그녀 등)에 대해?",
    options: [
      { text: "태어난 성별에 맞는 것이 당연히 편해요", scores: { traditional: 3 } },
      { text: "보통은 괜찮지만 다른 호칭도 나쁘지 않아요", scores: { flexible: 2, androgynous: 1 } },
      { text: "성중립적 호칭이 더 편할 때도 있어요", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "상황/기분에 따라 다른 호칭이 맞을 때가 있어요", scores: { fluid: 3 } },
    ],
  },
  {
    id: 10,
    question: "성별 이분법(남/여로만 나누는 것)에 대해?",
    options: [
      { text: "자연스럽고 문제없다고 생각해요", scores: { traditional: 3 } },
      { text: "편하지만 예외도 있다고 생각해요", scores: { flexible: 3 } },
      { text: "너무 단순한 구분이라고 생각해요", scores: { nonconforming: 2, androgynous: 1 } },
      { text: "나에겐 맞지 않는 틀이에요", scores: { fluid: 2, questioning: 1 } },
    ],
  },
  {
    id: 11,
    question: "이상적으로 원하는 나의 젠더 표현은?",
    options: [
      { text: "지금처럼 내 성별답게", scores: { traditional: 3 } },
      { text: "기본 + 가끔 다양한 시도", scores: { flexible: 3 } },
      { text: "성별에 얽매이지 않는 자유로운 표현", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "때에 따라 완전히 달라질 수 있는 것", scores: { fluid: 3 } },
    ],
  },
  {
    id: 12,
    question: "젠더와 관련해서 나를 한마디로 표현하면?",
    options: [
      { text: "확실한 남성/여성", scores: { traditional: 3 } },
      { text: "유연한 남성/여성", scores: { flexible: 3 } },
      { text: "성별을 넘어선 존재", scores: { androgynous: 2, nonconforming: 1 } },
      { text: "계속 변화하고 탐구하는 중", scores: { fluid: 2, questioning: 1 } },
    ],
  },
];

export const results: Record<GenderIdentityType, GenderIdentityResult> = {
  traditional: {
    type: 'traditional',
    title: '시스젠더 (Cisgender)',
    emoji: '✨',
    subtitle: '태어난 성별과 일치하는 정체성',
    description: '당신은 태어날 때 지정된 성별과 자신의 젠더 정체성이 일치하는 시스젠더예요. 사회적 성별 역할에 대체로 편안함을 느끼고, 자신의 성별 정체성에 대해 명확한 인식을 가지고 있어요.',
    characteristics: ['성별 정체성이 명확함', '지정 성별과 일치', '전통적 역할에 편안함', '안정적 정체성'],
    expression: ['성별에 맞는 전형적 스타일', '사회적 기대에 부합하는 표현', '일관된 젠더 표현'],
    comfort: ['현재 성별에 만족', '신체와 정체성 일치', '호칭/대명사에 편안함'],
    socialTips: [
      '다양한 젠더 정체성에 열린 마음을 가져보세요',
      '다른 사람의 정체성도 존중해주세요',
      '성별 고정관념에 대해 유연하게 생각해보세요',
    ],
    selfAcceptance: [
      '자신의 정체성에 자신감을 가지세요',
      '시스젠더도 다양한 스펙트럼이 있어요',
      '표현 방식은 자유롭게 탐구해도 괜찮아요',
    ],
    resources: ['젠더 다양성에 대한 이해', 'LGBTQ+ 커뮤니티 ally 되기'],
    affirmation: '당신의 정체성은 유효하고, 있는 그대로 완벽해요.',
  },
  flexible: {
    type: 'flexible',
    title: '유연한 젠더 (Gender Flexible)',
    emoji: '🌈',
    subtitle: '기본은 있지만 유연하게',
    description: '당신은 기본적으로 지정 성별과 일치하지만, 젠더 표현이나 역할에 있어 유연한 태도를 가지고 있어요. 가끔은 다른 젠더의 특성도 자연스럽게 받아들이고 표현해요.',
    characteristics: ['기본 정체성 + 유연성', '열린 마음', '표현의 다양성 인정', '탐구적 태도'],
    expression: ['기본적으로 전형적', '가끔 크로스 젠더 스타일', '상황에 따라 유연하게'],
    comfort: ['대체로 편안함', '다양한 표현에 열려있음', '경험에 개방적'],
    socialTips: [
      '유연함은 강점이에요',
      '다양한 표현을 두려워하지 마세요',
      '자신의 페이스로 탐구하세요',
    ],
    selfAcceptance: [
      '유연함도 정체성의 일부예요',
      '탐구하는 것을 두려워하지 마세요',
      '변화해도 괜찮아요',
    ],
    resources: ['젠더 표현의 다양성', '논바이너리 커뮤니티'],
    affirmation: '당신의 유연함은 아름다운 강점이에요.',
  },
  androgynous: {
    type: 'androgynous',
    title: '앤드로지너스 (Androgynous)',
    emoji: '⚖️',
    subtitle: '양성의 특성을 모두 가진',
    description: '당신은 남성적 특성과 여성적 특성을 균형 있게 가지고 있어요. 성별 이분법적 구분이 잘 맞지 않고, 양쪽의 에너지를 자연스럽게 표현해요. 독특하고 조화로운 정체성이에요.',
    characteristics: ['양성적 특성', '균형잡힌 에너지', '이분법 거부', '독특한 매력'],
    expression: ['성중립적 스타일', '양쪽 특성 혼합', '개성적인 표현'],
    comfort: ['성별 구분에 무관심', '자유로운 표현 선호', '다양한 호칭 수용'],
    socialTips: [
      '당신의 독특함을 자랑스러워하세요',
      '설명이 필요하면 편하게 하세요',
      '이해하는 사람들과 함께하세요',
    ],
    selfAcceptance: [
      '양쪽 특성 모두 당신이에요',
      '균형은 아름다움이에요',
      '라벨에 얽매이지 않아도 돼요',
    ],
    resources: ['앤드로지너스 커뮤니티', '논바이너리 자료'],
    affirmation: '당신의 균형 잡힌 에너지는 특별한 선물이에요.',
  },
  fluid: {
    type: 'fluid',
    title: '젠더플루이드 (Genderfluid)',
    emoji: '🌊',
    subtitle: '흐르듯 변화하는 정체성',
    description: '당신의 젠더 정체성은 고정되어 있지 않고 유동적으로 변화해요. 때로는 남성적으로, 때로는 여성적으로, 또는 그 사이 어디쯤에서 느껴질 수 있어요. 이런 유동성은 완전히 자연스러운 거예요.',
    characteristics: ['유동적 정체성', '시간에 따라 변화', '다양한 표현', '적응력'],
    expression: ['날마다 다른 스타일', '기분에 따른 표현', '다양한 호칭 사용'],
    comfort: ['변화에 편안함', '고정된 정의 거부', '유연한 자아 인식'],
    socialTips: [
      '변화는 자연스러운 거예요',
      '주변에 설명이 필요하면 해도 좋아요',
      '이해하는 사람들과 연결되세요',
    ],
    selfAcceptance: [
      '흐름에 맡기세요',
      '매 순간의 당신이 진짜 당신이에요',
      '변화를 두려워하지 마세요',
    ],
    resources: ['젠더플루이드 커뮤니티', 'LGBTQ+ 지원 단체'],
    affirmation: '당신의 변화하는 모습 모두가 진정한 당신이에요.',
  },
  nonconforming: {
    type: 'nonconforming',
    title: '젠더 비순응 (Gender Nonconforming)',
    emoji: '🦄',
    subtitle: '규칙을 따르지 않는 자유로운 영혼',
    description: '당신은 사회가 정한 성별 규범을 따르지 않아요. 전통적인 남성상/여성상에 맞추려 하지 않고, 자신만의 방식으로 젠더를 표현해요. 이건 용기 있는 선택이에요.',
    characteristics: ['규범 거부', '자유로운 표현', '독립적', '도전적'],
    expression: ['사회적 기대 무시', '개성 강한 스타일', '자유로운 행동'],
    comfort: ['자신만의 기준', '외부 판단에 덜 신경씀', '진정성 추구'],
    socialTips: [
      '당신의 용기를 자랑스러워하세요',
      '안전한 공간을 찾으세요',
      '같은 생각의 사람들과 연결되세요',
    ],
    selfAcceptance: [
      '규범을 따르지 않아도 괜찮아요',
      '당신의 표현은 유효해요',
      '비순응은 강점이에요',
    ],
    resources: ['퀴어 커뮤니티', 'LGBTQ+ 지원 센터'],
    affirmation: '당신은 규칙을 넘어선 아름다운 존재예요.',
  },
  questioning: {
    type: 'questioning',
    title: '퀘스쳐닝 (Questioning)',
    emoji: '🔍',
    subtitle: '탐구하고 발견하는 중',
    description: '당신은 현재 자신의 젠더 정체성을 탐구하고 있어요. 아직 명확한 답을 찾지 못했을 수도 있고, 여러 가능성을 열어두고 있을 수도 있어요. 이 탐구의 여정 자체가 소중해요.',
    characteristics: ['탐구 중', '열린 마음', '자기 발견 중', '과정에 있음'],
    expression: ['실험적', '다양한 시도', '변화하는 스타일'],
    comfort: ['불확실함에 열려있음', '답을 찾는 중', '과정을 즐김'],
    socialTips: [
      '시간을 가지세요, 서두를 필요 없어요',
      '안전한 사람들과 이야기하세요',
      '다양한 정보를 탐색해보세요',
    ],
    selfAcceptance: [
      '모르는 것도 괜찮아요',
      '탐구 자체가 답이에요',
      '언제든 변해도 괜찮아요',
    ],
    resources: ['LGBTQ+ 상담 서비스', '젠더 정체성 자료', '온라인 커뮤니티'],
    affirmation: '답을 찾는 여정에 있는 당신, 그 자체로 완벽해요.',
  },
};

export function calculateResult(answers: number[]): GenderIdentityResult {
  const scores: Record<GenderIdentityType, number> = {
    traditional: 0,
    flexible: 0,
    androgynous: 0,
    fluid: 0,
    nonconforming: 0,
    questioning: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as GenderIdentityType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: GenderIdentityType = 'questioning';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as GenderIdentityType;
    }
  });

  return results[resultType];
}
