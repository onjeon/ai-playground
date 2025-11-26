// 컬러 성격 테스트 질문 및 결과 데이터

export interface ColorQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>; // color type -> score
  }[];
}

export interface ColorResult {
  type: string;
  color: string;
  colorCode: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: string[];
  incompatibility: string[];
  advice: string;
}

// 컬러 유형
export const colorTypes = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'black'] as const;
export type ColorType = typeof colorTypes[number];

// 질문 데이터
export const questions: ColorQuestion[] = [
  {
    id: 1,
    question: "스트레스를 받았을 때 가장 하고 싶은 것은?",
    options: [
      { text: "격렬한 운동으로 에너지 발산", scores: { red: 2, orange: 1, yellow: 1 } },
      { text: "조용히 책을 읽거나 음악 감상", scores: { blue: 2, purple: 1, black: 1 } },
      { text: "친구들과 수다 떨며 웃기", scores: { yellow: 2, orange: 2, pink: 1 } },
      { text: "자연 속에서 산책하기", scores: { green: 2, blue: 1 } },
    ],
  },
  {
    id: 2,
    question: "어떤 분위기의 공간에서 가장 편안함을 느끼나요?",
    options: [
      { text: "화려하고 활기찬 분위기", scores: { red: 2, orange: 2, yellow: 1 } },
      { text: "차분하고 정돈된 분위기", scores: { blue: 2, green: 1, black: 1 } },
      { text: "따뜻하고 아늑한 분위기", scores: { pink: 2, orange: 1, yellow: 1 } },
      { text: "세련되고 고급스러운 분위기", scores: { purple: 2, black: 2 } },
    ],
  },
  {
    id: 3,
    question: "친구에게 가장 많이 듣는 말은?",
    options: [
      { text: "너 진짜 열정적이다", scores: { red: 2, orange: 1 } },
      { text: "너는 항상 차분해", scores: { blue: 2, green: 1, black: 1 } },
      { text: "너랑 있으면 기분이 좋아져", scores: { yellow: 2, pink: 2, orange: 1 } },
      { text: "넌 뭔가 신비로워", scores: { purple: 2, black: 1 } },
    ],
  },
  {
    id: 4,
    question: "중요한 결정을 내릴 때 나는?",
    options: [
      { text: "직감을 믿고 빠르게 결정한다", scores: { red: 2, orange: 1, yellow: 1 } },
      { text: "논리적으로 분석한 후 결정한다", scores: { blue: 2, black: 1 } },
      { text: "다른 사람의 의견을 많이 듣는다", scores: { green: 2, pink: 2 } },
      { text: "감정과 가치관에 따라 결정한다", scores: { purple: 2, pink: 1 } },
    ],
  },
  {
    id: 5,
    question: "이상적인 주말 오후는?",
    options: [
      { text: "새로운 도전이나 활동", scores: { red: 2, orange: 2 } },
      { text: "혼자만의 취미 생활", scores: { blue: 2, black: 2, purple: 1 } },
      { text: "친구들과 신나게 놀기", scores: { yellow: 2, pink: 1, orange: 1 } },
      { text: "가족과 함께 편안한 시간", scores: { green: 2, pink: 2 } },
    ],
  },
  {
    id: 6,
    question: "갈등 상황에서 나의 대처 방식은?",
    options: [
      { text: "직접적으로 문제를 해결하려 한다", scores: { red: 2, black: 1 } },
      { text: "시간을 갖고 냉정하게 생각한다", scores: { blue: 2, purple: 1 } },
      { text: "대화로 원만하게 풀어가려 한다", scores: { green: 2, yellow: 1, pink: 1 } },
      { text: "감정을 표현하고 공감을 구한다", scores: { orange: 2, pink: 2 } },
    ],
  },
  {
    id: 7,
    question: "나의 작업 스타일은?",
    options: [
      { text: "빠르고 강렬하게 집중해서 끝낸다", scores: { red: 2, orange: 1 } },
      { text: "계획적으로 체계적으로 진행한다", scores: { blue: 2, black: 1 } },
      { text: "여러 사람과 협력하며 한다", scores: { yellow: 2, green: 2 } },
      { text: "영감이 올 때 창의적으로 한다", scores: { purple: 2, orange: 1 } },
    ],
  },
  {
    id: 8,
    question: "사람들 앞에서 나는?",
    options: [
      { text: "자신감 있게 주도적으로 이끈다", scores: { red: 2, orange: 1, black: 1 } },
      { text: "조용히 관찰하며 필요할 때 의견을 낸다", scores: { blue: 2, purple: 1 } },
      { text: "분위기 메이커로 모두를 웃긴다", scores: { yellow: 2, orange: 2 } },
      { text: "다른 사람들을 배려하며 조화를 추구한다", scores: { green: 2, pink: 2 } },
    ],
  },
  {
    id: 9,
    question: "나를 가장 잘 표현하는 단어는?",
    options: [
      { text: "열정", scores: { red: 2, orange: 1 } },
      { text: "신뢰", scores: { blue: 2, green: 1 } },
      { text: "즐거움", scores: { yellow: 2, pink: 1, orange: 1 } },
      { text: "독특함", scores: { purple: 2, black: 2 } },
    ],
  },
  {
    id: 10,
    question: "실패했을 때 나의 반응은?",
    options: [
      { text: "빠르게 다시 도전한다", scores: { red: 2, orange: 2, yellow: 1 } },
      { text: "원인을 분석하고 개선책을 찾는다", scores: { blue: 2, black: 1 } },
      { text: "주변 사람들에게 위로받고 싶다", scores: { pink: 2, green: 1 } },
      { text: "혼자 조용히 감정을 정리한다", scores: { purple: 2, black: 1, blue: 1 } },
    ],
  },
  {
    id: 11,
    question: "여행을 간다면 어떤 스타일?",
    options: [
      { text: "모험적이고 활동적인 여행", scores: { red: 2, orange: 2 } },
      { text: "문화와 역사 탐방", scores: { blue: 2, purple: 1 } },
      { text: "현지인들과 어울리는 여행", scores: { yellow: 2, green: 1, pink: 1 } },
      { text: "힐링과 휴식 위주의 여행", scores: { green: 2, pink: 2, black: 1 } },
    ],
  },
  {
    id: 12,
    question: "가장 자신 있는 영역은?",
    options: [
      { text: "목표 달성과 성과", scores: { red: 2, black: 1 } },
      { text: "분석과 문제 해결", scores: { blue: 2, purple: 1 } },
      { text: "사람들과의 소통", scores: { yellow: 2, pink: 2, green: 1 } },
      { text: "창의성과 예술적 감각", scores: { purple: 2, orange: 2 } },
    ],
  },
];

// 결과 데이터
export const results: Record<ColorType, ColorResult> = {
  red: {
    type: 'red',
    color: '빨간색',
    colorCode: '#EF4444',
    emoji: '🔴',
    title: '열정의 빨강',
    description: '당신은 뜨거운 열정과 강한 추진력을 가진 빨간색 성격입니다. 도전을 즐기고 목표를 향해 거침없이 나아가는 리더십이 있습니다. 자신감이 넘치고 에너지가 강해서 주변 사람들에게 강렬한 인상을 남깁니다. 솔직하고 직설적인 커뮤니케이션을 선호합니다.',
    traits: ['열정적', '도전적', '추진력', '리더십', '자신감'],
    strengths: ['빠른 결단력', '강한 추진력', '목표 지향적', '솔직한 소통'],
    weaknesses: ['성급함', '인내심 부족', '타인 의견 무시 경향'],
    compatibility: ['노란색', '주황색'],
    incompatibility: ['파란색', '검정색'],
    advice: '때로는 한 발짝 물러서서 다른 사람의 의견에 귀 기울이는 것도 좋은 결과를 가져올 수 있어요.',
  },
  blue: {
    type: 'blue',
    color: '파란색',
    colorCode: '#3B82F6',
    emoji: '🔵',
    title: '신뢰의 파랑',
    description: '당신은 차분하고 신뢰감 있는 파란색 성격입니다. 논리적이고 분석적인 사고를 하며, 안정적이고 책임감 있는 모습으로 주변의 신뢰를 얻습니다. 깊이 있는 관계를 중시하고, 성실하게 약속을 지키는 타입입니다.',
    traits: ['차분함', '신뢰감', '논리적', '책임감', '성실함'],
    strengths: ['안정적인 판단력', '깊은 사고력', '신뢰성', '계획적인 실행'],
    weaknesses: ['변화에 대한 저항', '지나친 신중함', '감정 표현 서툼'],
    compatibility: ['초록색', '보라색'],
    incompatibility: ['빨간색', '주황색'],
    advice: '가끔은 완벽하지 않아도 괜찮아요. 즉흥적인 순간도 즐겨보세요!',
  },
  yellow: {
    type: 'yellow',
    color: '노란색',
    colorCode: '#FCD34D',
    emoji: '🟡',
    title: '행복의 노랑',
    description: '당신은 밝고 긍정적인 노란색 성격입니다. 유머 감각이 뛰어나고 사람들과 어울리는 것을 즐깁니다. 낙천적인 에너지로 주변을 환하게 만들고, 창의적인 아이디어가 샘솟는 타입입니다. 어디서든 분위기를 띄우는 사교계의 꽃입니다.',
    traits: ['밝음', '긍정적', '유머러스', '사교적', '창의적'],
    strengths: ['소통 능력', '창의력', '적응력', '긍정적 영향력'],
    weaknesses: ['집중력 부족', '진지함 부족', '일관성 부족'],
    compatibility: ['빨간색', '주황색', '분홍색'],
    incompatibility: ['검정색'],
    advice: '즐거움도 좋지만, 때로는 진지하게 깊이 파고드는 시간도 필요해요.',
  },
  green: {
    type: 'green',
    color: '초록색',
    colorCode: '#22C55E',
    emoji: '🟢',
    title: '조화의 초록',
    description: '당신은 평화롭고 조화로운 초록색 성격입니다. 배려심이 깊고 다른 사람의 감정을 잘 이해합니다. 갈등을 싫어하고 모든 사람이 행복한 결과를 추구합니다. 안정적이고 신뢰할 수 있는 존재로, 주변에 편안함을 줍니다.',
    traits: ['조화로움', '배려심', '안정감', '공감능력', '평화주의'],
    strengths: ['중재 능력', '경청', '인내심', '따뜻한 마음'],
    weaknesses: ['결단력 부족', '자기주장 약함', '변화 회피'],
    compatibility: ['파란색', '분홍색'],
    incompatibility: ['빨간색'],
    advice: '다른 사람을 위하는 것도 좋지만, 자신의 욕구와 의견도 소중히 여기세요.',
  },
  purple: {
    type: 'purple',
    color: '보라색',
    colorCode: '#8B5CF6',
    emoji: '🟣',
    title: '신비의 보라',
    description: '당신은 신비롭고 독특한 보라색 성격입니다. 깊은 내면의 세계를 가지고 있으며, 예술적 감각과 직관력이 뛰어납니다. 평범한 것을 싫어하고 자신만의 독특한 스타일을 추구합니다. 영적이고 철학적인 주제에 관심이 많습니다.',
    traits: ['신비로움', '창의적', '직관적', '독특함', '예술적'],
    strengths: ['창의력', '직관력', '깊은 통찰', '독창성'],
    weaknesses: ['현실감각 부족', '예민함', '이해받기 어려움'],
    compatibility: ['파란색', '검정색'],
    incompatibility: ['노란색', '주황색'],
    advice: '때로는 현실 세계에도 발을 딛고, 일상의 소소한 즐거움도 느껴보세요.',
  },
  orange: {
    type: 'orange',
    color: '주황색',
    colorCode: '#F97316',
    emoji: '🟠',
    title: '활력의 주황',
    description: '당신은 활기차고 모험적인 주황색 성격입니다. 새로운 경험을 추구하고 재미있는 것을 좋아합니다. 열정적이면서도 친근한 매력으로 사람들을 끌어들입니다. 낙관적이고 적극적으로 삶을 즐기는 타입입니다.',
    traits: ['활기참', '모험적', '친근함', '낙관적', '적극적'],
    strengths: ['적응력', '사교성', '추진력', '긍정적 태도'],
    weaknesses: ['무모함', '끈기 부족', '계획성 부족'],
    compatibility: ['빨간색', '노란색'],
    incompatibility: ['파란색', '보라색'],
    advice: '즉흥적인 것도 좋지만, 중요한 일에는 계획을 세워보는 것도 도움이 돼요.',
  },
  pink: {
    type: 'pink',
    color: '분홍색',
    colorCode: '#EC4899',
    emoji: '🩷',
    title: '사랑의 분홍',
    description: '당신은 따뜻하고 사랑이 넘치는 분홍색 성격입니다. 로맨틱하고 감성적이며, 관계를 무엇보다 중요하게 생각합니다. 세심하게 배려하고 돌보는 것을 좋아하며, 사랑받고 사랑하는 것에서 행복을 느낍니다.',
    traits: ['따뜻함', '로맨틱', '배려심', '감성적', '부드러움'],
    strengths: ['공감능력', '배려심', '사랑스러움', '관계 유지'],
    weaknesses: ['의존적', '예민함', '현실감각 부족'],
    compatibility: ['초록색', '노란색'],
    incompatibility: ['검정색', '빨간색'],
    advice: '사랑도 중요하지만, 자기 자신을 사랑하는 것도 잊지 마세요.',
  },
  black: {
    type: 'black',
    color: '검정색',
    colorCode: '#1F2937',
    emoji: '⚫',
    title: '세련의 블랙',
    description: '당신은 세련되고 독립적인 검정색 성격입니다. 강한 자기 신념을 가지고 있으며, 권위 있고 전문적인 이미지를 추구합니다. 불필요한 것을 싫어하고 본질에 집중합니다. 미스터리한 매력으로 사람들의 호기심을 자극합니다.',
    traits: ['세련됨', '독립적', '강인함', '전문성', '신비로움'],
    strengths: ['집중력', '자기관리', '전문성', '냉철한 판단'],
    weaknesses: ['냉정함', '타인과의 거리감', '완벽주의'],
    compatibility: ['보라색', '파란색'],
    incompatibility: ['노란색', '분홍색'],
    advice: '때로는 마음의 벽을 허물고 따뜻한 감정을 표현해보는 것도 좋아요.',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): ColorResult {
  const scores: Record<ColorType, number> = {
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
    purple: 0,
    orange: 0,
    pink: 0,
    black: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([color, score]) => {
        scores[color as ColorType] += score;
      });
    }
  });

  // 가장 높은 점수의 컬러 찾기
  let maxScore = 0;
  let resultType: ColorType = 'blue';

  Object.entries(scores).forEach(([color, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = color as ColorType;
    }
  });

  return results[resultType];
}
