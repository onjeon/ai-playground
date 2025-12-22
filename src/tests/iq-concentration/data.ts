// 집중력 테스트

export const questions = [
  {
    id: 1,
    question: "다음 숫자 중 홀수의 개수는? 2, 5, 8, 3, 6, 7, 4, 9, 1, 10",
    options: [
      { text: "5개", type: "A" },
      { text: "4개", type: "B" },
      { text: "6개", type: "C" },
      { text: "3개", type: "D" },
    ],
  },
  {
    id: 2,
    question: "다음 문장에서 '가'가 몇 번 나오나요? '가나다라마바사아자차카타파하가나다'",
    options: [
      { text: "3번", type: "A" },
      { text: "2번", type: "B" },
      { text: "4번", type: "C" },
      { text: "1번", type: "D" },
    ],
  },
  {
    id: 3,
    question: "숫자 중 3의 배수는 몇 개? 12, 7, 15, 22, 9, 13, 21, 8, 18",
    options: [
      { text: "5개", type: "A" },
      { text: "4개", type: "B" },
      { text: "6개", type: "C" },
      { text: "3개", type: "D" },
    ],
  },
  {
    id: 4,
    question: "다음 중 대문자의 개수는? aAbBcCdDeEfFgGhH",
    options: [
      { text: "8개", type: "A" },
      { text: "7개", type: "B" },
      { text: "9개", type: "C" },
      { text: "6개", type: "D" },
    ],
  },
  {
    id: 5,
    question: "다음 도형 중 원의 개수는? ○△□○□△○○□△○",
    options: [
      { text: "5개", type: "A" },
      { text: "4개", type: "B" },
      { text: "6개", type: "C" },
      { text: "3개", type: "D" },
    ],
  },
  {
    id: 6,
    question: "다음 숫자열에서 연속으로 같은 숫자가 나오는 곳은? 1234455678899",
    options: [
      { text: "2곳", type: "A" },
      { text: "3곳", type: "B" },
      { text: "1곳", type: "C" },
      { text: "4곳", type: "D" },
    ],
  },
  {
    id: 7,
    question: "다음 단어 중 4글자 단어의 개수는? 사과, 포도, 바나나, 귤, 수박, 망고스틴",
    options: [
      { text: "1개", type: "A" },
      { text: "2개", type: "B" },
      { text: "0개", type: "C" },
      { text: "3개", type: "D" },
    ],
  },
  {
    id: 8,
    question: "다음 수열에서 10보다 크고 20보다 작은 수는 몇 개? 5, 12, 18, 3, 15, 22, 11, 8, 19, 25",
    options: [
      { text: "5개", type: "A" },
      { text: "4개", type: "B" },
      { text: "6개", type: "C" },
      { text: "3개", type: "D" },
    ],
  },
  {
    id: 9,
    question: "다음 중 모음(a,e,i,o,u)의 개수는? CONCENTRATION",
    options: [
      { text: "4개", type: "A" },
      { text: "3개", type: "B" },
      { text: "5개", type: "C" },
      { text: "2개", type: "D" },
    ],
  },
  {
    id: 10,
    question: "다음 숫자들의 합은? 3, 7, 2, 8, 5",
    options: [
      { text: "25", type: "A" },
      { text: "24", type: "B" },
      { text: "26", type: "C" },
      { text: "23", type: "D" },
    ],
  },
  {
    id: 11,
    question: "다음 기호 중 별(★)의 개수는? ★☆★☆★☆☆★★☆★",
    options: [
      { text: "6개", type: "A" },
      { text: "5개", type: "B" },
      { text: "7개", type: "C" },
      { text: "4개", type: "D" },
    ],
  },
  {
    id: 12,
    question: "다음 문장의 단어 수는? '오늘 날씨가 정말 좋습니다'",
    options: [
      { text: "4개", type: "A" },
      { text: "5개", type: "B" },
      { text: "3개", type: "C" },
      { text: "6개", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "집중력 천재",
    emoji: "🎯",
    description: "당신은 뛰어난 집중력을 가지고 있습니다! 세부 사항을 놓치지 않고 정확하게 파악하며, 산만한 환경에서도 집중을 유지합니다.",
    traits: ["탁월한 집중력", "세부 관찰력", "정확성", "지속력"],
    strengths: ["복잡한 작업 처리", "오류 발견", "품질 관리", "정밀 작업"],
    weaknesses: ["과도한 집중으로 피로", "큰 그림 놓칠 수 있음"],
    tips: ["정기적인 휴식으로 집중력을 유지하세요", "마인드풀니스를 연습해보세요"],
  },
  B: {
    type: "B",
    title: "집중력 전문가",
    emoji: "⭐",
    description: "집중력이 우수합니다. 대부분의 세부 사항을 잘 파악하며, 필요할 때 집중을 잘 유지합니다.",
    traits: ["우수한 집중력", "관찰력", "꼼꼼함", "효율성"],
    strengths: ["효율적인 작업", "오류 감소", "학습 능력"],
    weaknesses: ["장시간 집중 시 피로", "때때로 세부사항 놓침"],
    tips: ["포모도로 기법을 활용해보세요", "작업 환경을 정리해보세요"],
  },
  C: {
    type: "C",
    title: "집중력 탐구자",
    emoji: "📋",
    description: "기본적인 집중력을 갖추고 있습니다. 간단한 작업에는 잘 집중하지만, 복잡한 상황에서는 더 연습이 필요합니다.",
    traits: ["기본 집중력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["단순 작업 집중", "단계적 향상", "노력"],
    weaknesses: ["복잡한 작업에서 산만", "집중 지속 시간 개선 필요"],
    tips: ["산만한 요소를 제거하세요", "짧은 시간부터 집중 연습하세요"],
  },
  D: {
    type: "D",
    title: "집중력 도전자",
    emoji: "🌱",
    description: "집중력은 훈련으로 크게 향상될 수 있습니다! 체계적인 연습으로 발전시켜 보세요.",
    traits: ["발전 가능성", "다른 강점 보유", "창의적", "다재다능"],
    strengths: ["멀티태스킹", "창의적 발상", "유연한 사고"],
    weaknesses: ["세부 집중 연습 필요", "산만함 관리 필요"],
    tips: ["명상이나 마인드풀니스를 시작해보세요", "하나씩 천천히 집중 연습하세요"],
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
