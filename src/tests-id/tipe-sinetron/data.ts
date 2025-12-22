// Tipe Kamu Saat Nonton Sinetron
// Tes ini mengungkap kepribadianmu berdasarkan gaya nonton sinetron!

export const questions = [
  {
    id: 1,
    question: "Hubunganmu dengan sinetron Indonesia?",
    options: [
      { text: "Penggemar setia, gak boleh ketinggalan!", type: "A" },
      { text: "Nonton kalau lagi senggang", type: "B" },
      { text: "Gak suka, lebih pilih K-Drama", type: "C" },
      { text: "Ikut nonton karena keluarga", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre sinetron favoritmu?",
    options: [
      { text: "Drama keluarga, penuh air mata", type: "A" },
      { text: "Misteri/horor, seru dan menegangkan", type: "B" },
      { text: "Komedi, yang penting ketawa", type: "C" },
      { text: "Romance, bikin baper", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Reaksimu saat karakter antagonis muncul?",
    options: [
      { text: "Kesel banget, pengen marah!", type: "A" },
      { text: "Seru, bikin cerita makin menarik", type: "B" },
      { text: "Biasa aja, udah bisa tebak plotnya", type: "C" },
      { text: "Kasihan sama karakternya, pasti ada alasan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat scene sedih/mengharukan...",
    options: [
      { text: "Nangis beneran, terbawa perasaan", type: "A" },
      { text: "Sedih tapi bisa kontrol", type: "B" },
      { text: "Gak terlalu terpengaruh", type: "C" },
      { text: "Tergantung seberapa bagus aktingnya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau ketinggalan episode, kamu...",
    options: [
      { text: "Wajib nonton ulang di YouTube/app", type: "A" },
      { text: "Tanya keluarga/teman, minta summary", type: "B" },
      { text: "Skip aja, bisa nebak ceritanya", type: "C" },
      { text: "Ya sudah, lanjut episode berikutnya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Artis sinetron favoritmu...",
    options: [
      { text: "Follow semua sosmedia, update terus", type: "A" },
      { text: "Tau siapa tapi gak follow", type: "B" },
      { text: "Gak hapal nama, tau muka aja", type: "C" },
      { text: "Suka yang aktingnya bagus, bukan cuma tampang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nonton sinetron sama siapa?",
    options: [
      { text: "Bareng ibu atau keluarga", type: "A" },
      { text: "Sendirian, fokus!", type: "B" },
      { text: "Gak pernah nonton", type: "C" },
      { text: "Kadang bareng, kadang sendiri", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Soal plot twist di sinetron, menurutmu...",
    options: [
      { text: "Seru! Bikin gak bisa ditebak", type: "A" },
      { text: "Kadang bagus, kadang maksa", type: "B" },
      { text: "Kebanyakan plot twist yang gak masuk akal", type: "C" },
      { text: "Bikin penasaran, harus nonton terus", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sinetron dipotong iklan banyak, reaksimu?",
    options: [
      { text: "Sabar, sambil main HP", type: "A" },
      { text: "Kesel, pindah channel dulu", type: "B" },
      { text: "Makanya mending streaming", type: "C" },
      { text: "Kesempatan ambil snack/ke toilet", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ending sinetron biasanya...",
    options: [
      { text: "Harus happy ending, gak terima sad ending", type: "A" },
      { text: "Yang penting ceritanya bagus", type: "B" },
      { text: "Pasti happy ending, udah tau", type: "C" },
      { text: "Penasaran sama endingnya, ikutin terus", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sinetron Indonesia vs drama luar, menurutmu?",
    options: [
      { text: "Sinetron Indonesia lebih relate sama kehidupan", type: "A" },
      { text: "Drama luar lebih berkualitas", type: "B" },
      { text: "Dua-duanya punya kelebihan masing-masing", type: "C" },
      { text: "Tergantung moodnya mau nonton apa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Arti sinetron buat kamu?",
    options: [
      { text: "Hiburan wajib setiap malam", type: "A" },
      { text: "Cara bonding sama keluarga", type: "B" },
      { text: "Guilty pleasure sesekali", type: "C" },
      { text: "Bukan prioritas entertainment", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sinetron Lovers",
    emoji: "📺",
    description: "Kamu adalah penggemar sinetron sejati! Terbawa suasana, tau semua pemain, dan gak boleh ketinggalan satu episode pun. Sinetron adalah bagian dari rutinitas harianmu.",
    traits: ["Emosional", "Setia", "Antusias", "Ekspresif"],
    strengths: ["Mudah berempati", "Loyal audience", "Menikmati hiburan lokal"],
    weaknesses: ["Terlalu terbawa perasaan", "Bisa adiksi"],
    tips: ["Ingat itu cuma cerita", "Coba explore genre lain juga"],
  },
  B: {
    type: "B",
    title: "Casual Viewer",
    emoji: "📱",
    description: "Kamu nonton sinetron dengan santai. Tidak terlalu terikat tapi tetap bisa menikmati. Balance antara hiburan dan kritis.",
    traits: ["Balanced", "Objektif", "Fleksibel", "Casual"],
    strengths: ["Tidak terlalu terbawa", "Bisa enjoy tanpa stress", "Open-minded"],
    weaknesses: ["Kurang appreciate detail cerita", "Gak terlalu committed"],
    tips: ["Sesekali ikutin satu sinetron sampai tamat", "Nikmati prosesnya"],
  },
  C: {
    type: "C",
    title: "Kritikus Sinetron",
    emoji: "🎬",
    description: "Kamu punya standar tinggi soal hiburan! Sinetron Indonesia kurang memenuhi ekspektasimu. Lebih prefer konten dengan kualitas produksi tinggi.",
    traits: ["Kritis", "Selective", "High-standard", "Quality-oriented"],
    strengths: ["Punya taste bagus", "Tidak gampang terpengaruh", "Objektif"],
    weaknesses: ["Bisa terkesan snobby", "Miss keseruan lokal"],
    tips: ["Ada sinetron berkualitas juga lho", "Sesekali nikmati tanpa judge"],
  },
  D: {
    type: "D",
    title: "Family Viewer",
    emoji: "👨‍👩‍👧‍👦",
    description: "Buat kamu, sinetron adalah tentang kebersamaan keluarga. Bukan ceritanya yang penting, tapi momen nonton bareng yang berharga.",
    traits: ["Family-oriented", "Supportive", "Adaptif", "Warm"],
    strengths: ["Menghargai bonding time", "Fleksibel dengan pilihan", "Prioritas keluarga"],
    weaknesses: ["Kurang punya preferensi sendiri", "Terlalu mengalah"],
    tips: ["Boleh pilih tontonan sendiri sesekali", "Express preferensimu juga"],
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
