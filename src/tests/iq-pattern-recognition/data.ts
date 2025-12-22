// 패턴 인식력 테스트

export const questions = [
  {
    id: 1,
    question: "패턴: A, C, E, G, ? (알파벳)",
    options: [
      { text: "I", type: "A" },
      { text: "H", type: "B" },
      { text: "J", type: "C" },
      { text: "F", type: "D" },
    ],
  },
  {
    id: 2,
    question: "패턴: 1, 4, 9, 16, 25, ?",
    options: [
      { text: "36", type: "A" },
      { text: "30", type: "B" },
      { text: "35", type: "C" },
      { text: "49", type: "D" },
    ],
  },
  {
    id: 3,
    question: "패턴: ○●○○●○○○● 다음 3개는?",
    options: [
      { text: "○○○", type: "A" },
      { text: "●●●", type: "C" },
      { text: "○●○", type: "D" },
      { text: "●○●", type: "B" },
    ],
  },
  {
    id: 4,
    question: "패턴: 2, 6, 18, 54, ?",
    options: [
      { text: "162", type: "A" },
      { text: "108", type: "B" },
      { text: "72", type: "C" },
      { text: "216", type: "D" },
    ],
  },
  {
    id: 5,
    question: "패턴: 월, 화, 목, 토, ?",
    options: [
      { text: "화요일", type: "A" },
      { text: "수요일", type: "C" },
      { text: "일요일", type: "D" },
      { text: "금요일", type: "B" },
    ],
  },
  {
    id: 6,
    question: "패턴: 1, 1, 2, 3, 5, 8, 13, ?",
    options: [
      { text: "21", type: "A" },
      { text: "18", type: "B" },
      { text: "20", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 7,
    question: "패턴: AABABC ABCD ?",
    options: [
      { text: "ABCDE", type: "A" },
      { text: "AABAB", type: "C" },
      { text: "AAABC", type: "D" },
      { text: "ABCDA", type: "B" },
    ],
  },
  {
    id: 8,
    question: "패턴: 3, 6, 12, 24, 48, ?",
    options: [
      { text: "96", type: "A" },
      { text: "72", type: "B" },
      { text: "60", type: "C" },
      { text: "84", type: "D" },
    ],
  },
  {
    id: 9,
    question: "패턴: □△○ □△○ □△○ 다음은?",
    options: [
      { text: "□△○", type: "A" },
      { text: "○□△", type: "C" },
      { text: "△○□", type: "D" },
      { text: "□□□", type: "B" },
    ],
  },
  {
    id: 10,
    question: "패턴: 100, 90, 81, 73, 66, ?",
    options: [
      { text: "60", type: "A" },
      { text: "59", type: "B" },
      { text: "58", type: "C" },
      { text: "55", type: "D" },
    ],
  },
  {
    id: 11,
    question: "패턴: Z, X, V, T, ?",
    options: [
      { text: "R", type: "A" },
      { text: "S", type: "B" },
      { text: "Q", type: "C" },
      { text: "P", type: "D" },
    ],
  },
  {
    id: 12,
    question: "패턴: 1, 2, 4, 5, 7, 8, 10, ?",
    options: [
      { text: "11", type: "A" },
      { text: "12", type: "B" },
      { text: "13", type: "C" },
      { text: "14", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "패턴 인식 천재",
    emoji: "🔍",
    description: "당신은 뛰어난 패턴 인식력을 가지고 있습니다! 복잡한 규칙도 빠르게 파악하며, 다음에 올 것을 정확하게 예측합니다.",
    traits: ["뛰어난 규칙 발견", "예측력", "분석적 사고", "세부 관찰력"],
    strengths: ["데이터 분석", "코딩/알고리즘", "과학적 추론", "주식/트렌드 예측"],
    weaknesses: ["패턴이 없는 상황에서 불안", "과도한 규칙 찾기"],
    tips: ["비정형 데이터도 다뤄보세요", "창의적 사고와 균형을 맞추세요"],
  },
  B: {
    type: "B",
    title: "패턴 인식 전문가",
    emoji: "⭐",
    description: "패턴 인식력이 우수합니다. 대부분의 규칙을 잘 파악하며, 논리적으로 다음 단계를 예측합니다.",
    traits: ["우수한 규칙 파악", "논리적 예측", "체계적 분석", "관찰력"],
    strengths: ["패턴 문제 해결", "데이터 이해", "규칙 기반 작업"],
    weaknesses: ["복잡한 다중 패턴에서 어려움", "숨겨진 규칙 찾기"],
    tips: ["더 복잡한 패턴에 도전하세요", "다양한 유형의 패턴을 경험해보세요"],
  },
  C: {
    type: "C",
    title: "패턴 인식 탐구자",
    emoji: "📈",
    description: "기본적인 패턴 인식력을 갖추고 있습니다. 간단한 규칙은 잘 찾지만, 복잡한 패턴에서는 더 연습이 필요합니다.",
    traits: ["기본 규칙 인식", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 패턴 파악", "단계적 접근", "노력"],
    weaknesses: ["복잡한 규칙 어려움", "패턴 연습 필요"],
    tips: ["다양한 패턴 문제를 풀어보세요", "규칙을 찾는 연습을 꾸준히 하세요"],
  },
  D: {
    type: "D",
    title: "패턴 인식 도전자",
    emoji: "🌱",
    description: "패턴 인식력은 연습으로 크게 향상될 수 있습니다! 다양한 패턴을 경험하며 능력을 키워보세요.",
    traits: ["발전 가능성", "창의적 사고", "직관적", "다른 강점 보유"],
    strengths: ["창의적 접근", "비정형 사고", "유연함"],
    weaknesses: ["규칙 찾기 연습 필요", "체계적 분석 개선 필요"],
    tips: ["간단한 수열부터 시작하세요", "패턴 게임을 즐겨보세요"],
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
