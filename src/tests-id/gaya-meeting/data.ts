// Gaya Kamu Saat Meeting
// Tes ini mengungkap personality kamu di ruang meeting!

export const questions = [
  {
    id: 1,
    question: "Saat meeting dimulai, kamu biasanya...",
    options: [
      { text: "Langsung lead diskusi dan set agenda", type: "A" },
      { text: "Siap dengan data dan catatan lengkap", type: "B" },
      { text: "Small talk dulu sama peserta lain", type: "C" },
      { text: "Diam observe sambil dengerin", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Posisi duduk favoritmu di ruang meeting...",
    options: [
      { text: "Di kepala meja, biar keliatan", type: "A" },
      { text: "Dekat whiteboard/layar presentasi", type: "B" },
      { text: "Di tengah, bisa ngobrol sama semua", type: "C" },
      { text: "Di pojok, aman dan nyaman", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau meeting mulai ngalor-ngidul...",
    options: [
      { text: "Tarik balik ke topik utama", type: "A" },
      { text: "Catat action items biar focused", type: "B" },
      { text: "Ikutin aja, kadang insight muncul dari situ", type: "C" },
      { text: "Diam aja, nanti juga selesai sendiri", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu menyampaikan pendapat di meeting...",
    options: [
      { text: "Langsung to the point, tegas", type: "A" },
      { text: "Dengan data dan evidence pendukung", type: "B" },
      { text: "Collaborative, build on ide orang lain", type: "C" },
      { text: "Tulis di chat atau sampaikan private", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau ada yang potong omonganmu di meeting...",
    options: [
      { text: "Tegas minta waktu untuk selesaikan", type: "A" },
      { text: "Catat dulu, sampaikan nanti", type: "B" },
      { text: "Dengerin dulu, sambung kemudian", type: "C" },
      { text: "Udahlah, ga penting juga", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Meeting online vs offline, kamu prefer...",
    options: [
      { text: "Offline, lebih impactful", type: "A" },
      { text: "Online, lebih efisien", type: "B" },
      { text: "Offline, bisa bonding sama tim", type: "C" },
      { text: "Online, ga perlu ketemu orang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat meeting berjalan terlalu lama...",
    options: [
      { text: "Propose untuk wrap up", type: "A" },
      { text: "Suggest meeting lanjutan dengan agenda jelas", type: "B" },
      { text: "Tetap engaged, quality time juga", type: "C" },
      { text: "Mulai multitask diam-diam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kontribusi terbaikmu di meeting biasanya...",
    options: [
      { text: "Bikin keputusan dan drive action", type: "A" },
      { text: "Provide insights dan analisis", type: "B" },
      { text: "Jaga suasana tetap positif", type: "C" },
      { text: "Listen dan implementasi hasilnya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Persiapan kamu sebelum meeting penting...",
    options: [
      { text: "Plan talking points utama", type: "A" },
      { text: "Siapkan slides dan data lengkap", type: "B" },
      { text: "Check in sama peserta dulu", type: "C" },
      { text: "Baca agenda, cukup", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau ditanya pendapat tapi belum siap...",
    options: [
      { text: "Jawab percaya diri dengan apa yang ada", type: "A" },
      { text: "Minta waktu untuk review dulu", type: "B" },
      { text: "Tanya balik untuk clarify", type: "C" },
      { text: "Bilang akan follow up via email", type: "D" },
    ],
  },
  {
    id: 11,
    question: "After meeting selesai, kamu biasanya...",
    options: [
      { text: "Follow up action items ke tim", type: "A" },
      { text: "Kirim meeting notes ke semua", type: "B" },
      { text: "Ngobrol santai dulu sama peserta", type: "C" },
      { text: "Langsung balik ke kerjaan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Meeting yang paling kamu hindari...",
    options: [
      { text: "Meeting tanpa agenda dan decision", type: "A" },
      { text: "Meeting tanpa data dan preparation", type: "B" },
      { text: "Meeting yang tegang dan konflik", type: "C" },
      { text: "Semua meeting, kalau bisa email aja", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Meeting Commander",
    emoji: "👔",
    description: "Kamu natural leader di setiap meeting! Tegas, decisive, dan selalu drive hasil. Meeting yang kamu lead pasti efektif dan ada action items yang jelas.",
    traits: ["Tegas", "Decisive", "Goal-oriented", "Authoritative"],
    strengths: ["Bisa keep meeting on track", "Drive decisions", "Respect dari peserta"],
    weaknesses: ["Bisa intimidating", "Kurang listen ide lain", "Terlalu dominant"],
    tips: ["Beri space untuk orang lain speak up", "Practice active listening", "Appreciate diverse perspectives"],
  },
  B: {
    type: "B",
    title: "The Data Presenter",
    emoji: "📋",
    description: "Kamu adalah MVP untuk setiap meeting yang butuh substance! Selalu prepared dengan data dan insights. Presentasimu selalu well-structured dan informative.",
    traits: ["Prepared", "Analytical", "Organized", "Thorough"],
    strengths: ["Credibility tinggi", "Always have backup data", "Structured presentations"],
    weaknesses: ["Bisa terlalu detail", "Kurang flexible", "Overwhelm audience"],
    tips: ["Balance data dengan storytelling", "Know your audience level", "Sometimes less is more"],
  },
  C: {
    type: "C",
    title: "The Team Harmonizer",
    emoji: "🌟",
    description: "Kamu adalah glue di setiap meeting! Bisa baca ruangan, jaga suasana positif, dan pastikan semua orang merasa didengar. Meeting dengan kamu selalu lebih enjoyable.",
    traits: ["Friendly", "Inclusive", "Diplomatic", "Positive"],
    strengths: ["Create safe space", "Build consensus", "Reduce tensions"],
    weaknesses: ["Bisa terlalu accommodating", "Avoid tough conversations", "Kurang assertive"],
    tips: ["Jangan takut voice disagreement", "Balance harmony dengan progress", "Lead more often"],
  },
  D: {
    type: "D",
    title: "The Silent Observer",
    emoji: "👀",
    description: "Kamu adalah pendengar yang thoughtful! Prefer observe dan process sebelum speak. Insight-mu sering unexpected dan valuable karena kamu benar-benar listen.",
    traits: ["Observant", "Thoughtful", "Introverted", "Reflective"],
    strengths: ["Deep understanding", "Quality over quantity", "Good listener"],
    weaknesses: ["Underestimated", "Miss opportunities to contribute", "Bisa terkesan disengaged"],
    tips: ["Challenge yourself untuk speak up lebih", "Prepare points sebelum meeting", "Your voice matters!"],
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
