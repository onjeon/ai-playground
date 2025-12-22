// Tipe Kamu Saat Naik Angkot
// Tes ini mengungkap kepribadianmu berdasarkan perilaku di angkot!

export const questions = [
  {
    id: 1,
    question: "Saat naik angkot, kamu pilih duduk di mana?",
    options: [
      { text: "Dekat pintu, biar gampang turun", type: "A" },
      { text: "Di tengah, paling aman", type: "B" },
      { text: "Di pojok, bisa sandaran", type: "C" },
      { text: "Di depan samping supir, bisa ngobrol", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau angkot penuh banget, reaksimu?",
    options: [
      { text: "Tunggu angkot berikutnya yang lebih kosong", type: "A" },
      { text: "Naik aja, berdiri juga gapapa", type: "B" },
      { text: "Desak-desakan dikit gapapa yang penting sampai", type: "C" },
      { text: "Cari alternatif, naik ojol aja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat mau bayar ongkos, biasanya kamu...",
    options: [
      { text: "Siapin uang pas dari awal naik", type: "A" },
      { text: "Bayar sekalian waktu mau turun", type: "B" },
      { text: "Titip bayar ke penumpang lain", type: "C" },
      { text: "Kadang lupa, diingetin sama supir", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Supir angkot ngetem lama banget, kamu...",
    options: [
      { text: "Sabar nunggu, udah biasa", type: "A" },
      { text: "Minta supir jalan duluan, nambah ongkos gapapa", type: "B" },
      { text: "Pindah ke angkot lain yang lebih isi", type: "C" },
      { text: "Protes halus, 'Bang jalan aja yuk'", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ada pengamen naik, reaksimu?",
    options: [
      { text: "Kasih uang receh, sambil senyum", type: "A" },
      { text: "Dengerin dulu, kalau bagus baru kasih", type: "B" },
      { text: "Pura-pura sibuk main HP", type: "C" },
      { text: "Ngobrol dan tanya nama lagunya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau ada ibu-ibu bawa bayi naik, kamu...",
    options: [
      { text: "Langsung kasih tempat duduk", type: "A" },
      { text: "Bantu pegangin barangnya", type: "B" },
      { text: "Geser sedikit biar muat", type: "C" },
      { text: "Ajak ngobrol dan main sama bayinya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Uang kembalian kurang Rp500, kamu...",
    options: [
      { text: "Ikhlasin aja, gak apa-apa", type: "A" },
      { text: "Minta dengan sopan", type: "B" },
      { text: "Diam tapi kesel dalam hati", type: "C" },
      { text: "Anggap sedekah, yang penting sampai", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Di angkot, kamu biasanya ngapain?",
    options: [
      { text: "Dengerin musik pakai earphone", type: "A" },
      { text: "Scrolling HP, main sosmed", type: "B" },
      { text: "Tidur atau merem-melek", type: "C" },
      { text: "Lihat pemandangan atau ngobrol", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau kelewatan pemberhentian, reaksimu?",
    options: [
      { text: "Turun di situ, jalan kaki balik", type: "A" },
      { text: "Minta supir berhenti, minta maaf", type: "B" },
      { text: "Naik angkot balik arah", type: "C" },
      { text: "Ketawa sendiri, 'aduh gue bego'", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cuaca panas banget di angkot, kamu...",
    options: [
      { text: "Kipas-kipas pakai tangan atau kertas", type: "A" },
      { text: "Minta bukain jendela lebih lebar", type: "B" },
      { text: "Diam aja, udah biasa", type: "C" },
      { text: "Beli es di perempatan waktu macet", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ketemu teman di angkot, reaksimu?",
    options: [
      { text: "Senyum dan sapa sopan", type: "A" },
      { text: "Ngobrol seru sampai lupa mau turun", type: "B" },
      { text: "Pura-pura gak lihat, mager ngobrol", type: "C" },
      { text: "Langsung geser duduk sebelahan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Gimana perasaanmu tentang angkot?",
    options: [
      { text: "Transportasi praktis dan murah", type: "A" },
      { text: "Bagian dari pengalaman kota", type: "B" },
      { text: "Pilihan terakhir kalau gak ada ojol", type: "C" },
      { text: "Seru! Banyak cerita di angkot", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penumpang Ideal",
    emoji: "⭐",
    description: "Kamu adalah penumpang angkot yang ideal! Sopan, siap sedia, dan tidak menyusahkan. Kamu menghargai supir dan sesama penumpang. Sifat praktis dan teraturmu membuatmu disenangi di mana-mana.",
    traits: ["Sopan", "Teratur", "Pengertian", "Praktis"],
    strengths: ["Mudah beradaptasi", "Tidak ribet", "Menghargai orang lain"],
    weaknesses: ["Kadang terlalu pasif", "Kurang speak up"],
    tips: ["Jangan terlalu sungkan untuk minta hakmu", "Tetap jaga keselamatan diri"],
  },
  B: {
    type: "B",
    title: "Penumpang Tegas",
    emoji: "💪",
    description: "Kamu tahu apa yang kamu mau! Tidak takut speak up kalau ada yang kurang sreg. Kamu assertive tapi tetap sopan. Waktu adalah prioritasmu.",
    traits: ["Tegas", "Efisien", "Berani", "Langsung"],
    strengths: ["Tidak gampang ditipu", "Time-oriented", "Percaya diri"],
    weaknesses: ["Bisa terkesan demanding", "Kurang sabar"],
    tips: ["Tetap appreciate supir angkot", "Sabar adalah kunci"],
  },
  C: {
    type: "C",
    title: "Penumpang Santai",
    emoji: "😴",
    description: "Kamu adalah penumpang yang paling santai! Naik angkot adalah waktu me-time bagimu. Tidak banyak mikir, yang penting sampai tujuan.",
    traits: ["Santai", "Low-maintenance", "Pasrah", "Cuek"],
    strengths: ["Tidak gampang stress", "Adaptif", "Easy-going"],
    weaknesses: ["Sering kelewatan", "Kurang aware lingkungan"],
    tips: ["Pasang alarm biar gak kelewatan", "Tetap waspada sama barang bawaan"],
  },
  D: {
    type: "D",
    title: "Penumpang Sosial",
    emoji: "🎉",
    description: "Angkot adalah tempat sosialisasimu! Kamu mudah akrab dengan supir maupun sesama penumpang. Perjalanan jadi seru karena kehadiranmu.",
    traits: ["Ramah", "Ekstrovert", "Ceria", "Mudah bergaul"],
    strengths: ["Networking tinggi", "Menyenangkan", "Banyak kenalan"],
    weaknesses: ["Kadang terlalu banyak ngobrol", "Lupa waktu"],
    tips: ["Hormati penumpang yang butuh ketenangan", "Jaga barang bawaan saat ngobrol"],
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
