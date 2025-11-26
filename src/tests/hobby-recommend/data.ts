// 취미 추천 테스트 - 나에게 맞는 취미 찾기

export interface HobbyRecommendQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface HobbyRecommendResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  personality: string;
  recommendedHobbies: string[];
  whyMatch: string[];
  benefits: string[];
  startTips: string[];
  relatedHobbies: string[];
  difficulty: string;
}

export const hobbyTypes = ['creative', 'active', 'social', 'relaxing', 'intellectual', 'adventurous'] as const;
export type HobbyType = typeof hobbyTypes[number];

export const questions: HobbyRecommendQuestion[] = [
  {
    id: 1,
    question: "주말에 가장 하고 싶은 건?",
    options: [
      { text: "뭔가 만들거나 창작하기", scores: { creative: 3 } },
      { text: "밖에서 몸 움직이기", scores: { active: 3 } },
      { text: "사람들 만나서 수다", scores: { social: 3 } },
      { text: "집에서 푹 쉬기", scores: { relaxing: 3 } },
    ],
  },
  {
    id: 2,
    question: "새로운 것을 배울 때 선호하는 방식은?",
    options: [
      { text: "직접 해보면서 배우기", scores: { creative: 2, active: 1 } },
      { text: "책이나 영상으로 이론부터", scores: { intellectual: 3 } },
      { text: "함께 배우는 클래스", scores: { social: 3 } },
      { text: "혼자 천천히 탐구", scores: { relaxing: 2, intellectual: 1 } },
    ],
  },
  {
    id: 3,
    question: "스트레스 해소 방법은?",
    options: [
      { text: "운동이나 활동적인 것", scores: { active: 3 } },
      { text: "혼자 조용히 쉬기", scores: { relaxing: 3 } },
      { text: "친구들과 어울리기", scores: { social: 3 } },
      { text: "취미 활동에 몰입", scores: { creative: 2, intellectual: 1 } },
    ],
  },
  {
    id: 4,
    question: "성취감을 느끼는 순간은?",
    options: [
      { text: "뭔가 완성했을 때", scores: { creative: 3 } },
      { text: "목표 달성했을 때 (운동 등)", scores: { active: 3 } },
      { text: "새로운 지식을 얻었을 때", scores: { intellectual: 3 } },
      { text: "새로운 경험을 했을 때", scores: { adventurous: 3 } },
    ],
  },
  {
    id: 5,
    question: "여행 스타일은?",
    options: [
      { text: "액티비티 가득!", scores: { active: 2, adventurous: 2 } },
      { text: "여유롭게 힐링", scores: { relaxing: 3 } },
      { text: "현지인과 교류", scores: { social: 3 } },
      { text: "문화/역사 탐방", scores: { intellectual: 3 } },
    ],
  },
  {
    id: 6,
    question: "SNS에 올리고 싶은 건?",
    options: [
      { text: "내가 만든 작품", scores: { creative: 3 } },
      { text: "운동/활동 인증", scores: { active: 3 } },
      { text: "친구들과의 추억", scores: { social: 3 } },
      { text: "여행/모험 사진", scores: { adventurous: 3 } },
    ],
  },
  {
    id: 7,
    question: "이상적인 저녁 시간은?",
    options: [
      { text: "취미 생활에 몰입", scores: { creative: 2, intellectual: 1 } },
      { text: "운동 후 개운하게", scores: { active: 3 } },
      { text: "친구/가족과 시간", scores: { social: 3 } },
      { text: "넷플릭스와 휴식", scores: { relaxing: 3 } },
    ],
  },
  {
    id: 8,
    question: "관심 가는 유튜브 채널은?",
    options: [
      { text: "DIY/핸드메이드", scores: { creative: 3 } },
      { text: "운동/피트니스", scores: { active: 3 } },
      { text: "다큐/교양", scores: { intellectual: 3 } },
      { text: "여행/브이로그", scores: { adventurous: 2, social: 1 } },
    ],
  },
  {
    id: 9,
    question: "돈을 쓰고 싶은 곳은?",
    options: [
      { text: "재료/도구 구매", scores: { creative: 3 } },
      { text: "운동 장비/시설", scores: { active: 3 } },
      { text: "모임/파티", scores: { social: 3 } },
      { text: "여행/체험", scores: { adventurous: 3 } },
    ],
  },
  {
    id: 10,
    question: "자랑하고 싶은 것은?",
    options: [
      { text: "내 작품/창작물", scores: { creative: 3 } },
      { text: "체력/운동 기록", scores: { active: 3 } },
      { text: "인맥/친구들", scores: { social: 3 } },
      { text: "경험/지식", scores: { intellectual: 2, adventurous: 1 } },
    ],
  },
  {
    id: 11,
    question: "배우고 싶은 것은?",
    options: [
      { text: "악기/그림 등 예술", scores: { creative: 3 } },
      { text: "새로운 스포츠", scores: { active: 3 } },
      { text: "언어/역사 등 지식", scores: { intellectual: 3 } },
      { text: "캠핑/다이빙 등 야외활동", scores: { adventurous: 3 } },
    ],
  },
  {
    id: 12,
    question: "1년 후 이루고 싶은 건?",
    options: [
      { text: "작품/포트폴리오 완성", scores: { creative: 3 } },
      { text: "마라톤/등산 등 목표 달성", scores: { active: 3 } },
      { text: "새로운 커뮤니티 형성", scores: { social: 3 } },
      { text: "색다른 경험/여행", scores: { adventurous: 3 } },
    ],
  },
];

export const results: Record<HobbyType, HobbyRecommendResult> = {
  creative: {
    type: 'creative',
    title: '창작 예술가',
    emoji: '🎨',
    description: '무에서 유를 만들어내는 당신! 손으로 뭔가를 만들고 창작하는 것에서 기쁨을 느끼는 예술가 타입입니다.',
    personality: '창의적이고 표현력이 풍부하며 감성적인 사람',
    recommendedHobbies: ['그림/일러스트', '도예/공예', '악기 연주', '사진 촬영', '글쓰기/시', 'DIY/핸드메이드'],
    whyMatch: ['창의성 발휘 가능', '성취감 높음', '나만의 작품 탄생', '감정 표현 가능'],
    benefits: ['스트레스 해소', '자기 표현', '집중력 향상', '성취감', '부업 가능성'],
    startTips: ['온라인 클래스로 기초부터', '저렴한 재료로 시작', '꾸준히 연습', 'SNS에 공유하며 동기부여'],
    relatedHobbies: ['캘리그라피', '뜨개질', '가죽공예', '영상편집', '베이킹'],
    difficulty: '초급부터 시작 가능, 꾸준함이 중요',
  },
  active: {
    type: 'active',
    title: '활동적인 스포츠맨',
    emoji: '🏃',
    description: '몸을 움직여야 직성이 풀리는 당신! 에너지 넘치고 건강한 삶을 추구하는 액티브 타입입니다.',
    personality: '에너지 넘치고 도전적이며 목표 지향적인 사람',
    recommendedHobbies: ['러닝/마라톤', '헬스/웨이트', '수영', '등산', '자전거', '테니스/배드민턴'],
    whyMatch: ['에너지 발산', '목표 설정 가능', '건강 증진', '성취감'],
    benefits: ['체력 향상', '스트레스 해소', '자신감 상승', '건강 관리', '다이어트'],
    startTips: ['가까운 시설 등록', '운동 친구 만들기', '목표 설정', '꾸준히 기록'],
    relatedHobbies: ['요가/필라테스', '골프', '스쿼시', '클라이밍', '스키/보드'],
    difficulty: '체력에 맞춰 시작, 점진적 강도 증가',
  },
  social: {
    type: 'social',
    title: '소셜 네트워커',
    emoji: '🎉',
    description: '사람과 함께할 때 행복한 당신! 교류하고 소통하는 것을 즐기는 소셜 타입입니다.',
    personality: '사교적이고 친화력이 있으며 함께하는 것을 좋아하는 사람',
    recommendedHobbies: ['동호회 활동', '봉사활동', '보드게임 모임', '와인/맥주 모임', '독서 토론', '댄스/줌바'],
    whyMatch: ['사람들과 교류', '재미있는 경험', '새 친구', '소속감'],
    benefits: ['인맥 확장', '외로움 해소', '다양한 경험', '사회성 발달', '즐거움'],
    startTips: ['소모임 앱 활용', '관심사 기반 모임 찾기', '적극적으로 참여', '정기 모임 유지'],
    relatedHobbies: ['밴드/합창', '스포츠 동호회', '언어교환', '파티/이벤트', '봉사'],
    difficulty: '시작은 쉬움, 꾸준한 참여가 중요',
  },
  relaxing: {
    type: 'relaxing',
    title: '힐링 추구자',
    emoji: '🧘',
    description: '바쁜 일상에서 벗어나 쉬고 싶은 당신! 마음의 평화와 휴식을 추구하는 힐링 타입입니다.',
    personality: '차분하고 내성적이며 평화를 추구하는 사람',
    recommendedHobbies: ['명상/요가', '독서', '가드닝', '퍼즐/레고', '티 타임', '목욕/스파'],
    whyMatch: ['마음의 평화', '혼자만의 시간', '스트레스 해소', '재충전'],
    benefits: ['정서적 안정', '스트레스 감소', '집중력 향상', '자기 돌봄', '숙면'],
    startTips: ['조용한 공간 확보', '루틴으로 만들기', '디지털 디톡스', '천천히 즐기기'],
    relatedHobbies: ['아로마테라피', '음악 감상', '캘리그라피', '뜨개질', '영화 감상'],
    difficulty: '쉽게 시작 가능, 꾸준함이 핵심',
  },
  intellectual: {
    type: 'intellectual',
    title: '지적 탐구자',
    emoji: '📚',
    description: '배움에 끝이 없는 당신! 새로운 지식을 쌓고 깊이 있는 이해를 추구하는 지적 타입입니다.',
    personality: '호기심 많고 분석적이며 배움을 즐기는 사람',
    recommendedHobbies: ['독서/서평', '온라인 강의', '체스/바둑', '언어 학습', '다큐 시청', '글쓰기'],
    whyMatch: ['지적 호기심 충족', '새로운 지식', '깊이 있는 탐구', '성장'],
    benefits: ['지식 확장', '사고력 향상', '자기개발', '대화 주제', '전문성'],
    startTips: ['관심 분야 정하기', '온라인 플랫폼 활용', '노트 정리', '실천으로 연결'],
    relatedHobbies: ['팟캐스트', '박물관 탐방', '토론 모임', '역사 탐구', 'TED 강연'],
    difficulty: '시작은 쉬움, 깊이에 따라 난이도 상승',
  },
  adventurous: {
    type: 'adventurous',
    title: '모험 탐험가',
    emoji: '🗺️',
    description: '새로운 경험을 갈망하는 당신! 일상에서 벗어나 모험을 즐기는 탐험가 타입입니다.',
    personality: '도전적이고 자유로우며 새로운 경험을 추구하는 사람',
    recommendedHobbies: ['여행', '캠핑/백패킹', '스쿠버다이빙', '패러글라이딩', '로드트립', '트레킹'],
    whyMatch: ['새로운 경험', '일상 탈출', '도전 정신', '추억 만들기'],
    benefits: ['시야 확장', '자신감 상승', '스트레스 해소', '특별한 추억', '자기 발견'],
    startTips: ['가까운 곳부터 시작', '안전 교육 필수', '장비 점진적 투자', '기록 남기기'],
    relatedHobbies: ['서핑', '스카이다이빙', '오토바이', '낚시', '사진 여행'],
    difficulty: '종류에 따라 다양, 안전이 최우선',
  },
};

export function calculateResult(answers: number[]): HobbyRecommendResult {
  const scores: Record<HobbyType, number> = {
    creative: 0,
    active: 0,
    social: 0,
    relaxing: 0,
    intellectual: 0,
    adventurous: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as HobbyType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: HobbyType = 'creative';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as HobbyType;
    }
  });

  return results[resultType];
}
