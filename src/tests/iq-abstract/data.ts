// 추상적 사고력 테스트

export const questions = [
  {
    id: 1,
    question: "'자유'를 도형으로 표현한다면 가장 적절한 것은?",
    options: [
      { text: "열린 원 또는 나선형", type: "A" },
      { text: "정사각형", type: "D" },
      { text: "닫힌 삼각형", type: "C" },
      { text: "직선", type: "B" },
    ],
  },
  {
    id: 2,
    question: "'시간의 흐름'을 가장 잘 나타내는 이미지는?",
    options: [
      { text: "모래시계나 흐르는 강물", type: "A" },
      { text: "정지한 사진", type: "D" },
      { text: "벽돌담", type: "C" },
      { text: "돌멩이", type: "B" },
    ],
  },
  {
    id: 3,
    question: "A:B = 손:장갑 이면, C:D = 발:?",
    options: [
      { text: "양말/신발", type: "A" },
      { text: "다리", type: "C" },
      { text: "걷기", type: "D" },
      { text: "손가락", type: "B" },
    ],
  },
  {
    id: 4,
    question: "'변화'라는 개념을 색으로 표현한다면?",
    options: [
      { text: "그라데이션 또는 무지개", type: "A" },
      { text: "검은색", type: "D" },
      { text: "흰색", type: "C" },
      { text: "단색", type: "B" },
    ],
  },
  {
    id: 5,
    question: "책 : 지식 = 음악 : ?",
    options: [
      { text: "감정/영혼", type: "A" },
      { text: "악기", type: "C" },
      { text: "음표", type: "D" },
      { text: "소리", type: "B" },
    ],
  },
  {
    id: 6,
    question: "'성장'을 나타내는 가장 적절한 상징은?",
    options: [
      { text: "싹이 트는 씨앗", type: "A" },
      { text: "돌", type: "D" },
      { text: "얼음", type: "C" },
      { text: "물", type: "B" },
    ],
  },
  {
    id: 7,
    question: "다음 관계에서 공통점을 찾으세요: 나무-숲, 방울-폭포, 별-은하수",
    options: [
      { text: "부분과 전체의 관계", type: "A" },
      { text: "원인과 결과", type: "C" },
      { text: "관련 없음", type: "D" },
      { text: "반대 개념", type: "B" },
    ],
  },
  {
    id: 8,
    question: "'균형'을 가장 잘 표현하는 이미지는?",
    options: [
      { text: "저울 또는 시소", type: "A" },
      { text: "기울어진 탑", type: "C" },
      { text: "부서진 다리", type: "D" },
      { text: "폭풍", type: "B" },
    ],
  },
  {
    id: 9,
    question: "눈 : 보다 = 귀 : ?",
    options: [
      { text: "듣다", type: "A" },
      { text: "입", type: "C" },
      { text: "소리", type: "D" },
      { text: "코", type: "B" },
    ],
  },
  {
    id: 10,
    question: "'무한'을 나타내는 기호로 가장 적절한 것은?",
    options: [
      { text: "∞ 또는 원", type: "A" },
      { text: "직선", type: "C" },
      { text: "점", type: "D" },
      { text: "삼각형", type: "B" },
    ],
  },
  {
    id: 11,
    question: "사진 : 순간 = 영화 : ?",
    options: [
      { text: "이야기/시간의 흐름", type: "A" },
      { text: "배우", type: "C" },
      { text: "화면", type: "D" },
      { text: "카메라", type: "B" },
    ],
  },
  {
    id: 12,
    question: "'지혜'와 가장 연관되는 상징은?",
    options: [
      { text: "부엉이 또는 등불", type: "A" },
      { text: "무기", type: "D" },
      { text: "돈", type: "C" },
      { text: "힘", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "추상적 사고 천재",
    emoji: "🌌",
    description: "당신은 뛰어난 추상적 사고력을 가지고 있습니다! 개념과 개념 사이의 관계를 파악하고, 복잡한 아이디어를 이해하는 능력이 탁월합니다.",
    traits: ["개념적 사고", "상징 이해", "관계 파악", "메타 인지"],
    strengths: ["철학적 사고", "복잡한 개념 이해", "패턴 인식", "창의적 연결"],
    weaknesses: ["실용적 적용 어려움", "구체적 설명 필요"],
    tips: ["추상적 아이디어를 구체화하는 연습을 해보세요", "철학이나 예술을 탐구해보세요"],
  },
  B: {
    type: "B",
    title: "추상적 사고 전문가",
    emoji: "✨",
    description: "추상적 사고력이 우수합니다. 개념들 간의 관계를 잘 파악하고, 상징적 의미를 이해합니다.",
    traits: ["우수한 개념화", "관계 이해", "상징적 사고", "연결 능력"],
    strengths: ["개념 연결", "비유 이해", "패턴 파악"],
    weaknesses: ["복잡한 추상화에서 어려움", "더 깊은 사고 필요"],
    tips: ["더 복잡한 개념적 문제에 도전하세요", "다양한 분야의 지식을 연결해보세요"],
  },
  C: {
    type: "C",
    title: "추상적 사고 탐구자",
    emoji: "🔮",
    description: "기본적인 추상적 사고력을 갖추고 있습니다. 간단한 개념 관계는 이해하지만, 복잡한 추상화에서는 더 연습이 필요합니다.",
    traits: ["기본 추상화", "학습 의지", "발전 가능성", "구체적 사고"],
    strengths: ["구체적 이해", "단계적 학습", "실용적 접근"],
    weaknesses: ["복잡한 개념화 어려움", "추상적 사고 연습 필요"],
    tips: ["비유와 은유를 사용해보세요", "예술 작품의 의미를 생각해보세요"],
  },
  D: {
    type: "D",
    title: "추상적 사고 도전자",
    emoji: "🌱",
    description: "추상적 사고는 연습으로 발전할 수 있습니다! 다양한 관점에서 사물을 바라보는 연습을 해보세요.",
    traits: ["발전 가능성", "구체적 사고 선호", "실용적", "직접적"],
    strengths: ["실용적 판단", "구체적 문제 해결", "직접적 접근"],
    weaknesses: ["개념화 연습 필요", "상징적 사고 개선 필요"],
    tips: ["문학이나 시를 읽어보세요", "사물의 다양한 의미를 생각해보세요"],
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
