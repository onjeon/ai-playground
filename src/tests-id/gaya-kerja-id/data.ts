// Tes Gaya Kerja Kamu
// Temukan work style yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Lingkungan kerja ideal menurutmu...",
    options: [
      { text: "Kantor ramai dengan banyak interaksi", type: "A" },
      { text: "Open space tapi ada quiet zones", type: "B" },
      { text: "Private office atau WFH", type: "C" },
      { text: "Fleksibel, bisa dimana saja", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat mengerjakan project...",
    options: [
      { text: "Kolaborasi tim lebih produktif", type: "A" },
      { text: "Mix solo dan team work", type: "B" },
      { text: "Prefer kerja sendiri", type: "C" },
      { text: "Tergantung jenis project-nya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Deadline dan time management...",
    options: [
      { text: "Selesaikan jauh sebelum deadline", type: "A" },
      { text: "On track, selesai tepat waktu", type: "B" },
      { text: "Last minute tapi selesai", type: "C" },
      { text: "Struggle dengan deadlines", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu handle multiple tasks...",
    options: [
      { text: "Multitasking, semua jalan bersamaan", type: "A" },
      { text: "Prioritize dan tackle satu per satu", type: "B" },
      { text: "Focus deep work, satu waktu satu task", type: "C" },
      { text: "Bisa overwhelmed dengan banyak tasks", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Meeting dan komunikasi kerja...",
    options: [
      { text: "Love meetings, brainstorm itu productive", type: "A" },
      { text: "Necessary meetings okay, no more", type: "B" },
      { text: "Prefer async communication", type: "C" },
      { text: "Meetings are tiring but needed", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Feedback dan kritik dari atasan...",
    options: [
      { text: "Welcome, helps me grow", type: "A" },
      { text: "Accept constructively", type: "B" },
      { text: "Process privately first", type: "C" },
      { text: "Struggle dengan criticism", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jam kerja yang prefer...",
    options: [
      { text: "9-5 structured hours", type: "A" },
      { text: "Flexible tapi mostly regular", type: "B" },
      { text: "Night owl, kerja malam lebih produktif", type: "C" },
      { text: "Whenever I feel like it", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Problem solving di workplace...",
    options: [
      { text: "Diskusi tim, collective wisdom", type: "A" },
      { text: "Research dulu baru consult", type: "B" },
      { text: "Figure out sendiri dulu", type: "C" },
      { text: "Ask senior atau google langsung", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Work-life balance menurutmu...",
    options: [
      { text: "Work hard, boundaries bisa flexible", type: "A" },
      { text: "Important, try to maintain", type: "B" },
      { text: "Sangat penting, strict boundaries", type: "C" },
      { text: "Struggle to find balance", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Motivasi utama kerja...",
    options: [
      { text: "Career growth dan achievement", type: "A" },
      { text: "Good work dan contribution", type: "B" },
      { text: "Financial stability", type: "C" },
      { text: "To pay bills, honestly", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Handling stress di workplace...",
    options: [
      { text: "Thrive under pressure", type: "A" },
      { text: "Manage dengan coping strategies", type: "B" },
      { text: "Need calm environment", type: "C" },
      { text: "Struggle dengan work stress", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ideal work culture...",
    options: [
      { text: "Competitive dan fast-paced", type: "A" },
      { text: "Collaborative dan supportive", type: "B" },
      { text: "Autonomous dan independent", type: "C" },
      { text: "Relaxed dan low pressure", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Go-Getter",
    emoji: "🚀",
    description: "Kamu adalah pekerja yang ambitious dan high-energy! Thrive dalam environment yang dynamic, love challenges, dan driven untuk achieve goals.",
    traits: ["Ambitious", "Energetic", "Competitive", "Achievement-oriented"],
    strengths: ["High performer", "Leadership potential", "Gets things done"],
    weaknesses: ["Risk of burnout", "Might neglect work-life balance"],
    tips: ["Rest is productive too", "Sustainable pace wins long-term"],
  },
  B: {
    type: "B",
    title: "The Balanced Worker",
    emoji: "⚖️",
    description: "Kamu adalah pekerja yang balanced! Good at work tapi juga value life outside. Productive without sacrificing wellbeing.",
    traits: ["Balanced", "Reliable", "Sustainable", "Well-rounded"],
    strengths: ["Consistent performance", "Good boundaries", "Team player"],
    weaknesses: ["Might not stand out as much"],
    tips: ["Push yourself occasionally", "Balance is great but ambition too"],
  },
  C: {
    type: "C",
    title: "The Independent Worker",
    emoji: "🎧",
    description: "Kamu adalah pekerja yang independent! Prefer autonomy, deep work, dan minimal interruption. Produce best work in solitude.",
    traits: ["Independent", "Focused", "Deep thinker", "Self-directed"],
    strengths: ["Quality work", "Self-sufficient", "Deep expertise"],
    weaknesses: ["Collaboration challenges", "Might seem distant"],
    tips: ["Networking matters", "Collaboration has benefits too"],
  },
  D: {
    type: "D",
    title: "The Adaptive Worker",
    emoji: "🌊",
    description: "Kamu adalah pekerja yang masih finding your groove! Flexible tapi bisa struggle dengan certain aspects. Room to develop work style.",
    traits: ["Flexible", "Learning", "Adaptive", "Developing"],
    strengths: ["Open to change", "Adaptable"],
    weaknesses: ["Inconsistent", "Might lack direction", "Stress management needed"],
    tips: ["Develop your strengths", "Find what works for you", "Seek mentorship"],
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
