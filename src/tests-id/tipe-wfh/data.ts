// Tipe Kamu Saat WFH (Work From Home)
// Tes ini mengungkap personality kamu saat kerja dari rumah!

export const questions = [
  {
    id: 1,
    question: "Pagi hari saat WFH, rutinitas kamu...",
    options: [
      { text: "Bangun pagi, mandi, kerja seperti di kantor", type: "A" },
      { text: "Setup workspace rapi dulu baru mulai", type: "B" },
      { text: "Sarapan sambil video call sama tim", type: "C" },
      { text: "Kerja langsung dari kasur dengan piyama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Outfit WFH favoritmu...",
    options: [
      { text: "Tetap rapi, at least bagian atas", type: "A" },
      { text: "Nyaman tapi presentable kalau ada call", type: "B" },
      { text: "Kaos santai, yang penting nyaman", type: "C" },
      { text: "Piyama all day, kenapa harus ganti?", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Spot kerja favoritmu di rumah...",
    options: [
      { text: "Dedicated home office dengan meja proper", type: "A" },
      { text: "Meja makan dengan setup dual monitor", type: "B" },
      { text: "Rotasi: sofa, balkon, coffee shop", type: "C" },
      { text: "Kasur, obviously", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat jam makan siang WFH...",
    options: [
      { text: "Break tepat waktu, jaga schedule", type: "A" },
      { text: "Masak sekalian meal prep", type: "B" },
      { text: "Lunch call sambil makan bareng tim virtual", type: "C" },
      { text: "Makan kapan aja, snacking terus", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Productivitymu saat WFH dibanding WFO...",
    options: [
      { text: "Sama produktifnya, discipline is key", type: "A" },
      { text: "Lebih produktif, less distraction", type: "B" },
      { text: "Tergantung mood dan tim", type: "C" },
      { text: "Honestly... agak turun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cara kamu handle distraction di rumah...",
    options: [
      { text: "Strict schedule dan boundaries", type: "A" },
      { text: "Noise cancelling headphones dan focus apps", type: "B" },
      { text: "Kabur ke coffee shop kalau rame", type: "C" },
      { text: "Accept aja, part of WFH life", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat harus video call mendadak...",
    options: [
      { text: "Selalu siap, camera on!", type: "A" },
      { text: "Quick touch up, terus camera on", type: "B" },
      { text: "Camera on, background blur", type: "C" },
      { text: "Camera off, mic only please", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jam kerja WFH kamu biasanya...",
    options: [
      { text: "9-5 strict seperti di kantor", type: "A" },
      { text: "Flexible tapi total hours sama", type: "B" },
      { text: "Sesuai tim, bisa overtime bareng", type: "C" },
      { text: "Honestly gatau, blur semua", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kangen apa saat WFH lama...",
    options: [
      { text: "Routine dan struktur kantor", type: "A" },
      { text: "Fasilitas dan equipment kantor", type: "B" },
      { text: "Ngobrol langsung sama colleagues", type: "C" },
      { text: "Nothing, WFH is the best!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Challenge terbesar WFH menurutmu...",
    options: [
      { text: "Menjaga work-life boundaries", type: "A" },
      { text: "Setup yang adequate", type: "B" },
      { text: "Communication dan collaboration", type: "C" },
      { text: "Motivasi dan focus", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tools WFH yang paling penting buatmu...",
    options: [
      { text: "Calendar dan task manager", type: "A" },
      { text: "Multiple monitors dan good WiFi", type: "B" },
      { text: "Slack/Teams untuk stay connected", type: "C" },
      { text: "Netflix... eh maksudnya Spotify for focus", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau disuruh balik WFO full time...",
    options: [
      { text: "Oke, actually prefer struktur kantor", type: "A" },
      { text: "Nego hybrid arrangement", type: "B" },
      { text: "Sedih tapi ikut aja kalau harus", type: "C" },
      { text: "Mungkin cari kerjaan lain yang remote", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Disciplined Professional",
    emoji: "💼",
    description: "Kamu adalah role model WFH! Tetap maintain profesionalisme dan routine meski kerja dari rumah. Discipline-mu bikin kamu sama produktifnya di mana aja.",
    traits: ["Disiplin", "Professional", "Structured", "Reliable"],
    strengths: ["Consistent output", "Clear boundaries", "Trusted by management"],
    weaknesses: ["Bisa terlalu rigid", "Kurang embrace flexibility WFH", "Stress sendiri"],
    tips: ["Sesekali embrace casual Friday", "Flexibility is a WFH perk, use it", "Don't be too hard on yourself"],
  },
  B: {
    type: "B",
    title: "The Optimized Worker",
    emoji: "🖥️",
    description: "Kamu sudah master WFH setup! Invest di equipment, optimize workflow, dan actually lebih produktif dari rumah. Home office-mu adalah productivity haven.",
    traits: ["Efficient", "Tech-savvy", "Self-sufficient", "Focused"],
    strengths: ["Peak productivity", "Great setup", "Independent worker"],
    weaknesses: ["Bisa terlalu isolated", "Over-optimize everything", "Forget to take breaks"],
    tips: ["Schedule social interactions", "Sometimes good enough is enough", "Touch grass occasionally"],
  },
  C: {
    type: "C",
    title: "The Connected Collaborator",
    emoji: "🤝",
    description: "Kamu adalah social butterfly bahkan saat WFH! Always find ways to stay connected sama tim. Meski remote, relationships tetap priority.",
    traits: ["Social", "Collaborative", "Flexible", "Team-oriented"],
    strengths: ["Maintain team bonds", "Good communication", "Adaptable"],
    weaknesses: ["Bisa distracted by chats", "FOMO on office activities", "Productivity bisa fluctuate"],
    tips: ["Balance social time dengan deep work", "It's okay to go offline sometimes", "Schedule focused blocks"],
  },
  D: {
    type: "D",
    title: "The Comfort Seeker",
    emoji: "🛋️",
    description: "Kamu full embrace WFH lifestyle! Comfort is priority dan kamu enjoy the freedom. Meski looks casual, kamu tetap deliver... dengan cara kamu sendiri.",
    traits: ["Relaxed", "Comfortable", "Independent", "Non-conformist"],
    strengths: ["Low stress", "Work-life blend", "Authentic"],
    weaknesses: ["Productivity challenges", "Boundaries blur", "May look unprofessional"],
    tips: ["Find balance antara comfort dan productivity", "Create some routine", "Get dressed sometimes, it helps!"],
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
