// Gaya Plan Weekend
// Fun test tentang personality bila plan weekend

export const questions = [
  {
    id: 1,
    question: "Hari Jumaat petang, kau dah plan weekend?",
    options: [
      { text: "Dah plan awal minggu!", type: "A" },
      { text: "Rough idea ada la", type: "B" },
      { text: "Belum, tengok macam mana", type: "C" },
      { text: "Plan? What plan?", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend ideal kau macam mana?",
    options: [
      { text: "Packed dengan activities!", type: "A" },
      { text: "Balance antara keluar dan rehat", type: "B" },
      { text: "Mostly rehat kat rumah", type: "C" },
      { text: "Spontaneous, ikut mood!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kawan ajak keluar last minute Saturday night. Response?",
    options: [
      { text: "Sorry, dah ada plan!", type: "A" },
      { text: "Check schedule, kalau free boleh", type: "B" },
      { text: "Let's go! Nothing planned anyway!", type: "C" },
      { text: "Depends on mood dan tempat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sabtu pagi, biasanya kau?",
    options: [
      { text: "Bangun awal, nak maximize day!", type: "A" },
      { text: "Sleep in sikit, tapi tak too late", type: "B" },
      { text: "Tidur sampai tengahari!", type: "C" },
      { text: "Ikut badan, bila terjaga", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Weekend kena settle chores. Gaya kau?",
    options: [
      { text: "Sabtu pagi siapkan semua!", type: "A" },
      { text: "Spread out throughout weekend", type: "B" },
      { text: "Sunday malam last minute", type: "C" },
      { text: "What chores? Hire cleaner!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Long weekend coming. Apa plan kau?",
    options: [
      { text: "Trip dah book awal-awal!", type: "A" },
      { text: "Maybe short getaway nearby", type: "B" },
      { text: "Staycation kat rumah best!", type: "C" },
      { text: "Decide when the time comes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Plan tak jadi sebab hujan/hal lain. Reaction?",
    options: [
      { text: "Backup plan dah ada!", type: "A" },
      { text: "Sad tapi find alternative", type: "B" },
      { text: "Takpe, rehat je la", type: "C" },
      { text: "No plan means no disappointment!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ahad malam, feeling kau macam mana?",
    options: [
      { text: "Fulfilled! Productive weekend!", type: "A" },
      { text: "Okay, rested enough", type: "B" },
      { text: "Sunday scaries! Monday coming!", type: "C" },
      { text: "Baru nak start weekend feel!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Social media weekend posts kau?",
    options: [
      { text: "Post semua activities!", type: "A" },
      { text: "Selected moments je", type: "B" },
      { text: "Jarang post, enjoy privately", type: "C" },
      { text: "Story 24 jam non-stop!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Weekend spending biasanya?",
    options: [
      { text: "Budget untuk activities, worth it!", type: "A" },
      { text: "Moderate, controlled spending", type: "B" },
      { text: "Minimal, stay home cheap", type: "C" },
      { text: "YOLO spending, worry Monday!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Weekend Warrior",
    emoji: "⚔️",
    description: "Kau maximize setiap saat weekend! Plan awal, execute flawlessly, backup plan ready. Productive dan fulfilling - every weekend adalah mission!",
    traits: ["Organized", "Proactive", "Energetic", "Productive"],
    strengths: ["Never boring weekend", "Maximize free time", "Always stories to tell"],
    weaknesses: ["Might not rest enough", "Burnout risk"],
    tips: ["Schedule rest too", "It's okay to do nothing"],
  },
  B: {
    type: "B",
    title: "Balanced Weekender",
    emoji: "⚖️",
    description: "Perfect balance! Activity dan rest seimbang. Plan ada tapi flexible. Not too packed, not too empty. Healthy weekend relationship!",
    traits: ["Balanced", "Flexible", "Moderate", "Sensible"],
    strengths: ["Good life balance", "Rested dan refreshed", "No stress"],
    weaknesses: ["Might miss some adventures", "Too moderate"],
    tips: ["Try something crazy once in a while", "Push boundaries"],
  },
  C: {
    type: "C",
    title: "Home Base Champion",
    emoji: "🏠",
    description: "Weekend adalah sacred rest time! Rumah adalah happy place. Netflix, rehat, recharge. Social battery needs charging and home is the charger!",
    traits: ["Homebody", "Restful", "Content", "Low-key"],
    strengths: ["Truly rested", "Save money", "Recharge completely"],
    weaknesses: ["Might miss experiences", "Social connections"],
    tips: ["Go out sometimes", "Fresh air is nice too"],
  },
  D: {
    type: "D",
    title: "Spontaneous Spirit",
    emoji: "🎲",
    description: "No plans, no problems! Weekend adalah canvas untuk spontaneity. Wake up, see what happens. Best adventures are unplanned ones!",
    traits: ["Spontaneous", "Free-spirited", "Adventurous", "Flexible"],
    strengths: ["Open to anything", "No disappointments", "Exciting surprises"],
    weaknesses: ["Might waste time", "Miss good opportunities"],
    tips: ["Some planning is good", "Balance spontaneity with intention"],
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
