// 집순이/집돌이 레벨 테스트 - 나는 얼마나 집콕러인가?

export interface HomebodyLevelQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface HomebodyLevelResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  homeTime: string;
  description: string;
  characteristics: string[];
  dailyRoutine: string;
  favoriteSpot: string;
  weaknesses: string[];
  strengths: string[];
  compatibility: string;
  advice: string;
}

export const homebodyLevelTypes = ['outdoor-lover', 'balanced', 'homebody', 'mega-homebody', 'hermit'] as const;
export type HomebodyLevelType = typeof homebodyLevelTypes[number];

export const questions: HomebodyLevelQuestion[] = [
  {
    id: 1,
    question: "금요일 저녁, 친구가 놀자고 하면?",
    options: [
      { text: "좋아! 어디 갈까?", scores: { 'outdoor-lover': 3 } },
      { text: "뭐 하는 건데? 내용에 따라 다름", scores: { balanced: 2, 'outdoor-lover': 1 } },
      { text: "음... 오늘은 좀 피곤한데... (핑계 찾는 중)", scores: { homebody: 2, balanced: 1 } },
      { text: "미안 나 오늘 집에 있어야 해 (이미 침대 위)", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 2,
    question: "나에게 '완벽한 주말'이란?",
    options: [
      { text: "친구들이랑 여행, 맛집 투어!", scores: { 'outdoor-lover': 3 } },
      { text: "하루는 밖에서, 하루는 집에서", scores: { balanced: 3 } },
      { text: "집에서 넷플릭스 정주행", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "아무도 안 만나고 침대에서 뒹굴뒹굴", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 3,
    question: "배달 앱 사용 빈도는?",
    options: [
      { text: "거의 안 씀, 직접 사먹으러 나감", scores: { 'outdoor-lover': 3 } },
      { text: "가끔, 귀찮을 때만", scores: { balanced: 2, homebody: 1 } },
      { text: "자주, 나가기 싫을 때가 많아서", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "거의 매일, 배달기사님이 나보다 현관문 더 자주 봄", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 4,
    question: "집에서 입는 옷은?",
    options: [
      { text: "집에서도 깔끔하게 입음", scores: { 'outdoor-lover': 2, balanced: 1 } },
      { text: "편한 옷, 근데 급하면 나갈 수 있는 정도", scores: { balanced: 3 } },
      { text: "구멍난 츄리닝, 헐렁한 티", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "속옷 차림 or 잠옷 평생 입음", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 5,
    question: "약속이 취소되면?",
    options: [
      { text: "아쉬워... 다른 약속 잡아야지", scores: { 'outdoor-lover': 3 } },
      { text: "뭐 어쩔 수 없지, 집에서 쉴까", scores: { balanced: 2, homebody: 1 } },
      { text: "ㅎㅎ (속으로 좋아함)", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "🎉 (마음속 폭죽 터짐)", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 6,
    question: "현관문 밖을 나서는 빈도는?",
    options: [
      { text: "매일, 집에만 있으면 답답해", scores: { 'outdoor-lover': 3 } },
      { text: "필요할 때, 출근/학교 제외 주 3-4회", scores: { balanced: 3 } },
      { text: "일주일에 1-2번? 택배 받으러", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "택배도 문 앞에 놓아달라고 함", scores: { hermit: 3 } },
    ],
  },
  {
    id: 7,
    question: "집에 있을 때 가장 행복한 순간은?",
    options: [
      { text: "집에 오래 있으면 불안해...", scores: { 'outdoor-lover': 3 } },
      { text: "저녁에 집에서 쉴 때 좋아", scores: { balanced: 3 } },
      { text: "배달 음식 + 넷플릭스 조합", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "이불 속에서 세상 차단할 때", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 8,
    question: "화상통화나 전화 vs 직접 만남?",
    options: [
      { text: "무조건 직접 만나야지!", scores: { 'outdoor-lover': 3 } },
      { text: "상황에 따라 다름", scores: { balanced: 2, homebody: 1 } },
      { text: "화상통화 선호, 편하잖아", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "카톡이 제일 좋음 (전화도 싫음)", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 9,
    question: "집에 친구가 놀러오면?",
    options: [
      { text: "좋아! 홈파티!", scores: { 'outdoor-lover': 2, balanced: 1 } },
      { text: "괜찮아, 가끔은 좋지", scores: { balanced: 3 } },
      { text: "좀 불편... 내 공간인데", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "NO. 집은 나만의 영역", scores: { hermit: 3 } },
    ],
  },
  {
    id: 10,
    question: "밖에 나가야 할 때 드는 생각은?",
    options: [
      { text: "오예 신난다~", scores: { 'outdoor-lover': 3 } },
      { text: "가야지 뭐~", scores: { balanced: 3 } },
      { text: "하... 나가기 싫다 (그래도 감)", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "진짜 꼭 가야 돼...? (온갖 핑계 생각 중)", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
  {
    id: 11,
    question: "코로나 때 집콕 생활은?",
    options: [
      { text: "너무 힘들었어, 갇힌 기분", scores: { 'outdoor-lover': 3 } },
      { text: "처음엔 괜찮았는데 나중엔 지침", scores: { balanced: 3 } },
      { text: "은근 괜찮았어, 적응 잘 함", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "평소랑 별 차이 없었음...", scores: { hermit: 3 } },
    ],
  },
  {
    id: 12,
    question: "지금 당장 뭐가 하고 싶어?",
    options: [
      { text: "어디든 나가서 놀고 싶어!", scores: { 'outdoor-lover': 3 } },
      { text: "적당히 외출 후 집에서 휴식", scores: { balanced: 3 } },
      { text: "침대에 누워서 유튜브 보기", scores: { homebody: 2, 'mega-homebody': 1 } },
      { text: "지금 이대로가 좋아 (이미 누워있음)", scores: { 'mega-homebody': 2, hermit: 1 } },
    ],
  },
];

export const results: Record<HomebodyLevelType, HomebodyLevelResult> = {
  'outdoor-lover': {
    type: 'outdoor-lover',
    title: '밖돌이/밖순이',
    emoji: '🏃',
    percentage: 10,
    homeTime: '하루 수면시간 정도',
    description: '집은 잠만 자는 곳! 당신은 밖에서 에너지를 충전하는 활동적인 타입이에요. 집에 오래 있으면 답답해서 못 견디죠?',
    characteristics: ['활동적', '사교적', '밖이 좋아', '집에 있으면 불안'],
    dailyRoutine: '아침에 일어나서 바로 외출, 밤늦게 귀가',
    favoriteSpot: '카페, 헬스장, 친구 집, 어디든 집 밖이면 OK',
    weaknesses: ['집에서 쉬는 법을 모름', '가끔 에너지 방전됨'],
    strengths: ['넓은 인간관계', '다양한 경험', '활력 넘침'],
    compatibility: '같은 밖돌이와 찰떡! 집순이와는 타협 필요',
    advice: '가끔은 집에서 쉬는 것도 필요해요~ 번아웃 주의!',
  },
  balanced: {
    type: 'balanced',
    title: '밸런스형 인간',
    emoji: '⚖️',
    percentage: 35,
    homeTime: '적당히 반반',
    description: '집도 좋고 밖도 좋은 균형 잡힌 타입! 상황에 따라 유연하게 조절하는 당신, 아주 건강한 라이프스타일이에요.',
    characteristics: ['유연함', '균형 잡힌', '상황 판단력', '적응력'],
    dailyRoutine: '할 일 하고, 쉴 땐 쉬고, 놀 땐 놀고',
    favoriteSpot: '그때그때 달라요~ 집도 좋고 밖도 좋고',
    weaknesses: ['가끔 결정 장애', '이도 저도 아닐 때'],
    strengths: ['어디서든 적응', '모든 친구와 잘 지냄', '스트레스 관리 잘함'],
    compatibility: '누구와도 잘 맞음!',
    advice: '완벽한 밸런스예요! 이대로 유지하세요~',
  },
  homebody: {
    type: 'homebody',
    title: '집콕러',
    emoji: '🏠',
    percentage: 65,
    homeTime: '주중 대부분',
    description: '집이 제일 좋은 당신! 밖에 나가면 나가는 대로 괜찮지만, 역시 집만한 곳이 없죠. 전형적인 집순이/집돌이예요!',
    characteristics: ['집사랑', '내향적', '편안함 추구', '나만의 공간 중요'],
    dailyRoutine: '필수 외출만 하고 집으로 직행, 배달 앱은 친구',
    favoriteSpot: '내 방, 내 침대, 내 소파',
    weaknesses: ['약속 잡기 귀찮음', '밖에 나가면 빨리 지침'],
    strengths: ['혼자만의 시간 활용', '에너지 절약', '집 꾸미기 잘함'],
    compatibility: '같은 집순이와 찰떡! 밖돌이와는 조율 필요',
    advice: '집이 좋은 거 인정! 근데 가끔은 햇빛도 쬐세요~',
  },
  'mega-homebody': {
    type: 'mega-homebody',
    title: '만렙 집순이/집돌이',
    emoji: '🛋️',
    percentage: 85,
    homeTime: '거의 99%',
    description: '집 밖은 위험해! 당신의 세상은 집 안에 있어요. 나가야 할 이유가 없으면 절대 나가지 않는 프로 집콕러입니다!',
    characteristics: ['극한의 집콕', '배달 앱 VIP', '이불 밖은 위험해', '사회적 은둔'],
    dailyRoutine: '기상 → 침대 → 소파 → 침대 (반복)',
    favoriteSpot: '침대, 그것도 이불 속',
    weaknesses: ['비타민 D 부족', '사회성 저하 위험', '몸이 굳음'],
    strengths: ['최강의 집 관리자', '돈 안 씀', '자기만의 세계'],
    compatibility: '같은 레벨의 집순이만 이해 가능',
    advice: '건강을 위해 가끔은 산책이라도...! 제발...!',
  },
  hermit: {
    type: 'hermit',
    title: '은둔 고수',
    emoji: '🐚',
    percentage: 99,
    homeTime: '집 = 우주 전체',
    description: '당신에게 집 밖의 세상은 존재하지 않아요. 완벽한 은둔 고수! 택배도 문 앞에 놓아달라고 하는 수준입니다.',
    characteristics: ['완벽한 은둔', '인간 관계 최소화', '집이 전부', '나가면 녹음'],
    dailyRoutine: '눈 뜨면 핸드폰 → 밥(배달) → 핸드폰 → 잠',
    favoriteSpot: '움직이기 싫어, 지금 있는 자리',
    weaknesses: ['심각한 비타민 D 결핍', '사회 부적응 위험', '건강 악화'],
    strengths: ['극강의 자기 시간', '미니멀 라이프', '디지털 친화력'],
    compatibility: '솔직히 아무도 못 만남',
    advice: '당장 밖으로 나가세요! 이건 심각합니다! 🚨',
  },
};

export function calculateResult(answers: number[]): HomebodyLevelResult {
  const scores: Record<HomebodyLevelType, number> = {
    'outdoor-lover': 0,
    balanced: 0,
    homebody: 0,
    'mega-homebody': 0,
    hermit: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as HomebodyLevelType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: HomebodyLevelType = 'balanced';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as HomebodyLevelType;
    }
  });

  return results[resultType];
}
