// 패션 성격 테스트 - 옷으로 보는 나의 성격

export interface FashionPersonalityQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface FashionPersonalityResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  styleKeywords: string[];
  characteristics: string[];
  wardrobe: string[];
  colorPalette: string[];
  shoppingStyle: string;
  fashionIcon: string;
  improvement: string;
}

export const fashionTypes = ['minimalist', 'trendsetter', 'classic', 'casual', 'romantic', 'street'] as const;
export type FashionType = typeof fashionTypes[number];

export const questions: FashionPersonalityQuestion[] = [
  {
    id: 1,
    question: "아침에 옷 고르는 시간은?",
    options: [
      { text: "전날 미리 정해둠", scores: { classic: 2, minimalist: 1 } },
      { text: "오래 걸림, 여러 벌 입어봄", scores: { trendsetter: 2, romantic: 1 } },
      { text: "5분 내로 빠르게", scores: { casual: 3 } },
      { text: "그날 기분에 따라 다름", scores: { street: 2, romantic: 1 } },
    ],
  },
  {
    id: 2,
    question: "쇼핑할 때 스타일은?",
    options: [
      { text: "필요한 것만 딱 사고 나옴", scores: { minimalist: 3 } },
      { text: "새로 나온 트렌드 아이템 위주", scores: { trendsetter: 3 } },
      { text: "오래 입을 수 있는 기본템", scores: { classic: 3 } },
      { text: "편하고 실용적인 옷", scores: { casual: 3 } },
    ],
  },
  {
    id: 3,
    question: "선호하는 컬러는?",
    options: [
      { text: "블랙, 화이트, 그레이", scores: { minimalist: 3, classic: 1 } },
      { text: "그 시즌 유행 컬러", scores: { trendsetter: 3 } },
      { text: "베이지, 네이비 등 무난한 색", scores: { classic: 2, casual: 1 } },
      { text: "파스텔, 핑크 등 화사한 색", scores: { romantic: 3 } },
    ],
  },
  {
    id: 4,
    question: "악세서리에 대한 생각은?",
    options: [
      { text: "최소한으로, 심플하게", scores: { minimalist: 3 } },
      { text: "포인트로 적극 활용", scores: { trendsetter: 2, romantic: 1 } },
      { text: "클래식한 시계나 목걸이", scores: { classic: 3 } },
      { text: "귀찮아서 잘 안 함", scores: { casual: 3 } },
    ],
  },
  {
    id: 5,
    question: "편한 날 외출할 때?",
    options: [
      { text: "깔끔한 원피스나 셋업", scores: { minimalist: 2, romantic: 1 } },
      { text: "요즘 유행하는 아이템", scores: { trendsetter: 3 } },
      { text: "청바지에 니트/셔츠", scores: { classic: 2, casual: 1 } },
      { text: "후드티에 조거팬츠", scores: { casual: 3, street: 1 } },
    ],
  },
  {
    id: 6,
    question: "옷장에 가장 많은 아이템은?",
    options: [
      { text: "무지 티, 기본 아이템", scores: { minimalist: 3, casual: 1 } },
      { text: "다양한 패턴, 디자인 옷", scores: { trendsetter: 2, romantic: 1 } },
      { text: "셔츠, 니트, 정장류", scores: { classic: 3 } },
      { text: "맨투맨, 후드, 운동복", scores: { casual: 2, street: 2 } },
    ],
  },
  {
    id: 7,
    question: "신발 스타일 선호는?",
    options: [
      { text: "깔끔한 로퍼나 슬립온", scores: { minimalist: 2, classic: 1 } },
      { text: "그 시즌 잇 슈즈", scores: { trendsetter: 3 } },
      { text: "편한 스니커즈", scores: { casual: 3, street: 1 } },
      { text: "굽 있는 힐이나 부츠", scores: { romantic: 2, classic: 1 } },
    ],
  },
  {
    id: 8,
    question: "패션 정보는 어디서?",
    options: [
      { text: "필요할 때만 찾아봄", scores: { minimalist: 2, casual: 1 } },
      { text: "SNS, 패션 매거진 구독", scores: { trendsetter: 3 } },
      { text: "클래식한 스타일은 변하지 않음", scores: { classic: 3 } },
      { text: "주변 사람들 보고 참고", scores: { romantic: 1, street: 2 } },
    ],
  },
  {
    id: 9,
    question: "중요한 약속이 있을 때?",
    options: [
      { text: "깔끔하고 단정하게", scores: { minimalist: 2, classic: 2 } },
      { text: "센스있고 트렌디하게", scores: { trendsetter: 3 } },
      { text: "예쁘고 화사하게", scores: { romantic: 3 } },
      { text: "편하지만 멋있게", scores: { casual: 2, street: 1 } },
    ],
  },
  {
    id: 10,
    question: "가방 스타일은?",
    options: [
      { text: "작고 미니멀한 가방", scores: { minimalist: 3 } },
      { text: "유행하는 브랜드 가방", scores: { trendsetter: 3 } },
      { text: "클래식한 토트백이나 숄더백", scores: { classic: 3 } },
      { text: "실용적인 백팩이나 크로스백", scores: { casual: 3, street: 1 } },
    ],
  },
  {
    id: 11,
    question: "옷 사면서 가장 중요하게 보는 것?",
    options: [
      { text: "퀄리티와 소재", scores: { classic: 2, minimalist: 1 } },
      { text: "디자인과 트렌드", scores: { trendsetter: 3, romantic: 1 } },
      { text: "착용감과 편안함", scores: { casual: 3 } },
      { text: "가격 대비 스타일", scores: { street: 2, casual: 1 } },
    ],
  },
  {
    id: 12,
    question: "겨울 아우터 선택은?",
    options: [
      { text: "깔끔한 코트", scores: { minimalist: 2, classic: 2 } },
      { text: "그해 유행하는 스타일", scores: { trendsetter: 3 } },
      { text: "따뜻한 롱패딩", scores: { casual: 3 } },
      { text: "개성있는 무스탕이나 가죽", scores: { street: 3, romantic: 1 } },
    ],
  },
];

export const results: Record<FashionType, FashionPersonalityResult> = {
  minimalist: {
    type: 'minimalist',
    title: '미니멀리스트',
    emoji: '⬜',
    description: 'Less is More! 불필요한 건 과감히 빼고 심플함의 정수를 보여주는 당신, 적은 아이템으로 세련미를 극대화합니다.',
    styleKeywords: ['심플', '깔끔', '모던', '단정'],
    characteristics: ['군더더기 없는 스타일', '질 좋은 기본 아이템', '무채색 위주', '실루엣 중시'],
    wardrobe: ['화이트 셔츠', '블랙 팬츠', '캐시미어 니트', '미니멀 원피스'],
    colorPalette: ['블랙', '화이트', '그레이', '베이지'],
    shoppingStyle: '필요한 것만, 퀄리티 좋은 것으로',
    fashionIcon: 'COS, 노비스, 르메르',
    improvement: '가끔은 포인트 컬러로 변화를 줘보세요',
  },
  trendsetter: {
    type: 'trendsetter',
    title: '트렌드세터',
    emoji: '✨',
    description: '유행의 선두주자! 항상 새로운 것에 민감하고 남들보다 한 발 앞서가는 패션 리더입니다.',
    styleKeywords: ['트렌디', '핫', '유니크', '센스'],
    characteristics: ['시즌 트렌드 반영', '새로운 시도', 'SNS 감성', '패션에 투자'],
    wardrobe: ['이번 시즌 잇 아이템', '유행 컬러 옷', '브랜드 협업 제품', '스타일리시한 악세서리'],
    colorPalette: ['시즌 트렌드 컬러', '비비드', '포인트 컬러'],
    shoppingStyle: '새로 나온 것 위주, 빠른 구매',
    fashionIcon: '인플루언서, 셀럽 스타일',
    improvement: '유행을 넘어 자신만의 시그니처를 만들어보세요',
  },
  classic: {
    type: 'classic',
    title: '클래식 엘레강스',
    emoji: '👔',
    description: '유행을 타지 않는 클래식의 정석! 시간이 지나도 변하지 않는 우아함과 품격을 추구합니다.',
    styleKeywords: ['클래식', '우아함', '품격', '타임리스'],
    characteristics: ['오래 입을 수 있는 스타일', '정제된 실루엣', '좋은 소재', '단정한 분위기'],
    wardrobe: ['트렌치코트', '테일러드 재킷', '화이트 셔츠', '미디 스커트'],
    colorPalette: ['네이비', '베이지', '카멜', '버건디'],
    shoppingStyle: '오래 입을 것 위주, 신중한 구매',
    fashionIcon: '오드리 헵번, 버버리',
    improvement: '가끔은 캐주얼하게 믹스해보세요',
  },
  casual: {
    type: 'casual',
    title: '캐주얼 컴포터',
    emoji: '👕',
    description: '편한 게 최고! 스타일보다 편안함을 우선시하는 실용주의자, 자연스러운 멋을 추구합니다.',
    styleKeywords: ['편안함', '실용적', '자연스러움', '무난'],
    characteristics: ['편한 옷 위주', '활동적인 스타일', '꾸민 듯 안 꾸민 듯', '실용성 중시'],
    wardrobe: ['청바지', '맨투맨', '스니커즈', '편한 티셔츠'],
    colorPalette: ['데님', '그레이', '화이트', '카키'],
    shoppingStyle: '편하고 실용적인 것, 가성비 위주',
    fashionIcon: '데일리룩, 놈코어',
    improvement: '가끔은 포멀한 아이템도 시도해보세요',
  },
  romantic: {
    type: 'romantic',
    title: '로맨틱 드리머',
    emoji: '🌸',
    description: '화사하고 여성스러운 스타일의 정석! 사랑스럽고 로맨틱한 분위기를 사랑하는 당신입니다.',
    styleKeywords: ['로맨틱', '여성스러움', '화사함', '사랑스러움'],
    characteristics: ['플로럴 패턴', '프릴, 레이스 디테일', '파스텔 컬러', '페미닌 실루엣'],
    wardrobe: ['플라워 원피스', '블라우스', 'A라인 스커트', '니트 가디건'],
    colorPalette: ['핑크', '라벤더', '아이보리', '스카이블루'],
    shoppingStyle: '예쁜 것 위주, 디테일 체크',
    fashionIcon: '로맨틱 무드, 프렌치 시크',
    improvement: '가끔은 시크한 아이템도 믹스해보세요',
  },
  street: {
    type: 'street',
    title: '스트리트 파이터',
    emoji: '🔥',
    description: '나만의 개성이 중요해! 힙하고 개성 넘치는 스트리트 무드를 즐기는 스타일 반란군입니다.',
    styleKeywords: ['힙', '개성', '스트리트', '오버사이즈'],
    characteristics: ['오버핏 실루엣', '그래픽 프린트', '레이어링', '스니커즈 매치'],
    wardrobe: ['오버사이즈 후드', '와이드 팬츠', '그래픽 티', '한정판 스니커즈'],
    colorPalette: ['블랙', '네온', '카모', '그래피티 컬러'],
    shoppingStyle: '한정판, 콜라보, 개성있는 것 위주',
    fashionIcon: '오프화이트, 슈프림, 스투시',
    improvement: '가끔은 깔끔한 스타일도 시도해보세요',
  },
};

export function calculateResult(answers: number[]): FashionPersonalityResult {
  const scores: Record<FashionType, number> = {
    minimalist: 0,
    trendsetter: 0,
    classic: 0,
    casual: 0,
    romantic: 0,
    street: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as FashionType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: FashionType = 'casual';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as FashionType;
    }
  });

  return results[resultType];
}
