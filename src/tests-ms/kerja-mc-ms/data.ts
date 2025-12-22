// Gaya Ambil MC
// What's your sick leave style? (Funny!)

export const questions = [
  {
    id: 1,
    question: "Bangun pagi rasa tak sihat sikit. First thought?",
    options: [
      { text: "Pergi kerja je la, paracetamol power!", type: "A" },
      { text: "Evaluate - kalau teruk MC, kalau okay go", type: "B" },
      { text: "MC opportunity detected!", type: "C" },
      { text: "MC terus, kesihatan no.1!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pergi klinik untuk MC, kau describe symptom...",
    options: [
      { text: "Honest - exactly macam mana rasa", type: "A" },
      { text: "Accurate tapi add sikit drama", type: "B" },
      { text: "Exaggerate sikit, secure that MC!", type: "C" },
      { text: "Oscar-winning performance every time", type: "D" },
    ],
  },
  {
    id: 3,
    question: "MC balance kau usually...",
    options: [
      { text: "Full balance, jarang guna", type: "A" },
      { text: "50% balance, guna bila perlu", type: "B" },
      { text: "Running low, strategically used", type: "C" },
      { text: "Habis by June every year", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila ambil MC, activity kau...",
    options: [
      { text: "Betul-betul rest dan recover", type: "A" },
      { text: "Rest mostly, maybe light activity", type: "B" },
      { text: "Netflix marathon, food delivery", type: "C" },
      { text: "Out dengan kawan, jangan post IG!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hari Jumaat, badan rasa so-so. Decision?",
    options: [
      { text: "Go to work, weekend to recover", type: "A" },
      { text: "See how pagi tu, decide later", type: "B" },
      { text: "MC = long weekend package!", type: "C" },
      { text: "Friday MC adalah sunnah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Boss message tanya about urgent task bila MC. Kau...",
    options: [
      { text: "Reply dan handle from home, dedicated!", type: "A" },
      { text: "Brief response, point to backup", type: "B" },
      { text: "Seen. Reply later.", type: "C" },
      { text: "Phone on silent, sick means sick!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Colleague selalu MC. Opinion kau...",
    options: [
      { text: "Kesian, hope dia okay", type: "A" },
      { text: "Everyone entitled to their MC", type: "B" },
      { text: "Jealous sikit, skill level high", type: "C" },
      { text: "Respect! MC master!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Doctor tanya berapa hari MC nak. Kau say...",
    options: [
      { text: "1 day enough, doktor decide", type: "A" },
      { text: "As doctor recommends", type: "B" },
      { text: "2 days kalau boleh... please?", type: "C" },
      { text: "Maximum possible, I'm really sick!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Balik kerja after MC, kau...",
    options: [
      { text: "Update team on recovery, catch up work!", type: "A" },
      { text: "Normal return, get back to routine", type: "B" },
      { text: "Maintain sick face untuk few hours", type: "C" },
      { text: "Still 'recovering', light work first", type: "D" },
    ],
  },
  {
    id: 10,
    question: "MC untuk kau adalah...",
    options: [
      { text: "Only for genuine illness", type: "A" },
      { text: "Benefit yang patut guna bila perlu", type: "B" },
      { text: "Strategic time off entitlement", type: "C" },
      { text: "Part of salary package, use it all!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "MC Purist",
    emoji: "🩺",
    description: "MC only bila betul-betul sakit! Kau soldier through mild sickness, full MC balance end year. Dedicated worker atau takut boss? You decide!",
    traits: ["Rarely sick (apparently)", "High dedication", "Full MC balance", "By-the-book"],
    strengths: ["Great attendance record", "Reliable presence", "Boss appreciates"],
    weaknesses: ["May spread illness to office", "Burnout risk", "Not using entitlement"],
    tips: ["MC is your right!", "Rest when needed, don't be hero"],
  },
  B: {
    type: "B",
    title: "Balanced MC User",
    emoji: "⚖️",
    description: "MC bila perlu, kerja bila okay. Healthy approach yang fair untuk kau dan company. Adulting done right!",
    traits: ["Reasonable user", "Fair assessment", "Professional", "Self-aware"],
    strengths: ["Balanced approach", "Not abusing system", "Credible when MC"],
    weaknesses: ["Nothing wrong here actually", "Maybe too honest?"],
    tips: ["Good job being reasonable!", "Keep the balance!"],
  },
  C: {
    type: "C",
    title: "Strategic MC Player",
    emoji: "🎯",
    description: "MC adalah strategic tool! Friday MC, post-long weekend MC, mental health MC (unofficial). You play the system smart!",
    traits: ["Strategic thinker", "System player", "Work smart not hard", "MC optimizer"],
    strengths: ["Good work-life balance", "Smart utilization", "Never burnt out"],
    weaknesses: ["Credibility bila actually sick", "Pattern may be noticed", "Colleagues may resent"],
    tips: ["Don't be too predictable", "Mix it up sikit"],
  },
  D: {
    type: "D",
    title: "MC Champion",
    emoji: "🏆",
    description: "MC adalah lifestyle! Your MC game strong, doctor kenal muka, HR monitor your record. Living your best MC life!",
    traits: ["MC maximizer", "Expert excuse maker", "Work-optional mindset", "Healthcare frequent flyer"],
    strengths: ["Maximum rest achieved", "Great acting skills", "Know the system inside out"],
    weaknesses: ["Job security risk", "Reputation affected", "May actually need MC one day"],
    tips: ["HR is watching!", "Career impact is real"],
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
