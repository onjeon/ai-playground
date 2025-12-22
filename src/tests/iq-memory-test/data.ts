// 기억력 테스트

export const questions = [
  {
    id: 1,
    question: "다음 숫자를 순서대로 기억하세요: 7, 3, 9, 2, 5. 세 번째 숫자는?",
    options: [
      { text: "9", type: "A" },
      { text: "3", type: "B" },
      { text: "2", type: "C" },
      { text: "5", type: "D" },
    ],
  },
  {
    id: 2,
    question: "다음 단어들을 기억하세요: 사과, 책상, 연필, 강아지, 시계. 동물은 무엇이었나요?",
    options: [
      { text: "강아지", type: "A" },
      { text: "고양이", type: "C" },
      { text: "토끼", type: "D" },
      { text: "없었다", type: "B" },
    ],
  },
  {
    id: 3,
    question: "알파벳 순서: A, C, E, G, I. 네 번째 알파벳은?",
    options: [
      { text: "G", type: "A" },
      { text: "E", type: "B" },
      { text: "I", type: "C" },
      { text: "C", type: "D" },
    ],
  },
  {
    id: 4,
    question: "색깔 순서를 기억하세요: 빨강, 파랑, 노랑, 초록, 보라. 파랑 다음 색깔은?",
    options: [
      { text: "노랑", type: "A" },
      { text: "초록", type: "B" },
      { text: "빨강", type: "C" },
      { text: "보라", type: "D" },
    ],
  },
  {
    id: 5,
    question: "숫자 순서: 15, 28, 41, 17, 33. 가장 큰 숫자는?",
    options: [
      { text: "41", type: "A" },
      { text: "33", type: "B" },
      { text: "28", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 6,
    question: "이름을 기억하세요: 김철수, 이영희, 박민준, 최수아. 성이 '박'인 사람은?",
    options: [
      { text: "민준", type: "A" },
      { text: "철수", type: "C" },
      { text: "영희", type: "D" },
      { text: "수아", type: "B" },
    ],
  },
  {
    id: 7,
    question: "요일 순서: 월, 수, 금, 일. 빠진 요일 중 하나는?",
    options: [
      { text: "화요일", type: "A" },
      { text: "월요일", type: "C" },
      { text: "금요일", type: "D" },
      { text: "일요일", type: "B" },
    ],
  },
  {
    id: 8,
    question: "다음 숫자의 합을 기억하세요: 4 + 7 + 3 = ?",
    options: [
      { text: "14", type: "A" },
      { text: "13", type: "B" },
      { text: "15", type: "C" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 9,
    question: "과일 목록: 사과, 바나나, 포도, 수박, 딸기. 첫 번째와 마지막 과일은?",
    options: [
      { text: "사과와 딸기", type: "A" },
      { text: "사과와 수박", type: "B" },
      { text: "바나나와 딸기", type: "C" },
      { text: "포도와 수박", type: "D" },
    ],
  },
  {
    id: 10,
    question: "전화번호 앞자리를 기억하세요: 010-3456-????. 앞 4자리 숫자의 합은?",
    options: [
      { text: "18", type: "A" },
      { text: "14", type: "B" },
      { text: "16", type: "C" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 11,
    question: "물건 위치: 열쇠는 서랍, 지갑은 가방, 휴대폰은 책상. 지갑은 어디에?",
    options: [
      { text: "가방", type: "A" },
      { text: "서랍", type: "B" },
      { text: "책상", type: "C" },
      { text: "주머니", type: "D" },
    ],
  },
  {
    id: 12,
    question: "순서를 기억하세요: 북, 동, 남, 서. 두 번째 방향은?",
    options: [
      { text: "동", type: "A" },
      { text: "남", type: "B" },
      { text: "서", type: "C" },
      { text: "북", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "기억력 천재",
    emoji: "🧠",
    description: "당신은 뛰어난 기억력을 가지고 있습니다! 정보를 빠르게 저장하고 정확하게 회상할 수 있습니다.",
    traits: ["단기 기억력 우수", "패턴 인식", "정보 처리 속도", "집중력"],
    strengths: ["학습 능력", "암기력", "디테일 기억", "순서 기억"],
    weaknesses: ["과부하 시 혼란", "장기 기억 전환 필요"],
    tips: ["기억술을 배워 능력을 더 발전시키세요", "정기적인 복습으로 장기 기억화하세요"],
  },
  B: {
    type: "B",
    title: "기억력 전문가",
    emoji: "⭐",
    description: "기억력이 우수합니다. 대부분의 정보를 잘 기억하며, 중요한 것과 아닌 것을 구분해서 기억합니다.",
    traits: ["우수한 기억력", "선택적 기억", "정보 조직화", "회상 능력"],
    strengths: ["효율적 기억", "핵심 정보 파악", "학습 효율"],
    weaknesses: ["세부사항 놓칠 수 있음", "스트레스 시 기억력 저하"],
    tips: ["마인드맵을 활용해보세요", "연상 기억법을 연습해보세요"],
  },
  C: {
    type: "C",
    title: "기억력 탐구자",
    emoji: "📝",
    description: "기본적인 기억력을 갖추고 있습니다. 간단한 정보는 잘 기억하지만, 복잡한 정보는 더 연습이 필요합니다.",
    traits: ["기본 기억력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["핵심 기억", "단계적 학습", "반복 학습"],
    weaknesses: ["복잡한 정보 기억 어려움", "집중력 향상 필요"],
    tips: ["반복 학습을 활용하세요", "청킹(chunking) 기법을 배워보세요"],
  },
  D: {
    type: "D",
    title: "기억력 도전자",
    emoji: "🌱",
    description: "기억력은 훈련으로 크게 향상될 수 있습니다! 체계적인 연습으로 발전시켜 보세요.",
    traits: ["발전 가능성", "다른 강점 보유", "노력형", "창의적"],
    strengths: ["창의적 사고", "큰 그림 파악", "이해 중심 학습"],
    weaknesses: ["세부 기억 연습 필요", "집중력 훈련 필요"],
    tips: ["기억력 게임을 해보세요", "충분한 수면으로 기억력을 개선하세요"],
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
