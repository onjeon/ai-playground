// Peranmu di Keluarga
// Tes ini mengungkap peran dan posisimu dalam dinamika keluarga!

export const questions = [
  {
    id: 1,
    question: "Dalam gathering keluarga, kamu biasanya...",
    options: [
      { text: "Jadi yang ngatur dan koordinasi", type: "A" },
      { text: "Jadi penengah kalau ada beda pendapat", type: "B" },
      { text: "Bikin suasana seru dengan jokes", type: "C" },
      { text: "Hadir dan ikut aja flownya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat ada masalah keluarga, posisimu...",
    options: [
      { text: "Proaktif mencari solusi", type: "A" },
      { text: "Jadi tempat semua orang curhat", type: "B" },
      { text: "Coba cairkan suasana yang tegang", type: "C" },
      { text: "Tidak ikut campur urusan orang", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hubunganmu dengan orangtua...",
    options: [
      { text: "Dekat dan sering berdiskusi serius", type: "A" },
      { text: "Sangat dekat, share banyak hal", type: "B" },
      { text: "Dekat tapi lebih ke fun dan santai", type: "C" },
      { text: "Biasa saja, tidak terlalu intens", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Soal tanggung jawab finansial keluarga, kamu...",
    options: [
      { text: "Aktif berkontribusi dan mengatur", type: "A" },
      { text: "Bantu sebisanya dengan tulus", type: "B" },
      { text: "Contribute tapi tidak terlalu dipusingkan", type: "C" },
      { text: "Fokus ke urusan sendiri dulu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Keputusan besar keluarga, peranmu...",
    options: [
      { text: "Sering diminta pendapat dan didengar", type: "A" },
      { text: "Jadi mediator berbagai pendapat", type: "B" },
      { text: "Ikut diskusi tapi tidak terlalu serius", type: "C" },
      { text: "Terima keputusan yang sudah dibuat", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada anggota keluarga yang sakit, kamu...",
    options: [
      { text: "Take charge, atur rumah sakit dll", type: "A" },
      { text: "Menemani dan memberi support emosional", type: "B" },
      { text: "Hibur dan buat mereka ketawa", type: "C" },
      { text: "Datang menjenguk sesempatnya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tradisi keluarga, menurutmu...",
    options: [
      { text: "Penting dijaga dan kamu yang sering initiate", type: "A" },
      { text: "Berharga karena mempererat ikatan", type: "B" },
      { text: "Seru selama tidak terlalu rigid", type: "C" },
      { text: "Ikut saja kalau ada", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hubunganmu dengan saudara (kakak/adik)...",
    options: [
      { text: "Protektif dan merasa bertanggung jawab", type: "A" },
      { text: "Dekat dan saling support", type: "B" },
      { text: "Partner in crime, seru bareng", type: "C" },
      { text: "Biasa saja, masing-masing sibuk", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat lebaran atau hari raya, kamu...",
    options: [
      { text: "Bantu persiapan dan koordinasi", type: "A" },
      { text: "Quality time dan reconnect dengan semua", type: "B" },
      { text: "Bikin suasana meriah dan seru", type: "C" },
      { text: "Hadir dan enjoy momennya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Konflik antar anggota keluarga, kamu...",
    options: [
      { text: "Intervensi dan coba selesaikan", type: "A" },
      { text: "Dengerin kedua pihak, cari titik temu", type: "B" },
      { text: "Coba ringankan dengan humor", type: "C" },
      { text: "Tidak ikut campur urusan mereka", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ekspektasi keluarga terhadap kamu...",
    options: [
      { text: "Tinggi, diandalkan untuk banyak hal", type: "A" },
      { text: "Jadi yang bisa dipercaya dan support", type: "B" },
      { text: "Jadi yang ceria dan menyenangkan", type: "C" },
      { text: "Tidak banyak, bebas jadi diri sendiri", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Keluarga buat kamu adalah...",
    options: [
      { text: "Tanggung jawab yang harus dijaga", type: "A" },
      { text: "Support system terpenting", type: "B" },
      { text: "Sumber kebahagiaan dan kenangan", type: "C" },
      { text: "Bagian dari hidup yang diterima", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Responsible One",
    emoji: "🏠",
    description: "Kamu adalah tulang punggung keluarga! Orang yang diandalkan untuk mengatur, memutuskan, dan menyelesaikan masalah. Keluarga bergantung padamu.",
    traits: ["Responsible", "Leader", "Dependable", "Decision-maker"],
    strengths: ["Keluarga terorganisir", "Trusted completely", "Problem solver"],
    weaknesses: ["Beban berat", "Kurang waktu untuk diri sendiri"],
    tips: ["Delegate juga ke anggota lain", "Self-care penting, bukan egois"],
  },
  B: {
    type: "B",
    title: "The Emotional Anchor",
    emoji: "⚓",
    description: "Kamu adalah jangkar emosional keluarga! Tempat semua orang datang untuk curhat, cari support, dan merasa dimengerti. Kamu menyatukan keluarga.",
    traits: ["Empathetic", "Supportive", "Mediator", "Trustworthy"],
    strengths: ["Deep bonds", "Perekat keluarga", "Trusted with secrets"],
    weaknesses: ["Emotionally drained", "Caught in the middle"],
    tips: ["Jaga boundaries", "Kamu tidak harus solve semua problem"],
  },
  C: {
    type: "C",
    title: "The Sunshine",
    emoji: "☀️",
    description: "Kamu adalah sinar matahari keluarga! Pembawa keceriaan, tawa, dan energi positif. Keluarga lebih seru dengan kehadiranmu.",
    traits: ["Fun", "Energetic", "Mood-booster", "Light-hearted"],
    strengths: ["Bikin happy", "Memorable moments", "Reduce tension"],
    weaknesses: ["Tidak dianggap serius", "Avoid heavy topics"],
    tips: ["Kadang serious talk juga penting", "Be there untuk hal berat juga"],
  },
  D: {
    type: "D",
    title: "The Independent",
    emoji: "🦅",
    description: "Kamu adalah anggota keluarga yang independen! Punya hidup sendiri dan tidak terlalu involved dalam drama keluarga. Kamu ada tapi dengan jarak.",
    traits: ["Independent", "Distant", "Self-focused", "Low-involvement"],
    strengths: ["Tidak terbebani", "Freedom", "Own identity"],
    weaknesses: ["Miss family bonding", "Terkesan tidak peduli"],
    tips: ["Sesekali lebih involved", "Family juga butuh presence-mu"],
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
