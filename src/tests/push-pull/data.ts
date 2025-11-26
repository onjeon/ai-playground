// 밀당 능력 테스트 - 연애에서 밀고 당기기, 나는 얼마나 잘할까?

export interface PushPullQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface PushPullResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  loveAdvice: string[];
  idealPartner: string;
  warning: string;
}

export const pushPullTypes = ['straight', 'pusher', 'puller', 'master', 'chaos'] as const;
export type PushPullType = typeof pushPullTypes[number];

export const questions: PushPullQuestion[] = [
  {
    id: 1,
    question: "썸 타는 상대가 연락이 안 오면?",
    options: [
      { text: "먼저 연락한다. 기다리는 거 싫어", scores: { straight: 3, chaos: 1 } },
      { text: "나도 연락 안 한다. 먼저 연락 오면 받아줌", scores: { puller: 3 } },
      { text: "며칠 기다렸다가 자연스럽게 연락", scores: { master: 3 } },
      { text: "연락 안 해놓고 왜 연락 안 하냐고 물어봄", scores: { pusher: 2, chaos: 2 } },
    ],
  },
  {
    id: 2,
    question: "호감 가는 사람이 생기면?",
    options: [
      { text: "바로 좋아한다고 표현! 숨기기 싫어", scores: { straight: 3 } },
      { text: "티 안 내고 관심 있는 척도 안 함", scores: { puller: 3 } },
      { text: "적당히 관심 보이다가 갑자기 안 보임", scores: { master: 2, pusher: 1 } },
      { text: "하루는 엄청 잘해주고 하루는 무관심", scores: { chaos: 3 } },
    ],
  },
  {
    id: 3,
    question: "상대가 나한테 관심 없어 보이면?",
    options: [
      { text: "더 적극적으로 어필한다", scores: { straight: 2, pusher: 2 } },
      { text: "나도 관심 끊는다. 쿨하게", scores: { puller: 3 } },
      { text: "한 발 빼면서 상대 반응 살핌", scores: { master: 3 } },
      { text: "오히려 더 밀어붙이다가 갑자기 연락두절", scores: { chaos: 3 } },
    ],
  },
  {
    id: 4,
    question: "데이트 약속 잡을 때 나의 스타일은?",
    options: [
      { text: "내가 먼저 제안하고 장소도 정함", scores: { straight: 3 } },
      { text: "상대가 먼저 잡을 때까지 기다림", scores: { puller: 3 } },
      { text: "적당히 떠보다가 타이밍 맞춰서 제안", scores: { master: 3 } },
      { text: "잡았다가 취소했다가 다시 잡음", scores: { chaos: 3 } },
    ],
  },
  {
    id: 5,
    question: "카톡 답장 속도는?",
    options: [
      { text: "바로바로! 읽으면 바로 답장", scores: { straight: 3 } },
      { text: "일부러 시간 뒀다가 답장", scores: { puller: 2, master: 1 } },
      { text: "상대 답장 속도에 맞춰서 조절", scores: { master: 3 } },
      { text: "어떨 때는 바로, 어떨 때는 반나절 뒤에", scores: { chaos: 2, puller: 1 } },
    ],
  },
  {
    id: 6,
    question: "썸남/썸녀가 다른 이성 얘기를 하면?",
    options: [
      { text: "솔직하게 질투난다고 말함", scores: { straight: 3 } },
      { text: "나도 다른 이성 얘기 슬쩍 꺼냄", scores: { puller: 2, master: 1 } },
      { text: "신경 안 쓰는 척 하면서 관찰", scores: { master: 3 } },
      { text: "엄청 질투났다가 갑자기 쿨한 척", scores: { chaos: 3 } },
    ],
  },
  {
    id: 7,
    question: "마음에 드는 상대의 SNS에?",
    options: [
      { text: "매번 좋아요 누르고 댓글도 달음", scores: { straight: 3 } },
      { text: "보기만 하고 반응 안 함", scores: { puller: 3 } },
      { text: "가끔씩만 좋아요, 절대 과하게 안 함", scores: { master: 3 } },
      { text: "몰아서 좋아요 눌렀다가 다 취소함", scores: { chaos: 3 } },
    ],
  },
  {
    id: 8,
    question: "상대가 나에게 호감을 보이면?",
    options: [
      { text: "나도 좋으면 바로 표현!", scores: { straight: 3 } },
      { text: "오히려 한 발 빼서 확신하게 만듦", scores: { puller: 3 } },
      { text: "받아주는 것 같으면서 쉽지 않게", scores: { master: 3 } },
      { text: "좋다고 했다가 갑자기 모르겠다고 함", scores: { chaos: 3 } },
    ],
  },
  {
    id: 9,
    question: "데이트 후 먼저 연락하는 편?",
    options: [
      { text: "집 가자마자 바로 연락!", scores: { straight: 3 } },
      { text: "상대가 먼저 할 때까지 절대 안 함", scores: { puller: 3 } },
      { text: "적당한 시간 뒤에 자연스럽게", scores: { master: 3 } },
      { text: "가끔은 먼저, 가끔은 무시 (기분에 따라)", scores: { chaos: 3 } },
    ],
  },
  {
    id: 10,
    question: "밀당에 대한 내 생각은?",
    options: [
      { text: "밀당 싫어. 좋으면 좋다고 해야지", scores: { straight: 3 } },
      { text: "밀당은 기본. 쉽게 주면 안 돼", scores: { puller: 3 } },
      { text: "적절한 밀당은 연애의 묘미", scores: { master: 3 } },
      { text: "밀당하다가 본인도 헷갈림", scores: { chaos: 3 } },
    ],
  },
  {
    id: 11,
    question: "연애할 때 주도권은?",
    options: [
      { text: "나도 상대도 솔직하게, 주도권 없음", scores: { straight: 3 } },
      { text: "무조건 내가 잡아야 함", scores: { puller: 2, master: 1 } },
      { text: "주도권 싸움? 자연스럽게 밸런스 맞춤", scores: { master: 3 } },
      { text: "잡았다 놓았다 반복", scores: { chaos: 3 } },
    ],
  },
  {
    id: 12,
    question: "좋아하는 사람한테 나는?",
    options: [
      { text: "티 팍팍 냄! 숨기기 어려움", scores: { straight: 3 } },
      { text: "티 절대 안 냄. 포커페이스", scores: { puller: 3 } },
      { text: "티 내다가 안 내다가 조절 가능", scores: { master: 3 } },
      { text: "어떨 땐 티나고 어떨 땐 냉정 (조절 불가)", scores: { chaos: 3 } },
    ],
  },
];

export const results: Record<PushPullType, PushPullResult> = {
  straight: {
    type: 'straight',
    title: '직진러버',
    emoji: '🚀',
    percentage: 15,
    description: '밀당? 그게 뭐죠? 당신은 좋으면 좋다고, 싫으면 싫다고 솔직하게 표현하는 타입이에요. 마음을 숨기는 게 어렵고, 상대에게 진심을 다해 다가갑니다. 게임 같은 연애는 싫어요!',
    characteristics: [
      '감정 표현에 솔직함',
      '마음을 숨기지 못함',
      '직접적인 커뮤니케이션',
      '밀당 게임에 약함',
    ],
    strengths: [
      '진심이 전해져서 신뢰감 형성',
      '오해가 적음',
      '상대방이 편안함을 느낌',
      '관계가 투명함',
    ],
    weaknesses: [
      '너무 쉽게 보일 수 있음',
      '밀당하는 상대에게 끌려다닐 수 있음',
      '가끔 부담을 줄 수 있음',
      '설렘을 덜 느끼게 할 수 있음',
    ],
    loveAdvice: [
      '솔직함은 장점이지만, 상대의 속도에 맞춰주는 것도 필요해요',
      '너무 빠르게 다가가면 부담될 수 있으니 천천히',
      '상대의 반응을 보면서 강도 조절하기',
      '당신의 진심을 알아주는 사람을 만나세요',
    ],
    idealPartner: '당신처럼 솔직하고 진심을 표현하는 사람이 잘 맞아요. 밀당러는 피하세요!',
    warning: '밀당 고수를 만나면 일방적으로 끌려다닐 수 있어요. 주의하세요!',
  },
  puller: {
    type: 'puller',
    title: '당기기 전문가',
    emoji: '🎣',
    percentage: 65,
    description: '당신은 "당기기"의 달인이에요! 절대 먼저 다가가지 않고, 상대가 오게 만드는 기술이 뛰어납니다. 쉽게 마음을 주지 않아서 상대가 더 애타게 됩니다.',
    characteristics: [
      '절대 먼저 연락 안 함',
      '마음을 쉽게 안 보여줌',
      '상대가 쫓아오게 만듦',
      '쿨한 이미지 유지',
    ],
    strengths: [
      '상대에게 호기심을 유발',
      '쉽게 보이지 않음',
      '연애 주도권을 잡기 쉬움',
      '상대가 더 노력하게 만듦',
    ],
    weaknesses: [
      '진짜 마음을 전하기 어려움',
      '상대가 포기할 수 있음',
      '관심 없어 보여서 놓칠 수 있음',
      '감정 표현이 서툴러 보임',
    ],
    loveAdvice: [
      '가끔은 먼저 다가가는 것도 필요해요',
      '상대가 지치기 전에 시그널을 주세요',
      '당기기만 하면 상대가 떠날 수 있어요',
      '진심은 표현해야 전해집니다',
    ],
    idealPartner: '적극적으로 다가오는 직진형이 잘 맞아요. 서로 당기기만 하면 안 만나요!',
    warning: '당기기만 하다가 진짜 좋은 인연을 놓칠 수 있어요!',
  },
  pusher: {
    type: 'pusher',
    title: '밀어붙이기 파이터',
    emoji: '🔥',
    percentage: 45,
    description: '당신은 좋으면 밀어붙이는 타입! 적극적인 어필로 상대의 마음을 흔들어놓습니다. 열정적인 구애가 장점이지만, 가끔 밀어붙이다가 역효과가 날 때도 있어요.',
    characteristics: [
      '적극적인 어필',
      '열정적인 표현',
      '먼저 연락하는 편',
      '포기를 모름',
    ],
    strengths: [
      '적극성으로 기회를 만듦',
      '상대에게 확신을 줌',
      '추진력이 있음',
      '관계 진전이 빠름',
    ],
    weaknesses: [
      '부담을 줄 수 있음',
      '상대의 신호를 무시할 때가 있음',
      '거절당해도 안 물러남',
      '스토커로 오해받을 수 있음',
    ],
    loveAdvice: [
      '상대의 반응을 잘 살피세요',
      '밀어붙이기 전에 상대의 관심도를 확인',
      '가끔은 한 발 빼는 여유도 필요해요',
      '상대가 부담스러워하면 물러나기',
    ],
    idealPartner: '수동적이거나 소극적인 사람이 잘 맞아요. 둘 다 밀어붙이면 부딪혀요!',
    warning: '너무 밀어붙이면 스토커로 오해받을 수 있어요. 적당히!',
  },
  master: {
    type: 'master',
    title: '밀당 마스터',
    emoji: '👑',
    percentage: 85,
    description: '당신은 밀당의 진정한 고수! 밀 때 밀고, 당길 때 당기는 완벽한 밸런스를 갖추고 있어요. 상대의 마음을 읽고 타이밍을 잡는 능력이 탁월합니다.',
    characteristics: [
      '완벽한 밀당 밸런스',
      '상대 심리 파악 능력',
      '적절한 타이밍 감각',
      '연애 주도권 조절 가능',
    ],
    strengths: [
      '설렘을 유지시킴',
      '상대가 질리지 않음',
      '연애의 묘미를 알고 있음',
      '관계의 밸런스 유지',
    ],
    weaknesses: [
      '계산적으로 보일 수 있음',
      '진심이 의심받을 수 있음',
      '밀당에 지친 상대에겐 역효과',
      '게임하는 것처럼 느껴질 수 있음',
    ],
    loveAdvice: [
      '밀당도 좋지만 진심을 보여주는 순간도 필요해요',
      '상대가 밀당을 싫어하면 방식을 바꾸세요',
      '진지한 관계에서는 솔직함이 더 중요해요',
      '기술보다 진심이 이깁니다',
    ],
    idealPartner: '밀당을 즐기면서도 진심을 알아주는 사람이 최고예요!',
    warning: '밀당 기술에만 의존하면 진정한 사랑을 놓칠 수 있어요.',
  },
  chaos: {
    type: 'chaos',
    title: '카오스 연애러',
    emoji: '🌀',
    percentage: 35,
    description: '당신의 밀당은 예측불가! 본인도 자신의 행동을 통제하기 어려워요. 어떨 땐 적극적이고, 어떨 땐 완전 무관심... 상대를 혼란에 빠뜨리는 매력(?)이 있습니다.',
    characteristics: [
      '예측불가한 행동',
      '감정에 따라 달라짐',
      '일관성 없는 태도',
      '본인도 헷갈림',
    ],
    strengths: [
      '미스터리한 매력',
      '상대가 궁금해함',
      '질리지 않음',
      '예상 밖의 반전 매력',
    ],
    weaknesses: [
      '상대를 지치게 할 수 있음',
      '신뢰를 쌓기 어려움',
      '진심이 전해지지 않음',
      '불안정한 관계가 될 수 있음',
    ],
    loveAdvice: [
      '자신의 감정을 먼저 파악해보세요',
      '일관된 태도가 신뢰를 쌓아요',
      '밀당보다 소통이 더 중요해요',
      '상대가 혼란스러워하면 솔직하게 말하기',
    ],
    idealPartner: '당신의 카오스를 이해하고 기다려줄 수 있는 포용력 있는 사람!',
    warning: '너무 종잡을 수 없으면 상대가 포기해버릴 수 있어요!',
  },
};

export function calculateResult(answers: number[]): PushPullResult {
  const scores: Record<PushPullType, number> = {
    straight: 0,
    pusher: 0,
    puller: 0,
    master: 0,
    chaos: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as PushPullType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: PushPullType = 'master';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as PushPullType;
    }
  });

  return results[resultType];
}
