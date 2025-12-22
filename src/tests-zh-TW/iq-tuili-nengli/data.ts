export const questions = [
  {
    id: 1,
    question: "如果所有的A都是B，有些B是C，那麼以下哪個結論一定正確？",
    options: [
      { text: "有些A可能是C", type: "A" },
      { text: "所有A都是C", type: "C" },
      { text: "沒有A是C", type: "D" },
      { text: "所有C都是A", type: "B" },
    ],
  },
  {
    id: 2,
    question: "小明比小華高，小華比小強高，小強比小美高。以下哪個結論正確？",
    options: [
      { text: "小明最高", type: "A" },
      { text: "小華最高", type: "B" },
      { text: "小強最高", type: "C" },
      { text: "無法判斷", type: "D" },
    ],
  },
  {
    id: 3,
    question: "如果今天下雨，我就帶傘。今天我沒帶傘。這意味著什麼？",
    options: [
      { text: "今天沒下雨", type: "A" },
      { text: "今天下雨了", type: "C" },
      { text: "我忘記帶傘", type: "D" },
      { text: "無法判斷天氣", type: "B" },
    ],
  },
  {
    id: 4,
    question: "三個盒子分別標著「蘋果」「橘子」「蘋果和橘子」，但所有標籤都是錯的。你從「蘋果和橘子」盒子拿出一顆橘子，那麼這個盒子裡實際裝什麼？",
    options: [
      { text: "只有橘子", type: "A" },
      { text: "只有蘋果", type: "B" },
      { text: "蘋果和橘子", type: "C" },
      { text: "空的", type: "D" },
    ],
  },
  {
    id: 5,
    question: "如果A則B。如果B則C。現在C是假的。以下哪個結論正確？",
    options: [
      { text: "A是假的", type: "A" },
      { text: "A是真的", type: "B" },
      { text: "B是真的", type: "C" },
      { text: "無法判斷A", type: "D" },
    ],
  },
  {
    id: 6,
    question: "房間裡有3個人。甲說：「我們中間有一個人說謊。」乙說：「我們中間有兩個人說謊。」丙說：「我們三個都說謊。」誰在說真話？",
    options: [
      { text: "乙", type: "A" },
      { text: "甲", type: "B" },
      { text: "丙", type: "C" },
      { text: "都在說謊", type: "D" },
    ],
  },
  {
    id: 7,
    question: "所有的狗都會叫。有些會叫的動物是寵物。以下哪個結論正確？",
    options: [
      { text: "有些狗可能是寵物", type: "A" },
      { text: "所有狗都是寵物", type: "B" },
      { text: "沒有狗是寵物", type: "C" },
      { text: "所有寵物都會叫", type: "D" },
    ],
  },
  {
    id: 8,
    question: "A、B、C三人分別是老師、醫生、律師（順序不定）。已知：A不是老師，C既不是老師也不是醫生。B是什麼職業？",
    options: [
      { text: "老師", type: "A" },
      { text: "醫生", type: "B" },
      { text: "律師", type: "C" },
      { text: "無法判斷", type: "D" },
    ],
  },
  {
    id: 9,
    question: "「只有努力才能成功」這句話等同於以下哪個說法？",
    options: [
      { text: "如果成功，那麼一定努力過", type: "A" },
      { text: "如果努力，就一定成功", type: "B" },
      { text: "不努力也可以成功", type: "C" },
      { text: "努力和成功沒有關係", type: "D" },
    ],
  },
  {
    id: 10,
    question: "某班有30人，其中喜歡數學的有18人，喜歡英語的有15人，兩者都喜歡的至少有幾人？",
    options: [
      { text: "3人", type: "A" },
      { text: "0人", type: "B" },
      { text: "5人", type: "C" },
      { text: "8人", type: "D" },
    ],
  },
  {
    id: 11,
    question: "如果「不是A就是B」為真，且A為假，那麼B是？",
    options: [
      { text: "真", type: "A" },
      { text: "假", type: "B" },
      { text: "無法確定", type: "C" },
      { text: "可能真可能假", type: "D" },
    ],
  },
  {
    id: 12,
    question: "有五個人站成一排。小明在小華左邊，小強在小美右邊，小華在小美左邊，小李在最右邊。小明可能在第幾個位置？",
    options: [
      { text: "第一或第二", type: "A" },
      { text: "只能第一", type: "B" },
      { text: "只能第二", type: "C" },
      { text: "任何位置", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "推理高手",
    emoji: "🎯",
    description: "你擁有出色的推理能力！無論是演繹推理、歸納推理還是複雜的邏輯問題，你都能夠條理清晰地分析並得出正確結論。這種能力在學術研究和專業工作中都非常寶貴。",
    traits: ["邏輯嚴謹", "推理準確", "分析清晰"],
    strengths: ["邏輯推理", "問題分析", "結論推導"],
    weaknesses: ["可能過於理性", "有時忽略情感因素"],
    tips: ["嘗試更複雜的邏輯謎題", "也要培養直覺判斷能力"],
  },
  B: {
    type: "B",
    title: "邏輯思考者",
    emoji: "🧩",
    description: "你有良好的推理基礎，能夠處理大多數常見的邏輯問題。雖然有些複雜的推理可能需要更多時間，但你的分析方向通常是正確的。",
    traits: ["基礎扎實", "穩定思考", "有條理"],
    strengths: ["基本推理", "邏輯分析", "系統思考"],
    weaknesses: ["複雜推理較具挑戰", "可能需要更多練習"],
    tips: ["練習更多不同類型的邏輯題", "學習形式邏輯的基本概念"],
  },
  C: {
    type: "C",
    title: "直覺型思考者",
    emoji: "✨",
    description: "你可能更傾向於用直覺而非嚴格的邏輯來做判斷。這有時候反而能帶來創意的解法，但在需要嚴密推理的場合可能會遇到挑戰。",
    traits: ["直覺導向", "創意思維", "跳躍式思考"],
    strengths: ["快速判斷", "創意解法", "不拘泥常規"],
    weaknesses: ["嚴密推理較弱", "可能遺漏邏輯步驟"],
    tips: ["學習分步驟推理的方法", "練習檢驗自己的推理過程"],
  },
  D: {
    type: "D",
    title: "推理學習者",
    emoji: "📚",
    description: "推理能力是可以通過練習顯著提升的。你目前可能對邏輯推理還不太熟悉，但這是一項非常值得學習的技能。",
    traits: ["學習中", "潛力待開發", "成長空間大"],
    strengths: ["有學習意願", "開放態度", "不自滿"],
    weaknesses: ["推理基礎需加強", "邏輯思維需培養"],
    tips: ["從簡單的邏輯題開始", "學習基本的邏輯規則和推理方法"],
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
