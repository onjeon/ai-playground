// Gaya Kamu Menghadapi Putus Cinta
// Tes ini mengungkap bagaimana kamu melewati masa patah hati!

export const questions = [
  {
    id: 1,
    question: "Baru putus, hal pertama yang kamu lakukan?",
    options: [
      { text: "Nangis sepuasnya, keluarkan semua", type: "A" },
      { text: "Distract diri dengan aktivitas", type: "B" },
      { text: "Curhat ke teman terdekat", type: "C" },
      { text: "Diam dan proses sendirian", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Barang-barang kenangan dari mantan, kamu...",
    options: [
      { text: "Simpan, suatu saat mau lihat lagi", type: "A" },
      { text: "Buang atau kembalikan semua", type: "B" },
      { text: "Simpan di tempat yang tidak terlihat", type: "C" },
      { text: "Biarkan saja, tidak dipikirin", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Stalking sosmed mantan setelah putus?",
    options: [
      { text: "Sering, penasaran dia ngapain", type: "A" },
      { text: "Langsung block/unfollow, clean break", type: "B" },
      { text: "Sesekali kalau lagi kangen", type: "C" },
      { text: "Tidak peduli, move on aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Berapa lama biasanya kamu butuh untuk move on?",
    options: [
      { text: "Lama, berbulan-bulan atau lebih", type: "A" },
      { text: "Cepat, dalam hitungan minggu", type: "B" },
      { text: "Tergantung seberapa dalam hubungannya", type: "C" },
      { text: "Tidak pernah benar-benar move on", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Healing setelah putus, caramu?",
    options: [
      { text: "Makan banyak dan comfort food", type: "A" },
      { text: "Sibukkan diri dengan kerjaan/hobi", type: "B" },
      { text: "Hangout terus sama teman", type: "C" },
      { text: "Me time dan refleksi diri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lagu-lagu galau setelah putus, kamu...",
    options: [
      { text: "Dengerin terus, bikin makin sedih tapi puas", type: "A" },
      { text: "Hindari, dengerin yang upbeat", type: "B" },
      { text: "Sesekali untuk proses feelings", type: "C" },
      { text: "Musik tidak pengaruh banyak", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tentang teman-teman yang dulu mutual sama mantan, kamu...",
    options: [
      { text: "Tetap teman, tidak ada masalah", type: "A" },
      { text: "Jaga jarak untuk sementara", type: "B" },
      { text: "Tergantung siapa yang salah waktu putus", type: "C" },
      { text: "Cut off sekalian, fresh start", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mantan minta balikan, responmu?",
    options: [
      { text: "Pertimbangkan serius, mungkin bisa fix", type: "A" },
      { text: "No way, sudah move on", type: "B" },
      { text: "Tergantung alasan putus dulu", type: "C" },
      { text: "Bingung, campur aduk perasaannya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Siap untuk hubungan baru setelah putus?",
    options: [
      { text: "Butuh waktu lama untuk siap lagi", type: "A" },
      { text: "Relatif cepat kalau ketemu yang cocok", type: "B" },
      { text: "Harus yakin dulu sudah heal", type: "C" },
      { text: "Mungkin tidak mau pacaran lagi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pelajaran dari putus cinta menurutmu?",
    options: [
      { text: "Sakit, tapi bikin lebih kuat", type: "A" },
      { text: "Experience untuk next relationship", type: "B" },
      { text: "Lebih kenal diri sendiri", type: "C" },
      { text: "Hati-hati jatuh cinta lagi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Support system saat putus, yang paling membantu?",
    options: [
      { text: "Teman yang dengerin dan validate", type: "A" },
      { text: "Aktivitas baru dan distraksi", type: "B" },
      { text: "Keluarga yang supportive", type: "C" },
      { text: "Waktu dan proses sendiri", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah move on, perasaan ke mantan?",
    options: [
      { text: "Masih ada sedikit feelings", type: "A" },
      { text: "Indifferent, tidak ada rasa apapun", type: "B" },
      { text: "Bisa teman biasa", type: "C" },
      { text: "Avoid, tidak mau ketemu lagi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Deep Feeler",
    emoji: "💔",
    description: "Kamu merasakan putus cinta dengan sangat dalam. Prosesnya lama dan intens, tapi kamu benar-benar memproses semua emosi. Healing-mu thorough walau painful.",
    traits: ["Deep feeler", "Slow healer", "Emotional processor", "Sentimental"],
    strengths: ["Proses emosi dengan lengkap", "Learn from experience", "Capable of deep love"],
    weaknesses: ["Lama move on", "Bisa terjebak di masa lalu", "Rentan"],
    tips: ["Set timeline untuk healing", "Tidak apa-apa let go", "Forward is the only way"],
  },
  B: {
    type: "B",
    title: "The Quick Mover",
    emoji: "🚀",
    description: "Kamu bisa move on dengan relatif cepat! Focus pada moving forward dan tidak dwell di masa lalu. Efisien dalam healing walau kadang skip proses.",
    traits: ["Quick mover", "Forward-focused", "Pragmatic", "Resilient"],
    strengths: ["Tidak stuck", "Productive", "Resilient"],
    weaknesses: ["Mungkin skip grieving process", "Unresolved feelings later", "Too fast sometimes"],
    tips: ["Pastikan benar-benar heal, bukan avoid", "Proses feelings juga penting"],
  },
  C: {
    type: "C",
    title: "The Balanced Healer",
    emoji: "⚖️",
    description: "Kamu punya approach yang balanced dalam menghadapi putus cinta. Ada grieving, tapi juga moving forward. Proses yang sehat dan sustainable.",
    traits: ["Balanced", "Self-aware", "Adaptive", "Healthy coper"],
    strengths: ["Healthy healing process", "Support system strong", "Learn and grow"],
    weaknesses: ["Kadang overthink", "Indecisive about closure"],
    tips: ["Trust your process", "You're doing great"],
  },
  D: {
    type: "D",
    title: "The Solo Processor",
    emoji: "🏔️",
    description: "Kamu lebih suka memproses putus cinta sendirian. Introspektif dan tidak banyak share. Proses internal yang dalam tapi bisa juga isolating.",
    traits: ["Introspective", "Private", "Self-reliant", "Reserved"],
    strengths: ["Independent healing", "Deep self-reflection", "Not dependent on others"],
    weaknesses: ["Bisa isolating", "Miss support", "Bottling up"],
    tips: ["Sharing burden membantu", "Tidak harus sendirian terus", "Seek support juga oke"],
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
