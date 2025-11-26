// 친구에서 연인으로 테스트 - 우리 사이, 친구 이상이 될 수 있을까?

export interface FriendToLoverQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface FriendToLoverResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  verdict: string;
  description: string;
  currentStatus: string;
  positiveSignals: string[];
  risks: string[];
  advice: string[];
  actionPlan: string[];
  ifYouConfess: string;
  ifYouDont: string;
  encouragement: string;
}

export const friendToLoverTypes = ['just_friends', 'slight_chance', 'possible', 'likely', 'almost_certain'] as const;
export type FriendToLoverType = typeof friendToLoverTypes[number];

export const questions: FriendToLoverQuestion[] = [
  {
    id: 1,
    question: "그 친구가 나를 볼 때 어떤 느낌이야?",
    options: [
      { text: "완전 편한 친구, 이성으로 안 보는 듯", score: 0 },
      { text: "친구지만 가끔 다르게 보는 것 같기도", score: 1 },
      { text: "뭔가 의식하는 것 같아, 눈빛이 달라", score: 2 },
      { text: "확실히 나를 특별하게 대해", score: 3 },
    ],
  },
  {
    id: 2,
    question: "둘이 있을 때 스킨십이 있어?",
    options: [
      { text: "전혀, 친구 사이로만 지내", score: 0 },
      { text: "가끔 어깨 터치 정도?", score: 1 },
      { text: "꽤 있어, 손잡기나 가까이 붙기도", score: 2 },
      { text: "많아! 거의 연인 같은 스킨십", score: 3 },
    ],
  },
  {
    id: 3,
    question: "둘만의 시간을 얼마나 자주 보내?",
    options: [
      { text: "거의 없어, 항상 다른 친구들이랑 같이", score: 0 },
      { text: "가끔 둘이서 만나기도 해", score: 1 },
      { text: "자주 둘이서 만나, 일부러 시간 맞춰", score: 2 },
      { text: "거의 매일! 연인처럼 자주 만나", score: 3 },
    ],
  },
  {
    id: 4,
    question: "상대가 다른 이성에게 관심 보이면?",
    options: [
      { text: "별 감정 없어, 응원해줌", score: 0 },
      { text: "조금 신경 쓰이긴 해", score: 1 },
      { text: "꽤 불편하고 질투남", score: 2 },
      { text: "너무 싫어! 왜 그쪽을 보는지...", score: 3 },
    ],
  },
  {
    id: 5,
    question: "그 친구가 연애 상담을 요청하면?",
    options: [
      { text: "친구니까 열심히 조언해줌", score: 0 },
      { text: "해주긴 하는데 좀 불편해", score: 1 },
      { text: "하기 싫어, 왜 나한테 그런 얘기를...", score: 2 },
      { text: "상대가 연애 상담 안 해, 나한테만 집중", score: 3 },
    ],
  },
  {
    id: 6,
    question: "주변 친구들은 너희 관계를 어떻게 봐?",
    options: [
      { text: "그냥 친구로 봐", score: 0 },
      { text: "가끔 '뭐 있냐'고 물어보긴 해", score: 1 },
      { text: "다들 사귀는 줄 알아", score: 2 },
      { text: "빨리 사귀라고 푸시함", score: 3 },
    ],
  },
  {
    id: 7,
    question: "그 친구와 연락 빈도는?",
    options: [
      { text: "필요할 때만 가끔", score: 0 },
      { text: "일주일에 몇 번 정도", score: 1 },
      { text: "거의 매일 연락해", score: 2 },
      { text: "하루 종일! 수시로 연락", score: 3 },
    ],
  },
  {
    id: 8,
    question: "그 친구가 힘들 때 누굴 먼저 찾아?",
    options: [
      { text: "다른 사람, 나는 여러 친구 중 하나", score: 0 },
      { text: "가끔 나를 찾기도 해", score: 1 },
      { text: "자주 나를 먼저 찾아", score: 2 },
      { text: "항상 나! 제일 먼저 연락 옴", score: 3 },
    ],
  },
  {
    id: 9,
    question: "그 친구와 미래 얘기를 한 적 있어?",
    options: [
      { text: "없어, 그런 대화 안 해", score: 0 },
      { text: "가끔 '나중에 뭐 하고 살까' 정도", score: 1 },
      { text: "'우리 같이 ~하자' 이런 얘기 해", score: 2 },
      { text: "자주! 마치 함께하는 미래를 그리듯", score: 3 },
    ],
  },
  {
    id: 10,
    question: "그 친구가 나의 연애나 이상형에 관심 가져?",
    options: [
      { text: "별로, 관심 없어 보여", score: 0 },
      { text: "가끔 물어보긴 해", score: 1 },
      { text: "자주 물어보고 궁금해해", score: 2 },
      { text: "아예 안 물어봐, 마치 자기가 그 자리인 듯", score: 3 },
    ],
  },
  {
    id: 11,
    question: "혹시 고백하거나 고백 비슷한 순간이 있었어?",
    options: [
      { text: "전혀, 완전 친구로만 지냄", score: 0 },
      { text: "애매한 순간이 있긴 했어", score: 1 },
      { text: "거의 고백 같은 말을 주고받음", score: 2 },
      { text: "이미 서로 좋아하는 거 아는 상태", score: 3 },
    ],
  },
  {
    id: 12,
    question: "지금 이 친구에 대한 내 감정은?",
    options: [
      { text: "친구로서 좋아, 연애 감정은 글쎄", score: 0 },
      { text: "가끔 설레기도 해", score: 1 },
      { text: "확실히 좋아해, 연애하고 싶어", score: 2 },
      { text: "완전 사랑해! 꼭 사귀고 싶어", score: 3 },
    ],
  },
];

export const results: Record<FriendToLoverType, FriendToLoverResult> = {
  just_friends: {
    type: 'just_friends',
    title: '소중한 친구 사이',
    emoji: '🤝',
    percentage: 15,
    verdict: '지금은 친구로 남는 게 좋을 것 같아요',
    description: '현재 상황에서는 연인으로 발전하기 어려워 보여요. 서로를 이성으로 보기보다는 좋은 친구로 인식하고 있는 것 같아요. 억지로 관계를 바꾸려 하면 소중한 우정도 잃을 수 있어요.',
    currentStatus: '서로에게 좋은 친구',
    positiveSignals: [],
    risks: [
      '고백하면 우정이 어색해질 수 있음',
      '상대가 이성으로 볼 준비가 안 됨',
      '일방적인 감정일 가능성',
    ],
    advice: [
      '지금의 우정을 소중히 여기세요',
      '감정을 정리하는 시간을 가져보세요',
      '다른 인연에도 마음을 열어보세요',
      '억지로 관계를 바꾸려 하지 마세요',
    ],
    actionPlan: [
      '현재 관계 유지하며 지켜보기',
      '다른 이성도 만나보기',
      '감정 정리 시간 갖기',
    ],
    ifYouConfess: '거절당할 확률이 높고, 이후 관계가 어색해질 수 있어요',
    ifYouDont: '좋은 친구로 남아 서로 의지할 수 있어요',
    encouragement: '좋은 친구가 있다는 것도 큰 행운이에요.',
  },
  slight_chance: {
    type: 'slight_chance',
    title: '살짝 가능성 있음',
    emoji: '🌱',
    percentage: 35,
    verdict: '작은 가능성이 있지만 확실하진 않아요',
    description: '완전히 친구로만 보는 건 아닌 것 같지만, 아직 연인으로 발전하기엔 뭔가 부족해요. 더 가까워지는 시간이 필요하거나, 상대의 마음을 좀 더 확인해봐야 해요.',
    currentStatus: '친구 이상 연인 미만?',
    positiveSignals: [
      '완전히 친구로만 보진 않는 것 같음',
      '가끔 특별한 순간이 있음',
    ],
    risks: [
      '아직 확신이 없음',
      '서두르면 역효과',
    ],
    advice: [
      '조급해하지 말고 천천히 다가가세요',
      '더 많은 시간을 함께 보내보세요',
      '상대의 반응을 잘 살펴보세요',
      '분위기가 무르익을 때까지 기다려보세요',
    ],
    actionPlan: [
      '둘만의 시간 더 만들기',
      '살짝 호감 표현해보고 반응 보기',
      '상대 마음 파악하기',
    ],
    ifYouConfess: '아직 이르지만, 분위기 보고 결정해도 돼요',
    ifYouDont: '더 친해질 시간을 벌 수 있어요',
    encouragement: '서두르지 않으면 기회가 올 수 있어요.',
  },
  possible: {
    type: 'possible',
    title: '충분히 가능해!',
    emoji: '💫',
    percentage: 55,
    verdict: '연인이 될 가능성이 있어요!',
    description: '친구 이상의 감정이 오가는 것 같아요. 서로에게 특별한 존재이고, 적절한 타이밍에 마음을 표현하면 좋은 결과가 있을 수 있어요. 다만 아직 확실하진 않으니 신중하게!',
    currentStatus: '썸 가능한 친구 사이',
    positiveSignals: [
      '서로 특별하게 대하는 느낌',
      '둘만의 시간이 많음',
      '주변에서도 눈치챔',
    ],
    risks: [
      '친구 관계가 변할 수 있음',
      '타이밍을 잘 잡아야 함',
    ],
    advice: [
      '분위기를 더 만들어보세요',
      '상대의 호감 신호를 확인하세요',
      '적절한 타이밍을 노려보세요',
      '고백 전 충분히 준비하세요',
    ],
    actionPlan: [
      '로맨틱한 분위기 만들기',
      '호감 표현 더 해보기',
      '적절한 고백 타이밍 찾기',
    ],
    ifYouConfess: '받아줄 확률이 제법 있어요!',
    ifYouDont: '다른 사람에게 뺏길 수 있어요',
    encouragement: '용기 내면 좋은 결과가 있을 거예요!',
  },
  likely: {
    type: 'likely',
    title: '거의 확실해요!',
    emoji: '💕',
    percentage: 75,
    verdict: '서로 좋아하고 있을 확률 높아요!',
    description: '이미 친구 이상의 감정이 확실해 보여요. 둘 다 서로를 특별하게 생각하고, 주변에서도 다 알고 있을 정도예요. 누군가 먼저 용기 내면 바로 연인이 될 수 있어요!',
    currentStatus: '거의 연인이나 다름없는 사이',
    positiveSignals: [
      '서로 특별한 감정이 있음',
      '연인 같은 시간을 보냄',
      '주변에서 응원함',
      '이미 썸이나 다름없음',
    ],
    risks: [],
    advice: [
      '이제 고백해도 괜찮아요!',
      '분위기 좋은 날 마음을 전하세요',
      '더 늦추면 타이밍 놓칠 수 있어요',
      '상대도 기다리고 있을 거예요',
    ],
    actionPlan: [
      '고백 계획 세우기',
      '특별한 날이나 장소 정하기',
      '진심을 담아 마음 전하기',
    ],
    ifYouConfess: '높은 확률로 OK! 연인이 될 수 있어요',
    ifYouDont: '둘 다 답답해하다 타이밍 놓칠 수 있어요',
    encouragement: '지금이 바로 그때예요! 용기 내세요!',
  },
  almost_certain: {
    type: 'almost_certain',
    title: '지금 당장 사귀어!',
    emoji: '💘',
    percentage: 95,
    verdict: '이건 거의 양방향 사랑이에요!',
    description: '아직도 친구라고요? 둘 다 서로를 좋아하는 게 너무 명확해요! 고백만 안 했을 뿐, 이미 연인이나 다름없어요. 오늘 당장 마음을 전하고 정식으로 사귀세요!',
    currentStatus: '사실상 연인, 타이틀만 없는 상태',
    positiveSignals: [
      '서로 완전히 좋아함',
      '이미 연인처럼 지냄',
      '고백만 안 한 상태',
      '모두가 커플로 인식',
    ],
    risks: [],
    advice: [
      '오늘 바로 고백하세요!',
      '이미 다 아는 사실이에요',
      '더 기다릴 이유가 없어요',
      '상대도 기다리고 있어요!',
    ],
    actionPlan: [
      '지금 바로 연락하기',
      '만나서 마음 전하기',
      '정식으로 사귀자고 하기',
    ],
    ifYouConfess: '100% OK! 당장 연인이 될 거예요',
    ifYouDont: '둘 다 답답해서 터질 것 같아요',
    encouragement: '뭘 기다려요! 지금 당장 고백하세요! 💕',
  },
};

export function calculateResult(answers: number[]): FriendToLoverResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: FriendToLoverType;
  
  if (percentage <= 20) {
    resultType = 'just_friends';
  } else if (percentage <= 40) {
    resultType = 'slight_chance';
  } else if (percentage <= 60) {
    resultType = 'possible';
  } else if (percentage <= 80) {
    resultType = 'likely';
  } else {
    resultType = 'almost_certain';
  }

  return results[resultType];
}
