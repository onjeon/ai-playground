export const questions = [
  {
    id: 1,
    question: "完成序列：A, C, E, G, __",
    options: [
      { text: "I", type: "A" },
      { text: "H", type: "B" },
      { text: "J", type: "C" },
      { text: "K", type: "D" },
    ],
  },
  {
    id: 2,
    question: "完成序列：2, 6, 18, 54, __",
    options: [
      { text: "162", type: "A" },
      { text: "108", type: "B" },
      { text: "216", type: "C" },
      { text: "72", type: "D" },
    ],
  },
  {
    id: 3,
    question: "完成序列：星期一, 星期三, 星期五, __",
    options: [
      { text: "星期日", type: "A" },
      { text: "星期六", type: "B" },
      { text: "星期四", type: "C" },
      { text: "星期二", type: "D" },
    ],
  },
  {
    id: 4,
    question: "完成序列：1, 4, 9, 16, 25, __",
    options: [
      { text: "36", type: "A" },
      { text: "30", type: "B" },
      { text: "49", type: "C" },
      { text: "32", type: "D" },
    ],
  },
  {
    id: 5,
    question: "完成序列：Z, X, V, T, __",
    options: [
      { text: "R", type: "A" },
      { text: "S", type: "B" },
      { text: "Q", type: "C" },
      { text: "U", type: "D" },
    ],
  },
  {
    id: 6,
    question: "完成序列：○, ○○, ○○○, ○○○○, __",
    options: [
      { text: "○○○○○", type: "A" },
      { text: "○○○○○○", type: "B" },
      { text: "○○○", type: "C" },
      { text: "○○", type: "D" },
    ],
  },
  {
    id: 7,
    question: "完成序列：1, 1, 2, 6, 24, __",
    options: [
      { text: "120", type: "A" },
      { text: "48", type: "B" },
      { text: "100", type: "C" },
      { text: "72", type: "D" },
    ],
  },
  {
    id: 8,
    question: "完成序列：AB, CD, EF, GH, __",
    options: [
      { text: "IJ", type: "A" },
      { text: "HI", type: "B" },
      { text: "JK", type: "C" },
      { text: "KL", type: "D" },
    ],
  },
  {
    id: 9,
    question: "完成序列：3, 5, 9, 17, 33, __",
    options: [
      { text: "65", type: "A" },
      { text: "49", type: "B" },
      { text: "57", type: "C" },
      { text: "66", type: "D" },
    ],
  },
  {
    id: 10,
    question: "完成序列：春, 夏, 秋, 冬, __",
    options: [
      { text: "春", type: "A" },
      { text: "夏", type: "B" },
      { text: "秋", type: "C" },
      { text: "沒有下一個", type: "D" },
    ],
  },
  {
    id: 11,
    question: "完成序列：2, 3, 5, 8, 13, __",
    options: [
      { text: "21", type: "A" },
      { text: "18", type: "B" },
      { text: "20", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 12,
    question: "完成序列：1, 2, 4, 5, 7, 8, __",
    options: [
      { text: "10", type: "A" },
      { text: "9", type: "B" },
      { text: "11", type: "C" },
      { text: "12", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "順序推理高手",
    emoji: "🔗",
    description: "你對順序和規律有敏銳的洞察力！你能夠快速識別各種序列的模式，無論是數字、字母還是其他符號。這種能力對於學習和問題解決都非常有幫助。",
    traits: ["模式識別強", "邏輯思維佳", "預測能力好"],
    strengths: ["發現規律", "序列推理", "趨勢預測"],
    weaknesses: ["可能過於尋找規律", "有時會想太複雜"],
    tips: ["繼續挑戰更複雜的序列問題", "也要培養應對無規律情況的能力"],
  },
  B: {
    type: "B",
    title: "穩健推理者",
    emoji: "🧮",
    description: "你有良好的順序推理基礎，能夠處理大多數常見的序列問題。雖然有些複雜的模式可能需要多想一下，但你的基本能力是扎實的。",
    traits: ["基礎扎實", "穩定表現", "系統思考"],
    strengths: ["基本序列識別", "常見模式掌握", "耐心分析"],
    weaknesses: ["複雜序列較具挑戰", "可能需要更多時間"],
    tips: ["練習更多不同類型的序列題", "學習常見的數學序列公式"],
  },
  C: {
    type: "C",
    title: "直覺型推理者",
    emoji: "✨",
    description: "你在順序推理方面依賴直覺多於系統分析。有時候這會帶來驚喜，但在處理規律性問題時可能會遇到一些挑戰。",
    traits: ["直覺導向", "跳躍式思維", "創意解法"],
    strengths: ["快速判斷", "不拘泥於常規", "創新思維"],
    weaknesses: ["可能錯過隱藏規律", "系統分析較弱"],
    tips: ["學習分步驟分析序列的方法", "練習找出相鄰項之間的關係"],
  },
  D: {
    type: "D",
    title: "順序感發展中",
    emoji: "🌱",
    description: "順序推理可能不是你目前最熟悉的領域，但這是可以通過練習來提升的。關鍵是學會觀察相鄰元素之間的關係。",
    traits: ["學習中", "潛力待開發", "需要練習"],
    strengths: ["有成長空間", "不受固定思維限制", "開放學習"],
    weaknesses: ["規律識別較弱", "需要更多練習"],
    tips: ["從簡單的序列開始練習", "學習常見的序列類型（如等差、等比）"],
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
