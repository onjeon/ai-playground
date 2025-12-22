// Gaya Buat Keputusan
// Kau ni tegas atau biarkan universe decide?

export const questions = [
  {
    id: 1,
    question: "Kawan tanya 'makan kat mana?' Kau respond?",
    options: [
      { text: "Aku suggest terus, senang!", type: "A" },
      { text: "Give few options, let them pick", type: "B" },
      { text: "Hmm... kau rasa mana best?", type: "C" },
      { text: "Ikut je la... up to you!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Menu panjang gila. Kau order?",
    options: [
      { text: "Dah tahu nak apa before masuk!", type: "A" },
      { text: "Quick scan, decide dalam 2 minit", type: "B" },
      { text: "Read everything, still tak sure...", type: "C" },
      { text: "Kau order apa? Aku ikut je!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Big life decision. Process kau macam mana?",
    options: [
      { text: "Research, decide, commit! No look back", type: "A" },
      { text: "Think it through, pros cons, then decide", type: "B" },
      { text: "Ask everyone's opinion, still unsure", type: "C" },
      { text: "Let fate/universe/other people decide!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Two job offers. Both okay. Kau?",
    options: [
      { text: "Analyse quickly, pick one, done!", type: "A" },
      { text: "Compare details, make informed choice", type: "B" },
      { text: "Stress about it for weeks!", type: "C" },
      { text: "Ask others to decide for me!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Shopping for baju. Kau macam mana?",
    options: [
      { text: "See, like, buy! Efficient!", type: "A" },
      { text: "Try few options, pick the best", type: "B" },
      { text: "Try 20 things, still not sure!", type: "C" },
      { text: "Buy nothing, can't decide!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lepas buat keputusan, kau?",
    options: [
      { text: "Move on, no second thoughts!", type: "A" },
      { text: "Confident mostly, minor doubts", type: "B" },
      { text: "Overthink if it was right choice", type: "C" },
      { text: "Major regret dan fikir alternatives!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Group planning trip, no one deciding. Kau?",
    options: [
      { text: "Take charge, make decisions!", type: "A" },
      { text: "Suggest options, facilitate decision", type: "B" },
      { text: "Wait for someone else to lead", type: "C" },
      { text: "Whatever everyone wants, aku ikut!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Netflix scroll... what to watch?",
    options: [
      { text: "Pick something in 2 minutes!", type: "A" },
      { text: "Browse sikit, decide reasonably quick", type: "B" },
      { text: "Scroll for 30 minutes, still deciding!", type: "C" },
      { text: "End up watching nothing/sleep!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Risk-taking dalam decisions?",
    options: [
      { text: "Comfortable taking calculated risks!", type: "A" },
      { text: "Moderate risks okay", type: "B" },
      { text: "Very risk-averse, play safe!", type: "C" },
      { text: "Can't decide anyway, so no risk!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila stress tentang decision?",
    options: [
      { text: "Rarely, I trust my judgment!", type: "A" },
      { text: "Sometimes, but manage it", type: "B" },
      { text: "Often, decisions are hard!", type: "C" },
      { text: "Always! That's why I avoid deciding!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Decisive Leader - CEO Energy 💼",
    emoji: "💼",
    description: "KAU NI DECISIVE GILA! Make decisions fast, commit fully, no regrets! Natural leader yang orang depend on untuk buat keputusan. Analysis paralysis? Tak kenal! Just do it energy!",
    traits: ["Quick decision maker", "Confident", "Takes charge", "No second guessing"],
    strengths: ["Efficient", "Natural leader", "Gets things done", "Low decision stress"],
    weaknesses: ["May miss important details", "Could seem impulsive", "Others may feel steamrolled"],
    tips: ["Sometimes pause to consider others!", "Quick isn't always best"],
  },
  B: {
    type: "B",
    title: "Balanced Decider - Thoughtful Choice Maker 🤔",
    emoji: "🤔",
    description: "Kau ni BALANCED DECISION MAKER! Think things through tapi tak over-analyze. Consider options, make informed choices, move on. Healthy decision-making process!",
    traits: ["Thoughtful", "Balanced approach", "Considers options", "Reasonable pace"],
    strengths: ["Well-informed decisions", "Balanced process", "Good outcomes usually"],
    weaknesses: ["Sometimes take longer than needed", "May overthink occasionally"],
    tips: ["You've got good process!", "Trust yourself!"],
  },
  C: {
    type: "C",
    title: "Chronic Overthinker - Analysis Paralysis Pro 😰",
    emoji: "😰",
    description: "KAU NI OVERTHINKER bila decision time! Pros and cons list yang panjang, ask everyone's opinion, still tak sure! Fear of making wrong choice tu real! Decisions are STRESSFUL!",
    traits: ["Overthinker", "Asks many opinions", "Fear of wrong choice", "Slow decision process"],
    strengths: ["Thorough consideration", "Careful approach", "Seeks input"],
    weaknesses: ["Very slow", "Stressful process", "May miss opportunities", "Decision fatigue"],
    tips: ["Set time limits for decisions!", "No perfect choice exists!", "Trust your gut more!"],
  },
  D: {
    type: "D",
    title: "Indecisive Legend - 'Ikut Je' Master 🤷",
    emoji: "🤷",
    description: "KAU NI TAK BOLEH DECIDE LANGSUNG! 'Up to you', 'ikut je', 'anything' adalah vocabulary kau. Let others/fate/universe decide! Decision-making adalah NOT your thing!",
    traits: ["Very indecisive", "Follows others", "Avoids deciding", "Goes with flow"],
    strengths: ["Flexible", "Easy-going", "No leadership stress", "Adaptable"],
    weaknesses: ["Miss out on preferences", "Dependent on others", "Life controlled by others' decisions"],
    tips: ["PRACTICE making small decisions!", "Your opinion matters!", "Start with easy choices daily!"],
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
