// Tes Kepribadian dari Perilaku di Angkot/Bus
// Gaya naik transportasi umum mencerminkan siapa kamu!

export const questions = [
  {
    id: 1,
    question: "Saat masuk angkot/bus, kamu pilih duduk di...",
    options: [
      { text: "Depan dekat supir, bisa ngobrol", type: "A" },
      { text: "Tengah, posisi strategis", type: "B" },
      { text: "Belakang, lebih privat", type: "C" },
      { text: "Mana aja yang kosong", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat ada penumpang berdiri dan kamu duduk...",
    options: [
      { text: "Tawarkan tempat duduk", type: "A" },
      { text: "Kasih ke yang lebih butuh (lansia, ibu hamil)", type: "B" },
      { text: "Pura-pura tidur atau sibuk HP", type: "C" },
      { text: "Geser dan berbagi space", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bayar ongkos angkot, kamu...",
    options: [
      { text: "Siapin uang pas dari awal", type: "A" },
      { text: "Minta tolong penumpang lain nyampaiin", type: "B" },
      { text: "Bayar pas mau turun", type: "C" },
      { text: "Terkadang lupa sampai ditagih", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau angkot kebanyakan puterin lagu keras...",
    options: [
      { text: "Nikmati aja, bagian dari pengalaman", type: "A" },
      { text: "Pakai earphone, dengar musik sendiri", type: "B" },
      { text: "Sedikit terganggu tapi diam saja", type: "C" },
      { text: "Minta supir kecilkan volumenya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat angkot penuh dan sesak...",
    options: [
      { text: "Tetap naik, sudah biasa", type: "A" },
      { text: "Tunggu angkot berikutnya yang kosong", type: "B" },
      { text: "Naik tapi complain dalam hati", type: "C" },
      { text: "Cari alternatif ojol atau jalan kaki", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau ada pedagang asongan naik angkot...",
    options: [
      { text: "Kadang beli, kasihan juga", type: "A" },
      { text: "Lihat dulu, kalau menarik baru beli", type: "B" },
      { text: "Pura-pura sibuk supaya tidak ditawarin", type: "C" },
      { text: "Tolak dengan sopan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat mau turun di tempat yang bukan halte resmi...",
    options: [
      { text: "Bilang 'kiri' dengan keras dan jelas", type: "A" },
      { text: "Ketuk-ketuk pinggiran angkot", type: "B" },
      { text: "Minta tolong penumpang lain bilang", type: "C" },
      { text: "Turun di halte resmi aja, jalan sedikit", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau duduk bersebelahan dengan orang asing...",
    options: [
      { text: "Ajak ngobrol ringan", type: "A" },
      { text: "Senyum sopan lalu fokus ke HP", type: "B" },
      { text: "Diam dan jaga jarak", type: "C" },
      { text: "Cuek, fokus ke tujuan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Barang bawaan kamu di angkot...",
    options: [
      { text: "Pangku di depan, aman terjaga", type: "A" },
      { text: "Taruh di samping tapi tetap pegang", type: "B" },
      { text: "Sandaran di belakang", type: "C" },
      { text: "Minimal barang, praktis aja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat supir ngebut atau ugal-ugalan...",
    options: [
      { text: "Minta pelan-pelan dengan sopan", type: "A" },
      { text: "Pegangan kuat-kuat dan doa", type: "B" },
      { text: "Turun di pemberhentian terdekat", type: "C" },
      { text: "Enjoy aja, part of the thrill", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Penggunaan HP selama di angkot...",
    options: [
      { text: "Sesekali cek, lebih suka lihat pemandangan", type: "A" },
      { text: "Scroll sosmed atau baca berita", type: "B" },
      { text: "Nonton video atau main game", type: "C" },
      { text: "HP di kantong, waspada copet", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Alasan utama kamu naik angkot...",
    options: [
      { text: "Murah dan bisa kemana-mana", type: "A" },
      { text: "Tidak punya kendaraan pribadi", type: "B" },
      { text: "Lebih santai, tidak perlu nyetir", type: "C" },
      { text: "Kadang-kadang aja, nostalgia", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penumpang Sosial",
    emoji: "💬",
    description: "Kamu adalah penumpang yang ramah dan terbuka! Angkot bukan sekadar transportasi tapi juga tempat berinteraksi. Kamu menghargai pengalaman human connection.",
    traits: ["Friendly", "Open", "Adaptable", "People person"],
    strengths: ["Bisa dapat teman baru", "Pengalaman lebih kaya", "Empati tinggi"],
    weaknesses: ["Kadang terlalu trusting", "Privacy kurang terjaga"],
    tips: ["Tetap waspada dengan lingkungan", "Tidak semua orang perlu diajak ngobrol"],
  },
  B: {
    type: "B",
    title: "Penumpang Strategis",
    emoji: "🎯",
    description: "Kamu adalah penumpang yang smart dan calculated! Tau cara optimize pengalaman naik angkot - dari posisi duduk sampai timing turun. Efisien adalah kunci.",
    traits: ["Strategic", "Prepared", "Observant", "Efficient"],
    strengths: ["Rarely caught off guard", "Smooth commute", "Time conscious"],
    weaknesses: ["Kadang terlalu rigid", "Miss spontaneous moments"],
    tips: ["Sesekali go with the flow", "Life tidak selalu bisa direncanakan"],
  },
  C: {
    type: "C",
    title: "Penumpang Introvert",
    emoji: "🎧",
    description: "Kamu adalah penumpang yang menikmati personal space! Angkot adalah me-time untuk scroll HP, dengerin musik, atau sekadar merenung. Tidak butuh interaksi berlebihan.",
    traits: ["Private", "Independent", "Quiet", "Self-contained"],
    strengths: ["Peaceful commute", "Recharge time", "Not easily bothered"],
    weaknesses: ["Miss networking opportunities", "Bisa terkesan kurang ramah"],
    tips: ["Sesekali buka diri untuk interaksi", "Senyum tidak ada ruginya"],
  },
  D: {
    type: "D",
    title: "Penumpang Praktis",
    emoji: "⚡",
    description: "Kamu adalah penumpang yang simpel dan to the point! Angkot hanya sarana dari A ke B. Tidak perlu drama atau kompleksitas - yang penting sampai tujuan.",
    traits: ["Practical", "No-nonsense", "Flexible", "Low maintenance"],
    strengths: ["Adaptable", "Tidak ribet", "Easy to please"],
    weaknesses: ["Kadang terlalu pasif", "Miss details penting"],
    tips: ["Perhatikan sekitar juga", "Sometimes details matter"],
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
