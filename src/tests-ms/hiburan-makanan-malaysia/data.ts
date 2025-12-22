// Makanan Malaysia Mana Anda?
// Personaliti anda macam makanan apa?

export const questions = [
  {
    id: 1,
    question: "Bila bangun pagi, mood anda macam mana?",
    options: [
      { text: "Ready to conquer the day!", type: "A" },
      { text: "Slow start, warm up dulu", type: "B" },
      { text: "Need caffeine ASAP!", type: "C" },
      { text: "Chill, no rush", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Social setting, anda...",
    options: [
      { text: "Semua orang kenal dan suka!", type: "A" },
      { text: "Warming presence, comforting", type: "B" },
      { text: "Intense dan memorable", type: "C" },
      { text: "Low-key tapi appreciated", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Personality descriptor anda?",
    options: [
      { text: "Iconic dan legendary", type: "A" },
      { text: "Warm dan familiar", type: "B" },
      { text: "Strong dan bold", type: "C" },
      { text: "Fresh dan refreshing", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Handling stress macam mana?",
    options: [
      { text: "Stay strong, power through!", type: "A" },
      { text: "Seek comfort dan support", type: "B" },
      { text: "Face it head-on intensely", type: "C" },
      { text: "Cool down, stay calm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Love language anda?",
    options: [
      { text: "Acts of service - always there", type: "A" },
      { text: "Words of affirmation - warm", type: "B" },
      { text: "Quality time - intense focus", type: "C" },
      { text: "Physical touch - refreshing", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Work style anda?",
    options: [
      { text: "Complete package, all-rounder!", type: "A" },
      { text: "Reliable, consistent performance", type: "B" },
      { text: "Focused, intense bursts", type: "C" },
      { text: "Flexible, go with flow", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila buat keputusan...",
    options: [
      { text: "Confident, know what I want", type: "A" },
      { text: "Consider semua options carefully", type: "B" },
      { text: "Quick dan decisive", type: "C" },
      { text: "Flexible, open to change", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Energy pattern anda?",
    options: [
      { text: "Consistent high energy all day", type: "A" },
      { text: "Steady dan sustainable", type: "B" },
      { text: "Peaks of high intensity", type: "C" },
      { text: "Laid-back dengan occasional bursts", type: "D" },
    ],
  },
  {
    id: 9,
    question: "People describe you as...",
    options: [
      { text: "The complete package!", type: "A" },
      { text: "Comforting presence", type: "B" },
      { text: "Intense dan passionate", type: "C" },
      { text: "Refreshingly different", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal setting untuk anda?",
    options: [
      { text: "Anywhere, I fit everywhere!", type: "A" },
      { text: "Cozy, familiar places", type: "B" },
      { text: "Busy, energetic environments", type: "C" },
      { text: "Chill, relaxed atmosphere", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nasi Lemak",
    emoji: "🍚",
    description: "Anda adalah ICON! Complete package - sambal (spicy personality), telur (well-rounded), ikan bilis (crunch), semua ada! National treasure!",
    traits: ["Complete", "Iconic", "Versatile", "Beloved"],
    strengths: ["All-rounder", "Universally loved", "Never fails"],
    weaknesses: ["High expectations to meet", "Classic can seem boring"],
    tips: ["You're a legend!", "Stay authentic"],
  },
  B: {
    type: "B",
    title: "Roti Canai",
    emoji: "🫓",
    description: "Warm, comforting, dan familiar! Anda adalah comfort food personified. Always there when needed, adaptable dengan apa-apa je!",
    traits: ["Comforting", "Versatile", "Reliable", "Warm"],
    strengths: ["Adaptable", "Comforting presence", "Pairs well with anything"],
    weaknesses: ["May be taken for granted", "Too flexible"],
    tips: ["Your warmth is valued!", "Set boundaries"],
  },
  C: {
    type: "C",
    title: "Teh Tarik",
    emoji: "🍵",
    description: "Bold, strong, dan packed with energy! Anda intense tapi sweet. Wake people up dan bring them together!",
    traits: ["Energetic", "Bold", "Social", "Intense"],
    strengths: ["Brings energy", "Conversation starter", "Memorable"],
    weaknesses: ["Too intense sometimes", "Overwhelming"],
    tips: ["Balance intensity", "Not everyone needs a pick-me-up"],
  },
  D: {
    type: "D",
    title: "Cendol",
    emoji: "🍧",
    description: "Refreshing, unique, dan cooling presence! Anda bring calm ke mana-mana. Sweet dengan layers of complexity!",
    traits: ["Refreshing", "Calm", "Complex", "Sweet"],
    strengths: ["Calms situations", "Unique personality", "Appreciated in heat"],
    weaknesses: ["Seasonal appeal", "Not for everyone"],
    tips: ["Your chill vibe is needed!", "Cool people love cool people"],
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
