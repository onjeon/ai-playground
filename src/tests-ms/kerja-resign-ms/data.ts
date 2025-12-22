// Bila Rasa Nak Resign
// When do you feel like quitting? (Funny take!)

export const questions = [
  {
    id: 1,
    question: "Alarm pagi berbunyi. First thought?",
    options: [
      { text: "Okay, another day another opportunity!", type: "A" },
      { text: "Hmm okay, let's do this", type: "B" },
      { text: "Resign letter template tengok kejap...", type: "C" },
      { text: "Calculate berapa lama boleh survive kalau quit", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Boss call kau masuk room. First reaction?",
    options: [
      { text: "Excited! Maybe good news!", type: "A" },
      { text: "Normal je, tengok apa dia nak", type: "B" },
      { text: "Apa salah aku kali ni...", type: "C" },
      { text: "Bagus! Aku pun nak cakap something!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Scroll LinkedIn, kau rasa...",
    options: [
      { text: "Happy dengan current job, networking je", type: "A" },
      { text: "Tengok opportunities, compare sikit", type: "B" },
      { text: "Apply 5 jobs dah minggu ni", type: "C" },
      { text: "Easy Apply semua! Fire away!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jumpa kawan, dia tanya pasal kerja. Kau...",
    options: [
      { text: "Share good stuff, enjoy kerja!", type: "A" },
      { text: "Okay je, ada pros cons", type: "B" },
      { text: "Vent session bermula...", type: "C" },
      { text: "Tolong carikan job kat tempat kau!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sunday malam, fikir pasal Monday...",
    options: [
      { text: "Looking forward actually!", type: "A" },
      { text: "Biasa je, part of life", type: "B" },
      { text: "Dread level: maximum", type: "C" },
      { text: "Google: 'how to fake death and start new life'", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gaji masuk! Feeling?",
    options: [
      { text: "Worth it untuk effort kau!", type: "A" },
      { text: "Okay la, cukup untuk survive", type: "B" },
      { text: "Not enough untuk mental damage", type: "C" },
      { text: "Bayaran trauma counseling pun tak cover", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Colleague baru join, kau advice...",
    options: [
      { text: "Welcome! Best place to work!", type: "A" },
      { text: "Share tips untuk succeed", type: "B" },
      { text: "Run while you still can (dalam hati)", type: "C" },
      { text: "Bro, why you join? Aku pun nak keluar!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Company announce new policy yang kau tak suka. Reaksi?",
    options: [
      { text: "Give it a chance, maybe ada sebab", type: "A" },
      { text: "Accept je, part of corporate life", type: "B" },
      { text: "Update resume immediately", type: "C" },
      { text: "This is THE sign! Time to go!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila fikir kerja sekarang, dominant emotion...",
    options: [
      { text: "Grateful dan satisfied", type: "A" },
      { text: "Neutral, it's just a job", type: "B" },
      { text: "Frustrated dan stuck", type: "C" },
      { text: "Desperate nak escape", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Fantasy paling kerap pasal kerja...",
    options: [
      { text: "Promotion dan growth!", type: "A" },
      { text: "Maintain steady, enjoy life", type: "B" },
      { text: "Dramatic resignation scene", type: "C" },
      { text: "Win lottery, bye company!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Loyal Employee",
    emoji: "💚",
    description: "Resign? What's that? Kau love your job macam love your life! Company poster employee, HR's favorite success story!",
    traits: ["Job satisfaction high", "Loyal", "Positive outlook", "Grateful"],
    strengths: ["Stable career", "Good mental health", "Found your place"],
    weaknesses: ["May miss better opportunities?", "Too comfortable?"],
    tips: ["Keep evaluating kalau still growing", "Comfort zone can limit growth"],
  },
  B: {
    type: "B",
    title: "Realistic Worker",
    emoji: "🤷",
    description: "Kerja adalah kerja. Tak love, tak hate. Bills kena bayar, job ada, cukup la. Grass is grass everywhere!",
    traits: ["Pragmatic", "Balanced view", "No drama", "Realistic expectations"],
    strengths: ["No extreme emotions about work", "Stable mindset", "Sustainable"],
    weaknesses: ["May lack passion", "Could be more engaged"],
    tips: ["Find something yang excite kau about work", "Small joys matter"],
  },
  C: {
    type: "C",
    title: "Resignation Contemplator",
    emoji: "🚪",
    description: "Resign letter template dah save dalam phone! Setiap bad day, kau revisit that document. One foot in, one foot out!",
    traits: ["Dissatisfied", "Actively looking", "Complain enthusiast", "Escape planner"],
    strengths: ["Aware of what you don't want", "Open to change", "Active job searcher"],
    weaknesses: ["Negative energy affects performance", "Grass may not be greener"],
    tips: ["Figure out what you actually want", "Plan exit properly"],
  },
  D: {
    type: "D",
    title: "Resignation Specialist",
    emoji: "🔥",
    description: "Every day adalah dress rehearsal untuk resignation day! Kau stay sebab responsibilities, bukan sebab choice. Counter offer pun tak akan tahan kau!",
    traits: ["Done with it", "Actively escaping", "Maximum frustration", "Ready to leave"],
    strengths: ["Crystal clear about what you don't want", "Motivated to change", "Nothing can make you stay"],
    weaknesses: ["May make rash decisions", "Burning bridges risk"],
    tips: ["Have a plan before you quit!", "Don't burn bridges, industry kecil"],
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
