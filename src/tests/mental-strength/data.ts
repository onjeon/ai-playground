// 멘탈 강도 테스트

export interface MentalStrengthQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface MentalStrengthResult {
  type: string;
  title: string;
  emoji: string;
  level: string;
  score: number;
  maxScore: number;
  percentage: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  copingStrategies: string[];
  growthTips: string[];
  dailyHabits: string[];
  famousPeople: string;
}

// 질문 데이터 (12문항)
export const questions: MentalStrengthQuestion[] = [
  {
    id: 1,
    question: "실패했을 때 나는?",
    options: [
      { text: "크게 좌절하고 오래 회복하지 못한다", score: 1 },
      { text: "힘들지만 시간이 지나면 회복한다", score: 2 },
      { text: "실패 원인을 분석하고 다시 도전한다", score: 3 },
      { text: "실패를 성장의 기회로 삼고 더 강해진다", score: 4 },
    ],
  },
  {
    id: 2,
    question: "큰 스트레스 상황에서 나는?",
    options: [
      { text: "완전히 압도당하고 기능이 마비된다", score: 1 },
      { text: "힘들어하지만 어떻게든 버틴다", score: 2 },
      { text: "스트레스를 관리하며 해결책을 찾는다", score: 3 },
      { text: "압박감 속에서 오히려 더 집중하고 성과를 낸다", score: 4 },
    ],
  },
  {
    id: 3,
    question: "비판을 받으면?",
    options: [
      { text: "매우 상처받고 오래 신경 쓴다", score: 1 },
      { text: "기분 나쁘지만 넘기려 노력한다", score: 2 },
      { text: "건설적인 부분을 찾아 받아들인다", score: 3 },
      { text: "성장의 피드백으로 감사히 받아들인다", score: 4 },
    ],
  },
  {
    id: 4,
    question: "불확실한 상황에서 나는?",
    options: [
      { text: "불안하고 아무것도 못한다", score: 1 },
      { text: "걱정되지만 기다려본다", score: 2 },
      { text: "통제할 수 있는 것에 집중한다", score: 3 },
      { text: "불확실성을 기회로 보고 유연하게 대처한다", score: 4 },
    ],
  },
  {
    id: 5,
    question: "목표가 어렵게 느껴질 때?",
    options: [
      { text: "쉽게 포기한다", score: 1 },
      { text: "해보다가 안 되면 포기한다", score: 2 },
      { text: "방법을 바꿔가며 계속 시도한다", score: 3 },
      { text: "끝까지 해내고야 만다", score: 4 },
    ],
  },
  {
    id: 6,
    question: "부정적인 생각이 들 때?",
    options: [
      { text: "부정적 생각의 늪에 빠진다", score: 1 },
      { text: "힘들지만 벗어나려 노력한다", score: 2 },
      { text: "생각을 바꾸는 기법을 사용한다", score: 3 },
      { text: "즉시 긍정적 관점으로 전환한다", score: 4 },
    ],
  },
  {
    id: 7,
    question: "다른 사람이 성공하는 것을 보면?",
    options: [
      { text: "질투하고 자신이 초라하게 느껴진다", score: 1 },
      { text: "부럽지만 축하한다", score: 2 },
      { text: "배울 점을 찾아 적용한다", score: 3 },
      { text: "진심으로 기뻐하고 동기부여 받는다", score: 4 },
    ],
  },
  {
    id: 8,
    question: "통제할 수 없는 상황에서?",
    options: [
      { text: "화내고 좌절한다", score: 1 },
      { text: "불만스럽지만 받아들이려 한다", score: 2 },
      { text: "내가 통제할 수 있는 것에 집중한다", score: 3 },
      { text: "평온하게 받아들이고 최선을 다한다", score: 4 },
    ],
  },
  {
    id: 9,
    question: "에너지가 고갈되었을 때?",
    options: [
      { text: "그냥 멈추고 포기한다", score: 1 },
      { text: "억지로 끌고 간다", score: 2 },
      { text: "휴식을 취하고 재충전한다", score: 3 },
      { text: "효율적인 회복 루틴이 있다", score: 4 },
    ],
  },
  {
    id: 10,
    question: "거절당했을 때?",
    options: [
      { text: "자존감이 무너진다", score: 1 },
      { text: "상처받지만 시간이 해결해준다", score: 2 },
      { text: "거절을 개인적으로 받아들이지 않는다", score: 3 },
      { text: "거절을 배움의 기회로 삼는다", score: 4 },
    ],
  },
  {
    id: 11,
    question: "장기적인 목표를 위해?",
    options: [
      { text: "즉각적인 만족을 선택한다", score: 1 },
      { text: "가끔 참지만 자주 유혹에 진다", score: 2 },
      { text: "대부분 장기 목표를 위해 인내한다", score: 3 },
      { text: "즉각적 만족을 쉽게 미룰 수 있다", score: 4 },
    ],
  },
  {
    id: 12,
    question: "자신의 한계에 대해?",
    options: [
      { text: "한계라고 생각하면 시도도 안 한다", score: 1 },
      { text: "한계가 있다고 생각하지만 조금은 시도한다", score: 2 },
      { text: "한계는 도전으로 극복할 수 있다고 믿는다", score: 3 },
      { text: "한계란 없다고 믿고 항상 성장한다", score: 4 },
    ],
  },
];

// 결과 계산 함수
export function calculateResult(answers: number[]): MentalStrengthResult {
  const maxScore = 48; // 12문항 * 4점
  
  let totalScore = 0;
  answers.forEach((answerIndex, questionIndex) => {
    if (questions[questionIndex] && questions[questionIndex].options[answerIndex]) {
      totalScore += questions[questionIndex].options[answerIndex].score;
    }
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  // 레벨 및 결과 결정
  if (percentage >= 85) {
    return {
      type: 'iron',
      title: '강철 멘탈',
      emoji: '🦾',
      level: '매우 강함',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신은 철인같은 정신력을 가지고 있습니다! 어떤 역경에도 흔들리지 않고, 실패를 성장의 발판으로 삼습니다. 압박감 속에서 오히려 빛나는 사람입니다.',
      characteristics: ['불굴의 의지', '탁월한 회복력', '긍정적 마인드', '자기 통제력', '목표 지향적'],
      strengths: ['어떤 상황에서도 평정심 유지', '실패를 두려워하지 않음', '장기 목표에 집중', '타인의 평가에 흔들리지 않음'],
      challenges: ['때로는 쉬어가도 괜찮음', '완벽주의 경계하기'],
      copingStrategies: ['명상과 마음챙김', '운동과 건강 관리', '긍정적 자기 대화', '목표 시각화'],
      growthTips: ['현재 수준을 유지하세요', '다른 사람들의 멘탈 강화를 도와주세요', '번아웃에 주의하세요'],
      dailyHabits: ['아침 명상', '감사 일기', '도전적 목표 설정', '충분한 수면'],
      famousPeople: '데이비드 고긴스, 마이클 조던, 오프라 윈프리',
    };
  } else if (percentage >= 70) {
    return {
      type: 'strong',
      title: '강한 멘탈',
      emoji: '💪',
      level: '강함',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신은 상당히 강한 정신력을 가지고 있습니다. 대부분의 어려움을 잘 극복하고, 스트레스 상황에서도 침착함을 유지합니다. 회복력이 좋고 긍정적인 마인드를 가지고 있습니다.',
      characteristics: ['높은 회복력', '긍정적 사고', '자기 조절 능력', '인내심', '적응력'],
      strengths: ['스트레스 상황 대처 능력', '건설적 비판 수용', '목표 지향성', '감정 조절'],
      challenges: ['가끔 부정적 생각에 빠질 수 있음', '큰 실패 시 회복에 시간 필요'],
      copingStrategies: ['규칙적인 운동', '사회적 지지망 활용', '취미 활동', '문제 해결 중심 사고'],
      growthTips: ['명상을 시작해보세요', '불편한 상황에 더 자주 도전하세요', '멘탈 강화 책을 읽어보세요'],
      dailyHabits: ['운동', '충분한 수면', '긍정적 자기 대화', '작은 도전'],
      famousPeople: '손흥민, 김연아, 박지성',
    };
  } else if (percentage >= 50) {
    return {
      type: 'average',
      title: '평균 멘탈',
      emoji: '🧘',
      level: '보통',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신의 정신력은 평균 수준입니다. 일상적인 스트레스는 잘 처리하지만, 큰 어려움이 오면 힘들어할 수 있습니다. 꾸준한 노력으로 더 강해질 수 있습니다.',
      characteristics: ['적당한 회복력', '상황에 따른 대처', '성장 가능성'],
      strengths: ['일상 스트레스 관리', '기본적인 감정 조절', '배우려는 자세'],
      challenges: ['큰 실패 시 회복이 어려움', '비판에 민감함', '불확실성에 불안함'],
      copingStrategies: ['깊은 호흡', '신뢰할 수 있는 사람과 대화', '운동', '충분한 휴식'],
      growthTips: ['작은 불편함부터 견디는 연습을 하세요', '실패를 배움으로 재해석하세요', '명상이나 요가를 시작하세요', '멘탈 관련 책을 읽어보세요'],
      dailyHabits: ['5분 명상', '감사한 것 3가지 적기', '작은 도전 하나 하기', '7시간 이상 수면'],
      famousPeople: '',
    };
  } else if (percentage >= 35) {
    return {
      type: 'developing',
      title: '성장 중인 멘탈',
      emoji: '🌱',
      level: '약함',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신의 정신력은 아직 발전 중입니다. 스트레스와 어려움에 취약할 수 있지만, 이는 훈련과 노력으로 충분히 강화할 수 있습니다. 포기하지 마세요!',
      characteristics: ['민감함', '성장 가능성', '자기 인식'],
      strengths: ['자신의 약점을 인식함', '개선 의지'],
      challenges: ['실패에 쉽게 좌절', '부정적 생각에 빠지기 쉬움', '스트레스 관리 어려움', '비판에 매우 민감'],
      copingStrategies: ['전문가 도움 받기', '작은 성공 경험 쌓기', '지지 시스템 구축', '자기 돌봄 우선'],
      growthTips: ['매일 아주 작은 도전을 해보세요', '실패해도 자신을 탓하지 마세요', '긍정적 자기 대화를 연습하세요', '명상 앱을 사용해보세요'],
      dailyHabits: ['아침에 긍정적 확언', '저녁 3분 호흡', '매일 작은 성공 기록', '자기 칭찬'],
      famousPeople: '레이디 가가, 마이클 펠프스',
    };
  } else {
    return {
      type: 'fragile',
      title: '연약한 멘탈',
      emoji: '🍂',
      level: '매우 약함',
      score: totalScore,
      maxScore,
      percentage,
      description: '현재 당신의 정신력은 많은 지원이 필요한 상태입니다. 하지만 걱정하지 마세요. 멘탈은 근육처럼 훈련하면 강해집니다. 전문가의 도움을 받는 것도 좋은 방법입니다.',
      characteristics: ['민감성', '지원 필요', '성장 잠재력'],
      strengths: ['자신의 상태를 인식함', '도움을 받으려는 용기'],
      challenges: ['작은 스트레스에도 압도당함', '부정적 사고 패턴', '자존감 이슈', '회복에 오랜 시간 필요'],
      copingStrategies: ['전문 상담 강력 권장', '가까운 사람의 지지', '자기 돌봄 최우선', '작은 것부터 시작'],
      growthTips: ['심리 상담을 받아보세요', '자기 비난을 멈추세요', '아주 작은 성공부터 시작하세요', '자신에게 친절하세요'],
      dailyHabits: ['자기 칭찬 하나', '좋아하는 것 하나 하기', '깊은 호흡 3번', '충분한 휴식'],
      famousPeople: '',
    };
  }
}
