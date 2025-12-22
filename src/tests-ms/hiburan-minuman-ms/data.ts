// Minuman Malaysia Mana Anda?
// Personaliti anda macam minuman apa?

export const questions = [
  {
    id: 1,
    question: "Pagi hari, anda perlukan...",
    options: [
      { text: "Strong caffeine untuk start!", type: "A" },
      { text: "Something warm dan comforting", type: "B" },
      { text: "Cold refreshment", type: "C" },
      { text: "Sweet treat untuk mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Temperature personality anda?",
    options: [
      { text: "Hot - intense dan passionate!", type: "A" },
      { text: "Warm - friendly dan approachable", type: "B" },
      { text: "Cold - cool dan collected", type: "C" },
      { text: "Mixed - depends on situation", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Social energy anda?",
    options: [
      { text: "High energy, keep going!", type: "A" },
      { text: "Warming presence", type: "B" },
      { text: "Chill vibes only", type: "C" },
      { text: "Sweet dan fun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila stressed, anda...",
    options: [
      { text: "Need energy boost!", type: "A" },
      { text: "Seek comfort", type: "B" },
      { text: "Cool down, relax", type: "C" },
      { text: "Sweet escape", type: "D" },
    ],
  },
  {
    id: 5,
    question: "People need you bila...",
    options: [
      { text: "They need a wake-up call", type: "A" },
      { text: "They need comfort", type: "B" },
      { text: "They need to chill", type: "C" },
      { text: "They need cheering up", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Complexity level anda?",
    options: [
      { text: "Bold dan straightforward", type: "A" },
      { text: "Layers of depth", type: "B" },
      { text: "Simple dan refreshing", type: "C" },
      { text: "Sweet dengan twist", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Best time untuk hang dengan anda?",
    options: [
      { text: "Morning - productive hours!", type: "A" },
      { text: "Afternoon - relaxed vibes", type: "B" },
      { text: "Hot day - cooling presence", type: "C" },
      { text: "Anytime - always a treat!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pairing personality - anda best dengan?",
    options: [
      { text: "Intense people yang match energy", type: "A" },
      { text: "Everyone, I'm versatile", type: "B" },
      { text: "Chill people", type: "C" },
      { text: "Fun-loving crowd", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sweetness level anda?",
    options: [
      { text: "Bitter truth - no sugar coating", type: "A" },
      { text: "Balanced - just right", type: "B" },
      { text: "Light sweetness - subtle", type: "C" },
      { text: "Maximum sweetness - life is short!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Legacy anda akan jadi apa?",
    options: [
      { text: "The energizer", type: "A" },
      { text: "The comfort bringer", type: "B" },
      { text: "The cool one", type: "C" },
      { text: "The sweet memory", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kopi O",
    emoji: "☕",
    description: "Strong, bold, dan no-nonsense! Anda adalah wake-up call yang orang perlukan. Intense tapi essential!",
    traits: ["Bold", "Strong", "Essential", "No-nonsense"],
    strengths: ["Gets things done", "Honest", "Reliable morning energy"],
    weaknesses: ["Too intense", "Bitter truth hurts"],
    tips: ["Add sweetness sometimes", "Not everyone can handle your intensity"],
  },
  B: {
    type: "B",
    title: "Teh Tarik",
    emoji: "🍵",
    description: "Warm, comforting, dan brings people together! Anda adalah social glue. Tarik ke sana sini, connect everyone!",
    traits: ["Warm", "Social", "Comforting", "Connecting"],
    strengths: ["Brings people together", "Universally loved", "Versatile"],
    weaknesses: ["May spread too thin", "People-pleasing"],
    tips: ["Your warmth is valued!", "Don't forget yourself"],
  },
  C: {
    type: "C",
    title: "Air Kelapa",
    emoji: "🥥",
    description: "Natural, refreshing, dan healthy vibes! Anda adalah breath of fresh air. Cool, calm, dan collected always!",
    traits: ["Natural", "Refreshing", "Healthy", "Cool"],
    strengths: ["Calming presence", "Healthy influence", "Authentic"],
    weaknesses: ["Too chill sometimes", "May seem boring"],
    tips: ["Your calmness is your superpower!", "Add some excitement kadang-kadang"],
  },
  D: {
    type: "D",
    title: "Bandung",
    emoji: "🌸",
    description: "Sweet, colorful, dan fun! Anda bring joy wherever you go. Pink vibes dan positive energy!",
    traits: ["Sweet", "Fun", "Colorful", "Joyful"],
    strengths: ["Brightens everyone's day", "Fun to be around", "Positive energy"],
    weaknesses: ["Too sweet can be overwhelming", "Not taken seriously"],
    tips: ["Sweetness is a gift!", "Balance with substance"],
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
