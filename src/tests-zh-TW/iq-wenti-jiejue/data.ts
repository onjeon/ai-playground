export const questions = [
  {
    id: 1,
    question: "你的手機掉進水裡了，你會怎麼做？",
    options: [
      { text: "立即關機，用乾布擦乾，放入米缸或乾燥劑中吸濕", type: "A" },
      { text: "用吹風機吹乾", type: "B" },
      { text: "馬上開機看看有沒有壞", type: "D" },
      { text: "繼續用，應該沒事", type: "C" },
    ],
  },
  {
    id: 2,
    question: "你要去一個陌生的地方開會，但GPS導航壞了，你會怎麼辦？",
    options: [
      { text: "找路人問路，同時查詢附近地標作為參考", type: "A" },
      { text: "放棄參加會議", type: "D" },
      { text: "隨便走，應該找得到", type: "C" },
      { text: "打電話給會議主辦方問路", type: "B" },
    ],
  },
  {
    id: 3,
    question: "你發現自己把重要的報告誤刪了，沒有備份，你會怎麼做？",
    options: [
      { text: "檢查資源回收筒，嘗試用數據恢復軟體，同時回憶內容準備重寫", type: "A" },
      { text: "向老闆解釋並請求延期", type: "B" },
      { text: "假裝沒這回事", type: "D" },
      { text: "放棄，重新寫一份", type: "C" },
    ],
  },
  {
    id: 4,
    question: "團隊中兩個成員意見不合，導致專案無法推進，你會怎麼處理？",
    options: [
      { text: "分別了解雙方立場，找出共同點，提出折衷方案", type: "A" },
      { text: "讓他們自己解決", type: "C" },
      { text: "支持其中一方", type: "D" },
      { text: "請主管來處理", type: "B" },
    ],
  },
  {
    id: 5,
    question: "你預算有限，但需要辦一場成功的派對，你會怎麼做？",
    options: [
      { text: "列出必要和非必要項目，尋找便宜替代品，請朋友幫忙準備食物", type: "A" },
      { text: "借錢辦派對", type: "D" },
      { text: "取消派對", type: "C" },
      { text: "只買最基本的東西", type: "B" },
    ],
  },
  {
    id: 6,
    question: "你的電腦突然變得很慢，你會如何處理？",
    options: [
      { text: "檢查後台程序、清理暫存檔、掃描病毒、考慮增加記憶體", type: "A" },
      { text: "買新電腦", type: "D" },
      { text: "繼續用，忍受慢速", type: "C" },
      { text: "重新開機", type: "B" },
    ],
  },
  {
    id: 7,
    question: "你在國外旅行時錢包被偷了，你會怎麼做？",
    options: [
      { text: "立即掛失信用卡、報警、聯繫大使館、用手機支付應急", type: "A" },
      { text: "向路人借錢", type: "C" },
      { text: "回到酒店等待", type: "D" },
      { text: "打電話給家人求助", type: "B" },
    ],
  },
  {
    id: 8,
    question: "你需要學習一項完全陌生的技能，時間很緊迫，你會怎麼做？",
    options: [
      { text: "找最精華的教程，邊學邊做，遇到問題再深入了解", type: "A" },
      { text: "放棄這個任務", type: "D" },
      { text: "從頭到尾慢慢學", type: "C" },
      { text: "請教專家直接指導", type: "B" },
    ],
  },
  {
    id: 9,
    question: "你的鄰居經常深夜製造噪音影響你睡眠，你會怎麼處理？",
    options: [
      { text: "先友善溝通，如果無效再透過管委會或相關單位處理", type: "A" },
      { text: "報警", type: "C" },
      { text: "忍耐", type: "D" },
      { text: "用耳塞睡覺", type: "B" },
    ],
  },
  {
    id: 10,
    question: "你負責的專案進度落後了30%，離截止日只剩一周，你會怎麼做？",
    options: [
      { text: "分析落後原因，重新規劃優先順序，可能需要加班或尋求支援", type: "A" },
      { text: "提交未完成的版本", type: "C" },
      { text: "放棄這個專案", type: "D" },
      { text: "向主管報告並請求延期", type: "B" },
    ],
  },
  {
    id: 11,
    question: "你發現自己最好的朋友在背後說你壞話，你會怎麼處理？",
    options: [
      { text: "找適當的時機，冷靜地與對方溝通，了解原因", type: "A" },
      { text: "假裝不知道", type: "C" },
      { text: "也說對方的壞話", type: "D" },
      { text: "直接質問對方", type: "B" },
    ],
  },
  {
    id: 12,
    question: "你需要在一周內搬家，但還沒找到新房子，你會怎麼做？",
    options: [
      { text: "同時進行多個渠道找房，準備備案（暫住親友家或短租），開始整理行李", type: "A" },
      { text: "隨便找一個先住進去", type: "C" },
      { text: "放棄搬家", type: "D" },
      { text: "請朋友幫忙找", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "問題解決專家",
    emoji: "🔧",
    description: "你是一個出色的問題解決者！面對困難，你能夠冷靜分析、多方思考，並找出最有效的解決方案。你的思維周密，執行力強，是團隊中不可或缺的人才。",
    traits: ["分析能力強", "執行力高", "冷靜沉著"],
    strengths: ["系統性問題解決", "危機處理", "多方案思考"],
    weaknesses: ["可能過於追求完美", "有時會over-thinking"],
    tips: ["有時候快速行動比完美計劃更重要", "相信自己的直覺"],
  },
  B: {
    type: "B",
    title: "務實解決者",
    emoji: "🛠️",
    description: "你傾向於用簡單直接的方式解決問題。雖然可能不是最完美的方案，但你的方法通常有效且快速。你不會把問題複雜化。",
    traits: ["務實導向", "快速反應", "直接了當"],
    strengths: ["快速決策", "行動力強", "不拖延"],
    weaknesses: ["可能錯過更好的方案", "有時考慮不夠周全"],
    tips: ["嘗試在行動前多思考一下其他可能性", "學習系統性分析方法"],
  },
  C: {
    type: "C",
    title: "順其自然者",
    emoji: "🌿",
    description: "你面對問題時傾向於等待或接受現狀。這種態度有時候反而能讓問題自然解決，但有時候也可能錯過最佳處理時機。",
    traits: ["隨遇而安", "壓力耐受", "平常心"],
    strengths: ["不焦慮", "接受現實", "心態平和"],
    weaknesses: ["可能太過被動", "問題可能惡化"],
    tips: ["學習更主動地面對問題", "小問題早處理避免變大問題"],
  },
  D: {
    type: "D",
    title: "需要成長的解決者",
    emoji: "🌱",
    description: "問題解決可能不是你目前最擅長的領域，但這是可以學習的技能。每次面對問題都是成長的機會，關鍵是要培養系統性思考的習慣。",
    traits: ["學習中", "潛力待開發", "需要引導"],
    strengths: ["有成長空間", "願意學習", "謙虛態度"],
    weaknesses: ["可能容易放棄", "缺乏問題解決策略"],
    tips: ["學習基本的問題解決框架", "遇到問題先冷靜，列出可能的選項"],
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
