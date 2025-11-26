// 업무 스타일 테스트

export interface WorkStyleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface WorkStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  workEnvironment: string;
  communicationStyle: string;
  idealRole: string[];
  tips: string[];
  compatibility: string[];
  conflictWith: string[];
}

// 업무 스타일 유형
export const workStyleTypes = ['leader', 'collaborator', 'analyst', 'creative', 'supporter', 'executor'] as const;
export type WorkStyleType = typeof workStyleTypes[number];

// 질문 데이터 (12문항)
export const questions: WorkStyleQuestion[] = [
  {
    id: 1,
    question: "팀 프로젝트에서 나는 주로?",
    options: [
      { text: "방향을 제시하고 이끌어 나간다", scores: { leader: 2 } },
      { text: "팀원들과 협력하며 함께 진행한다", scores: { collaborator: 2 } },
      { text: "데이터를 분석하고 전략을 세운다", scores: { analyst: 2 } },
      { text: "새로운 아이디어를 제안한다", scores: { creative: 2 } },
    ],
  },
  {
    id: 2,
    question: "업무 중 문제가 생겼을 때 나는?",
    options: [
      { text: "즉시 결정을 내리고 해결한다", scores: { leader: 2, executor: 1 } },
      { text: "팀원들과 상의해서 해결책을 찾는다", scores: { collaborator: 2 } },
      { text: "원인을 꼼꼼히 분석한 후 대응한다", scores: { analyst: 2 } },
      { text: "기존과 다른 새로운 접근법을 시도한다", scores: { creative: 2 } },
    ],
  },
  {
    id: 3,
    question: "회의에서 나는 주로?",
    options: [
      { text: "회의를 주도하고 결론을 도출한다", scores: { leader: 2 } },
      { text: "다양한 의견을 경청하고 조율한다", scores: { collaborator: 2, supporter: 1 } },
      { text: "논리적인 근거와 데이터를 제시한다", scores: { analyst: 2 } },
      { text: "브레인스토밍을 이끈다", scores: { creative: 2 } },
    ],
  },
  {
    id: 4,
    question: "선호하는 업무 방식은?",
    options: [
      { text: "큰 그림을 보고 전체를 관리한다", scores: { leader: 2 } },
      { text: "팀원들과 함께 나눠서 한다", scores: { collaborator: 2 } },
      { text: "체계적으로 계획을 세워 진행한다", scores: { analyst: 2, executor: 1 } },
      { text: "자유롭게 창의적으로 진행한다", scores: { creative: 2 } },
    ],
  },
  {
    id: 5,
    question: "상사의 피드백을 받았을 때?",
    options: [
      { text: "개선점을 빠르게 파악하고 실행한다", scores: { executor: 2 } },
      { text: "팀원들과 공유하고 함께 개선한다", scores: { collaborator: 2 } },
      { text: "피드백의 타당성을 분석한다", scores: { analyst: 2 } },
      { text: "더 나은 대안을 제시해 본다", scores: { creative: 2, leader: 1 } },
    ],
  },
  {
    id: 6,
    question: "동료가 어려움을 겪고 있을 때?",
    options: [
      { text: "해결 방향을 제시해 준다", scores: { leader: 2 } },
      { text: "함께 고민하고 도와준다", scores: { supporter: 2, collaborator: 1 } },
      { text: "문제를 분석해서 조언해 준다", scores: { analyst: 2 } },
      { text: "새로운 관점을 제안해 준다", scores: { creative: 2 } },
    ],
  },
  {
    id: 7,
    question: "새로운 프로젝트를 시작할 때?",
    options: [
      { text: "전체 로드맵과 목표를 먼저 세운다", scores: { leader: 2 } },
      { text: "팀원 역할 분담을 먼저 논의한다", scores: { collaborator: 2 } },
      { text: "리서치와 분석부터 시작한다", scores: { analyst: 2 } },
      { text: "아이디어를 자유롭게 펼쳐본다", scores: { creative: 2 } },
    ],
  },
  {
    id: 8,
    question: "업무에서 가장 중요하게 생각하는 것은?",
    options: [
      { text: "결과와 성과", scores: { leader: 2, executor: 1 } },
      { text: "팀워크와 협력", scores: { collaborator: 2, supporter: 1 } },
      { text: "정확성과 완성도", scores: { analyst: 2 } },
      { text: "혁신과 창의성", scores: { creative: 2 } },
    ],
  },
  {
    id: 9,
    question: "마감이 급박할 때 나는?",
    options: [
      { text: "우선순위를 정하고 빠르게 결정한다", scores: { leader: 2, executor: 1 } },
      { text: "팀원들과 업무를 분담한다", scores: { collaborator: 2 } },
      { text: "가장 효율적인 방법을 찾는다", scores: { analyst: 2 } },
      { text: "압박 속에서 아이디어가 더 잘 나온다", scores: { creative: 2 } },
    ],
  },
  {
    id: 10,
    question: "성취감을 느끼는 순간은?",
    options: [
      { text: "목표를 달성했을 때", scores: { leader: 2, executor: 1 } },
      { text: "팀이 함께 성공했을 때", scores: { collaborator: 2, supporter: 1 } },
      { text: "완벽한 결과물을 만들었을 때", scores: { analyst: 2 } },
      { text: "새로운 것을 만들어냈을 때", scores: { creative: 2 } },
    ],
  },
  {
    id: 11,
    question: "업무 환경 선호도는?",
    options: [
      { text: "결과 중심의 성과 지향 환경", scores: { leader: 2, executor: 1 } },
      { text: "화목하고 협력적인 분위기", scores: { collaborator: 2, supporter: 1 } },
      { text: "체계적이고 안정적인 환경", scores: { analyst: 2 } },
      { text: "자유롭고 유연한 환경", scores: { creative: 2 } },
    ],
  },
  {
    id: 12,
    question: "스트레스를 받는 상황은?",
    options: [
      { text: "결정권이 없을 때", scores: { leader: 2 } },
      { text: "팀 분위기가 안 좋을 때", scores: { collaborator: 2, supporter: 1 } },
      { text: "부정확하거나 급하게 할 때", scores: { analyst: 2 } },
      { text: "틀에 박힌 업무를 할 때", scores: { creative: 2 } },
    ],
  },
];

// 결과 데이터
export const results: Record<WorkStyleType, WorkStyleResult> = {
  leader: {
    type: 'leader',
    title: '리더형',
    emoji: '👑',
    subtitle: 'The Leader',
    description: '당신은 리더형 업무 스타일입니다. 큰 그림을 보고 방향을 제시하며, 목표 달성을 위해 팀을 이끌어 나갑니다. 결정력이 뛰어나고 책임감이 강합니다.',
    characteristics: ['비전 제시', '결단력', '책임감', '목표 지향적', '추진력'],
    strengths: ['빠른 의사결정', '위기 상황 대처 능력', '팀 동기부여', '전략적 사고'],
    weaknesses: ['세부사항 놓칠 수 있음', '일방적일 수 있음', '위임 어려움'],
    workEnvironment: '결과 중심의 성과 지향적 환경에서 잘 맞습니다. 재량권이 주어지는 직책이 적합합니다.',
    communicationStyle: '직접적이고 명확하게 소통합니다. 핵심을 바로 전달하는 것을 선호합니다.',
    idealRole: ['팀장', 'PM', '사업 기획', '경영진', '창업가'],
    tips: ['팀원 의견도 경청하세요', '세부사항에도 관심을 기울이세요', '실패를 두려워하지 마세요'],
    compatibility: ['실행형', '서포터형'],
    conflictWith: ['또 다른 리더형'],
  },
  collaborator: {
    type: 'collaborator',
    title: '협력형',
    emoji: '🤝',
    subtitle: 'The Collaborator',
    description: '당신은 협력형 업무 스타일입니다. 팀워크를 중시하고, 함께 시너지를 내는 것을 좋아합니다. 의견을 조율하고 갈등을 해결하는 능력이 뛰어납니다.',
    characteristics: ['팀워크 중시', '조율 능력', '공감 능력', '유연성', '소통 능력'],
    strengths: ['갈등 해결', '원활한 소통', '팀 분위기 조성', '다양한 의견 수렴'],
    weaknesses: ['결정이 느릴 수 있음', '갈등 회피 경향', '자기 주장 부족'],
    workEnvironment: '협력적이고 화목한 팀 분위기에서 최고의 성과를 냅니다.',
    communicationStyle: '경청을 중요시하고, 모든 사람의 의견을 존중합니다.',
    idealRole: ['HR', '코디네이터', '파트너십 매니저', '팀 매니저', '고객 관리'],
    tips: ['때로는 과감한 결정도 필요해요', '자신의 의견도 분명히 말하세요', '모두를 만족시킬 순 없어요'],
    compatibility: ['리더형', '서포터형', '분석형'],
    conflictWith: ['독단적인 리더형'],
  },
  analyst: {
    type: 'analyst',
    title: '분석형',
    emoji: '📊',
    subtitle: 'The Analyst',
    description: '당신은 분석형 업무 스타일입니다. 데이터와 논리를 바탕으로 정확한 판단을 내립니다. 꼼꼼하고 체계적이며, 완성도 높은 결과물을 추구합니다.',
    characteristics: ['논리적 사고', '꼼꼼함', '체계성', '정확성', '객관성'],
    strengths: ['정밀한 분석', '문제 원인 파악', '리스크 관리', '품질 관리'],
    weaknesses: ['결정이 느릴 수 있음', '과도한 분석', '유연성 부족'],
    workEnvironment: '체계적이고 안정적인 환경을 선호합니다. 충분한 분석 시간이 주어지는 곳이 좋습니다.',
    communicationStyle: '사실과 데이터에 기반한 객관적인 소통을 합니다.',
    idealRole: ['데이터 분석가', '컨설턴트', '연구원', 'QA', '재무/회계'],
    tips: ['완벽함에 집착하지 마세요', '가끔은 직감도 믿어보세요', '빠른 결정이 필요할 때도 있어요'],
    compatibility: ['협력형', '실행형'],
    conflictWith: ['즉흥적인 창의형'],
  },
  creative: {
    type: 'creative',
    title: '창의형',
    emoji: '💡',
    subtitle: 'The Creative',
    description: '당신은 창의형 업무 스타일입니다. 새로운 아이디어와 혁신적인 접근을 추구합니다. 틀에 박힌 것을 싫어하고, 자유로운 환경에서 최고의 성과를 냅니다.',
    characteristics: ['창의성', '혁신적 사고', '유연성', '호기심', '독창성'],
    strengths: ['새로운 아이디어', '문제의 새로운 접근', '트렌드 파악', '변화 주도'],
    weaknesses: ['실행력 부족할 수 있음', '체계성 부족', '산만해질 수 있음'],
    workEnvironment: '자유롭고 유연한 환경에서 창의성이 극대화됩니다. 새로운 시도를 장려하는 곳이 좋습니다.',
    communicationStyle: '아이디어 중심으로 소통하며, 브레인스토밍을 좋아합니다.',
    idealRole: ['디자이너', '마케터', '기획자', '콘텐츠 크리에이터', 'UX'],
    tips: ['아이디어를 실행으로 옮기는 연습을 하세요', '마감을 지키는 것도 중요해요', '디테일도 신경 쓰세요'],
    compatibility: ['실행형', '서포터형'],
    conflictWith: ['경직된 분석형'],
  },
  supporter: {
    type: 'supporter',
    title: '서포터형',
    emoji: '🌱',
    subtitle: 'The Supporter',
    description: '당신은 서포터형 업무 스타일입니다. 팀원들을 돕고 지원하는 것에서 보람을 느끼며, 팀의 분위기 메이커 역할을 합니다. 배려심이 깊고 신뢰할 수 있습니다.',
    characteristics: ['배려심', '봉사 정신', '신뢰성', '안정성', '친화력'],
    strengths: ['팀 분위기 조성', '안정적인 업무 수행', '동료 지원', '갈등 완화'],
    weaknesses: ['자기 주장 부족', '거절 어려움', '자신의 욕구 무시'],
    workEnvironment: '화목하고 안정적인 팀 분위기에서 잘 맞습니다.',
    communicationStyle: '부드럽고 배려 있는 소통을 합니다. 경청을 잘합니다.',
    idealRole: ['비서', '어시스턴트', '고객 서비스', '총무', '교육/멘토링'],
    tips: ['자신의 의견도 중요해요', '번아웃 주의하세요', '거절하는 법도 배우세요'],
    compatibility: ['리더형', '창의형'],
    conflictWith: ['자기중심적인 리더형'],
  },
  executor: {
    type: 'executor',
    title: '실행형',
    emoji: '⚡',
    subtitle: 'The Executor',
    description: '당신은 실행형 업무 스타일입니다. 말보다 행동이 앞서며, 빠르고 확실하게 일을 처리합니다. 실용적이고 결과 지향적입니다.',
    characteristics: ['실행력', '효율성', '실용적', '결과 지향', '추진력'],
    strengths: ['빠른 업무 처리', '목표 달성', '실용적 해결', '믿음직함'],
    weaknesses: ['계획 부족할 수 있음', '성급한 결정', '깊은 분석 부족'],
    workEnvironment: '명확한 목표와 기한이 있는 환경에서 최고의 성과를 냅니다.',
    communicationStyle: '간결하고 실용적인 소통을 선호합니다.',
    idealRole: ['영업', '운영', '물류', '생산 관리', '프로젝트 실행'],
    tips: ['가끔은 멈추고 계획을 세우세요', '디테일도 중요해요', '팀원과의 소통도 신경 쓰세요'],
    compatibility: ['리더형', '분석형'],
    conflictWith: ['느린 의사결정'],
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): WorkStyleResult {
  const scores: Record<WorkStyleType, number> = {
    leader: 0,
    collaborator: 0,
    analyst: 0,
    creative: 0,
    supporter: 0,
    executor: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as WorkStyleType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: WorkStyleType = 'collaborator';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as WorkStyleType;
    }
  });

  return results[resultType];
}
