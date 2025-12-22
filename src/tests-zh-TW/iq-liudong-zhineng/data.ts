export const questions = [
  {
    id: 1,
    question: "如果 ★ + ★ = ◆，◆ + ★ = ♦，那麼 ♦ 等於幾個 ★？",
    options: [
      { text: "3個", type: "A" },
      { text: "2個", type: "B" },
      { text: "4個", type: "C" },
      { text: "5個", type: "D" },
    ],
  },
  {
    id: 2,
    question: "完成這個序列的規則是什麼？ 1, 2, 4, 7, 11, __",
    options: [
      { text: "16（每次加的數遞增1）", type: "A" },
      { text: "15（每次乘以2）", type: "B" },
      { text: "14（固定加3）", type: "C" },
      { text: "13（沒有規律）", type: "D" },
    ],
  },
  {
    id: 3,
    question: "在一個新的符號系統中：● = 加法，○ = 減法。那麼 5 ● 3 ○ 2 = ?",
    options: [
      { text: "6", type: "A" },
      { text: "10", type: "B" },
      { text: "0", type: "C" },
      { text: "4", type: "D" },
    ],
  },
  {
    id: 4,
    question: "如果在某個星球上，一週有5天，一個月有6週，那麼一個月有幾天？",
    options: [
      { text: "30天", type: "A" },
      { text: "35天", type: "B" },
      { text: "25天", type: "C" },
      { text: "28天", type: "D" },
    ],
  },
  {
    id: 5,
    question: "根據這個規則：A→1, B→2, C→3... 那麼 CAB = ?",
    options: [
      { text: "312", type: "A" },
      { text: "123", type: "B" },
      { text: "321", type: "C" },
      { text: "213", type: "D" },
    ],
  },
  {
    id: 6,
    question: "如果 △ > □ > ○，且 ○ > ☆，那麼以下哪個一定正確？",
    options: [
      { text: "△ > ☆", type: "A" },
      { text: "□ = ☆", type: "B" },
      { text: "○ = △", type: "C" },
      { text: "無法判斷", type: "D" },
    ],
  },
  {
    id: 7,
    question: "在一個謎題中：如果 APPLE = 50，BANANA = 42，那麼 ORANGE 大約等於多少？（提示：與字母數量有關）",
    options: [
      { text: "60（每個字母=10）", type: "A" },
      { text: "42", type: "B" },
      { text: "50", type: "C" },
      { text: "35", type: "D" },
    ],
  },
  {
    id: 8,
    question: "一個新遊戲的規則：紅色=+2，藍色=-1，綠色=×2。如果起始數字是3，依序經過紅、藍、綠，最終結果是？",
    options: [
      { text: "8", type: "A" },
      { text: "10", type: "B" },
      { text: "6", type: "C" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 9,
    question: "如果「時間」可以用數字表示，9:30 可以寫成 930，那麼 3:45 + 2:15 用這種方式表示是？",
    options: [
      { text: "600", type: "A" },
      { text: "560", type: "B" },
      { text: "660", type: "C" },
      { text: "500", type: "D" },
    ],
  },
  {
    id: 10,
    question: "在一個特殊的數學系統中，負負不得正（負數加負數等於更負的數）。那麼 -3 加 -2 在這個系統中等於？",
    options: [
      { text: "-5", type: "A" },
      { text: "+5", type: "B" },
      { text: "-1", type: "C" },
      { text: "0", type: "D" },
    ],
  },
  {
    id: 11,
    question: "如果在某種語言中，「貓狗」意思是「跑」，「狗貓」意思是「走」，那麼「貓貓」最可能是什麼意思？",
    options: [
      { text: "快跑或某種動作", type: "A" },
      { text: "狗", type: "C" },
      { text: "貓", type: "D" },
      { text: "靜止不動", type: "B" },
    ],
  },
  {
    id: 12,
    question: "一個密碼系統：每個字母往後移動3位（A→D, B→E...）。那麼「CAT」加密後是？",
    options: [
      { text: "FDW", type: "A" },
      { text: "DBU", type: "B" },
      { text: "ECU", type: "C" },
      { text: "XZQ", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "流動智能高手",
    emoji: "🧠",
    description: "你擁有出色的流動智能！你能夠快速適應新的規則和情境，在面對陌生問題時展現強大的推理能力。這種能力對於學習新事物和解決創新問題非常重要。",
    traits: ["適應力強", "快速學習", "靈活思考"],
    strengths: ["新情境適應", "規則推導", "模式轉換"],
    weaknesses: ["可能忽略已有知識", "有時過於追求新奇"],
    tips: ["將流動智能與知識經驗結合", "持續挑戰自己"],
  },
  B: {
    type: "B",
    title: "靈活思考者",
    emoji: "💡",
    description: "你有良好的流動智能基礎，能夠處理大多數新情境和規則變化。雖然有些複雜的新系統可能需要更多時間來理解，但你的適應能力是不錯的。",
    traits: ["基礎良好", "願意嘗試", "穩定適應"],
    strengths: ["基本規則理解", "新知識吸收", "邏輯推理"],
    weaknesses: ["複雜新系統較具挑戰", "可能需要更多練習"],
    tips: ["多嘗試不同類型的智力題", "學習不同領域的知識"],
  },
  C: {
    type: "C",
    title: "經驗依賴型",
    emoji: "📚",
    description: "你可能更依賴已有的知識和經驗來解決問題，面對全新的規則和情境時可能需要更多時間來適應。這不是缺點，結晶智能同樣重要。",
    traits: ["經驗導向", "知識型", "穩定可靠"],
    strengths: ["運用已有知識", "專業領域精通", "經驗積累"],
    weaknesses: ["新情境適應較慢", "可能抗拒改變"],
    tips: ["嘗試接觸新領域", "練習在未知情境中推理"],
  },
  D: {
    type: "D",
    title: "流動智能學習者",
    emoji: "🌱",
    description: "流動智能是可以通過練習提升的。你目前可能對處理全新規則和情境還不太熟悉，但這種能力對於現代快速變化的世界非常重要，值得投資學習。",
    traits: ["學習中", "潛力待開發", "成長空間大"],
    strengths: ["有學習意願", "不自滿", "開放態度"],
    weaknesses: ["新規則理解較弱", "適應速度較慢"],
    tips: ["從簡單的邏輯遊戲開始", "每天嘗試學習一點新東西"],
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
