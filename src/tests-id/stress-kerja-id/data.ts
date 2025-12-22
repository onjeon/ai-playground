// Level Stress Kerja Kamu
// Tes ini mengungkap seberapa tinggi level stress kerja kamu!

export const questions = [
  {
    id: 1,
    question: "Saat bangun tidur hari kerja, pikiran pertamamu...",
    options: [
      { text: "Excited untuk hari ini!", type: "A" },
      { text: "Normal, ready untuk routine", type: "B" },
      { text: "Langsung mikirin kerjaan yang numpuk", type: "C" },
      { text: "Ugh, pengen tidur lagi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Frekuensi kamu check email/Slack di luar jam kerja...",
    options: [
      { text: "Jarang, bisa disconnect", type: "A" },
      { text: "Kadang-kadang kalau ada urgent", type: "B" },
      { text: "Sering, takut miss something", type: "C" },
      { text: "Constantly, 24/7 basically", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Weekend thoughts tentang kerjaan...",
    options: [
      { text: "Weekend = no work thoughts", type: "A" },
      { text: "Sesekali kepikiran sebentar", type: "B" },
      { text: "Sering kepikiran, susah off", type: "C" },
      { text: "Selalu anxious about Monday", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kualitas tidur akhir-akhir ini...",
    options: [
      { text: "Tidur nyenyak, bangun fresh", type: "A" },
      { text: "Lumayan, sesekali susah tidur", type: "B" },
      { text: "Sering insomnia karena pikiran", type: "C" },
      { text: "Kacau, selalu exhausted", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat workload menumpuk...",
    options: [
      { text: "Prioritize dan handle satu-satu", type: "A" },
      { text: "Agak overwhelmed tapi cope", type: "B" },
      { text: "Panic mode, kerja nonstop", type: "C" },
      { text: "Shutdown, ga tau harus mulai dari mana", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Physical symptoms akhir-akhir ini...",
    options: [
      { text: "Feel healthy dan energized", type: "A" },
      { text: "Kadang capek tapi manageable", type: "B" },
      { text: "Sering sakit kepala/pegal-pegal", type: "C" },
      { text: "Berbagai keluhan (maag, tension, dll)", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Hubungan dengan colleagues saat ini...",
    options: [
      { text: "Positive dan supportive", type: "A" },
      { text: "Professional, cukup baik", type: "B" },
      { text: "Kadang tense atau irritated", type: "C" },
      { text: "Avoid atau conflict sering", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hobi dan personal life saat ini...",
    options: [
      { text: "Active dan fulfilling", type: "A" },
      { text: "Masih ada tapi berkurang", type: "B" },
      { text: "Jarang, ga ada waktu/energi", type: "C" },
      { text: "Basically nonexistent", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Perasaan tentang career saat ini...",
    options: [
      { text: "On track dan motivated", type: "A" },
      { text: "Okay, doing fine", type: "B" },
      { text: "Stuck atau frustrated", type: "C" },
      { text: "Want to quit everything", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Appetite dan eating habits...",
    options: [
      { text: "Regular dan healthy", type: "A" },
      { text: "Mostly okay", type: "B" },
      { text: "Irregular, stress eating/skipping", type: "C" },
      { text: "Really messed up", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kemampuan fokus saat kerja...",
    options: [
      { text: "Sharp dan productive", type: "A" },
      { text: "Decent, occasional distraction", type: "B" },
      { text: "Susah fokus, overwhelmed", type: "C" },
      { text: "Brain fog constantly", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall life satisfaction right now...",
    options: [
      { text: "Happy dan balanced", type: "A" },
      { text: "Content, could be better", type: "B" },
      { text: "Struggling tapi pushing through", type: "C" },
      { text: "Really not okay", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Stress Level: Low",
    emoji: "🌿",
    description: "Congrats! Kamu punya stress level yang sehat dan manageable. Work-life balance-mu bagus dan kamu tau cara maintain wellbeing. Keep it up!",
    traits: ["Balanced", "Healthy coping", "Good boundaries", "Resilient"],
    strengths: ["Sustainable productivity", "Good relationships", "Energy for life"],
    weaknesses: ["May be tested in crisis", "Keep monitoring"],
    tips: ["Maintain current habits", "Be prepared for challenging times", "Help others who are stressed"],
  },
  B: {
    type: "B",
    title: "Stress Level: Moderate",
    emoji: "☁️",
    description: "Stress level kamu dalam range normal untuk working adult. Ada ups and downs tapi masih manageable. Good, tapi tetap watch out untuk signs of increase.",
    traits: ["Coping", "Functional", "Some strain", "Managing"],
    strengths: ["Still productive", "Aware of stress", "Handling it okay"],
    weaknesses: ["Could escalate", "Some areas need attention"],
    tips: ["Build stronger coping habits", "Address small issues before they grow", "Prioritize self-care"],
  },
  C: {
    type: "C",
    title: "Stress Level: High",
    emoji: "⚠️",
    description: "Warning signs! Stress level kamu sudah tinggi dan affecting quality of life. This isn't sustainable long-term. Time to take action dan make changes.",
    traits: ["Overwhelmed", "Struggling", "Pushing through", "Depleted"],
    strengths: ["Resilient", "Still functioning"],
    weaknesses: ["Health at risk", "Burnout approaching", "Quality of life suffering"],
    tips: ["Seek support (manager, HR, professional)", "Set boundaries NOW", "Something needs to change"],
  },
  D: {
    type: "D",
    title: "Stress Level: Critical",
    emoji: "🆘",
    description: "Please take this seriously! Stress level kamu sudah critical dan butuh immediate attention. Your health dan wellbeing adalah priority. Reach out for help.",
    traits: ["Burnout", "Exhausted", "Overwhelmed", "At breaking point"],
    strengths: ["You're still here", "Awareness is first step"],
    weaknesses: ["Serious health risks", "Unsustainable", "Need intervention"],
    tips: ["Talk to someone TODAY (professional, trusted person)", "Consider leave if possible", "Your health > any job"],
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
