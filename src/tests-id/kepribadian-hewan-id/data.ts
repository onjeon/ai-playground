// Hewan Indonesia yang Menggambarkanmu
// Temukan hewan khas Indonesia yang paling mirip dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Cara kamu bersosialisasi...",
    options: [
      { text: "Suka berkelompok, ga bisa sendirian", type: "A" },
      { text: "Independen, lebih suka sendiri", type: "B" },
      { text: "Fleksibel, bisa solo atau grup", type: "C" },
      { text: "Punya circle kecil yang sangat dekat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat menghadapi tantangan...",
    options: [
      { text: "Hadapi bareng-bareng dengan tim", type: "A" },
      { text: "Handle sendiri dengan tenang", type: "B" },
      { text: "Adaptasi cepat, cari cara kreatif", type: "C" },
      { text: "Lindungi yang penting, fight if needed", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kamu lebih aktif di waktu...",
    options: [
      { text: "Siang hari, energi penuh", type: "A" },
      { text: "Malam hari, more productive", type: "B" },
      { text: "Fleksibel, kapan aja bisa", type: "C" },
      { text: "Pagi atau sore, middle ground", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu berkomunikasi...",
    options: [
      { text: "Ekspresif dan vokal", type: "A" },
      { text: "Diam dan observant", type: "B" },
      { text: "Adaptif sesuai situasi", type: "C" },
      { text: "Gentle tapi tegas kalau perlu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Reaksimu saat ada ancaman...",
    options: [
      { text: "Berisik, kasih warning ke semua", type: "A" },
      { text: "Diam, pergi tanpa konfrontasi", type: "B" },
      { text: "Assess situasi dulu, baru action", type: "C" },
      { text: "Protektif, siap defend", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Habitat idealmu...",
    options: [
      { text: "Tempat ramai, banyak aktivitas", type: "A" },
      { text: "Tempat tenang dan terpencil", type: "B" },
      { text: "Bisa di mana aja, adaptif", type: "C" },
      { text: "Area yang familiar dan aman", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kamu mencari makan (rezeki)...",
    options: [
      { text: "Bareng-bareng, sharing info", type: "A" },
      { text: "Mandiri, hunting sendiri", type: "B" },
      { text: "Opportunistic, ambil yang ada", type: "C" },
      { text: "Provider untuk keluarga", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kamu termasuk orang yang...",
    options: [
      { text: "Playful dan energik", type: "A" },
      { text: "Mysterious dan kalem", type: "B" },
      { text: "Cerdas dan resourceful", type: "C" },
      { text: "Kuat dan reliable", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kesetiaanmu pada kelompok...",
    options: [
      { text: "Sangat loyal, prioritas utama", type: "A" },
      { text: "Independen, loyalty ke diri sendiri", type: "B" },
      { text: "Conditional, tergantung situasi", type: "C" },
      { text: "Loyal ke inner circle aja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cara kamu beristirahat...",
    options: [
      { text: "Bareng teman-teman", type: "A" },
      { text: "Sendiri di tempat tersembunyi", type: "B" },
      { text: "Di mana aja yang nyaman", type: "C" },
      { text: "Di tempat yang aman dan familiar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Keunikan yang kamu banggakan...",
    options: [
      { text: "Social skill dan koneksi", type: "A" },
      { text: "Keindahan dan keanggunan", type: "B" },
      { text: "Kecerdasan dan adaptabilitas", type: "C" },
      { text: "Kekuatan dan ketahanan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Orang lain biasanya melihatmu sebagai...",
    options: [
      { text: "Fun dan entertaining", type: "A" },
      { text: "Elusive dan intriguing", type: "B" },
      { text: "Smart dan versatile", type: "C" },
      { text: "Dependable dan strong", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Orangutan",
    emoji: "🦧",
    description: "Kamu seperti Orangutan! Sosial, cerdas, dan ekspresif. Kamu suka berinteraksi dengan orang lain dan punya kemampuan komunikasi yang baik. Keberadaanmu selalu membuat suasana lebih hidup dan menyenangkan!",
    traits: ["Sosial", "Ekspresif", "Playful", "Komunikatif"],
    strengths: ["Great social skills", "Entertaining", "Community builder"],
    weaknesses: ["Butuh perhatian", "Bisa terlalu dependent"],
    tips: ["Latih juga kemandirian", "Quality time sendiri penting"],
  },
  B: {
    type: "B",
    title: "Harimau Sumatera",
    emoji: "🐅",
    description: "Kamu seperti Harimau Sumatera! Independen, elegan, dan mysterious. Kamu prefer solitude dan punya aura yang commanding. Orang respect kehadiranmu meski kamu tidak mencari perhatian!",
    traits: ["Independen", "Mysterious", "Elegan", "Powerful"],
    strengths: ["Self-sufficient", "Respected", "Focused"],
    weaknesses: ["Sulit didekati", "Bisa terkesan dingin"],
    tips: ["Sesekali buka diri", "Connection dengan others bisa enriching"],
  },
  C: {
    type: "C",
    title: "Komodo",
    emoji: "🦎",
    description: "Kamu seperti Komodo! Adaptif, patient, dan strategis. Kamu bisa survive di berbagai kondisi dan punya kemampuan untuk menunggu timing yang tepat. Ancient wisdom dalam diri modern!",
    traits: ["Adaptif", "Patient", "Strategic", "Resilient"],
    strengths: ["Highly adaptable", "Good timing", "Resourceful"],
    weaknesses: ["Bisa terlalu passive", "Slow to act kadang"],
    tips: ["Kadang action cepat diperlukan", "Balance patience dengan initiative"],
  },
  D: {
    type: "D",
    title: "Gajah Sumatera",
    emoji: "🐘",
    description: "Kamu seperti Gajah Sumatera! Kuat, setia, dan protective. Kamu adalah pillar untuk keluarga dan teman terdekat. Memory dan loyalty-mu legendary, sekali teman selalu teman!",
    traits: ["Loyal", "Kuat", "Protektif", "Reliable"],
    strengths: ["Great memory", "Fiercely loyal", "Strong support system"],
    weaknesses: ["Bisa overprotective", "Sulit move on dari hurt"],
    tips: ["Let go of old grudges", "Biarkan orang tumbuh sendiri juga"],
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
