// Tipe Subscriber YouTube Kamu
// Tes ini mengungkap tipe subscriber YouTube seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Konten YouTube yang paling sering ditonton...",
    options: [
      { text: "Entertainment: vlog, comedy, pranks", type: "A" },
      { text: "Educational: tutorial, documentary, explainer", type: "B" },
      { text: "Gaming: gameplay, esports, reviews", type: "C" },
      { text: "Mix semuanya, tergantung mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Subscribe ke berapa channel?",
    options: [
      { text: "Banyak! 100+ dan terus bertambah", type: "A" },
      { text: "Moderate, 30-50 channel favorit", type: "B" },
      { text: "Selective, 10-20 yang benar-benar ditonton", type: "C" },
      { text: "Hampir tidak subscribe, nonton dari rekomendasi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Notification bell untuk channel favorit...",
    options: [
      { text: "All notifications on untuk semua!", type: "A" },
      { text: "Selected channels aja", type: "B" },
      { text: "Jarang aktifin, check manual", type: "C" },
      { text: "Tidak pernah aktifin bell", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Durasi video yang prefer...",
    options: [
      { text: "Pendek, 5-10 menit", type: "A" },
      { text: "Medium, 15-30 menit", type: "B" },
      { text: "Panjang, 30+ menit atau documentary", type: "C" },
      { text: "Tidak picky, tergantung kontennya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Interaksi dengan video (like, comment, share)...",
    options: [
      { text: "Aktif! Like dan comment hampir semua video", type: "A" },
      { text: "Like kalau suka, jarang comment", type: "B" },
      { text: "Silent viewer, nonton doang", type: "C" },
      { text: "Share ke teman kalau bagus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "YouTube Premium...",
    options: [
      { text: "Subscribe! No ads, worth it", type: "A" },
      { text: "Pakai trial aja atau promo", type: "B" },
      { text: "Pakai AdBlock, free solution", type: "C" },
      { text: "Tidak masalah dengan ads", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nonton YouTube biasanya di...",
    options: [
      { text: "HP, kapanpun dimanapun", type: "A" },
      { text: "Smart TV di rumah", type: "B" },
      { text: "Laptop atau PC", type: "C" },
      { text: "Mix semua device", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Waktu nonton YouTube terbanyak...",
    options: [
      { text: "Malam sebelum tidur", type: "A" },
      { text: "Sambil kerja atau belajar", type: "B" },
      { text: "Weekend marathon", type: "C" },
      { text: "Random, kapanpun ada waktu luang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "YouTube Shorts...",
    options: [
      { text: "Love it! Scroll berjam-jam", type: "A" },
      { text: "Sesekali, kalau muncul di feed", type: "B" },
      { text: "Skip, prefer long-form", type: "C" },
      { text: "Apa itu Shorts?", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rekomendasi algorithm YouTube...",
    options: [
      { text: "Suka! Selalu nemuin yang menarik", type: "A" },
      { text: "Hit or miss, kadang bagus kadang random", type: "B" },
      { text: "Annoying, prefer search manual", type: "C" },
      { text: "Tidak terlalu perhatiin", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Playback speed...",
    options: [
      { text: "Normal 1x, enjoy the content", type: "A" },
      { text: "1.5x atau 2x untuk efisiensi", type: "B" },
      { text: "Tergantung jenis video", type: "C" },
      { text: "Tidak pernah ganti speed", type: "D" },
    ],
  },
  {
    id: 12,
    question: "YouTube buat kamu adalah...",
    options: [
      { text: "Platform hiburan utama, lebih dari TV", type: "A" },
      { text: "Sumber belajar dan informasi", type: "B" },
      { text: "Time killer saat bosan", type: "C" },
      { text: "Salah satu dari banyak platform", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "YouTube Addict",
    emoji: "📺",
    description: "Kamu adalah YouTube addict sejati! Platform ini adalah primary entertainment dan berjam-jam bisa habis untuk scroll dan nonton. Subscribe banyak, notif on, dan selalu update.",
    traits: ["Heavy user", "Engaged", "Trendy", "Connected"],
    strengths: ["Always updated", "Wide knowledge from videos", "Great recommendations"],
    weaknesses: ["Time sink", "Productivity affected", "FOMO"],
    tips: ["Set time limits", "Quality over quantity", "Touch grass kadang"],
  },
  B: {
    type: "B",
    title: "Learner Subscriber",
    emoji: "📚",
    description: "YouTube adalah sumber belajar utamamu! Tutorial, documentary, dan educational content adalah favoritmu. Setiap video adalah kesempatan untuk learn something new.",
    traits: ["Curious", "Educational", "Productive viewer", "Selective"],
    strengths: ["Skill improvement", "Productive usage", "Curated content"],
    weaknesses: ["Miss entertainment aspect", "Could be more fun"],
    tips: ["Balance dengan entertainment", "Learning is great tapi relax juga penting"],
  },
  C: {
    type: "C",
    title: "Silent Viewer",
    emoji: "👀",
    description: "Kamu adalah silent viewer yang nonton tanpa banyak interaksi! Jarang like, comment, atau subscribe tapi berjam-jam nonton. Your watch history speaks louder than engagement.",
    traits: ["Passive", "Observer", "Private", "Lurker"],
    strengths: ["Focused viewing", "No drama", "Privacy maintained"],
    weaknesses: ["Creators tidak dapat feedback", "Miss community aspect"],
    tips: ["Like sesekali untuk support creator", "Engagement helps the algorithm"],
  },
  D: {
    type: "D",
    title: "Casual Viewer",
    emoji: "🌊",
    description: "YouTube adalah salah satu dari banyak platform bagimu! Nonton kalau ada waktu atau rekomendasi bagus. Tidak terlalu attached dan punya balance yang sehat.",
    traits: ["Casual", "Balanced", "Not dependent", "Diverse"],
    strengths: ["Healthy relationship", "Not addicted", "Time well-managed"],
    weaknesses: ["Miss good content", "Not up to date"],
    tips: ["Your balance is healthy!", "Sesekali explore bisa temukan gems"],
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
