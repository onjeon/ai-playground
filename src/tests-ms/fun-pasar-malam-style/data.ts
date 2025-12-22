// Gaya Shopping Pasar Malam
// Fun test tentang personality bila pergi pasar malam

export const questions = [
  {
    id: 1,
    question: "Sampai pasar malam, apa first thing kau buat?",
    options: [
      { text: "Survey satu round dulu baru decide!", type: "A" },
      { text: "Terus pergi stall favourite!", type: "B" },
      { text: "Ikut bau sedap, perut decide!", type: "C" },
      { text: "Ambik gambar dulu untuk IG story!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada penjual push kau beli barang. Macam mana handle?",
    options: [
      { text: "Terus cakap tak nak, confident!", type: "A" },
      { text: "Senyum dan jalan pergi", type: "B" },
      { text: "Dengar pitch dia, mana tau berbaloi", type: "C" },
      { text: "Beli je, tak sampai hati tolak", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tawar menawar kat pasar malam - gaya kau?",
    options: [
      { text: "Pro tawar! Harga kedai potong separuh dulu!", type: "A" },
      { text: "Tawar sikit-sikit, malu nak lebih", type: "B" },
      { text: "Malas tawar, bayar je harga tu", type: "C" },
      { text: "Tanya harga dulu, decide kalau nak tawar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nampak stall makanan viral kat TikTok. Apa action?",
    options: [
      { text: "Kena try! Beratur pun sanggup!", type: "A" },
      { text: "Tengok queue dulu, kalau panjang skip", type: "B" },
      { text: "Beli makanan lain je, viral tak semesti sedap", type: "C" },
      { text: "Ambik gambar queue je, tak payah beli", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pasar malam dah nak tutup tapi kau belum puas. Feeling?",
    options: [
      { text: "Sedih! Lari last minute shopping!", type: "A" },
      { text: "Takpe, minggu depan ada lagi", type: "B" },
      { text: "Puas dah, dah beli banyak", type: "C" },
      { text: "Cari pasar malam lain yang masih buka!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Budget untuk pasar malam biasanya berapa?",
    options: [
      { text: "Strict budget! RM50 max!", type: "A" },
      { text: "Flexible sikit, dalam RM100", type: "B" },
      { text: "No budget, beli ikut hati!", type: "C" },
      { text: "Bawak lebih tapi try spend sikit", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa wajib beli setiap kali pergi pasar malam?",
    options: [
      { text: "Ayam percik dan air kelapa!", type: "A" },
      { text: "Ramly burger - nothing else!", type: "B" },
      { text: "Kuih muih traditional", type: "C" },
      { text: "Random, ikut mood hari tu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pasar malam crowded gila, susah nak jalan. Reaction?",
    options: [
      { text: "Redah je! Part of the experience!", type: "A" },
      { text: "Cari laluan lain yang kurang orang", type: "B" },
      { text: "Balik je la, datang lain kali", type: "C" },
      { text: "Complaint tapi tetap stay", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nampak baju/tudung cantik tapi tak try lagi. Beli ke tidak?",
    options: [
      { text: "Try dulu! Fit penting!", type: "A" },
      { text: "Beli je, return nanti kalau tak fit", type: "B" },
      { text: "Tengok dulu, fikir, maybe next time", type: "C" },
      { text: "YOLO beli terus!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Balik dari pasar malam, kau rasa macam mana?",
    options: [
      { text: "Satisfied! Mission accomplished!", type: "A" },
      { text: "Penat tapi happy", type: "B" },
      { text: "Regret sebab beli banyak sangat", type: "C" },
      { text: "Already planning next pasar malam!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pasar Malam Pro",
    emoji: "🛒",
    description: "Kau ni veteran pasar malam! Tau timing terbaik, stall mana best, dan skill tawar kelas A! Orang selalu ajak kau pergi sebab kau pandai navigate!",
    traits: ["Strategic", "Experienced", "Budget-savvy", "Decisive"],
    strengths: ["Best deals", "No time wasted", "Expert navigator"],
    weaknesses: ["Kadang terlalu calculative", "Miss spontaneous finds"],
    tips: ["Relax sikit, enjoy the chaos", "Try something unexpected"],
  },
  B: {
    type: "B",
    title: "Casual Shopper",
    emoji: "🚶",
    description: "Kau pergi pasar malam untuk lepak dan enjoy atmosphere. Shopping adalah bonus. No pressure, no rush - just vibes!",
    traits: ["Relaxed", "Easygoing", "Patient", "Balanced"],
    strengths: ["Stress-free shopping", "Enjoy the moment", "Good company"],
    weaknesses: ["Might miss good deals", "Indecisive sometimes"],
    tips: ["Set small goals", "Try bargaining more"],
  },
  C: {
    type: "C",
    title: "Food Hunter",
    emoji: "🍢",
    description: "Pasar malam = food paradise untuk kau! Shopping? Tak penting. Yang penting semua makanan kena try! Perut adalah compass kau!",
    traits: ["Foodie", "Adventurous", "Indulgent", "Fun-loving"],
    strengths: ["Find best food", "Open to try", "Enjoy life"],
    weaknesses: ["Overspend on food", "Health maybe?"],
    tips: ["Balance food and shopping", "Share portions with friends"],
  },
  D: {
    type: "D",
    title: "Spontaneous Explorer",
    emoji: "✨",
    description: "Kau pergi pasar malam tanpa plan! Beli ikut feel, jalan ikut crowd. Every visit adalah adventure baru. YOLO is your motto!",
    traits: ["Spontaneous", "Adventurous", "Impulsive", "Fun"],
    strengths: ["Open to surprises", "Enjoy everything", "No regrets"],
    weaknesses: ["Budget out of control", "Buy unnecessary stuff"],
    tips: ["Set a loose budget", "Think twice before big purchase"],
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
