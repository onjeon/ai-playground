// Gaya Self-Care Kamu
// Tes ini mengungkap bagaimana cara kamu merawat diri sendiri!

export const questions = [
  {
    id: 1,
    question: "Definisi self-care menurutmu...",
    options: [
      { text: "Aktivitas yang menenangkan jiwa dan pikiran", type: "A" },
      { text: "Merawat penampilan dan kesehatan fisik", type: "B" },
      { text: "Melakukan hal-hal yang membuat happy", type: "C" },
      { text: "Investing in personal growth dan development", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Rutinitas self-care yang paling sering dilakukan...",
    options: [
      { text: "Meditasi, journaling, atau me-time tenang", type: "A" },
      { text: "Skincare, olahraga, atau spa treatment", type: "B" },
      { text: "Hobi favorit, nonton, atau makan enak", type: "C" },
      { text: "Belajar hal baru, baca buku, atau self-improvement", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Frekuensi self-care...",
    options: [
      { text: "Daily rituals, sudah jadi kebiasaan", type: "A" },
      { text: "Beberapa kali seminggu, terjadwal", type: "B" },
      { text: "Kalau ingat atau butuh, tidak rutin", type: "C" },
      { text: "Jarang, prioritas lain lebih penting", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Budget untuk self-care...",
    options: [
      { text: "Gratis atau minimal, self-care tidak harus mahal", type: "A" },
      { text: "Ada budget khusus, invest untuk diri sendiri", type: "B" },
      { text: "Splurge sesekali untuk treat diri", type: "C" },
      { text: "Tidak ada budget khusus", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat merasa overwhelmed...",
    options: [
      { text: "Take a break, prioritaskan mental health", type: "A" },
      { text: "Push through, self-care nanti kalau sudah selesai", type: "B" },
      { text: "Quick fix yang instant, snack atau scroll sosmed", type: "C" },
      { text: "Tidak tau harus apa, terus berjalan aja", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tidur dan istirahat...",
    options: [
      { text: "Prioritas! 7-8 jam setiap malam", type: "A" },
      { text: "Cukup, tapi sering terganggu", type: "B" },
      { text: "Sering kurang, tapi weekend catch up", type: "C" },
      { text: "Tidak teratur, tidur kalau sudah sangat capek", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saying no to things yang drain energy...",
    options: [
      { text: "Sudah learned, prioritaskan well-being", type: "A" },
      { text: "Masih belajar, kadang susah menolak", type: "B" },
      { text: "Jarang, sering over-commit", type: "C" },
      { text: "Tidak pernah, takut mengecewakan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Relationship dengan social media...",
    options: [
      { text: "Mindful, tau kapan harus detox", type: "A" },
      { text: "Moderate, kadang kebanyakan tapi aware", type: "B" },
      { text: "Addicted, susah lepas dari HP", type: "C" },
      { text: "Tidak terlalu peduli, pakai sesuai kebutuhan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Physical self-care (olahraga, makan sehat)...",
    options: [
      { text: "Rutin dan konsisten", type: "A" },
      { text: "Ada effort tapi tidak selalu konsisten", type: "B" },
      { text: "Kadang-kadang, tidak prioritas", type: "C" },
      { text: "Jarang atau tidak pernah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Emotional self-care (processing feelings)...",
    options: [
      { text: "Active, journal atau terapi", type: "A" },
      { text: "Curhat ke orang dekat", type: "B" },
      { text: "Distraksi sampai lupa", type: "C" },
      { text: "Pendam, tidak suka bahas feelings", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pandangan tentang treating yourself...",
    options: [
      { text: "Penting tapi tidak harus expensive", type: "A" },
      { text: "Sesekali splurge itu perlu", type: "B" },
      { text: "Guilty pleasure, sering merasa guilty setelahnya", type: "C" },
      { text: "Luxury, tidak prioritas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Self-care buat kamu adalah...",
    options: [
      { text: "Non-negotiable, bagian dari hidup", type: "A" },
      { text: "Penting tapi sering terlupakan", type: "B" },
      { text: "Nice to have, bukan keharusan", type: "C" },
      { text: "Masih learning tentang ini", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Self-Care Champion",
    emoji: "🌸",
    description: "Kamu adalah champion self-care! Merawat diri sudah jadi prioritas dan bagian dari lifestyle. Kamu tau pentingnya well-being dan aktif menjaganya.",
    traits: ["Self-aware", "Balanced", "Healthy boundaries", "Mindful"],
    strengths: ["Mental health terjaga", "Energy terkelola", "Good role model"],
    weaknesses: ["Bisa terlihat terlalu fokus ke diri sendiri"],
    tips: ["Share tips ke orang lain", "Help others discover self-care"],
  },
  B: {
    type: "B",
    title: "Physical Self-Carer",
    emoji: "💆",
    description: "Self-care kamu fokus pada fisik dan penampilan! Skincare, olahraga, dan merawat tubuh adalah prioritas. Kamu percaya healthy body = healthy mind.",
    traits: ["Health-conscious", "Disciplined", "Appearance-aware", "Active"],
    strengths: ["Physically healthy", "Good habits", "Confident appearance"],
    weaknesses: ["Bisa neglect emotional self-care", "Focus terlalu ke exterior"],
    tips: ["Balance dengan mental/emotional care", "Inner beauty juga penting"],
  },
  C: {
    type: "C",
    title: "Pleasure-Based Self-Carer",
    emoji: "🎉",
    description: "Self-care kamu adalah tentang kesenangan! Doing things yang bikin happy, entah itu makan enak, nonton, atau hobi. Life is about enjoying it!",
    traits: ["Fun-loving", "Pleasure-seeking", "Spontaneous", "Joyful"],
    strengths: ["Knows how to have fun", "Not too serious", "Enjoyment focused"],
    weaknesses: ["Bisa jadi escapism", "Not always healthy choices"],
    tips: ["Balance pleasure dengan healthy habits", "Long-term wellbeing juga penting"],
  },
  D: {
    type: "D",
    title: "Self-Care Beginner",
    emoji: "🌱",
    description: "Kamu masih dalam perjalanan discovering self-care. Mungkin selama ini terlalu fokus ke hal lain dan neglect diri sendiri. It's never too late to start!",
    traits: ["Learning", "Busy", "Others-focused", "Growing"],
    strengths: ["Aware ada yang perlu diperbaiki", "Room for growth"],
    weaknesses: ["Neglecting self", "Burnout risk", "No boundaries"],
    tips: ["Start small", "You can't pour from empty cup", "Prioritize yourself"],
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
