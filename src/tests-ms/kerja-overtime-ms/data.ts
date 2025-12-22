// Gaya Handle Overtime
// What's your overtime work style?

export const questions = [
  {
    id: 1,
    question: "Boss mintak OT untuk urgent project. First reaction?",
    options: [
      { text: "Yes boss! Anything untuk team!", type: "A" },
      { text: "Okay, kalau really necessary", type: "B" },
      { text: "Ada OT pay tak?", type: "C" },
      { text: "Sorry boss, ada commitment", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pukul 6, kerja tak habis. Kau...",
    options: [
      { text: "Stay sampai siap, tak kisah berapa lama", type: "A" },
      { text: "Extra hour or two, then continue tomorrow", type: "B" },
      { text: "Bawa balik, sambung dari rumah", type: "C" },
      { text: "Tomorrow is another day, bye!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "OT frequency kau per month...",
    options: [
      { text: "Almost every week, biasa dah", type: "A" },
      { text: "Few times, bila urgent", type: "B" },
      { text: "Once or twice max", type: "C" },
      { text: "Never kalau boleh avoid", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Weekend, urgent email masuk. Action?",
    options: [
      { text: "Handle terus, work comes first!", type: "A" },
      { text: "Quick reply, resolve Monday", type: "B" },
      { text: "Acknowledge, proper work on Monday", type: "C" },
      { text: "Tak check email weekend, period", type: "D" },
    ],
  },
  {
    id: 5,
    question: "OT compensation (replacement leave atau pay), company offer...",
    options: [
      { text: "Tak claim pun, malu nak mintak", type: "A" },
      { text: "Claim properly, it's my right", type: "B" },
      { text: "Every hour counted dan claimed!", type: "C" },
      { text: "Main reason I even consider OT", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Colleagues balik on time, kau still kat office. Feel?",
    options: [
      { text: "Dedicated, boss will appreciate", type: "A" },
      { text: "Meh, kerja kena siap", type: "B" },
      { text: "Sikit jealous, nak balik juga", type: "C" },
      { text: "Why am I the only one here?!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Late night OT, dinner kau...",
    options: [
      { text: "Skip, or quick biscuit je", type: "A" },
      { text: "Order food, eat at desk", type: "B" },
      { text: "Dinner break proper, then continue", type: "C" },
      { text: "OT after dinner? No thanks", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner/family complaint pasal OT. Response kau...",
    options: [
      { text: "They'll understand, career important", type: "A" },
      { text: "Try balance, tapi work sometimes urgent", type: "B" },
      { text: "Feel guilty, try reduce", type: "C" },
      { text: "That's why I say no to OT", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Culture OT di office kau...",
    options: [
      { text: "Normalized, semua orang OT", type: "A" },
      { text: "Occasional, bila perlu", type: "B" },
      { text: "Frowned upon actually", type: "C" },
      { text: "Zero tolerance, work-life balance culture", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal work hours untuk kau...",
    options: [
      { text: "Whatever it takes untuk deliver", type: "A" },
      { text: "Standard hours, occasional OT okay", type: "B" },
      { text: "Strictly 9-6, no more", type: "C" },
      { text: "4-day work week bila?", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "OT Warrior",
    emoji: "⚔️",
    description: "OT adalah middle name kau! First in, last out, weekend warrior. Boss's favorite tapi... ada life tak sebenarnya?",
    traits: ["Extremely dedicated", "Always available", "Work prioritized", "Achievement-driven"],
    strengths: ["Career progression fast", "Boss appreciation", "Reliable for urgent work"],
    weaknesses: ["Burnout high risk", "Personal life sacrificed", "Health concerns"],
    tips: ["PLEASE SET BOUNDARIES!", "No job worth your health"],
  },
  B: {
    type: "B",
    title: "Reasonable OT-er",
    emoji: "⏰",
    description: "OT bila perlu, boundaries bila boleh. Kau balance corporate expectations dengan personal life. Sustainable approach!",
    traits: ["Balanced", "Professional", "Reasonable", "Self-aware"],
    strengths: ["Sustainable career", "Maintain relationships", "Avoid burnout"],
    weaknesses: ["May miss some opportunities", "Not the 'most dedicated' label"],
    tips: ["Good balance!", "Don't feel guilty for having life"],
  },
  C: {
    type: "C",
    title: "Reluctant OT-er",
    emoji: "😤",
    description: "OT? Only kalau ada good reason (dan compensation!). Kau value time kau dan expect fair exchange. Modern worker mindset!",
    traits: ["Boundary-conscious", "Fair-minded", "Life-prioritizing", "Compensation-aware"],
    strengths: ["Protected personal time", "Know your worth", "Fair work exchange"],
    weaknesses: ["May not be first choice for urgent projects", "Perception as 'not dedicated'"],
    tips: ["Your boundaries are valid!", "Document contributions clearly"],
  },
  D: {
    type: "D",
    title: "OT Allergic",
    emoji: "🏃",
    description: "OT adalah against your religion! Work hours are work hours, after that adalah ME time. Anti-hustle culture warrior!",
    traits: ["Strict boundaries", "Life > Work", "No-OT policy", "Work to live"],
    strengths: ["Great work-life balance", "Healthy boundaries", "Protected personal time"],
    weaknesses: ["Career may be affected", "Not seen as team player", "Miss opportunities"],
    tips: ["Some flexibility helps", "Occasional OT won't kill you"],
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
