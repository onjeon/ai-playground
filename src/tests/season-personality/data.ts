// 계절 성격 테스트 - 나를 닮은 계절은?

export interface SeasonPersonalityQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface SeasonPersonalityResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  season: string;
  characteristics: string[];
  personality: string[];
  colorPalette: string[];
  strengths: string[];
  bestActivities: string[];
  loveStyle: string;
  advice: string;
}

export const seasons = ['spring', 'summer', 'autumn', 'winter'] as const;
export type Season = typeof seasons[number];

export const questions: SeasonPersonalityQuestion[] = [
  {
    id: 1,
    question: "가장 좋아하는 시간대는?",
    options: [
      { text: "상쾌한 이른 아침", scores: { spring: 3 } },
      { text: "활기찬 한낮", scores: { summer: 3 } },
      { text: "노을 지는 저녁", scores: { autumn: 3 } },
      { text: "고요한 밤", scores: { winter: 3 } },
    ],
  },
  {
    id: 2,
    question: "스트레스 받을 때 나는?",
    options: [
      { text: "새로운 것을 시작하며 환기", scores: { spring: 3 } },
      { text: "신나게 놀면서 풀어", scores: { summer: 3 } },
      { text: "조용히 혼자만의 시간", scores: { autumn: 3 } },
      { text: "깊이 생각하며 정리", scores: { winter: 3 } },
    ],
  },
  {
    id: 3,
    question: "선호하는 분위기는?",
    options: [
      { text: "밝고 화사한", scores: { spring: 3 } },
      { text: "열정적이고 활기찬", scores: { summer: 3 } },
      { text: "차분하고 감성적인", scores: { autumn: 3 } },
      { text: "고요하고 신비로운", scores: { winter: 3 } },
    ],
  },
  {
    id: 4,
    question: "관계에서 나는?",
    options: [
      { text: "새로운 만남에 열려있어", scores: { spring: 3 } },
      { text: "열정적이고 적극적", scores: { summer: 3 } },
      { text: "깊고 진한 관계 선호", scores: { autumn: 3 } },
      { text: "선택적이지만 깊은 유대", scores: { winter: 3 } },
    ],
  },
  {
    id: 5,
    question: "이상적인 주말은?",
    options: [
      { text: "꽃 구경, 피크닉", scores: { spring: 3 } },
      { text: "바다, 축제, 파티", scores: { summer: 3 } },
      { text: "단풍길 산책, 카페", scores: { autumn: 3 } },
      { text: "따뜻한 집, 독서, 영화", scores: { winter: 3 } },
    ],
  },
  {
    id: 6,
    question: "어울리는 컬러는?",
    options: [
      { text: "파스텔, 연한 핑크, 연두", scores: { spring: 3 } },
      { text: "비비드, 원색, 밝은 색", scores: { summer: 3 } },
      { text: "브라운, 오렌지, 머스타드", scores: { autumn: 3 } },
      { text: "블랙, 화이트, 네이비", scores: { winter: 3 } },
    ],
  },
  {
    id: 7,
    question: "일할 때 스타일은?",
    options: [
      { text: "새로운 아이디어와 시작", scores: { spring: 3 } },
      { text: "열정적으로 추진", scores: { summer: 3 } },
      { text: "꼼꼼하게 수확/마무리", scores: { autumn: 3 } },
      { text: "깊이 있게 계획/분석", scores: { winter: 3 } },
    ],
  },
  {
    id: 8,
    question: "음료 선호는?",
    options: [
      { text: "상큼한 과일 음료", scores: { spring: 3 } },
      { text: "시원한 아이스 음료", scores: { summer: 3 } },
      { text: "따뜻한 라떼, 차", scores: { autumn: 3 } },
      { text: "진한 커피, 핫초코", scores: { winter: 3 } },
    ],
  },
  {
    id: 9,
    question: "패션 스타일은?",
    options: [
      { text: "밝고 화사한 컬러", scores: { spring: 3 } },
      { text: "시원하고 활동적인", scores: { summer: 3 } },
      { text: "클래식하고 따뜻한", scores: { autumn: 3 } },
      { text: "시크하고 세련된", scores: { winter: 3 } },
    ],
  },
  {
    id: 10,
    question: "감정 표현 방식은?",
    options: [
      { text: "밝고 솔직하게", scores: { spring: 3 } },
      { text: "열정적이고 직접적으로", scores: { summer: 3 } },
      { text: "은유적이고 감성적으로", scores: { autumn: 3 } },
      { text: "절제하며 깊이있게", scores: { winter: 3 } },
    ],
  },
  {
    id: 11,
    question: "삶에서 중요한 것은?",
    options: [
      { text: "새로운 시작과 희망", scores: { spring: 3 } },
      { text: "열정과 즐거움", scores: { summer: 3 } },
      { text: "성숙함과 깊이", scores: { autumn: 3 } },
      { text: "고요함과 성찰", scores: { winter: 3 } },
    ],
  },
  {
    id: 12,
    question: "나를 한 단어로 표현하면?",
    options: [
      { text: "희망, 새로움", scores: { spring: 3 } },
      { text: "열정, 에너지", scores: { summer: 3 } },
      { text: "깊이, 감성", scores: { autumn: 3 } },
      { text: "고요, 신비", scores: { winter: 3 } },
    ],
  },
];

export const results: Record<Season, SeasonPersonalityResult> = {
  spring: {
    type: 'spring',
    title: '봄 사람',
    emoji: '🌸',
    description: '따뜻한 햇살처럼 밝고 화사한 당신! 새로운 시작과 희망을 상징하는 봄처럼 긍정적이고 생기 넘치는 에너지의 소유자입니다.',
    season: '봄 (Spring)',
    characteristics: ['밝고 화사함', '새로움 추구', '희망적', '친근함', '적응력 좋음'],
    personality: ['낙천적', '사교적', '창의적', '열린 마음', '긍정 에너지'],
    colorPalette: ['파스텔 핑크', '연두', '라벤더', '살구색', '하늘색'],
    strengths: ['새로운 시작 잘함', '분위기 밝게 만듦', '친화력 좋음', '변화에 유연'],
    bestActivities: ['꽃 구경', '피크닉', '새 프로젝트 시작', '사람들 만나기', '야외 활동'],
    loveStyle: '설레임과 로맨스를 추구하는 달달한 연애',
    advice: '가끔은 깊이 있는 관계와 마무리에도 집중해보세요',
  },
  summer: {
    type: 'summer',
    title: '여름 사람',
    emoji: '☀️',
    description: '뜨거운 태양처럼 열정적인 당신! 에너지가 넘치고 활동적인 여름처럼 주변을 환하게 밝히는 존재입니다.',
    season: '여름 (Summer)',
    characteristics: ['열정적', '활동적', '사교적', '즉흥적', '자유로움'],
    personality: ['외향적', '도전적', '리더십', '낙천적', '에너지 넘침'],
    colorPalette: ['비비드 오렌지', '블루', '화이트', '옐로우', '코럴'],
    strengths: ['추진력 강함', '분위기 주도', '행동력', '사람 모으는 힘'],
    bestActivities: ['바다/수영', '축제/파티', '여행', '스포츠', '모험'],
    loveStyle: '열정적이고 적극적인 직진 연애',
    advice: '가끔은 속도를 늦추고 차분히 생각하는 시간도 필요해요',
  },
  autumn: {
    type: 'autumn',
    title: '가을 사람',
    emoji: '🍂',
    description: '단풍처럼 깊고 풍요로운 당신! 성숙하고 감성적인 가을처럼 깊이 있는 매력의 소유자입니다.',
    season: '가을 (Autumn)',
    characteristics: ['감성적', '깊이 있음', '성숙함', '예술적', '사색적'],
    personality: ['내성적 매력', '통찰력', '감수성', '안정감', '지혜로움'],
    colorPalette: ['브라운', '머스타드', '버건디', '올리브', '베이지'],
    strengths: ['깊은 관계', '마무리 잘함', '감성 표현', '신뢰감', '조언 능력'],
    bestActivities: ['독서', '카페', '단풍길 산책', '예술 감상', '글쓰기'],
    loveStyle: '깊고 진한 감정의 로맨틱한 연애',
    advice: '새로운 시작과 변화도 두려워하지 마세요',
  },
  winter: {
    type: 'winter',
    title: '겨울 사람',
    emoji: '❄️',
    description: '순백의 눈처럼 순수하고 신비로운 당신! 고요하지만 깊은 내면을 가진 겨울처럼 차분하고 세련된 매력의 소유자입니다.',
    season: '겨울 (Winter)',
    characteristics: ['차분함', '신비로움', '깊은 사고', '독립적', '세련됨'],
    personality: ['내향적', '분석적', '신중함', '냉철함', '미스터리'],
    colorPalette: ['블랙', '화이트', '네이비', '실버', '아이스블루'],
    strengths: ['깊은 사고', '집중력', '독립성', '냉철한 판단', '신비로운 매력'],
    bestActivities: ['독서', '영화 감상', '명상', '겨울 스포츠', '따뜻한 공간에서 휴식'],
    loveStyle: '천천히 깊어지는 신중한 연애',
    advice: '따뜻한 감정 표현도 관계에 필요해요',
  },
};

export function calculateResult(answers: number[]): SeasonPersonalityResult {
  const scores: Record<Season, number> = {
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as Season] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: Season = 'spring';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as Season;
    }
  });

  return results[resultType];
}
