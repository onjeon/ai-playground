export const questions = [
  {
    id: 1,
    question: "請記住這串數字：7-3-9-2-5。這串數字的第三個數字是什麼？",
    options: [
      { text: "3", type: "C" },
      { text: "9", type: "A" },
      { text: "2", type: "B" },
      { text: "5", type: "D" },
    ],
  },
  {
    id: 2,
    question: "記住這些詞語：蘋果、書本、貓咪、雨傘、鑰匙。以下哪個詞語沒有出現在列表中？",
    options: [
      { text: "書本", type: "B" },
      { text: "手機", type: "A" },
      { text: "貓咪", type: "C" },
      { text: "蘋果", type: "D" },
    ],
  },
  {
    id: 3,
    question: "這串數字：4-8-1-6-3-9，總共有幾個數字？",
    options: [
      { text: "5個", type: "C" },
      { text: "6個", type: "A" },
      { text: "7個", type: "D" },
      { text: "4個", type: "B" },
    ],
  },
  {
    id: 4,
    question: "記住這個順序：紅、藍、綠、黃、紫。黃色排第幾？",
    options: [
      { text: "第三", type: "C" },
      { text: "第四", type: "A" },
      { text: "第五", type: "D" },
      { text: "第二", type: "B" },
    ],
  },
  {
    id: 5,
    question: "記住這個電話號碼：02-2567-8943。電話號碼的最後兩位數是什麼？",
    options: [
      { text: "89", type: "B" },
      { text: "43", type: "A" },
      { text: "94", type: "C" },
      { text: "67", type: "D" },
    ],
  },
  {
    id: 6,
    question: "以下動物按順序出現：狗、貓、兔、鳥、魚、龜。第五個動物是什麼？",
    options: [
      { text: "鳥", type: "B" },
      { text: "魚", type: "A" },
      { text: "龜", type: "C" },
      { text: "兔", type: "D" },
    ],
  },
  {
    id: 7,
    question: "記住這些形狀：圓形、三角形、正方形、菱形。以下哪個形狀沒有出現？",
    options: [
      { text: "三角形", type: "C" },
      { text: "長方形", type: "A" },
      { text: "圓形", type: "B" },
      { text: "菱形", type: "D" },
    ],
  },
  {
    id: 8,
    question: "數字序列 5-2-8-4-1-7 的總和是多少？",
    options: [
      { text: "27", type: "A" },
      { text: "25", type: "B" },
      { text: "29", type: "C" },
      { text: "23", type: "D" },
    ],
  },
  {
    id: 9,
    question: "記住這些國家：日本、法國、巴西、埃及、澳洲。哪個國家在第三個位置？",
    options: [
      { text: "法國", type: "C" },
      { text: "巴西", type: "A" },
      { text: "埃及", type: "B" },
      { text: "日本", type: "D" },
    ],
  },
  {
    id: 10,
    question: "這串字母：A-M-K-R-T-W，按順序排列，T是第幾個？",
    options: [
      { text: "第四個", type: "C" },
      { text: "第五個", type: "A" },
      { text: "第六個", type: "D" },
      { text: "第三個", type: "B" },
    ],
  },
  {
    id: 11,
    question: "記住這些數字：12、25、38、47、56。這五個數字中最大和最小的差是多少？",
    options: [
      { text: "44", type: "A" },
      { text: "42", type: "B" },
      { text: "46", type: "C" },
      { text: "40", type: "D" },
    ],
  },
  {
    id: 12,
    question: "回想第一題的數字：7-3-9-2-5，這些數字的總和是多少？",
    options: [
      { text: "24", type: "B" },
      { text: "26", type: "A" },
      { text: "28", type: "C" },
      { text: "22", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "記憶大師",
    emoji: "🧠",
    description: "你擁有出色的記憶力！你能夠快速記住並準確回憶信息，無論是數字、文字還是順序。這種能力在學習、工作和日常生活中都非常有用。",
    traits: ["記憶力強", "注意力集中", "信息處理快"],
    strengths: ["快速記憶", "準確回憶", "細節記憶"],
    weaknesses: ["可能過於依賴記憶", "需要保持練習"],
    tips: ["繼續鍛鍊記憶力", "學習記憶技巧如宮殿記憶法"],
  },
  B: {
    type: "B",
    title: "良好記憶者",
    emoji: "📝",
    description: "你的記憶力相當不錯！雖然有時可能會遺漏一些細節，但整體來說你能夠有效地記住重要信息。通過一些技巧，你的記憶力還能進一步提升。",
    traits: ["記憶穩定", "重點抓取能力強", "基礎扎實"],
    strengths: ["記住重要信息", "避免混淆", "有條理的記憶"],
    weaknesses: ["細節記憶可能較弱", "長期記憶需加強"],
    tips: ["使用筆記和提醒輔助記憶", "練習聯想記憶法"],
  },
  C: {
    type: "C",
    title: "選擇性記憶者",
    emoji: "💡",
    description: "你的記憶力屬於選擇性類型，對於你感興趣或認為重要的事情記得很清楚，但有些細節可能會遺忘。這是很正常的，可以通過策略來改善。",
    traits: ["興趣導向記憶", "重點記憶", "直覺判斷"],
    strengths: ["記住關鍵信息", "過濾不必要的細節", "效率型記憶"],
    weaknesses: ["可能遺漏細節", "需要重複複習"],
    tips: ["對重要信息進行重複複習", "使用圖像輔助記憶"],
  },
  D: {
    type: "D",
    title: "體驗型記憶者",
    emoji: "🌈",
    description: "你可能不太擅長機械式的記憶任務，但這不代表你的記憶力差。你可能更擅長記住情感體驗、故事情節或有意義的連結，而非孤立的信息。",
    traits: ["情感記憶強", "故事性記憶", "體驗導向"],
    strengths: ["記住有意義的事物", "情感連結記憶", "創意聯想"],
    weaknesses: ["數字和細節較弱", "需要更多重複"],
    tips: ["將信息轉化為故事或圖像", "找到記憶的情感連結"],
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
