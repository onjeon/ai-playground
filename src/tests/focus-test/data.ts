// 집중력 테스트

export interface FocusQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface FocusResult {
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
  distractions: string[];
  improvementTips: string[];
  dailyHabits: string[];
  toolsRecommend: string[];
  idealWorkStyle: string;
}

// 질문 데이터 (12문항)
export const questions: FocusQuestion[] = [
  {
    id: 1,
    question: "한 가지 일에 얼마나 오래 집중할 수 있나요?",
    options: [
      { text: "10분도 힘들다", score: 1 },
      { text: "30분 정도", score: 2 },
      { text: "1시간 정도", score: 3 },
      { text: "2시간 이상도 가능", score: 4 },
    ],
  },
  {
    id: 2,
    question: "일하다가 스마트폰을 확인하는 빈도는?",
    options: [
      { text: "수시로 (10분마다)", score: 1 },
      { text: "30분마다 한 번", score: 2 },
      { text: "1시간에 한 번", score: 3 },
      { text: "필요할 때만", score: 4 },
    ],
  },
  {
    id: 3,
    question: "멀티태스킹(여러 일 동시에)을 얼마나 자주 하나요?",
    options: [
      { text: "항상 여러 일을 동시에 한다", score: 1 },
      { text: "자주 한다", score: 2 },
      { text: "가끔 한다", score: 3 },
      { text: "한 번에 하나씩 집중한다", score: 4 },
    ],
  },
  {
    id: 4,
    question: "주변 소음에 얼마나 방해받나요?",
    options: [
      { text: "매우 쉽게 방해받는다", score: 1 },
      { text: "꽤 방해받는 편이다", score: 2 },
      { text: "어느 정도 견딜 수 있다", score: 3 },
      { text: "거의 신경 쓰이지 않는다", score: 4 },
    ],
  },
  {
    id: 5,
    question: "중요한 일을 미루는 편인가요?",
    options: [
      { text: "항상 미룬다", score: 1 },
      { text: "자주 미루는 편이다", score: 2 },
      { text: "가끔 미룬다", score: 3 },
      { text: "거의 미루지 않는다", score: 4 },
    ],
  },
  {
    id: 6,
    question: "생각이 여기저기 흩어지는 편인가요?",
    options: [
      { text: "매우 자주 그렇다", score: 1 },
      { text: "자주 그렇다", score: 2 },
      { text: "가끔 그렇다", score: 3 },
      { text: "거의 그렇지 않다", score: 4 },
    ],
  },
  {
    id: 7,
    question: "읽던 책이나 글의 내용을 기억하는 편인가요?",
    options: [
      { text: "거의 기억 못한다", score: 1 },
      { text: "대략적으로만 기억한다", score: 2 },
      { text: "꽤 잘 기억한다", score: 3 },
      { text: "세부사항까지 잘 기억한다", score: 4 },
    ],
  },
  {
    id: 8,
    question: "마감이 다가오면 집중력이?",
    options: [
      { text: "오히려 더 흩어진다", score: 1 },
      { text: "비슷하다", score: 2 },
      { text: "조금 높아진다", score: 3 },
      { text: "크게 높아진다", score: 4 },
    ],
  },
  {
    id: 9,
    question: "지루한 일을 할 때 집중력은?",
    options: [
      { text: "전혀 집중 못한다", score: 1 },
      { text: "매우 어렵다", score: 2 },
      { text: "노력하면 가능하다", score: 3 },
      { text: "지루해도 잘 집중한다", score: 4 },
    ],
  },
  {
    id: 10,
    question: "아침과 저녁 중 언제 집중이 더 잘 되나요?",
    options: [
      { text: "둘 다 안 된다", score: 1 },
      { text: "특정 시간에만 된다", score: 2 },
      { text: "아침 또는 저녁 한쪽이 낫다", score: 3 },
      { text: "언제든 잘 된다", score: 4 },
    ],
  },
  {
    id: 11,
    question: "휴식 후 다시 일에 집중하는 데 걸리는 시간은?",
    options: [
      { text: "30분 이상", score: 1 },
      { text: "15-30분", score: 2 },
      { text: "5-15분", score: 3 },
      { text: "5분 이내", score: 4 },
    ],
  },
  {
    id: 12,
    question: "깊은 사고가 필요한 일을 할 때?",
    options: [
      { text: "거의 못한다", score: 1 },
      { text: "매우 어렵다", score: 2 },
      { text: "시간이 걸리지만 가능하다", score: 3 },
      { text: "잘 해낸다", score: 4 },
    ],
  },
];

// 결과 계산 함수
export function calculateResult(answers: number[]): FocusResult {
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
      type: 'laser',
      title: '레이저 집중력',
      emoji: '🎯',
      level: '매우 높음',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신은 탁월한 집중력을 가지고 있습니다! 한 번 몰입하면 주변 방해 요소를 차단하고 깊은 작업이 가능합니다. 이 능력을 잘 활용하세요.',
      characteristics: ['뛰어난 몰입력', '높은 자기 통제', '효율적인 작업', '목표 지향적'],
      strengths: ['깊은 작업 능력', '높은 생산성', '방해 요소 차단', '장시간 집중 가능'],
      challenges: ['과몰입 주의', '휴식 필요성 인식', '유연성 기르기'],
      distractions: ['거의 방해받지 않음'],
      improvementTips: ['현재 수준 유지하기', '과몰입으로 인한 번아웃 주의', '정기적 휴식 취하기'],
      dailyHabits: ['딥워크 시간 설정', '포모도로 기법 활용', '디지털 디톡스', '명상'],
      toolsRecommend: ['Forest 앱', '노션', '타이머', '노이즈캔슬링 헤드폰'],
      idealWorkStyle: '긴 시간 블록으로 깊은 작업, 중요한 일은 방해 없는 환경에서',
    };
  } else if (percentage >= 70) {
    return {
      type: 'strong',
      title: '강한 집중력',
      emoji: '🔍',
      level: '높음',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신은 평균 이상의 집중력을 가지고 있습니다. 대부분의 상황에서 효과적으로 집중할 수 있으며, 조금만 더 훈련하면 최고 수준에 도달할 수 있습니다.',
      characteristics: ['좋은 집중력', '자기 조절 능력', '목표 의식', '끈기'],
      strengths: ['효과적인 작업 능력', '방해 요소 관리', '시간 관리', '일관된 생산성'],
      challenges: ['피곤할 때 집중력 저하', '가끔 산만해짐', '멀티태스킹 유혹'],
      distractions: ['가끔 스마트폰', '피로 시 주변 소음'],
      improvementTips: ['포모도로 기법 시도', '디지털 디톡스 시간 늘리기', '수면 질 개선', '운동으로 에너지 관리'],
      dailyHabits: ['아침 루틴 만들기', '집중 시간대 파악', '알림 끄기', '규칙적 운동'],
      toolsRecommend: ['포모도로 타이머', 'Freedom 앱', '노트 앱', '화이트노이즈'],
      idealWorkStyle: '90분 집중 + 15분 휴식 사이클, 중요한 일은 오전에',
    };
  } else if (percentage >= 50) {
    return {
      type: 'average',
      title: '평균 집중력',
      emoji: '📊',
      level: '보통',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신의 집중력은 평균 수준입니다. 집중할 때도 있고 산만할 때도 있습니다. 체계적인 훈련으로 크게 향상시킬 수 있습니다.',
      characteristics: ['상황에 따른 집중력', '개선 가능성', '환경 의존적'],
      strengths: ['흥미 있는 일에 집중', '마감 압박 시 집중', '기본적 작업 수행'],
      challenges: ['쉽게 산만해짐', '지루한 일에 집중 어려움', '스마트폰 의존', '멀티태스킹 습관'],
      distractions: ['스마트폰', 'SNS', '주변 소음', '잡념'],
      improvementTips: ['작업 환경 정리', '스마트폰 멀리 두기', '짧은 집중 시간부터 시작', '명상 시작하기'],
      dailyHabits: ['아침 5분 명상', '작업 전 정리', '타이머 사용', '충분한 수면'],
      toolsRecommend: ['StayFocusd', '집중 플레이리스트', '할일 목록 앱', '타이머'],
      idealWorkStyle: '25분 집중 + 5분 휴식 (포모도로), 방해 요소 제거',
    };
  } else if (percentage >= 35) {
    return {
      type: 'scattered',
      title: '산만한 집중력',
      emoji: '🦋',
      level: '낮음',
      score: totalScore,
      maxScore,
      percentage,
      description: '집중하는 것이 어려운 편입니다. 주의가 쉽게 분산되고, 한 가지 일에 오래 머무르기 힘듭니다. 하지만 훈련으로 충분히 개선할 수 있습니다.',
      characteristics: ['쉽게 산만해짐', '멀티태스킹 선호', '즉각적 만족 추구', '환경에 민감'],
      strengths: ['다양한 관심사', '빠른 전환 능력', '창의적 사고'],
      challenges: ['지속적 집중 어려움', '쉬운 포기', '시간 낭비', '미루기 습관'],
      distractions: ['스마트폰 중독', 'SNS', '잡념', '주변 모든 자극'],
      improvementTips: ['아주 짧은 시간(10분)부터 시작', '환경 통제 필수', '하나씩만 하기', '보상 시스템 만들기'],
      dailyHabits: ['스마트폰 다른 방에 두기', '할일 3개만 정하기', '작은 성공 기록', '5분 명상'],
      toolsRecommend: ['앱 차단 프로그램', '단순한 타이머', '종이 할일 목록', '집중 음악'],
      idealWorkStyle: '10-15분 집중 + 5분 휴식, 방해 요소 완전 차단',
    };
  } else {
    return {
      type: 'challenged',
      title: '집중력 챌린지',
      emoji: '🌪️',
      level: '매우 낮음',
      score: totalScore,
      maxScore,
      percentage,
      description: '집중하는 것이 매우 어려운 상태입니다. 일상생활에도 영향을 미칠 수 있습니다. 전문가 상담과 체계적인 훈련이 필요할 수 있습니다.',
      characteristics: ['극심한 산만함', '집중 불가', '쉬운 포기', '시간 관리 어려움'],
      strengths: ['다양한 자극 인식', '빠른 반응', '멀티태스킹'],
      challenges: ['거의 모든 상황에서 집중 어려움', '과제 완료 힘듦', '일상생활 지장'],
      distractions: ['모든 자극에 반응', '내적 잡념', '외부 환경', '디지털 기기'],
      improvementTips: ['전문가 상담 고려', 'ADHD 검사 고려', '아주 작은 목표부터', '구조화된 환경 만들기'],
      dailyHabits: ['5분 집중 연습', '알람 활용', '시각적 할일 목록', '규칙적 루틴'],
      toolsRecommend: ['앱 완전 차단', '외부 도움 시스템', '시각적 타이머', '보상 시스템'],
      idealWorkStyle: '5분 단위 작업, 완전히 통제된 환경, 외부 책임자 필요',
    };
  }
}
