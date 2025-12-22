export const questions = [
  {
    id: 1,
    question: "一家咖啡店週一賣出100杯咖啡，週二賣出150杯，週三賣出120杯。這三天的平均銷量是多少？",
    options: [
      { text: "123.3杯", type: "A" },
      { text: "130杯", type: "B" },
      { text: "140杯", type: "C" },
      { text: "110杯", type: "D" },
    ],
  },
  {
    id: 2,
    question: "以下數據中哪個是離群值？ 5, 7, 6, 8, 5, 7, 6, 35, 8, 6",
    options: [
      { text: "35", type: "A" },
      { text: "8", type: "B" },
      { text: "5", type: "C" },
      { text: "沒有離群值", type: "D" },
    ],
  },
  {
    id: 3,
    question: "A公司今年營收比去年增長20%，去年營收是100萬，今年營收是多少？",
    options: [
      { text: "120萬", type: "A" },
      { text: "115萬", type: "B" },
      { text: "125萬", type: "C" },
      { text: "110萬", type: "D" },
    ],
  },
  {
    id: 4,
    question: "一份調查顯示60%的人喜歡蘋果，40%的人喜歡橘子。如果調查了200人，喜歡蘋果的有幾人？",
    options: [
      { text: "120人", type: "A" },
      { text: "100人", type: "B" },
      { text: "80人", type: "C" },
      { text: "60人", type: "D" },
    ],
  },
  {
    id: 5,
    question: "某產品的成本是50元，售價是80元，利潤率是多少？",
    options: [
      { text: "60%", type: "A" },
      { text: "30%", type: "B" },
      { text: "50%", type: "C" },
      { text: "37.5%", type: "D" },
    ],
  },
  {
    id: 6,
    question: "以下哪種圖表最適合展示各部門占公司總營收的比例？",
    options: [
      { text: "圓餅圖", type: "A" },
      { text: "折線圖", type: "B" },
      { text: "散佈圖", type: "C" },
      { text: "直方圖", type: "D" },
    ],
  },
  {
    id: 7,
    question: "銷售數據顯示：一月100件，二月110件，三月121件，四月133件。這個趨勢是什麼？",
    options: [
      { text: "每月增長約10%", type: "A" },
      { text: "每月增長10件", type: "B" },
      { text: "增長不規則", type: "C" },
      { text: "沒有明顯趨勢", type: "D" },
    ],
  },
  {
    id: 8,
    question: "A方案成功率70%，B方案成功率80%，但A方案成本是B方案的一半。從成本效益分析，哪個較好？",
    options: [
      { text: "需要計算每單位成功的成本來比較", type: "A" },
      { text: "B方案，因為成功率高", type: "B" },
      { text: "A方案，因為成本低", type: "C" },
      { text: "兩者一樣", type: "D" },
    ],
  },
  {
    id: 9,
    question: "一項研究發現冰淇淋銷量增加時，溺水事件也增加。這說明什麼？",
    options: [
      { text: "相關不等於因果，可能有第三個變數（如夏天）影響兩者", type: "A" },
      { text: "吃冰淇淋會導致溺水", type: "C" },
      { text: "溺水會讓人想吃冰淇淋", type: "D" },
      { text: "這是巧合", type: "B" },
    ],
  },
  {
    id: 10,
    question: "某考試全班平均分75分，標準差10分。小明考了95分，他的表現如何？",
    options: [
      { text: "高於平均2個標準差，非常優秀", type: "A" },
      { text: "還可以", type: "C" },
      { text: "比平均高20分", type: "B" },
      { text: "無法判斷", type: "D" },
    ],
  },
  {
    id: 11,
    question: "公司A市占率30%，公司B市占率25%，其他公司共45%。A和B合併後市占率是？",
    options: [
      { text: "55%", type: "A" },
      { text: "50%", type: "B" },
      { text: "無法計算", type: "D" },
      { text: "27.5%", type: "C" },
    ],
  },
  {
    id: 12,
    question: "以下哪個陳述是最好的數據解讀？「本月網站流量增加50%」",
    options: [
      { text: "需要了解基準數字、增長原因和是否可持續", type: "A" },
      { text: "這是好消息", type: "B" },
      { text: "流量增加就是好事", type: "C" },
      { text: "下個月會繼續增加", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "分析專家",
    emoji: "📊",
    description: "你擁有出色的分析能力！你能夠從數據中發現規律和意義，不會被表面現象迷惑。你的批判性思維使你能夠做出明智的判斷和決策。",
    traits: ["數據敏感", "邏輯思維", "批判性分析"],
    strengths: ["數據解讀", "趨勢預測", "問題診斷"],
    weaknesses: ["可能過於依賴數據", "有時忽略直覺"],
    tips: ["學習更多統計分析方法", "也要培養質性分析能力"],
  },
  B: {
    type: "B",
    title: "實用分析者",
    emoji: "📈",
    description: "你具備良好的基礎分析能力，能夠處理常見的數據分析任務。你的分析通常是實用的，雖然可能不夠深入，但足以支持日常決策。",
    traits: ["基礎扎實", "實用導向", "穩定表現"],
    strengths: ["基本數據處理", "簡單趨勢識別", "快速判斷"],
    weaknesses: ["複雜分析較弱", "可能忽略細節"],
    tips: ["學習更進階的分析技巧", "練習多角度看問題"],
  },
  C: {
    type: "C",
    title: "直覺判斷者",
    emoji: "💫",
    description: "你可能更傾向於用直覺而非數據來做判斷。這有時候也是有效的，但在需要精確分析的場合可能會遇到挑戰。",
    traits: ["直覺導向", "快速決策", "經驗依賴"],
    strengths: ["快速反應", "經驗判斷", "不被數據困住"],
    weaknesses: ["可能忽略重要數據", "判斷較主觀"],
    tips: ["學習基本的數據分析方法", "嘗試用數據驗證直覺"],
  },
  D: {
    type: "D",
    title: "分析學習者",
    emoji: "📚",
    description: "數據分析可能不是你目前最熟悉的領域，但這是可以學習的技能。在這個數據驅動的時代，提升分析能力會對你很有幫助。",
    traits: ["學習中", "成長潛力", "開放態度"],
    strengths: ["願意學習", "不自滿", "有進步空間"],
    weaknesses: ["分析基礎較弱", "需要更多練習"],
    tips: ["從基礎數學和統計概念開始", "多練習實際的數據分析案例"],
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
