// Gaya Makan Tengah Malam
// Fun test tentang personality late night snacking

export const questions = [
  {
    id: 1,
    question: "Pukul 12 malam, perut bunyi. First thought?",
    options: [
      { text: "MAKAN! Perut adalah boss!", type: "A" },
      { text: "Minum air dulu, tengok lapar betul ke tak", type: "B" },
      { text: "Ignore, esok je makan", type: "C" },
      { text: "Cari snack ringan je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Late night snack favorite kau?",
    options: [
      { text: "Heavy! Nasi goreng atau maggi!", type: "A" },
      { text: "Roti atau biscuit je", type: "B" },
      { text: "Fruits atau healthy snacks", type: "C" },
      { text: "Junk food! Chips, chocolates!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Fridge kosong tengah malam. Apa kau buat?",
    options: [
      { text: "Pergi mamak atau McD 24 jam!", type: "A" },
      { text: "Order GrabFood/FoodPanda!", type: "B" },
      { text: "Tidur je la, malas nak keluar", type: "C" },
      { text: "Cari apa-apa dalam pantry", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kawan ajak supper 2 pagi. Response?",
    options: [
      { text: "LET'S GO! Supper is life!", type: "A" },
      { text: "Okay kalau esok off day", type: "B" },
      { text: "Sorry, dah tidur", type: "C" },
      { text: "Depends on tempat dan distance", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Berapa kali seminggu kau makan tengah malam?",
    options: [
      { text: "Almost every night!", type: "A" },
      { text: "2-3 kali, reasonable", type: "B" },
      { text: "Sekali-sekala je, jarang", type: "C" },
      { text: "Weekend je biasanya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Makan banyak tengah malam, esok pagi feeling macam mana?",
    options: [
      { text: "Worth it! No regrets!", type: "A" },
      { text: "Sikit guilty tapi okay la", type: "B" },
      { text: "Regret! Kembung perut!", type: "C" },
      { text: "Normal je, dah biasa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Diet vs late night cravings. Siapa menang?",
    options: [
      { text: "Cravings always win!", type: "A" },
      { text: "Diet mostly, tapi ada cheat nights", type: "B" },
      { text: "Diet strong! No compromise!", type: "C" },
      { text: "Balance, moderate portions", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tempat supper favorite?",
    options: [
      { text: "Mamak! The OG supper spot!", type: "A" },
      { text: "Fast food 24 hours", type: "B" },
      { text: "Home delivery, malas keluar", type: "C" },
      { text: "Gerai tepi jalan yang best!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tengok mukbang video malam-malam. Effect?",
    options: [
      { text: "Terus lapar! Nak makan jugak!", type: "A" },
      { text: "Teringin tapi tahan", type: "B" },
      { text: "Tak affect, boleh tahan", type: "C" },
      { text: "Avoid mukbang kalau malam", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Health concern pasal late night eating. Kau macam mana?",
    options: [
      { text: "YOLO! Enjoy life!", type: "A" },
      { text: "Aware tapi kadang give in", type: "B" },
      { text: "Very concerned, avoid makan malam", type: "C" },
      { text: "Moderation is key, sikit-sikit boleh", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Midnight Feast Master",
    emoji: "🌙",
    description: "Kau ni legendary midnight snacker! Perut bunyi = makan! Mamak, McD, nasi goreng - semua masuk! Night owl yang tak boleh tidur lapar. Living the supper life!",
    traits: ["Food lover", "Night owl", "Indulgent", "Social eater"],
    strengths: ["Never sleep hungry", "Know best supper spots", "Fun company"],
    weaknesses: ["Health concerns", "Weight management", "Sleep quality"],
    tips: ["Balance dengan exercise", "Lighter snacks sometimes"],
  },
  B: {
    type: "B",
    title: "Moderate Muncher",
    emoji: "🍪",
    description: "Kau snack dengan moderation! Ada control tapi tak sampai rigid. Enjoy supper bila occasion calls, tapi tau bila nak stop. Balanced approach!",
    traits: ["Moderate", "Balanced", "Self-aware", "Controlled"],
    strengths: ["Good balance", "Enjoy without guilt", "Healthy relationship with food"],
    weaknesses: ["Sometimes too controlled", "Miss spontaneous supper"],
    tips: ["Indulge once in a while", "It's okay to enjoy"],
  },
  C: {
    type: "C",
    title: "Disciplined Sleeper",
    emoji: "😴",
    description: "Makan malam? Not for you! Kau prioritize sleep dan health. Ignore cravings macam pro, diet game strong. Discipline level impressive!",
    traits: ["Disciplined", "Health-conscious", "Strong willpower", "Early sleeper"],
    strengths: ["Healthy lifestyle", "Good sleep", "Weight controlled"],
    weaknesses: ["Miss supper bonding", "Sometimes too rigid"],
    tips: ["Occasional treat is okay", "Social supper has value too"],
  },
  D: {
    type: "D",
    title: "Smart Snacker",
    emoji: "🧠",
    description: "Kau snack dengan strategy! Lighter options, moderate portions, balance antara enjoy dan health. Not too strict, not too loose. Smart approach!",
    traits: ["Strategic", "Balanced", "Mindful", "Practical"],
    strengths: ["Best of both worlds", "No guilt", "Sustainable habits"],
    weaknesses: ["Might overthink food", "Miss spontaneity"],
    tips: ["You're doing great", "Trust your instincts"],
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
