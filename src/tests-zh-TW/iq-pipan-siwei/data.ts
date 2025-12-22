export const questions = [
  {
    id: 1,
    question: "「這個產品很棒，因為有名人代言。」這個論證有什麼問題？",
    options: [
      { text: "訴諸權威，名人代言不代表產品真的好", type: "A" },
      { text: "沒有問題，名人不會代言爛產品", type: "C" },
      { text: "這是很好的證據", type: "D" },
      { text: "應該看更多評論", type: "B" },
    ],
  },
  {
    id: 2,
    question: "「大家都這樣做，所以這是對的。」這是什麼類型的謬誤？",
    options: [
      { text: "訴諸群眾（從眾謬誤）", type: "A" },
      { text: "這不是謬誤", type: "D" },
      { text: "循環論證", type: "C" },
      { text: "稻草人謬誤", type: "B" },
    ],
  },
  {
    id: 3,
    question: "一篇新聞報導說「研究顯示喝咖啡可以延年益壽」，你應該先問什麼？",
    options: [
      { text: "研究是誰做的？樣本多大？有對照組嗎？", type: "A" },
      { text: "馬上開始喝咖啡", type: "D" },
      { text: "新聞說的一定對", type: "C" },
      { text: "這一定是假新聞", type: "B" },
    ],
  },
  {
    id: 4,
    question: "「如果你不同意我，你就是我的敵人。」這是什麼類型的思維？",
    options: [
      { text: "非黑即白（二分法謬誤）", type: "A" },
      { text: "完全合理的立場", type: "D" },
      { text: "很好的辯論策略", type: "C" },
      { text: "一種強調", type: "B" },
    ],
  },
  {
    id: 5,
    question: "「我爺爺抽菸抽到90歲，所以抽菸沒害。」這個論證有什麼問題？",
    options: [
      { text: "以偏概全，個案不能代表整體統計", type: "A" },
      { text: "這證明抽菸安全", type: "D" },
      { text: "爺爺說的一定對", type: "C" },
      { text: "可能是基因好", type: "B" },
    ],
  },
  {
    id: 6,
    question: "評估信息來源的可靠性，最重要的是什麼？",
    options: [
      { text: "查證來源、交叉比對、評估作者專業度", type: "A" },
      { text: "看轉發次數多不多", type: "D" },
      { text: "標題夠不夠吸引人", type: "C" },
      { text: "看是不是官方發布", type: "B" },
    ],
  },
  {
    id: 7,
    question: "「A導致B」和「A與B相關」有什麼區別？",
    options: [
      { text: "相關不等於因果，可能有第三因素或巧合", type: "A" },
      { text: "兩者是一樣的", type: "D" },
      { text: "相關比因果更可靠", type: "C" },
      { text: "因果比較科學", type: "B" },
    ],
  },
  {
    id: 8,
    question: "「你不能證明鬼不存在，所以鬼存在。」這是什麼謬誤？",
    options: [
      { text: "訴諸無知（舉證責任倒置）", type: "A" },
      { text: "很好的邏輯", type: "D" },
      { text: "科學方法", type: "C" },
      { text: "保守態度", type: "B" },
    ],
  },
  {
    id: 9,
    question: "在辯論中，對方說「你三年前也支持過這個觀點」，這是什麼策略？",
    options: [
      { text: "人身攻擊，應該討論論點本身而非論者", type: "A" },
      { text: "有效的反駁", type: "C" },
      { text: "很好的提醒", type: "D" },
      { text: "邏輯推理", type: "B" },
    ],
  },
  {
    id: 10,
    question: "「自然的東西就是好的。」這個說法有什麼問題？",
    options: [
      { text: "自然謬誤，自然不等於安全或有益", type: "A" },
      { text: "完全正確", type: "D" },
      { text: "科學證明", type: "C" },
      { text: "大部分情況是對的", type: "B" },
    ],
  },
  {
    id: 11,
    question: "面對一個複雜問題，批判性思維者會怎麼做？",
    options: [
      { text: "收集多方信息，考慮不同觀點，暫緩判斷", type: "A" },
      { text: "相信權威的說法", type: "C" },
      { text: "堅持自己的第一印象", type: "D" },
      { text: "快速做出決定", type: "B" },
    ],
  },
  {
    id: 12,
    question: "「政府說這個政策好，所以一定好。」這是什麼謬誤？",
    options: [
      { text: "盲目訴諸權威", type: "A" },
      { text: "愛國表現", type: "D" },
      { text: "正確的態度", type: "C" },
      { text: "謹慎態度", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "批判思維專家",
    emoji: "🎓",
    description: "你擁有出色的批判性思維能力！你能夠識別邏輯謬誤、質疑假設、評估證據，不會輕易被表面論述所說服。這種能力在這個信息爆炸的時代非常珍貴。",
    traits: ["邏輯清晰", "質疑精神", "獨立思考"],
    strengths: ["謬誤識別", "證據評估", "理性分析"],
    weaknesses: ["可能過於質疑一切", "有時會顯得cynical"],
    tips: ["保持開放心態接受新觀點", "批判但不要憤世嫉俗"],
  },
  B: {
    type: "B",
    title: "理性思考者",
    emoji: "⚖️",
    description: "你有良好的批判思維基礎，能夠識別一些明顯的謬誤和偏見。雖然有些複雜的論證可能需要更仔細的分析，但你的方向是正確的。",
    traits: ["基礎扎實", "願意質疑", "尋求平衡"],
    strengths: ["基本謬誤識別", "開放態度", "願意思考"],
    weaknesses: ["有時會被說服力強的論述影響", "需要更多練習"],
    tips: ["學習更多邏輯謬誤類型", "練習分析新聞和廣告"],
  },
  C: {
    type: "C",
    title: "信任型思考者",
    emoji: "🤝",
    description: "你可能傾向於相信權威或多數人的意見，這不一定是壞事，但在某些情況下可能會被誤導。培養更多質疑精神會幫助你做出更好的判斷。",
    traits: ["信任他人", "接受權威", "隨和態度"],
    strengths: ["社會適應", "不過度質疑", "易於合作"],
    weaknesses: ["可能被誤導", "需要更多獨立思考"],
    tips: ["學習問「為什麼」和「證據在哪裡」", "不要害怕質疑"],
  },
  D: {
    type: "D",
    title: "批判思維學習者",
    emoji: "📚",
    description: "批判性思維是一項可以學習的技能。你目前可能還不太熟悉各種邏輯謬誤和評估方法，但這是現代社會非常重要的能力，值得投資學習。",
    traits: ["學習中", "潛力待開發", "成長空間大"],
    strengths: ["有學習意願", "不自滿", "開放態度"],
    weaknesses: ["批判思維較弱", "容易被說服"],
    tips: ["學習基本的邏輯謬誤", "練習對日常信息保持懷疑"],
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
