// Tingkat Perfeksionis Kamu
// Seberapa perfeksionis kamu dalam berbagai aspek kehidupan?

export const questions = [
  {
    id: 1,
    question: "Saat mengerjakan tugas atau project...",
    options: [
      { text: "Harus sempurna, revisi berkali-kali", type: "A" },
      { text: "Usaha maksimal tapi tau kapan stop", type: "B" },
      { text: "Yang penting selesai dan cukup baik", type: "C" },
      { text: "Done is better than perfect", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Merapikan kamar atau ruang kerja...",
    options: [
      { text: "Semua harus di tempatnya, simetris", type: "A" },
      { text: "Rapih dan terorganisir dengan baik", type: "B" },
      { text: "Cukup bersih dan functional", type: "C" },
      { text: "Controlled chaos, aku tau di mana semua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat hasil kerja tidak sesuai harapan...",
    options: [
      { text: "Frustasi dan sulit move on", type: "A" },
      { text: "Kecewa tapi evaluasi untuk improve", type: "B" },
      { text: "Terima, besok lebih baik", type: "C" },
      { text: "Biasa aja, yang penting sudah usaha", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Deadline mendekat, pekerjaan 90% selesai...",
    options: [
      { text: "Minta extend, 90% tidak cukup", type: "A" },
      { text: "Polish yang bisa, submit tepat waktu", type: "B" },
      { text: "Submit, 90% sudah bagus", type: "C" },
      { text: "Submit aja, nobody's perfect", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Menulis pesan atau email penting...",
    options: [
      { text: "Draft berkali-kali, cek grammar, tone", type: "A" },
      { text: "Review sekali, pastikan clear", type: "B" },
      { text: "Tulis, baca sekali, kirim", type: "C" },
      { text: "Langsung kirim, ga usah lebay", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Penampilan saat keluar rumah...",
    options: [
      { text: "Harus matching dan flawless", type: "A" },
      { text: "Rapih dan presentable", type: "B" },
      { text: "Clean dan comfortable", type: "C" },
      { text: "Asal sopan aja udah cukup", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat orang lain memberi feedback kritik...",
    options: [
      { text: "Terima dengan berat, terlalu personal", type: "A" },
      { text: "Terima positif, jadikan pelajaran", type: "B" },
      { text: "Filter mana yang useful", type: "C" },
      { text: "Biasa aja, ga semua harus perfect", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Planning liburan atau acara...",
    options: [
      { text: "Itinerary detail per jam", type: "A" },
      { text: "Rencana umum dengan flexibility", type: "B" },
      { text: "Rough idea aja, spontan lebih seru", type: "C" },
      { text: "No plan, go with the flow", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Membandingkan diri dengan orang lain...",
    options: [
      { text: "Sering, dan bikin stress", type: "A" },
      { text: "Kadang, untuk motivasi", type: "B" },
      { text: "Jarang, fokus ke diri sendiri", type: "C" },
      { text: "Tidak pernah, everybody's different", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat belajar skill baru...",
    options: [
      { text: "Frustasi kalau ga langsung jago", type: "A" },
      { text: "Sabar, tapi punya target progress", type: "B" },
      { text: "Enjoy the process, no pressure", type: "C" },
      { text: "Yang penting fun, level doesn't matter", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Standar untuk diri sendiri vs orang lain...",
    options: [
      { text: "Sama tingginya untuk semua", type: "A" },
      { text: "Lebih tinggi untuk diri sendiri", type: "B" },
      { text: "Reasonable untuk semua", type: "C" },
      { text: "Santai untuk semua", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kesalahan kecil yang sudah berlalu...",
    options: [
      { text: "Masih kepikiran berminggu-minggu", type: "A" },
      { text: "Refleksi sebentar, lalu move on", type: "B" },
      { text: "Cepat dilupakan", type: "C" },
      { text: "Ga pernah mikirin ulang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Perfeksionis Ekstrem",
    emoji: "💎",
    description: "Kamu adalah perfeksionis ekstrem! Standar tinggi adalah default dan tidak ada yang namanya 'cukup baik'. Kualitas adalah obsesi dan kamu sulit toleransi dengan kekurangan. Ini bisa jadi kekuatan, tapi juga beban.",
    traits: ["High standards", "Detail-obsessed", "Self-critical", "Quality-driven"],
    strengths: ["Excellent output", "Reliable", "Thorough"],
    weaknesses: ["Burnout prone", "Paralysis by analysis", "Hard on self and others"],
    tips: ["80% is often good enough", "Progress over perfection", "Be kind to yourself"],
  },
  B: {
    type: "B",
    title: "Perfeksionis Sehat",
    emoji: "⭐",
    description: "Kamu adalah perfeksionis sehat! Punya standar tinggi tapi tau kapan harus stop. Kamu balance antara quality dan reality. Ambisi tanpa anxiety. The healthy achiever!",
    traits: ["High standards", "Balanced", "Growth-minded", "Realistic"],
    strengths: ["Consistent quality", "Sustainable excellence", "Good self-awareness"],
    weaknesses: ["Kadang masih terlalu keras ke diri sendiri"],
    tips: ["Keep the balance", "Celebrate small wins", "You're doing great!"],
  },
  C: {
    type: "C",
    title: "Realis Praktis",
    emoji: "👍",
    description: "Kamu adalah realis praktis! Tau bahwa sempurna itu ilusi dan 'good enough' is good enough. Kamu fokus pada apa yang penting dan tidak terjebak detail yang tidak signifikan.",
    traits: ["Practical", "Efficient", "Flexible", "Result-oriented"],
    strengths: ["Less stress", "Good productivity", "Balanced life"],
    weaknesses: ["Bisa miss details penting", "Kadang bisa lebih baik"],
    tips: ["Sesekali push untuk excellence", "Details matter in certain things"],
  },
  D: {
    type: "D",
    title: "Go With The Flow",
    emoji: "🌊",
    description: "Kamu sangat santai dan tidak terbebani oleh standar perfeksi! Hidup adalah tentang experience, bukan kesempurnaan. Low stress dan high acceptance adalah filosofimu.",
    traits: ["Relaxed", "Accepting", "Easy-going", "Present-focused"],
    strengths: ["Low anxiety", "Enjoys life", "Adaptable"],
    weaknesses: ["Bisa underachieve", "Miss improvement opportunities"],
    tips: ["Some goals help direction", "A little ambition is healthy"],
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
