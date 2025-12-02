// mental-battery 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '아침에 눈 뜨면 드는 첫 생각은?',
    options: [
      { text: '오늘도 화이팅!', type: 'full' },
      { text: '그냥 평범한 하루 시작', type: 'good' },
      { text: '벌써 피곤함...', type: 'low' },
      { text: '다시 눕고 싶음', type: 'empty' },
    ],
  },
  {
    id: 2,
    text: '요즘 일/공부에 대한 의욕은?',
    options: [
      { text: '열정 넘침, 하고 싶은 것 많음', type: 'full' },
      { text: '보통, 할 건 함', type: 'good' },
      { text: '의욕이 안 남, 힘겹게 함', type: 'low' },
      { text: '아무것도 하기 싫음', type: 'empty' },
    ],
  },
  {
    id: 3,
    text: '사람들을 만나는 것이?',
    options: [
      { text: '즐겁고 에너지 얻음', type: 'full' },
      { text: '필요하면 만남', type: 'good' },
      { text: '피곤해서 피하고 싶음', type: 'low' },
      { text: '생각만 해도 지침', type: 'empty' },
    ],
  },
  {
    id: 4,
    text: '최근 수면 상태는?',
    options: [
      { text: '잘 자고 개운함', type: 'full' },
      { text: '대체로 괜찮음', type: 'good' },
      { text: '잠들기 어렵거나 자주 깸', type: 'low' },
      { text: '불면증이거나 항상 피곤', type: 'empty' },
    ],
  },
  {
    id: 5,
    text: '즐거웠던 취미나 활동에 대한 흥미는?',
    options: [
      { text: '여전히 재미있음', type: 'full' },
      { text: '가끔 함', type: 'good' },
      { text: '별로 안 당김', type: 'low' },
      { text: '아무것도 재미없음', type: 'empty' },
    ],
  },
  {
    id: 6,
    text: '스트레스 받으면 회복 속도는?',
    options: [
      { text: '금방 풀림', type: 'full' },
      { text: '하루이틀이면 괜찮아짐', type: 'good' },
      { text: '오래 가고 쌓임', type: 'low' },
      { text: '계속 안고 살아감', type: 'empty' },
    ],
  },
  {
    id: 7,
    text: '요즘 자주 드는 감정은?',
    options: [
      { text: '긍정적, 희망참', type: 'full' },
      { text: '평온, 무난함', type: 'good' },
      { text: '불안, 짜증', type: 'low' },
      { text: '무기력, 우울', type: 'empty' },
    ],
  },
  {
    id: 8,
    text: '작은 일에도 예민해지거나 화가 나나요?',
    options: [
      { text: '거의 안 그럼', type: 'full' },
      { text: '가끔 그럴 때 있음', type: 'good' },
      { text: '자주 그럼', type: 'low' },
      { text: '항상 예민함', type: 'empty' },
    ],
  },
  {
    id: 9,
    text: '지금 자신에 대한 느낌은?',
    options: [
      { text: '괜찮은 사람, 자신감 있음', type: 'full' },
      { text: '보통, 나쁘지 않음', type: 'good' },
      { text: '자신감 떨어짐', type: 'low' },
      { text: '나는 왜 이럴까 자책함', type: 'empty' },
    ],
  },
  {
    id: 10,
    text: '미래에 대한 생각은?',
    options: [
      { text: '기대되고 계획이 있음', type: 'full' },
      { text: '그럭저럭 살아갈 것 같음', type: 'good' },
      { text: '막막하고 불안함', type: 'low' },
      { text: '생각하고 싶지 않음', type: 'empty' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  batteryLevel: string;
  description: string;
  status: string[];
  recharge: string;
}> = {
  full: {
    title: '완충 상태',
    emoji: '🔋',
    batteryLevel: '90~100%',
    description: '멘탈 에너지가 충분합니다! 의욕도 넘치고, 스트레스도 잘 관리하고 있으며, 긍정적인 마인드를 유지하고 있어요.',
    status: ['높은 에너지', '긍정적 마인드', '스트레스 관리 OK', '좋은 수면'],
    recharge: '지금 상태를 유지하세요! 이 에너지로 하고 싶은 것들을 해보세요.',
  },
  good: {
    title: '양호 상태',
    emoji: '🔋',
    batteryLevel: '50~70%',
    description: '무난하게 일상을 보내고 있습니다. 큰 문제는 없지만, 가끔 충전이 필요할 수 있어요.',
    status: ['안정적', '무난한 상태', '가끔 피로감', '보통의 의욕'],
    recharge: '주기적으로 휴식을 취하고, 좋아하는 일에 시간을 투자하세요.',
  },
  low: {
    title: '저전력 모드',
    emoji: '🪫',
    batteryLevel: '20~40%',
    description: '멘탈 에너지가 많이 소모된 상태입니다. 의욕 저하, 피로감, 예민함이 나타나고 있어요. 충전이 필요합니다.',
    status: ['에너지 부족', '의욕 저하', '쉽게 지침', '예민함 증가'],
    recharge: '지금 당장 쉬세요. 해야 할 일을 줄이고, 나를 위한 시간을 만드세요. 가능하다면 전문가 상담도 고려해보세요.',
  },
  empty: {
    title: '방전 위험',
    emoji: '❌',
    batteryLevel: '0~10%',
    description: '멘탈이 거의 바닥난 상태입니다. 무기력, 우울, 불안이 지속되고 있다면 반드시 휴식과 도움이 필요합니다.',
    status: ['극심한 피로', '무기력/우울', '불면', '자존감 저하', '미래 불안'],
    recharge: '혼자 해결하려 하지 마세요. 신뢰할 수 있는 사람에게 이야기하거나, 전문가의 도움을 받는 것을 강력히 권합니다. 당신은 소중한 사람입니다. 💙',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    full: 0,
    good: 0,
    low: 0,
    empty: 0,
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
