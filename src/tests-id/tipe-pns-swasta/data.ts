// Tes Lebih Cocok PNS atau Swasta?
// Temukan jalur karir yang paling sesuai dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Prioritas utama kamu dalam bekerja...",
    options: [
      { text: "Stabilitas dan keamanan jangka panjang", type: "A" },
      { text: "Gaji tinggi dan bonus besar", type: "B" },
      { text: "Pengembangan skill dan karir cepat", type: "C" },
      { text: "Fleksibilitas dan kebebasan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tentang jam kerja yang ideal...",
    options: [
      { text: "Jam kerja tetap dan teratur", type: "A" },
      { text: "Panjang tapi dengan kompensasi sepadan", type: "B" },
      { text: "Dinamis sesuai project dan target", type: "C" },
      { text: "Fleksibel, yang penting hasil tercapai", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Soal risiko dalam karir...",
    options: [
      { text: "Hindari risiko, pilih yang pasti", type: "A" },
      { text: "Berani ambil risiko untuk return besar", type: "B" },
      { text: "Calculated risk sesuai kemampuan", type: "C" },
      { text: "High risk high reward, why not", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pension dan jaminan hari tua...",
    options: [
      { text: "Sangat penting, harus terjamin", type: "A" },
      { text: "Penting tapi bisa atur sendiri", type: "B" },
      { text: "Fokus sekarang dulu, nanti dipikirkan", type: "C" },
      { text: "Tidak terlalu mikirin, YOLO", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Birokrasi dan prosedur kerja...",
    options: [
      { text: "Tidak masalah, sudah terbiasa", type: "A" },
      { text: "Agak ribet tapi bisa diikuti", type: "B" },
      { text: "Prefer yang lebih streamlined", type: "C" },
      { text: "Hate bureaucracy, mau kebebasan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Soal promosi dan jenjang karir...",
    options: [
      { text: "Sabar menunggu sesuai masa kerja", type: "A" },
      { text: "Agresif kejar promosi dan posisi", type: "B" },
      { text: "Performance based, yang bagus naik", type: "C" },
      { text: "Tidak terlalu penting, yang penting happy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lingkungan kerja yang disukai...",
    options: [
      { text: "Formal dan terstruktur", type: "A" },
      { text: "Kompetitif dan fast-paced", type: "B" },
      { text: "Kolaboratif dan inovatif", type: "C" },
      { text: "Casual dan santai", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tentang PHK dan job security...",
    options: [
      { text: "Takut banget, mau yang secure", type: "A" },
      { text: "Concern tapi confident dengan skill", type: "B" },
      { text: "Siap pivot kalau perlu", type: "C" },
      { text: "Life goes on, bisa cari lain", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Fasilitas kerja yang paling penting...",
    options: [
      { text: "Tunjangan kesehatan dan pensiun", type: "A" },
      { text: "Bonus dan insentif tinggi", type: "B" },
      { text: "Training dan development program", type: "C" },
      { text: "Remote work dan flextime", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Orangtua kamu soal karir anak...",
    options: [
      { text: "Strongly prefer PNS atau BUMN", type: "A" },
      { text: "Support apapun asal sukses", type: "B" },
      { text: "Terserah anak, yang penting happy", type: "C" },
      { text: "Encourage entrepreneurship", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau harus pilih: gaji lebih vs work-life balance...",
    options: [
      { text: "Work-life balance, waktu untuk keluarga", type: "A" },
      { text: "Gaji lebih, sacrifice sementara", type: "B" },
      { text: "Cari yang balance keduanya", type: "C" },
      { text: "Freedom dan passion lebih penting", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Dalam 10 tahun ke depan, kamu membayangkan...",
    options: [
      { text: "Posisi established dan stabil", type: "A" },
      { text: "Jabatan tinggi di perusahaan besar", type: "B" },
      { text: "Expert di bidang tertentu", type: "C" },
      { text: "Punya bisnis atau kerja sendiri", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tim PNS / BUMN",
    emoji: "🏛️",
    description: "Kamu cocok untuk jalur pegawai negeri atau BUMN! Menghargai stabilitas, keamanan kerja, dan jenjang karir yang jelas. Work-life balance dan jaminan masa depan adalah prioritas.",
    traits: ["Stabilitas", "Security seeker", "Patient", "Family oriented"],
    strengths: ["Long-term planner", "Reliable", "Consistent", "Risk averse"],
    weaknesses: ["Kurang adventurous", "Bisa terjebak comfort zone"],
    tips: ["Tetap upgrade skill", "PNS zaman now juga butuh inovasi"],
  },
  B: {
    type: "B",
    title: "Tim Corporate Swasta",
    emoji: "🏢",
    description: "Kamu fit untuk dunia korporat swasta! Ambisius, target oriented, dan tidak takut kompetisi. Gaji tinggi dan jenjang karir cepat adalah goals.",
    traits: ["Ambisius", "Competitive", "Target driven", "Career focused"],
    strengths: ["High achiever", "Result oriented", "Fast learner", "Professional"],
    weaknesses: ["Workaholic tendency", "High stress tolerance needed"],
    tips: ["Jaga work-life balance", "Network is important"],
  },
  C: {
    type: "C",
    title: "Tim Startup / Tech",
    emoji: "🚀",
    description: "Kamu cocok untuk dunia startup atau tech company! Suka challenge, inovasi, dan growth mindset. Performance based dan environment dinamis adalah comfort zone-mu.",
    traits: ["Inovatif", "Adaptable", "Growth mindset", "Tech savvy"],
    strengths: ["Quick learner", "Flexible", "Problem solver", "Creative"],
    weaknesses: ["Kurang stability", "High uncertainty"],
    tips: ["Bangun portfolio dan skill", "Be ready for pivots"],
  },
  D: {
    type: "D",
    title: "Tim Entrepreneur / Freelance",
    emoji: "💼",
    description: "Kamu lebih cocok jadi bos sendiri! Tidak suka diatur, value kebebasan, dan punya jiwa entrepreneur. Freelance atau bangun bisnis sendiri adalah calling-mu.",
    traits: ["Independent", "Freedom seeker", "Risk taker", "Self-starter"],
    strengths: ["Creative", "Self-motivated", "Flexible", "Visionary"],
    weaknesses: ["Unstable income", "All responsibility on you"],
    tips: ["Bangun financial safety net", "Learn business fundamentals"],
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
