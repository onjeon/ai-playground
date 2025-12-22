// Gaya Kamu Menghadapi Deadline
// Tes ini mengungkap personality kamu saat menghadapi deadline!

export const questions = [
  {
    id: 1,
    question: "Saat dapat project dengan deadline 2 minggu...",
    options: [
      { text: "Langsung breakdown dan mulai hari ini", type: "A" },
      { text: "Plan dulu timeline per milestone", type: "B" },
      { text: "Diskusi sama tim bagi tugas", type: "C" },
      { text: "Santai dulu, masih lama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "H-3 sebelum deadline, progress kamu biasanya...",
    options: [
      { text: "Hampir done, tinggal finishing", type: "A" },
      { text: "On track sesuai timeline", type: "B" },
      { text: "Lagi intense collaboration sama tim", type: "C" },
      { text: "Baru mulai panik dan ngebut", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau deadline mundur, reaksimu...",
    options: [
      { text: "Lanjut kerja, biar makin polished", type: "A" },
      { text: "Re-evaluate dan adjust plan", type: "B" },
      { text: "Cek sama tim mau improve apa", type: "C" },
      { text: "YES! Extra time for procrastinating", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat deadline clash dengan acara penting...",
    options: [
      { text: "Kerja dulu, acara bisa reschedule", type: "A" },
      { text: "Nego deadline atau delegate", type: "B" },
      { text: "Minta bantuan tim untuk cover", type: "C" },
      { text: "Somehow make it work, clutch mode", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Strategi fokus saat deadline mendekat...",
    options: [
      { text: "Lock in mode, minimal distraction", type: "A" },
      { text: "Pomodoro technique dan scheduled breaks", type: "B" },
      { text: "Body doubling sama teman kerja", type: "C" },
      { text: "Panic-induced hyperfocus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kualitas kerja saat deadline ketat...",
    options: [
      { text: "Tetap high quality, ga compromise", type: "A" },
      { text: "Good enough, prioritize key features", type: "B" },
      { text: "Tergantung kontribusi tim", type: "C" },
      { text: "Honestly... bisa hit or miss", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Setelah submit deadline, kamu...",
    options: [
      { text: "Review untuk next improvement", type: "A" },
      { text: "Document lessons learned", type: "B" },
      { text: "Celebrate sama tim", type: "C" },
      { text: "Collapse dan tidur panjang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Komunikasi ke stakeholder tentang progress...",
    options: [
      { text: "Proactive update regularly", type: "A" },
      { text: "Scheduled check-ins sesuai plan", type: "B" },
      { text: "Keep them in the loop via group chat", type: "C" },
      { text: "Update kalau ada masalah aja", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara handle unexpected blocker...",
    options: [
      { text: "Pivot dan find solution immediately", type: "A" },
      { text: "Assess impact dan adjust timeline", type: "B" },
      { text: "Escalate ke tim atau manager", type: "C" },
      { text: "Panic dulu, solve later", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tools untuk track deadline...",
    options: [
      { text: "Personal system yang strict", type: "A" },
      { text: "Project management apps (Notion, Asana)", type: "B" },
      { text: "Shared calendar sama tim", type: "C" },
      { text: "Memory... atau sticky notes random", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau realistis ga kejar deadline...",
    options: [
      { text: "Push harder, find a way", type: "A" },
      { text: "Negotiate scope atau timeline", type: "B" },
      { text: "Ask for help dari tim", type: "C" },
      { text: "Accept fate, do what I can", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Deadline yang paling challenging menurutmu...",
    options: [
      { text: "Ga ada deadline yang challenging kalau prepared", type: "A" },
      { text: "Unrealistic timeline dari awal", type: "B" },
      { text: "Deadline yang depend on others", type: "C" },
      { text: "Semua deadline challenging lol", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Early Finisher",
    emoji: "🏃",
    description: "Kamu adalah deadline warrior! Selalu start early, finish early, dan punya buffer time. Ga kenal kata 'last minute' karena kamu selalu ahead of schedule.",
    traits: ["Proactive", "Disciplined", "Reliable", "Perfectionis"],
    strengths: ["Zero stress tentang deadline", "High quality consistent", "Trusted untuk important projects"],
    weaknesses: ["Bisa burn out dari over-preparing", "Kurang flexible", "Set high bar untuk orang lain"],
    tips: ["Balance preparation dengan rest", "Not everything needs to be early", "Allow some spontaneity"],
  },
  B: {
    type: "B",
    title: "The Strategic Planner",
    emoji: "📅",
    description: "Kamu master deadline management! Always have a plan, track progress religiously, dan deliver on time with quality. Perfect balance antara preparation dan execution.",
    traits: ["Organized", "Methodical", "Balanced", "Efficient"],
    strengths: ["Consistent delivery", "Good time estimation", "Stress managed"],
    weaknesses: ["Rigid kalau plan berubah", "Can over-plan", "Struggle dengan ambiguity"],
    tips: ["Build in buffer untuk unexpected", "Sometimes just start tanpa perfect plan", "Embrace changes"],
  },
  C: {
    type: "C",
    title: "The Team Player",
    emoji: "🤝",
    description: "Kamu shine saat deadline bareng tim! Collaboration adalah kunci sukses-mu. Together everyone achieves more adalah motto-mu dalam menghadapi deadline.",
    traits: ["Collaborative", "Communicative", "Supportive", "Flexible"],
    strengths: ["Great di team projects", "Good at delegating", "Strong support network"],
    weaknesses: ["Dependent on others", "Solo deadline bisa struggle", "May avoid personal accountability"],
    tips: ["Build solo deadline skills", "Take ownership more", "Learn to work independently too"],
  },
  D: {
    type: "D",
    title: "The Clutch Performer",
    emoji: "⚡",
    description: "Kamu adalah last-minute legend! Somehow always deliver meski start late. Adrenaline dan pressure adalah productivity fuel-mu. Stressful tapi it works!",
    traits: ["Clutch", "Creative under pressure", "Resilient", "Unpredictable"],
    strengths: ["Thrive under pressure", "Creative solutions", "Flexible"],
    weaknesses: ["Inconsistent quality", "Stressful lifestyle", "Risk of missing deadline"],
    tips: ["Start small, start early", "Don't rely on panic mode", "Your health > deadlines"],
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
