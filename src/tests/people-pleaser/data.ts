// people-pleaser 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '부탁을 받으면 어떻게 하나요?',
    options: [
      { text: '거절하기 어려워서 대부분 수락', type: 'high' },
      { text: '상황 봐서 거절하기도 함', type: 'moderate' },
      { text: '내 상황 먼저 고려 후 결정', type: 'low' },
      { text: '필요하면 바로 거절함', type: 'none' },
    ],
  },
  {
    id: 2,
    text: '대화할 때 상대방 반응을 얼마나 신경 쓰나요?',
    options: [
      { text: '말할 때마다 표정/반응 체크함', type: 'high' },
      { text: '어느 정도 신경 씀', type: 'moderate' },
      { text: '크게 신경 안 쓰는 편', type: 'low' },
      { text: '내 할 말 하는 게 중요함', type: 'none' },
    ],
  },
  {
    id: 3,
    text: '누군가 기분 나빠 보이면?',
    options: [
      { text: '"내가 뭐 잘못했나?" 바로 생각남', type: 'high' },
      { text: '좀 신경 쓰이긴 함', type: 'moderate' },
      { text: '그 사람 사정이 있겠지', type: 'low' },
      { text: '내 일 아니면 관심 없음', type: 'none' },
    ],
  },
  {
    id: 4,
    text: '친구들 사이에서 의견이 다를 때?',
    options: [
      { text: '다수 의견에 맞춤', type: 'high' },
      { text: '내 의견 말하지만 강하게 안 밀어붙임', type: 'moderate' },
      { text: '소신껏 내 의견 주장', type: 'low' },
      { text: '논쟁해서라도 관철시킴', type: 'none' },
    ],
  },
  {
    id: 5,
    text: '칭찬을 받으면?',
    options: [
      { text: '"아니에요~" 부정하며 겸손 떨기', type: 'high' },
      { text: '좋지만 어색해서 대충 넘김', type: 'moderate' },
      { text: '"감사합니다" 자연스럽게 받음', type: 'low' },
      { text: '"당연하죠" 자신있게 인정', type: 'none' },
    ],
  },
  {
    id: 6,
    text: '누군가 나를 싫어하는 것 같으면?',
    options: [
      { text: '밤새 고민하고 어떻게든 좋게 보이려 함', type: 'high' },
      { text: '신경 쓰이지만 티 안 냄', type: 'moderate' },
      { text: '나도 그 사람 안 좋아하면 그만', type: 'low' },
      { text: '신경 안 씀, 모두에게 사랑받을 필요 없음', type: 'none' },
    ],
  },
  {
    id: 7,
    text: '식당에서 음식이 잘못 나오면?',
    options: [
      { text: '그냥 먹음 (말하기 불편)', type: 'high' },
      { text: '고민하다가 용기내서 말함', type: 'moderate' },
      { text: '바로 말하고 바꿔달라고 함', type: 'low' },
      { text: '당당하게 컴플레인', type: 'none' },
    ],
  },
  {
    id: 8,
    text: '"너 착하다"는 말을 들으면?',
    options: [
      { text: '자주 듣고, 사실 좀 지침', type: 'high' },
      { text: '가끔 듣고, 나쁘진 않음', type: 'moderate' },
      { text: '별로 안 들음', type: 'low' },
      { text: '착한 게 아니라 합리적인 거임', type: 'none' },
    ],
  },
  {
    id: 9,
    text: '갈등 상황에서 나는?',
    options: [
      { text: '내가 양보해서 해결함', type: 'high' },
      { text: '서로 타협점을 찾으려 함', type: 'moderate' },
      { text: '내 입장 분명히 전달함', type: 'low' },
      { text: '필요하면 싸움도 감수', type: 'none' },
    ],
  },
  {
    id: 10,
    text: '하루 중 가장 피곤한 순간은?',
    options: [
      { text: '사람들 눈치 보느라 지칠 때', type: 'high' },
      { text: '인간관계 후 혼자 충전할 때', type: 'moderate' },
      { text: '할 일이 많을 때', type: 'low' },
      { text: '특별히 피곤하지 않음', type: 'none' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  level: string;
  description: string;
  symptoms: string[];
  recovery: string;
}> = {
  high: {
    title: '풀타임 피플플리저',
    emoji: '😰',
    level: '눈치력 MAX',
    description: '상대방의 기분과 반응에 극도로 민감하고, 거절하지 못하며, 남들에게 잘 보이기 위해 자신을 희생하는 경향이 있습니다.',
    symptoms: ['거절 불가능', '눈치 과잉', '자기 의견 숨김', '칭찬 거부', '갈등 회피'],
    recovery: '당신의 의견과 감정도 소중해요. "NO"라고 말하는 연습부터 시작해보세요. 모두를 만족시킬 필요 없습니다.',
  },
  moderate: {
    title: '상황적 피플플리저',
    emoji: '🤔',
    level: '눈치력 중상',
    description: '대체로 눈치를 보지만, 필요할 때는 자기 의견도 낼 수 있는 타입. 균형을 맞추려 노력하지만 가끔 피곤합니다.',
    symptoms: ['때에 따라 눈치', '거절은 어렵지만 할 수 있음', '갈등 시 스트레스'],
    recovery: '지금도 괜찮지만, 조금 더 자신의 욕구를 우선시해도 돼요. 진짜 친구는 당신의 거절도 이해합니다.',
  },
  low: {
    title: '균형잡힌 소통러',
    emoji: '⚖️',
    level: '눈치력 적정',
    description: '상대방을 배려하면서도 자신의 의견을 잘 표현하는 건강한 소통 스타일! 눈치와 자기주장의 균형을 잘 맞춥니다.',
    symptoms: ['합리적 거절', '자기 의견 표현', '적절한 배려'],
    recovery: '지금 상태를 잘 유지하세요! 당신은 이미 건강한 관계를 맺고 있어요.',
  },
  none: {
    title: '나만의 길 걷기형',
    emoji: '🦅',
    level: '눈치력 최소',
    description: '남의 눈치를 거의 보지 않고 자기 소신대로 사는 타입! 자기주장이 강하고 독립적이지만, 가끔 무심해 보일 수 있어요.',
    symptoms: ['눈치 안 봄', '소신 강함', '갈등 두려움 없음', '독립적'],
    recovery: '자기 주장도 좋지만, 가끔은 상대방의 감정을 읽어주는 것도 관계에 도움이 돼요.',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    high: 0,
    moderate: 0,
    low: 0,
    none: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  return Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}
