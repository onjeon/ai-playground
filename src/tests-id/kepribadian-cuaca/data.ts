// Cuaca yang Menggambarkan Kepribadianmu
// Cuaca mana yang paling mencerminkan dirimu?

export const questions = [
  {
    id: 1,
    question: "Mood kamu di pagi hari biasanya...",
    options: [
      { text: "Cerah dan energik!", type: "A" },
      { text: "Butuh waktu untuk warm up", type: "B" },
      { text: "Tergantung hari, bisa beda-beda", type: "C" },
      { text: "Tenang dan reflektif", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu mengekspresikan emosi...",
    options: [
      { text: "Terbuka dan ekspresif", type: "A" },
      { text: "Intense tapi singkat", type: "B" },
      { text: "Naik turun, unpredictable", type: "C" },
      { text: "Kalem dan terkontrol", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Energi sosialmu...",
    options: [
      { text: "Selalu on, suka keramaian", type: "A" },
      { text: "Powerful tapi butuh recharge", type: "B" },
      { text: "Fluktuatif, kadang on kadang off", type: "C" },
      { text: "Lebih suka suasana tenang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat sedang marah...",
    options: [
      { text: "Jarang marah, selalu positif", type: "A" },
      { text: "Meledak tapi cepat reda", type: "B" },
      { text: "Bisa unpredictable", type: "C" },
      { text: "Diam dan menarik diri", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pengaruhmu ke orang lain...",
    options: [
      { text: "Mencerahkan suasana", type: "A" },
      { text: "Intense, memorable impact", type: "B" },
      { text: "Bisa beda-beda tergantung mood", type: "C" },
      { text: "Menenangkan dan soothing", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Preferensi aktivitas...",
    options: [
      { text: "Outdoor, active, penuh semangat", type: "A" },
      { text: "High intensity tapi interval", type: "B" },
      { text: "Bervariasi, suka coba hal baru", type: "C" },
      { text: "Calm activities, me-time", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Consistency perilakumu...",
    options: [
      { text: "Konsisten positif", type: "A" },
      { text: "Ada ups and downs yang extreme", type: "B" },
      { text: "Changeable, susah diprediksi", type: "C" },
      { text: "Stabil dan predictable", type: "D" },
    ],
  },
  {
    id: 8,
    question: "First impression orang tentangmu...",
    options: [
      { text: "Hangat dan welcoming", type: "A" },
      { text: "Powerful dan striking", type: "B" },
      { text: "Interesting dan mysterious", type: "C" },
      { text: "Calm dan gentle", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu handling stress...",
    options: [
      { text: "Stay positive, look at bright side", type: "A" },
      { text: "Release dengan intense activity", type: "B" },
      { text: "Mood swings, bisa beda-beda", type: "C" },
      { text: "Withdraw dan reflect", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Hubunganmu dengan orang lain...",
    options: [
      { text: "Banyak teman, semua merasa nyaman", type: "A" },
      { text: "Sedikit tapi intense", type: "B" },
      { text: "Beragam, some close some not", type: "C" },
      { text: "Selective, prefer quality", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kamu datang ke sebuah acara...",
    options: [
      { text: "Jadi pusat perhatian, energi naik", type: "A" },
      { text: "Bikin impact kuat tapi ga lama", type: "B" },
      { text: "Tergantung mood saat itu", type: "C" },
      { text: "Hadir dengan tenang di background", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Orang-orang mendeskripsikan kamu sebagai...",
    options: [
      { text: "Ray of sunshine, selalu cerah", type: "A" },
      { text: "Passionate dan powerful", type: "B" },
      { text: "Unpredictable tapi exciting", type: "C" },
      { text: "Calming presence", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cerah Berawan",
    emoji: "☀️",
    description: "Kamu seperti hari yang cerah! Hangat, energik, dan membawa vibes positif ke mana-mana. Orang-orang merasa nyaman di dekatmu karena energimu yang mencerahkan. Kamu adalah sumber vitamin D untuk jiwa!",
    traits: ["Positif", "Energik", "Hangat", "Optimis"],
    strengths: ["Mood booster alami", "Disukai banyak orang", "Resilient"],
    weaknesses: ["Bisa menekan perasaan negatif", "Kadang terlalu optimis"],
    tips: ["Okay untuk tidak selalu ceria", "Akui perasaan negatif juga"],
  },
  B: {
    type: "B",
    title: "Badai Petir",
    emoji: "⛈️",
    description: "Kamu seperti badai petir - powerful, intense, dan meninggalkan kesan yang dalam. Emosi dan energimu kuat, datang dengan impact besar tapi juga cepat berlalu. Memorable dan passionate!",
    traits: ["Intense", "Passionate", "Powerful", "Dramatic"],
    strengths: ["Meninggalkan kesan kuat", "Passionate", "Authentic"],
    weaknesses: ["Bisa overwhelming", "Mood swings extreme"],
    tips: ["Channel energi dengan bijak", "Beri peringatan sebelum 'badai'"],
  },
  C: {
    type: "C",
    title: "Cuaca Berubah-ubah",
    emoji: "🌤️",
    description: "Kamu seperti cuaca tropis yang unpredictable! Bisa cerah, bisa hujan, dalam waktu singkat. Orang-orang tidak pernah bosan denganmu karena kamu selalu full of surprises. Mysterious dan exciting!",
    traits: ["Unpredictable", "Dynamic", "Versatile", "Exciting"],
    strengths: ["Never boring", "Adaptable", "Full of surprises"],
    weaknesses: ["Susah dipahami", "Orang bisa bingung"],
    tips: ["Komunikasikan mood-mu", "Sedikit predictability helps"],
  },
  D: {
    type: "D",
    title: "Hujan Gerimis",
    emoji: "🌧️",
    description: "Kamu seperti hujan gerimis yang menenangkan. Kalem, reflektif, dan membawa ketenangan. Kehadiranmu soothing dan membuat orang merasa aman untuk introspeksi. Kamu adalah comfort dalam ketenangan.",
    traits: ["Kalem", "Reflektif", "Soothing", "Introspektif"],
    strengths: ["Calming presence", "Good listener", "Thoughtful"],
    weaknesses: ["Bisa terkesan murung", "Kurang energik"],
    tips: ["Sesekali keluarkan sisi cerahmu", "Share thoughts-mu lebih"],
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
