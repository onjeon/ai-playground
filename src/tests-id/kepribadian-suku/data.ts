// Suku Indonesia yang Cocok dengan Kepribadianmu
// Temukan suku mana yang paling menggambarkan karaktermu!

export const questions = [
  {
    id: 1,
    question: "Saat menghadapi masalah, kamu cenderung...",
    options: [
      { text: "Sabar dan tenang, musyawarah dulu", type: "A" },
      { text: "Langsung action, tidak banyak basa-basi", type: "B" },
      { text: "Cari solusi kreatif dengan cara berbeda", type: "C" },
      { text: "Minta bantuan keluarga dan komunitas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam pergaulan sehari-hari, kamu...",
    options: [
      { text: "Sopan, halus, tidak suka konflik", type: "A" },
      { text: "Tegas, to the point, apa adanya", type: "B" },
      { text: "Fleksibel, mudah bergaul dengan siapa saja", type: "C" },
      { text: "Hangat, suka ngumpul, family-oriented", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pandanganmu tentang tradisi dan adat...",
    options: [
      { text: "Sangat penting, harus dijaga dan dihormati", type: "A" },
      { text: "Penting tapi harus adaptif dengan zaman", type: "B" },
      { text: "Fleksibel, ambil yang baik tinggalkan yang tidak", type: "C" },
      { text: "Tradisi adalah identitas, tidak bisa dipisahkan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu mengekspresikan perasaan...",
    options: [
      { text: "Halus dan tidak langsung, pakai bahasa tubuh", type: "A" },
      { text: "Blak-blakan dan jujur", type: "B" },
      { text: "Tergantung situasi dan orang yang dihadapi", type: "C" },
      { text: "Ekspresif dan emosional", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nilai yang paling kamu pegang teguh...",
    options: [
      { text: "Keharmonisan dan keseimbangan", type: "A" },
      { text: "Keberanian dan ketegasan", type: "B" },
      { text: "Kebebasan dan adaptasi", type: "C" },
      { text: "Kebersamaan dan kekeluargaan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dalam kerja tim, kamu biasanya...",
    options: [
      { text: "Koordinator yang menyatukan semua", type: "A" },
      { text: "Pemimpin yang tegas dan decisive", type: "B" },
      { text: "Mediator yang menengahi perbedaan", type: "C" },
      { text: "Supporter yang loyal dan setia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat ada konflik dengan orang lain...",
    options: [
      { text: "Cari jalan tengah yang damai", type: "A" },
      { text: "Hadapi langsung, selesaikan segera", type: "B" },
      { text: "Diplomatis, cari solusi win-win", type: "C" },
      { text: "Libatkan keluarga atau tetua untuk mediasi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pandanganmu tentang hidup sukses...",
    options: [
      { text: "Hidup seimbang, inner peace", type: "A" },
      { text: "Mencapai target dan prestasi", type: "B" },
      { text: "Kebebasan finansial dan pengalaman", type: "C" },
      { text: "Keluarga bahagia dan komunitas kuat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu menyambut tamu...",
    options: [
      { text: "Formal dan penuh tata krama", type: "A" },
      { text: "Ramah dan langsung ke pokok pembicaraan", type: "B" },
      { text: "Santai dan informal", type: "C" },
      { text: "Meriah dengan jamuan makanan berlimpah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Musik atau seni yang kamu sukai...",
    options: [
      { text: "Yang halus, filosofis, dan bermakna dalam", type: "A" },
      { text: "Yang energik, semangat, dan memotivasi", type: "B" },
      { text: "Yang modern, fusion, dan eksperimental", type: "C" },
      { text: "Yang ramai, ceria, dan mengundang tarian", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat mengambil keputusan penting...",
    options: [
      { text: "Pertimbangkan matang-matang, konsultasi tetua", type: "A" },
      { text: "Cepat dan tegas berdasarkan intuisi", type: "B" },
      { text: "Analisis situasi, fleksibel dengan perubahan", type: "C" },
      { text: "Diskusi dengan keluarga dan orang terdekat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Makanan favoritmu cenderung...",
    options: [
      { text: "Yang halus, tidak terlalu kuat rasa", type: "A" },
      { text: "Yang berasa kuat dan kaya rempah", type: "B" },
      { text: "Bervariasi, suka coba berbagai kuliner", type: "C" },
      { text: "Yang dimasak bersama keluarga, porsi besar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kepribadian Jawa",
    emoji: "🏛️",
    description: "Kamu memiliki karakter seperti budaya Jawa - halus, penuh tata krama, dan menjunjung tinggi keharmonisan. Kamu adalah orang yang sabar, bijaksana, dan tidak suka konfrontasi. Falsafah 'alon-alon asal kelakon' sangat melekat dalam dirimu.",
    traits: ["Sabar", "Halus", "Bijaksana", "Harmonis"],
    strengths: ["Diplomatis dalam konflik", "Menghargai orang lain", "Punya inner peace"],
    weaknesses: ["Kadang terlalu pasif", "Sulit mengekspresikan ketidaksetujuan"],
    tips: ["Sesekali lebih tegas itu okay", "Jangan simpan perasaan terlalu lama"],
  },
  B: {
    type: "B",
    title: "Kepribadian Batak",
    emoji: "🦁",
    description: "Kamu memiliki karakter seperti budaya Batak - tegas, jujur, dan tidak suka basa-basi. Kamu berani menyatakan pendapat dan punya semangat juang tinggi. Loyalitas dan keberanian adalah ciri khasmu.",
    traits: ["Tegas", "Jujur", "Berani", "Loyal"],
    strengths: ["Pemimpin alami", "Tidak munafik", "Pekerja keras"],
    weaknesses: ["Kadang terkesan kasar", "Bisa terlalu blak-blakan"],
    tips: ["Perhatikan perasaan orang lain", "Diplomasi juga penting"],
  },
  C: {
    type: "C",
    title: "Kepribadian Minang",
    emoji: "🌊",
    description: "Kamu memiliki karakter seperti budaya Minang - adaptif, cerdas, dan punya jiwa perantau. Kamu fleksibel dalam berbagai situasi dan pandai bergaul. Semangat wirausaha dan kemandirian adalah kekuatanmu.",
    traits: ["Adaptif", "Cerdas", "Mandiri", "Fleksibel"],
    strengths: ["Mudah bergaul", "Jiwa entrepreneur", "Problem solver kreatif"],
    weaknesses: ["Bisa terkesan oportunis", "Sulit settle di satu tempat"],
    tips: ["Bangun juga koneksi yang dalam", "Kembali ke akar sesekali"],
  },
  D: {
    type: "D",
    title: "Kepribadian Bugis-Makassar",
    emoji: "⚓",
    description: "Kamu memiliki karakter seperti budaya Bugis-Makassar - kekeluargaan kuat, setia, dan menjunjung tinggi kehormatan. Kamu adalah orang yang hangat, ekspresif, dan sangat menghargai ikatan keluarga dan komunitas.",
    traits: ["Loyal", "Family-oriented", "Berani", "Ekspresif"],
    strengths: ["Ikatan keluarga kuat", "Setia pada komitmen", "Hangat dan ramah"],
    weaknesses: ["Bisa overprotective", "Sangat sensitif soal kehormatan"],
    tips: ["Biarkan orang terdekat mandiri juga", "Tidak semua hal perlu dibela mati-matian"],
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
