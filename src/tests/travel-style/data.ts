// 여행 스타일 테스트 - 나는 어떤 여행자?

export interface TravelStyleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface TravelStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  travelTraits: string[];
  perfectTrip: string;
  mustHaves: string[];
  destinations: string[];
  travelTips: string[];
  worstNightmare: string;
  travelPartner: string;
}

export const travelTypes = ['planner', 'spontaneous', 'relaxer', 'adventurer', 'foodie', 'culture_buff', 'photographer', 'luxury_seeker'] as const;
export type TravelType = typeof travelTypes[number];

export const questions: TravelStyleQuestion[] = [
  {
    id: 1,
    question: "여행 전 계획은 어느 정도?",
    options: [
      { text: "분 단위로 완벽하게 짠다", scores: { planner: 3 } },
      { text: "숙소, 핵심 일정만 정한다", scores: { culture_buff: 2, foodie: 1 } },
      { text: "숙소만 잡고 나머지는 현지에서", scores: { spontaneous: 2, adventurer: 1 } },
      { text: "계획? 그게 뭐죠?", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 2,
    question: "여행에서 가장 중요한 것은?",
    options: [
      { text: "맛있는 음식", scores: { foodie: 3 } },
      { text: "새로운 경험과 모험", scores: { adventurer: 3 } },
      { text: "휴식과 힐링", scores: { relaxer: 3 } },
      { text: "인생샷과 추억", scores: { photographer: 3 } },
    ],
  },
  {
    id: 3,
    question: "여행지 숙소 선택 기준은?",
    options: [
      { text: "위치가 좋으면 OK", scores: { planner: 2, culture_buff: 1 } },
      { text: "가성비가 최고", scores: { spontaneous: 2, adventurer: 1 } },
      { text: "편하고 깨끗해야 함", scores: { relaxer: 2, luxury_seeker: 1 } },
      { text: "특별한 경험이 가능한 곳", scores: { photographer: 2, luxury_seeker: 1 } },
    ],
  },
  {
    id: 4,
    question: "여행 중 하루 일정은?",
    options: [
      { text: "아침부터 밤까지 빡빡하게", scores: { planner: 2, culture_buff: 1 } },
      { text: "핵심만 보고 여유롭게", scores: { relaxer: 2, foodie: 1 } },
      { text: "그날 기분에 따라 결정", scores: { spontaneous: 3 } },
      { text: "액티비티 위주로", scores: { adventurer: 3 } },
    ],
  },
  {
    id: 5,
    question: "해외여행 갔을 때 가장 하고 싶은 것은?",
    options: [
      { text: "현지 맛집 투어", scores: { foodie: 3 } },
      { text: "유명 관광지/박물관 방문", scores: { culture_buff: 3 } },
      { text: "호텔/리조트에서 휴식", scores: { relaxer: 2, luxury_seeker: 1 } },
      { text: "액티비티/스포츠", scores: { adventurer: 3 } },
    ],
  },
  {
    id: 6,
    question: "여행 중 예상치 못한 상황이 생기면?",
    options: [
      { text: "스트레스 받음, 계획이 틀어졌잖아", scores: { planner: 3 } },
      { text: "오히려 좋아, 새로운 경험!", scores: { spontaneous: 2, adventurer: 1 } },
      { text: "일단 카페에서 쉬면서 생각", scores: { relaxer: 2, foodie: 1 } },
      { text: "일단 사진 찍고 봄", scores: { photographer: 2 } },
    ],
  },
  {
    id: 7,
    question: "여행 사진 스타일은?",
    options: [
      { text: "인생샷 건지기 위해 시간 투자", scores: { photographer: 3 } },
      { text: "음식 사진이 대부분", scores: { foodie: 3 } },
      { text: "대충 몇 장만 찍음", scores: { relaxer: 2, spontaneous: 1 } },
      { text: "액션캠/고프로로 영상 위주", scores: { adventurer: 3 } },
    ],
  },
  {
    id: 8,
    question: "이상적인 여행지는?",
    options: [
      { text: "유럽 역사 도시 (로마, 파리 등)", scores: { culture_buff: 2, photographer: 1 } },
      { text: "동남아 휴양지 (발리, 푸켓 등)", scores: { relaxer: 2, luxury_seeker: 1 } },
      { text: "미식의 도시 (오사카, 방콕 등)", scores: { foodie: 3 } },
      { text: "자연/모험 (뉴질랜드, 스위스 등)", scores: { adventurer: 2, photographer: 1 } },
    ],
  },
  {
    id: 9,
    question: "여행 예산 사용 스타일은?",
    options: [
      { text: "철저히 계획하고 관리", scores: { planner: 3 } },
      { text: "먹는 것에 아끼지 않음", scores: { foodie: 3 } },
      { text: "숙소/편의에 투자", scores: { luxury_seeker: 2, relaxer: 1 } },
      { text: "경험/액티비티에 투자", scores: { adventurer: 2, culture_buff: 1 } },
    ],
  },
  {
    id: 10,
    question: "여행 동반자로 선호하는 타입은?",
    options: [
      { text: "계획 잘 따라오는 사람", scores: { planner: 3 } },
      { text: "뭐든 OK인 편한 사람", scores: { spontaneous: 2, relaxer: 1 } },
      { text: "맛집 정보 많은 사람", scores: { foodie: 3 } },
      { text: "사진 잘 찍어주는 사람", scores: { photographer: 3 } },
    ],
  },
  {
    id: 11,
    question: "여행 중 꼭 가져가는 것은?",
    options: [
      { text: "상세한 일정표/가이드북", scores: { planner: 3 } },
      { text: "카메라/짐벌", scores: { photographer: 3 } },
      { text: "편한 신발/옷", scores: { relaxer: 2, adventurer: 1 } },
      { text: "맛집 리스트", scores: { foodie: 3 } },
    ],
  },
  {
    id: 12,
    question: "여행 후 SNS에 올리는 사진은?",
    options: [
      { text: "잘 나온 인생샷들", scores: { photographer: 3 } },
      { text: "먹은 음식 사진들", scores: { foodie: 3 } },
      { text: "별로 안 올림", scores: { relaxer: 2, spontaneous: 1 } },
      { text: "액티비티/모험 영상", scores: { adventurer: 3 } },
    ],
  },
];

export const results: Record<TravelType, TravelStyleResult> = {
  planner: {
    type: 'planner',
    title: '철저한 계획러',
    emoji: '📋',
    subtitle: '분 단위 일정표의 달인',
    description: '여행 전부터 설레는 당신! 꼼꼼한 계획으로 효율적인 여행을 즐기죠. 예상치 못한 상황은 스트레스지만, 완벽한 일정의 만족감은 최고!',
    travelTraits: ['꼼꼼한 계획', '효율 추구', '시간 관리', '리서치 철저'],
    perfectTrip: '모든 일정이 계획대로 진행되는 완벽한 여행',
    mustHaves: ['일정표', '예약 확인서', '지도 앱', '만일의 플랜B'],
    destinations: ['일본 (시스템이 좋음)', '싱가포르', '유럽 도시'],
    travelTips: ['가끔은 여유 시간을 넣어보세요', '계획 외의 발견도 즐겨보세요'],
    worstNightmare: '예약 취소, 일정 변경, 교통 지연',
    travelPartner: '계획을 잘 따라오는 사람',
  },
  spontaneous: {
    type: 'spontaneous',
    title: '즉흥 여행자',
    emoji: '🎲',
    subtitle: '계획? 그게 뭐죠?',
    description: '바람 부는 대로 여행하는 자유로운 영혼! 계획 없이 떠나는 것이 진짜 여행이라고 생각하죠. 예상치 못한 상황도 여행의 일부!',
    travelTraits: ['자유로움', '유연함', '모험심', '열린 마음'],
    perfectTrip: '아무 계획 없이 떠나서 현지에서 모든 걸 결정하는 여행',
    mustHaves: ['여권', '카드', '그게 다야'],
    destinations: ['동남아 (저렴하고 유연)', '남미', '인도'],
    travelTips: ['최소한의 숙소는 예약하세요', '중요한 건 미리 확인하세요'],
    worstNightmare: '너무 빡빡한 일정, 분 단위 계획',
    travelPartner: '뭐든 OK인 편한 사람',
  },
  relaxer: {
    type: 'relaxer',
    title: '힐링 여행자',
    emoji: '🏖️',
    subtitle: '휴식이 목적입니다',
    description: '여행 = 휴식인 당신! 바쁜 일상에서 벗어나 푹 쉬는 것이 목적이죠. 리조트, 호텔, 카페에서 보내는 시간이 가장 행복해요.',
    travelTraits: ['휴식 추구', '여유로움', '편안함 중시', '느긋함'],
    perfectTrip: '좋은 리조트에서 아무것도 안 하고 쉬는 여행',
    mustHaves: ['편한 옷', '좋은 책', '선크림'],
    destinations: ['발리', '몰디브', '하와이', '제주'],
    travelTips: ['가끔은 나가서 구경도 해보세요', '현지 경험도 해보세요'],
    worstNightmare: '빡빡한 일정, 이른 기상, 강행군',
    travelPartner: '같이 쉴 줄 아는 사람',
  },
  adventurer: {
    type: 'adventurer',
    title: '모험 여행자',
    emoji: '🧗',
    subtitle: '도전이 곧 여행',
    description: '새로운 경험과 스릴을 찾는 모험가! 번지점프, 스쿠버다이빙, 트레킹... 몸으로 느끼는 여행이 진짜라고 생각하죠.',
    travelTraits: ['모험심', '도전 정신', '활동적', '용기'],
    perfectTrip: '익스트림 스포츠와 새로운 도전으로 가득한 여행',
    mustHaves: ['액션캠', '운동화', '보험'],
    destinations: ['뉴질랜드', '스위스', '코스타리카', '네팔'],
    travelTips: ['안전은 챙기세요', '휴식도 필요해요'],
    worstNightmare: '호텔에만 있는 여행, 아무것도 안 하는 시간',
    travelPartner: '함께 도전할 수 있는 사람',
  },
  foodie: {
    type: 'foodie',
    title: '미식 여행자',
    emoji: '🍜',
    subtitle: '맛집이 목적지',
    description: '여행의 목적은 맛집! 현지 음식을 먹기 위해 여행을 떠나는 당신. 맛집 리스트가 곧 일정표예요.',
    travelTraits: ['미식 추구', '식탐', '현지 음식 탐험', '맛집 연구'],
    perfectTrip: '아침-점심-저녁-야식까지 맛집 투어',
    mustHaves: ['맛집 리스트', '소화제', '여유로운 바지'],
    destinations: ['일본 (오사카, 도쿄)', '태국 (방콕)', '이탈리아', '베트남'],
    travelTips: ['맛집 외의 것도 경험해보세요', '건강 관리도 하세요'],
    worstNightmare: '맛없는 음식, 맛집 휴무, 긴 웨이팅',
    travelPartner: '같이 먹을 줄 아는 사람',
  },
  culture_buff: {
    type: 'culture_buff',
    title: '문화 탐험가',
    emoji: '🏛️',
    subtitle: '역사와 문화가 목적',
    description: '박물관, 유적지, 역사적 장소를 찾아다니는 문화 탐험가! 그 나라의 역사와 문화를 이해하는 것이 진짜 여행이라고 생각해요.',
    travelTraits: ['지적 호기심', '역사 관심', '깊이 있는 여행', '학습 지향'],
    perfectTrip: '박물관, 유적지, 역사적 장소 탐방',
    mustHaves: ['가이드북', '오디오가이드', '편한 신발'],
    destinations: ['유럽 (로마, 아테네, 파리)', '이집트', '페루', '캄보디아'],
    travelTips: ['쉬어가는 시간도 필요해요', '현지 음식도 즐겨보세요'],
    worstNightmare: '휴무인 박물관, 공사 중인 유적지',
    travelPartner: '같이 공부하며 여행할 사람',
  },
  photographer: {
    type: 'photographer',
    title: '인생샷 헌터',
    emoji: '📸',
    subtitle: '사진이 목적이다',
    description: '여행의 목적은 인생샷! 포토스팟을 찾아다니고, 완벽한 한 장을 위해 시간을 투자하죠. SNS 피드가 곧 여행 기록이에요.',
    travelTraits: ['사진 애호', '미적 감각', 'SNS 활발', '포토스팟 연구'],
    perfectTrip: '인생샷으로 가득한 피드 완성',
    mustHaves: ['카메라', '삼각대', '예쁜 옷', '보조배터리'],
    destinations: ['산토리니', '파리', '발리', '일본 교토'],
    travelTips: ['사진 외의 순간도 즐기세요', '눈으로도 기억하세요'],
    worstNightmare: '날씨 흐림, 공사 중, 사람 많음',
    travelPartner: '사진 잘 찍어주는 사람',
  },
  luxury_seeker: {
    type: 'luxury_seeker',
    title: '럭셔리 여행자',
    emoji: '✨',
    subtitle: '품격 있는 여행',
    description: '여행도 품격 있게! 좋은 호텔, 파인다이닝, 퍼스트클래스... 편안하고 품격 있는 여행을 추구하는 당신이에요.',
    travelTraits: ['품격 추구', '편안함 중시', '고급 취향', '서비스 중시'],
    perfectTrip: '5성급 호텔에서 최고의 서비스를 받는 여행',
    mustHaves: ['라운지 이용권', '프리미엄 예약', '좋은 짐'],
    destinations: ['두바이', '몰디브', '스위스', '싱가포르'],
    travelTips: ['가끔은 현지 로컬 경험도 해보세요'],
    worstNightmare: '불편한 숙소, 긴 줄, 나쁜 서비스',
    travelPartner: '취향이 맞는 사람',
  },
};

export function calculateResult(answers: number[]): TravelStyleResult {
  const scores: Record<TravelType, number> = {
    planner: 0,
    spontaneous: 0,
    relaxer: 0,
    adventurer: 0,
    foodie: 0,
    culture_buff: 0,
    photographer: 0,
    luxury_seeker: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as TravelType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: TravelType = 'spontaneous';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as TravelType;
    }
  });

  return results[resultType];
}
