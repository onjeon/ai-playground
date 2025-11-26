// MZ 감수성 테스트 - 나는 얼마나 MZ스러운가?

export interface MZSensitivityQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MZSensitivityResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  generation: string;
  description: string;
  characteristics: string[];
  mzTraits: string[];
  nonMzTraits: string[];
  vocabulary: string[];
  socialMedia: string;
  workStyle: string;
  advice: string;
}

export const mzSensitivityTypes = ['ultra-mz', 'mz-native', 'mz-friendly', 'mz-curious', 'classic'] as const;
export type MZSensitivityType = typeof mzSensitivityTypes[number];

export const questions: MZSensitivityQuestion[] = [
  {
    id: 1,
    question: "'갓생'의 의미를 알고 있나요?",
    options: [
      { text: "당연! 나도 갓생 살려고 노력 중", scores: { 'ultra-mz': 3 } },
      { text: "알지~ 부지런하게 사는 거", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "들어본 것 같은데... 정확힌 모름", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "갓생? 처음 듣는데", scores: { classic: 3 } },
    ],
  },
  {
    id: 2,
    question: "워라밸에 대한 생각은?",
    options: [
      { text: "무조건 중요! 칼퇴가 정의", scores: { 'ultra-mz': 3 } },
      { text: "중요하지, 일과 삶의 균형 필수", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "중요하긴 한데 상황에 따라 유연하게", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "일이 먼저지, 워라밸은 사치", scores: { classic: 3 } },
    ],
  },
  {
    id: 3,
    question: "유튜브/틱톡 등 영상 플랫폼 사용 빈도는?",
    options: [
      { text: "매일 몇 시간씩, 없으면 못 살아", scores: { 'ultra-mz': 3 } },
      { text: "매일 보지, 쇼츠/릴스 위주로", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "가끔, 필요할 때만", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "거의 안 봄, TV가 편해", scores: { classic: 3 } },
    ],
  },
  {
    id: 4,
    question: "'소확행'을 실천하고 있나요?",
    options: [
      { text: "매일! 작은 행복이 최고", scores: { 'ultra-mz': 3 } },
      { text: "응, 커피 한 잔의 여유 같은 거", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "가끔 의식적으로 찾으려 함", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "그냥 사는 거지, 뭘 따로 찾아", scores: { classic: 3 } },
    ],
  },
  {
    id: 5,
    question: "회사에서 불합리한 지시를 받으면?",
    options: [
      { text: "왜요? 라고 바로 물음, 납득해야 함", scores: { 'ultra-mz': 3 } },
      { text: "조심스럽게 의견 표현함", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "일단 하고, 나중에 건의함", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "시키면 하는 거지, 질문 없음", scores: { classic: 3 } },
    ],
  },
  {
    id: 6,
    question: "MBTI에 대한 관심은?",
    options: [
      { text: "완전 관심! MBTI로 사람 분석함", scores: { 'ultra-mz': 3 } },
      { text: "알지, 가끔 얘기할 때 재밌음", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "내 거 정도는 알지만 깊진 않음", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "그거 믿냐? 혈액형보다도 별로", scores: { classic: 3 } },
    ],
  },
  {
    id: 7,
    question: "'플렉스'라는 말을 쓰나요?",
    options: [
      { text: "당연! 오늘도 플렉스 했지", scores: { 'ultra-mz': 3 } },
      { text: "가끔 쓰지, 재밌잖아", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "쓰진 않지만 뜻은 알아", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "무슨 뜻이야?", scores: { classic: 3 } },
    ],
  },
  {
    id: 8,
    question: "N잡(부업, 사이드 프로젝트)에 대한 생각은?",
    options: [
      { text: "당연히 해야지! 본업만으론 부족해", scores: { 'ultra-mz': 3 } },
      { text: "관심 있어, 기회 되면 해보고 싶음", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "본업에 집중하는 게 맞지 않나", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "한 우물 파야지, 부업은 불성실", scores: { classic: 3 } },
    ],
  },
  {
    id: 9,
    question: "회식에 대한 태도는?",
    options: [
      { text: "1차만, 2차는 내 시간이야", scores: { 'ultra-mz': 3 } },
      { text: "분위기 봐서, 가고 싶으면 더 가고", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "귀찮지만 분위기상 참석함", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "회식은 필수지, 팀워크야!", scores: { classic: 3 } },
    ],
  },
  {
    id: 10,
    question: "자기계발에 대한 생각은?",
    options: [
      { text: "성장 = 인생, 항상 뭔가 배움", scores: { 'ultra-mz': 3 } },
      { text: "필요한 건 배우지", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "가끔 생각은 하는데 실천은...", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "경험이 최고 스펙이야", scores: { classic: 3 } },
    ],
  },
  {
    id: 11,
    question: "인스타/틱톡 릴스/쇼츠 보는 시간은?",
    options: [
      { text: "잠들기 전 필수 코스, 1시간 이상", scores: { 'ultra-mz': 3 } },
      { text: "자주 보지, 재밌잖아", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "가끔, 추천 뜨면 보는 정도", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "거의 안 봄, 시간 낭비 같아", scores: { classic: 3 } },
    ],
  },
  {
    id: 12,
    question: "'갓벽' '점메추' '오저치고' 등 신조어를 얼마나 아나요?",
    options: [
      { text: "다 알지! 나도 자주 쓰는데", scores: { 'ultra-mz': 3 } },
      { text: "대부분 알아", scores: { 'mz-native': 2, 'ultra-mz': 1 } },
      { text: "하나는 알겠는데... 나머진 모름", scores: { 'mz-friendly': 2, 'mz-curious': 1 } },
      { text: "뭔 말이야? 하나도 모름", scores: { classic: 3 } },
    ],
  },
];

export const results: Record<MZSensitivityType, MZSensitivityResult> = {
  'ultra-mz': {
    type: 'ultra-mz',
    title: '찐 MZ',
    emoji: '🔥',
    percentage: 95,
    generation: '영혼까지 MZ',
    description: '당신은 MZ 세대의 정수를 담은 찐 MZ예요! 트렌드를 선도하고, MZ 가치관을 완벽하게 체화했어요. 워라밸, 갓생, 소확행... 모든 MZ 키워드가 당신의 일상이에요!',
    characteristics: ['트렌드 선도', '워라밸 중시', '자기 표현 적극적', 'SNS 헤비유저'],
    mzTraits: ['칼퇴 수호자', '솔직한 표현', '자기계발 덕후', 'MBTI 전문가'],
    nonMzTraits: ['거의 없음!'],
    vocabulary: ['갓생', '소확행', '플렉스', '점메추', '오저치고', '갓벽'],
    socialMedia: '인스타, 틱톡, 유튜브 섭렵, 쇼츠/릴스 중독',
    workStyle: '효율 중시, 불합리한 건 참지 않음, 칼퇴가 목표',
    advice: '완벽한 MZ예요! 다만 다른 세대와의 소통도 중요해요~',
  },
  'mz-native': {
    type: 'mz-native',
    title: 'MZ 네이티브',
    emoji: '✨',
    percentage: 75,
    generation: '자연스러운 MZ',
    description: '당신은 자연스럽게 MZ 문화를 흡수한 MZ 네이티브예요! MZ 가치관을 갖고 있지만, 극단적이지 않아서 다른 세대와도 잘 어울려요.',
    characteristics: ['적응력 좋음', '균형 잡힌', '자연스러운 MZ', '세대 간 통역사'],
    mzTraits: ['워라밸 중시', '자기표현', '트렌드 이해', '효율 추구'],
    nonMzTraits: ['가끔은 유연하게'],
    vocabulary: ['대부분 알고 적절히 사용'],
    socialMedia: '자주 사용하되 중독은 아님',
    workStyle: '효율적이지만 필요하면 유연하게 대처',
    advice: '균형 잡힌 MZ예요! 이 밸런스를 유지하세요~',
  },
  'mz-friendly': {
    type: 'mz-friendly',
    title: 'MZ 친화형',
    emoji: '🤝',
    percentage: 50,
    generation: 'MZ에 열린 사람',
    description: '당신은 MZ 세대는 아니지만, MZ 문화에 열려있고 이해하려 노력하는 타입이에요! 젊은 세대와도 소통이 가능하고, 트렌드에도 관심이 있어요.',
    characteristics: ['열린 마음', '적응력', '이해하려 노력', '균형 잡힌'],
    mzTraits: ['트렌드 관심', '워라밸 이해', '변화에 유연'],
    nonMzTraits: ['전통적 가치도 있음', '모든 신조어는 모름', '때론 보수적'],
    vocabulary: ['주요 신조어 정도는 앎'],
    socialMedia: '사용하지만 헤비유저는 아님',
    workStyle: '효율과 열정 사이 균형',
    advice: '좋은 밸런스예요! MZ 감성을 더 이해하면 소통이 더 쉬워질 거예요.',
  },
  'mz-curious': {
    type: 'mz-curious',
    title: 'MZ 궁금형',
    emoji: '🤔',
    percentage: 25,
    generation: 'MZ가 궁금해',
    description: '당신은 MZ 문화에 대해 궁금하지만 아직 익숙하지 않아요. "요즘 애들은~"이라고 생각할 때가 있지만, 이해하려는 마음은 있어요!',
    characteristics: ['궁금함', '배우려는 자세', '약간 어색', '전통적 성향'],
    mzTraits: ['변화에 대한 관심'],
    nonMzTraits: ['전통적 가치관', '회사 중심적', '신조어 어색'],
    vocabulary: ['들어본 것 같은데... 정확히 모름'],
    socialMedia: '기본적인 것만 사용',
    workStyle: '성실함 중시, 약간 전통적',
    advice: 'MZ 문화를 배워보세요! 젊은 세대와의 소통이 더 쉬워질 거예요.',
  },
  classic: {
    type: 'classic',
    title: '클래식 감성',
    emoji: '📻',
    percentage: 10,
    generation: '전통파',
    description: '당신은 MZ 문화와는 거리가 있는 클래식한 감성의 소유자예요! 신조어나 트렌드보다는 전통적인 가치를 중요시하죠. 그것도 하나의 개성이에요!',
    characteristics: ['전통적', '원칙 중시', '경험 중심', 'SNS 최소화'],
    mzTraits: ['거의 없음'],
    nonMzTraits: ['회사 중심', '열정 강조', '전통적 소통', '경험 우선'],
    vocabulary: ['신조어 1도 모름'],
    socialMedia: '거의 안 함, 필요할 때만',
    workStyle: '열심히 일하는 게 미덕, 야근도 OK',
    advice: '클래식도 멋져요! 다만 MZ 세대와 소통하려면 약간의 이해가 필요해요.',
  },
};

export function calculateResult(answers: number[]): MZSensitivityResult {
  const scores: Record<MZSensitivityType, number> = {
    'ultra-mz': 0,
    'mz-native': 0,
    'mz-friendly': 0,
    'mz-curious': 0,
    classic: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as MZSensitivityType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: MZSensitivityType = 'mz-friendly';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as MZSensitivityType;
    }
  });

  return results[resultType];
}
