// Tipe Anak Jaksel Kamu
// Tes ini mengungkap seberapa Jaksel kamu sebenarnya!

export const questions = [
  {
    id: 1,
    question: "Cara kamu ngomong sehari-hari...",
    options: [
      { text: "Mix bahasa Indonesia-English naturally", type: "A" },
      { text: "Full bahasa Indonesia, formal dan baku", type: "B" },
      { text: "Bahasa gaul Jakarta tapi tidak mix English", type: "C" },
      { text: "Tergantung sama siapa ngobrolnya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend activity favorit...",
    options: [
      { text: "Brunch di cafe aesthetic, content dulu", type: "A" },
      { text: "Quality time sama keluarga di rumah", type: "B" },
      { text: "Hangout di mall atau nongkrong biasa", type: "C" },
      { text: "Olahraga atau kegiatan produktif", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau lagi literally gabut...",
    options: [
      { text: "Scroll TikTok atau IG, looking for inspiration", type: "A" },
      { text: "Tidur atau rebahan santai", type: "B" },
      { text: "Chat sama teman, cari agenda", type: "C" },
      { text: "Baca atau nonton something educational", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Coffee preference kamu...",
    options: [
      { text: "Specialty coffee, origin matters", type: "A" },
      { text: "Kopi sachet atau warung kopi cukup", type: "B" },
      { text: "Kopi kekinian, yang penting enak", type: "C" },
      { text: "Tidak minum kopi, prefer tea atau lainnya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat upload foto di sosmed...",
    options: [
      { text: "Caption harus witty dan relatable", type: "A" },
      { text: "Caption sederhana atau tidak pakai caption", type: "B" },
      { text: "Quotes atau lirik lagu", type: "C" },
      { text: "Jarang upload, lebih suka jadi silent reader", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tempat nongkrong favorit...",
    options: [
      { text: "Cafe hidden gem yang aesthetic", type: "A" },
      { text: "Warkop atau angkringan, vibes-nya beda", type: "B" },
      { text: "Mall atau food court, praktis", type: "C" },
      { text: "Rumah teman, paling nyaman", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Fashion style sehari-hari...",
    options: [
      { text: "Casual tapi tetap stylish, outfit of the day", type: "A" },
      { text: "Nyaman adalah prioritas, tidak terlalu mikir style", type: "B" },
      { text: "Ikut trend, tapi adaptasi sama budget", type: "C" },
      { text: "Classic dan timeless, tidak terlalu ikut trend", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reaction saat ada drama atau gossip...",
    options: [
      { text: "Tea! Spill the tea, mau tau detailnya", type: "A" },
      { text: "Tidak terlalu peduli, bukan urusan", type: "B" },
      { text: "Dengerin aja, tidak ikut-ikutan", type: "C" },
      { text: "Avoid drama, too much negative energy", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Soal mental health awareness...",
    options: [
      { text: "Very aware, self-care dan therapy penting", type: "A" },
      { text: "Tau tapi tidak terlalu aktif discuss", type: "B" },
      { text: "Belajar lebih banyak tentang ini", type: "C" },
      { text: "Penting tapi tidak perlu overshare", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cara express feelings...",
    options: [
      { text: "Openly share, vulnerability is strength", type: "A" },
      { text: "Keep it private, tidak perlu semua tau", type: "B" },
      { text: "Cerita ke circle terdekat aja", type: "C" },
      { text: "Process sendiri dulu baru share kalau perlu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Playlist musik kamu...",
    options: [
      { text: "Indie, alternative, dan international", type: "A" },
      { text: "Pop Indonesia dan dangdut, proud!", type: "B" },
      { text: "Mix semua genre, mood-based", type: "C" },
      { text: "Podcast lebih sering daripada musik", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Life motto kamu...",
    options: [
      { text: "Living my best life, no toxic vibes", type: "A" },
      { text: "Sederhana dan bersyukur", type: "B" },
      { text: "Hustle now, rest later", type: "C" },
      { text: "Balance is key, everything in moderation", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anak Jaksel Certified",
    emoji: "✨",
    description: "Kamu adalah anak Jaksel sejati! Mix language, cafe hopping, dan aesthetic lifestyle adalah bagian dari identitasmu. Self-aware, expressive, dan always on trend.",
    traits: ["Trendy", "Expressive", "Self-aware", "Social media savvy"],
    strengths: ["Up to date", "Good communicator", "Open-minded", "Creative"],
    weaknesses: ["Bisa terlihat pretentious", "Overthinking image", "Budget cafe bisa mahal"],
    tips: ["Stay authentic", "Tidak perlu selalu on trend", "Appreciate simplicity juga"],
  },
  B: {
    type: "B",
    title: "Anti-Jaksel",
    emoji: "🏠",
    description: "Kamu adalah kebalikan dari stereotype Jaksel! Down to earth, tidak ikut-ikutan trend, dan nyaman dengan lifestyle sederhana. Authenticity adalah kuncimu.",
    traits: ["Down to earth", "Simple", "Authentic", "Traditional"],
    strengths: ["Grounded", "Hemat", "Tidak FOMO", "Genuine"],
    weaknesses: ["Kadang miss opportunities", "Bisa terlihat out of touch"],
    tips: ["Sesekali explore hal baru", "Open untuk perspective berbeda"],
  },
  C: {
    type: "C",
    title: "Jaksel Lite",
    emoji: "🌗",
    description: "Kamu adalah versi balanced dari anak Jaksel! Tau trend tapi tidak terlalu intense, adaptif dengan environment, dan punya identity sendiri yang unik.",
    traits: ["Adaptif", "Balanced", "Flexible", "Practical"],
    strengths: ["Bisa fit dimana-mana", "Tidak extreme", "Relatable", "Versatile"],
    weaknesses: ["Kadang kurang strong identity", "Fence sitter"],
    tips: ["Own your uniqueness", "Tidak perlu selalu di tengah"],
  },
  D: {
    type: "D",
    title: "Observer Jaksel",
    emoji: "👀",
    description: "Kamu adalah observer fenomena Jaksel! Tau tentang culture-nya tapi memilih untuk tidak fully participate. Selective dan intentional dalam pilihan lifestyle.",
    traits: ["Selective", "Intentional", "Observant", "Independent"],
    strengths: ["Clear values", "Tidak mudah terpengaruh", "Thoughtful choices"],
    weaknesses: ["Bisa terlihat judgemental", "Miss some fun experiences"],
    tips: ["Try before judge", "Sesekali participate juga seru"],
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
