// 수리 논리력 테스트

export const questions = [
  {
    id: 1,
    question: "A는 B의 2배이고, B는 C의 3배일 때, A는 C의 몇 배인가요?",
    options: [
      { text: "6배", type: "A" },
      { text: "5배", type: "B" },
      { text: "4배", type: "C" },
      { text: "8배", type: "D" },
    ],
  },
  {
    id: 2,
    question: "어떤 수에 5를 더하고 3을 곱하면 36이 됩니다. 어떤 수는?",
    options: [
      { text: "7", type: "A" },
      { text: "9", type: "B" },
      { text: "5", type: "C" },
      { text: "11", type: "D" },
    ],
  },
  {
    id: 3,
    question: "사과 3개와 배 2개의 가격이 5000원, 사과 2개와 배 3개의 가격이 5500원일 때, 사과 1개의 가격은?",
    options: [
      { text: "900원", type: "A" },
      { text: "1000원", type: "B" },
      { text: "800원", type: "C" },
      { text: "1100원", type: "D" },
    ],
  },
  {
    id: 4,
    question: "시속 60km로 2시간 달린 거리와 시속 40km로 몇 시간 달린 거리가 같나요?",
    options: [
      { text: "3시간", type: "A" },
      { text: "2.5시간", type: "B" },
      { text: "4시간", type: "C" },
      { text: "2시간", type: "D" },
    ],
  },
  {
    id: 5,
    question: "연속하는 세 자연수의 합이 33일 때, 가운데 수는?",
    options: [
      { text: "11", type: "A" },
      { text: "10", type: "B" },
      { text: "12", type: "C" },
      { text: "9", type: "D" },
    ],
  },
  {
    id: 6,
    question: "전체의 2/3의 1/4은 전체의 얼마인가요?",
    options: [
      { text: "1/6", type: "A" },
      { text: "1/4", type: "B" },
      { text: "2/7", type: "C" },
      { text: "1/3", type: "D" },
    ],
  },
  {
    id: 7,
    question: "6명이 12일에 완성하는 일을 9명이 하면 며칠이 걸리나요?",
    options: [
      { text: "8일", type: "A" },
      { text: "10일", type: "B" },
      { text: "6일", type: "C" },
      { text: "9일", type: "D" },
    ],
  },
  {
    id: 8,
    question: "원가 10000원인 물건을 20% 할인해서 팔면 판매가는?",
    options: [
      { text: "8000원", type: "A" },
      { text: "7000원", type: "C" },
      { text: "9000원", type: "B" },
      { text: "7500원", type: "D" },
    ],
  },
  {
    id: 9,
    question: "A:B = 2:3이고 B:C = 4:5일 때, A:C는?",
    options: [
      { text: "8:15", type: "A" },
      { text: "6:15", type: "B" },
      { text: "2:5", type: "C" },
      { text: "4:9", type: "D" },
    ],
  },
  {
    id: 10,
    question: "현재 아버지의 나이가 아들의 4배이고, 10년 후에는 아들의 2.5배가 됩니다. 현재 아들의 나이는?",
    options: [
      { text: "10살", type: "A" },
      { text: "12살", type: "B" },
      { text: "8살", type: "C" },
      { text: "15살", type: "D" },
    ],
  },
  {
    id: 11,
    question: "어떤 일을 A 혼자 하면 10일, B 혼자 하면 15일 걸립니다. 둘이 함께 하면?",
    options: [
      { text: "6일", type: "A" },
      { text: "5일", type: "B" },
      { text: "7일", type: "C" },
      { text: "8일", type: "D" },
    ],
  },
  {
    id: 12,
    question: "농도 10%인 소금물 200g에서 물을 증발시켜 농도를 20%로 만들려면 몇 g의 물을 증발시켜야 하나요?",
    options: [
      { text: "100g", type: "A" },
      { text: "80g", type: "B" },
      { text: "50g", type: "C" },
      { text: "120g", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "수리 논리 천재",
    emoji: "🧮",
    description: "당신은 뛰어난 수리적 사고력을 가지고 있습니다! 복잡한 계산과 논리적 추론을 빠르고 정확하게 수행합니다.",
    traits: ["탁월한 계산 능력", "논리적 추론", "문제 분석력", "수학적 직관"],
    strengths: ["수학/과학 적성", "데이터 분석", "금융/통계 분야", "프로그래밍"],
    weaknesses: ["때때로 직관을 무시", "과도한 계산"],
    tips: ["수학 올림피아드에 도전해보세요", "고급 수학이나 통계를 공부해보세요"],
  },
  B: {
    type: "B",
    title: "수리 논리 전문가",
    emoji: "📊",
    description: "수리 논리력이 우수합니다. 대부분의 수학 문제를 잘 해결하며, 논리적 사고가 체계적입니다.",
    traits: ["우수한 계산력", "체계적 접근", "논리적 분석", "문제 해결력"],
    strengths: ["수학 문제 해결", "자료 분석", "계획 수립"],
    weaknesses: ["복잡한 문제에서 시간 소요", "계산 실수 주의"],
    tips: ["다양한 수학 문제를 풀어보세요", "실생활에 수학을 적용해보세요"],
  },
  C: {
    type: "C",
    title: "수리 논리 탐구자",
    emoji: "📈",
    description: "기본적인 수리 능력을 갖추고 있습니다. 간단한 계산은 잘 하지만, 복잡한 문제에서는 더 연습이 필요합니다.",
    traits: ["기본 수리력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 계산", "단계적 접근", "포기하지 않는 자세"],
    weaknesses: ["복잡한 수식 어려움", "응용 문제 연습 필요"],
    tips: ["기초 수학부터 복습하세요", "매일 수학 문제를 풀어보세요"],
  },
  D: {
    type: "D",
    title: "수리 논리 도전자",
    emoji: "🌱",
    description: "수리 논리력은 연습으로 크게 향상될 수 있습니다! 기초부터 차근차근 연습하면 분명히 발전합니다.",
    traits: ["발전 가능성", "다른 강점 보유", "노력형", "창의적"],
    strengths: ["직관적 이해", "창의적 접근", "언어적 능력"],
    weaknesses: ["계산 연습 필요", "수학 공식 복습 필요"],
    tips: ["쉬운 계산부터 시작하세요", "수학 게임으로 재미있게 연습해보세요"],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
