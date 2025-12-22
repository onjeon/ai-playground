// 추론 능력 테스트

export const questions = [
  {
    id: 1,
    question: "철수는 영희보다 키가 크고, 민수는 철수보다 키가 작습니다. 영희와 민수 중 누가 더 클까요?",
    options: [
      { text: "확실히 알 수 없다", type: "A" },
      { text: "영희", type: "B" },
      { text: "민수", type: "C" },
      { text: "같다", type: "D" },
    ],
  },
  {
    id: 2,
    question: "모든 장미는 꽃이다. 어떤 꽃은 빨갛다. 다음 중 반드시 참인 것은?",
    options: [
      { text: "어떤 꽃은 장미가 아니다", type: "A" },
      { text: "모든 장미는 빨갛다", type: "C" },
      { text: "빨간 것은 모두 장미다", type: "D" },
      { text: "어떤 장미는 빨갛다", type: "B" },
    ],
  },
  {
    id: 3,
    question: "A가 참이면 B도 참이다. B가 거짓이라면?",
    options: [
      { text: "A는 거짓이다", type: "A" },
      { text: "A는 참이다", type: "C" },
      { text: "알 수 없다", type: "D" },
      { text: "A와 B 모두 거짓", type: "B" },
    ],
  },
  {
    id: 4,
    question: "비가 오거나 눈이 온다. 비가 오지 않는다. 따라서?",
    options: [
      { text: "눈이 온다", type: "A" },
      { text: "맑다", type: "C" },
      { text: "날씨를 알 수 없다", type: "D" },
      { text: "비도 눈도 안 온다", type: "B" },
    ],
  },
  {
    id: 5,
    question: "이 상자 안에는 빨간 공 또는 파란 공만 있습니다. 빨간 공이 없다면?",
    options: [
      { text: "파란 공만 있다", type: "A" },
      { text: "상자가 비어있다", type: "B" },
      { text: "다른 색 공이 있다", type: "C" },
      { text: "알 수 없다", type: "D" },
    ],
  },
  {
    id: 6,
    question: "모든 학생은 공부를 한다. 철수는 학생이다. 따라서?",
    options: [
      { text: "철수는 공부를 한다", type: "A" },
      { text: "철수만 공부를 한다", type: "C" },
      { text: "모든 사람은 공부한다", type: "D" },
      { text: "공부하는 사람은 학생이다", type: "B" },
    ],
  },
  {
    id: 7,
    question: "A > B 이고, B > C 이고, C > D 이다. 가장 작은 것은?",
    options: [
      { text: "D", type: "A" },
      { text: "C", type: "B" },
      { text: "B", type: "C" },
      { text: "A", type: "D" },
    ],
  },
  {
    id: 8,
    question: "어떤 것도 영원하지 않다. 다이아몬드는 어떤 것이다. 따라서?",
    options: [
      { text: "다이아몬드도 영원하지 않다", type: "A" },
      { text: "다이아몬드는 영원하다", type: "C" },
      { text: "알 수 없다", type: "D" },
      { text: "다이아몬드는 예외다", type: "B" },
    ],
  },
  {
    id: 9,
    question: "내가 코트를 입으면 춥다는 뜻이다. 내가 코트를 입고 있다. 따라서?",
    options: [
      { text: "춥다", type: "A" },
      { text: "비가 온다", type: "C" },
      { text: "덥다", type: "D" },
      { text: "날씨를 모른다", type: "B" },
    ],
  },
  {
    id: 10,
    question: "이 마을의 모든 집에는 정원이 있다. 철수의 집은 이 마을에 있다. 따라서?",
    options: [
      { text: "철수의 집에는 정원이 있다", type: "A" },
      { text: "철수가 정원을 좋아한다", type: "C" },
      { text: "정원이 있는 집은 모두 이 마을에 있다", type: "D" },
      { text: "알 수 없다", type: "B" },
    ],
  },
  {
    id: 11,
    question: "빛이 없으면 어둡다. 지금 어둡다. 다음 중 반드시 참인 것은?",
    options: [
      { text: "빛이 없다", type: "A" },
      { text: "밤이다", type: "B" },
      { text: "눈을 감았다", type: "C" },
      { text: "정전이다", type: "D" },
    ],
  },
  {
    id: 12,
    question: "X이면 Y이다. Y이면 Z이다. X가 참이라면?",
    options: [
      { text: "Z도 참이다", type: "A" },
      { text: "Y만 참이다", type: "B" },
      { text: "Z는 거짓이다", type: "C" },
      { text: "알 수 없다", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "추론 능력 천재",
    emoji: "🔮",
    description: "당신은 뛰어난 추론 능력을 가지고 있습니다! 주어진 정보에서 논리적 결론을 정확하게 도출하며, 연역적 사고가 탁월합니다.",
    traits: ["연역적 사고", "논리적 추론", "조건 분석", "결론 도출"],
    strengths: ["논리 문제 해결", "법적/과학적 추론", "비판적 사고", "오류 발견"],
    weaknesses: ["정보가 불완전할 때 판단 어려움", "직관 무시 경향"],
    tips: ["귀납적 추론도 연습해보세요", "실생활에서 추론을 적용해보세요"],
  },
  B: {
    type: "B",
    title: "추론 능력 전문가",
    emoji: "⭐",
    description: "추론 능력이 우수합니다. 대부분의 논리 문제를 잘 해결하며, 조건과 결론의 관계를 잘 파악합니다.",
    traits: ["우수한 추론력", "논리적 분석", "조건 이해", "체계적 사고"],
    strengths: ["논리 문제 해결", "의사결정", "분석적 접근"],
    weaknesses: ["복잡한 다중 조건에서 혼란", "확실성 추구"],
    tips: ["더 복잡한 추론 문제에 도전하세요", "다양한 논리 퍼즐을 풀어보세요"],
  },
  C: {
    type: "C",
    title: "추론 능력 탐구자",
    emoji: "🔍",
    description: "기본적인 추론 능력을 갖추고 있습니다. 간단한 추론은 잘 하지만, 복잡한 조건에서는 더 연습이 필요합니다.",
    traits: ["기본 추론력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 추론", "단계적 접근", "노력"],
    weaknesses: ["복잡한 추론 어려움", "논리적 사고 연습 필요"],
    tips: ["논리학 기초를 공부해보세요", "간단한 추론 문제부터 연습하세요"],
  },
  D: {
    type: "D",
    title: "추론 능력 도전자",
    emoji: "🌱",
    description: "추론 능력은 연습으로 크게 향상될 수 있습니다! 논리적 사고를 체계적으로 훈련해보세요.",
    traits: ["발전 가능성", "직관적 사고", "창의적", "다른 강점 보유"],
    strengths: ["직관적 판단", "창의적 접근", "유연한 사고"],
    weaknesses: ["논리적 추론 연습 필요", "조건 분석 개선 필요"],
    tips: ["논리 퍼즐 게임을 해보세요", "'만약~라면' 생각을 연습해보세요"],
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
