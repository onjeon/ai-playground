export const questions = [
  {
    id: 1,
    question: "下列圖形中哪一個與其他三個不同？ ○ ○ ○ □",
    options: [
      { text: "第四個（□）", type: "A" },
      { text: "第一個（○）", type: "C" },
      { text: "第三個（○）", type: "D" },
      { text: "都一樣", type: "B" },
    ],
  },
  {
    id: 2,
    question: "如果 △ + △ = □，且 □ + △ = ◇，那麼 ◇ 等於幾個 △？",
    options: [
      { text: "3個", type: "A" },
      { text: "2個", type: "B" },
      { text: "4個", type: "C" },
      { text: "5個", type: "D" },
    ],
  },
  {
    id: 3,
    question: "哪個選項能完成這個圖形序列？ ▲ ▶ ▼ __",
    options: [
      { text: "◀", type: "A" },
      { text: "▲", type: "B" },
      { text: "●", type: "C" },
      { text: "■", type: "D" },
    ],
  },
  {
    id: 4,
    question: "觀察這個規律：●○○ ●●○ ●●● 下一個應該是？",
    options: [
      { text: "○○○", type: "A" },
      { text: "●○○", type: "B" },
      { text: "○●○", type: "C" },
      { text: "●●●", type: "D" },
    ],
  },
  {
    id: 5,
    question: "下列哪個圖形可以由其他圖形旋轉得到？ A:「b」 B:「d」 C:「p」 D:「q」",
    options: [
      { text: "A和C互為旋轉（b和p旋轉180度）", type: "A" },
      { text: "它們都不相關", type: "B" },
      { text: "A和B互為旋轉", type: "C" },
      { text: "都可以互相旋轉得到", type: "D" },
    ],
  },
  {
    id: 6,
    question: "如果把字母「N」水平翻轉，會變成什麼？",
    options: [
      { text: "И", type: "A" },
      { text: "N（不變）", type: "B" },
      { text: "Z", type: "C" },
      { text: "∩", type: "D" },
    ],
  },
  {
    id: 7,
    question: "哪個選項與「◐」（半黑半白的圓）形成對稱？",
    options: [
      { text: "◑", type: "A" },
      { text: "◐", type: "B" },
      { text: "●", type: "C" },
      { text: "○", type: "D" },
    ],
  },
  {
    id: 8,
    question: "如果 ★ = 5，☆ = 3，那麼 ★ + ☆ + ★ = ?",
    options: [
      { text: "13", type: "A" },
      { text: "11", type: "B" },
      { text: "15", type: "C" },
      { text: "8", type: "D" },
    ],
  },
  {
    id: 9,
    question: "觀察規律：1格、2格、4格、8格...下一個圖形應該有幾格？",
    options: [
      { text: "16格", type: "A" },
      { text: "10格", type: "B" },
      { text: "12格", type: "C" },
      { text: "15格", type: "D" },
    ],
  },
  {
    id: 10,
    question: "把數字「8」橫放，它代表什麼？",
    options: [
      { text: "無限大（∞）", type: "A" },
      { text: "零", type: "B" },
      { text: "兩個圓", type: "C" },
      { text: "沒有意義", type: "D" },
    ],
  },
  {
    id: 11,
    question: "以下哪組圖形的關係與「父：子」相同？",
    options: [
      { text: "大圓：小圓", type: "A" },
      { text: "圓：方", type: "B" },
      { text: "紅：藍", type: "C" },
      { text: "左：右", type: "D" },
    ],
  },
  {
    id: 12,
    question: "完成這個矩陣：\n第一列：● ● ○\n第二列：● ○ ●\n第三列：○ ● __",
    options: [
      { text: "●", type: "A" },
      { text: "○", type: "B" },
      { text: "●○", type: "C" },
      { text: "○●", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "視覺謎題大師",
    emoji: "👁️",
    description: "你對視覺圖形有敏銳的洞察力！你能夠快速識別圖形模式、對稱關係和視覺規律。這種能力對於設計、藝術和許多需要視覺分析的工作都非常有價值。",
    traits: ["圖形識別強", "視覺敏銳", "模式發現"],
    strengths: ["視覺推理", "圖形分析", "對稱識別"],
    weaknesses: ["可能過於依賴視覺", "有時忽略非視覺線索"],
    tips: ["嘗試更複雜的視覺謎題", "將視覺能力應用於設計或藝術"],
  },
  B: {
    type: "B",
    title: "視覺思考者",
    emoji: "🎨",
    description: "你有良好的視覺分析能力，能夠處理大多數常見的視覺謎題。雖然有些複雜的圖形問題可能需要多想一下，但你的基礎是扎實的。",
    traits: ["基礎扎實", "穩定表現", "視覺理解"],
    strengths: ["基本圖形識別", "簡單模式發現", "視覺理解"],
    weaknesses: ["複雜視覺問題較具挑戰", "可能需要更多練習"],
    tips: ["練習更多視覺推理題", "觀察日常生活中的圖形和模式"],
  },
  C: {
    type: "C",
    title: "發展中的視覺能力",
    emoji: "🔍",
    description: "視覺圖形分析可能不是你目前最強的領域，但這是可以通過練習提升的。很多人通過有意識的訓練都能顯著提升視覺推理能力。",
    traits: ["其他智能較強", "視覺待開發", "潛力存在"],
    strengths: ["其他領域可能較強", "願意學習", "不怕挑戰"],
    weaknesses: ["視覺推理需加強", "圖形識別較弱"],
    tips: ["從簡單的視覺謎題開始", "玩一些圖形相關的遊戲"],
  },
  D: {
    type: "D",
    title: "語言或概念導向",
    emoji: "📝",
    description: "你可能是一個更傾向於語言或概念思維的人，視覺圖形問題可能不是你最自然的思維方式。這完全沒關係，智力是多元的！",
    traits: ["語言導向", "概念思維", "非視覺傾向"],
    strengths: ["可能在語言或邏輯方面更強", "文字理解", "概念分析"],
    weaknesses: ["視覺推理較弱", "圖形問題較困難"],
    tips: ["嘗試用語言描述圖形來幫助理解", "不要害怕視覺問題，慢慢來"],
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
