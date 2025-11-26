// 결혼 적합도 테스트 - 우리, 결혼해도 될까?

export interface MarriageFitQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface MarriageFitResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  verdict: string;
  description: string;
  strengths: string[];
  concerns: string[];
  compatibility: string;
  advice: string[];
  discussTopics: string[];
  beforeMarriage: string[];
  encouragement: string;
}

export const marriageFitTypes = ['not_ready', 'needs_work', 'potential', 'good_match', 'perfect_match'] as const;
export type MarriageFitType = typeof marriageFitTypes[number];

export const questions: MarriageFitQuestion[] = [
  {
    id: 1,
    question: "연인과 돈에 대한 가치관이 맞아?",
    options: [
      { text: "완전 달라서 자주 충돌해", score: 0 },
      { text: "다른 부분이 있지만 맞추려 노력 중", score: 1 },
      { text: "대체로 맞아, 가끔 의견 차이 정도", score: 2 },
      { text: "매우 잘 맞아! 재정 계획도 함께해", score: 3 },
    ],
  },
  {
    id: 2,
    question: "갈등이 생겼을 때 해결 방식은?",
    options: [
      { text: "자주 크게 싸우고 해결이 안 돼", score: 0 },
      { text: "시간이 오래 걸리지만 결국 풀긴 해", score: 1 },
      { text: "대화로 잘 풀어가는 편", score: 2 },
      { text: "건강하게 소통하고 빨리 화해해", score: 3 },
    ],
  },
  {
    id: 3,
    question: "가족(시댁/처가) 관계에 대한 생각은?",
    options: [
      { text: "상대 가족과 안 맞거나 갈등 있어", score: 0 },
      { text: "조금 불편하지만 노력하고 있어", score: 1 },
      { text: "나쁘지 않아, 적당한 거리 유지", score: 2 },
      { text: "좋아! 잘 지내고 서로 존중해", score: 3 },
    ],
  },
  {
    id: 4,
    question: "자녀에 대한 계획이 맞아?",
    options: [
      { text: "완전 다름 (한 명은 원하고 한 명은 안 원함)", score: 0 },
      { text: "비슷하긴 한데 세부적으로 달라", score: 1 },
      { text: "대체로 맞아, 조율 가능", score: 2 },
      { text: "완전 일치! 구체적 계획도 있어", score: 3 },
    ],
  },
  {
    id: 5,
    question: "생활 습관(청소, 정리, 수면 등)은 맞아?",
    options: [
      { text: "너무 달라서 스트레스받아", score: 0 },
      { text: "다른 점이 있지만 참을만해", score: 1 },
      { text: "대체로 맞아, 작은 차이 정도", score: 2 },
      { text: "완벽하게 맞아! 함께 살기 편해", score: 3 },
    ],
  },
  {
    id: 6,
    question: "서로의 커리어/일에 대해 어때?",
    options: [
      { text: "상대 일 때문에 불만이 많아", score: 0 },
      { text: "이해하려 하지만 가끔 힘들어", score: 1 },
      { text: "서로 존중하고 응원해", score: 2 },
      { text: "완전히 지지! 함께 성장해", score: 3 },
    ],
  },
  {
    id: 7,
    question: "함께하는 미래를 얼마나 구체적으로 그려봤어?",
    options: [
      { text: "별로, 미래 얘기 안 해", score: 0 },
      { text: "가끔 얘기하긴 하는데 막연해", score: 1 },
      { text: "종종 얘기하고 계획도 세워", score: 2 },
      { text: "자주! 구체적인 계획까지 있어", score: 3 },
    ],
  },
  {
    id: 8,
    question: "상대방의 단점을 얼마나 수용할 수 있어?",
    options: [
      { text: "참기 힘든 단점이 많아", score: 0 },
      { text: "노력하면 참을 수 있을 것 같아", score: 1 },
      { text: "대부분 수용 가능, 큰 문제 없어", score: 2 },
      { text: "단점도 사랑스러워, 완전 수용", score: 3 },
    ],
  },
  {
    id: 9,
    question: "서로에 대한 신뢰도는?",
    options: [
      { text: "의심이 많고 불안해", score: 0 },
      { text: "믿으려 하지만 가끔 흔들려", score: 1 },
      { text: "대체로 신뢰해, 큰 문제 없어", score: 2 },
      { text: "완전 신뢰! 100% 믿어", score: 3 },
    ],
  },
  {
    id: 10,
    question: "힘들 때 서로에게 기댈 수 있어?",
    options: [
      { text: "잘 안 돼, 각자 해결하는 편", score: 0 },
      { text: "노력은 하는데 부족할 때 있어", score: 1 },
      { text: "대체로 잘 기대고 위로받아", score: 2 },
      { text: "항상! 서로가 가장 큰 힘이야", score: 3 },
    ],
  },
  {
    id: 11,
    question: "성적 친밀감은 어때?",
    options: [
      { text: "안 맞거나 문제가 있어", score: 0 },
      { text: "조금 다르지만 노력하고 있어", score: 1 },
      { text: "괜찮아, 만족스러운 편", score: 2 },
      { text: "매우 좋아! 완전 만족", score: 3 },
    ],
  },
  {
    id: 12,
    question: "이 사람과 평생 함께할 자신이 있어?",
    options: [
      { text: "솔직히 확신이 없어", score: 0 },
      { text: "노력하면 가능할 것 같아", score: 1 },
      { text: "꽤 자신 있어", score: 2 },
      { text: "100% 확신해! 이 사람이야", score: 3 },
    ],
  },
];

export const results: Record<MarriageFitType, MarriageFitResult> = {
  not_ready: {
    type: 'not_ready',
    title: '결혼은 아직 이른 것 같아요',
    emoji: '⚠️',
    percentage: 25,
    verdict: '지금 당장 결혼은 신중히 생각해주세요',
    description: '현재 관계에서 결혼을 위해 해결해야 할 문제들이 많아 보여요. 결혼은 인생에서 가장 중요한 결정 중 하나예요. 서두르지 말고 충분히 대화하고, 문제를 해결한 후에 결정해도 늦지 않아요.',
    strengths: [],
    concerns: [
      '가치관 차이가 큼',
      '갈등 해결이 어려움',
      '미래 계획이 불분명',
      '신뢰 문제가 있음',
    ],
    compatibility: '현재로선 결혼 적합도가 낮아요',
    advice: [
      '결혼 전에 충분한 대화가 필요해요',
      '커플 상담을 받아보는 것도 방법이에요',
      '중요한 가치관들을 맞춰가세요',
      '서두르지 말고 시간을 가지세요',
    ],
    discussTopics: [
      '돈과 재정 계획',
      '자녀 계획',
      '가족 관계',
      '생활 방식',
      '커리어 계획',
    ],
    beforeMarriage: [
      '충분한 대화 시간 갖기',
      '갈등 해결 방법 배우기',
      '전문 상담 고려하기',
      '최소 1년은 더 지켜보기',
    ],
    encouragement: '결혼은 서두를 필요 없어요. 더 준비된 후에 해도 괜찮아요.',
  },
  needs_work: {
    type: 'needs_work',
    title: '조금 더 노력이 필요해요',
    emoji: '🔧',
    percentage: 45,
    verdict: '결혼 가능하지만, 몇 가지 해결할 점이 있어요',
    description: '기본적인 애정과 의지는 있지만, 결혼 생활을 위해 맞춰가야 할 부분들이 있어요. 이런 부분들을 미리 인식하고 함께 노력하면 행복한 결혼 생활이 가능해요.',
    strengths: [
      '서로에 대한 애정이 있음',
      '함께하려는 의지가 있음',
    ],
    concerns: [
      '일부 가치관 조율 필요',
      '소통 방식 개선 필요',
      '몇 가지 생활 습관 차이',
    ],
    compatibility: '노력하면 좋은 부부가 될 수 있어요',
    advice: [
      '결혼 전 깊은 대화를 많이 나누세요',
      '서로 다른 점을 인정하고 존중하세요',
      '갈등 해결 방법을 함께 만들어가세요',
      '사소한 것도 대화로 풀어가세요',
    ],
    discussTopics: [
      '재정 관리 방식',
      '가사 분담',
      '양가 부모님 관계',
      '여가 시간 사용',
    ],
    beforeMarriage: [
      '주요 가치관 대화하기',
      '동거 또는 장기 여행 해보기',
      '양가 상견례 및 관계 형성',
      '재정 계획 함께 세우기',
    ],
    encouragement: '완벽한 커플은 없어요. 함께 맞춰가면 좋은 부부가 될 수 있어요!',
  },
  potential: {
    type: 'potential',
    title: '좋은 가능성이 있어요!',
    emoji: '✨',
    percentage: 65,
    verdict: '결혼해도 괜찮은 커플이에요!',
    description: '전반적으로 잘 맞는 편이에요! 완벽하진 않지만, 서로를 이해하고 배려하는 마음이 있어서 결혼 생활도 잘 해나갈 수 있을 거예요. 남은 부분들은 함께 맞춰가면 돼요.',
    strengths: [
      '기본적인 가치관이 맞음',
      '서로 존중하고 배려함',
      '문제 해결 의지가 있음',
    ],
    concerns: [
      '세부적인 조율이 필요한 부분 있음',
    ],
    compatibility: '결혼 적합도가 꽤 높아요',
    advice: [
      '지금처럼 서로 존중하며 지내세요',
      '작은 의견 차이는 대화로 풀어가세요',
      '함께하는 경험을 많이 쌓으세요',
      '서로의 성장을 응원하세요',
    ],
    discussTopics: [
      '구체적인 결혼 계획',
      '신혼집과 재정 계획',
      '결혼 후 생활 방식',
    ],
    beforeMarriage: [
      '구체적인 결혼 계획 세우기',
      '양가 관계 더 돈독히 하기',
      '함께 살 집 알아보기',
      '재정 계획 구체화하기',
    ],
    encouragement: '좋은 커플이에요! 결혼해도 행복할 거예요!',
  },
  good_match: {
    type: 'good_match',
    title: '정말 잘 맞는 커플이에요!',
    emoji: '💕',
    percentage: 82,
    verdict: '결혼 강력 추천! 행복한 부부가 될 거예요',
    description: '와! 정말 잘 맞는 커플이네요. 가치관도 맞고, 서로를 깊이 이해하고 있어요. 이런 관계는 흔치 않아요. 결혼해서 행복한 가정을 꾸릴 준비가 된 것 같아요!',
    strengths: [
      '가치관이 잘 맞음',
      '깊은 신뢰와 애정',
      '건강한 소통 방식',
      '미래 계획이 일치',
    ],
    concerns: [],
    compatibility: '매우 높은 결혼 적합도!',
    advice: [
      '이 소중한 관계를 잘 유지하세요',
      '결혼 후에도 연애하듯 지내세요',
      '감사한 마음을 자주 표현하세요',
      '함께 성장하는 부부가 되세요',
    ],
    discussTopics: [
      '결혼식 계획',
      '신혼여행',
      '결혼 후 목표',
    ],
    beforeMarriage: [
      '프로포즈 계획하기',
      '결혼식 준비하기',
      '신혼집 구하기',
      '행복한 미래 설계하기',
    ],
    encouragement: '정말 좋은 인연이에요! 평생 행복하세요! 💕',
  },
  perfect_match: {
    type: 'perfect_match',
    title: '운명의 짝이에요!',
    emoji: '💍',
    percentage: 95,
    verdict: '지금 당장 결혼해도 될 완벽한 궁합!',
    description: '이건 정말 운명이에요! 모든 면에서 완벽하게 맞는 커플이네요. 서로를 깊이 사랑하고, 존중하고, 이해해요. 이런 인연은 평생에 한 번 올까 말까 해요. 꼭 함께 행복하세요!',
    strengths: [
      '완벽한 가치관 일치',
      '최고의 신뢰와 사랑',
      '이상적인 소통',
      '함께하는 미래가 명확',
      '깊은 친밀감',
    ],
    concerns: [],
    compatibility: '완벽한 결혼 적합도! 💯',
    advice: [
      '이 사랑을 평생 지켜가세요',
      '서로에게 감사하는 마음 잊지 마세요',
      '결혼 후에도 지금처럼 사랑하세요',
      '함께하는 모든 순간을 소중히 여기세요',
    ],
    discussTopics: [
      '언제 결혼할지!',
      '꿈꾸는 미래 모습',
    ],
    beforeMarriage: [
      '아름다운 프로포즈',
      '행복한 결혼식 준비',
      '평생 함께할 약속',
    ],
    encouragement: '운명의 짝을 만났어요! 영원히 행복하세요! 💍💕',
  },
};

export function calculateResult(answers: number[]): MarriageFitResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: MarriageFitType;
  
  if (percentage <= 25) {
    resultType = 'not_ready';
  } else if (percentage <= 45) {
    resultType = 'needs_work';
  } else if (percentage <= 65) {
    resultType = 'potential';
  } else if (percentage <= 85) {
    resultType = 'good_match';
  } else {
    resultType = 'perfect_match';
  }

  return results[resultType];
}
