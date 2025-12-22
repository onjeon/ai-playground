// Tipe Penonton Sinetron
// Kamu penonton sinetron Indonesia yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Saat nonton sinetron, yang paling ditunggu...",
    options: [
      { text: "Drama dan konflik yang intense!", type: "A" },
      { text: "Kisah cinta yang sweet", type: "B" },
      { text: "Plot twist yang unexpected", type: "C" },
      { text: "Ending yang happy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tokoh sinetron favoritmu...",
    options: [
      { text: "Antagonis yang licik dan penuh drama", type: "A" },
      { text: "Protagonis yang sabar dan baik hati", type: "B" },
      { text: "Karakter kompleks yang abu-abu", type: "C" },
      { text: "Comic relief yang lucu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Reaksimu saat tokoh jahat menang sementara...",
    options: [
      { text: "YES! Drama intensifies!", type: "A" },
      { text: "Sedih, kasihan protagonis", type: "B" },
      { text: "Curious gimana bakal balik keadaan", type: "C" },
      { text: "Skip episode sampai karma datang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara nonton sinetron...",
    options: [
      { text: "Live, ga mau ketinggalan drama", type: "A" },
      { text: "Marathon saat libur", type: "B" },
      { text: "Random episode, ikutin yang seru aja", type: "C" },
      { text: "Baca spoiler dulu, baru nonton kalau worth it", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada adegan tamparan atau konfrontasi...",
    options: [
      { text: "YAASSS ini yang ditunggu!", type: "A" },
      { text: "Deg-degan, nervous", type: "B" },
      { text: "Analyze motif dan plotnya", type: "C" },
      { text: "Cringe tapi tetap nonton", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Diskusi sinetron dengan teman...",
    options: [
      { text: "Heboh banget, gosip karakter kayak gosip tetangga", type: "A" },
      { text: "Share siapa ship favorit", type: "B" },
      { text: "Kritik plot holes dan inkonsistensi", type: "C" },
      { text: "Recommend yang bagus aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Genre sinetron favorit...",
    options: [
      { text: "Drama keluarga dengan intrik", type: "A" },
      { text: "Romantis dan love triangle", type: "B" },
      { text: "Misteri dan thriller", type: "C" },
      { text: "Komedi dan slice of life", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat sinetron favoritmu tamat...",
    options: [
      { text: "Sedih banget, move on susah", type: "A" },
      { text: "Puas kalau endingnya bagus", type: "B" },
      { text: "Langsung cari sinetron baru", type: "C" },
      { text: "Finally! Terlalu lama dramanya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sinetron Indonesia vs drama Korea...",
    options: [
      { text: "Sinetron dong, lebih relate!", type: "A" },
      { text: "Dua-duanya, tergantung mood", type: "B" },
      { text: "Drakor lebih sering sih", type: "C" },
      { text: "Jarang nonton dua-duanya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Iklan di tengah sinetron...",
    options: [
      { text: "Scroll HP, balik lagi pas mulai", type: "A" },
      { text: "Ke kamar mandi atau ambil snack", type: "B" },
      { text: "Annoying, prefer streaming tanpa iklan", type: "C" },
      { text: "Bagian dari experience", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sinetron yang diperpanjang terus...",
    options: [
      { text: "Bagus dong, drama continues!", type: "A" },
      { text: "Tergantung masih seru atau ga", type: "B" },
      { text: "Usually jadi boring, stop nonton", type: "C" },
      { text: "Tetap setia sampai akhir", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Alasan utama nonton sinetron...",
    options: [
      { text: "Escape dari kenyataan, seru!", type: "A" },
      { text: "Quality time sama keluarga", type: "B" },
      { text: "Guilty pleasure aja", type: "C" },
      { text: "Background noise atau iseng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Drama Enthusiast",
    emoji: "🎭",
    description: "Kamu adalah Drama Enthusiast! Hidupmu untuk drama sinetron. Konflik, tamparan, air mata - semua kamu nikmati dengan penuh antusias. Sinetron adalah guilty pleasure yang tidak perlu malu-malu!",
    traits: ["Passionate", "Emotional", "Engaged", "Dramatic"],
    strengths: ["Fully enjoy the show", "Great conversation starter", "Emotional outlet"],
    weaknesses: ["Bisa terlalu invested", "Kadang terbawa emosi"],
    tips: ["It's just entertainment", "Separate fiction dari reality"],
  },
  B: {
    type: "B",
    title: "Romantic Viewer",
    emoji: "💕",
    description: "Kamu adalah Romantic Viewer! Yang kamu cari dari sinetron adalah kisah cinta yang mengharukan. Ship favorit adalah segalanya dan happy ending adalah keharusan!",
    traits: ["Romantic", "Hopeful", "Empathetic", "Sweet"],
    strengths: ["Appreciate love stories", "Optimistic viewer", "Feel-good vibes"],
    weaknesses: ["Kecewa kalau ship tidak jadi", "Skip drama scenes"],
    tips: ["All love stories are valid", "Enjoy the journey not just ending"],
  },
  C: {
    type: "C",
    title: "Critical Viewer",
    emoji: "🧐",
    description: "Kamu adalah Critical Viewer! Nonton tapi juga analyze. Plot holes kamu notice, acting quality kamu judge. Kamu appreciate sinetron yang well-made dan cerdas.",
    traits: ["Analytical", "Critical", "Selective", "Thoughtful"],
    strengths: ["High standards", "Appreciate quality", "Good taste"],
    weaknesses: ["Susah enjoy fully", "Too critical kadang"],
    tips: ["Sometimes just enjoy tanpa analyze", "Not everything needs critique"],
  },
  D: {
    type: "D",
    title: "Casual Viewer",
    emoji: "📺",
    description: "Kamu adalah Casual Viewer! Sinetron bukan prioritas tapi sesekali nonton kalau lagi santai. Tidak terlalu invested tapi bisa enjoy saat nonton bareng keluarga.",
    traits: ["Casual", "Relaxed", "Easy-going", "Social"],
    strengths: ["Not addicted", "Balanced", "Flexible"],
    weaknesses: ["Miss good shows", "Out of loop discussions"],
    tips: ["Try follow satu sinetron sampai habis", "Bisa jadi bonding with family"],
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
