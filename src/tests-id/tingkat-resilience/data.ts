// Tingkat Resilience Kamu
// Tes ini mengungkap seberapa tangguh kamu dalam menghadapi kesulitan!

export const questions = [
  {
    id: 1,
    question: "Saat menghadapi kegagalan besar...",
    options: [
      { text: "Bangkit dengan cepat, jadikan pelajaran", type: "A" },
      { text: "Butuh waktu tapi eventually recover", type: "B" },
      { text: "Struggle lama, susah move on", type: "C" },
      { text: "Sangat terpuruk, affect banyak area hidup", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pandangan tentang setbacks dan obstacles...",
    options: [
      { text: "Part of life, opportunities untuk grow", type: "A" },
      { text: "Challenging tapi manageable", type: "B" },
      { text: "Frustrating dan draining", type: "C" },
      { text: "Signs that I'm doomed atau unlucky", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat plans tidak berjalan sesuai harapan...",
    options: [
      { text: "Adapt dan buat plan baru dengan cepat", type: "A" },
      { text: "Disappointed tapi cari alternatif", type: "B" },
      { text: "Stuck, susah adjust", type: "C" },
      { text: "Give up, feel hopeless", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Support system saat difficult times...",
    options: [
      { text: "Punya dan actively use", type: "A" },
      { text: "Punya tapi kadang susah reach out", type: "B" },
      { text: "Limited, sering handle sendiri", type: "C" },
      { text: "Almost none atau tidak mau use", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Self-talk saat menghadapi kesulitan...",
    options: [
      { text: "Encouraging, I can handle this", type: "A" },
      { text: "Mixed, try to stay positive", type: "B" },
      { text: "Mostly negative, why me", type: "C" },
      { text: "Very harsh, I'm a failure", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Learning from difficult experiences...",
    options: [
      { text: "Always extract lessons dan grow", type: "A" },
      { text: "Usually find silver lining", type: "B" },
      { text: "Sometimes, tapi often just want to forget", type: "C" },
      { text: "Rarely, just try to survive", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Emotional regulation during crisis...",
    options: [
      { text: "Stay calm dan focused", type: "A" },
      { text: "Stressed tapi still function", type: "B" },
      { text: "Overwhelmed, hard to think clearly", type: "C" },
      { text: "Shut down atau panic", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Belief in ability to overcome challenges...",
    options: [
      { text: "Strong, I've overcome before I can again", type: "A" },
      { text: "Moderate, depends on the challenge", type: "B" },
      { text: "Low, often doubt myself", type: "C" },
      { text: "Very low, usually expect the worst", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Physical health during stressful times...",
    options: [
      { text: "Maintain healthy habits", type: "A" },
      { text: "Some habits slip tapi mostly okay", type: "B" },
      { text: "Significant impact on health habits", type: "C" },
      { text: "Complete neglect of health", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Asking for help when struggling...",
    options: [
      { text: "Comfortable, know I don't have to do it alone", type: "A" },
      { text: "Will ask if really needed", type: "B" },
      { text: "Reluctant, prefer to handle alone", type: "C" },
      { text: "Never, too proud atau ashamed", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Recovery time after major setback...",
    options: [
      { text: "Relatively quick, bounce back well", type: "A" },
      { text: "Moderate, takes some time but get there", type: "B" },
      { text: "Long, struggle for extended period", type: "C" },
      { text: "Very long atau never fully recover", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall resilience level...",
    options: [
      { text: "High, I'm a survivor", type: "A" },
      { text: "Moderate, I cope okay", type: "B" },
      { text: "Low, I struggle with difficulties", type: "C" },
      { text: "Very low, often feel broken", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Highly Resilient",
    emoji: "💪",
    description: "Kamu memiliki resilience yang sangat tinggi! Kamu bounce back dari kesulitan dengan kuat dan bahkan grow from them. Life's challenges tidak bisa break kamu.",
    traits: ["Resilient", "Adaptable", "Strong", "Optimistic"],
    strengths: ["Quick recovery", "Growth mindset", "Strong coping", "Inspire others"],
    weaknesses: ["May push too hard", "Might not process fully"],
    tips: ["Allow yourself to feel", "Rest is not weakness", "Share your strength"],
  },
  B: {
    type: "B",
    title: "Moderate Resilience",
    emoji: "🌿",
    description: "Resilience kamu cukup baik! Kamu bisa overcome challenges walau butuh waktu. Kamu punya tools untuk cope tapi still developing.",
    traits: ["Coping", "Developing", "Adaptive", "Realistic"],
    strengths: ["Can recover", "Aware of limits", "Seeking growth"],
    weaknesses: ["Takes time to bounce back", "Could strengthen coping"],
    tips: ["Build your toolkit", "Practice self-compassion", "Strengthen support network"],
  },
  C: {
    type: "C",
    title: "Building Resilience",
    emoji: "🌱",
    description: "Resilience kamu masih dalam pengembangan. Challenges terasa berat dan recovery takes long. Good news: resilience bisa dibangun!",
    traits: ["Struggling", "Developing", "Sensitive", "Learning"],
    strengths: ["Aware there's room to grow", "Sensitive nature"],
    weaknesses: ["Easily overwhelmed", "Long recovery", "Limited coping"],
    tips: ["Seek support", "Start small wins", "Build coping toolkit", "Consider therapy"],
  },
  D: {
    type: "D",
    title: "Resilience Needs Support",
    emoji: "🤍",
    description: "Resilience adalah area yang perlu banyak support. Kesulitan terasa crushing dan recovery sangat sulit. Ini bukan weakness - it's a signal to get help.",
    traits: ["Struggling significantly", "Overwhelmed", "Need support", "Hurting"],
    strengths: ["Taking this test shows awareness", "Help is available"],
    weaknesses: ["Very vulnerable", "Crisis-prone", "Limited resources"],
    tips: ["Seek professional help", "You don't have to suffer alone", "Small steps count", "Be patient with yourself"],
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
