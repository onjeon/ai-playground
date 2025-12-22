export const questions = [
  {
    id: 1,
    question: "找出規律：紅、藍、紅、藍、紅、__",
    options: [
      { text: "藍", type: "A" },
      { text: "紅", type: "B" },
      { text: "綠", type: "C" },
      { text: "黃", type: "D" },
    ],
  },
  {
    id: 2,
    question: "找出規律：1, 3, 5, 7, 9, __",
    options: [
      { text: "11", type: "A" },
      { text: "10", type: "B" },
      { text: "12", type: "C" },
      { text: "13", type: "D" },
    ],
  },
  {
    id: 3,
    question: "哪個圖形不屬於同一類？ ● ● ● ■ ●",
    options: [
      { text: "第四個（■）", type: "A" },
      { text: "第一個", type: "B" },
      { text: "第五個", type: "C" },
      { text: "都屬於同一類", type: "D" },
    ],
  },
  {
    id: 4,
    question: "找出規律：A1, B2, C3, D4, __",
    options: [
      { text: "E5", type: "A" },
      { text: "F5", type: "B" },
      { text: "E4", type: "C" },
      { text: "D5", type: "D" },
    ],
  },
  {
    id: 5,
    question: "以下數列的下一個是什麼？ 2, 4, 8, 16, __",
    options: [
      { text: "32", type: "A" },
      { text: "24", type: "B" },
      { text: "20", type: "C" },
      { text: "30", type: "D" },
    ],
  },
  {
    id: 6,
    question: "找出規律：月、火、水、木、金、__",
    options: [
      { text: "土", type: "A" },
      { text: "日", type: "B" },
      { text: "星", type: "C" },
      { text: "天", type: "D" },
    ],
  },
  {
    id: 7,
    question: "哪個詞語與其他三個不同？ 蘋果、香蕉、胡蘿蔔、葡萄",
    options: [
      { text: "胡蘿蔔", type: "A" },
      { text: "蘋果", type: "B" },
      { text: "香蕉", type: "C" },
      { text: "葡萄", type: "D" },
    ],
  },
  {
    id: 8,
    question: "找出規律：○○●、○●○、●○○、__",
    options: [
      { text: "○○●", type: "A" },
      { text: "●●○", type: "B" },
      { text: "○●●", type: "C" },
      { text: "●●●", type: "D" },
    ],
  },
  {
    id: 9,
    question: "以下哪個選項延續了這個模式？ ABC, BCD, CDE, __",
    options: [
      { text: "DEF", type: "A" },
      { text: "EFG", type: "B" },
      { text: "DFG", type: "C" },
      { text: "CEF", type: "D" },
    ],
  },
  {
    id: 10,
    question: "找出規律：1, 4, 2, 5, 3, 6, __",
    options: [
      { text: "4", type: "A" },
      { text: "7", type: "B" },
      { text: "5", type: "C" },
      { text: "8", type: "D" },
    ],
  },
  {
    id: 11,
    question: "哪個選項完成這個模式？ 大、中、小、大、中、小、大、__",
    options: [
      { text: "中", type: "A" },
      { text: "小", type: "B" },
      { text: "大", type: "C" },
      { text: "無", type: "D" },
    ],
  },
  {
    id: 12,
    question: "找出規律：11, 22, 33, 44, __",
    options: [
      { text: "55", type: "A" },
      { text: "45", type: "B" },
      { text: "54", type: "C" },
      { text: "66", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "模式識別大師",
    emoji: "🔍",
    description: "你對模式和規律有極強的識別能力！無論是數字、圖形還是文字序列，你都能快速發現其中的規律。這種能力在科學研究、數據分析和問題解決中都非常有價值。",
    traits: ["規律敏感", "觀察力強", "識別快速"],
    strengths: ["模式發現", "趨勢預測", "異常檢測"],
    weaknesses: ["可能過度尋找規律", "有時會看到不存在的模式"],
    tips: ["將模式識別能力應用於實際問題", "也要學會接受隨機性"],
  },
  B: {
    type: "B",
    title: "規律觀察者",
    emoji: "👁️",
    description: "你有良好的模式識別能力，能夠發現大多數常見的規律。雖然有些複雜的模式可能需要更多時間來識別，但你的基礎是扎實的。",
    traits: ["觀察仔細", "基礎扎實", "穩定發揮"],
    strengths: ["基本模式識別", "耐心觀察", "系統分析"],
    weaknesses: ["複雜模式較具挑戰", "可能需要更多練習"],
    tips: ["練習更多不同類型的模式題", "學習常見的數學規律"],
  },
  C: {
    type: "C",
    title: "發展中的觀察者",
    emoji: "🌱",
    description: "模式識別能力是可以通過練習提升的。你目前可能對某些類型的模式還不太熟悉，但通過有意識的訓練，你一定能夠提升這項能力。",
    traits: ["學習中", "潛力待開發", "需要練習"],
    strengths: ["有進步空間", "願意學習", "開放心態"],
    weaknesses: ["模式識別較弱", "需要更多經驗"],
    tips: ["從簡單的重複模式開始練習", "多觀察生活中的規律"],
  },
  D: {
    type: "D",
    title: "隨機思考者",
    emoji: "🎲",
    description: "你可能不太習慣尋找規律，或者你的思維方式更傾向於處理獨特和隨機的情況。這不一定是缺點，有些問題確實不需要模式思維。",
    traits: ["獨立思考", "不受框架限制", "隨機應變"],
    strengths: ["處理例外情況", "創意思維", "不拘泥常規"],
    weaknesses: ["可能錯過隱藏規律", "系統性思考較弱"],
    tips: ["學習基本的模式類型", "嘗試用不同角度看問題"],
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
