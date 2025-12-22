export const questions = [
  {
    id: 1,
    question: "一個迴紋針除了夾紙還能做什麼用途？以下哪個答案最有創意？",
    options: [
      { text: "當作書籤", type: "B" },
      { text: "做成簡易手機支架", type: "A" },
      { text: "放在桌上", type: "D" },
      { text: "丟掉", type: "C" },
    ],
  },
  {
    id: 2,
    question: "如果明天地球上的重力消失了，你會先做什麼？",
    options: [
      { text: "學習如何在空中移動和創造新運動", type: "A" },
      { text: "擔心如何生活", type: "C" },
      { text: "待在原地不動", type: "D" },
      { text: "抓住固定物體", type: "B" },
    ],
  },
  {
    id: 3,
    question: "用「雲朵」、「鋼琴」、「螞蟻」創造一個故事概念，哪個最有趣？",
    options: [
      { text: "螞蟻在雲朵上建造了一座鋼琴城堡，用雨滴彈奏音樂", type: "A" },
      { text: "一隻螞蟻看到了雲朵和鋼琴", type: "C" },
      { text: "雲朵下有鋼琴，旁邊有螞蟻", type: "D" },
      { text: "螞蟻爬上鋼琴，看著天上的雲", type: "B" },
    ],
  },
  {
    id: 4,
    question: "如果你能發明一種超能力，你會創造什麼？",
    options: [
      { text: "能將夢境變成可分享的電影", type: "A" },
      { text: "飛行能力", type: "B" },
      { text: "隱形能力", type: "C" },
      { text: "不需要這種東西", type: "D" },
    ],
  },
  {
    id: 5,
    question: "一個空的塑膠瓶最有創意的用途是？",
    options: [
      { text: "做成自動澆水花盆", type: "A" },
      { text: "回收", type: "B" },
      { text: "裝水", type: "C" },
      { text: "丟掉", type: "D" },
    ],
  },
  {
    id: 6,
    question: "如果你是一種顏色，你會如何描述自己？",
    options: [
      { text: "一種隨心情變換的彩虹色，每個角度都不同", type: "A" },
      { text: "藍色", type: "C" },
      { text: "普通的顏色", type: "D" },
      { text: "一種溫暖的橙色", type: "B" },
    ],
  },
  {
    id: 7,
    question: "為了讓學習更有趣，你會設計什麼樣的教室？",
    options: [
      { text: "一個可以變形的空間，每節課都像進入不同世界", type: "A" },
      { text: "有舒適座椅的教室", type: "B" },
      { text: "普通教室就好", type: "D" },
      { text: "有大螢幕的教室", type: "C" },
    ],
  },
  {
    id: 8,
    question: "用三個完全不相關的詞造句：「冰箱」、「跳舞」、「月亮」",
    options: [
      { text: "月亮在夜空中跳舞，冰箱裡的食物都跟著搖擺", type: "A" },
      { text: "冰箱、跳舞、月亮都是名詞", type: "D" },
      { text: "冰箱在月光下，有人在跳舞", type: "B" },
      { text: "月亮很亮，冰箱很冷，跳舞很累", type: "C" },
    ],
  },
  {
    id: 9,
    question: "如果動物可以上學，你認為最有趣的學科是什麼？",
    options: [
      { text: "「跨物種溝通學」——學習不同動物的語言和文化", type: "A" },
      { text: "動物體育課", type: "B" },
      { text: "動物不需要上學", type: "D" },
      { text: "動物數學", type: "C" },
    ],
  },
  {
    id: 10,
    question: "如何讓等公車變得更有趣？",
    options: [
      { text: "將公車站變成互動藝術裝置，等車時可以創作音樂", type: "A" },
      { text: "看手機", type: "B" },
      { text: "站著等就好", type: "D" },
      { text: "聽音樂", type: "C" },
    ],
  },
  {
    id: 11,
    question: "給「無聊」這個概念取一個有創意的新名字",
    options: [
      { text: "「靈感冬眠期」", type: "A" },
      { text: "「沒事做」", type: "C" },
      { text: "「空白時間」", type: "B" },
      { text: "不需要新名字", type: "D" },
    ],
  },
  {
    id: 12,
    question: "如果你能改變一個自然法則，你會改變什麼？",
    options: [
      { text: "讓時間可以像沙漏一樣翻轉，偶爾倒流一小段", type: "A" },
      { text: "讓白天更長", type: "B" },
      { text: "不需要改變", type: "D" },
      { text: "讓雨天變少", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "創意天才",
    emoji: "🎨",
    description: "你擁有無限的創造力和想像力！你的思維不受傳統框架限制，能夠產生獨特而新穎的想法。這種創意思維是非常珍貴的天賦，在藝術、設計和創新領域都能發光發熱。",
    traits: ["想像力豐富", "打破常規", "創新思維"],
    strengths: ["創意發想", "問題重構", "獨特視角"],
    weaknesses: ["有時想法太過跳躍", "可能忽略實際限制"],
    tips: ["將創意轉化為實際行動", "找到志同道合的創意夥伴"],
  },
  B: {
    type: "B",
    title: "創意思考者",
    emoji: "💡",
    description: "你有良好的創意能力，能夠在適當的時機產生新穎的想法。你的創意既有新意又不會過於脫離現實，這是一種很好的平衡。",
    traits: ["實用創意", "適度創新", "平衡思維"],
    strengths: ["可行的創意", "改良現有事物", "創意執行力"],
    weaknesses: ["有時過於謹慎", "可能自我限制"],
    tips: ["大膽嘗試更瘋狂的想法", "給自己更多發揮空間"],
  },
  C: {
    type: "C",
    title: "務實創意者",
    emoji: "🔧",
    description: "你是一個務實的人，創意方面傾向於實用導向。雖然天馬行空的想像可能不是你的強項，但你能夠改良和優化現有的事物。",
    traits: ["務實導向", "改良型創意", "腳踏實地"],
    strengths: ["優化現有方案", "執行力強", "實際可行"],
    weaknesses: ["可能缺乏突破性想法", "容易被現實限制"],
    tips: ["練習「如果沒有任何限制」的思考方式", "接觸更多藝術和創意作品"],
  },
  D: {
    type: "D",
    title: "穩健型思考者",
    emoji: "📊",
    description: "你可能是一個更注重邏輯和秩序的人，創意思維可能不是你最常使用的思維方式。但每個人都有創造力，只是表現形式不同。",
    traits: ["邏輯導向", "秩序感強", "傳統思維"],
    strengths: ["條理清晰", "邏輯嚴謹", "穩定可靠"],
    weaknesses: ["可能抗拒新事物", "創意表達較弱"],
    tips: ["嘗試一些創意遊戲和活動", "允許自己「胡思亂想」"],
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
