// friend-keeper 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '친구에게 먼저 연락하는 빈도는?',
    options: [
      { text: '거의 항상 내가 먼저 연락함', type: 'active' },
      { text: '적당히 주고받음', type: 'balanced' },
      { text: '주로 연락 오면 답장함', type: 'passive' },
      { text: '연락 잘 안 하고 지냄', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '친구의 생일을 기억하는 편인가요?',
    options: [
      { text: '다 외우고 있고 챙겨줌', type: 'active' },
      { text: '친한 친구는 기억함', type: 'balanced' },
      { text: 'SNS 알림으로 알게 됨', type: 'passive' },
      { text: '잘 모르거나 지나쳐도 괜찮음', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '친구가 힘들어할 때 당신의 반응은?',
    options: [
      { text: '바로 달려가거나 연락함', type: 'active' },
      { text: '위로 메시지 보내고 필요하면 만남', type: 'balanced' },
      { text: '뭐라고 해야 할지 몰라서 어색', type: 'passive' },
      { text: '시간이 해결해주겠지 생각함', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '오랜만에 만난 친구와의 대화는?',
    options: [
      { text: '어제 만난 것처럼 자연스러움', type: 'active' },
      { text: '처음엔 어색해도 금방 풀림', type: 'balanced' },
      { text: '할 얘기가 별로 없어서 어색함', type: 'passive' },
      { text: '오래 못 만나면 멀어지는 편', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '친구와 의견 충돌이 생기면?',
    options: [
      { text: '솔직하게 얘기하고 풀려고 노력', type: 'active' },
      { text: '적당히 맞추면서 넘어감', type: 'balanced' },
      { text: '불편해서 피하게 됨', type: 'passive' },
      { text: '그냥 멀어지는 게 편함', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '친구 모임 약속을 잡을 때?',
    options: [
      { text: '내가 주도해서 날짜/장소 정함', type: 'active' },
      { text: '의견 내고 맞춰감', type: 'balanced' },
      { text: '정해주면 맞춰서 감', type: 'passive' },
      { text: '귀찮아서 자주 불참함', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '새로운 친구를 사귀는 것에 대해?',
    options: [
      { text: '적극적으로 다가가고 관계 확장함', type: 'active' },
      { text: '기회가 되면 사귐', type: 'balanced' },
      { text: '낯가려서 먼저 다가가기 어려움', type: 'passive' },
      { text: '기존 친구도 유지 힘든데...', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '친구에게 고민을 털어놓는 편인가요?',
    options: [
      { text: '자주 얘기하고 조언도 구함', type: 'active' },
      { text: '가끔 편한 친구에게만', type: 'balanced' },
      { text: '부담 줄까봐 잘 안 함', type: 'passive' },
      { text: '혼자 해결하는 게 편함', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '친구 관계에서 가장 중요하게 생각하는 것은?',
    options: [
      { text: '서로 챙기고 함께하는 시간', type: 'active' },
      { text: '편하고 부담 없는 관계', type: 'balanced' },
      { text: '필요할 때 있어주는 것', type: 'passive' },
      { text: '적당한 거리감', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '10년 후에도 연락할 것 같은 친구가 몇 명?',
    options: [
      { text: '5명 이상', type: 'active' },
      { text: '3~4명', type: 'balanced' },
      { text: '1~2명', type: 'passive' },
      { text: '잘 모르겠음', type: 'minimal' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  friendsIn10Years: string;
  description: string;
  strength: string;
  improvement: string;
}> = {
  active: {
    title: '인맥 부자형',
    emoji: '🌟',
    friendsIn10Years: '10명 이상의 친구가 남을 것!',
    description: '관계에 적극적으로 투자하는 당신! 먼저 연락하고, 챙기고, 모임을 주도합니다. 친구들에게 "연락해줘서 고마워"라는 말을 자주 듣는 타입이에요.',
    strength: '넓은 인맥, 깊은 관계, 사회적 지지망 탄탄',
    improvement: '가끔은 받는 것도 중요해요. 일방적으로 에너지 쏟지 않도록 주의!',
  },
  balanced: {
    title: '적정 유지형',
    emoji: '⚖️',
    friendsIn10Years: '5~7명의 친구가 남을 것!',
    description: '적당한 거리감과 친밀감의 균형을 잘 맞추는 타입! 무리하지 않으면서도 필요한 관계는 잘 유지하는 현명한 친구입니다.',
    strength: '부담 없는 관계, 스트레스 적음, 질 좋은 우정',
    improvement: '가끔은 먼저 연락해보세요. 작은 관심이 관계를 더 깊게 만들어요.',
  },
  passive: {
    title: '흘러가는 대로형',
    emoji: '🌊',
    friendsIn10Years: '2~3명의 친구가 남을 것',
    description: '관계를 적극적으로 만들어가기보다 자연스럽게 흘러가는 대로 두는 타입. 깊은 관계보다 편한 관계를 선호합니다.',
    strength: '낮은 사회적 스트레스, 자유로움',
    improvement: '소중한 친구에게는 먼저 연락해보세요. 관계도 관리가 필요해요.',
  },
  minimal: {
    title: '나 홀로 독립형',
    emoji: '🏝️',
    friendsIn10Years: '0~1명의 친구가 남을 수도...',
    description: '혼자가 편하고, 관계 유지에 에너지를 쓰는 게 부담스러운 타입. 친구가 없는 건 아니지만 깊이 유지하기 어려워요.',
    strength: '독립적, 자기 시간 확보, 불필요한 관계 스트레스 없음',
    improvement: '완전한 고립은 외로움으로 이어져요. 한 명이라도 깊게 연결되어 보세요.',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    active: 0,
    balanced: 0,
    passive: 0,
    minimal: 0,
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
