export const questions = [
  {
    id: 1,
    question: "如果將字母「F」順時針旋轉90度，它會變成什麼樣子？",
    options: [
      { text: "像是「⌐」躺下的樣子", type: "A" },
      { text: "和原來一樣", type: "C" },
      { text: "像是鏡像的F", type: "B" },
      { text: "無法想像", type: "D" },
    ],
  },
  {
    id: 2,
    question: "想像一個正方形，將它旋轉45度後，它看起來像什麼？",
    options: [
      { text: "菱形", type: "A" },
      { text: "長方形", type: "B" },
      { text: "三角形", type: "C" },
      { text: "圓形", type: "D" },
    ],
  },
  {
    id: 3,
    question: "數字「9」旋轉180度後是什麼？",
    options: [
      { text: "6", type: "A" },
      { text: "9", type: "B" },
      { text: "0", type: "C" },
      { text: "8", type: "D" },
    ],
  },
  {
    id: 4,
    question: "想像你拿著一個杯子，將它倒過來（旋轉180度），杯口朝向哪裡？",
    options: [
      { text: "朝下", type: "A" },
      { text: "朝上", type: "B" },
      { text: "朝左", type: "C" },
      { text: "朝右", type: "D" },
    ],
  },
  {
    id: 5,
    question: "字母「N」順時針旋轉90度後像什麼？",
    options: [
      { text: "像「Z」", type: "A" },
      { text: "像「N」", type: "B" },
      { text: "像「И」", type: "C" },
      { text: "像「M」", type: "D" },
    ],
  },
  {
    id: 6,
    question: "想像一個等邊三角形，頂點朝上。逆時針旋轉120度後，頂點朝向哪裡？",
    options: [
      { text: "右下方", type: "A" },
      { text: "左下方", type: "B" },
      { text: "仍然朝上", type: "C" },
      { text: "朝下", type: "D" },
    ],
  },
  {
    id: 7,
    question: "一個箭頭「→」逆時針旋轉90度後，指向哪裡？",
    options: [
      { text: "向上↑", type: "A" },
      { text: "向下↓", type: "B" },
      { text: "向左←", type: "C" },
      { text: "仍向右→", type: "D" },
    ],
  },
  {
    id: 8,
    question: "想像字母「L」，將它順時針旋轉180度，會變成什麼樣子？",
    options: [
      { text: "像是顛倒的「Γ」", type: "A" },
      { text: "和原來一樣", type: "B" },
      { text: "像「J」", type: "C" },
      { text: "像「r」", type: "D" },
    ],
  },
  {
    id: 9,
    question: "一個人面向東方，逆時針轉90度後，他面向哪個方向？",
    options: [
      { text: "北方", type: "A" },
      { text: "南方", type: "B" },
      { text: "西方", type: "C" },
      { text: "仍是東方", type: "D" },
    ],
  },
  {
    id: 10,
    question: "想像數字「7」順時針旋轉90度，它會變成什麼樣子？",
    options: [
      { text: "像「⌐」橫躺的樣子", type: "A" },
      { text: "像「L」", type: "B" },
      { text: "和原來一樣", type: "C" },
      { text: "像「∟」", type: "D" },
    ],
  },
  {
    id: 11,
    question: "一個正方體的某一面塗成紅色。將正方體向右滾動90度，紅色的面會在哪裡？",
    options: [
      { text: "從上面移到右側", type: "A" },
      { text: "仍在上面", type: "C" },
      { text: "移到底部", type: "D" },
      { text: "移到左側", type: "B" },
    ],
  },
  {
    id: 12,
    question: "時鐘顯示3:00，將錶面旋轉180度後（倒過來看），看起來像幾點？",
    options: [
      { text: "9:00", type: "A" },
      { text: "3:00", type: "B" },
      { text: "6:00", type: "C" },
      { text: "12:00", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "心理旋轉大師",
    emoji: "🔄",
    description: "你擁有出色的心理旋轉能力！你能夠在腦海中輕鬆旋轉和操作物體，這種空間智能在建築、工程、設計和藝術領域都非常寶貴。",
    traits: ["空間想像力強", "三維思維", "心像操作佳"],
    strengths: ["物體旋轉想像", "空間推理", "視覺化能力"],
    weaknesses: ["可能忽略非視覺信息", "有時過於依賴空間思維"],
    tips: ["將能力應用於實際問題", "嘗試3D設計或藝術創作"],
  },
  B: {
    type: "B",
    title: "空間思考者",
    emoji: "🌀",
    description: "你有良好的心理旋轉基礎，能夠處理大多數常見的空間旋轉問題。雖然有些複雜的三維旋轉可能需要更多時間，但你的空間感是不錯的。",
    traits: ["基礎穩固", "空間感佳", "穩定表現"],
    strengths: ["基本旋轉想像", "方向感", "空間理解"],
    weaknesses: ["複雜旋轉較具挑戰", "三維思維可加強"],
    tips: ["多玩3D拼圖遊戲", "練習在腦中旋轉物體"],
  },
  C: {
    type: "C",
    title: "發展中的空間感",
    emoji: "🎯",
    description: "心理旋轉能力是可以通過練習提升的。你目前可能對在腦中旋轉物體還不太熟悉，但這是可以訓練的技能。",
    traits: ["其他智能較強", "空間待開發", "有潛力"],
    strengths: ["其他領域可能較強", "願意學習", "不怕挑戰"],
    weaknesses: ["心理旋轉較弱", "需要更多練習"],
    tips: ["從簡單的2D旋轉開始練習", "玩一些空間遊戲"],
  },
  D: {
    type: "D",
    title: "語言或邏輯導向",
    emoji: "📝",
    description: "你可能是一個更傾向於語言或邏輯思維的人，空間旋轉可能不是你最自然的思維方式。這完全沒關係，每個人的智能結構都不同！",
    traits: ["語言導向", "邏輯思維", "非空間傾向"],
    strengths: ["可能在語言或邏輯方面更強", "文字處理", "概念思考"],
    weaknesses: ["空間旋轉較弱", "視覺化能力待發展"],
    tips: ["不要害怕空間問題，用其他方式輔助理解", "實際操作物體來學習"],
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
