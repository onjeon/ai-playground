// Banyak Mana Kau Overthink?
// Otak kau 24/7 running ke?

export const questions = [
  {
    id: 1,
    question: "Kawan reply message dengan '.' je. Kau fikir...",
    options: [
      { text: "Okay noted, probably busy", type: "A" },
      { text: "Hmm pelik sikit tapi takpe la", type: "B" },
      { text: "Wait, dia marah ke? Apa aku buat?", type: "C" },
      { text: "REVIEW semua conversation untuk cari salah aku!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Baru lepas job interview. Malam tu kau...",
    options: [
      { text: "Tidur dengan tenang, dah buat yang terbaik", type: "A" },
      { text: "Fikir sikit pasal answers tadi", type: "B" },
      { text: "Replay semua jawapan, regret yang tak perfect", type: "C" },
      { text: "TAK BOLEH TIDUR sebab analyze every single word!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Post something on social media. 1 jam kemudian kau...",
    options: [
      { text: "Dah lupa pun, move on", type: "A" },
      { text: "Check likes sekali je", type: "B" },
      { text: "Check multiple times, worry kalau cringe", type: "C" },
      { text: "Mungkin delete sebab takut orang judge!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Orang tegur kau sikit je. Reaction kau?",
    options: [
      { text: "Terima, improve, move on", type: "A" },
      { text: "Fikir kejap then terima", type: "B" },
      { text: "Fikir pasal tu for days", type: "C" },
      { text: "Fikir pasal tu for WEEKS, maybe months!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nak send important message. Berapa kali kau re-read?",
    options: [
      { text: "Type, send, done!", type: "A" },
      { text: "Re-read sekali untuk check", type: "B" },
      { text: "Edit multiple times before send", type: "C" },
      { text: "Draft, delete, rewrite, consult kawan, still nervous to send!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dalam conversation, ada awkward silence. Kau?",
    options: [
      { text: "Normal je, silence happens", type: "A" },
      { text: "Cuba fill with small talk", type: "B" },
      { text: "Worry if kau yang buat awkward", type: "C" },
      { text: "Replay conversation in head for hours after!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Boss/teacher tak smile kat kau hari ni. Kau fikir...",
    options: [
      { text: "Takde apa, dia busy je kot", type: "A" },
      { text: "Hmm pelik tapi probably nothing", type: "B" },
      { text: "Aduh, apa aku buat salah?", type: "C" },
      { text: "Mesti aku kena fired/failed! What did I do?!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kena buat decision. Kau...",
    options: [
      { text: "Decide and move on", type: "A" },
      { text: "Think through options calmly", type: "B" },
      { text: "Pros and cons list, ask everyone's opinion", type: "C" },
      { text: "Paralyzed by all possible outcomes!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Fikir pasal embarrassing moment dari 5 tahun lepas?",
    options: [
      { text: "What moment? Dah lupa dah", type: "A" },
      { text: "Kadang-kadang terfikir, cringe, then move on", type: "B" },
      { text: "Yes, still bothers me sometimes", type: "C" },
      { text: "Haunts me regularly, keeps me up at night!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cuba nak tidur malam ni. Brain kau...",
    options: [
      { text: "Relax, tidur senang", type: "A" },
      { text: "Sikit thoughts tapi boleh manage", type: "B" },
      { text: "Racing thoughts, susah nak shutdown", type: "C" },
      { text: "FULL DOCUMENTARY of every mistake ever made!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Zen Master - Otak On Vacation 🧘",
    emoji: "🧘",
    description: "Kau TIDAK overthink langsung! Brain kau peaceful, tenang, macam monk. Things happen, you move on. No mental replays, no 3am anxiety sessions. Kau adalah rare species dalam generation ni. Teach us your ways!",
    traits: ["Peaceful mind", "Quick to move on", "Not bothered by small things", "Lives in the present"],
    strengths: ["Low anxiety", "Good sleep", "Quick decision maker", "Emotionally stable"],
    weaknesses: ["May miss important details", "Could reflect more sometimes"],
    tips: ["Your calm is a superpower!", "Maybe check in with feelings occasionally"],
  },
  B: {
    type: "B",
    title: "Normal Thinker - Healthy Balance 💭",
    emoji: "💭",
    description: "Kau ada healthy amount of thinking! Reflect on things tapi tak obsess. Kau boleh analyze situations tanpa going crazy. This is the healthy balance yang semua orang should aim for!",
    traits: ["Balanced thinking", "Appropriate reflection", "Healthy processing", "Reasonable worry"],
    strengths: ["Process things well", "Learn from experiences", "Good self-awareness"],
    weaknesses: ["Occasional unnecessary worry", "Sometimes replay moments"],
    tips: ["You're doing great!", "Trust your thought process"],
  },
  C: {
    type: "C",
    title: "Overthinker - Brain Always Running 🔄",
    emoji: "🔄",
    description: "Kau definitely overthinker! Brain kau macam browser dengan 47 tabs open. Kau analyze everything, worry about small things, dan replay conversations in your head. The mental energy is REAL!",
    traits: ["Active mind", "Analyzes everything", "Replays conversations", "Worries about details"],
    strengths: ["Thorough thinker", "Considerate of others", "Catches potential problems"],
    weaknesses: ["Anxiety prone", "Hard to relax", "Exhausting mental energy"],
    tips: ["Practice mindfulness", "Journal to release thoughts", "It's probably not as bad as you think!"],
  },
  D: {
    type: "D",
    title: "Professional Overthinker - Brain Never Stops 🌀",
    emoji: "🌀",
    description: "KAU OVERTHINK TAHAP PROFESSIONAL! Otak kau 24/7 running analysis on EVERYTHING. Every word, every look, every possible scenario. Kau should charge rent for all the space people take in your head!",
    traits: ["Extreme overthinker", "Chronic worrier", "Replays EVERYTHING", "What-if champion"],
    strengths: ["Extremely thorough", "Very considerate", "Prepared for all scenarios"],
    weaknesses: ["Exhausted constantly", "Anxiety levels HIGH", "Hard to enjoy the moment"],
    tips: ["Please talk to someone if it affects daily life!", "Meditation helps!", "Most worries never happen!"],
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
