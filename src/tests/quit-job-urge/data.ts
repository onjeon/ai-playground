// 퇴사 충동 지수 테스트 - 오늘도 퇴사각?

export interface QuitJobUrgeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface QuitJobUrgeResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  status: string;
  description: string;
  symptoms: string[];
  thoughts: string[];
  realityCheck: string;
  survivalTips: string[];
  shouldYouQuit: string;
  nextStep: string;
}

export const quitJobUrgeTypes = ['content', 'mild', 'moderate', 'high', 'critical'] as const;
export type QuitJobUrgeType = typeof quitJobUrgeTypes[number];

export const questions: QuitJobUrgeQuestion[] = [
  {
    id: 1,
    question: "일요일 저녁 기분은?",
    options: [
      { text: "내일 뭐하지~ (기대됨)", scores: { content: 3 } },
      { text: "아 벌써 일요일이 끝나네", scores: { mild: 2, content: 1 } },
      { text: "내일 출근 생각에 우울함", scores: { moderate: 2, mild: 1 } },
      { text: "월요일 생각만 해도 숨이 막힘", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 2,
    question: "출근길 기분은?",
    options: [
      { text: "오늘도 파이팅!", scores: { content: 3 } },
      { text: "그냥 무난하게 가는 중", scores: { mild: 2, content: 1 } },
      { text: "발걸음이 무거움, 시간이 안 감", scores: { moderate: 2, high: 1 } },
      { text: "출근길에 퇴근 생각만 함", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 3,
    question: "'퇴사'라는 단어를 얼마나 자주 생각하나요?",
    options: [
      { text: "거의 생각 안 함", scores: { content: 3 } },
      { text: "가끔 힘들 때", scores: { mild: 2, moderate: 1 } },
      { text: "일주일에 몇 번", scores: { moderate: 2, high: 1 } },
      { text: "매일, 하루에도 여러 번", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 4,
    question: "회사에서 점심시간 외에 가장 기다려지는 것은?",
    options: [
      { text: "의미 있는 프로젝트나 미팅", scores: { content: 3 } },
      { text: "동료들과의 수다 시간", scores: { mild: 2, content: 1 } },
      { text: "칼퇴 가능한 날", scores: { moderate: 2, mild: 1 } },
      { text: "퇴근 알람", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 5,
    question: "상사가 '잠깐 볼까?'라고 하면?",
    options: [
      { text: "네! (궁금함)", scores: { content: 3 } },
      { text: "(내가 뭘 잘못했지?)", scores: { mild: 2, moderate: 1 } },
      { text: "(제발 야근 아니길)", scores: { moderate: 2, high: 1 } },
      { text: "(이 회사 그만둘까...)", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 6,
    question: "업무 중 나도 모르게 하는 행동은?",
    options: [
      { text: "업무에 집중, 시간 가는 줄 모름", scores: { content: 3 } },
      { text: "가끔 SNS 잠깐 보기", scores: { mild: 2, content: 1 } },
      { text: "이직 사이트 둘러보기", scores: { moderate: 2, high: 1 } },
      { text: "퇴사 후 계획 상상, 로또 당첨 상상", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 7,
    question: "월급날 기분은?",
    options: [
      { text: "한 달 열심히 일한 보람!", scores: { content: 3 } },
      { text: "드디어 월급이다~", scores: { mild: 2, content: 1 } },
      { text: "이걸로 한 달을 버틴다고?", scores: { moderate: 2, high: 1 } },
      { text: "이 돈 받으려고 이 고생을...?", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 8,
    question: "야근 요청이 들어오면?",
    options: [
      { text: "필요하면 해야지!", scores: { content: 3 } },
      { text: "아... 알겠습니다 (속으로 한숨)", scores: { mild: 2, moderate: 1 } },
      { text: "또...? 핑계 찾는 중", scores: { moderate: 2, high: 1 } },
      { text: "이래서 퇴사해야 해", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 9,
    question: "동기나 후배가 퇴사한다고 하면?",
    options: [
      { text: "아쉽다, 잘 됐으면 좋겠네", scores: { content: 3 } },
      { text: "부럽긴 하다...", scores: { mild: 2, moderate: 1 } },
      { text: "나도 같이 나가고 싶다", scores: { moderate: 2, high: 1 } },
      { text: "배신감... 나만 남았네 ㅠㅠ", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 10,
    question: "회사 생활 중 가장 행복한 순간은?",
    options: [
      { text: "프로젝트 성공했을 때", scores: { content: 3 } },
      { text: "동료들과 좋은 시간 보낼 때", scores: { mild: 2, content: 1 } },
      { text: "칼퇴하는 날", scores: { moderate: 2, mild: 1 } },
      { text: "연차 쓸 때 / 퇴근할 때", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 11,
    question: "현재 회사 생활에 대한 솔직한 평가는?",
    options: [
      { text: "만족해, 성장하고 있어", scores: { content: 3 } },
      { text: "나쁘지 않아, 그냥저냥", scores: { mild: 2, content: 1 } },
      { text: "힘들지만 참고 다님", scores: { moderate: 2, high: 1 } },
      { text: "지옥이야, 탈출하고 싶어", scores: { high: 2, critical: 1 } },
    ],
  },
  {
    id: 12,
    question: "5년 후 이 회사에 있을 것 같나요?",
    options: [
      { text: "당연히! 성장하고 있으니까", scores: { content: 3 } },
      { text: "글쎄... 상황 봐서", scores: { mild: 2, moderate: 1 } },
      { text: "아마 아닐 것 같아", scores: { moderate: 2, high: 1 } },
      { text: "5년?! 5개월도 모르겠어", scores: { high: 2, critical: 1 } },
    ],
  },
];

export const results: Record<QuitJobUrgeType, QuitJobUrgeResult> = {
  content: {
    type: 'content',
    title: '회사 만족러',
    emoji: '😊',
    percentage: 10,
    status: '퇴사 충동 없음',
    description: '축하해요! 당신은 현재 직장에 만족하고 있어요. 일에서 보람을 느끼고, 성장하고 있다는 걸 느끼고 있네요. 이런 회사/환경을 찾기 쉽지 않아요!',
    symptoms: ['출근이 기대됨', '업무에 몰입함', '동료와 잘 지냄', '성장을 느낌'],
    thoughts: ['"오늘도 열심히!"', '"이 프로젝트 끝내고 싶다"', '"팀원들 좋아"'],
    realityCheck: '정말 좋은 환경이에요. 이 마음을 오래 유지할 수 있도록 스스로를 챙기세요.',
    survivalTips: [
      '지금 환경에 감사하기',
      '번아웃 예방 위해 쉴 땐 쉬기',
      '계속 성장할 수 있는 목표 세우기',
    ],
    shouldYouQuit: '지금은 아니에요! 이 환경 소중히 하세요.',
    nextStep: '현재 상태 유지하면서 더 성장할 방법 찾기',
  },
  mild: {
    type: 'mild',
    title: '가끔 흔들리는',
    emoji: '😐',
    percentage: 30,
    status: '가벼운 퇴사 충동',
    description: '일하다 보면 가끔 "퇴사할까?" 생각이 스치지만, 대체로 괜찮은 편이에요. 누구나 그럴 수 있어요! 아직은 버틸 만해요.',
    symptoms: ['가끔 힘들 때 퇴사 생각', '일요일 저녁 살짝 우울', '대체로 무난하게 출근'],
    thoughts: ['"오늘 좀 힘드네"', '"그래도 다닐 만해"', '"언젠간 이직하려나"'],
    realityCheck: '정상적인 직장인의 감정이에요. 너무 걱정하지 마세요.',
    survivalTips: [
      '스트레스 해소할 취미 찾기',
      '칼퇴하는 날 만들기',
      '동료와 힘든 점 나누기',
      '작은 성취감 느끼기',
    ],
    shouldYouQuit: '아직 아니에요. 힘들 때 리프레시하면서 버텨봐요.',
    nextStep: '현재 불만 요소가 뭔지 파악하고, 개선 가능한지 생각해보기',
  },
  moderate: {
    type: 'moderate',
    title: '흔들리는 중',
    emoji: '😓',
    percentage: 55,
    status: '중간 정도의 퇴사 충동',
    description: '퇴사 생각이 자주 드는 편이에요. 출근이 힘들고, 이직 사이트를 슬슬 보기 시작했을 수도 있어요. 지금 뭐가 문제인지 점검이 필요해요.',
    symptoms: ['주 1-2회 퇴사 생각', '출근길이 무거움', '이직 사이트 탐색 시작', '월요일이 싫음'],
    thoughts: ['"이러다 나도 퇴사하나"', '"여기 계속 다녀야 하나"', '"다른 데는 어떨까"'],
    realityCheck: '현재 상황을 객관적으로 봐야 할 때예요. 뭐가 힘든 건지 정리해보세요.',
    survivalTips: [
      '힘든 원인 파악하기 (업무? 인간관계? 성장?)',
      '상사/HR과 솔직한 대화 시도',
      '이직 준비 슬슬 시작해도 OK',
      '번아웃 예방 위해 휴가 쓰기',
    ],
    shouldYouQuit: '바로 퇴사보다는 원인 파악 먼저. 개선 가능하면 시도해보세요.',
    nextStep: '3개월 정도 지켜보면서 나아지는지 확인, 안 되면 이직 준비',
  },
  high: {
    type: 'high',
    title: '퇴사 임박',
    emoji: '😫',
    percentage: 80,
    status: '높은 퇴사 충동',
    description: '매일 퇴사 생각을 해요. 출근이 너무 힘들고, 이미 마음은 이 회사를 떠났을 수도 있어요. 진지하게 다음 스텝을 고민할 때예요.',
    symptoms: ['매일 퇴사 생각', '출근이 고문', '업무 의욕 바닥', '이직 사이트 매일 방문'],
    thoughts: ['"언제까지 버텨야 하지"', '"퇴사하고 싶다"', '"다음 달엔 나갈까"'],
    realityCheck: '이 상태로 오래 버티면 정신 건강에 안 좋아요. 변화가 필요해요.',
    survivalTips: [
      '이직 준비 본격적으로 시작',
      '포트폴리오/이력서 업데이트',
      '재정 상황 점검 (퇴사 후 버틸 수 있는지)',
      '번아웃이면 휴식 먼저',
    ],
    shouldYouQuit: '준비가 되면 퇴사해도 괜찮아요. 단, 다음 계획 없이 나가진 마세요.',
    nextStep: '이직 준비하면서 기회 보기, 좋은 곳 나오면 이직',
  },
  critical: {
    type: 'critical',
    title: '긴급 탈출 필요',
    emoji: '🆘',
    percentage: 95,
    status: '심각한 퇴사 충동',
    description: '지금 당장이라도 퇴사하고 싶은 상태예요. 회사 생각만 해도 힘들고, 정신적/신체적으로 지쳐있을 수 있어요. 건강이 최우선이에요!',
    symptoms: ['출근 자체가 고통', '몸/마음이 아픔', '매 순간 퇴사 생각', '더 이상 못 버티겠음'],
    thoughts: ['"제발 그만두고 싶다"', '"내일 출근하기 싫다"', '"여기 1초도 더 못 있겠어"'],
    realityCheck: '이 상태가 지속되면 건강을 해칠 수 있어요. 자신을 먼저 챙기세요.',
    survivalTips: [
      '건강 먼저! 필요하면 병가/휴직 고려',
      '신뢰할 수 있는 사람과 상담',
      '다음이 없어도 퇴사 고려해야 할 수준',
      '전문가 상담도 도움이 돼요',
    ],
    shouldYouQuit: '건강이 나빠지고 있다면 퇴사를 심각하게 고려하세요. 돈보다 건강이에요.',
    nextStep: '최대한 빨리 탈출 계획 세우기. 쉬면서 다음을 준비해도 괜찮아요.',
  },
};

export function calculateResult(answers: number[]): QuitJobUrgeResult {
  const scores: Record<QuitJobUrgeType, number> = {
    content: 0,
    mild: 0,
    moderate: 0,
    high: 0,
    critical: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as QuitJobUrgeType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: QuitJobUrgeType = 'mild';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as QuitJobUrgeType;
    }
  });

  return results[resultType];
}
