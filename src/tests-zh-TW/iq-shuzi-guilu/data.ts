export const questions = [
  {
    id: 1,
    question: "找出以下數字的規律，空格應填入什麼？ 2, 4, 8, 16, __",
    options: [
      { text: "24", type: "C" },
      { text: "32", type: "A" },
      { text: "20", type: "D" },
      { text: "28", type: "B" },
    ],
  },
  {
    id: 2,
    question: "下列數列中，下一個數字是什麼？ 1, 1, 2, 3, 5, 8, __",
    options: [
      { text: "10", type: "B" },
      { text: "11", type: "C" },
      { text: "13", type: "A" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 3,
    question: "找出規律並填入空格：3, 6, 12, 24, __",
    options: [
      { text: "48", type: "A" },
      { text: "36", type: "B" },
      { text: "30", type: "C" },
      { text: "42", type: "D" },
    ],
  },
  {
    id: 4,
    question: "下一個數字是什麼？ 100, 81, 64, 49, 36, __",
    options: [
      { text: "16", type: "B" },
      { text: "25", type: "A" },
      { text: "20", type: "C" },
      { text: "30", type: "D" },
    ],
  },
  {
    id: 5,
    question: "找出規律：2, 6, 12, 20, 30, __",
    options: [
      { text: "40", type: "C" },
      { text: "42", type: "A" },
      { text: "38", type: "D" },
      { text: "44", type: "B" },
    ],
  },
  {
    id: 6,
    question: "下列數列的下一項是？ 1, 4, 9, 16, 25, __",
    options: [
      { text: "30", type: "D" },
      { text: "36", type: "A" },
      { text: "32", type: "C" },
      { text: "35", type: "B" },
    ],
  },
  {
    id: 7,
    question: "找出規律並填入：5, 10, 20, 40, __",
    options: [
      { text: "60", type: "C" },
      { text: "80", type: "A" },
      { text: "70", type: "B" },
      { text: "50", type: "D" },
    ],
  },
  {
    id: 8,
    question: "數列中缺少的數字是？ 3, 9, 27, __, 243",
    options: [
      { text: "54", type: "D" },
      { text: "81", type: "A" },
      { text: "72", type: "C" },
      { text: "63", type: "B" },
    ],
  },
  {
    id: 9,
    question: "下一個數字是什麼？ 0, 1, 3, 6, 10, __",
    options: [
      { text: "15", type: "A" },
      { text: "14", type: "B" },
      { text: "13", type: "C" },
      { text: "16", type: "D" },
    ],
  },
  {
    id: 10,
    question: "找出規律：1, 2, 4, 7, 11, __",
    options: [
      { text: "14", type: "C" },
      { text: "16", type: "A" },
      { text: "15", type: "B" },
      { text: "17", type: "D" },
    ],
  },
  {
    id: 11,
    question: "下列數列中下一個數字是？ 2, 3, 5, 7, 11, __",
    options: [
      { text: "13", type: "A" },
      { text: "12", type: "B" },
      { text: "15", type: "C" },
      { text: "14", type: "D" },
    ],
  },
  {
    id: 12,
    question: "找出規律並填入空格：1, 8, 27, 64, __",
    options: [
      { text: "100", type: "D" },
      { text: "125", type: "A" },
      { text: "81", type: "B" },
      { text: "128", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "數字天才",
    emoji: "🧮",
    description: "你是真正的數字天才！你對數字規律有敏銳的洞察力，能夠快速識別複雜的數學模式。你的邏輯思維能力非常出色，這使你在數學和科學領域具有極大的優勢。",
    traits: ["數學敏銳度高", "邏輯清晰", "分析能力強"],
    strengths: ["快速識別數字模式", "精確計算", "抽象思維"],
    weaknesses: ["可能過於依賴邏輯", "有時忽略直覺"],
    tips: ["嘗試將數學能力應用於實際問題解決", "也要培養創意思維"],
  },
  B: {
    type: "B",
    title: "邏輯思考者",
    emoji: "🔢",
    description: "你是一位優秀的邏輯思考者。雖然你可能不是每題都能快速解答，但你有很強的推理能力，能夠通過系統性的方法找到答案。你的思考方式穩健而可靠。",
    traits: ["系統性思考", "耐心細緻", "方法論導向"],
    strengths: ["穩定的問題解決能力", "不易犯錯", "思維嚴謹"],
    weaknesses: ["處理速度可能較慢", "面對未知模式時需要更多時間"],
    tips: ["練習快速心算以提升反應速度", "嘗試更多數學謎題"],
  },
  C: {
    type: "C",
    title: "潛力型選手",
    emoji: "📊",
    description: "你在數字規律方面有不錯的潛力！雖然有些複雜的模式可能讓你感到困惑，但通過練習，你一定能大幅提升。你的基礎邏輯能力是穩固的。",
    traits: ["基礎穩固", "願意學習", "進步空間大"],
    strengths: ["認識基本數學規律", "有好奇心", "不怕挑戰"],
    weaknesses: ["複雜模式需要更多練習", "有時會被細節干擾"],
    tips: ["多做數字序列練習題", "學習常見的數學規律類型"],
  },
  D: {
    type: "D",
    title: "創意思考者",
    emoji: "💡",
    description: "你可能不是典型的數學型思考者，但這不代表你的智力不高！你可能更擅長創意思考或其他類型的智力挑戰。數學邏輯只是智力的一個方面。",
    traits: ["創意導向", "多元思維", "獨特視角"],
    strengths: ["跳脫框架思考", "藝術感受力", "情感智慧"],
    weaknesses: ["傳統數學題可能較弱", "需要培養數字敏感度"],
    tips: ["嘗試用遊戲方式學習數學", "找出數學與興趣的連結點"],
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
