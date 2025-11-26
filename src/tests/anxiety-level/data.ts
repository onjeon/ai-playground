// 불안 지수 테스트 - 나의 불안 수준 측정

export const questions = [
  {
    id: 1,
    question: "잠들기 전 내일 일이 걱정되어 잠을 못 잔 적이?",
    options: [
      { text: "거의 매일", score: 4 },
      { text: "자주 있음", score: 3 },
      { text: "가끔 있음", score: 2 },
      { text: "거의 없음", score: 1 },
    ],
  },
  {
    id: 2,
    question: "작은 실수에도 큰일 날 것 같은 불안감을 느끼나요?",
    options: [
      { text: "항상 그렇다", score: 4 },
      { text: "자주 그렇다", score: 3 },
      { text: "가끔 그렇다", score: 2 },
      { text: "거의 안 그렇다", score: 1 },
    ],
  },
  {
    id: 3,
    question: "아무 이유 없이 불안하거나 초조한 적이?",
    options: [
      { text: "자주 있다", score: 4 },
      { text: "종종 있다", score: 3 },
      { text: "가끔 있다", score: 2 },
      { text: "거의 없다", score: 1 },
    ],
  },
  {
    id: 4,
    question: "미래에 대한 걱정을 얼마나 하나요?",
    options: [
      { text: "항상 걱정됨", score: 4 },
      { text: "자주 걱정됨", score: 3 },
      { text: "가끔 걱정됨", score: 2 },
      { text: "별로 안 함", score: 1 },
    ],
  },
  {
    id: 5,
    question: "새로운 상황이나 낯선 환경에서?",
    options: [
      { text: "매우 불안하고 피하고 싶음", score: 4 },
      { text: "꽤 불안하지만 참음", score: 3 },
      { text: "약간 긴장되는 정도", score: 2 },
      { text: "별로 불안하지 않음", score: 1 },
    ],
  },
  {
    id: 6,
    question: "심장이 두근거리거나 손에 땀이 나는 경험이?",
    options: [
      { text: "자주 있다", score: 4 },
      { text: "종종 있다", score: 3 },
      { text: "가끔 있다", score: 2 },
      { text: "거의 없다", score: 1 },
    ],
  },
  {
    id: 7,
    question: "최악의 상황을 상상하는 편인가요?",
    options: [
      { text: "항상 그렇다", score: 4 },
      { text: "자주 그렇다", score: 3 },
      { text: "가끔 그렇다", score: 2 },
      { text: "거의 안 그렇다", score: 1 },
    ],
  },
  {
    id: 8,
    question: "중요한 일 앞두고 집중이 안 되거나 머리가 하얘지는 경험이?",
    options: [
      { text: "자주 있다", score: 4 },
      { text: "종종 있다", score: 3 },
      { text: "가끔 있다", score: 2 },
      { text: "거의 없다", score: 1 },
    ],
  },
  {
    id: 9,
    question: "다른 사람들이 나를 어떻게 생각할지 걱정되나요?",
    options: [
      { text: "항상 신경 쓰임", score: 4 },
      { text: "자주 신경 쓰임", score: 3 },
      { text: "가끔 신경 쓰임", score: 2 },
      { text: "별로 신경 안 씀", score: 1 },
    ],
  },
  {
    id: 10,
    question: "긴장으로 인한 두통, 어깨 결림, 소화불량 등이?",
    options: [
      { text: "자주 있다", score: 4 },
      { text: "종종 있다", score: 3 },
      { text: "가끔 있다", score: 2 },
      { text: "거의 없다", score: 1 },
    ],
  },
  {
    id: 11,
    question: "결정을 내리는 것이 어렵고 불안한가요?",
    options: [
      { text: "매우 어렵다", score: 4 },
      { text: "꽤 어렵다", score: 3 },
      { text: "약간 어렵다", score: 2 },
      { text: "어렵지 않다", score: 1 },
    ],
  },
  {
    id: 12,
    question: "걱정을 멈추기가 어렵다고 느끼나요?",
    options: [
      { text: "매우 그렇다", score: 4 },
      { text: "꽤 그렇다", score: 3 },
      { text: "약간 그렇다", score: 2 },
      { text: "그렇지 않다", score: 1 },
    ],
  },
  {
    id: 13,
    question: "안전하지 않다는 느낌이 드는 빈도는?",
    options: [
      { text: "자주 그렇다", score: 4 },
      { text: "종종 그렇다", score: 3 },
      { text: "가끔 그렇다", score: 2 },
      { text: "거의 없다", score: 1 },
    ],
  },
  {
    id: 14,
    question: "휴식을 취해도 마음이 편하지 않은 경우가?",
    options: [
      { text: "자주 있다", score: 4 },
      { text: "종종 있다", score: 3 },
      { text: "가끔 있다", score: 2 },
      { text: "거의 없다", score: 1 },
    ],
  },
  {
    id: 15,
    question: "일상생활에서 불안이 방해가 되나요?",
    options: [
      { text: "매우 그렇다", score: 4 },
      { text: "꽤 그렇다", score: 3 },
      { text: "약간 그렇다", score: 2 },
      { text: "그렇지 않다", score: 1 },
    ],
  },
];

export interface AnxietyLevelResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  score: number;
  maxScore: number;
  percentage: number;
  level: string;
  characteristics: string[];
  physicalSymptoms: string[];
  mentalSymptoms: string[];
  copingStrategies: string[];
  professionalHelp: string;
  dailyTips: string[];
  warningSign: string;
}

function getAnxietyResult(percentage: number): Omit<AnxietyLevelResult, 'score' | 'maxScore' | 'percentage'> {
  if (percentage >= 80) {
    return {
      type: 'severe',
      title: '높은 불안 수준',
      emoji: '🆘',
      subtitle: '전문가 상담 권장',
      description: '당신의 불안 수준이 상당히 높습니다. 일상생활에 영향을 줄 수 있는 수준이에요. 혼자 감당하려 하지 말고, 전문가의 도움을 받는 것을 강력히 권장합니다.',
      level: '높음',
      characteristics: ['지속적 걱정', '긴장 상태', '회피 행동', '집중력 저하'],
      physicalSymptoms: ['심장 두근거림', '호흡 곤란', '근육 긴장', '수면 장애', '소화 불량'],
      mentalSymptoms: ['과도한 걱정', '최악 상상', '집중력 저하', '초조함', '공포감'],
      copingStrategies: ['전문 상담 받기', '약물 치료 고려', '규칙적 생활', '카페인 줄이기'],
      professionalHelp: '정신건강의학과 또는 심리상담센터 방문을 강력히 권장합니다.',
      dailyTips: ['심호흡 연습', '명상 앱 사용', '운동하기', '수면 위생 지키기'],
      warningSign: '일상생활이 어렵거나 공황 증상이 있다면 즉시 전문가를 찾아주세요.',
    };
  } else if (percentage >= 60) {
    return {
      type: 'moderate',
      title: '중간 수준 불안',
      emoji: '😰',
      subtitle: '관리가 필요한 상태',
      description: '당신의 불안 수준이 중간 정도입니다. 일상에서 불안을 자주 느끼고, 삶의 질에 영향을 줄 수 있어요. 자기 관리와 함께 필요시 전문 상담을 고려해보세요.',
      level: '중간',
      characteristics: ['잦은 걱정', '긴장됨', '예민함', '불확실성 싫어함'],
      physicalSymptoms: ['두근거림', '근육 긴장', '피로감', '두통'],
      mentalSymptoms: ['과도한 걱정', '집중력 저하', '불안감', '예민함'],
      copingStrategies: ['스트레스 관리', '이완 기법', '규칙적 운동', '상담 고려'],
      professionalHelp: '증상이 지속되면 전문 상담을 받아보세요.',
      dailyTips: ['호흡법 연습', '걱정 시간 정하기', '운동', '충분한 수면'],
      warningSign: '불안이 심해지거나 일상에 지장이 있다면 전문가 상담을 권장합니다.',
    };
  } else if (percentage >= 40) {
    return {
      type: 'mild',
      title: '가벼운 불안',
      emoji: '😟',
      subtitle: '관리 가능한 수준',
      description: '당신의 불안 수준은 가벼운 편입니다. 누구나 느낄 수 있는 정상적인 불안이에요. 하지만 자기 관리를 통해 더 편안한 상태를 유지할 수 있습니다.',
      level: '가벼움',
      characteristics: ['때때로 걱정', '약간 긴장', '대체로 괜찮음'],
      physicalSymptoms: ['가끔 긴장', '약간의 두근거림'],
      mentalSymptoms: ['때때로 걱정', '가벼운 불안'],
      copingStrategies: ['자기 관리', '스트레스 해소', '취미 활동'],
      professionalHelp: '현재 수준은 자기 관리로 충분합니다.',
      dailyTips: ['규칙적 운동', '충분한 수면', '취미 생활', '사회적 교류'],
      warningSign: '불안이 증가하면 관리에 더 신경 쓰세요.',
    };
  } else {
    return {
      type: 'low',
      title: '낮은 불안 수준',
      emoji: '😌',
      subtitle: '안정적인 상태',
      description: '당신의 불안 수준은 낮은 편입니다! 마음이 안정적이고, 스트레스를 잘 관리하고 있어요. 현재 상태를 잘 유지하세요.',
      level: '낮음',
      characteristics: ['마음의 평화', '안정감', '여유로움', '긍정적'],
      physicalSymptoms: ['거의 없음'],
      mentalSymptoms: ['거의 없음'],
      copingStrategies: ['현재 상태 유지', '건강한 생활습관'],
      professionalHelp: '특별히 필요하지 않습니다.',
      dailyTips: ['현재 생활 유지', '스트레스 관리 지속'],
      warningSign: '큰 변화가 있을 때 자신을 돌봐주세요.',
    };
  }
}

export function calculateAnxietyLevelResult(answers: number[]): AnxietyLevelResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const result = getAnxietyResult(percentage);

  return {
    ...result,
    score: totalScore,
    maxScore,
    percentage,
  };
}
