export const questions = [
  {
    id: 1,
    question: "快速計算：15 + 27 = ?",
    options: [
      { text: "42", type: "A" },
      { text: "41", type: "B" },
      { text: "43", type: "C" },
      { text: "40", type: "D" },
    ],
  },
  {
    id: 2,
    question: "快速計算：8 × 7 = ?",
    options: [
      { text: "56", type: "A" },
      { text: "54", type: "B" },
      { text: "58", type: "C" },
      { text: "52", type: "D" },
    ],
  },
  {
    id: 3,
    question: "快速計算：100 - 37 = ?",
    options: [
      { text: "63", type: "A" },
      { text: "67", type: "B" },
      { text: "73", type: "C" },
      { text: "57", type: "D" },
    ],
  },
  {
    id: 4,
    question: "快速計算：144 ÷ 12 = ?",
    options: [
      { text: "12", type: "A" },
      { text: "11", type: "B" },
      { text: "13", type: "C" },
      { text: "14", type: "D" },
    ],
  },
  {
    id: 5,
    question: "快速計算：25 × 4 = ?",
    options: [
      { text: "100", type: "A" },
      { text: "90", type: "B" },
      { text: "110", type: "C" },
      { text: "80", type: "D" },
    ],
  },
  {
    id: 6,
    question: "快速計算：78 + 45 = ?",
    options: [
      { text: "123", type: "A" },
      { text: "113", type: "B" },
      { text: "133", type: "C" },
      { text: "121", type: "D" },
    ],
  },
  {
    id: 7,
    question: "快速計算：9 × 9 = ?",
    options: [
      { text: "81", type: "A" },
      { text: "72", type: "B" },
      { text: "89", type: "C" },
      { text: "79", type: "D" },
    ],
  },
  {
    id: 8,
    question: "快速計算：256 - 128 = ?",
    options: [
      { text: "128", type: "A" },
      { text: "138", type: "B" },
      { text: "118", type: "C" },
      { text: "132", type: "D" },
    ],
  },
  {
    id: 9,
    question: "快速計算：15 × 15 = ?",
    options: [
      { text: "225", type: "A" },
      { text: "215", type: "B" },
      { text: "235", type: "C" },
      { text: "220", type: "D" },
    ],
  },
  {
    id: 10,
    question: "快速計算：1000 ÷ 8 = ?",
    options: [
      { text: "125", type: "A" },
      { text: "120", type: "B" },
      { text: "130", type: "C" },
      { text: "115", type: "D" },
    ],
  },
  {
    id: 11,
    question: "快速計算：67 + 89 = ?",
    options: [
      { text: "156", type: "A" },
      { text: "146", type: "B" },
      { text: "166", type: "C" },
      { text: "154", type: "D" },
    ],
  },
  {
    id: 12,
    question: "快速計算：12 × 11 = ?",
    options: [
      { text: "132", type: "A" },
      { text: "122", type: "B" },
      { text: "142", type: "C" },
      { text: "121", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "心算高手",
    emoji: "⚡",
    description: "你的計算速度非常快！你能夠在短時間內準確完成各種數學運算，這種能力在日常生活和工作中都非常實用。你的數字敏感度很高。",
    traits: ["計算快速", "準確度高", "數字敏感"],
    strengths: ["心算能力", "數字處理", "快速反應"],
    weaknesses: ["可能過於依賴心算", "有時會因為太快而粗心"],
    tips: ["繼續練習保持速度", "也要注意準確性"],
  },
  B: {
    type: "B",
    title: "穩健計算者",
    emoji: "🧮",
    description: "你的計算能力不錯，雖然可能不是最快的，但你的準確度是可靠的。你傾向於確保答案正確而不是追求速度。",
    traits: ["穩定計算", "注重準確", "有條理"],
    strengths: ["準確度", "不易出錯", "穩定表現"],
    weaknesses: ["速度可再提升", "可能過於謹慎"],
    tips: ["練習加快計算速度", "學習一些速算技巧"],
  },
  C: {
    type: "C",
    title: "計算學習者",
    emoji: "📐",
    description: "你在心算方面還有提升空間。不過別擔心，計算能力是可以通過練習大幅提升的。現代生活中有計算機輔助，但基本心算能力仍然很有用。",
    traits: ["學習中", "有潛力", "需要練習"],
    strengths: ["有進步空間", "願意學習", "不自滿"],
    weaknesses: ["計算速度較慢", "可能容易出錯"],
    tips: ["多做計算練習", "學習基本的速算技巧"],
  },
  D: {
    type: "D",
    title: "數字探索者",
    emoji: "🔢",
    description: "計算可能不是你最擅長的領域，但每個人都有自己的強項。在這個有計算機的時代，你可以善用工具來輔助，同時慢慢提升基本計算能力。",
    traits: ["其他智能較強", "計算待加強", "使用工具"],
    strengths: ["可能在其他領域出色", "懂得使用工具", "不強求"],
    weaknesses: ["心算較弱", "數字處理較慢"],
    tips: ["從基本的加減法開始練習", "善用計算工具輔助"],
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
