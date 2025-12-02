// spending-personality 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '월급날, 통장에 돈이 들어오면?',
    options: [
      { text: '바로 저축/투자 계좌로 이체', type: 'saver' },
      { text: '일단 위시리스트부터 결제', type: 'flex' },
      { text: '생활비 빼고 남으면 저축', type: 'balance' },
      { text: '어디 갔는지 모르게 사라짐', type: 'yolo' },
    ],
  },
  {
    id: 2,
    text: '친구들이랑 밥 먹을 때 계산 스타일은?',
    options: [
      { text: '"딱 내 거만 계산할게"', type: 'saver' },
      { text: '"오늘 내가 쏜다!"', type: 'flex' },
      { text: '"N빵 하자~"', type: 'balance' },
      { text: '"일단 내가 긁을게" (나중에 받음)', type: 'yolo' },
    ],
  },
  {
    id: 3,
    text: '세일 기간에 쇼핑할 때?',
    options: [
      { text: '필요한 것만 리스트업해서 구매', type: 'saver' },
      { text: '이 기회에 평소 갖고 싶던 것 플렉스', type: 'flex' },
      { text: '세일이니까 조금 더 사도 되지~', type: 'balance' },
      { text: '장바구니 터지도록 담고 결제는 고민 중', type: 'yolo' },
    ],
  },
  {
    id: 4,
    text: '통장 잔고 확인 주기는?',
    options: [
      { text: '매일 체크, 가계부도 씀', type: 'saver' },
      { text: '큰돈 쓸 때만 확인', type: 'flex' },
      { text: '일주일에 한 번 정도', type: 'balance' },
      { text: '무서워서 잘 안 봄', type: 'yolo' },
    ],
  },
  {
    id: 5,
    text: '스트레스 받을 때 소비 패턴은?',
    options: [
      { text: '오히려 아껴서 뿌듯함을 느낌', type: 'saver' },
      { text: '나를 위한 선물 자축 쇼핑', type: 'flex' },
      { text: '적당히 맛있는 거 하나 먹음', type: 'balance' },
      { text: '지름신 강림, 카드값 폭탄', type: 'yolo' },
    ],
  },
  {
    id: 6,
    text: '여행 갈 때 예산 계획은?',
    options: [
      { text: '숙소, 식비, 교통비 다 엑셀로 계획', type: 'saver' },
      { text: '이왕 가는 거 좋은 데서 자고 맛집 가자', type: 'flex' },
      { text: '대충 예산 잡고 유동적으로', type: 'balance' },
      { text: '일단 가고 그때그때 결제', type: 'yolo' },
    ],
  },
  {
    id: 7,
    text: '고가의 물건을 살 때?',
    options: [
      { text: '최소 3개월 고민, 최저가 비교', type: 'saver' },
      { text: '마음에 들면 바로 질러', type: 'flex' },
      { text: '필요하면 사고, 아니면 참음', type: 'balance' },
      { text: '할부로 일단 지르고 생각', type: 'yolo' },
    ],
  },
  {
    id: 8,
    text: '친구가 돈 빌려달라고 하면?',
    options: [
      { text: '금액과 상환 계획 확실히 하고 빌려줌', type: 'saver' },
      { text: '"그냥 줄게, 갚지 마"', type: 'flex' },
      { text: '상황 봐서 빌려주거나 거절', type: 'balance' },
      { text: '나도 없는데... 어떻게든 마련해줌', type: 'yolo' },
    ],
  },
  {
    id: 9,
    text: '배달 앱 사용 패턴은?',
    options: [
      { text: '배달비 아까워서 거의 안 시킴', type: 'saver' },
      { text: '먹고 싶으면 바로 주문', type: 'flex' },
      { text: '쿠폰 있을 때만 시킴', type: 'balance' },
      { text: '밥 해먹기 귀찮아서 매일 배달', type: 'yolo' },
    ],
  },
  {
    id: 10,
    text: '노후 대비에 대한 생각은?',
    options: [
      { text: '이미 연금, 적금, 투자 다 하는 중', type: 'saver' },
      { text: '나중에 뭐 어떻게든 되겠지', type: 'flex' },
      { text: '조금씩 준비하는 중', type: 'balance' },
      { text: '지금 행복한 게 중요해', type: 'yolo' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  description: string;
  strength: string;
  weakness: string;
  tip: string;
  savingRate: string;
}> = {
  saver: {
    title: '철벽 저축러',
    emoji: '🏦',
    description: '티끌 모아 태산! 한 푼도 허투루 쓰지 않는 당신. 미래를 위한 저축과 투자에 철저하며, 계획적인 소비가 몸에 배어 있습니다.',
    strength: '재정 안정성, 노후 대비, 불필요한 소비 차단',
    weakness: '가끔은 너무 아끼느라 현재의 즐거움을 놓칠 수 있어요',
    tip: '가끔은 자신에게 투자하는 것도 좋은 소비입니다. 경험에 쓰는 돈은 아깝지 않아요!',
    savingRate: '월수입의 40% 이상 저축 가능',
  },
  flex: {
    title: '플렉스 마스터',
    emoji: '💎',
    description: '인생은 한 번! 좋은 것을 알아보는 안목과 과감한 소비력을 갖추셨네요. 자신과 주변 사람에게 아낌없이 쓰는 스타일입니다.',
    strength: '삶의 질 향상, 관계 투자, 자기 만족',
    weakness: '소비가 수입을 앞지를 수 있어요. 카드값 주의!',
    tip: '쓰기 전에 "이게 정말 가치 있는 소비인가?" 5초만 생각해보세요.',
    savingRate: '저축보다 투자/소비 비중 높음',
  },
  balance: {
    title: '균형 잡힌 소비러',
    emoji: '⚖️',
    description: '저축과 소비의 밸런스를 잘 맞추는 현명한 타입! 필요할 때 쓰고, 아낄 때 아끼는 합리적인 소비 습관을 가지고 있습니다.',
    strength: '재정 건전성, 유연한 대처, 스트레스 적음',
    weakness: '가끔 우유부단해서 기회를 놓칠 수 있어요',
    tip: '지금 패턴을 유지하면서 자동이체 저축액을 조금씩 늘려보세요!',
    savingRate: '월수입의 20~30% 저축',
  },
  yolo: {
    title: 'YOLO 라이프',
    emoji: '🎉',
    description: '현재를 즐기는 것이 인생! 돈은 쓰라고 있는 거라는 철학의 소유자. 경험과 즐거움에 가치를 두는 자유로운 영혼입니다.',
    strength: '현재 만족도 높음, 경험 풍부, 스트레스 해소',
    weakness: '예상치 못한 지출에 취약, 미래 대비 부족',
    tip: '통장 쪼개기 추천! 놀 돈 따로, 비상금 따로 관리해보세요.',
    savingRate: '저축? 그게 뭐죠?',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    saver: 0,
    flex: 0,
    balance: 0,
    yolo: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  return Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}
