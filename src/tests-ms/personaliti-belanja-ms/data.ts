// Gaya Belanja Duit
// Kau ni jenis simpan atau belanja sampai kosong?

export const questions = [
  {
    id: 1,
    question: "Gaji/allowance baru masuk! First thing kau buat?",
    options: [
      { text: "Transfer ke savings account dulu!", type: "A" },
      { text: "Budget untuk essentials, then simpan lebih", type: "B" },
      { text: "Treat myself sikit first, deserve it!", type: "C" },
      { text: "SHOPPING TIME! Duit baru, vibes baru!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nampak baju cantik kat mall. Harga RM200. Kau?",
    options: [
      { text: "Walk away, bukan necessity", type: "A" },
      { text: "Think about it, maybe next month", type: "B" },
      { text: "Kalau ada duit extra, why not", type: "C" },
      { text: "BELI! Cantik kena grab terus!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Online shopping cart kau macam mana?",
    options: [
      { text: "Empty most of the time", type: "A" },
      { text: "Ada sikit, tapi rarely checkout", type: "B" },
      { text: "Always ada something, check out bila mood", type: "C" },
      { text: "PENUH! Check out semua bila gaji masuk!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kawan ajak makan fancy restaurant. Budget tight. Kau?",
    options: [
      { text: "Sorry, tak boleh, kena ikut budget", type: "A" },
      { text: "Join tapi order yang murah je", type: "B" },
      { text: "Okay, sekali-sekala takpe", type: "C" },
      { text: "LET'S GO! YOLO! Hutang kemudian!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ada flash sale 90% off. Kau?",
    options: [
      { text: "Ignore, tak perlu = tak beli", type: "A" },
      { text: "Check kalau ada yang memang nak", type: "B" },
      { text: "Grab few items sebab rugi tak beli!", type: "C" },
      { text: "ADD TO CART SEMUA! Too good to miss!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "End of month, bank account kau usually...",
    options: [
      { text: "Still healthy, ada lebih dari budget", type: "A" },
      { text: "Okay, hit target savings", type: "B" },
      { text: "Sikit je left, but okay la", type: "C" },
      { text: "KOSONG! Waiting for next pay day!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Shopee/Lazada 11.11 sale. Strategy kau?",
    options: [
      { text: "Avoid app altogether, trap tu!", type: "A" },
      { text: "Planned list, stick to it", type: "B" },
      { text: "Planned list + few 'bonus' items", type: "C" },
      { text: "Buy first, regret later! SALE!!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kau ada emergency fund tak?",
    options: [
      { text: "Yes, 6 months worth!", type: "A" },
      { text: "Yes, building up slowly", type: "B" },
      { text: "Sikit-sikit ada la...", type: "C" },
      { text: "Emergency fund? What's that?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila stress, kau?",
    options: [
      { text: "Not a retail therapy person", type: "A" },
      { text: "Maybe small treat, controlled", type: "B" },
      { text: "Shopping helps mood!", type: "C" },
      { text: "FULL RETAIL THERAPY MODE!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Relationship dengan duit kau macam mana?",
    options: [
      { text: "Very controlled, I manage money well", type: "A" },
      { text: "Good balance, responsible", type: "B" },
      { text: "Could be better, but enjoying life", type: "C" },
      { text: "Duit tu untuk spend! Can't bring to grave!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Saver Supreme - Kedekut Bijak 💰",
    emoji: "💰",
    description: "KAU NI SAVER HARDCORE! Setiap sen calculated, budget ketat, savings game strong! Kau probably akan retire early sebab financial discipline on point. Orang panggil kedekut, kau panggil financially smart!",
    traits: ["Extreme saver", "Budget master", "Rarely splurge", "Financial discipline"],
    strengths: ["Great savings", "Financial security", "Emergency fund ready", "No debt stress"],
    weaknesses: ["May miss out on experiences", "Could enjoy money more", "Friends think kedekut"],
    tips: ["It's okay to treat yourself sometimes!", "Money is tool, enjoy responsibly"],
  },
  B: {
    type: "B",
    title: "Balanced Spender - Financial Literate 📊",
    emoji: "📊",
    description: "Kau ni PERFECT BALANCE! Save bila kena save, spend bila okay. Budget conscious tapi masih enjoy life. Financial goals on track while living your best life. This is the way!",
    traits: ["Balanced approach", "Budget conscious", "Responsible spending", "Plans for future"],
    strengths: ["Best of both worlds", "Financial stability", "Enjoys life responsibly"],
    weaknesses: ["Sometimes overthink purchases", "May still have FOMO"],
    tips: ["Keep up the good work!", "Your balance is admirable"],
  },
  C: {
    type: "C",
    title: "Lifestyle Spender - YOLO Moderate 🛍️",
    emoji: "🛍️",
    description: "Kau ni lebih ke spending side! Enjoy life is priority, savings second. Kau kerja keras, kau deserve reward! Sometimes impulse buy tapi still got some control. Living the lifestyle!",
    traits: ["Enjoys spending", "Treat yourself mentality", "Some savings", "Lifestyle focused"],
    strengths: ["Enjoys life", "Not stressed about money", "Good experiences"],
    weaknesses: ["Could save more", "Impulse purchases", "Future planning weak"],
    tips: ["Try 50-30-20 rule!", "Automate savings before you spend"],
  },
  D: {
    type: "D",
    title: "Spender King/Queen - Duit Masuk Duit Keluar 💸",
    emoji: "💸",
    description: "KAU NI SPEND KING/QUEEN! Duit masuk, duit keluar immediately! Living paycheck to paycheck tapi vibes always ✨. YOLO is your motto, savings is future you problem! Material gworl/boy energy!",
    traits: ["Big spender", "No savings", "Impulse buyer", "YOLO lifestyle"],
    strengths: ["Enjoys life fully", "Generous with money", "No FOMO", "Great experiences"],
    weaknesses: ["No emergency fund", "Financial stress bila emergency", "Debt risk"],
    tips: ["PLEASE START SAVING!", "Even RM100/month helps!", "Future you will thank present you!"],
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
