// 논리 퍼즐 IQ 테스트

export const questions = [
  {
    id: 1,
    question: "A가 B보다 크고, B가 C보다 크다면, 다음 중 참인 것은?",
    options: [
      { text: "C가 가장 크다", type: "D" },
      { text: "A가 C보다 크다", type: "A" },
      { text: "B가 가장 크다", type: "C" },
      { text: "확실히 알 수 없다", type: "B" },
    ],
  },
  {
    id: 2,
    question: "모든 고양이는 동물이다. 일부 동물은 검다. 다음 중 반드시 참인 것은?",
    options: [
      { text: "모든 고양이는 검다", type: "C" },
      { text: "일부 고양이는 검을 수 있다", type: "A" },
      { text: "검은 것은 모두 고양이다", type: "D" },
      { text: "모든 동물은 고양이다", type: "B" },
    ],
  },
  {
    id: 3,
    question: "비가 오면 땅이 젖는다. 땅이 젖었다. 이 때 반드시 참인 것은?",
    options: [
      { text: "비가 왔다", type: "C" },
      { text: "비가 반드시 온 것은 아니다", type: "A" },
      { text: "비가 오지 않았다", type: "D" },
      { text: "곧 비가 올 것이다", type: "B" },
    ],
  },
  {
    id: 4,
    question: "철수, 영희, 민수 중 한 명만 거짓말쟁이다. 철수: '영희가 거짓말쟁이야' 영희: '민수가 거짓말쟁이야' 민수: '철수가 거짓말쟁이야' 거짓말쟁이는?",
    options: [
      { text: "알 수 없다", type: "A" },
      { text: "철수", type: "B" },
      { text: "영희", type: "C" },
      { text: "민수", type: "D" },
    ],
  },
  {
    id: 5,
    question: "P이면 Q이다. Q이면 R이다. R이 거짓이다. 다음 중 참인 것은?",
    options: [
      { text: "P는 거짓이다", type: "A" },
      { text: "P는 참이다", type: "C" },
      { text: "Q는 참이다", type: "D" },
      { text: "알 수 없다", type: "B" },
    ],
  },
  {
    id: 6,
    question: "어떤 학생도 시험에 합격하지 못했다면, 다음 중 참인 것은?",
    options: [
      { text: "모든 학생이 불합격했다", type: "A" },
      { text: "일부 학생만 합격했다", type: "C" },
      { text: "합격자 수를 알 수 없다", type: "B" },
      { text: "대부분 학생이 합격했다", type: "D" },
    ],
  },
  {
    id: 7,
    question: "A, B, C, D 네 사람이 일렬로 선다. A는 B 바로 앞에 있고, C는 D 바로 뒤에 있다. B는 C보다 앞에 있다. 맨 앞에 있는 사람은?",
    options: [
      { text: "B", type: "C" },
      { text: "D", type: "A" },
      { text: "A", type: "B" },
      { text: "C", type: "D" },
    ],
  },
  {
    id: 8,
    question: "모든 새는 날 수 있다(거짓). 펭귄은 새다(참). 다음 중 올바른 추론은?",
    options: [
      { text: "펭귄은 날 수 있다", type: "C" },
      { text: "펭귄이 날 수 있는지는 이 정보만으로 알 수 없다", type: "A" },
      { text: "모든 새가 날 수 없다", type: "D" },
      { text: "펭귄은 새가 아니다", type: "B" },
    ],
  },
  {
    id: 9,
    question: "빨간 공이 파란 공보다 무겁고, 파란 공이 노란 공보다 가볍다면?",
    options: [
      { text: "빨간 공이 가장 무겁다", type: "B" },
      { text: "노란 공이 가장 무겁다", type: "C" },
      { text: "세 공의 무게 순서를 알 수 없다", type: "A" },
      { text: "파란 공이 가장 가볍다", type: "D" },
    ],
  },
  {
    id: 10,
    question: "다음 조건을 만족하는 숫자는? '10보다 크고 20보다 작은 짝수, 4의 배수'",
    options: [
      { text: "12와 16", type: "A" },
      { text: "10과 14", type: "C" },
      { text: "14와 18", type: "B" },
      { text: "16과 20", type: "D" },
    ],
  },
  {
    id: 11,
    question: "A는 B의 형제이고, B는 C의 아버지이다. A와 C의 관계는?",
    options: [
      { text: "A는 C의 삼촌/고모이다", type: "A" },
      { text: "A는 C의 형제이다", type: "C" },
      { text: "A는 C의 할아버지이다", type: "D" },
      { text: "알 수 없다", type: "B" },
    ],
  },
  {
    id: 12,
    question: "어떤 직사각형도 원이 아니다. 어떤 도형 X가 직사각형이라면?",
    options: [
      { text: "X는 원이 아니다", type: "A" },
      { text: "X는 원일 수도 있다", type: "C" },
      { text: "X는 반드시 원이다", type: "D" },
      { text: "알 수 없다", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "논리 퍼즐 마스터",
    emoji: "🏆",
    description: "당신은 뛰어난 논리적 추론 능력을 가지고 있습니다! 복잡한 조건문과 추론 문제를 정확하게 해결하며, 논리의 허점을 빠르게 발견합니다.",
    traits: ["탁월한 연역적 사고", "조건 분석력", "논리적 일관성", "비판적 사고"],
    strengths: ["복잡한 추론 해결", "논쟁에서 우위", "오류 발견 능력", "체계적 분석"],
    weaknesses: ["때때로 지나친 분석", "감성적 접근 부족"],
    tips: ["수학적 증명이나 철학적 논증을 공부해보세요", "토론 활동에 참여해보세요"],
  },
  B: {
    type: "B",
    title: "논리 퍼즐 전문가",
    emoji: "⭐",
    description: "논리적 사고력이 우수합니다. 대부분의 퍼즐을 풀 수 있으며, 조건과 규칙을 잘 파악합니다.",
    traits: ["우수한 추론력", "조건 이해", "체계적 접근", "논리적 판단"],
    strengths: ["논리 문제 해결", "규칙 파악", "합리적 의사결정"],
    weaknesses: ["복잡한 다중 조건에서 혼란", "속도 향상 필요"],
    tips: ["더 어려운 논리 퍼즐에 도전하세요", "프로그래밍 논리를 배워보세요"],
  },
  C: {
    type: "C",
    title: "논리 퍼즐 탐구자",
    emoji: "📖",
    description: "기본적인 논리력을 갖추고 있습니다. 단순한 추론은 잘 하지만, 복잡한 조건에서는 더 연습이 필요합니다.",
    traits: ["기본 논리력", "학습 의지", "꾸준함", "발전 가능성"],
    strengths: ["기초 추론", "단계적 접근", "포기하지 않는 자세"],
    weaknesses: ["복잡한 조건 처리 어려움", "논리 오류 발생"],
    tips: ["논리학 기초를 공부해보세요", "간단한 퍼즐부터 차근차근 도전하세요"],
  },
  D: {
    type: "D",
    title: "논리 퍼즐 도전자",
    emoji: "🌱",
    description: "논리적 사고는 훈련으로 발전할 수 있습니다! 기초부터 차근차근 연습하면 크게 향상될 수 있습니다.",
    traits: ["발전 가능성", "창의적 접근", "직관적 사고", "다른 강점 보유"],
    strengths: ["새로운 시각", "포기하지 않음", "다양한 시도"],
    weaknesses: ["논리적 추론 연습 필요", "조건 분석 어려움"],
    tips: ["기초 논리 개념부터 시작하세요", "퍼즐 게임으로 재미있게 연습해보세요"],
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
