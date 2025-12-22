// Tahap Adaptasi Kau
// Sejauh mana kau boleh adapt dengan changes?

export const questions = [
  {
    id: 1,
    question: "Plan tiba-tiba berubah last minute. Kau...",
    options: [
      { text: "Roll with it, no big deal", type: "A" },
      { text: "Adjust okay, slight preference for original", type: "B" },
      { text: "Stressed but manage somehow", type: "C" },
      { text: "Very upset, hate sudden changes", type: "D" },
    ],
  },
  {
    id: 2,
    question: "New job atau environment baru. Kau...",
    options: [
      { text: "Excited! Love new things", type: "A" },
      { text: "Nervous tapi adapt quite fast", type: "B" },
      { text: "Take long time to feel comfortable", type: "C" },
      { text: "Really struggle, want old back", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila routine kau kena disrupt...",
    options: [
      { text: "Barely notice, flexible je", type: "A" },
      { text: "Adjust calmly, find new rhythm", type: "B" },
      { text: "Feel off kilter for a while", type: "C" },
      { text: "Really throws everything off", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Learning new technology atau system. Kau...",
    options: [
      { text: "Love it! Always learning", type: "A" },
      { text: "Take time tapi get there", type: "B" },
      { text: "Frustrated, prefer old ways", type: "C" },
      { text: "Avoid as long as possible", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Unexpected problem muncul. Kau...",
    options: [
      { text: "See it as interesting challenge", type: "A" },
      { text: "Handle it, move on", type: "B" },
      { text: "Stressed, need time to adjust", type: "C" },
      { text: "Completely thrown off, panic", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Moving to new place. How kau feel?",
    options: [
      { text: "Adventure! Cant wait!", type: "A" },
      { text: "Mix of excited dan nervous", type: "B" },
      { text: "Mostly anxious, comfort zone gone", type: "C" },
      { text: "Dread it completely", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kerja kau kena change drastically. Kau...",
    options: [
      { text: "Embrace it, maybe better this way", type: "A" },
      { text: "Adjust dengan time", type: "B" },
      { text: "Resist quite a bit internally", type: "C" },
      { text: "Really struggle to accept", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila orang around kau change (new team etc)...",
    options: [
      { text: "Easy to connect dengan new people", type: "A" },
      { text: "Takes bit of time, then okay", type: "B" },
      { text: "Miss old crew, slow to warm up", type: "C" },
      { text: "Really hard, prefer familiar faces", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Life throwing curveballs at you. Kau...",
    options: [
      { text: "Dodge and keep moving", type: "A" },
      { text: "Get hit sometimes, recover well", type: "B" },
      { text: "Get knocked down, slow to get up", type: "C" },
      { text: "Feel like giving up when things change", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall adaptability kau?",
    options: [
      { text: "Very adaptable, love change", type: "A" },
      { text: "Reasonably adaptable", type: "B" },
      { text: "Prefer stability honestly", type: "C" },
      { text: "Really struggle dengan change", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Chameleon",
    emoji: "🦎",
    description: "Kau super adaptable! Thrive dalam change, see challenges as opportunities. Very valuable trait dalam uncertain world. You go with any flow!",
    traits: ["Highly adaptable", "Flexible", "Open-minded", "Resilient"],
    strengths: ["Handle any situation", "Not thrown by changes", "Quick learner"],
    weaknesses: ["May lack routine/stability", "Others may not keep up"],
    tips: ["Keep this flexibility", "Some stability is also good", "Help others adapt too"],
  },
  B: {
    type: "B",
    title: "The Flexible One",
    emoji: "🌿",
    description: "Kau quite adaptable! Need some time tapi adjust well. Healthy balance between flexibility dan needing some stability. This is normal dan good!",
    traits: ["Flexible", "Adjustable", "Balanced", "Grounded"],
    strengths: ["Adapt when needed", "Not rigid", "Recover from changes"],
    weaknesses: ["Some changes take time"],
    tips: ["Trust your ability to adapt", "Give yourself grace during transitions"],
  },
  C: {
    type: "C",
    title: "The Comfort Seeker",
    emoji: "🏠",
    description: "Kau prefer stability. Changes stress you out, need time to adjust, crave familiar. Understandable tapi world keeps changing - building adaptability helps!",
    traits: ["Stability-seeking", "Slow adapter", "Comfort-loving", "Routine-oriented"],
    strengths: ["Create stability", "Good at routines", "Deep commitment to familiar"],
    weaknesses: ["Stressed by changes", "Miss opportunities", "Resistant to new things"],
    tips: ["Practice small changes", "Comfort zone expands slowly", "Change can be good"],
  },
  D: {
    type: "D",
    title: "The Change Avoider",
    emoji: "🐢",
    description: "Kau really struggle dengan change. Any disruption is major stress. World changes constantly - this level of resistance exhausting. Worth working on!",
    traits: ["Change-resistant", "Rigid", "Anxious about new", "Highly routine-dependent"],
    strengths: ["Very stable when stable", "Committed to familiar"],
    weaknesses: ["Major stress dari normal life changes", "Miss out on growth", "Exhausting to maintain"],
    tips: ["This affects quality of life", "Consider support untuk anxiety around change", "Start tiny with embracing new"],
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
