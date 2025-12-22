// Tes Gaya Pacaran Kamu
// Temukan bagaimana kamu dalam hubungan romantis!

export const questions = [
  {
    id: 1,
    question: "Saat baru mulai pacaran, kamu cenderung...",
    options: [
      { text: "Langsung intense dan all-in", type: "A" },
      { text: "Pelan-pelan, kenalan dulu lebih dalam", type: "B" },
      { text: "Santai mengalir, tidak buru-buru", type: "C" },
      { text: "Tetap jaga jarak sampai yakin", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quality time ideal sama pasangan...",
    options: [
      { text: "Date romantic di tempat special", type: "A" },
      { text: "Ngobrol dalam tentang apapun", type: "B" },
      { text: "Nongkrong santai, nonton film bareng", type: "C" },
      { text: "Aktivitas produktif bareng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu menunjukkan sayang...",
    options: [
      { text: "Surprise romantis dan hadiah", type: "A" },
      { text: "Kata-kata manis dan support", type: "B" },
      { text: "Selalu ada dan menemani", type: "C" },
      { text: "Bantu urusan dan solve problems", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada masalah dalam hubungan...",
    options: [
      { text: "Langsung konfrontasi dan selesaikan", type: "A" },
      { text: "Diskusi panjang sampai ketemu solusi", type: "B" },
      { text: "Beri waktu dulu, baru bicara", type: "C" },
      { text: "Fokus ke solusi praktis", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hubungan dengan keluarga pasangan...",
    options: [
      { text: "Aktif berusaha dekat dan akrab", type: "A" },
      { text: "Sopan dan menghormati", type: "B" },
      { text: "Ikut arus, yang penting harmonis", type: "C" },
      { text: "Professional, tidak terlalu personal", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ekspektasi kamu dalam hubungan...",
    options: [
      { text: "Romantis seperti di film/drakor", type: "A" },
      { text: "Deep connection dan understanding", type: "B" },
      { text: "Nyaman dan bisa jadi diri sendiri", type: "C" },
      { text: "Partner yang bisa grow bareng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Soal media sosial dan hubungan...",
    options: [
      { text: "Post mesra dan anniversary posts", type: "A" },
      { text: "Sesekali post tapi tidak berlebihan", type: "B" },
      { text: "Private, tidak perlu pamer", type: "C" },
      { text: "Tidak terlalu penting", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reaksi kamu saat pasangan sibuk...",
    options: [
      { text: "Sedikit sedih tapi pengertian", type: "A" },
      { text: "Support dan beri semangat", type: "B" },
      { text: "Fokus ke kegiatan sendiri", type: "C" },
      { text: "Sama-sama sibuk, wajar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Soal future planning dengan pasangan...",
    options: [
      { text: "Sering bahas dan bikin plans bareng", type: "A" },
      { text: "Diskusi tapi tidak terlalu detail", type: "B" },
      { text: "Mengalir saja, lihat nanti", type: "C" },
      { text: "Punya goals masing-masing yang sejalan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tingkat cemburu kamu...",
    options: [
      { text: "Cukup tinggi, tanda sayang kan?", type: "A" },
      { text: "Ada tapi bisa dikontrol", type: "B" },
      { text: "Rendah, percaya sama pasangan", type: "C" },
      { text: "Tidak terlalu, yang penting trust", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hadiah yang kamu prefer untuk pasangan...",
    options: [
      { text: "Barang branded atau mahal", type: "A" },
      { text: "Sesuatu yang meaningful dan personal", type: "B" },
      { text: "Pengalaman bareng (dinner, trip)", type: "C" },
      { text: "Yang praktis dan berguna", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Yang paling penting dalam hubungan...",
    options: [
      { text: "Chemistry dan passion", type: "A" },
      { text: "Komunikasi dan understanding", type: "B" },
      { text: "Kenyamanan dan keamanan", type: "C" },
      { text: "Respect dan support", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Romantis Dramatis",
    emoji: "💕",
    description: "Kamu adalah tipe pasangan yang romantis dan passionate! Seperti tokoh utama di drakor, kamu percaya cinta itu harus dirayakan dengan grand gesture dan momen special.",
    traits: ["Romantis", "Passionate", "Expressive", "Idealis"],
    strengths: ["Partner merasa special", "Memorable moments", "All-in dalam cinta"],
    weaknesses: ["Ekspektasi tinggi", "Kadang possessive"],
    tips: ["Cinta juga ada di hal-hal kecil", "Realistis juga perlu"],
  },
  B: {
    type: "B",
    title: "Deep Connector",
    emoji: "💬",
    description: "Kamu adalah tipe yang mengutamakan koneksi emosional dan komunikasi! Hubungan yang dalam dan saling memahami lebih penting dari romantisme permukaan.",
    traits: ["Deep", "Communicative", "Emotionally intelligent", "Supportive"],
    strengths: ["Hubungan bermakna", "Good listener", "Strong bond"],
    weaknesses: ["Bisa terlalu overthinking", "Butuh constant reassurance"],
    tips: ["Action juga penting, tidak hanya kata-kata", "Beri space juga sesekali"],
  },
  C: {
    type: "C",
    title: "Chill Partner",
    emoji: "😌",
    description: "Kamu adalah tipe yang easy going dalam hubungan! Tidak butuh drama atau grand gesture, yang penting nyaman dan bisa jadi diri sendiri. Low maintenance tapi loyal.",
    traits: ["Relaxed", "Trusting", "Independent", "Stable"],
    strengths: ["Tidak drama", "Mudah puas", "Trustworthy"],
    weaknesses: ["Kadang terkesan cuek", "Kurang ekspresif"],
    tips: ["Sesekali express perasaan lebih", "Effort romantis juga diperlukan"],
  },
  D: {
    type: "D",
    title: "Partnership Builder",
    emoji: "🤝",
    description: "Kamu melihat hubungan sebagai partnership untuk tumbuh bersama! Fokus pada mutual growth, respect, dan membangun masa depan. Praktis tapi penuh komitmen.",
    traits: ["Practical", "Goal oriented", "Mature", "Committed"],
    strengths: ["Stable relationship", "Growth mindset", "Long term focus"],
    weaknesses: ["Kurang romantis", "Terlalu fokus ke goals"],
    tips: ["Romance itu penting juga lho", "Enjoy the present, not just the future"],
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
