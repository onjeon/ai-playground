// Kepribadian dari Bakso Favorit Kamu
// Tes ini mengungkap kepribadianmu berdasarkan bakso favorit!

export const questions = [
  {
    id: 1,
    question: "Jenis bakso favorit...",
    options: [
      { text: "Bakso urat, kenyal dan bertekstur", type: "A" },
      { text: "Bakso halus, lembut di mulut", type: "B" },
      { text: "Bakso jumbo atau bola besar", type: "C" },
      { text: "Bakso isi (keju, telur, cabai)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pelengkap bakso yang wajib...",
    options: [
      { text: "Mie dan bihun, lengkap!", type: "A" },
      { text: "Tahu dan siomay goreng", type: "B" },
      { text: "Kuah ekstra banyak", type: "C" },
      { text: "Pangsit goreng crispy", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Level pedas sambal bakso...",
    options: [
      { text: "Pedas maksimal, sambal banyak!", type: "A" },
      { text: "Sedang, balance rasa", type: "B" },
      { text: "Tidak pedas, nikmati original", type: "C" },
      { text: "Tergantung mood hari itu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kuah bakso yang disukai...",
    options: [
      { text: "Kuah bening gurih klasik", type: "A" },
      { text: "Kuah kental dan rich", type: "B" },
      { text: "Kuah pedas dengan cabai", type: "C" },
      { text: "Semua jenis kuah enak", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Porsi bakso sekali makan...",
    options: [
      { text: "Biasa, 5-7 butir cukup", type: "A" },
      { text: "Banyak, 10+ butir harus!", type: "B" },
      { text: "Sedikit, yang penting kuahnya", type: "C" },
      { text: "Tergantung lapar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tempat beli bakso favorit...",
    options: [
      { text: "Gerobak keliling yang legendaris", type: "A" },
      { text: "Warung bakso tetap yang terkenal", type: "B" },
      { text: "Restoran atau franchise", type: "C" },
      { text: "Yang paling dekat dan praktis", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kecap dan saus untuk bakso...",
    options: [
      { text: "Kecap manis dan cuka seimbang", type: "A" },
      { text: "Kecap banyak, suka manis", type: "B" },
      { text: "Cuka dan sambal pedas", type: "C" },
      { text: "Tanpa tambahan, original aja", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cara makan bakso...",
    options: [
      { text: "Potong-potong dulu baru makan", type: "A" },
      { text: "Gigit langsung, satu per satu", type: "B" },
      { text: "Selingan dengan mie dan pelengkap", type: "C" },
      { text: "Random, tidak ada cara khusus", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Waktu paling nikmat makan bakso...",
    options: [
      { text: "Siang hari, makan besar", type: "A" },
      { text: "Sore hari, snack time", type: "B" },
      { text: "Malam hari, comfort dinner", type: "C" },
      { text: "Kapanpun craving datang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau abang bakso lewat di depan rumah...",
    options: [
      { text: "Panggil! Kesempatan tidak boleh dilewatkan", type: "A" },
      { text: "Tergantung lagi pengen atau tidak", type: "B" },
      { text: "Jarang beli dari keliling, prefer ke warung", type: "C" },
      { text: "Nostalgic, reminds me of childhood", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bakso sisa yang dibungkus...",
    options: [
      { text: "Panaskan lagi, harus hangat", type: "A" },
      { text: "Makan dingin, masih oke", type: "B" },
      { text: "Jarang sisa, selalu habis", type: "C" },
      { text: "Kasih ke orang lain yang mau", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bakso buat kamu adalah...",
    options: [
      { text: "Comfort food Indonesia terbaik", type: "A" },
      { text: "Makanan nostalgia dari kecil", type: "B" },
      { text: "Menu praktis untuk segala suasana", type: "C" },
      { text: "Kuliner yang harus dijaga keasliannya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bakso Purist",
    emoji: "🍲",
    description: "Kamu adalah pecinta bakso sejati yang menghargai keaslian! Tau bedanya bakso enak dan biasa, punya langganan favorit, dan appreciate the craft behind good bakso.",
    traits: ["Traditional", "Quality-focused", "Loyal", "Appreciative"],
    strengths: ["Know good bakso", "Support local", "Consistent taste"],
    weaknesses: ["Picky", "Resist new variations"],
    tips: ["Sesekali coba bakso fusion", "Share your favorite spots dengan orang lain"],
  },
  B: {
    type: "B",
    title: "Bakso Maximalist",
    emoji: "🥳",
    description: "Makin banyak makin senang! Porsi jumbo, topping lengkap, dan sambal pedas adalah gaya baksomu. Go big or go home dalam urusan bakso.",
    traits: ["Generous", "Indulgent", "Bold", "Full experience"],
    strengths: ["Full satisfaction", "Value seeker", "Not holding back"],
    weaknesses: ["Could over-indulge", "Budget bisa tinggi"],
    tips: ["Balance kadang perlu", "Sharing is caring"],
  },
  C: {
    type: "C",
    title: "Adventurous Bakso Lover",
    emoji: "🧀",
    description: "Kamu suka bakso dengan twist! Bakso keju, bakso isi telur, atau variasi unik lainnya menarik perhatianmu. Traditional is good, tapi innovation lebih exciting.",
    traits: ["Adventurous", "Open-minded", "Trendy", "Explorer"],
    strengths: ["Try new things", "Not stuck in routine", "Discover new favorites"],
    weaknesses: ["Might miss classic taste", "Trend-dependent"],
    tips: ["Classic punya charm tersendiri", "Balance innovation dengan appreciation untuk original"],
  },
  D: {
    type: "D",
    title: "Nostalgic Bakso Fan",
    emoji: "💭",
    description: "Bakso membawa kenangan indah bagimu! Suara tukang bakso keliling, makan bareng keluarga, atau jajan pas kecil - semua terangkum dalam semangkok bakso.",
    traits: ["Nostalgic", "Sentimental", "Family-oriented", "Memory keeper"],
    strengths: ["Deep connection", "Appreciate moments", "Emotional value"],
    weaknesses: ["Might idealize past", "Compare everything to 'dulu'"],
    tips: ["Create new memories too", "Pass on the tradition to next generation"],
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
