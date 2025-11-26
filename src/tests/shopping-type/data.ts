// 쇼핑 유형 테스트 - 나의 쇼핑 스타일은?

export interface ShoppingTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface ShoppingTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  shoppingStyle: string[];
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  tips: string[];
  dangerZone: string;
  perfectStore: string;
}

export const shoppingTypes = ['planner', 'impulse', 'bargain_hunter', 'brand_lover', 'minimalist', 'researcher', 'social_shopper', 'collector'] as const;
export type ShoppingType = typeof shoppingTypes[number];

export const questions: ShoppingTypeQuestion[] = [
  {
    id: 1,
    question: "쇼핑하러 갈 때 보통 어떻게?",
    options: [
      { text: "살 것 리스트 미리 작성", scores: { planner: 3, minimalist: 1 } },
      { text: "일단 가서 마음에 드는 거 삼", scores: { impulse: 3 } },
      { text: "할인/세일 정보 먼저 체크", scores: { bargain_hunter: 3 } },
      { text: "친구랑 같이 구경하러 감", scores: { social_shopper: 3 } },
    ],
  },
  {
    id: 2,
    question: "예쁜 옷을 발견했을 때?",
    options: [
      { text: "일단 삼, 고민하면 놓침", scores: { impulse: 3 } },
      { text: "다른 매장도 둘러보고 결정", scores: { bargain_hunter: 2, researcher: 1 } },
      { text: "필요한 건지 먼저 생각", scores: { planner: 2, minimalist: 1 } },
      { text: "브랜드/품질 먼저 확인", scores: { brand_lover: 2, researcher: 1 } },
    ],
  },
  {
    id: 3,
    question: "온라인 쇼핑 장바구니 상태는?",
    options: [
      { text: "항상 뭔가 담겨있음", scores: { impulse: 2, collector: 1 } },
      { text: "필요할 때만 담음", scores: { planner: 2, minimalist: 1 } },
      { text: "할인 기다리면서 담아둠", scores: { bargain_hunter: 3 } },
      { text: "리뷰 보면서 비교 담기", scores: { researcher: 3 } },
    ],
  },
  {
    id: 4,
    question: "세일 기간에 나는?",
    options: [
      { text: "이때를 위해 기다렸다!", scores: { bargain_hunter: 3 } },
      { text: "세일이든 아니든 필요하면 삼", scores: { brand_lover: 2, minimalist: 1 } },
      { text: "세일이라 더 많이 사게 됨", scores: { impulse: 3 } },
      { text: "친구들이랑 같이 쇼핑", scores: { social_shopper: 3 } },
    ],
  },
  {
    id: 5,
    question: "같은 종류 물건을 살 때?",
    options: [
      { text: "여러 색상/디자인으로 모음", scores: { collector: 3 } },
      { text: "제일 좋은 거 하나만", scores: { minimalist: 2, brand_lover: 1 } },
      { text: "가성비 좋은 걸로 여러 개", scores: { bargain_hunter: 2, impulse: 1 } },
      { text: "비교 분석 후 최적의 선택", scores: { researcher: 3 } },
    ],
  },
  {
    id: 6,
    question: "쇼핑할 때 가장 중요한 것은?",
    options: [
      { text: "디자인과 감성", scores: { impulse: 2, collector: 1 } },
      { text: "가격 대비 가치", scores: { bargain_hunter: 2, researcher: 1 } },
      { text: "브랜드와 품질", scores: { brand_lover: 3 } },
      { text: "정말 필요한 것인가", scores: { minimalist: 3 } },
    ],
  },
  {
    id: 7,
    question: "쇼핑 후 기분은?",
    options: [
      { text: "뭘 샀든 기분 좋음!", scores: { impulse: 2, social_shopper: 1 } },
      { text: "싸게 사면 뿌듯함", scores: { bargain_hunter: 3 } },
      { text: "꼭 필요한 거 사면 만족", scores: { planner: 2, minimalist: 1 } },
      { text: "컬렉션이 늘어나면 행복", scores: { collector: 3 } },
    ],
  },
  {
    id: 8,
    question: "충동구매 후 느낌은?",
    options: [
      { text: "후회 없음, 인생은 즐겨야지", scores: { impulse: 3 } },
      { text: "좀 후회됨, 다음엔 참아야지", scores: { planner: 2, minimalist: 1 } },
      { text: "더 싸게 살 수 있었는데...", scores: { bargain_hunter: 3 } },
      { text: "이왕 산 거 잘 쓰면 됨", scores: { social_shopper: 2 } },
    ],
  },
  {
    id: 9,
    question: "친구가 쇼핑 의견을 물으면?",
    options: [
      { text: "사! 이쁘면 사는 거야", scores: { impulse: 2, social_shopper: 1 } },
      { text: "진짜 필요해? 있는 거랑 비슷하지 않아?", scores: { minimalist: 3 } },
      { text: "다른 데 더 싼 데 없나 찾아봐", scores: { bargain_hunter: 3 } },
      { text: "리뷰 먼저 찾아보고 결정해", scores: { researcher: 3 } },
    ],
  },
  {
    id: 10,
    question: "옷장/수납 상태는?",
    options: [
      { text: "넘쳐남, 정리 필요", scores: { impulse: 2, collector: 1 } },
      { text: "적당히 정리됨", scores: { planner: 2, brand_lover: 1 } },
      { text: "미니멀, 필요한 것만", scores: { minimalist: 3 } },
      { text: "체계적으로 정리됨", scores: { researcher: 2, collector: 1 } },
    ],
  },
  {
    id: 11,
    question: "새로운 브랜드/제품을 발견하면?",
    options: [
      { text: "신기해서 바로 구매", scores: { impulse: 3 } },
      { text: "리뷰/평점 먼저 검색", scores: { researcher: 3 } },
      { text: "세일할 때 사야지", scores: { bargain_hunter: 3 } },
      { text: "기존에 쓰던 게 더 좋음", scores: { brand_lover: 2, minimalist: 1 } },
    ],
  },
  {
    id: 12,
    question: "쇼핑의 의미는?",
    options: [
      { text: "스트레스 해소, 기분전환", scores: { impulse: 2, social_shopper: 1 } },
      { text: "좋은 물건 득템하는 재미", scores: { bargain_hunter: 2, collector: 1 } },
      { text: "필요한 것 효율적으로 구매", scores: { planner: 2, minimalist: 1 } },
      { text: "좋은 것에 투자", scores: { brand_lover: 3 } },
    ],
  },
];

export const results: Record<ShoppingType, ShoppingTypeResult> = {
  planner: {
    type: 'planner',
    title: '계획형 쇼퍼',
    emoji: '📋',
    subtitle: '리스트 없이는 쇼핑 안 함',
    description: '쇼핑도 계획적으로! 필요한 것을 미리 정하고, 예산 내에서 효율적으로 구매하는 당신. 충동구매와는 거리가 멀어요.',
    shoppingStyle: ['리스트 작성', '예산 계획', '필요한 것만', '효율적 구매'],
    strengths: ['예산 관리', '후회 없는 구매', '정리된 소비'],
    weaknesses: ['좋은 기회 놓칠 수 있음', '유연성 부족'],
    bestFor: ['생필품', '계획된 구매', '큰 지출'],
    tips: ['가끔은 즉흥적으로 즐겨보세요', '새로운 것도 시도해보세요'],
    dangerZone: '계획에 없던 좋은 할인',
    perfectStore: '창고형 마트, 정가제 매장',
  },
  impulse: {
    type: 'impulse',
    title: '충동형 쇼퍼',
    emoji: '💸',
    subtitle: '보면 사고 싶어지는 타입',
    description: '마음에 들면 바로 구매! 쇼핑의 즐거움을 아는 당신. 고민하면 놓친다는 걸 알기에 과감하게 결정하죠.',
    shoppingStyle: ['즉흥 구매', '감정적 결정', '쇼핑이 힐링', '새로운 것 좋아함'],
    strengths: ['결정력', '트렌드 빠름', '쇼핑 즐김'],
    weaknesses: ['예산 초과', '후회할 수 있음', '정리 필요'],
    bestFor: ['스트레스 해소', '트렌드 아이템'],
    tips: ['장바구니에 하루 담아두기', '예산 미리 정해두기'],
    dangerZone: '세일, 신상, 한정판',
    perfectStore: '백화점, 편집샵, 온라인몰',
  },
  bargain_hunter: {
    type: 'bargain_hunter',
    title: '가성비 헌터',
    emoji: '🏷️',
    subtitle: '싸게 사야 직성이 풀림',
    description: '득템의 기쁨을 아는 당신! 할인, 쿠폰, 적립금을 활용해 최저가로 구매하는 스마트 쇼퍼예요.',
    shoppingStyle: ['가격 비교', '할인 사냥', '쿠폰 활용', '세일 기다림'],
    strengths: ['절약 능력', '정보력', '만족도 높음'],
    weaknesses: ['세일에 필요 없는 것도 삼', '시간 소모'],
    bestFor: ['세일 기간', '가격 비교가 쉬운 상품'],
    tips: ['정가에도 가치 있는 것은 사세요', '시간 가치도 고려하세요'],
    dangerZone: '세일, 1+1, 마감 할인',
    perfectStore: '아울렛, 온라인 핫딜, 창고형 마트',
  },
  brand_lover: {
    type: 'brand_lover',
    title: '브랜드 러버',
    emoji: '👜',
    subtitle: '품질과 브랜드에 투자',
    description: '좋은 것을 아는 당신! 가격보다 브랜드와 품질을 중시하고, 오래 쓸 수 있는 좋은 제품에 투자해요.',
    shoppingStyle: ['브랜드 선호', '품질 중시', '가격<가치', '충성 고객'],
    strengths: ['좋은 품질', '오래 사용', '만족도 높음'],
    weaknesses: ['지출 많음', '새 브랜드 시도 꺼림'],
    bestFor: ['장기 사용 제품', '투자 가치 있는 것'],
    tips: ['새로운 브랜드도 열어두세요', '가성비 좋은 것도 있어요'],
    dangerZone: '한정판, 신상, 콜라보',
    perfectStore: '백화점, 브랜드 직영점, 프리미엄 매장',
  },
  minimalist: {
    type: 'minimalist',
    title: '미니멀리스트',
    emoji: '🌿',
    subtitle: '적게 사고 잘 쓴다',
    description: '정말 필요한 것만 사는 당신! 물건보다 경험에 가치를 두고, 미니멀한 라이프를 추구해요.',
    shoppingStyle: ['필요한 것만', '신중한 구매', '양보다 질', '환경 고려'],
    strengths: ['정리된 생활', '절제력', '현명한 소비'],
    weaknesses: ['필요한 것도 안 살 수 있음', '너무 신중함'],
    bestFor: ['꼭 필요한 것', '오래 쓸 것'],
    tips: ['필요한 것은 망설이지 마세요', '가끔은 즐거움을 위한 소비도'],
    dangerZone: '정말 필요한데 미루는 것',
    perfectStore: '무인양품, 미니멀 브랜드',
  },
  researcher: {
    type: 'researcher',
    title: '리서처형',
    emoji: '🔍',
    subtitle: '리뷰 없이는 못 삼',
    description: '구매 전 철저한 조사! 리뷰, 비교, 분석을 통해 최적의 선택을 하는 스마트 쇼퍼예요.',
    shoppingStyle: ['리뷰 분석', '비교 구매', '스펙 체크', '신중함'],
    strengths: ['후회 없는 구매', '정보력', '합리적'],
    weaknesses: ['결정이 오래 걸림', '분석 마비'],
    bestFor: ['전자제품', '고가 제품', '비교가 필요한 것'],
    tips: ['어느 정도에서 결정하세요', '완벽한 건 없어요'],
    dangerZone: '리뷰 너무 많이 보다가 결정 못함',
    perfectStore: '온라인 쇼핑몰, 리뷰 많은 플랫폼',
  },
  social_shopper: {
    type: 'social_shopper',
    title: '소셜 쇼퍼',
    emoji: '👯',
    subtitle: '쇼핑은 함께해야 재밌어',
    description: '쇼핑은 혼자보다 함께! 친구와 의견 나누고, 같이 구경하는 시간이 행복한 당신이에요.',
    shoppingStyle: ['함께 쇼핑', '의견 공유', '추천 중시', '소통'],
    strengths: ['다양한 의견', '즐거운 쇼핑', '추천력'],
    weaknesses: ['영향 받기 쉬움', '시간 오래 걸림'],
    bestFor: ['패션', '선물', '새로운 시도'],
    tips: ['자기 취향도 믿어보세요', '혼자 결정하는 연습도'],
    dangerZone: '친구가 예쁘다고 하면 삼',
    perfectStore: '쇼핑몰, 백화점, 아울렛',
  },
  collector: {
    type: 'collector',
    title: '컬렉터형',
    emoji: '📦',
    subtitle: '수집이 취미',
    description: '좋아하는 것은 모으는 당신! 시리즈, 한정판, 같은 종류의 다양한 버전... 컬렉션을 완성하는 기쁨을 알아요.',
    shoppingStyle: ['시리즈 수집', '한정판 사냥', '같은 종류 모음', '완성 추구'],
    strengths: ['열정', '전문성', '희소가치 이해'],
    weaknesses: ['과소비 위험', '정리 필요', '집착 가능'],
    bestFor: ['취미/덕질', '한정판', '시리즈 제품'],
    tips: ['공간과 예산을 고려하세요', '정리도 수집의 일부예요'],
    dangerZone: '한정판, 시리즈, 콜라보',
    perfectStore: '덕후샵, 한정판 매장, 경매',
  },
};

export function calculateResult(answers: number[]): ShoppingTypeResult {
  const scores: Record<ShoppingType, number> = {
    planner: 0,
    impulse: 0,
    bargain_hunter: 0,
    brand_lover: 0,
    minimalist: 0,
    researcher: 0,
    social_shopper: 0,
    collector: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as ShoppingType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: ShoppingType = 'impulse';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as ShoppingType;
    }
  });

  return results[resultType];
}
