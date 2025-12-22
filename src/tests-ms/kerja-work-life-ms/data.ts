// Work-Life Balance Kau
// How balanced is your work-life situation?

export const questions = [
  {
    id: 1,
    question: "Pukul 6 petang, laptop kau...",
    options: [
      { text: "Dah tutup dari 5:55pm!", type: "A" },
      { text: "Tutup kalau takde urgent", type: "B" },
      { text: "Still on, siapkan sikit lagi", type: "C" },
      { text: "On sampai tengah malam biasa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend, kau check work email...",
    options: [
      { text: "Never! Weekend adalah sacred!", type: "A" },
      { text: "Glance sekali je, tak reply", type: "B" },
      { text: "Check dan reply yang urgent", type: "C" },
      { text: "Constantly, macam weekday", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Annual leave kau tahun ni...",
    options: [
      { text: "Habis semua! Travel dan rest!", type: "A" },
      { text: "Guna most of it untuk holiday", type: "B" },
      { text: "Ada banyak balance lagi...", type: "C" },
      { text: "Carry forward je, bila nak ambil?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila cuti, kau still fikir pasal kerja?",
    options: [
      { text: "Kerja apa? Work mode off completely!", type: "A" },
      { text: "Kadang-kadang terlintas sikit", type: "B" },
      { text: "Sentiasa check updates", type: "C" },
      { text: "Tak boleh relax, always on call", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hobbies dan interests kau...",
    options: [
      { text: "Active! Gym, hobbies, social life happening!", type: "A" },
      { text: "Ada je activities, cukup balance", type: "B" },
      { text: "Apa tu hobby? Tak sempat...", type: "C" },
      { text: "My hobby is work apparently", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Makan malam dengan family/friends, kau...",
    options: [
      { text: "Phone silent, full attention!", type: "A" },
      { text: "Check sekali-sekala je", type: "B" },
      { text: "One eye on phone, one eye on food", type: "C" },
      { text: "Sorry kena reply ni... kejap...", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Boss text weekend malam, kau...",
    options: [
      { text: "Reply Monday je, weekends off", type: "A" },
      { text: "Depends urgency, most time ignore", type: "B" },
      { text: "Reply tapi brief je", type: "C" },
      { text: "Reply immediately, boss is priority", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Last time kau betul-betul relax tanpa fikir kerja...",
    options: [
      { text: "Semalam! Every day ada me-time!", type: "A" },
      { text: "Last weekend kot", type: "B" },
      { text: "Hmm... lama dah tak ingat", type: "C" },
      { text: "What is relax? I forgot the feeling", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Definition success dalam hidup kau...",
    options: [
      { text: "Happy life, good relationships, health", type: "A" },
      { text: "Balance - career okay, life okay", type: "B" },
      { text: "Career first, life will follow", type: "C" },
      { text: "Climb corporate ladder, whatever it takes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Friends kata kau ni...",
    options: [
      { text: "Always ada untuk hangout!", type: "A" },
      { text: "Busy tapi still boleh catch up", type: "B" },
      { text: "Hard to schedule, selalu kerja", type: "C" },
      { text: "Strangers dah basically, never free", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Work-Life Warrior",
    emoji: "⚖️",
    description: "Kau adalah poster child untuk work-life balance! Clear boundaries, full life outside work. Career tak sacrifice, tapi life juga tak sacrifice!",
    traits: ["Clear boundaries", "Time management pro", "Prioritize wellbeing", "Full life"],
    strengths: ["Sustainable career", "Happy personal life", "Mental health on point"],
    weaknesses: ["May miss career opportunities?", "Others may see as 'not committed'"],
    tips: ["Keep doing what you're doing!", "Inspire others to follow"],
  },
  B: {
    type: "B",
    title: "Balance Seeker",
    emoji: "🎯",
    description: "Kau cuba balance dan mostly succeed! Sometimes kerja lebih sikit, tapi compensate balik. Healthy approach overall!",
    traits: ["Generally balanced", "Flexible boundaries", "Adaptable", "Self-aware"],
    strengths: ["Sustainable pace", "Reasonable balance", "Both areas okay"],
    weaknesses: ["Sometimes work creeps in", "Could set firmer boundaries"],
    tips: ["Strengthen boundaries sikit", "Protect personal time lebih"],
  },
  C: {
    type: "C",
    title: "Work Leaning",
    emoji: "💼",
    description: "Scales tip towards work for you! Career ambitious, tapi personal life sometimes kena sacrificed. Still functioning, tapi... balance?",
    traits: ["Career-focused", "Work prioritized", "Limited personal time", "Achievement-driven"],
    strengths: ["Career progression", "Reliable at work", "Ambitious"],
    weaknesses: ["Personal relationships suffer", "Burnout risk high"],
    tips: ["Set boundaries before too late", "Life is more than work"],
  },
  D: {
    type: "D",
    title: "Workaholic Alert!",
    emoji: "🔥",
    description: "Work-life balance? More like work-work balance! Kau live to work, bukan work to live. Career mungkin gempak, tapi at what cost?",
    traits: ["Extreme work focus", "Always available", "Career is everything", "Life? What life?"],
    strengths: ["Impressive career", "Super dedicated", "Boss loves you"],
    weaknesses: ["Burnout incoming", "Relationships strained", "Health at risk"],
    tips: ["URGENT: Reassess priorities!", "Career means nothing without health"],
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
