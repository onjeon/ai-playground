// 공간 지각력 테스트

export const questions = [
  {
    id: 1,
    question: "정육면체를 펼쳤을 때 나올 수 있는 전개도의 개수는?",
    options: [
      { text: "6개", type: "C" },
      { text: "11개", type: "A" },
      { text: "8개", type: "B" },
      { text: "4개", type: "D" },
    ],
  },
  {
    id: 2,
    question: "거울에 비친 시계가 3시 30분을 가리키면, 실제 시간은?",
    options: [
      { text: "8시 30분", type: "A" },
      { text: "9시 30분", type: "B" },
      { text: "3시 30분", type: "D" },
      { text: "6시 30분", type: "C" },
    ],
  },
  {
    id: 3,
    question: "정사각형을 대각선으로 두 번 접으면 어떤 모양이 되나요?",
    options: [
      { text: "직사각형", type: "C" },
      { text: "삼각형", type: "A" },
      { text: "마름모", type: "B" },
      { text: "사다리꼴", type: "D" },
    ],
  },
  {
    id: 4,
    question: "종이를 반으로 접고 가운데를 잘라내면 펼쳤을 때 구멍이 몇 개?",
    options: [
      { text: "1개", type: "B" },
      { text: "2개", type: "A" },
      { text: "4개", type: "C" },
      { text: "구멍이 없음", type: "D" },
    ],
  },
  {
    id: 5,
    question: "북쪽을 바라보고 오른쪽으로 90도 회전 후, 왼쪽으로 180도 회전하면 어느 방향?",
    options: [
      { text: "서쪽", type: "A" },
      { text: "동쪽", type: "B" },
      { text: "남쪽", type: "C" },
      { text: "북쪽", type: "D" },
    ],
  },
  {
    id: 6,
    question: "블록 8개로 만든 2×2×2 정육면체에서 겉면에 보이는 면의 총 개수는?",
    options: [
      { text: "24개", type: "A" },
      { text: "48개", type: "C" },
      { text: "32개", type: "B" },
      { text: "16개", type: "D" },
    ],
  },
  {
    id: 7,
    question: "원기둥을 옆에서 보면 어떤 모양인가요?",
    options: [
      { text: "원", type: "C" },
      { text: "직사각형", type: "A" },
      { text: "삼각형", type: "D" },
      { text: "타원", type: "B" },
    ],
  },
  {
    id: 8,
    question: "'ㄱ' 모양의 도형을 시계 방향으로 90도 회전하면 어떤 모양?",
    options: [
      { text: "ㄴ 모양", type: "A" },
      { text: "ㄷ 모양", type: "C" },
      { text: "ㄹ 모양", type: "D" },
      { text: "원래 ㄱ 모양", type: "B" },
    ],
  },
  {
    id: 9,
    question: "정육면체의 한 꼭짓점에서 만나는 면의 개수는?",
    options: [
      { text: "2개", type: "C" },
      { text: "3개", type: "A" },
      { text: "4개", type: "B" },
      { text: "6개", type: "D" },
    ],
  },
  {
    id: 10,
    question: "원뿔을 위에서 바라보면 어떤 모양?",
    options: [
      { text: "삼각형", type: "B" },
      { text: "원", type: "A" },
      { text: "직사각형", type: "D" },
      { text: "반원", type: "C" },
    ],
  },
  {
    id: 11,
    question: "종이를 2번 반으로 접고 모서리를 자르면 펼쳤을 때 구멍 개수는?",
    options: [
      { text: "4개", type: "A" },
      { text: "2개", type: "B" },
      { text: "8개", type: "C" },
      { text: "1개", type: "D" },
    ],
  },
  {
    id: 12,
    question: "주사위에서 1의 반대편 면에 있는 숫자는? (표준 주사위)",
    options: [
      { text: "6", type: "A" },
      { text: "5", type: "B" },
      { text: "4", type: "C" },
      { text: "2", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "공간 지각 천재",
    emoji: "🎯",
    description: "당신은 뛰어난 공간 지각 능력을 가지고 있습니다! 3차원 물체의 회전, 전개, 투영을 머릿속으로 정확하게 시뮬레이션할 수 있습니다.",
    traits: ["3D 시각화 능력", "방향 감각", "도형 분석력", "공간 추론력"],
    strengths: ["건축/디자인 적성", "지도 읽기", "조립/조작 능력", "운전/주차 능력"],
    weaknesses: ["언어적 설명이 어려울 수 있음", "2D 표현에서 답답함"],
    tips: ["3D 모델링이나 건축 분야에 도전해보세요", "퍼즐 게임으로 능력을 유지하세요"],
  },
  B: {
    type: "B",
    title: "공간 지각 전문가",
    emoji: "🌟",
    description: "공간을 파악하는 능력이 우수합니다. 대부분의 공간 문제를 해결할 수 있으며, 방향 감각도 좋습니다.",
    traits: ["우수한 공간 감각", "도형 이해", "회전 시뮬레이션", "방향 파악"],
    strengths: ["공간 문제 해결", "물체 조작", "길 찾기"],
    weaknesses: ["복잡한 3D 문제에서 시간 소요", "정밀도 개선 필요"],
    tips: ["더 복잡한 퍼즐에 도전하세요", "VR/AR 콘텐츠를 경험해보세요"],
  },
  C: {
    type: "C",
    title: "공간 지각 탐구자",
    emoji: "📐",
    description: "기본적인 공간 감각이 있습니다. 단순한 공간 문제는 잘 해결하지만, 복잡한 회전이나 전개에서는 연습이 필요합니다.",
    traits: ["기본 공간 감각", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 도형 이해", "단계적 접근", "포기하지 않는 자세"],
    weaknesses: ["복잡한 회전 상상 어려움", "3D 시각화 연습 필요"],
    tips: ["블록 조립 게임을 해보세요", "종이접기나 퍼즐로 연습하세요"],
  },
  D: {
    type: "D",
    title: "공간 지각 도전자",
    emoji: "🌱",
    description: "공간 지각력은 연습으로 크게 향상될 수 있습니다! 기초부터 차근차근 연습하면 분명히 발전할 수 있습니다.",
    traits: ["발전 가능성", "다른 강점 보유", "노력형", "창의적 접근"],
    strengths: ["언어적 능력", "추상적 사고", "다양한 관점"],
    weaknesses: ["공간 시각화 연습 필요", "방향 감각 개선 필요"],
    tips: ["레고나 퍼즐로 시작하세요", "지도를 보며 길 찾기를 연습해보세요"],
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
