// Gaya Negosiasi Kamu
// Tes ini mengungkap style negosiasi yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Sebelum nego penting, kamu biasanya...",
    options: [
      { text: "Research counterpart dan power dynamics", type: "A" },
      { text: "Prepare data dan facts untuk argument", type: "B" },
      { text: "Think about their needs dan win-win", type: "C" },
      { text: "Go with the flow, see what happens", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Opening statement dalam nego...",
    options: [
      { text: "Anchor high, show confidence", type: "A" },
      { text: "Present logical case dengan evidence", type: "B" },
      { text: "Build rapport dulu sebelum substance", type: "C" },
      { text: "Let them make first offer", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat counterpart push back hard...",
    options: [
      { text: "Push back harder, don't show weakness", type: "A" },
      { text: "Counter dengan facts dan alternatives", type: "B" },
      { text: "Seek to understand their concerns", type: "C" },
      { text: "Take a break, revisit later", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Best case outcome dari nego...",
    options: [
      { text: "I get most of what I want", type: "A" },
      { text: "Fair deal based on merits", type: "B" },
      { text: "Both parties happy dan relationship intact", type: "C" },
      { text: "Avoid conflict, acceptable terms", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tactic yang paling nyaman kamu pakai...",
    options: [
      { text: "Leverage dan ultimatum kalau perlu", type: "A" },
      { text: "Data-driven persuasion", type: "B" },
      { text: "Empathy dan creative solutions", type: "C" },
      { text: "Patience dan waiting game", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau nego stuck, kamu...",
    options: [
      { text: "Create urgency atau walk away threat", type: "A" },
      { text: "Reframe dengan new data atau perspective", type: "B" },
      { text: "Explore creative alternatives", type: "C" },
      { text: "Concede something untuk move forward", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Body language saat nego...",
    options: [
      { text: "Confident, commanding presence", type: "A" },
      { text: "Professional, measured gestures", type: "B" },
      { text: "Warm, open, approachable", type: "C" },
      { text: "Neutral, poker face", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dealing with manipulative tactics...",
    options: [
      { text: "Call it out directly", type: "A" },
      { text: "Counter dengan facts dan logic", type: "B" },
      { text: "Address underlying concern", type: "C" },
      { text: "Ignore dan stay on track", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Relationship setelah nego...",
    options: [
      { text: "Business is business, move on", type: "A" },
      { text: "Professional respect maintained", type: "B" },
      { text: "Stronger relationship dari process", type: "C" },
      { text: "Hope no hard feelings", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nego yang paling challenging buatmu...",
    options: [
      { text: "Dealing with passive counterparts", type: "A" },
      { text: "Emotional atau irrational counterparts", type: "B" },
      { text: "Aggressive atau competitive counterparts", type: "C" },
      { text: "High stakes negotiations", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau harus concede something...",
    options: [
      { text: "Make sure I get something back", type: "A" },
      { text: "Concede on less important items", type: "B" },
      { text: "Concede untuk preserve relationship", type: "C" },
      { text: "Concede untuk end nego faster", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Closing the deal biasanya...",
    options: [
      { text: "Push untuk commitment now", type: "A" },
      { text: "Summarize terms clearly", type: "B" },
      { text: "Celebrate mutual success", type: "C" },
      { text: "Relief it's over", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Competitive Negotiator",
    emoji: "🦁",
    description: "Kamu adalah negotiator yang fierce! Confident, assertive, dan ga takut untuk push. You play to win dan usually get what you want. Respect!",
    traits: ["Assertive", "Confident", "Strategic", "Persistent"],
    strengths: ["Get great deals", "Not easily intimidated", "Clear on goals"],
    weaknesses: ["Can damage relationships", "May miss win-win", "Exhausting"],
    tips: ["Preserve key relationships", "Win-win often better long term", "Know when to soften"],
  },
  B: {
    type: "B",
    title: "The Principled Negotiator",
    emoji: "⚖️",
    description: "Kamu adalah negotiator yang logical! Facts-based, fair, dan systematic. You build strong cases dan reach conclusions based on merits. Credible!",
    traits: ["Logical", "Fair", "Prepared", "Objective"],
    strengths: ["Credible arguments", "Sustainable deals", "Professional"],
    weaknesses: ["May seem cold", "Slow process", "Miss emotional cues"],
    tips: ["Add personal touch", "EQ helps nego too", "Sometimes gut over data"],
  },
  C: {
    type: "C",
    title: "The Collaborative Negotiator",
    emoji: "🤝",
    description: "Kamu adalah negotiator yang creative! Seek win-win, preserve relationships, dan find creative solutions. People enjoy negotiating dengan kamu. Trusted!",
    traits: ["Empathetic", "Creative", "Relationship-focused", "Collaborative"],
    strengths: ["Strong relationships", "Creative solutions", "Repeat business"],
    weaknesses: ["May concede too much", "Avoid hard stance", "Taken advantage of"],
    tips: ["Know your limits", "Being nice dan being smart can coexist", "Protect your interests"],
  },
  D: {
    type: "D",
    title: "The Accommodating Negotiator",
    emoji: "🕊️",
    description: "Kamu adalah negotiator yang flexible! Avoid conflict, go with flow, dan prioritize harmony. You make negotiations low-stress for everyone. Easy-going!",
    traits: ["Flexible", "Patient", "Non-confrontational", "Adaptable"],
    strengths: ["Low stress", "Preserve harmony", "Easy to work with"],
    weaknesses: ["Leave value on table", "Unclear on wants", "May regret later"],
    tips: ["Know what you want", "Your needs matter", "Practice assertiveness"],
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
