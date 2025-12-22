// Seberapa Baper Kamu?
// Tes ini mengukur tingkat 'bawa perasaan' dalam kehidupan sehari-hari!

export const questions = [
  {
    id: 1,
    question: "Chat kamu di-read tapi gak dibales, reaksimu?",
    options: [
      { text: "Biasa aja, pasti lagi sibuk", type: "A" },
      { text: "Sedikit kepikiran tapi gak lama", type: "B" },
      { text: "Mulai overthinking, apa aku salah?", type: "C" },
      { text: "Sedih dan terus cek chat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Teman lupa undang kamu ke acara, perasaanmu?",
    options: [
      { text: "Maklum, pasti gak sengaja", type: "A" },
      { text: "Sedikit kecewa tapi move on", type: "B" },
      { text: "Sakit hati, merasa tidak penting", type: "C" },
      { text: "Sangat sedih, kepikiran berhari-hari", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dikritik soal pekerjaanmu, reaksimu?",
    options: [
      { text: "Terima sebagai feedback konstruktif", type: "A" },
      { text: "Sedikit tersinggung tapi introspeksi", type: "B" },
      { text: "Sakit hati, merasa gak dihargai", type: "C" },
      { text: "Sangat down, confidence drop", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pasangan/sahabat curhat ke orang lain, bukan ke kamu...",
    options: [
      { text: "Wajar, gak semua harus ke aku", type: "A" },
      { text: "Agak sedih tapi mengerti", type: "B" },
      { text: "Kecewa dan merasa tidak dipercaya", type: "C" },
      { text: "Sangat sakit hati dan cemburu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nonton film sedih, seberapa terpengaruh?",
    options: [
      { text: "Bisa nikmati tanpa terlalu emosi", type: "A" },
      { text: "Sedih tapi cepat pulih", type: "B" },
      { text: "Nangis dan terbawa suasana", type: "C" },
      { text: "Bisa sedih sampai berhari-hari", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Orang candaan soal kekuranganmu, reaksimu?",
    options: [
      { text: "Bisa ketawa bareng", type: "A" },
      { text: "Senyum tapi sedikit tersinggung", type: "B" },
      { text: "Diam tapi dalam hati sakit", type: "C" },
      { text: "Langsung mood drop", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lihat orang lain lebih sukses dari kamu, perasaanmu?",
    options: [
      { text: "Happy for them, inspire me", type: "A" },
      { text: "Sedikit iri tapi termotivasi", type: "B" },
      { text: "Merasa inferior dan minder", type: "C" },
      { text: "Sangat down dan membandingkan terus", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Postinganmu sepi engagement, reaksimu?",
    options: [
      { text: "Biasa aja, bukan tolak ukur", type: "A" },
      { text: "Sedikit kecewa tapi gak lama", type: "B" },
      { text: "Mulai ragu sama content sendiri", type: "C" },
      { text: "Delete post, merasa gak menarik", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Orang baru kenal terlihat tidak suka denganmu, reaksimu?",
    options: [
      { text: "Bodo amat, gak semua harus suka", type: "A" },
      { text: "Sedikit kepikiran tapi move on", type: "B" },
      { text: "Berusaha cari tau kenapa", type: "C" },
      { text: "Sangat terganggu, replay terus interaksinya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rencanamu ditolak sama kelompok, reaksimu?",
    options: [
      { text: "Oke, cari ide lain", type: "A" },
      { text: "Sedikit kecewa tapi terima", type: "B" },
      { text: "Merasa ideku tidak dihargai", type: "C" },
      { text: "Sangat sakit hati, minder berbagi ide lagi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mendengar gosip tentang dirimu, reaksimu?",
    options: [
      { text: "Cuek, biarin orang mau ngomong apa", type: "A" },
      { text: "Agak terganggu tapi tidak lama", type: "B" },
      { text: "Sakit hati dan berusaha klarifikasi", type: "C" },
      { text: "Sangat down, trust issues meningkat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Seberapa sering kamu overthinking soal perkataan orang?",
    options: [
      { text: "Jarang banget", type: "A" },
      { text: "Kadang-kadang kalau memang penting", type: "B" },
      { text: "Sering, terutama yang negatif", type: "C" },
      { text: "Hampir selalu, replay terus di kepala", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cuek Bebek",
    emoji: "😎",
    description: "Kamu punya mental baja! Tidak mudah terpengaruh oleh opini atau tindakan orang lain. Self-confidence kamu tinggi dan tidak bergantung pada validasi eksternal.",
    traits: ["Confident", "Independent", "Tidak mudah tersinggung", "Kuat mental"],
    strengths: ["Tidak mudah stress", "Stabil secara emosional", "Self-sufficient"],
    weaknesses: ["Kadang terkesan tidak peduli", "Bisa kurang empati"],
    tips: ["Tetap dengarkan feedback yang konstruktif", "Kadang sedikit sensitivity itu baik"],
  },
  B: {
    type: "B",
    title: "Baper Sehat",
    emoji: "😊",
    description: "Tingkat bapermu seimbang! Kamu punya empati dan bisa merasakan, tapi juga punya kemampuan untuk move on. Balance yang sehat antara sensitif dan resilient.",
    traits: ["Seimbang", "Empatik tapi resilient", "Self-aware", "Adaptif"],
    strengths: ["Bisa merasakan tapi tidak tenggelam", "Good emotional intelligence", "Relatably human"],
    weaknesses: ["Kadang bisa lebih cuek", "Sesekali masih terpancing"],
    tips: ["Terus maintain keseimbangan", "Trust your resilience"],
  },
  C: {
    type: "C",
    title: "Lumayan Baper",
    emoji: "🥺",
    description: "Kamu cukup sensitif dan sering kepikiran hal-hal yang mungkin bagi orang lain tidak terlalu penting. Tapi sensitivitas ini juga menunjukkan kamu care.",
    traits: ["Sensitif", "Overthinking", "Perlu validasi", "Perasa"],
    strengths: ["Sangat empati", "Detail-oriented", "Care deeply"],
    weaknesses: ["Mudah terpengaruh mood orang lain", "Butuh banyak reassurance", "Energy draining"],
    tips: ["Latih self-validation", "Tidak semua omongan perlu dipikirin", "Journaling bisa membantu"],
  },
  D: {
    type: "D",
    title: "Super Baper",
    emoji: "😢",
    description: "Kamu sangat sensitif dan mudah terpengaruh oleh emosi dan tindakan orang lain. Ini menunjukkan hati yang besar, tapi perlu dijaga agar tidak menyakiti diri sendiri.",
    traits: ["Sangat sensitif", "Deep feeler", "Penuh empati", "Rentan"],
    strengths: ["Koneksi emosional kuat", "Sangat empati", "Artistik dan kreatif"],
    weaknesses: ["Mudah tersakiti", "Mood swing", "Bergantung pada validasi external"],
    tips: ["Self-compassion sangat penting", "Pertimbangkan terapi atau counseling", "Build support system yang kuat"],
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
