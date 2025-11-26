// 미루기 테스트 - 당신의 미루기 레벨은?

export const questions = [
  {
    id: 1,
    question: "해야 할 일이 있으면?",
    options: [
      { text: "바로 한다", type: "proactive", score: 0 },
      { text: "계획 세우고 한다", type: "planned", score: 1 },
      { text: "좀 미루다 한다", type: "mild", score: 3 },
      { text: "마감 직전에 한다", type: "severe", score: 5 },
    ],
  },
  {
    id: 2,
    question: "마감이 일주일 남았다면?",
    options: [
      { text: "바로 시작한다", type: "proactive", score: 0 },
      { text: "며칠 내로 시작", type: "planned", score: 1 },
      { text: "3일 전부터 한다", type: "mild", score: 3 },
      { text: "전날 밤샘", type: "severe", score: 5 },
    ],
  },
  {
    id: 3,
    question: "중요한 이메일 답장은?",
    options: [
      { text: "바로 답장", type: "proactive", score: 0 },
      { text: "그날 중으로", type: "planned", score: 1 },
      { text: "며칠 후", type: "mild", score: 3 },
      { text: "잊어버릴 때까지", type: "severe", score: 5 },
    ],
  },
  {
    id: 4,
    question: "미루는 이유는?",
    options: [
      { text: "안 미룬다", type: "proactive", score: 0 },
      { text: "딱히 없다", type: "planned", score: 1 },
      { text: "귀찮아서", type: "mild", score: 3 },
      { text: "시작이 어려워서", type: "severe", score: 5 },
    ],
  },
  {
    id: 5,
    question: "유튜브/SNS 볼 때 나는?",
    options: [
      { text: "정해진 시간만", type: "proactive", score: 0 },
      { text: "적당히 본다", type: "planned", score: 1 },
      { text: "할 일 있어도 본다", type: "mild", score: 3 },
      { text: "몇 시간씩 빠진다", type: "severe", score: 5 },
    ],
  },
  {
    id: 6,
    question: "'내일 해야지' 하고 미룬 적?",
    options: [
      { text: "거의 없다", type: "proactive", score: 0 },
      { text: "가끔", type: "planned", score: 1 },
      { text: "자주", type: "mild", score: 3 },
      { text: "매일", type: "severe", score: 5 },
    ],
  },
  {
    id: 7,
    question: "마감 직전 나의 상태는?",
    options: [
      { text: "여유롭다", type: "proactive", score: 0 },
      { text: "마무리 중", type: "planned", score: 1 },
      { text: "급하게 하는 중", type: "mild", score: 3 },
      { text: "패닉/밤샘", type: "severe", score: 5 },
    ],
  },
  {
    id: 8,
    question: "일을 시작하기 전에?",
    options: [
      { text: "바로 시작", type: "proactive", score: 0 },
      { text: "준비하고 시작", type: "planned", score: 1 },
      { text: "딴짓 좀 하다", type: "mild", score: 3 },
      { text: "한참을 미룸", type: "severe", score: 5 },
    ],
  },
  {
    id: 9,
    question: "미루기 때문에 후회한 적?",
    options: [
      { text: "없다", type: "proactive", score: 0 },
      { text: "거의 없다", type: "planned", score: 1 },
      { text: "가끔", type: "mild", score: 3 },
      { text: "자주", type: "severe", score: 5 },
    ],
  },
  {
    id: 10,
    question: "집중력이?",
    options: [
      { text: "매우 좋다", type: "proactive", score: 0 },
      { text: "좋은 편", type: "planned", score: 1 },
      { text: "보통", type: "mild", score: 3 },
      { text: "쉽게 흐트러짐", type: "severe", score: 5 },
    ],
  },
  {
    id: 11,
    question: "할 일 목록을 만들면?",
    options: [
      { text: "다 해낸다", type: "proactive", score: 0 },
      { text: "대부분 한다", type: "planned", score: 1 },
      { text: "절반 정도", type: "mild", score: 3 },
      { text: "목록만 예쁘게", type: "severe", score: 5 },
    ],
  },
  {
    id: 12,
    question: "나의 미루기를 평가하면?",
    options: [
      { text: "안 미룬다", type: "proactive", score: 0 },
      { text: "보통", type: "planned", score: 1 },
      { text: "좀 심하다", type: "mild", score: 3 },
      { text: "프로 미루기꾼", type: "severe", score: 5 },
    ],
  },
];

export interface ProcrastinationResult {
  level: string;
  title: string;
  emoji: string;
  procrastinationScore: number;
  description: string;
  characteristics: string[];
  causes: string[];
  effects: string[];
  overcomingTips: string[];
  tools: string[];
  motivation: string;
}

const resultTypes: Record<string, ProcrastinationResult> = {
  proactive: {
    level: 'proactive',
    title: '실행력 만렙',
    emoji: '🚀',
    procrastinationScore: 10,
    description: '당신은 미루기와는 거리가 먼 실행력 갑! 할 일을 바로바로 처리하는 능력자입니다. 이 좋은 습관을 유지하세요!',
    characteristics: ['즉시 실행', '높은 생산성', '스트레스 적음'],
    causes: [],
    effects: ['높은 성취', '여유로운 마감', '좋은 습관'],
    overcomingTips: ['현재 상태 유지'],
    tools: ['현재 시스템 유지'],
    motivation: '당신의 실행력은 최고입니다! 계속 유지하세요!',
  },
  planned: {
    level: 'planned',
    title: '계획적인 사람',
    emoji: '📋',
    procrastinationScore: 25,
    description: '당신은 계획적으로 일을 처리하는 타입! 약간의 미루기는 있지만 건강한 수준이에요. 대체로 마감 전에 여유 있게 끝냅니다.',
    characteristics: ['계획적', '적당한 실행력', '마감 지킴'],
    causes: ['완벽주의 약간', '여유 부리기'],
    effects: ['대체로 좋은 결과', '적당한 스트레스'],
    overcomingTips: ['조금 더 일찍 시작하기', '버퍼 시간 줄이기'],
    tools: ['캘린더', '할 일 목록'],
    motivation: '좋은 습관을 가지고 있어요. 조금만 더 빠르게!',
  },
  mild: {
    level: 'mild',
    title: '미루기 동호회',
    emoji: '😅',
    procrastinationScore: 55,
    description: '당신은 미루기의 달콤함을 아는 타입! 마감 직전 폭발적으로 일하는 편이에요. 스트레스는 있지만 어떻게든 해내긴 합니다.',
    characteristics: ['미루기 일상', '마감 전 집중', 'SNS/유튜브 친구'],
    causes: ['귀찮음', '시작 어려움', '완벽주의', '보상 지연'],
    effects: ['스트레스', '질 하락', '후회', '밤샘'],
    overcomingTips: ['5분만 시작하기', '방해요소 제거', '작게 쪼개기', '보상 설정'],
    tools: ['포모도로 타이머', '앱 차단', '마감 알림'],
    motivation: '시작이 반이에요. 딱 5분만 해보세요!',
  },
  severe: {
    level: 'severe',
    title: '미루기 장인',
    emoji: '🦥',
    procrastinationScore: 90,
    description: '당신은 미루기의 끝판왕! 마감은 늘 전쟁이고, 패닉은 일상입니다. 미루기가 삶에 부정적 영향을 주고 있어요. 변화가 필요합니다.',
    characteristics: ['극심한 미루기', '상습 밤샘', '죄책감', '악순환'],
    causes: ['시작 공포', '완벽주의', '동기 부족', '자기조절 어려움', '불안'],
    effects: ['심한 스트레스', '건강 악화', '신뢰 하락', '자존감 저하', '기회 상실'],
    overcomingTips: ['완벽 버리기', '1분만 시작', '환경 바꾸기', '전문 도움 고려', '작은 성공 쌓기'],
    tools: ['심리 상담', '코칭', '앱 차단', '스터디 그룹', '바디더블'],
    motivation: '미루는 것도 이유가 있어요. 자책 대신 작은 시작부터!',
  },
};

export function calculateProcrastinationResult(answers: number[]): ProcrastinationResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage < 20) {
    return { ...resultTypes.proactive, procrastinationScore: Math.round(percentage) };
  } else if (percentage < 40) {
    return { ...resultTypes.planned, procrastinationScore: Math.round(percentage) };
  } else if (percentage < 70) {
    return { ...resultTypes.mild, procrastinationScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.severe, procrastinationScore: Math.round(percentage) };
  }
}
