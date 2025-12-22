export const questions = [
  {
    id: 1,
    question: "所有的貓都會抓老鼠。小花是一隻貓。請問以下哪個結論是正確的？",
    options: [
      { text: "小花會抓老鼠", type: "A" },
      { text: "小花可能會抓老鼠", type: "B" },
      { text: "小花不會抓老鼠", type: "D" },
      { text: "無法確定", type: "C" },
    ],
  },
  {
    id: 2,
    question: "如果下雨，地面就會濕。地面是濕的。請問以下哪個結論一定正確？",
    options: [
      { text: "一定下雨了", type: "C" },
      { text: "可能下雨了", type: "A" },
      { text: "沒有下雨", type: "D" },
      { text: "地面濕一定是因為下雨", type: "B" },
    ],
  },
  {
    id: 3,
    question: "A比B高，C比B矮。請問以下哪個結論一定正確？",
    options: [
      { text: "A比C高", type: "A" },
      { text: "C比A高", type: "D" },
      { text: "A和C一樣高", type: "C" },
      { text: "無法比較A和C", type: "B" },
    ],
  },
  {
    id: 4,
    question: "小明說：「我說的這句話是假的。」請問這句話是真是假？",
    options: [
      { text: "真的", type: "C" },
      { text: "假的", type: "D" },
      { text: "這是一個悖論，無法判斷", type: "A" },
      { text: "有時真有時假", type: "B" },
    ],
  },
  {
    id: 5,
    question: "有三個盒子，一個裝蘋果，一個裝橘子，一個裝混合水果。三個標籤都貼錯了。你只能從一個盒子拿出一顆水果，如何確定所有盒子的內容？",
    options: [
      { text: "從標籤寫「混合」的盒子拿", type: "A" },
      { text: "從標籤寫「蘋果」的盒子拿", type: "B" },
      { text: "從標籤寫「橘子」的盒子拿", type: "C" },
      { text: "隨便選一個", type: "D" },
    ],
  },
  {
    id: 6,
    question: "農夫要帶狼、羊和白菜過河，船一次只能載農夫和其中一樣。狼和羊不能單獨在一起，羊和白菜也不能單獨在一起。農夫第一步應該帶什麼過河？",
    options: [
      { text: "白菜", type: "C" },
      { text: "狼", type: "D" },
      { text: "羊", type: "A" },
      { text: "都可以", type: "B" },
    ],
  },
  {
    id: 7,
    question: "甲、乙、丙三人中有一人說謊。甲說：「乙在說謊。」乙說：「丙在說謊。」丙說：「甲和乙都在說謊。」誰在說謊？",
    options: [
      { text: "甲", type: "B" },
      { text: "乙", type: "C" },
      { text: "丙", type: "A" },
      { text: "無法判斷", type: "D" },
    ],
  },
  {
    id: 8,
    question: "一個房間裡有三盞燈，房間外有三個開關，你只能進房間一次。如何確定每個開關控制哪盞燈？",
    options: [
      { text: "打開一個開關，觀察燈的亮度", type: "D" },
      { text: "先開一個開關等一會兒關掉，再開另一個，然後進去摸燈泡溫度", type: "A" },
      { text: "隨便試一試", type: "C" },
      { text: "這是不可能的任務", type: "B" },
    ],
  },
  {
    id: 9,
    question: "五個海盜分100枚金幣，按順序提案表決。若提案獲得至少半數同意則通過，否則提案者被扔下海。第一個海盜該提議分給自己多少金幣？",
    options: [
      { text: "98枚", type: "A" },
      { text: "50枚", type: "B" },
      { text: "100枚", type: "C" },
      { text: "20枚", type: "D" },
    ],
  },
  {
    id: 10,
    question: "一個人指著照片說：「這個人的父親是我父親的兒子。」照片中是誰？",
    options: [
      { text: "說話者本人", type: "B" },
      { text: "說話者的兒子", type: "A" },
      { text: "說話者的父親", type: "D" },
      { text: "說話者的兄弟", type: "C" },
    ],
  },
  {
    id: 11,
    question: "12個球中有一個重量不同（可能較輕或較重），用天平最少稱幾次可以找出這個球？",
    options: [
      { text: "2次", type: "C" },
      { text: "3次", type: "A" },
      { text: "4次", type: "B" },
      { text: "5次", type: "D" },
    ],
  },
  {
    id: 12,
    question: "有100層樓，你有兩顆雞蛋。雞蛋從某一層樓摔下會破。如何用最少的次數找出這個臨界樓層？最佳策略的最壞情況需要幾次？",
    options: [
      { text: "10次", type: "B" },
      { text: "14次", type: "A" },
      { text: "50次", type: "D" },
      { text: "7次", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "邏輯大師",
    emoji: "🧩",
    description: "你擁有出色的邏輯推理能力！面對複雜的謎題，你能夠冷靜分析，找出隱藏的規律和解決方案。你的思維清晰、嚴謹，非常適合從事需要邏輯分析的工作。",
    traits: ["分析能力強", "思維嚴謹", "善於推理"],
    strengths: ["複雜問題解決", "找出問題癥結", "邏輯推演"],
    weaknesses: ["有時過於理性", "可能忽略情感因素"],
    tips: ["繼續挑戰更難的邏輯謎題", "也要培養創意思維的靈活性"],
  },
  B: {
    type: "B",
    title: "穩健思考者",
    emoji: "🎯",
    description: "你是一位穩健的思考者，雖然不一定總能快速找到答案，但你的推理過程是有條理的。你不會輕易被表面現象迷惑，願意深入思考問題的本質。",
    traits: ["謹慎思考", "不輕易下結論", "穩步推進"],
    strengths: ["避免衝動判斷", "思考全面", "注重細節"],
    weaknesses: ["決策速度較慢", "有時過於保守"],
    tips: ["練習在時間壓力下做決策", "相信自己的第一直覺"],
  },
  C: {
    type: "C",
    title: "直覺型思考者",
    emoji: "💭",
    description: "你傾向於用直覺來解決問題，有時候這會帶來出人意料的好結果，但在邏輯謎題中可能會遇到挑戰。你的思維方式獨特，只需要多一些系統性訓練。",
    traits: ["直覺敏銳", "思維跳躍", "創意豐富"],
    strengths: ["快速反應", "創新思考", "靈活變通"],
    weaknesses: ["嚴謹邏輯需加強", "容易被誤導"],
    tips: ["學習基本的邏輯推理規則", "練習分步驟解題"],
  },
  D: {
    type: "D",
    title: "探索型學習者",
    emoji: "🔍",
    description: "邏輯謎題對你來說可能是全新的領域，但這正是學習成長的好機會！每個人都有自己擅長的智力類型，邏輯推理只是其中之一。",
    traits: ["好奇心強", "願意嘗試", "開放學習"],
    strengths: ["不怕失敗", "勇於探索", "心態開放"],
    weaknesses: ["邏輯基礎需要加強", "需要更多練習"],
    tips: ["從簡單的邏輯題開始練習", "享受解題的過程而非結果"],
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
