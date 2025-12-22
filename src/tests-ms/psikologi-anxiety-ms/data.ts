// Tahap Risau Kau
// Sejauh mana level anxiety kau dalam daily life?

export const questions = [
  {
    id: 1,
    question: "Bila nak tidur, otak kau...",
    options: [
      { text: "Peaceful, tidur dengan senang", type: "A" },
      { text: "Sikit thoughts, tapi manageable", type: "B" },
      { text: "Racing dengan worries", type: "C" },
      { text: "Tak boleh tidur sebab anxious", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila phone ring unexpectedly, kau...",
    options: [
      { text: "Answer casually", type: "A" },
      { text: "Slight wonder who, then answer", type: "B" },
      { text: "Anxious, apa bad news ni?", type: "C" },
      { text: "Heart racing, takut nak answer", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sebelum event social, kau...",
    options: [
      { text: "Excited, look forward to it", type: "A" },
      { text: "Sikit nervous, mostly okay", type: "B" },
      { text: "Very nervous, think pasal it banyak", type: "C" },
      { text: "Dread it, maybe nak cancel", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila waiting untuk important result/news...",
    options: [
      { text: "Patient, apa jadi jadilah", type: "A" },
      { text: "Sikit anxious tapi okay", type: "B" },
      { text: "Check constantly, cant focus on else", type: "C" },
      { text: "Completely consumed, cant function", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Physical symptoms bila stressed?",
    options: [
      { text: "Rarely ada physical symptoms", type: "A" },
      { text: "Sometimes sikit tension", type: "B" },
      { text: "Often - headaches, stomach issues", type: "C" },
      { text: "Severe - heart racing, shaking, etc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tahap worry pasal future?",
    options: [
      { text: "Live in present mostly", type: "A" },
      { text: "Think about it, tapi balanced", type: "B" },
      { text: "Worry quite often", type: "C" },
      { text: "Constantly anxious pasal future", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila something goes wrong unexpectedly...",
    options: [
      { text: "Handle it calmly", type: "A" },
      { text: "Stressed sikit, then manage", type: "B" },
      { text: "Panic mode, hard to think clearly", type: "C" },
      { text: "Complete meltdown", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Selepas social interaction, kau...",
    options: [
      { text: "Move on, tak fikir sangat", type: "A" },
      { text: "Brief thoughts, then done", type: "B" },
      { text: "Replay dan worry kalau cakap wrong thing", type: "C" },
      { text: "Anxious untuk days pasal what you said", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tahap kau avoid things sebab anxiety?",
    options: [
      { text: "Tak avoid apa-apa", type: "A" },
      { text: "Rarely avoid", type: "B" },
      { text: "Sometimes avoid challenging situations", type: "C" },
      { text: "Avoid banyak benda sebab anxiety", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall, anxiety affect daily life kau?",
    options: [
      { text: "Not really", type: "A" },
      { text: "Minimally", type: "B" },
      { text: "Moderately, affects some areas", type: "C" },
      { text: "Significantly, affects many areas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cool Cucumber",
    emoji: "🥒",
    description: "Kau super chill! Anxiety level rendah, kau handle life dengan calm. Dont stress the small stuff - thats literally you! Keep those zen vibes!",
    traits: ["Calm", "Relaxed", "Unbothered", "Present-focused"],
    strengths: ["Low stress levels", "Handle pressure well", "Enjoy life more"],
    weaknesses: ["May not relate bila orang anxious", "Might underestimate others' stress"],
    tips: ["Appreciate this gift", "Be patient dengan anxious people", "Share your calm energy"],
  },
  B: {
    type: "B",
    title: "Occasionally Anxious",
    emoji: "🌤️",
    description: "Kau ada normal level of anxiety - present tapi manageable. Worry sometimes, mostly cope well. This is healthy and realistic response to life!",
    traits: ["Balanced", "Adaptive", "Self-aware", "Coping well"],
    strengths: ["Healthy awareness", "Good coping skills", "Functional despite worries"],
    weaknesses: ["Dapat slip into more anxiety bila triggered"],
    tips: ["Maintain current coping strategies", "Know your triggers", "Rest bila perlu"],
  },
  C: {
    type: "C",
    title: "Frequent Worrier",
    emoji: "😰",
    description: "Anxiety quite present dalam life kau. Worry often, affects mood dan behavior. Kau functioning tapi carrying heavier load than necessary!",
    traits: ["Worried", "Overthinking", "Tense", "Cautious"],
    strengths: ["Thorough planner", "Anticipate problems", "Empathetic dengan others"],
    weaknesses: ["Exhausting mentally", "Miss out on enjoyment", "Physical symptoms"],
    tips: ["Learn anxiety management tools", "Consider talking to someone", "Self-care is essential"],
  },
  D: {
    type: "D",
    title: "High Anxiety",
    emoji: "🌪️",
    description: "Kau carry heavy anxiety load. It affects many areas of life. Please know this is manageable dengan right support! You dont have to feel like this forever!",
    traits: ["Highly anxious", "Overwhelmed", "Avoiding", "Struggling"],
    strengths: ["Extremely empathetic", "Deeply feeling", "Sensitive"],
    weaknesses: ["Daily life affected", "May avoid important things", "Physical health impact"],
    tips: ["Please consider professional help", "You deserve support", "Anxiety is treatable!"],
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
