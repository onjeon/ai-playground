// 야식 유형 테스트 - 밤에 뭘 먹을까?

export interface MidnightSnackQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MidnightSnackResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  favoriteSnacks: string[];
  snackingStyle: string;
  personality: string[];
  perfectNight: string;
  recommendations: string[];
  calorieWarning: string;
  hashtags: string[];
}

export const snackTypes = ['chicken_lover', 'ramen_addict', 'sweet_tooth', 'delivery_king', 'convenience_hunter', 'healthy_snacker', 'homecook', 'random_craver'] as const;
export type SnackType = typeof snackTypes[number];

export const questions: MidnightSnackQuestion[] = [
  {
    id: 1,
    question: "밤 11시, 갑자기 배가 고프다. 가장 먼저 떠오르는 건?",
    options: [
      { text: "치킨이 먹고 싶어...", scores: { chicken_lover: 3 } },
      { text: "라면 끓여야지", scores: { ramen_addict: 3 } },
      { text: "아이스크림이나 과자", scores: { sweet_tooth: 3 } },
      { text: "배달앱부터 켠다", scores: { delivery_king: 3 } },
    ],
  },
  {
    id: 2,
    question: "야식 먹을 때 음료 선택은?",
    options: [
      { text: "맥주 or 소주", scores: { chicken_lover: 2, delivery_king: 1 } },
      { text: "콜라 or 사이다", scores: { ramen_addict: 2, chicken_lover: 1 } },
      { text: "우유 or 차", scores: { sweet_tooth: 2, healthy_snacker: 1 } },
      { text: "그냥 물", scores: { healthy_snacker: 2, homecook: 1 } },
    ],
  },
  {
    id: 3,
    question: "야식으로 자주 시키는 것은?",
    options: [
      { text: "치킨 (후라이드/양념/간장)", scores: { chicken_lover: 3 } },
      { text: "족발/보쌈", scores: { delivery_king: 2, chicken_lover: 1 } },
      { text: "피자/버거", scores: { delivery_king: 2, random_craver: 1 } },
      { text: "분식류 (떡볶이, 순대 등)", scores: { convenience_hunter: 2, ramen_addict: 1 } },
    ],
  },
  {
    id: 4,
    question: "야식 먹는 시간대는 주로?",
    options: [
      { text: "밤 10-11시", scores: { healthy_snacker: 2, homecook: 1 } },
      { text: "자정 전후", scores: { chicken_lover: 2, delivery_king: 1 } },
      { text: "새벽 1-2시", scores: { ramen_addict: 2, random_craver: 1 } },
      { text: "시간 상관없이 배고플 때", scores: { random_craver: 3 } },
    ],
  },
  {
    id: 5,
    question: "편의점 야식 루틴이 있다면?",
    options: [
      { text: "삼각김밥 + 컵라면 국물", scores: { convenience_hunter: 3 } },
      { text: "과자 + 아이스크림", scores: { sweet_tooth: 3 } },
      { text: "도시락 + 맥주", scores: { convenience_hunter: 2, delivery_king: 1 } },
      { text: "편의점 잘 안 가요", scores: { homecook: 2, delivery_king: 1 } },
    ],
  },
  {
    id: 6,
    question: "야식 먹으면서 하는 것은?",
    options: [
      { text: "유튜브/넷플릭스 시청", scores: { chicken_lover: 2, delivery_king: 1 } },
      { text: "게임", scores: { ramen_addict: 2, convenience_hunter: 1 } },
      { text: "인스타/SNS", scores: { sweet_tooth: 2, random_craver: 1 } },
      { text: "그냥 먹는 것에 집중", scores: { homecook: 2, healthy_snacker: 1 } },
    ],
  },
  {
    id: 7,
    question: "라면 끓일 때 스타일은?",
    options: [
      { text: "계란 + 파 + 치즈 풀코스", scores: { ramen_addict: 3 } },
      { text: "그냥 기본으로", scores: { convenience_hunter: 2, ramen_addict: 1 } },
      { text: "라면은 배달로 먹어요", scores: { delivery_king: 2 } },
      { text: "라면 잘 안 먹어요", scores: { healthy_snacker: 2, sweet_tooth: 1 } },
    ],
  },
  {
    id: 8,
    question: "야식 후 죄책감은?",
    options: [
      { text: "후회 없음, 행복했으니까", scores: { chicken_lover: 2, random_craver: 1 } },
      { text: "먹을 때만 행복, 다음 날 후회", scores: { delivery_king: 2, ramen_addict: 1 } },
      { text: "건강 생각하면 좀 찔림", scores: { healthy_snacker: 2, homecook: 1 } },
      { text: "적당히 먹어서 괜찮아요", scores: { healthy_snacker: 2, homecook: 1 } },
    ],
  },
  {
    id: 9,
    question: "친구들이랑 야식 먹을 때 나는?",
    options: [
      { text: "메뉴 정하는 주도자", scores: { chicken_lover: 2, delivery_king: 1 } },
      { text: "아무거나 다 좋아요", scores: { random_craver: 3 } },
      { text: "건강한 거 먹자고 함", scores: { healthy_snacker: 3 } },
      { text: "내가 직접 해줄게", scores: { homecook: 3 } },
    ],
  },
  {
    id: 10,
    question: "야식 먹는 빈도는?",
    options: [
      { text: "거의 매일", scores: { ramen_addict: 2, random_craver: 2 } },
      { text: "주 3-4회", scores: { chicken_lover: 2, delivery_king: 1 } },
      { text: "주 1-2회", scores: { convenience_hunter: 2, homecook: 1 } },
      { text: "가끔, 한 달에 몇 번", scores: { healthy_snacker: 3 } },
    ],
  },
  {
    id: 11,
    question: "야식 금지령이 내려진다면?",
    options: [
      { text: "못 참아, 몰래 먹음", scores: { chicken_lover: 2, ramen_addict: 2 } },
      { text: "건강해지겠다 생각하고 참음", scores: { healthy_snacker: 3 } },
      { text: "대체 간식을 찾음", scores: { sweet_tooth: 2, convenience_hunter: 1 } },
      { text: "직접 건강한 야식을 만듦", scores: { homecook: 3 } },
    ],
  },
  {
    id: 12,
    question: "가장 기억에 남는 야식 경험은?",
    options: [
      { text: "새벽 치맥 파티", scores: { chicken_lover: 3 } },
      { text: "혼자 라면 끓여먹던 밤", scores: { ramen_addict: 3 } },
      { text: "편의점 털이", scores: { convenience_hunter: 3 } },
      { text: "직접 만든 야식", scores: { homecook: 3 } },
    ],
  },
];

export const results: Record<SnackType, MidnightSnackResult> = {
  chicken_lover: {
    type: 'chicken_lover',
    title: '치킨 러버',
    emoji: '🍗',
    subtitle: '치킨은 국밥이다',
    description: '야식의 정석, 치킨을 사랑하는 당신! 바삭한 후라이드, 달콤한 양념, 짭짤한 간장까지... 치킨이라면 못 참는 진정한 치킨 러버예요.',
    favoriteSnacks: ['후라이드 치킨', '양념 치킨', '간장 치킨', '치킨 무'],
    snackingStyle: '맥주와 함께하는 치킨 파티',
    personality: ['확실한 취향', '파티 좋아함', '사교적', '선택 장애 없음'],
    perfectNight: '맥주 + 치킨 + 넷플릭스',
    recommendations: ['교촌 허니콤보', 'BBQ 황금올리브', '굽네 고추바사삭'],
    calorieWarning: '치킨 한 마리 = 약 2000kcal... 하지만 맛있으니까!',
    hashtags: ['#치킨러버', '#치맥', '#야식은치킨', '#배달음식'],
  },
  ramen_addict: {
    type: 'ramen_addict',
    title: '라면 중독자',
    emoji: '🍜',
    subtitle: '라면은 영혼의 음식',
    description: '새벽에 끓여먹는 라면의 맛을 아는 당신! 계란, 파, 치즈를 넣어 나만의 레시피로 완성하는 라면 마스터예요.',
    favoriteSnacks: ['신라면', '진라면', '불닭볶음면', '너구리'],
    snackingStyle: '직접 끓여먹는 따끈한 한 그릇',
    personality: ['자취 마스터', '실용적', '혼밥 능숙', '요리에 관심'],
    perfectNight: '라면 + 김치 + 계란 + 유튜브',
    recommendations: ['짜파구리', '라볶이', '치즈라면', '만두라면'],
    calorieWarning: '라면 한 봉지 = 약 500kcal, 국물까지 = 나트륨 주의!',
    hashtags: ['#라면러버', '#야식라면', '#자취생', '#라면레시피'],
  },
  sweet_tooth: {
    type: 'sweet_tooth',
    title: '단짠단짠러',
    emoji: '🍰',
    subtitle: '밤엔 달콤한 게 최고',
    description: '야식도 달콤하게! 아이스크림, 과자, 초콜릿... 달콤한 것으로 하루를 마무리하는 당신은 진정한 당충전러예요.',
    favoriteSnacks: ['아이스크림', '초콜릿', '과자', '케이크'],
    snackingStyle: '달콤한 것으로 기분전환',
    personality: ['감성적', '스트레스를 단 것으로 해소', '귀여운 것 좋아함'],
    perfectNight: '아이스크림 + 과자 + 드라마',
    recommendations: ['하겐다즈', '오레오', '빼빼로', '초코파이'],
    calorieWarning: '당분 과다 섭취 주의! 하지만 가끔은 괜찮아요 🍫',
    hashtags: ['#단짠단짠', '#야식디저트', '#아이스크림', '#달달'],
  },
  delivery_king: {
    type: 'delivery_king',
    title: '배달의 민족',
    emoji: '🛵',
    subtitle: '배달앱이 제2의 밥',
    description: '야식은 역시 배달이지! 배달앱을 열면 끝없는 선택지... 오늘은 뭘 시킬까 고민하는 시간도 행복한 당신이에요.',
    favoriteSnacks: ['치킨', '피자', '족발', '중식'],
    snackingStyle: '다양한 배달 음식 탐험',
    personality: ['다양한 취향', '선택 장애', '트렌드에 민감', '리뷰 중시'],
    perfectNight: '배달앱 + 쿠폰 + 다양한 음식',
    recommendations: ['배민 할인', '쿠팡이츠 와우', '요기요 슈퍼클럽'],
    calorieWarning: '배달비 + 칼로리 = 두 배의 부담... 하지만 편하니까!',
    hashtags: ['#배달음식', '#야식배달', '#배민', '#먹스타그램'],
  },
  convenience_hunter: {
    type: 'convenience_hunter',
    title: '편의점 헌터',
    emoji: '🏪',
    subtitle: '편의점은 야식 천국',
    description: '새벽 편의점의 낭만을 아는 당신! 삼각김밥, 컵라면, 도시락... 편의점에서 찾는 소소한 행복이 있죠.',
    favoriteSnacks: ['삼각김밥', '컵라면', '도시락', '핫바'],
    snackingStyle: '빠르고 간편한 편의점 야식',
    personality: ['실용적', '독립적', '야행성', '가성비 추구'],
    perfectNight: '삼각김밥 + 컵라면 국물 + 편의점 앞 벤치',
    recommendations: ['불닭삼각김밥', 'CU 도시락', '핫바', '편의점 맥주'],
    calorieWarning: '나트륨 주의! 하지만 가끔은 이게 최고야',
    hashtags: ['#편의점야식', '#삼각김밥', '#새벽편의점', '#자취생'],
  },
  healthy_snacker: {
    type: 'healthy_snacker',
    title: '건강 야식러',
    emoji: '🥗',
    subtitle: '야식도 건강하게',
    description: '야식도 건강을 생각하는 당신! 과일, 요거트, 견과류... 건강한 선택으로 죄책감 없이 즐기는 스마트한 야식러예요.',
    favoriteSnacks: ['과일', '요거트', '견과류', '샐러드'],
    snackingStyle: '건강하고 가벼운 야식',
    personality: ['자기관리', '건강 의식', '절제력', '계획적'],
    perfectNight: '과일 + 요거트 + 허브티',
    recommendations: ['그릭요거트', '제철 과일', '무염 견과류', '닭가슴살'],
    calorieWarning: '칼로리 걱정 NO! 건강하게 즐기세요 💪',
    hashtags: ['#건강야식', '#다이어트', '#헬시', '#자기관리'],
  },
  homecook: {
    type: 'homecook',
    title: '홈쿡 야식러',
    emoji: '👨‍🍳',
    subtitle: '야식도 직접 만든다',
    description: '야식도 직접 요리하는 당신! 간단한 볶음밥부터 특별한 야식까지, 손맛으로 만드는 나만의 레시피가 있죠.',
    favoriteSnacks: ['볶음밥', '계란요리', '라면+α', '간단 안주'],
    snackingStyle: '직접 만드는 정성 야식',
    personality: ['요리에 관심', '창의적', '알뜰', '손재주'],
    perfectNight: '직접 만든 야식 + 유튜브 쿡방',
    recommendations: ['계란 볶음밥', '참치마요 덮밥', '김치전', '명란 파스타'],
    calorieWarning: '직접 만들면 조절 가능! 하지만 맛있어서 더 먹게 됨',
    hashtags: ['#홈쿡', '#야식요리', '#자취요리', '#요리스타그램'],
  },
  random_craver: {
    type: 'random_craver',
    title: '랜덤 식탐러',
    emoji: '🎲',
    subtitle: '오늘은 뭐가 땡기지?',
    description: '매일 다른 게 땡기는 당신! 어제는 치킨, 오늘은 라면, 내일은 피자... 예측 불가능한 식탐의 소유자예요.',
    favoriteSnacks: ['그때그때 다름', '랜덤', '다양한 음식'],
    snackingStyle: '기분 따라 변하는 랜덤 야식',
    personality: ['변덕스러움', '호기심', '모험적', '새로운 것 좋아함'],
    perfectNight: '오늘 뭐 먹지? 고민하다 결정',
    recommendations: ['그날 땡기는 거', '새로운 메뉴 도전', '친구 추천'],
    calorieWarning: '뭘 먹든 야식은 야식... 적당히!',
    hashtags: ['#야식뭐먹지', '#선택장애', '#랜덤야식', '#먹스타그램'],
  },
};

export function calculateResult(answers: number[]): MidnightSnackResult {
  const scores: Record<SnackType, number> = {
    chicken_lover: 0,
    ramen_addict: 0,
    sweet_tooth: 0,
    delivery_king: 0,
    convenience_hunter: 0,
    healthy_snacker: 0,
    homecook: 0,
    random_craver: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as SnackType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: SnackType = 'random_craver';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as SnackType;
    }
  });

  return results[resultType];
}
