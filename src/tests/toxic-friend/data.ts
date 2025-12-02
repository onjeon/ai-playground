// toxic-friend 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '그 친구와 만나고 나면 기분이?',
    options: [
      { text: '즐겁고 에너지 충전됨', type: 'healthy' },
      { text: '보통, 그냥 그럼', type: 'neutral' },
      { text: '왠지 모르게 지침', type: 'warning' },
      { text: '우울하거나 자존감 떨어짐', type: 'toxic' },
    ],
  },
  {
    id: 2,
    text: '그 친구는 내 성공이나 좋은 일에 어떻게 반응하나요?',
    options: [
      { text: '진심으로 축하해줌', type: 'healthy' },
      { text: '축하는 하는데 관심 적음', type: 'neutral' },
      { text: '자기 얘기로 넘어감', type: 'warning' },
      { text: '무시하거나 깎아내림', type: 'toxic' },
    ],
  },
  {
    id: 3,
    text: '대화할 때 누구 얘기를 더 많이 하나요?',
    options: [
      { text: '서로 균형있게 대화함', type: 'healthy' },
      { text: '그 친구가 좀 더 많이 말함', type: 'neutral' },
      { text: '대부분 그 친구 얘기', type: 'warning' },
      { text: '나는 듣기만 함', type: 'toxic' },
    ],
  },
  {
    id: 4,
    text: '그 친구가 나에 대해 다른 사람에게 뭐라고 할까요?',
    options: [
      { text: '좋은 말 할 것 같음', type: 'healthy' },
      { text: '잘 모르겠음', type: 'neutral' },
      { text: '내 단점을 말할 것 같음', type: 'warning' },
      { text: '뒷담화할 것 같음', type: 'toxic' },
    ],
  },
  {
    id: 5,
    text: '그 친구에게 고민을 털어놓으면?',
    options: [
      { text: '공감해주고 조언해줌', type: 'healthy' },
      { text: '듣긴 하는데 별 도움 안 됨', type: 'neutral' },
      { text: '자기 고민으로 바꿔버림', type: 'warning' },
      { text: '비난하거나 "네 잘못" 함', type: 'toxic' },
    ],
  },
  {
    id: 6,
    text: '그 친구와 약속할 때 느낌은?',
    options: [
      { text: '기대되고 설렘', type: 'healthy' },
      { text: '그냥 평범함', type: 'neutral' },
      { text: '좀 부담스러움', type: 'warning' },
      { text: '가기 싫음, 의무감', type: 'toxic' },
    ],
  },
  {
    id: 7,
    text: '그 친구는 내 감정을 어떻게 대하나요?',
    options: [
      { text: '존중하고 배려함', type: 'healthy' },
      { text: '별로 신경 안 씀', type: 'neutral' },
      { text: '가끔 무시하거나 대수롭지 않게 여김', type: 'warning' },
      { text: '조롱하거나 이용함', type: 'toxic' },
    ],
  },
  {
    id: 8,
    text: '그 친구와 있을 때 나는 어떤 사람이 되나요?',
    options: [
      { text: '더 좋은 사람이 되는 느낌', type: 'healthy' },
      { text: '그냥 평소의 나', type: 'neutral' },
      { text: '눈치 보거나 위축됨', type: 'warning' },
      { text: '내가 아닌 것 같음', type: 'toxic' },
    ],
  },
  {
    id: 9,
    text: '그 친구에게 거절을 하면?',
    options: [
      { text: '이해해줌', type: 'healthy' },
      { text: '좀 서운해 하지만 괜찮음', type: 'neutral' },
      { text: '화내거나 삐침', type: 'warning' },
      { text: '죄책감 들게 하거나 협박함', type: 'toxic' },
    ],
  },
  {
    id: 10,
    text: '솔직히, 그 친구가 없으면 내 인생은?',
    options: [
      { text: '많이 아쉬울 것 같음', type: 'healthy' },
      { text: '좀 심심할 것 같음', type: 'neutral' },
      { text: '편해질 것 같기도 함', type: 'warning' },
      { text: '솔직히 후련할 것 같음', type: 'toxic' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  verdict: string;
  description: string;
  signs: string[];
  advice: string;
}> = {
  healthy: {
    title: '건강한 우정',
    emoji: '💚',
    verdict: '독친 확률 0%',
    description: '이 친구는 당신에게 좋은 영향을 주는 소중한 존재입니다! 서로 존중하고, 응원하고, 함께 성장하는 건강한 관계예요.',
    signs: ['서로 응원함', '균형 잡힌 대화', '편안함', '에너지 충전'],
    advice: '이런 친구는 오래 간직하세요. 당신도 좋은 친구가 되어주고 있을 거예요!',
  },
  neutral: {
    title: '평범한 관계',
    emoji: '😐',
    verdict: '독친 확률 20%',
    description: '좋지도 나쁘지도 않은 평범한 관계입니다. 특별히 해로운 건 아니지만, 깊은 우정도 아닐 수 있어요.',
    signs: ['그냥저냥', '깊이 없는 대화', '서로 무관심'],
    advice: '더 깊어질 수도, 멀어질 수도 있는 관계. 서로에게 어떤 존재인지 생각해보세요.',
  },
  warning: {
    title: '주의 필요',
    emoji: '⚠️',
    verdict: '독친 확률 60%',
    description: '약간의 독성 신호가 감지됩니다. 이 친구가 당신에게 피로감을 주거나 자존감을 깎는 경향이 있을 수 있어요.',
    signs: ['자기중심적', '내 얘기 안 들음', '가끔 기분 나쁨', '만남 후 피곤'],
    advice: '경계를 설정하세요. 모든 요구에 응할 필요 없어요. 거리두기가 필요할 수 있습니다.',
  },
  toxic: {
    title: '독친 확정',
    emoji: '☠️',
    verdict: '독친 확률 90%',
    description: '이 친구는 당신에게 해로운 영향을 주고 있습니다. 만날수록 지치고, 자존감이 낮아지고, 자유롭지 못한 느낌이 드나요?',
    signs: ['조종/통제', '비난/무시', '뒷담화', '죄책감 유발', '에너지 뱀파이어'],
    advice: '용기를 내서 거리를 두세요. 진짜 친구는 당신을 힘들게 하지 않아요. 당신은 더 좋은 관계를 가질 자격이 있습니다.',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    healthy: 0,
    neutral: 0,
    warning: 0,
    toxic: 0,
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
