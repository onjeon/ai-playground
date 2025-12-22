// Kepribadian Anak Kantoran
// Tes ini mengungkap personality kamu sebagai anak kantoran!

export const questions = [
  {
    id: 1,
    question: "Senin pagi, mood kamu biasanya...",
    options: [
      { text: "Semangat! Let's conquer the week", type: "A" },
      { text: "Focused, langsung check to-do list", type: "B" },
      { text: "Ngobrol dulu sama temen kantor", type: "C" },
      { text: "Butuh kopi sebelum function properly", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Meja kerja kamu biasanya...",
    options: [
      { text: "Minimal dan clean, productivity vibes", type: "A" },
      { text: "Organized dengan sistem filing", type: "B" },
      { text: "Ada foto dan memorabilia", type: "C" },
      { text: "Controlled chaos, I know where everything is", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Lunch break, kamu biasanya...",
    options: [
      { text: "Working lunch atau quick meal", type: "A" },
      { text: "Makan teratur di jam yang sama", type: "B" },
      { text: "Social lunch sama colleagues", type: "C" },
      { text: "Escape untuk me-time", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau ada gosip kantor...",
    options: [
      { text: "Stay out of it, fokus kerja", type: "A" },
      { text: "Listen tapi ga ikut spread", type: "B" },
      { text: "Update terbaru harus tau dong", type: "C" },
      { text: "Interesting content for my entertainment", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Email dari bos di luar jam kerja...",
    options: [
      { text: "Reply immediately, commitment", type: "A" },
      { text: "Note dulu, reply jam kerja", type: "B" },
      { text: "Depends on urgency", type: "C" },
      { text: "Pretend I didn't see until tomorrow", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Office politics, pendekatan kamu...",
    options: [
      { text: "Strategic, play the game smart", type: "A" },
      { text: "Stay neutral dan professional", type: "B" },
      { text: "Build alliances dengan everyone", type: "C" },
      { text: "Avoid drama, just do my job", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sebelum weekend, ritualmu...",
    options: [
      { text: "Clear semua pending tasks", type: "A" },
      { text: "Plan dan prep for next week", type: "B" },
      { text: "TGIF celebration sama temen", type: "C" },
      { text: "Clock out tepat jam 5", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Meeting yang bikin kamu excited...",
    options: [
      { text: "Strategic planning sessions", type: "A" },
      { text: "Deep-dive problem solving", type: "B" },
      { text: "Team bonding activities", type: "C" },
      { text: "Meeting? Yang singkat aja please", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Outfit kerja andalan kamu...",
    options: [
      { text: "Always sharp dan polished", type: "A" },
      { text: "Smart casual, presentable", type: "B" },
      { text: "Stylish dengan personal touch", type: "C" },
      { text: "Whatever is clean dan comfortable", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau dapat kerjaan tambahan mendadak...",
    options: [
      { text: "Opportunity to shine, take it!", type: "A" },
      { text: "Assess impact ke current workload", type: "B" },
      { text: "Check sama tim, bisa bantu bareng", type: "C" },
      { text: "Calculate overtime atau decline politely", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hubungan dengan bos...",
    options: [
      { text: "Professional dan ambitious", type: "A" },
      { text: "Respectful dan reliable", type: "B" },
      { text: "Friendly tapi tetap profesional", type: "C" },
      { text: "Minimal interaction, just enough", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Alasan bertahan di kerjaan...",
    options: [
      { text: "Growth opportunities dan career path", type: "A" },
      { text: "Stability dan good benefits", type: "B" },
      { text: "Amazing colleagues dan culture", type: "C" },
      { text: "Pays the bills, fine for now", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Corporate Climber",
    emoji: "📈",
    description: "Kamu adalah anak kantoran yang ambitious! Career-focused, always looking for growth, dan ga mau stuck di satu posisi. You're on your way to the top!",
    traits: ["Ambitious", "Driven", "Strategic", "Professional"],
    strengths: ["Clear career goals", "Proactive", "Respected by management"],
    weaknesses: ["Work-life balance?", "Can burn bridges", "Stress levels high"],
    tips: ["Rest is productive too", "Build genuine relationships", "Enjoy the journey"],
  },
  B: {
    type: "B",
    title: "The Reliable Professional",
    emoji: "💼",
    description: "Kamu adalah backbone kantor! Consistent, dependable, dan always deliver. Management trusts you dan colleagues rely on you. You're the steady hand.",
    traits: ["Reliable", "Organized", "Professional", "Consistent"],
    strengths: ["Trusted employee", "Stable presence", "Quality work"],
    weaknesses: ["May play it safe", "Overlooked for promotions", "Comfort zone trap"],
    tips: ["Take calculated risks", "Speak up more", "Your value is high, ask for it"],
  },
  C: {
    type: "C",
    title: "The Office Social Butterfly",
    emoji: "🦋",
    description: "Kamu adalah life of the office! Everyone knows you, likes you, dan you make work fun. Your connections span all departments. Culture champion!",
    traits: ["Social", "Friendly", "Connected", "Positive"],
    strengths: ["Strong network", "Good culture fit", "Influence across teams"],
    weaknesses: ["Distracted by social", "May seem not serious", "Politics risk"],
    tips: ["Balance social dengan output", "Document achievements", "Be strategic with energy"],
  },
  D: {
    type: "D",
    title: "The Quiet Contributor",
    emoji: "🌿",
    description: "Kamu adalah anak kantoran yang chill! Work to live, not live to work. You do your job well tapi maintain boundaries. Life outside work matters!",
    traits: ["Balanced", "Efficient", "Independent", "Low-drama"],
    strengths: ["Good boundaries", "Stress-free", "Consistent output"],
    weaknesses: ["May miss opportunities", "Perceived as disengaged", "Limited visibility"],
    tips: ["Some visibility helps career", "Build key relationships", "Show passion occasionally"],
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
