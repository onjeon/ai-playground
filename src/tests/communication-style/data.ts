// 의사소통 스타일 테스트

export const questions = [
  {
    id: 1,
    question: "친구에게 부탁을 할 때 당신의 스타일은?",
    options: [
      { text: "직접적으로 필요한 것을 명확하게 말함", style: "direct" },
      { text: "상황을 먼저 설명하고 부드럽게 부탁함", style: "diplomatic" },
      { text: "유머를 섞어서 가볍게 요청함", style: "expressive" },
      { text: "상대방 상황을 먼저 확인하고 조심스럽게", style: "supportive" },
    ],
  },
  {
    id: 2,
    question: "회의나 토론에서 주로 어떤 역할을 하나요?",
    options: [
      { text: "주도적으로 의견을 제시하고 결론을 이끔", style: "direct" },
      { text: "다양한 의견을 조율하고 합의점을 찾음", style: "diplomatic" },
      { text: "분위기를 띄우고 창의적인 아이디어 제안", style: "expressive" },
      { text: "경청하고 다른 사람 의견을 정리해줌", style: "supportive" },
    ],
  },
  {
    id: 3,
    question: "갈등 상황에서 어떻게 대처하나요?",
    options: [
      { text: "문제를 직면하고 해결책을 제시함", style: "direct" },
      { text: "양측 입장을 이해하고 협상함", style: "diplomatic" },
      { text: "유머로 긴장을 풀고 분위기 전환", style: "expressive" },
      { text: "상대방 감정을 먼저 공감하고 들어줌", style: "supportive" },
    ],
  },
  {
    id: 4,
    question: "처음 만나는 사람과 대화할 때?",
    options: [
      { text: "자신감 있게 먼저 말을 걸고 주도함", style: "direct" },
      { text: "공통 관심사를 찾아 자연스럽게 대화", style: "diplomatic" },
      { text: "재미있는 이야기로 분위기를 띄움", style: "expressive" },
      { text: "상대방 이야기를 듣고 관심을 표현", style: "supportive" },
    ],
  },
  {
    id: 5,
    question: "피드백을 줄 때 당신의 스타일은?",
    options: [
      { text: "솔직하게 문제점을 지적하고 개선점 제시", style: "direct" },
      { text: "긍정적인 부분 먼저 말하고 부드럽게 조언", style: "diplomatic" },
      { text: "비유나 예시를 들어 재미있게 전달", style: "expressive" },
      { text: "상대방 입장에서 격려하며 조심스럽게", style: "supportive" },
    ],
  },
  {
    id: 6,
    question: "문자나 카카오톡 메시지 스타일은?",
    options: [
      { text: "짧고 핵심적으로 보냄", style: "direct" },
      { text: "정중하고 예의 바르게 작성", style: "diplomatic" },
      { text: "이모티콘과 재미있는 표현 많이 사용", style: "expressive" },
      { text: "상대방 안부를 묻고 따뜻하게 보냄", style: "supportive" },
    ],
  },
  {
    id: 7,
    question: "스트레스 받을 때 의사소통은?",
    options: [
      { text: "직설적으로 불만을 표현함", style: "direct" },
      { text: "말을 아끼고 신중하게 행동함", style: "diplomatic" },
      { text: "유머로 상황을 가볍게 넘기려 함", style: "expressive" },
      { text: "감정을 숨기고 상대방 배려", style: "supportive" },
    ],
  },
  {
    id: 8,
    question: "좋은 소식을 전할 때?",
    options: [
      { text: "바로 핵심을 말함", style: "direct" },
      { text: "적절한 타이밍을 기다려 전달", style: "diplomatic" },
      { text: "신나게 과장해서 재미있게 전달", style: "expressive" },
      { text: "상대방 반응을 보며 천천히 전달", style: "supportive" },
    ],
  },
  {
    id: 9,
    question: "나쁜 소식을 전해야 할 때?",
    options: [
      { text: "미루지 않고 솔직하게 말함", style: "direct" },
      { text: "적절한 때와 장소를 선택해 부드럽게", style: "diplomatic" },
      { text: "분위기를 누그러뜨리며 전달", style: "expressive" },
      { text: "상대방 감정을 먼저 배려하며 조심스럽게", style: "supportive" },
    ],
  },
  {
    id: 10,
    question: "팀 프로젝트에서 당신의 소통 방식은?",
    options: [
      { text: "목표와 일정을 명확하게 공유", style: "direct" },
      { text: "팀원 의견을 조율하고 합의 도출", style: "diplomatic" },
      { text: "아이디어를 활발히 제안하고 토론", style: "expressive" },
      { text: "팀원들 지원하고 분위기 케어", style: "supportive" },
    ],
  },
  {
    id: 11,
    question: "상사에게 의견을 제시할 때?",
    options: [
      { text: "논리적으로 명확하게 제안함", style: "direct" },
      { text: "상사 입장을 고려해 외교적으로", style: "diplomatic" },
      { text: "새로운 관점과 창의적 제안", style: "expressive" },
      { text: "상사를 존중하며 조심스럽게", style: "supportive" },
    ],
  },
  {
    id: 12,
    question: "연인과의 갈등 시 소통 방식은?",
    options: [
      { text: "문제를 직접 언급하고 해결책 논의", style: "direct" },
      { text: "서로 입장을 이해하고 타협점 찾음", style: "diplomatic" },
      { text: "분위기 전환하고 긍정적으로 접근", style: "expressive" },
      { text: "상대방 감정을 먼저 달래고 공감", style: "supportive" },
    ],
  },
];

export interface CommunicationStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  communicationTips: string[];
  bestWith: string[];
  challengeWith: string[];
  workplaceTip: string;
  relationshipTip: string;
}

const resultTypes: Record<string, CommunicationStyleResult> = {
  direct: {
    type: 'direct',
    title: '직설적 소통가',
    emoji: '🎯',
    subtitle: '명확하고 솔직한 커뮤니케이터',
    description: '당신은 군더더기 없이 핵심을 전달하는 직설적인 소통 스타일입니다. 빠른 의사결정과 명확한 방향 제시에 강점이 있으며, 팀을 이끌거나 문제를 해결할 때 빛을 발합니다. 다만 때로는 상대방의 감정을 고려한 부드러운 표현이 관계를 더 원활하게 만들 수 있어요.',
    characteristics: ['솔직함', '효율적', '결단력', '명확함', '자신감'],
    strengths: ['빠른 의사결정', '명확한 의사전달', '시간 절약', '리더십 발휘'],
    weaknesses: ['무뚝뚝해 보일 수 있음', '상대방 감정 놓침', '성급해 보일 수 있음'],
    communicationTips: ['말하기 전 잠시 멈추기', '상대방 반응 살피기', '"나는~"으로 시작하기', '칭찬도 함께 전달하기'],
    bestWith: ['직설적 소통가', '외교적 협상가'],
    challengeWith: ['공감형 서포터'],
    workplaceTip: '피드백 시 긍정적인 부분도 함께 언급하면 더 효과적입니다.',
    relationshipTip: '가끔은 결론보다 과정을 함께 나누면 관계가 더 깊어집니다.',
  },
  diplomatic: {
    type: 'diplomatic',
    title: '외교적 협상가',
    emoji: '🤝',
    subtitle: '조화와 합의를 이끄는 소통 마스터',
    description: '당신은 다양한 의견을 조율하고 합의점을 찾는 외교적 소통 스타일입니다. 상대방의 입장을 고려하면서도 원하는 바를 부드럽게 전달하는 능력이 있어요. 갈등 상황에서 중재자 역할을 잘 해내며, 장기적인 관계 구축에 강점이 있습니다.',
    characteristics: ['신중함', '균형감', '배려심', '설득력', '전략적'],
    strengths: ['갈등 조정 능력', '장기적 관계 구축', '다양한 의견 수용', '협상 능력'],
    weaknesses: ['결정이 느릴 수 있음', '때로 애매해 보임', '자기 의견 표현 부족'],
    communicationTips: ['자신의 의견도 명확히 표현하기', '결론을 먼저 말해보기', '과도한 배려는 줄이기'],
    bestWith: ['직설적 소통가', '공감형 서포터'],
    challengeWith: ['표현력 스타'],
    workplaceTip: '회의에서 본인 의견을 먼저 말하고 나서 다른 의견을 수렴해 보세요.',
    relationshipTip: '가끔은 솔직한 감정 표현이 관계를 더 깊게 만듭니다.',
  },
  expressive: {
    type: 'expressive',
    title: '표현력 스타',
    emoji: '🌟',
    subtitle: '에너지 넘치는 분위기 메이커',
    description: '당신은 활기차고 창의적인 표현력이 돋보이는 소통 스타일입니다. 유머와 열정으로 사람들을 끌어당기며, 새로운 아이디어를 활발하게 제안합니다. 팀의 분위기를 밝게 만들고, 지루한 상황을 재미있게 바꾸는 능력이 있어요.',
    characteristics: ['열정적', '창의적', '유머러스', '사교적', '긍정적'],
    strengths: ['분위기 활성화', '창의적 아이디어', '동기부여 능력', '즐거운 대화'],
    weaknesses: ['가끔 산만해 보임', '진지한 상황에서 어색함', '경청 부족할 때'],
    communicationTips: ['경청 시간 늘리기', '진지한 상황 파악하기', '핵심 먼저 말하기'],
    bestWith: ['공감형 서포터', '표현력 스타'],
    challengeWith: ['외교적 협상가'],
    workplaceTip: '중요한 회의에서는 핵심 메시지를 먼저 전달하고 재미를 더해보세요.',
    relationshipTip: '진지한 대화가 필요할 때는 유머를 잠시 내려놓으면 더 깊어집니다.',
  },
  supportive: {
    type: 'supportive',
    title: '공감형 서포터',
    emoji: '💝',
    subtitle: '따뜻한 마음의 경청자',
    description: '당신은 상대방의 감정을 깊이 이해하고 공감하는 따뜻한 소통 스타일입니다. 경청 능력이 뛰어나고, 상대방이 편안하게 이야기할 수 있는 환경을 만들어줍니다. 팀에서 든든한 지원자이자 정서적 안정감을 주는 존재예요.',
    characteristics: ['공감력', '경청', '배려심', '인내심', '따뜻함'],
    strengths: ['깊은 공감 능력', '신뢰 구축', '정서적 지지', '팀 화합 기여'],
    weaknesses: ['자기 의견 표현 부족', '우유부단해 보임', '과도한 배려로 지침'],
    communicationTips: ['본인 의견 먼저 말하기', '"나는 생각해"로 시작하기', 'No라고 말하는 연습'],
    bestWith: ['외교적 협상가', '표현력 스타'],
    challengeWith: ['직설적 소통가'],
    workplaceTip: '본인의 아이디어도 적극적으로 공유하면 더 인정받을 수 있어요.',
    relationshipTip: '상대방을 챙기듯 자신의 감정과 필요도 표현해 보세요.',
  },
};

export function calculateCommunicationStyleResult(answers: number[]): CommunicationStyleResult {
  const styleScores: Record<string, number> = {
    direct: 0,
    diplomatic: 0,
    expressive: 0,
    supportive: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];
    styleScores[option.style] += 1;
  });

  let maxStyle = 'diplomatic';
  let maxScore = 0;

  Object.entries(styleScores).forEach(([style, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxStyle = style;
    }
  });

  return resultTypes[maxStyle];
}
