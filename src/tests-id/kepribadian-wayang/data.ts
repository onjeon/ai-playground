// Kepribadian Berdasarkan Karakter Wayang
// Tes ini mengungkap kepribadianmu berdasarkan karakter wayang yang mirip denganmu!

export const questions = [
  {
    id: 1,
    question: "Dalam menghadapi masalah, kamu biasanya...",
    options: [
      { text: "Berpikir jernih dan mencari solusi bijak", type: "A" },
      { text: "Langsung ambil tindakan, gak pake lama", type: "B" },
      { text: "Minta pendapat orang lain dulu", type: "C" },
      { text: "Cari cara kreatif yang tidak biasa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sifat yang paling menggambarkan dirimu?",
    options: [
      { text: "Bijaksana dan tenang", type: "A" },
      { text: "Berani dan tidak kenal takut", type: "B" },
      { text: "Setia dan mengabdi", type: "C" },
      { text: "Cerdik dan penuh akal", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam persahabatan, kamu adalah...",
    options: [
      { text: "Penasihat yang dihormati", type: "A" },
      { text: "Pelindung yang selalu siap membantu", type: "B" },
      { text: "Sahabat setia sampai akhir", type: "C" },
      { text: "Penghibur yang bikin suasana cair", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ketika ada konflik, kamu cenderung...",
    options: [
      { text: "Menjadi mediator, cari jalan tengah", type: "A" },
      { text: "Bela yang benar, lawan yang salah", type: "B" },
      { text: "Mendukung pihak yang kamu percaya", type: "C" },
      { text: "Cari solusi out of the box", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kekuatan terbesarmu adalah...",
    options: [
      { text: "Kebijaksanaan dan pengendalian diri", type: "A" },
      { text: "Keberanian dan kekuatan fisik/mental", type: "B" },
      { text: "Kesetiaan dan dedikasi", type: "C" },
      { text: "Kecerdasan dan kemampuan adaptasi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kelemahanmu yang kamu sadari?",
    options: [
      { text: "Kadang terlalu pasif dan menunggu", type: "A" },
      { text: "Bisa gegabah dan terlalu impulsif", type: "B" },
      { text: "Terlalu bergantung pada orang lain", type: "C" },
      { text: "Kadang terlalu licik atau manipulatif", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Peranmu di keluarga/organisasi?",
    options: [
      { text: "Pemimpin atau sesepuh yang dihormati", type: "A" },
      { text: "Pejuang/eksekutor yang take action", type: "B" },
      { text: "Pendukung setia pemimpin", type: "C" },
      { text: "Konsultan atau strategist", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Menghadapi musuh atau rival, kamu...",
    options: [
      { text: "Coba berdamai atau cari win-win solution", type: "A" },
      { text: "Hadapi langsung dengan konfrontasi", type: "B" },
      { text: "Lindungi orang-orang yang kamu sayangi", type: "C" },
      { text: "Kalahkan dengan strategi cerdik", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Motto hidupmu yang paling cocok?",
    options: [
      { text: "'Sepi ing pamrih, rame ing gawe'", type: "A" },
      { text: "'Lebih baik mati berdiri daripada hidup berlutut'", type: "B" },
      { text: "'Mikul dhuwur, mendhem jero'", type: "C" },
      { text: "'Di mana ada kemauan, di situ ada jalan'", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat mengambil keputusan penting, kamu...",
    options: [
      { text: "Pertimbangkan semua aspek dengan matang", type: "A" },
      { text: "Ikuti insting dan keberanian", type: "B" },
      { text: "Konsultasi dengan orang yang dipercaya", type: "C" },
      { text: "Cari celah dan kesempatan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa yang paling kamu hargai dalam hidup?",
    options: [
      { text: "Kedamaian dan keharmonisan", type: "A" },
      { text: "Kehormatan dan keadilan", type: "B" },
      { text: "Kesetiaan dan pengabdian", type: "C" },
      { text: "Kebebasan dan kreativitas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Warisan apa yang ingin kamu tinggalkan?",
    options: [
      { text: "Kebijaksanaan yang diteruskan generasi", type: "A" },
      { text: "Kisah kepahlawanan yang dikenang", type: "B" },
      { text: "Contoh kesetiaan dan dedikasi", type: "C" },
      { text: "Inovasi dan cara berpikir baru", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Yudhistira - Sang Bijaksana",
    emoji: "👑",
    description: "Seperti Yudhistira, kamu adalah pemimpin yang bijak dan tenang. Kamu mengutamakan dharma (kebenaran) dan selalu berusaha adil dalam setiap keputusan. Ketenangan dan kebijaksanaanmu menjadi teladan bagi orang lain.",
    traits: ["Bijaksana", "Adil", "Tenang", "Dharmic"],
    strengths: ["Pemimpin natural", "Dipercaya banyak orang", "Pengendalian diri tinggi"],
    weaknesses: ["Kadang terlalu idealis", "Bisa terkesan pasif"],
    tips: ["Sesekali ambil keputusan lebih cepat", "Tidak semua harus sempurna"],
  },
  B: {
    type: "B",
    title: "Bima - Sang Perkasa",
    emoji: "💪",
    description: "Seperti Bima, kamu adalah pejuang yang berani dan tidak kenal takut! Kamu langsung take action dan melindungi orang-orang yang kamu sayangi dengan sepenuh hati.",
    traits: ["Berani", "Kuat", "Tegas", "Protective"],
    strengths: ["Tidak takut tantangan", "Pelindung yang andal", "Action-oriented"],
    weaknesses: ["Bisa impulsif", "Kadang terlalu keras"],
    tips: ["Berpikir dulu sebelum bertindak", "Kelembutan juga adalah kekuatan"],
  },
  C: {
    type: "C",
    title: "Hanoman - Sang Setia",
    emoji: "🐒",
    description: "Seperti Hanoman, kesetiaanmu tidak diragukan! Kamu mengabdi dengan tulus kepada orang-orang dan cause yang kamu percaya. Dedikasimu menginspirasi banyak orang.",
    traits: ["Setia", "Mengabdi", "Tulus", "Dedicated"],
    strengths: ["Bisa diandalkan 100%", "Loyal sampai akhir", "Tidak egois"],
    weaknesses: ["Kadang melupakan diri sendiri", "Terlalu mengorbankan kepentingan pribadi"],
    tips: ["Self-care juga penting", "Kamu juga berhak bahagia"],
  },
  D: {
    type: "D",
    title: "Petruk/Semar - Sang Cerdik",
    emoji: "🎭",
    description: "Seperti punakawan, kamu punya kecerdasan dan wisdom yang unik! Di balik penampilan sederhana, kamu punya insight mendalam dan cara berpikir yang kreatif.",
    traits: ["Cerdik", "Kreatif", "Humoris", "Insightful"],
    strengths: ["Problem solver unik", "Bisa melihat dari sudut berbeda", "Mencairkan suasana"],
    weaknesses: ["Kadang tidak dianggap serius", "Bisa terlalu tricky"],
    tips: ["Tunjukkan sisi seriusmu juga", "Balance antara humor dan substance"],
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
