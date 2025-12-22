export const questions = [
  {
    id: 1,
    question: "如果 3 + 5 = 8，且 8 - 3 = 5，那麼 15 - 7 = ?",
    options: [
      { text: "8", type: "A" },
      { text: "7", type: "C" },
      { text: "9", type: "B" },
      { text: "6", type: "D" },
    ],
  },
  {
    id: 2,
    question: "一打鉛筆有12支，三打半鉛筆有幾支？",
    options: [
      { text: "36支", type: "B" },
      { text: "42支", type: "A" },
      { text: "40支", type: "C" },
      { text: "48支", type: "D" },
    ],
  },
  {
    id: 3,
    question: "一個數的3倍加上5等於20，這個數是多少？",
    options: [
      { text: "5", type: "A" },
      { text: "6", type: "B" },
      { text: "4", type: "C" },
      { text: "7", type: "D" },
    ],
  },
  {
    id: 4,
    question: "小明有100元，買了一支35元的筆和兩本各20元的本子，還剩多少錢？",
    options: [
      { text: "25元", type: "A" },
      { text: "35元", type: "B" },
      { text: "45元", type: "C" },
      { text: "15元", type: "D" },
    ],
  },
  {
    id: 5,
    question: "如果 A = 1, B = 2, C = 3...，那麼 CAT = ?",
    options: [
      { text: "24", type: "A" },
      { text: "22", type: "B" },
      { text: "26", type: "C" },
      { text: "20", type: "D" },
    ],
  },
  {
    id: 6,
    question: "一列火車時速60公里，行駛2.5小時能走多遠？",
    options: [
      { text: "150公里", type: "A" },
      { text: "120公里", type: "B" },
      { text: "140公里", type: "C" },
      { text: "160公里", type: "D" },
    ],
  },
  {
    id: 7,
    question: "甲乙兩人合作，甲每小時做6件，乙每小時做4件，合作3小時共做幾件？",
    options: [
      { text: "30件", type: "A" },
      { text: "24件", type: "B" },
      { text: "36件", type: "C" },
      { text: "28件", type: "D" },
    ],
  },
  {
    id: 8,
    question: "一件商品原價500元，打8折後再打9折，最終價格是多少？",
    options: [
      { text: "360元", type: "A" },
      { text: "350元", type: "B" },
      { text: "340元", type: "C" },
      { text: "380元", type: "D" },
    ],
  },
  {
    id: 9,
    question: "如果 2^x = 16，x 等於多少？",
    options: [
      { text: "4", type: "A" },
      { text: "3", type: "B" },
      { text: "5", type: "C" },
      { text: "8", type: "D" },
    ],
  },
  {
    id: 10,
    question: "一個長方形的長是寬的2倍，周長是36公分，請問面積是多少？",
    options: [
      { text: "72平方公分", type: "A" },
      { text: "64平方公分", type: "B" },
      { text: "54平方公分", type: "C" },
      { text: "81平方公分", type: "D" },
    ],
  },
  {
    id: 11,
    question: "三個連續偶數的和是48，最大的數是多少？",
    options: [
      { text: "18", type: "A" },
      { text: "16", type: "B" },
      { text: "20", type: "C" },
      { text: "14", type: "D" },
    ],
  },
  {
    id: 12,
    question: "一個水桶裝滿水需要10分鐘，漏水需要15分鐘漏完，同時開水龍頭和漏洞，多久能裝滿？",
    options: [
      { text: "30分鐘", type: "A" },
      { text: "25分鐘", type: "B" },
      { text: "無法裝滿", type: "C" },
      { text: "20分鐘", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "數理邏輯高手",
    emoji: "🔬",
    description: "你的數理邏輯能力非常出色！你能夠快速準確地進行數學運算和邏輯推理。無論是代數、幾何還是應用題，你都能輕鬆應對。",
    traits: ["計算準確", "邏輯清晰", "推理敏捷"],
    strengths: ["數學運算", "問題分析", "公式應用"],
    weaknesses: ["可能過於依賴公式", "創意思維較少"],
    tips: ["嘗試數學競賽或益智遊戲", "也要培養直覺判斷能力"],
  },
  B: {
    type: "B",
    title: "邏輯思考者",
    emoji: "📐",
    description: "你具備良好的數理基礎，雖然有些題目可能需要多想一下，但你的推理過程是正確的。通過更多練習，你的速度和準確度都能提升。",
    traits: ["基礎扎實", "步驟清晰", "穩定發揮"],
    strengths: ["基本運算", "邏輯思維", "耐心計算"],
    weaknesses: ["複雜應用題較具挑戰", "計算速度可提升"],
    tips: ["多做各類數學練習題", "學習解題技巧"],
  },
  C: {
    type: "C",
    title: "實用型計算者",
    emoji: "🧮",
    description: "你的數學能力能應付日常生活所需，但面對複雜的數理問題可能會感到挑戰。這是可以通過練習改善的，關鍵是找到適合自己的學習方法。",
    traits: ["實用導向", "基本計算沒問題", "需要更多練習"],
    strengths: ["日常計算", "基本概念理解", "願意學習"],
    weaknesses: ["複雜問題較弱", "公式記憶需加強"],
    tips: ["從基礎概念開始複習", "找到數學與生活的連結"],
  },
  D: {
    type: "D",
    title: "直覺型思考者",
    emoji: "💭",
    description: "數理邏輯可能不是你最擅長的領域，但這不代表你不聰明！也許你的優勢在語言、藝術或人際智能方面。每個人都有自己的強項。",
    traits: ["其他智能較強", "直覺思考", "創意豐富"],
    strengths: ["可能在藝術或語言方面出色", "獨特的思考方式", "創造力"],
    weaknesses: ["數理基礎需加強", "可能對數字較無興趣"],
    tips: ["用遊戲方式學習數學", "找到自己真正擅長的領域"],
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
