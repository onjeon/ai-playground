// Tahap Loyal Kau
// Kau ni ride or die atau fair weather friend?

export const questions = [
  {
    id: 1,
    question: "Bestfriend buat silap besar. Orang semua marah dia. Kau?",
    options: [
      { text: "Stand by them, support through thick and thin!", type: "A" },
      { text: "Support tapi also tell them they're wrong", type: "B" },
      { text: "Distance sikit, see how it goes", type: "C" },
      { text: "Join orang lain criticize, don't want associated!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Someone offer kau better opportunity tapi kena 'betray' current team. Kau?",
    options: [
      { text: "Decline, loyalty to current team comes first!", type: "A" },
      { text: "Think hard, consider all factors including loyalty", type: "B" },
      { text: "Take it if it's really good, sorry team", type: "C" },
      { text: "Take it immediately! Look out for number one!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kawan share secret. Someone offer you something to spill. Kau?",
    options: [
      { text: "NEVER! Take it to the grave!", type: "A" },
      { text: "No way, secrets are sacred", type: "B" },
      { text: "Depends on what they're offering...", type: "C" },
      { text: "Spill for the right price!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Relationship/friendship through tough times. Kau?",
    options: [
      { text: "Stay no matter what, ride or die!", type: "A" },
      { text: "Work through it together, committed", type: "B" },
      { text: "Evaluate if it's worth staying", type: "C" },
      { text: "Leave bila jadi susah, not my problem!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Group orang cakap buruk pasal kawan kau (yang tak ada). Kau?",
    options: [
      { text: "Defend them aggressively! How dare!", type: "A" },
      { text: "Speak up for them, correct the narrative", type: "B" },
      { text: "Stay quiet, don't want confrontation", type: "C" },
      { text: "Join in sikit... kalau betul pun...", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Longtime friend vs new exciting person. Priority kau?",
    options: [
      { text: "Longtime friend ALWAYS! History matters!", type: "A" },
      { text: "Balance both, old friends are important", type: "B" },
      { text: "New person if they're more fun/beneficial", type: "C" },
      { text: "Whoever benefits me more right now!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Your fave brand/team/company does something wrong. Kau?",
    options: [
      { text: "Still support, everyone makes mistakes!", type: "A" },
      { text: "Disappointed tapi see if they improve", type: "B" },
      { text: "Switch to competitor, can't support wrongdoing", type: "C" },
      { text: "Never was that loyal anyway, easy switch!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kawan pinjam duit, tak bayar-bayar. Kau?",
    options: [
      { text: "It's okay, friendship more important than money", type: "A" },
      { text: "Remind gently, still friends tapi...", type: "B" },
      { text: "Demand back, reconsider friendship", type: "C" },
      { text: "Cut ties, they're using me!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner/bestie going through rough patch, jadi 'boring'. Kau?",
    options: [
      { text: "Stay supportive, they need me now more!", type: "A" },
      { text: "Be there for them, normal relationship ups and downs", type: "B" },
      { text: "Getting tired of it honestly...", type: "C" },
      { text: "Find someone more fun, their problem!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "How long friendships kau usually last?",
    options: [
      { text: "Decades! Friends for life!", type: "A" },
      { text: "Long-term mostly, some come and go", type: "B" },
      { text: "Changes often, depends on life phase", type: "C" },
      { text: "Short-term, people always disappoint!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ride or Die - Loyalty Level 100 🛡️",
    emoji: "🛡️",
    description: "KAU NI RIDE OR DIE SEJATI! Loyalty adalah everything! Once you're in someone's circle, you're there forever. Through thick and thin, good and bad. Rare breed yang orang cherish! Golden retriever friend energy!",
    traits: ["Extremely loyal", "Ride or die", "Protective", "Long-term relationships"],
    strengths: ["Trustworthy AF", "Amazing friend", "People feel safe with you", "Deep connections"],
    weaknesses: ["May stay in toxic situations too long", "Could be taken advantage of", "Blind loyalty risky"],
    tips: ["Loyalty is beautiful but protect yourself too!", "Some people don't deserve your loyalty"],
  },
  B: {
    type: "B",
    title: "Loyal Friend - Healthy Commitment 🤝",
    emoji: "🤝",
    description: "Kau ni LOYAL dengan healthy boundaries! Committed to people tapi also rational. Stand by friends tapi also know when to step back. Balanced loyalty yang sustainable!",
    traits: ["Balanced loyalty", "Committed but rational", "Healthy boundaries", "Long-term focused"],
    strengths: ["Trustworthy", "Good friend", "Won't enable bad behavior", "Sustainable relationships"],
    weaknesses: ["May seem less 'ride or die'", "Have to evaluate sometimes"],
    tips: ["Your balance is healthy!", "Keep it up!"],
  },
  C: {
    type: "C",
    title: "Conditional Friend - Depends on Situation 🤔",
    emoji: "🤔",
    description: "Loyalty kau CONDITIONAL! Kau loyal bila things are good, tapi when it gets hard... kau reconsider. Self-preservation mode strong. Relationships depend on what you're getting from them.",
    traits: ["Conditional loyalty", "Self-focused", "Evaluates relationships", "Practical approach"],
    strengths: ["Protects self", "Rational about relationships", "Not easily taken advantage of"],
    weaknesses: ["People can't fully trust you", "Shallow connections", "Miss deep friendships"],
    tips: ["Some loyalty is worth the difficulty!", "Deep connections require commitment"],
  },
  D: {
    type: "D",
    title: "Fair Weather Friend - When It's Convenient ⛅",
    emoji: "⛅",
    description: "Loyalty? WHAT'S THAT? Kau ni fair weather friend! There when it's fun, gone when it's tough. Prioritize self over relationships. People come and go based on usefulness. Survival mode always on!",
    traits: ["No loyalty", "Self-first always", "Uses people", "Short-term relationships"],
    strengths: ["Self-protective", "Never taken advantage of", "Independent"],
    weaknesses: ["No deep connections", "People don't trust you", "Lonely ultimately", "Reputation suffers"],
    tips: ["Real connections require loyalty!", "Being there for others is meaningful!", "You might be missing out on beautiful friendships"],
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
