// Tes Kecerdasan Emosi (EQ) Kamu
// Seberapa baik kamu mengenali dan mengelola emosi?

export const questions = [
  {
    id: 1,
    question: "Saat kamu merasa marah...",
    options: [
      { text: "Sadar dan bisa kontrol sebelum meledak", type: "A" },
      { text: "Butuh waktu untuk menenangkan diri", type: "B" },
      { text: "Kadang meledak tapi cepat reda", type: "C" },
      { text: "Susah kontrol, sering menyesal kemudian", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat teman terlihat sedih tapi bilang 'tidak apa-apa'...",
    options: [
      { text: "Bisa sense ada yang salah dan offer support", type: "A" },
      { text: "Tanya sekali lagi apakah benar okay", type: "B" },
      { text: "Percaya dan tidak push lebih lanjut", type: "C" },
      { text: "Tidak terlalu notice perubahan mood", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu handle kritik atau feedback negatif...",
    options: [
      { text: "Terima dengan objektif, ambil yang bermanfaat", type: "A" },
      { text: "Awalnya sakit tapi bisa proses kemudian", type: "B" },
      { text: "Defensif dulu baru bisa menerima", type: "C" },
      { text: "Sangat terpengaruh dan sulit move on", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat situasi tidak sesuai rencana...",
    options: [
      { text: "Adaptasi dan cari solusi alternatif", type: "A" },
      { text: "Frustrated tapi bisa recover", type: "B" },
      { text: "Panik dulu baru bisa think clearly", type: "C" },
      { text: "Breakdown dan butuh waktu lama untuk bangkit", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kemampuanmu membaca suasana ruangan...",
    options: [
      { text: "Sangat peka, bisa sense tension atau mood", type: "A" },
      { text: "Cukup peka kalau obvious", type: "B" },
      { text: "Kadang notice, kadang miss", type: "C" },
      { text: "Kurang peka, sering kaget", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat harus menyampaikan berita buruk ke orang lain...",
    options: [
      { text: "Bisa deliver dengan empati dan tepat", type: "A" },
      { text: "Persiapkan kata-kata dengan hati-hati", type: "B" },
      { text: "Langsung aja, biar cepat selesai", type: "C" },
      { text: "Hindari dan delay sebisa mungkin", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kamu handle stress...",
    options: [
      { text: "Punya coping mechanism yang sehat", type: "A" },
      { text: "Tergantung level stress-nya", type: "B" },
      { text: "Struggle tapi eventually cope", type: "C" },
      { text: "Sering overwhelmed dan tidak tau harus apa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dalam konflik dengan orang lain...",
    options: [
      { text: "Bisa lihat dari perspektif mereka juga", type: "A" },
      { text: "Coba understand tapi tetap pegang pendapat", type: "B" },
      { text: "Fokus ke sudut pandang sendiri dulu", type: "C" },
      { text: "Susah see the other side", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat melihat orang lain sukses...",
    options: [
      { text: "Genuinely happy dan inspired", type: "A" },
      { text: "Happy tapi ada sedikit comparison", type: "B" },
      { text: "Mixed feelings, kadang insecure", type: "C" },
      { text: "Cenderung iri atau tidak nyaman", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kemampuanmu memotivasi diri sendiri...",
    options: [
      { text: "Bisa self-motivate dengan baik", type: "A" },
      { text: "Butuh trigger tapi bisa", type: "B" },
      { text: "Tergantung mood dan situasi", type: "C" },
      { text: "Sering butuh external motivation", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat beda pendapat dengan orang yang lebih senior...",
    options: [
      { text: "Bisa sampaikan dengan assertive dan sopan", type: "A" },
      { text: "Sampaikan tapi dengan hati-hati", type: "B" },
      { text: "Simpan sendiri, tidak berani speak up", type: "C" },
      { text: "Ikut aja meski tidak setuju", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Seberapa baik kamu mengenal emosi dirimu sendiri?",
    options: [
      { text: "Sangat baik, aware dengan perasaan sendiri", type: "A" },
      { text: "Cukup baik, most of the time", type: "B" },
      { text: "Kadang bingung dengan perasaan sendiri", type: "C" },
      { text: "Kurang connected dengan emosi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "EQ Tinggi",
    emoji: "🌟",
    description: "Kamu memiliki kecerdasan emosional yang tinggi! Sangat aware dengan perasaan sendiri dan orang lain. Kemampuan mengelola emosi dan situasi sosial adalah kekuatanmu.",
    traits: ["Self-aware", "Empathetic", "Regulated", "Socially skilled"],
    strengths: ["Great relationships", "Handle stress well", "Good leader"],
    weaknesses: ["Bisa terlalu banyak absorb emosi orang", "Over-responsible for others"],
    tips: ["Jaga boundaries", "Self-care juga penting"],
  },
  B: {
    type: "B",
    title: "EQ Baik",
    emoji: "💪",
    description: "Kamu memiliki kecerdasan emosional yang baik! Ada awareness dan kemampuan mengelola emosi, meski kadang masih struggle di situasi tertentu.",
    traits: ["Aware", "Developing", "Considerate", "Balanced"],
    strengths: ["Can recover from setbacks", "Growing emotional skills", "Caring"],
    weaknesses: ["Masih bisa overwhelmed", "Some blind spots"],
    tips: ["Keep developing EQ", "Practice in challenging situations"],
  },
  C: {
    type: "C",
    title: "EQ Developing",
    emoji: "🌱",
    description: "Kamu dalam proses developing kecerdasan emosional! Ada potensi besar tapi masih perlu latihan untuk lebih aware dan manage emosi dengan baik.",
    traits: ["Growing", "Reactive", "Learning", "Honest"],
    strengths: ["Authentic reactions", "Room for growth", "Self-honest"],
    weaknesses: ["Can be reactive", "Sometimes miss social cues"],
    tips: ["Practice mindfulness", "Ask for feedback", "Read more about EQ"],
  },
  D: {
    type: "D",
    title: "EQ Perlu Ditingkatkan",
    emoji: "📚",
    description: "Kamu memiliki ruang besar untuk meningkatkan kecerdasan emosional! Dengan latihan dan awareness, kamu bisa develop skill ini untuk kehidupan yang lebih baik.",
    traits: ["Potential", "Unaware", "Needs development", "Honest"],
    strengths: ["Starting point for growth", "Self-awareness of need"],
    weaknesses: ["Struggles with emotions", "Difficulty with relationships"],
    tips: ["Journaling helps", "Therapy bisa sangat bermanfaat", "Start with self-awareness"],
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
