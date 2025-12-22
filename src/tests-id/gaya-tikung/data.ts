// Tes Apakah Kamu Tipe Penikung?
// Seberapa besar potensi tikung-menikung kamu?

export const questions = [
  {
    id: 1,
    question: "Kalau teman curhat tentang gebetannya yang menarik...",
    options: [
      { text: "Dengerin aja, tidak tertarik sama gebetannya", type: "A" },
      { text: "Support teman, bantu dia dapetin", type: "B" },
      { text: "Sedikit penasaran sih sama orangnya", type: "C" },
      { text: "Mulai notice dan cari tau tentang gebetannya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Menurutmu, 'tikung' dalam pertemanan itu...",
    options: [
      { text: "Absolutely wrong, friendship killer", type: "A" },
      { text: "Tergantung situasi dan seberapa serius", type: "B" },
      { text: "Ga baik tapi kadang terjadi", type: "C" },
      { text: "All is fair in love, yang penting menang", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gebetan teman ternyata interested ke kamu...",
    options: [
      { text: "Tolak halus, kasih tau teman", type: "A" },
      { text: "Kasih tau teman dulu, minta pendapat", type: "B" },
      { text: "Bingung, tapi sedikit senang", type: "C" },
      { text: "Ini kesempatan, ambil peluang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Teman kamu lagi PDKT sama seseorang, ternyata kamu juga suka...",
    options: [
      { text: "Mundur, teman lebih penting", type: "A" },
      { text: "Ngobrol sama teman, cari solusi bareng", type: "B" },
      { text: "Diam-diam PDKT juga, siapa cepat dia dapat", type: "C" },
      { text: "All out PDKT, kompetisi itu wajar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Prinsip kamu soal 'mantan teman'...",
    options: [
      { text: "Off limits selamanya, bro code", type: "A" },
      { text: "Minta izin dulu ke teman sebelum apa-apa", type: "B" },
      { text: "Tergantung sudah berapa lama putus", type: "C" },
      { text: "Mantan ya mantan, bebas diperebutkan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau kamu yang ditikung teman...",
    options: [
      { text: "Sakit banget, friendship over", type: "A" },
      { text: "Kecewa tapi coba communicate", type: "B" },
      { text: "Sedih tapi ya sudahlah", type: "C" },
      { text: "Fair game, harusnya aku lebih gesit", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seseorang yang kamu suka ternyata pacar teman...",
    options: [
      { text: "Langsung move on, no chance", type: "A" },
      { text: "Sakit hati tapi tetap hormati", type: "B" },
      { text: "Simpan perasaan, siapa tau mereka putus", type: "C" },
      { text: "Tetap approach, kalau jodoh ya jodoh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Teman curhat hubungannya lagi ga baik...",
    options: [
      { text: "Support dia untuk perbaiki hubungannya", type: "A" },
      { text: "Dengarkan tanpa judge", type: "B" },
      { text: "Secretly hope mereka putus", type: "C" },
      { text: "Ini peluang, mulai dekat sama pasangannya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau gebetan teman lebih cocok sama kamu...",
    options: [
      { text: "Tidak relevan, dia gebetan teman", type: "A" },
      { text: "Mungkin benar tapi tetap mundur", type: "B" },
      { text: "Dilema, tapi coba tunjukkan diri", type: "C" },
      { text: "Buktikan dan ambil, kecocokan lebih penting", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seberapa competitive kamu dalam urusan asmara?",
    options: [
      { text: "Tidak competitive, cinta bukan kompetisi", type: "A" },
      { text: "Fair competition aja, tidak sampai tikung", type: "B" },
      { text: "Sedikit competitive sih kalau suka banget", type: "C" },
      { text: "Very competitive, love is war", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Loyalitas ke teman vs perasaan ke seseorang...",
    options: [
      { text: "Loyalitas selalu menang", type: "A" },
      { text: "Case by case, tapi lean ke loyalitas", type: "B" },
      { text: "Susah pilih, perasaan kuat", type: "C" },
      { text: "Perasaan lebih penting, YOLO", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau di drama atau film, kamu relate sama...",
    options: [
      { text: "Karakter yang loyal dan setia", type: "A" },
      { text: "Karakter yang dilema tapi pilih benar", type: "B" },
      { text: "Karakter yang ikut perasaan", type: "C" },
      { text: "Karakter yang ambitious dan ambil chance", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anti Tikung Sejati",
    emoji: "🛡️",
    description: "Kamu 100% anti tikung! Friendship dan loyalitas adalah segalanya. Tidak akan pernah menghianati teman demi urusan asmara. Bro code dan girl code itu sacred!",
    traits: ["Loyal", "Trustworthy", "Principled", "Respectful"],
    strengths: ["Teman yang bisa diandalkan", "Punya prinsip kuat", "Tidak egois"],
    weaknesses: ["Kadang terlalu idealis", "Miss opportunities mungkin"],
    tips: ["Tetap pertahankan prinsip", "Kamu langka dan valuable!"],
  },
  B: {
    type: "B",
    title: "Tikung-Resistant",
    emoji: "⚖️",
    description: "Kamu sangat menjaga etika dalam pertemanan! Walau kadang dilema, kamu selalu pilih komunikasi dan minta izin. Tidak akan diam-diam tikung.",
    traits: ["Ethical", "Communicative", "Fair", "Considerate"],
    strengths: ["Balance friendship dan feelings", "Good communicator", "Fair player"],
    weaknesses: ["Kadang terlalu overthink", "Miss timing"],
    tips: ["Terus komunikasi yang baik", "Trust instincts juga"],
  },
  C: {
    type: "C",
    title: "Tikung-Tempted",
    emoji: "😏",
    description: "Kamu tau tikung itu salah, tapi kadang perasaan lebih kuat dari logika. Ada potensi tikung kalau situasinya menggoda, walau dengan guilt.",
    traits: ["Conflicted", "Emotional", "Tempted", "Human"],
    strengths: ["Aware of feelings", "Not cold-hearted", "Honest with self"],
    weaknesses: ["Bisa mengkhianati teman", "Guilty conscience"],
    tips: ["Pikirkan konsekuensi sebelum act", "Friendship itu precious"],
  },
  D: {
    type: "D",
    title: "Penikung Profesional",
    emoji: "🎯",
    description: "Buat kamu, all is fair in love and war! Tidak percaya sama konsep 'off limits' dan siapa cepat dia dapat. Competitive dan ambitious dalam urusan hati.",
    traits: ["Competitive", "Ambitious", "Opportunist", "Bold"],
    strengths: ["Go-getter", "Tidak takut take risks", "Decisive"],
    weaknesses: ["Bisa kehilangan teman", "Karma might come back"],
    tips: ["Pertimbangkan value of friendship", "What goes around comes around"],
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
