// 심적 회전 능력 테스트

export const questions = [
  {
    id: 1,
    question: "'ㄱ' 모양을 시계 방향으로 90도 회전하면?",
    options: [
      { text: "ㄴ 모양 (가로 위, 세로 아래)", type: "A" },
      { text: "ㄷ 모양", type: "C" },
      { text: "원래 ㄱ 모양", type: "D" },
      { text: "거꾸로 ㄱ", type: "B" },
    ],
  },
  {
    id: 2,
    question: "정사각형을 180도 회전하면 어떻게 되나요?",
    options: [
      { text: "똑같은 정사각형", type: "A" },
      { text: "마름모", type: "C" },
      { text: "직사각형", type: "D" },
      { text: "삼각형", type: "B" },
    ],
  },
  {
    id: 3,
    question: "화살표 → 를 반시계 방향으로 90도 회전하면?",
    options: [
      { text: "↑ (위쪽)", type: "A" },
      { text: "↓ (아래쪽)", type: "B" },
      { text: "← (왼쪽)", type: "C" },
      { text: "→ (그대로)", type: "D" },
    ],
  },
  {
    id: 4,
    question: "글자 'N'을 180도 회전하면?",
    options: [
      { text: "N (비슷하게 보임)", type: "A" },
      { text: "Z", type: "C" },
      { text: "W", type: "D" },
      { text: "M", type: "B" },
    ],
  },
  {
    id: 5,
    question: "L자 모양 블록을 시계 방향으로 270도 회전하면?",
    options: [
      { text: "반시계 90도와 같은 결과", type: "A" },
      { text: "원래 모양", type: "C" },
      { text: "180도 회전과 같음", type: "D" },
      { text: "뒤집힌 L", type: "B" },
    ],
  },
  {
    id: 6,
    question: "숫자 '6'을 180도 회전하면 어떤 숫자처럼 보이나요?",
    options: [
      { text: "9", type: "A" },
      { text: "8", type: "C" },
      { text: "0", type: "D" },
      { text: "6", type: "B" },
    ],
  },
  {
    id: 7,
    question: "삼각형 △를 180도 회전하면?",
    options: [
      { text: "▽ (역삼각형)", type: "A" },
      { text: "◇ (마름모)", type: "C" },
      { text: "□ (사각형)", type: "D" },
      { text: "△ (그대로)", type: "B" },
    ],
  },
  {
    id: 8,
    question: "글자 'E'를 시계 방향으로 90도 회전하면?",
    options: [
      { text: "빗 모양 (세로줄 위, 가로줄 오른쪽)", type: "A" },
      { text: "W", type: "C" },
      { text: "3", type: "D" },
      { text: "M", type: "B" },
    ],
  },
  {
    id: 9,
    question: "주사위 1면이 위를 향할 때, 시계 방향으로 한 번 굴리면 위에 오는 면은? (마주보는 면의 합은 7)",
    options: [
      { text: "2, 3, 4, 또는 5 중 하나", type: "A" },
      { text: "반드시 6", type: "C" },
      { text: "반드시 1", type: "D" },
      { text: "항상 같은 숫자", type: "B" },
    ],
  },
  {
    id: 10,
    question: "십자가 + 모양을 45도 회전하면?",
    options: [
      { text: "X 모양", type: "A" },
      { text: "T 모양", type: "C" },
      { text: "I 모양", type: "D" },
      { text: "그대로 +", type: "B" },
    ],
  },
  {
    id: 11,
    question: "글자 'b'를 좌우로 뒤집으면?",
    options: [
      { text: "d", type: "A" },
      { text: "p", type: "B" },
      { text: "q", type: "C" },
      { text: "b", type: "D" },
    ],
  },
  {
    id: 12,
    question: "정육면체의 한 면에 점이 찍혀있습니다. 정육면체를 앞으로 한 번 굴리면 점은?",
    options: [
      { text: "앞면에서 아래면으로 이동", type: "A" },
      { text: "그대로 앞면", type: "C" },
      { text: "사라짐", type: "D" },
      { text: "뒷면으로 이동", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "심적 회전 천재",
    emoji: "🔄",
    description: "당신은 뛰어난 심적 회전 능력을 가지고 있습니다! 물체를 머릿속에서 자유롭게 회전시키고 결과를 정확하게 예측합니다.",
    traits: ["3D 시각화", "공간 조작", "회전 예측", "공간 지각"],
    strengths: ["건축/디자인", "공학", "조립/제작", "게임/스포츠"],
    weaknesses: ["언어적 설명 어려움", "2D 표현의 한계"],
    tips: ["3D 모델링 소프트웨어를 배워보세요", "퍼즐이나 루빅스 큐브로 능력을 유지하세요"],
  },
  B: {
    type: "B",
    title: "심적 회전 전문가",
    emoji: "⭐",
    description: "심적 회전 능력이 우수합니다. 대부분의 회전 문제를 정확하게 해결하며, 공간 감각이 발달했습니다.",
    traits: ["우수한 회전 감각", "공간 이해", "시각화 능력", "예측력"],
    strengths: ["공간 문제 해결", "조립/설계", "방향 감각"],
    weaknesses: ["복잡한 3D 회전에서 시간 소요", "정밀도 개선 필요"],
    tips: ["더 복잡한 공간 퍼즐에 도전하세요", "실제 물체를 회전시키며 확인해보세요"],
  },
  C: {
    type: "C",
    title: "심적 회전 탐구자",
    emoji: "🎲",
    description: "기본적인 심적 회전 능력을 갖추고 있습니다. 간단한 회전은 잘 상상하지만, 복잡한 회전에서는 더 연습이 필요합니다.",
    traits: ["기본 공간 감각", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 회전 이해", "단계적 접근", "노력"],
    weaknesses: ["복잡한 회전 어려움", "공간 시각화 연습 필요"],
    tips: ["블록 조립으로 연습해보세요", "물체를 직접 회전시키며 관찰하세요"],
  },
  D: {
    type: "D",
    title: "심적 회전 도전자",
    emoji: "🌱",
    description: "심적 회전 능력은 연습으로 크게 향상될 수 있습니다! 다양한 공간 퍼즐로 훈련해보세요.",
    traits: ["발전 가능성", "언어적 사고", "다른 강점 보유", "노력형"],
    strengths: ["언어적 문제 해결", "논리적 사고", "다양한 접근"],
    weaknesses: ["공간 시각화 연습 필요", "회전 상상 개선 필요"],
    tips: ["간단한 도형부터 회전 연습하세요", "테트리스 같은 게임을 해보세요"],
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
