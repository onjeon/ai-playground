export const questions = [
  {
    id: 1,
    question: "一個正方體有幾個面？",
    options: [
      { text: "4個", type: "D" },
      { text: "6個", type: "A" },
      { text: "8個", type: "C" },
      { text: "12個", type: "B" },
    ],
  },
  {
    id: 2,
    question: "將一張正方形紙對折兩次後，從中間剪一個小洞，打開後會有幾個洞？",
    options: [
      { text: "1個", type: "C" },
      { text: "2個", type: "B" },
      { text: "4個", type: "A" },
      { text: "8個", type: "D" },
    ],
  },
  {
    id: 3,
    question: "一個三角形有幾個頂點？",
    options: [
      { text: "2個", type: "D" },
      { text: "3個", type: "A" },
      { text: "4個", type: "C" },
      { text: "6個", type: "B" },
    ],
  },
  {
    id: 4,
    question: "如果你面向北方，然後向右轉90度，你現在面向哪個方向？",
    options: [
      { text: "南方", type: "C" },
      { text: "東方", type: "A" },
      { text: "西方", type: "B" },
      { text: "北方", type: "D" },
    ],
  },
  {
    id: 5,
    question: "一個長方體有幾條邊？",
    options: [
      { text: "8條", type: "C" },
      { text: "10條", type: "D" },
      { text: "12條", type: "A" },
      { text: "6條", type: "B" },
    ],
  },
  {
    id: 6,
    question: "將一個正方體展開，以下哪個不是正確的展開圖？",
    options: [
      { text: "十字形（中間一個方塊，四周各一個）", type: "B" },
      { text: "一排六個方塊", type: "A" },
      { text: "T字形展開", type: "C" },
      { text: "階梯形展開", type: "D" },
    ],
  },
  {
    id: 7,
    question: "從正上方俯視一個圓錐體，看到的形狀是什麼？",
    options: [
      { text: "三角形", type: "C" },
      { text: "圓形", type: "A" },
      { text: "橢圓形", type: "B" },
      { text: "正方形", type: "D" },
    ],
  },
  {
    id: 8,
    question: "一個足球是由五邊形和六邊形組成的，共有幾個五邊形？",
    options: [
      { text: "10個", type: "C" },
      { text: "12個", type: "A" },
      { text: "20個", type: "B" },
      { text: "6個", type: "D" },
    ],
  },
  {
    id: 9,
    question: "將字母「R」水平翻轉後的形狀是什麼？",
    options: [
      { text: "Я", type: "A" },
      { text: "R", type: "D" },
      { text: "ɹ", type: "B" },
      { text: "ᴚ", type: "C" },
    ],
  },
  {
    id: 10,
    question: "一個正四面體（三角錐）有幾個面？",
    options: [
      { text: "3個", type: "B" },
      { text: "4個", type: "A" },
      { text: "5個", type: "C" },
      { text: "6個", type: "D" },
    ],
  },
  {
    id: 11,
    question: "想像一個透明的正方體，從一個角看向對角，你會看到什麼形狀？",
    options: [
      { text: "正方形", type: "B" },
      { text: "正六邊形", type: "A" },
      { text: "圓形", type: "D" },
      { text: "三角形", type: "C" },
    ],
  },
  {
    id: 12,
    question: "將數字「6」旋轉180度後是什麼？",
    options: [
      { text: "6", type: "C" },
      { text: "9", type: "A" },
      { text: "8", type: "D" },
      { text: "無法辨識", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "空間智能大師",
    emoji: "🔮",
    description: "你擁有卓越的空間知覺能力！你能輕鬆在腦海中旋轉、翻轉和操作三維物體。這種能力在建築、工程、藝術和設計領域非常寶貴。",
    traits: ["三維想像力強", "方向感佳", "視覺化能力出色"],
    strengths: ["空間推理", "心像旋轉", "圖形識別"],
    weaknesses: ["可能忽略文字細節", "有時過於依賴視覺"],
    tips: ["考慮從事建築、設計或工程相關工作", "繼續練習3D思維"],
  },
  B: {
    type: "B",
    title: "視覺思考者",
    emoji: "👁️",
    description: "你有不錯的空間感知能力，雖然複雜的三維問題可能需要多想一下，但你的基礎是穩固的。通過練習，你的空間智能還能進一步提升。",
    traits: ["視覺導向", "細心觀察", "穩步成長"],
    strengths: ["基本空間認知", "二維圖形分析", "方向辨識"],
    weaknesses: ["複雜3D問題較具挑戰", "需要更多心像練習"],
    tips: ["多玩拼圖和積木類遊戲", "練習在腦海中旋轉物體"],
  },
  C: {
    type: "C",
    title: "發展中的空間感",
    emoji: "🌱",
    description: "空間知覺是可以通過練習提升的能力。你目前可能更依賴其他思維方式，但這不代表你無法發展空間智能。很多人通過訓練都能顯著提升。",
    traits: ["其他智能較強", "潛力待開發", "好奇探索"],
    strengths: ["願意學習", "不怕挑戰", "多元思維"],
    weaknesses: ["空間想像需加強", "方向感可能較弱"],
    tips: ["從簡單的空間遊戲開始", "多觀察實際物體的形狀變化"],
  },
  D: {
    type: "D",
    title: "抽象思維者",
    emoji: "💫",
    description: "你可能是一個更傾向於抽象或語言思維的人，空間問題不是你最擅長的領域，但這完全沒關係！智力是多元的，每個人都有自己的強項。",
    traits: ["抽象思維", "語言能力強", "概念理解佳"],
    strengths: ["文字處理", "抽象概念", "邏輯語言"],
    weaknesses: ["視覺空間較弱", "可能不愛看地圖"],
    tips: ["用語言描述來幫助理解空間問題", "不要害怕請教擅長空間思維的朋友"],
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
