// बॉलीवुड विलन टेस्ट - आप कौन से बॉलीवुड विलन हैं?
// Bollywood Villain Type Test

export const questions = [
  {
    id: 1,
    question: "गुस्सा आए तो?",
    options: [
      { text: "Calm रहकर revenge plan", type: "A" },
      { text: "Loud और dramatic", type: "B" },
      { text: "चुपचाप खतरनाक", type: "C" },
      { text: "Comedy में बदल देता हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Power का source?",
    options: [
      { text: "Intelligence और planning", type: "A" },
      { text: "Money और connections", type: "B" },
      { text: "Fear और intimidation", type: "C" },
      { text: "Charm और manipulation", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dialogue delivery?",
    options: [
      { text: "Calm और calculated", type: "A" },
      { text: "Loud और memorable", type: "B" },
      { text: "Short और scary", type: "C" },
      { text: "Funny और witty", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Enemy से कैसे deal?",
    options: [
      { text: "Mind games", type: "A" },
      { text: "Full army attack", type: "B" },
      { text: "Personal and silent", type: "C" },
      { text: "Outsmart करके", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Weakness?",
    options: [
      { text: "Overconfidence", type: "A" },
      { text: "Anger management", type: "B" },
      { text: "Trust issues", type: "C" },
      { text: "Not taken seriously", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Fashion sense?",
    options: [
      { text: "Suits और sophisticated", type: "A" },
      { text: "Gold और flashy", type: "B" },
      { text: "Dark और mysterious", type: "C" },
      { text: "Quirky और unique", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lair/hideout?",
    options: [
      { text: "Corporate office", type: "A" },
      { text: "Palace/mansion", type: "B" },
      { text: "Secret underground", type: "C" },
      { text: "Unexpected location", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Henchmen?",
    options: [
      { text: "Smart और capable", type: "A" },
      { text: "Large army of goons", type: "B" },
      { text: "Few but deadly", type: "C" },
      { text: "Comical sidekicks", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Motivation?",
    options: [
      { text: "Control और power", type: "A" },
      { text: "Wealth और status", type: "B" },
      { text: "Revenge और justice", type: "C" },
      { text: "Fun और chaos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Hero से face-off?",
    options: [
      { text: "Chess match जैसा", type: "A" },
      { text: "Grand final battle", type: "B" },
      { text: "Personal one-on-one", type: "C" },
      { text: "Unexpected twists से", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Signature move?",
    options: [
      { text: "Evil smile", type: "A" },
      { text: "Loud evil laugh", type: "B" },
      { text: "Cold stare", type: "C" },
      { text: "Quirky catchphrase", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपका villain motto?",
    options: [
      { text: "ब्रेन है तो ब्रॉन की जरूरत नहीं", type: "A" },
      { text: "पैसा बोलता है", type: "B" },
      { text: "डर ही असली power है", type: "C" },
      { text: "Life too short to be serious", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मास्टरमाइंड विलन",
    emoji: "🧠",
    description: "आप Mastermind Villain हैं जैसे Mogambo! Intelligent, calculated और always 3 steps ahead। ब्रेन से काम करते हैं, physical fights से बचते हैं। Real danger!",
    traits: ["Intelligent", "Calculated", "Strategic", "Sophisticated"],
    strengths: ["Planning", "Intelligence", "Patience", "Strategy"],
    weaknesses: ["Overconfidence", "Underestimate emotions"],
    tips: ["कभी-कभी gut feeling भी सुनें", "Plans flexible रखें"],
  },
  B: {
    type: "B",
    title: "पावर विलन",
    emoji: "💰",
    description: "आप Power Villain हैं जैसे Kancha Cheena! Money, muscles और massive ego। Loud, proud और सबको पता चले कि boss कौन है। Grand villain style!",
    traits: ["Powerful", "Wealthy", "Dramatic", "Proud"],
    strengths: ["Resources", "Intimidation", "Presence", "Showmanship"],
    weaknesses: ["Anger issues", "Too obvious"],
    tips: ["Calm रहना सीखें", "Subtle भी effective होता है"],
  },
  C: {
    type: "C",
    title: "साइलेंट किलर विलन",
    emoji: "🔪",
    description: "आप Silent Killer Villain हैं जैसे Gabbar! कम बोलते हैं, ज्यादा करते हैं। एक look से डर पैदा कर देते हैं। Real psycho villain!",
    traits: ["Silent", "Deadly", "Unpredictable", "Fearsome"],
    strengths: ["Fear factor", "Unpredictability", "Focus", "Intensity"],
    weaknesses: ["Trust no one", "Isolated"],
    tips: ["Allies बनाएं", "Communication improve करें"],
  },
  D: {
    type: "D",
    title: "क्विर्की विलन",
    emoji: "🃏",
    description: "आप Quirky Villain हैं जैसे Crime Master Gogo! Funny, unpredictable और underestimated। जो serious नहीं लेता, गलती करता है!",
    traits: ["Quirky", "Unpredictable", "Funny", "Clever"],
    strengths: ["Underestimated", "Creativity", "Unpredictability", "Charm"],
    weaknesses: ["Not taken seriously", "Inconsistent"],
    tips: ["Serious भी हों कभी-कभी", "Focus maintain करें"],
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
