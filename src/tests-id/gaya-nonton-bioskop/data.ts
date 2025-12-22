// Gaya Kamu Saat Nonton Bioskop
// Tes ini mengungkap kepribadianmu berdasarkan gaya nonton di bioskop!

export const questions = [
  {
    id: 1,
    question: "Sebelum nonton, kamu biasanya...",
    options: [
      { text: "Book tiket online jauh-jauh hari", type: "A" },
      { text: "Beli tiket di tempat, spontan", type: "B" },
      { text: "Lihat review dulu, baru decide", type: "C" },
      { text: "Ikut aja kalau diajak teman", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Posisi kursi favorit di bioskop?",
    options: [
      { text: "Tengah-tengah, view paling bagus", type: "A" },
      { text: "Belakang, lebih private", type: "B" },
      { text: "Depan, lebih immersive", type: "C" },
      { text: "Yang available aja, gak picky", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Snack wajib saat nonton?",
    options: [
      { text: "Popcorn caramel atau cheese", type: "A" },
      { text: "Nachos dengan keju", type: "B" },
      { text: "Hotdog atau makanan berat", type: "C" },
      { text: "Bawa snack dari luar (sst!)", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Minuman pilihanmu?",
    options: [
      { text: "Large soda, makin besar makin worth", type: "A" },
      { text: "Medium, pas dan gak kebanyakan", type: "B" },
      { text: "Air mineral aja", type: "C" },
      { text: "Gak beli minum, mahal!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Datang ke bioskop, kapan?",
    options: [
      { text: "30 menit sebelum film mulai", type: "A" },
      { text: "Pas iklan/trailer mulai", type: "B" },
      { text: "Mepet-mepet film mulai", type: "C" },
      { text: "Kadang telat dikit, gapapa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Genre film favorit?",
    options: [
      { text: "Action/superhero, visual spektakuler", type: "A" },
      { text: "Drama/romance, cerita yang menyentuh", type: "B" },
      { text: "Horror/thriller, adrenalin rush", type: "C" },
      { text: "Comedy, yang penting ketawa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nonton sama siapa?",
    options: [
      { text: "Pacar/pasangan, quality time", type: "A" },
      { text: "Teman-teman, lebih rame", type: "B" },
      { text: "Sendirian, lebih fokus", type: "C" },
      { text: "Keluarga, bonding time", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau ada yang berisik di sebelah, kamu...",
    options: [
      { text: "Tegur dengan sopan", type: "A" },
      { text: "Pindah kursi kalau bisa", type: "B" },
      { text: "Diam aja tapi kesel dalam hati", type: "C" },
      { text: "Lapor ke petugas bioskop", type: "D" },
    ],
  },
  {
    id: 9,
    question: "HP kamu selama film berlangsung?",
    options: [
      { text: "Silent dan masuk tas, fokus nonton", type: "A" },
      { text: "Silent tapi sesekali cek", type: "B" },
      { text: "Foto-foto scene bagus (silent)", type: "C" },
      { text: "Tetap aktif, multitasking", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Film selesai, kamu...",
    options: [
      { text: "Tunggu sampai credit habis", type: "A" },
      { text: "Langsung keluar begitu THE END", type: "B" },
      { text: "Diskusi film sama teman dulu", type: "C" },
      { text: "Foto dulu sama layar/poster", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Frequency nonton bioskop kamu?",
    options: [
      { text: "Sebulan sekali atau lebih", type: "A" },
      { text: "Kalau ada film bagus aja", type: "B" },
      { text: "Jarang, prefer streaming", type: "C" },
      { text: "Tergantung budget dan waktu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pendapatmu tentang bioskop?",
    options: [
      { text: "Pengalaman nonton yang gak tergantikan", type: "A" },
      { text: "Tempat healing dan escape", type: "B" },
      { text: "Worth it untuk film tertentu aja", type: "C" },
      { text: "Mahal, tapi sesekali oke", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cinephile Sejati",
    emoji: "🎬",
    description: "Bioskop adalah temple-mu! Kamu menghargai pengalaman sinematik dan tidak setengah-setengah. Dari booking kursi terbaik sampai snack lengkap, semua harus perfect.",
    traits: ["Perfeksionis", "Movie lover", "Detail-oriented", "Planner"],
    strengths: ["Pengalaman nonton selalu maksimal", "Tau film bagus", "Organized"],
    weaknesses: ["Bisa terlalu rigid", "Budget bisa bengkak"],
    tips: ["Sesekali spontan juga oke", "Tidak semua film harus di bioskop premium"],
  },
  B: {
    type: "B",
    title: "Casual Movie-goer",
    emoji: "🎟️",
    description: "Bioskop adalah salah satu opsi entertainment-mu. Kamu fleksibel dan tidak terlalu ribet. Yang penting bisa nonton film bagus dengan nyaman.",
    traits: ["Fleksibel", "Easy-going", "Balanced", "Practical"],
    strengths: ["Tidak stress soal detail", "Bisa enjoy dalam kondisi apapun", "Hemat"],
    weaknesses: ["Kadang miss film bagus karena gak plan", "Kurang appreciate cinema experience"],
    tips: ["Sesekali treat yourself dengan premium experience", "Book awal untuk film anticipated"],
  },
  C: {
    type: "C",
    title: "Selective Viewer",
    emoji: "🎭",
    description: "Kamu selektif soal film! Tidak sembarang nonton, harus yang berkualitas dan worth the money. Kamu punya taste tersendiri dan stick to it.",
    traits: ["Selektif", "Punya taste", "Value-oriented", "Independent"],
    strengths: ["Tidak boros untuk film jelek", "Punya standar", "Opini sendiri"],
    weaknesses: ["Bisa miss surprise gems", "Terlalu kritis"],
    tips: ["Sesekali nonton tanpa ekspektasi", "Beri kesempatan genre berbeda"],
  },
  D: {
    type: "D",
    title: "Social Movie-goer",
    emoji: "👥",
    description: "Buat kamu, bioskop adalah tentang bonding! Film apa yang ditonton jadi nomor dua, yang penting bareng orang-orang tersayang.",
    traits: ["Sosial", "Fleksibel", "People-oriented", "Adaptif"],
    strengths: ["Bisa enjoy film apapun", "Good company", "Tidak picky"],
    weaknesses: ["Kadang gak serius nonton", "Kurang appreciate filmnya sendiri"],
    tips: ["Sesekali nonton sendirian untuk focus", "Appreciate film sebagai seni juga"],
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
