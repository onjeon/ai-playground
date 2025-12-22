// Jenis Procrastinator Apa Kau?
// Tangguh kerja semua orang buat, tapi gaya lain-lain!

export const questions = [
  {
    id: 1,
    question: "Assignment deadline esok. Sekarang kau tengah...",
    options: [
      { text: "Kemas bilik dulu, bilik bersih baru boleh focus", type: "A" },
      { text: "Scroll TikTok 'kejap je'... 3 jam kemudian...", type: "B" },
      { text: "Research berlebihan tapi tak start tulis", type: "C" },
      { text: "Panic attack sambil stare at blank document", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila kau paling productive?",
    options: [
      { text: "Lepas kemas semua benda yang tak perlu kemas", type: "A" },
      { text: "Lepas habis tengok 'satu episode lagi'", type: "B" },
      { text: "Lepas plan/research berhari-hari", type: "C" },
      { text: "Last minute je, dengan adrenaline rush!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kawan tanya 'dah siap ke?' Kau jawab...",
    options: [
      { text: "Almost! (baru nak mula sebenarnya)", type: "A" },
      { text: "Err... ada progress sikit... (tiada)", type: "B" },
      { text: "Aku tengah research lagi, nak perfect!", type: "C" },
      { text: "JANGAN TANYA, AKU STRESS!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kau 'prepare' untuk buat kerja?",
    options: [
      { text: "Susun meja, buat kopi, basuh pinggan dulu", type: "A" },
      { text: "Check social media sekali lagi je...", type: "B" },
      { text: "Buat to-do list yang super detailed", type: "C" },
      { text: "Duduk depan laptop sambil contemplate life", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Yang paling sering jadi alasan kau untuk tangguh?",
    options: [
      { text: "Kena settle benda lain dulu baru clear", type: "A" },
      { text: "Aku reward diri sendiri dulu before start", type: "B" },
      { text: "Tak cukup info lagi, kena research lebih", type: "C" },
      { text: "Tak tahu nak start dari mana!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Deadline dalam 1 minggu. Day 1-3 kau biasanya...",
    options: [
      { text: "Buat kerja rumah yang tertangguh bertahun", type: "A" },
      { text: "Binge watch series baru", type: "B" },
      { text: "Plan dan outline berulang kali", type: "C" },
      { text: "Tell myself 'masih ada masa' setiap hari", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila kau ACTUALLY start buat kerja?",
    options: [
      { text: "Lepas semua 'urgent' tasks done (yang tak urgent pun)", type: "A" },
      { text: "Lepas habis semua entertainment options", type: "B" },
      { text: "Lepas plan dah 'perfect' (never)", type: "C" },
      { text: "Bila deadline dah depan mata!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Productivity kau macam mana?",
    options: [
      { text: "Tinggi! ...untuk benda yang bukan kerja sebenar", type: "A" },
      { text: "Zero, tapi entertainment game strong", type: "B" },
      { text: "Banyak planning, sikit execution", type: "C" },
      { text: "Extreme bursts followed by extreme rest", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Guilty pleasure kau masa procrastinate?",
    options: [
      { text: "Reorganize benda yang dah organized", type: "A" },
      { text: "Social media deep dive", type: "B" },
      { text: "Research rabbit holes", type: "C" },
      { text: "Nap/stare into space/existential crisis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kerja finally siap! Quality macam mana?",
    options: [
      { text: "Decent, sebab aku perfectionist dalam benda lain", type: "A" },
      { text: "Okay la, pass je requirement", type: "B" },
      { text: "Either over-researched or rushed", type: "C" },
      { text: "Surprisingly good for last minute work!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Productive Procrastinator 🧹",
    emoji: "🧹",
    description: "Kau procrastinate dengan cara paling sneaky - buat kerja LAIN! Bilik kau paling bersih bila ada deadline. Kau convince diri sendiri yang kemas rumah tu 'productive' jugak. Technically betul, tapi assignment tu masih kosong!",
    traits: ["Procrastinate dengan productive tasks", "Bilik bersih = deadline dekat", "Master of avoidance", "Guilt-free(ish) procrastinator"],
    strengths: ["At least something gets done!", "House always clean", "Good at multitasking"],
    weaknesses: ["Wrong priorities", "Exhausted from 'productive' avoidance"],
    tips: ["Start dengan kerja sebenar 15 minit dulu", "Reward yourself dengan cleaning AFTER"],
  },
  B: {
    type: "B",
    title: "The Pleasure Seeker 📱",
    emoji: "📱",
    description: "Kau procrastinate dengan pure entertainment! 'Satu video je' = 4 jam kemudian. Phone screen time kau breaking records. Kau tahu kau patut buat kerja, tapi TikTok/YouTube/Netflix tu calling!",
    traits: ["Entertainment addict", "Master of 'one more episode'", "Screen time champion", "Dopamine chaser"],
    strengths: ["Know all the trends", "Great at relaxing", "Pop culture expert"],
    weaknesses: ["Time blindness is real", "Hard to stop once started"],
    tips: ["Use app timers!", "Put phone in different room"],
  },
  C: {
    type: "C",
    title: "The Perfectionist Planner 📋",
    emoji: "📋",
    description: "Kau procrastinate dengan PLANNING! To-do list kau cantik, color-coded, detailed... tapi kerja tak start-start. Kau research sampai overkill sebab takut tak perfect. Analysis paralysis is real untuk kau!",
    traits: ["Over-planner", "Research obsessed", "Fear of imperfection", "List maker extraordinaire"],
    strengths: ["Super organized plans", "Well-researched when you start", "Attention to detail"],
    weaknesses: ["Never actually start", "Perfectionism = paralysis"],
    tips: ["Done is better than perfect!", "Just start, edit later"],
  },
  D: {
    type: "D",
    title: "The Adrenaline Junkie 🔥",
    emoji: "🔥",
    description: "Kau PERLU last-minute pressure untuk function! Deadline tomorrow? THAT'S when magic happens! Kau work best dengan adrenaline pumping. Somehow kau always deliver, tapi stress level kau... astronomik!",
    traits: ["Last minute warrior", "Thrives under pressure", "All-nighter champion", "Deadline dependent"],
    strengths: ["Performs under pressure", "Quick worker when motivated", "Somehow always makes it"],
    weaknesses: ["STRESS LEVEL MAX", "Quality inconsistent", "Health? What health?"],
    tips: ["Create fake earlier deadlines", "Reward yourself for early completion"],
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
