// 단어 논리력 테스트

export const questions = [
  {
    id: 1,
    question: "다음 중 나머지와 성격이 다른 단어는?",
    options: [
      { text: "포도", type: "A" },
      { text: "사과", type: "C" },
      { text: "바나나", type: "D" },
      { text: "당근", type: "B" },
    ],
  },
  {
    id: 2,
    question: "의사 : 병원 = 교사 : ?",
    options: [
      { text: "학교", type: "A" },
      { text: "학생", type: "C" },
      { text: "책", type: "D" },
      { text: "교실", type: "B" },
    ],
  },
  {
    id: 3,
    question: "다음 단어들의 공통점은? 자동차, 자전거, 비행기, 배",
    options: [
      { text: "이동 수단", type: "A" },
      { text: "기계", type: "B" },
      { text: "금속", type: "C" },
      { text: "비쌈", type: "D" },
    ],
  },
  {
    id: 4,
    question: "반대말 관계가 올바른 것은?",
    options: [
      { text: "밝다 - 어둡다", type: "A" },
      { text: "크다 - 높다", type: "C" },
      { text: "빠르다 - 멀다", type: "D" },
      { text: "춥다 - 시원하다", type: "B" },
    ],
  },
  {
    id: 5,
    question: "손 : 팔 = 발 : ?",
    options: [
      { text: "다리", type: "A" },
      { text: "신발", type: "C" },
      { text: "걷기", type: "D" },
      { text: "발목", type: "B" },
    ],
  },
  {
    id: 6,
    question: "다음 중 단어의 관계가 다른 하나는?",
    options: [
      { text: "나무 : 가지", type: "A" },
      { text: "꽃 : 꽃잎", type: "B" },
      { text: "책 : 종이", type: "C" },
      { text: "하늘 : 구름", type: "D" },
    ],
  },
  {
    id: 7,
    question: "어린이 : 어른 = 새끼 : ?",
    options: [
      { text: "어미", type: "A" },
      { text: "동물", type: "C" },
      { text: "알", type: "D" },
      { text: "새", type: "B" },
    ],
  },
  {
    id: 8,
    question: "다음 중 나머지와 범주가 다른 것은?",
    options: [
      { text: "기쁨", type: "A" },
      { text: "슬픔", type: "B" },
      { text: "분노", type: "C" },
      { text: "달리기", type: "D" },
    ],
  },
  {
    id: 9,
    question: "원인 : 결과 = 질문 : ?",
    options: [
      { text: "대답", type: "A" },
      { text: "문제", type: "C" },
      { text: "의문", type: "D" },
      { text: "생각", type: "B" },
    ],
  },
  {
    id: 10,
    question: "책 : 읽다 = 노래 : ?",
    options: [
      { text: "부르다/듣다", type: "A" },
      { text: "음악", type: "C" },
      { text: "가수", type: "D" },
      { text: "악기", type: "B" },
    ],
  },
  {
    id: 11,
    question: "다음 단어를 순서대로 나열하면? 성인, 유아, 청소년, 노인, 어린이",
    options: [
      { text: "유아-어린이-청소년-성인-노인", type: "A" },
      { text: "어린이-유아-청소년-성인-노인", type: "C" },
      { text: "유아-청소년-어린이-성인-노인", type: "D" },
      { text: "어린이-청소년-유아-성인-노인", type: "B" },
    ],
  },
  {
    id: 12,
    question: "시작 : 끝 = 입구 : ?",
    options: [
      { text: "출구", type: "A" },
      { text: "문", type: "C" },
      { text: "건물", type: "D" },
      { text: "통로", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "단어 논리력 천재",
    emoji: "📖",
    description: "당신은 뛰어난 단어 논리력을 가지고 있습니다! 단어 간의 관계를 정확하게 파악하고, 언어적 추론 능력이 탁월합니다.",
    traits: ["어휘 분석력", "관계 파악", "분류 능력", "언어적 추론"],
    strengths: ["언어 문제 해결", "독해력", "토론 능력", "글쓰기"],
    weaknesses: ["숫자나 공간 문제에 약할 수 있음", "비언어적 추론"],
    tips: ["언어학이나 철학을 공부해보세요", "다양한 언어 퍼즐에 도전하세요"],
  },
  B: {
    type: "B",
    title: "단어 논리력 전문가",
    emoji: "✨",
    description: "단어 논리력이 우수합니다. 대부분의 단어 관계를 잘 파악하며, 언어적 사고가 체계적입니다.",
    traits: ["우수한 어휘력", "관계 이해", "분류 능력", "언어 감각"],
    strengths: ["언어 문제 해결", "의사소통", "독서 이해"],
    weaknesses: ["복잡한 다중 관계에서 어려움", "어휘 확장 필요"],
    tips: ["더 어려운 언어 퍼즐에 도전하세요", "다양한 분야의 책을 읽어보세요"],
  },
  C: {
    type: "C",
    title: "단어 논리력 탐구자",
    emoji: "📝",
    description: "기본적인 단어 논리력을 갖추고 있습니다. 간단한 관계는 잘 파악하지만, 복잡한 추론에서는 더 연습이 필요합니다.",
    traits: ["기본 어휘력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 관계 파악", "일상 대화", "단계적 학습"],
    weaknesses: ["복잡한 관계 어려움", "어휘 확장 필요"],
    tips: ["매일 새로운 단어를 배우세요", "유의어/반의어 사전을 활용해보세요"],
  },
  D: {
    type: "D",
    title: "단어 논리력 도전자",
    emoji: "🌱",
    description: "단어 논리력은 연습으로 크게 향상될 수 있습니다! 독서와 단어 게임으로 발전시켜 보세요.",
    traits: ["발전 가능성", "다른 강점 보유", "시각적 사고", "실용적"],
    strengths: ["비언어적 능력", "실용적 접근", "다양한 시도"],
    weaknesses: ["어휘력 개선 필요", "언어적 추론 연습 필요"],
    tips: ["단어 게임을 즐겨보세요", "쉬운 책부터 읽기를 시작하세요"],
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
