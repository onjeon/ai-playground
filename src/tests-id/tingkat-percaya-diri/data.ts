// Seberapa Percaya Diri Kamu?
// Tes ini mengukur tingkat kepercayaan diri dalam berbagai situasi!

export const questions = [
  {
    id: 1,
    question: "Saat harus presentasi di depan banyak orang, kamu...",
    options: [
      { text: "Excited! Kesempatan untuk shine", type: "A" },
      { text: "Nervous tapi bisa handle", type: "B" },
      { text: "Cemas dan butuh persiapan ekstra", type: "C" },
      { text: "Sangat takut, ingin menghindari", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat diminta pendapat dalam meeting, kamu...",
    options: [
      { text: "Langsung share dengan confident", type: "A" },
      { text: "Share setelah dipikir sebentar", type: "B" },
      { text: "Ragu-ragu, takut salah", type: "C" },
      { text: "Diam, lebih baik tidak berbicara", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bagaimana kamu menerima pujian?",
    options: [
      { text: "Terima dengan bangga, memang layak", type: "A" },
      { text: "Terima dengan senyum dan terima kasih", type: "B" },
      { text: "Agak tidak nyaman, deflect pujiannya", type: "C" },
      { text: "Tidak percaya, pasti basa-basi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat melihat cermin, pikiranmu...",
    options: [
      { text: "Looking good today!", type: "A" },
      { text: "Oke lah, bisa diterima", type: "B" },
      { text: "Fokus ke kekurangan yang ada", type: "C" },
      { text: "Tidak suka melihat cermin", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Membandingkan diri dengan orang lain, seberapa sering?",
    options: [
      { text: "Jarang, fokus ke journey sendiri", type: "A" },
      { text: "Kadang-kadang, tapi bisa kontrol", type: "B" },
      { text: "Sering, dan biasanya merasa kurang", type: "C" },
      { text: "Hampir selalu, dan selalu merasa inferior", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat gagal dalam sesuatu, kamu berpikir...",
    options: [
      { text: "It's okay, belajar dan coba lagi", type: "A" },
      { text: "Kecewa tapi bisa move on", type: "B" },
      { text: "Mungkin memang tidak mampu", type: "C" },
      { text: "Selalu gagal, memang tidak berbakat", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dalam interaksi sosial baru, kamu...",
    options: [
      { text: "Nyaman dan bisa memulai percakapan", type: "A" },
      { text: "Agak nervous tapi bisa adaptasi", type: "B" },
      { text: "Tidak nyaman dan cenderung diam", type: "C" },
      { text: "Sangat cemas, berusaha menghindari", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat seseorang tidak setuju denganmu, kamu...",
    options: [
      { text: "Tetap yakin dengan pendapatku", type: "A" },
      { text: "Pertimbangkan tapi tetap punya pendirian", type: "B" },
      { text: "Mulai ragu, mungkin aku salah", type: "C" },
      { text: "Langsung mengubah pendapat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Mencoba hal baru yang belum pernah dilakukan, kamu...",
    options: [
      { text: "Excited untuk challenge baru", type: "A" },
      { text: "Nervous tapi mau mencoba", type: "B" },
      { text: "Takut gagal di depan orang", type: "C" },
      { text: "Menghindari, lebih baik yang sudah bisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bagaimana kamu berbicara tentang diri sendiri?",
    options: [
      { text: "Positif dan menghargai diri sendiri", type: "A" },
      { text: "Realistis, ada plus minusnya", type: "B" },
      { text: "Cenderung self-deprecating", type: "C" },
      { text: "Sangat kritis dan negatif", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat menerima kritik, respons internalmu?",
    options: [
      { text: "Filter yang konstruktif, abaikan yang tidak", type: "A" },
      { text: "Terima dan evaluasi dengan objektif", type: "B" },
      { text: "Sakit hati dan merasa tidak cukup baik", type: "C" },
      { text: "Sangat terluka, mengonfirmasi keraguan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apakah kamu merasa layak mendapat hal-hal baik?",
    options: [
      { text: "Ya, aku deserve happiness dan success", type: "A" },
      { text: "Mostly yes, kadang ragu", type: "B" },
      { text: "Tidak yakin, merasa harus prove dulu", type: "C" },
      { text: "Tidak merasa layak", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Confidence Level Tinggi",
    emoji: "⭐",
    description: "Wah, kepercayaan dirimu sangat tinggi! Kamu nyaman dengan diri sendiri dan tidak mudah tergoyahkan oleh pendapat orang lain. Ini adalah kekuatan yang besar.",
    traits: ["Confident", "Self-assured", "Resilient", "Positive self-image"],
    strengths: ["Berani mengambil risiko", "Leadership natural", "Tidak mudah down"],
    weaknesses: ["Bisa terkesan arogan", "Kadang kurang dengar feedback"],
    tips: ["Stay humble", "Tetap open untuk growth", "Balance confidence dengan empathy"],
  },
  B: {
    type: "B",
    title: "Confidence Level Sehat",
    emoji: "😊",
    description: "Kepercayaan dirimu seimbang dan sehat! Kamu realistis tentang kelebihan dan kekurangan, dan bisa handle berbagai situasi dengan baik.",
    traits: ["Seimbang", "Realistis", "Adaptif", "Self-aware"],
    strengths: ["Bisa terima feedback", "Tidak overconfident", "Grounded"],
    weaknesses: ["Kadang bisa lebih berani", "Sesekali ragu"],
    tips: ["Trust yourself lebih", "Jangan takut shine"],
  },
  C: {
    type: "C",
    title: "Confidence Level Perlu Boost",
    emoji: "🌱",
    description: "Kepercayaan dirimu masih perlu dibangun. Kamu cenderung meragukan kemampuan sendiri dan sensitif terhadap penilaian orang lain.",
    traits: ["Self-doubt", "Sensitif terhadap kritik", "Cautious", "Need validation"],
    strengths: ["Humble", "Good listener", "Mau belajar"],
    weaknesses: ["Mudah terpengaruh", "Kurang berani", "Self-sabotage"],
    tips: ["Celebrate small wins", "Positive self-talk", "Kelilingi diri dengan supportive people"],
  },
  D: {
    type: "D",
    title: "Confidence Level Rendah",
    emoji: "💙",
    description: "Kepercayaan dirimu rendah dan ini bisa sangat menguras. Kamu sering merasa tidak cukup baik. Tapi ingat, ini bisa dibangun dengan bantuan yang tepat.",
    traits: ["Low self-esteem", "Self-critical", "Avoidant", "Insecure"],
    strengths: ["Sangat humble", "Empati tinggi", "Tidak arogan"],
    weaknesses: ["Miss banyak kesempatan", "Mental health terganggu", "Relationship terpengaruh"],
    tips: ["Pertimbangkan bantuan profesional", "Self-compassion sangat penting", "Kamu layak untuk bahagia"],
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
