// Tes Tipe Gebetan Ideal Kamu
// Temukan tipe orang yang ideal untuk kamu kejar!

export const questions = [
  {
    id: 1,
    question: "Saat pertama kali ketemu orang, yang paling bikin kamu tertarik...",
    options: [
      { text: "Senyum dan aura positifnya", type: "A" },
      { text: "Cara dia ngobrol dan wawasannya", type: "B" },
      { text: "Penampilannya yang rapi dan menarik", type: "C" },
      { text: "Sense of humor dan vibe-nya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Gebetan ideal kamu kalau soal karir...",
    options: [
      { text: "Mapan dan stabil, jelas masa depannya", type: "A" },
      { text: "Ambisius dan punya passion kuat", type: "B" },
      { text: "Fleksibel dan work-life balance", type: "C" },
      { text: "Kreatif dan tidak konvensional", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Intensitas chatting yang kamu prefer sama gebetan...",
    options: [
      { text: "Setiap hari, walau cuma say hi", type: "A" },
      { text: "Quality over quantity, yang penting deep talk", type: "B" },
      { text: "Cukup kalau ada yang mau diobrolin", type: "C" },
      { text: "Spontan, ga perlu dijadwal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Soal approval keluarga buat gebetan...",
    options: [
      { text: "Penting banget, harus direstui", type: "A" },
      { text: "Penting tapi bukan segalanya", type: "B" },
      { text: "Yang penting orangnya baik", type: "C" },
      { text: "Urusan hati, keluarga nanti aja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Gebetan ideal kamu di sosmed...",
    options: [
      { text: "Aktif tapi ga lebay, posting normal", type: "A" },
      { text: "Jarang posting, low profile", type: "B" },
      { text: "Feed-nya aesthetic dan teratur", type: "C" },
      { text: "Sering share memes dan konten lucu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau ada konflik, gebetan ideal kamu...",
    options: [
      { text: "Langsung ngobrol dan selesaikan", type: "A" },
      { text: "Kasih waktu dulu baru bahas", type: "B" },
      { text: "Calm dan tidak emosian", type: "C" },
      { text: "Bisa bikin situasi tegang jadi lucu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Weekend ideal sama gebetan...",
    options: [
      { text: "Date romantis, dinner atau nonton", type: "A" },
      { text: "Quality time ngobrol di cafe", type: "B" },
      { text: "Adventure atau coba hal baru", type: "C" },
      { text: "Santai, mau ngapa-ngapain aja asik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gebetan yang menarik adalah yang...",
    options: [
      { text: "Perhatian dan inget hal kecil", type: "A" },
      { text: "Smart dan bisa diajak diskusi", type: "B" },
      { text: "Independent dan punya life sendiri", type: "C" },
      { text: "Fun dan bikin hari-hari lebih berwarna", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Soal jarak usia sama gebetan...",
    options: [
      { text: "Prefer yang lebih dewasa/mature", type: "A" },
      { text: "Sebaya atau beda tipis", type: "B" },
      { text: "Umur cuma angka, yang penting mindset", type: "C" },
      { text: "Yang penting nyambung aja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Red flag terbesar yang bikin kamu mundur...",
    options: [
      { text: "Tidak jelas statusnya atau php", type: "A" },
      { text: "Close minded dan tidak mau belajar", type: "B" },
      { text: "Terlalu possessive atau kontrolin", type: "C" },
      { text: "Boring dan ga bisa diajak seru", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cara gebetan ideal nunjukin ketertarikan...",
    options: [
      { text: "Konsisten dan jelas tanda-tandanya", type: "A" },
      { text: "Subtle tapi meaningful", type: "B" },
      { text: "Respect boundaries, ga pushy", type: "C" },
      { text: "Playful dan bikin penasaran", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Yang paling penting dari gebetan ideal...",
    options: [
      { text: "Loyal dan bisa dipercaya", type: "A" },
      { text: "Punya visi dan tujuan hidup", type: "B" },
      { text: "Mandiri dan dewasa", type: "C" },
      { text: "Chemistry dan kecocokan vibe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Pemuja Kesetiaan",
    emoji: "💖",
    description: "Kamu mencari gebetan yang loyal, konsisten, dan serius! Tidak suka yang PHP atau punya status tidak jelas. Butuh kepastian dan komitmen dari awal.",
    traits: ["Butuh kepastian", "Menghargai konsistensi", "Family oriented", "Romantis"],
    strengths: ["Tidak buang waktu sama yang ga serius", "Punya standar jelas", "Menghargai loyalitas"],
    weaknesses: ["Kadang terlalu cepat judge", "Kurang sabar sama proses"],
    tips: ["Beri waktu untuk kenal lebih dalam", "Jangan terlalu cepat label relationship"],
  },
  B: {
    type: "B",
    title: "Si Pencari Substansi",
    emoji: "🧠",
    description: "Kamu tertarik sama orang yang smart dan punya depth! Penampilan nomor sekian, yang penting bisa diajak ngobrol deep dan punya ambisi hidup.",
    traits: ["Sapiosexual", "Menghargai intelektualitas", "Suka deep talk", "Future oriented"],
    strengths: ["Tidak superfisial", "Cari partner yang growth mindset", "Value kualitas"],
    weaknesses: ["Kadang terlalu idealis", "Overthinking"],
    tips: ["Balance antara otak dan hati", "Tidak semua harus perfect"],
  },
  C: {
    type: "C",
    title: "Si Pecinta Kebebasan",
    emoji: "🦋",
    description: "Kamu suka gebetan yang independent dan punya life sendiri! Tidak mau yang clingy atau terlalu controlling. Space personal itu penting.",
    traits: ["Menghargai independence", "Anti clingy", "Mature minded", "Self-sufficient"],
    strengths: ["Healthy boundaries", "Tidak possessive", "Respect personal space"],
    weaknesses: ["Kadang terkesan jaga jarak", "Susah open up"],
    tips: ["Keterbukaan juga penting", "Interdependence itu sehat"],
  },
  D: {
    type: "D",
    title: "Si Pemburu Vibes",
    emoji: "✨",
    description: "Chemistry dan vibes adalah segalanya! Kamu butuh gebetan yang fun, bisa bikin ketawa, dan bikin hidup lebih berwarna. Boring is the biggest turn off!",
    traits: ["Fun seeker", "Spontan", "Chemistry oriented", "Easy going"],
    strengths: ["Enjoy the moment", "Tidak ribet", "Positive energy"],
    weaknesses: ["Kadang kurang serius", "Terlalu fokus sama fun"],
    tips: ["Fun penting tapi substansi juga", "Jangan abaikan red flags karena vibes"],
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
