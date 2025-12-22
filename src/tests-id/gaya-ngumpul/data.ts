// Gaya Kamu Saat Ngumpul Bareng Teman
// Tes ini mengungkap kepribadianmu berdasarkan gaya hangout!

export const questions = [
  {
    id: 1,
    question: "Saat diajak ngumpul, respons pertamamu?",
    options: [
      { text: "Cek jadwal dulu, kalau kosong baru iya", type: "A" },
      { text: "Langsung iya! Kapan? Dimana?", type: "B" },
      { text: "Tergantung siapa aja yang ikut", type: "C" },
      { text: "Tanya tempatnya dulu, cocok gak", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tempat ngumpul favorit kamu?",
    options: [
      { text: "Kafe aesthetic yang cozy", type: "A" },
      { text: "Tempat makan yang enak dan rame", type: "B" },
      { text: "Rumah salah satu teman", type: "C" },
      { text: "Mall atau tempat yang bisa jalan-jalan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Biasanya kamu datang jam berapa?",
    options: [
      { text: "On time, sesuai yang dijanjikan", type: "A" },
      { text: "Telat 15-30 menit, standar", type: "B" },
      { text: "Paling terakhir datang", type: "C" },
      { text: "Paling pertama, tidak suka buat orang nunggu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Posisimu di grup saat ngumpul?",
    options: [
      { text: "Pendengar yang baik", type: "A" },
      { text: "Yang paling banyak cerita", type: "B" },
      { text: "Yang bikin lelucon dan bikin ketawa", type: "C" },
      { text: "Yang ngatur agenda dan billing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Topik obrolan favoritmu saat ngumpul?",
    options: [
      { text: "Gosip dan update kehidupan masing-masing", type: "A" },
      { text: "Ngobrolin kenangan masa lalu", type: "B" },
      { text: "Debat topik random yang seru", type: "C" },
      { text: "Rencana jalan-jalan atau proyek bareng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Soal bayar-bayaran, kamu biasanya?",
    options: [
      { text: "Split bill rata, paling adil", type: "A" },
      { text: "Bayar masing-masing sesuai pesanan", type: "B" },
      { text: "Gantian traktir setiap kali kumpul", type: "C" },
      { text: "Ada yang kaya traktir, aku mah ikut aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau ada teman yang lagi curhat masalah, kamu...",
    options: [
      { text: "Dengerin dengan serius, kasih saran", type: "A" },
      { text: "Support dengan kata-kata penyemangat", type: "B" },
      { text: "Coba hibur dengan candaan", type: "C" },
      { text: "Ajak piknik, refreshing dulu!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Frekuensi ideal ngumpul bareng teman menurutmu?",
    options: [
      { text: "Seminggu sekali, wajib!", type: "A" },
      { text: "Dua minggu sekali cukup", type: "B" },
      { text: "Sebulan sekali, quality over quantity", type: "C" },
      { text: "Kapan aja ada waktu, fleksibel", type: "D" },
    ],
  },
  {
    id: 9,
    question: "HP kamu saat ngumpul biasanya...",
    options: [
      { text: "Silent, fokus sama teman", type: "A" },
      { text: "Cek sesekali kalau ada notif penting", type: "B" },
      { text: "Foto-foto buat kenang-kenangan", type: "C" },
      { text: "Share lokasi dan update story", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau ada yang batal ikut last minute, reaksimu?",
    options: [
      { text: "Maklum, hal itu biasa", type: "A" },
      { text: "Sedikit kecewa tapi lanjut aja", type: "B" },
      { text: "Kesal, harusnya ngomong dari awal", type: "C" },
      { text: "Tetap have fun sama yang datang", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ngumpul udah selesai, kamu biasanya?",
    options: [
      { text: "Pulang langsung, cukup sudah", type: "A" },
      { text: "Extend lagi ke tempat lain", type: "B" },
      { text: "Anter teman yang searah", type: "C" },
      { text: "Yang terakhir cabut, sayang mau pisah", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah ngumpul, kamu biasanya...",
    options: [
      { text: "Recharge sendirian, capek sosialisasi", type: "A" },
      { text: "Masih chat di grup, lanjutin obrolan", type: "B" },
      { text: "Upload foto, tag semua yang datang", type: "C" },
      { text: "Udah rencana kapan ngumpul lagi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Teman Ngumpul Kalem",
    emoji: "☕",
    description: "Kamu adalah tipe yang kalem dan meaningful dalam pertemanan. Lebih suka quality time daripada quantity. Kehadiranmu di grup itu menenangkan.",
    traits: ["Kalem", "Pendengar", "Thoughtful", "Reliable"],
    strengths: ["Teman curhat yang baik", "Tidak drama", "Stabil"],
    weaknesses: ["Kadang terlalu pasif", "Kurang inisiatif"],
    tips: ["Sesekali yang ngajak duluan", "Lebih ekspresif juga oke"],
  },
  B: {
    type: "B",
    title: "Teman Ngumpul Seru",
    emoji: "🎤",
    description: "Kamu adalah nyawa dari setiap gathering! Banyak cerita, banyak energi, bikin suasana jadi hidup. Teman-teman pasti kangen kalau kamu gak ada.",
    traits: ["Ekspresif", "Storyteller", "Energik", "Fun"],
    strengths: ["Mencairkan suasana", "Banyak pengalaman", "Entertaining"],
    weaknesses: ["Kadang terlalu dominan", "Kurang dengerin"],
    tips: ["Beri space untuk yang lain cerita", "Dengerin juga sama pentingnya"],
  },
  C: {
    type: "C",
    title: "Teman Ngumpul Comedian",
    emoji: "😂",
    description: "Kamu adalah pelawak grup! Selalu bisa bikin suasana jadi cair dengan humor. Kehadiranmu bikin teman-teman lupa masalah sejenak.",
    traits: ["Humoris", "Ceria", "Kreatif", "Spontan"],
    strengths: ["Bikin happy", "Memorable", "Mood booster"],
    weaknesses: ["Kadang gak serius", "Humor bisa keterlaluan"],
    tips: ["Tahu waktu kapan serius", "Humor yang membangun lebih baik"],
  },
  D: {
    type: "D",
    title: "Teman Ngumpul Organizer",
    emoji: "📍",
    description: "Kamu adalah koordinator grup! Dari cari tempat, collect billing, sampai atur jadwal - semua kamu handle. Tanpa kamu, ngumpul gak akan terjadi.",
    traits: ["Organisator", "Inisiatif", "Leader", "Bertanggung jawab"],
    strengths: ["Bikin sesuatu terjadi", "Reliable", "Punya koneksi tempat bagus"],
    weaknesses: ["Capek jadi yang ngatur terus", "Harusnya sharing tugas"],
    tips: ["Delegasikan ke teman lain sesekali", "Kamu juga berhak santai"],
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
