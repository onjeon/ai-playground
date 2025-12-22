// Tes Pola Tidur dan Kepribadian
// Kebiasaan tidurmu mencerminkan siapa kamu!

export const questions = [
  {
    id: 1,
    question: "Jam berapa kamu biasanya tidur?",
    options: [
      { text: "Sebelum jam 10 malam", type: "A" },
      { text: "Sekitar jam 10-11 malam", type: "B" },
      { text: "Tengah malam atau lebih", type: "C" },
      { text: "Tidak tentu, tergantung aktivitas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat alarm berbunyi pagi hari...",
    options: [
      { text: "Langsung bangun dan siap beraktivitas", type: "A" },
      { text: "Butuh beberapa menit untuk fully wake up", type: "B" },
      { text: "Snooze berkali-kali", type: "C" },
      { text: "Matikan alarm dan tidur lagi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ritual sebelum tidur kamu...",
    options: [
      { text: "Rutin: cuci muka, sikat gigi, baca/doa", type: "A" },
      { text: "Simple: skincare dan langsung tidur", type: "B" },
      { text: "Scroll HP dulu sampai ngantuk", type: "C" },
      { text: "Tidak ada ritual khusus", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kualitas tidur kamu biasanya...",
    options: [
      { text: "Nyenyak dan jarang terbangun", type: "A" },
      { text: "Cukup baik dengan sedikit gangguan", type: "B" },
      { text: "Sering terbangun atau mimpi aneh", type: "C" },
      { text: "Susah tidur atau insomnia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Weekend, jam bangun kamu...",
    options: [
      { text: "Sama seperti weekday, konsisten", type: "A" },
      { text: "Sedikit lebih siang, 1-2 jam", type: "B" },
      { text: "Jauh lebih siang, tidur balas dendam", type: "C" },
      { text: "Bisa sampai sore kalau tidak ada agenda", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Posisi tidur favorit kamu...",
    options: [
      { text: "Telentang, rapi dan teratur", type: "A" },
      { text: "Miring ke satu sisi", type: "B" },
      { text: "Tengkurap atau posisi aneh", type: "C" },
      { text: "Berubah-ubah sepanjang malam", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kebutuhan tidur ideal kamu...",
    options: [
      { text: "6-7 jam sudah cukup segar", type: "A" },
      { text: "8 jam untuk optimal", type: "B" },
      { text: "9+ jam, butuh banyak tidur", type: "C" },
      { text: "Bervariasi, kadang 4 jam okay", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat tidak bisa tidur malam...",
    options: [
      { text: "Baca buku atau meditasi", type: "A" },
      { text: "Tetap berbaring dan relax", type: "B" },
      { text: "Buka HP dan scroll sosmed", type: "C" },
      { text: "Bangun dan melakukan aktivitas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Produktivitas tertinggi kamu di jam...",
    options: [
      { text: "Pagi hari, fresh dan fokus", type: "A" },
      { text: "Siang hari, setelah warm up", type: "B" },
      { text: "Malam hari, tenang dan tidak diganggu", type: "C" },
      { text: "Tidak tentu, mood-based", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Power nap atau tidur siang...",
    options: [
      { text: "Jarang, tidak butuh", type: "A" },
      { text: "Sesekali kalau memang capek", type: "B" },
      { text: "Rutin dan butuh untuk recharge", type: "C" },
      { text: "Kalau tidur siang, malam jadi susah tidur", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Lingkungan tidur ideal kamu...",
    options: [
      { text: "Gelap total dan sunyi", type: "A" },
      { text: "Sedikit cahaya dan white noise okay", type: "B" },
      { text: "Dengan TV atau musik latar", type: "C" },
      { text: "Bisa tidur dimana aja", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hubungan kamu dengan tidur...",
    options: [
      { text: "Disiplin, tidur adalah prioritas kesehatan", type: "A" },
      { text: "Berusaha cukup tapi kadang compromise", type: "B" },
      { text: "Sering korbankan tidur untuk aktivitas", type: "C" },
      { text: "Tidak teratur, sleep when tired", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Early Bird Disiplin",
    emoji: "🌅",
    description: "Kamu adalah morning person yang disiplin! Tidur dan bangun teratur, produktif di pagi hari. Kesehatan dan rutinitas adalah prioritas.",
    traits: ["Disciplined", "Morning person", "Organized", "Health conscious"],
    strengths: ["Consistent energy", "Productive mornings", "Good health habits"],
    weaknesses: ["Kurang fleksibel", "Struggle dengan acara malam"],
    tips: ["Sesekali boleh flexible", "Night events juga bisa fun"],
  },
  B: {
    type: "B",
    title: "Balanced Sleeper",
    emoji: "😴",
    description: "Kamu memiliki pola tidur yang seimbang! Tidak terlalu early bird atau night owl. Bisa adapt dengan berbagai jadwal dengan cukup baik.",
    traits: ["Balanced", "Adaptable", "Moderate", "Flexible"],
    strengths: ["Can function in various schedules", "Not extreme", "Adjustable"],
    weaknesses: ["Bisa slip ke bad habits", "Inconsistent sometimes"],
    tips: ["Maintain the balance", "Don't let it slide too much"],
  },
  C: {
    type: "C",
    title: "Night Owl",
    emoji: "🦉",
    description: "Kamu adalah night owl sejati! Paling produktif dan alive di malam hari. Pagi adalah musuh, malam adalah teman.",
    traits: ["Night person", "Creative at night", "Late riser", "Deep sleeper"],
    strengths: ["Productive nights", "Creative in quiet hours", "Uninterrupted focus time"],
    weaknesses: ["Struggle with morning commitments", "Sleep debt"],
    tips: ["Morning meetings will always exist", "Try to get some morning light"],
  },
  D: {
    type: "D",
    title: "Chaotic Sleeper",
    emoji: "🌀",
    description: "Pola tidurmu unpredictable! Tidak ada jadwal tetap, tidur dan bangun sesuai situasi. Fleksibel tapi juga bisa berantakan.",
    traits: ["Unpredictable", "Flexible", "Adaptive", "Inconsistent"],
    strengths: ["Can function with any schedule", "Adaptable", "No rigid rules"],
    weaknesses: ["Health impacts", "Inconsistent energy", "Potential burnout"],
    tips: ["Try to establish some routine", "Consistent sleep is actually important for health"],
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
