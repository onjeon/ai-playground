// Tes Gaya PDKT (Pendekatan) Kamu
// Bagaimana cara kamu mendekati orang yang disukai?

export const questions = [
  {
    id: 1,
    question: "Saat ada crush baru, hal pertama yang kamu lakukan...",
    options: [
      { text: "Langsung approach dan kenalan", type: "A" },
      { text: "Stalking sosmed dulu, riset background", type: "B" },
      { text: "Cari kesempatan untuk interaksi natural", type: "C" },
      { text: "Diam dan berharap dia yang approach", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu menunjukkan ketertarikan...",
    options: [
      { text: "Terang-terangan dan to the point", type: "A" },
      { text: "Subtle hints dan kode-kode", type: "B" },
      { text: "Jadi teman dulu, pelan-pelan", type: "C" },
      { text: "Tidak berani menunjukkan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Chat pertama dengan crush biasanya...",
    options: [
      { text: "Langsung ajak ketemuan atau ngobrol intens", type: "A" },
      { text: "Bahas interest yang sama, carefully crafted", type: "B" },
      { text: "Casual dan friendly, tidak keliatan niat", type: "C" },
      { text: "Gugup dan lama compose satu pesan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seberapa cepat kamu menyatakan perasaan...",
    options: [
      { text: "Cepat, kalau sudah yakin langsung bilang", type: "A" },
      { text: "Setelah cukup yakin ada chemistry", type: "B" },
      { text: "Lama, butuh feel secure dulu", type: "C" },
      { text: "Tidak berani menyatakan, tunggu dia dulu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Rejection dalam PDKT...",
    options: [
      { text: "Move on cepat, plenty of fish", type: "A" },
      { text: "Sakit tapi bisa recover", type: "B" },
      { text: "Butuh waktu lama untuk process", type: "C" },
      { text: "Sangat takut rejection, makanya tidak berani", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Strategi PDKT kamu...",
    options: [
      { text: "Direct approach, no games", type: "A" },
      { text: "Strategic dan calculated moves", type: "B" },
      { text: "Organic dan natural progression", type: "C" },
      { text: "Tidak punya strategi, hope for the best", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat crush tidak responsive...",
    options: [
      { text: "Move on, tidak mau buang waktu", type: "A" },
      { text: "Coba approach lain, adjust strategy", type: "B" },
      { text: "Beri space, maybe timing belum tepat", type: "C" },
      { text: "Overthink dan self-blame", type: "D" },
    ],
  },
  {
    id: 8,
    question: "PDKT via dating apps vs real life...",
    options: [
      { text: "Both okay, approach sama directnya", type: "A" },
      { text: "Dating apps lebih comfortable, bisa prepare", type: "B" },
      { text: "Real life prefer, lebih organic", type: "C" },
      { text: "Susah di both, selalu gugup", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Traktir dan gifts saat PDKT...",
    options: [
      { text: "Generous, tidak masalah treat", type: "A" },
      { text: "Strategic timing untuk impress", type: "B" },
      { text: "Casual, share expenses biasa", type: "C" },
      { text: "Takut salah, tidak tau harus bagaimana", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Physical contact saat PDKT...",
    options: [
      { text: "Natural dan tidak awkward", type: "A" },
      { text: "Calculated, cari momen yang tepat", type: "B" },
      { text: "Sangat careful, respect boundaries", type: "C" },
      { text: "Tidak berani sama sekali", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Komunikasi intensitas saat PDKT...",
    options: [
      { text: "High intensity, show interest clearly", type: "A" },
      { text: "Balanced, tidak terlalu clingy atau distant", type: "B" },
      { text: "Casual, tidak mau terlihat desperate", type: "C" },
      { text: "Inconsistent karena gugup", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Success rate PDKT kamu selama ini...",
    options: [
      { text: "Cukup tinggi, confident approach works", type: "A" },
      { text: "Moderate, ada yang berhasil ada yang tidak", type: "B" },
      { text: "Rendah tapi at peace with it", type: "C" },
      { text: "Rendah dan affecting self-esteem", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bold Approacher",
    emoji: "🎯",
    description: "Kamu adalah tipe yang berani dan direct dalam PDKT! Tidak takut rejection dan approach dengan percaya diri. Bold moves dan clear intentions.",
    traits: ["Confident", "Direct", "Bold", "Resilient"],
    strengths: ["Clear intentions", "No time wasted", "Brave"],
    weaknesses: ["Bisa terkesan aggressive", "Miss subtle signals"],
    tips: ["Read the room", "Sometimes slow is better"],
  },
  B: {
    type: "B",
    title: "Strategic Approacher",
    emoji: "🎲",
    description: "Kamu adalah tipe yang strategic dan calculated dalam PDKT! Plan your moves, read signals, dan adjust approach. Smart and thoughtful.",
    traits: ["Strategic", "Observant", "Calculated", "Patient"],
    strengths: ["High success rate", "Read people well", "Adaptable"],
    weaknesses: ["Bisa overthink", "Sometimes not authentic"],
    tips: ["Be genuine too", "Not everything needs strategy"],
  },
  C: {
    type: "C",
    title: "Organic Approacher",
    emoji: "🌱",
    description: "Kamu adalah tipe yang organic dan natural dalam PDKT! Prefer genuine connection dan let things develop naturally. Friendship first approach.",
    traits: ["Genuine", "Patient", "Natural", "Respectful"],
    strengths: ["Authentic connections", "Not pushy", "Respectful"],
    weaknesses: ["Might be too slow", "Miss opportunities"],
    tips: ["Sometimes you need to make a move", "Clarity is kindness"],
  },
  D: {
    type: "D",
    title: "Shy Approacher",
    emoji: "🥺",
    description: "Kamu adalah tipe yang shy dan hesitant dalam PDKT! Fear of rejection dan lack of confidence makes approaching difficult. Growth area!",
    traits: ["Shy", "Hesitant", "Fear of rejection", "Overthinking"],
    strengths: ["Respectful", "Not pushy"],
    weaknesses: ["Miss many opportunities", "Self-doubt", "Lonely"],
    tips: ["Start small", "Rejection is not the end", "Confidence can be built", "You deserve love too"],
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
