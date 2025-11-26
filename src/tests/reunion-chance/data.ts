// 재회 가능성 테스트 - 우리 다시 만날 수 있을까?

export interface ReunionChanceQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface ReunionChanceResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  description: string;
  factors: string[];
  analysis: string;
  advice: string[];
  realityCheck: string;
  whatToConsider: string[];
  finalWord: string;
}

export const reunionChanceTypes = ['very-low', 'low', 'moderate', 'high', 'very-high'] as const;
export type ReunionChanceType = typeof reunionChanceTypes[number];

export const questions: ReunionChanceQuestion[] = [
  {
    id: 1,
    question: "이별의 주된 원인은?",
    options: [
      { text: "외도, 배신 등 신뢰 파괴", score: 0 },
      { text: "가치관/성격 차이", score: 1 },
      { text: "타이밍/환경 문제 (거리, 취업 등)", score: 3 },
      { text: "사소한 다툼이 커져서", score: 2 },
    ],
  },
  {
    id: 2,
    question: "이별을 누가 먼저 말했어?",
    options: [
      { text: "상대방이 일방적으로", score: 1 },
      { text: "내가 먼저 말함", score: 2 },
      { text: "서로 합의하에", score: 1 },
      { text: "거의 동시에 느꼈음", score: 2 },
    ],
  },
  {
    id: 3,
    question: "이별 후 상대방의 태도는?",
    options: [
      { text: "완전 차단, 연락 두절", score: 0 },
      { text: "필요한 얘기만 간단히", score: 1 },
      { text: "가끔 안부 연락이 옴", score: 3 },
      { text: "자주 연락하거나 만나자고 함", score: 4 },
    ],
  },
  {
    id: 4,
    question: "공통 친구들의 말에 따르면?",
    options: [
      { text: "상대가 완전히 넘어간 것 같음", score: 0 },
      { text: "모르겠음 / 공통 친구 없음", score: 1 },
      { text: "아직 나 얘기 가끔 한다고 함", score: 3 },
      { text: "나한테 미련 있어 보인다고 함", score: 4 },
    ],
  },
  {
    id: 5,
    question: "이별 전 관계의 만족도는?",
    options: [
      { text: "많이 안 좋았음, 자주 싸웠음", score: 0 },
      { text: "평범했음", score: 1 },
      { text: "대체로 좋았음", score: 2 },
      { text: "매우 좋았고 행복했음", score: 3 },
    ],
  },
  {
    id: 6,
    question: "이별 후 서로 변화가 있었어?",
    options: [
      { text: "둘 다 그대로인 것 같음", score: 0 },
      { text: "나만 변했음", score: 2 },
      { text: "상대가 변한 것 같음", score: 2 },
      { text: "둘 다 성장/변화한 것 같음", score: 3 },
    ],
  },
  {
    id: 7,
    question: "상대방에게 새로운 사람이?",
    options: [
      { text: "이미 새 연인이 있음", score: 0 },
      { text: "누군가 만나는 것 같음", score: 1 },
      { text: "아직 없는 것 같음", score: 3 },
      { text: "확실히 없음", score: 3 },
    ],
  },
  {
    id: 8,
    question: "사귄 기간은 얼마나 됐었어?",
    options: [
      { text: "3개월 미만", score: 1 },
      { text: "3개월~1년", score: 2 },
      { text: "1~3년", score: 3 },
      { text: "3년 이상", score: 3 },
    ],
  },
  {
    id: 9,
    question: "이별 과정은 어땠어?",
    options: [
      { text: "격하게 싸우고 최악으로 끝남", score: 0 },
      { text: "서운하게 끝남", score: 1 },
      { text: "서로 아쉬워하며 헤어짐", score: 3 },
      { text: "나중에 다시 만나자는 뉘앙스", score: 4 },
    ],
  },
  {
    id: 10,
    question: "이별 원인을 해결할 수 있어?",
    options: [
      { text: "해결 불가능한 문제였음", score: 0 },
      { text: "어려워 보임", score: 1 },
      { text: "노력하면 가능할 것 같음", score: 2 },
      { text: "이미 해결됐거나 해결 가능", score: 3 },
    ],
  },
  {
    id: 11,
    question: "SNS에서 상대방의 흔적은?",
    options: [
      { text: "나를 완전 삭제/차단함", score: 0 },
      { text: "관계 흔적을 지움", score: 1 },
      { text: "그대로 놔둠", score: 2 },
      { text: "가끔 내 SNS에 반응함", score: 3 },
    ],
  },
  {
    id: 12,
    question: "솔직히, 재회를 원하는 이유는?",
    options: [
      { text: "외로워서 / 습관", score: 0 },
      { text: "그냥 아쉬워서", score: 1 },
      { text: "아직 좋아해서, 잘할 수 있을 것 같아서", score: 2 },
      { text: "서로 진심으로 사랑했고, 문제 해결 가능해서", score: 3 },
    ],
  },
];

export const results: Record<ReunionChanceType, ReunionChanceResult> = {
  'very-low': {
    type: 'very-low',
    title: '가능성 매우 낮음',
    emoji: '🚫',
    percentage: 10,
    description: '솔직하게 말씀드릴게요. 현재 상황에서 재회 가능성은 매우 낮아 보여요. 하지만 이건 새로운 시작을 위한 신호일 수도 있어요.',
    factors: [
      '이별 원인이 심각함',
      '상대방의 의지가 없어 보임',
      '관계 회복이 어려운 상황',
    ],
    analysis: '이별의 원인과 상대방의 반응을 보면, 관계 회복보다는 각자의 길을 가는 게 좋아 보여요.',
    advice: [
      '재회보다 자기 회복에 집중하세요',
      '이 관계에서 배운 점을 정리해보세요',
      '새로운 인연에 마음을 열어보세요',
      '혼자가 아니에요, 주변에 도움을 요청하세요',
    ],
    realityCheck: '재회가 정말 원하는 건지, 아니면 익숙함에 대한 미련인지 생각해보세요.',
    whatToConsider: [
      '다시 만나도 같은 문제가 반복될 가능성',
      '상대방의 의지 없이는 불가능',
      '새로운 사랑도 충분히 가치있어요',
    ],
    finalWord: '때로는 끝을 받아들이는 것이 새로운 시작이에요. 당신에게 더 좋은 사람이 기다리고 있을 수 있어요.',
  },
  low: {
    type: 'low',
    title: '가능성 낮음',
    emoji: '☁️',
    percentage: 25,
    description: '현재로서는 재회 가능성이 높지 않아요. 하지만 불가능하다는 건 아니에요. 지금은 자신을 돌보는 시간이 필요해요.',
    factors: [
      '상대방의 마음이 돌아선 것 같음',
      '이별 원인 해결이 어려워 보임',
      '시간이 더 필요한 상황',
    ],
    analysis: '상대방이 아직 마음의 문을 닫고 있거나, 관계의 문제가 해결되지 않은 상태예요.',
    advice: [
      '당분간은 연락하지 않는 게 좋아요',
      '자기 발전에 시간을 투자하세요',
      '상대방에게 좋은 변화를 보여주세요',
      '집착보다 여유가 더 매력적이에요',
    ],
    realityCheck: '재회가 꼭 행복을 보장하지는 않아요. 같은 문제가 반복될 수 있어요.',
    whatToConsider: [
      '이별 원인이 해결 가능한지',
      '상대방이 변화를 느낄 수 있는지',
      '다시 만나면 달라질 수 있는지',
    ],
    finalWord: '지금은 거리를 두고, 나 자신에게 집중하는 시간을 가져보세요. 진짜 인연이라면 다시 만날 수 있어요.',
  },
  moderate: {
    type: 'moderate',
    title: '가능성 있음',
    emoji: '🌤️',
    percentage: 50,
    description: '재회 가능성이 반반이에요. 상황에 따라 달라질 수 있어요. 무작정 재회를 시도하기보다, 전략적으로 접근하는 게 좋아요.',
    factors: [
      '아직 서로에 대한 감정이 남아있을 수 있음',
      '이별 원인이 해결 가능해 보임',
      '상황이 좋은 쪽으로 바뀔 여지 있음',
    ],
    analysis: '완전히 끝난 건 아니지만, 재회를 위해서는 노력과 변화가 필요해요.',
    advice: [
      '급하게 굴지 마세요. 시간을 두세요',
      '이별 원인을 진지하게 해결하세요',
      '변화된 모습을 자연스럽게 보여주세요',
      '적당한 거리를 유지하면서 접근하세요',
    ],
    realityCheck: '재회가 목표가 아니라, 더 나은 관계가 목표여야 해요.',
    whatToConsider: [
      '정말 달라질 수 있는지',
      '상대방도 같은 마음인지',
      '재회 후 더 나은 관계가 가능한지',
    ],
    finalWord: '가능성은 있지만, 가장 중요한 건 나 자신이에요. 재회 여부와 관계없이 성장하는 당신이 되세요.',
  },
  high: {
    type: 'high',
    title: '가능성 높음',
    emoji: '🌈',
    percentage: 75,
    description: '재회 가능성이 꽤 높아 보여요! 서로에 대한 감정이 남아있고, 상황도 나쁘지 않아요. 하지만 신중하게 접근하세요.',
    factors: [
      '상대방도 아직 감정이 있어 보임',
      '이별 원인이 해결 가능함',
      '관계의 기반이 튼튼했음',
    ],
    analysis: '이별 과정이 나쁘지 않았고, 서로의 감정이 아직 남아있는 것 같아요.',
    advice: [
      '너무 급하게 굴지 말고 자연스럽게',
      '진심 어린 대화의 기회를 만드세요',
      '과거 문제에 대해 솔직히 이야기하세요',
      '달라진 모습을 보여주세요',
    ],
    realityCheck: '재회는 시작일 뿐, 그 후가 더 중요해요. 같은 실수 반복하지 않을 준비 되셨나요?',
    whatToConsider: [
      '재회 후 관계를 어떻게 발전시킬지',
      '이전의 문제를 어떻게 해결할지',
      '서로의 기대치 맞추기',
    ],
    finalWord: '좋은 신호들이 보여요. 하지만 재회가 목표가 아니라, 더 좋은 관계를 만드는 게 목표라는 걸 기억하세요.',
  },
  'very-high': {
    type: 'very-high',
    title: '가능성 매우 높음',
    emoji: '💕',
    percentage: 90,
    description: '재회 가능성이 매우 높아요! 서로의 감정도 남아있고, 상황도 긍정적이에요. 용기를 내서 대화해보는 건 어떨까요?',
    factors: [
      '서로에 대한 감정이 확실히 남아있음',
      '이별 원인이 심각하지 않았음',
      '상대방도 재회 의사가 있어 보임',
    ],
    analysis: '타이밍이나 상황 때문에 헤어졌고, 감정적으로는 아직 연결되어 있어요.',
    advice: [
      '솔직한 대화를 시도해보세요',
      '과거 문제에 대해 진심으로 사과/대화하세요',
      '서두르지 말고 차근차근',
      '재회 후 계획도 함께 세워보세요',
    ],
    realityCheck: '확률이 높다고 무조건 되는 건 아니에요. 준비와 노력이 필요해요.',
    whatToConsider: [
      '왜 헤어졌는지 충분히 이해했는지',
      '같은 실수를 반복하지 않을 수 있는지',
      '재회 후 더 좋은 관계를 만들 자신이 있는지',
    ],
    finalWord: '좋은 징조들이 많아요. 용기를 내세요! 하지만 재회 자체보다 더 좋은 관계를 만드는 게 진짜 목표라는 걸 잊지 마세요.',
  },
};

export function calculateResult(answers: number[]): ReunionChanceResult {
  let totalScore = 0;
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  // 총점 기준: 0-38점 범위 (다양한 점수 배분)
  const maxPossible = 38;
  const percentage = (totalScore / maxPossible) * 100;
  
  let resultType: ReunionChanceType;
  if (percentage <= 20) {
    resultType = 'very-low';
  } else if (percentage <= 40) {
    resultType = 'low';
  } else if (percentage <= 60) {
    resultType = 'moderate';
  } else if (percentage <= 80) {
    resultType = 'high';
  } else {
    resultType = 'very-high';
  }

  return results[resultType];
}
