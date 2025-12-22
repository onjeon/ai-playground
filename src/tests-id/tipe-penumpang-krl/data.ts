// Tipe Penumpang KRL/Commuter Line Kamu
// Tes ini mengungkap tipe penumpang KRL seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Saat menunggu KRL di peron...",
    options: [
      { text: "Berdiri di posisi strategis, siap sprint masuk", type: "A" },
      { text: "Antri rapi di garis kuning", type: "B" },
      { text: "Duduk santai sambil main HP, nanti aja masuknya", type: "C" },
      { text: "Lihat aplikasi untuk cek jadwal, timing sempurna", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat KRL penuh sesak...",
    options: [
      { text: "Muat! Desak-desakan, yang penting masuk", type: "A" },
      { text: "Tunggu yang berikutnya, tidak mau desak-desakan", type: "B" },
      { text: "Cari gerbong lain yang lebih lowong", type: "C" },
      { text: "Naik, tapi tetap jaga space pribadi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Aktivitas selama di dalam KRL...",
    options: [
      { text: "Scroll sosmed atau nonton video", type: "A" },
      { text: "Baca buku atau dengarkan podcast", type: "B" },
      { text: "Tidur atau melamun", type: "C" },
      { text: "Kerja atau balas chat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada kursi kosong...",
    options: [
      { text: "Langsung sprint, siapa cepat dia dapat", type: "A" },
      { text: "Persilakan yang lebih butuh (lansia, hamil)", type: "B" },
      { text: "Duduk kalau dekat, kalau jauh malas pindah", type: "C" },
      { text: "Prefer berdiri, lebih cepat keluar nanti", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Menghadapi pedagang asongan di KRL...",
    options: [
      { text: "Kadang beli kalau menarik", type: "A" },
      { text: "Tidak pernah beli, fokus sendiri", type: "B" },
      { text: "Dengerin pitchnya, entertainment gratis", type: "C" },
      { text: "Simpatik tapi jarang beli", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat mendekati stasiun tujuan...",
    options: [
      { text: "Sudah siap di dekat pintu dari jauh", type: "A" },
      { text: "Berdiri beberapa stasiun sebelumnya", type: "B" },
      { text: "Tunggu sampai berhenti baru berdiri", type: "C" },
      { text: "Tergantung seberapa penuh", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Interaksi dengan penumpang lain...",
    options: [
      { text: "Senyum kalau mata ketemu, kadang ngobrol", type: "A" },
      { text: "Minimal interaksi, fokus sendiri", type: "B" },
      { text: "Earphone in, dunia sendiri", type: "C" },
      { text: "Basa-basi kalau situasi memungkinkan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau KRL delay lama...",
    options: [
      { text: "Komplain di sosmed, mention akun resmi", type: "A" },
      { text: "Sabar menunggu, tidak bisa apa-apa", type: "B" },
      { text: "Cari alternatif transportasi lain", type: "C" },
      { text: "Update atasan/teman, cari info penyebab", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Barang bawaan saat naik KRL...",
    options: [
      { text: "Ransel besar, siap untuk segala situasi", type: "A" },
      { text: "Tas standar, bawa yang perlu aja", type: "B" },
      { text: "Minimalis, HP dan dompet cukup", type: "C" },
      { text: "Tergantung keperluan hari itu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau salah naik gerbong khusus wanita...",
    options: [
      { text: "Langsung pindah, malu banget", type: "A" },
      { text: "Tunggu stasiun berikutnya baru pindah", type: "B" },
      { text: "Tidak pernah salah, selalu perhatikan", type: "C" },
      { text: "Maklum, bisa terjadi pada siapa saja", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Stasiun transfer yang ramai...",
    options: [
      { text: "Ikut arus, mengalir saja", type: "A" },
      { text: "Cari jalur alternatif yang lebih sepi", type: "B" },
      { text: "Sprint cepat supaya dapat tempat di KRL berikutnya", type: "C" },
      { text: "Jalan santai, tidak perlu terburu-buru", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tap kartu KRL...",
    options: [
      { text: "Selalu siap, kartu sudah di tangan", type: "A" },
      { text: "Cari-cari dulu di tas saat sudah di gate", type: "B" },
      { text: "Saldo selalu cukup, tidak pernah gagal tap", type: "C" },
      { text: "Kadang lupa isi ulang, baru sadar di gate", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Commuter Pro",
    emoji: "🏃",
    description: "Kamu adalah penumpang KRL profesional! Sudah hafal timing, posisi strategis, dan semua trik untuk commuting efisien. Bagi kamu, KRL adalah arena survival yang sudah kamu kuasai.",
    traits: ["Strategis", "Cepat", "Berpengalaman", "Kompetitif"],
    strengths: ["Selalu dapat tempat", "Efisien waktu", "Tidak pernah telat"],
    weaknesses: ["Kadang terlalu agresif", "Kurang santai"],
    tips: ["Sesekali santai", "Tidak semua harus diperebutkan"],
  },
  B: {
    type: "B",
    title: "Penumpang Sopan",
    emoji: "🙏",
    description: "Kamu adalah penumpang teladan! Antri rapi, mengalah untuk yang lebih membutuhkan, dan menjaga etika. Kamu membuat pengalaman commuting lebih baik untuk semua orang.",
    traits: ["Sopan", "Sabar", "Pengertian", "Beretika"],
    strengths: ["Dihormati sesama penumpang", "Stress level rendah", "Good karma"],
    weaknesses: ["Kadang kelamaan antri", "Terlalu mengalah"],
    tips: ["Jaga diri juga penting", "Tidak harus selalu mengalah"],
  },
  C: {
    type: "C",
    title: "Penumpang Santuy",
    emoji: "😴",
    description: "Kamu adalah penumpang yang paling santai! KRL adalah waktu untuk istirahat dan me-time. Tidak peduli dengan keramaian, kamu punya dunia sendiri di dalam gerbong.",
    traits: ["Santai", "Independen", "Tidak ribet", "Introver"],
    strengths: ["Low stress", "Menikmati perjalanan", "Tidak capek mental"],
    weaknesses: ["Kadang kurang aware", "Bisa ketinggalan turun"],
    tips: ["Set alarm untuk stasiun tujuan", "Tetap aware sama sekitar"],
  },
  D: {
    type: "D",
    title: "Commuter Strategis",
    emoji: "📱",
    description: "Kamu adalah penumpang yang well-prepared! Selalu cek jadwal, punya rencana cadangan, dan memanfaatkan waktu perjalanan dengan produktif.",
    traits: ["Terencana", "Produktif", "Adaptif", "Informatif"],
    strengths: ["Selalu siap", "Waktu terpakai maksimal", "Jarang kena masalah"],
    weaknesses: ["Kadang terlalu overthinking", "Kurang spontan"],
    tips: ["Kadang go with the flow", "Enjoy the ride juga"],
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
