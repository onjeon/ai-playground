// Pola Belajar Kamu
// Temukan gaya belajar yang paling efektif untukmu!

export const questions = [
  {
    id: 1,
    question: "Cara terbaik kamu memahami materi baru...",
    options: [
      { text: "Baca dan catat dengan detail", type: "A" },
      { text: "Dengarkan penjelasan atau podcast", type: "B" },
      { text: "Praktik langsung, learning by doing", type: "C" },
      { text: "Diskusi dan tanya jawab", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat belajar untuk ujian...",
    options: [
      { text: "Bikin rangkuman dan mind map", type: "A" },
      { text: "Rekam materi, dengerin berulang", type: "B" },
      { text: "Kerjakan soal-soal latihan", type: "C" },
      { text: "Belajar kelompok, diskusi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Waktu belajar paling produktif...",
    options: [
      { text: "Pagi hari, fresh dan fokus", type: "A" },
      { text: "Siang, setelah otak warm up", type: "B" },
      { text: "Sore, mood sudah stabil", type: "C" },
      { text: "Malam, sunyi dan tenang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Environment belajar ideal...",
    options: [
      { text: "Tempat sepi, minim distraksi", type: "A" },
      { text: "Ada background music atau white noise", type: "B" },
      { text: "Di mana saja, asal nyaman", type: "C" },
      { text: "Cafe atau tempat dengan orang lain", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat materi susah dipahami...",
    options: [
      { text: "Baca ulang dari berbagai sumber", type: "A" },
      { text: "Cari video atau audio explanation", type: "B" },
      { text: "Coba praktikkan langsung", type: "C" },
      { text: "Tanya teman atau cari study group", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Instruksi yang paling mudah diikuti...",
    options: [
      { text: "Written step-by-step guide", type: "A" },
      { text: "Verbal explanation", type: "B" },
      { text: "Demo langsung yang bisa ditiru", type: "C" },
      { text: "Contoh dari orang lain yang sudah berhasil", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mengingat informasi baru...",
    options: [
      { text: "Tulis ulang atau visualisasikan", type: "A" },
      { text: "Ulang-ulang dalam kepala atau ucapkan", type: "B" },
      { text: "Hubungkan dengan pengalaman praktis", type: "C" },
      { text: "Diskusikan dengan orang lain", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Durasi belajar efektifmu...",
    options: [
      { text: "Long session dengan focus deep", type: "A" },
      { text: "Pomodoro, 25 menit lalu break", type: "B" },
      { text: "Flexible, sampai terasa cukup", type: "C" },
      { text: "Tergantung ada teman belajar atau tidak", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Materi yang paling gampang dipelajari...",
    options: [
      { text: "Yang ada textbook dan referensi jelas", type: "A" },
      { text: "Yang ada lecture atau podcast", type: "B" },
      { text: "Yang bisa langsung dipraktekkan", type: "C" },
      { text: "Yang bisa didiskusikan dan debat", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat presentasi, kamu lebih suka...",
    options: [
      { text: "Baca dari slide atau notes", type: "A" },
      { text: "Hafal dan jelaskan natural", type: "B" },
      { text: "Demo atau praktik langsung", type: "C" },
      { text: "Interaktif, tanya jawab dengan audience", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Motivasi belajar terbaik...",
    options: [
      { text: "Target dan goals yang jelas", type: "A" },
      { text: "Inspirasi dari success stories", type: "B" },
      { text: "Melihat progress nyata", type: "C" },
      { text: "Kompetisi sehat dengan peers", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Saat bosan belajar...",
    options: [
      { text: "Ganti metode atau sumber belajar", type: "A" },
      { text: "Break dulu, dengarkan musik", type: "B" },
      { text: "Coba praktik yang lebih fun", type: "C" },
      { text: "Ajak teman belajar bareng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Visual Learner",
    emoji: "👀",
    description: "Kamu adalah Visual Learner! Belajar paling efektif dengan melihat - membaca, diagram, mind map, dan visualisasi. Matamu adalah gerbang ilmu masuk ke otak. Catatan rapi adalah senjatamu!",
    traits: ["Organized", "Detail-oriented", "Visual thinker", "Structured"],
    strengths: ["Good note-taking", "Remember visual info", "Systematic"],
    weaknesses: ["Butuh materi visual", "Bisa terlalu dependent pada text"],
    tips: ["Gunakan warna dan diagram", "Video juga bisa membantu"],
  },
  B: {
    type: "B",
    title: "Auditory Learner",
    emoji: "👂",
    description: "Kamu adalah Auditory Learner! Belajar paling efektif dengan mendengar - lecture, podcast, diskusi. Telingamu adalah antena ilmu. Satu penjelasan yang baik bisa lebih dari seribu halaman buku!",
    traits: ["Good listener", "Verbal processor", "Musical", "Articulate"],
    strengths: ["Understand spoken info", "Good in discussions", "Remember conversations"],
    weaknesses: ["Butuh quiet environment", "Written instruction harder"],
    tips: ["Rekam lecture untuk diulang", "Explain ke diri sendiri out loud"],
  },
  C: {
    type: "C",
    title: "Kinesthetic Learner",
    emoji: "🖐️",
    description: "Kamu adalah Kinesthetic Learner! Belajar paling efektif dengan praktik langsung - hands-on experience, trial and error. Tanganmu adalah guru terbaik. Learning by doing adalah mantra hidupmu!",
    traits: ["Hands-on", "Practical", "Active", "Experiential"],
    strengths: ["Quick skill acquisition", "Remember through doing", "Real-world application"],
    weaknesses: ["Sulit dengan theory heavy", "Butuh movement"],
    tips: ["Cari project based learning", "Take breaks untuk bergerak"],
  },
  D: {
    type: "D",
    title: "Social Learner",
    emoji: "👥",
    description: "Kamu adalah Social Learner! Belajar paling efektif dalam interaksi - diskusi, study group, peer teaching. Orang lain adalah mirror untuk pemahaman. Together everyone achieves more!",
    traits: ["Collaborative", "Communicative", "Team player", "Empathetic"],
    strengths: ["Learn through teaching", "Networking while learning", "Multiple perspectives"],
    weaknesses: ["Dependent pada orang lain", "Solo studying harder"],
    tips: ["Balance dengan individual study", "Online community juga counts"],
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
