// Gaya Bila Public Holiday
// Fun test tentang personality masa public holiday

export const questions = [
  {
    id: 1,
    question: "Esok public holiday. Malam ni kau buat apa?",
    options: [
      { text: "Stay up late! Movie marathon!", type: "A" },
      { text: "Tidur awal, nak bangun fresh", type: "B" },
      { text: "Normal routine, nothing special", type: "C" },
      { text: "Plan esok punya aktiviti!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pagi public holiday, kau bangun pukul berapa?",
    options: [
      { text: "Tengahari! Sleep in habis!", type: "A" },
      { text: "Same time macam biasa", type: "B" },
      { text: "Awal sikit, nak maximize cuti", type: "C" },
      { text: "Ikut badan, bila terjaga", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Plan untuk public holiday biasanya?",
    options: [
      { text: "Stay home, rehat total!", type: "A" },
      { text: "Keluar jalan-jalan dengan family/friends", type: "B" },
      { text: "Catch up on work/chores", type: "C" },
      { text: "Spontaneous, ikut mood!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Public holiday + weekend = long weekend. Reaction?",
    options: [
      { text: "ROADTRIP TIME! Book hotel!", type: "A" },
      { text: "Nice! Extra rest day!", type: "B" },
      { text: "Same je, tak pergi mana", type: "C" },
      { text: "Family gathering time!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tengah hari public holiday, apa aktiviti kau?",
    options: [
      { text: "Netflix binge dengan snacks!", type: "A" },
      { text: "Lunch kat luar, explore makan", type: "B" },
      { text: "Kemas rumah atau buat kerja", type: "C" },
      { text: "Nap! Power nap panjang!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Replacement holiday bila cuti jatuh weekend. Feeling?",
    options: [
      { text: "YESSSS! Extra cuti!", type: "A" },
      { text: "Nice bonus la", type: "B" },
      { text: "Tak effect, kerja je", type: "C" },
      { text: "Depends on bila replacement", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Public holiday tapi kena kerja. Mood kau?",
    options: [
      { text: "Sedih gila! Unfair!", type: "A" },
      { text: "Takpe, dapat replacement", type: "B" },
      { text: "Part of job, terima je", type: "C" },
      { text: "At least dapat OT pay!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Shopping mall mesti packed time public holiday. Kau pergi?",
    options: [
      { text: "Avoid! Stay home!", type: "A" },
      { text: "Pergi je, part of holiday feel", type: "B" },
      { text: "Pagi awal before crowd", type: "C" },
      { text: "Malam sikit, crowd dah kurang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Makan apa biasanya public holiday?",
    options: [
      { text: "Order delivery, malas masak!", type: "A" },
      { text: "Makan luar, treat day!", type: "B" },
      { text: "Masak sendiri, quality time", type: "C" },
      { text: "Ikut je apa ada", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Public holiday dah habis. Feeling balik kerja?",
    options: [
      { text: "Sedih! Nak cuti lagi!", type: "A" },
      { text: "Recharged dan ready!", type: "B" },
      { text: "Biasa je, life goes on", type: "C" },
      { text: "Already planning next cuti!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cuti Maximizer",
    emoji: "🛋️",
    description: "Public holiday untuk kau adalah REST DAY total! Sleep in, Netflix, delivery food - full relaxation mode. Work? What work? Cuti adalah sacred!",
    traits: ["Rest-focused", "Home body", "Relaxation expert", "Sleep lover"],
    strengths: ["True rest achieved", "Recharge completely", "Stress-free"],
    weaknesses: ["Might waste day", "Miss outdoor fun"],
    tips: ["Balance rest with activity", "Go out sikit"],
  },
  B: {
    type: "B",
    title: "Active Holiday-er",
    emoji: "🌟",
    description: "Cuti untuk kau adalah time to do things! Keluar makan, shopping, activities - maximize the freedom! Work hard, play hard mentality!",
    traits: ["Active", "Social", "Adventure seeker", "Energetic"],
    strengths: ["Memorable holidays", "Social connections", "New experiences"],
    weaknesses: ["Might not rest enough", "Come back tired"],
    tips: ["Rest is important too", "Don't overbook"],
  },
  C: {
    type: "C",
    title: "Productive Holiday Person",
    emoji: "📋",
    description: "Public holiday = time to catch up! Chores, errands, work stuff yang pending. Productive use of free time. Can't waste a good day off!",
    traits: ["Productive", "Practical", "Efficient", "Task-oriented"],
    strengths: ["Get things done", "No backlog", "Efficient time use"],
    weaknesses: ["Miss relaxation", "Burnout risk"],
    tips: ["Cuti is for rest tau", "Allow yourself to do nothing"],
  },
  D: {
    type: "D",
    title: "Spontaneous Holiday Viber",
    emoji: "🎲",
    description: "No plans, no stress! Public holiday untuk kau adalah go with the flow. Wake up late, see what happens, spontaneous decisions. Live in the moment!",
    traits: ["Spontaneous", "Flexible", "Carefree", "Present-focused"],
    strengths: ["No pressure", "Open to anything", "Enjoy surprises"],
    weaknesses: ["Might miss opportunities", "No memorable plans"],
    tips: ["Some planning is good", "Set one goal per cuti"],
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
