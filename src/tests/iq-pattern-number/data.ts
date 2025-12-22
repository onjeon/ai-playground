// 숫자 패턴 IQ 테스트

export const questions = [
  {
    id: 1,
    question: "다음 숫자의 규칙을 찾아 빈칸에 들어갈 숫자는? 2, 4, 8, 16, __",
    options: [
      { text: "24", type: "C" },
      { text: "32", type: "A" },
      { text: "20", type: "D" },
      { text: "28", type: "B" },
    ],
  },
  {
    id: 2,
    question: "다음 수열의 다음 항은? 1, 1, 2, 3, 5, 8, __",
    options: [
      { text: "11", type: "B" },
      { text: "13", type: "A" },
      { text: "10", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 3,
    question: "규칙을 찾으세요: 3, 6, 11, 18, 27, __",
    options: [
      { text: "36", type: "B" },
      { text: "38", type: "A" },
      { text: "35", type: "C" },
      { text: "40", type: "D" },
    ],
  },
  {
    id: 4,
    question: "빈칸에 들어갈 숫자는? 100, 81, 64, 49, 36, __",
    options: [
      { text: "25", type: "A" },
      { text: "16", type: "B" },
      { text: "20", type: "C" },
      { text: "30", type: "D" },
    ],
  },
  {
    id: 5,
    question: "다음 수열의 규칙은? 2, 6, 12, 20, 30, __",
    options: [
      { text: "40", type: "B" },
      { text: "42", type: "A" },
      { text: "38", type: "C" },
      { text: "44", type: "D" },
    ],
  },
  {
    id: 6,
    question: "빈칸에 알맞은 수는? 1, 4, 9, 16, 25, __",
    options: [
      { text: "36", type: "A" },
      { text: "30", type: "C" },
      { text: "32", type: "B" },
      { text: "34", type: "D" },
    ],
  },
  {
    id: 7,
    question: "수열의 다음 항은? 3, 5, 9, 15, 23, __",
    options: [
      { text: "31", type: "B" },
      { text: "33", type: "A" },
      { text: "29", type: "C" },
      { text: "35", type: "D" },
    ],
  },
  {
    id: 8,
    question: "규칙을 찾으세요: 1, 2, 4, 7, 11, 16, __",
    options: [
      { text: "22", type: "A" },
      { text: "20", type: "B" },
      { text: "21", type: "C" },
      { text: "24", type: "D" },
    ],
  },
  {
    id: 9,
    question: "다음 수는? 5, 10, 20, 40, 80, __",
    options: [
      { text: "120", type: "B" },
      { text: "160", type: "A" },
      { text: "140", type: "C" },
      { text: "100", type: "D" },
    ],
  },
  {
    id: 10,
    question: "빈칸에 들어갈 수는? 2, 3, 5, 7, 11, __",
    options: [
      { text: "13", type: "A" },
      { text: "15", type: "C" },
      { text: "12", type: "B" },
      { text: "14", type: "D" },
    ],
  },
  {
    id: 11,
    question: "다음 항은? 1, 3, 6, 10, 15, __",
    options: [
      { text: "20", type: "B" },
      { text: "21", type: "A" },
      { text: "18", type: "C" },
      { text: "22", type: "D" },
    ],
  },
  {
    id: 12,
    question: "수열의 규칙을 찾으세요: 8, 27, 64, 125, __",
    options: [
      { text: "216", type: "A" },
      { text: "200", type: "B" },
      { text: "196", type: "C" },
      { text: "225", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "숫자 패턴 천재",
    emoji: "🧠",
    description: "당신은 뛰어난 수리적 패턴 인식 능력을 가지고 있습니다! 복잡한 숫자 규칙도 빠르게 파악하며, 수학적 직관력이 매우 우수합니다.",
    traits: ["뛰어난 패턴 인식력", "수학적 직관", "논리적 분석력", "빠른 계산 능력"],
    strengths: ["수학/과학 분야 적성", "데이터 분석 능력", "문제 해결 속도"],
    weaknesses: ["때때로 과도한 분석", "단순한 해결책을 놓칠 수 있음"],
    tips: ["다양한 수학 퍼즐로 능력을 더욱 발전시키세요", "프로그래밍이나 데이터 분석에 도전해보세요"],
  },
  B: {
    type: "B",
    title: "숫자 패턴 전문가",
    emoji: "⭐",
    description: "숫자 패턴을 파악하는 능력이 우수합니다. 대부분의 수열 문제를 정확하게 해결하며, 수리적 사고력이 평균 이상입니다.",
    traits: ["우수한 패턴 감각", "체계적 분석", "논리적 접근", "수리력"],
    strengths: ["규칙 발견 능력", "수학 기초 탄탄", "문제 접근법이 체계적"],
    weaknesses: ["복잡한 패턴에서 시간 소요", "때때로 확인 부족"],
    tips: ["더 복잡한 수열 문제에 도전해보세요", "수학적 사고를 일상에 적용해보세요"],
  },
  C: {
    type: "C",
    title: "숫자 패턴 탐구자",
    emoji: "📊",
    description: "숫자 패턴에 대한 기본적인 이해가 있습니다. 간단한 규칙은 잘 찾지만, 복잡한 패턴에서는 더 연습이 필요합니다.",
    traits: ["기본 수리력", "꾸준한 노력", "학습 의지", "발전 가능성"],
    strengths: ["기초 패턴 인식", "단계적 접근", "끈기 있는 도전"],
    weaknesses: ["복잡한 규칙 파악 어려움", "속도 개선 필요"],
    tips: ["기초 수학 개념을 복습하세요", "매일 간단한 수학 퍼즐을 풀어보세요"],
  },
  D: {
    type: "D",
    title: "숫자 패턴 도전자",
    emoji: "🌱",
    description: "숫자 패턴 인식은 연습으로 크게 향상될 수 있습니다! 차근차근 기초부터 쌓아가면 분명히 발전할 수 있습니다.",
    traits: ["발전 가능성", "창의적 사고", "다른 강점 보유", "노력형"],
    strengths: ["새로운 관점", "포기하지 않는 자세", "다양한 접근 시도"],
    weaknesses: ["수리적 패턴 인식 연습 필요", "규칙 찾기에 어려움"],
    tips: ["기초 산수부터 차근차근 연습하세요", "수학 관련 게임으로 재미있게 시작해보세요"],
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
