// Gaya Kamu Saat Kondangan
// Tes ini mengungkap kepribadianmu berdasarkan gaya hadiri kondangan!

export const questions = [
  {
    id: 1,
    question: "Dapat undangan kondangan, hal pertama yang kamu pikirin?",
    options: [
      { text: "Mau pakai baju apa ya?", type: "A" },
      { text: "Amplop isinya berapa ya?", type: "B" },
      { text: "Jauh gak tempatnya?", type: "C" },
      { text: "Siapa aja yang datang ya?", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Persiapan kondangan kamu biasanya?",
    options: [
      { text: "Dari seminggu sebelumnya udah milih outfit", type: "A" },
      { text: "H-1 baru cari-cari baju yang cocok", type: "B" },
      { text: "Hari H baru siap-siap, yang penting rapi", type: "C" },
      { text: "Beli baju baru khusus kondangan itu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Datang ke kondangan, kamu biasanya...",
    options: [
      { text: "On time sesuai undangan", type: "A" },
      { text: "Telat dikit, biar gak terlalu awal", type: "B" },
      { text: "Mepet-mepet, yang penting sempat", type: "C" },
      { text: "Awal banget, pengen ketemu pengantin", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat antri salaman sama pengantin, kamu...",
    options: [
      { text: "Sabar antri, ngobrol sama yang di depan/belakang", type: "A" },
      { text: "Cari jalur yang lebih cepet", type: "B" },
      { text: "Skip aja, langsung ke meja makan", type: "C" },
      { text: "Antri sambil foto-foto venue", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Di depan pengantin, kamu ngomong apa?",
    options: [
      { text: "Ucapan standar plus doa singkat", type: "A" },
      { text: "Selamat ya! Cepet punya momongan!", type: "B" },
      { text: "Selamat, terus langsung pergi", type: "C" },
      { text: "Ngobrol lama sampai diusir petugas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Strategi makan di kondangan?",
    options: [
      { text: "Pilih-pilih yang disuka aja", type: "A" },
      { text: "Ambil semua, porsi normal", type: "B" },
      { text: "Makan secukupnya, fokus pulang", type: "C" },
      { text: "Nambah berkali-kali, rugi kalau gak!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Soal foto di kondangan, kamu...",
    options: [
      { text: "Foto sama pengantin wajib", type: "A" },
      { text: "Selfie di spot foto aja cukup", type: "B" },
      { text: "Gak foto-foto, males", type: "C" },
      { text: "Foto semua: makanan, dekor, outfit", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ketemu teman lama di kondangan, reaksimu?",
    options: [
      { text: "Sapa singkat, lanjut aktivitas lain", type: "A" },
      { text: "Ngobrol sebentar, tukeran kontak", type: "B" },
      { text: "Angguk aja dari jauh", type: "C" },
      { text: "Heboh! Reunion dadakan!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Isi amplop kondanganmu biasanya?",
    options: [
      { text: "Sesuai standar umum, aman", type: "A" },
      { text: "Tergantung seberapa deket sama yang nikah", type: "B" },
      { text: "Minimalis, yang penting ada", type: "C" },
      { text: "Lebih dari standar, biar memorable", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berapa lama biasanya kamu di kondangan?",
    options: [
      { text: "1-2 jam, cukup untuk semua ritual", type: "A" },
      { text: "30 menit - 1 jam, efisien", type: "B" },
      { text: "Secepat mungkin, hit and run", type: "C" },
      { text: "Sampai acara selesai, kalau perlu bantu beres", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Souvenir kondangan, menurutmu?",
    options: [
      { text: "Ambil, siapa tau berguna", type: "A" },
      { text: "Lihat dulu, kalau bagus baru ambil", type: "B" },
      { text: "Skip, rumah udah penuh souvenir", type: "C" },
      { text: "Harus ambil! Bagian dari pengalaman", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah kondangan, kamu biasanya...",
    options: [
      { text: "Pulang langsung, istirahat", type: "A" },
      { text: "Mampir ke tempat lain dulu", type: "B" },
      { text: "Langsung ganti baju santai", type: "C" },
      { text: "Upload foto, tag semua orang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tamu Kondangan Proper",
    emoji: "💐",
    description: "Kamu adalah tamu kondangan yang ideal! Tahu etika, berpenampilan rapi, dan menghormati semua ritual. Pengantin pasti senang punya tamu kayak kamu.",
    traits: ["Sopan", "Teratur", "Menghargai", "Berkelas"],
    strengths: ["Tahu etika sosial", "Tidak memalukan", "Reliable"],
    weaknesses: ["Kadang terlalu formal", "Kurang spontan"],
    tips: ["Sesekali lebih santai", "Nikmati momen, tidak harus selalu sempurna"],
  },
  B: {
    type: "B",
    title: "Tamu Kondangan Efisien",
    emoji: "⚡",
    description: "Kamu master efisiensi kondangan! Tahu cara navigasi venue, kapan datang, dan berapa lama stay. Waktu adalah aset berhargamu.",
    traits: ["Efisien", "Praktis", "Strategis", "Time-conscious"],
    strengths: ["Tidak buang waktu", "Multitasking", "Bisa handle banyak kondangan sehari"],
    weaknesses: ["Terkesan buru-buru", "Kurang quality time"],
    tips: ["Sesekali slow down", "Nikmati prosesnya, bukan cuma checklist"],
  },
  C: {
    type: "C",
    title: "Tamu Kondangan Minimalis",
    emoji: "🚪",
    description: "Datang, salam, makan, pulang. Itu filosofimu! Kamu hadir karena menghargai undangan, tapi tidak lebih. Simple dan tidak ribet.",
    traits: ["Minimalis", "Introvert", "Praktis", "Low-key"],
    strengths: ["Tidak drama", "Hemat energi", "Efisien"],
    weaknesses: ["Terkesan kurang antusias", "Miss kesempatan networking"],
    tips: ["Coba lebih engage sesekali", "Kondangan bisa jadi kesempatan reconnect"],
  },
  D: {
    type: "D",
    title: "Tamu Kondangan Heboh",
    emoji: "🎊",
    description: "Kondangan adalah event bagimu! Dari outfit sampai foto, semua harus on point. Kamu bikin kondangan jadi lebih seru dengan kehadiranmu.",
    traits: ["Antusias", "Sosial", "Ekspresif", "Fun"],
    strengths: ["Menyebarkan kebahagiaan", "Memorable", "Networking tinggi"],
    weaknesses: ["Bisa overwhelming", "Kadang lupa waktu"],
    tips: ["Jangan sampai lebih heboh dari pengantin", "Balance antara fun dan respect"],
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
