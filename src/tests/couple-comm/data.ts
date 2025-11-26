// 커플 소통 점수 테스트 - 우리 커플 대화는 몇 점?

export interface CoupleCommQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface CoupleCommResult {
  type: string;
  title: string;
  emoji: string;
  score: number;
  grade: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  communicationStyle: string;
  improvementTips: string[];
  dailyPractice: string[];
  conflictTips: string[];
  encouragement: string;
}

export const coupleCommTypes = ['critical', 'poor', 'average', 'good', 'excellent'] as const;
export type CoupleCommType = typeof coupleCommTypes[number];

export const questions: CoupleCommQuestion[] = [
  {
    id: 1,
    question: "연인에게 힘든 감정을 솔직하게 말할 수 있어?",
    options: [
      { text: "전혀, 숨기거나 참는 편", score: 0 },
      { text: "어려워서 잘 못해", score: 1 },
      { text: "노력하면 어느 정도 할 수 있어", score: 2 },
      { text: "편하게 다 말해! 다 받아줘", score: 3 },
    ],
  },
  {
    id: 2,
    question: "연인의 말을 끝까지 잘 들어줘?",
    options: [
      { text: "자주 끊거나 내 말을 먼저 해", score: 0 },
      { text: "가끔 급해서 못 들을 때 있어", score: 1 },
      { text: "대체로 잘 들으려고 해", score: 2 },
      { text: "항상 끝까지 경청해!", score: 3 },
    ],
  },
  {
    id: 3,
    question: "의견 충돌 시 어떻게 대화해?",
    options: [
      { text: "싸우거나 말을 안 해", score: 0 },
      { text: "감정적으로 되기 쉬워", score: 1 },
      { text: "노력하면 대화로 풀어", score: 2 },
      { text: "차분하게 서로 의견 나눠", score: 3 },
    ],
  },
  {
    id: 4,
    question: "연인의 비언어적 신호(표정, 행동)를 잘 알아채?",
    options: [
      { text: "전혀 모르겠어, 맨날 물어봐야 해", score: 0 },
      { text: "가끔 놓칠 때가 있어", score: 1 },
      { text: "대체로 알아채는 편", score: 2 },
      { text: "바로 알아채! 눈빛만 봐도 알아", score: 3 },
    ],
  },
  {
    id: 5,
    question: "사과할 때 어떻게 해?",
    options: [
      { text: "잘 못해, 자존심 때문에", score: 0 },
      { text: "시간 지나면 대충 넘어가", score: 1 },
      { text: "잘못 알면 사과해", score: 2 },
      { text: "진심으로 바로 사과하고 반성해", score: 3 },
    ],
  },
  {
    id: 6,
    question: "칭찬이나 애정 표현을 자주 해?",
    options: [
      { text: "거의 안 해, 어색해", score: 0 },
      { text: "특별한 날에만 가끔", score: 1 },
      { text: "종종 하는 편", score: 2 },
      { text: "매일! 수시로 표현해", score: 3 },
    ],
  },
  {
    id: 7,
    question: "중요한 결정을 할 때 어떻게 해?",
    options: [
      { text: "각자 알아서, 대화 잘 안 해", score: 0 },
      { text: "결정 후에 알려주는 편", score: 1 },
      { text: "대체로 상의해", score: 2 },
      { text: "항상 함께 의논하고 결정해", score: 3 },
    ],
  },
  {
    id: 8,
    question: "연인이 말할 때 휴대폰 보거나 딴 짓 해?",
    options: [
      { text: "자주 그래, 습관적으로", score: 0 },
      { text: "가끔 그럴 때 있어", score: 1 },
      { text: "의식적으로 안 하려고 해", score: 2 },
      { text: "절대 안 해! 집중해서 들어", score: 3 },
    ],
  },
  {
    id: 9,
    question: "연인의 하루나 기분을 물어봐?",
    options: [
      { text: "거의 안 물어봐", score: 0 },
      { text: "생각나면 가끔", score: 1 },
      { text: "자주 물어보는 편", score: 2 },
      { text: "매일! 꼭 확인해", score: 3 },
    ],
  },
  {
    id: 10,
    question: "오해가 생겼을 때 어떻게 해?",
    options: [
      { text: "그냥 넘어가거나 쌓아둠", score: 0 },
      { text: "시간 지나면 풀리겠지", score: 1 },
      { text: "대화로 풀려고 노력해", score: 2 },
      { text: "바로 대화해서 해결해", score: 3 },
    ],
  },
  {
    id: 11,
    question: "'나' 대신 '우리'로 말하는 편이야?",
    options: [
      { text: "거의 '나' 위주로 말해", score: 0 },
      { text: "상황에 따라 달라", score: 1 },
      { text: "의식적으로 '우리'를 써", score: 2 },
      { text: "자연스럽게 '우리'가 많아", score: 3 },
    ],
  },
  {
    id: 12,
    question: "연인과의 대화가 즐거워?",
    options: [
      { text: "솔직히 피곤하거나 귀찮을 때 많아", score: 0 },
      { text: "그냥 그래, 특별히 없어", score: 1 },
      { text: "대체로 즐거워", score: 2 },
      { text: "항상 즐거워! 대화가 제일 좋아", score: 3 },
    ],
  },
];

export const results: Record<CoupleCommType, CoupleCommResult> = {
  critical: {
    type: 'critical',
    title: '소통 위기 상태',
    emoji: '🚨',
    score: 20,
    grade: 'F',
    description: '솔직히 말하면, 소통에 심각한 문제가 있어요. 제대로 된 대화가 이루어지지 않고, 서로의 마음을 몰라서 오해와 갈등이 쌓이고 있을 거예요. 지금 바로 소통 방식을 바꿔야 해요.',
    strengths: [],
    weaknesses: [
      '대화 자체가 부족함',
      '감정 표현이 안 됨',
      '오해가 자주 생김',
      '갈등 해결이 어려움',
    ],
    communicationStyle: '단절형 - 대화보다 침묵이나 회피가 많음',
    improvementTips: [
      '하루 10분이라도 대화 시간 만들기',
      '상대방 말 끝까지 듣는 연습하기',
      '감정을 말로 표현하는 연습하기',
      '필요하면 커플 상담 고려하기',
    ],
    dailyPractice: [
      '매일 "오늘 어땠어?" 물어보기',
      '고마운 점 하나씩 말하기',
      '핸드폰 내려놓고 대화하기',
    ],
    conflictTips: [
      '싸울 때 인신공격 절대 금지',
      '일단 들어보고 반응하기',
      '문제 해결에 집중하기',
    ],
    encouragement: '지금부터라도 바꾸면 달라질 수 있어요. 포기하지 마세요!',
  },
  poor: {
    type: 'poor',
    title: '소통 개선 필요',
    emoji: '😰',
    score: 40,
    grade: 'D',
    description: '소통이 잘 안 되는 편이에요. 대화는 하지만 진정한 이해와 공감까지는 이어지지 않아요. 서로 답답함을 느끼고 있을 수 있어요. 의식적인 노력이 필요해요.',
    strengths: [
      '대화 의지는 있음',
    ],
    weaknesses: [
      '깊은 대화가 어려움',
      '감정 공유가 부족',
      '오해가 종종 생김',
    ],
    communicationStyle: '표면적 대화형 - 깊이 있는 소통이 부족',
    improvementTips: [
      '일상 대화 외에 깊은 대화 시간 갖기',
      '상대방 입장에서 생각해보기',
      '비난보다 요청으로 말하기',
      '감정 단어를 사용해서 표현하기',
    ],
    dailyPractice: [
      '하루 끝에 서로의 감정 나누기',
      '주 1회 깊은 대화 시간 만들기',
      '상대방 칭찬 습관들이기',
    ],
    conflictTips: [
      '화날 때 잠깐 쉬고 대화하기',
      '"왜 그랬어" 대신 "내 느낌은..." 으로',
      '해결 후 서로 확인하기',
    ],
    encouragement: '노력하면 분명 좋아질 수 있어요!',
  },
  average: {
    type: 'average',
    title: '평균적인 소통',
    emoji: '😊',
    score: 60,
    grade: 'C+',
    description: '평균적인 수준의 소통을 하고 있어요. 기본적인 대화는 잘 하지만, 더 깊고 풍부한 소통이 되면 관계가 훨씬 좋아질 거예요. 조금만 더 노력해보세요!',
    strengths: [
      '기본적인 대화는 잘 함',
      '갈등 시 대화로 해결 노력',
      '서로 관심은 있음',
    ],
    weaknesses: [
      '깊은 감정 교류가 부족할 때 있음',
      '바쁘면 소통이 소홀해짐',
    ],
    communicationStyle: '기능적 대화형 - 필요한 대화는 하지만 감성적 교류 보통',
    improvementTips: [
      '바빠도 대화 시간 꼭 확보하기',
      '감정 표현 더 자주 하기',
      '상대방 얘기에 더 깊이 반응하기',
      '함께하는 취미로 대화 주제 만들기',
    ],
    dailyPractice: [
      '아침/저녁 인사 꼭 하기',
      '작은 것도 공유하는 습관',
      '스킨십과 함께 애정 표현하기',
    ],
    conflictTips: [
      '감정이 격해지면 잠깐 쉬기',
      '서로의 입장 먼저 들어보기',
      '타협점 함께 찾기',
    ],
    encouragement: '좋은 기반이 있어요! 조금만 더 노력하면 최고가 될 수 있어요!',
  },
  good: {
    type: 'good',
    title: '소통 잘하는 커플!',
    emoji: '💬',
    score: 80,
    grade: 'A',
    description: '소통을 정말 잘 하는 커플이에요! 서로의 마음을 잘 이해하고, 대화를 통해 관계를 더 깊게 만들어가고 있어요. 이런 소통 습관을 계속 유지하세요!',
    strengths: [
      '열린 대화가 가능',
      '서로의 감정을 잘 이해',
      '갈등을 건강하게 해결',
      '애정 표현도 잘 함',
    ],
    weaknesses: [],
    communicationStyle: '공감형 대화 - 서로를 이해하고 공감하는 소통',
    improvementTips: [
      '지금처럼 계속하세요!',
      '새로운 대화 주제 발굴하기',
      '더 깊은 이야기도 나눠보기',
      '감사 표현 더 자주 하기',
    ],
    dailyPractice: [
      '서로의 꿈과 목표 공유하기',
      '추억 얘기 자주 하기',
      '미래 계획 함께 세우기',
    ],
    conflictTips: [
      '지금처럼 대화로 해결하기',
      '상대 입장 먼저 이해하기',
      '빠르게 화해하는 습관 유지',
    ],
    encouragement: '정말 잘하고 있어요! 앞으로도 이렇게 소통하세요! 💕',
  },
  excellent: {
    type: 'excellent',
    title: '완벽한 소통의 달인!',
    emoji: '🏆',
    score: 95,
    grade: 'A+',
    description: '와! 소통의 달인 커플이네요! 말하지 않아도 통하고, 깊은 대화도 자연스럽게 나눠요. 이런 소통 능력은 정말 흔치 않아요. 평생 이렇게 지내세요!',
    strengths: [
      '완벽한 감정 교류',
      '깊은 신뢰 기반 대화',
      '말 안 해도 통함',
      '갈등도 성장의 기회로',
      '풍부한 애정 표현',
    ],
    weaknesses: [],
    communicationStyle: '텔레파시급 소통 - 말하지 않아도 서로를 이해',
    improvementTips: [
      '지금 그대로 유지하세요!',
      '이 좋은 소통을 당연하게 여기지 마세요',
      '감사한 마음 계속 표현하세요',
      '다른 커플에게 비법 나눠주세요 ㅎㅎ',
    ],
    dailyPractice: [
      '매일 사랑한다고 말하기',
      '함께하는 시간 소중히 여기기',
      '새로운 경험 함께 하기',
    ],
    conflictTips: [
      '지금처럼 서로 존중하며',
      '대화로 모든 걸 해결하기',
      '갈등도 사랑으로 승화하기',
    ],
    encouragement: '소통의 모범 커플이에요! 영원히 행복하세요! 🏆💕',
  },
};

export function calculateResult(answers: number[]): CoupleCommResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: CoupleCommType;
  
  if (percentage <= 25) {
    resultType = 'critical';
  } else if (percentage <= 45) {
    resultType = 'poor';
  } else if (percentage <= 65) {
    resultType = 'average';
  } else if (percentage <= 85) {
    resultType = 'good';
  } else {
    resultType = 'excellent';
  }

  return results[resultType];
}
