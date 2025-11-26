// 직업 적성 검사

export interface CareerAptitudeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface CareerAptitudeResult {
  type: string;
  title: string;
  emoji: string;
  field: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  workStyle: string;
  idealEnvironment: string;
  recommendedCareers: string[];
  famousPeople: string;
  growthTips: string[];
  caution: string;
}

// 직업 적성 유형
export const careerTypes = ['creator', 'analyst', 'helper', 'leader', 'organizer', 'researcher'] as const;
export type CareerType = typeof careerTypes[number];

// 질문 데이터 (20문항)
export const questions: CareerAptitudeQuestion[] = [
  {
    id: 1,
    question: "주말에 가장 하고 싶은 활동은?",
    options: [
      { text: "새로운 레시피로 요리하거나 DIY 프로젝트", scores: { creator: 2 } },
      { text: "다큐멘터리 보거나 책 읽기", scores: { researcher: 2 } },
      { text: "친구들 모임 주최하거나 봉사활동", scores: { helper: 2, leader: 1 } },
      { text: "집 정리하거나 계획 세우기", scores: { organizer: 2 } },
    ],
  },
  {
    id: 2,
    question: "문제를 해결할 때 나는?",
    options: [
      { text: "창의적이고 새로운 방법을 찾는다", scores: { creator: 2 } },
      { text: "데이터와 사실을 분석한다", scores: { analyst: 2 } },
      { text: "사람들의 의견을 듣고 함께 해결한다", scores: { helper: 2 } },
      { text: "체계적인 절차에 따라 진행한다", scores: { organizer: 2 } },
    ],
  },
  {
    id: 3,
    question: "팀 프로젝트에서 맡고 싶은 역할은?",
    options: [
      { text: "아이디어 제안 및 디자인", scores: { creator: 2 } },
      { text: "자료 조사 및 분석", scores: { analyst: 2, researcher: 1 } },
      { text: "팀원 관리 및 소통", scores: { leader: 2, helper: 1 } },
      { text: "일정 관리 및 실행", scores: { organizer: 2 } },
    ],
  },
  {
    id: 4,
    question: "가장 흥미로운 과목이나 분야는?",
    options: [
      { text: "미술, 음악, 디자인", scores: { creator: 2 } },
      { text: "수학, 과학, 경제", scores: { analyst: 2, researcher: 1 } },
      { text: "심리학, 사회학, 교육", scores: { helper: 2 } },
      { text: "역사, 법률, 행정", scores: { organizer: 2, leader: 1 } },
    ],
  },
  {
    id: 5,
    question: "이상적인 직장의 분위기는?",
    options: [
      { text: "자유롭고 창의적인 분위기", scores: { creator: 2 } },
      { text: "논리적이고 객관적인 분위기", scores: { analyst: 2 } },
      { text: "따뜻하고 협력적인 분위기", scores: { helper: 2 } },
      { text: "체계적이고 안정적인 분위기", scores: { organizer: 2 } },
    ],
  },
  {
    id: 6,
    question: "스트레스를 받는 상황은?",
    options: [
      { text: "틀에 박힌 반복 업무를 할 때", scores: { creator: 2 } },
      { text: "감정적이고 비논리적인 환경", scores: { analyst: 2 } },
      { text: "냉담하고 경쟁적인 환경", scores: { helper: 2 } },
      { text: "혼란스럽고 무계획적인 환경", scores: { organizer: 2 } },
    ],
  },
  {
    id: 7,
    question: "성취감을 느끼는 순간은?",
    options: [
      { text: "새로운 것을 만들어냈을 때", scores: { creator: 2 } },
      { text: "복잡한 문제를 해결했을 때", scores: { analyst: 2, researcher: 1 } },
      { text: "누군가를 도왔을 때", scores: { helper: 2 } },
      { text: "목표를 달성했을 때", scores: { leader: 2, organizer: 1 } },
    ],
  },
  {
    id: 8,
    question: "선호하는 업무 방식은?",
    options: [
      { text: "자유롭게 아이디어를 펼치며 일하기", scores: { creator: 2 } },
      { text: "데이터를 분석하고 보고서 작성", scores: { analyst: 2 } },
      { text: "사람들과 소통하며 일하기", scores: { helper: 2, leader: 1 } },
      { text: "계획대로 체계적으로 진행하기", scores: { organizer: 2 } },
    ],
  },
  {
    id: 9,
    question: "나의 강점은?",
    options: [
      { text: "창의력과 상상력", scores: { creator: 2 } },
      { text: "분석력과 논리력", scores: { analyst: 2, researcher: 1 } },
      { text: "공감 능력과 소통력", scores: { helper: 2 } },
      { text: "리더십과 추진력", scores: { leader: 2 } },
    ],
  },
  {
    id: 10,
    question: "가장 관심 가는 뉴스 분야는?",
    options: [
      { text: "문화, 예술, 트렌드", scores: { creator: 2 } },
      { text: "경제, 기술, 과학", scores: { analyst: 2, researcher: 1 } },
      { text: "사회, 복지, 교육", scores: { helper: 2 } },
      { text: "정치, 경영, 국제", scores: { leader: 2, organizer: 1 } },
    ],
  },
  {
    id: 11,
    question: "회의에서 나는 주로?",
    options: [
      { text: "새로운 아이디어를 제안한다", scores: { creator: 2 } },
      { text: "객관적인 데이터를 제시한다", scores: { analyst: 2 } },
      { text: "팀원들의 의견을 조율한다", scores: { helper: 2 } },
      { text: "회의를 이끌고 결론을 도출한다", scores: { leader: 2 } },
    ],
  },
  {
    id: 12,
    question: "어린 시절 꿈꾸던 직업은?",
    options: [
      { text: "화가, 작가, 디자이너", scores: { creator: 2 } },
      { text: "과학자, 탐정, 프로그래머", scores: { analyst: 2, researcher: 1 } },
      { text: "의사, 선생님, 상담사", scores: { helper: 2 } },
      { text: "사장, 정치인, CEO", scores: { leader: 2 } },
    ],
  },
  {
    id: 13,
    question: "돈보다 중요하게 생각하는 것은?",
    options: [
      { text: "자아실현과 창작의 자유", scores: { creator: 2 } },
      { text: "전문성과 지식", scores: { analyst: 2, researcher: 1 } },
      { text: "의미 있는 일, 사회 기여", scores: { helper: 2 } },
      { text: "성장과 성취", scores: { leader: 2 } },
    ],
  },
  {
    id: 14,
    question: "새로운 기술이나 트렌드에 대해?",
    options: [
      { text: "어떻게 활용할지 상상한다", scores: { creator: 2 } },
      { text: "원리와 작동 방식이 궁금하다", scores: { analyst: 2, researcher: 1 } },
      { text: "사람들에게 어떤 영향을 줄지 생각한다", scores: { helper: 2 } },
      { text: "비즈니스 기회가 보인다", scores: { leader: 2 } },
    ],
  },
  {
    id: 15,
    question: "실패했을 때 나는?",
    options: [
      { text: "다른 방법으로 다시 시도한다", scores: { creator: 2 } },
      { text: "원인을 분석하고 개선점을 찾는다", scores: { analyst: 2 } },
      { text: "주변에 조언을 구한다", scores: { helper: 2 } },
      { text: "빠르게 털고 다음 목표로 넘어간다", scores: { leader: 2 } },
    ],
  },
  {
    id: 16,
    question: "장기적인 커리어 목표는?",
    options: [
      { text: "나만의 작품/브랜드를 만드는 것", scores: { creator: 2 } },
      { text: "분야의 전문가가 되는 것", scores: { analyst: 2, researcher: 1 } },
      { text: "많은 사람들을 돕는 것", scores: { helper: 2 } },
      { text: "리더 포지션에 오르는 것", scores: { leader: 2 } },
    ],
  },
  {
    id: 17,
    question: "업무 중 가장 집중이 잘 되는 때는?",
    options: [
      { text: "영감이 떠오를 때", scores: { creator: 2 } },
      { text: "복잡한 문제를 풀 때", scores: { analyst: 2, researcher: 1 } },
      { text: "누군가와 함께 일할 때", scores: { helper: 2 } },
      { text: "중요한 프로젝트를 맡았을 때", scores: { leader: 2 } },
    ],
  },
  {
    id: 18,
    question: "동료들에게 자주 듣는 말은?",
    options: [
      { text: "아이디어가 참신하다", scores: { creator: 2 } },
      { text: "꼼꼼하고 정확하다", scores: { analyst: 2, organizer: 1 } },
      { text: "따뜻하고 배려심이 있다", scores: { helper: 2 } },
      { text: "추진력이 있다", scores: { leader: 2 } },
    ],
  },
  {
    id: 19,
    question: "일과 삶의 균형에 대해?",
    options: [
      { text: "일이 곧 삶, 좋아하는 일을 하고 싶다", scores: { creator: 2 } },
      { text: "일은 일, 개인 시간도 중요하다", scores: { organizer: 2, analyst: 1 } },
      { text: "일에서도 의미 있는 관계가 중요하다", scores: { helper: 2 } },
      { text: "성장을 위해 열심히 일하고 싶다", scores: { leader: 2 } },
    ],
  },
  {
    id: 20,
    question: "10년 후 나의 모습은?",
    options: [
      { text: "크리에이티브한 일을 하며 자유롭게 사는 것", scores: { creator: 2 } },
      { text: "전문가로 인정받는 것", scores: { analyst: 2, researcher: 1 } },
      { text: "사람들에게 도움이 되는 일을 하는 것", scores: { helper: 2 } },
      { text: "팀이나 회사를 이끄는 것", scores: { leader: 2 } },
    ],
  },
];

// 결과 데이터
export const results: Record<CareerType, CareerAptitudeResult> = {
  creator: {
    type: 'creator',
    title: '창의적 예술형',
    emoji: '🎨',
    field: 'Creative & Arts',
    description: '당신은 창의적이고 예술적인 감각이 뛰어난 사람입니다. 새로운 것을 만들어내고, 자신만의 독특한 관점으로 세상을 바라봅니다. 틀에 박히지 않은 자유로운 환경에서 최고의 능력을 발휘합니다.',
    characteristics: ['창의성', '독창성', '예술적 감각', '상상력', '자유로운 영혼'],
    strengths: ['혁신적 아이디어', '미적 감각', '트렌드 파악', '스토리텔링'],
    workStyle: '자유롭고 유연한 환경에서 영감을 받아 일합니다. 마감 압박 속에서도 창의성을 발휘하는 편입니다.',
    idealEnvironment: '창의성이 존중받고, 실험과 실패가 허용되는 환경. 자율성이 높은 조직.',
    recommendedCareers: ['디자이너 (그래픽/UX/제품)', '콘텐츠 크리에이터', '작가/카피라이터', '영상 PD', '아티스트', '브랜드 마케터', '패션 업계', '게임 기획자'],
    famousPeople: '스티브 잡스, 피카소, 방시혁',
    growthTips: ['아이디어를 실행으로 옮기는 연습을 하세요', '마감 관리 능력을 키우세요', '협업 능력도 중요합니다'],
    caution: '현실적인 제약도 고려해야 합니다. 모든 아이디어가 실현 가능한 것은 아닙니다.',
  },
  analyst: {
    type: 'analyst',
    title: '논리적 분석형',
    emoji: '📊',
    field: 'Analysis & Technology',
    description: '당신은 논리적이고 분석적인 사고가 뛰어난 사람입니다. 데이터와 사실을 바탕으로 정확한 판단을 내리며, 복잡한 문제를 체계적으로 해결합니다.',
    characteristics: ['논리적 사고', '분석력', '객관성', '꼼꼼함', '체계성'],
    strengths: ['문제 해결 능력', '데이터 분석', '전략 수립', '리스크 관리'],
    workStyle: '체계적으로 계획을 세우고, 데이터에 기반한 의사결정을 합니다.',
    idealEnvironment: '논리와 객관성이 존중받는 환경. 전문성을 인정받는 조직.',
    recommendedCareers: ['데이터 분석가/사이언티스트', '컨설턴트', '금융 분석가', '개발자/엔지니어', '리서처', 'PM', '회계사', '전략기획'],
    famousPeople: '워렌 버핏, 빌 게이츠, 일론 머스크',
    growthTips: ['소통 능력도 함께 키우세요', '완벽주의를 내려놓을 때도 필요합니다', '감정적 지능(EQ)도 중요합니다'],
    caution: '분석에만 매몰되지 말고, 실행도 중요합니다. 때로는 직관도 필요합니다.',
  },
  helper: {
    type: 'helper',
    title: '사회적 봉사형',
    emoji: '💚',
    field: 'Social & Education',
    description: '당신은 다른 사람을 돕고 함께 성장하는 것에서 보람을 느끼는 사람입니다. 공감 능력이 뛰어나고, 따뜻한 마음으로 사람들과 소통합니다.',
    characteristics: ['공감 능력', '배려심', '소통력', '봉사 정신', '따뜻함'],
    strengths: ['대인 관계', '갈등 해결', '경청', '멘토링'],
    workStyle: '사람들과 함께 일하며, 팀의 화합을 중시합니다. 의미 있는 일에 동기부여됩니다.',
    idealEnvironment: '따뜻하고 협력적인 분위기. 사회적 가치를 추구하는 조직.',
    recommendedCareers: ['상담사/심리치료사', '교사/교수', '사회복지사', 'HR', '의료 종사자 (간호사, 의사)', 'NGO/비영리', '코치', '고객 서비스'],
    famousPeople: '마더 테레사, 넬슨 만델라, 오프라 윈프리',
    growthTips: ['자신의 경계도 중요합니다', '번아웃을 주의하세요', '때로는 거절도 필요합니다'],
    caution: '남을 돕느라 자신을 소홀히 하지 마세요. 자기 관리도 중요합니다.',
  },
  leader: {
    type: 'leader',
    title: '기업가적 리더형',
    emoji: '👔',
    field: 'Business & Management',
    description: '당신은 목표 지향적이고 추진력이 강한 리더 타입입니다. 도전을 즐기고, 성과를 통해 인정받고 성장하는 것을 중요하게 생각합니다.',
    characteristics: ['리더십', '추진력', '목표 지향', '결단력', '도전 정신'],
    strengths: ['의사결정', '동기부여', '협상력', '비전 제시'],
    workStyle: '목표를 설정하고 팀을 이끌어 결과를 만들어냅니다. 빠른 의사결정을 선호합니다.',
    idealEnvironment: '성과가 인정받고, 성장 기회가 많은 환경. 재량권이 주어지는 조직.',
    recommendedCareers: ['경영자/CEO', '창업가', '영업/사업개발', 'PM', '컨설턴트', '투자가', '정치인', '변호사'],
    famousPeople: '잭 마, 제프 베조스, 손정의',
    growthTips: ['경청하는 법을 배우세요', '팀원의 성장도 중요합니다', '때로는 천천히 가는 것도 필요합니다'],
    caution: '성과에만 집중하다 사람을 잃을 수 있습니다. 균형이 중요합니다.',
  },
  organizer: {
    type: 'organizer',
    title: '체계적 관리형',
    emoji: '📋',
    field: 'Administration & Operations',
    description: '당신은 체계적이고 꼼꼼한 관리 능력이 뛰어난 사람입니다. 계획을 세우고 실행하며, 안정적이고 효율적인 운영을 추구합니다.',
    characteristics: ['체계성', '꼼꼼함', '신뢰성', '실행력', '안정 추구'],
    strengths: ['조직 관리', '일정 관리', '품질 관리', '프로세스 개선'],
    workStyle: '계획을 세우고 체계적으로 진행합니다. 안정적인 환경에서 효율을 극대화합니다.',
    idealEnvironment: '체계적이고 안정적인 환경. 명확한 역할과 프로세스가 있는 조직.',
    recommendedCareers: ['운영 관리자', '총무/행정', 'QA', '회계/재무', '물류 관리', '프로젝트 코디네이터', '공무원', '비서'],
    famousPeople: '워렌 버핏(투자 철학), 앙겔라 메르켈',
    growthTips: ['변화에 유연해지는 연습을 하세요', '새로운 방법도 시도해보세요', '창의성도 키워보세요'],
    caution: '너무 안전만 추구하면 기회를 놓칠 수 있습니다. 적절한 리스크 테이킹도 필요합니다.',
  },
  researcher: {
    type: 'researcher',
    title: '탐구적 연구형',
    emoji: '🔬',
    field: 'Research & Academia',
    description: '당신은 지적 호기심이 강하고 깊이 있는 탐구를 즐기는 사람입니다. 진리를 추구하고, 새로운 지식을 발견하는 것에서 큰 보람을 느낍니다.',
    characteristics: ['지적 호기심', '탐구심', '전문성', '인내심', '독립적'],
    strengths: ['심층 분석', '문제 발견', '전문 지식', '연구 능력'],
    workStyle: '깊이 있게 파고들어 연구하며, 독립적으로 일하는 것을 선호합니다.',
    idealEnvironment: '지적 자유가 보장되고, 전문성이 존중받는 환경. 연구 시간이 충분한 조직.',
    recommendedCareers: ['연구원/과학자', '교수', '의사/의학 연구', '엔지니어', '변리사', '애널리스트', '전문 저널리스트', '박물관 큐레이터'],
    famousPeople: '아인슈타인, 스티븐 호킹, 마리 퀴리',
    growthTips: ['연구 결과를 쉽게 전달하는 능력도 필요합니다', '협업도 중요합니다', '실용적 적용도 고려해보세요'],
    caution: '이론에만 매몰되지 말고 현실 적용도 생각하세요. 소통 능력도 키우면 좋습니다.',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): CareerAptitudeResult {
  const scores: Record<CareerType, number> = {
    creator: 0,
    analyst: 0,
    helper: 0,
    leader: 0,
    organizer: 0,
    researcher: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as CareerType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: CareerType = 'analyst';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as CareerType;
    }
  });

  return results[resultType];
}
