// 연애 성향 테스트

export interface DatingStyleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface DatingStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  inRelationship: string;
  attractedTo: string;
  turnOffs: string;
  datingTips: string[];
  bestMatch: string;
  worstMatch: string;
  celebExample: string;
}

// 연애 유형
export const datingStyleTypes = ['allin', 'push_pull', 'friend', 'independent', 'romantic', 'stable'] as const;
export type DatingStyleType = typeof datingStyleTypes[number];

// 질문 데이터 (15문항)
export const questions: DatingStyleQuestion[] = [
  {
    id: 1,
    question: "썸 타는 상대에게 먼저 연락하는 편인가요?",
    options: [
      { text: "당연하죠! 좋으면 먼저 연락해요", scores: { allin: 2, romantic: 1 } },
      { text: "상대가 먼저 하면 답장은 빨리 해요", scores: { push_pull: 2 } },
      { text: "친구처럼 편하게 연락해요", scores: { friend: 2 } },
      { text: "연락은 필요할 때만 해요", scores: { independent: 2 } },
    ],
  },
  {
    id: 2,
    question: "연인과 하루에 연락을 얼마나 하고 싶나요?",
    options: [
      { text: "수시로! 뭐하는지 항상 궁금해요", scores: { allin: 2 } },
      { text: "아침, 점심, 저녁 정도면 충분해요", scores: { stable: 2 } },
      { text: "서로 편할 때 가끔 하면 돼요", scores: { independent: 2, friend: 1 } },
      { text: "달달한 연락 좋아요, 하지만 적당히", scores: { romantic: 2, push_pull: 1 } },
    ],
  },
  {
    id: 3,
    question: "좋아하는 사람이 생기면 어떻게 하나요?",
    options: [
      { text: "적극적으로 다가가요, 티 팍팍 내죠", scores: { allin: 2, romantic: 1 } },
      { text: "밀당하면서 상대 반응을 살펴요", scores: { push_pull: 2 } },
      { text: "친구로 먼저 가까워지려고 해요", scores: { friend: 2 } },
      { text: "기다려요, 자연스럽게 되겠죠", scores: { independent: 2, stable: 1 } },
    ],
  },
  {
    id: 4,
    question: "연인과의 데이트 스타일은?",
    options: [
      { text: "특별한 이벤트와 서프라이즈!", scores: { romantic: 2, allin: 1 } },
      { text: "집에서 같이 넷플릭스 보기", scores: { stable: 2, friend: 1 } },
      { text: "각자 하고 싶은 거 하다가 만나기", scores: { independent: 2 } },
      { text: "친구들이랑 같이 놀기도 좋아요", scores: { friend: 2 } },
    ],
  },
  {
    id: 5,
    question: "연인에게 '사랑해'를 얼마나 자주 하나요?",
    options: [
      { text: "매일매일 수십 번이요", scores: { allin: 2, romantic: 1 } },
      { text: "가끔 분위기 좋을 때", scores: { push_pull: 2, stable: 1 } },
      { text: "말보다 행동으로 보여줘요", scores: { friend: 2, independent: 1 } },
      { text: "특별한 날에 진심을 담아서", scores: { romantic: 2 } },
    ],
  },
  {
    id: 6,
    question: "연인이 바빠서 연락이 뜸하면?",
    options: [
      { text: "불안하고 계속 신경 쓰여요", scores: { allin: 2 } },
      { text: "나도 일부러 연락 안 해요", scores: { push_pull: 2 } },
      { text: "바쁜가 보다 하고 내 할 일 해요", scores: { independent: 2, stable: 1 } },
      { text: "힘들겠다, 응원 메시지 보내요", scores: { friend: 2, romantic: 1 } },
    ],
  },
  {
    id: 7,
    question: "이상적인 연애 기간 후 결혼한다면?",
    options: [
      { text: "1년 안에도 괜찮아요, 확신이 들면", scores: { allin: 2, romantic: 1 } },
      { text: "3-5년은 만나봐야죠", scores: { stable: 2, friend: 1 } },
      { text: "결혼은 천천히, 급할 거 없어요", scores: { independent: 2 } },
      { text: "운명이면 시간은 상관없어요", scores: { romantic: 2 } },
    ],
  },
  {
    id: 8,
    question: "연인과 싸웠을 때 나는?",
    options: [
      { text: "빨리 화해하고 싶어서 먼저 연락해요", scores: { allin: 2, friend: 1 } },
      { text: "상대가 먼저 사과할 때까지 기다려요", scores: { push_pull: 2 } },
      { text: "시간을 두고 각자 정리한 후 대화해요", scores: { independent: 2, stable: 1 } },
      { text: "대화로 차근차근 풀어나가요", scores: { friend: 2, stable: 1 } },
    ],
  },
  {
    id: 9,
    question: "연인의 이성 친구, 어떻게 생각해요?",
    options: [
      { text: "솔직히 좀 불안하고 신경 쓰여요", scores: { allin: 2 } },
      { text: "믿지만, 적당한 선은 있어야죠", scores: { push_pull: 2, stable: 1 } },
      { text: "친구는 친구죠, 신뢰가 중요해요", scores: { friend: 2, independent: 1 } },
      { text: "나도 이성 친구 있으니까 괜찮아요", scores: { independent: 2 } },
    ],
  },
  {
    id: 10,
    question: "연인에게 가장 바라는 것은?",
    options: [
      { text: "나만 바라봐 주는 것", scores: { allin: 2 } },
      { text: "적당한 긴장감과 설렘", scores: { push_pull: 2, romantic: 1 } },
      { text: "편안함과 신뢰", scores: { friend: 2, stable: 1 } },
      { text: "서로의 성장을 응원하는 것", scores: { independent: 2 } },
    ],
  },
  {
    id: 11,
    question: "기념일은 어떻게 챙기나요?",
    options: [
      { text: "100일, 200일, 매달 다 챙겨요!", scores: { allin: 2, romantic: 1 } },
      { text: "큰 기념일 위주로 특별하게", scores: { romantic: 2, stable: 1 } },
      { text: "기념일보다 평소가 더 중요해요", scores: { friend: 2, independent: 1 } },
      { text: "서로 부담 없이 편하게", scores: { stable: 2 } },
    ],
  },
  {
    id: 12,
    question: "연인과 여행 간다면?",
    options: [
      { text: "로맨틱한 분위기의 여행지", scores: { romantic: 2, allin: 1 } },
      { text: "액티비티 가득한 여행", scores: { friend: 2 } },
      { text: "각자 쉬면서 힐링하는 여행", scores: { independent: 2 } },
      { text: "맛집 투어하며 편하게", scores: { stable: 2, friend: 1 } },
    ],
  },
  {
    id: 13,
    question: "연인의 SNS에 우리 사진을 올리는 것은?",
    options: [
      { text: "당연히 올려야죠! 자랑하고 싶어요", scores: { allin: 2, romantic: 1 } },
      { text: "가끔 예쁜 사진은 올려요", scores: { romantic: 2, stable: 1 } },
      { text: "굳이 올릴 필요 없어요", scores: { independent: 2 } },
      { text: "상대가 원하면 올려요", scores: { friend: 2, push_pull: 1 } },
    ],
  },
  {
    id: 14,
    question: "연애 중 개인 시간은?",
    options: [
      { text: "연인과 함께하는 시간이 제일 좋아요", scores: { allin: 2 } },
      { text: "적당히 개인 시간도 필요해요", scores: { stable: 2, push_pull: 1 } },
      { text: "개인 시간이 꼭 필요해요, 충전해야 해요", scores: { independent: 2 } },
      { text: "친구들 만나는 시간도 중요해요", scores: { friend: 2 } },
    ],
  },
  {
    id: 15,
    question: "이별 후 나는 보통?",
    options: [
      { text: "한동안 힘들어요, 오래 생각나요", scores: { allin: 2, romantic: 1 } },
      { text: "아쉽지만 깔끔하게 정리해요", scores: { push_pull: 2, independent: 1 } },
      { text: "친구로 남을 수 있으면 좋겠어요", scores: { friend: 2 } },
      { text: "빠르게 털고 새 출발해요", scores: { independent: 2, stable: 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<DatingStyleType, DatingStyleResult> = {
  allin: {
    type: 'allin',
    title: '올인형 연애',
    emoji: '💘',
    subtitle: 'All-in Lover',
    description: '사랑에 빠지면 모든 걸 쏟아붓는 당신! 연인이 세상의 중심이 되고, 온 마음을 다해 사랑합니다. 헌신적이고 열정적인 사랑을 하지만, 때로는 과한 집착으로 보일 수 있어요.',
    characteristics: ['헌신적', '열정적', '표현적', '애정 표현 많음', '연인 중심'],
    strengths: ['진심 어린 사랑', '적극적인 애정 표현', '연인을 최우선으로 생각', '기념일 꼼꼼히 챙김'],
    weaknesses: ['집착으로 보일 수 있음', '상대에게 부담', '자기 자신을 잃을 수 있음', '이별 후 힘들어함'],
    inRelationship: '연인에게 올인하며, 매일 연락하고 만나고 싶어합니다. 상대의 모든 것이 궁금하고, 사랑한다는 말을 자주 해요.',
    attractedTo: '자신만큼 열정적으로 사랑해주는 사람, 확실하게 표현하는 사람',
    turnOffs: '무심한 태도, 연락 뜸함, 애매한 관계',
    datingTips: ['나만의 시간과 취미도 가지세요', '상대에게 숨 쉴 공간을 주세요', '사랑도 중요하지만 나 자신도 사랑하세요'],
    bestMatch: '안정형 연애 (stable)',
    worstMatch: '독립형 연애 (independent)',
    celebExample: '드라마 속 여주인공 스타일',
  },
  push_pull: {
    type: 'push_pull',
    title: '밀당형 연애',
    emoji: '🎭',
    subtitle: 'Push & Pull',
    description: '밀고 당기는 연애의 달인! 적당한 긴장감과 설렘을 유지하며 연애의 묘미를 즐깁니다. 전략적으로 연애하지만, 진심이 전달되지 않을 수 있어요.',
    characteristics: ['전략적', '신중함', '긴장감 유지', '감정 조절', '쿨한 척'],
    strengths: ['설렘 유지', '주도권 확보', '감정 조절 능력', '쉽게 휘둘리지 않음'],
    weaknesses: ['진심이 안 보일 수 있음', '게임처럼 느껴질 수 있음', '솔직하지 못함', '피곤해질 수 있음'],
    inRelationship: '적당한 거리를 유지하며 밀당합니다. 쉽게 모든 걸 보여주지 않고, 상대가 더 다가오게 만들어요.',
    attractedTo: '자신에게 쉽게 넘어오지 않는 사람, 매력적이고 자존감 높은 사람',
    turnOffs: '너무 쉽게 넘어오는 사람, 집착하는 사람',
    datingTips: ['때로는 솔직하게 마음을 표현하세요', '밀당에도 한계가 있어요', '진심을 숨기다 후회하지 마세요'],
    bestMatch: '로맨틱형 연애 (romantic)',
    worstMatch: '올인형 연애 (allin)',
    celebExample: '도도한 매력의 연예인 스타일',
  },
  friend: {
    type: 'friend',
    title: '친구형 연애',
    emoji: '🤝',
    subtitle: 'Best Friend Lover',
    description: '연인이자 가장 친한 친구! 편안하고 자연스러운 관계를 추구합니다. 부담 없이 함께할 수 있지만, 설렘이 부족할 수 있어요.',
    characteristics: ['편안함', '자연스러움', '친근함', '유머러스', '부담 없음'],
    strengths: ['편안한 관계', '오래가는 사랑', '대화가 잘 통함', '서로 이해심 높음'],
    weaknesses: ['설렘 부족', '친구로 보일 수 있음', '로맨틱함 부족', '발전 없이 정체될 수 있음'],
    inRelationship: '친구처럼 편하게 지내며, 같이 있으면 즐겁고 웃음이 많아요. 서로의 친구들과도 잘 어울려요.',
    attractedTo: '유머러스하고 함께 있으면 편한 사람, 공통 관심사가 많은 사람',
    turnOffs: '너무 무겁고 진지한 사람, 재미없는 사람',
    datingTips: ['가끔은 특별한 데이트도 해보세요', '연인으로서의 설렘도 필요해요', '친구와 연인의 밸런스를 맞추세요'],
    bestMatch: '안정형 연애 (stable)',
    worstMatch: '로맨틱형 연애 (romantic)',
    celebExample: '개그맨 커플, 절친에서 연인 된 케이스',
  },
  independent: {
    type: 'independent',
    title: '독립형 연애',
    emoji: '🦅',
    subtitle: 'Independent Lover',
    description: '연애도 중요하지만 나의 삶도 중요! 서로의 개인 시간을 존중하며, 독립적인 관계를 추구합니다. 쿨한 연애를 하지만, 무심해 보일 수 있어요.',
    characteristics: ['독립적', '자유로움', '개인주의', '쿨함', '자기 시간 중시'],
    strengths: ['건강한 거리감', '상대 존중', '집착 없음', '자기 발전'],
    weaknesses: ['무심해 보임', '애정 표현 부족', '상대가 외로울 수 있음', '관심 없어 보임'],
    inRelationship: '각자의 시간과 공간을 중요시해요. 매일 연락하지 않아도 괜찮고, 서로 믿으면 된다고 생각해요.',
    attractedTo: '자기 일에 열정적인 사람, 독립적이고 자존감 높은 사람',
    turnOffs: '집착하는 사람, 24시간 붙어있으려는 사람',
    datingTips: ['가끔은 먼저 연락하고 관심 표현하세요', '상대의 애정 욕구도 채워주세요', '혼자가 아닌 함께라는 것을 기억하세요'],
    bestMatch: '독립형 연애 (independent)',
    worstMatch: '올인형 연애 (allin)',
    celebExample: '각자 커리어 열심히 하는 연예인 커플',
  },
  romantic: {
    type: 'romantic',
    title: '로맨틱형 연애',
    emoji: '🌹',
    subtitle: 'Romantic Lover',
    description: '동화 속 사랑을 꿈꾸는 로맨티스트! 특별한 순간과 감동을 중요시하며, 드라마틱한 연애를 원합니다. 로맨틱하지만 현실과 괴리가 있을 수 있어요.',
    characteristics: ['로맨틱', '감성적', '이벤트 좋아함', '분위기 중시', '드라마틱'],
    strengths: ['특별한 추억 만들기', '감동 주기', '분위기 메이커', '기념일 챙기기'],
    weaknesses: ['현실과 동떨어짐', '기대가 높음', '실망하기 쉬움', '일상이 지루할 수 있음'],
    inRelationship: '특별한 데이트, 서프라이즈, 기념일을 중요시해요. 드라마 같은 로맨틱한 순간을 만들고 싶어해요.',
    attractedTo: '로맨틱하고 감성적인 사람, 분위기 있는 사람',
    turnOffs: '무뚝뚝하고 로맨스 없는 사람, 현실적인 것만 중시하는 사람',
    datingTips: ['일상의 소소한 행복도 찾아보세요', '기대치를 조절하세요', '완벽한 연애는 없다는 걸 기억하세요'],
    bestMatch: '밀당형 연애 (push_pull)',
    worstMatch: '친구형 연애 (friend)',
    celebExample: '로맨스 영화 주인공 스타일',
  },
  stable: {
    type: 'stable',
    title: '안정형 연애',
    emoji: '🏠',
    subtitle: 'Stable Lover',
    description: '편안하고 안정적인 사랑을 추구! 오래가는 관계를 원하며, 신뢰와 믿음을 바탕으로 연애합니다. 안정적이지만 지루해질 수 있어요.',
    characteristics: ['안정적', '신뢰', '꾸준함', '책임감', '진지함'],
    strengths: ['오래가는 관계', '믿음직함', '결혼 적합', '흔들리지 않음'],
    weaknesses: ['지루할 수 있음', '변화 부족', '설렘 감소', '매너리즘'],
    inRelationship: '꾸준하고 안정적인 관계를 유지해요. 큰 이벤트보다 일상의 편안함을 중요시하고, 미래를 함께 계획해요.',
    attractedTo: '진지하고 믿음직한 사람, 결혼까지 생각할 수 있는 사람',
    turnOffs: '가벼운 연애를 원하는 사람, 진지하지 않은 사람',
    datingTips: ['가끔은 새로운 시도를 해보세요', '설렘을 유지하려는 노력도 필요해요', '안정 속에서도 변화를 주세요'],
    bestMatch: '올인형 연애 (allin)',
    worstMatch: '밀당형 연애 (push_pull)',
    celebExample: '오래 만난 후 결혼한 연예인 커플',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): DatingStyleResult {
  const scores: Record<DatingStyleType, number> = {
    allin: 0,
    push_pull: 0,
    friend: 0,
    independent: 0,
    romantic: 0,
    stable: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as DatingStyleType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: DatingStyleType = 'stable';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as DatingStyleType;
    }
  });

  return results[resultType];
}
