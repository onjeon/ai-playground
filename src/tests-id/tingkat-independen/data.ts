// Tingkat Kemandirian Kamu
// Seberapa mandiri kamu dalam berbagai aspek kehidupan?

export const questions = [
  {
    id: 1,
    question: "Saat menghadapi masalah...",
    options: [
      { text: "Selesaikan sendiri, baru minta tolong kalau stuck", type: "A" },
      { text: "Try sendiri sambil konsultasi", type: "B" },
      { text: "Minta bantuan dari awal biar cepat", type: "C" },
      { text: "Butuh orang lain untuk bisa mulai", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Keputusan hidup penting seperti karir atau tempat tinggal...",
    options: [
      { text: "Decide sendiri, inform orang terdekat setelahnya", type: "A" },
      { text: "Konsultasi tapi keputusan tetap di tangan sendiri", type: "B" },
      { text: "Banyak diskusi dan pertimbangkan input orang", type: "C" },
      { text: "Sulit decide tanpa approval orang penting", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Finansial dan pengelolaan uang...",
    options: [
      { text: "Fully mandiri, tidak bergantung siapapun", type: "A" },
      { text: "Mandiri tapi ada safety net dari keluarga", type: "B" },
      { text: "Masih dibantu sebagian", type: "C" },
      { text: "Masih banyak bergantung", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau harus traveling sendirian...",
    options: [
      { text: "No problem, malah lebih bebas", type: "A" },
      { text: "Bisa, tapi prefer ada teman", type: "B" },
      { text: "Nervous tapi bisa kalau terpaksa", type: "C" },
      { text: "Tidak mau, harus ada yang temani", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat sakit atau tidak enak badan...",
    options: [
      { text: "Handle sendiri, ke dokter kalau perlu", type: "A" },
      { text: "Mandiri tapi appreciate kalau ada yang perhatian", type: "B" },
      { text: "Butuh ada yang mengurus", type: "C" },
      { text: "Sangat butuh diurus orang lain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Belajar skill baru...",
    options: [
      { text: "Self-taught, cari resource sendiri", type: "A" },
      { text: "Mix mandiri dan guided learning", type: "B" },
      { text: "Prefer dengan mentor atau instruktur", type: "C" },
      { text: "Butuh bimbingan intensif", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tinggal sendirian...",
    options: [
      { text: "Sudah atau ingin, enjoy independence", type: "A" },
      { text: "Bisa, tapi nice ada roommate", type: "B" },
      { text: "Prefer dengan orang lain", type: "C" },
      { text: "Tidak bisa, butuh ada orang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Validasi untuk keputusan atau pencapaian...",
    options: [
      { text: "Self-validation cukup", type: "A" },
      { text: "Internal validation first, external nice to have", type: "B" },
      { text: "Butuh feedback dan approval", type: "C" },
      { text: "Sangat tergantung pendapat orang lain", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Urusan rumah tangga (masak, bersih-bersih)...",
    options: [
      { text: "Fully capable dan mandiri", type: "A" },
      { text: "Bisa semua, tapi share lebih enak", type: "B" },
      { text: "Basic aja, beberapa masih dibantu", type: "C" },
      { text: "Masih banyak dibantu atau diuruskan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Emotional support saat sedih atau stress...",
    options: [
      { text: "Process sendiri, self-soothe", type: "A" },
      { text: "Mix mandiri dan seek support", type: "B" },
      { text: "Butuh orang untuk curhat", type: "C" },
      { text: "Sangat bergantung pada orang untuk stability", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat ada yang menawarkan bantuan...",
    options: [
      { text: "Tolak halus, prefer sendiri", type: "A" },
      { text: "Terima kalau memang helpful", type: "B" },
      { text: "Appreciate dan terima dengan senang", type: "C" },
      { text: "Selalu terima, butuh bantuan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi sukses dan kebahagiaan...",
    options: [
      { text: "Ditentukan sendiri, tidak perlu validasi", type: "A" },
      { text: "Personal definition dengan sedikit external input", type: "B" },
      { text: "Influenced by societal dan family expectations", type: "C" },
      { text: "Sangat ditentukan oleh pendapat orang sekitar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Highly Independent",
    emoji: "🦅",
    description: "Kamu sangat mandiri! Self-sufficient dalam hampir semua aspek kehidupan. Kamu tidak tergantung pada orang lain dan punya kemampuan untuk handle things alone. Strong individual!",
    traits: ["Self-reliant", "Capable", "Strong", "Autonomous"],
    strengths: ["Can survive alone", "Decisive", "Resourceful"],
    weaknesses: ["Sulit minta tolong", "Bisa isolated", "Miss collaborative benefits"],
    tips: ["Asking for help is not weakness", "Interdependence juga sehat"],
  },
  B: {
    type: "B",
    title: "Balanced Independence",
    emoji: "🌳",
    description: "Kamu punya kemandirian yang seimbang! Capable untuk sendiri tapi juga appreciate connection dan bantuan. Kamu tau kapan mandiri dan kapan butuh support. Healthy balance!",
    traits: ["Balanced", "Self-aware", "Adaptable", "Secure"],
    strengths: ["Best of both worlds", "Flexible", "Good relationships"],
    weaknesses: ["Bisa inconsistent", "Depends on situation"],
    tips: ["Your balance is healthy", "Keep knowing your needs"],
  },
  C: {
    type: "C",
    title: "Interdependent",
    emoji: "🤝",
    description: "Kamu lebih interdependent - value connection dan support dari orang lain. Bukan berarti tidak capable, tapi kamu prefer navigating life with others. Humans are social creatures after all!",
    traits: ["Connected", "Collaborative", "Social", "Supportive"],
    strengths: ["Strong relationships", "Good support system", "Team player"],
    weaknesses: ["Can be too dependent", "Struggle alone", "Need others' validation"],
    tips: ["Build more self-reliance", "You're more capable than you think"],
  },
  D: {
    type: "D",
    title: "High Dependency",
    emoji: "🐣",
    description: "Kamu masih developing independence. Banyak aspek hidup yang masih bergantung pada orang lain. This is okay di certain stages, tapi growth towards more autonomy is important!",
    traits: ["Dependent", "Seeking support", "Growing", "Connected"],
    strengths: ["Good at receiving help", "Strong relationships", "Humble"],
    weaknesses: ["Low autonomy", "Vulnerable without support", "Limited freedom"],
    tips: ["Practice small independent acts", "Build confidence gradually", "You can do more alone!"],
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
