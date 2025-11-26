// 이상형 테스트 질문 및 결과 데이터

export interface IdealTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface IdealTypeResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  personality: string[];
  attractedTo: string[];
  turnOffs: string[];
  datingStyle: string;
  bestMatch: string;
  worstMatch: string;
  advice: string;
  celebExample: string;
}

// 이상형 유형
export const idealTypes = [
  'warm-reliable', 'mysterious-charismatic', 'cute-lovely', 'smart-witty',
  'passionate-intense', 'gentle-caring', 'adventurous-free', 'elegant-classy'
] as const;
export type IdealType = typeof idealTypes[number];

// 질문 데이터 (12문항)
export const questions: IdealTypeQuestion[] = [
  {
    id: 1,
    question: "이상적인 첫 데이트는?",
    options: [
      { text: "분위기 좋은 레스토랑에서 맛있는 저녁", scores: { 'elegant-classy': 2, 'warm-reliable': 1 } },
      { text: "신나는 놀이공원 데이트", scores: { 'adventurous-free': 2, 'cute-lovely': 1 } },
      { text: "조용한 카페에서 깊은 대화", scores: { 'smart-witty': 2, 'mysterious-charismatic': 1 } },
      { text: "자연 속에서 함께 산책", scores: { 'gentle-caring': 2, 'warm-reliable': 1 } },
    ],
  },
  {
    id: 2,
    question: "연인에게서 가장 끌리는 점은?",
    options: [
      { text: "따뜻하고 듬직한 포용력", scores: { 'warm-reliable': 2, 'gentle-caring': 1 } },
      { text: "알 수 없는 매력과 카리스마", scores: { 'mysterious-charismatic': 2, 'passionate-intense': 1 } },
      { text: "귀엽고 사랑스러운 행동", scores: { 'cute-lovely': 2, 'gentle-caring': 1 } },
      { text: "지적이고 재치 있는 대화", scores: { 'smart-witty': 2, 'elegant-classy': 1 } },
    ],
  },
  {
    id: 3,
    question: "연인과 갈등이 생겼을 때 원하는 모습은?",
    options: [
      { text: "차분하게 대화로 풀어가는 사람", scores: { 'smart-witty': 2, 'gentle-caring': 1 } },
      { text: "먼저 다가와 안아주는 사람", scores: { 'warm-reliable': 2, 'passionate-intense': 1 } },
      { text: "귀엽게 화해를 시도하는 사람", scores: { 'cute-lovely': 2, 'adventurous-free': 1 } },
      { text: "시간을 두고 각자 생각할 여유를 주는 사람", scores: { 'mysterious-charismatic': 2, 'elegant-classy': 1 } },
    ],
  },
  {
    id: 4,
    question: "연인의 옷 스타일 취향은?",
    options: [
      { text: "깔끔하고 단정한 클래식 스타일", scores: { 'elegant-classy': 2, 'warm-reliable': 1 } },
      { text: "개성 있고 유니크한 스타일", scores: { 'mysterious-charismatic': 2, 'adventurous-free': 1 } },
      { text: "편하고 캐주얼한 스타일", scores: { 'cute-lovely': 2, 'gentle-caring': 1 } },
      { text: "섹시하고 세련된 스타일", scores: { 'passionate-intense': 2, 'elegant-classy': 1 } },
    ],
  },
  {
    id: 5,
    question: "이상적인 주말 보내기는?",
    options: [
      { text: "새로운 장소 탐험하고 모험하기", scores: { 'adventurous-free': 2, 'passionate-intense': 1 } },
      { text: "집에서 같이 영화 보며 휴식", scores: { 'gentle-caring': 2, 'warm-reliable': 1 } },
      { text: "전시회나 공연 관람", scores: { 'elegant-classy': 2, 'smart-witty': 1 } },
      { text: "맛집 투어", scores: { 'cute-lovely': 2, 'adventurous-free': 1 } },
    ],
  },
  {
    id: 6,
    question: "연인에게 받고 싶은 서프라이즈는?",
    options: [
      { text: "갑작스러운 여행 제안", scores: { 'adventurous-free': 2, 'passionate-intense': 1 } },
      { text: "정성 들인 손편지나 선물", scores: { 'warm-reliable': 2, 'gentle-caring': 1 } },
      { text: "특별한 날 고급 레스토랑 예약", scores: { 'elegant-classy': 2, 'mysterious-charismatic': 1 } },
      { text: "귀여운 인형이나 달콤한 디저트", scores: { 'cute-lovely': 2, 'gentle-caring': 1 } },
    ],
  },
  {
    id: 7,
    question: "연인과의 대화에서 좋아하는 것은?",
    options: [
      { text: "서로의 꿈과 미래에 대한 진지한 대화", scores: { 'smart-witty': 2, 'warm-reliable': 1 } },
      { text: "웃기고 재미있는 농담 주고받기", scores: { 'cute-lovely': 2, 'adventurous-free': 1 } },
      { text: "깊고 철학적인 주제에 대한 토론", scores: { 'mysterious-charismatic': 2, 'smart-witty': 1 } },
      { text: "달달하고 로맨틱한 표현들", scores: { 'passionate-intense': 2, 'gentle-caring': 1 } },
    ],
  },
  {
    id: 8,
    question: "연인의 직업 이미지로 끌리는 것은?",
    options: [
      { text: "창의적인 예술가/디자이너", scores: { 'mysterious-charismatic': 2, 'adventurous-free': 1 } },
      { text: "안정적인 전문직", scores: { 'warm-reliable': 2, 'elegant-classy': 1 } },
      { text: "열정적인 사업가/창업가", scores: { 'passionate-intense': 2, 'smart-witty': 1 } },
      { text: "다정한 교사/의료인", scores: { 'gentle-caring': 2, 'warm-reliable': 1 } },
    ],
  },
  {
    id: 9,
    question: "연인에게서 느끼고 싶은 감정은?",
    options: [
      { text: "편안함과 안정감", scores: { 'warm-reliable': 2, 'gentle-caring': 1 } },
      { text: "두근거림과 설렘", scores: { 'mysterious-charismatic': 2, 'passionate-intense': 1 } },
      { text: "웃음과 행복함", scores: { 'cute-lovely': 2, 'adventurous-free': 1 } },
      { text: "존경심과 자극", scores: { 'smart-witty': 2, 'elegant-classy': 1 } },
    ],
  },
  {
    id: 10,
    question: "연인의 애정 표현 방식으로 좋아하는 것은?",
    options: [
      { text: "말보다 행동으로 보여주는 스타일", scores: { 'warm-reliable': 2, 'gentle-caring': 1 } },
      { text: "수시로 사랑한다고 말해주는 스타일", scores: { 'passionate-intense': 2, 'cute-lovely': 1 } },
      { text: "은근히 챙겨주는 츤데레 스타일", scores: { 'mysterious-charismatic': 2, 'smart-witty': 1 } },
      { text: "스킨십이 많은 스타일", scores: { 'cute-lovely': 2, 'passionate-intense': 1 } },
    ],
  },
  {
    id: 11,
    question: "연인과 함께하는 여행 스타일은?",
    options: [
      { text: "럭셔리 호텔에서 여유롭게", scores: { 'elegant-classy': 2, 'gentle-caring': 1 } },
      { text: "배낭메고 자유롭게 떠나기", scores: { 'adventurous-free': 2, 'passionate-intense': 1 } },
      { text: "계획 세워서 알차게", scores: { 'smart-witty': 2, 'warm-reliable': 1 } },
      { text: "힐링되는 자연 속 펜션", scores: { 'gentle-caring': 2, 'warm-reliable': 1 } },
    ],
  },
  {
    id: 12,
    question: "연인 관계에서 가장 중요한 것은?",
    options: [
      { text: "서로에 대한 신뢰와 믿음", scores: { 'warm-reliable': 2, 'elegant-classy': 1 } },
      { text: "끊임없는 설렘과 열정", scores: { 'passionate-intense': 2, 'mysterious-charismatic': 1 } },
      { text: "편안함과 배려", scores: { 'gentle-caring': 2, 'cute-lovely': 1 } },
      { text: "지적인 교감과 성장", scores: { 'smart-witty': 2, 'adventurous-free': 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<IdealType, IdealTypeResult> = {
  'warm-reliable': {
    type: 'warm-reliable',
    title: '따뜻한 포용형',
    emoji: '🤗',
    description: '당신의 이상형은 따뜻하고 믿음직한 사람입니다. 과묵하지만 행동으로 사랑을 표현하고, 언제나 든든하게 곁을 지켜주는 사람에게 끌립니다. 화려한 말보다 진심 어린 행동, 불안정함보다 안정감을 원합니다.',
    personality: ['듬직함', '책임감', '진실됨', '따뜻함'],
    attractedTo: ['말보다 행동이 앞서는 사람', '묵묵히 곁을 지키는 사람', '가족을 중요시하는 사람'],
    turnOffs: ['약속을 자주 어기는 사람', '말만 앞세우는 사람', '책임감 없는 사람'],
    datingStyle: '느리지만 확실한 연애를 원합니다. 시간을 들여 서로를 알아가고, 한번 시작하면 끝까지 함께하는 진지한 연애를 추구합니다.',
    bestMatch: '다정한 배려형',
    worstMatch: '자유로운 모험형',
    advice: '안정감을 주는 사람을 찾되, 너무 지루해지지 않도록 가끔은 새로운 시도도 해보세요!',
    celebExample: '공유, 손석구',
  },
  'mysterious-charismatic': {
    type: 'mysterious-charismatic',
    title: '신비로운 카리스마형',
    emoji: '✨',
    description: '당신의 이상형은 알 수 없는 매력으로 가득한 사람입니다. 쉽게 속을 드러내지 않고, 알면 알수록 더 알고 싶어지는 신비로운 분위기에 끌립니다. 평범함을 거부하고 특별한 존재감을 원합니다.',
    personality: ['카리스마', '신비로움', '독립적', '깊이 있음'],
    attractedTo: ['독특한 분위기를 가진 사람', '자기만의 세계관이 있는 사람', '쉽게 읽히지 않는 사람'],
    turnOffs: ['너무 빤한 사람', '의존적인 사람', '개성 없는 사람'],
    datingStyle: '밀당의 묘미를 즐기는 연애를 원합니다. 완전히 소유하기보다 적당한 긴장감을 유지하며 서로에게 자극이 되는 관계를 추구합니다.',
    bestMatch: '지적인 위트형',
    worstMatch: '귀여운 사랑둥이형',
    advice: '신비로움에 끌리되, 진심을 숨기는 사람과 신비로운 사람을 구별하세요!',
    celebExample: '전지현, 공효진',
  },
  'cute-lovely': {
    type: 'cute-lovely',
    title: '귀여운 사랑둥이형',
    emoji: '🥰',
    description: '당신의 이상형은 사랑스럽고 귀여운 사람입니다. 애교 넘치는 행동, 해맑은 미소, 순수한 매력에 끌립니다. 함께 있으면 웃음이 끊이지 않고, 마음이 따뜻해지는 사람을 원합니다.',
    personality: ['발랄함', '순수함', '애교', '밝음'],
    attractedTo: ['웃음이 많은 사람', '애교가 넘치는 사람', '긍정적인 에너지를 가진 사람'],
    turnOffs: ['차갑고 무뚝뚝한 사람', '부정적인 사람', '유머 감각 없는 사람'],
    datingStyle: '달콤하고 로맨틱한 연애를 원합니다. 커플 아이템, 기념일 챙기기, 애칭 부르기 등 연인다운 연애를 꿈꿉니다.',
    bestMatch: '다정한 배려형',
    worstMatch: '신비로운 카리스마형',
    advice: '귀여움만 보지 말고, 진지한 대화도 나눌 수 있는지 확인하세요!',
    celebExample: '아이유, 박보영',
  },
  'smart-witty': {
    type: 'smart-witty',
    title: '지적인 위트형',
    emoji: '🧠',
    description: '당신의 이상형은 지적이고 대화가 통하는 사람입니다. 깊이 있는 대화, 재치 있는 유머, 넓은 식견에 끌립니다. 외모보다 내면의 깊이, 단순한 재미보다 지적인 자극을 원합니다.',
    personality: ['지적임', '위트', '통찰력', '호기심'],
    attractedTo: ['대화가 통하는 사람', '다양한 분야에 관심 있는 사람', '유머 센스가 있는 사람'],
    turnOffs: ['생각이 얕은 사람', '대화가 안 통하는 사람', '배움에 관심 없는 사람'],
    datingStyle: '정신적 교감을 중시하는 연애를 원합니다. 함께 책을 읽고, 토론하고, 서로에게 영감을 주는 관계를 추구합니다.',
    bestMatch: '신비로운 카리스마형',
    worstMatch: '열정적인 불꽃형',
    advice: '머리로만 사랑하지 말고, 가끔은 감정에도 솔직해지세요!',
    celebExample: '유재석, 유희열',
  },
  'passionate-intense': {
    type: 'passionate-intense',
    title: '열정적인 불꽃형',
    emoji: '🔥',
    description: '당신의 이상형은 열정적이고 강렬한 사람입니다. 미지근한 감정이 아닌 뜨겁고 진한 사랑, 온몸으로 표현하는 사랑에 끌립니다. 심심한 연애보다 드라마틱한 연애를 원합니다.',
    personality: ['열정', '솔직함', '적극적', '강렬함'],
    attractedTo: ['감정 표현이 확실한 사람', '적극적으로 다가오는 사람', '열정적인 사람'],
    turnOffs: ['감정 표현을 안 하는 사람', '소극적인 사람', '열정 없이 사는 사람'],
    datingStyle: '매일이 설레는 연애를 원합니다. 뜨겁게 사랑하고, 가끔 싸우더라도 더 깊어지는 관계를 추구합니다.',
    bestMatch: '자유로운 모험형',
    worstMatch: '지적인 위트형',
    advice: '열정도 좋지만, 불꽃은 타오른 만큼 빨리 꺼질 수 있어요. 지속 가능한 사랑도 고민해보세요!',
    celebExample: '현빈, 정해인',
  },
  'gentle-caring': {
    type: 'gentle-caring',
    title: '다정한 배려형',
    emoji: '💝',
    description: '당신의 이상형은 다정하고 배려심 깊은 사람입니다. 작은 것도 세심하게 챙겨주고, 상대방의 마음을 먼저 생각하는 따뜻한 사람에게 끌립니다. 화려함보다 진심 어린 다정함을 원합니다.',
    personality: ['다정함', '배려심', '공감능력', '부드러움'],
    attractedTo: ['상대를 먼저 생각하는 사람', '감정을 잘 읽어주는 사람', '세심한 사람'],
    turnOffs: ['이기적인 사람', '공감 능력이 없는 사람', '무신경한 사람'],
    datingStyle: '서로 아껴주는 연애를 원합니다. 거창한 이벤트보다 일상 속 작은 배려, 따뜻한 말 한마디가 더 감동인 연애를 추구합니다.',
    bestMatch: '따뜻한 포용형',
    worstMatch: '자유로운 모험형',
    advice: '배려받는 것도 좋지만, 가끔은 당신이 원하는 것도 솔직하게 말해보세요!',
    celebExample: '박서준, 정해인',
  },
  'adventurous-free': {
    type: 'adventurous-free',
    title: '자유로운 모험형',
    emoji: '🌍',
    description: '당신의 이상형은 자유롭고 모험적인 사람입니다. 틀에 박히지 않고, 새로운 경험을 두려워하지 않는 자유로운 영혼에 끌립니다. 안정적인 일상보다 함께 모험할 파트너를 원합니다.',
    personality: ['자유로움', '모험심', '독립적', '열린 마음'],
    attractedTo: ['새로운 것에 도전하는 사람', '구속하지 않는 사람', '재미있는 사람'],
    turnOffs: ['너무 보수적인 사람', '집착하는 사람', '변화를 두려워하는 사람'],
    datingStyle: '함께 성장하는 연애를 원합니다. 서로의 자유를 존중하면서, 같이 새로운 경험을 쌓아가는 관계를 추구합니다.',
    bestMatch: '열정적인 불꽃형',
    worstMatch: '따뜻한 포용형',
    advice: '자유도 좋지만, 진정한 사랑에는 어느 정도의 헌신이 필요해요!',
    celebExample: '이효리, 공유',
  },
  'elegant-classy': {
    type: 'elegant-classy',
    title: '우아한 품격형',
    emoji: '👑',
    description: '당신의 이상형은 세련되고 품위 있는 사람입니다. 우아한 매너, 고급스러운 취향, 성숙한 분위기에 끌립니다. 가볍지 않고 품격 있는 연애를 원합니다.',
    personality: ['우아함', '세련됨', '성숙함', '품위'],
    attractedTo: ['매너 좋은 사람', '세련된 취향을 가진 사람', '자기 관리를 잘하는 사람'],
    turnOffs: ['무례한 사람', '품위 없는 행동', '자기 관리가 안 되는 사람'],
    datingStyle: '클래식한 연애를 원합니다. 분위기 좋은 레스토랑, 와인 한 잔, 깊은 대화로 이루어지는 로맨틱한 연애를 추구합니다.',
    bestMatch: '지적인 위트형',
    worstMatch: '열정적인 불꽃형',
    advice: '품격도 좋지만, 때로는 편한 모습도 보여줄 수 있는 사람인지 확인하세요!',
    celebExample: '원빈, 손예진',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): IdealTypeResult {
  const scores: Record<IdealType, number> = {
    'warm-reliable': 0,
    'mysterious-charismatic': 0,
    'cute-lovely': 0,
    'smart-witty': 0,
    'passionate-intense': 0,
    'gentle-caring': 0,
    'adventurous-free': 0,
    'elegant-classy': 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as IdealType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: IdealType = 'warm-reliable';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as IdealType;
    }
  });

  return results[resultType];
}
