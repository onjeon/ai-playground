// Tingkat Optimisme Kamu
// Seberapa optimis kamu dalam memandang hidup?

export const questions = [
  {
    id: 1,
    question: "Saat bangun pagi, pikiran pertamamu...",
    options: [
      { text: "Excited untuk hari yang baru!", type: "A" },
      { text: "Hopefully hari ini produktif", type: "B" },
      { text: "Lihat dulu gimana nanti", type: "C" },
      { text: "Aduh, harus ngapain lagi hari ini", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat menghadapi masalah besar...",
    options: [
      { text: "Pasti ada jalannya!", type: "A" },
      { text: "Coba cari solusi yang ada", type: "B" },
      { text: "Khawatir tapi berusaha", type: "C" },
      { text: "Ini pasti akan berakhir buruk", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pandanganmu tentang masa depan...",
    options: [
      { text: "Bright! Banyak possibilities", type: "A" },
      { text: "Cautiously optimistic", type: "B" },
      { text: "Uncertain, tergantung banyak hal", type: "C" },
      { text: "Worried, banyak challenges", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat gagal atau ditolak...",
    options: [
      { text: "Kesempatan belajar untuk sukses next", type: "A" },
      { text: "Kecewa tapi move on", type: "B" },
      { text: "Down untuk beberapa waktu", type: "C" },
      { text: "Bukti bahwa aku memang tidak mampu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tentang orang baru yang kamu temui...",
    options: [
      { text: "Assume mereka baik sampai terbukti tidak", type: "A" },
      { text: "Open tapi tetap waspada", type: "B" },
      { text: "Skeptis sampai terbukti bisa dipercaya", type: "C" },
      { text: "Waspada, orang suka punya motif", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada rencana yang gagal...",
    options: [
      { text: "Plan B time! Ada alternatif", type: "A" },
      { text: "Kecewa tapi cari jalan lain", type: "B" },
      { text: "Frustasi dan butuh waktu adjust", type: "C" },
      { text: "Sudah kuduga, selalu begini", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tentang luck dan keberuntungan...",
    options: [
      { text: "Aku orang yang beruntung", type: "A" },
      { text: "Luck datang dengan usaha", type: "B" },
      { text: "Kadang lucky, kadang tidak", type: "C" },
      { text: "Luck jarang berpihak padaku", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ekspektasi terhadap hari-hari mendatang...",
    options: [
      { text: "Something good will happen", type: "A" },
      { text: "Hopefully positive things", type: "B" },
      { text: "Prepare for either way", type: "C" },
      { text: "Expect the worst, avoid disappointment", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat mendengar berita buruk di media...",
    options: [
      { text: "Tetap yakin dunia ini baik secara keseluruhan", type: "A" },
      { text: "Sedih tapi tetap hopeful", type: "B" },
      { text: "Khawatir tentang kondisi dunia", type: "C" },
      { text: "Konfirmasi bahwa dunia memang buruk", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dalam situasi tidak pasti...",
    options: [
      { text: "Assume akan baik-baik saja", type: "A" },
      { text: "Prepare tapi tetap hopeful", type: "B" },
      { text: "Nervous dan was-was", type: "C" },
      { text: "Prepare for the worst", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Self-talk kamu biasanya...",
    options: [
      { text: "Aku pasti bisa!", type: "A" },
      { text: "Aku akan berusaha sebaik mungkin", type: "B" },
      { text: "Semoga aku bisa...", type: "C" },
      { text: "Aku tidak yakin bisa...", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Filosofi hidupmu...",
    options: [
      { text: "Every cloud has a silver lining", type: "A" },
      { text: "Hope for the best, work for it", type: "B" },
      { text: "Life is unpredictable", type: "C" },
      { text: "Prepare for disappointment", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Optimis Sejati",
    emoji: "☀️",
    description: "Kamu adalah optimis sejati! Glass selalu half full dan kamu selalu melihat sisi positif dari segala situasi. Energi positifmu menular dan kamu adalah sumber semangat bagi orang sekitar!",
    traits: ["Positive", "Hopeful", "Energetic", "Inspiring"],
    strengths: ["Resilient", "Motivated", "Good for mental health"],
    weaknesses: ["Bisa naif", "Ignore red flags", "Disappointed when reality hits"],
    tips: ["Realism kadang diperlukan", "Acknowledge challenges too"],
  },
  B: {
    type: "B",
    title: "Optimis Realistis",
    emoji: "🌤️",
    description: "Kamu adalah optimis yang realistis! Hopeful tapi grounded. Kamu percaya hal baik akan terjadi tapi juga prepare untuk challenges. Balanced outlook on life!",
    traits: ["Balanced", "Hopeful", "Practical", "Grounded"],
    strengths: ["Healthy mindset", "Prepared for both outcomes", "Sustainable optimism"],
    weaknesses: ["Bisa terlalu cautious", "Miss spontaneous joy"],
    tips: ["You have great balance", "Keep the hope alive!"],
  },
  C: {
    type: "C",
    title: "Netral Realis",
    emoji: "⚖️",
    description: "Kamu adalah realis yang netral. Tidak terlalu optimis atau pesimis, tapi melihat situasi as it is. Kamu prepare untuk berbagai kemungkinan tanpa asumsi. Pragmatic approach!",
    traits: ["Realistic", "Neutral", "Pragmatic", "Balanced"],
    strengths: ["Rarely disappointed", "Adaptable", "Level-headed"],
    weaknesses: ["Miss positive energy benefits", "Can seem cold"],
    tips: ["Little optimism can boost mood", "Hope is free!"],
  },
  D: {
    type: "D",
    title: "Pesimistis",
    emoji: "🌧️",
    description: "Kamu cenderung pesimistis dalam memandang hidup. Expect the worst adalah strategi untuk avoid disappointment. Dunia terasa challenging dan kamu selalu waspada.",
    traits: ["Cautious", "Skeptical", "Guarded", "Protective"],
    strengths: ["Rarely caught off guard", "Realistic expectations", "Prepared for worst"],
    weaknesses: ["Miss joyful moments", "Self-fulfilling prophecy", "Draining for self and others"],
    tips: ["Positive thinking has real benefits", "Try gratitude practice", "Small joys matter"],
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
