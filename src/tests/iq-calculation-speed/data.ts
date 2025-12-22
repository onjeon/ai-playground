// 계산 속도 테스트

export const questions = [
  {
    id: 1,
    question: "7 + 8 = ?",
    options: [
      { text: "15", type: "A" },
      { text: "14", type: "B" },
      { text: "16", type: "C" },
      { text: "13", type: "D" },
    ],
  },
  {
    id: 2,
    question: "25 - 17 = ?",
    options: [
      { text: "8", type: "A" },
      { text: "7", type: "B" },
      { text: "9", type: "C" },
      { text: "6", type: "D" },
    ],
  },
  {
    id: 3,
    question: "6 × 7 = ?",
    options: [
      { text: "42", type: "A" },
      { text: "48", type: "C" },
      { text: "36", type: "D" },
      { text: "40", type: "B" },
    ],
  },
  {
    id: 4,
    question: "144 ÷ 12 = ?",
    options: [
      { text: "12", type: "A" },
      { text: "14", type: "C" },
      { text: "10", type: "D" },
      { text: "11", type: "B" },
    ],
  },
  {
    id: 5,
    question: "15 + 27 + 8 = ?",
    options: [
      { text: "50", type: "A" },
      { text: "48", type: "B" },
      { text: "52", type: "C" },
      { text: "45", type: "D" },
    ],
  },
  {
    id: 6,
    question: "100 - 37 = ?",
    options: [
      { text: "63", type: "A" },
      { text: "67", type: "C" },
      { text: "73", type: "D" },
      { text: "53", type: "B" },
    ],
  },
  {
    id: 7,
    question: "9 × 8 = ?",
    options: [
      { text: "72", type: "A" },
      { text: "64", type: "B" },
      { text: "81", type: "C" },
      { text: "63", type: "D" },
    ],
  },
  {
    id: 8,
    question: "56 ÷ 8 = ?",
    options: [
      { text: "7", type: "A" },
      { text: "8", type: "C" },
      { text: "6", type: "D" },
      { text: "9", type: "B" },
    ],
  },
  {
    id: 9,
    question: "23 × 4 = ?",
    options: [
      { text: "92", type: "A" },
      { text: "88", type: "B" },
      { text: "96", type: "C" },
      { text: "84", type: "D" },
    ],
  },
  {
    id: 10,
    question: "1000 - 567 = ?",
    options: [
      { text: "433", type: "A" },
      { text: "533", type: "C" },
      { text: "443", type: "D" },
      { text: "333", type: "B" },
    ],
  },
  {
    id: 11,
    question: "17 × 6 = ?",
    options: [
      { text: "102", type: "A" },
      { text: "96", type: "B" },
      { text: "108", type: "C" },
      { text: "112", type: "D" },
    ],
  },
  {
    id: 12,
    question: "225 ÷ 15 = ?",
    options: [
      { text: "15", type: "A" },
      { text: "16", type: "B" },
      { text: "14", type: "C" },
      { text: "20", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "계산 속도 천재",
    emoji: "⚡",
    description: "당신은 뛰어난 계산 속도를 가지고 있습니다! 기본 연산을 빠르고 정확하게 수행하며, 수리적 직관이 뛰어납니다.",
    traits: ["빠른 계산력", "수리적 직관", "정확성", "집중력"],
    strengths: ["암산 능력", "빠른 문제 해결", "수학/과학 적성", "금융 업무"],
    weaknesses: ["서두름으로 인한 실수 주의", "복잡한 문제에서 인내 필요"],
    tips: ["정확성도 함께 유지하세요", "더 복잡한 암산에 도전해보세요"],
  },
  B: {
    type: "B",
    title: "계산 속도 전문가",
    emoji: "🌟",
    description: "계산 속도가 우수합니다. 대부분의 기본 연산을 빠르게 처리하며, 수리적 사고가 발달했습니다.",
    traits: ["우수한 계산력", "수리적 사고", "효율성", "집중력"],
    strengths: ["빠른 계산", "실용적 수학", "일상 계산"],
    weaknesses: ["가끔 계산 실수", "속도 향상 여지"],
    tips: ["암산 연습을 더 해보세요", "구구단을 완벽하게 외워보세요"],
  },
  C: {
    type: "C",
    title: "계산 속도 탐구자",
    emoji: "📊",
    description: "기본적인 계산 능력을 갖추고 있습니다. 간단한 계산은 잘 하지만, 속도와 정확성을 더 높일 수 있습니다.",
    traits: ["기본 계산력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 연산", "신중한 계산", "단계적 접근"],
    weaknesses: ["계산 속도 개선 필요", "암산 연습 필요"],
    tips: ["매일 암산 연습을 해보세요", "계산기 없이 계산하는 습관을 들이세요"],
  },
  D: {
    type: "D",
    title: "계산 속도 도전자",
    emoji: "🌱",
    description: "계산 속도는 연습으로 크게 향상될 수 있습니다! 기초부터 차근차근 연습하면 분명히 빨라집니다.",
    traits: ["발전 가능성", "신중함", "다른 강점 보유", "노력형"],
    strengths: ["신중한 판단", "검토 습관", "다양한 능력"],
    weaknesses: ["기초 연산 연습 필요", "암산 훈련 필요"],
    tips: ["구구단부터 완벽하게 외우세요", "간단한 덧셈 뺄셈부터 연습하세요"],
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
