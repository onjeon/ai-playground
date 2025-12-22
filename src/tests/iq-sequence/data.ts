// 순서 추론 테스트

export const questions = [
  {
    id: 1,
    question: "A → B → C → D → ? 다음에 올 알파벳은?",
    options: [
      { text: "E", type: "A" },
      { text: "F", type: "B" },
      { text: "A", type: "C" },
      { text: "Z", type: "D" },
    ],
  },
  {
    id: 2,
    question: "월 → 화 → 수 → ? 다음에 올 요일은?",
    options: [
      { text: "목", type: "A" },
      { text: "금", type: "B" },
      { text: "월", type: "C" },
      { text: "일", type: "D" },
    ],
  },
  {
    id: 3,
    question: "봄 → 여름 → 가을 → ? 다음은?",
    options: [
      { text: "겨울", type: "A" },
      { text: "봄", type: "B" },
      { text: "여름", type: "C" },
      { text: "가을", type: "D" },
    ],
  },
  {
    id: 4,
    question: "1위 → 2위 → 3위 순서로 경기가 끝났다면, 가장 빠른 사람은?",
    options: [
      { text: "1위", type: "A" },
      { text: "3위", type: "C" },
      { text: "2위", type: "B" },
      { text: "알 수 없음", type: "D" },
    ],
  },
  {
    id: 5,
    question: "A가 B보다 먼저 오고, C가 B보다 나중에 온다면, 순서는?",
    options: [
      { text: "A → B → C", type: "A" },
      { text: "B → A → C", type: "C" },
      { text: "C → A → B", type: "D" },
      { text: "A → C → B", type: "B" },
    ],
  },
  {
    id: 6,
    question: "빨강 → 주황 → 노랑 → 초록 → ? (무지개 순서)",
    options: [
      { text: "파랑", type: "A" },
      { text: "남색", type: "B" },
      { text: "보라", type: "C" },
      { text: "빨강", type: "D" },
    ],
  },
  {
    id: 7,
    question: "1학년 → 2학년 → 3학년 → 4학년 → 5학년 → ? (초등학교)",
    options: [
      { text: "6학년", type: "A" },
      { text: "중학교 1학년", type: "B" },
      { text: "7학년", type: "C" },
      { text: "졸업", type: "D" },
    ],
  },
  {
    id: 8,
    question: "씨앗 → 싹 → 잎 → 꽃 → ?",
    options: [
      { text: "열매", type: "A" },
      { text: "나무", type: "B" },
      { text: "씨앗", type: "C" },
      { text: "뿌리", type: "D" },
    ],
  },
  {
    id: 9,
    question: "아침 → 점심 → 저녁 → ? 다음은?",
    options: [
      { text: "밤/야식", type: "A" },
      { text: "아침", type: "B" },
      { text: "점심", type: "C" },
      { text: "새벽", type: "D" },
    ],
  },
  {
    id: 10,
    question: "10 → 20 → 30 → 40 → ? 다음 숫자는?",
    options: [
      { text: "50", type: "A" },
      { text: "45", type: "B" },
      { text: "60", type: "C" },
      { text: "100", type: "D" },
    ],
  },
  {
    id: 11,
    question: "영희가 철수보다 앞에 있고, 민수가 영희보다 앞에 있다면, 맨 뒤에 있는 사람은?",
    options: [
      { text: "철수", type: "A" },
      { text: "영희", type: "B" },
      { text: "민수", type: "C" },
      { text: "알 수 없음", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Z → Y → X → W → ? (역순 알파벳)",
    options: [
      { text: "V", type: "A" },
      { text: "U", type: "B" },
      { text: "T", type: "C" },
      { text: "A", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "순서 추론 천재",
    emoji: "📋",
    description: "당신은 뛰어난 순서 추론 능력을 가지고 있습니다! 논리적 순서를 빠르게 파악하고, 다음에 올 것을 정확하게 예측합니다.",
    traits: ["논리적 순서 파악", "패턴 인식", "예측력", "체계적 사고"],
    strengths: ["계획 수립", "일정 관리", "프로세스 설계", "논리적 정리"],
    weaknesses: ["비선형적 사고 어려움", "예외 상황 처리"],
    tips: ["복잡한 순서 문제에도 도전해보세요", "마인드맵으로 사고를 확장해보세요"],
  },
  B: {
    type: "B",
    title: "순서 추론 전문가",
    emoji: "⭐",
    description: "순서 추론 능력이 우수합니다. 대부분의 순서를 정확하게 파악하며, 논리적으로 사고합니다.",
    traits: ["우수한 순서 감각", "논리적 판단", "체계적 접근", "예측 능력"],
    strengths: ["일상 순서 파악", "계획 능력", "단계적 사고"],
    weaknesses: ["복잡한 다중 조건에서 혼란", "예외 처리 개선 필요"],
    tips: ["더 복잡한 순서 문제에 도전하세요", "다중 조건 문제를 연습해보세요"],
  },
  C: {
    type: "C",
    title: "순서 추론 탐구자",
    emoji: "📝",
    description: "기본적인 순서 추론 능력을 갖추고 있습니다. 간단한 순서는 잘 파악하지만, 복잡한 조건에서는 더 연습이 필요합니다.",
    traits: ["기본 순서 감각", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 순서 파악", "단계적 학습", "포기하지 않는 자세"],
    weaknesses: ["복잡한 순서 어려움", "다중 조건 처리 연습 필요"],
    tips: ["간단한 순서 문제부터 연습하세요", "생활 속 순서를 의식해보세요"],
  },
  D: {
    type: "D",
    title: "순서 추론 도전자",
    emoji: "🌱",
    description: "순서 추론은 연습으로 크게 향상될 수 있습니다! 일상에서 순서를 의식하며 연습해보세요.",
    traits: ["발전 가능성", "창의적 사고", "직관적", "다른 강점 보유"],
    strengths: ["비선형적 사고", "창의적 접근", "유연함"],
    weaknesses: ["논리적 순서 연습 필요", "체계적 사고 개선 필요"],
    tips: ["일정표를 만들어보세요", "요리 레시피 순서를 따라해보세요"],
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
