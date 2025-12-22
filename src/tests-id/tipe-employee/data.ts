// Tes Tipe Karyawan Kamu
// Kamu tipe karyawan seperti apa di kantor?

export const questions = [
  {
    id: 1,
    question: "Saat dapat task baru dari atasan...",
    options: [
      { text: "Langsung kerjakan dengan antusias", type: "A" },
      { text: "Analisa dulu, buat plan, baru execute", type: "B" },
      { text: "Kerjakan sesuai yang diminta, no more", type: "C" },
      { text: "Cari cara paling efisien, kadang shortcut", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tentang lembur...",
    options: [
      { text: "Siap lembur kalau memang dibutuhkan", type: "A" },
      { text: "Kadang-kadang, untuk project penting", type: "B" },
      { text: "Avoid, work-life balance penting", type: "C" },
      { text: "Kalau dibayar lebih, boleh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hubungan dengan rekan kerja...",
    options: [
      { text: "Akrab dan sering hangout bareng", type: "A" },
      { text: "Profesional dan collaboratif", type: "B" },
      { text: "Biasa aja, fokus kerja", type: "C" },
      { text: "Dekat sama yang se-vibe aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat meeting...",
    options: [
      { text: "Aktif contribute ide dan pendapat", type: "A" },
      { text: "Dengerin dulu, speak when needed", type: "B" },
      { text: "Minimal participation", type: "C" },
      { text: "Challenge status quo dan propose alternative", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal inisiatif di kantor...",
    options: [
      { text: "Sering propose ide dan project baru", type: "A" },
      { text: "Improve process yang sudah ada", type: "B" },
      { text: "Tunggu direction dari atasan", type: "C" },
      { text: "Fokus ke scope kerjaan sendiri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kritik atau feedback dari atasan...",
    options: [
      { text: "Terima dengan positif dan langsung improve", type: "A" },
      { text: "Reflect dan consider objectifly", type: "B" },
      { text: "Agak defensive tapi coba terima", type: "C" },
      { text: "Tergantung valid atau tidak kritiknya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ambisi karir kamu...",
    options: [
      { text: "Mau naik ke posisi leadership", type: "A" },
      { text: "Jadi expert di bidang tertentu", type: "B" },
      { text: "Stable dan comfortable cukup", type: "C" },
      { text: "Kerja cukup untuk support passion/side hustle", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Deadline yang tight...",
    options: [
      { text: "Challenge accepted, give 110%", type: "A" },
      { text: "Negosiasi kalau tidak realistis", type: "B" },
      { text: "Stres tapi coba selesaikan", type: "C" },
      { text: "Push back atau cari cara potong", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Office politics...",
    options: [
      { text: "Navigate dengan baik, tahu cara mainnya", type: "A" },
      { text: "Minimal involvement, fokus kerja", type: "B" },
      { text: "Avoid sepenuhnya", type: "C" },
      { text: "Observasi tapi tidak ikut-ikutan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau company sedang struggle...",
    options: [
      { text: "Extra effort untuk bantu company survive", type: "A" },
      { text: "Do my part dengan sebaik mungkin", type: "B" },
      { text: "Mulai cari backup plan", type: "C" },
      { text: "Not my circus, protect diri sendiri", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Training dan development...",
    options: [
      { text: "Selalu semangat ikut dan belajar", type: "A" },
      { text: "Pilih yang relevant dengan goal", type: "B" },
      { text: "Ikut kalau wajib aja", type: "C" },
      { text: "Lebih suka belajar sendiri", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pekerjaan ideal adalah...",
    options: [
      { text: "Challenging dan bisa berkembang terus", type: "A" },
      { text: "Meaningful dan sesuai expertise", type: "B" },
      { text: "Stable dengan work-life balance", type: "C" },
      { text: "Flexible dan tidak micromanaged", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Karyawan Bintang",
    emoji: "⭐",
    description: "Kamu adalah high performer dan go-getter! Selalu exceed expectations, proaktif, dan ready untuk tanggung jawab lebih. Fast track to promotion!",
    traits: ["High achiever", "Proactive", "Ambitious", "Dedicated"],
    strengths: ["Top performer", "Leadership potential", "Company favorite"],
    weaknesses: ["Burnout risk", "Workaholic tendency"],
    tips: ["Jaga work-life balance", "Tidak semua beban harus dipikul sendiri"],
  },
  B: {
    type: "B",
    title: "Karyawan Solid",
    emoji: "🎯",
    description: "Kamu adalah karyawan yang reliable dan consistent! Kerjaan bagus, professional, dan bisa diandalkan. The backbone of any team.",
    traits: ["Reliable", "Professional", "Consistent", "Team player"],
    strengths: ["Dependable", "Quality work", "Good colleague"],
    weaknesses: ["Might not stand out", "Could be more proactive"],
    tips: ["Show initiative lebih", "Your steady contribution is valuable"],
  },
  C: {
    type: "C",
    title: "Karyawan Balance",
    emoji: "⚖️",
    description: "Kamu prioritize work-life balance! Kerja cukup untuk fulfill responsibility tapi tidak over-invest. Life outside work sama pentingnya.",
    traits: ["Balanced", "Boundary setter", "Life-focused", "Steady"],
    strengths: ["Healthy boundaries", "Not stressed", "Sustainable pace"],
    weaknesses: ["Might miss growth opportunities", "Could be seen as not ambitious"],
    tips: ["Balance is good, but occasional extra mile opens doors"],
  },
  D: {
    type: "D",
    title: "Karyawan Independent",
    emoji: "🦅",
    description: "Kamu kerja dengan cara sendiri! Tidak suka micromanagement, cari efficiency, dan punya mindset sendiri. Mungkin punya side hustle juga.",
    traits: ["Independent", "Efficient", "Own agenda", "Entrepreneurial"],
    strengths: ["Self-directed", "Creative solutions", "Multitasker"],
    weaknesses: ["Might clash with traditional management", "Loyalty questioned"],
    tips: ["Align goals dengan company", "Show value dengan cara yang visible"],
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
