export const questions = [
  {
    id: 1,
    question: "Berapa banyak kegunaan yang bisa kamu pikirkan untuk sebuah bata?",
    options: [
      { text: "Lebih dari 10 kegunaan berbeda", type: "A" },
      { text: "5-10 kegunaan", type: "B" },
      { text: "3-5 kegunaan", type: "C" },
      { text: "1-2 kegunaan saja", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat menghadapi masalah, apa yang pertama kamu lakukan?",
    options: [
      { text: "Brainstorm berbagai solusi tidak konvensional", type: "A" },
      { text: "Kombinasi solusi lama dengan ide baru", type: "B" },
      { text: "Cari solusi yang sudah terbukti berhasil", type: "C" },
      { text: "Tanya orang lain cara menyelesaikannya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bagaimana kamu mendeskripsikan gaya berpikirmu?",
    options: [
      { text: "Sering punya ide yang tidak terpikirkan orang lain", type: "A" },
      { text: "Bisa melihat berbagai sudut pandang", type: "B" },
      { text: "Lebih suka cara yang sudah teruji", type: "C" },
      { text: "Mengikuti cara yang umum digunakan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jika diminta menggambar rumah, apa yang akan kamu gambar?",
    options: [
      { text: "Rumah dengan desain unik dan futuristik", type: "A" },
      { text: "Rumah dengan beberapa elemen kreatif", type: "B" },
      { text: "Rumah standar tapi dengan detail bagus", type: "C" },
      { text: "Rumah sederhana seperti yang biasa digambar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat bosan, apa yang biasanya kamu lakukan?",
    options: [
      { text: "Menciptakan sesuatu atau bereksperimen", type: "A" },
      { text: "Explore hobi atau aktivitas baru", type: "B" },
      { text: "Melakukan aktivitas hiburan yang biasa", type: "C" },
      { text: "Scroll sosial media atau tidur", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bagaimana reaksimu terhadap aturan?",
    options: [
      { text: "Aturan adalah panduan, bisa dimodifikasi jika perlu", type: "A" },
      { text: "Ikuti aturan tapi dengan interpretasi sendiri", type: "B" },
      { text: "Ikuti aturan karena ada alasannya", type: "C" },
      { text: "Aturan harus diikuti tanpa pengecualian", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa hubungan antara 'sendok' dan 'cermin'?",
    options: [
      { text: "Bisa membuat puluhan koneksi berbeda", type: "A" },
      { text: "Bisa menemukan beberapa koneksi menarik", type: "B" },
      { text: "Ada beberapa kesamaan dasar", type: "C" },
      { text: "Tidak ada hubungan yang jelas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bagaimana caramu mendekorasi ruangan?",
    options: [
      { text: "Mix berbagai gaya dengan twist personal", type: "A" },
      { text: "Ikuti tren tapi dengan sentuhan sendiri", type: "B" },
      { text: "Ikuti tema tertentu yang sudah ada", type: "C" },
      { text: "Biarkan sederhana dan fungsional", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat menulis pesan atau email, gayamu seperti apa?",
    options: [
      { text: "Selalu berbeda, banyak variasi dan kreasi", type: "A" },
      { text: "Ada style personal yang konsisten tapi variatif", type: "B" },
      { text: "Profesional dan standar", type: "C" },
      { text: "Copy template atau ikuti format umum", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jika diberi waktu kosong 1 jam, apa yang akan kamu buat?",
    options: [
      { text: "Sesuatu yang belum pernah ada sebelumnya", type: "A" },
      { text: "Variasi dari sesuatu yang sudah ada", type: "B" },
      { text: "Mengikuti tutorial untuk membuat sesuatu", type: "C" },
      { text: "Tidak terpikir untuk membuat sesuatu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bagaimana kamu memandang 'kesalahan' atau 'kegagalan'?",
    options: [
      { text: "Sumber inspirasi dan eksperimen baru", type: "A" },
      { text: "Pelajaran yang bisa diambil", type: "B" },
      { text: "Sesuatu yang harus dihindari", type: "C" },
      { text: "Bukti bahwa cara itu tidak berhasil", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Berapa banyak cara berbeda untuk pergi dari rumah ke kantor?",
    options: [
      { text: "Tak terbatas! Bisa lewat mana saja", type: "A" },
      { text: "Banyak alternatif jika mau kreatif", type: "B" },
      { text: "Beberapa rute utama", type: "C" },
      { text: "Satu atau dua cara yang paling efisien", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kreator Brillian",
    emoji: "🎨",
    description: "Wow! Kreativitasmu luar biasa! Kamu adalah pemikir divergen yang bisa menghasilkan ide-ide original dan tidak konvensional. Kamu melihat dunia dengan cara yang unik dan selalu menemukan kemungkinan baru.",
    traits: ["Inovatif", "Original", "Divergent thinker", "Imaginatif"],
    strengths: ["Ide-ide breakthrough", "Problem solving kreatif", "Tidak takut berbeda"],
    weaknesses: ["Kadang ide terlalu out of the box", "Bisa sulit fokus pada satu ide"],
    tips: ["Channel kreativitasmu ke project nyata", "Kolaborasi dengan orang yang lebih teknis", "Catat semua idemu"],
  },
  B: {
    type: "B",
    title: "Pemikir Kreatif",
    emoji: "💡",
    description: "Bagus! Kamu memiliki kreativitas yang baik dengan balance antara originalitas dan praktikalitas. Kamu bisa menghasilkan ide-ide segar sambil tetap realistis dalam implementasinya.",
    traits: ["Kreatif", "Balanced", "Adaptif", "Praktis"],
    strengths: ["Ide yang aplikatif", "Bisa bridge antara kreasi dan eksekusi", "Fleksibel"],
    weaknesses: ["Kadang ragu dengan ide yang terlalu berani"],
    tips: ["Push boundaries lebih sering", "Eksplorasi tanpa takut gagal", "Kreativitas + eksekusi = sukses"],
  },
  C: {
    type: "C",
    title: "Kreativitas Berkembang",
    emoji: "🌱",
    description: "Kreativitasmu masih dalam tahap pengembangan. Kamu mungkin lebih nyaman dengan pendekatan yang sudah teruji, tapi ada potensi kreativitas yang bisa dikembangkan lebih lanjut.",
    traits: ["Terstruktur", "Reliable", "Berkembang", "Konsisten"],
    strengths: ["Eksekusi yang baik", "Bisa diandalkan", "Teliti"],
    weaknesses: ["Kadang terlalu safe", "Kurang eksplorasi"],
    tips: ["Coba brainstorming tanpa filter", "Eksperimen dengan hal-hal kecil dulu", "Lihat masalah dari sudut berbeda"],
  },
  D: {
    type: "D",
    title: "Potensi Tersembunyi",
    emoji: "✨",
    description: "Kamu mungkin lebih nyaman dengan cara konvensional. Tapi semua orang punya kreativitas - mungkin hanya perlu stimulus yang tepat untuk memunculkannya. Coba eksplorasi lebih!",
    traits: ["Konvensional", "Terstruktur", "Potensi ada", "Perlu trigger"],
    strengths: ["Ikuti prosedur dengan baik", "Reliable", "Konsisten"],
    weaknesses: ["Comfort zone yang kuat", "Jarang eksplorasi"],
    tips: ["Coba aktivitas kreatif: gambar, tulis, craft", "Jangan takut salah", "Kreativitas bisa dilatih!"],
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
