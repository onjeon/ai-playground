// Keseimbangan Kerja-Hidup
// Tes ini mengungkap seberapa baik work-life balance kamu!

export const questions = [
  {
    id: 1,
    question: "Rata-rata jam kerja kamu per minggu...",
    options: [
      { text: "~40 jam, strict hours", type: "A" },
      { text: "40-50 jam, occasional overtime", type: "B" },
      { text: "50-60 jam, frequent overtime", type: "C" },
      { text: "60+ jam, what is life?", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Annual leave/cuti tahun ini...",
    options: [
      { text: "Semua terpakai, vacation is priority", type: "A" },
      { text: "Sebagian besar terpakai", type: "B" },
      { text: "Banyak yang tersisa/hangus", type: "C" },
      { text: "Cuti? Kapan ya terakhir cuti?", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dinner/quality time dengan keluarga/teman...",
    options: [
      { text: "Regular, hampir setiap minggu", type: "A" },
      { text: "Cukup sering, 2-3x sebulan", type: "B" },
      { text: "Jarang, susah cari waktu", type: "C" },
      { text: "Almost never, always busy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Exercise dan physical activity...",
    options: [
      { text: "Regular, 3+ kali seminggu", type: "A" },
      { text: "Lumayan, 1-2 kali seminggu", type: "B" },
      { text: "Jarang, when I remember", type: "C" },
      { text: "What exercise?", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hobi dan personal interests...",
    options: [
      { text: "Active, selalu ada waktu", type: "A" },
      { text: "Masih jalan, walau berkurang", type: "B" },
      { text: "Hampir ga ada waktu", type: "C" },
      { text: "Forgotten what I used to enjoy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Boundaries tentang work communications...",
    options: [
      { text: "Clear boundaries, off = off", type: "A" },
      { text: "Mostly off, check kalau urgent", type: "B" },
      { text: "Sering check, susah disconnect", type: "C" },
      { text: "24/7 available basically", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Health check-ups dan self-care...",
    options: [
      { text: "Regular, priority", type: "A" },
      { text: "Occasionally, when I remember", type: "B" },
      { text: "Jarang, too busy", type: "C" },
      { text: "Can't remember last check-up", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sleep hours per malam...",
    options: [
      { text: "7-8 jam consistently", type: "A" },
      { text: "6-7 jam mostly", type: "B" },
      { text: "5-6 jam often", type: "C" },
      { text: "Less than 5, sleep is luxury", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat weekend, kamu biasanya...",
    options: [
      { text: "Full rest dan personal time", type: "A" },
      { text: "Mostly rest, occasional work", type: "B" },
      { text: "Mix work dan rest", type: "C" },
      { text: "Catch up on work mostly", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Relationship quality dengan partner/family...",
    options: [
      { text: "Strong, quality time regular", type: "A" },
      { text: "Good, could be more time", type: "B" },
      { text: "Strained, work takes over", type: "C" },
      { text: "Suffering karena work", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mental state secara umum...",
    options: [
      { text: "Happy dan fulfilled", type: "A" },
      { text: "Okay, some stress normal", type: "B" },
      { text: "Stressed dan overwhelmed often", type: "C" },
      { text: "Burnt out dan exhausted", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau ditanya 'How's life?', honest answer...",
    options: [
      { text: "Great! Balanced dan happy", type: "A" },
      { text: "Good, keeping up", type: "B" },
      { text: "Busy... always busy", type: "C" },
      { text: "Surviving, barely", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Balance Master",
    emoji: "⚖️",
    description: "Amazing! Kamu sudah master work-life balance. Kamu tau cara prioritize dan punya boundaries yang healthy. This is sustainable success!",
    traits: ["Balanced", "Prioritized", "Healthy boundaries", "Fulfilled"],
    strengths: ["Sustainable lifestyle", "Quality relationships", "Long-term success"],
    weaknesses: ["May be challenged by ambitious goals", "Keep maintaining"],
    tips: ["Share your secrets dengan others", "Stay vigilant", "Help normalize balance"],
  },
  B: {
    type: "B",
    title: "Balance Seeker",
    emoji: "🎯",
    description: "Pretty good! Kamu ada di decent place dengan work-life balance. Ada room for improvement tapi kamu aware dan trying. Keep working on it!",
    traits: ["Aware", "Trying", "Mostly balanced", "Room to grow"],
    strengths: ["Self-aware", "Making efforts", "Not too far off"],
    weaknesses: ["Inconsistent sometimes", "Could slip without attention"],
    tips: ["Identify specific areas to improve", "Set clearer boundaries", "Schedule non-work priorities"],
  },
  C: {
    type: "C",
    title: "Balance Struggler",
    emoji: "😰",
    description: "Work is taking over! Balance kamu sudah concerning dan affecting quality of life. This needs attention sebelum jadi worse. Time untuk recalibrate!",
    traits: ["Overworked", "Struggling", "Neglecting self", "Stressed"],
    strengths: ["Dedicated", "Hard worker"],
    weaknesses: ["Unsustainable", "Health risks", "Missing life"],
    tips: ["Something needs to change NOW", "Talk to manager about workload", "Block personal time in calendar"],
  },
  D: {
    type: "D",
    title: "Balance Crisis",
    emoji: "🆘",
    description: "Red alert! Work-life balance kamu dalam crisis mode. Life is passing by while you work nonstop. This MUST change for your health dan happiness.",
    traits: ["Workaholic", "Burnt out", "Life imbalance", "At risk"],
    strengths: ["Clearly dedicated to work"],
    weaknesses: ["Health serious risk", "Relationships at risk", "Burnout imminent or happening"],
    tips: ["Seek help (professional, HR, manager)", "Something MUST change", "No job is worth your health/life"],
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
