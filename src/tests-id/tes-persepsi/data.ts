// Tes Persepsi Visual
// Tes ini mengukur kemampuan persepsi dan observasi visual kamu!

export const questions = [
  {
    id: 1,
    question: "Saat melihat gambar atau foto, kamu biasanya pertama kali memperhatikan...",
    options: [
      { text: "Detail-detail kecil yang mungkin orang lain lewatkan", type: "A" },
      { text: "Keseluruhan komposisi dan suasana", type: "B" },
      { text: "Warna-warna yang dominan", type: "C" },
      { text: "Subjek utama atau fokus gambar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam permainan 'Spot the Difference', kamu...",
    options: [
      { text: "Cepat menemukan semua perbedaan", type: "A" },
      { text: "Perlu waktu tapi biasanya berhasil", type: "B" },
      { text: "Kadang miss beberapa perbedaan kecil", type: "C" },
      { text: "Struggle dan butuh bantuan hints", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat membaca peta atau denah...",
    options: [
      { text: "Mudah memahami dan menavigasi", type: "A" },
      { text: "Butuh waktu sebentar tapi bisa", type: "B" },
      { text: "Lebih suka GPS dengan voice guidance", type: "C" },
      { text: "Sulit, lebih baik tanya orang langsung", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Estimasi jarak atau ukuran secara visual...",
    options: [
      { text: "Akurat, feeling-ku jarang meleset", type: "A" },
      { text: "Cukup dekat dengan kenyataan", type: "B" },
      { text: "Kadang salah, perlu alat ukur", type: "C" },
      { text: "Hampir selalu salah estimasi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat merakit furniture atau LEGO...",
    options: [
      { text: "Bisa ikuti instruksi visual dengan mudah", type: "A" },
      { text: "Perlu fokus tapi biasanya berhasil", type: "B" },
      { text: "Kadang salah langkah, harus ulang", type: "C" },
      { text: "Butuh bantuan orang lain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mengenali wajah orang yang pernah kamu temui...",
    options: [
      { text: "Sangat baik, jarang lupa wajah", type: "A" },
      { text: "Cukup baik untuk orang yang beberapa kali ketemu", type: "B" },
      { text: "Kadang lupa, butuh reminder", type: "C" },
      { text: "Sering tidak ingat, embarrassing", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Membedakan warna yang mirip (navy vs hitam, cream vs putih)...",
    options: [
      { text: "Mudah, bahkan shade yang subtle sekalipun", type: "A" },
      { text: "Biasanya bisa, kecuali yang sangat mirip", type: "B" },
      { text: "Agak kesulitan dengan warna-warna mirip", type: "C" },
      { text: "Tidak bisa bedakan, terlihat sama semua", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat parkir paralel atau mundur...",
    options: [
      { text: "Lancar, spatial awareness bagus", type: "A" },
      { text: "Bisa tapi butuh konsentrasi", type: "B" },
      { text: "Struggle, perlu beberapa kali percobaan", type: "C" },
      { text: "Hindari, prefer tempat yang mudah", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Menemukan barang yang kamu cari di ruangan berantakan...",
    options: [
      { text: "Cepat scanning dan menemukan", type: "A" },
      { text: "Perlu waktu tapi biasanya ketemu", type: "B" },
      { text: "Sering butuh bantuan orang lain untuk cari", type: "C" },
      { text: "Hampir selalu tidak ketemu sendiri", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Memvisualisasikan benda dalam 3D atau dari sudut berbeda...",
    options: [
      { text: "Mudah, bisa bayangkan rotasi dan perspektif", type: "A" },
      { text: "Bisa dengan effort", type: "B" },
      { text: "Agak sulit, butuh gambar referensi", type: "C" },
      { text: "Sangat sulit, abstract thinking bukan kekuatanku", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mata Elang",
    emoji: "🦅",
    description: "Persepsi visualmu luar biasa! Kamu punya 'mata elang' yang bisa menangkap detail, pola, dan perbedaan dengan cepat dan akurat. Spatial awareness-mu juga excellent!",
    traits: ["Detail-oriented", "Sharp observer", "Spatial expert", "Visual learner"],
    strengths: ["Cepat mendeteksi anomali", "Navigasi bagus", "Visual memory kuat"],
    weaknesses: ["Mungkin terlalu fokus detail sampai miss big picture"],
    tips: ["Kemampuan ini valuable di design, engineering, atau forensik", "Manfaatkan untuk karir visual!"],
  },
  B: {
    type: "B",
    title: "Pengamat Handal",
    emoji: "👁️",
    description: "Persepsi visualmu di atas rata-rata! Kamu bisa menangkap informasi visual dengan baik dan punya spatial awareness yang memadai untuk kebanyakan situasi.",
    traits: ["Observant", "Reliable", "Adaptive", "Competent"],
    strengths: ["Visual perception solid", "Bisa diandalkan untuk tugas visual", "Balance detail & big picture"],
    weaknesses: ["Detail sangat kecil kadang terlewat"],
    tips: ["Latih dengan brain games visual", "Kemampuanmu sudah cukup baik!"],
  },
  C: {
    type: "C",
    title: "Persepsi Standar",
    emoji: "👀",
    description: "Persepsi visualmu rata-rata. Kamu bisa menangkap informasi visual dasar, tapi kadang kesulitan dengan detail halus atau spatial reasoning yang kompleks.",
    traits: ["Average", "Functional", "Developing", "Practical"],
    strengths: ["Cukup untuk kebutuhan sehari-hari", "Bisa improve dengan latihan"],
    weaknesses: ["Detail halus sering terlewat", "Spatial tasks bisa challenging"],
    tips: ["Latih dengan puzzle visual", "Gunakan tools bantuan saat perlu"],
  },
  D: {
    type: "D",
    title: "Perlu Bantuan Visual",
    emoji: "🔍",
    description: "Persepsi visualmu butuh pengembangan. Tidak apa-apa, setiap orang punya kekuatan berbeda! Mungkin kamu lebih kuat di area auditory atau kinestetik.",
    traits: ["Non-visual", "Different strengths", "Learning style varies"],
    strengths: ["Mungkin lebih kuat di listening atau hands-on learning"],
    weaknesses: ["Visual tasks challenging"],
    tips: ["Gunakan audio atau hands-on approach", "Tidak semua orang visual learner, dan itu okay!"],
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
