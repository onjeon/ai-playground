// Tipe Kamu di Arisan Keluarga
// Tes ini mengungkap kepribadianmu berdasarkan perilaku di arisan!

export const questions = [
  {
    id: 1,
    question: "Dapat undangan arisan keluarga, reaksimu?",
    options: [
      { text: "Senang! Bisa kumpul keluarga", type: "A" },
      { text: "Cek jadwal dulu, kalau kosong datang", type: "B" },
      { text: "Cari alasan buat gak datang", type: "C" },
      { text: "Datang! Pengen dapet gosip terbaru", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di arisan, kamu biasanya duduk di mana?",
    options: [
      { text: "Di tengah, biar bisa ngobrol sama semua", type: "A" },
      { text: "Dekat pintu, biar gampang kabur", type: "B" },
      { text: "Di pojok, sama sepupu yang seumuran", type: "C" },
      { text: "Pindah-pindah, join berbagai kelompok", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat acara kocok arisan, kamu...",
    options: [
      { text: "Ikut tegang, berharap dapat", type: "A" },
      { text: "Biasa aja, rezeki gak kemana", type: "B" },
      { text: "Main HP, gak terlalu peduli", type: "C" },
      { text: "Heboh sendiri, teriak-teriak semangat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau kena arisan, uangnya buat apa?",
    options: [
      { text: "Ditabung untuk keperluan penting", type: "A" },
      { text: "Bayar hutang atau cicilan", type: "B" },
      { text: "Treat yourself, belanja!", type: "C" },
      { text: "Traktir anggota arisan yang lain", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Makanan di arisan, pilihanmu?",
    options: [
      { text: "Makan banyak, rugi kalau gak!", type: "A" },
      { text: "Pilih yang sehat-sehat aja", type: "B" },
      { text: "Makan sedikit, takut kekenyangan", type: "C" },
      { text: "Coba semua, review ke yang lain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tante mulai nanya 'kapan nikah/punya anak', kamu...",
    options: [
      { text: "Jawab sopan dengan senyum", type: "A" },
      { text: "Balik nanya tentang anaknya dia", type: "B" },
      { text: "Pura-pura ke toilet", type: "C" },
      { text: "Curcol panjang lebar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ada drama keluarga dibahas, reaksimu?",
    options: [
      { text: "Dengerin aja, gak ikut komentar", type: "A" },
      { text: "Coba netral, damaikan suasana", type: "B" },
      { text: "Pura-pura gak denger, fokus makan", type: "C" },
      { text: "Ikut nimbrung, seru!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Disuruh tampil (nyanyi/main games), kamu...",
    options: [
      { text: "Oke, tampil dengan percaya diri", type: "A" },
      { text: "Malu-malu tapi mau", type: "B" },
      { text: "Nolak halus, bukan tipe tampil", type: "C" },
      { text: "Semangat! Malah ngajakin yang lain", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Berapa lama biasanya kamu di arisan?",
    options: [
      { text: "Dari awal sampai bubar", type: "A" },
      { text: "Datang telat, pulang cepat", type: "B" },
      { text: "Sesempatnya, yang penting udah nongol", type: "C" },
      { text: "Paling terakhir pulang, bantu beresin", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kontribusimu di arisan keluarga?",
    options: [
      { text: "Bayar iuran on time, itu cukup", type: "A" },
      { text: "Bantu organize dan koordinasi", type: "B" },
      { text: "Minimal, yang penting hadir", type: "C" },
      { text: "Bawa makanan/minuman tambahan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Setelah arisan, kamu biasanya...",
    options: [
      { text: "Pulang langsung, capek sosialisasi", type: "A" },
      { text: "Nongkrong dulu sama yang seumuran", type: "B" },
      { text: "Kabur duluan sebelum disuruh bantuin", type: "C" },
      { text: "Bantuin tuan rumah beres-beres", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pendapatmu tentang arisan keluarga?",
    options: [
      { text: "Tradisi bagus untuk jaga silaturahmi", type: "A" },
      { text: "Lumayan buat nabung paksa", type: "B" },
      { text: "Ribet, tapi ya sudahlah", type: "C" },
      { text: "Seru! Kumpul keluarga itu priceless", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anggota Arisan Teladan",
    emoji: "🏆",
    description: "Kamu adalah anggota arisan yang bisa diandalkan! Selalu hadir, bayar on time, dan menjaga hubungan baik dengan semua anggota keluarga. Kamu menghargai tradisi kekeluargaan.",
    traits: ["Bertanggung jawab", "Sopan", "Tradisional", "Reliable"],
    strengths: ["Dipercaya keluarga", "Menjaga harmoni", "Konsisten"],
    weaknesses: ["Kadang terlalu serius", "Kurang ekspresif"],
    tips: ["Lebih rileks dan menikmati momen", "Sesekali bercanda dengan yang muda"],
  },
  B: {
    type: "B",
    title: "Si Strategis Arisan",
    emoji: "🧠",
    description: "Kamu cerdas dalam bernavigasi di arisan! Tahu kapan harus bicara, kapan diam, dan bagaimana menghindari pertanyaan awkward. Kamu efisien dalam bersosialisasi.",
    traits: ["Cerdas", "Diplomatis", "Efisien", "Terukur"],
    strengths: ["Bisa handle situasi sulit", "Tidak drama", "Hemat energi sosial"],
    weaknesses: ["Terkesan menghitung", "Kurang terbuka"],
    tips: ["Sesekali let loose dan nikmati", "Beri kesempatan untuk bonding lebih dalam"],
  },
  C: {
    type: "C",
    title: "Si Minimalis Arisan",
    emoji: "🙈",
    description: "Kamu hadir di arisan lebih karena kewajiban daripada keinginan. Bukan antisosial, tapi lebih suka quality time dalam skala kecil. Arisan besar bukan comfort zone-mu.",
    traits: ["Introvert", "Low-profile", "Selektif", "Reserved"],
    strengths: ["Tidak fake", "Hemat energi", "Authentic"],
    weaknesses: ["Terkesan cuek", "Kurang bonding dengan keluarga besar"],
    tips: ["Coba lebih terbuka, mungkin seru lho", "Cari satu-dua orang untuk bonding dalam"],
  },
  D: {
    type: "D",
    title: "Jiwa Arisan Sejati",
    emoji: "🎉",
    description: "Kamu adalah nyawa dari setiap arisan! Selalu heboh, ramah, dan bikin suasana jadi seru. Kamu genuinely enjoy kumpul keluarga dan jadi favorit banyak orang.",
    traits: ["Ekstrovert", "Hangat", "Entertainer", "Generous"],
    strengths: ["Disenangi semua orang", "Mencairkan suasana", "Perekat keluarga"],
    weaknesses: ["Bisa kelelahan", "Kadang too much"],
    tips: ["Jaga energi, istirahat juga penting", "Tidak semua harus dilayani sekaligus"],
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
