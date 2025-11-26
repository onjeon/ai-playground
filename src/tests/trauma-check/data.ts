// 트라우마 체크 테스트 - 마음의 상처를 확인해보세요

export const questions = [
  {
    id: 1,
    question: "과거의 힘든 기억이 갑자기 떠오르나요?",
    options: [
      { text: "거의 없다", type: "low", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "매우 자주, 통제가 안 됨", type: "severe", score: 5 },
    ],
  },
  {
    id: 2,
    question: "특정 상황/장소/사람을 피하게 되나요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "약간", type: "mild", score: 2 },
      { text: "많이", type: "moderate", score: 4 },
      { text: "일상에 지장이 있을 정도", type: "severe", score: 5 },
    ],
  },
  {
    id: 3,
    question: "갑자기 불안하거나 공황 상태가 되나요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "매우 자주", type: "severe", score: 5 },
    ],
  },
  {
    id: 4,
    question: "악몽을 자주 꾸나요?",
    options: [
      { text: "거의 없다", type: "low", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "거의 매일", type: "severe", score: 5 },
    ],
  },
  {
    id: 5,
    question: "감정 조절이 어려운가요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "항상", type: "severe", score: 5 },
    ],
  },
  {
    id: 6,
    question: "사람들을 신뢰하기 어려운가요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "약간", type: "mild", score: 2 },
      { text: "많이", type: "moderate", score: 4 },
      { text: "거의 모든 사람을 못 믿음", type: "severe", score: 5 },
    ],
  },
  {
    id: 7,
    question: "자기 자신을 비난하는 경향이 있나요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "항상", type: "severe", score: 5 },
    ],
  },
  {
    id: 8,
    question: "감정이 무뎌지거나 분리된 느낌이 드나요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "가끔", type: "mild", score: 2 },
      { text: "자주", type: "moderate", score: 4 },
      { text: "항상", type: "severe", score: 5 },
    ],
  },
  {
    id: 9,
    question: "수면에 문제가 있나요?",
    options: [
      { text: "잘 잔다", type: "low", score: 0 },
      { text: "가끔 어려움", type: "mild", score: 2 },
      { text: "자주 어려움", type: "moderate", score: 4 },
      { text: "심각한 수면 문제", type: "severe", score: 5 },
    ],
  },
  {
    id: 10,
    question: "과거 경험이 현재 관계에 영향을 주나요?",
    options: [
      { text: "아니요", type: "low", score: 0 },
      { text: "약간", type: "mild", score: 2 },
      { text: "많이", type: "moderate", score: 4 },
      { text: "매우 많이", type: "severe", score: 5 },
    ],
  },
  {
    id: 11,
    question: "자해 충동이나 극단적 생각이 있나요?",
    options: [
      { text: "전혀 없다", type: "low", score: 0 },
      { text: "과거에 있었다", type: "mild", score: 2 },
      { text: "가끔 있다", type: "moderate", score: 4 },
      { text: "자주 있다", type: "severe", score: 5 },
    ],
  },
  {
    id: 12,
    question: "일상생활(일/학교/관계)에 지장이 있나요?",
    options: [
      { text: "없다", type: "low", score: 0 },
      { text: "약간", type: "mild", score: 2 },
      { text: "많이", type: "moderate", score: 4 },
      { text: "심각하게", type: "severe", score: 5 },
    ],
  },
];

export interface TraumaCheckResult {
  level: string;
  title: string;
  emoji: string;
  traumaScore: number;
  description: string;
  symptoms: string[];
  effects: string[];
  healingSteps: string[];
  selfCareAdvice: string[];
  professionalHelp: boolean;
  resources: string[];
  importantMessage: string;
  crisis: boolean;
}

const resultTypes: Record<string, TraumaCheckResult> = {
  low: {
    level: 'low',
    title: '정서적으로 안정',
    emoji: '💚',
    traumaScore: 10,
    description: '현재 정서적으로 안정된 상태로 보입니다. 과거의 힘든 경험이 현재에 큰 영향을 주고 있지 않아요. 자기 돌봄을 계속 유지하세요.',
    symptoms: [],
    effects: ['정서적 안정', '건강한 대처'],
    healingSteps: ['현재 상태 유지', '자기 돌봄 지속'],
    selfCareAdvice: ['규칙적인 생활', '건강한 관계 유지', '스트레스 관리'],
    professionalHelp: false,
    resources: [],
    importantMessage: '정서적으로 건강한 상태입니다. 계속 자신을 돌봐주세요.',
    crisis: false,
  },
  mild: {
    level: 'mild',
    title: '가벼운 영향',
    emoji: '🟡',
    traumaScore: 35,
    description: '과거의 경험이 약간의 영향을 주고 있지만, 대체로 잘 대처하고 있어요. 자기 돌봄을 강화하고, 필요하면 도움을 구하세요.',
    symptoms: ['가끔 과거 회상', '경미한 회피', '간헐적 불안'],
    effects: ['일시적 스트레스', '경미한 수면 문제'],
    healingSteps: ['자기 돌봄 강화', '감정 표현하기', '필요시 상담 고려'],
    selfCareAdvice: ['충분한 휴식', '신뢰할 수 있는 사람과 대화', '스트레스 관리'],
    professionalHelp: false,
    resources: ['자기돌봄 자료', '스트레스 관리 앱'],
    importantMessage: '가벼운 영향이 있지만, 회복력이 있어요. 자신을 돌보세요.',
    crisis: false,
  },
  moderate: {
    level: 'moderate',
    title: '전문 도움 권장',
    emoji: '🟠',
    traumaScore: 60,
    description: '과거의 경험이 현재 생활에 영향을 주고 있어요. 트라우마 증상이 보이며, 전문가의 도움이 도움이 될 수 있습니다.',
    symptoms: ['자주 과거 회상', '회피 행동', '불안/우울', '수면 문제', '감정 조절 어려움'],
    effects: ['일상 기능 저하', '관계 어려움', '자존감 하락'],
    healingSteps: ['전문 상담 권장', '안전한 환경 조성', '지지 시스템 구축', '자기 돌봄'],
    selfCareAdvice: ['무리하지 않기', '경계 설정', '안전한 사람과 연결', '휴식'],
    professionalHelp: true,
    resources: ['심리상담센터', '정신건강복지센터', '트라우마 전문 치료'],
    importantMessage: '당신의 고통은 유효합니다. 전문가의 도움을 받는 것은 용기 있는 선택이에요.',
    crisis: false,
  },
  severe: {
    level: 'severe',
    title: '즉각적 도움 필요',
    emoji: '🔴',
    traumaScore: 85,
    description: '심각한 트라우마 증상이 보입니다. 일상생활에 큰 영향을 주고 있으며, 전문가의 도움이 반드시 필요합니다. 혼자 감당하지 마세요.',
    symptoms: ['심한 플래시백', '심각한 회피', '심한 불안/공황', '악몽', '해리', '자해 충동'],
    effects: ['심각한 기능 저하', '관계 단절', '자존감 파괴', '신체 증상'],
    healingSteps: ['즉각적 전문 도움', '안전 확보', '위기 상담'],
    selfCareAdvice: ['안전이 최우선', '도움 요청하기', '혼자 있지 않기'],
    professionalHelp: true,
    resources: ['자살예방상담 1393', '정신건강위기상담 1577-0199', '응급실', '트라우마 전문 치료'],
    importantMessage: '당신은 혼자가 아니에요. 지금 바로 도움을 요청하세요. 회복은 가능합니다.',
    crisis: true,
  },
};

export function calculateTraumaCheckResult(answers: number[]): TraumaCheckResult {
  let totalScore = 0;
  let severeCount = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const score = question.options[answerIndex].score;
      const type = question.options[answerIndex].type;
      totalScore += score;
      if (type === 'severe') severeCount++;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  // 자해/극단적 생각 문항(11번)에서 severe 선택시 바로 severe 결과
  if (severeCount >= 3 || (answers[10] === 3)) {
    return { ...resultTypes.severe, traumaScore: Math.round(percentage) };
  }

  if (percentage < 20) {
    return { ...resultTypes.low, traumaScore: Math.round(percentage) };
  } else if (percentage < 45) {
    return { ...resultTypes.mild, traumaScore: Math.round(percentage) };
  } else if (percentage < 70) {
    return { ...resultTypes.moderate, traumaScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.severe, traumaScore: Math.round(percentage) };
  }
}
