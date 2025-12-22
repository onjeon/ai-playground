export const questions = [
  {
    id: 1,
    question: "Kapan waktu rebahan favoritmu?",
    options: [
      { text: "Sepanjang weekend dari pagi sampai malam", type: "A" },
      { text: "Setelah pulang kerja/kuliah", type: "B" },
      { text: "Hanya kalau benar-benar capek", type: "C" },
      { text: "Sebelum tidur malam", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Aktivitas rebahan favoritmu?",
    options: [
      { text: "Scroll sosmed tanpa henti", type: "A" },
      { text: "Nonton series atau film", type: "B" },
      { text: "Main game di HP", type: "C" },
      { text: "Tidur atau melamun", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Posisi rebahan andalanmu?",
    options: [
      { text: "Berbagai posisi, ganti-ganti terus", type: "A" },
      { text: "Tengkurap dengan bantal", type: "B" },
      { text: "Miring dengan selimut", type: "C" },
      { text: "Telentang santai", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Apa yang harus ada saat rebahan?",
    options: [
      { text: "HP dengan charger di samping", type: "A" },
      { text: "Snack dan minuman", type: "B" },
      { text: "AC atau kipas yang dingin", type: "C" },
      { text: "Bantal dan selimut yang nyaman", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bagaimana reaksimu saat rebahan terganggu?",
    options: [
      { text: "Kesal dan malas bergerak", type: "A" },
      { text: "Urus sebentar, lanjut rebahan", type: "B" },
      { text: "Tergantung siapa yang ganggu", type: "C" },
      { text: "Tidak masalah, fleksibel", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa lama kamu bisa rebahan non-stop?",
    options: [
      { text: "Seharian penuh tanpa masalah", type: "A" },
      { text: "Beberapa jam, lalu butuh makan", type: "B" },
      { text: "1-2 jam sudah cukup", type: "C" },
      { text: "Tidak terlalu lama, gelisah", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tempat rebahan favorit?",
    options: [
      { text: "Kasur, tentu saja!", type: "A" },
      { text: "Sofa dengan TV", type: "B" },
      { text: "Karpet atau lantai", type: "C" },
      { text: "Di mana saja yang nyaman", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apa yang bisa bikin kamu berhenti rebahan?",
    options: [
      { text: "Hampir tidak ada, kecuali darurat", type: "A" },
      { text: "Lapar atau haus", type: "B" },
      { text: "Ada janji atau kerjaan", type: "C" },
      { text: "Bosan setelah beberapa lama", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bagaimana perasaanmu setelah rebahan lama?",
    options: [
      { text: "Puas dan refreshed", type: "A" },
      { text: "Sedikit guilty tapi worth it", type: "B" },
      { text: "Biasa aja, sudah kebiasaan", type: "C" },
      { text: "Kadang merasa menyesal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat weekend, jam berapa kamu bangun?",
    options: [
      { text: "Siang atau bahkan sore", type: "A" },
      { text: "Pagi, tapi langsung rebahan lagi", type: "B" },
      { text: "Normal seperti hari biasa", type: "C" },
      { text: "Tergantung ada acara atau tidak", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Outfit rebahan favoritmu?",
    options: [
      { text: "Piyama atau daster seharian", type: "A" },
      { text: "Kaos dan celana pendek", type: "B" },
      { text: "Apapun yang sedang dipakai", type: "C" },
      { text: "Tetap proper, siap kalau ada tamu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apa filosofi rebahanmu?",
    options: [
      { text: "Rebahan adalah self-care tertinggi", type: "A" },
      { text: "Balance antara produktif dan rebahan", type: "B" },
      { text: "Rebahan sewajarnya saja", type: "C" },
      { text: "Rebahan kalau memang butuh istirahat", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Professional Rebahaner",
    emoji: "🛋️",
    description: "Kamu adalah master rebahan! Rebahan bukan sekadar istirahat, tapi lifestyle! Kamu tahu semua posisi nyaman, spot terbaik, dan bisa survive seharian tanpa keluar kasur. Self-care levelmu adalah legendary!",
    traits: ["Expert rebahan", "Low maintenance", "Content", "Homebody"],
    strengths: ["Tahu cara istirahat yang benar", "Tidak butuh banyak untuk bahagia", "Mental health terjaga"],
    weaknesses: ["Productivity bisa terganggu", "Kadang terlalu mager", "Miss out outdoor activities"],
    tips: ["Balance dengan aktivitas ringan", "Rebahan itu ok, tapi jangan lupa gerak", "Your rest time is valid!"],
  },
  B: {
    type: "B",
    title: "Rebahan Enthusiast",
    emoji: "😌",
    description: "Kamu suka rebahan tapi masih punya kesadaran untuk produktif! Rebahan adalah reward setelah kerja keras. Kamu tahu kapan waktunya istirahat dan kapan waktunya bergerak.",
    traits: ["Balanced", "Self-aware", "Reward-oriented", "Moderate"],
    strengths: ["Good work-rest balance", "Tidak berlebihan", "Masih produktif"],
    weaknesses: ["Kadang guilty saat rebahan", "Bisa overthink soal productivity"],
    tips: ["Enjoy rebahan tanpa guilt", "You deserve rest!", "Balance is key"],
  },
  C: {
    type: "C",
    title: "Casual Rebahaner",
    emoji: "🙂",
    description: "Rebahan buatmu adalah sekadar istirahat biasa. Kamu tidak terlalu terobsesi tapi juga tidak menolak. Kamu lebih suka aktif tapi tetap menghargai waktu istirahat.",
    traits: ["Moderate", "Active-leaning", "Flexible", "Normal"],
    strengths: ["Tidak terlalu mager", "Masih produktif", "Balanced approach"],
    weaknesses: ["Kadang kurang istirahat", "Bisa push diri terlalu keras"],
    tips: ["Jangan lupa istirahat yang cukup", "Rebahan sesekali itu perlu", "Listen to your body"],
  },
  D: {
    type: "D",
    title: "Anti-Rebahan Squad",
    emoji: "🏃",
    description: "Kamu adalah tipe yang tidak bisa diam! Rebahan terlalu lama bikin gelisah. Kamu lebih suka aktivitas dan bergerak. Energimu tinggi dan selalu ingin melakukan sesuatu!",
    traits: ["Active", "Restless", "Energetic", "Productive"],
    strengths: ["Produktivitas tinggi", "Tidak mager", "Banyak hal terselesaikan"],
    weaknesses: ["Bisa burnout", "Kurang istirahat", "Susah slow down"],
    tips: ["Rest is productive too!", "Burnout itu nyata", "Sesekali rebahan untuk recharge"],
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
