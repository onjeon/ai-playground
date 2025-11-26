// MBTI 술자리 테스트 - 술자리에서 나는 어떤 MBTI?

export interface MbtiDrinkingQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      E?: number; I?: number;
      S?: number; N?: number;
      T?: number; F?: number;
      J?: number; P?: number;
    };
  }[];
}

export interface MbtiDrinkingResult {
  type: string;
  title: string;
  emoji: string;
  drinkingStyle: string;
  description: string;
  characteristics: string[];
  favoritePlace: string[];
  drinkingTips: string[];
  signatureDrink: string;
  bestDrinkingPartner: string[];
  worstDrinkingPartner: string[];
  drunkBehavior: string;
}

export const questions: MbtiDrinkingQuestion[] = [
  {
    id: 1,
    question: "술자리 제안을 받으면?",
    options: [
      { text: "오 좋아! 바로 ㄱㄱ", scores: { E: 3 } },
      { text: "누가 오는지 먼저 확인", scores: { I: 2, S: 1 } },
      { text: "오늘 컨디션 봐서 결정", scores: { I: 2, P: 1 } },
      { text: "일단 가고 보자!", scores: { E: 2, P: 1 } },
    ],
  },
  {
    id: 2,
    question: "술자리에서 나의 포지션은?",
    options: [
      { text: "분위기 메이커, 텐션 담당", scores: { E: 3 } },
      { text: "조용히 듣다가 가끔 한마디", scores: { I: 3 } },
      { text: "술 따르고 챙기는 역할", scores: { F: 2, E: 1 } },
      { text: "진지한 대화 이끌기", scores: { N: 2, T: 1 } },
    ],
  },
  {
    id: 3,
    question: "술 마시면서 주로 하는 이야기는?",
    options: [
      { text: "재밌는 썰, 가십", scores: { E: 2, S: 1 } },
      { text: "고민 상담, 진지한 대화", scores: { F: 2, N: 1 } },
      { text: "요즘 이슈, 정보 공유", scores: { T: 2, S: 1 } },
      { text: "인생, 미래, 철학적 대화", scores: { N: 3 } },
    ],
  },
  {
    id: 4,
    question: "2차 갈까? 물어보면?",
    options: [
      { text: "당연히 가야지! 밤은 길어", scores: { E: 3, P: 1 } },
      { text: "집 가고 싶은데... 눈치 봄", scores: { I: 3 } },
      { text: "내일 일정 체크하고 결정", scores: { J: 2, T: 1 } },
      { text: "분위기 좋으면 가고, 아니면 빠짐", scores: { P: 2, F: 1 } },
    ],
  },
  {
    id: 5,
    question: "술 취하면 나는?",
    options: [
      { text: "텐션 업! 더 신나고 활발해짐", scores: { E: 3 } },
      { text: "감성 폭발, 눈물이 날 것 같아", scores: { F: 3 } },
      { text: "조용해지고 졸려옴", scores: { I: 3 } },
      { text: "진지해지고 속마음을 털어놓음", scores: { N: 2, I: 1 } },
    ],
  },
  {
    id: 6,
    question: "술자리 장소 선정은?",
    options: [
      { text: "분위기 좋은 핫플레이스", scores: { E: 2, N: 1 } },
      { text: "조용하고 대화하기 좋은 곳", scores: { I: 2, F: 1 } },
      { text: "가성비 좋은 단골집", scores: { S: 2, T: 1 } },
      { text: "새로 오픈한 곳 가보기", scores: { N: 2, P: 1 } },
    ],
  },
  {
    id: 7,
    question: "술자리에서 싸움이 날 것 같으면?",
    options: [
      { text: "중재하면서 분위기 전환", scores: { F: 2, E: 1 } },
      { text: "논리적으로 상황 정리", scores: { T: 3 } },
      { text: "일단 피하고 지켜봄", scores: { I: 2, P: 1 } },
      { text: "흥분하지 말라고 말림", scores: { F: 2, J: 1 } },
    ],
  },
  {
    id: 8,
    question: "술자리 마무리 스타일은?",
    options: [
      { text: "끝까지 남아서 정리", scores: { J: 2, F: 1 } },
      { text: "적당히 마시고 칼퇴", scores: { I: 2, J: 1 } },
      { text: "밤새 달리다 해장까지", scores: { E: 2, P: 2 } },
      { text: "기분 좋을 때 슬쩍 빠지기", scores: { I: 2, P: 1 } },
    ],
  },
  {
    id: 9,
    question: "다음날 술자리 후기는?",
    options: [
      { text: "단톡방에 사진, 영상 공유", scores: { E: 3, S: 1 } },
      { text: "조용히 숙취 해소에 집중", scores: { I: 3 } },
      { text: "어젯밤 기억 더듬으며 정리", scores: { S: 2, J: 1 } },
      { text: "벌써 다음 술자리 기대 중", scores: { E: 2, P: 1 } },
    ],
  },
  {
    id: 10,
    question: "술자리에서 게임할 때?",
    options: [
      { text: "적극 참여! 게임 제안도 함", scores: { E: 3 } },
      { text: "하면 하는데 술만 마셔도 좋아", scores: { I: 2, P: 1 } },
      { text: "전략적으로 임해서 꼭 이김", scores: { T: 2, J: 1 } },
      { text: "분위기 맞춰서 참여", scores: { F: 2, S: 1 } },
    ],
  },
  {
    id: 11,
    question: "술자리에서 누가 운다면?",
    options: [
      { text: "옆에서 같이 울어줌", scores: { F: 3 } },
      { text: "어색하지만 토닥토닥", scores: { I: 2, F: 1 } },
      { text: "왜 우는지 이유 파악", scores: { T: 3 } },
      { text: "분위기 전환 시도", scores: { E: 2, S: 1 } },
    ],
  },
  {
    id: 12,
    question: "술자리의 의미는?",
    options: [
      { text: "스트레스 해소, 일상 탈출", scores: { S: 2, P: 1 } },
      { text: "관계 돈독히 하는 시간", scores: { F: 2, E: 1 } },
      { text: "정보 교환, 네트워킹", scores: { T: 2, E: 1 } },
      { text: "깊은 대화를 나누는 시간", scores: { N: 2, I: 1 } },
    ],
  },
];

export const results: Record<string, MbtiDrinkingResult> = {
  'ISTJ': {
    type: 'ISTJ',
    title: '절제의 아이콘',
    emoji: '📊',
    drinkingStyle: '계획적 음주자',
    description: '내일 일정이 있으니 딱 3잔까지! 철저한 자기 관리로 술자리도 계획적으로.',
    characteristics: ['정해진 양만 마심', '시간 되면 칼퇴', '다음날 컨디션 관리', '술값 정확히 계산'],
    favoritePlace: ['단골 술집', '조용한 바', '호프집'],
    drinkingTips: ['가끔은 흐름에 맡겨보세요', '너무 딱딱하게 굴지 않기'],
    signatureDrink: '맥주 (정량 관리 쉬움)',
    bestDrinkingPartner: ['ESTJ', 'ISFJ', 'ISTJ'],
    worstDrinkingPartner: ['ENFP', 'ESFP'],
    drunkBehavior: '조용해지다가 갑자기 잠듦',
  },
  'ISFJ': {
    type: 'ISFJ',
    title: '술자리 엄마',
    emoji: '🤱',
    drinkingStyle: '챙김이 마스터',
    description: '물 마셔, 안주 먹어, 택시 불렀어? 술자리에서도 모두를 챙기는 따뜻한 사람.',
    characteristics: ['안주 주문 담당', '취한 사람 케어', '막차 시간 알림', '집에 잘 들어갔는지 확인'],
    favoritePlace: ['분위기 좋은 이자카야', '조용한 와인바', '아늑한 포차'],
    drinkingTips: ['본인도 즐기세요', '남 챙기느라 자기 취함 모름 주의'],
    signatureDrink: '와인 (정성스럽게)',
    bestDrinkingPartner: ['ESFJ', 'ISFJ', 'INFJ'],
    worstDrinkingPartner: ['ENTP', 'ESTP'],
    drunkBehavior: '감성 폭발, 고마움 표현',
  },
  'INFJ': {
    type: 'INFJ',
    title: '영혼의 대화 상대',
    emoji: '🌌',
    drinkingStyle: '깊은 대화 추구형',
    description: '술 마시면 철학자 모드 ON. 인생, 우주, 사랑에 대해 깊이 있는 대화를 나눠요.',
    characteristics: ['1:1 심층 대화 선호', '조용한 곳 선호', '감정 공유', '의미 있는 시간 추구'],
    favoritePlace: ['분위기 있는 바', '루프탑 바', '조용한 칵테일바'],
    drinkingTips: ['가벼운 수다도 즐겨보세요', '너무 진지하면 분위기 다운'],
    signatureDrink: '칵테일 (분위기 있게)',
    bestDrinkingPartner: ['INFP', 'ENFJ', 'INTJ'],
    worstDrinkingPartner: ['ESTP', 'ESFP'],
    drunkBehavior: '평소 안 하던 속마음 털어놓음',
  },
  'INTJ': {
    type: 'INTJ',
    title: '술자리 관찰자',
    emoji: '🔭',
    drinkingStyle: '전략적 참여자',
    description: '술자리도 분석 대상! 한 발 떨어져 관찰하다가 의미 있는 순간에만 참여.',
    characteristics: ['조용히 관찰', '선택적 대화 참여', '일찍 귀가', '효율적 음주'],
    favoritePlace: ['위스키 바', '조용한 펍', '호텔 바'],
    drinkingTips: ['가끔은 그냥 어울려보세요', '모든 걸 분석하지 않아도 OK'],
    signatureDrink: '위스키 (홀로 음미)',
    bestDrinkingPartner: ['ENTJ', 'INTP', 'INFJ'],
    worstDrinkingPartner: ['ESFP', 'ENFP'],
    drunkBehavior: '더 조용해지거나 갑자기 말 많아짐',
  },
  'ISTP': {
    type: 'ISTP',
    title: '쿨한 음주러',
    emoji: '😎',
    drinkingStyle: '쿨하게 즐기는 타입',
    description: '오면 마시고, 가면 가고. 강요 없이 자유롭게 즐기는 쿨한 술꾼.',
    characteristics: ['자기 페이스 유지', '억지 안 부림', '담백한 대화', '조용히 즐김'],
    favoritePlace: ['동네 호프', '포장마차', '펍'],
    drinkingTips: ['가끔은 분위기에 맞춰보세요', '너무 쿨하면 심심해 보일 수도'],
    signatureDrink: '맥주 (심플하게)',
    bestDrinkingPartner: ['ESTP', 'ISFP', 'INTP'],
    worstDrinkingPartner: ['ENFJ', 'ESFJ'],
    drunkBehavior: '말수가 조금 늘거나 그냥 잠듦',
  },
  'ISFP': {
    type: 'ISFP',
    title: '감성 술꾼',
    emoji: '🎭',
    drinkingStyle: '분위기에 취하는 타입',
    description: '술보다 분위기에 취해요. 좋은 음악, 좋은 사람과 함께하면 행복.',
    characteristics: ['분위기 중시', '감성적 대화', '예쁜 술집 선호', '사진 찍기 좋아함'],
    favoritePlace: ['감성 카페 바', '루프탑', '오션뷰 바'],
    drinkingTips: ['술 양 조절 주의', '분위기에 휩쓸려 과음 주의'],
    signatureDrink: '예쁜 칵테일',
    bestDrinkingPartner: ['INFP', 'ESFP', 'ISTP'],
    worstDrinkingPartner: ['ENTJ', 'ESTJ'],
    drunkBehavior: '감성 폭발, 노래 부르고 싶어함',
  },
  'INFP': {
    type: 'INFP',
    title: '술자리 시인',
    emoji: '📝',
    drinkingStyle: '낭만적 음주자',
    description: '술 마시면 시인이 되는 낭만파. 감성 대화와 함께하는 술자리를 좋아해요.',
    characteristics: ['감성적 대화', '음악에 취함', '조용히 생각에 잠김', '가끔 눈물'],
    favoritePlace: ['감성 바', '재즈 바', '옥상 술집'],
    drinkingTips: ['너무 감정에 빠지지 않기', '혼술 후 우울 주의'],
    signatureDrink: '와인 (감성적으로)',
    bestDrinkingPartner: ['INFJ', 'ENFP', 'ISFP'],
    worstDrinkingPartner: ['ESTJ', 'ENTJ'],
    drunkBehavior: '갑자기 감성 폭발, 인생 얘기',
  },
  'INTP': {
    type: 'INTP',
    title: '술자리 철학자',
    emoji: '🤔',
    drinkingStyle: '토론형 음주자',
    description: '술 마시면 토론 모드 ON. 별의별 주제로 끝없는 대화를 즐겨요.',
    characteristics: ['지적 대화 선호', '엉뚱한 주제 제시', '논쟁 즐김', '취해도 논리적'],
    favoritePlace: ['조용한 펍', '오래된 바', '골목 술집'],
    drinkingTips: ['가벼운 수다도 해보세요', '논쟁으로 분위기 깨지 않게 주의'],
    signatureDrink: '수제 맥주 (새로운 맛 탐구)',
    bestDrinkingPartner: ['INTJ', 'ENTP', 'ISTP'],
    worstDrinkingPartner: ['ESFJ', 'ENFJ'],
    drunkBehavior: '갑자기 우주, 철학 얘기 시작',
  },
  'ESTP': {
    type: 'ESTP',
    title: '파티 킹',
    emoji: '🎊',
    drinkingStyle: '흥 폭발 타입',
    description: '술자리의 핵인싸! 어디서든 분위기를 띄우고 밤새 달리는 파티 킹.',
    characteristics: ['술게임 마스터', '분위기 메이커', '2차 3차 당연', '모르는 사람과도 친해짐'],
    favoritePlace: ['클럽', '핫한 바', '번화가 술집'],
    drinkingTips: ['건강 챙기세요', '다음날 일정 생각하기'],
    signatureDrink: '샷 (폭탄주)',
    bestDrinkingPartner: ['ESFP', 'ENTP', 'ISTP'],
    worstDrinkingPartner: ['INFJ', 'ISFJ'],
    drunkBehavior: '더 신나짐, 모험적 행동 증가',
  },
  'ESFP': {
    type: 'ESFP',
    title: '술자리 연예인',
    emoji: '🌟',
    drinkingStyle: '즐거움 전도사',
    description: '술자리의 중심! 웃음과 흥으로 모두를 즐겁게 하는 엔터테이너.',
    characteristics: ['춤추고 노래하기', '모두와 어울림', '분위기 최고조', '밤새 놀 준비'],
    favoritePlace: ['노래방', '클럽', '핫플 술집'],
    drinkingTips: ['체력 관리 필수', '과음 주의'],
    signatureDrink: '소주 (다 같이!)',
    bestDrinkingPartner: ['ESTP', 'ENFP', 'ISFP'],
    worstDrinkingPartner: ['INTJ', 'ISTJ'],
    drunkBehavior: '더 신나고 활발해짐, 춤 시작',
  },
  'ENFP': {
    type: 'ENFP',
    title: '분위기 요정',
    emoji: '🧚',
    drinkingStyle: '텐션 업 요정',
    description: '술 마시면 더 사랑스러워지는 분위기 요정. 어디서든 인기 만점!',
    characteristics: ['텐션 UP', '스킨십 증가', '모두와 친해짐', '엉뚱한 아이디어'],
    favoritePlace: ['분위기 좋은 펍', '루프탑', '새로운 곳'],
    drinkingTips: ['감정 기복 주의', '과음하면 다음날 후회'],
    signatureDrink: '상그리아 (달달하게)',
    bestDrinkingPartner: ['INFP', 'ENTP', 'ESFP'],
    worstDrinkingPartner: ['ISTJ', 'INTJ'],
    drunkBehavior: '사랑 표현 폭발, 즉흥적 행동',
  },
  'ENTP': {
    type: 'ENTP',
    title: '술자리 논객',
    emoji: '⚔️',
    drinkingStyle: '토론왕 음주자',
    description: '술 마시면 토론 본능 깨어남! 재치 있는 대화로 술자리를 지배해요.',
    characteristics: ['논쟁 유발', '재치 있는 농담', '새로운 이야기', '밤새 토론'],
    favoritePlace: ['펍', '이색 바', '힙한 곳'],
    drinkingTips: ['논쟁으로 싸움 주의', '상대 기분도 배려'],
    signatureDrink: 'IPA 맥주 (개성 있게)',
    bestDrinkingPartner: ['INTP', 'ENFP', 'ESTP'],
    worstDrinkingPartner: ['ISFJ', 'ESFJ'],
    drunkBehavior: '더 말 많아지고 논쟁적',
  },
  'ESTJ': {
    type: 'ESTJ',
    title: '술자리 회장님',
    emoji: '👔',
    drinkingStyle: '리더십 음주자',
    description: '술자리도 이끈다! 일정 관리부터 정산까지 책임지는 든든한 회장님.',
    characteristics: ['자리 정리', '술값 계산', '분위기 통제', '마무리 담당'],
    favoritePlace: ['격식 있는 술집', '룸', '단골집'],
    drinkingTips: ['좀 풀어지세요', '즐기는 것도 중요해요'],
    signatureDrink: '양주 (격식 있게)',
    bestDrinkingPartner: ['ISTJ', 'ENTJ', 'ESFJ'],
    worstDrinkingPartner: ['INFP', 'ISFP'],
    drunkBehavior: '잔소리가 늘거나 갑자기 다정해짐',
  },
  'ESFJ': {
    type: 'ESFJ',
    title: '술자리 총무',
    emoji: '📋',
    drinkingStyle: '완벽 케어 타입',
    description: '모두가 즐거운 술자리를 위해! 예약부터 정산까지 완벽하게 챙기는 총무.',
    characteristics: ['장소 예약', '참석 확인', '안주 주문', '모두 케어'],
    favoritePlace: ['넓은 술집', '단체 가능한 곳', '분위기 좋은 곳'],
    drinkingTips: ['본인도 즐기세요', '모든 걸 책임지려 하지 말기'],
    signatureDrink: '소주 (같이 마시기 좋게)',
    bestDrinkingPartner: ['ISFJ', 'ESTJ', 'ENFJ'],
    worstDrinkingPartner: ['INTP', 'ISTP'],
    drunkBehavior: '더 살뜰해지거나 수다 폭발',
  },
  'ENFJ': {
    type: 'ENFJ',
    title: '술자리 치유사',
    emoji: '💝',
    drinkingStyle: '공감 리더 타입',
    description: '모두의 이야기를 들어주고 위로하는 따뜻한 술자리의 힐러.',
    characteristics: ['경청', '위로와 공감', '분위기 조절', '모두 신경 씀'],
    favoritePlace: ['아늑한 바', '분위기 있는 곳', '대화하기 좋은 곳'],
    drinkingTips: ['자기 이야기도 하세요', '남 걱정만 하지 말기'],
    signatureDrink: '와인 (대화와 함께)',
    bestDrinkingPartner: ['INFJ', 'ENFP', 'ESFJ'],
    worstDrinkingPartner: ['ISTP', 'INTP'],
    drunkBehavior: '더 다정해지고 애정 표현 증가',
  },
  'ENTJ': {
    type: 'ENTJ',
    title: '술자리 CEO',
    emoji: '👑',
    drinkingStyle: '카리스마 리더형',
    description: '술자리도 비즈니스처럼! 효율적으로 즐기고 네트워킹하는 CEO 타입.',
    characteristics: ['대화 리드', '네트워킹', '효율적 음주', '목적 있는 술자리'],
    favoritePlace: ['호텔 바', '고급 레스토랑', '멤버십 라운지'],
    drinkingTips: ['가끔은 목적 없이 즐겨보세요', '위아래 없이 어울리기'],
    signatureDrink: '위스키 (고급스럽게)',
    bestDrinkingPartner: ['INTJ', 'ESTJ', 'ENTP'],
    worstDrinkingPartner: ['ISFP', 'INFP'],
    drunkBehavior: '더 당당해지거나 갑자기 인간적으로 변함',
  },
};

export function calculateResult(answers: number[]): MbtiDrinkingResult {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([key, value]) => {
        scores[key as keyof typeof scores] += value || 0;
      });
    }
  });

  const mbtiType = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return results[mbtiType] || results['ISTJ'];
}
