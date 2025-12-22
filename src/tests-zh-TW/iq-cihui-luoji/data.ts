export const questions = [
  {
    id: 1,
    question: "「溫暖」之於「寒冷」，正如「光明」之於？",
    options: [
      { text: "黑暗", type: "A" },
      { text: "太陽", type: "B" },
      { text: "月亮", type: "C" },
      { text: "白天", type: "D" },
    ],
  },
  {
    id: 2,
    question: "以下哪個詞語與其他三個不屬於同一類？",
    options: [
      { text: "汽車", type: "A" },
      { text: "腳踏車", type: "B" },
      { text: "飛機", type: "C" },
      { text: "樹木", type: "D" },
    ],
  },
  {
    id: 3,
    question: "找出邏輯上正確的選項：所有的醫生都上過大學，小王是醫生。",
    options: [
      { text: "小王上過大學", type: "A" },
      { text: "所有上過大學的人都是醫生", type: "C" },
      { text: "小王可能沒上過大學", type: "D" },
      { text: "小王是教授", type: "B" },
    ],
  },
  {
    id: 4,
    question: "「書籍」之於「圖書館」，正如「金錢」之於？",
    options: [
      { text: "銀行", type: "A" },
      { text: "商店", type: "B" },
      { text: "錢包", type: "C" },
      { text: "工作", type: "D" },
    ],
  },
  {
    id: 5,
    question: "選出與「勤勞」意思最相反的詞：",
    options: [
      { text: "懶惰", type: "A" },
      { text: "聰明", type: "C" },
      { text: "安靜", type: "D" },
      { text: "貧窮", type: "B" },
    ],
  },
  {
    id: 6,
    question: "「作家」之於「小說」，正如「畫家」之於？",
    options: [
      { text: "畫作", type: "A" },
      { text: "顏料", type: "B" },
      { text: "畫筆", type: "C" },
      { text: "展覽", type: "D" },
    ],
  },
  {
    id: 7,
    question: "以下哪組詞語的關係與「手指：手掌」最相似？",
    options: [
      { text: "樹枝：樹幹", type: "A" },
      { text: "天空：雲朵", type: "C" },
      { text: "書本：文字", type: "D" },
      { text: "河流：大海", type: "B" },
    ],
  },
  {
    id: 8,
    question: "找出不屬於同類的詞：悲傷、憤怒、快樂、桌子、恐懼",
    options: [
      { text: "桌子", type: "A" },
      { text: "悲傷", type: "B" },
      { text: "快樂", type: "C" },
      { text: "恐懼", type: "D" },
    ],
  },
  {
    id: 9,
    question: "「魚」之於「水」，正如「鳥」之於？",
    options: [
      { text: "天空", type: "A" },
      { text: "樹木", type: "B" },
      { text: "羽毛", type: "C" },
      { text: "蟲子", type: "D" },
    ],
  },
  {
    id: 10,
    question: "以下哪個詞可以同時與「水」和「時間」搭配？",
    options: [
      { text: "流動", type: "A" },
      { text: "乾燥", type: "B" },
      { text: "明亮", type: "C" },
      { text: "寒冷", type: "D" },
    ],
  },
  {
    id: 11,
    question: "「原因」之於「結果」，正如「問題」之於？",
    options: [
      { text: "答案", type: "A" },
      { text: "困難", type: "B" },
      { text: "麻煩", type: "C" },
      { text: "考試", type: "D" },
    ],
  },
  {
    id: 12,
    question: "選出可以放入空格的最佳詞語：他的演講非常___，讓聽眾深受感動。",
    options: [
      { text: "感人", type: "A" },
      { text: "無聊", type: "D" },
      { text: "快速", type: "C" },
      { text: "安靜", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "詞彙邏輯大師",
    emoji: "📖",
    description: "你的詞彙邏輯能力非常出色！你能夠精確理解詞語之間的關係，包括同義、反義、因果、包含等各種邏輯關係。這種能力對於寫作、閱讀和溝通都非常有幫助。",
    traits: ["詞彙量豐富", "邏輯關係清晰", "語言敏銳"],
    strengths: ["類比推理", "詞語關係分析", "語言邏輯"],
    weaknesses: ["可能過於咬文嚼字", "有時忽略語境"],
    tips: ["繼續擴展詞彙量", "嘗試學習其他語言"],
  },
  B: {
    type: "B",
    title: "語言思考者",
    emoji: "✏️",
    description: "你有良好的詞彙邏輯基礎，能夠理解大部分詞語之間的關係。雖然有些複雜的類比可能需要多想一下，但你的語言邏輯能力是扎實的。",
    traits: ["基礎扎實", "穩定表現", "語言理解佳"],
    strengths: ["基本類比", "詞語理解", "語言運用"],
    weaknesses: ["複雜邏輯關係較具挑戰", "詞彙量可擴展"],
    tips: ["多閱讀不同類型的書籍", "練習類比推理"],
  },
  C: {
    type: "C",
    title: "實用語言使用者",
    emoji: "💬",
    description: "你的語言能力足以應付日常需求，但在詞彙邏輯方面可能還有提升空間。你可能更注重語言的實用性而非邏輯分析。",
    traits: ["實用導向", "日常表達佳", "基本理解"],
    strengths: ["日常溝通", "直接表達", "實際運用"],
    weaknesses: ["詞彙邏輯較弱", "類比推理需練習"],
    tips: ["多做詞語關係練習", "學習常見的邏輯關係類型"],
  },
  D: {
    type: "D",
    title: "詞彙學習者",
    emoji: "📚",
    description: "詞彙邏輯可能不是你目前最熟悉的領域，但這是可以通過學習來提升的。關鍵是多閱讀、多思考詞語之間的關係。",
    traits: ["學習中", "潛力待開發", "成長空間大"],
    strengths: ["有學習意願", "不設限", "開放態度"],
    weaknesses: ["詞彙量需擴充", "邏輯關係需理解"],
    tips: ["從簡單的詞語關係開始練習", "養成每天學習新詞的習慣"],
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
