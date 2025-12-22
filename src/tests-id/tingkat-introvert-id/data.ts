// Tingkat Introvert Kamu (Versi Indonesia)
// Seberapa introvert kamu dalam konteks sosial Indonesia?

export const questions = [
  {
    id: 1,
    question: "Saat diundang kondangan tetangga...",
    options: [
      { text: "Semangat, ketemu banyak orang!", type: "A" },
      { text: "Datang sebentar, pulang cepat", type: "B" },
      { text: "Cari alasan untuk tidak datang", type: "C" },
      { text: "Kirim amplop aja, ga usah datang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di gathering keluarga besar...",
    options: [
      { text: "Aktif ngobrol sama semua orang", type: "A" },
      { text: "Ngobrol sama yang dekat aja", type: "B" },
      { text: "Diem di pojokan, main HP", type: "C" },
      { text: "Sembunyi di kamar atau keluar sebentar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat arisan atau pengajian RT...",
    options: [
      { text: "Jadi pengurus aktif", type: "A" },
      { text: "Ikut kalau sempat dan mood", type: "B" },
      { text: "Jarang ikut, banyak alasan", type: "C" },
      { text: "Tidak pernah ikut", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Recharge energi setelah kerja...",
    options: [
      { text: "Hangout sama teman-teman", type: "A" },
      { text: "Quality time sama 1-2 orang", type: "B" },
      { text: "Me time di rumah", type: "C" },
      { text: "Sendiri total, ga mau diganggu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Di kantor atau kampus...",
    options: [
      { text: "Kenalan sama semua orang", type: "A" },
      { text: "Punya circle tapi ga terlalu luas", type: "B" },
      { text: "Kenalan seperlunya aja", type: "C" },
      { text: "Prefer kerja sendiri, minimal interaksi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada orang baru di lingkungan...",
    options: [
      { text: "Langsung kenalan dan ajak ngobrol", type: "A" },
      { text: "Tunggu kesempatan yang pas", type: "B" },
      { text: "Tunggu dia yang approach duluan", type: "C" },
      { text: "Biarkan aja, ga perlu kenalan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Weekend idealmu...",
    options: [
      { text: "Jalan-jalan atau hangout seharian", type: "A" },
      { text: "Mix: keluar sebentar, sisanya di rumah", type: "B" },
      { text: "Mostly di rumah dengan hobi", type: "C" },
      { text: "Full di rumah, hermit mode", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Presentasi atau public speaking...",
    options: [
      { text: "Suka! Excited tampil", type: "A" },
      { text: "Bisa kalau harus, tapi nervous", type: "B" },
      { text: "Hindari sebisa mungkin", type: "C" },
      { text: "Nightmare, anxiety tinggi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat naik transportasi umum...",
    options: [
      { text: "Bisa ngobrol sama siapa aja", type: "A" },
      { text: "Senyum dan sapa kalau ada yang mulai", type: "B" },
      { text: "Earphone in, avoid contact", type: "C" },
      { text: "Cari spot paling sepi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Telepon dari nomor tidak dikenal...",
    options: [
      { text: "Langsung angkat", type: "A" },
      { text: "Angkat tapi waspada", type: "B" },
      { text: "Decline, bales WA aja", type: "C" },
      { text: "Ignore completely", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat lebaran atau hari raya...",
    options: [
      { text: "Silaturahmi kemana-mana, seru!", type: "A" },
      { text: "Kunjungi yang penting-penting aja", type: "B" },
      { text: "Mager keluar, terima tamu aja", type: "C" },
      { text: "Pengen liburan kemana orang ga kenal", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau punya masalah...",
    options: [
      { text: "Cerita ke banyak orang", type: "A" },
      { text: "Cerita ke 1-2 orang terdekat", type: "B" },
      { text: "Pendem sendiri dulu", type: "C" },
      { text: "Handle sendiri, ga perlu share", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ekstrovert Murni",
    emoji: "🎉",
    description: "Kamu adalah ekstrovert murni! Energimu datang dari interaksi sosial. Kondangan, arisan, atau gathering adalah happy place. Tanpa orang di sekitar, kamu merasa sepi dan kurang energi.",
    traits: ["Sociable", "Energik", "Outgoing", "People-lover"],
    strengths: ["Network luas", "Easy to befriend", "Selalu ada energi sosial"],
    weaknesses: ["Susah sendirian", "Bisa terlalu tergantung orang"],
    tips: ["Belajar enjoy solitude", "Alone time juga healing"],
  },
  B: {
    type: "B",
    title: "Ambivert",
    emoji: "⚖️",
    description: "Kamu adalah ambivert - balance antara introvert dan ekstrovert. Bisa enjoy keramaian tapi juga butuh me time. Fleksibel dalam berbagai situasi sosial. Best of both worlds!",
    traits: ["Balanced", "Adaptable", "Flexible", "Moderate"],
    strengths: ["Bisa di situasi apapun", "Tidak extreme", "Self-aware"],
    weaknesses: ["Kadang bingung mau yang mana", "Bisa flip-flop"],
    tips: ["Honor your needs saat itu", "Tidak harus konsisten terus"],
  },
  C: {
    type: "C",
    title: "Introvert",
    emoji: "📚",
    description: "Kamu adalah introvert! Lebih nyaman dengan circle kecil dan quality time daripada keramaian. Solitude adalah cara recharge dan kamu selective dalam bersosialisasi. Nothing wrong with that!",
    traits: ["Reflektif", "Selective", "Deep thinker", "Quality over quantity"],
    strengths: ["Deep relationships", "Good listener", "Independent"],
    weaknesses: ["Bisa miss opportunities", "Dianggap sombong padahal shy"],
    tips: ["Push yourself sesekali", "Koneksi sosial tetap penting"],
  },
  D: {
    type: "D",
    title: "Highly Introvert",
    emoji: "🌙",
    description: "Kamu highly introvert dengan preferensi kuat untuk solitude. Social situations menguras energi significantly. Dunia dalam pikiranmu lebih menarik daripada keramaian di luar.",
    traits: ["Very private", "Solitary", "Deep inner world", "Independent"],
    strengths: ["Self-sufficient", "Focused", "Rich imagination"],
    weaknesses: ["Risk of isolation", "Miss human connection", "Bisa lonely"],
    tips: ["Some connection is healthy", "Find your tribe meski kecil", "Online community bisa membantu"],
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
