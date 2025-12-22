// Gaya Karaoke Kamu
// Tes ini mengungkap personality kamu saat karaoke!

export const questions = [
  {
    id: 1,
    question: "Song selection style...",
    options: [
      { text: "My signature songs, always same", type: "A" },
      { text: "Check trending/recommended", type: "B" },
      { text: "Group sing-along favorites", type: "C" },
      { text: "Random, depends on mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre favorit untuk karaoke...",
    options: [
      { text: "Pop hits yang semua tau", type: "A" },
      { text: "Ballads, showcase vocals", type: "B" },
      { text: "Dangdut/koplo, party mode", type: "C" },
      { text: "Rock/metal, headbang time", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Performance style...",
    options: [
      { text: "Serious singing, hit the notes", type: "A" },
      { text: "Entertainment, full performance", type: "B" },
      { text: "Fun, doesn't matter if fals", type: "C" },
      { text: "Shy, minimal performance", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Mengambil mic...",
    options: [
      { text: "First up, confident!", type: "A" },
      { text: "After few people warm up", type: "B" },
      { text: "Only for group songs", type: "C" },
      { text: "Have to be convinced", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Duet songs...",
    options: [
      { text: "Love it! Find the right partner", type: "A" },
      { text: "Fun untuk special songs", type: "B" },
      { text: "Prefer solo, my moment", type: "C" },
      { text: "Group songs better", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat orang lain nyanyi...",
    options: [
      { text: "Queue my next song", type: "A" },
      { text: "Ikut nyanyi/backing vocal", type: "B" },
      { text: "Makan, minum, enjoy", type: "C" },
      { text: "Check phone honestly", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Karaoke snacks and drinks...",
    options: [
      { text: "Essential! Order banyak", type: "A" },
      { text: "Some snacks to share", type: "B" },
      { text: "Drinks untuk liquid courage", type: "C" },
      { text: "Not hungry, focus singing", type: "D" },
    ],
  },
  {
    id: 8,
    question: "High notes in songs...",
    options: [
      { text: "Go for it, hit or miss", type: "A" },
      { text: "Know my range, adjust key", type: "B" },
      { text: "Scream through it, fun!", type: "C" },
      { text: "Choose songs tanpa high notes", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Karaoke frequency...",
    options: [
      { text: "Regular activity, love it", type: "A" },
      { text: "Few times a year", type: "B" },
      { text: "Special occasions only", type: "C" },
      { text: "Avoid if possible", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Scoring system reaction...",
    options: [
      { text: "Competitive, aim for high score", type: "A" },
      { text: "Check for fun, tidak serius", type: "B" },
      { text: "Ignore, who cares", type: "C" },
      { text: "Malu kalau score rendah", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Memorable karaoke moment...",
    options: [
      { text: "Nailing a difficult song", type: "A" },
      { text: "Fun group performance", type: "B" },
      { text: "Drunk singing adventures", type: "C" },
      { text: "Don't have one really", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Post-karaoke throat...",
    options: [
      { text: "Serak tapi worth it", type: "A" },
      { text: "Fine, didn't overdo it", type: "B" },
      { text: "Destroyed, sang too much", type: "C" },
      { text: "Fresh, didn't sing much", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Karaoke Star",
    emoji: "🎤",
    description: "Karaoke adalah your stage! Confident, prepared playlist, dan treat every session like concert. You own the mic dan everyone knows it!",
    traits: ["Confident", "Prepared", "Performer", "Passionate"],
    strengths: ["Great entertainment", "Set the energy", "Memorable performances"],
    weaknesses: ["Mic hogger maybe?", "Others might feel intimidated"],
    tips: ["Share the spotlight", "Encourage shy friends", "Your energy is contagious!"],
  },
  B: {
    type: "B",
    title: "The Social Singer",
    emoji: "🎶",
    description: "Karaoke adalah social activity! About having fun together, singing favorites, dan making memories. Balance antara perform dan enjoy!",
    traits: ["Social", "Balanced", "Fun-loving", "Team player"],
    strengths: ["Good karaoke companion", "Know when to shine", "Everyone comfortable"],
    weaknesses: ["Could push yourself more"],
    tips: ["Try that high note!", "Your balance is perfect"],
  },
  C: {
    type: "C",
    title: "The Party Singer",
    emoji: "🎉",
    description: "Karaoke = PARTY! Doesn't matter if fals, yang penting fun. Group songs, koplo, dan maximum energy. No judgement zone!",
    traits: ["Fun-focused", "Energetic", "Carefree", "Party animal"],
    strengths: ["Maximum fun", "Create party atmosphere", "No inhibitions"],
    weaknesses: ["Throat might suffer", "Some songs... interesting"],
    tips: ["Pace yourself!", "Water between songs", "Your energy is amazing!"],
  },
  D: {
    type: "D",
    title: "The Reluctant Singer",
    emoji: "😅",
    description: "Karaoke is not really your thing! Go untuk friends, sing kalau forced, dan prefer watching. Audience role valid!",
    traits: ["Reserved", "Shy", "Observer", "Supportive"],
    strengths: ["Great audience", "Support others", "Not attention-seeking"],
    weaknesses: ["Miss the fun of singing", "Might seem disengaged"],
    tips: ["Everyone sounds bad at karaoke!", "Try group songs first", "Liquid courage helps (responsibly!)"],
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
