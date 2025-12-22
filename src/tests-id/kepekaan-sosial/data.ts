// Tes Kepekaan Sosial Kamu
// Seberapa peka kamu terhadap situasi dan perasaan orang lain?

export const questions = [
  {
    id: 1,
    question: "Saat teman terlihat murung padahal bilang 'baik-baik saja'...",
    options: [
      { text: "Tau ada yang salah dan gently push untuk cerita", type: "A" },
      { text: "Notice dan offer support kalau mau cerita", type: "B" },
      { text: "Percaya dan tidak terlalu dig deeper", type: "C" },
      { text: "Tidak notice ada yang berbeda", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kemampuanmu membaca suasana ruangan...",
    options: [
      { text: "Sangat peka, langsung sense tension atau mood", type: "A" },
      { text: "Cukup peka kalau situasinya jelas", type: "B" },
      { text: "Kadang notice, kadang miss", type: "C" },
      { text: "Sering tidak aware sampai dikasih tau", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ngobrol, kamu notice body language orang...",
    options: [
      { text: "Selalu, itu bagian penting dari komunikasi", type: "A" },
      { text: "Sering, terutama kalau obvious", type: "B" },
      { text: "Kadang-kadang saja", type: "C" },
      { text: "Jarang, lebih fokus ke kata-kata", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada konflik dalam grup...",
    options: [
      { text: "Langsung sense dan coba mediate", type: "A" },
      { text: "Notice dan concerned tapi tidak selalu act", type: "B" },
      { text: "Baru tau kalau sudah obvious atau dikasih tau", type: "C" },
      { text: "Sering tidak aware ada konflik", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ketika menyampaikan sesuatu yang sensitif...",
    options: [
      { text: "Sangat hati-hati dengan kata dan timing", type: "A" },
      { text: "Coba sopan dan considerate", type: "B" },
      { text: "Langsung aja, yang penting honest", type: "C" },
      { text: "Tidak terlalu mikirin delivery", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat orang curhat, kamu...",
    options: [
      { text: "Bisa feel apa yang mereka rasakan", type: "A" },
      { text: "Sympathize dan coba understand", type: "B" },
      { text: "Dengerin dan kasih saran", type: "C" },
      { text: "Kurang connect tapi tetap dengerin", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kemampuanmu mendeteksi kebohongan atau ketidakjujuran...",
    options: [
      { text: "Tinggi, biasanya bisa sense", type: "A" },
      { text: "Cukup, kalau ada tanda yang jelas", type: "B" },
      { text: "Rendah, sering ketipu", type: "C" },
      { text: "Sangat rendah, trust everyone", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dalam social setting baru, kamu...",
    options: [
      { text: "Observe dynamics dan power relations", type: "A" },
      { text: "Try to understand the vibe", type: "B" },
      { text: "Focus ke interacting saja", type: "C" },
      { text: "Tidak terlalu perhatikan dynamics", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat teman mendadak berubah sikap...",
    options: [
      { text: "Langsung notice dan wondering why", type: "A" },
      { text: "Notice setelah beberapa kali", type: "B" },
      { text: "Baru sadar setelah lama", type: "C" },
      { text: "Sering tidak notice", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kepekaan terhadap cultural dan social norms...",
    options: [
      { text: "Sangat aware dan respectful", type: "A" },
      { text: "Cukup aware dan try to follow", type: "B" },
      { text: "Kadang miss atau faux pas", type: "C" },
      { text: "Sering tidak aware", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kemampuan membaca situasi yang tidak terucapkan...",
    options: [
      { text: "Tinggi, bisa 'baca antar baris'", type: "A" },
      { text: "Cukup baik dalam most situations", type: "B" },
      { text: "Butuh hints yang lebih jelas", type: "C" },
      { text: "Prefer orang langsung bilang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Feedback dari orang tentang kepekaan sosialmu...",
    options: [
      { text: "Dibilang sangat pengertian dan peka", type: "A" },
      { text: "Dibilang cukup considerate", type: "B" },
      { text: "Kadang dibilang kurang peka", type: "C" },
      { text: "Sering dibilang insensitive atau oblivious", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sangat Peka",
    emoji: "🦋",
    description: "Kamu sangat peka terhadap situasi dan perasaan orang! Bisa membaca suasana, body language, dan unspoken messages dengan baik. Empati tinggi.",
    traits: ["Highly empathetic", "Observant", "Intuitive", "Considerate"],
    strengths: ["Great at reading people", "Smooth social navigation", "Deep connections"],
    weaknesses: ["Can absorb too much", "Emotionally drained", "Overthink social cues"],
    tips: ["Protect your energy", "Not everything is your responsibility to sense"],
  },
  B: {
    type: "B",
    title: "Cukup Peka",
    emoji: "👁️",
    description: "Kamu memiliki kepekaan sosial yang baik! Bisa membaca situasi dan orang dengan cukup akurat dalam kebanyakan situasi. Balanced awareness.",
    traits: ["Aware", "Considerate", "Balanced", "Responsive"],
    strengths: ["Good social skills", "Can adapt", "Reliable"],
    weaknesses: ["Can miss subtle cues", "Not always consistent"],
    tips: ["Keep developing awareness", "Trust your observations"],
  },
  C: {
    type: "C",
    title: "Kepekaan Terbatas",
    emoji: "🌫️",
    description: "Kepekaan sosialmu terbatas dan perlu dikembangkan. Sering miss social cues atau butuh hints yang lebih explicit.",
    traits: ["Direct", "Straightforward", "Sometimes oblivious", "Concrete"],
    strengths: ["Not overcomplicate", "Takes things at face value"],
    weaknesses: ["Miss nuances", "Can offend unintentionally", "Social faux pas"],
    tips: ["Practice active observation", "Ask for feedback", "Learn to read body language"],
  },
  D: {
    type: "D",
    title: "Perlu Pengembangan",
    emoji: "🔧",
    description: "Kepekaan sosialmu perlu banyak pengembangan. Ini bisa mempengaruhi hubungan dan situasi sosial. Worth investing to improve.",
    traits: ["Oblivious", "Direct to a fault", "Unaware", "Literal"],
    strengths: ["Not bothered by subtleties", "Straightforward"],
    weaknesses: ["Social difficulties", "Relationship challenges", "Miss important cues"],
    tips: ["Actively study social dynamics", "Ask trusted friends for honest feedback", "Consider social skills coaching", "Practice mindful observation"],
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
