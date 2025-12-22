// Cek Kesehatan Mental
// Tes ini membantu kamu memahami kondisi kesehatan mental saat ini

export const questions = [
  {
    id: 1,
    question: "Dalam 2 minggu terakhir, seberapa sering kamu merasa sedih atau hopeless?",
    options: [
      { text: "Jarang atau tidak pernah", type: "A" },
      { text: "Beberapa hari", type: "B" },
      { text: "Lebih dari separuh waktu", type: "C" },
      { text: "Hampir setiap hari", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seberapa baik kamu bisa menikmati hal-hal yang biasanya kamu suka?",
    options: [
      { text: "Masih bisa menikmati seperti biasa", type: "A" },
      { text: "Agak berkurang tapi masih ada", type: "B" },
      { text: "Sangat berkurang", type: "C" },
      { text: "Tidak bisa menikmati sama sekali", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kualitas tidurmu akhir-akhir ini...",
    options: [
      { text: "Baik, tidur cukup dan nyenyak", type: "A" },
      { text: "Kadang terganggu tapi masih oke", type: "B" },
      { text: "Sering terganggu atau tidur berlebihan", type: "C" },
      { text: "Sangat terganggu, insomnia atau hypersomnia", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Level energi sehari-hari...",
    options: [
      { text: "Normal, cukup untuk aktivitas", type: "A" },
      { text: "Agak lelah tapi masih bisa fungsi", type: "B" },
      { text: "Sering merasa sangat lelah", type: "C" },
      { text: "Kelelahan ekstrem, sulit beraktivitas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kemampuan konsentrasi dan fokus...",
    options: [
      { text: "Normal, bisa fokus dengan baik", type: "A" },
      { text: "Sedikit menurun", type: "B" },
      { text: "Cukup terganggu", type: "C" },
      { text: "Sangat sulit fokus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Perasaan tentang diri sendiri...",
    options: [
      { text: "Positif, menerima diri sendiri", type: "A" },
      { text: "Kadang self-doubt tapi manageable", type: "B" },
      { text: "Sering merasa tidak berguna", type: "C" },
      { text: "Selalu merasa worthless", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Appetite dan pola makan...",
    options: [
      { text: "Normal dan teratur", type: "A" },
      { text: "Sedikit berubah", type: "B" },
      { text: "Sangat berubah (makan berlebihan/kurang)", type: "C" },
      { text: "Tidak terkontrol sama sekali", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Interaksi sosial akhir-akhir ini...",
    options: [
      { text: "Normal, maintain relationships baik", type: "A" },
      { text: "Agak mengurangi tapi masih ada", type: "B" },
      { text: "Sangat mengurangi, isolasi diri", type: "C" },
      { text: "Total withdrawal dari sosial", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kemampuan menangani stress sehari-hari...",
    options: [
      { text: "Bisa handle dengan baik", type: "A" },
      { text: "Agak struggle tapi masih cope", type: "B" },
      { text: "Sering overwhelmed", type: "C" },
      { text: "Tidak bisa cope, breakdown sering", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pikiran tentang masa depan...",
    options: [
      { text: "Optimis dan punya harapan", type: "A" },
      { text: "Campur antara harap dan khawatir", type: "B" },
      { text: "Lebih banyak pesimis", type: "C" },
      { text: "Merasa hopeless tentang masa depan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mood stability...",
    options: [
      { text: "Stabil, normal ups and downs", type: "A" },
      { text: "Agak mood swings", type: "B" },
      { text: "Sering mood swings intens", type: "C" },
      { text: "Sangat tidak stabil", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara keseluruhan, bagaimana perasaanmu?",
    options: [
      { text: "Baik dan satisfied dengan hidup", type: "A" },
      { text: "Oke tapi bisa lebih baik", type: "B" },
      { text: "Kurang baik, struggling", type: "C" },
      { text: "Tidak baik, need help", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kesehatan Mental Baik",
    emoji: "💚",
    description: "Hasil menunjukkan kesehatan mentalmu dalam kondisi baik! Kamu mampu mengelola emosi dan stress dengan sehat. Tetap jaga dan pertahankan kondisi ini.",
    traits: ["Resilient", "Emotionally stable", "Adaptive", "Positive"],
    strengths: ["Good coping skills", "Healthy relationships", "Self-aware"],
    weaknesses: ["Tetap waspada terhadap stress"],
    tips: ["Pertahankan rutinitas sehat", "Tetap connect dengan support system", "Prevention is better than cure"],
  },
  B: {
    type: "B",
    title: "Kesehatan Mental Cukup Baik",
    emoji: "💛",
    description: "Kesehatan mentalmu cukup baik dengan beberapa area yang perlu perhatian. Normal mengalami ups and downs, yang penting adalah awareness dan proactive self-care.",
    traits: ["Generally okay", "Some struggles", "Aware", "Managing"],
    strengths: ["Self-aware", "Functioning well", "Seeking improvement"],
    weaknesses: ["Beberapa area perlu perhatian", "Bisa lebih konsisten self-care"],
    tips: ["Tingkatkan self-care", "Monitor changes", "Seek support kalau perlu"],
  },
  C: {
    type: "C",
    title: "Perlu Perhatian",
    emoji: "🧡",
    description: "Hasil menunjukkan beberapa tanda yang perlu diperhatikan. Kamu mungkin sedang mengalami periode sulit. Penting untuk tidak mengabaikan dan mencari support.",
    traits: ["Struggling", "Need support", "Overwhelmed", "Resilient potential"],
    strengths: ["Aware ada masalah", "Taking the test shows you care"],
    weaknesses: ["Multiple areas affected", "Functioning terganggu"],
    tips: ["Consider talking to professional", "Reach out to trusted people", "Be gentle with yourself"],
  },
  D: {
    type: "D",
    title: "Butuh Bantuan",
    emoji: "❤️",
    description: "Hasil menunjukkan kondisi yang memerlukan perhatian serius. Sangat disarankan untuk mencari bantuan profesional. Kamu tidak harus menghadapi ini sendirian.",
    traits: ["In crisis", "Need immediate support", "Struggling significantly"],
    strengths: ["Taking this step shows courage", "Help is available"],
    weaknesses: ["Significant impact on daily life"],
    tips: ["Seek professional help immediately", "Talk to someone you trust", "Call hotline if needed: 119 ext 8", "You matter and help is available"],
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
