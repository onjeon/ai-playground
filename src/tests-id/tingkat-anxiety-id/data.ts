// Tingkat Kecemasan (Anxiety) Kamu
// Tes ini membantu kamu memahami tingkat kecemasan yang kamu alami sehari-hari

export const questions = [
  {
    id: 1,
    question: "Seberapa sering kamu merasa khawatir tentang hal-hal kecil?",
    options: [
      { text: "Jarang, kebanyakan hal tidak perlu dikhawatirkan", type: "A" },
      { text: "Kadang-kadang, tergantung situasi", type: "B" },
      { text: "Cukup sering, pikiran sering kemana-mana", type: "C" },
      { text: "Hampir selalu, sulit untuk tidak khawatir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat menghadapi situasi baru atau tidak familiar...",
    options: [
      { text: "Excited! Tantangan baru itu seru", type: "A" },
      { text: "Sedikit nervous tapi bisa diatasi", type: "B" },
      { text: "Cukup cemas, perlu waktu untuk adaptasi", type: "C" },
      { text: "Sangat cemas, cenderung menghindari", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kualitas tidurmu akhir-akhir ini...",
    options: [
      { text: "Nyenyak, jarang terganggu pikiran", type: "A" },
      { text: "Lumayan, sesekali susah tidur", type: "B" },
      { text: "Sering terganggu, pikiran terus berputar", type: "C" },
      { text: "Sangat terganggu, insomnia sering", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Respon fisik saat merasa tertekan...",
    options: [
      { text: "Jarang ada gejala fisik", type: "A" },
      { text: "Kadang merasa tegang atau lelah", type: "B" },
      { text: "Sering sakit kepala, perut, atau tegang", type: "C" },
      { text: "Gejala fisik intens, detak jantung cepat dll", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Setelah interaksi sosial, kamu biasanya...",
    options: [
      { text: "Merasa fine, tidak terlalu mikir", type: "A" },
      { text: "Sesekali replay conversation tapi sebentar", type: "B" },
      { text: "Sering overthinking apa yang sudah dikatakan", type: "C" },
      { text: "Analisis mendalam, khawatir salah bicara", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada deadline atau tekanan kerja...",
    options: [
      { text: "Tetap tenang, handle dengan baik", type: "A" },
      { text: "Agak stres tapi manageable", type: "B" },
      { text: "Cukup overwhelmed, produktivitas turun", type: "C" },
      { text: "Sangat overwhelmed, sulit fokus", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pikiran tentang masa depan...",
    options: [
      { text: "Optimis, percaya akan baik-baik saja", type: "A" },
      { text: "Realistis, ada harap ada khawatir", type: "B" },
      { text: "Lebih banyak khawatirnya", type: "C" },
      { text: "Sering dihantui pikiran negatif", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kemampuan untuk relax dan santai...",
    options: [
      { text: "Mudah, bisa switch off kapanpun", type: "A" },
      { text: "Lumayan, dengan effort bisa relax", type: "B" },
      { text: "Susah, pikiran tetap aktif", type: "C" },
      { text: "Sangat susah, selalu ada yang dipikirkan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat menunggu kabar penting (hasil tes, interview, dll)...",
    options: [
      { text: "Sabar dan optimis", type: "A" },
      { text: "Agak gelisah tapi bisa distraksi", type: "B" },
      { text: "Sangat gelisah, cek terus", type: "C" },
      { text: "Extremely anxious, tidak bisa fokus lain", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Reaksi saat rencana berubah mendadak...",
    options: [
      { text: "Fleksibel, no problem", type: "A" },
      { text: "Agak kesal tapi adaptasi", type: "B" },
      { text: "Cukup stres, butuh waktu adjust", type: "C" },
      { text: "Sangat terganggu, sulit menerima", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Frekuensi worst-case scenario thinking...",
    options: [
      { text: "Jarang, fokus pada yang realistis", type: "A" },
      { text: "Kadang-kadang, tapi bisa control", type: "B" },
      { text: "Cukup sering, susah dihentikan", type: "C" },
      { text: "Hampir selalu, default mindset", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara overall, tingkat kecemasanmu sehari-hari...",
    options: [
      { text: "Rendah, hidup terasa ringan", type: "A" },
      { text: "Sedang, normal stress", type: "B" },
      { text: "Cukup tinggi, sering merasa cemas", type: "C" },
      { text: "Tinggi, mengganggu aktivitas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tingkat Kecemasan Rendah",
    emoji: "😌",
    description: "Selamat! Kamu memiliki tingkat kecemasan yang rendah dan sehat. Kamu mampu menghadapi stress dengan baik dan jarang terbawa kekhawatiran berlebihan. Ini adalah kondisi mental yang positif.",
    traits: ["Tenang", "Resilient", "Optimis", "Adaptif"],
    strengths: ["Tidur berkualitas", "Fokus bagus", "Relasi sehat", "Produktif"],
    weaknesses: ["Kadang kurang waspada", "Bisa terlihat tidak peduli"],
    tips: ["Pertahankan lifestyle sehat", "Tetap aware tapi tidak worry", "Share tips ke orang lain"],
  },
  B: {
    type: "B",
    title: "Tingkat Kecemasan Normal",
    emoji: "🙂",
    description: "Kamu memiliki tingkat kecemasan yang normal dan sehat. Ada kekhawatiran sesekali tapi kamu bisa mengelolanya dengan baik. Ini adalah respons natural terhadap stress kehidupan.",
    traits: ["Balanced", "Self-aware", "Adaptive", "Realistic"],
    strengths: ["Respons stress sehat", "Bisa manage worry", "Aware tapi tidak obsessive"],
    weaknesses: ["Kadang overthink situasi tertentu", "Sesekali susah tidur"],
    tips: ["Terus jaga keseimbangan", "Develop coping mechanisms", "Self-care rutin"],
  },
  C: {
    type: "C",
    title: "Tingkat Kecemasan Sedang-Tinggi",
    emoji: "😟",
    description: "Kamu mengalami tingkat kecemasan yang cukup tinggi. Kekhawatiran sering muncul dan kadang sulit dikontrol. Penting untuk memperhatikan kesehatan mentalmu dan mencari cara untuk mengelola anxiety.",
    traits: ["Sensitif", "Overthinking", "Perfectionis", "Cautious"],
    strengths: ["Detail-oriented", "Careful planner", "Empathetic"],
    weaknesses: ["Susah relax", "Overthinking berlebih", "Fisik sering terpengaruh"],
    tips: ["Coba teknik relaksasi", "Olahraga teratur", "Pertimbangkan konseling", "Mindfulness practice"],
  },
  D: {
    type: "D",
    title: "Tingkat Kecemasan Tinggi",
    emoji: "😰",
    description: "Hasil menunjukkan tingkat kecemasan yang cukup tinggi dan mungkin mengganggu kehidupan sehari-hari. Sangat disarankan untuk mencari bantuan profesional untuk membantu mengelola anxiety-mu.",
    traits: ["High-strung", "Hypervigilant", "Sensitive", "Overwhelmed"],
    strengths: ["Very aware", "Detailed", "Anticipatory"],
    weaknesses: ["Kualitas hidup terpengaruh", "Susah enjoy moment", "Fisik terganggu"],
    tips: ["Pertimbangkan konsultasi profesional", "Teknik grounding", "Support system penting", "Jangan malu minta bantuan"],
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
