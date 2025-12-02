// 논쟁 스타일 테스트 - 갈등 상황에서 당신의 대처 방식은?

export const questions = [
  {
    id: 1,
    question: "회의 중 내 의견이 무시당했을 때 나는?",
    options: [
      { text: "더 큰 목소리로 다시 주장한다", type: "confrontational" },
      { text: "일단 넘어가고 나중에 따로 말한다", type: "avoidant" },
      { text: "상대 의견의 장점을 인정하며 재제안한다", type: "negotiating" },
      { text: "그럴 수도 있다고 생각하고 받아들인다", type: "accepting" },
    ],
  },
  {
    id: 2,
    question: "친구가 약속 시간에 30분이나 늦었을 때?",
    options: [
      { text: "왜 늦었는지 따지고 불만을 표현한다", type: "confrontational" },
      { text: "화가 나지만 티 내지 않고 넘어간다", type: "avoidant" },
      { text: "다음엔 미리 연락해달라고 부드럽게 말한다", type: "negotiating" },
      { text: "바빴겠거니 하고 이해한다", type: "accepting" },
    ],
  },
  {
    id: 3,
    question: "SNS에서 내 의견에 반박 댓글이 달리면?",
    options: [
      { text: "논리적으로 조목조목 반박한다", type: "confrontational" },
      { text: "그냥 무시하거나 삭제한다", type: "avoidant" },
      { text: "상대 의견도 일리 있다며 토론한다", type: "negotiating" },
      { text: "다른 시각도 있구나 하고 받아들인다", type: "accepting" },
    ],
  },
  {
    id: 4,
    question: "가족이 내 삶의 방식을 비판할 때?",
    options: [
      { text: "내 생각과 이유를 확실히 말한다", type: "confrontational" },
      { text: "듣는 척하고 내 방으로 피한다", type: "avoidant" },
      { text: "걱정해주는 마음은 이해하지만... 이라고 말한다", type: "negotiating" },
      { text: "맞는 말이니 고쳐보려 노력한다", type: "accepting" },
    ],
  },
  {
    id: 5,
    question: "식당에서 주문한 것과 다른 음식이 나왔을 때?",
    options: [
      { text: "바로 직원을 불러 바꿔달라고 한다", type: "confrontational" },
      { text: "그냥 나온 걸 먹는다", type: "avoidant" },
      { text: "죄송한데 이게 맞는지 확인 부탁드려요 라고 한다", type: "negotiating" },
      { text: "이것도 맛있어 보이네 하고 먹는다", type: "accepting" },
    ],
  },
  {
    id: 6,
    question: "팀 프로젝트에서 내 아이디어가 기각됐을 때?",
    options: [
      { text: "왜 안 되는지 이유를 물으며 재고 요청한다", type: "confrontational" },
      { text: "속으론 화나지만 조용히 따른다", type: "avoidant" },
      { text: "기각된 이유를 듣고 수정안을 제시한다", type: "negotiating" },
      { text: "팀 결정이니 따르는 게 맞다고 생각한다", type: "accepting" },
    ],
  },
  {
    id: 7,
    question: "연인이 나와 다른 정치적 견해를 가졌을 때?",
    options: [
      { text: "내 생각이 왜 맞는지 설득하려 한다", type: "confrontational" },
      { text: "정치 얘기는 아예 안 하기로 한다", type: "avoidant" },
      { text: "서로 다를 수 있다며 대화한다", type: "negotiating" },
      { text: "그 사람 생각도 나름의 이유가 있겠지 한다", type: "accepting" },
    ],
  },
  {
    id: 8,
    question: "온라인 쇼핑 후 불량품이 왔을 때?",
    options: [
      { text: "강력하게 항의하고 환불/교환 요구한다", type: "confrontational" },
      { text: "귀찮아서 그냥 쓴다", type: "avoidant" },
      { text: "상황을 설명하고 해결책을 문의한다", type: "negotiating" },
      { text: "이 정도면 쓸 만하네 한다", type: "accepting" },
    ],
  },
  {
    id: 9,
    question: "회사에서 부당한 업무 지시를 받았을 때?",
    options: [
      { text: "이건 제 업무가 아닌데요 라고 말한다", type: "confrontational" },
      { text: "불만이지만 일단 한다", type: "avoidant" },
      { text: "제 업무 상황을 설명하며 조율한다", type: "negotiating" },
      { text: "시키면 하는 거지 하고 한다", type: "accepting" },
    ],
  },
  {
    id: 10,
    question: "친구가 빌려간 돈을 안 갚을 때?",
    options: [
      { text: "직접적으로 언제 갚을 건지 물어본다", type: "confrontational" },
      { text: "말하기 어려워서 그냥 잊으려 한다", type: "avoidant" },
      { text: "요즘 어때? 하면서 자연스럽게 언급한다", type: "negotiating" },
      { text: "형편이 안 좋은가 보다 하고 기다린다", type: "accepting" },
    ],
  },
];

export interface ArgueStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  conflictBehavior: string;
  recoveryStyle: string;
  tips: string[];
  bestMatch: string;
  worstMatch: string;
}

export const results: Record<string, ArgueStyleResult> = {
  confrontational: {
    type: "confrontational",
    title: "대결형",
    emoji: "🔥",
    subtitle: "정면 돌파하는 타입",
    description:
      "당신은 갈등 상황에서 피하지 않고 정면으로 맞서는 대결형입니다. 자신의 의견을 명확하게 표현하고, 옳다고 생각하는 것은 끝까지 주장합니다. 솔직하고 직접적인 소통을 선호하며, 문제를 빠르게 해결하고 싶어합니다.",
    characteristics: [
      "직접적인 의사표현",
      "강한 자기 주장",
      "논쟁을 두려워하지 않음",
      "승부욕이 강함",
    ],
    strengths: [
      "문제를 회피하지 않고 해결함",
      "솔직하고 명확한 소통",
      "자기 권리를 지킬 줄 암",
      "리더십 발휘 가능",
    ],
    weaknesses: [
      "상대방 감정을 상하게 할 수 있음",
      "때로 공격적으로 보일 수 있음",
      "관계가 손상될 위험",
      "타협이 어려울 수 있음",
    ],
    conflictBehavior: "논쟁이 시작되면 끝까지 자기 입장을 관철시키려 합니다",
    recoveryStyle: "갈등 후에도 빠르게 잊고 일상으로 돌아갑니다",
    tips: [
      "상대방 말을 끝까지 들어보세요",
      "이기는 것보다 해결이 목표임을 기억하세요",
      "감정이 격해지면 잠시 쉬어가세요",
    ],
    bestMatch: "수용형 (균형을 맞춰줌)",
    worstMatch: "같은 대결형 (충돌 폭발)",
  },
  avoidant: {
    type: "avoidant",
    title: "회피형",
    emoji: "🌫️",
    subtitle: "피하고 보는 타입",
    description:
      "당신은 갈등 상황이 불편해서 가능하면 피하려는 회피형입니다. 평화를 사랑하고 충돌을 싫어합니다. 논쟁보다는 조용히 넘어가는 것을 선호하며, 시간이 해결해주길 기대합니다. 하지만 쌓인 감정이 폭발할 수 있어요.",
    characteristics: [
      "갈등 상황 회피",
      "평화주의자",
      "감정 억제",
      "눈치가 빠름",
    ],
    strengths: [
      "불필요한 다툼을 피함",
      "차분하고 온화한 분위기 유지",
      "상대방 기분을 배려함",
      "감정 조절 능력",
    ],
    weaknesses: [
      "문제가 해결되지 않고 쌓임",
      "속마음을 표현하지 못함",
      "억울한 상황을 참게 됨",
      "자존감이 낮아질 수 있음",
    ],
    conflictBehavior: "논쟁이 시작되면 화제를 바꾸거나 자리를 피합니다",
    recoveryStyle: "혼자 삭히다가 시간이 지나면 괜찮아집니다",
    tips: [
      "작은 것부터 의견 표현 연습하세요",
      "피하는 게 항상 답은 아니에요",
      "나의 감정도 중요하다는 걸 기억하세요",
    ],
    bestMatch: "협상형 (부드럽게 이끌어줌)",
    worstMatch: "대결형 (압도당할 수 있음)",
  },
  negotiating: {
    type: "negotiating",
    title: "협상형",
    emoji: "🤝",
    subtitle: "타협점을 찾는 타입",
    description:
      "당신은 갈등 상황에서 양측 모두 만족할 수 있는 타협점을 찾는 협상형입니다. 상대방 입장도 이해하면서 자신의 의견도 부드럽게 전달합니다. 대화와 소통을 통해 문제를 해결하려 하며, 윈윈을 추구합니다.",
    characteristics: [
      "균형 잡힌 시각",
      "뛰어난 소통 능력",
      "상황 판단력",
      "유연한 사고",
    ],
    strengths: [
      "갈등을 건설적으로 해결",
      "관계를 유지하면서 문제 해결",
      "양측 입장을 조율하는 능력",
      "성숙한 대화 가능",
    ],
    weaknesses: [
      "결정이 느려질 수 있음",
      "모두를 만족시키려다 지침",
      "자기 의견이 희석될 수 있음",
      "우유부단해 보일 수 있음",
    ],
    conflictBehavior: "논쟁이 시작되면 서로의 입장을 정리하며 중재합니다",
    recoveryStyle: "대화로 풀고 나면 깔끔하게 마무리합니다",
    tips: [
      "때로는 확고한 입장도 필요해요",
      "모든 갈등에 타협이 가능한 건 아니에요",
      "자신의 핵심 가치는 지키세요",
    ],
    bestMatch: "모든 유형과 잘 맞음",
    worstMatch: "극단적 대결형 (협상 자체가 어려움)",
  },
  accepting: {
    type: "accepting",
    title: "수용형",
    emoji: "💚",
    subtitle: "상대를 받아들이는 타입",
    description:
      "당신은 갈등 상황에서 상대방의 입장을 먼저 이해하고 받아들이는 수용형입니다. 관계의 조화를 중시하고, 자신보다 상대를 배려합니다. 마음이 따뜻하고 공감 능력이 뛰어나지만, 때로는 자신을 희생하기도 합니다.",
    characteristics: [
      "높은 공감 능력",
      "관계 중시",
      "배려심 깊음",
      "수용적 태도",
    ],
    strengths: [
      "갈등을 빠르게 진정시킴",
      "좋은 인간관계 유지",
      "상대방에게 안정감을 줌",
      "팀 화합에 기여",
    ],
    weaknesses: [
      "자기 의견을 못 펼침",
      "이용당할 수 있음",
      "속으로 상처받음",
      "자기희생이 쌓임",
    ],
    conflictBehavior: "논쟁이 시작되면 상대 입장에서 생각해보려 합니다",
    recoveryStyle: "상대가 괜찮으면 나도 괜찮다고 느낍니다",
    tips: [
      "당신의 의견도 똑같이 중요해요",
      "NO라고 말하는 연습을 하세요",
      "받아들이기 전에 정말 괜찮은지 체크하세요",
    ],
    bestMatch: "대결형 (서로 균형을 맞춤)",
    worstMatch: "같은 수용형 (결정을 못 내림)",
  },
};

export function calculateResult(answers: number[]): ArgueStyleResult {
  const typeScores: Record<string, number> = {
    confrontational: 0,
    avoidant: 0,
    negotiating: 0,
    accepting: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = "negotiating";
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return results[maxType];
}
