// 무인도 생존력 테스트 - 무인도에서 살아남기

export interface IslandSurvivalQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface IslandSurvivalResult {
  type: string;
  title: string;
  emoji: string;
  survivalDays: number;
  subtitle: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  survivalStrategy: string[];
  firstPriority: string;
  worstMoment: string;
  rescueProbability: string;
  famousComparison: string;
}

export const islandTypes = ['expert', 'adaptable', 'creative', 'social', 'optimist', 'struggler', 'hopeless'] as const;
export type IslandType = typeof islandTypes[number];

export const questions: IslandSurvivalQuestion[] = [
  {
    id: 1,
    question: "무인도에 떨어졌다! 첫 번째로 할 일은?",
    options: [
      { text: "주변 지형 파악하고 계획 세우기", scores: { expert: 3, adaptable: 1 } },
      { text: "물 찾기", scores: { expert: 2, adaptable: 2 } },
      { text: "SOS 신호 만들기", scores: { social: 2, optimist: 1 } },
      { text: "패닉... 어떡하지", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 2,
    question: "야생에서 먹을 것을 구한다면?",
    options: [
      { text: "식용 식물/과일 구별 가능", scores: { expert: 3 } },
      { text: "물고기/게 같은 거 잡아봄", scores: { adaptable: 2, creative: 1 } },
      { text: "일단 아무거나 먹어봄", scores: { struggler: 2, hopeless: 1 } },
      { text: "구원 올 때까지 굶음", scores: { hopeless: 2, optimist: 1 } },
    ],
  },
  {
    id: 3,
    question: "불 피우는 방법을 알고 있나요?",
    options: [
      { text: "마찰, 렌즈 등 여러 방법 알아요", scores: { expert: 3 } },
      { text: "대충은 알아요, 해보면 될 듯", scores: { adaptable: 2, creative: 1 } },
      { text: "본 적은 있는데 할 수 있을지...", scores: { struggler: 2 } },
      { text: "전혀 모릅니다", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 4,
    question: "쉘터(은신처) 만들기 자신 있어요?",
    options: [
      { text: "나뭇가지, 잎으로 제대로 만들 수 있음", scores: { expert: 3 } },
      { text: "대충 비 피할 정도는", scores: { adaptable: 2, creative: 1 } },
      { text: "동굴이나 나무 밑에서 버팀", scores: { struggler: 2, adaptable: 1 } },
      { text: "그냥 하늘 보고 자야 할 듯", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 5,
    question: "체력/지구력에 대한 자신감은?",
    options: [
      { text: "운동 꾸준히 해서 자신 있음", scores: { expert: 2, adaptable: 1 } },
      { text: "평균은 되는 것 같아요", scores: { adaptable: 2, social: 1 } },
      { text: "솔직히 약한 편이에요", scores: { struggler: 2, optimist: 1 } },
      { text: "체력이 바닥이에요", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 6,
    question: "혼자 있는 것에 대한 생각은?",
    options: [
      { text: "혼자여도 괜찮아요, 집중할 수 있음", scores: { expert: 2, adaptable: 1 } },
      { text: "조금 외롭겠지만 버틸 수 있음", scores: { adaptable: 2, optimist: 1 } },
      { text: "외로움을 많이 탈 것 같아요", scores: { social: 3 } },
      { text: "혼자 있으면 미칠 것 같아요", scores: { hopeless: 2, social: 1 } },
    ],
  },
  {
    id: 7,
    question: "위기 상황에서 멘탈은?",
    options: [
      { text: "침착하게 대응해요", scores: { expert: 2, adaptable: 1 } },
      { text: "긍정적으로 생각하려 해요", scores: { optimist: 3 } },
      { text: "불안하지만 어떻게든 해내요", scores: { adaptable: 2, struggler: 1 } },
      { text: "쉽게 패닉해요", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 8,
    question: "도구를 만들거나 활용하는 능력은?",
    options: [
      { text: "손재주 있어서 뭐든 만들어요", scores: { creative: 3, expert: 1 } },
      { text: "간단한 것은 만들 수 있어요", scores: { adaptable: 2, creative: 1 } },
      { text: "있는 거 활용하는 정도", scores: { struggler: 2 } },
      { text: "전혀 자신 없어요", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 9,
    question: "방향 감각이나 길 찾기는?",
    options: [
      { text: "해, 별 보고 방향 찾을 수 있어요", scores: { expert: 3 } },
      { text: "대략적인 방향 감각은 있어요", scores: { adaptable: 2 } },
      { text: "길치예요...", scores: { struggler: 2, hopeless: 1 } },
      { text: "GPS 없으면 못 찾아요", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 10,
    question: "수영 실력은?",
    options: [
      { text: "수영 잘해요, 바다도 OK", scores: { expert: 2, adaptable: 1 } },
      { text: "기본 수영은 가능해요", scores: { adaptable: 2, optimist: 1 } },
      { text: "물이 무서워요", scores: { struggler: 2, hopeless: 1 } },
      { text: "수영 못해요", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 11,
    question: "의료/응급처치 지식은?",
    options: [
      { text: "기본 응급처치 알아요", scores: { expert: 2, adaptable: 1 } },
      { text: "상식 수준은 알아요", scores: { adaptable: 2 } },
      { text: "밴드 붙이는 정도...", scores: { struggler: 2, social: 1 } },
      { text: "전혀 몰라요", scores: { hopeless: 3 } },
    ],
  },
  {
    id: 12,
    question: "무인도 생존 예능을 본다면?",
    options: [
      { text: "나도 저 정도는 할 수 있어", scores: { expert: 2, optimist: 1 } },
      { text: "배우면 할 수 있을 것 같아", scores: { adaptable: 2, creative: 1 } },
      { text: "대단하다... 난 못할 듯", scores: { struggler: 2, social: 1 } },
      { text: "난 첫날 탈락이야", scores: { hopeless: 3 } },
    ],
  },
];

export const results: Record<IslandType, IslandSurvivalResult> = {
  expert: {
    type: 'expert',
    title: '생존 전문가',
    emoji: '🏆',
    survivalDays: 365,
    subtitle: '베어 그릴스급',
    description: '당신은 타고난 생존 전문가! 불 피우기, 쉘터 만들기, 식량 구하기... 모든 생존 기술을 갖추고 있어요. 무인도에서도 편하게 살 수 있을 거예요.',
    strengths: ['생존 지식', '체력', '침착함', '적응력', '기술'],
    weaknesses: ['외로움?', '구조 안 오면 영원히 혼자'],
    survivalStrategy: ['체계적 계획', '자원 관리', '장기 생존 준비', '구조 신호'],
    firstPriority: '안전한 식수 확보',
    worstMoment: '구조가 영영 안 올 수도 있다는 깨달음',
    rescueProbability: '구조 전에 이미 적응 완료',
    famousComparison: '베어 그릴스 / 로빈슨 크루소',
  },
  adaptable: {
    type: 'adaptable',
    title: '적응형 생존자',
    emoji: '🌴',
    survivalDays: 180,
    subtitle: '어떻게든 살아남는다',
    description: '당신은 적응력 뛰어난 생존자! 전문가는 아니지만 상황에 맞춰 배우고 적응하는 능력이 있어요. 실수하면서도 결국 살아남을 거예요.',
    strengths: ['적응력', '학습 능력', '유연함', '끈기'],
    weaknesses: ['전문 지식 부족', '초반 고생'],
    survivalStrategy: ['시행착오로 배움', '상황 적응', '끈기로 버팀'],
    firstPriority: '일단 안전한 곳 찾기',
    worstMoment: '뭘 해야 할지 모를 때',
    rescueProbability: '6개월 정도면 구조될 듯',
    famousComparison: '톰 행크스 (캐스트 어웨이)',
  },
  creative: {
    type: 'creative',
    title: '창의적 생존자',
    emoji: '💡',
    survivalDays: 120,
    subtitle: '아이디어로 살아남는다',
    description: '당신은 창의적 생존자! 체력이나 지식보다 아이디어와 손재주로 살아남아요. 독특한 방법으로 문제를 해결하는 능력이 있죠.',
    strengths: ['창의력', '손재주', '문제 해결', '발명'],
    weaknesses: ['체력 부족', '실패 가능성'],
    survivalStrategy: ['창의적 해결책', '도구 제작', '발명으로 생존'],
    firstPriority: '쓸 수 있는 재료 수집',
    worstMoment: '아이디어가 안 떠오를 때',
    rescueProbability: '신박한 SOS로 구조될 듯',
    famousComparison: '맥가이버',
  },
  social: {
    type: 'social',
    title: '사회적 생존자',
    emoji: '🤝',
    survivalDays: 90,
    subtitle: '혼자는 힘들어...',
    description: '당신은 사람이 필요한 타입! 생존 능력보다 사람들과 함께할 때 힘을 발휘해요. 혼자 무인도에 있으면 외로움이 가장 큰 적이에요.',
    strengths: ['소통 능력', '협동심', '긍정성', '유대감'],
    weaknesses: ['혼자 있으면 약함', '외로움에 취약'],
    survivalStrategy: ['SOS 신호에 집중', '희망 유지', '일기 쓰기'],
    firstPriority: '구조 신호 보내기',
    worstMoment: '아무도 안 올 것 같을 때',
    rescueProbability: '구조대 오면 인터뷰 능숙하게',
    famousComparison: '윌슨 공과 대화하는 톰 행크스',
  },
  optimist: {
    type: 'optimist',
    title: '낙천적 생존자',
    emoji: '☀️',
    survivalDays: 60,
    subtitle: '긍정 마인드로 버틴다',
    description: '당신은 긍정의 힘으로 버티는 타입! 기술은 부족해도 "어떻게든 되겠지"라는 마음으로 살아남아요. 멘탈이 당신의 무기예요.',
    strengths: ['긍정성', '희망', '멘탈 강함', '스트레스 관리'],
    weaknesses: ['현실적 대비 부족', '낙관이 과할 수 있음'],
    survivalStrategy: ['긍정 유지', '희망 잃지 않기', '하루하루 버티기'],
    firstPriority: '일단 긍정적으로 생각하기',
    worstMoment: '긍정으로도 안 될 때',
    rescueProbability: '행운이 따라줄 듯',
    famousComparison: '포레스트 검프 (운으로 살아남기)',
  },
  struggler: {
    type: 'struggler',
    title: '버티기형',
    emoji: '😰',
    survivalDays: 30,
    subtitle: '간신히 버틴다',
    description: '솔직히 힘들 거예요... 하지만 포기하지 않는 정신으로 어떻게든 버텨내요. 우연히 구조되거나 기적이 일어나길 바라야 해요.',
    strengths: ['끈기', '포기 안 함', '생존 본능'],
    weaknesses: ['대부분 약함', '지식/체력 부족'],
    survivalStrategy: ['하루하루 버티기', '운에 맡기기', '최소한의 생존'],
    firstPriority: '물과 음식 찾기 (힘들겠지만)',
    worstMoment: '매일이 힘듦',
    rescueProbability: '빨리 구조되길...',
    famousComparison: '정글의 법칙 첫 날 고생하는 멤버',
  },
  hopeless: {
    type: 'hopeless',
    title: '도시인',
    emoji: '🏙️',
    survivalDays: 7,
    subtitle: '문명 없인 못 살아',
    description: '솔직히... 무인도 생존은 무리예요. 에어컨, 와이파이, 배달음식 없이는 힘들어요. 최대한 빨리 구조되길 바라야 해요!',
    strengths: ['문명 사회 적응력?', '도시 생존력은 높을 듯'],
    weaknesses: ['야생 생존 불가', '모든 것'],
    survivalStrategy: ['SOS 신호만 열심히', '구조만 바라기'],
    firstPriority: 'SOS, SOS, SOS!',
    worstMoment: '핸드폰 배터리 방전',
    rescueProbability: '빨리 구조되거나... 안녕...',
    famousComparison: '도시 생활 전문가',
  },
};

export function calculateResult(answers: number[]): IslandSurvivalResult {
  const scores: Record<IslandType, number> = {
    expert: 0,
    adaptable: 0,
    creative: 0,
    social: 0,
    optimist: 0,
    struggler: 0,
    hopeless: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as IslandType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: IslandType = 'adaptable';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as IslandType;
    }
  });

  return results[resultType];
}
