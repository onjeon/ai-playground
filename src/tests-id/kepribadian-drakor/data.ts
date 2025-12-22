// Tes Karakter Drakor yang Cocok denganmu
// Temukan karakter drama Korea yang paling mirip denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat ada masalah besar dalam hidup, kamu...",
    options: [
      { text: "Hadapi langsung dengan berani", type: "A" },
      { text: "Analisis dan buat rencana matang", type: "B" },
      { text: "Cari support dari orang terdekat", type: "C" },
      { text: "Tetap optimis dan cari sisi positif", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tipe pasangan ideal kamu...",
    options: [
      { text: "Yang bisa diajak berjuang bareng", type: "A" },
      { text: "Yang cerdas dan ambitious", type: "B" },
      { text: "Yang perhatian dan romantis", type: "C" },
      { text: "Yang fun dan bikin hidup berwarna", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau jadi karakter di drakor, peranmu...",
    options: [
      { text: "Protagonis yang punya misi besar", type: "A" },
      { text: "CEO atau profesional sukses", type: "B" },
      { text: "Main lead yang penuh perasaan", type: "C" },
      { text: "Supporting character yang seru", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dalam hubungan, hal yang paling penting...",
    options: [
      { text: "Kepercayaan dan kesetiaan", type: "A" },
      { text: "Respek dan kesetaraan", type: "B" },
      { text: "Cinta dan perhatian", type: "C" },
      { text: "Keseruan dan chemistry", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Genre drakor favorit kamu...",
    options: [
      { text: "Thriller/Action dengan plot twist", type: "A" },
      { text: "Office romance atau legal drama", type: "B" },
      { text: "Romance melodrama yang bikin nangis", type: "C" },
      { text: "Romantic comedy yang ringan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat seseorang menyakiti orang yang kamu sayang...",
    options: [
      { text: "Langsung protect dan bela mereka", type: "A" },
      { text: "Cari cara cerdas untuk balas", type: "B" },
      { text: "Fokus comfort orang yang disakiti", type: "C" },
      { text: "Coba mediasi dan cari solusi damai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Outfit style kamu sehari-hari...",
    options: [
      { text: "Casual cool dan edgy", type: "A" },
      { text: "Formal dan polished", type: "B" },
      { text: "Soft dan feminine/clean", type: "C" },
      { text: "Colorful dan trendy", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau ada crush, kamu...",
    options: [
      { text: "Dekati langsung dengan percaya diri", type: "A" },
      { text: "Observasi dulu, cari timing yang tepat", type: "B" },
      { text: "Diam-diam dari jauh, malu", type: "C" },
      { text: "Jadi teman dulu baru ke hubungan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat galau atau sedih...",
    options: [
      { text: "Workout atau aktivitas fisik", type: "A" },
      { text: "Fokus ke kerjaan/produktif", type: "B" },
      { text: "Nangis dan curhat", type: "C" },
      { text: "Distraksi dengan hiburan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quote yang paling relate dengan kamu...",
    options: [
      { text: "'What doesn't kill you makes you stronger'", type: "A" },
      { text: "'Work hard in silence, let success be noise'", type: "B" },
      { text: "'Love is the answer to everything'", type: "C" },
      { text: "'Life is short, be happy'", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Di antara teman-teman, kamu dikenal sebagai...",
    options: [
      { text: "Yang paling berani dan protective", type: "A" },
      { text: "Yang paling sukses dan inspiring", type: "B" },
      { text: "Yang paling caring dan sweet", type: "C" },
      { text: "Yang paling seru dan easy going", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ending drama yang kamu suka...",
    options: [
      { text: "Justice served, penjahat dihukum", type: "A" },
      { text: "Karakter achieve semua goalsnya", type: "B" },
      { text: "Happy ending romantis", type: "C" },
      { text: "Unexpected tapi satisfying", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Hero/Heroine",
    emoji: "⚔️",
    description: "Kamu seperti karakter utama yang penuh keberanian! Mirip karakter di Vincenzo atau Strong Woman Do Bong Soon - berani, protective, dan tidak takut melawan ketidakadilan.",
    traits: ["Berani", "Protective", "Loyal", "Justice seeker"],
    strengths: ["Inspiring", "Bisa diandalkan saat krisis", "Strong morals"],
    weaknesses: ["Bisa terlalu impulsif", "Kadang keras kepala"],
    tips: ["Pikir dulu sebelum bertindak", "Tidak semua perang harus dimenangkan"],
  },
  B: {
    type: "B",
    title: "The Achiever",
    emoji: "👔",
    description: "Kamu seperti karakter CEO cool dan sukses! Mirip karakter di What's Wrong with Secretary Kim atau Crash Landing on You - ambitious, smart, dan selalu punya rencana.",
    traits: ["Ambitious", "Strategic", "Confident", "Professional"],
    strengths: ["Goal getter", "Respected", "Capable"],
    weaknesses: ["Bisa workaholic", "Kadang kurang ekspresif"],
    tips: ["Balance work dan life", "Tunjukkan sisi lembut juga"],
  },
  C: {
    type: "C",
    title: "The Romantic Lead",
    emoji: "💕",
    description: "Kamu adalah jiwa romantis seperti karakter utama di drama cinta! Mirip karakter di Goblin atau Descendants of the Sun - penuh perasaan, caring, dan believe in true love.",
    traits: ["Romantic", "Emotional", "Caring", "Empathetic"],
    strengths: ["Deep connections", "Loving partner", "Loyal"],
    weaknesses: ["Bisa terlalu emotional", "Kadang too idealistic"],
    tips: ["Jaga hatimu juga", "Realistis dalam ekspektasi"],
  },
  D: {
    type: "D",
    title: "The Scene Stealer",
    emoji: "🌟",
    description: "Kamu adalah karakter yang selalu mencuri perhatian! Mirip second lead atau sahabat yang memorable - fun, charming, dan membuat setiap scene lebih hidup.",
    traits: ["Charming", "Fun", "Optimistic", "Adaptable"],
    strengths: ["Mood booster", "Likeable", "Brings joy"],
    weaknesses: ["Kadang hide true feelings", "Not taken seriously"],
    tips: ["Show depth juga", "Okay untuk vulnerable"],
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
