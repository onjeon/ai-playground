// Kepribadian dari Soto Favorit Kamu
// Tes ini mengungkap kepribadianmu berdasarkan soto favorit!

export const questions = [
  {
    id: 1,
    question: "Jenis soto favorit...",
    options: [
      { text: "Soto Ayam, klasik dan universal", type: "A" },
      { text: "Soto Betawi dengan santan gurih", type: "B" },
      { text: "Soto Madura, kuah bening segar", type: "C" },
      { text: "Coto Makassar atau soto daerah lainnya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pelengkap soto yang wajib ada...",
    options: [
      { text: "Nasi putih, basic dan kenyang", type: "A" },
      { text: "Lontong atau ketupat", type: "B" },
      { text: "Bihun atau soun", type: "C" },
      { text: "Emping atau kerupuk", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sambal untuk soto...",
    options: [
      { text: "Sambal kecap manis", type: "A" },
      { text: "Sambal rawit, yang pedas!", type: "B" },
      { text: "Jeruk nipis aja, segar", type: "C" },
      { text: "Campur semua! Sambal, kecap, jeruk", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Porsi soto biasanya...",
    options: [
      { text: "Satu mangkok cukup", type: "A" },
      { text: "Nambah kuah atau nasi", type: "B" },
      { text: "Porsi jumbo dari awal", type: "C" },
      { text: "Tergantung lapar hari itu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tempat makan soto favorit...",
    options: [
      { text: "Warung langganan yang sudah puluhan tahun", type: "A" },
      { text: "Resto atau food court yang bersih", type: "B" },
      { text: "Yang viral dan recommended", type: "C" },
      { text: "Yang paling dekat dan praktis", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Waktu paling nikmat makan soto...",
    options: [
      { text: "Pagi, sarapan hangat", type: "A" },
      { text: "Siang, makan besar", type: "B" },
      { text: "Malam, comfort food", type: "C" },
      { text: "Pas hujan atau dingin", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Topping daging favorit...",
    options: [
      { text: "Ayam suwir, classic", type: "A" },
      { text: "Daging sapi empuk", type: "B" },
      { text: "Jeroan lengkap, authentic", type: "C" },
      { text: "Telur rebus atau pindang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kuah soto yang disukai...",
    options: [
      { text: "Kuning bening dengan rempah", type: "A" },
      { text: "Kuah santan creamy", type: "B" },
      { text: "Kuah hitam khas coto", type: "C" },
      { text: "Semua jenis kuah, asal enak", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara makan soto...",
    options: [
      { text: "Tuang kuah ke nasi, jadi satu", type: "A" },
      { text: "Nasi dan soto terpisah, sendok bergantian", type: "B" },
      { text: "Sruput kuah dulu baru yang lain", type: "C" },
      { text: "Tidak ada aturan khusus", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Soto untuk acara apa?",
    options: [
      { text: "Makanan sehari-hari, kapanpun", type: "A" },
      { text: "Acara keluarga atau gathering", type: "B" },
      { text: "Comfort food saat tidak enak badan", type: "C" },
      { text: "Weekend treat atau reward", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau bikin soto sendiri...",
    options: [
      { text: "Bisa! Punya resep andalan", type: "A" },
      { text: "Pakai bumbu instan, praktis", type: "B" },
      { text: "Lebih baik beli, malas masak", type: "C" },
      { text: "Never tried, terlalu ribet", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Soto buat kamu adalah...",
    options: [
      { text: "Warisan kuliner Indonesia yang harus dijaga", type: "A" },
      { text: "Comfort food terbaik untuk segala suasana", type: "B" },
      { text: "Makanan praktis yang selalu satisfy", type: "C" },
      { text: "Salah satu menu favorit di antara banyak", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pencinta Soto Tradisional",
    emoji: "🍲",
    description: "Kamu adalah pecinta soto tradisional sejati! Menghargai resep turun-temurun dan rasa authentic. Warung langganan adalah second home dan kamu tau mana soto yang benar-benar enak.",
    traits: ["Traditional", "Loyal", "Quality-seeker", "Nostalgic"],
    strengths: ["Deep appreciation", "Know the good stuff", "Support local"],
    weaknesses: ["Picky", "Resistant to new versions"],
    tips: ["Sesekali coba variasi baru", "Share knowledge kuliner ke generasi muda"],
  },
  B: {
    type: "B",
    title: "Comfort Food Seeker",
    emoji: "🥣",
    description: "Soto adalah comfort food utamamu! Hangat, mengenyangkan, dan selalu bikin feel better. Baik saat hujan, sakit, atau butuh kehangatan, soto adalah jawabannya.",
    traits: ["Comfort-seeker", "Warm", "Nurturing", "Homey"],
    strengths: ["Self-care aware", "Emotional connection dengan food"],
    weaknesses: ["Makan berdasarkan emosi", "Bisa over-indulge"],
    tips: ["Food is comfort tapi balance penting", "Try cooking untuk extra comfort"],
  },
  C: {
    type: "C",
    title: "Soto Explorer",
    emoji: "🗺️",
    description: "Kamu adalah explorer dunia soto! Dari Sabang sampai Merauke, semua jenis soto sudah dicoba. Kuliner adalah petualangan dan soto adalah treasure map-mu.",
    traits: ["Adventurous", "Curious", "Diverse taste", "Open-minded"],
    strengths: ["Wide experience", "Appreciate diversity", "Good recommendations"],
    weaknesses: ["Jack of all trades master of none", "No clear favorite"],
    tips: ["Find your ultimate favorite", "Document your soto journey"],
  },
  D: {
    type: "D",
    title: "Practical Soto Lover",
    emoji: "⚡",
    description: "Soto adalah pilihan praktis dan mengenyangkan bagimu! Yang penting enak, hangat, dan tidak ribet. Kamu tidak overthink soal makanan - kalau enak ya enak.",
    traits: ["Practical", "Easy-going", "Flexible", "Not picky"],
    strengths: ["Easy to please", "Quick decisions", "Adaptable"],
    weaknesses: ["Might miss nuances", "Less appreciation for craft"],
    tips: ["Slow down dan appreciate sesekali", "There's a whole world of soto out there"],
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
