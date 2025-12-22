// Gaya Menghadapi Konflik
// Bagaimana caramu menyelesaikan konflik dan perbedaan pendapat?

export const questions = [
  {
    id: 1,
    question: "Saat berbeda pendapat dengan teman...",
    options: [
      { text: "Diskusi sampai ketemu solusi", type: "A" },
      { text: "Cari jalan tengah yang bisa diterima", type: "B" },
      { text: "Mengalah untuk menjaga hubungan", type: "C" },
      { text: "Diam dan jaga jarak dulu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada rekan kerja yang tidak kooperatif...",
    options: [
      { text: "Konfrontasi langsung, selesaikan masalah", type: "A" },
      { text: "Ajak ngobrol baik-baik, cari win-win", type: "B" },
      { text: "Sabar, kerjain bagianku aja", type: "C" },
      { text: "Lapor atasan atau minta dipindah tim", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pasangan atau sahabat menyakiti hatimu...",
    options: [
      { text: "Express langsung, clear the air", type: "A" },
      { text: "Tunggu cooling down, baru bicara", type: "B" },
      { text: "Maafkan dalam hati, move on", type: "C" },
      { text: "Silent treatment sampai dia sadar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Di grup chat ada drama...",
    options: [
      { text: "Voice out opinion dengan jelas", type: "A" },
      { text: "Coba mediasi kedua pihak", type: "B" },
      { text: "Diam, bukan urusanku", type: "C" },
      { text: "Leave grup sementara", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Keluarga tidak setuju dengan keputusanmu...",
    options: [
      { text: "Argumentasi sampai mereka paham", type: "A" },
      { text: "Jelaskan dan minta pengertian", type: "B" },
      { text: "Ikuti saja untuk keharmonisan", type: "C" },
      { text: "Jalan terus, biar waktu membuktikan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mendapat kritik yang tidak fair...",
    options: [
      { text: "Defend diri dengan fakta", type: "A" },
      { text: "Klarifikasi dengan tenang", type: "B" },
      { text: "Terima, introspeksi diri", type: "C" },
      { text: "Abaikan, tidak worth it diladeni", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tetangga terlalu berisik...",
    options: [
      { text: "Tegur langsung dengan sopan", type: "A" },
      { text: "Kirim pesan atau minta tolong RT", type: "B" },
      { text: "Pakai earphone, sabar aja", type: "C" },
      { text: "Balas dengan lebih berisik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat meeting ada yang menyela terus...",
    options: [
      { text: "Minta waktu untuk menyelesaikan bicara", type: "A" },
      { text: "Selesai meeting, bicara empat mata", type: "B" },
      { text: "Biarkan saja, yang penting selesai", type: "C" },
      { text: "Next meeting tidak usah contribute", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Teman meminjam uang tapi tidak bayar...",
    options: [
      { text: "Tagih langsung, jelas dan tegas", type: "A" },
      { text: "Ingatkan secara halus", type: "B" },
      { text: "Ikhlasin aja, pelajaran hidup", type: "C" },
      { text: "Tidak pinjamkan lagi, jauh-jauhin", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Di tempat umum ada orang tidak sopan...",
    options: [
      { text: "Tegur karena mengganggu banyak orang", type: "A" },
      { text: "Lapor security atau petugas", type: "B" },
      { text: "Diam, bukan urusanku", type: "C" },
      { text: "Pergi dari tempat itu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat emosimu sedang tinggi...",
    options: [
      { text: "Tetap bicara, emosi perlu dikeluarkan", type: "A" },
      { text: "Minta waktu tenang dulu", type: "B" },
      { text: "Pendam, kontrol ekspresi", type: "C" },
      { text: "Pergi, menjauh dari situasi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah konflik selesai...",
    options: [
      { text: "Clear, move on completely", type: "A" },
      { text: "Forgive tapi butuh waktu", type: "B" },
      { text: "Forgive tapi tidak forget", type: "C" },
      { text: "Jaga jarak, trust berkurang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Konfrontatif Langsung",
    emoji: "🎯",
    description: "Kamu menghadapi konflik secara langsung dan tegas! Tidak suka berlarut-larut dan prefer clear communication. Konflik adalah masalah yang harus diselesaikan, bukan dihindari.",
    traits: ["Direct", "Assertive", "Problem solver", "Clear communicator"],
    strengths: ["Konflik cepat selesai", "Tidak ada yang terpendam", "Honest"],
    weaknesses: ["Bisa menyinggung orang", "Dianggap agresif", "Timing kurang tepat"],
    tips: ["Perhatikan timing dan tone", "Empati dulu sebelum konfrontasi"],
  },
  B: {
    type: "B",
    title: "Diplomat",
    emoji: "🕊️",
    description: "Kamu adalah diplomat dalam konflik! Mencari win-win solution dan menjaga hubungan tetap baik. Kamu tau cara menyampaikan tanpa menyakiti dan selalu mencari jalan tengah.",
    traits: ["Diplomatic", "Balanced", "Empathetic", "Mediator"],
    strengths: ["Hubungan terjaga", "Solutions yang fair", "Respected by all"],
    weaknesses: ["Bisa terlalu people-pleaser", "Kadang tidak tegas"],
    tips: ["Kadang tegas itu perlu", "Your needs matter too"],
  },
  C: {
    type: "C",
    title: "Penghindar Harmonious",
    emoji: "☮️",
    description: "Kamu lebih memilih harmoni daripada konfrontasi. Mengalah bukan berarti lemah, tapi memilih pertempuran yang worth it. Ketenangan dan kedamaian adalah prioritasmu.",
    traits: ["Peaceful", "Patient", "Harmonious", "Non-confrontational"],
    strengths: ["Jarang musuhan", "Inner peace terjaga", "Tidak emosional"],
    weaknesses: ["Needs tidak tersampaikan", "Bisa dimanfaatkan", "Build up resentment"],
    tips: ["Voice out sesekali itu sehat", "Boundaries tetap penting"],
  },
  D: {
    type: "D",
    title: "Passive Avoidant",
    emoji: "🚪",
    description: "Kamu memilih untuk menghindari konflik dengan jaga jarak. Daripada konfrontasi yang tidak nyaman, lebih baik withdraw dan let time heal. Self-protection adalah prioritas.",
    traits: ["Avoidant", "Self-protective", "Independent", "Private"],
    strengths: ["Protect diri dari drama", "Selective relationships", "Calm"],
    weaknesses: ["Issues tidak terselesaikan", "Bisa kehilangan relationships", "Isolating"],
    tips: ["Some conflicts need addressing", "Communication bisa heal", "Running tidak selalu solusi"],
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
