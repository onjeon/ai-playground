// 협상 스타일 테스트

export interface NegotiationQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      assertive: number;
      collaborative: number;
      compromising: number;
      avoiding: number;
    };
  }[];
}

export interface NegotiationResult {
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

export const questions: NegotiationQuestion[] = [
  {
    id: 1,
    question: '협상에서 가장 중요하게 생각하는 것은?',
    options: [
      { text: '내가 원하는 것을 확실히 얻는 것', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 1 } },
      { text: '상대방도 만족할 수 있는 결과', scores: { assertive: 0, compromising: 2, avoiding: 0, collaborative: 3 } },
      { text: '갈등 없이 평화롭게 끝나는 것', scores: { assertive: 0, compromising: 1, avoiding: 3, collaborative: 0 } },
      { text: '서로 조금씩 양보하는 것', scores: { assertive: 0, compromising: 3, avoiding: 1, collaborative: 1 } },
    ],
  },
  {
    id: 2,
    question: '상대방이 무리한 요구를 할 때 나는?',
    options: [
      { text: '단호하게 거절하고 내 입장을 고수한다', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 0 } },
      { text: '왜 그런 요구를 하는지 이유를 먼저 묻는다', scores: { assertive: 0, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '일단 들어주고 나중에 대안을 찾는다', scores: { assertive: 0, compromising: 2, avoiding: 2, collaborative: 0 } },
      { text: '분위기가 나빠질까봐 적당히 넘어간다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 3,
    question: '협상 전 준비 스타일은?',
    options: [
      { text: '내 목표와 최저선을 명확히 정한다', scores: { assertive: 3, compromising: 1, avoiding: 0, collaborative: 1 } },
      { text: '상대방의 니즈와 상황을 철저히 조사한다', scores: { assertive: 0, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '다양한 타협안을 미리 준비해둔다', scores: { assertive: 0, compromising: 3, avoiding: 0, collaborative: 1 } },
      { text: '그때그때 상황에 맞게 대응한다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 4,
    question: '협상이 교착 상태에 빠지면?',
    options: [
      { text: '내 입장을 더 강하게 주장한다', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 0 } },
      { text: '새로운 대안을 함께 찾아보자고 제안한다', scores: { assertive: 0, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '중간 지점에서 타협점을 찾는다', scores: { assertive: 0, compromising: 3, avoiding: 0, collaborative: 1 } },
      { text: '일단 시간을 두고 나중에 다시 논의한다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 5,
    question: '급여 협상에서 나는?',
    options: [
      { text: '원하는 금액을 당당하게 제시한다', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 1 } },
      { text: '시장 조사를 바탕으로 합리적인 근거를 제시한다', scores: { assertive: 1, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '회사 사정도 고려해서 적당히 조율한다', scores: { assertive: 0, compromising: 3, avoiding: 0, collaborative: 1 } },
      { text: '제시하는 대로 받아들이는 편이다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 6,
    question: '협상에서 감정이 격해지면?',
    options: [
      { text: '감정도 협상의 일부, 그대로 표현한다', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 0 } },
      { text: '잠시 휴식을 제안하고 냉정을 찾는다', scores: { assertive: 0, compromising: 1, avoiding: 1, collaborative: 3 } },
      { text: '상대방의 감정을 먼저 인정해준다', scores: { assertive: 0, compromising: 2, avoiding: 0, collaborative: 2 } },
      { text: '불편해서 빨리 끝내려고 한다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 7,
    question: '협상 상대가 나보다 지위가 높을 때?',
    options: [
      { text: '지위와 상관없이 동등하게 협상한다', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 1 } },
      { text: '상대의 입장을 존중하되 내 의견도 분명히 전달', scores: { assertive: 1, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '어느 정도 양보할 준비를 하고 간다', scores: { assertive: 0, compromising: 3, avoiding: 1, collaborative: 0 } },
      { text: '웬만하면 상대 의견을 따른다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 8,
    question: '협상 결과가 불만족스러울 때?',
    options: [
      { text: '다음에는 더 잘하겠다고 다짐한다', scores: { assertive: 2, compromising: 1, avoiding: 0, collaborative: 1 } },
      { text: '왜 그런 결과가 나왔는지 분석한다', scores: { assertive: 1, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '어쩔 수 없다고 받아들인다', scores: { assertive: 0, compromising: 2, avoiding: 2, collaborative: 0 } },
      { text: '협상 자체가 스트레스라 그냥 잊으려 한다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 9,
    question: '팀 프로젝트에서 의견 충돌이 있을 때?',
    options: [
      { text: '내 의견이 옳다고 설득한다', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 0 } },
      { text: '모든 의견을 종합해 최선의 방안을 찾는다', scores: { assertive: 0, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '다수결로 결정하자고 제안한다', scores: { assertive: 0, compromising: 3, avoiding: 0, collaborative: 1 } },
      { text: '다른 사람 의견을 따른다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 10,
    question: '나에게 협상이란?',
    options: [
      { text: '이기고 지는 게임', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 0 } },
      { text: '함께 문제를 해결하는 과정', scores: { assertive: 0, compromising: 0, avoiding: 0, collaborative: 3 } },
      { text: '서로 적당히 맞춰가는 것', scores: { assertive: 0, compromising: 3, avoiding: 0, collaborative: 0 } },
      { text: '피하고 싶은 스트레스', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 11,
    question: '협상 중 상대방이 양보를 요청하면?',
    options: [
      { text: '대신 내가 원하는 것을 요구한다', scores: { assertive: 3, compromising: 1, avoiding: 0, collaborative: 1 } },
      { text: '그 양보가 전체 합의에 어떤 영향을 주는지 따진다', scores: { assertive: 1, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '관계를 위해 들어주는 편이다', scores: { assertive: 0, compromising: 2, avoiding: 1, collaborative: 0 } },
      { text: '일단 들어주고 본다', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
  {
    id: 12,
    question: '협상 테이블에서 나의 모습은?',
    options: [
      { text: '자신감 넘치고 주도적', scores: { assertive: 3, compromising: 0, avoiding: 0, collaborative: 1 } },
      { text: '경청하고 질문을 많이 하는 편', scores: { assertive: 0, compromising: 1, avoiding: 0, collaborative: 3 } },
      { text: '유연하고 융통성 있는 편', scores: { assertive: 0, compromising: 3, avoiding: 0, collaborative: 1 } },
      { text: '조용히 상황을 지켜보는 편', scores: { assertive: 0, compromising: 0, avoiding: 3, collaborative: 0 } },
    ],
  },
];

export const results: NegotiationResult[] = [
  {
    type: 'assertive',
    title: '주도적 협상가',
    emoji: '🦁',
    color: '#EF4444',
    description: '목표를 향해 단호하게 밀어붙이는 스타일! 협상에서 자신의 이익을 최대화하는 데 능숙합니다.',
    traits: ['목표 지향적', '자신감 있는', '단호한', '결단력 있는'],
    strengths: ['명확한 목표 설정', '압박 상황에서 강함', '결과 도출 능력'],
    weaknesses: ['관계 손상 가능성', '상대방 반발 유발', '장기적 협력 어려움'],
    tips: [
      '상대방의 니즈도 경청하는 연습을 하세요',
      '윈-윈 결과를 위한 대안도 고려해보세요',
      '관계 유지와 결과 사이의 균형을 찾으세요',
    ],
    famousPeople: '스티브 잡스, 도널드 트럼프, 손정의',
  },
  {
    type: 'collaborative',
    title: '협력적 협상가',
    emoji: '🤝',
    color: '#10B981',
    description: '상대방과 함께 최선의 해결책을 찾는 스타일! 창의적인 윈-윈 솔루션을 만들어내는 데 탁월합니다.',
    traits: ['문제 해결 중심', '창의적', '공감 능력', '장기적 관점'],
    strengths: ['신뢰 구축', '창의적 대안 도출', '장기적 관계 유지'],
    weaknesses: ['시간이 오래 걸림', '상대가 악용할 수 있음', '단기 손실 가능'],
    tips: [
      '때로는 단호한 결정도 필요해요',
      '협력이 불가능한 상대도 있다는 걸 인식하세요',
      '최저선은 명확히 설정해두세요',
    ],
    famousPeople: '워렌 버핏, 빌 게이츠, 오프라 윈프리',
  },
  {
    type: 'compromising',
    title: '타협형 협상가',
    emoji: '⚖️',
    color: '#F59E0B',
    description: '빠르게 중간 지점을 찾는 실용적인 스타일! 효율적으로 합의를 이끌어내는 데 능숙합니다.',
    traits: ['실용적', '공정함 추구', '효율적', '융통성 있는'],
    strengths: ['빠른 합의 도출', '양측 만족도 균형', '갈등 최소화'],
    weaknesses: ['최적의 결과를 놓칠 수 있음', '창의적 대안 부족', '습관적 양보'],
    tips: [
      '타협 전에 더 좋은 대안이 있는지 탐색하세요',
      '처음부터 양보하지 말고 여유를 두세요',
      '핵심 이익은 끝까지 지키세요',
    ],
    famousPeople: '앙겔라 메르켈, 버락 오바마',
  },
  {
    type: 'avoiding',
    title: '회피형 협상가',
    emoji: '🕊️',
    color: '#6B7280',
    description: '갈등을 피하고 평화를 유지하려는 스타일! 관계 유지를 중요시하지만, 때로는 손해를 볼 수 있어요.',
    traits: ['평화 지향', '갈등 회피', '관계 중시', '수동적'],
    strengths: ['관계 유지', '스트레스 최소화', '겸손한 자세'],
    weaknesses: ['불이익 감수', '의견 무시당함', '기회 상실'],
    tips: [
      '협상은 갈등이 아니라 소통임을 기억하세요',
      '작은 협상부터 연습을 시작해보세요',
      '당신의 가치와 의견도 중요합니다!',
    ],
    famousPeople: '간디 (비폭력 저항), 틱낫한 스님',
  },
];

// 점수 계산 함수
export function calculateNegotiationResult(answers: number[]): NegotiationResult {
  const scores = {
    assertive: 0,
    collaborative: 0,
    compromising: 0,
    avoiding: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      scores.assertive += optionScores.assertive;
      scores.collaborative += optionScores.collaborative;
      scores.compromising += optionScores.compromising;
      scores.avoiding += optionScores.avoiding;
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0];

  return results.find(r => r.type === maxType) || results[0];
}
