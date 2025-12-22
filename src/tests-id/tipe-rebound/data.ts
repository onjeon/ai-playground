// Tes Tipe Rebound Kamu
// Bagaimana kamu handle hubungan setelah putus?

export const questions = [
  {
    id: 1,
    question: "Setelah putus, kamu biasanya...",
    options: [
      { text: "Healing dulu, tidak rush ke orang baru", type: "A" },
      { text: "Open untuk kenalan baru tapi santai", type: "B" },
      { text: "Langsung PDKT ke orang lain", type: "C" },
      { text: "Cari distraksi dengan dating apps", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pendapatmu tentang rebound relationship...",
    options: [
      { text: "Tidak sehat, harus healing dulu", type: "A" },
      { text: "Tergantung kondisi dan orangnya", type: "B" },
      { text: "Bisa jadi cara move on yang efektif", type: "C" },
      { text: "Why not, distraction is needed", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Berapa lama idealnya sebelum dating lagi?",
    options: [
      { text: "Minimal 3-6 bulan untuk healing", type: "A" },
      { text: "Tergantung seberapa deep hubungan sebelumnya", type: "B" },
      { text: "Kapan feel ready, bisa cepat", type: "C" },
      { text: "No waiting period, life goes on", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau ada yang naksir pas baru putus...",
    options: [
      { text: "Tolak halus, butuh waktu sendiri", type: "A" },
      { text: "Lihat dulu orangnya, baru decide", type: "B" },
      { text: "Give it a chance, siapa tau cocok", type: "C" },
      { text: "Perfect timing, langsung gas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Masih compare dengan mantan saat sama orang baru?",
    options: [
      { text: "Tidak akan date sampai benar-benar move on", type: "A" },
      { text: "Sedikit di awal, tapi coba avoid", type: "B" },
      { text: "Mungkin, tapi fokus ke yang baru", type: "C" },
      { text: "Bandingin itu natural, yang penting enjoy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tujuan utama dating setelah putus...",
    options: [
      { text: "Menemukan orang yang benar-benar cocok", type: "A" },
      { text: "Explore dan kenal orang baru", type: "B" },
      { text: "Move on dan lupakan mantan", type: "C" },
      { text: "Have fun dan enjoy single life", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Yang bikin kamu siap untuk hubungan baru...",
    options: [
      { text: "Sudah completely over mantan", type: "A" },
      { text: "Merasa emotionally stable", type: "B" },
      { text: "Ketemu orang yang menarik", type: "C" },
      { text: "Bosan sendiri, butuh companion", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kesalahan terbesar rebound menurutmu...",
    options: [
      { text: "Rushing into relationship baru", type: "A" },
      { text: "Tidak jujur tentang emotional state", type: "B" },
      { text: "Expect orang baru isi void mantan", type: "C" },
      { text: "Overthinking, just go with it", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau rebound ternyata jadi serius...",
    options: [
      { text: "Concerned, might not be genuine", type: "A" },
      { text: "Evaluate apakah feelings real", type: "B" },
      { text: "Happy, means it's working", type: "C" },
      { text: "Great, best plot twist", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Honesty sama potential rebound tentang status...",
    options: [
      { text: "Full disclosure, baru putus perlu healing", type: "A" },
      { text: "Kasih tau secara general", type: "B" },
      { text: "Tidak perlu over-share personal history", type: "C" },
      { text: "Start fresh, masa lalu tidak relevan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Rebound yang sehat adalah...",
    options: [
      { text: "Tidak ada rebound yang sehat", type: "A" },
      { text: "Yang based on genuine connection", type: "B" },
      { text: "Yang membantu proses move on", type: "C" },
      { text: "Yang fun tanpa expectations tinggi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pelajaran dari pengalaman rebound...",
    options: [
      { text: "Tidak akan repeat, healing first", type: "A" },
      { text: "Be more careful dengan timing", type: "B" },
      { text: "Sometimes it works, sometimes tidak", type: "C" },
      { text: "Every relationship is a learning", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anti Rebound",
    emoji: "🧘",
    description: "Kamu percaya healing harus complete sebelum dating lagi. Tidak mau bawa baggage ke hubungan baru atau jadikan orang lain sebagai distraksi dari luka lama.",
    traits: ["Self-aware", "Patient", "Emotionally intelligent", "Thoughtful"],
    strengths: ["Sehat secara emosional", "Fair ke potential partner", "Quality relationships"],
    weaknesses: ["Kadang terlalu lama healing", "Miss good opportunities"],
    tips: ["Trust ketika sudah siap", "Tidak harus 100% healed untuk move on"],
  },
  B: {
    type: "B",
    title: "Cautious Rebounder",
    emoji: "⚖️",
    description: "Kamu open untuk kenalan baru tapi dengan hati-hati. Sadar tentang emotional state dan berusaha jujur. Balance antara moving on dan rushing.",
    traits: ["Balanced", "Self-aware", "Honest", "Careful"],
    strengths: ["Realistic expectations", "Good communication", "Healthy approach"],
    weaknesses: ["Kadang overthink", "Fear of hurting others"],
    tips: ["Trust your judgment", "It's okay to explore"],
  },
  C: {
    type: "C",
    title: "Strategic Rebounder",
    emoji: "🎯",
    description: "Kamu lihat rebound sebagai bagian dari proses move on. Cari orang baru bisa membantu healing, asal tetap honest dan tidak expect terlalu banyak.",
    traits: ["Pragmatic", "Forward moving", "Adaptive", "Proactive"],
    strengths: ["Quick to adapt", "Action-oriented", "Doesn't dwell"],
    weaknesses: ["Might use people", "Unresolved feelings"],
    tips: ["Be fair to the other person", "Process emotions juga"],
  },
  D: {
    type: "D",
    title: "Serial Rebounder",
    emoji: "🦋",
    description: "Life goes on! Kamu tidak mau stuck dalam kesedihan dan prefer langsung cari distraksi. Dating is fun, why wait? No time to waste on crying.",
    traits: ["Resilient", "Fun-seeking", "Spontaneous", "Non-attached"],
    strengths: ["Quick recovery", "Positive attitude", "Living in the moment"],
    weaknesses: ["Might avoid real healing", "Pattern of short relationships"],
    tips: ["Deep feelings perlu diproses", "Quality over quantity"],
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
