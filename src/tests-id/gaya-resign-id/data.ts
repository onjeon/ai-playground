// Tes Gaya Resign Kamu
// Bagaimana style kamu saat mengundurkan diri dari pekerjaan?

export const questions = [
  {
    id: 1,
    question: "Alasan utama kamu akan resign...",
    options: [
      { text: "Sudah dapat offer yang lebih baik", type: "A" },
      { text: "Tidak ada growth atau development", type: "B" },
      { text: "Toxic environment atau bos", type: "C" },
      { text: "Burnout dan butuh istirahat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Persiapan sebelum resign...",
    options: [
      { text: "Sudah secure job baru dulu", type: "A" },
      { text: "Plan transisi yang rapi", type: "B" },
      { text: "Minimal prep, kalau sudah ga tahan ya resign", type: "C" },
      { text: "Tabungan emergency fund dulu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara menyampaikan resign ke atasan...",
    options: [
      { text: "Professional meeting, one-on-one", type: "A" },
      { text: "Surat resmi dengan notice period lengkap", type: "B" },
      { text: "Direct tapi singkat, no drama", type: "C" },
      { text: "Emotional, mungkin curhat juga", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Notice period yang kamu berikan...",
    options: [
      { text: "Standard sesuai kontrak, 1 bulan biasanya", type: "A" },
      { text: "Lebih dari standard untuk handover proper", type: "B" },
      { text: "Negosiasi agar bisa pergi lebih cepat", type: "C" },
      { text: "Minta resign langsung kalau urgent", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat counter offer dikasih...",
    options: [
      { text: "Consider serius kalau memang worth it", type: "A" },
      { text: "Tolak, sudah committed ke tempat baru", type: "B" },
      { text: "Pakai untuk nego di tempat baru", type: "C" },
      { text: "Bisa dipertimbangkan, tergantung", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Handover dan transisi...",
    options: [
      { text: "Dokumentasi lengkap dan training pengganti", type: "A" },
      { text: "Sesuai yang diminta, no more no less", type: "B" },
      { text: "Quick handover, yang penting point utama", type: "C" },
      { text: "Minimal, not my problem anymore", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Exit interview...",
    options: [
      { text: "Jujur dan constructive feedback", type: "A" },
      { text: "Diplomatic, keep bridges", type: "B" },
      { text: "Skip atau jawab seadanya", type: "C" },
      { text: "Vent semua yang selama ini dipendam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hubungan dengan ex-colleagues setelah resign...",
    options: [
      { text: "Keep in touch, networking penting", type: "A" },
      { text: "Selective, sama yang dekat aja", type: "B" },
      { text: "Move on, chapter baru", type: "C" },
      { text: "Depends on experience di sana", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Resign tanpa pekerjaan baru lined up...",
    options: [
      { text: "No way, too risky", type: "A" },
      { text: "Hanya kalau sudah unbearable", type: "B" },
      { text: "Pernah atau akan consider", type: "C" },
      { text: "Mental health lebih penting dari income", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Gosip atau drama saat resign period...",
    options: [
      { text: "Avoid completely, stay professional", type: "A" },
      { text: "Tidak ikut tapi dengerin aja", type: "B" },
      { text: "Mungkin sedikit vent ke teman dekat", type: "C" },
      { text: "Spill tea sebelum pergi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Berapa lama di satu company sebelum resign wajar...",
    options: [
      { text: "Minimal 2-3 tahun", type: "A" },
      { text: "1-2 tahun cukup", type: "B" },
      { text: "Tergantung situasi, bisa kurang setahun", type: "C" },
      { text: "Kapanpun tidak cocok, pergi aja", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Perasaan dominan saat resign...",
    options: [
      { text: "Mixed, sad tapi excited untuk yang baru", type: "A" },
      { text: "Relief karena sudah plan dengan baik", type: "B" },
      { text: "Lega banget, finally bebas", type: "C" },
      { text: "Nervous tentang masa depan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Resign Professional",
    emoji: "👔",
    description: "Kamu resign dengan cara yang sangat professional! Plan matang, notice period proper, handover lengkap, dan keep good relationships. Reputation adalah aset.",
    traits: ["Professional", "Calculated", "Respectful", "Bridge keeper"],
    strengths: ["Good reputation", "Strong network", "Smooth transition"],
    weaknesses: ["Kadang terlalu careful", "Miss opportunities kalau over-plan"],
    tips: ["Keep it up!", "Sometimes spontaneity juga okay"],
  },
  B: {
    type: "B",
    title: "Resign Terencana",
    emoji: "📋",
    description: "Kamu resign dengan planning yang baik! Ada timeline, ada backup plan, dan transisi yang teratur. Tidak impulsif dan selalu think ahead.",
    traits: ["Organized", "Strategic", "Thoughtful", "Prepared"],
    strengths: ["Minimal risk", "Clear exit strategy", "Responsible"],
    weaknesses: ["Might stay too long di bad situation", "Overthink sometimes"],
    tips: ["Trust your instincts too", "Plan is good but don't wait too long"],
  },
  C: {
    type: "C",
    title: "Resign Cepat",
    emoji: "🏃",
    description: "Kalau sudah tidak cocok, kamu tidak berlama-lama! Quick decision dan quick exit. Handover seadanya dan move on ke chapter baru ASAP.",
    traits: ["Decisive", "Quick mover", "No nonsense", "Forward looking"],
    strengths: ["Doesn't waste time", "Clear cut", "Fresh start quick"],
    weaknesses: ["Might burn bridges", "Incomplete handover"],
    tips: ["Little more professionalism helps", "Reputation is long term asset"],
  },
  D: {
    type: "D",
    title: "Resign Emosional",
    emoji: "💫",
    description: "Resign buat kamu adalah keputusan emosional! Bisa karena burnout, toxic situation, atau just need change. Mental health dan happiness adalah prioritas.",
    traits: ["Emotional", "Intuitive", "Self-care focused", "Impulsive sometimes"],
    strengths: ["Prioritizes wellbeing", "Honest dengan diri sendiri", "Brave to leave"],
    weaknesses: ["Might regret impulsive decisions", "Financial risk"],
    tips: ["Have backup plan", "Balance heart and head"],
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
