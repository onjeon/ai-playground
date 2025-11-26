// 짝사랑 성공률 테스트 - 이 사랑, 이루어질까?

export interface CrushSuccessQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface CrushSuccessResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  verdict: string;
  description: string;
  positiveSignals: string[];
  warningSignals: string[];
  currentSituation: string;
  advice: string[];
  actionPlan: string[];
  doList: string[];
  dontList: string[];
  encouragement: string;
}

export const crushSuccessTypes = ['very_low', 'low', 'medium', 'high', 'very_high'] as const;
export type CrushSuccessType = typeof crushSuccessTypes[number];

export const questions: CrushSuccessQuestion[] = [
  {
    id: 1,
    question: "그 사람이 나를 볼 때 눈빛이 어때?",
    options: [
      { text: "눈도 안 마주쳐, 존재감 없는 듯", score: 0 },
      { text: "그냥 평범하게 봐, 특별함 없음", score: 1 },
      { text: "가끔 눈이 마주치면 웃어줘", score: 2 },
      { text: "자주 쳐다보고, 눈 마주치면 피하기도 해", score: 3 },
    ],
  },
  {
    id: 2,
    question: "둘이 대화할 때 그 사람의 반응은?",
    options: [
      { text: "대화 자체를 별로 안 해, 피하는 느낌", score: 0 },
      { text: "필요할 때만 짧게 대화해", score: 1 },
      { text: "대화하면 잘 들어주고 반응해줘", score: 2 },
      { text: "먼저 말 걸기도 하고, 대화가 길어져", score: 3 },
    ],
  },
  {
    id: 3,
    question: "그 사람이 나한테 먼저 연락하거나 말 건 적 있어?",
    options: [
      { text: "한 번도 없어, 내가 항상 먼저", score: 0 },
      { text: "거의 없어, 1-2번 정도?", score: 1 },
      { text: "가끔 있어, 종종 먼저 연락해", score: 2 },
      { text: "자주 먼저 연락하거나 말 걸어!", score: 3 },
    ],
  },
  {
    id: 4,
    question: "내가 부탁하면 들어주는 편이야?",
    options: [
      { text: "거절당한 적이 많아", score: 0 },
      { text: "상황에 따라 다르고 별로 적극적이진 않아", score: 1 },
      { text: "웬만하면 들어줘, 친절해", score: 2 },
      { text: "뭐든 해주려고 해! 적극적이야", score: 3 },
    ],
  },
  {
    id: 5,
    question: "둘만 있을 때와 다른 사람 있을 때, 그 사람 태도가 달라?",
    options: [
      { text: "똑같아, 관심 없는 듯", score: 0 },
      { text: "별 차이 없어", score: 1 },
      { text: "둘이 있으면 좀 더 친근해", score: 2 },
      { text: "확실히 달라! 둘만 있으면 더 잘해줘", score: 3 },
    ],
  },
  {
    id: 6,
    question: "그 사람이 내 SNS에 반응하는 편이야?",
    options: [
      { text: "팔로우도 안 해 / 반응 전무", score: 0 },
      { text: "팔로우는 하는데 반응 거의 없어", score: 1 },
      { text: "가끔 좋아요 누르거나 댓글 달아", score: 2 },
      { text: "자주 반응하고, 스토리 답장도 해!", score: 3 },
    ],
  },
  {
    id: 7,
    question: "그 사람이 나에 대해 개인적인 것들을 기억해?",
    options: [
      { text: "내 이름도 잘 기억 못 할 것 같아", score: 0 },
      { text: "기본적인 것만 알아", score: 1 },
      { text: "내가 말한 것들 꽤 기억해", score: 2 },
      { text: "사소한 것까지 기억하고 물어봐!", score: 3 },
    ],
  },
  {
    id: 8,
    question: "그 사람의 연애 상태는?",
    options: [
      { text: "애인 있어 / 썸 타는 중", score: 0 },
      { text: "잘 모르겠어, 확인 못 함", score: 1 },
      { text: "솔로인 것 같아", score: 2 },
      { text: "확실히 솔로! 연애에 관심 있대", score: 3 },
    ],
  },
  {
    id: 9,
    question: "둘이 함께하는 시간이 있어?",
    options: [
      { text: "전혀 없어, 만들 기회도 없어", score: 0 },
      { text: "어쩌다 우연히 마주치는 정도", score: 1 },
      { text: "같은 모임이나 일로 종종 만나", score: 2 },
      { text: "자주 만나! 둘이서 약속 잡기도 해", score: 3 },
    ],
  },
  {
    id: 10,
    question: "그 사람이 나한테 신체 접촉(어깨 터치 등)하는 편이야?",
    options: [
      { text: "전혀 없어, 거리 두는 느낌", score: 0 },
      { text: "별로 없어, 특별한 접촉 없음", score: 1 },
      { text: "가끔 자연스럽게 터치해", score: 2 },
      { text: "자주! 친근하게 접촉하는 편이야", score: 3 },
    ],
  },
  {
    id: 11,
    question: "주변 사람들 반응은 어때?",
    options: [
      { text: "가망 없다고 하거나 관심 없어 보인대", score: 0 },
      { text: "글쎄... 잘 모르겠대", score: 1 },
      { text: "괜찮은 것 같다고, 해볼 만하대", score: 2 },
      { text: "확실히 호감 있어 보인대! 응원해줘", score: 3 },
    ],
  },
  {
    id: 12,
    question: "그 사람이 내 앞에서 긴장하거나 어색해하는 느낌이 있어?",
    options: [
      { text: "전혀, 너무 편해 보여 (관심 없는 듯)", score: 0 },
      { text: "그냥 평범해, 특별한 반응 없어", score: 1 },
      { text: "조금 어색해하거나 신경 쓰는 것 같아", score: 2 },
      { text: "확실히 긴장하거나 나를 의식해!", score: 3 },
    ],
  },
];

export const results: Record<CrushSuccessType, CrushSuccessResult> = {
  very_low: {
    type: 'very_low',
    title: '현실 점검 필요',
    emoji: '😢',
    percentage: 15,
    verdict: '솔직히... 쉽지 않아 보여요',
    description: '안타깝지만, 현재 상대방에게서 호감의 신호를 찾기 어려워요. 관심이 없거나, 이미 마음에 둔 사람이 있을 가능성이 높아요. 마음 정리를 고려해볼 시점이에요.',
    positiveSignals: [],
    warningSignals: [
      '대화 시도 시 반응이 미지근함',
      '먼저 연락이 오지 않음',
      '둘만의 시간을 만들 기회가 없음',
      '관심의 표현을 전혀 느끼지 못함',
    ],
    currentSituation: '일방적인 감정일 가능성이 높아요',
    advice: [
      '객관적으로 상황을 바라보세요',
      '더 매달리면 상처만 커질 수 있어요',
      '새로운 인연에 마음을 열어보세요',
      '자존감을 지키는 게 중요해요',
    ],
    actionPlan: [
      '마음 정리할 시간을 가져보세요',
      '친구들과 시간을 보내며 환기하세요',
      '새로운 취미나 활동을 시작해보세요',
    ],
    doList: [
      '나 자신에게 집중하기',
      '객관적인 친구 의견 듣기',
      '새로운 만남에 열린 마음 갖기',
    ],
    dontList: [
      '집착하거나 매달리기',
      '상대 SNS 스토킹하기',
      '억지로 기회 만들려 하기',
    ],
    encouragement: '이 사람이 전부가 아니에요. 당신을 진심으로 좋아할 사람이 분명 있어요.',
  },
  low: {
    type: 'low',
    title: '아직 친구 수준',
    emoji: '🤔',
    percentage: 35,
    verdict: '호감보다는 친구로 보는 것 같아요',
    description: '현재는 특별한 감정 없이 평범한 관계로 보여요. 아예 가망이 없는 건 아니지만, 상대방의 마음을 돌리려면 꽤 많은 노력이 필요해요.',
    positiveSignals: [
      '대화는 나쁘지 않게 이어짐',
      '기본적인 친절함은 있음',
    ],
    warningSignals: [
      '특별히 신경 쓰는 느낌이 없음',
      '연애 대상으로 안 볼 수 있음',
    ],
    currentSituation: '그냥 아는 사람 또는 친구 정도로 인식',
    advice: [
      '차별화된 매력을 어필해보세요',
      '더 자주 마주칠 기회를 만드세요',
      '공통 관심사로 친해지는 게 먼저예요',
      '너무 티 내지 말고 자연스럽게 다가가세요',
    ],
    actionPlan: [
      '공통 관심사 찾아서 대화 늘리기',
      '자연스러운 만남 기회 만들기',
      '나만의 매력 포인트 어필하기',
    ],
    doList: [
      '자연스럽게 친해지기',
      '상대방 관심사 파악하기',
      '매력적인 모습 보여주기',
    ],
    dontList: [
      '성급하게 고백하기',
      '너무 티 나게 좋아하기',
      '집착하는 모습 보이기',
    ],
    encouragement: '아직 기회는 있어요! 전략적으로 접근해보세요.',
  },
  medium: {
    type: 'medium',
    title: '가능성 반반',
    emoji: '🤞',
    percentage: 55,
    verdict: '관심은 있는 것 같은데... 확실하진 않아요',
    description: '어느 정도 호감이 있을 수도 있어요. 아직 연애 감정인지 친구로서의 호감인지 불분명하지만, 잘하면 발전할 가능성이 있어요!',
    positiveSignals: [
      '대화가 잘 통하는 편',
      '내 말에 반응을 잘 해줌',
      '기억해주는 것들이 있음',
    ],
    warningSignals: [
      '아직 명확한 신호가 없음',
      '나만 좋아하는 건지 헷갈림',
    ],
    currentSituation: '관심 있는 친구 또는 썸 초기 단계',
    advice: [
      '조금 더 적극적으로 다가가보세요',
      '둘만의 시간을 만들어보세요',
      '호감을 살짝 표현해보고 반응을 봐요',
      '밀당보다 진심이 통할 수 있어요',
    ],
    actionPlan: [
      '자연스럽게 둘만의 약속 잡아보기',
      '관심 있다는 신호 살짝 보내기',
      '상대 반응 잘 살피기',
    ],
    doList: [
      '적극적으로 대화하기',
      '둘만의 추억 만들기',
      '좋아하는 마음 살짝 표현하기',
    ],
    dontList: [
      '너무 오래 눈치만 보기',
      '복잡한 밀당 시도하기',
      '친구들에게 소문내기',
    ],
    encouragement: '용기 내면 좋은 결과가 있을 수 있어요! 타이밍을 잘 잡아보세요.',
  },
  high: {
    type: 'high',
    title: '맥락 좋아요!',
    emoji: '💕',
    percentage: 75,
    verdict: '상대방도 호감 있을 확률 높아요!',
    description: '여러 신호들을 봤을 때, 상대방도 당신에게 관심이 있는 것 같아요! 지금이 적극적으로 다가갈 타이밍이에요. 너무 늦추면 기회를 놓칠 수 있어요.',
    positiveSignals: [
      '자주 눈이 마주침',
      '대화할 때 적극적으로 반응',
      '나에 대해 기억을 잘 함',
      '먼저 연락하거나 말을 검',
    ],
    warningSignals: [],
    currentSituation: '썸 또는 호감 단계, 고백하면 성공할 확률 높음',
    advice: [
      '지금이 고백 타이밍이에요!',
      '너무 오래 끌지 마세요',
      '분위기 좋을 때 마음을 전하세요',
      '상대도 기다리고 있을 수 있어요',
    ],
    actionPlan: [
      '둘만의 특별한 시간 만들기',
      '분위기 좋은 곳에서 고백 준비',
      '진심을 담아 마음 전하기',
    ],
    doList: [
      '용기 내서 고백하기',
      '분위기 좋은 데이트 기획',
      '진심으로 마음 표현하기',
    ],
    dontList: [
      '너무 오래 미루기',
      '확답 없이 애매하게 끌기',
      '친구존 굳어지기 전에 액션!',
    ],
    encouragement: '충분히 가능성 있어요! 용기 내세요, 응원할게요!',
  },
  very_high: {
    type: 'very_high',
    title: '거의 확실해요!',
    emoji: '💘',
    percentage: 90,
    verdict: '이건 거의 양방향 호감이에요!',
    description: '축하해요! 상대방도 당신을 좋아할 가능성이 매우 높아요. 신호들이 확실하고, 서로에게 특별한 감정이 있어 보여요. 고백하면 성공할 확률 매우 높아요!',
    positiveSignals: [
      '확실히 나를 의식하고 신경 씀',
      '둘만의 시간을 만들려고 함',
      '주변에서도 느낄 정도의 케미',
      '사소한 것까지 기억하고 챙겨줌',
    ],
    warningSignals: [],
    currentSituation: '진한 썸 단계, 거의 사귀기 직전',
    advice: [
      '지금 당장 고백하세요!',
      '이미 마음이 통한 것 같아요',
      '상대도 기다리고 있을 거예요',
      '더 이상 미루지 마세요!',
    ],
    actionPlan: [
      '특별하고 로맨틱한 고백 준비',
      '진심을 담아 마음 전하기',
      '오늘 당장 약속 잡기!',
    ],
    doList: [
      '바로 고백하기!',
      '로맨틱하게 마음 전하기',
      '자신감 있게 다가가기',
    ],
    dontList: [
      '이 이상 미루기',
      '쓸데없이 눈치 보기',
      '다른 사람한테 뺏기기',
    ],
    encouragement: '이건 진짜예요! 지금 고백하면 연인이 될 수 있어요!',
  },
};

export function calculateResult(answers: number[]): CrushSuccessResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: CrushSuccessType;
  
  if (percentage <= 20) {
    resultType = 'very_low';
  } else if (percentage <= 40) {
    resultType = 'low';
  } else if (percentage <= 60) {
    resultType = 'medium';
  } else if (percentage <= 80) {
    resultType = 'high';
  } else {
    resultType = 'very_high';
  }

  return results[resultType];
}
