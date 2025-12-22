// 유동성 지능 테스트

export const questions = [
  {
    id: 1,
    question: "처음 보는 기계의 작동법을 알아내야 합니다. 어떻게 하시겠습니까?",
    options: [
      { text: "버튼과 레버를 체계적으로 시험해보며 패턴 파악", type: "A" },
      { text: "설명서를 찾음", type: "C" },
      { text: "포기함", type: "D" },
      { text: "무작위로 눌러봄", type: "B" },
    ],
  },
  {
    id: 2,
    question: "새로운 보드게임 규칙을 배울 때 당신의 방식은?",
    options: [
      { text: "핵심 원리를 파악하고 나머지는 게임하며 이해", type: "A" },
      { text: "규칙서를 처음부터 끝까지 읽음", type: "B" },
      { text: "다른 사람이 하는 것을 보고 따라함", type: "C" },
      { text: "게임을 안 함", type: "D" },
    ],
  },
  {
    id: 3,
    question: "완전히 새로운 문제 상황에서 당신은?",
    options: [
      { text: "기존 지식을 응용하여 새로운 해결책 시도", type: "A" },
      { text: "비슷한 사례를 검색", type: "B" },
      { text: "전문가에게 물어봄", type: "C" },
      { text: "회피함", type: "D" },
    ],
  },
  {
    id: 4,
    question: "복잡한 퍼즐을 풀 때 당신의 전략은?",
    options: [
      { text: "전체 구조를 파악하고 패턴을 찾아 접근", type: "A" },
      { text: "힌트를 찾음", type: "C" },
      { text: "포기하고 답을 봄", type: "D" },
      { text: "무작위로 시도", type: "B" },
    ],
  },
  {
    id: 5,
    question: "익숙하지 않은 외국 도시에서 길을 찾아야 한다면?",
    options: [
      { text: "주변 환경의 패턴을 관찰하고 논리적으로 추론", type: "A" },
      { text: "무조건 GPS 사용", type: "C" },
      { text: "택시를 탐", type: "D" },
      { text: "아무 방향으로 걸음", type: "B" },
    ],
  },
  {
    id: 6,
    question: "새로운 소프트웨어를 처음 사용할 때?",
    options: [
      { text: "인터페이스를 탐색하며 기능을 추론", type: "A" },
      { text: "튜토리얼을 끝까지 봄", type: "B" },
      { text: "누군가에게 배움", type: "C" },
      { text: "사용하지 않음", type: "D" },
    ],
  },
  {
    id: 7,
    question: "예상치 못한 장애물을 만났을 때?",
    options: [
      { text: "상황을 분석하고 즉석에서 대안을 만들어냄", type: "A" },
      { text: "기존 계획을 고수", type: "C" },
      { text: "다른 사람에게 해결을 맡김", type: "D" },
      { text: "잠시 기다림", type: "B" },
    ],
  },
  {
    id: 8,
    question: "암호나 코드를 해독해야 할 때?",
    options: [
      { text: "패턴과 규칙성을 찾아 논리적으로 추론", type: "A" },
      { text: "모든 조합을 시도", type: "B" },
      { text: "포기함", type: "D" },
      { text: "힌트를 찾음", type: "C" },
    ],
  },
  {
    id: 9,
    question: "새로운 개념을 배울 때 가장 효과적인 방법은?",
    options: [
      { text: "핵심 원리를 이해하고 다른 것에 적용해봄", type: "A" },
      { text: "반복 암기", type: "C" },
      { text: "예시만 외움", type: "D" },
      { text: "책을 읽음", type: "B" },
    ],
  },
  {
    id: 10,
    question: "두 가지 전혀 다른 분야를 연결해야 할 때?",
    options: [
      { text: "공통점과 원리를 찾아 창의적으로 연결", type: "A" },
      { text: "불가능하다고 판단", type: "D" },
      { text: "전문가에게 물어봄", type: "C" },
      { text: "한 분야만 집중", type: "B" },
    ],
  },
  {
    id: 11,
    question: "규칙이 명확하지 않은 상황에서?",
    options: [
      { text: "관찰과 실험을 통해 규칙을 스스로 발견", type: "A" },
      { text: "규칙을 물어봄", type: "C" },
      { text: "참여하지 않음", type: "D" },
      { text: "다른 사람을 따라함", type: "B" },
    ],
  },
  {
    id: 12,
    question: "빠르게 변화하는 상황에서 의사결정을 해야 할 때?",
    options: [
      { text: "핵심 정보를 빠르게 파악하고 적응적으로 결정", type: "A" },
      { text: "충분한 정보가 모일 때까지 기다림", type: "B" },
      { text: "다른 사람의 결정을 따름", type: "C" },
      { text: "결정을 회피", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "유동성 지능 천재",
    emoji: "🧠",
    description: "당신은 뛰어난 유동성 지능을 가지고 있습니다! 새로운 상황에서 빠르게 적응하고, 기존 지식 없이도 문제를 해결하는 능력이 탁월합니다.",
    traits: ["적응력", "패턴 인식", "추론 능력", "문제 해결력"],
    strengths: ["새로운 상황 대처", "창의적 문제 해결", "빠른 학습", "혁신"],
    weaknesses: ["때때로 기존 지식 무시", "검증 없이 진행"],
    tips: ["결정화된 지능(지식)도 함께 발전시키세요", "실패에서 배우는 습관을 유지하세요"],
  },
  B: {
    type: "B",
    title: "유동성 지능 전문가",
    emoji: "⭐",
    description: "유동성 지능이 우수합니다. 새로운 상황에서도 잘 적응하며, 문제를 창의적으로 해결합니다.",
    traits: ["우수한 적응력", "추론 능력", "학습 속도", "유연성"],
    strengths: ["새로운 것 학습", "상황 대처", "문제 해결"],
    weaknesses: ["체계적 접근 필요", "지식 축적과 균형"],
    tips: ["더 도전적인 상황에 자신을 노출시키세요", "다양한 분야를 경험해보세요"],
  },
  C: {
    type: "C",
    title: "유동성 지능 탐구자",
    emoji: "📚",
    description: "기본적인 유동성 지능을 갖추고 있습니다. 익숙한 상황에서는 잘 대처하지만, 완전히 새로운 상황에서는 더 자신감이 필요합니다.",
    traits: ["기본 적응력", "학습 의지", "발전 가능성", "신중함"],
    strengths: ["안정적인 접근", "지식 활용", "협력적 해결"],
    weaknesses: ["새로운 상황에서 불안", "독립적 해결 연습 필요"],
    tips: ["작은 도전부터 시작하세요", "실패를 두려워하지 마세요"],
  },
  D: {
    type: "D",
    title: "유동성 지능 도전자",
    emoji: "🌱",
    description: "유동성 지능은 훈련으로 향상될 수 있습니다! 새로운 경험과 도전을 통해 발전시켜 보세요.",
    traits: ["발전 가능성", "안정 선호", "전문성", "신중함"],
    strengths: ["전문 지식", "신중한 판단", "안정적 수행"],
    weaknesses: ["새로운 상황 적응 연습 필요", "유연성 개선 필요"],
    tips: ["퍼즐이나 새로운 게임을 해보세요", "익숙하지 않은 것에 도전하세요"],
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
