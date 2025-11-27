// 스타트업 적합도 테스트

export interface StartupQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      founder: number;
      early: number;
      growth: number;
      corporate: number;
    };
  }[];
}

export interface StartupResult {
  type: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
  famousPeople: string;
}

export const questions: StartupQuestion[] = [
  {
    id: 1,
    question: '불확실한 상황에서 나는?',
    options: [
      { text: '오히려 흥분되고 도전 의욕이 생긴다', scores: { founder: 3, early: 2, growth: 0, corporate: 0 } },
      { text: '불안하지만 적응할 수 있다', scores: { founder: 1, early: 3, growth: 2, corporate: 0 } },
      { text: '어느 정도 예측 가능한 게 좋다', scores: { founder: 0, early: 1, growth: 3, corporate: 1 } },
      { text: '안정적인 환경을 선호한다', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 2,
    question: '업무 범위에 대해 어떻게 생각하나요?',
    options: [
      { text: '뭐든지 다 해볼 수 있어서 좋다', scores: { founder: 3, early: 3, growth: 1, corporate: 0 } },
      { text: '다양한 경험을 쌓을 수 있어서 괜찮다', scores: { founder: 2, early: 2, growth: 2, corporate: 0 } },
      { text: '내 역할이 명확한 게 효율적이다', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
      { text: '전문 분야에 집중하고 싶다', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
    ],
  },
  {
    id: 3,
    question: '급여와 스톡옵션 중 선택한다면?',
    options: [
      { text: '스톡옵션! 대박의 꿈!', scores: { founder: 3, early: 3, growth: 1, corporate: 0 } },
      { text: '적당한 급여 + 스톡옵션 조합', scores: { founder: 1, early: 2, growth: 3, corporate: 0 } },
      { text: '안정적인 급여가 우선', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
      { text: '급여 + 복지 + 안정성', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 4,
    question: '야근과 워라밸에 대한 생각은?',
    options: [
      { text: '내 일이니까 밤새도 괜찮다', scores: { founder: 3, early: 2, growth: 0, corporate: 0 } },
      { text: '필요하면 하지만 보상이 있어야', scores: { founder: 1, early: 2, growth: 3, corporate: 1 } },
      { text: '칼퇴가 보장되면 좋겠다', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
      { text: '정시 출퇴근은 기본이다', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 5,
    question: '실패에 대한 나의 생각은?',
    options: [
      { text: '실패는 성공의 어머니! 배움의 기회', scores: { founder: 3, early: 3, growth: 1, corporate: 0 } },
      { text: '실패해도 다시 도전하면 된다', scores: { founder: 2, early: 2, growth: 2, corporate: 0 } },
      { text: '실패는 최소화하고 싶다', scores: { founder: 0, early: 1, growth: 2, corporate: 2 } },
      { text: '실패하면 안 되는 환경이 좋다', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 6,
    question: '의사결정 속도에 대해?',
    options: [
      { text: '빠른 결정, 빠른 실행이 생명!', scores: { founder: 3, early: 3, growth: 1, corporate: 0 } },
      { text: '적당히 빠르게, 하지만 검토는 필요', scores: { founder: 1, early: 2, growth: 3, corporate: 1 } },
      { text: '충분한 검토 후 신중하게', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
      { text: '절차를 따라 체계적으로', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 7,
    question: '회사 성장에 대한 기대는?',
    options: [
      { text: '유니콘이 되는 과정에 함께하고 싶다', scores: { founder: 3, early: 3, growth: 2, corporate: 0 } },
      { text: '빠르게 성장하는 회사가 좋다', scores: { founder: 1, early: 2, growth: 3, corporate: 0 } },
      { text: '안정적으로 성장하는 회사', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
      { text: '이미 검증된 대기업', scores: { founder: 0, early: 0, growth: 0, corporate: 3 } },
    ],
  },
  {
    id: 8,
    question: '상사/동료와의 관계에서?',
    options: [
      { text: '수평적이고 자유로운 분위기가 좋다', scores: { founder: 3, early: 3, growth: 2, corporate: 0 } },
      { text: '적당히 자유롭되 존중은 있어야', scores: { founder: 1, early: 2, growth: 3, corporate: 1 } },
      { text: '어느 정도 위계가 있는 게 편하다', scores: { founder: 0, early: 0, growth: 2, corporate: 3 } },
      { text: '명확한 체계와 보고 라인이 필요', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 9,
    question: '회사의 비전과 미션에 대해?',
    options: [
      { text: '세상을 바꾸는 일에 참여하고 싶다', scores: { founder: 3, early: 3, growth: 1, corporate: 0 } },
      { text: '의미 있는 일을 하고 싶다', scores: { founder: 2, early: 2, growth: 2, corporate: 1 } },
      { text: '비전보다는 현실적 성과가 중요', scores: { founder: 0, early: 0, growth: 3, corporate: 2 } },
      { text: '안정적인 직장이면 충분하다', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 10,
    question: '복지와 혜택에 대해?',
    options: [
      { text: '없어도 괜찮다, 성장 기회가 복지', scores: { founder: 3, early: 2, growth: 0, corporate: 0 } },
      { text: '기본적인 건 있으면 좋겠다', scores: { founder: 1, early: 3, growth: 2, corporate: 0 } },
      { text: '웬만한 복지는 갖춰져야', scores: { founder: 0, early: 0, growth: 3, corporate: 2 } },
      { text: '복지가 좋은 회사가 좋은 회사', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 11,
    question: '내가 원하는 커리어 성장은?',
    options: [
      { text: '창업가/경영자가 되고 싶다', scores: { founder: 3, early: 2, growth: 0, corporate: 0 } },
      { text: '빠르게 리더 포지션으로 성장', scores: { founder: 1, early: 3, growth: 2, corporate: 0 } },
      { text: '전문가로 인정받고 싶다', scores: { founder: 0, early: 1, growth: 3, corporate: 2 } },
      { text: '안정적인 승진 트랙을 밟고 싶다', scores: { founder: 0, early: 0, growth: 1, corporate: 3 } },
    ],
  },
  {
    id: 12,
    question: '지금 바로 스타트업에 합류하라면?',
    options: [
      { text: '당장 가고 싶다!', scores: { founder: 3, early: 3, growth: 0, corporate: 0 } },
      { text: '좋은 조건이면 고려해볼 만하다', scores: { founder: 1, early: 2, growth: 3, corporate: 0 } },
      { text: '신중하게 검토가 필요하다', scores: { founder: 0, early: 1, growth: 2, corporate: 2 } },
      { text: '안정적인 직장이 낫다', scores: { founder: 0, early: 0, growth: 0, corporate: 3 } },
    ],
  },
];

export const results: StartupResult[] = [
  {
    type: 'founder',
    title: '창업가 DNA',
    emoji: '🚀',
    color: '#8B5CF6',
    description: '당신 안에는 창업가의 피가 흐르고 있어요! 불확실성을 즐기고, 세상을 바꾸고 싶은 열정이 넘칩니다.',
    traits: ['모험적', '비전 지향', '리스크 테이킹', '열정적'],
    strengths: ['강한 추진력', '빠른 의사결정', '위기 대응 능력', '비전 제시'],
    weaknesses: ['번아웃 위험', '디테일 놓칠 수 있음', '팀 관리 어려움'],
    tips: [
      '좋은 공동창업자를 찾으세요',
      '재정적 런웨이를 확보하세요',
      '멘토와 네트워크를 구축하세요',
      '실패해도 배움이라는 마음가짐을 유지하세요',
    ],
    famousPeople: '일론 머스크, 마크 저커버그, 김범수',
  },
  {
    type: 'early',
    title: '얼리 스테이지 적합',
    emoji: '🌱',
    color: '#10B981',
    description: '초기 스타트업에서 빛날 인재! 다양한 역할을 소화하며 회사와 함께 성장하는 걸 즐깁니다.',
    traits: ['적응력', '다재다능', '도전적', '성장 지향'],
    strengths: ['빠른 학습', '유연한 역할 수행', '주인의식', '변화 대응력'],
    weaknesses: ['체계 부족에 지칠 수 있음', '전문성 분산', '과로 위험'],
    tips: [
      '시리즈 A 이전 스타트업을 노려보세요',
      '스톡옵션 조건을 꼼꼼히 확인하세요',
      '대표의 비전과 실행력을 검증하세요',
      '성장할 수 있는 환경인지 확인하세요',
    ],
    famousPeople: '토스 초기 멤버들, 배민 초기 직원들',
  },
  {
    type: 'growth',
    title: '그로스 스테이지 적합',
    emoji: '📈',
    color: '#F59E0B',
    description: '성장 중인 스타트업에 딱! 어느 정도 체계가 잡힌 환경에서 빠른 성장을 함께 하고 싶어합니다.',
    traits: ['균형 감각', '성과 지향', '협업 능력', '실용적'],
    strengths: ['성과 창출', '프로세스 개선', '팀워크', '효율적 업무'],
    weaknesses: ['초기 카오스 적응 어려움', '급격한 변화 스트레스'],
    tips: [
      '시리즈 B~C 스타트업을 찾아보세요',
      '성장 속도와 수익성을 확인하세요',
      '조직 문화와 팀 분위기를 파악하세요',
      '커리어 성장 경로를 확인하세요',
    ],
    famousPeople: '쿠팡 성장기 합류 직원들, 카카오 중기 합류자',
  },
  {
    type: 'corporate',
    title: '대기업/안정 선호',
    emoji: '🏢',
    color: '#6B7280',
    description: '안정적인 환경에서 전문성을 키우는 타입! 체계적인 시스템과 워라밸을 중시합니다.',
    traits: ['안정 추구', '전문성', '체계적', '장기적 관점'],
    strengths: ['꾸준한 성과', '전문 분야 심화', '체계적 업무', '리스크 관리'],
    weaknesses: ['변화에 느린 적응', '창의성 제한', '관료주의'],
    tips: [
      '대기업이나 안정적인 중견기업을 고려하세요',
      '전문성을 살릴 수 있는 포지션을 찾으세요',
      '스타트업은 신중하게 선택하세요',
      '안정성과 성장 사이의 균형을 찾으세요',
    ],
    famousPeople: '삼성전자 임원들, 현대차 연구원',
  },
];

export function calculateStartupResult(answers: number[]): StartupResult {
  const scores = { founder: 0, early: 0, growth: 0, corporate: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      scores.founder += optionScores.founder;
      scores.early += optionScores.early;
      scores.growth += optionScores.growth;
      scores.corporate += optionScores.corporate;
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  return results.find(r => r.type === maxType) || results[0];
}
