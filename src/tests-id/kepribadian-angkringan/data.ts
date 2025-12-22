// Kepribadian dari Gaya di Angkringan
// Tes ini mengungkap kepribadianmu dari cara kamu menikmati angkringan!

export const questions = [
  {
    id: 1,
    question: "Waktu favorit ke angkringan...",
    options: [
      { text: "Malam, setelah aktivitas selesai", type: "A" },
      { text: "Sore, sambil nunggu sunset", type: "B" },
      { text: "Kapanpun lapar atau butuh ngopi", type: "C" },
      { text: "Dini hari, after midnight vibes", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Menu andalan di angkringan...",
    options: [
      { text: "Nasi kucing dan gorengan, klasik!", type: "A" },
      { text: "Sate-satean, telur, dan lauk lainnya", type: "B" },
      { text: "Wedang jahe atau teh, yang penting hangat", type: "C" },
      { text: "Coba-coba yang unik, setiap angkringan beda", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ke angkringan biasanya sama...",
    options: [
      { text: "Geng tongkrongan, rame-rame", type: "A" },
      { text: "Satu atau dua teman dekat", type: "B" },
      { text: "Solo, me time dan refleksi", type: "C" },
      { text: "Siapa aja yang mau ikut", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Aktivitas utama di angkringan...",
    options: [
      { text: "Ngobrol panjang lebar sampai lupa waktu", type: "A" },
      { text: "Makan dan minum, focus on food", type: "B" },
      { text: "People watching dan menikmati suasana", type: "C" },
      { text: "Main HP tapi tetap enjoy ambiance", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Topik obrolan favorit di angkringan...",
    options: [
      { text: "Curhat dan sharing masalah hidup", type: "A" },
      { text: "Diskusi random, dari politik sampai alien", type: "B" },
      { text: "Jokes dan cerita lucu", type: "C" },
      { text: "Plans dan impian masa depan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada orang asing duduk dekat...",
    options: [
      { text: "Ajak ngobrol, siapa tau dapat teman baru", type: "A" },
      { text: "Senyum kalau mata ketemu, tapi tidak proaktif", type: "B" },
      { text: "Cuek, fokus sama grup sendiri", type: "C" },
      { text: "Pindah kalau terlalu dekat, butuh space", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pilih angkringan yang...",
    options: [
      { text: "Langganan, sudah kenal sama yang jual", type: "A" },
      { text: "Strategis lokasinya, gampang dijangkau", type: "B" },
      { text: "Vibe-nya enak, tidak terlalu ramai", type: "C" },
      { text: "Explore terus, suka coba yang baru", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Budget sekali ke angkringan...",
    options: [
      { text: "Di bawah 20 ribu, murah meriah", type: "A" },
      { text: "20-30 ribu, makan kenyang", type: "B" },
      { text: "Tergantung lapar dan menu", type: "C" },
      { text: "Tidak hitung, yang penting puas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Reaksi kalau angkringan langganan tutup...",
    options: [
      { text: "Sedih, kehilangan tempat favorit", type: "A" },
      { text: "Cari pengganti yang mirip vibes-nya", type: "B" },
      { text: "Ya sudah, banyak angkringan lain", type: "C" },
      { text: "Tanya kemana pindahnya, mau follow", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Duduk di angkringan prefer...",
    options: [
      { text: "Lesehan di tikar, authentic experience", type: "A" },
      { text: "Bangku atau kursi kalau ada", type: "B" },
      { text: "Mana aja yang available", type: "C" },
      { text: "Standing atau takeaway kalau penuh", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cuaca hujan saat di angkringan...",
    options: [
      { text: "Makin seru! Wedang hangat + hujan = perfect", type: "A" },
      { text: "Lanjut kalau ada pelindung, pulang kalau tidak", type: "B" },
      { text: "Kesempatan ngobrol lebih lama", type: "C" },
      { text: "Pulang, tidak nyaman kalau hujan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Angkringan buat kamu adalah...",
    options: [
      { text: "Tempat healing paling murah dan efektif", type: "A" },
      { text: "Kuliner rakyat yang harus dilestarikan", type: "B" },
      { text: "Tempat nongkrong paling demokratis", type: "C" },
      { text: "Nostalgia dan koneksi dengan budaya lokal", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pecinta Angkringan Sejati",
    emoji: "🏮",
    description: "Kamu adalah penggemar angkringan level tertinggi! Hafal semua angkringan enak di kotamu, kenal sama yang jual, dan selalu punya waktu untuk nongkrong di sana.",
    traits: ["Loyal", "Social", "Down to earth", "Traditionalist"],
    strengths: ["Networking grassroot", "Appreciate budaya lokal", "Hemat tapi tetap seru"],
    weaknesses: ["Terlalu sering nongkrong", "Jadwal tidur bisa terganggu"],
    tips: ["Balance dengan aktivitas lain", "Jaga kesehatan juga ya"],
  },
  B: {
    type: "B",
    title: "Casual Angkringan Goer",
    emoji: "☕",
    description: "Kamu adalah pengunjung angkringan yang santai! Datang saat mood atau diajak, menikmati tanpa terlalu deep. Angkringan adalah salah satu opsi, bukan satu-satunya.",
    traits: ["Casual", "Flexible", "Moderate", "Balanced"],
    strengths: ["Tidak addicted", "Variety dalam pilihan hangout", "Healthy balance"],
    weaknesses: ["Kadang miss moment seru", "Kurang appreciate fully"],
    tips: ["Sesekali stay lebih lama", "Angkringan itu tentang experience, bukan cuma food"],
  },
  C: {
    type: "C",
    title: "Philosopher Angkringan",
    emoji: "🌙",
    description: "Kamu adalah tipe yang ke angkringan untuk me time dan refleksi! Suasana tenang, wedang hangat, dan langit malam adalah kombinasi sempurna untuk berpikir.",
    traits: ["Contemplative", "Introspective", "Deep thinker", "Appreciative"],
    strengths: ["Quality solo time", "Appreciate ambiance", "Deep thoughts"],
    weaknesses: ["Bisa terlalu sendirian", "Miss social aspects"],
    tips: ["Ajak teman kadang", "Sharing thoughts bisa enlightening"],
  },
  D: {
    type: "D",
    title: "Explorer Angkringan",
    emoji: "🗺️",
    description: "Kamu adalah explorer angkringan! Selalu cari yang baru, compare menu dan vibes, dan tidak terpaku pada satu tempat. Setiap angkringan adalah adventure baru.",
    traits: ["Adventurous", "Curious", "Non-committal", "Open-minded"],
    strengths: ["Wide experience", "Not in comfort zone", "Discover hidden gems"],
    weaknesses: ["Tidak punya langganan", "Kadang miss consistency"],
    tips: ["Kadang loyalty juga bagus", "Build relationship dengan satu tempat"],
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
