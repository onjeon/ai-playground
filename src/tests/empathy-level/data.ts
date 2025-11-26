// 공감 능력 테스트 - 당신의 공감 능력은 어느 정도?

export interface EmpathyLevelQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface EmpathyLevelResult {
  type: string;
  title: string;
  emoji: string;
  level: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  tips: string[];
  inRelationships: string;
  atWork: string;
  selfCareAdvice: string;
}

export const empathyLevelTypes = ['low', 'moderate', 'high', 'empath'] as const;
export type EmpathyLevelType = typeof empathyLevelTypes[number];

export const questions: EmpathyLevelQuestion[] = [
  {
    id: 1,
    question: "친구가 힘든 일이 있다고 연락하면?",
    options: [
      { text: "들어는 주는데 크게 감정이입은 안 됨", scores: { low: 3 } },
      { text: "안타깝고 위로해주고 싶음", scores: { moderate: 3 } },
      { text: "같이 슬퍼지고 도와주고 싶음", scores: { high: 3 } },
      { text: "친구의 기분이 그대로 내 기분이 됨", scores: { empath: 3 } },
    ],
  },
  {
    id: 2,
    question: "슬픈 영화를 볼 때 나는?",
    options: [
      { text: "별로 안 슬픔. 영화일 뿐인데", scores: { low: 3 } },
      { text: "좀 찡하긴 해도 금방 괜찮아짐", scores: { moderate: 3 } },
      { text: "울컥하고 눈물이 남", scores: { high: 3 } },
      { text: "끝나고도 한참 감정이 안 가라앉음", scores: { empath: 3 } },
    ],
  },
  {
    id: 3,
    question: "누군가 울고 있는 걸 보면?",
    options: [
      { text: "어색해서 피하고 싶음", scores: { low: 3 } },
      { text: "안쓰러워서 위로해주고 싶음", scores: { moderate: 3 } },
      { text: "나도 모르게 눈물이 고임", scores: { high: 3 } },
      { text: "그 사람의 슬픔이 내 안으로 들어오는 느낌", scores: { empath: 3 } },
    ],
  },
  {
    id: 4,
    question: "다른 사람의 감정을 얼마나 잘 읽어?",
    options: [
      { text: "잘 모르겠음. 말해줘야 알아", scores: { low: 3 } },
      { text: "눈치껏 어느 정도는 파악함", scores: { moderate: 3 } },
      { text: "표정, 분위기로 대충 알 수 있음", scores: { high: 3 } },
      { text: "말 안 해도 기분이 바로 느껴짐", scores: { empath: 3 } },
    ],
  },
  {
    id: 5,
    question: "사람 많은 곳에 있으면?",
    options: [
      { text: "별로 신경 안 씀. 편함", scores: { low: 3 } },
      { text: "가끔 피곤하긴 해도 괜찮음", scores: { moderate: 3 } },
      { text: "에너지가 빠지는 느낌이 듦", scores: { high: 3 } },
      { text: "여러 감정이 막 느껴져서 지침", scores: { empath: 3 } },
    ],
  },
  {
    id: 6,
    question: "뉴스에서 안 좋은 소식을 보면?",
    options: [
      { text: "정보로 받아들이고 넘김", scores: { low: 3 } },
      { text: "안타깝지만 내 일은 아니니까", scores: { moderate: 3 } },
      { text: "마음이 무거워짐", scores: { high: 3 } },
      { text: "한동안 그 생각에서 벗어나기 힘듦", scores: { empath: 3 } },
    ],
  },
  {
    id: 7,
    question: "상대방의 입장에서 생각하는 편?",
    options: [
      { text: "내 입장이 먼저. 그쪽 입장은 잘 모르겠음", scores: { low: 3 } },
      { text: "노력하면 이해는 되는데 자연스럽진 않음", scores: { moderate: 3 } },
      { text: "자연스럽게 상대 입장에서 생각하게 됨", scores: { high: 3 } },
      { text: "상대 입장이 내 입장처럼 느껴짐", scores: { empath: 3 } },
    ],
  },
  {
    id: 8,
    question: "동물이 다치거나 아픈 걸 보면?",
    options: [
      { text: "안됐네~ 하고 지나감", scores: { low: 3 } },
      { text: "불쌍하다고 생각함", scores: { moderate: 3 } },
      { text: "마음이 너무 아파서 못 봄", scores: { high: 3 } },
      { text: "며칠 동안 생각남", scores: { empath: 3 } },
    ],
  },
  {
    id: 9,
    question: "주변 사람의 기분이 안 좋으면?",
    options: [
      { text: "나와 상관없으니 신경 안 씀", scores: { low: 3 } },
      { text: "인식은 하지만 크게 영향 안 받음", scores: { moderate: 3 } },
      { text: "나도 기분이 가라앉음", scores: { high: 3 } },
      { text: "내 기분도 완전히 따라감", scores: { empath: 3 } },
    ],
  },
  {
    id: 10,
    question: "누군가의 고민을 들어줄 때?",
    options: [
      { text: "해결책 위주로 말해줌. 감정보단 실용", scores: { low: 2, moderate: 1 } },
      { text: "들어주면서 적당히 공감 표현", scores: { moderate: 3 } },
      { text: "진심으로 공감하면서 같이 고민함", scores: { high: 3 } },
      { text: "상대의 감정을 다 흡수해버림", scores: { empath: 3 } },
    ],
  },
  {
    id: 11,
    question: "타인의 기쁨에 대해?",
    options: [
      { text: "좋은 일이네~ 하고 끝", scores: { low: 3 } },
      { text: "축하해주고 기분 좋음", scores: { moderate: 3 } },
      { text: "같이 기뻐지고 행복해짐", scores: { high: 3 } },
      { text: "상대만큼, 어쩌면 더 기쁨", scores: { empath: 3 } },
    ],
  },
  {
    id: 12,
    question: "나의 공감 능력은?",
    options: [
      { text: "솔직히 공감보단 분석/해결이 더 잘 맞음", scores: { low: 3 } },
      { text: "평균 정도라고 생각함", scores: { moderate: 3 } },
      { text: "꽤 높은 편. 감정이입 잘함", scores: { high: 3 } },
      { text: "너무 높아서 힘들 때가 많음", scores: { empath: 3 } },
    ],
  },
];

export const results: Record<EmpathyLevelType, EmpathyLevelResult> = {
  low: {
    type: 'low',
    title: '이성적 분석가',
    emoji: '🧠',
    level: 25,
    description: '감정보다는 논리와 분석에 강한 타입! 타인의 감정에 크게 흔들리지 않고, 객관적이고 실용적인 관점을 유지합니다. 공감보다는 문제 해결이 특기예요.',
    characteristics: [
      '논리적 사고 우선',
      '감정에 덜 휘둘림',
      '객관적인 시각',
      '문제 해결 중심',
    ],
    strengths: [
      '위기 상황에서 냉정함 유지',
      '합리적인 결정 가능',
      '감정 소모가 적음',
      '분석력과 판단력 우수',
    ],
    challenges: [
      '냉정하다는 오해를 받을 수 있음',
      '관계에서 공감 부족으로 갈등',
      '감정 표현이 서툴 수 있음',
      '타인의 감정을 놓칠 때가 있음',
    ],
    tips: [
      '상대의 말에 감정 단어로 반응해보세요 (힘들었겠다, 기뻤겠다)',
      '해결책보다 먼저 들어주는 연습',
      '표정과 목소리 톤에 관심 갖기',
      '감정 일기 써보기',
    ],
    inRelationships: '든든한 조언자! 다만 가끔은 해결책보다 공감이 필요할 때도 있어요',
    atWork: '냉정한 판단이 필요한 역할에서 빛남. 데이터, 분석, 위기 관리 적합',
    selfCareAdvice: '공감력이 낮은 게 나쁜 게 아니에요. 다만 중요한 관계에서는 의식적으로 감정에 관심을 기울여보세요.',
  },
  moderate: {
    type: 'moderate',
    title: '균형 잡힌 공감러',
    emoji: '⚖️',
    level: 50,
    description: '공감과 객관성 사이에서 균형을 잘 잡는 타입! 타인의 감정을 이해하면서도, 자신을 지킬 줄 아는 건강한 공감 능력을 가지고 있어요.',
    characteristics: [
      '적절한 공감 능력',
      '감정과 이성의 균형',
      '상황에 맞는 대응',
      '건강한 경계선 유지',
    ],
    strengths: [
      '관계에서 균형 유지',
      '공감하되 소진되지 않음',
      '다양한 상황에 적응',
      '적절한 거리두기 가능',
    ],
    challenges: [
      '깊은 공감이 필요할 때 부족할 수 있음',
      '공감과 무관심 사이에서 고민',
      '가끔 감정 표현이 어색함',
    ],
    tips: [
      '중요한 관계에서는 더 깊이 공감해보세요',
      '감정 표현을 더 풍부하게 해보기',
      '비언어적 공감 (눈 맞춤, 터치) 시도해보기',
    ],
    inRelationships: '안정적인 파트너! 공감하면서도 휘둘리지 않아요',
    atWork: '팀워크와 독립 업무 모두 가능. 다양한 역할 소화 가능',
    selfCareAdvice: '당신의 균형 감각은 강점이에요. 가끔은 더 깊이 공감해보는 것도 관계를 풍요롭게 할 거예요.',
  },
  high: {
    type: 'high',
    title: '따뜻한 공감러',
    emoji: '💛',
    level: 75,
    description: '타인의 감정을 잘 읽고, 진심으로 공감하는 타입! 주변 사람들에게 위로와 힘이 되어주는 따뜻한 사람이에요. 감정이입 능력이 뛰어납니다.',
    characteristics: [
      '높은 감정이입 능력',
      '따뜻한 위로의 말',
      '타인의 기분을 잘 읽음',
      '자연스러운 공감 표현',
    ],
    strengths: [
      '깊은 인간관계 형성',
      '상담/위로에 탁월',
      '신뢰받는 존재',
      '팀 분위기 케어',
    ],
    challenges: [
      '타인의 감정에 영향 받기 쉬움',
      '감정 소진 위험',
      '거절이 어려울 수 있음',
      '경계선 설정 필요',
    ],
    tips: [
      '나를 위한 시간과 공간 확보하기',
      '모든 감정을 다 받아들이지 않아도 돼요',
      '건강한 경계선 세우는 연습',
      '자기 감정 돌보기 우선',
    ],
    inRelationships: '최고의 이해자! 다만 자신의 감정도 표현해주세요',
    atWork: '상담, 교육, 고객 대응, 팀 케어 역할에서 빛남',
    selfCareAdvice: '당신의 공감 능력은 선물이에요. 하지만 자신을 먼저 돌봐야 남도 돌볼 수 있어요. 충전 시간을 꼭 가지세요.',
  },
  empath: {
    type: 'empath',
    title: '고감도 엠파스',
    emoji: '🌟',
    level: 95,
    description: '타인의 감정을 마치 내 것처럼 느끼는 고감도 공감러! 감정의 스펀지처럼 주변의 감정을 흡수하는 특별한 능력이 있어요. 축복이자 도전입니다.',
    characteristics: [
      '감정의 스펀지',
      '분위기 변화 즉시 감지',
      '직관력 우수',
      '깊은 감정 연결',
    ],
    strengths: [
      '깊은 인간관계 형성',
      '뛰어난 직관력',
      '치유와 위로의 능력',
      '예술적 감수성',
    ],
    challenges: [
      '감정 과부하',
      '에너지 소진 빠름',
      '경계선 유지 어려움',
      '부정적 감정에 취약',
      '혼자 있는 시간 필수',
    ],
    tips: [
      '혼자만의 충전 시간 필수!',
      '에너지 뱀파이어로부터 거리두기',
      '명상, 자연 속 산책 추천',
      '감정의 주인이 누구인지 구분하는 연습',
      '"이건 내 감정이 아니야" 되뇌기',
    ],
    inRelationships: '영혼의 동반자가 될 수 있지만, 자기 보호 필수',
    atWork: '창작, 상담, 치유 분야에서 특별한 능력 발휘. 단, 에너지 관리 필수',
    selfCareAdvice: '당신은 특별한 능력을 가진 사람이에요. 하지만 그 능력이 당신을 지치게 하지 않도록, 자기 보호를 최우선으로 해주세요. 당신의 감정이 먼저입니다.',
  },
};

export function calculateResult(answers: number[]): EmpathyLevelResult {
  const scores: Record<EmpathyLevelType, number> = {
    low: 0,
    moderate: 0,
    high: 0,
    empath: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as EmpathyLevelType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: EmpathyLevelType = 'moderate';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as EmpathyLevelType;
    }
  });

  return results[resultType];
}
