// 음식 취향 테스트 - 먹는 것으로 보는 나의 성격

export interface FoodTasteQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface FoodTasteResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  foodPreferences: string[];
  characteristics: string[];
  recommendedFoods: string[];
  avoidFoods: string[];
  eatingStyle: string;
  personality: string;
  diningTip: string;
}

export const foodTypes = ['adventurer', 'comfort_seeker', 'health_conscious', 'social_eater', 'picky', 'gourmet'] as const;
export type FoodType = typeof foodTypes[number];

export const questions: FoodTasteQuestion[] = [
  {
    id: 1,
    question: "새로운 음식점에 갔을 때?",
    options: [
      { text: "새로운 메뉴 도전!", scores: { adventurer: 3 } },
      { text: "후기 많은 인기 메뉴로", scores: { social_eater: 2 } },
      { text: "익숙한 종류 중에서 선택", scores: { comfort_seeker: 2, picky: 1 } },
      { text: "성분/칼로리 확인 후 결정", scores: { health_conscious: 3 } },
    ],
  },
  {
    id: 2,
    question: "맵기 선호도는?",
    options: [
      { text: "매운 거 좋아! 도전해봐야지", scores: { adventurer: 2 } },
      { text: "적당히, 기본 맵기로", scores: { comfort_seeker: 2 } },
      { text: "맵찔이... 안 맵게 해주세요", scores: { picky: 2, health_conscious: 1 } },
      { text: "상대방에 맞춤", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 3,
    question: "점심 메뉴 결정 방법은?",
    options: [
      { text: "오늘 뭐 먹지~ 새로운 거!", scores: { adventurer: 3 } },
      { text: "늘 먹던 거로 빠르게", scores: { comfort_seeker: 3 } },
      { text: "건강한 옵션 찾기", scores: { health_conscious: 3 } },
      { text: "같이 먹는 사람 취향 따라", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 4,
    question: "음식에서 가장 중요한 것은?",
    options: [
      { text: "맛! 맛있으면 됐어", scores: { adventurer: 2, gourmet: 1 } },
      { text: "양과 가성비", scores: { comfort_seeker: 2 } },
      { text: "건강과 영양", scores: { health_conscious: 3 } },
      { text: "분위기와 함께하는 사람", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 5,
    question: "해외여행 가면 음식은?",
    options: [
      { text: "현지 음식 다 도전!", scores: { adventurer: 3 } },
      { text: "익숙한 음식점 찾아가기", scores: { comfort_seeker: 2, picky: 1 } },
      { text: "유명 맛집 리스트 완벽 정복", scores: { gourmet: 3 } },
      { text: "현지인 추천 받아서", scores: { social_eater: 2, adventurer: 1 } },
    ],
  },
  {
    id: 6,
    question: "싫어하는 음식이 나왔을 때?",
    options: [
      { text: "그래도 한 번 먹어봄", scores: { adventurer: 2 } },
      { text: "솔직히 안 먹음", scores: { picky: 3 } },
      { text: "맛있는 것만 골라 먹음", scores: { comfort_seeker: 2 } },
      { text: "분위기상 조금은 먹음", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 7,
    question: "외식할 때 고르는 메뉴는?",
    options: [
      { text: "처음 보는 특이한 메뉴", scores: { adventurer: 3 } },
      { text: "늘 먹던 안전한 메뉴", scores: { comfort_seeker: 3, picky: 1 } },
      { text: "샐러드, 건강식 위주", scores: { health_conscious: 3 } },
      { text: "다같이 나눠먹을 메뉴", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 8,
    question: "맛집을 고를 때 기준은?",
    options: [
      { text: "새로운 경험, 특이한 컨셉", scores: { adventurer: 3 } },
      { text: "후기 좋고 검증된 곳", scores: { comfort_seeker: 2, gourmet: 1 } },
      { text: "건강한 재료, 깔끔한 곳", scores: { health_conscious: 3 } },
      { text: "분위기 좋고 대화하기 좋은 곳", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 9,
    question: "배달 음식 주문할 때?",
    options: [
      { text: "새로 생긴 가게 도전", scores: { adventurer: 3 } },
      { text: "단골집 늘 시키던 거", scores: { comfort_seeker: 3 } },
      { text: "건강식 배달 앱 이용", scores: { health_conscious: 3 } },
      { text: "같이 먹을 사람 취향 맞춰서", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 10,
    question: "음식 사진 찍는 스타일은?",
    options: [
      { text: "특이한 비주얼이면 찍음", scores: { adventurer: 2 } },
      { text: "거의 안 찍음, 바로 먹음", scores: { comfort_seeker: 2, picky: 1 } },
      { text: "건강식/예쁜 플레이팅이면", scores: { health_conscious: 2, gourmet: 1 } },
      { text: "같이 먹는 사람이랑 인증샷", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 11,
    question: "식사 시간에 대한 생각은?",
    options: [
      { text: "맛있는 거 찾아 시간 투자 OK", scores: { adventurer: 2, gourmet: 2 } },
      { text: "빠르게 먹고 할 일 하기", scores: { comfort_seeker: 2 } },
      { text: "정해진 시간에 규칙적으로", scores: { health_conscious: 3 } },
      { text: "사람들과 함께하는 시간", scores: { social_eater: 3 } },
    ],
  },
  {
    id: 12,
    question: "음식 취향 한 마디로?",
    options: [
      { text: "뭐든 도전! 일단 먹어봐야 알지", scores: { adventurer: 3 } },
      { text: "검증된 맛집, 익숙한 맛", scores: { comfort_seeker: 3 } },
      { text: "건강하고 깔끔한 음식", scores: { health_conscious: 3 } },
      { text: "누구와 먹느냐가 중요", scores: { social_eater: 3 } },
    ],
  },
];

export const results: Record<FoodType, FoodTasteResult> = {
  adventurer: {
    type: 'adventurer',
    title: '미식 모험가',
    emoji: '🌍',
    description: '새로운 맛의 세계를 탐험하는 미식 모험가! 못 먹어본 음식은 무조건 도전, 맛있는 건 뭐든 환영입니다!',
    foodPreferences: ['이국적인 음식', '새로운 메뉴', '퓨전 요리', '특이한 식재료'],
    characteristics: ['호기심 왕', '도전정신', '열린 마음', '모험적'],
    recommendedFoods: ['태국 음식', '인도 커리', '멕시칸 타코', '베트남 쌀국수'],
    avoidFoods: ['늘 먹던 음식 (재미없음)'],
    eatingStyle: '일단 시켜보고, 맛있으면 탐구',
    personality: '삶에서도 새로운 경험을 두려워하지 않는 오픈마인드',
    diningTip: '가끔은 검증된 맛집도 좋아요, 실패도 줄이면서',
  },
  comfort_seeker: {
    type: 'comfort_seeker',
    title: '안정의 미식가',
    emoji: '🏠',
    description: '검증된 맛, 익숙한 음식이 최고! 모험보다는 확실한 만족을 추구하는 실속파 미식가입니다.',
    foodPreferences: ['익숙한 한식', '단골집 메뉴', '어릴 적 추억의 맛', '엄마표 음식'],
    characteristics: ['안정 추구', '실용적', '신중함', '만족도 중시'],
    recommendedFoods: ['김치찌개', '된장찌개', '비빔밥', '제육볶음'],
    avoidFoods: ['처음 보는 음식', '너무 특이한 재료'],
    eatingStyle: '늘 먹던 거로, 빠르고 확실하게',
    personality: '삶에서도 안정과 확실함을 추구하는 실속파',
    diningTip: '가끔은 새로운 음식도 도전해보세요, 새 단골이 생길지도!',
  },
  health_conscious: {
    type: 'health_conscious',
    title: '건강 지킴이',
    emoji: '🥗',
    description: '먹는 것이 곧 나! 건강과 영양을 최우선으로 생각하는 웰빙 라이프 실천자입니다.',
    foodPreferences: ['유기농', '저염식', '채소 위주', '프로틴'],
    characteristics: ['자기관리 철저', '건강 중시', '꼼꼼함', '절제력'],
    recommendedFoods: ['샐러드', '그릴드 치킨', '현미밥', '아보카도 토스트'],
    avoidFoods: ['패스트푸드', '인스턴트', '고칼로리 음식'],
    eatingStyle: '영양소 체크, 칼로리 계산',
    personality: '삶에서도 자기관리와 규칙적인 생활을 중시',
    diningTip: '가끔은 치팅데이로 먹고 싶은 것도 드세요!',
  },
  social_eater: {
    type: 'social_eater',
    title: '함께하는 식도락가',
    emoji: '👥',
    description: '음식보다 사람! 누구와 먹느냐가 가장 중요한 소셜 다이너, 함께하면 뭐든 맛있어요!',
    foodPreferences: ['나눠먹기 좋은 음식', '분위기 좋은 레스토랑', '대화하기 좋은 곳', '회식 메뉴'],
    characteristics: ['사교적', '배려심', '분위기 중시', '유연함'],
    recommendedFoods: ['삼겹살', '치킨', '피자', '샤브샤브'],
    avoidFoods: ['혼밥 전용 메뉴 (재미없음)'],
    eatingStyle: '함께 고르고, 나눠먹고, 대화하며',
    personality: '삶에서도 관계와 소통을 중요시하는 사교형',
    diningTip: '가끔은 나만을 위한 음식도 즐겨보세요!',
  },
  picky: {
    type: 'picky',
    title: '신중한 미식가',
    emoji: '🤔',
    description: '까다로운 게 아니라 확실한 거야! 자신의 취향을 정확히 아는 신중한 미식가입니다.',
    foodPreferences: ['검증된 메뉴만', '특정 좋아하는 음식', '익숙한 맛', '깔끔한 음식'],
    characteristics: ['명확한 취향', '신중함', '일관성', '확실한 기준'],
    recommendedFoods: ['좋아하는 것 위주', '단골집 메뉴', '실패 없는 선택'],
    avoidFoods: ['처음 보는 음식', '이상한 식재료', '강한 향신료'],
    eatingStyle: '좋아하는 것만, 확실하게',
    personality: '삶에서도 자신만의 기준이 명확한 사람',
    diningTip: '가끔은 추천 메뉴도 도전해보세요, 의외의 발견이!',
  },
  gourmet: {
    type: 'gourmet',
    title: '정통 미식가',
    emoji: '🍽️',
    description: '맛의 본질을 아는 진정한 미식가! 좋은 재료, 정성스러운 요리, 완벽한 맛을 추구합니다.',
    foodPreferences: ['파인다이닝', '제철 재료', '셰프 추천', '퀄리티'],
    characteristics: ['섬세한 미각', '품질 중시', '지식 풍부', '감상 능력'],
    recommendedFoods: ['오마카세', '코스요리', '로컬 맛집', '숨은 명소'],
    avoidFoods: ['체인점', '인스턴트', '저품질 음식'],
    eatingStyle: '좋은 것을, 제대로, 음미하며',
    personality: '삶에서도 품질과 디테일을 중요시하는 사람',
    diningTip: '가끔은 B급 음식의 매력도 즐겨보세요!',
  },
};

export function calculateResult(answers: number[]): FoodTasteResult {
  const scores: Record<FoodType, number> = {
    adventurer: 0,
    comfort_seeker: 0,
    health_conscious: 0,
    social_eater: 0,
    picky: 0,
    gourmet: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as FoodType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: FoodType = 'comfort_seeker';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as FoodType;
    }
  });

  return results[resultType];
}
