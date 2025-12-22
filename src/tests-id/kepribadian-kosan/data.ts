// Kepribadian dari Gaya di Kosan
// Tes ini mengungkap kepribadianmu dari cara kamu mengelola kehidupan kosan!

export const questions = [
  {
    id: 1,
    question: "Pintu kamar kos biasanya...",
    options: [
      { text: "Selalu terbuka, welcome siapa aja", type: "A" },
      { text: "Tertutup tapi tidak dikunci", type: "B" },
      { text: "Terkunci, privacy penting", type: "C" },
      { text: "Tergantung aktivitas dan mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dapur bersama atau fasilitas shared...",
    options: [
      { text: "Sering pakai, masak dan berinteraksi", type: "A" },
      { text: "Pakai seperlunya, quick and clean", type: "B" },
      { text: "Jarang, prefer di kamar sendiri", type: "C" },
      { text: "Hindari jam sibuk, tidak suka antri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau ada anak kos baru...",
    options: [
      { text: "Langsung kenalan dan welcome!", type: "A" },
      { text: "Sapa kalau ketemu, friendly tapi tidak proaktif", type: "B" },
      { text: "Tunggu dia yang kenalan duluan", type: "C" },
      { text: "Tidak terlalu peduli, fokus urusan sendiri", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sound system atau aktivitas berisik...",
    options: [
      { text: "Pakai headphone, tidak mau ganggu orang", type: "A" },
      { text: "Volume rendah, balance antara enjoy dan respect", type: "B" },
      { text: "Bebas di jam-jam tertentu", type: "C" },
      { text: "Tidak peduli, kamar sendiri ya bebas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bayar listrik dan air bersama...",
    options: [
      { text: "Selalu tepat waktu dan fair", type: "A" },
      { text: "Bayar kalau ditagih", type: "B" },
      { text: "Proaktif ingetin yang lain juga", type: "C" },
      { text: "Sering telat, lupa terus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Barang yang sering dipinjam/pinjamkan...",
    options: [
      { text: "Sering pinjam dan dipinjam, sharing is caring", type: "A" },
      { text: "Pinjam kalau urgent, langsung balikin", type: "B" },
      { text: "Prefer tidak pinjam atau meminjamkan", type: "C" },
      { text: "Pinjam iya, dipinjam belum tentu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kebersihan area bersama...",
    options: [
      { text: "Ikut piket atau bersih-bersih bareng", type: "A" },
      { text: "Bersihkan setelah pakai, minimal footprint", type: "B" },
      { text: "Tidak terlalu perhatiin, ada yang bersihkan", type: "C" },
      { text: "Komplain kalau kotor tapi jarang kontribusi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Makan bareng atau aktivitas bersama anak kos...",
    options: [
      { text: "Sering! Seru dan hemat bareng", type: "A" },
      { text: "Sesekali, kalau diajak", type: "B" },
      { text: "Jarang, lebih nyaman sendiri", type: "C" },
      { text: "Tergantung siapa yang ngajak", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau ada masalah dengan anak kos lain...",
    options: [
      { text: "Ngobrol langsung, selesaikan baik-baik", type: "A" },
      { text: "Lapor ibu kos biar netral", type: "B" },
      { text: "Diam dan hindari, males ribut", type: "C" },
      { text: "Curhat ke anak kos lain dulu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tamu atau pacar yang menginap...",
    options: [
      { text: "Sering, kalau diperbolehkan rules kos", type: "A" },
      { text: "Sesekali, kalau urgent atau weekend", type: "B" },
      { text: "Tidak pernah, private space", type: "C" },
      { text: "Diam-diam kalau bisa, hehe", type: "D" },
    ],
  },
  {
    id: 11,
    question: "WiFi kos lemot atau mati...",
    options: [
      { text: "Koordinasi bareng untuk komplain atau ganti", type: "A" },
      { text: "Hotspot HP, sabar aja", type: "B" },
      { text: "Ngungsi ke cafe atau tempat lain", type: "C" },
      { text: "Stress dan complain tapi tidak action", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kenangan di kosan...",
    options: [
      { text: "Banyak! Teman-teman kos jadi keluarga kedua", type: "A" },
      { text: "Ada beberapa, nothing special tapi okay", type: "B" },
      { text: "Tempat tinggal aja, tidak terlalu memorable", type: "C" },
      { text: "Campur aduk, ada baik ada buruknya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Social Butterfly Kos",
    emoji: "🦋",
    description: "Kamu adalah nyawa kosan! Semua anak kos kenal dan akrab sama kamu. Koordinator makan bareng, movie night, dan aktivitas bersama. Kos jadi terasa seperti rumah karena kamu.",
    traits: ["Social", "Friendly", "Leader", "Inclusive"],
    strengths: ["Banyak teman", "Support system kuat", "Kosan jadi seru"],
    weaknesses: ["Privacy berkurang", "Capek jadi social glue", "Susah alone time"],
    tips: ["Me time juga penting", "Tidak harus selalu available"],
  },
  B: {
    type: "B",
    title: "Good Neighbor",
    emoji: "🤝",
    description: "Kamu adalah tetangga kos yang ideal! Ramah tapi tidak intrusive, helpful tapi tidak kepo. Balance sempurna antara sosial dan privasi.",
    traits: ["Balanced", "Respectful", "Reliable", "Independent"],
    strengths: ["Dihormati", "Relasi sehat", "Tidak drama"],
    weaknesses: ["Kadang terlihat distant", "Kurang memorable"],
    tips: ["Sesekali lebih aktif", "Inisiatif hangout kadang bagus"],
  },
  C: {
    type: "C",
    title: "Private Lodger",
    emoji: "🔐",
    description: "Kamu adalah penghuni kos yang sangat private! Kamar adalah sanctuary dan interaksi minimal. Fokus pada kehidupan sendiri, kos cuma tempat tinggal.",
    traits: ["Private", "Independent", "Self-sufficient", "Introvert"],
    strengths: ["Fokus tinggi", "Tidak terlibat drama", "Privacy terjaga"],
    weaknesses: ["Miss community experience", "Bisa terlihat sombong"],
    tips: ["Koneksi dengan tetangga kadang berguna", "Tidak harus BFF, tapi kenal baik itu oke"],
  },
  D: {
    type: "D",
    title: "Selective Socializer",
    emoji: "🎭",
    description: "Kamu adalah penghuni kos yang selective! Dekat dengan beberapa orang, distant dengan lainnya. Memilih dengan siapa mau berinteraksi.",
    traits: ["Selective", "Judgmental", "Quality-focused", "Moody"],
    strengths: ["Circle kecil tapi solid", "Tidak fake friendly", "Authentic"],
    weaknesses: ["Bisa terlihat cliquey", "Miss opportunities"],
    tips: ["Give people chance", "First impression tidak selalu benar"],
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
