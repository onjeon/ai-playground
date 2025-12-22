// Level Cemburu Kau
// Sejauh mana level jealousy kau dalam relationship?

export const questions = [
  {
    id: 1,
    question: "Partner kau puji orang lain attractive. Kau...",
    options: [
      { text: "No issue, appreciation normal", type: "A" },
      { text: "Slight twinge, then okay", type: "B" },
      { text: "Bothered, think about it", type: "C" },
      { text: "Very upset, why even look?", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Partner kau ada close friend opposite gender. Kau...",
    options: [
      { text: "Cool with it, trust is key", type: "A" },
      { text: "Okay, would like to know them", type: "B" },
      { text: "Uncomfortable, need reassurance", type: "C" },
      { text: "Really not okay dengan that", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner kau reply text lambat. Mind goes...",
    options: [
      { text: "Probably busy, no big deal", type: "A" },
      { text: "Wonder whats up, then let go", type: "B" },
      { text: "Imagine worst scenarios kadang", type: "C" },
      { text: "Immediately suspect something", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Check partner phone - pernah rasa nak?",
    options: [
      { text: "Never, trust is there", type: "A" },
      { text: "Thought crossed, never acted", type: "B" },
      { text: "Tempted quite often", type: "C" },
      { text: "Have done it atau really want to", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila partner spend time dengan friends tanpa kau...",
    options: [
      { text: "Happy they have their life", type: "A" },
      { text: "Fine, miss them sikit", type: "B" },
      { text: "Anxious, want updates", type: "C" },
      { text: "Really struggle dengan it", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ex dari partner kau still friends dengan them. Kau...",
    options: [
      { text: "No issue if past is past", type: "A" },
      { text: "Sikit weird tapi okay", type: "B" },
      { text: "Dont like it honestly", type: "C" },
      { text: "Absolutely not okay", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner get promoted atau achieve something. Kau...",
    options: [
      { text: "Purely happy for them!", type: "A" },
      { text: "Happy dengan slight comparison", type: "B" },
      { text: "Happy but also envious", type: "C" },
      { text: "More envy than happiness", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Someone flirt dengan partner kau depan kau. Kau...",
    options: [
      { text: "Trust partner, find it funny even", type: "A" },
      { text: "Slight territorial, mostly okay", type: "B" },
      { text: "Really bothered, want to step in", type: "C" },
      { text: "Furious, big issue", type: "D" },
    ],
  },
  {
    id: 9,
    question: "How often jealousy affect relationship kau?",
    options: [
      { text: "Rarely atau never", type: "A" },
      { text: "Occasionally, manage it", type: "B" },
      { text: "Quite often, causes issues", type: "C" },
      { text: "Frequent, major issue", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Honestly, jealousy level kau?",
    options: [
      { text: "Very low, secure in relationships", type: "A" },
      { text: "Normal amount, nothing extreme", type: "B" },
      { text: "Higher than Id like", type: "C" },
      { text: "Very high, I know it", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Secure Lover",
    emoji: "💚",
    description: "Kau super secure! Trust partner, tak possessive, confident in relationship. This is relationship goals honestly! Jealousy barely touches you!",
    traits: ["Secure", "Trusting", "Confident", "Relaxed"],
    strengths: ["Healthy relationships", "Partner feels trusted", "No drama from jealousy"],
    weaknesses: ["May not notice real red flags", "Others may wish you cared more"],
    tips: ["Keep this security", "Still be aware of real issues", "Trust but verify if needed"],
  },
  B: {
    type: "B",
    title: "The Occasionally Jealous",
    emoji: "💛",
    description: "Kau ada normal jealousy level! Slight feelings bila certain situations, tapi manage it well. This is actually very human dan healthy response!",
    traits: ["Normal", "Self-aware", "Managing", "Balanced"],
    strengths: ["Acknowledge feelings", "Dont act on every feeling", "Communicate when needed"],
    weaknesses: ["Can intensify bila stressed atau triggered"],
    tips: ["Keep managing well", "Communicate bila feel jealous", "Trust is ongoing work"],
  },
  C: {
    type: "C",
    title: "The Jealous Type",
    emoji: "🧡",
    description: "Kau quite jealous. Often feel threatened, need lots of reassurance. Exhausting untuk kau dan partner. Usually stems from insecurity - work on that root!",
    traits: ["Jealous", "Insecure", "Needy", "Anxious in love"],
    strengths: ["Care deeply", "Attentive to relationship", "Want connection"],
    weaknesses: ["Push people away", "Exhausting for partners", "Affects relationship quality"],
    tips: ["Work on self-esteem", "Jealousy is about YOU not them", "Consider why youre insecure"],
  },
  D: {
    type: "D",
    title: "The Very Jealous",
    emoji: "❤️‍🔥",
    description: "Kau have intense jealousy. Hard to trust, always suspicious, need constant proof. This level affects relationships badly. Usually deep insecurity - please address it!",
    traits: ["Intensely jealous", "Suspicious", "Controlling tendency", "Deeply insecure"],
    strengths: ["Passionate about relationships", "Very attentive"],
    weaknesses: ["Push partners away", "Suffocating behavior", "Relationships suffer greatly"],
    tips: ["This level needs professional help", "Work on core insecurity", "Trust issues need addressing"],
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
