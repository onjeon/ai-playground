// 재택근무 적합도 테스트

export interface RemoteWorkQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      remote: number;
      hybrid: number;
      office: number;
    };
  }[];
}

export interface RemoteWorkResult {
  type: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}

export const questions: RemoteWorkQuestion[] = [
  {
    id: 1,
    question: '아침에 일어나서 바로 일할 수 있나요?',
    options: [
      { text: '바로 노트북 켜고 시작 가능!', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '준비 시간이 좀 필요하다', scores: { remote: 2, hybrid: 3, office: 1 } },
      { text: '출근해야 일하는 모드가 된다', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '집에서는 절대 일 못 한다', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 2,
    question: '혼자 일할 때 집중력은?',
    options: [
      { text: '오히려 더 집중 잘 된다', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '보통이다', scores: { remote: 2, hybrid: 3, office: 1 } },
      { text: '좀 산만해지는 편', scores: { remote: 0, hybrid: 2, office: 2 } },
      { text: '누가 봐야 일한다', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 3,
    question: '동료들과의 소통 방식 선호도는?',
    options: [
      { text: '슬랙/메신저로 충분하다', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '가끔은 직접 만나서 얘기하고 싶다', scores: { remote: 1, hybrid: 3, office: 1 } },
      { text: '대면 소통이 효율적이다', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '매일 얼굴 보며 일해야 한다', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 4,
    question: '업무 시간 관리 능력은?',
    options: [
      { text: '스스로 잘 관리한다', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '대체로 잘하는 편', scores: { remote: 2, hybrid: 3, office: 1 } },
      { text: '가끔 미루는 편이다', scores: { remote: 0, hybrid: 2, office: 2 } },
      { text: '외부 강제가 필요하다', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 5,
    question: '재택근무 시 방해 요소가 있나요?',
    options: [
      { text: '독립된 공간이 있어서 괜찮다', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '가끔 방해받지만 괜찮다', scores: { remote: 2, hybrid: 3, office: 1 } },
      { text: '가족/룸메이트가 신경 쓰인다', scores: { remote: 0, hybrid: 2, office: 2 } },
      { text: '집에서 일할 환경이 안 된다', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 6,
    question: '회식/팀 문화에 대한 생각은?',
    options: [
      { text: '온라인 모임으로 충분하다', scores: { remote: 3, hybrid: 1, office: 0 } },
      { text: '가끔 오프라인 모임은 좋다', scores: { remote: 1, hybrid: 3, office: 1 } },
      { text: '정기적 오프라인 모임 필요', scores: { remote: 0, hybrid: 2, office: 2 } },
      { text: '자주 만나야 팀워크가 된다', scores: { remote: 0, hybrid: 1, office: 3 } },
    ],
  },
  {
    id: 7,
    question: '출퇴근 시간에 대한 생각은?',
    options: [
      { text: '출퇴근 시간이 아까워 죽겠다', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '적당한 이동 시간은 괜찮다', scores: { remote: 1, hybrid: 3, office: 1 } },
      { text: '출퇴근이 일상의 리듬을 만든다', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '회사 가는 게 당연한 거 아닌가', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 8,
    question: '급한 협업이 필요할 때는?',
    options: [
      { text: '화상회의로 바로 해결', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '필요하면 출근해서 협업', scores: { remote: 1, hybrid: 3, office: 1 } },
      { text: '직접 만나서 하는 게 빠르다', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '대면 협업이 훨씬 효율적', scores: { remote: 0, hybrid: 1, office: 3 } },
    ],
  },
  {
    id: 9,
    question: '워라밸에서 가장 중요한 것은?',
    options: [
      { text: '시간과 장소의 자유', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '업무와 개인 시간의 분리', scores: { remote: 1, hybrid: 3, office: 2 } },
      { text: '정해진 퇴근 시간', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '직장 동료들과의 관계', scores: { remote: 0, hybrid: 1, office: 3 } },
    ],
  },
  {
    id: 10,
    question: '새로운 직원 온보딩은 어떻게?',
    options: [
      { text: '문서화된 자료로 충분하다', scores: { remote: 3, hybrid: 1, office: 0 } },
      { text: '초반엔 대면이 좋다', scores: { remote: 1, hybrid: 3, office: 2 } },
      { text: '직접 옆에서 배워야 한다', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '선배와 같이 일해야 배운다', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
  {
    id: 11,
    question: '업무 피드백은 어떻게 받고 싶나요?',
    options: [
      { text: '문서/메시지로 상세하게', scores: { remote: 3, hybrid: 2, office: 0 } },
      { text: '화상 또는 대면 섞어서', scores: { remote: 1, hybrid: 3, office: 1 } },
      { text: '얼굴 보고 직접 얘기', scores: { remote: 0, hybrid: 2, office: 3 } },
      { text: '수시로 직접 소통하며', scores: { remote: 0, hybrid: 1, office: 3 } },
    ],
  },
  {
    id: 12,
    question: '이상적인 근무 환경은?',
    options: [
      { text: '100% 원격 (어디서든 일)', scores: { remote: 3, hybrid: 0, office: 0 } },
      { text: '주 1-2회 출근', scores: { remote: 2, hybrid: 3, office: 0 } },
      { text: '주 3-4회 출근', scores: { remote: 0, hybrid: 3, office: 2 } },
      { text: '매일 출근', scores: { remote: 0, hybrid: 0, office: 3 } },
    ],
  },
];

export const results: RemoteWorkResult[] = [
  {
    type: 'remote',
    title: '풀 리모트 적합',
    emoji: '🏠',
    color: '#8B5CF6',
    description: '어디서든 생산성을 발휘하는 디지털 노마드! 100% 원격근무가 딱 맞습니다.',
    traits: ['자기관리', '독립적', '디지털 친화적', '유연함'],
    strengths: ['높은 자율성', '시간 효율', '집중 업무 능력', '비동기 소통'],
    weaknesses: ['고립감 가능', '소통 오해', '업무-생활 경계 모호'],
    tips: [
      '완전 원격 가능한 회사를 찾으세요',
      '홈오피스 환경을 잘 구축하세요',
      '규칙적인 루틴을 만드세요',
      '온라인 커뮤니티로 네트워킹하세요',
    ],
  },
  {
    type: 'hybrid',
    title: '하이브리드 적합',
    emoji: '🔄',
    color: '#10B981',
    description: '유연함과 소통의 균형! 재택과 출근을 적절히 섞는 하이브리드가 최적입니다.',
    traits: ['균형 감각', '적응력', '협업 능력', '유연성'],
    strengths: ['상황별 최적화', '관계 유지', '집중+협업 모두 가능'],
    weaknesses: ['일정 조율 필요', '두 환경 관리', '때때로 비효율'],
    tips: [
      '하이브리드 제도가 있는 회사를 찾으세요',
      '출근일과 재택일의 업무를 구분하세요',
      '협업은 출근일에, 집중 업무는 재택일에',
      '팀과 일정을 맞추는 게 중요해요',
    ],
  },
  {
    type: 'office',
    title: '오피스 출근 선호',
    emoji: '🏢',
    color: '#F59E0B',
    description: '사무실에서 동료들과 함께할 때 최고의 성과를 내는 타입! 출근이 에너지입니다.',
    traits: ['사교적', '팀 플레이어', '구조적', '대면 선호'],
    strengths: ['빠른 소통', '팀워크', '업무-생활 분리', '네트워킹'],
    weaknesses: ['출퇴근 시간', '유연성 제한', '집중 방해 가능'],
    tips: [
      '좋은 오피스 문화의 회사를 선택하세요',
      '출퇴근 시간을 활용하세요 (팟캐스트, 독서)',
      '집중이 필요하면 회의실/카페 활용',
      '재택이 필요한 날은 미리 계획하세요',
    ],
  },
];

export function calculateRemoteWorkResult(answers: number[]): RemoteWorkResult {
  const scores = { remote: 0, hybrid: 0, office: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      scores.remote += optionScores.remote;
      scores.hybrid += optionScores.hybrid;
      scores.office += optionScores.office;
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  return results.find(r => r.type === maxType) || results[0];
}
