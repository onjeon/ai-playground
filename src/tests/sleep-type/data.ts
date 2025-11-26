// 수면 유형 테스트 - 당신의 수면 패턴은?

export const questions = [
  {
    id: 1,
    question: "주로 잠드는 시간은?",
    options: [
      { text: "밤 10시 이전", type: "early", score: 1 },
      { text: "밤 10시~12시", type: "normal", score: 2 },
      { text: "새벽 12시~2시", type: "late", score: 4 },
      { text: "새벽 2시 이후", type: "night_owl", score: 5 },
    ],
  },
  {
    id: 2,
    question: "주로 일어나는 시간은?",
    options: [
      { text: "오전 6시 이전", type: "early", score: 5 },
      { text: "오전 6시~8시", type: "normal", score: 3 },
      { text: "오전 8시~10시", type: "late", score: 2 },
      { text: "오전 10시 이후", type: "night_owl", score: 1 },
    ],
  },
  {
    id: 3,
    question: "아침에 일어나면?",
    options: [
      { text: "상쾌하고 활기참", type: "morning", score: 5 },
      { text: "보통", type: "neutral", score: 3 },
      { text: "좀 힘들다", type: "night", score: 2 },
      { text: "좀비 상태", type: "night_owl", score: 1 },
    ],
  },
  {
    id: 4,
    question: "가장 집중 잘 되는 시간은?",
    options: [
      { text: "아침 일찍", type: "morning", score: 5 },
      { text: "오전 중", type: "neutral", score: 3 },
      { text: "오후~저녁", type: "night", score: 2 },
      { text: "밤~새벽", type: "night_owl", score: 1 },
    ],
  },
  {
    id: 5,
    question: "주말 수면 패턴은?",
    options: [
      { text: "평일과 같다", type: "consistent", score: 5 },
      { text: "1-2시간 늦게", type: "normal", score: 3 },
      { text: "3-4시간 늦게", type: "irregular", score: 2 },
      { text: "완전히 다르다", type: "chaotic", score: 1 },
    ],
  },
  {
    id: 6,
    question: "알람 없이 일어날 수 있나?",
    options: [
      { text: "자연스럽게 일어남", type: "natural", score: 5 },
      { text: "가끔 가능", type: "normal", score: 3 },
      { text: "어렵다", type: "dependent", score: 2 },
      { text: "절대 불가능", type: "heavy", score: 1 },
    ],
  },
  {
    id: 7,
    question: "잠드는 데 걸리는 시간은?",
    options: [
      { text: "10분 이내", type: "fast", score: 5 },
      { text: "10-30분", type: "normal", score: 3 },
      { text: "30분-1시간", type: "slow", score: 2 },
      { text: "1시간 이상", type: "insomnia", score: 1 },
    ],
  },
  {
    id: 8,
    question: "수면의 질은?",
    options: [
      { text: "푹 잔다", type: "good", score: 5 },
      { text: "대체로 좋다", type: "normal", score: 3 },
      { text: "자주 깬다", type: "light", score: 2 },
      { text: "수면 부족", type: "poor", score: 1 },
    ],
  },
  {
    id: 9,
    question: "낮잠은?",
    options: [
      { text: "안 잔다", type: "no_nap", score: 4 },
      { text: "가끔 짧게", type: "occasional", score: 3 },
      { text: "자주 잔다", type: "frequent", score: 2 },
      { text: "필수다", type: "necessary", score: 1 },
    ],
  },
  {
    id: 10,
    question: "수면 전 휴대폰 사용은?",
    options: [
      { text: "안 한다", type: "healthy", score: 5 },
      { text: "잠깐", type: "moderate", score: 3 },
      { text: "꽤 오래", type: "heavy", score: 2 },
      { text: "폰 보다 잠듦", type: "excessive", score: 1 },
    ],
  },
  {
    id: 11,
    question: "평균 수면 시간은?",
    options: [
      { text: "7-9시간", type: "optimal", score: 5 },
      { text: "6-7시간", type: "adequate", score: 3 },
      { text: "5-6시간", type: "lacking", score: 2 },
      { text: "5시간 미만", type: "deprived", score: 1 },
    ],
  },
  {
    id: 12,
    question: "이상적인 수면 스케줄이라면?",
    options: [
      { text: "저녁 10시 취침, 새벽 6시 기상", type: "early_bird", score: 5 },
      { text: "밤 11시 취침, 오전 7시 기상", type: "normal", score: 4 },
      { text: "새벽 1시 취침, 오전 9시 기상", type: "late", score: 2 },
      { text: "새벽 3시 취침, 오후 12시 기상", type: "night_owl", score: 1 },
    ],
  },
];

export interface SleepTypeResult {
  type: string;
  title: string;
  emoji: string;
  sleepScore: number;
  chronotype: string;
  description: string;
  characteristics: string[];
  peakHours: string;
  idealSchedule: string;
  strengths: string[];
  challenges: string[];
  improvementTips: string[];
  healthAdvice: string;
}

const resultTypes: Record<string, SleepTypeResult> = {
  early_bird: {
    type: 'early_bird',
    title: '얼리버드',
    emoji: '🐦',
    sleepScore: 90,
    chronotype: '아침형',
    description: '당신은 일찍 자고 일찍 일어나는 아침형 인간! 아침에 가장 활기차고 생산적이에요. 사회적 스케줄과 잘 맞아서 유리합니다.',
    characteristics: ['일찍 기상', '아침 활력', '규칙적', '낮 집중력'],
    peakHours: '오전 6시 ~ 오후 12시',
    idealSchedule: '밤 10시 취침, 오전 6시 기상',
    strengths: ['사회 스케줄 적합', '아침 생산성', '규칙적 생활'],
    challenges: ['밤 모임 어려움', '저녁 피로'],
    improvementTips: ['저녁 약속 조절', '아침 루틴 활용', '밝은 아침 환경'],
    healthAdvice: '이른 저녁 식사, 저녁 카페인 피하기',
  },
  normal: {
    type: 'normal',
    title: '밸런스형',
    emoji: '⚖️',
    sleepScore: 75,
    chronotype: '중간형',
    description: '당신은 균형 잡힌 수면 패턴을 가지고 있어요! 아침과 저녁 모두 적당히 활동할 수 있고, 사회적 스케줄에 잘 적응합니다.',
    characteristics: ['유연함', '적응력', '밸런스', '보통 스케줄'],
    peakHours: '오전 10시 ~ 오후 6시',
    idealSchedule: '밤 11시 취침, 오전 7시 기상',
    strengths: ['적응력', '유연성', '다양한 스케줄 가능'],
    challenges: ['특별히 없음'],
    improvementTips: ['규칙적 유지', '수면 위생 관리', '일관성'],
    healthAdvice: '7-8시간 수면 유지, 규칙적 스케줄',
  },
  night_owl: {
    type: 'night_owl',
    title: '올빼미형',
    emoji: '🦉',
    sleepScore: 50,
    chronotype: '저녁형',
    description: '당신은 밤에 가장 활기찬 올빼미형! 창의적인 일은 밤에 잘 되지만, 사회적 스케줄과 안 맞아 힘들 수 있어요.',
    characteristics: ['늦은 취침', '밤 활력', '아침 힘듦', '창의적'],
    peakHours: '오후 6시 ~ 새벽 2시',
    idealSchedule: '새벽 1-2시 취침, 오전 9-10시 기상',
    strengths: ['야간 창의력', '밤 집중력', '독특한 시각'],
    challenges: ['아침 힘듦', '사회 스케줄 부적합', '수면 부채'],
    improvementTips: ['점진적 앞당기기', '아침 햇빛 노출', '밤 블루라이트 차단'],
    healthAdvice: '사회 스케줄에 맞추기 어려우면 유연근무 고려',
  },
  irregular: {
    type: 'irregular',
    title: '불규칙형',
    emoji: '🌀',
    sleepScore: 35,
    chronotype: '불규칙',
    description: '당신의 수면 패턴은 불규칙해요! 매일 다른 시간에 자고 일어나서 몸이 적응하기 어려워요. 규칙적인 수면이 필요합니다.',
    characteristics: ['불규칙', '예측 불가', '수면 부채', '피로'],
    peakHours: '불규칙',
    idealSchedule: '일관된 스케줄 만들기 필요',
    strengths: ['유연성'],
    challenges: ['만성 피로', '집중력 저하', '건강 문제', '생체리듬 혼란'],
    improvementTips: ['같은 시간 기상', '주말도 동일하게', '수면 루틴', '카페인 조절'],
    healthAdvice: '규칙적인 수면 스케줄이 건강의 기본입니다',
  },
  poor: {
    type: 'poor',
    title: '수면 부족형',
    emoji: '😴',
    sleepScore: 20,
    chronotype: '수면 부족',
    description: '당신은 심각한 수면 부족 상태! 잠이 부족하면 건강, 기분, 생산성 모두 악화돼요. 수면을 우선순위로 두세요.',
    characteristics: ['수면 부족', '만성 피로', '집중력 저하', '기분 변화'],
    peakHours: '없음 (항상 피곤)',
    idealSchedule: '7-9시간 확보 필요',
    strengths: ['없음 - 수면 개선 필요'],
    challenges: ['건강 악화', '생산성 저하', '정서 문제', '사고 위험'],
    improvementTips: ['수면 우선순위화', '스크린 타임 줄이기', '수면 환경 개선', '전문 상담'],
    healthAdvice: '수면 부족은 모든 건강의 적입니다. 전문가 상담을 권장합니다.',
  },
};

export function calculateSleepTypeResult(answers: number[]): SleepTypeResult {
  let totalScore = 0;
  let morningScore = 0;
  let nightScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const score = question.options[answerIndex].score;
      const type = question.options[answerIndex].type;
      totalScore += score;
      
      if (type.includes('early') || type.includes('morning')) morningScore += score;
      if (type.includes('night') || type.includes('late')) nightScore += score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 75) {
    return { ...resultTypes.early_bird, sleepScore: Math.round(percentage) };
  } else if (percentage >= 55) {
    return { ...resultTypes.normal, sleepScore: Math.round(percentage) };
  } else if (percentage >= 35) {
    return { ...resultTypes.night_owl, sleepScore: Math.round(percentage) };
  } else if (percentage >= 25) {
    return { ...resultTypes.irregular, sleepScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.poor, sleepScore: Math.round(percentage) };
  }
}
