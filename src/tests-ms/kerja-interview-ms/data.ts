// Gaya Interview Kau
// What's your job interview style?

export const questions = [
  {
    id: 1,
    question: "Interview call! Preparation kau...",
    options: [
      { text: "Research company, prepare answers, mock interview!", type: "A" },
      { text: "Read job description, prepare key points", type: "B" },
      { text: "Glance website night before", type: "C" },
      { text: "Wing it! Spontaneous is authentic!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Interview attire kau...",
    options: [
      { text: "Full corporate! Blazer, tie/formal!", type: "A" },
      { text: "Smart casual, professional look", type: "B" },
      { text: "Clean casual, depends on company", type: "C" },
      { text: "Whatever clean dalam wardrobe", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Interviewer tanya 'Tell me about yourself'. Kau...",
    options: [
      { text: "Structured answer - background, skills, goals!", type: "A" },
      { text: "Relevant highlights, keep it concise", type: "B" },
      { text: "Start talking, see where it goes", type: "C" },
      { text: "Err... I'm [name]... *awkward pause*", type: "D" },
    ],
  },
  {
    id: 4,
    question: "'What's your weakness?' Question jawab...",
    options: [
      { text: "Prepared answer yang show self-awareness!", type: "A" },
      { text: "Honest weakness dengan improvement plan", type: "B" },
      { text: "Generic - 'too hardworking' type", type: "C" },
      { text: "Blank out... weakness? Erm...", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Salary expectation question. Strategy?",
    options: [
      { text: "Research market rate, negotiate confidently!", type: "A" },
      { text: "Give reasonable range based on experience", type: "B" },
      { text: "Ask their budget first", type: "C" },
      { text: "Accept whatever, desperate for job", type: "D" },
    ],
  },
  {
    id: 6,
    question: "'Any questions for us?' kau tanya...",
    options: [
      { text: "5 prepared questions about role, growth, culture!", type: "A" },
      { text: "2-3 relevant questions", type: "B" },
      { text: "When will I hear back?", type: "C" },
      { text: "No... I think you covered everything", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Body language kau dalam interview...",
    options: [
      { text: "Eye contact, confident posture, firm handshake!", type: "A" },
      { text: "Generally confident, natural demeanor", type: "B" },
      { text: "Bit nervous tapi try maintain", type: "C" },
      { text: "Fidgety, avoid eye contact, nervous wreck", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Technical question yang kau tak tau. Handle?",
    options: [
      { text: "Explain thought process, admit gap, show willingness!", type: "A" },
      { text: "Try best answer, acknowledge if unsure", type: "B" },
      { text: "Make up something, hope for best", type: "C" },
      { text: "I... don't know *silence*", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Post-interview, kau...",
    options: [
      { text: "Send thank you email same day!", type: "A" },
      { text: "Brief thank you note next day", type: "B" },
      { text: "Wait for their response je", type: "C" },
      { text: "Forget about it, move on", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Interview nerves level kau...",
    options: [
      { text: "Excited! Opportunity to showcase!", type: "A" },
      { text: "Normal nervous, manageable", type: "B" },
      { text: "Very nervous tapi push through", type: "C" },
      { text: "Anxiety attack incoming usually", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Interview Pro",
    emoji: "⭐",
    description: "Kau born to interview! Preparation level max, confidence on point, follow-up game strong. Offer letters practically write themselves!",
    traits: ["Well-prepared", "Confident presenter", "Professional", "Strategic"],
    strengths: ["High success rate", "Great first impressions", "Negotiation skills"],
    weaknesses: ["May seem over-prepared?", "Pressure to maintain standards"],
    tips: ["Keep being awesome!", "Help others prepare too"],
  },
  B: {
    type: "B",
    title: "Solid Interviewee",
    emoji: "👍",
    description: "Professional dan prepared cukup-cukup. Kau come across well tanpa trying too hard. Reliable candidate!",
    traits: ["Reasonably prepared", "Natural demeanor", "Professional enough", "Balanced approach"],
    strengths: ["Come across genuine", "Good impression", "Reasonable success"],
    weaknesses: ["Could prepare more", "May miss some opportunities"],
    tips: ["Little extra preparation goes long way", "Practice common questions"],
  },
  C: {
    type: "C",
    title: "Wing-It Warrior",
    emoji: "🦅",
    description: "Preparation? Minimal. Confidence? Somehow ada. Kau rely on charm dan spontaneity. Sometimes works, sometimes... doesn't!",
    traits: ["Minimal preparation", "Spontaneous", "Relies on charm", "Unpredictable results"],
    strengths: ["Authentic answers", "Not scripted", "Can think on feet"],
    weaknesses: ["Inconsistent performance", "Miss obvious questions", "Lower success rate"],
    tips: ["Basic preparation helps a lot!", "Research company at minimum"],
  },
  D: {
    type: "D",
    title: "Interview Anxiety Club",
    emoji: "😰",
    description: "Interview adalah nightmare untuk kau. Nervous wreck, blank out on questions, awkward silences. The struggle is very real!",
    traits: ["High anxiety", "Under-prepared", "Nervous presenter", "Flight response active"],
    strengths: ["Authentic (too authentic?)", "Underdog potential", "Room for growth"],
    weaknesses: ["Nerves hurt performance", "Miss opportunities", "Self-sabotage"],
    tips: ["Practice is key!", "Mock interviews help reduce anxiety"],
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
