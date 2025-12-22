// Gaya Makan Di Office
// What's your office eating style?

export const questions = [
  {
    id: 1,
    question: "Lunch time! Kau biasanya...",
    options: [
      { text: "Pergi makan ramai-ramai dengan gang!", type: "A" },
      { text: "Tapau, makan kat desk sambil kerja", type: "B" },
      { text: "GrabFood/FoodPanda order terus", type: "C" },
      { text: "Skip lunch, intermittent fasting konon", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila colleagues ajak makan, response kau...",
    options: [
      { text: "Yes! Aku yang drive!", type: "A" },
      { text: "Okay, ikut je", type: "B" },
      { text: "Depends mood dan tempat", type: "C" },
      { text: "Next time la, busy sikit", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Office ada free snacks. Kau...",
    options: [
      { text: "First to know, first to grab!", type: "A" },
      { text: "Ambil bila convenient", type: "B" },
      { text: "Tunggu orang lain ambil dulu", type: "C" },
      { text: "Free food? Where got?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Desk drawer kau ada...",
    options: [
      { text: "Full pantry! Maggi, biscuit, kopi semua!", type: "A" },
      { text: "Some basic snacks", type: "B" },
      { text: "Kosong, beli bila perlu", type: "C" },
      { text: "Old granola bar dari tahun lepas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Boss belanja team lunch. Kau order...",
    options: [
      { text: "Maximum budget! Rare opportunity!", type: "A" },
      { text: "Normal order, reasonable price", type: "B" },
      { text: "Cheapest option, tak nak malu", type: "C" },
      { text: "Same dengan orang lain je", type: "D" },
    ],
  },
  {
    id: 6,
    question: "3PM slump, kau crave...",
    options: [
      { text: "Teh tarik kurang manis dengan kuih!", type: "A" },
      { text: "Kopi untuk power through", type: "B" },
      { text: "Air kosong je cukup", type: "C" },
      { text: "Nothing, push through je", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Colleague bawak food dari kampung. Kau...",
    options: [
      { text: "First in line! 'Sedapnya akak bawak apa!'", type: "A" },
      { text: "Wait to be offered, then take", type: "B" },
      { text: "Politely decline most times", type: "C" },
      { text: "Tak perasan pun ada food", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Team lunch spot selection, kau prefer...",
    options: [
      { text: "Aku pilih! I know semua best spots!", type: "A" },
      { text: "Vote sama-sama, fair", type: "B" },
      { text: "Ikut je majority", type: "C" },
      { text: "Anywhere, food is food", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila deadline tight, makan kau...",
    options: [
      { text: "Still kena makan! Fuel untuk kerja!", type: "A" },
      { text: "Quick bite, then continue", type: "B" },
      { text: "Makan bila teringat je", type: "C" },
      { text: "Forget to eat sampai gastric", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Office potluck, contribution kau...",
    options: [
      { text: "Cook sendiri! Signature dish!", type: "A" },
      { text: "Beli something nice dari bakery", type: "B" },
      { text: "Chips dan drinks, easy contribution", type: "C" },
      { text: "Lupa sampai last minute, beli 7-11 je", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Office Foodie Champion",
    emoji: "🍱",
    description: "Kau adalah unofficial food coordinator office! Tahu semua best makan spots, first to know bila ada free food. Office tanpa kau macam meal tanpa flavor!",
    traits: ["Food enthusiast", "Social eater", "Office tour guide", "Snack drawer legend"],
    strengths: ["Team bonding over food", "Know all the best spots", "Boost office morale"],
    weaknesses: ["May spend too much on food", "Easily distracted by food", "Productivity might suffer"],
    tips: ["Balance food adventures dengan work", "Share your food knowledge!"],
  },
  B: {
    type: "B",
    title: "Balanced Eater",
    emoji: "😊",
    description: "Makan adalah penting tapi bukan priority utama. Kau eat to live, dengan reasonable approach. Professional even in eating habits!",
    traits: ["Moderate eater", "Socially adaptable", "Efficient lunch breaks", "Healthy approach"],
    strengths: ["Good time management", "Balanced diet likely", "Flexible social eating"],
    weaknesses: ["May miss out on foodie adventures", "Sometimes too practical"],
    tips: ["Loosen up kadang-kadang!", "Food juga bonding opportunity"],
  },
  C: {
    type: "C",
    title: "Low Maintenance Eater",
    emoji: "🤷",
    description: "Food is fuel, nothing more. Kau tak fussy, tak demanding, eat whatever convenient. Efficient tapi maybe miss out on food joy!",
    traits: ["Unfussy eater", "Independent", "Practical", "Not food-focused"],
    strengths: ["Low maintenance", "Save time on food decisions", "Not distracted by cravings"],
    weaknesses: ["May miss team bonding", "Diet might not be optimal", "Miss food joy"],
    tips: ["Join lunch dengan colleagues sometimes", "Food adalah social glue!"],
  },
  D: {
    type: "D",
    title: "Food? What Food?",
    emoji: "💻",
    description: "Work mode: ON. Food mode: ERROR 404. Kau sering lupa makan bila busy, gastric medication adalah bestfriend. Please eat regularly!",
    traits: ["Work-obsessed eater", "Meal skipper", "Forgetful feeder", "Snack ignorant"],
    strengths: ["Dedicated to work", "Not distracted by food", "Time efficient?"],
    weaknesses: ["Health at risk!", "Gastric coming soon", "Missing team bonding"],
    tips: ["SET REMINDER TO EAT!", "Your body needs fuel to work properly!"],
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
