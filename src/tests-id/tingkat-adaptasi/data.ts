// Seberapa Adaptif Kamu?
// Tes ini mengukur kemampuan adaptasi terhadap perubahan!

export const questions = [
  {
    id: 1,
    question: "Rencana mendadak berubah, reaksi pertamamu?",
    options: [
      { text: "Oke, let's go with the flow", type: "A" },
      { text: "Sedikit kaget tapi bisa adjust", type: "B" },
      { text: "Tidak nyaman, butuh waktu adaptasi", type: "C" },
      { text: "Sangat terganggu, mood rusak", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pindah ke kota/lingkungan baru, kamu...",
    options: [
      { text: "Excited! Kesempatan explore hal baru", type: "A" },
      { text: "Nervous tapi optimis bisa menyesuaikan", type: "B" },
      { text: "Cemas dan butuh waktu lama adaptasi", type: "C" },
      { text: "Sangat stress, tidak suka perubahan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Teknologi atau sistem baru di kantor, kamu...",
    options: [
      { text: "Langsung pelajari dan eksperimen", type: "A" },
      { text: "Ikuti training, pelan-pelan bisa", type: "B" },
      { text: "Frustrasi tapi akhirnya bisa", type: "C" },
      { text: "Prefer cara lama, enggan berubah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Meeting mendadak saat kamu punya rencana lain, kamu...",
    options: [
      { text: "No problem, reschedule yang lain", type: "A" },
      { text: "Agak kesal tapi ikut", type: "B" },
      { text: "Sangat terganggu dengan rencana berubah", type: "C" },
      { text: "Cari alasan untuk tidak hadir", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tentang rutinitas, kamu...",
    options: [
      { text: "Fleksibel, rutinitas bisa berubah", type: "A" },
      { text: "Ada rutinitas tapi tidak kaku", type: "B" },
      { text: "Butuh rutinitas untuk fungsi baik", type: "C" },
      { text: "Sangat bergantung pada rutinitas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Feedback atau kritik yang mengharuskan perubahan cara kerja, kamu...",
    options: [
      { text: "Welcome, selalu ada cara lebih baik", type: "A" },
      { text: "Terima dan coba implementasi", type: "B" },
      { text: "Agak defensive tapi akhirnya coba", type: "C" },
      { text: "Resist, cara lamaku sudah baik", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Makanan atau cuisine yang belum pernah kamu coba, kamu...",
    options: [
      { text: "Excited to try something new!", type: "A" },
      { text: "Willing to try, kenapa tidak", type: "B" },
      { text: "Hati-hati, tanya dulu isinya apa", type: "C" },
      { text: "Prefer stick dengan yang sudah tau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Perubahan struktur tim atau reorganisasi, reaksimu?",
    options: [
      { text: "Peluang baru, let's see", type: "A" },
      { text: "Adjust dengan situasi baru", type: "B" },
      { text: "Tidak nyaman dengan ketidakpastian", type: "C" },
      { text: "Sangat stress dan anxious", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Traveling ke tempat yang kulturnya sangat berbeda, kamu...",
    options: [
      { text: "Seru! Ingin experience sepenuhnya", type: "A" },
      { text: "Excited tapi prepare dengan baik", type: "B" },
      { text: "Agak uncomfortable, prefer yang familiar", type: "C" },
      { text: "Lebih suka destinasi yang mirip rumah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cara belajar atau bekerja yang berbeda dari biasa, kamu...",
    options: [
      { text: "Open to try, mungkin lebih efektif", type: "A" },
      { text: "Coba dulu, kalau bagus lanjut", type: "B" },
      { text: "Skeptis, prefer cara yang sudah terbukti", type: "C" },
      { text: "Tidak mau berubah, sudah nyaman", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Unexpected problems atau obstacles, kamu...",
    options: [
      { text: "Problem-solving mode, cari solusi kreatif", type: "A" },
      { text: "Stressful tapi bisa handle", type: "B" },
      { text: "Panic dulu, baru cari solusi", type: "C" },
      { text: "Overwhelmed dan butuh bantuan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, perubahan itu...",
    options: [
      { text: "Kesempatan untuk growth", type: "A" },
      { text: "Bagian dari hidup yang harus diterima", type: "B" },
      { text: "Tidak nyaman tapi kadang perlu", type: "C" },
      { text: "Mengganggu dan sebaiknya dihindari", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Adaptif",
    emoji: "🦎",
    description: "Kamu sangat adaptif seperti bunglon! Perubahan adalah playground-mu. Kamu bisa flourish di situasi apapun dan melihat perubahan sebagai kesempatan.",
    traits: ["Sangat fleksibel", "Open-minded", "Resilient", "Opportunistic"],
    strengths: ["Bisa handle apapun", "Tidak stress dengan perubahan", "Innovative"],
    weaknesses: ["Kadang kurang structure", "Bisa terkesan tidak konsisten"],
    tips: ["Balance fleksibilitas dengan konsistensi", "Tidak semua perubahan harus di-embrace"],
  },
  B: {
    type: "B",
    title: "Adaptif Sehat",
    emoji: "🌿",
    description: "Tingkat adaptasimu sehat dan balanced! Kamu bisa menyesuaikan diri dengan perubahan tanpa kehilangan stabilitas. Sweet spot yang ideal.",
    traits: ["Balanced", "Reasonable", "Stable yet flexible", "Practical"],
    strengths: ["Adjust dengan baik", "Tidak extreme", "Reliable dalam perubahan"],
    weaknesses: ["Kadang bisa lebih adventurous", "Sesekali too cautious"],
    tips: ["Kadang take more risks", "Trust your adaptability lebih"],
  },
  C: {
    type: "C",
    title: "Butuh Waktu Adaptasi",
    emoji: "🐢",
    description: "Kamu bisa beradaptasi, tapi butuh waktu dan proses. Perubahan tidak langsung welcome, tapi eventually kamu bisa menyesuaikan.",
    traits: ["Cautious", "Slow to change", "Needs stability", "Process-oriented"],
    strengths: ["Tidak impulsif", "Thoughtful", "Nilai konsistensi"],
    weaknesses: ["Bisa miss opportunities", "Stress saat perubahan cepat"],
    tips: ["Latih lebih nyaman dengan uncertainty", "Small changes dulu"],
  },
  D: {
    type: "D",
    title: "Resistance to Change",
    emoji: "🪨",
    description: "Perubahan adalah challenge besar bagimu. Kamu lebih suka stabilitas dan predictability. Adaptasi adalah area yang bisa dikembangkan.",
    traits: ["Change-resistant", "Stability-seeking", "Anxious with uncertainty", "Traditional"],
    strengths: ["Konsisten", "Reliable", "Deep roots"],
    weaknesses: ["Miss growth opportunities", "High stress saat dipaksa berubah", "Bisa tertinggal"],
    tips: ["Perubahan kecil dulu untuk latihan", "Dunia terus berubah, adaptasi adalah survival skill"],
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
