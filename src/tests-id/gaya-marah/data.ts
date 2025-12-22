// Gaya Marah Kamu
// Tes ini mengungkap bagaimana kamu mengekspresikan kemarahan!

export const questions = [
  {
    id: 1,
    question: "Saat pertama kali marah, yang kamu rasakan?",
    options: [
      { text: "Panas di dada, mau meledak", type: "A" },
      { text: "Diam tapi dalam hati bergejolak", type: "B" },
      { text: "Langsung pengen ngomel", type: "C" },
      { text: "Kecewa lebih dari marah", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ekspresi marah yang paling sering kamu lakukan?",
    options: [
      { text: "Bentak atau nada tinggi", type: "A" },
      { text: "Silent treatment, diam membisu", type: "B" },
      { text: "Ngomel panjang lebar", type: "C" },
      { text: "Menangis atau murung", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Setelah marah, biasanya kamu...",
    options: [
      { text: "Butuh waktu untuk cool down", type: "A" },
      { text: "Tetap dingin cukup lama", type: "B" },
      { text: "Langsung baik-baik aja setelah ngomong", type: "C" },
      { text: "Merasa bersalah dan minta maaf", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Apa yang bikin kamu paling marah?",
    options: [
      { text: "Ketidakadilan atau diperlakukan tidak fair", type: "A" },
      { text: "Dibohongi atau dikhianati", type: "B" },
      { text: "Orang yang tidak mendengarkan", type: "C" },
      { text: "Perasaan tidak dihargai", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cara meredakan marah yang sering kamu pakai?",
    options: [
      { text: "Olahraga atau aktivitas fisik", type: "A" },
      { text: "Menyendiri dan merenung", type: "B" },
      { text: "Curhat ke teman atau keluarga", type: "C" },
      { text: "Menangis atau journaling", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat dimarahi orang lain, reaksimu?",
    options: [
      { text: "Balas marah juga", type: "A" },
      { text: "Diam, tidak membalas", type: "B" },
      { text: "Jelaskan posisi dan defend diri", type: "C" },
      { text: "Sedih dan introspeksi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Berapa lama biasanya kamu marah?",
    options: [
      { text: "Intense tapi sebentar", type: "A" },
      { text: "Lama dan sulit move on", type: "B" },
      { text: "Tergantung masalahnya", type: "C" },
      { text: "Cepat marah, cepat reda", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apakah kamu sering menyesal setelah marah?",
    options: [
      { text: "Kadang-kadang, kalau kelewatan", type: "A" },
      { text: "Jarang, karena jarang ekspresikan", type: "B" },
      { text: "Sering, tapi tetap gak bisa kontrol", type: "C" },
      { text: "Hampir selalu menyesal", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat marah, kamu bicara dengan...",
    options: [
      { text: "Suara keras dan tegas", type: "A" },
      { text: "Tidak bicara sama sekali", type: "B" },
      { text: "Banyak kata dan detail", type: "C" },
      { text: "Suara bergetar atau terputus-putus", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bagaimana kamu menyelesaikan konflik setelah marah?",
    options: [
      { text: "Bicara langsung, selesaikan di tempat", type: "A" },
      { text: "Butuh waktu lama untuk bicara lagi", type: "B" },
      { text: "Diskusi sampai clear", type: "C" },
      { text: "Minta maaf duluan walau bukan salahmu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Orang terdekat bilang kalau kamu marah...",
    options: [
      { text: "Menakutkan/intimidating", type: "A" },
      { text: "Sulit dibaca/tidak ekspresif", type: "B" },
      { text: "Cerewet dan banyak bicara", type: "C" },
      { text: "Sedih dan menyentuh hati", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Seberapa sering kamu marah?",
    options: [
      { text: "Cukup sering, mudah terpancing", type: "A" },
      { text: "Jarang, tapi sekali marah ingat lama", type: "B" },
      { text: "Normal, tergantung situasi", type: "C" },
      { text: "Jarang marah, lebih sering sedih", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tipe Eksplosif",
    emoji: "🌋",
    description: "Kamu mengekspresikan marah dengan intense dan langsung! Seperti gunung berapi, kemarahan keluar dengan cepat dan kuat. Tapi setelahnya biasanya cepat reda juga.",
    traits: ["Ekspresif", "Intense", "Langsung", "Tidak memendam"],
    strengths: ["Jujur dengan perasaan", "Tidak passive-aggressive", "Cepat move on"],
    weaknesses: ["Bisa menyakiti dengan kata-kata", "Intimidating", "Menyesal kemudian"],
    tips: ["Latih pause sebelum bereaksi", "Channel marah ke aktivitas positif"],
  },
  B: {
    type: "B",
    title: "Tipe Silent Storm",
    emoji: "🌊",
    description: "Kemarahan ada di dalam, tidak keluar dengan jelas. Seperti badai di bawah permukaan laut yang tenang. Kamu cenderung memendam dan butuh waktu untuk mengekspresikan.",
    traits: ["Introspektif", "Memendam", "Cool exterior", "Slow burn"],
    strengths: ["Tidak impulsif", "Terlihat tenang", "Berpikir sebelum bertindak"],
    weaknesses: ["Bisa meledak tiba-tiba", "Sulit bagi orang lain memahami", "Memendam tidak sehat"],
    tips: ["Belajar express emosi lebih early", "Journaling bisa membantu proses"],
  },
  C: {
    type: "C",
    title: "Tipe Verbal",
    emoji: "💬",
    description: "Kamu mengekspresikan marah dengan kata-kata, banyak kata-kata! Kamu perlu bicara untuk melepaskan emosi. Komunikasi adalah cara kamu memproses.",
    traits: ["Verbal", "Komunikatif", "Perlu didengar", "Ekspresif"],
    strengths: ["Clear tentang apa yang salah", "Tidak memendam", "Bisa didiskusikan"],
    weaknesses: ["Bisa overwhelming", "Kadang terlalu banyak", "Orang lain kelelahan"],
    tips: ["Dengarkan juga, bukan cuma bicara", "Pilih waktu yang tepat untuk bicara"],
  },
  D: {
    type: "D",
    title: "Tipe Sensitif",
    emoji: "💧",
    description: "Marahmu sering berubah jadi sedih. Kamu merasakan emosi dengan dalam dan kemarahan sering bercampur dengan rasa kecewa dan sakit hati.",
    traits: ["Sensitif", "Empatik", "Mendalam", "Rentan"],
    strengths: ["Tidak menyakiti orang lain", "Self-aware", "Empatik tinggi"],
    weaknesses: ["Sering menyalahkan diri sendiri", "Rentan terhadap rasa bersalah", "Kurang assertive"],
    tips: ["Marah itu valid, boleh dirasakan", "Belajar assertiveness", "Jangan selalu minta maaf duluan"],
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
