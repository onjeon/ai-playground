export const questions = [
  {
    id: 1,
    question: "「書」之於「閱讀」，正如「食物」之於？",
    options: [
      { text: "吃飯", type: "A" },
      { text: "廚房", type: "B" },
      { text: "飢餓", type: "C" },
      { text: "餐廳", type: "D" },
    ],
  },
  {
    id: 2,
    question: "如果「快樂」用藍色表示，「悲傷」用灰色表示，那麼「平靜」最可能用什麼顏色表示？",
    options: [
      { text: "淺綠色", type: "A" },
      { text: "紅色", type: "C" },
      { text: "黑色", type: "D" },
      { text: "橙色", type: "B" },
    ],
  },
  {
    id: 3,
    question: "「種子」之於「樹」，正如「想法」之於？",
    options: [
      { text: "計劃", type: "A" },
      { text: "思考", type: "B" },
      { text: "腦袋", type: "C" },
      { text: "睡眠", type: "D" },
    ],
  },
  {
    id: 4,
    question: "所有的 X 都是 Y。所有的 Y 都是 Z。以下哪個結論是正確的？",
    options: [
      { text: "所有的 X 都是 Z", type: "A" },
      { text: "所有的 Z 都是 X", type: "C" },
      { text: "有些 Z 不是 X", type: "B" },
      { text: "X 和 Z 沒有關係", type: "D" },
    ],
  },
  {
    id: 5,
    question: "「水」代表適應性，「火」代表熱情，「土」代表穩定性，那麼「風」最可能代表什麼？",
    options: [
      { text: "自由或變化", type: "A" },
      { text: "沉重", type: "C" },
      { text: "黑暗", type: "D" },
      { text: "堅硬", type: "B" },
    ],
  },
  {
    id: 6,
    question: "如果所有的圓形都會移動，而所有會移動的東西都有意識，那麼？",
    options: [
      { text: "所有的圓形都有意識", type: "A" },
      { text: "有些圓形沒有意識", type: "B" },
      { text: "意識和圓形無關", type: "C" },
      { text: "只有圓形有意識", type: "D" },
    ],
  },
  {
    id: 7,
    question: "「鏡子」之於「反射」，正如「海綿」之於？",
    options: [
      { text: "吸收", type: "A" },
      { text: "水分", type: "B" },
      { text: "清潔", type: "C" },
      { text: "柔軟", type: "D" },
    ],
  },
  {
    id: 8,
    question: "如果「時間」是一條河，「記憶」會是什麼？",
    options: [
      { text: "河岸邊的石頭", type: "A" },
      { text: "河水的流速", type: "B" },
      { text: "河的盡頭", type: "C" },
      { text: "河的源頭", type: "D" },
    ],
  },
  {
    id: 9,
    question: "「沉默」之於「聲音」，正如「黑暗」之於？",
    options: [
      { text: "光明", type: "A" },
      { text: "夜晚", type: "B" },
      { text: "恐懼", type: "C" },
      { text: "洞穴", type: "D" },
    ],
  },
  {
    id: 10,
    question: "如果「音樂」是流動的建築，那麼「建築」是什麼？",
    options: [
      { text: "凝固的音樂", type: "A" },
      { text: "堅硬的藝術", type: "B" },
      { text: "永恆的歷史", type: "C" },
      { text: "沉默的詩歌", type: "D" },
    ],
  },
  {
    id: 11,
    question: "「橋」之於「連接」，正如「牆」之於？",
    options: [
      { text: "分隔", type: "A" },
      { text: "保護", type: "B" },
      { text: "建造", type: "C" },
      { text: "磚塊", type: "D" },
    ],
  },
  {
    id: 12,
    question: "如果「知識」是一把鑰匙，那麼它打開的是什麼？",
    options: [
      { text: "機會的門", type: "A" },
      { text: "書本", type: "B" },
      { text: "學校", type: "C" },
      { text: "電腦", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "抽象思維大師",
    emoji: "🔮",
    description: "你擁有出色的抽象思維能力！你能夠看穿事物的表面，理解深層的關係和模式。你善於使用隱喻和類比來理解複雜的概念，這是一種非常珍貴的智力特質。",
    traits: ["概念理解強", "善用類比", "思維深刻"],
    strengths: ["抽象推理", "隱喻理解", "關係識別"],
    weaknesses: ["有時過於抽象", "可能忽略具體細節"],
    tips: ["將抽象思維應用於實際問題", "練習用簡單的話解釋複雜概念"],
  },
  B: {
    type: "B",
    title: "概念思考者",
    emoji: "💡",
    description: "你有良好的抽象思維基礎，能夠理解大部分的抽象概念和關係。雖然有些深層的隱喻可能需要多想一下，但你的概念理解能力是不錯的。",
    traits: ["概念理解佳", "邏輯清晰", "穩定思考"],
    strengths: ["基本抽象推理", "類比理解", "概念連結"],
    weaknesses: ["深度抽象較具挑戰", "可能需要更多練習"],
    tips: ["多閱讀哲學和文學作品", "練習用類比解釋事物"],
  },
  C: {
    type: "C",
    title: "具象思考者",
    emoji: "🎯",
    description: "你可能更傾向於具體和實際的思考方式，抽象概念可能不是你最習慣的領域。這不是缺點，很多實際工作更需要具象思維。",
    traits: ["具體導向", "實際思考", "經驗依賴"],
    strengths: ["處理具體問題", "實務能力", "經驗累積"],
    weaknesses: ["抽象概念較弱", "隱喻理解需加強"],
    tips: ["嘗試用實際例子來理解抽象概念", "練習「這像什麼」的思考方式"],
  },
  D: {
    type: "D",
    title: "直覺感知者",
    emoji: "🌈",
    description: "你的思維方式可能更偏向直覺和感性，抽象邏輯推理可能不是你最常使用的思維工具。但你可能在藝術或情感理解方面有獨特的優勢。",
    traits: ["直覺導向", "感性思維", "獨特視角"],
    strengths: ["情感理解", "藝術感受", "創意表達"],
    weaknesses: ["邏輯抽象較弱", "系統分析需加強"],
    tips: ["從感興趣的話題開始練習抽象思維", "學習基本的邏輯推理"],
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
