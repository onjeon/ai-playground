// Gaya Adaptasi Kamu
// Bagaimana caramu beradaptasi dengan perubahan dan situasi baru?

export const questions = [
  {
    id: 1,
    question: "Saat ada perubahan mendadak di tempat kerja...",
    options: [
      { text: "Langsung adjust, embrace change", type: "A" },
      { text: "Butuh waktu tapi bisa adaptasi", type: "B" },
      { text: "Resist dulu, baru perlahan terima", type: "C" },
      { text: "Stress dan sulit menerima", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pindah ke kota atau lingkungan baru...",
    options: [
      { text: "Excited! Petualangan baru", type: "A" },
      { text: "Nervous tapi optimis", type: "B" },
      { text: "Khawatir tapi coba stay positive", type: "C" },
      { text: "Anxiety tinggi, prefer stay", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Belajar teknologi atau skill baru...",
    options: [
      { text: "Love it! Selalu ada yang baru", type: "A" },
      { text: "Step by step, eventually master", type: "B" },
      { text: "Butuh bantuan dan waktu lama", type: "C" },
      { text: "Prefer cara lama yang familiar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rencana tiba-tiba berubah...",
    options: [
      { text: "No problem, life happens", type: "A" },
      { text: "Sedikit kecewa tapi bisa adjust", type: "B" },
      { text: "Frustasi tapi coba terima", type: "C" },
      { text: "Sangat terganggu, mood rusak", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bertemu orang-orang baru...",
    options: [
      { text: "Suka! Fresh perspectives", type: "A" },
      { text: "Open tapi butuh warm up time", type: "B" },
      { text: "Prefer stick dengan yang sudah kenal", type: "C" },
      { text: "Uncomfortable, avoid kalau bisa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Diminta melakukan hal di luar comfort zone...",
    options: [
      { text: "Challenge accepted!", type: "A" },
      { text: "Coba, tapi dengan persiapan", type: "B" },
      { text: "Reluctant, butuh banyak convincing", type: "C" },
      { text: "Prefer tidak, comfort zone is safe", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Feedback yang menyarankan cara baru...",
    options: [
      { text: "Open, langsung coba", type: "A" },
      { text: "Consider dan evaluate dulu", type: "B" },
      { text: "Defensive, cara lama sudah works", type: "C" },
      { text: "Reject, tidak mau diubah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Situasi tidak pasti dan ambigu...",
    options: [
      { text: "Thrive! Banyak possibility", type: "A" },
      { text: "Manage dengan baik", type: "B" },
      { text: "Uncomfortable tapi survive", type: "C" },
      { text: "Sangat stress, butuh kepastian", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Makanan atau tempat baru untuk dicoba...",
    options: [
      { text: "Always! Senang explore", type: "A" },
      { text: "Sesekali, kalau menarik", type: "B" },
      { text: "Jarang, prefer yang familiar", type: "C" },
      { text: "Stick dengan yang sudah tau", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Role atau tanggung jawab baru...",
    options: [
      { text: "Excited untuk growth", type: "A" },
      { text: "Nervous tapi ready learn", type: "B" },
      { text: "Overwhelmed tapi try", type: "C" },
      { text: "Prefer current role", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trend atau cara baru yang semua orang ikuti...",
    options: [
      { text: "Early adopter, coba duluan", type: "A" },
      { text: "Wait and see, ikut kalau bagus", type: "B" },
      { text: "Late adopter, kalau terpaksa", type: "C" },
      { text: "Skeptis, tidak ikut-ikutan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi comfort zone menurutmu...",
    options: [
      { text: "Tempat untuk keluar dan grow", type: "A" },
      { text: "Base untuk rest before challenge", type: "B" },
      { text: "Safe space yang perlu dijaga", type: "C" },
      { text: "Tempat terbaik untuk stay", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Highly Adaptable",
    emoji: "🦎",
    description: "Kamu sangat adaptable seperti bunglon! Perubahan adalah kesempatan, bukan ancaman. Kamu thrive di situasi baru dan selalu siap untuk challenge. Fleksibilitas adalah superpower-mu!",
    traits: ["Flexible", "Open-minded", "Adventurous", "Resilient"],
    strengths: ["Thrive in change", "Quick learner", "Low stress in uncertainty"],
    weaknesses: ["Bisa tidak appreciate stability", "Restless sometimes"],
    tips: ["Stability juga punya value", "Deep roots matter too"],
  },
  B: {
    type: "B",
    title: "Adaptable dengan Proses",
    emoji: "🌱",
    description: "Kamu adaptable dengan proses yang sehat! Butuh waktu untuk adjust tapi selalu bisa. Kamu balance antara openness dan caution. Smart adapter yang tau pace-nya sendiri!",
    traits: ["Balanced", "Thoughtful", "Progressive", "Steady"],
    strengths: ["Sustainable adaptation", "Good judgment", "Measured approach"],
    weaknesses: ["Bisa miss fast opportunities", "Over-analyze kadang"],
    tips: ["Trust your instincts more", "Sometimes leap first"],
  },
  C: {
    type: "C",
    title: "Cautious Adapter",
    emoji: "🐢",
    description: "Kamu adapter yang cautious. Perubahan bukan hal yang kamu cari tapi bisa handle kalau harus. Kamu menghargai stabilitas dan prefer perubahan yang gradual. Safety first!",
    traits: ["Cautious", "Stable", "Traditional", "Risk-averse"],
    strengths: ["Consistent", "Reliable", "Deep expertise in familiar areas"],
    weaknesses: ["Miss growth opportunities", "Resistance to necessary change"],
    tips: ["Small changes lead to big growth", "Change is not always bad"],
  },
  D: {
    type: "D",
    title: "Change Resistant",
    emoji: "🏔️",
    description: "Kamu prefer stabilitas dan perubahan adalah challenge besar. Bukan berarti tidak bisa, tapi butuh banyak energi dan support. Comfort zone adalah tempat yang kamu value.",
    traits: ["Stable", "Consistent", "Traditional", "Grounded"],
    strengths: ["Deep roots", "Loyal", "Master of familiar territory"],
    weaknesses: ["Miss opportunities", "High stress when change happens", "Rigid"],
    tips: ["Change is inevitable", "Small steps help", "Support system is key"],
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
