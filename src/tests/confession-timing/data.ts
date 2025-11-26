// 고백 타이밍 테스트 - 지금이 고백할 때일까?

export interface ConfessionTimingQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface ConfessionTimingResult {
  type: string;
  title: string;
  emoji: string;
  timing: string;
  percentage: number;
  description: string;
  currentSituation: string[];
  positiveSignals: string[];
  concerningPoints: string[];
  advice: string[];
  confessionTips: string[];
  whatToPrepare: string[];
  alternativeActions: string[];
  encouragement: string;
}

export const confessionTimingTypes = ['too_early', 'wait_more', 'almost', 'good_timing', 'perfect'] as const;
export type ConfessionTimingType = typeof confessionTimingTypes[number];

export const questions: ConfessionTimingQuestion[] = [
  {
    id: 1,
    question: "상대방과 얼마나 자주 연락해?",
    options: [
      { text: "거의 안 해, 가끔 필요할 때만", score: 0 },
      { text: "일주일에 1-2번 정도", score: 1 },
      { text: "매일 또는 거의 매일 연락해", score: 2 },
      { text: "수시로! 연락 끊기는 날이 없어", score: 3 },
    ],
  },
  {
    id: 2,
    question: "둘이서만 만난 적 있어?",
    options: [
      { text: "없어, 항상 다른 사람들이랑 같이", score: 0 },
      { text: "한두 번 정도 있어", score: 1 },
      { text: "여러 번 둘이서 만났어", score: 2 },
      { text: "자주 둘이서 만나! 거의 데이트 수준", score: 3 },
    ],
  },
  {
    id: 3,
    question: "상대방이 너한테 개인적인 이야기를 해?",
    options: [
      { text: "전혀, 표면적인 대화만 해", score: 0 },
      { text: "가끔 가벼운 고민 정도", score: 1 },
      { text: "꽤 깊은 이야기도 나눠", score: 2 },
      { text: "뭐든 다 얘기해! 비밀도 공유해", score: 3 },
    ],
  },
  {
    id: 4,
    question: "상대방이 너한테 호감이 있어 보여?",
    options: [
      { text: "전혀 모르겠어, 관심 없어 보여", score: 0 },
      { text: "글쎄... 확실히 모르겠어", score: 1 },
      { text: "어느 정도 관심은 있어 보여", score: 2 },
      { text: "확실히 호감 있어 보여!", score: 3 },
    ],
  },
  {
    id: 5,
    question: "상대방의 연애 상태를 알고 있어?",
    options: [
      { text: "몰라, 연애 상태 파악 안 됨", score: 0 },
      { text: "솔로인 것 같긴 한데 확실치 않아", score: 1 },
      { text: "솔로야, 연애할 생각도 있다고 해", score: 2 },
      { text: "솔로이고, 나한테 관심 있는 것 같아", score: 3 },
    ],
  },
  {
    id: 6,
    question: "최근에 둘 사이에 특별한 순간이 있었어?",
    options: [
      { text: "없어, 그냥 평범해", score: 0 },
      { text: "가끔 좋은 순간이 있긴 해", score: 1 },
      { text: "꽤 있어! 분위기 좋았던 적 여러 번", score: 2 },
      { text: "자주! 거의 썸 타는 느낌이야", score: 3 },
    ],
  },
  {
    id: 7,
    question: "상대방이 너의 연애 상태에 관심을 보여?",
    options: [
      { text: "전혀, 관심 없어 보여", score: 0 },
      { text: "한두 번 물어본 적 있어", score: 1 },
      { text: "종종 물어보거나 신경 쓰는 것 같아", score: 2 },
      { text: "자주 물어보고 누구 만나는지 궁금해해", score: 3 },
    ],
  },
  {
    id: 8,
    question: "스킨십이나 가까운 거리에 있을 때 상대 반응은?",
    options: [
      { text: "거리를 두거나 불편해해", score: 0 },
      { text: "특별한 반응 없이 자연스러워", score: 1 },
      { text: "좋아하는 것 같아, 피하지 않아", score: 2 },
      { text: "적극적으로 가까이 오거나 스킨십해", score: 3 },
    ],
  },
  {
    id: 9,
    question: "주변 사람들이 너희 관계를 어떻게 봐?",
    options: [
      { text: "그냥 친구/아는 사이로 봐", score: 0 },
      { text: "좀 친해 보인다고 하긴 해", score: 1 },
      { text: "뭔가 있는 것 같다고 해", score: 2 },
      { text: "다들 사귀는 줄 알아! 케미 좋대", score: 3 },
    ],
  },
  {
    id: 10,
    question: "상대방이 미래 계획에 너를 포함시켜 말한 적 있어?",
    options: [
      { text: "없어, 그런 얘기 안 해", score: 0 },
      { text: "가끔 '우리'라고 할 때가 있어", score: 1 },
      { text: "'나중에 같이 ~하자'는 얘기를 해", score: 2 },
      { text: "자주! 함께하는 미래를 상상하는 것 같아", score: 3 },
    ],
  },
  {
    id: 11,
    question: "너의 고백 준비 상태는?",
    options: [
      { text: "아직 마음 정리가 안 됐어", score: 0 },
      { text: "좋아하는 건 확실한데 용기가 없어", score: 1 },
      { text: "준비됐어, 기회만 있으면!", score: 2 },
      { text: "완전 준비됨! 언제든 할 수 있어", score: 3 },
    ],
  },
  {
    id: 12,
    question: "고백 후 관계가 어떻게 될 것 같아?",
    options: [
      { text: "거절당하면 사이가 어색해질까 봐 무서워", score: 0 },
      { text: "어떻게 될지 모르겠어, 불안해", score: 1 },
      { text: "거절당해도 친구로 남을 수 있을 것 같아", score: 2 },
      { text: "받아줄 것 같아! 아니어도 후회 없어", score: 3 },
    ],
  },
];

export const results: Record<ConfessionTimingType, ConfessionTimingResult> = {
  too_early: {
    type: 'too_early',
    title: '아직 이르지 않을까?',
    emoji: '⏳',
    timing: '기다려',
    percentage: 20,
    description: '솔직히 지금 고백하기엔 좀 이른 것 같아요. 아직 상대방과의 친밀도가 충분하지 않거나, 상대의 마음을 알기 어려운 상황이에요. 성급한 고백은 오히려 관계를 어색하게 만들 수 있어요.',
    currentSituation: [
      '아직 서로 잘 모르는 단계',
      '호감 신호가 명확하지 않음',
      '둘만의 시간이 부족함',
    ],
    positiveSignals: [],
    concerningPoints: [
      '상대의 마음을 파악하기 어려움',
      '관계가 아직 얕은 편',
      '고백 후 어색해질 위험',
    ],
    advice: [
      '먼저 친해지는 데 집중하세요',
      '자연스러운 만남을 늘려가세요',
      '상대를 더 알아가는 시간을 가지세요',
      '호감 신호를 살펴보세요',
    ],
    confessionTips: ['지금은 고백보다 관계 발전에 집중하세요'],
    whatToPrepare: [
      '공통 관심사 찾기',
      '자연스럽게 대화 늘리기',
      '둘만의 만남 기회 만들기',
    ],
    alternativeActions: [
      '가벼운 대화로 친밀도 높이기',
      '관심사 기반 약속 잡아보기',
      '천천히 거리 좁히기',
    ],
    encouragement: '서두르지 마세요. 좋은 관계는 시간이 필요해요!',
  },
  wait_more: {
    type: 'wait_more',
    title: '조금만 더 기다려봐',
    emoji: '🤔',
    timing: '잠시 대기',
    percentage: 40,
    description: '아직 확신이 서지 않는 상황이에요. 가능성은 있지만, 조금 더 시간을 두고 관계를 발전시킨 후 고백하는 게 좋을 것 같아요. 지금보다 확실한 신호가 보일 때까지 기다려보세요.',
    currentSituation: [
      '친해지고 있는 단계',
      '호감이 있을 수도 있는 상황',
      '아직 확신이 없음',
    ],
    positiveSignals: [
      '대화가 나쁘지 않게 이어짐',
      '가끔 좋은 신호가 보임',
    ],
    concerningPoints: [
      '상대의 마음이 불확실',
      '좀 더 친해져야 할 것 같음',
    ],
    advice: [
      '조금 더 가까워지는 시간을 가지세요',
      '살짝 호감 표현을 해보고 반응을 봐요',
      '둘만의 시간을 더 만들어보세요',
      '상대의 반응을 잘 살펴보세요',
    ],
    confessionTips: [
      '가벼운 호감 표현부터 시작해보세요',
      '반응이 좋으면 한 달 내 고백 고려',
    ],
    whatToPrepare: [
      '특별한 추억 만들기',
      '호감 표현 연습하기',
      '고백 장소/방법 생각해두기',
    ],
    alternativeActions: [
      '"너랑 있으면 좋아" 같은 표현하기',
      '특별한 데이트 계획하기',
      '상대 반응 테스트해보기',
    ],
    encouragement: '서서히 다가가고 있어요. 좋은 신호가 보이면 용기 내세요!',
  },
  almost: {
    type: 'almost',
    title: '거의 다 왔어!',
    emoji: '💓',
    timing: '곧 가능',
    percentage: 60,
    description: '분위기가 꽤 무르익었어요! 조금만 더 확실한 신호를 확인하고 고백해도 좋을 것 같아요. 특별한 순간을 만들어서 고백하면 성공 확률이 높아질 거예요.',
    currentSituation: [
      '썸 타는 중인 것 같음',
      '호감이 있어 보임',
      '분위기 좋은 순간들이 있음',
    ],
    positiveSignals: [
      '자주 연락하고 만남',
      '서로에 대해 신경 쓰는 듯',
      '둘만의 시간이 자연스러움',
    ],
    concerningPoints: [
      '100% 확신은 아직 없음',
      '거절 가능성도 있음',
    ],
    advice: [
      '분위기 좋은 타이밍을 노려보세요',
      '특별한 이벤트를 계획해보세요',
      '진심을 담아 준비하세요',
      '용기를 내볼 때가 됐어요!',
    ],
    confessionTips: [
      '분위기 좋은 장소에서 고백하기',
      '너무 무겁지 않게 자연스럽게',
      '2주 내로 결심하는 게 좋아요',
    ],
    whatToPrepare: [
      '고백 장소 물색하기',
      '하고 싶은 말 정리하기',
      '특별한 날 활용하기 (기념일, 이벤트 등)',
    ],
    alternativeActions: [
      '로맨틱한 데이트 계획하기',
      '분위기 좋을 때 자연스럽게 고백',
      '선물과 함께 마음 전하기',
    ],
    encouragement: '거의 다 왔어요! 용기만 있으면 돼요!',
  },
  good_timing: {
    type: 'good_timing',
    title: '지금이 좋은 타이밍!',
    emoji: '💕',
    timing: '고백 적기',
    percentage: 80,
    description: '고백하기 딱 좋은 타이밍이에요! 상대방도 당신에게 호감이 있어 보이고, 분위기도 무르익었어요. 너무 오래 끌면 오히려 타이밍을 놓칠 수 있어요. 용기 내세요!',
    currentSituation: [
      '확실한 썸 단계',
      '서로 호감 있음',
      '주변에서도 느낄 정도',
    ],
    positiveSignals: [
      '상대가 나를 특별하게 대함',
      '자주 연락하고 만남',
      '둘만의 시간을 즐김',
      '미래 얘기도 함',
    ],
    concerningPoints: [],
    advice: [
      '이번 주 또는 이번 달 안에 고백하세요!',
      '진심을 담아 마음을 전하세요',
      '너무 고민하지 말고 행동하세요',
      '상대도 기다리고 있을 수 있어요',
    ],
    confessionTips: [
      '솔직하게 마음을 표현하세요',
      '진심이 느껴지게 눈을 보고 말하세요',
      '부담스럽지 않은 분위기에서',
      '거창하지 않아도 괜찮아요',
    ],
    whatToPrepare: [
      '하고 싶은 말 마음속으로 정리',
      '둘만의 시간 만들기',
      '떨려도 자신감 있게!',
    ],
    alternativeActions: [
      '오늘 당장 만나자고 하기',
      '특별한 장소에서 고백',
      '자연스러운 대화 중에 고백',
    ],
    encouragement: '지금이에요! 용기 내면 좋은 결과가 있을 거예요!',
  },
  perfect: {
    type: 'perfect',
    title: '지금 당장 고백해!',
    emoji: '💘',
    timing: '바로 지금!',
    percentage: 95,
    description: '이건 거의 확실해요! 상대방도 당신을 좋아하고 있을 가능성이 매우 높아요. 더 이상 미루면 타이밍을 놓치거나 다른 사람한테 뺏길 수 있어요. 오늘 당장 마음을 전하세요!',
    currentSituation: [
      '거의 연인 수준의 관계',
      '서로 확실히 좋아함',
      '고백만 안 한 상태',
    ],
    positiveSignals: [
      '거의 매일 연락',
      '둘만의 시간이 많음',
      '스킨십도 자연스러움',
      '주변에서 사귄다고 생각함',
    ],
    concerningPoints: [],
    advice: [
      '지금 당장 연락하세요!',
      '오늘 만나서 고백하세요!',
      '더 이상 미루지 마세요!',
      '상대도 기다리고 있어요!',
    ],
    confessionTips: [
      '복잡하게 생각하지 말고 바로 말하세요',
      '"너 좋아해, 사귀자"면 충분해요',
      '진심을 담아 눈을 보고 말하세요',
      '상대 반응? 당연히 OK일 거예요!',
    ],
    whatToPrepare: [
      '용기만 있으면 돼요!',
      '지금 바로 연락하세요',
      '만날 장소만 정하면 끝',
    ],
    alternativeActions: [
      '지금 당장 전화해서 만나자고 하기',
      '오늘 저녁에 고백하기',
      '더 이상 고민하지 말고 행동!',
    ],
    encouragement: '이미 성공한 거나 다름없어요! 지금 바로 고백하세요!',
  },
};

export function calculateResult(answers: number[]): ConfessionTimingResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: ConfessionTimingType;
  
  if (percentage <= 25) {
    resultType = 'too_early';
  } else if (percentage <= 45) {
    resultType = 'wait_more';
  } else if (percentage <= 65) {
    resultType = 'almost';
  } else if (percentage <= 85) {
    resultType = 'good_timing';
  } else {
    resultType = 'perfect';
  }

  return results[resultType];
}
