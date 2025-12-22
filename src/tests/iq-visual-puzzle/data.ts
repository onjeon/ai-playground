// 시각 퍼즐 IQ 테스트

export const questions = [
  {
    id: 1,
    question: "3x3 격자에서 대각선으로 같은 색이 되려면, 중앙에 무슨 색이 와야 할까요? (대각선: 빨강-?-빨강)",
    options: [
      { text: "빨강", type: "A" },
      { text: "파랑", type: "C" },
      { text: "노랑", type: "D" },
      { text: "초록", type: "B" },
    ],
  },
  {
    id: 2,
    question: "도형 규칙: ○△□ → △□○ → □○△ → ?",
    options: [
      { text: "○△□", type: "A" },
      { text: "△○□", type: "C" },
      { text: "□△○", type: "D" },
      { text: "○□△", type: "B" },
    ],
  },
  {
    id: 3,
    question: "퍼즐 조각이 4개 있습니다. 정사각형을 완성하려면 몇 개가 더 필요할까요? (각 조각은 1/4 정사각형)",
    options: [
      { text: "0개 (이미 완성 가능)", type: "A" },
      { text: "2개", type: "C" },
      { text: "4개", type: "D" },
      { text: "1개", type: "B" },
    ],
  },
  {
    id: 4,
    question: "회색 배경에 검은 원이 3개 있습니다. 원 안에 흰 점이 있는 원의 개수가 2개라면, 흰 점이 없는 원은?",
    options: [
      { text: "1개", type: "A" },
      { text: "2개", type: "C" },
      { text: "3개", type: "D" },
      { text: "0개", type: "B" },
    ],
  },
  {
    id: 5,
    question: "패턴: 작은 원 → 중간 원 → 큰 원 → 가장 큰 원. 다음 패턴에서 원의 크기는?",
    options: [
      { text: "다시 작은 원 (반복)", type: "A" },
      { text: "크기 유지", type: "C" },
      { text: "사라짐", type: "D" },
      { text: "더 큰 원", type: "B" },
    ],
  },
  {
    id: 6,
    question: "4칸 막대를 90도씩 회전시키면 4번째 모양은?",
    options: [
      { text: "원래 모양과 같음", type: "A" },
      { text: "거꾸로", type: "C" },
      { text: "사라짐", type: "D" },
      { text: "180도 회전 모양", type: "B" },
    ],
  },
  {
    id: 7,
    question: "2x2 격자에 각각 다른 색이 있습니다. 대각선으로 색을 바꾸면 변하는 칸의 수는?",
    options: [
      { text: "4칸 모두", type: "A" },
      { text: "2칸", type: "B" },
      { text: "1칸", type: "C" },
      { text: "0칸", type: "D" },
    ],
  },
  {
    id: 8,
    question: "겹쳐진 두 원에서 공통 영역의 모양은?",
    options: [
      { text: "렌즈 모양 (양쪽이 볼록)", type: "A" },
      { text: "원", type: "C" },
      { text: "정사각형", type: "D" },
      { text: "삼각형", type: "B" },
    ],
  },
  {
    id: 9,
    question: "점 4개로 정사각형을 만들 수 있습니다. 점 1개를 추가해서 정사각형 2개를 만들려면?",
    options: [
      { text: "가운데에 점 추가", type: "A" },
      { text: "불가능", type: "D" },
      { text: "멀리에 점 추가", type: "C" },
      { text: "대각선에 점 추가", type: "B" },
    ],
  },
  {
    id: 10,
    question: "도형 패턴: ★☆★ → ☆★☆ → ★☆★ → ?",
    options: [
      { text: "☆★☆", type: "A" },
      { text: "★★★", type: "C" },
      { text: "☆☆☆", type: "D" },
      { text: "★☆★", type: "B" },
    ],
  },
  {
    id: 11,
    question: "정육각형의 꼭짓점을 이어 삼각형을 만들 때, 최대 몇 개의 삼각형이 가능할까요?",
    options: [
      { text: "20개", type: "A" },
      { text: "6개", type: "C" },
      { text: "10개", type: "B" },
      { text: "4개", type: "D" },
    ],
  },
  {
    id: 12,
    question: "색칠된 영역 패턴: 1/4 → 2/4 → 3/4 → ?",
    options: [
      { text: "4/4 (전체 색칠)", type: "A" },
      { text: "1/4로 돌아감", type: "B" },
      { text: "0 (색칠 없음)", type: "C" },
      { text: "5/4", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "시각 퍼즐 천재",
    emoji: "🧩",
    description: "당신은 뛰어난 시각적 문제 해결 능력을 가지고 있습니다! 복잡한 시각 패턴을 빠르게 파악하고, 공간적 관계를 정확하게 이해합니다.",
    traits: ["시각적 분석력", "패턴 인식", "공간 지각", "도형 추론"],
    strengths: ["퍼즐 해결", "디자인 감각", "지도/설계도 이해", "시각 예술"],
    weaknesses: ["언어적 설명 어려움", "추상적 개념화"],
    tips: ["더 복잡한 퍼즐에 도전하세요", "3D 퍼즐이나 루빅스 큐브를 시도해보세요"],
  },
  B: {
    type: "B",
    title: "시각 퍼즐 전문가",
    emoji: "⭐",
    description: "시각 퍼즐 해결 능력이 우수합니다. 대부분의 시각적 패턴을 파악하고 논리적으로 해결합니다.",
    traits: ["우수한 시각 분석", "패턴 감각", "도형 이해", "공간 추론"],
    strengths: ["퍼즐 풀기", "시각 자료 이해", "도형 조작"],
    weaknesses: ["복잡한 3D 문제에서 어려움", "정밀도 개선 필요"],
    tips: ["다양한 종류의 퍼즐을 시도하세요", "시각적 사고를 언어로 표현해보세요"],
  },
  C: {
    type: "C",
    title: "시각 퍼즐 탐구자",
    emoji: "🔍",
    description: "기본적인 시각 퍼즐 능력을 갖추고 있습니다. 간단한 패턴은 잘 파악하지만, 복잡한 퍼즐에서는 더 연습이 필요합니다.",
    traits: ["기본 시각 분석", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 패턴 인식", "단계적 접근", "노력"],
    weaknesses: ["복잡한 시각 문제 어려움", "패턴 연습 필요"],
    tips: ["쉬운 퍼즐부터 시작하세요", "매일 퍼즐 게임을 해보세요"],
  },
  D: {
    type: "D",
    title: "시각 퍼즐 도전자",
    emoji: "🌱",
    description: "시각 퍼즐 능력은 연습으로 크게 향상될 수 있습니다! 다양한 퍼즐을 경험해보세요.",
    traits: ["발전 가능성", "다른 강점 보유", "언어적 사고", "논리적"],
    strengths: ["언어적 문제 해결", "논리적 접근", "다양한 시도"],
    weaknesses: ["시각적 분석 연습 필요", "공간 지각 개선 필요"],
    tips: ["간단한 퍼즐 게임으로 시작하세요", "그림 찾기 게임을 해보세요"],
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
