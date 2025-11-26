// 첫인상 테스트 - 사람들이 보는 나의 첫인상은?

export const questions = [
  {
    id: 1,
    question: "처음 만난 사람에게 나는?",
    options: [
      { text: "먼저 말을 건다", type: "warm", score: 5 },
      { text: "상대가 말 걸면 대답한다", type: "calm", score: 3 },
      { text: "눈 마주치는 게 어색하다", type: "shy", score: 2 },
      { text: "표정 관리하며 관찰한다", type: "cool", score: 4 },
    ],
  },
  {
    id: 2,
    question: "평소 표정은?",
    options: [
      { text: "자주 웃는 편", type: "warm", score: 5 },
      { text: "무표정이 기본", type: "cool", score: 4 },
      { text: "부드러운 미소", type: "calm", score: 3 },
      { text: "긴장한 표정", type: "shy", score: 2 },
    ],
  },
  {
    id: 3,
    question: "목소리 톤은?",
    options: [
      { text: "밝고 에너지 넘침", type: "warm", score: 5 },
      { text: "차분하고 낮은 톤", type: "cool", score: 4 },
      { text: "부드럽고 온화함", type: "calm", score: 3 },
      { text: "작고 조심스러움", type: "shy", score: 2 },
    ],
  },
  {
    id: 4,
    question: "눈 맞춤 스타일은?",
    options: [
      { text: "적극적으로 눈 맞춤", type: "warm", score: 5 },
      { text: "날카롭게 응시", type: "cool", score: 4 },
      { text: "편안하게 바라봄", type: "calm", score: 3 },
      { text: "눈 피하는 편", type: "shy", score: 2 },
    ],
  },
  {
    id: 5,
    question: "패션 스타일은?",
    options: [
      { text: "화려하고 눈에 띄는", type: "warm", score: 5 },
      { text: "깔끔하고 세련된", type: "cool", score: 4 },
      { text: "단정하고 무난한", type: "calm", score: 3 },
      { text: "눈에 안 띄는 스타일", type: "shy", score: 2 },
    ],
  },
  {
    id: 6,
    question: "모임에서 나는?",
    options: [
      { text: "중심에서 분위기 리드", type: "warm", score: 5 },
      { text: "존재감 있게 자리 지킴", type: "cool", score: 4 },
      { text: "조용히 대화 참여", type: "calm", score: 3 },
      { text: "구석에서 관찰", type: "shy", score: 2 },
    ],
  },
  {
    id: 7,
    question: "악수할 때?",
    options: [
      { text: "힘차게 악수", type: "warm", score: 5 },
      { text: "단호하게 짧게", type: "cool", score: 4 },
      { text: "부드럽게", type: "calm", score: 3 },
      { text: "어색하게", type: "shy", score: 2 },
    ],
  },
  {
    id: 8,
    question: "첫 대화 주제는?",
    options: [
      { text: "재미있는 이야기", type: "warm", score: 5 },
      { text: "핵심적인 이야기", type: "cool", score: 4 },
      { text: "공감하는 이야기", type: "calm", score: 3 },
      { text: "대화 주도 못함", type: "shy", score: 2 },
    ],
  },
  {
    id: 9,
    question: "걸음걸이는?",
    options: [
      { text: "빠르고 활기차게", type: "warm", score: 5 },
      { text: "당당하고 자신감 있게", type: "cool", score: 4 },
      { text: "편안하고 여유롭게", type: "calm", score: 3 },
      { text: "조용히 조심스럽게", type: "shy", score: 2 },
    ],
  },
  {
    id: 10,
    question: "자기소개할 때?",
    options: [
      { text: "재미있게 어필", type: "warm", score: 5 },
      { text: "간결하고 임팩트 있게", type: "cool", score: 4 },
      { text: "차분하게 설명", type: "calm", score: 3 },
      { text: "긴장해서 더듬음", type: "shy", score: 2 },
    ],
  },
  {
    id: 11,
    question: "SNS 프로필 사진은?",
    options: [
      { text: "밝게 웃는 셀카", type: "warm", score: 5 },
      { text: "시크한 분위기", type: "cool", score: 4 },
      { text: "자연스러운 사진", type: "calm", score: 3 },
      { text: "얼굴 안 나온 사진", type: "shy", score: 2 },
    ],
  },
  {
    id: 12,
    question: "처음 만난 사람이 뭐라 할 것 같아?",
    options: [
      { text: "친근하고 재밌어 보여요", type: "warm", score: 5 },
      { text: "카리스마 있어 보여요", type: "cool", score: 4 },
      { text: "편안하고 좋아 보여요", type: "calm", score: 3 },
      { text: "조용하고 수줍어 보여요", type: "shy", score: 2 },
    ],
  },
];

export interface FirstImpressionResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  approachability: number;
  characteristics: string[];
  firstWords: string[];
  strengths: string[];
  misunderstandings: string[];
  tips: string[];
  bestMatch: string;
  celebrityMatch: string;
}

const resultTypes: Record<string, FirstImpressionResult> = {
  warm: {
    type: 'warm',
    title: '따뜻한 인상',
    emoji: '☀️',
    subtitle: '햇살 같은 첫인상',
    description: '당신은 만나자마자 편안하고 친근한 인상을 주는 타입! 밝은 에너지와 따뜻한 미소로 사람들에게 호감을 얻어요. 처음 보는 사람도 금방 친해지고 싶게 만드는 매력이 있습니다.',
    approachability: 95,
    characteristics: ['친근함', '밝은 에너지', '적극적', '사교적'],
    firstWords: ['반가워요!', '오늘 날씨 좋네요!', '만나서 반가워요~'],
    strengths: ['빠른 친해짐', '편안한 분위기', '기억에 남음'],
    misunderstandings: ['가벼워 보일 수 있음', '너무 친한 척한다고 오해'],
    tips: ['처음엔 약간의 거리를 두어도 OK', '진정성을 보여주기'],
    bestMatch: '모든 타입과 잘 어울림',
    celebrityMatch: '유재석, 아이유',
  },
  cool: {
    type: 'cool',
    title: '시크한 인상',
    emoji: '🖤',
    subtitle: '카리스마 넘치는 첫인상',
    description: '당신은 범접하기 어려운 카리스마와 시크함을 풍기는 타입! 첫인상에서 존재감과 위엄이 느껴져요. 처음엔 차가워 보이지만, 알고 보면 매력적인 갭 모에의 소유자입니다.',
    approachability: 45,
    characteristics: ['카리스마', '시크함', '존재감', '미스터리'],
    firstWords: ['안녕하세요.', '반갑습니다.', '(눈빛으로 인사)'],
    strengths: ['강한 인상', '존경심 유발', '프로페셔널'],
    misunderstandings: ['차갑다', '무섭다', '거만해 보인다'],
    tips: ['미소 한 번이 갭모에', '먼저 인사해보기'],
    bestMatch: '따뜻한 타입과 보완 관계',
    celebrityMatch: '전지현, 공유',
  },
  calm: {
    type: 'calm',
    title: '편안한 인상',
    emoji: '🌿',
    subtitle: '힐링되는 첫인상',
    description: '당신은 만나면 마음이 편해지는 인상을 주는 타입! 부드럽고 온화한 분위기로 상대를 안심시켜요. 자극적이지 않아서 누구와도 자연스럽게 어울립니다.',
    approachability: 75,
    characteristics: ['온화함', '편안함', '안정감', '신뢰'],
    firstWords: ['안녕하세요~', '네, 반가워요', '천천히 말씀하세요'],
    strengths: ['누구와도 잘 어울림', '갈등 없음', '신뢰감'],
    misunderstandings: ['존재감 없다', '소극적이다', '무난하다'],
    tips: ['가끔은 자기 어필도 필요', '의견 표현 연습'],
    bestMatch: '모든 타입과 무난하게',
    celebrityMatch: '송중기, 한가인',
  },
  shy: {
    type: 'shy',
    title: '수줍은 인상',
    emoji: '🌸',
    subtitle: '보호 본능 자극하는 첫인상',
    description: '당신은 조심스럽고 수줍은 첫인상을 주는 타입! 처음엔 조용하고 어색해 보이지만, 알면 알수록 매력이 느껴지는 반전 타입이에요. 보호 본능을 자극합니다.',
    approachability: 50,
    characteristics: ['수줍음', '조심스러움', '순수함', '반전 매력'],
    firstWords: ['아, 네...', '안녕하세요..', '(작은 목소리로 인사)'],
    strengths: ['순수해 보임', '친해지면 깊은 관계', '반전 매력'],
    misunderstandings: ['자신감 없다', '재미없다', '관심 없어 보인다'],
    tips: ['눈 맞춤 연습', '목소리 톤 올리기', '먼저 인사해보기'],
    bestMatch: '따뜻하고 리드하는 타입',
    celebrityMatch: '아이유(초기), 박보검',
  },
};

export function calculateFirstImpressionResult(answers: number[]): FirstImpressionResult {
  const typeScores: Record<string, number> = {
    warm: 0,
    cool: 0,
    calm: 0,
    shy: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'calm';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
