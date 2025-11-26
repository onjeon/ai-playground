// 면접 스타일 테스트

export interface InterviewQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      prepared: number;
      natural: number;
      nervous: number;
      confident: number;
    };
  }[];
}

export interface InterviewResult {
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

export const questions: InterviewQuestion[] = [
  {
    id: 1,
    question: '면접 전날 밤, 나는?',
    options: [
      { text: '예상 질문 답변을 완벽히 외운다', scores: { prepared: 3, natural: 0, nervous: 1, confident: 0 } },
      { text: '대략적인 방향만 정리하고 잔다', scores: { prepared: 1, natural: 3, nervous: 0, confident: 1 } },
      { text: '긴장돼서 잠을 못 잔다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '평소처럼 편하게 잔다', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 2,
    question: '면접장에 도착했을 때?',
    options: [
      { text: '준비한 답변을 마지막으로 점검', scores: { prepared: 3, natural: 0, nervous: 1, confident: 0 } },
      { text: '주변을 둘러보며 분위기 파악', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '심장이 두근거려 진정이 안 된다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '담담하게 순서를 기다린다', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 3,
    question: '"자기소개 해주세요"라고 하면?',
    options: [
      { text: '외운 대로 막힘없이 말한다', scores: { prepared: 3, natural: 0, nervous: 0, confident: 1 } },
      { text: '상황에 맞게 자연스럽게 풀어낸다', scores: { prepared: 0, natural: 3, nervous: 0, confident: 2 } },
      { text: '긴장해서 말이 꼬인다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '자신감 있게 어필한다', scores: { prepared: 1, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 4,
    question: '예상치 못한 질문이 나오면?',
    options: [
      { text: '당황하지만 준비한 내용으로 연결', scores: { prepared: 3, natural: 1, nervous: 1, confident: 0 } },
      { text: '솔직하게 생각을 정리해서 답변', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '머리가 하얘진다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '오히려 기회라고 생각하고 답변', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 5,
    question: '면접관이 압박 질문을 하면?',
    options: [
      { text: '준비한 대응법대로 침착하게', scores: { prepared: 3, natural: 0, nervous: 0, confident: 1 } },
      { text: '솔직하게 인정할 건 인정한다', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '당황해서 제대로 답 못 한다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '논리적으로 반박한다', scores: { prepared: 1, natural: 0, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 6,
    question: '"질문 있으세요?" 할 때?',
    options: [
      { text: '미리 준비한 질문을 한다', scores: { prepared: 3, natural: 1, nervous: 0, confident: 1 } },
      { text: '대화 중 궁금했던 걸 물어본다', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '"없습니다"라고 한다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '인상적인 질문으로 어필한다', scores: { prepared: 1, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 7,
    question: '면접 복장은?',
    options: [
      { text: '회사 분위기에 맞게 철저히 조사해서', scores: { prepared: 3, natural: 1, nervous: 0, confident: 0 } },
      { text: '깔끔하지만 나다운 스타일로', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '혹시 모르니 가장 정장으로', scores: { prepared: 1, natural: 0, nervous: 2, confident: 0 } },
      { text: '자신감 있게 보이는 옷으로', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 8,
    question: '면접에서 가장 신경 쓰는 것은?',
    options: [
      { text: '답변 내용의 완성도', scores: { prepared: 3, natural: 0, nervous: 0, confident: 1 } },
      { text: '자연스러운 대화 흐름', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '실수하지 않는 것', scores: { prepared: 1, natural: 0, nervous: 3, confident: 0 } },
      { text: '좋은 인상 남기기', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 9,
    question: '면접 후 기분은?',
    options: [
      { text: '준비한 것 다 말했는지 체크', scores: { prepared: 3, natural: 0, nervous: 1, confident: 0 } },
      { text: '나쁘지 않았다고 생각', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '못한 말이 자꾸 떠올라 후회', scores: { prepared: 1, natural: 0, nervous: 3, confident: 0 } },
      { text: '잘 봤다고 자신', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 10,
    question: '단체 면접/토론 면접에서 나는?',
    options: [
      { text: '역할을 정해서 체계적으로 참여', scores: { prepared: 3, natural: 1, nervous: 0, confident: 1 } },
      { text: '흐름에 맞게 자연스럽게 참여', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '눈에 안 띄려고 조용히', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '적극적으로 의견을 낸다', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 11,
    question: '연봉/조건 협상할 때?',
    options: [
      { text: '시장 조사를 바탕으로 협상', scores: { prepared: 3, natural: 0, nervous: 0, confident: 1 } },
      { text: '솔직하게 희망 조건을 말한다', scores: { prepared: 0, natural: 3, nervous: 0, confident: 1 } },
      { text: '제시하는 대로 받아들인다', scores: { prepared: 0, natural: 0, nervous: 3, confident: 0 } },
      { text: '당당하게 원하는 걸 요구한다', scores: { prepared: 1, natural: 0, nervous: 0, confident: 3 } },
    ],
  },
  {
    id: 12,
    question: '면접 준비 기간은?',
    options: [
      { text: '최소 1-2주 이상 철저히', scores: { prepared: 3, natural: 0, nervous: 1, confident: 0 } },
      { text: '며칠 전부터 핵심만 정리', scores: { prepared: 1, natural: 3, nervous: 0, confident: 1 } },
      { text: '준비해도 긴장될 것 같다', scores: { prepared: 1, natural: 0, nervous: 3, confident: 0 } },
      { text: '크게 준비 안 해도 될 것 같다', scores: { prepared: 0, natural: 1, nervous: 0, confident: 3 } },
    ],
  },
];

export const results: InterviewResult[] = [
  {
    type: 'prepared',
    title: '철저한 준비형',
    emoji: '📚',
    color: '#3B82F6',
    description: '준비의 왕! 모든 질문에 완벽한 답변을 준비해가는 철저한 타입입니다.',
    traits: ['꼼꼼함', '성실함', '분석적', '계획적'],
    strengths: ['완성도 높은 답변', '예상 질문 대응', '논리적 전개'],
    weaknesses: ['돌발 상황 당황', '자연스러움 부족', '융통성 제한'],
    tips: [
      '핵심 메시지 위주로 기억하세요',
      '외운 티 나지 않게 연습하세요',
      '돌발 질문 대응도 연습해보세요',
      '대화하듯 자연스럽게 말하는 연습!',
    ],
  },
  {
    type: 'natural',
    title: '자연스러운 대화형',
    emoji: '💬',
    color: '#10B981',
    description: '면접도 대화! 준비된 내용을 자연스럽게 풀어내는 소통의 달인입니다.',
    traits: ['유연함', '소통 능력', '적응력', '친근함'],
    strengths: ['자연스러운 분위기', '돌발 대응 능력', '호감 형성'],
    weaknesses: ['핵심 어필 부족', '구체성 떨어질 수 있음', '준비 소홀 위험'],
    tips: [
      '핵심 어필 포인트는 꼭 정리해두세요',
      '구체적인 숫자/사례를 준비하세요',
      '편하다고 너무 캐주얼해지지 않게!',
      '질문의 의도를 파악하는 연습을 하세요',
    ],
  },
  {
    type: 'nervous',
    title: '긴장형',
    emoji: '😰',
    color: '#F59E0B',
    description: '면접만 생각하면 긴장되는 타입! 하지만 긴장은 준비의 증거입니다.',
    traits: ['신중함', '책임감', '진지함', '겸손함'],
    strengths: ['성실한 태도', '진정성', '노력하는 모습'],
    weaknesses: ['긴장으로 실력 발휘 못함', '자신감 부족', '말 꼬임'],
    tips: [
      '긴장은 자연스러운 것, 인정하세요',
      '모의 면접을 많이 연습하세요',
      '호흡 조절 연습을 해보세요',
      '긴장해도 괜찮다고 스스로에게 말하세요',
      '완벽하지 않아도 된다는 걸 기억하세요',
    ],
  },
  {
    type: 'confident',
    title: '자신감 넘치는 타입',
    emoji: '😎',
    color: '#8B5CF6',
    description: '면접이 두렵지 않은 자신감의 소유자! 당당함이 최고의 무기입니다.',
    traits: ['자신감', '당당함', '긍정적', '주도적'],
    strengths: ['강한 인상', '압박 대응 능력', '어필 능력'],
    weaknesses: ['자만심 주의', '경청 부족', '오버 가능성'],
    tips: [
      '자신감과 오만함의 경계를 조심하세요',
      '면접관의 말에 경청하는 모습을 보이세요',
      '겸손한 자신감이 최고입니다',
      '근거 없는 자신감은 역효과!',
    ],
  },
];

export function calculateInterviewResult(answers: number[]): InterviewResult {
  const scores = { prepared: 0, natural: 0, nervous: 0, confident: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      scores.prepared += optionScores.prepared;
      scores.natural += optionScores.natural;
      scores.nervous += optionScores.nervous;
      scores.confident += optionScores.confident;
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  return results.find(r => r.type === maxType) || results[0];
}
