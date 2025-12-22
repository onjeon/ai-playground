// Tipe Kamu Saat Makan di Warteg
// Tes ini mengungkap kepribadianmu berdasarkan gaya makan di warteg!

export const questions = [
  {
    id: 1,
    question: "Pertama masuk warteg, kamu langsung...",
    options: [
      { text: "Scan semua lauk, pilih yang paling menarik", type: "A" },
      { text: "Langsung ambil menu andalan yang biasa", type: "B" },
      { text: "Tanya sama yang jaga 'apa yang enak hari ini?'", type: "C" },
      { text: "Duduk dulu, lihat orang lain ambil apa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Porsi nasi di warteg, kamu pilih...",
    options: [
      { text: "Nasi setengah, fokus ke lauk", type: "A" },
      { text: "Nasi full, biar kenyang maksimal", type: "B" },
      { text: "Nasi sesuai lauk yang diambil", type: "C" },
      { text: "Kadang setengah, kadang full, mood-based", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Lauk protein favoritmu di warteg?",
    options: [
      { text: "Ayam goreng/bakar, gak pernah salah", type: "A" },
      { text: "Ikan, lebih sehat dan bervariasi", type: "B" },
      { text: "Telur (dadar/balado/ceplok)", type: "C" },
      { text: "Tempe/tahu, murah dan enak", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Soal sayur di warteg, kamu...",
    options: [
      { text: "Wajib ada sayur, biar seimbang", type: "A" },
      { text: "Sesekali aja, kalau ada yang cocok", type: "B" },
      { text: "Skip sayur, fokus lauk aja", type: "C" },
      { text: "Sambal dan lalapan cukup", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sambel di warteg, level pedesmu?",
    options: [
      { text: "Sambel banyak, makin pedes makin enak", type: "A" },
      { text: "Secukupnya, biar tetap nikmat", type: "B" },
      { text: "Dikit aja, takut sakit perut", type: "C" },
      { text: "Gak pake sambel, pure rasa asli", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jumlah lauk yang kamu ambil biasanya?",
    options: [
      { text: "2 lauk cukup, yang penting kenyang", type: "A" },
      { text: "3-4 lauk, biar bervariasi", type: "B" },
      { text: "5 lauk atau lebih, sekalian puas!", type: "C" },
      { text: "Tergantung budget hari itu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Minuman andalan di warteg?",
    options: [
      { text: "Es teh manis, klasik dan segar", type: "A" },
      { text: "Teh tawar hangat, lebih sehat", type: "B" },
      { text: "Es jeruk atau jus", type: "C" },
      { text: "Air putih aja, hemat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cara bayar di warteg, kamu...",
    options: [
      { text: "Hitung sendiri, bayar sesuai hitungan", type: "A" },
      { text: "Percaya sama yang jaga, bayar langsung", type: "B" },
      { text: "Double check hitungan yang jaga", type: "C" },
      { text: "Transfer atau QRIS kalau bisa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat warteg rame, kamu...",
    options: [
      { text: "Sabar antri, gak buru-buru", type: "A" },
      { text: "Cari warteg lain yang lebih sepi", type: "B" },
      { text: "Antri sambil scroll HP", type: "C" },
      { text: "Bungkus aja biar cepat", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Warteg langganan vs coba yang baru?",
    options: [
      { text: "Selalu langganan, udah pasti enak", type: "A" },
      { text: "Langganan, tapi sesekali explore", type: "B" },
      { text: "Suka coba warteg baru, variety!", type: "C" },
      { text: "Yang deket aja, praktis", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Makan di warteg atau bungkus?",
    options: [
      { text: "Makan di tempat, lebih nikmat", type: "A" },
      { text: "Bungkus, bawa ke kantor/rumah", type: "B" },
      { text: "Tergantung waktu dan situasi", type: "C" },
      { text: "Makan di tempat kalau sendirian, bungkus kalau buru-buru", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Arti warteg buat kamu?",
    options: [
      { text: "Penyelamat anak kos dan pekerja", type: "A" },
      { text: "Comfort food yang selalu bikin kenyang", type: "B" },
      { text: "Kuliner rakyat terbaik Indonesia", type: "C" },
      { text: "Pilihan praktis dan affordable", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penikmat Warteg Serius",
    emoji: "🍛",
    description: "Kamu serius soal warteg! Tau mana yang enak, porsi yang pas, dan kombinasi lauk terbaik. Warteg bukan sekadar makan, tapi pengalaman kuliner sejati.",
    traits: ["Foodie", "Selective", "Menghargai rasa", "Konsisten"],
    strengths: ["Tau warteg enak", "Pilihan lauk selalu oke", "Tidak boros"],
    weaknesses: ["Kadang terlalu picky", "Susah coba yang baru"],
    tips: ["Sesekali random pilih lauk", "Beri kesempatan warteg baru"],
  },
  B: {
    type: "B",
    title: "Penikmat Warteg Fleksibel",
    emoji: "⚖️",
    description: "Kamu balanced dalam urusan warteg! Tau kapan hemat, kapan treat yourself. Fleksibel tapi tetap punya standar. Warteg adalah bagian natural dari hidupmu.",
    traits: ["Fleksibel", "Balanced", "Adaptif", "Praktis"],
    strengths: ["Bisa makan dimana aja", "Tidak ribet", "Hemat tapi tetap nikmat"],
    weaknesses: ["Kadang kurang decisive", "Terlalu go with the flow"],
    tips: ["Sesekali punya pendirian kuat", "Jangan selalu ikut arus"],
  },
  C: {
    type: "C",
    title: "Penikmat Warteg Hedon",
    emoji: "🍖",
    description: "Warteg adalah surgamu! Kamu gak tanggung-tanggung kalau makan, lauk banyak dan nikmat adalah prioritas. Hidup cuma sekali, kenapa harus pelit sama perut?",
    traits: ["Hedon", "Generous ke diri sendiri", "Penyuka nikmat", "Easy-going"],
    strengths: ["Menikmati hidup", "Tidak pelit", "Puas sama pilihan"],
    weaknesses: ["Bisa boros", "Kadang over-eating"],
    tips: ["Budget management tetap penting", "Balance antara nikmat dan sehat"],
  },
  D: {
    type: "D",
    title: "Penikmat Warteg Praktis",
    emoji: "⏱️",
    description: "Efisiensi adalah kuncimu! Warteg adalah solusi cepat, murah, dan kenyang. Kamu tidak ribet, yang penting perut terisi dan bisa lanjut aktivitas.",
    traits: ["Praktis", "Efisien", "Minimalis", "No-nonsense"],
    strengths: ["Hemat waktu", "Tidak overthinking", "Simple living"],
    weaknesses: ["Kurang apresiasi rasa", "Bisa miss hidden gems"],
    tips: ["Sesekali slow down dan nikmati", "Coba explore lebih banyak pilihan"],
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
