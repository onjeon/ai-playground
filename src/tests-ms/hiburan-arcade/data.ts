// Gaya Arcade Anda
// Macam mana anda di arcade?

export const questions = [
  {
    id: 1,
    question: "Bila masuk arcade, anda terus pergi...",
    options: [
      { text: "Claw machine - nak menang plushie!", type: "A" },
      { text: "Racing games - adrenaline!", type: "B" },
      { text: "Basketball/skill games", type: "C" },
      { text: "Tengok orang main je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Token/credit arcade anda habis macam mana?",
    options: [
      { text: "Claw machine sampai menang!", type: "A" },
      { text: "Pelbagai games untuk variety", type: "B" },
      { text: "Satu game je sampai pro", type: "C" },
      { text: "Beli sikit je, jimat", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Main claw machine, strategi anda?",
    options: [
      { text: "Study dulu position, then strike!", type: "A" },
      { text: "Try luck je beberapa kali", type: "B" },
      { text: "Tak main, waste of money", type: "C" },
      { text: "Tengok orang menang, happy je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Racing game arcade, anda pilih...",
    options: [
      { text: "Sit-down full motion seat!", type: "A" },
      { text: "Standard steering wheel", type: "B" },
      { text: "Motor racing", type: "C" },
      { text: "Tak minat racing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dance/rhythm games macam mana?",
    options: [
      { text: "Main sampai high score!", type: "A" },
      { text: "Try untuk fun, tak kisah score", type: "B" },
      { text: "Malu, tengok je orang main", type: "C" },
      { text: "Tak minat rhythm games", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ticket redemption games, anda...",
    options: [
      { text: "Collect tickets untuk big prize!", type: "A" },
      { text: "Tukar dengan candy je", type: "B" },
      { text: "Give tickets pada budak kecik", type: "C" },
      { text: "Tak main ticket games", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pergi arcade dengan siapa?",
    options: [
      { text: "Gang besar - lebih fun!", type: "A" },
      { text: "Best friend atau partner", type: "B" },
      { text: "Solo - focus on gaming", type: "C" },
      { text: "Ikut je bila kawan ajak", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Budget arcade anda berapa?",
    options: [
      { text: "Unlimited bila dah start!", type: "A" },
      { text: "Set budget, stick to it", type: "B" },
      { text: "Sikit je, save money", type: "C" },
      { text: "Kawan belanja je pergi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila menang prize kat arcade...",
    options: [
      { text: "Show off, post Instagram!", type: "A" },
      { text: "Happy, simpan sebagai kenangan", type: "B" },
      { text: "Gift pada someone special", type: "C" },
      { text: "Jarang menang pun", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Arcade experience ideal anda?",
    options: [
      { text: "Hours of gaming sampai tutup!", type: "A" },
      { text: "Couple hours, quality time", type: "B" },
      { text: "Quick visit, main sikit", type: "C" },
      { text: "Duduk café sebelah je", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Arcade Warrior",
    emoji: "🎮",
    description: "Arcade adalah battlefield anda! Token unlimited, target menang je. Competitive spirit sampai ke ujung! Skill on point!",
    traits: ["Competitive", "Determined", "Skilled", "Persistent"],
    strengths: ["High skill level", "Never gives up", "Fun to play with"],
    weaknesses: ["May overspend", "Too competitive"],
    tips: ["Set budget limit", "Remember to have fun!"],
  },
  B: {
    type: "B",
    title: "Casual Gamer",
    emoji: "🕹️",
    description: "Arcade untuk fun dan bonding! Anda enjoy experience tanpa stress. Win or lose, yang penting happy!",
    traits: ["Balanced", "Fun-seeker", "Social", "Relaxed"],
    strengths: ["Enjoys the experience", "Great company", "Responsible spending"],
    weaknesses: ["Could be more competitive", "Gives up easy"],
    tips: ["Challenge yourself sometimes", "Try new games!"],
  },
  C: {
    type: "C",
    title: "Selective Player",
    emoji: "🎯",
    description: "Anda tahu apa anda suka! Focus pada satu atau dua games je. Quality over quantity gaming!",
    traits: ["Focused", "Selective", "Skilled", "Efficient"],
    strengths: ["Expert in chosen games", "Doesn't waste money"],
    weaknesses: ["Miss out on variety", "Limited experience"],
    tips: ["Explore new games", "Variety is the spice of life!"],
  },
  D: {
    type: "D",
    title: "Arcade Tourist",
    emoji: "👀",
    description: "Arcade? Lebih suka tengok je! Anda enjoy atmosphere tanpa perlu main. Observer mode activated!",
    traits: ["Observer", "Economical", "Laid-back", "Content"],
    strengths: ["Saves money", "Enjoys the vibe", "Low pressure"],
    weaknesses: ["Missing out on fun", "Could participate more"],
    tips: ["Try playing sometimes!", "You might enjoy it"],
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
