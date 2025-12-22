export const questions = [
  {
    id: 1,
    question: "「異曲同工」的意思是？",
    options: [
      { text: "不同的方法達到相同的效果", type: "A" },
      { text: "相同的方法產生不同的結果", type: "C" },
      { text: "做事不認真", type: "D" },
      { text: "音樂和工作的結合", type: "B" },
    ],
  },
  {
    id: 2,
    question: "找出與其他三個詞性質不同的詞：",
    options: [
      { text: "蘋果", type: "B" },
      { text: "香蕉", type: "C" },
      { text: "葡萄", type: "D" },
      { text: "番茄", type: "A" },
    ],
  },
  {
    id: 3,
    question: "「守株待兔」的寓意是？",
    options: [
      { text: "做事要有耐心", type: "B" },
      { text: "不要心存僥倖，要積極進取", type: "A" },
      { text: "保護環境很重要", type: "D" },
      { text: "兔子很可愛", type: "C" },
    ],
  },
  {
    id: 4,
    question: "以下哪組詞是反義詞？",
    options: [
      { text: "高興 — 快樂", type: "C" },
      { text: "黑暗 — 光明", type: "A" },
      { text: "美麗 — 漂亮", type: "D" },
      { text: "聰明 — 智慧", type: "B" },
    ],
  },
  {
    id: 5,
    question: "「杯弓蛇影」形容什麼？",
    options: [
      { text: "環境很美", type: "D" },
      { text: "疑神疑鬼、自相驚擾", type: "A" },
      { text: "酒量很好", type: "C" },
      { text: "射箭技術高超", type: "B" },
    ],
  },
  {
    id: 6,
    question: "「醫生：病人」的關係類似於？",
    options: [
      { text: "老師：學生", type: "A" },
      { text: "汽車：道路", type: "D" },
      { text: "書本：圖書館", type: "C" },
      { text: "電腦：鍵盤", type: "B" },
    ],
  },
  {
    id: 7,
    question: "以下哪個成語用法是正確的？",
    options: [
      { text: "他的演講真是「對牛彈琴」，聽眾都聽得入迷了", type: "C" },
      { text: "這兩個方案「異曲同工」，都能解決問題", type: "A" },
      { text: "他做事「掩耳盜鈴」，非常謹慎", type: "D" },
      { text: "考試前他「臨渴掘井」，真是太用功了", type: "B" },
    ],
  },
  {
    id: 8,
    question: "「望梅止渴」出自哪個歷史人物的故事？",
    options: [
      { text: "劉備", type: "B" },
      { text: "曹操", type: "A" },
      { text: "諸葛亮", type: "C" },
      { text: "孫權", type: "D" },
    ],
  },
  {
    id: 9,
    question: "選出正確的句子：",
    options: [
      { text: "這件事情的「緣由」很複雜", type: "A" },
      { text: "他「竟然」知道這件事並不意外", type: "B" },
      { text: "她對這件事「不以為意」，非常在乎", type: "D" },
      { text: "他「侃侃而談」，說得結結巴巴", type: "C" },
    ],
  },
  {
    id: 10,
    question: "「刻舟求劍」諷刺什麼行為？",
    options: [
      { text: "拘泥固執，不知變通", type: "A" },
      { text: "做事認真負責", type: "C" },
      { text: "熱愛游泳", type: "D" },
      { text: "珍惜物品", type: "B" },
    ],
  },
  {
    id: 11,
    question: "「文章」與「段落」的關係，類似於？",
    options: [
      { text: "森林與樹木", type: "A" },
      { text: "河流與魚", type: "B" },
      { text: "天空與雲", type: "C" },
      { text: "大海與船", type: "D" },
    ],
  },
  {
    id: 12,
    question: "以下哪個詞語沒有錯別字？",
    options: [
      { text: "一愁莫展", type: "C" },
      { text: "再接再厲", type: "A" },
      { text: "按步就班", type: "D" },
      { text: "走頭無路", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "語言天才",
    emoji: "📚",
    description: "你的語言能力出類拔萃！你對詞彙的掌握、成語的理解和語言邏輯都非常強。你很可能是一個喜歡閱讀、善於表達的人，文字是你的強項。",
    traits: ["詞彙量豐富", "理解力強", "表達清晰"],
    strengths: ["寫作能力", "閱讀理解", "語言邏輯"],
    weaknesses: ["可能對數理較無興趣", "有時過於咬文嚼字"],
    tips: ["繼續大量閱讀各類書籍", "嘗試寫作或演講"],
  },
  B: {
    type: "B",
    title: "語言愛好者",
    emoji: "✍️",
    description: "你有不錯的語言基礎，對中文的掌握程度良好。雖然有些較難的題目可能讓你猶豫，但整體來說你的語言能力是在水準之上的。",
    traits: ["基礎扎實", "願意學習", "表達能力佳"],
    strengths: ["日常溝通", "基本寫作", "語言理解"],
    weaknesses: ["成語典故可再加強", "文言文可能較弱"],
    tips: ["多閱讀經典文學作品", "學習更多成語故事"],
  },
  C: {
    type: "C",
    title: "實用型語言使用者",
    emoji: "💬",
    description: "你的語言能力足以應付日常生活和工作所需。你可能更注重語言的實用性，而非文學性。這是完全正常的，每個人的語言風格都不同。",
    traits: ["實用導向", "口語流利", "重視效率"],
    strengths: ["日常對話", "簡潔表達", "直接了當"],
    weaknesses: ["書面語較弱", "成語使用較少"],
    tips: ["可以多看報紙或新聞提升詞彙量", "學習常用成語"],
  },
  D: {
    type: "D",
    title: "語言探索者",
    emoji: "🌏",
    description: "語言可能不是你目前最強的領域，但這完全可以通過學習來改善。也許你的優勢在其他類型的智能，如數理或藝術方面。",
    traits: ["其他智能較強", "學習空間大", "獨特思維"],
    strengths: ["可能在其他領域出色", "不拘泥於文字", "創意思考"],
    weaknesses: ["詞彙量需擴充", "語文基礎待加強"],
    tips: ["從簡單有趣的讀物開始", "看電視時注意字幕的用詞"],
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
