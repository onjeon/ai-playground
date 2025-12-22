// Tes Tipe Kamu dalam Kerja Tim
// Temukan peran alami kamu dalam tim!

export const questions = [
  {
    id: 1,
    question: "Saat dapat project kelompok, hal pertama yang kamu lakukan...",
    options: [
      { text: "Langsung bagi tugas dan buat timeline", type: "A" },
      { text: "Riset dulu tentang project-nya", type: "B" },
      { text: "Kumpulkan tim dan diskusi bareng", type: "C" },
      { text: "Tanya detail tugasnya dan siap bantu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di grup project, kamu paling sering...",
    options: [
      { text: "Mengarahkan dan memastikan semua on track", type: "A" },
      { text: "Kasih ide-ide kreatif dan solusi", type: "B" },
      { text: "Jaga hubungan baik antar anggota", type: "C" },
      { text: "Kerjakan tugas dengan teliti dan tepat waktu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada konflik dalam tim...",
    options: [
      { text: "Ambil keputusan tegas untuk menyelesaikan", type: "A" },
      { text: "Analisis masalahnya dan cari win-win solution", type: "B" },
      { text: "Jadi mediator dan dengarkan semua pihak", type: "C" },
      { text: "Ikut arus dan hindari drama", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau deadline mepet dan tim panik...",
    options: [
      { text: "Tenangkan tim dan reorganisasi prioritas", type: "A" },
      { text: "Brainstorm cara lebih efisien", type: "B" },
      { text: "Support moral tim dan bagi beban", type: "C" },
      { text: "Fokus kerja keras menyelesaikan bagianku", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam rapat tim, kamu biasanya...",
    options: [
      { text: "Memimpin agenda dan diskusi", type: "A" },
      { text: "Presentasi ide dan konsep baru", type: "B" },
      { text: "Pastikan semua orang bisa berkontribusi", type: "C" },
      { text: "Catat poin penting dan follow up", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat anggota tim tidak perform...",
    options: [
      { text: "Tegur langsung dan minta perbaikan", type: "A" },
      { text: "Cari tahu kenapa dan bantu carikan solusi", type: "B" },
      { text: "Bicara baik-baik dan support mereka", type: "C" },
      { text: "Cover kerjaan mereka tanpa banyak komplain", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Skill yang paling kamu banggakan dalam tim...",
    options: [
      { text: "Kemampuan memimpin dan mengambil keputusan", type: "A" },
      { text: "Kreativitas dan problem solving", type: "B" },
      { text: "Kemampuan komunikasi dan empati", type: "C" },
      { text: "Ketelitian dan reliability", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat brainstorming ide...",
    options: [
      { text: "Evaluasi ide mana yang paling feasible", type: "A" },
      { text: "Lempar banyak ide out of the box", type: "B" },
      { text: "Build on ide orang lain dan combine", type: "C" },
      { text: "Dengarkan dulu, baru kasih masukan praktis", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu berkontribusi di project...",
    options: [
      { text: "Koordinasi dan pastikan semua berjalan lancar", type: "A" },
      { text: "Bawa perspektif baru dan inovasi", type: "B" },
      { text: "Jaga team spirit dan motivasi", type: "C" },
      { text: "Eksekusi tugas dengan kualitas tinggi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat project sukses, kamu merasa...",
    options: [
      { text: "Bangga karena bisa lead tim dengan baik", type: "A" },
      { text: "Senang ide-ideku diterima dan berhasil", type: "B" },
      { text: "Happy karena tim bisa kerja sama dengan baik", type: "C" },
      { text: "Lega karena tugasku selesai dengan baik", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Frustasi terbesarmu dalam kerja tim...",
    options: [
      { text: "Anggota tim tidak disiplin dan lambat", type: "A" },
      { text: "Ide bagus tidak diterima atau didengar", type: "B" },
      { text: "Ada konflik yang merusak keharmonisan tim", type: "C" },
      { text: "Instruksi tidak jelas atau berubah-ubah", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Posisi ideal kamu dalam tim...",
    options: [
      { text: "Ketua/Project Manager", type: "A" },
      { text: "Creative Director/Ideator", type: "B" },
      { text: "Team Coordinator/HR", type: "C" },
      { text: "Quality Control/Executor", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Leader",
    emoji: "👑",
    description: "Kamu adalah pemimpin alami dalam tim! Kemampuanmu mengorganisir, mengambil keputusan, dan mengarahkan tim sangat kuat. Orang-orang melihatmu sebagai figur yang bisa diandalkan.",
    traits: ["Tegas", "Visioner", "Organized", "Decisive"],
    strengths: ["Natural leader", "Good at delegating", "Calm under pressure"],
    weaknesses: ["Kadang terlalu controlling", "Perlu belajar lebih fleksibel"],
    tips: ["Dengarkan input tim lebih banyak", "Beri ruang orang lain untuk berkembang"],
  },
  B: {
    type: "B",
    title: "The Innovator",
    emoji: "💡",
    description: "Kamu adalah otak kreatif tim! Selalu punya ide segar dan solusi out of the box. Tim membutuhkanmu untuk breakthrough dan perspektif baru.",
    traits: ["Kreatif", "Visioner", "Problem solver", "Out of the box"],
    strengths: ["Ide original", "Adaptable thinking", "Innovation driver"],
    weaknesses: ["Kadang ide terlalu ambisius", "Eksekusi perlu ditingkatkan"],
    tips: ["Balance ide dengan feasibility", "Kolaborasi dengan executor untuk implementasi"],
  },
  C: {
    type: "C",
    title: "The Harmonizer",
    emoji: "🤝",
    description: "Kamu adalah perekat tim! Kemampuanmu menjaga keharmonisan dan hubungan antar anggota sangat berharga. Tim merasa nyaman dan supported dengan kehadiranmu.",
    traits: ["Empatik", "Communicative", "Supportive", "Mediator"],
    strengths: ["Team player", "Conflict resolver", "Morale booster"],
    weaknesses: ["Kadang terlalu menghindari konflik", "Perlu lebih tegas"],
    tips: ["Jangan takut menyampaikan pendapat", "Konflik sehat itu perlu kadang"],
  },
  D: {
    type: "D",
    title: "The Executor",
    emoji: "✅",
    description: "Kamu adalah tulang punggung tim! Reliable, teliti, dan selalu deliver dengan kualitas tinggi. Tanpa orang sepertimu, ide-ide bagus tidak akan pernah terwujud.",
    traits: ["Reliable", "Teliti", "Consistent", "Hardworking"],
    strengths: ["High quality work", "Dependable", "Detail oriented"],
    weaknesses: ["Kadang kurang vokal", "Perlu lebih proaktif"],
    tips: ["Berani ambil inisiatif lebih", "Suarakan ide-idemu juga"],
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
