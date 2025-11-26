// 아침형/저녁형 테스트 - 나는 얼리버드? 올빼미?

export interface MorningNightQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MorningNightResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  chronotype: string;
  characteristics: string[];
  peakHours: string;
  lifestyle: string[];
  strengths: string[];
  challenges: string[];
  tips: string[];
  idealSchedule: string;
}

export const chronotypes = ['early_bird', 'night_owl', 'third_bird', 'hummingbird'] as const;
export type Chronotype = typeof chronotypes[number];

export const questions: MorningNightQuestion[] = [
  {
    id: 1,
    question: "알람 없이 자연스럽게 일어나는 시간은?",
    options: [
      { text: "6시 이전, 해 뜨면 눈 떠짐", scores: { early_bird: 3 } },
      { text: "7-8시쯤", scores: { third_bird: 2, early_bird: 1 } },
      { text: "9-10시쯤", scores: { hummingbird: 2, third_bird: 1 } },
      { text: "11시 이후, 늦게 일어남", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 2,
    question: "가장 집중이 잘 되는 시간은?",
    options: [
      { text: "이른 아침 (6-9시)", scores: { early_bird: 3 } },
      { text: "오전 (9-12시)", scores: { third_bird: 3 } },
      { text: "오후 (12-18시)", scores: { hummingbird: 3 } },
      { text: "밤 (18시 이후)", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 3,
    question: "저녁 약속이 있으면?",
    options: [
      { text: "6-7시에 만나서 9시 전에 끝내고 싶어", scores: { early_bird: 3 } },
      { text: "7-8시에 만나서 적당히", scores: { third_bird: 2 } },
      { text: "늦은 저녁도 OK", scores: { hummingbird: 2, night_owl: 1 } },
      { text: "밤이 좋아, 늦게까지!", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 4,
    question: "아침에 일어났을 때 기분은?",
    options: [
      { text: "상쾌! 오늘 하루 시작!", scores: { early_bird: 3 } },
      { text: "괜찮아, 준비하면 적응됨", scores: { third_bird: 2 } },
      { text: "좀 힘들지만 억지로 일어남", scores: { hummingbird: 2 } },
      { text: "죽을 것 같아... 알람 5번 이상", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 5,
    question: "주말 아침은 보통?",
    options: [
      { text: "평일과 비슷하게 일찍 일어남", scores: { early_bird: 3 } },
      { text: "조금 늦게, 8-9시쯤", scores: { third_bird: 2 } },
      { text: "늦잠 자서 10시 넘어서", scores: { hummingbird: 2, night_owl: 1 } },
      { text: "점심 다 되어서 일어남", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 6,
    question: "자연스럽게 졸리는 시간은?",
    options: [
      { text: "저녁 9-10시, 일찍 졸림", scores: { early_bird: 3 } },
      { text: "밤 10-11시쯤", scores: { third_bird: 2 } },
      { text: "자정쯤", scores: { hummingbird: 2 } },
      { text: "새벽 1시 이후, 밤이 짧아", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 7,
    question: "아침 운동 vs 저녁 운동?",
    options: [
      { text: "무조건 아침! 상쾌해", scores: { early_bird: 3 } },
      { text: "점심때가 좋아", scores: { third_bird: 2 } },
      { text: "저녁이 낫지", scores: { hummingbird: 2 } },
      { text: "밤 운동이 최고", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 8,
    question: "중요한 시험/회의는 언제가 좋아?",
    options: [
      { text: "이른 아침, 머리가 맑음", scores: { early_bird: 3 } },
      { text: "오전 중", scores: { third_bird: 2 } },
      { text: "오후가 좋아", scores: { hummingbird: 2 } },
      { text: "저녁이나 밤, 그때 정신 들어", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 9,
    question: "야근/올나잇에 대한 생각은?",
    options: [
      { text: "절대 안 돼, 다음날 망함", scores: { early_bird: 3 } },
      { text: "힘들지만 할 수는 있어", scores: { third_bird: 2 } },
      { text: "가끔은 괜찮아", scores: { hummingbird: 2 } },
      { text: "밤샘? 오히려 집중 잘 됨", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 10,
    question: "휴일 하루 자유롭게 보낸다면?",
    options: [
      { text: "일찍 일어나서 하루를 알차게", scores: { early_bird: 3 } },
      { text: "적당히 일어나서 오전부터 활동", scores: { third_bird: 2 } },
      { text: "늦게 일어나고 오후부터 활동", scores: { hummingbird: 2 } },
      { text: "늦잠 자고 밤에 활동!", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 11,
    question: "해외여행 시차 적응은?",
    options: [
      { text: "일찍 자고 일찍 일어나서 적응", scores: { early_bird: 3 } },
      { text: "며칠 걸리지만 적응됨", scores: { third_bird: 2, hummingbird: 1 } },
      { text: "밤에 못 자고 좀 힘들어", scores: { night_owl: 2 } },
      { text: "현지 밤 생활 즐기다가 적응", scores: { night_owl: 3 } },
    ],
  },
  {
    id: 12,
    question: "나를 가장 잘 표현하는 말은?",
    options: [
      { text: "아침형 인간, 하루를 먼저 시작!", scores: { early_bird: 3 } },
      { text: "보통 리듬, 균형 잡힌 생활", scores: { third_bird: 3 } },
      { text: "오후에 활력, 점점 살아남", scores: { hummingbird: 3 } },
      { text: "밤의 창작자, 밤이 나의 시간", scores: { night_owl: 3 } },
    ],
  },
];

export const results: Record<Chronotype, MorningNightResult> = {
  early_bird: {
    type: 'early_bird',
    title: '얼리버드 (아침형)',
    emoji: '🌅',
    description: '해 뜨는 시간이 나의 시간! 일찍 일어나 하루를 먼저 시작하는 당신, 아침의 상쾌함을 누리는 진정한 얼리버드입니다.',
    chronotype: '아침형 인간 (Early Bird)',
    characteristics: ['일찍 기상', '아침에 활력', '일찍 취침', '규칙적 생활'],
    peakHours: '오전 6시 ~ 오후 12시',
    lifestyle: ['이른 아침 운동', '아침 식사 중시', '저녁 약속은 일찍', '일찍 취침'],
    strengths: ['아침 집중력 최고', '건강한 생활리듬', '하루 활용도 높음', '생산성 높음'],
    challenges: ['저녁 약속 힘듦', '야근/밤샘 어려움', '늦은 이벤트 참석 힘듦'],
    tips: ['저녁 모임은 일찍 시작 요청', '밤 이벤트 전 낮잠', '규칙적 수면 유지', '아침 시간 최대 활용'],
    idealSchedule: '6시 기상 → 아침 운동 → 오전 집중 업무 → 오후 가벼운 일 → 9시 취침',
  },
  night_owl: {
    type: 'night_owl',
    title: '올빼미 (저녁형)',
    emoji: '🦉',
    description: '밤이 되면 진짜 내가 시작! 고요한 밤에 집중력이 폭발하는 당신, 밤의 창작자 진정한 올빼미입니다.',
    chronotype: '저녁형 인간 (Night Owl)',
    characteristics: ['늦게 기상', '밤에 활력', '늦게 취침', '자유로운 생활'],
    peakHours: '오후 6시 ~ 새벽 2시',
    lifestyle: ['밤 작업/공부', '늦은 저녁 활동', '아침은 힘겨움', '주말 늦잠'],
    strengths: ['밤 집중력 최고', '창의성 발휘', '조용한 시간 활용', '밤 문화 즐김'],
    challenges: ['아침 출근 힘듦', '사회적 시간과 불일치', '불규칙한 리듬'],
    tips: ['아침 일정은 피하기', '중요한 일은 밤에', '수면 시간은 확보', '빛 노출로 리듬 조절'],
    idealSchedule: '10시 기상 → 느긋한 오전 → 오후부터 활동 → 밤 집중 작업 → 새벽 1시 취침',
  },
  third_bird: {
    type: 'third_bird',
    title: '제3의 새 (오전형)',
    emoji: '🐦',
    description: '너무 이르지도 늦지도 않은 균형잡힌 당신! 사회적 시간에 잘 맞춰진 안정적인 생활 리듬의 소유자입니다.',
    chronotype: '중간형 인간 (Third Bird)',
    characteristics: ['적당히 기상', '오전에 활력', '적당히 취침', '균형 잡힌 생활'],
    peakHours: '오전 9시 ~ 오후 3시',
    lifestyle: ['표준 업무 시간과 일치', '규칙적 생활', '다양한 활동 가능', '유연한 적응'],
    strengths: ['사회적 시간과 일치', '유연한 적응력', '균형 잡힌 에너지', '다양한 일정 가능'],
    challenges: ['극단적 시간대 힘듦', '아주 이른 아침/늦은 밤 약함'],
    tips: ['규칙적 리듬 유지', '유연하게 조절', '휴식 시간 확보', '자신의 피크 시간 활용'],
    idealSchedule: '7시 기상 → 오전 집중 업무 → 점심 후 휴식 → 오후 업무 → 10-11시 취침',
  },
  hummingbird: {
    type: 'hummingbird',
    title: '벌새 (오후형)',
    emoji: '🌸',
    description: '오후가 되면 날개를 펼치는 당신! 점심 이후로 에너지가 상승하는 오후 활동형 벌새입니다.',
    chronotype: '오후형 인간 (Hummingbird)',
    characteristics: ['오후에 활력', '아침은 천천히', '저녁까지 활동적', '유연한 리듬'],
    peakHours: '오후 12시 ~ 오후 8시',
    lifestyle: ['오후 집중', '저녁 활동 선호', '아침은 여유롭게', '유연한 일정'],
    strengths: ['오후 집중력 좋음', '저녁 활동 가능', '유연한 적응', '다양한 일정 수용'],
    challenges: ['아침 일찍 힘듦', '오전 회의 집중 어려움', '늦은 밤도 힘듦'],
    tips: ['오후에 중요한 일 배치', '아침은 가벼운 일로', '저녁 시간 활용', '리듬에 맞춘 일정'],
    idealSchedule: '8시 기상 → 가벼운 오전 → 점심 후 집중 → 저녁 활동 → 11시-12시 취침',
  },
};

export function calculateResult(answers: number[]): MorningNightResult {
  const scores: Record<Chronotype, number> = {
    early_bird: 0,
    night_owl: 0,
    third_bird: 0,
    hummingbird: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as Chronotype] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: Chronotype = 'third_bird';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as Chronotype;
    }
  });

  return results[resultType];
}
