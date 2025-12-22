// Kepribadian dari Jajanan Pasar Favorit
// Tes ini mengungkap kepribadianmu berdasarkan jajanan pasar pilihanmu!

export const questions = [
  {
    id: 1,
    question: "Di pasar tradisional, jajanan pertama yang kamu cari?",
    options: [
      { text: "Kue lapis atau bika ambon", type: "A" },
      { text: "Lemper atau risoles", type: "B" },
      { text: "Klepon atau onde-onde", type: "C" },
      { text: "Pisang goreng atau tahu isi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau beli jajanan, biasanya seberapa banyak?",
    options: [
      { text: "Secukupnya, untuk sendiri aja", type: "A" },
      { text: "Lumayan banyak, buat dibagi keluarga", type: "B" },
      { text: "Banyak sekalian, buat stock", type: "C" },
      { text: "Sedikit-sedikit tapi sering", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Rasa jajanan yang paling kamu suka?",
    options: [
      { text: "Manis legit dan lembut", type: "A" },
      { text: "Gurih dan savory", type: "B" },
      { text: "Manis dengan isian (gula merah, kelapa)", type: "C" },
      { text: "Renyah dan garing", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tekstur jajanan favoritmu?",
    options: [
      { text: "Lembut dan moist", type: "A" },
      { text: "Padat dan mengenyangkan", type: "B" },
      { text: "Kenyal dan chewy", type: "C" },
      { text: "Crispy dan crunchy", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kapan biasanya kamu makan jajanan pasar?",
    options: [
      { text: "Sarapan atau teman kopi pagi", type: "A" },
      { text: "Snack sore bareng teh", type: "B" },
      { text: "Kapan aja pengen, mood-based", type: "C" },
      { text: "Beli buat acara atau tamu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jajanan pasar dan minuman, kombinasimu?",
    options: [
      { text: "Kopi tubruk atau teh tawar", type: "A" },
      { text: "Es teh manis atau es jeruk", type: "B" },
      { text: "Wedang jahe atau bajigur", type: "C" },
      { text: "Apa aja yang ada", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kriteria memilih penjual jajanan pasar?",
    options: [
      { text: "Langganan turun-temurun, sudah percaya", type: "A" },
      { text: "Yang paling rame pembeli", type: "B" },
      { text: "Coba-coba, explore berbagai penjual", type: "C" },
      { text: "Yang paling murah dengan kualitas oke", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jajanan pasar untuk oleh-oleh, pilihanmu?",
    options: [
      { text: "Yang tahan lama, bisa dibawa jauh", type: "A" },
      { text: "Yang paling terkenal dari daerah itu", type: "B" },
      { text: "Yang unik dan jarang ada", type: "C" },
      { text: "Yang pasti disukai semua orang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tentang jajanan pasar modern vs tradisional?",
    options: [
      { text: "Tradisional dong, lebih authentic", type: "A" },
      { text: "Dua-duanya oke, tergantung mood", type: "B" },
      { text: "Modern lebih praktis dan higienis", type: "C" },
      { text: "Yang penting enak, gak peduli jenis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Reaksimu kalau nemu jajanan langka yang enak?",
    options: [
      { text: "Simpan sendiri, gak kasih tau siapa-siapa", type: "A" },
      { text: "Share ke circle terdekat aja", type: "B" },
      { text: "Post di sosmed, kasih review lengkap", type: "C" },
      { text: "Beli banyak buat dibagi-bagi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Jajanan pasar di acara keluarga, ekspektasimu?",
    options: [
      { text: "Yang klasik aja, sesuai tradisi", type: "A" },
      { text: "Variasi lengkap, ada macam-macam", type: "B" },
      { text: "Yang beda dari biasa, surprise element", type: "C" },
      { text: "Yang penting cukup buat semua orang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pendapatmu tentang jajanan pasar?",
    options: [
      { text: "Warisan budaya yang harus dijaga", type: "A" },
      { text: "Comfort food terbaik", type: "B" },
      { text: "Hidden gems kuliner Indonesia", type: "C" },
      { text: "Makanan praktis dan affordable", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pecinta Jajanan Klasik",
    emoji: "🍰",
    description: "Kamu adalah penikmat jajanan tradisional sejati! Seperti kue lapis yang berlapis-lapis, kepribadianmu punya depth dan kedalaman. Kamu menghargai tradisi dan warisan kuliner.",
    traits: ["Tradisional", "Nostalgis", "Setia", "Menghargai warisan"],
    strengths: ["Berpendirian", "Menghargai kualitas", "Punya selera yang refined"],
    weaknesses: ["Kurang suka coba hal baru", "Bisa terkesan old-fashioned"],
    tips: ["Sesekali coba jajanan modern", "Share pengetahuan jajanan tradisional ke generasi muda"],
  },
  B: {
    type: "B",
    title: "Pecinta Jajanan Mengenyangkan",
    emoji: "🥟",
    description: "Kamu praktis dan substansial! Seperti lemper yang isinya padat, kamu adalah orang yang reliable dan selalu bisa diandalkan. Kamu tahu cara memaksimalkan value.",
    traits: ["Praktis", "Substansial", "Generous", "Family-oriented"],
    strengths: ["Tidak pelit", "Suka berbagi", "Pilihan selalu oke untuk banyak orang"],
    weaknesses: ["Kadang terlalu safe", "Kurang adventurous"],
    tips: ["Explore jajanan dari daerah lain", "Coba yang tidak biasa sesekali"],
  },
  C: {
    type: "C",
    title: "Pecinta Jajanan Manis",
    emoji: "🟢",
    description: "Kamu adalah jiwa yang manis dan hangat! Seperti klepon yang surprise dengan gula merahnya, kamu punya inner sweetness yang bikin orang jatuh hati. Hangat dan genuine.",
    traits: ["Hangat", "Genuine", "Surprising", "Authentic"],
    strengths: ["Menyenangkan", "Punya charm tersendiri", "Bikin orang nyaman"],
    weaknesses: ["Bisa terlalu sweet", "Kadang kurang tegas"],
    tips: ["Balance antara manis dan tegas", "Tunjukkan sisi strong kamu juga"],
  },
  D: {
    type: "D",
    title: "Pecinta Jajanan Renyah",
    emoji: "🍤",
    description: "Kamu adalah pribadi yang crispy dan refreshing! Seperti gorengan yang selalu bikin semangat, kamu adalah sumber energi dan keceriaan di sekitarmu.",
    traits: ["Energik", "Refreshing", "Adaptif", "Easy-going"],
    strengths: ["Tidak ribet", "Fleksibel", "Disenangi banyak orang"],
    weaknesses: ["Bisa kurang serius", "Kadang terlalu santai"],
    tips: ["Sesekali pilih yang lebih substantial", "Balance antara fun dan meaningful"],
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
