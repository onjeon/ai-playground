// Apa yang Memotivasimu?
// Tes ini mengungkap sumber motivasi utama dalam hidupmu!

export const questions = [
  {
    id: 1,
    question: "Apa yang membuatmu bangun pagi dengan semangat?",
    options: [
      { text: "Ada target atau goal yang ingin dicapai", type: "A" },
      { text: "Bertemu dan berinteraksi dengan orang-orang", type: "B" },
      { text: "Melakukan hal yang aku suka/passion", type: "C" },
      { text: "Rasa tanggung jawab dan komitmen", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat mengerjakan tugas, kamu paling termotivasi ketika...",
    options: [
      { text: "Ada reward atau pengakuan di akhir", type: "A" },
      { text: "Bekerja dalam tim yang solid", type: "B" },
      { text: "Tugasnya sesuai minat dan passion", type: "C" },
      { text: "Sudah berkomitmen dan harus diselesaikan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa yang membuatmu bertahan di saat sulit?",
    options: [
      { text: "Visi besar yang ingin dicapai", type: "A" },
      { text: "Dukungan dari orang-orang tersayang", type: "B" },
      { text: "Cinta terhadap apa yang aku lakukan", type: "C" },
      { text: "Rasa tanggung jawab terhadap janji", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Prestasi atau pencapaian yang paling membanggakan bagimu?",
    options: [
      { text: "Mencapai target besar (karir, finansial)", type: "A" },
      { text: "Membantu atau menginspirasi orang lain", type: "B" },
      { text: "Menguasai skill atau hobi dengan baik", type: "C" },
      { text: "Konsisten dan reliable dalam komitmen", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Feedback yang paling memotivasimu?",
    options: [
      { text: "Pengakuan atas prestasi dan hasil kerja", type: "A" },
      { text: "Apresiasi atas kontribusi ke tim/komunitas", type: "B" },
      { text: "Pujian atas kreativitas dan passion", type: "C" },
      { text: "Dihargai karena bisa diandalkan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau bisa memilih, kamu lebih suka...",
    options: [
      { text: "Pekerjaan dengan gaji tinggi dan jenjang karir", type: "A" },
      { text: "Pekerjaan yang banyak berinteraksi dengan orang", type: "B" },
      { text: "Pekerjaan sesuai passion walau gaji biasa", type: "C" },
      { text: "Pekerjaan yang stabil dan jelas tanggung jawabnya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa yang membuatmu kehilangan motivasi?",
    options: [
      { text: "Tidak ada progress atau hasil nyata", type: "A" },
      { text: "Bekerja sendirian tanpa dukungan", type: "B" },
      { text: "Melakukan hal yang tidak disukai", type: "C" },
      { text: "Situasi yang tidak jelas dan ambigu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quote motivasi yang paling relate?",
    options: [
      { text: "'Dream big, work hard, achieve more'", type: "A" },
      { text: "'Alone we can do so little, together we can do so much'", type: "B" },
      { text: "'Do what you love, love what you do'", type: "C" },
      { text: "'A promise made is a debt unpaid'", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu memotivasi diri saat sedang down?",
    options: [
      { text: "Ingat goal dan visualisasi sukses", type: "A" },
      { text: "Bicara dengan orang yang supportive", type: "B" },
      { text: "Lakukan hal yang disuka untuk recharge", type: "C" },
      { text: "Ingat komitmen dan tanggung jawab", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa yang kamu cari dalam sebuah proyek atau pekerjaan?",
    options: [
      { text: "Peluang untuk grow dan achieve", type: "A" },
      { text: "Tim yang supportive dan kolaboratif", type: "B" },
      { text: "Ruang untuk kreativitas dan eksplorasi", type: "C" },
      { text: "Struktur dan ekspektasi yang jelas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sumber energi utamamu adalah...",
    options: [
      { text: "Ambisi dan mimpi besar", type: "A" },
      { text: "Koneksi dan hubungan dengan orang", type: "B" },
      { text: "Passion dan hal yang dicintai", type: "C" },
      { text: "Sense of duty dan purpose", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jika harus memilih satu kata untuk motivasimu, itu adalah...",
    options: [
      { text: "Achievement (Pencapaian)", type: "A" },
      { text: "Connection (Koneksi)", type: "B" },
      { text: "Passion (Gairah)", type: "C" },
      { text: "Duty (Kewajiban)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Achievement-Driven",
    emoji: "🏆",
    description: "Kamu dimotivasi oleh pencapaian dan hasil! Goals, targets, dan success adalah bahan bakarmu. Kamu selalu ingin progress dan mencapai lebih.",
    traits: ["Goal-oriented", "Ambisius", "Result-driven", "Competitive"],
    strengths: ["High achiever", "Produktif", "Focused"],
    weaknesses: ["Bisa burnout", "Kurang appreciate journey"],
    tips: ["Celebrate small wins", "Process juga penting, bukan cuma hasil"],
  },
  B: {
    type: "B",
    title: "Connection-Driven",
    emoji: "👥",
    description: "Kamu dimotivasi oleh hubungan dan koneksi dengan orang lain! Kolaborasi, tim, dan komunitas adalah sumber energimu. Kamu berkembang bersama orang lain.",
    traits: ["People-oriented", "Kolaboratif", "Supportive", "Team player"],
    strengths: ["Strong relationships", "Good collaborator", "Inspirational"],
    weaknesses: ["Bergantung pada orang lain", "Susah kerja sendiri"],
    tips: ["Belajar juga self-motivate", "Tidak selalu ada orang untuk support"],
  },
  C: {
    type: "C",
    title: "Passion-Driven",
    emoji: "🔥",
    description: "Kamu dimotivasi oleh passion dan hal-hal yang kamu cintai! Ketika melakukan sesuatu yang disuka, energimu tak terbatas. Kamu hidup untuk passion.",
    traits: ["Passionate", "Kreatif", "Authentic", "Intrinsically motivated"],
    strengths: ["Deep engagement", "Kreativitas tinggi", "Genuine enthusiasm"],
    weaknesses: ["Sulit dengan tugas yang tidak disukai", "Bisa tidak realistis"],
    tips: ["Kadang harus lakukan yang tidak disuka juga", "Find passion in necessary tasks"],
  },
  D: {
    type: "D",
    title: "Duty-Driven",
    emoji: "⚓",
    description: "Kamu dimotivasi oleh rasa tanggung jawab dan komitmen! Janji adalah hutang, dan kamu tidak bisa mengecewakan. Reliable dan consistent adalah trademark-mu.",
    traits: ["Responsible", "Reliable", "Consistent", "Principled"],
    strengths: ["Bisa diandalkan", "Konsisten", "Strong integrity"],
    weaknesses: ["Bisa merasa terbebani", "Kurang spontan"],
    tips: ["Jangan terlalu keras sama diri sendiri", "Istirahat juga tanggung jawab ke diri sendiri"],
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
