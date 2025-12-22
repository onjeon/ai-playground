// Tipe Tetangga Kamu
// Tes ini mengungkap karakteristikmu sebagai tetangga!

export const questions = [
  {
    id: 1,
    question: "Hubunganmu dengan tetangga biasanya...",
    options: [
      { text: "Kenal baik, sering ngobrol dan saling bantu", type: "A" },
      { text: "Sapa-sapaan sopan, kenal muka", type: "B" },
      { text: "Minimal interaksi, masing-masing", type: "C" },
      { text: "Tidak kenal sama sekali", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tetangga baru pindah, kamu...",
    options: [
      { text: "Datang kenalan dan bawa makanan/buah", type: "A" },
      { text: "Sapa saat ketemu di jalan", type: "B" },
      { text: "Tunggu mereka yang sapa dulu", type: "C" },
      { text: "Biasa saja, tidak ada inisiatif", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ada acara RT/RW atau gotong royong, kamu...",
    options: [
      { text: "Selalu ikut dan aktif", type: "A" },
      { text: "Ikut kalau sempat", type: "B" },
      { text: "Jarang ikut, kirim kontribusi uang saja", type: "C" },
      { text: "Tidak pernah ikut", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tetangga butuh bantuan (antar ke RS, titip rumah, dll), kamu...",
    options: [
      { text: "Langsung bantu tanpa pikir panjang", type: "A" },
      { text: "Bantu kalau memungkinkan", type: "B" },
      { text: "Bantu kalau sangat urgent saja", type: "C" },
      { text: "Maaf, tidak bisa, sibuk urusan sendiri", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Suara berisik dari tetangga malam-malam, reaksimu?",
    options: [
      { text: "Datangi dengan baik-baik untuk minta tolong", type: "A" },
      { text: "Kirim chat atau pesan dengan sopan", type: "B" },
      { text: "Kesal tapi diam saja", type: "C" },
      { text: "Langsung lapor RT atau marah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berbagi makanan dengan tetangga, seberapa sering?",
    options: [
      { text: "Sering, apalagi kalau masak banyak atau ada oleh-oleh", type: "A" },
      { text: "Sesekali di momen tertentu", type: "B" },
      { text: "Jarang, prefer simpan sendiri", type: "C" },
      { text: "Tidak pernah", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Gossip atau omongan tetangga tentang kamu, kamu...",
    options: [
      { text: "Tidak peduli, fokus jadi tetangga baik", type: "A" },
      { text: "Sedikit terganggu tapi tidak dibesar-besarin", type: "B" },
      { text: "Kesal dan jaga jarak", type: "C" },
      { text: "Makanya males interaksi sama tetangga", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Arisan atau kumpulan ibu-ibu/bapak-bapak RT, kamu...",
    options: [
      { text: "Ikut dan aktif berpartisipasi", type: "A" },
      { text: "Ikut sesekali untuk menjaga hubungan", type: "B" },
      { text: "Tidak ikut, bukan stylenya", type: "C" },
      { text: "Tidak tertarik sama sekali", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat kamu butuh bantuan tetangga, kamu...",
    options: [
      { text: "Nyaman minta karena hubungan baik", type: "A" },
      { text: "Minta kalau benar-benar butuh", type: "B" },
      { text: "Enggan minta, prefer solve sendiri", type: "C" },
      { text: "Tidak pernah minta, tidak kenal dekat", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Privasi vs keterbukaan dengan tetangga, preferensimu?",
    options: [
      { text: "Open, tetangga seperti extended family", type: "A" },
      { text: "Balance, ada yang dibagi ada yang private", type: "B" },
      { text: "Prefer privacy, minimal sharing", type: "C" },
      { text: "Sangat private, tetangga tidak perlu tau apapun", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Konflik dengan tetangga, caramu handle...",
    options: [
      { text: "Bicara langsung dengan baik-baik", type: "A" },
      { text: "Mediasi lewat RT/RW", type: "B" },
      { text: "Diam tapi jaga jarak", type: "C" },
      { text: "Cold war, tidak mau berurusan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tetangga ideal menurutmu?",
    options: [
      { text: "Akrab dan saling support", type: "A" },
      { text: "Sopan dan saling menghormati", type: "B" },
      { text: "Masing-masing tidak ganggu", type: "C" },
      { text: "Tidak perlu kenal, yang penting tenang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tetangga Ideal",
    emoji: "🏘️",
    description: "Kamu adalah tetangga impian! Ramah, suka membantu, dan aktif dalam komunitas. Kamu menjaga nilai gotong royong dan menjadi perekat lingkungan.",
    traits: ["Friendly", "Helpful", "Community-oriented", "Warm"],
    strengths: ["Dicintai tetangga", "Strong community ties", "Support system bagus"],
    weaknesses: ["Bisa terlalu involved", "Privacy terganggu", "Capek jadi 'orang baik'"],
    tips: ["Jaga boundaries juga penting", "Tidak harus selalu available"],
  },
  B: {
    type: "B",
    title: "Tetangga Sopan",
    emoji: "🤝",
    description: "Kamu adalah tetangga yang sopan dan tahu batas. Ramah saat ketemu tapi tidak over-familiar. Balance sempurna antara friendly dan private.",
    traits: ["Polite", "Respectful", "Balanced", "Appropriate"],
    strengths: ["Good neighbor relations", "Respected", "No drama"],
    weaknesses: ["Mungkin terkesan distant", "Miss deeper connection"],
    tips: ["Kadang lebih warm juga oke", "Community bisa jadi support system"],
  },
  C: {
    type: "C",
    title: "Tetangga Introvert",
    emoji: "🏠",
    description: "Kamu prefer minimal interaksi dengan tetangga. Rumahmu adalah sanctuary dan privacy adalah prioritas. Tidak ada yang salah dengan ini.",
    traits: ["Private", "Introverted", "Independent", "Boundaries clear"],
    strengths: ["No neighbor drama", "Peace and quiet", "Self-sufficient"],
    weaknesses: ["Miss community support", "Bisa terkesan tidak ramah", "Isolated"],
    tips: ["Minimal connection tetap bagus untuk safety", "Sapa sesekali tidak menyakitkan"],
  },
  D: {
    type: "D",
    title: "Tetangga Anonymous",
    emoji: "👻",
    description: "Kamu hampir tidak punya hubungan dengan tetangga. Completely private dan prefer tidak ada interaksi. Ekstrem tapi valid choice.",
    traits: ["Anonymous", "Extremely private", "Detached", "Self-contained"],
    strengths: ["Full privacy", "No obligations", "No drama"],
    weaknesses: ["No safety net", "Bisa lonely", "Miss emergency support"],
    tips: ["Kenal minimal satu tetangga untuk emergency", "Community punya benefits lho"],
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
