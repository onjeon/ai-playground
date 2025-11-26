// 유머 유형 테스트 - 당신의 웃음 포인트는?

export const questions = [
  {
    id: 1,
    question: "웃길 때 주로 쓰는 방법은?",
    options: [
      { text: "말장난, 언어유희", type: "wordplay", score: 5 },
      { text: "상황극, 리액션", type: "physical", score: 4 },
      { text: "자기 비하 개그", type: "selfDeprecating", score: 3 },
      { text: "블랙 코미디, 풍자", type: "dark", score: 2 },
    ],
  },
  {
    id: 2,
    question: "개그 프로그램 중 좋아하는 스타일은?",
    options: [
      { text: "개그콘서트 같은 콩트", type: "physical", score: 5 },
      { text: "SNL 같은 풍자 코미디", type: "dark", score: 4 },
      { text: "유튜브 밈/짤 유머", type: "meme", score: 3 },
      { text: "토크쇼/예능 입담", type: "wordplay", score: 2 },
    ],
  },
  {
    id: 3,
    question: "친구들이 말하는 내 유머 스타일은?",
    options: [
      { text: "똑똑한 유머", type: "wordplay", score: 5 },
      { text: "몸 개그 장인", type: "physical", score: 4 },
      { text: "자폭 유머", type: "selfDeprecating", score: 3 },
      { text: "독특하고 센스있음", type: "meme", score: 2 },
    ],
  },
  {
    id: 4,
    question: "드립을 칠 때 주로?",
    options: [
      { text: "말로 센스 있게", type: "wordplay", score: 5 },
      { text: "표정과 행동으로", type: "physical", score: 4 },
      { text: "자기를 까면서", type: "selfDeprecating", score: 3 },
      { text: "인터넷 밈 활용", type: "meme", score: 2 },
    ],
  },
  {
    id: 5,
    question: "웃음 포인트가 터지는 순간은?",
    options: [
      { text: "기발한 말장난", type: "wordplay", score: 5 },
      { text: "예상 못한 행동", type: "physical", score: 4 },
      { text: "뼈 때리는 자학개그", type: "selfDeprecating", score: 3 },
      { text: "현실 풍자 유머", type: "dark", score: 2 },
    ],
  },
  {
    id: 6,
    question: "웃기려다 실패하면?",
    options: [
      { text: "그것도 웃기게 만듦", type: "physical", score: 5 },
      { text: "민망해서 자학개그로 전환", type: "selfDeprecating", score: 4 },
      { text: "쿨하게 넘김", type: "dark", score: 2 },
      { text: "설명 추가해서 살림", type: "wordplay", score: 3 },
    ],
  },
  {
    id: 7,
    question: "좋아하는 코미디언 스타일은?",
    options: [
      { text: "유재석 (순발력, 입담)", type: "wordplay", score: 5 },
      { text: "박명수 (돌발, 파격)", type: "physical", score: 4 },
      { text: "조세호 (자학개그)", type: "selfDeprecating", score: 3 },
      { text: "유병재 (풍자, 블랙)", type: "dark", score: 2 },
    ],
  },
  {
    id: 8,
    question: "SNS에서 웃기다고 느끼는 콘텐츠는?",
    options: [
      { text: "말장난, 아재개그", type: "wordplay", score: 5 },
      { text: "짤, 밈 시리즈", type: "meme", score: 4 },
      { text: "자기비하 에피소드", type: "selfDeprecating", score: 3 },
      { text: "사회 풍자 콘텐츠", type: "dark", score: 2 },
    ],
  },
  {
    id: 9,
    question: "단체 대화에서 웃길 때?",
    options: [
      { text: "타이밍 좋은 한마디", type: "wordplay", score: 5 },
      { text: "과장된 리액션", type: "physical", score: 4 },
      { text: "내 실패담 공유", type: "selfDeprecating", score: 3 },
      { text: "밈/드립 던지기", type: "meme", score: 2 },
    ],
  },
  {
    id: 10,
    question: "개그 센스는 어디서 왔을까?",
    options: [
      { text: "독서/지식에서", type: "wordplay", score: 5 },
      { text: "예능 보면서", type: "physical", score: 4 },
      { text: "타고난 자학 본능", type: "selfDeprecating", score: 3 },
      { text: "인터넷 문화에서", type: "meme", score: 2 },
    ],
  },
  {
    id: 11,
    question: "유머의 목적은?",
    options: [
      { text: "지적인 즐거움", type: "wordplay", score: 5 },
      { text: "분위기 띄우기", type: "physical", score: 4 },
      { text: "긴장 풀기, 친해지기", type: "selfDeprecating", score: 3 },
      { text: "현실 비틀기", type: "dark", score: 2 },
    ],
  },
  {
    id: 12,
    question: "내 유머가 안 통하면?",
    options: [
      { text: "이해 못하는 거라 생각", type: "wordplay", score: 5 },
      { text: "더 크게 리액션", type: "physical", score: 4 },
      { text: "자책하며 웃음", type: "selfDeprecating", score: 3 },
      { text: "그냥 쿨하게", type: "dark", score: 2 },
    ],
  },
];

export interface HumorTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  funnyScore: number;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  bestAudience: string;
  worstAudience: string;
  improveTips: string[];
  funnyExamples: string[];
  celebrityMatch: string;
}

const resultTypes: Record<string, HumorTypeResult> = {
  wordplay: {
    type: 'wordplay',
    title: '언어유희형',
    emoji: '🎭',
    subtitle: '말 센스 천재',
    description: '당신은 말로 웃기는 천재! 말장난, 언어유희, 타이밍 좋은 한마디가 특기예요. 지적인 유머로 사람들을 웃기고, 순발력이 뛰어납니다.',
    funnyScore: 85,
    characteristics: ['말 센스', '순발력', '언어유희', '위트'],
    strengths: ['지적인 유머', '다양한 상황 적용', '기억에 남음'],
    weaknesses: ['이해 못하면 썰렁', '아재개그로 전락 위험'],
    bestAudience: '지적인 사람들',
    worstAudience: '말장난 싫어하는 사람',
    improveTips: ['더 많이 읽고 배우기', '타이밍 연습', '청중 수준 파악'],
    funnyExamples: ['절묘한 말장난', '더블 미닝', '상황에 맞는 위트'],
    celebrityMatch: '유재석, 신동엽',
  },
  physical: {
    type: 'physical',
    title: '몸 개그형',
    emoji: '🤸',
    subtitle: '리액션의 달인',
    description: '당신은 표정과 몸으로 웃기는 타입! 과장된 리액션, 표정 연기, 상황극이 특기예요. 보는 것만으로 웃음을 주는 분위기 메이커입니다.',
    funnyScore: 90,
    characteristics: ['리액션', '표정 연기', '과장', '에너지'],
    strengths: ['즉각적 웃음', '언어 장벽 없음', '분위기 띄우기'],
    weaknesses: ['체력 소모', '과하면 피곤', '진지한 상황에 부적합'],
    bestAudience: '에너지 넘치는 그룹',
    worstAudience: '진지한 분위기',
    improveTips: ['강약 조절', '타이밍 잡기', '상황 파악'],
    funnyExamples: ['과장된 표정', '예상 못한 행동', '슬랩스틱'],
    celebrityMatch: '박명수, 이수근',
  },
  selfDeprecating: {
    type: 'selfDeprecating',
    title: '자학개그형',
    emoji: '😅',
    subtitle: '자폭 유머의 정수',
    description: '당신은 자기 자신을 소재로 웃기는 타입! 실패담, 자기 비하 유머로 분위기를 풀어요. 겸손하면서도 친근한 웃음을 선사합니다.',
    funnyScore: 75,
    characteristics: ['자기 비하', '겸손', '친근함', '공감대'],
    strengths: ['빠른 친해짐', '부담 없는 웃음', '겸손해 보임'],
    weaknesses: ['과하면 불쌍해 보임', '자존감 하락 우려'],
    bestAudience: '처음 만난 사람들',
    worstAudience: '진짜로 걱정하는 사람',
    improveTips: ['적절한 선 지키기', '자신감 있게', '다른 유머도 섞기'],
    funnyExamples: ['나의 실패담', '자기 외모 드립', '민망한 경험 공유'],
    celebrityMatch: '조세호, 이진호',
  },
  dark: {
    type: 'dark',
    title: '블랙코미디형',
    emoji: '🖤',
    subtitle: '풍자와 독설의 마스터',
    description: '당신은 날카로운 풍자와 블랙 코미디를 구사하는 타입! 현실을 비틀어 웃기고, 독특한 시각으로 사람들을 웃겨요.',
    funnyScore: 70,
    characteristics: ['풍자', '날카로움', '독특함', '지적'],
    strengths: ['깊은 웃음', '생각하게 만듦', '기억에 남음'],
    weaknesses: ['호불호 강함', '불편할 수 있음', '오해 소지'],
    bestAudience: '같은 취향의 사람들',
    worstAudience: '진지하거나 보수적인 사람',
    improveTips: ['선 파악하기', '청중 파악', '가벼운 유머도 섞기'],
    funnyExamples: ['현실 풍자', '뼈 때리는 한마디', '블랙 유머'],
    celebrityMatch: '유병재, 장도연',
  },
  meme: {
    type: 'meme',
    title: '밈 마스터형',
    emoji: '🌐',
    subtitle: '인터넷 유머의 선봉장',
    description: '당신은 최신 밈과 인터넷 유머에 정통한 타입! 시의적절한 짤과 밈으로 웃기고, 온라인 감각이 뛰어나요.',
    funnyScore: 80,
    characteristics: ['트렌디', '밈 활용', '공감대', '빠른 적용'],
    strengths: ['MZ세대 공감', '트렌디함', '빠른 업데이트'],
    weaknesses: ['세대 차이 있음', '오프라인에서 약함', '유행 지나면 끝'],
    bestAudience: '인터넷 문화 아는 사람',
    worstAudience: '밈 모르는 사람',
    improveTips: ['오프라인 유머도 개발', '클래식 유머 배우기', '설명 능력'],
    funnyExamples: ['시의적절한 밈', '짤 활용', '인터넷 드립'],
    celebrityMatch: '침착맨, 주호민',
  },
};

export function calculateHumorTypeResult(answers: number[]): HumorTypeResult {
  const typeScores: Record<string, number> = {
    wordplay: 0,
    physical: 0,
    selfDeprecating: 0,
    dark: 0,
    meme: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'wordplay';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
