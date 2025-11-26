// 의사결정 스타일 테스트 - 당신은 어떻게 결정하나요?

export const questions = [
  {
    id: 1,
    question: "메뉴판을 보면 나는?",
    options: [
      { text: "직감으로 바로 고른다", type: "intuitive", score: 5 },
      { text: "몇 개 후보를 놓고 비교한다", type: "analytical", score: 3 },
      { text: "주변 사람에게 물어본다", type: "dependent", score: 2 },
      { text: "한참을 고민하다 결국 늘 먹던 거", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 2,
    question: "중요한 결정을 내릴 때?",
    options: [
      { text: "느낌이 오면 바로 결정", type: "intuitive", score: 5 },
      { text: "장단점 리스트를 만든다", type: "analytical", score: 4 },
      { text: "믿을 만한 사람과 상의", type: "dependent", score: 2 },
      { text: "최대한 결정을 미룬다", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 3,
    question: "쇼핑할 때 나는?",
    options: [
      { text: "마음에 들면 바로 구매", type: "intuitive", score: 5 },
      { text: "가격 비교, 리뷰 확인", type: "analytical", score: 4 },
      { text: "같이 간 사람 의견 물어봄", type: "dependent", score: 2 },
      { text: "고민만 하다 안 사는 경우 많음", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 4,
    question: "결정 후 후회하는 편인가?",
    options: [
      { text: "거의 안 함, 내 선택 믿음", type: "intuitive", score: 5 },
      { text: "분석했으니 후회 없음", type: "analytical", score: 4 },
      { text: "다른 사람 탓을 할 때도", type: "dependent", score: 2 },
      { text: "자주 후회함", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 5,
    question: "시간 제한이 있으면?",
    options: [
      { text: "오히려 결정이 빨라짐", type: "intuitive", score: 5 },
      { text: "핵심만 빠르게 분석", type: "analytical", score: 4 },
      { text: "누군가에게 빨리 물어봄", type: "dependent", score: 2 },
      { text: "스트레스 받고 못 정함", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 6,
    question: "새로운 도전 앞에서?",
    options: [
      { text: "일단 해보고 생각", type: "intuitive", score: 5 },
      { text: "성공 확률을 계산", type: "analytical", score: 4 },
      { text: "경험자 조언을 구함", type: "dependent", score: 2 },
      { text: "위험하니 안 하는 게 나아", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 7,
    question: "결정할 때 가장 중요한 것은?",
    options: [
      { text: "내 느낌과 직감", type: "intuitive", score: 5 },
      { text: "데이터와 근거", type: "analytical", score: 4 },
      { text: "주변의 조언", type: "dependent", score: 2 },
      { text: "안전함", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 8,
    question: "여행 계획을 세울 때?",
    options: [
      { text: "즉흥적으로 떠남", type: "intuitive", score: 5 },
      { text: "꼼꼼히 일정 계획", type: "analytical", score: 4 },
      { text: "함께 가는 사람에게 맡김", type: "dependent", score: 2 },
      { text: "계획 세우다 지쳐서 포기", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 9,
    question: "선택지가 많으면?",
    options: [
      { text: "끌리는 걸로 바로 결정", type: "intuitive", score: 5 },
      { text: "비교 분석해서 최적의 선택", type: "analytical", score: 4 },
      { text: "추천받아서 결정", type: "dependent", score: 2 },
      { text: "너무 많아서 못 정함", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 10,
    question: "결정 속도는?",
    options: [
      { text: "매우 빠름", type: "intuitive", score: 5 },
      { text: "신중하게 적당한 시간 소요", type: "analytical", score: 4 },
      { text: "상대방 속도에 맞춤", type: "dependent", score: 2 },
      { text: "매우 느림", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 11,
    question: "실패했을 때 나는?",
    options: [
      { text: "다음엔 다르게 해보지 뭐", type: "intuitive", score: 5 },
      { text: "원인 분석 후 개선", type: "analytical", score: 4 },
      { text: "조언해준 사람이 잘못했네", type: "dependent", score: 2 },
      { text: "역시 안 하길 잘했어야 했어", type: "avoidant", score: 1 },
    ],
  },
  {
    id: 12,
    question: "인생의 큰 결정들은?",
    options: [
      { text: "대부분 직감으로 했다", type: "intuitive", score: 5 },
      { text: "분석하고 계획해서 했다", type: "analytical", score: 4 },
      { text: "주변 조언으로 했다", type: "dependent", score: 2 },
      { text: "떠밀려서 하게 됐다", type: "avoidant", score: 1 },
    ],
  },
];

export interface DecisionStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  decisionSpeed: number;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  worstFor: string[];
  improvementTips: string[];
  famousExample: string;
}

const resultTypes: Record<string, DecisionStyleResult> = {
  intuitive: {
    type: 'intuitive',
    title: '직감형 결정자',
    emoji: '⚡',
    subtitle: '느낌으로 결정하는 타입',
    description: '당신은 직감과 느낌을 믿고 빠르게 결정하는 타입입니다! 복잡한 분석보다 마음이 시키는 대로 따라가요. 결정 속도가 빠르고 후회도 적습니다.',
    decisionSpeed: 95,
    characteristics: ['빠른 결정', '직감 신뢰', '후회 적음', '행동 우선'],
    strengths: ['속도', '결단력', '기회 포착', '스트레스 적음'],
    weaknesses: ['충동적일 수 있음', '근거 부족', '설득력 약함'],
    bestFor: ['긴급 상황', '창의적 결정', '사람 관련 결정'],
    worstFor: ['재정 관련', '장기 계획', '리스크 높은 결정'],
    improvementTips: ['중요한 결정은 하루 기다리기', '최소한의 정보 확인', '직감의 근거 찾기'],
    famousExample: '스티브 잡스',
  },
  analytical: {
    type: 'analytical',
    title: '분석형 결정자',
    emoji: '🔬',
    subtitle: '데이터로 결정하는 타입',
    description: '당신은 논리와 데이터를 바탕으로 신중하게 결정하는 타입입니다! 장단점을 꼼꼼히 비교하고, 근거 있는 결정을 내려요. 후회 없는 최적의 선택을 추구합니다.',
    decisionSpeed: 60,
    characteristics: ['신중함', '논리적', '근거 중시', '계획적'],
    strengths: ['정확도 높음', '리스크 관리', '설득력', '후회 적음'],
    weaknesses: ['느린 속도', '과분석', '기회 놓침', '완벽주의'],
    bestFor: ['재정 결정', '장기 계획', '중요한 계약'],
    worstFor: ['빠른 결정 필요시', '감정적 상황', '정보 부족시'],
    improvementTips: ['데드라인 정하기', '충분히 좋은 것도 OK', '직감도 데이터다'],
    famousExample: '워렌 버핏',
  },
  dependent: {
    type: 'dependent',
    title: '의존형 결정자',
    emoji: '🤝',
    subtitle: '함께 결정하는 타입',
    description: '당신은 주변 사람들의 의견과 조언을 중요하게 생각하는 타입입니다! 혼자 결정하기보다 신뢰하는 사람들과 상의해요. 관계를 중시하고 협력적입니다.',
    decisionSpeed: 40,
    characteristics: ['협력적', '조언 수용', '관계 중시', '신중함'],
    strengths: ['다양한 관점', '관계 유지', '실수 줄임', '팀워크'],
    weaknesses: ['자기 주관 부족', '책임 전가', '의존성', '느린 결정'],
    bestFor: ['팀 결정', '전문가 필요한 분야', '중요한 인생 결정'],
    worstFor: ['빠른 결정', '혼자 해야 할 때', '비밀 유지 필요시'],
    improvementTips: ['작은 것부터 혼자 결정', '내 의견 먼저 정하기', '결과 책임지기'],
    famousExample: '이재용, 팀 쿡',
  },
  avoidant: {
    type: 'avoidant',
    title: '회피형 결정자',
    emoji: '🐢',
    subtitle: '결정을 미루는 타입',
    description: '당신은 결정을 내리는 것에 부담을 느끼고 미루는 타입입니다. 실패에 대한 두려움과 완벽주의가 원인일 수 있어요. 하지만 결정을 안 하는 것도 결정입니다!',
    decisionSpeed: 20,
    characteristics: ['신중함', '위험 회피', '완벽주의', '우유부단'],
    strengths: ['신중함', '리스크 회피', '관찰력'],
    weaknesses: ['기회 상실', '스트레스', '수동적', '후회 많음'],
    bestFor: ['급하지 않은 결정', '위험한 결정 피하기'],
    worstFor: ['대부분의 결정', '리더십 필요시', '기회 포착'],
    improvementTips: ['작은 결정부터 연습', '완벽보다 완료', '실패해도 괜찮다', '타이머 설정'],
    famousExample: '',
  },
};

export function calculateDecisionStyleResult(answers: number[]): DecisionStyleResult {
  const typeScores: Record<string, number> = {
    intuitive: 0,
    analytical: 0,
    dependent: 0,
    avoidant: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'analytical';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
