export const questions = [
  {
    id: 1,
    question: "Apa yang kamu cek pertama kali setelah foto?",
    options: [
      { text: "Ekspresi dan pose", type: "A" },
      { text: "Background dan lighting", type: "B" },
      { text: "Filter dan editing", type: "C" },
      { text: "Angle dan komposisi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa banyak foto yang kamu ambil sebelum dapat yang bagus?",
    options: [
      { text: "1-5 foto, langsung jadi", type: "A" },
      { text: "10-20 foto, perlu seleksi", type: "B" },
      { text: "50+ foto, perfectionist", type: "C" },
      { text: "Tergantung mood, kadang sekali jadi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Filter apa yang paling sering kamu pakai?",
    options: [
      { text: "Natural, hampir tanpa filter", type: "A" },
      { text: "Aesthetic, warna-warna soft", type: "B" },
      { text: "Beauty filter dengan smooth effect", type: "C" },
      { text: "Vintage atau film camera", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Di mana tempat favorit untuk selfie?",
    options: [
      { text: "Di mana saja, asal lightingnya bagus", type: "A" },
      { text: "Cafe atau tempat aesthetic", type: "B" },
      { text: "Di kamar dengan ring light", type: "C" },
      { text: "Outdoor dengan pemandangan menarik", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Apa ekspresi favoritmu saat selfie?",
    options: [
      { text: "Senyum natural", type: "A" },
      { text: "Duck face atau pout", type: "B" },
      { text: "Poker face cool", type: "C" },
      { text: "Candid seperti tidak sadar difoto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa lama kamu edit satu foto?",
    options: [
      { text: "Tidak edit, langsung posting", type: "A" },
      { text: "5-10 menit, adjust basic", type: "B" },
      { text: "30+ menit, sampai sempurna", type: "C" },
      { text: "Tergantung, kadang tidak edit sama sekali", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa yang paling penting dalam foto menurutmu?",
    options: [
      { text: "Menangkap momen authentic", type: "A" },
      { text: "Estetika dan visual yang pleasing", type: "B" },
      { text: "Tampilan diri yang maksimal", type: "C" },
      { text: "Cerita dan mood yang tersampaikan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apa reaksimu saat difoto tanpa persiapan?",
    options: [
      { text: "Santai aja, tetap percaya diri", type: "A" },
      { text: "Panik dan minta hapus", type: "B" },
      { text: "Marah dan tidak suka", type: "C" },
      { text: "Kadang malah lebih bagus hasilnya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seberapa sering kamu ganti foto profil?",
    options: [
      { text: "Jarang, yang penting sudah bagus", type: "A" },
      { text: "Rutin setiap ada foto bagus baru", type: "B" },
      { text: "Sering, selalu update penampilan", type: "C" },
      { text: "Random, tergantung mood", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa komentar yang paling sering kamu dapat?",
    options: [
      { text: "Fotonya natural banget", type: "A" },
      { text: "Aesthetic banget feednya", type: "B" },
      { text: "Cantik/ganteng banget!", type: "C" },
      { text: "Vibesnya kerasa banget", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa yang bikin kamu hapus foto setelah posting?",
    options: [
      { text: "Jarang hapus, sudah dipikirkan matang", type: "A" },
      { text: "Kalau tidak cocok dengan feed", type: "B" },
      { text: "Kalau likes-nya sedikit", type: "C" },
      { text: "Kalau mood-nya sudah tidak relate", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bagaimana kamu mendeskripsikan feed Instagram-mu?",
    options: [
      { text: "Campuran momen-momen penting", type: "A" },
      { text: "Kurated dengan color palette tertentu", type: "B" },
      { text: "Fokus pada foto diri yang bagus", type: "C" },
      { text: "Acak tapi ada soul-nya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Natural Beauty",
    emoji: "🌸",
    description: "Kamu adalah tipe yang percaya 'less is more'! Fotomu selalu terlihat natural dan effortless, seakan-akan tidak butuh usaha untuk terlihat bagus. Kamu nyaman dengan dirimu sendiri dan itu terpancar di setiap foto.",
    traits: ["Percaya diri", "Authentic", "Effortless", "Down to earth"],
    strengths: ["Tidak butuh waktu lama untuk foto", "Terlihat approachable", "Confidence yang genuine"],
    weaknesses: ["Kadang kurang effort di momen penting", "Bisa terlihat 'biasa' di era filter", "Tidak selalu fotogenik"],
    tips: ["Sesekali boleh extra untuk momen spesial", "Natural is beautiful, tapi eksplorasi juga bagus", "Percaya dirimu adalah kekuatan"],
  },
  B: {
    type: "B",
    title: "Aesthetic Master",
    emoji: "🎨",
    description: "Kamu adalah curator Instagram profesional! Setiap foto dipikirkan dengan matang - dari lighting, background, hingga bagaimana fit dengan feed secara keseluruhan. Feed-mu adalah karya seni yang bisa masuk Pinterest.",
    traits: ["Eye for detail", "Creative", "Konsisten", "Visual thinker"],
    strengths: ["Feed yang cohesive dan pleasing", "Sense of aesthetics yang kuat", "Bisa jadi content creator"],
    weaknesses: ["Kadang terlalu perfectionist", "Overthinking simple photos", "Pressure untuk maintain aesthetic"],
    tips: ["Sesekali post tanpa mikir feed", "Spontaneity bisa jadi aesthetic tersendiri", "Jangan sampai aesthetic mengorbankan momen"],
  },
  C: {
    type: "C",
    title: "Glam Queen/King",
    emoji: "👑",
    description: "Kamu percaya setiap foto adalah kesempatan untuk shine! Full glam, maksimal editing, dan always camera-ready. Kamu tahu angles terbaikmu dan tidak takut untuk tampil stunning di setiap postingan.",
    traits: ["Glamorous", "Confident", "High maintenance", "Show-stopping"],
    strengths: ["Selalu terlihat maksimal", "Jago self-presentation", "Foto-foto yang memorable"],
    weaknesses: ["Pressure untuk selalu tampil perfect", "Bisa terlihat tidak authentic", "High maintenance"],
    tips: ["Self-worth tidak ditentukan likes", "Bare face juga cantik/ganteng", "Balance antara glam dan authentic"],
  },
  D: {
    type: "D",
    title: "Artistic Soul",
    emoji: "📷",
    description: "Kamu melihat selfie sebagai bentuk seni! Bukan tentang tampil cantik/ganteng, tapi tentang menyampaikan mood, cerita, dan emosi. Fotomu punya depth yang tidak semua orang bisa tangkap, tapi yang mengerti akan sangat appreciate.",
    traits: ["Artistic", "Expressive", "Unique", "Story-teller"],
    strengths: ["Foto yang berbeda dan memorable", "Menyampaikan emosi dengan visual", "Tidak terjebak tren"],
    weaknesses: ["Tidak selalu dipahami mainstream", "Kadang terlalu abstract", "Tidak konsisten secara visual"],
    tips: ["Keunikanmu adalah gift", "Terus eksplorasi tanpa takut judgement", "Art is subjective, stay true to yourself"],
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
