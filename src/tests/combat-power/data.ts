// 전투력 테스트 - 당신의 실제 전투력은?

export const questions = [
  {
    id: 1,
    question: "위협적인 상황에서 나는?",
    options: [
      { text: "일단 도망친다", type: "flee", score: 1 },
      { text: "상황을 지켜본다", type: "observe", score: 2 },
      { text: "상대를 설득한다", type: "negotiate", score: 3 },
      { text: "맞서 싸운다", type: "fight", score: 5 },
    ],
  },
  {
    id: 2,
    question: "체력 테스트! 팔굽혀펴기 최대 개수는?",
    options: [
      { text: "10개 미만", type: "weak", score: 1 },
      { text: "10~30개", type: "average", score: 2 },
      { text: "30~50개", type: "strong", score: 4 },
      { text: "50개 이상", type: "elite", score: 5 },
    ],
  },
  {
    id: 3,
    question: "공포 영화를 볼 때 나는?",
    options: [
      { text: "눈 가리고 못 봄", type: "flee", score: 1 },
      { text: "좀 무섭지만 봄", type: "observe", score: 2 },
      { text: "재밌게 봄", type: "negotiate", score: 3 },
      { text: "하나도 안 무서움", type: "fight", score: 5 },
    ],
  },
  {
    id: 4,
    question: "누가 시비를 걸면?",
    options: [
      { text: "피한다", type: "flee", score: 1 },
      { text: "무시한다", type: "observe", score: 2 },
      { text: "말로 대응한다", type: "negotiate", score: 3 },
      { text: "눈 마주치고 대응한다", type: "fight", score: 5 },
    ],
  },
  {
    id: 5,
    question: "100m 달리기 기록은?",
    options: [
      { text: "20초 이상", type: "weak", score: 1 },
      { text: "15~20초", type: "average", score: 2 },
      { text: "13~15초", type: "strong", score: 4 },
      { text: "13초 미만", type: "elite", score: 5 },
    ],
  },
  {
    id: 6,
    question: "밤길을 혼자 걸을 때?",
    options: [
      { text: "무서워서 못 걸음", type: "flee", score: 1 },
      { text: "좀 불안함", type: "observe", score: 2 },
      { text: "주의하며 걸음", type: "negotiate", score: 3 },
      { text: "전혀 무섭지 않음", type: "fight", score: 5 },
    ],
  },
  {
    id: 7,
    question: "격투기/무술 경험은?",
    options: [
      { text: "전혀 없음", type: "weak", score: 1 },
      { text: "약간의 호신술", type: "average", score: 2 },
      { text: "배운 적 있음", type: "strong", score: 4 },
      { text: "유단자/선수 출신", type: "elite", score: 5 },
    ],
  },
  {
    id: 8,
    question: "친구가 맞고 있으면?",
    options: [
      { text: "경찰에 신고한다", type: "observe", score: 2 },
      { text: "말로 말린다", type: "negotiate", score: 3 },
      { text: "몸으로 말린다", type: "fight", score: 4 },
      { text: "같이 싸운다", type: "elite", score: 5 },
    ],
  },
  {
    id: 9,
    question: "악력기 테스트! 내 악력은?",
    options: [
      { text: "30kg 미만", type: "weak", score: 1 },
      { text: "30~45kg", type: "average", score: 2 },
      { text: "45~60kg", type: "strong", score: 4 },
      { text: "60kg 이상", type: "elite", score: 5 },
    ],
  },
  {
    id: 10,
    question: "고통을 참는 능력은?",
    options: [
      { text: "작은 것도 못 참음", type: "weak", score: 1 },
      { text: "보통", type: "average", score: 2 },
      { text: "꽤 잘 참음", type: "strong", score: 4 },
      { text: "극한의 고통도 참음", type: "elite", score: 5 },
    ],
  },
  {
    id: 11,
    question: "위기 상황에서 나의 멘탈은?",
    options: [
      { text: "패닉에 빠짐", type: "flee", score: 1 },
      { text: "좀 당황함", type: "observe", score: 2 },
      { text: "침착하게 대처", type: "negotiate", score: 4 },
      { text: "오히려 각성함", type: "fight", score: 5 },
    ],
  },
  {
    id: 12,
    question: "실제로 싸워본 경험은?",
    options: [
      { text: "한 번도 없음", type: "weak", score: 1 },
      { text: "어릴 때 조금", type: "average", score: 2 },
      { text: "몇 번 있음", type: "strong", score: 4 },
      { text: "많음", type: "elite", score: 5 },
    ],
  },
];

export interface CombatPowerResult {
  type: string;
  title: string;
  emoji: string;
  powerLevel: number;
  rank: string;
  description: string;
  physicalStats: {
    strength: number;
    speed: number;
    endurance: number;
    technique: number;
    mental: number;
  };
  signature: string;
  weakness: string;
  compatibleWith: string;
  vsResult: string;
}

const resultTypes: Record<string, CombatPowerResult> = {
  legendary: {
    type: 'legendary',
    title: '전설의 전사',
    emoji: '🦁',
    powerLevel: 9500,
    rank: 'S+',
    description: '당신은 전설급 전투력의 소유자입니다! 신체 능력, 정신력, 실전 경험 모두 최상급. 웬만한 위협은 당신 앞에서 무력화됩니다.',
    physicalStats: {
      strength: 95,
      speed: 90,
      endurance: 95,
      technique: 85,
      mental: 100,
    },
    signature: '압도적인 위압감',
    weakness: '과신',
    compatibleWith: '동급의 강자',
    vsResult: '일반인 10명 상대 가능',
  },
  elite: {
    type: 'elite',
    title: '엘리트 파이터',
    emoji: '🐺',
    powerLevel: 7500,
    rank: 'A',
    description: '당신은 상위권 전투력을 보유하고 있습니다! 체력, 멘탈, 실전 능력이 균형 잡혀 있어요. 대부분의 위협에 대응할 수 있습니다.',
    physicalStats: {
      strength: 80,
      speed: 75,
      endurance: 80,
      technique: 70,
      mental: 85,
    },
    signature: '빠른 판단력',
    weakness: '컨디션에 따라 변동',
    compatibleWith: '전략가 타입',
    vsResult: '일반인 5명 상대 가능',
  },
  average: {
    type: 'average',
    title: '평범한 시민',
    emoji: '🙂',
    powerLevel: 4500,
    rank: 'C',
    description: '평균적인 전투력을 가지고 있습니다. 일상적인 상황에서는 문제없지만, 위협적인 상황에서는 도움이 필요할 수 있어요.',
    physicalStats: {
      strength: 50,
      speed: 50,
      endurance: 50,
      technique: 30,
      mental: 55,
    },
    signature: '상황 판단력',
    weakness: '체력 부족',
    compatibleWith: '팀 플레이어',
    vsResult: '1:1 대등한 싸움',
  },
  weak: {
    type: 'weak',
    title: '평화주의자',
    emoji: '🕊️',
    powerLevel: 2000,
    rank: 'D',
    description: '전투력보다는 다른 분야에 재능이 있는 타입! 물리적 충돌보다는 대화와 회피로 문제를 해결하는 게 좋아요.',
    physicalStats: {
      strength: 25,
      speed: 30,
      endurance: 25,
      technique: 10,
      mental: 40,
    },
    signature: '위기 회피 본능',
    weakness: '체력, 멘탈',
    compatibleWith: '보호자 타입',
    vsResult: '도망이 최선',
  },
};

export function calculateCombatPowerResult(answers: number[]): CombatPowerResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 80) {
    return resultTypes.legendary;
  } else if (percentage >= 60) {
    return resultTypes.elite;
  } else if (percentage >= 40) {
    return resultTypes.average;
  } else {
    return resultTypes.weak;
  }
}
