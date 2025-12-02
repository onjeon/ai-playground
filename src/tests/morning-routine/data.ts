// 아침 루틴 테스트 - 당신의 아침 습관으로 보는 성격

export interface MorningRoutineQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MorningRoutineResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  morningMotto: string;
  characteristics: string[];
  typicalMorning: string;
  strengths: string[];
  weaknesses: string[];
  tips: string[];
  compatibleType: string;
  incompatibleType: string;
}

export const routineTypes = ['early_bird', 'night_owl', 'routine_master', 'spontaneous'] as const;
export type RoutineType = typeof routineTypes[number];

export const questions: MorningRoutineQuestion[] = [
  {
    id: 1,
    question: "알람이 울렸을 때 당신의 반응은?",
    options: [
      { text: "알람 전에 이미 눈이 떠져 있음", scores: { early_bird: 3 } },
      { text: "5분만... 10분만... 스누즈 반복", scores: { night_owl: 3 } },
      { text: "정해진 시간에 딱 일어남", scores: { routine_master: 3 } },
      { text: "그날 기분에 따라 다름", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 2,
    question: "아침 식사는 보통 어떻게?",
    options: [
      { text: "일찍 일어나서 여유롭게 조식 풀코스", scores: { early_bird: 3 } },
      { text: "시간 없어서 대충 또는 거르기", scores: { night_owl: 3 } },
      { text: "매일 같은 메뉴를 같은 시간에", scores: { routine_master: 3 } },
      { text: "오늘 뭐 먹지? 그때그때 다르게", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 3,
    question: "출근/외출 준비 시간은?",
    options: [
      { text: "새벽부터 준비해서 여유있게", scores: { early_bird: 3 } },
      { text: "허겁지겁 최소 시간으로", scores: { night_owl: 3 } },
      { text: "항상 정확히 N분 소요", scores: { routine_master: 3 } },
      { text: "날마다 들쭉날쭉", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 4,
    question: "아침에 핸드폰 확인은?",
    options: [
      { text: "일어나자마자 오늘 할 일 체크", scores: { early_bird: 2, routine_master: 1 } },
      { text: "침대에서 30분 이상 뒹굴며 SNS", scores: { night_owl: 3 } },
      { text: "정해진 시간에만 잠깐 확인", scores: { routine_master: 3 } },
      { text: "볼 때도 있고 안 볼 때도 있고", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 5,
    question: "아침 운동에 대한 생각은?",
    options: [
      { text: "새벽 운동이 최고! 이미 하고 있음", scores: { early_bird: 3 } },
      { text: "아침에 운동? 상상도 못 해", scores: { night_owl: 3 } },
      { text: "매일 같은 시간에 꾸준히", scores: { routine_master: 3 } },
      { text: "하고 싶을 때만 가끔", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 6,
    question: "아침에 가장 먼저 하는 일은?",
    options: [
      { text: "창문 열고 심호흡, 스트레칭", scores: { early_bird: 3 } },
      { text: "눈 뜨고 멍때리기, 현실 부정", scores: { night_owl: 3 } },
      { text: "항상 같은 순서로 진행", scores: { routine_master: 3 } },
      { text: "그날 뭐가 땡기는지에 따라", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 7,
    question: "아침 커피/음료는?",
    options: [
      { text: "일찍 일어나서 핸드드립으로 여유롭게", scores: { early_bird: 3 } },
      { text: "카페인 없으면 못 일어남, 원샷", scores: { night_owl: 3 } },
      { text: "매일 같은 음료, 같은 잔으로", scores: { routine_master: 3 } },
      { text: "오늘은 뭐 마실까? 기분 따라", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 8,
    question: "출근 시간에 대한 당신의 패턴은?",
    options: [
      { text: "항상 30분 일찍 도착", scores: { early_bird: 3 } },
      { text: "지각 위기 아슬아슬하게", scores: { night_owl: 3 } },
      { text: "매일 정확히 같은 시간에 도착", scores: { routine_master: 3 } },
      { text: "어떨 땐 일찍, 어떨 땐 늦게", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 9,
    question: "주말 아침은 어떻게 보내나요?",
    options: [
      { text: "평일처럼 일찍 일어나서 활동", scores: { early_bird: 3 } },
      { text: "죽은 듯이 늦잠, 점심 때 기상", scores: { night_owl: 3 } },
      { text: "주말도 루틴대로, 조금만 여유롭게", scores: { routine_master: 3 } },
      { text: "그날 뭐 하고 싶은지에 따라 다름", scores: { spontaneous: 3 } },
    ],
  },
  {
    id: 10,
    question: "아침 준비물 챙기기는?",
    options: [
      { text: "전날 밤에 미리 다 준비해둠", scores: { early_bird: 2, routine_master: 1 } },
      { text: "나가면서 급하게, 자주 까먹음", scores: { night_owl: 3 } },
      { text: "체크리스트로 매일 같은 순서로", scores: { routine_master: 3 } },
      { text: "필요한 것만 그때그때 챙김", scores: { spontaneous: 3 } },
    ],
  },
];

export const results: Record<RoutineType, MorningRoutineResult> = {
  early_bird: {
    type: 'early_bird',
    title: '얼리버드형',
    emoji: '🌅',
    description: '새벽부터 활동하는 진정한 아침형 인간! 해가 뜨기 전부터 하루를 시작하는 당신은 아침의 고요함 속에서 최고의 에너지를 발휘합니다. 남들이 자는 시간에 이미 하루의 절반을 끝내버리는 초효율 인간이에요.',
    morningMotto: '"일찍 일어나는 새가 벌레를 잡는다"',
    characteristics: [
      '알람 없이도 새벽에 눈이 떠짐',
      '아침 시간이 하루 중 가장 생산적',
      '일찍 자고 일찍 일어나는 규칙적인 수면',
      '아침 식사를 절대 거르지 않음'
    ],
    typicalMorning: '5:30 기상 → 스트레칭 → 조깅 → 샤워 → 여유로운 아침 식사 → 뉴스 확인 → 7:30 출근 준비 완료',
    strengths: [
      '하루를 길게 활용할 수 있음',
      '아침 회의에 항상 맑은 정신',
      '건강한 생활 습관 유지',
      '중요한 일을 오전에 처리'
    ],
    weaknesses: [
      '저녁 약속이 힘듦',
      '밤 10시만 되면 졸림',
      '주변에서 "왜 이렇게 일찍 자?"라는 말을 자주 들음'
    ],
    tips: [
      '저녁 모임은 가급적 일찍 시작하도록 요청하세요',
      '늦은 약속이 있는 날은 낮잠으로 체력 비축',
      '아침 시간을 자기계발에 적극 활용하세요',
      '같은 얼리버드와 아침 운동 메이트가 되어보세요'
    ],
    compatibleType: '루틴러형 (규칙적인 생활 리듬이 맞음)',
    incompatibleType: '올빼미형 (생활 시간대가 완전히 다름)'
  },
  night_owl: {
    type: 'night_owl',
    title: '올빼미형',
    emoji: '🦉',
    description: '아침은 최대의 적! 밤이 되어야 진정한 내가 깨어나는 저녁형 인간입니다. 알람과의 전쟁에서 매일 패배하지만, 밤에는 무한한 에너지와 창의력을 발휘해요. 아침잠은 포기할 수 없는 최고의 행복이죠.',
    morningMotto: '"5분만 더... 아니 10분만..."',
    characteristics: [
      '알람을 최소 5번 이상 끄고 다시 잠',
      '아침에는 좀비 상태, 오후부터 살아남',
      '밤에 집중력과 창의력 폭발',
      '주말 늦잠은 필수 생존 전략'
    ],
    typicalMorning: '8:00 알람 → 8:30 진짜 기상 → 허겁지겁 준비 → 아침 식사 스킵 → 카페인 섭취 → 9:00 아슬아슬 출근',
    strengths: [
      '밤에 최고의 집중력 발휘',
      '창의적 작업에 강함',
      '늦은 약속도 거뜬',
      '야근에도 끄떡없음'
    ],
    weaknesses: [
      '아침 회의가 고문',
      '만성적인 지각 위험',
      '불규칙한 수면 패턴',
      '아침 식사를 자주 거름'
    ],
    tips: [
      '중요한 일은 오후에 배치하세요',
      '점진적으로 취침 시간을 당겨보세요',
      '아침에 햇빛을 쬐면 각성에 도움이 됩니다',
      '아침 미팅은 가급적 피하거나 화상으로 대체하세요'
    ],
    compatibleType: '즉흥형 (유연한 생활 패턴이 맞음)',
    incompatibleType: '얼리버드형 (만날 시간이 없음)'
  },
  routine_master: {
    type: 'routine_master',
    title: '루틴러형',
    emoji: '📋',
    description: '정해진 루틴을 철저히 따르는 계획형 인간! 아침마다 똑같은 순서로 하루를 시작하는 당신은 안정감과 효율성의 달인입니다. 루틴이 깨지면 하루 종일 불안한, 진정한 계획왕이에요.',
    morningMotto: '"루틴이 곧 나의 힘"',
    characteristics: [
      '매일 같은 시간에 같은 순서로 아침을 보냄',
      '아침 루틴을 방해받으면 하루가 꼬임',
      '체크리스트와 타이머를 적극 활용',
      '준비 시간이 분 단위로 일정함'
    ],
    typicalMorning: '6:30 기상 → 6:35 물 한 잔 → 6:40 스트레칭 → 7:00 샤워 → 7:20 아침 식사 → 7:40 준비 → 8:00 출발',
    strengths: [
      '안정적이고 예측 가능한 생활',
      '시간 관리 능력 최상',
      '실수나 깜빡함이 거의 없음',
      '스트레스가 적은 아침 시간'
    ],
    weaknesses: [
      '예상치 못한 상황에 당황',
      '유연성이 부족할 수 있음',
      '루틴이 깨지면 불안함',
      '즉흥적인 변화를 싫어함'
    ],
    tips: [
      '가끔은 루틴을 깨보는 연습도 필요해요',
      '여행 중에도 미니 루틴을 만들어보세요',
      '루틴에 작은 변화를 주며 유연성을 키워보세요',
      '당신의 루틴을 주변에 공유하면 이해받기 쉬워요'
    ],
    compatibleType: '얼리버드형 (규칙적인 생활이 맞음)',
    incompatibleType: '즉흥형 (예측 불가능함이 스트레스)'
  },
  spontaneous: {
    type: 'spontaneous',
    title: '즉흥형',
    emoji: '🎲',
    description: '매일 다른 아침을 맞이하는 자유로운 영혼! 오늘 아침이 어떻게 될지는 나도 몰라요. 그날의 기분과 상황에 따라 유연하게 대처하는 당신은 삶의 변화를 즐기는 적응의 달인입니다.',
    morningMotto: '"오늘은 어떤 아침일까?"',
    characteristics: [
      '아침마다 다른 패턴',
      '기분에 따라 루틴이 바뀜',
      '정해진 것을 답답해함',
      '새로운 시도를 즐김'
    ],
    typicalMorning: '기상 시간? 그날 달라요 → 오늘 뭐 먹지? → 갑자기 운동? → 아님 말고 → 그때그때 다른 준비',
    strengths: [
      '변화에 빠르게 적응',
      '유연한 사고방식',
      '새로운 경험에 열려있음',
      '스트레스를 덜 받음'
    ],
    weaknesses: [
      '종종 시간 관리 실패',
      '준비물을 까먹기도 함',
      '불규칙한 생활 패턴',
      '장기 계획에 약함'
    ],
    tips: [
      '최소한의 필수 루틴만 만들어보세요',
      '전날 밤 간단한 준비를 해두면 여유로워져요',
      '중요한 약속은 알람을 여러 개 설정하세요',
      '자유로움 속에서도 건강은 챙겨야 해요'
    ],
    compatibleType: '올빼미형 (유연한 생활이 맞음)',
    incompatibleType: '루틴러형 (계획 vs 즉흥 충돌)'
  }
};

export function calculateResult(answers: number[]): MorningRoutineResult {
  const scores: Record<RoutineType, number> = {
    early_bird: 0,
    night_owl: 0,
    routine_master: 0,
    spontaneous: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as RoutineType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: RoutineType = 'routine_master';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as RoutineType;
    }
  });

  return results[resultType];
}
