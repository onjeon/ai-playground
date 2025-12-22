// Tes Gaya Kamu di Friendzone
// Bagaimana kamu menghadapi zona pertemanan?

export const questions = [
  {
    id: 1,
    question: "Saat sadar kamu di-friendzone...",
    options: [
      { text: "Langsung move on, tidak mau buang waktu", type: "A" },
      { text: "Coba lebih keras untuk buktikan diri", type: "B" },
      { text: "Terima dan tetap jadi teman yang baik", type: "C" },
      { text: "Slowly distance diri untuk healing", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kamu percaya friendzone bisa di-escape?",
    options: [
      { text: "Tidak, kalau sudah friendzone ya sudah", type: "A" },
      { text: "Bisa, dengan effort dan waktu yang tepat", type: "B" },
      { text: "Mungkin, tapi tidak worth the effort", type: "C" },
      { text: "Tergantung chemistry dan timing", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Alasan paling sering kamu di-friendzone...",
    options: [
      { text: "Tidak pernah di-friendzone", type: "A" },
      { text: "Terlalu baik atau terlalu friend material", type: "B" },
      { text: "Timing yang tidak tepat", type: "C" },
      { text: "Kurang agresif atau tidak ambil chance", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dengar 'kamu teman yang baik banget'...",
    options: [
      { text: "Tanda untuk pergi, red flag!", type: "A" },
      { text: "Challenge accepted, akan buktikan lebih", type: "B" },
      { text: "Ya sudah, terima apa adanya", type: "C" },
      { text: "Hati sedikit sakit tapi act cool", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Strategi kamu kalau suka sama teman...",
    options: [
      { text: "Langsung confess, no beating around bush", type: "A" },
      { text: "Build romantic tension pelan-pelan", type: "B" },
      { text: "Tidak act on it, takut rusak friendship", type: "C" },
      { text: "Test the waters dulu, lihat responnya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Yang paling susah dari friendzone...",
    options: [
      { text: "Tidak pernah masuk friendzone", type: "A" },
      { text: "Melihat dia sama orang lain", type: "B" },
      { text: "Harus hide feelings terus", type: "C" },
      { text: "Hope yang tidak pernah padam", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau yang kamu suka cerita gebetan baru...",
    options: [
      { text: "Waktunya move on officially", type: "A" },
      { text: "Support tapi secretly jealous", type: "B" },
      { text: "Dengerin seperti teman yang baik", type: "C" },
      { text: "Sakit tapi coba stay cool", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Menurutmu, 'friendzone' itu...",
    options: [
      { text: "Konsep yang tidak valid, move on aja", type: "A" },
      { text: "Tantangan yang bisa diatasi", type: "B" },
      { text: "Realita yang harus diterima", type: "C" },
      { text: "Limbo yang menyakitkan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Setelah di-friendzone, pertemanan kalian...",
    options: [
      { text: "End atau minimal distance", type: "A" },
      { text: "Tetap dekat, siapa tau berubah", type: "B" },
      { text: "Normal seperti biasa", type: "C" },
      { text: "Awkward untuk sementara waktu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tipe orang yang sering friendzone kamu...",
    options: [
      { text: "Tidak ada pattern, rarely friendzoned", type: "A" },
      { text: "Yang awalnya dekat sebagai teman", type: "B" },
      { text: "Yang sudah punya someone else", type: "C" },
      { text: "Yang tidak clear dengan perasaannya", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cara healing dari friendzone...",
    options: [
      { text: "Move on ke orang lain", type: "A" },
      { text: "Self improvement, jadi versi terbaik", type: "B" },
      { text: "Time heals everything", type: "C" },
      { text: "Distance dan kurangi interaksi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Lesson dari pengalaman friendzone...",
    options: [
      { text: "Be direct dari awal, jangan terlalu lama", type: "A" },
      { text: "Never give up kalau yakin", type: "B" },
      { text: "Some things are not meant to be", type: "C" },
      { text: "Belajar baca signals lebih baik", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Friendzone Immune",
    emoji: "🛡️",
    description: "Kamu rarely kena friendzone karena selalu direct dari awal! Tidak mau buang waktu di grey area. Kalau ditolak, langsung move on tanpa drama.",
    traits: ["Direct", "Decisive", "Efficient", "Self-aware"],
    strengths: ["Tidak buang waktu", "Clear intentions", "Quick mover"],
    weaknesses: ["Kadang miss slow-burn romance", "Terlalu transaksional"],
    tips: ["Kadang yang baik butuh waktu", "Be open to unexpected connections"],
  },
  B: {
    type: "B",
    title: "Friendzone Fighter",
    emoji: "💪",
    description: "Kamu tidak menyerah mudah! Friendzone adalah tantangan yang bisa diatasi dengan effort dan strategi. Terus berusaha sampai dapat jawaban final.",
    traits: ["Persistent", "Optimistic", "Strategic", "Dedicated"],
    strengths: ["Never give up attitude", "Growth mindset", "Romantic"],
    weaknesses: ["Kadang tidak read signals", "Terlalu invested"],
    tips: ["Know when to let go", "Effort tanpa reciprocity itu exhausting"],
  },
  C: {
    type: "C",
    title: "Friendzone Accepter",
    emoji: "🤝",
    description: "Kamu terima friendzone dengan lapang dada. Friendship lebih penting dari romance yang tidak terbalas. Mature dalam menghadapi rejection.",
    traits: ["Accepting", "Mature", "Friendship-oriented", "Graceful"],
    strengths: ["Keeps good friendships", "Emotionally stable", "Realistic"],
    weaknesses: ["Might suppress feelings", "Miss chances kadang"],
    tips: ["Expressing feelings juga penting", "Don't settle for friendship kalau butuh lebih"],
  },
  D: {
    type: "D",
    title: "Friendzone Sufferer",
    emoji: "💔",
    description: "Friendzone hits you hard! Kamu struggle dengan perasaan yang tidak terbalas tapi juga susah move on. Stuck di hope yang tidak padam.",
    traits: ["Hopeful", "Sensitive", "Loyal", "Hesitant"],
    strengths: ["Deep feelings", "Patient", "Faithful"],
    weaknesses: ["Hard to move on", "Suffering in silence"],
    tips: ["Belajar let go", "Your peace of mind matters more"],
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
