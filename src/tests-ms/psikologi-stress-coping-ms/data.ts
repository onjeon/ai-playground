// Cara Kau Handle Stress
// Macam mana kau cope dengan tekanan hidup?

export const questions = [
  {
    id: 1,
    question: "Bila deadline menghimpit, kau akan...",
    options: [
      { text: "Buat list, plan, dan execute systematically", type: "A" },
      { text: "Call kawan untuk vent dan get support", type: "B" },
      { text: "Netflix marathon dulu, kerja later", type: "C" },
      { text: "Push through non-stop sampai siap", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Selepas hari yang super stressful, kau akan...",
    options: [
      { text: "Journal atau reflect apa yang happened", type: "A" },
      { text: "Lepak dengan orang yang kau sayang", type: "B" },
      { text: "Scroll phone atau main game", type: "C" },
      { text: "Gym atau workout habis-habisan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila overthink tak stop, kau biasanya...",
    options: [
      { text: "Write it down dan analyze", type: "A" },
      { text: "Talk it out dengan trusted person", type: "B" },
      { text: "Distract dengan entertainment", type: "C" },
      { text: "Do something physical untuk release", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Apa go-to stress relief kau?",
    options: [
      { text: "Meditation atau deep breathing", type: "A" },
      { text: "Heart-to-heart dengan kawan", type: "B" },
      { text: "Comfort food dan movies", type: "C" },
      { text: "Exercise atau outdoor activities", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila ada bad news, first reaction kau...",
    options: [
      { text: "Process dulu, think rationally", type: "A" },
      { text: "Reach out untuk support", type: "B" },
      { text: "Deny atau avoid dulu", type: "C" },
      { text: "Take action immediately", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cara kau handle work pressure?",
    options: [
      { text: "Prioritize dan organize tasks", type: "A" },
      { text: "Collaborate dan delegate", type: "B" },
      { text: "Procrastinate then panic mode", type: "C" },
      { text: "Work harder dan longer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila feel overwhelmed, kau need...",
    options: [
      { text: "Quiet time untuk think clearly", type: "A" },
      { text: "People around untuk support", type: "B" },
      { text: "Escape dari reality kejap", type: "C" },
      { text: "Physical activity untuk release tension", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Macam mana kau express stress?",
    options: [
      { text: "Withdraw dan go quiet", type: "A" },
      { text: "Talk about it dengan semua orang", type: "B" },
      { text: "Eat more atau sleep more", type: "C" },
      { text: "Become irritable atau restless", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Best weekend untuk destress?",
    options: [
      { text: "Alone time, reading atau spa", type: "A" },
      { text: "Quality time dengan loved ones", type: "B" },
      { text: "Binge watching atau gaming", type: "C" },
      { text: "Adventure atau sports", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila life gets too much, kau wish kau boleh...",
    options: [
      { text: "Pause dan reset everything", type: "A" },
      { text: "Have unlimited support system", type: "B" },
      { text: "Escape to somewhere dengan no responsibilities", type: "C" },
      { text: "Have more energy dan stamina", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Mindful Processor",
    emoji: "🧘",
    description: "Kau handle stress dengan kepala. Analyze, plan, dan execute. Kau percaya kalau faham masalah, boleh selesaikan. Very rational approach!",
    traits: ["Analytical", "Methodical", "Self-reflective", "Calm under pressure"],
    strengths: ["Good problem solver", "Dont panic easily", "Learn from stress"],
    weaknesses: ["Kadang overthink", "May bottle up emotions", "Analysis paralysis possible"],
    tips: ["Balance thinking dengan feeling", "Share dengan orang jugak", "Dont over-analyze everything"],
  },
  B: {
    type: "B",
    title: "The Social Connector",
    emoji: "🤗",
    description: "Kau cope dengan connecting! Bila stress, kau reach out. Talking helps kau process. Support system adalah key untuk kau handle anything!",
    traits: ["Social", "Expressive", "Community-oriented", "Emotionally open"],
    strengths: ["Strong support network", "Process emotions well", "Help others too"],
    weaknesses: ["Depend on others availability", "May over-share", "Feel lost bila alone"],
    tips: ["Build diverse support network", "Learn some solo coping too", "Be there for others jugak"],
  },
  C: {
    type: "C",
    title: "The Escape Artist",
    emoji: "🎮",
    description: "Kau cope dengan temporary escape. Entertainment, food, sleep - apa-apa untuk forget stress kejap. Sometimes kau need that break dari reality!",
    traits: ["Avoidant", "Comfort-seeking", "Need breaks", "Creative escapes"],
    strengths: ["Know how to recharge", "Dont burn out immediately", "Self-care focused"],
    weaknesses: ["Procrastination tendency", "May avoid real issues", "Guilt after escaping"],
    tips: ["Set time limits untuk escapes", "Face issues eventually", "Balance escape dengan action"],
  },
  D: {
    type: "D",
    title: "The Action Warrior",
    emoji: "💪",
    description: "Kau handle stress dengan doing! Exercise, work harder, take action. Kau channel stress jadi energy. Very productive bila stressed!",
    traits: ["Active", "Driven", "Physical", "Productive under pressure"],
    strengths: ["Get things done", "Healthy physical outlet", "Dont dwell on problems"],
    weaknesses: ["Risk burnout", "May ignore emotional needs", "Restless bila cant do anything"],
    tips: ["Rest is productive too", "Process emotions, not just action", "Listen to body limits"],
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
