// Level EQ Kau
// Sejauh mana emotional intelligence kau?

export const questions = [
  {
    id: 1,
    question: "Bila kau rasa marah, kau boleh...",
    options: [
      { text: "Identify exact feeling dan kenapa", type: "A" },
      { text: "Generally tahu kau upset dan why", type: "B" },
      { text: "Just tahu kau marah, tak sure why exactly", type: "C" },
      { text: "React dulu, think later", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila kawan cerita masalah dia, kau...",
    options: [
      { text: "Really feel apa dia rasa", type: "A" },
      { text: "Understand dan sympathize", type: "B" },
      { text: "Listen tapi tak sure nak respond apa", type: "C" },
      { text: "Give solutions terus, tak focus feelings", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam argument, kau biasanya...",
    options: [
      { text: "Stay calm dan discuss rationally", type: "A" },
      { text: "Get heated sikit tapi can control", type: "B" },
      { text: "Say things yang regret later", type: "C" },
      { text: "Explode atau completely shut down", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kau boleh read orang lain's mood?",
    options: [
      { text: "Yes, almost always accurately", type: "A" },
      { text: "Usually can tell", type: "B" },
      { text: "Sometimes miss obvious cues", type: "C" },
      { text: "Honestly tak perasan most of the time", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila stressed, kau...",
    options: [
      { text: "Have healthy coping mechanisms", type: "A" },
      { text: "Manage okay, ada ups and downs", type: "B" },
      { text: "Struggle quite a bit", type: "C" },
      { text: "Completely fall apart", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Receiving criticism, kau...",
    options: [
      { text: "Thank them, reflect, dan improve", type: "A" },
      { text: "Defend sikit tapi consider it", type: "B" },
      { text: "Get defensive, hard to hear", type: "C" },
      { text: "Attack back atau shut down", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kau good at motivating orang lain?",
    options: [
      { text: "Yes, people say I inspire them", type: "A" },
      { text: "Can do it bila try", type: "B" },
      { text: "Not really sure how", type: "C" },
      { text: "Struggle dengan that honestly", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila buat mistake, kau...",
    options: [
      { text: "Own it, apologize, dan learn", type: "A" },
      { text: "Admit dengan sikit resistance", type: "B" },
      { text: "Make excuses atau blame others", type: "C" },
      { text: "Deny atau get very defensive", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau understand your own triggers?",
    options: [
      { text: "Yes, very aware of them", type: "A" },
      { text: "Know some of them", type: "B" },
      { text: "Still figuring out", type: "C" },
      { text: "React first, understand never", type: "D" },
    ],
  },
  {
    id: 10,
    question: "In team settings, kau...",
    options: [
      { text: "Navigate emotions dan dynamics well", type: "A" },
      { text: "Generally work well dengan others", type: "B" },
      { text: "Sometimes ada friction", type: "C" },
      { text: "Often ada misunderstandings", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "EQ Superstar",
    emoji: "🌟",
    description: "Wah, EQ kau tinggi gila! Kau understand emotions - yours dan others - dengan baik. Great at relationships, communication, dan handling situations!",
    traits: ["Emotionally aware", "Empathetic", "Self-regulated", "Socially skilled"],
    strengths: ["Great relationships", "Handle conflict well", "Inspire others"],
    weaknesses: ["May absorb others' emotions too much", "Can be draining"],
    tips: ["Protect your energy", "Set emotional boundaries", "Use your gift wisely"],
  },
  B: {
    type: "B",
    title: "Emotionally Capable",
    emoji: "💚",
    description: "Kau ada solid EQ! Generally good dengan emotions, ada room untuk grow tapi already quite capable. Keep developing, kau on the right track!",
    traits: ["Reasonably aware", "Empathetic", "Learning", "Growing"],
    strengths: ["Good foundation", "Can manage most situations", "Willing to improve"],
    weaknesses: ["Slip up kadang-kadang", "Some blind spots"],
    tips: ["Keep practicing awareness", "Ask for feedback", "Learn from emotional situations"],
  },
  C: {
    type: "C",
    title: "EQ Work In Progress",
    emoji: "🌱",
    description: "Kau masih developing EQ. Sometimes struggle dengan understanding atau managing emotions. Its okay - EQ can be learned! Start dengan self-awareness!",
    traits: ["Developing", "Learning", "Sometimes reactive", "Growing"],
    strengths: ["Potential untuk improve", "Honest about struggles"],
    weaknesses: ["React before thinking", "Miss emotional cues", "Struggle dengan conflicts"],
    tips: ["Practice naming emotions", "Pause before reacting", "Study emotional intelligence"],
  },
  D: {
    type: "D",
    title: "EQ Beginner",
    emoji: "🔄",
    description: "EQ ni area yang kau boleh really develop! Currently struggle dengan emotional stuff tapi its learnable. Many successful people started here!",
    traits: ["Reactive", "Unaware", "Direct", "Learning needed"],
    strengths: ["Logical thinking mungkin strong", "Honest", "Room untuk massive growth"],
    weaknesses: ["Relationship difficulties", "React badly to criticism", "Miss social cues"],
    tips: ["Start dengan self-awareness", "Consider EQ resources atau coaching", "Practice empathy daily"],
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
