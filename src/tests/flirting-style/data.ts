// 썸 스타일 테스트 - 썸 탈 때 나의 유형은?

export const questions = [
  {
    id: 1,
    question: "마음에 드는 사람이 생기면?",
    options: [
      { text: "먼저 적극적으로 다가감", type: "aggressive" },
      { text: "관심 있는 티를 살짝 냄", type: "playful" },
      { text: "상대가 먼저 오길 기다림", type: "passive" },
      { text: "친구로 먼저 가까워지려 함", type: "friendly" },
    ],
  },
  {
    id: 2,
    question: "썸 타는 중 카톡 스타일은?",
    options: [
      { text: "답장 빠르고, 먼저 연락도 자주", type: "aggressive" },
      { text: "밀당하면서 적절히 답장", type: "playful" },
      { text: "상대가 먼저 연락하면 답장", type: "passive" },
      { text: "친구처럼 편하게 대화", type: "friendly" },
    ],
  },
  {
    id: 3,
    question: "썸 상대에게 호감 표현은?",
    options: [
      { text: "직접적으로 '좋아해' 고백", type: "aggressive" },
      { text: "애매하게 긁적긁적", type: "playful" },
      { text: "눈빛이나 행동으로만", type: "passive" },
      { text: "특별하게 챙겨주기", type: "friendly" },
    ],
  },
  {
    id: 4,
    question: "썸이 길어지면?",
    options: [
      { text: "확실하게 정리해야 함", type: "aggressive" },
      { text: "이 상태도 나름 좋음", type: "playful" },
      { text: "상대 결정을 기다림", type: "passive" },
      { text: "자연스럽게 발전하길", type: "friendly" },
    ],
  },
  {
    id: 5,
    question: "썸 상대가 다른 이성과 친하면?",
    options: [
      { text: "바로 물어보거나 견제", type: "aggressive" },
      { text: "나도 다른 이성과 친하게 지냄", type: "playful" },
      { text: "속으로 불안하지만 티 안 냄", type: "passive" },
      { text: "질투 별로 안 남", type: "friendly" },
    ],
  },
  {
    id: 6,
    question: "데이트 장소 정할 때?",
    options: [
      { text: "내가 다 계획하고 이끔", type: "aggressive" },
      { text: "분위기 있는 곳으로 슬쩍 유도", type: "playful" },
      { text: "상대가 정하는 대로", type: "passive" },
      { text: "편한 곳에서 수다 떠는 게 좋아", type: "friendly" },
    ],
  },
  {
    id: 7,
    question: "스킨십은?",
    options: [
      { text: "자연스럽게 먼저 시도", type: "aggressive" },
      { text: "우연을 가장해서 살짝", type: "playful" },
      { text: "상대가 먼저 해야 OK", type: "passive" },
      { text: "친구처럼 가볍게", type: "friendly" },
    ],
  },
  {
    id: 8,
    question: "썸 상대 SNS를 보면?",
    options: [
      { text: "댓글도 달고 적극 반응", type: "aggressive" },
      { text: "좋아요만 적절히", type: "playful" },
      { text: "조용히 염탐만", type: "passive" },
      { text: "SNS 별로 신경 안 씀", type: "friendly" },
    ],
  },
  {
    id: 9,
    question: "밀당에 대한 생각은?",
    options: [
      { text: "싫어, 직진이 최고", type: "aggressive" },
      { text: "어느 정도 밀당은 재미있음", type: "playful" },
      { text: "상대가 밀면 나도 밀게 됨", type: "passive" },
      { text: "밀당? 그냥 편하게 지내고 싶음", type: "friendly" },
    ],
  },
  {
    id: 10,
    question: "고백 타이밍은?",
    options: [
      { text: "확신이 서면 바로", type: "aggressive" },
      { text: "분위기 봐가면서 적절히", type: "playful" },
      { text: "상대가 먼저 해주길", type: "passive" },
      { text: "굳이 고백 안 해도 자연스럽게", type: "friendly" },
    ],
  },
  {
    id: 11,
    question: "썸 끝내고 싶을 때?",
    options: [
      { text: "직접 말함", type: "aggressive" },
      { text: "서서히 페이드 아웃", type: "playful" },
      { text: "그냥 연락 안 함", type: "passive" },
      { text: "친구로 돌아가자고 함", type: "friendly" },
    ],
  },
  {
    id: 12,
    question: "이상적인 썸 기간은?",
    options: [
      { text: "짧을수록 좋아 (2주 이내)", type: "aggressive" },
      { text: "적당히 (1-2달)", type: "playful" },
      { text: "천천히 (3달 이상도 OK)", type: "passive" },
      { text: "썸 기간 상관없이 자연스럽게", type: "friendly" },
    ],
  },
];

export interface FlirtingStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  flirtingTips: string[];
  bestMatch: string;
  worstMatch: string;
  signalToLookFor: string[];
  famousPeople: string;
}

const resultTypes: Record<string, FlirtingStyleResult> = {
  aggressive: {
    type: 'aggressive',
    title: '직진형 헌터',
    emoji: '🏹',
    subtitle: '좋으면 좋다고 말해!',
    description: '당신은 마음에 드는 사람이 생기면 주저하지 않고 다가가는 직진형입니다! 밀당을 싫어하고, 확실한 것을 좋아해요. 적극적으로 어필하고, 빠른 결론을 선호합니다.',
    characteristics: ['적극적', '솔직함', '결단력', '주도적', '자신감'],
    strengths: ['확실한 의사 표현', '기회를 놓치지 않음', '상대에게 확신을 줌'],
    weaknesses: ['상대 부담될 수 있음', '거절에 상처', '성급함'],
    flirtingTips: ['상대 반응 확인하기', '너무 조급해하지 않기', '숨 쉴 틈 주기'],
    bestMatch: '수동형 (끌려오는 거 좋아함)',
    worstMatch: '같은 직진형 (충돌 가능)',
    signalToLookFor: ['눈 피하면 부담', '웃으면서 호응하면 OK'],
    famousPeople: '현빈 (사랑의 불시착), 이민호 (상속자들)',
  },
  playful: {
    type: 'playful',
    title: '밀당 마스터',
    emoji: '🎭',
    subtitle: '적당히 밀고 당기고~',
    description: '당신은 썸의 묘미를 아는 밀당 마스터입니다! 너무 쉬우면 재미없고, 적당한 긴장감을 즐겨요. 애매한 신호로 상대를 설레게 하는 테크닉이 있습니다.',
    characteristics: ['전략적', '재치 있음', '여유로움', '매력적', '게임 즐김'],
    strengths: ['설렘 유지', '흥미 유발', '상대 마음 흔들기'],
    weaknesses: ['진심 의심받음', '타이밍 놓칠 수 있음', '피곤할 수 있음'],
    flirtingTips: ['진심 표현도 필요', '너무 밀면 떠남', '적절한 밸런스'],
    bestMatch: '직진형 (밀당 리드 가능)',
    worstMatch: '같은 밀당형 (끝없는 게임)',
    signalToLookFor: ['상대가 답답해하면 고백 타이밍'],
    famousPeople: '공유 (도깨비), 송중기 (태양의 후예)',
  },
  passive: {
    type: 'passive',
    title: '수동형 기다리미',
    emoji: '🌸',
    subtitle: '네가 먼저 와줘...',
    description: '당신은 좋아하는 사람이 생겨도 먼저 다가가기 어려운 수동형입니다. 상대가 먼저 와주길 바라고, 거절당하는 게 두려워요. 속마음을 숨기고 신호만 보내는 타입.',
    characteristics: ['수줍음', '신중함', '소극적', '감정 숨김', '눈치봄'],
    strengths: ['상대를 부담스럽게 안 함', '신비로움', '끌려올 때 감동'],
    weaknesses: ['기회 놓침', '오해받기 쉬움', '속앓이'],
    flirtingTips: ['용기 내서 신호 주기', '너무 숨기지 않기', '작은 것부터 표현'],
    bestMatch: '직진형 (먼저 와줌)',
    worstMatch: '같은 수동형 (진전 없음)',
    signalToLookFor: ['상대가 다가오면 거부하지 말기'],
    famousPeople: '수지 (첫사랑 이미지), 박보영',
  },
  friendly: {
    type: 'friendly',
    title: '친구에서 연인형',
    emoji: '🤝',
    subtitle: '친해지다 보면 사랑으로',
    description: '당신은 썸보다 자연스러운 발전을 선호하는 타입입니다! 먼저 친구로 가까워지고, 서로 알아가다 보면 사랑이 싹트길 바라요. 급하지 않고 편안한 관계를 추구합니다.',
    characteristics: ['편안함', '자연스러움', '느긋함', '우정 중시', '급하지 않음'],
    strengths: ['깊은 이해', '오래가는 관계', '부담 없음', '진정한 연결'],
    weaknesses: ['연애로 발전 어려움', '친구로 남을 수 있음', '타이밍 놓침'],
    flirtingTips: ['연애 신호 분명히 주기', '이성으로 어필', '고백 타이밍 잡기'],
    bestMatch: '같은 친구형 (서로 이해)',
    worstMatch: '직진형 (템포 안 맞음)',
    signalToLookFor: ['친구 이상의 신호 감지하기'],
    famousPeople: '비-김태희, 이병헌-이민정',
  },
};

export function calculateFlirtingStyleResult(answers: number[]): FlirtingStyleResult {
  const typeScores: Record<string, number> = {
    aggressive: 0,
    playful: 0,
    passive: 0,
    friendly: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'playful';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
