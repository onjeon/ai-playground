// Gaya Komunikasi dengan Pasangan
// Tes ini mengungkap bagaimana kamu berkomunikasi dalam hubungan romantis!

export const questions = [
  {
    id: 1,
    question: "Saat ada masalah dengan pasangan, kamu...",
    options: [
      { text: "Langsung bahas tuntas saat itu juga", type: "A" },
      { text: "Tunggu waktu yang tepat untuk bicara", type: "B" },
      { text: "Hint-hint dulu, berharap dia peka", type: "C" },
      { text: "Diam dan berharap masalah hilang sendiri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu mengekspresikan sayang?",
    options: [
      { text: "Bilang langsung dengan kata-kata", type: "A" },
      { text: "Lewat tindakan dan perhatian", type: "B" },
      { text: "Lewat gesture romantis dan surprise", type: "C" },
      { text: "Susah express, tapi dia harusnya tau", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Frekuensi komunikasi ideal dengan pasangan (jika tidak LDR)?",
    options: [
      { text: "Sepanjang hari, update terus", type: "A" },
      { text: "Beberapa kali sehari, cukup", type: "B" },
      { text: "Kalau ada yang penting aja", type: "C" },
      { text: "Tidak perlu terlalu sering", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat pasangan curhat masalah, kamu...",
    options: [
      { text: "Langsung kasih solusi dan saran", type: "A" },
      { text: "Dengerin dulu, baru kasih input", type: "B" },
      { text: "Hibur dan alihkan perhatian", type: "C" },
      { text: "Dengerin tapi tidak banyak respon", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tentang sharing perasaan dalam, kamu...",
    options: [
      { text: "Terbuka, share hampir semua", type: "A" },
      { text: "Selektif, hal penting aja", type: "B" },
      { text: "Butuh waktu dan mood yang tepat", type: "C" },
      { text: "Susah banget buka diri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat kesal sama pasangan, kamu cenderung...",
    options: [
      { text: "Bilang langsung kenapa kesal", type: "A" },
      { text: "Diam dulu, bicara setelah tenang", type: "B" },
      { text: "Tunjukkan lewat sikap (jutek/dingin)", type: "C" },
      { text: "Pendam sampai lupa atau meledak", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Komunikasi via chat vs tatap muka, preferensimu?",
    options: [
      { text: "Dua-duanya nyaman dan lancar", type: "A" },
      { text: "Prefer tatap muka untuk hal serius", type: "B" },
      { text: "Lebih nyaman via chat", type: "C" },
      { text: "Dua-duanya agak awkward", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Diskusi tentang masa depan hubungan, kamu...",
    options: [
      { text: "Sering dan terbuka membahas", type: "A" },
      { text: "Sesekali di momen yang tepat", type: "B" },
      { text: "Tunggu dia yang mulai topiknya", type: "C" },
      { text: "Hindari, takut terlalu berat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat ada miskomunikasi, kamu...",
    options: [
      { text: "Klarifikasi langsung sampai clear", type: "A" },
      { text: "Tanya untuk memahami perspektifnya", type: "B" },
      { text: "Assume dan kadang salah paham", type: "C" },
      { text: "Biarkan saja, malas bahas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mengkritik atau memberikan feedback ke pasangan, caramu...",
    options: [
      { text: "Jujur dan langsung tapi dengan baik", type: "A" },
      { text: "Halus dan hati-hati dengan words", type: "B" },
      { text: "Susah, takut menyakiti", type: "C" },
      { text: "Jarang kritik, biarkan saja", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Seberapa penting 'deep talk' dalam hubungan menurutmu?",
    options: [
      { text: "Sangat penting, sering dilakukan", type: "A" },
      { text: "Penting, di momen-momen tertentu", type: "B" },
      { text: "Lumayan, tapi tidak harus sering", type: "C" },
      { text: "Tidak terlalu, action lebih penting", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Komunikasi idealmu dalam hubungan adalah...",
    options: [
      { text: "Open, honest, dan frequent", type: "A" },
      { text: "Balanced, ada space tapi connected", type: "B" },
      { text: "Casual dan not too heavy", type: "C" },
      { text: "Low-maintenance, understand tanpa banyak kata", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Open Communicator",
    emoji: "💬",
    description: "Kamu adalah komunikator yang terbuka dan ekspresif! Apa yang dirasakan langsung disampaikan. Kamu percaya komunikasi adalah kunci hubungan sehat.",
    traits: ["Open", "Direct", "Expressive", "Proactive"],
    strengths: ["No miscommunication", "Clear expectations", "Deep understanding"],
    weaknesses: ["Bisa overwhelming", "Not everyone can match"],
    tips: ["Give partner space juga", "Not everything needs to be discussed immediately"],
  },
  B: {
    type: "B",
    title: "Thoughtful Communicator",
    emoji: "🎯",
    description: "Kamu berkomunikasi dengan thoughtful dan timing yang tepat. Tau kapan bicara, kapan diam. Balance antara ekspresif dan reserved.",
    traits: ["Thoughtful", "Balanced", "Strategic", "Considerate"],
    strengths: ["Effective communication", "Respectful of space", "Good timing"],
    weaknesses: ["Kadang terlalu calculated", "Might delay important convos"],
    tips: ["Sometimes immediate is better", "Don't overthink communication"],
  },
  C: {
    type: "C",
    title: "Indirect Communicator",
    emoji: "🎭",
    description: "Kamu lebih suka komunikasi tidak langsung. Hints, gestures, dan berharap pasangan peka. Susah mengekspresikan secara verbal.",
    traits: ["Indirect", "Subtle", "Reserved", "Hint-giver"],
    strengths: ["Not confrontational", "Gentle approach", "Non-pushy"],
    weaknesses: ["Miscommunication sering", "Partner confused", "Needs met not communicated"],
    tips: ["Practice being direct", "Your partner can't read minds"],
  },
  D: {
    type: "D",
    title: "Reserved Communicator",
    emoji: "🔇",
    description: "Kamu sangat reserved dalam komunikasi. Lebih banyak diam dan berharap hubungan berjalan tanpa banyak bicara. Ini bisa jadi challenge.",
    traits: ["Reserved", "Quiet", "Avoidant", "Assume understanding"],
    strengths: ["Low drama", "Independent", "Non-needy"],
    weaknesses: ["Partner feels disconnected", "Issues unresolved", "Emotional distance"],
    tips: ["Communication is essential", "Partner needs to hear from you", "Start small"],
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
