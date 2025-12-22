export const questions = [
  {
    id: 1,
    question: "在以下數字中找出所有的「7」：3 7 2 9 7 1 4 7 8 6 7 5。有幾個7？",
    options: [
      { text: "3個", type: "B" },
      { text: "4個", type: "A" },
      { text: "5個", type: "C" },
      { text: "2個", type: "D" },
    ],
  },
  {
    id: 2,
    question: "以下哪個字母沒有出現在「CONCENTRATION」這個單字中？",
    options: [
      { text: "S", type: "A" },
      { text: "O", type: "C" },
      { text: "N", type: "D" },
      { text: "T", type: "B" },
    ],
  },
  {
    id: 3,
    question: "找出不同的一個：狗、貓、兔、汽車、鳥",
    options: [
      { text: "汽車", type: "A" },
      { text: "貓", type: "C" },
      { text: "兔", type: "D" },
      { text: "鳥", type: "B" },
    ],
  },
  {
    id: 4,
    question: "在這段文字中「的」出現了幾次：「今天的天氣很好，我決定去公園的長椅上看書，享受這美好的時光。」",
    options: [
      { text: "2次", type: "C" },
      { text: "3次", type: "A" },
      { text: "4次", type: "B" },
      { text: "1次", type: "D" },
    ],
  },
  {
    id: 5,
    question: "以下算式哪一個是錯的？ A: 8+7=15  B: 9×6=54  C: 12-5=8  D: 4×8=32",
    options: [
      { text: "A", type: "D" },
      { text: "C", type: "A" },
      { text: "B", type: "C" },
      { text: "D", type: "B" },
    ],
  },
  {
    id: 6,
    question: "這個序列中哪個數字打破了規律？ 2, 4, 6, 9, 10, 12",
    options: [
      { text: "9", type: "A" },
      { text: "6", type: "C" },
      { text: "10", type: "B" },
      { text: "4", type: "D" },
    ],
  },
  {
    id: 7,
    question: "以下哪組括號是正確配對的？",
    options: [
      { text: "([]{})", type: "A" },
      { text: "([)]", type: "B" },
      { text: "{[(]}", type: "C" },
      { text: "([}])", type: "D" },
    ],
  },
  {
    id: 8,
    question: "找出與其他三個不同類的一個：紅色、藍色、圓形、綠色",
    options: [
      { text: "圓形", type: "A" },
      { text: "紅色", type: "B" },
      { text: "藍色", type: "C" },
      { text: "綠色", type: "D" },
    ],
  },
  {
    id: 9,
    question: "在「MISSISSIPPI」這個單字中，字母「S」出現了幾次？",
    options: [
      { text: "3次", type: "C" },
      { text: "4次", type: "A" },
      { text: "5次", type: "B" },
      { text: "2次", type: "D" },
    ],
  },
  {
    id: 10,
    question: "以下哪個詞語的拼寫是錯誤的？",
    options: [
      { text: "專注力", type: "C" },
      { text: "注意力", type: "D" },
      { text: "記憶力", type: "B" },
      { text: "以上皆正確", type: "A" },
    ],
  },
  {
    id: 11,
    question: "快速計算：如果所有月份都有28天，一年有幾個月有28天？",
    options: [
      { text: "1個", type: "C" },
      { text: "12個", type: "A" },
      { text: "2個", type: "D" },
      { text: "4個", type: "B" },
    ],
  },
  {
    id: 12,
    question: "找出以下數字中唯一的奇數：2, 4, 6, 7, 8, 10, 12",
    options: [
      { text: "7", type: "A" },
      { text: "6", type: "C" },
      { text: "8", type: "D" },
      { text: "4", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "專注力高手",
    emoji: "🎯",
    description: "你的專注力非常出色！你能夠在細節中保持高度警覺，不容易被干擾或遺漏重要信息。這種能力對於學習、工作和日常生活都非常寶貴。",
    traits: ["高度專注", "細節敏銳", "不易分心"],
    strengths: ["發現錯誤", "長時間集中", "細節處理"],
    weaknesses: ["可能過於注重細節", "有時忽略大局"],
    tips: ["練習同時關注細節和整體", "適時休息避免疲勞"],
  },
  B: {
    type: "B",
    title: "專注型思考者",
    emoji: "👁️",
    description: "你有良好的專注能力，能夠在大多數情況下保持注意力集中。雖然偶爾可能會有小疏漏，但整體表現相當不錯。",
    traits: ["穩定專注", "錯誤發現能力", "有條理"],
    strengths: ["持續專注", "多任務處理", "適應力強"],
    weaknesses: ["疲勞時專注力下降", "複雜任務可能分心"],
    tips: ["使用番茄工作法提升專注", "確保充足的休息"],
  },
  C: {
    type: "C",
    title: "創意型專注者",
    emoji: "💫",
    description: "你的專注力可能在不同情境下有所變化。對於感興趣的事物，你能高度專注；但對於無趣的任務，可能較難維持注意力。這是創意型思考者的特點。",
    traits: ["興趣導向專注", "創意思維", "靈活變通"],
    strengths: ["對興趣高度專注", "創意產出", "多角度思考"],
    weaknesses: ["無趣任務專注力較弱", "容易被新事物吸引"],
    tips: ["將無趣任務遊戲化", "設定小目標增加動力"],
  },
  D: {
    type: "D",
    title: "廣泛注意者",
    emoji: "🌊",
    description: "你可能是那種喜歡同時關注多個事物的人，單一任務的深度專注可能不是你的強項。但這也意味著你可能更擅長捕捉大局和發現聯繫。",
    traits: ["多任務導向", "全局觀", "思維活躍"],
    strengths: ["發現聯繫", "快速切換", "廣泛視野"],
    weaknesses: ["深度專注較弱", "容易分心"],
    tips: ["練習冥想提升專注力", "減少環境干擾"],
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
