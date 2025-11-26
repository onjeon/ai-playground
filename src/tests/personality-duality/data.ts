// 이중 인격 테스트 - 혼자 있을 때와 사람들 앞에서 나는 얼마나 다를까?

export const questions = [
  {
    id: 1,
    question: "사람들 앞에서 vs 혼자 있을 때 말투가?",
    options: [
      { text: "완전 같다", type: "consistent", score: 0 },
      { text: "약간 다르다", type: "slight", score: 2 },
      { text: "많이 다르다", type: "moderate", score: 4 },
      { text: "완전히 다른 사람", type: "extreme", score: 5 },
    ],
  },
  {
    id: 2,
    question: "집에서 혼자 있을 때 나는?",
    options: [
      { text: "밖에서랑 똑같다", type: "consistent", score: 0 },
      { text: "좀 더 편하다", type: "slight", score: 2 },
      { text: "완전 다른 모습", type: "moderate", score: 4 },
      { text: "진짜 나는 집에만 있다", type: "extreme", score: 5 },
    ],
  },
  {
    id: 3,
    question: "친한 친구 vs 처음 보는 사람 앞에서?",
    options: [
      { text: "별 차이 없다", type: "consistent", score: 0 },
      { text: "약간 다르다", type: "slight", score: 2 },
      { text: "많이 다르다", type: "moderate", score: 4 },
      { text: "완전히 다른 사람", type: "extreme", score: 5 },
    ],
  },
  {
    id: 4,
    question: "직장/학교에서의 나 vs 진짜 나?",
    options: [
      { text: "거의 같다", type: "consistent", score: 0 },
      { text: "약간의 페르소나", type: "slight", score: 2 },
      { text: "많이 다르다", type: "moderate", score: 4 },
      { text: "완전 다른 인격", type: "extreme", score: 5 },
    ],
  },
  {
    id: 5,
    question: "SNS 속 나 vs 현실의 나?",
    options: [
      { text: "똑같다", type: "consistent", score: 0 },
      { text: "약간 포장", type: "slight", score: 2 },
      { text: "많이 다르다", type: "moderate", score: 4 },
      { text: "완전히 다른 페르소나", type: "extreme", score: 5 },
    ],
  },
  {
    id: 6,
    question: "가족 앞에서의 나는?",
    options: [
      { text: "밖에서와 같다", type: "consistent", score: 0 },
      { text: "좀 더 편하다", type: "slight", score: 2 },
      { text: "많이 다르다", type: "moderate", score: 4 },
      { text: "완전히 다른 모습", type: "extreme", score: 5 },
    ],
  },
  {
    id: 7,
    question: "'진짜 나'를 아는 사람은?",
    options: [
      { text: "대부분 안다", type: "consistent", score: 0 },
      { text: "친한 사람들만", type: "slight", score: 2 },
      { text: "극소수만", type: "moderate", score: 4 },
      { text: "나만 안다", type: "extreme", score: 5 },
    ],
  },
  {
    id: 8,
    question: "사회적 상황에서 에너지 소모가?",
    options: [
      { text: "별로 없다", type: "consistent", score: 0 },
      { text: "약간 있다", type: "slight", score: 2 },
      { text: "많이 소모된다", type: "moderate", score: 4 },
      { text: "완전 방전된다", type: "extreme", score: 5 },
    ],
  },
  {
    id: 9,
    question: "밖에서의 나를 집에서 유지하면?",
    options: [
      { text: "쉽게 된다", type: "consistent", score: 0 },
      { text: "좀 피곤하다", type: "slight", score: 2 },
      { text: "매우 힘들다", type: "moderate", score: 4 },
      { text: "불가능하다", type: "extreme", score: 5 },
    ],
  },
  {
    id: 10,
    question: "첫인상과 실제 성격이?",
    options: [
      { text: "거의 같다", type: "consistent", score: 0 },
      { text: "약간 다르다", type: "slight", score: 2 },
      { text: "많이 다르다", type: "moderate", score: 4 },
      { text: "완전 반대다", type: "extreme", score: 5 },
    ],
  },
  {
    id: 11,
    question: "나를 알면 알수록 사람들이?",
    options: [
      { text: "처음 느낌 그대로", type: "consistent", score: 0 },
      { text: "약간 다르다고 함", type: "slight", score: 2 },
      { text: "많이 다르다고 놀람", type: "moderate", score: 4 },
      { text: "갭 차이에 충격받음", type: "extreme", score: 5 },
    ],
  },
  {
    id: 12,
    question: "어떤 모습이 진짜 나일까?",
    options: [
      { text: "다 진짜 나다", type: "consistent", score: 0 },
      { text: "대부분 진짜 나", type: "slight", score: 2 },
      { text: "혼자일 때가 진짜", type: "moderate", score: 4 },
      { text: "진짜 나를 모르겠다", type: "extreme", score: 5 },
    ],
  },
];

export interface PersonalityDualityResult {
  level: string;
  title: string;
  emoji: string;
  dualityScore: number;
  description: string;
  publicSelf: string;
  privateSelf: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  advice: string[];
  balanceTips: string[];
}

const resultTypes: Record<string, PersonalityDualityResult> = {
  consistent: {
    level: 'consistent',
    title: '일관된 인격',
    emoji: '😊',
    dualityScore: 15,
    description: '당신은 혼자 있을 때나 사람들 앞에서나 거의 같은 모습이에요! 일관된 자아를 가지고 있어서 사람들이 당신을 쉽게 이해하고 신뢰합니다.',
    publicSelf: '편안하고 자연스러움',
    privateSelf: '공적인 모습과 거의 동일',
    characteristics: ['일관성', '진솔함', '편안함', '자연스러움'],
    strengths: ['신뢰감', '에너지 절약', '진정성', '스트레스 적음'],
    challenges: ['상황에 따른 적응 필요할 때'],
    advice: ['현재 상태 유지', '상황에 따른 유연성도 가끔 필요'],
    balanceTips: ['자연스럽게 유지하기'],
  },
  slight: {
    level: 'slight',
    title: '약간의 페르소나',
    emoji: '🎭',
    dualityScore: 40,
    description: '상황에 따라 약간의 페르소나를 쓰지만 건강한 수준이에요. 사회적 상황에 맞게 조절하면서도 본질은 유지하고 있습니다.',
    publicSelf: '약간 더 정제된 모습',
    privateSelf: '좀 더 편안하고 자유로움',
    characteristics: ['사회성', '적응력', '기본적 일관성'],
    strengths: ['상황 적응', '사회적 스킬', '균형감'],
    challenges: ['가끔 피로감'],
    advice: ['적절한 균형 유지', '자신을 표현하기'],
    balanceTips: ['너무 무리하지 않기', '휴식 챙기기'],
  },
  moderate: {
    level: 'moderate',
    title: '뚜렷한 갭',
    emoji: '🌗',
    dualityScore: 70,
    description: '밖에서의 나와 혼자일 때의 나가 꽤 달라요! 사회적 페르소나가 발달했지만, 그만큼 에너지 소모도 큽니다. 진짜 나를 더 표현해도 괜찮아요.',
    publicSelf: '사회적으로 조정된 모습',
    privateSelf: '완전히 다른 편안한 모습',
    characteristics: ['강한 페르소나', '적응력', '내면과 외면의 갭'],
    strengths: ['사회적 스킬', '카멜레온', '다양한 상황 대처'],
    challenges: ['에너지 소모', '정체성 혼란', '진짜 나 표현 어려움'],
    advice: ['진짜 나를 더 표현하기', '신뢰할 수 있는 사람에게 보여주기', '휴식 중요'],
    balanceTips: ['페르소나 벗을 시간 확보', '진짜 나를 아는 사람 만들기'],
  },
  extreme: {
    level: 'extreme',
    title: '극단적 이중성',
    emoji: '🎭🔄',
    dualityScore: 95,
    description: '밖에서와 혼자일 때의 모습이 완전히 달라요! 사회적 페르소나가 매우 강해서 진짜 나를 숨기고 있을 수 있어요. 진짜 나를 표현하는 연습이 필요합니다.',
    publicSelf: '완전히 다른 페르소나',
    privateSelf: '밖에서는 절대 보여주지 않는 진짜 모습',
    characteristics: ['극단적 페르소나', '숨김', '적응력', '에너지 소모 심함'],
    strengths: ['강력한 적응력', '연기력', '다양한 역할 수행'],
    challenges: ['정체성 혼란', '극심한 피로', '진짜 나 상실', '관계 어려움'],
    advice: ['진짜 나를 표현하는 연습', '신뢰할 수 있는 사람 만들기', '전문 상담 고려'],
    balanceTips: ['조금씩 진짜 모습 보여주기', '안전한 관계에서 연습', '자기 수용'],
  },
};

export function calculatePersonalityDualityResult(answers: number[]): PersonalityDualityResult {
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
    return { ...resultTypes.consistent, dualityScore: Math.round(percentage) };
  } else if (percentage < 50) {
    return { ...resultTypes.slight, dualityScore: Math.round(percentage) };
  } else if (percentage < 75) {
    return { ...resultTypes.moderate, dualityScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.extreme, dualityScore: Math.round(percentage) };
  }
}
