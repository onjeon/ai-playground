// Tes Kepribadian dari Makanan Nusantara Favorit
// Makanan favoritmu mencerminkan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Sarapan ideal kamu adalah...",
    options: [
      { text: "Nasi uduk dengan lauk lengkap", type: "A" },
      { text: "Bubur ayam hangat", type: "B" },
      { text: "Roti bakar dan kopi", type: "C" },
      { text: "Skip sarapan, makan siang langsung", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Comfort food kamu saat galau...",
    options: [
      { text: "Nasi goreng atau mie instan", type: "A" },
      { text: "Soto atau bakso hangat", type: "B" },
      { text: "Ayam geprek level pedas", type: "C" },
      { text: "Martabak atau dessert manis", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Level pedas yang kamu suka...",
    options: [
      { text: "Pedas nendang, sambal terasi!", type: "A" },
      { text: "Medium, ada sensasi tapi tidak tersiksa", type: "B" },
      { text: "Tidak terlalu pedas, fokus ke rasa", type: "C" },
      { text: "No pedas please", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat makan di restoran, kamu pilih...",
    options: [
      { text: "Menu favorit yang sudah pasti enak", type: "A" },
      { text: "Rekomendasi chef atau best seller", type: "B" },
      { text: "Coba menu baru yang belum pernah", type: "C" },
      { text: "Apa aja, yang penting bisa sharing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Masakan daerah favorit kamu...",
    options: [
      { text: "Masakan Padang - gurih dan kaya rasa", type: "A" },
      { text: "Masakan Jawa - manis dan homey", type: "B" },
      { text: "Masakan Sunda - segar dan sehat", type: "C" },
      { text: "Masakan Manado/Bali - unik dan berani", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Street food favorit kamu...",
    options: [
      { text: "Gorengan dan cilok", type: "A" },
      { text: "Sate atau nasi pecel", type: "B" },
      { text: "Siomay atau batagor", type: "C" },
      { text: "Es cendol atau es campur", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat masak sendiri, kamu...",
    options: [
      { text: "Masak yang simple dan cepat", type: "A" },
      { text: "Ikuti resep dengan teliti", type: "B" },
      { text: "Eksperimen dengan bumbu sendiri", type: "C" },
      { text: "Lebih suka pesan online aja", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Porsi makan kamu biasanya...",
    options: [
      { text: "Porsi besar, makan adalah hiburan", type: "A" },
      { text: "Standar, yang penting kenyang", type: "B" },
      { text: "Porsi kecil tapi berkualitas", type: "C" },
      { text: "Tidak tentu, tergantung mood", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Minuman favorit yang menemani makan...",
    options: [
      { text: "Es teh manis klasik", type: "A" },
      { text: "Air putih atau teh tawar", type: "B" },
      { text: "Jus buah segar", type: "C" },
      { text: "Kopi atau minuman kekinian", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat lebaran atau hari besar, makanan wajib...",
    options: [
      { text: "Rendang dan opor ayam", type: "A" },
      { text: "Ketupat dan sambal goreng", type: "B" },
      { text: "Kue-kue tradisional", type: "C" },
      { text: "Semua dimakan, tidak pilih-pilih", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Reaksi kamu dengan makanan baru/asing...",
    options: [
      { text: "Skeptis, lebih suka yang familiar", type: "A" },
      { text: "Coba sedikit dulu", type: "B" },
      { text: "Excited untuk coba!", type: "C" },
      { text: "Tergantung siapa yang rekomendasiin", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Filosofi makan kamu...",
    options: [
      { text: "Makan untuk hidup, yang penting kenyang", type: "A" },
      { text: "Makan adalah ritual yang harus dinikmati", type: "B" },
      { text: "Food is adventure, coba sebanyak mungkin", type: "C" },
      { text: "Makan adalah momen sosial", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Tradisional",
    emoji: "🍛",
    description: "Kamu adalah orang yang menghargai tradisi dan kestabilan! Makanan favoritmu adalah yang sudah familiar dan terbukti enak. Kamu reliable dan konsisten dalam segala hal.",
    traits: ["Tradisional", "Konsisten", "Reliable", "Down to earth"],
    strengths: ["Mudah puas", "Tidak ribet", "Menghargai akar budaya"],
    weaknesses: ["Kurang adventurous", "Comfort zone oriented"],
    tips: ["Coba makanan baru sesekali", "Keluar dari zona nyaman bisa menyenangkan"],
  },
  B: {
    type: "B",
    title: "Si Penikmat",
    emoji: "🍜",
    description: "Kamu adalah orang yang menghargai proses dan kualitas! Makan bukan sekadar kenyang tapi pengalaman yang harus dinikmati. Kamu thoughtful dan appreciate the little things.",
    traits: ["Thoughtful", "Quality focused", "Patient", "Appreciative"],
    strengths: ["Menikmati hidup", "Detail oriented", "Grateful"],
    weaknesses: ["Kadang terlalu perfeksionis", "Susah kalau terburu-buru"],
    tips: ["Kadang simple is okay", "Tidak semua harus sempurna"],
  },
  C: {
    type: "C",
    title: "Si Eksplorer",
    emoji: "🌶️",
    description: "Kamu adalah jiwa petualang dalam hal makanan dan kehidupan! Selalu excited untuk coba hal baru dan tidak takut dengan yang berbeda. Hidup adalah eksplorasi!",
    traits: ["Adventurous", "Open minded", "Curious", "Bold"],
    strengths: ["Banyak pengalaman", "Tidak takut gagal", "Interesting"],
    weaknesses: ["Kadang terlalu impulsif", "Susah commit ke satu hal"],
    tips: ["Sesekali settle dengan yang sudah ada", "Tidak semua yang baru itu lebih baik"],
  },
  D: {
    type: "D",
    title: "Si Sosial",
    emoji: "🍽️",
    description: "Buat kamu, makanan adalah tentang kebersamaan! Yang penting bukan apa yang dimakan tapi dengan siapa. Kamu adalah orang yang sangat menghargai hubungan sosial.",
    traits: ["Social", "Flexible", "People person", "Easy going"],
    strengths: ["Mudah bergaul", "Adaptable", "Good companion"],
    weaknesses: ["Kadang tidak punya preferensi sendiri", "Terlalu mengalah"],
    tips: ["Tau apa yang kamu mau juga penting", "Sesekali pilih sendiri menu-nya"],
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
