// Gaya Prepare Raya
// Fun test tentang personality masa preparation Raya

export const questions = [
  {
    id: 1,
    question: "Bila kau start shopping baju Raya?",
    options: [
      { text: "Awal Ramadan - beat the crowd!", type: "A" },
      { text: "Minggu terakhir Ramadan, last minute!", type: "B" },
      { text: "Online je, malas pergi mall", type: "C" },
      { text: "Tak shopping, pakai baju tahun lepas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Malam Raya, apa aktiviti wajib kau?",
    options: [
      { text: "Tolong mak buat kuih sampai subuh!", type: "A" },
      { text: "Siapkan duit raya dengan envelope cantik", type: "B" },
      { text: "Tidur awal sebab esok penat", type: "C" },
      { text: "Keluar dengan kawan, lepak last", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bab buat rendang, kau contribute macam mana?",
    options: [
      { text: "Master chef! Recipe family turun temurun!", type: "A" },
      { text: "Helper - potong bawang, kacau periuk", type: "B" },
      { text: "Moral support dari jauh", type: "C" },
      { text: "Beli rendang ready-made je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rumah kena kemas untuk Raya. Gaya kau?",
    options: [
      { text: "Deep clean sebulan sebelum Raya!", type: "A" },
      { text: "Seminggu sebelum, panic cleaning", type: "B" },
      { text: "Kemas mana yang nampak je", type: "C" },
      { text: "Mak buat semua, kau cuma kacau", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tema warna baju Raya family macam mana decide?",
    options: [
      { text: "Kau yang lead discussion dan decide!", type: "A" },
      { text: "Ikut je apa family decide", type: "B" },
      { text: "Rebel sikit - beli warna lain", type: "C" },
      { text: "Last minute baru tanya tema apa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sampai kampung, first thing kau buat?",
    options: [
      { text: "Salam semua orang tua-tua!", type: "A" },
      { text: "Cari makanan terus, lapar!", type: "B" },
      { text: "Ambik gambar untuk story", type: "C" },
      { text: "Masuk bilik tidur, penat travel", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Masa beraya rumah ke rumah, kau macam mana?",
    options: [
      { text: "Semangat! Visit semua sedara!", type: "A" },
      { text: "Ikut je, tapi penat sikit", type: "B" },
      { text: "Rumah selected je, yang wajib-wajib", type: "C" },
      { text: "Prefer orang datang rumah kita", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bab ambik gambar Raya, gaya kau?",
    options: [
      { text: "Photographer! Ambik gambar semua orang!", type: "A" },
      { text: "Pose cantik-cantik untuk IG!", type: "B" },
      { text: "Elak camera, tak suka ambik gambar", type: "C" },
      { text: "Candid je, natural moments", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Duit raya kau manage macam mana?",
    options: [
      { text: "Bank in semua, saving!", type: "A" },
      { text: "Spend sikit, save sikit", type: "B" },
      { text: "Shopping terus! Raya money!", type: "C" },
      { text: "Dah tua, kau yang bagi duit raya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Day 3 Raya, energy level kau macam mana?",
    options: [
      { text: "Still high! Beraya tak habis!", type: "A" },
      { text: "Moderate, pacing myself", type: "B" },
      { text: "Dah exhausted, nak balik KL", type: "C" },
      { text: "Hibernate mode, tidur all day", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Raya Warrior",
    emoji: "⚔️",
    description: "Kau ni tak main-main bila Raya! Prepare awal, semangat beraya, energy tak habis-habis. Mak suka kau sebab tolong banyak. Raya Champion!",
    traits: ["Organized", "Enthusiastic", "Family-oriented", "Energetic"],
    strengths: ["Always prepared", "Family MVP", "Raya spirit tinggi"],
    weaknesses: ["Burnout possible", "Expect same dari orang lain"],
    tips: ["Rest pun penting", "Don't overdo"],
  },
  B: {
    type: "B",
    title: "Balanced Beraya",
    emoji: "⚖️",
    description: "Kau enjoy Raya dengan moderate pace. Tak terlalu semangat, tak terlalu malas. Balance antara tradition dan modern. Perfect equilibrium!",
    traits: ["Balanced", "Adaptable", "Moderate", "Flexible"],
    strengths: ["No stress", "Enjoy at own pace", "Good balance"],
    weaknesses: ["Might miss some traditions", "Not memorable"],
    tips: ["Sometimes go extra", "Create special memories"],
  },
  C: {
    type: "C",
    title: "Raya Minimalist",
    emoji: "😌",
    description: "Kau celebrate Raya tapi dengan minimal effort. Yang wajib je buat, extra skip. Efficient dan practical - kenapa nak complicated?",
    traits: ["Practical", "Efficient", "Low-key", "Relaxed"],
    strengths: ["No Raya stress", "Save energy", "Straightforward"],
    weaknesses: ["Miss family bonding", "Seen as tak semangat"],
    tips: ["Raya sekali setahun", "Make effort sikit"],
  },
  D: {
    type: "D",
    title: "Raya Rebel",
    emoji: "😎",
    description: "Kau ada own way celebrate Raya! Tak ikut sangat tradition, buat ikut style sendiri. Different but still celebrate in your own unique way!",
    traits: ["Independent", "Creative", "Non-conformist", "Unique"],
    strengths: ["Stress-free", "Authentic to self", "No pretense"],
    weaknesses: ["Family might complain", "Miss traditional aspects"],
    tips: ["Balance tradition and self", "Appreciate family efforts"],
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
