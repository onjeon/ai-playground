// dating-red-flag 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '썸/연애 초반에 상대가 전 애인 얘기를 자주 한다면?',
    options: [
      { text: '솔직한 거 아닌가? 괜찮음', type: 'blind' },
      { text: '좀 신경 쓰이지만 들어줌', type: 'aware' },
      { text: '아직 미련이 있는 것 같아서 경계', type: 'alert' },
      { text: '레드플래그! 거리두기 시작', type: 'expert' },
    ],
  },
  {
    id: 2,
    text: '약속을 자주 취소하거나 변경하는 사람이라면?',
    options: [
      { text: '바쁠 수도 있지, 이해함', type: 'blind' },
      { text: '좀 서운하지만 한두 번은 봐줌', type: 'aware' },
      { text: '패턴이면 심각하게 고민', type: 'alert' },
      { text: '나를 우선순위에 안 두는 것, 손절 고려', type: 'expert' },
    ],
  },
  {
    id: 3,
    text: '화가 나면 무시(냉전)로 일관하는 상대라면?',
    options: [
      { text: '화 풀릴 때까지 기다려줌', type: 'blind' },
      { text: '불편하지만 맞춰줌', type: 'aware' },
      { text: '소통 방식이 안 맞는 것 같음', type: 'alert' },
      { text: '감정적 학대의 시작일 수 있음', type: 'expert' },
    ],
  },
  {
    id: 4,
    text: '내 친구들이나 가족을 만나는 걸 꺼린다면?',
    options: [
      { text: '낯가림이 심한 거겠지', type: 'blind' },
      { text: '시간이 지나면 괜찮아지겠지', type: 'aware' },
      { text: '진지하게 생각 안 하는 건가?', type: 'alert' },
      { text: '관계를 숨기려는 의도일 수 있음', type: 'expert' },
    ],
  },
  {
    id: 5,
    text: '사소한 것에 갑자기 화를 내는 경우가 있다면?',
    options: [
      { text: '스트레스 받았나보다, 이해함', type: 'blind' },
      { text: '좀 무섭지만 참음', type: 'aware' },
      { text: '감정 기복이 심한 것 같아 걱정', type: 'alert' },
      { text: '분노 조절 문제, 심각한 경고 신호', type: 'expert' },
    ],
  },
  {
    id: 6,
    text: '내 SNS/카톡을 보여달라고 하거나 자주 체크하면?',
    options: [
      { text: '숨길 게 없으니 보여줌', type: 'blind' },
      { text: '좀 불편하지만 사랑이니까', type: 'aware' },
      { text: '신뢰 문제가 있는 것 같음', type: 'alert' },
      { text: '통제욕의 시작, 확실한 레드플래그', type: 'expert' },
    ],
  },
  {
    id: 7,
    text: '"넌 나 없으면 안 돼" 같은 말을 자주 한다면?',
    options: [
      { text: '로맨틱하고 사랑받는 느낌', type: 'blind' },
      { text: '좀 과하지만 좋아서 그런 거겠지', type: 'aware' },
      { text: '의존적인 관계로 갈 것 같아 불안', type: 'alert' },
      { text: '가스라이팅/통제의 전형적 패턴', type: 'expert' },
    ],
  },
  {
    id: 8,
    text: '다른 이성과 얘기하면 질투하거나 화내면?',
    options: [
      { text: '그만큼 좋아하는 거지', type: 'blind' },
      { text: '조금은 귀엽지만 과하면 곤란', type: 'aware' },
      { text: '과한 질투는 불안정의 신호', type: 'alert' },
      { text: '소유욕과 통제욕의 경고 신호', type: 'expert' },
    ],
  },
  {
    id: 9,
    text: '항상 자기 얘기만 하고 내 얘기엔 관심 없다면?',
    options: [
      { text: '외향적이고 말이 많은 성격', type: 'blind' },
      { text: '좀 아쉽지만 맞춰줌', type: 'aware' },
      { text: '나르시시즘 성향인 것 같음', type: 'alert' },
      { text: '자기중심적, 장기적으로 힘들 관계', type: 'expert' },
    ],
  },
  {
    id: 10,
    text: '돈 문제로 자주 부담을 주거나 빌려달라고 하면?',
    options: [
      { text: '힘들 때 도와주는 게 사랑', type: 'blind' },
      { text: '한두 번은 괜찮지만 계속은 곤란', type: 'aware' },
      { text: '경제관념 차이, 심각한 문제', type: 'alert' },
      { text: '이용당할 수 있음, 경계 필수', type: 'expert' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  level: string;
  description: string;
  blindSpot: string;
  advice: string;
}> = {
  blind: {
    title: '레드플래그 무감각형',
    emoji: '🙈',
    level: '위험 감지력 20%',
    description: '사랑에 빠지면 상대의 문제 행동도 이해하고 넘어가는 스타일. 순수하고 좋게 보려는 마음은 좋지만, 자신을 보호하는 경계가 필요해요.',
    blindSpot: '상대의 잘못된 행동을 "사랑이니까", "원래 그런 사람이니까"로 합리화하는 경향',
    advice: '진짜 사랑은 나를 불안하게 만들지 않아요. 불편한 감정을 무시하지 마세요!',
  },
  aware: {
    title: '레드플래그 감지 초보형',
    emoji: '🤔',
    level: '위험 감지력 50%',
    description: '불편한 신호는 느끼지만 확신이 없어서 넘어가는 경우가 많아요. 감은 좋지만 행동으로 옮기는 연습이 필요합니다.',
    blindSpot: '문제를 인식해도 "한 번만 더 기회를 줘볼까" 하며 미루는 패턴',
    advice: '직감이 보내는 신호를 믿으세요. 두 번 반복되면 우연이 아닙니다.',
  },
  alert: {
    title: '레드플래그 경계형',
    emoji: '🚨',
    level: '위험 감지력 75%',
    description: '문제 행동을 인식하고 경계할 줄 아는 타입! 관계에서 건강한 거리두기를 할 수 있으며, 자신을 보호하는 능력이 있습니다.',
    blindSpot: '가끔 너무 예민하게 반응해서 좋은 기회를 놓칠 수도',
    advice: '균형을 유지하세요. 모든 것을 의심할 필요는 없어요.',
  },
  expert: {
    title: '레드플래그 감별사',
    emoji: '🔍',
    level: '위험 감지력 95%',
    description: '관계의 위험 신호를 귀신같이 감지하는 전문가 레벨! 독성 관계에 빠질 확률이 낮고, 건강한 기준으로 상대를 평가합니다.',
    blindSpot: '너무 높은 기준으로 완벽한 사람만 찾다가 외로워질 수 있음',
    advice: '경계는 좋지만, 완벽한 사람은 없어요. 성장 가능성도 봐주세요.',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    blind: 0,
    aware: 0,
    alert: 0,
    expert: 0,
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
