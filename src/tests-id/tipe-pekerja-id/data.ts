// Tipe Pekerja Kamu
// Tes ini mengungkap gaya dan tipe kerja kamu di kantor!

export const questions = [
  {
    id: 1,
    question: "Saat sampai di kantor, hal pertama yang kamu lakukan...",
    options: [
      { text: "Cek email dan planning hari ini", type: "A" },
      { text: "Ngobrol dulu sama rekan kerja, warm up", type: "B" },
      { text: "Langsung gas kerja, biar cepat selesai", type: "C" },
      { text: "Bikin kopi dulu, baru bisa mikir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Deadline mepet, response kamu...",
    options: [
      { text: "Tenang, sudah diantisipasi dari awal", type: "A" },
      { text: "Minta bantuan tim, kerja bareng", type: "B" },
      { text: "Lembur sendirian sampai beres", type: "C" },
      { text: "Panik dulu, baru bisa kerja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat meeting yang membosankan...",
    options: [
      { text: "Tetap fokus dan catat poin penting", type: "A" },
      { text: "Chat sama temen sebelah, bikin rame", type: "B" },
      { text: "Multitasking, kerjain hal lain", type: "C" },
      { text: "Mengantuk tapi berusaha survive", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jam makan siang, kamu biasanya...",
    options: [
      { text: "Makan di meja sambil kerja", type: "A" },
      { text: "Makan bareng rekan kerja, bonding time", type: "B" },
      { text: "Keluar cari makan sendiri, me-time", type: "C" },
      { text: "Skip atau makan cepat, lanjut tidur siang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ada project baru yang challenging...",
    options: [
      { text: "Riset dulu, bikin plan detail", type: "A" },
      { text: "Brainstorm bareng tim, ide kolektif", type: "B" },
      { text: "Langsung eksekusi, learning by doing", type: "C" },
      { text: "Cari referensi dari project serupa dulu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Hubungan dengan atasan...",
    options: [
      { text: "Profesional, laporan rutin dan clear", type: "A" },
      { text: "Dekat, sering ngobrol casual juga", type: "B" },
      { text: "Minimal interaksi, fokus kerja aja", type: "C" },
      { text: "Tergantung mood bos dan situasi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Work from home vs work from office...",
    options: [
      { text: "WFO, lebih produktif dengan routine", type: "A" },
      { text: "WFO, kangen ketemu orang-orang", type: "B" },
      { text: "WFH, lebih fokus tanpa distraction", type: "C" },
      { text: "Hybrid, best of both worlds", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau ada konflik dengan rekan kerja...",
    options: [
      { text: "Komunikasikan langsung dan profesional", type: "A" },
      { text: "Ajak ngobrol santai di luar kantor", type: "B" },
      { text: "Diam dan fokus kerja aja", type: "C" },
      { text: "Curhat ke rekan lain dulu, minta perspektif", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Achievement di kerjaan...",
    options: [
      { text: "Target KPI tercapai adalah segalanya", type: "A" },
      { text: "Diakui dan diapresiasi tim itu penting", type: "B" },
      { text: "Personal growth dan skill baru", type: "C" },
      { text: "Yang penting gaji masuk dan aman", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Akhir bulan dan lelah dengan kerjaan...",
    options: [
      { text: "Review progress dan plan bulan depan", type: "A" },
      { text: "Quality time sama keluarga/teman", type: "B" },
      { text: "Healing sendirian, recharge energi", type: "C" },
      { text: "Scroll HP sampai tertidur", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Pekerja Profesional",
    emoji: "💼",
    description: "Kamu adalah pekerja yang super profesional dan terstruktur! Planning matang, eksekusi rapi, dan selalu on top of things. Tipe karyawan idaman!",
    traits: ["Profesional", "Terstruktur", "Reliable", "Goal-oriented"],
    strengths: ["Trusted by management", "Consistent performer", "Good planning"],
    weaknesses: ["Bisa terlalu kaku", "Kadang kurang spontan"],
    tips: ["Sesekali relax dan have fun", "Networking juga penting untuk karir"],
  },
  B: {
    type: "B",
    title: "Si Team Player",
    emoji: "🤝",
    description: "Kamu adalah team player sejati! Collaboration adalah kekuatanmu, dan kamu membuat lingkungan kerja jadi lebih menyenangkan untuk semua.",
    traits: ["Collaborative", "Friendly", "Supportive", "Social"],
    strengths: ["Disukai rekan kerja", "Good communicator", "Team bonding expert"],
    weaknesses: ["Kadang terlalu fokus social", "Bisa gossip"],
    tips: ["Balance antara social dan fokus kerja", "Gunakan networking skillmu untuk karir"],
  },
  C: {
    type: "C",
    title: "Si Individual Contributor",
    emoji: "🎯",
    description: "Kamu adalah independent worker yang fokus! Lebih suka kerja sendirian dan deliver hasil yang solid. Deep work adalah kekuatanmu.",
    traits: ["Independent", "Focused", "Self-driven", "Productive"],
    strengths: ["High quality work", "Self-motivated", "No drama"],
    weaknesses: ["Kurang team visibility", "Bisa terlihat anti-social"],
    tips: ["Sesekali kolaborasi juga bagus", "Visibility penting untuk promosi"],
  },
  D: {
    type: "D",
    title: "Si Survivor Office",
    emoji: "😴",
    description: "Kamu adalah survivor di jungle corporate! Tidak terlalu ambitious, tapi juga tidak mau ribet. Yang penting survive dan work-life balance.",
    traits: ["Laid-back", "Survivor", "Balanced", "Low stress"],
    strengths: ["Mental health terjaga", "Tidak burn out", "Realistic expectations"],
    weaknesses: ["Kurang ambitious", "Bisa stagnan"],
    tips: ["Sesekali challenge diri sendiri", "Karir butuh effort juga"],
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
