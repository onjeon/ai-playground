// Tipe Foodie Kamu
// Tes ini mengungkap personality kamu sebagai pecinta kuliner!

export const questions = [
  {
    id: 1,
    question: "Saat cari tempat makan baru...",
    options: [
      { text: "Research reviews, ratings, best dishes", type: "A" },
      { text: "Recommendations dari trusted sources", type: "B" },
      { text: "Spontan, jalan-jalan nemuin", type: "C" },
      { text: "Viral di TikTok/Instagram", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Foto makanan...",
    options: [
      { text: "Detailed shots, proper lighting", type: "A" },
      { text: "Quick snap untuk memories", type: "B" },
      { text: "Only kalau really pretty", type: "C" },
      { text: "Makan dulu, foto later (kalau inget)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Mencoba makanan baru/aneh...",
    options: [
      { text: "Always! Culinary adventure", type: "A" },
      { text: "Open minded tapi ada limits", type: "B" },
      { text: "Tergantung mood", type: "C" },
      { text: "Stick to familiar foods", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Antrian panjang untuk makanan...",
    options: [
      { text: "Worth it untuk the best!", type: "A" },
      { text: "Depends on reviews", type: "B" },
      { text: "Short queue okay, long skip", type: "C" },
      { text: "Never, ga worth it", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kuliner knowledge kamu...",
    options: [
      { text: "Know cuisines, techniques, ingredients", type: "A" },
      { text: "Know good food when I taste it", type: "B" },
      { text: "Learning, still exploring", type: "C" },
      { text: "Basic, food is food", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Budget untuk makan di luar...",
    options: [
      { text: "No limit untuk good experience", type: "A" },
      { text: "Reasonable, quality matters", type: "B" },
      { text: "Value for money focused", type: "C" },
      { text: "Cheap eats mostly", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cooking di rumah...",
    options: [
      { text: "Love it, recreate restaurant dishes", type: "A" },
      { text: "Cook regularly, decent skills", type: "B" },
      { text: "Basic cooking, nothing fancy", type: "C" },
      { text: "Rarely, prefer eating out atau delivery", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Food critiquing...",
    options: [
      { text: "Detailed analysis: texture, flavor, presentation", type: "A" },
      { text: "General assessment, enak atau tidak", type: "B" },
      { text: "Simple: like or don't like", type: "C" },
      { text: "Everything tastes fine to me", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Food content consumption...",
    options: [
      { text: "Follow food bloggers, watch cooking shows", type: "A" },
      { text: "Check reviews when needed", type: "B" },
      { text: "Occasional food content", type: "C" },
      { text: "Not really into food content", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Traveling, food priority...",
    options: [
      { text: "Plan around food spots", type: "A" },
      { text: "Research must-try local foods", type: "B" },
      { text: "Eat whatever looks good", type: "C" },
      { text: "Food is secondary to activities", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sharing food discoveries...",
    options: [
      { text: "Post reviews, tell everyone", type: "A" },
      { text: "Recommend to relevant friends", type: "B" },
      { text: "Mention if asked", type: "C" },
      { text: "Keep to myself", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Repeat visits vs new places...",
    options: [
      { text: "Always exploring new", type: "A" },
      { text: "Mix of favorites dan new", type: "B" },
      { text: "Prefer favorites, occasional new", type: "C" },
      { text: "Stick to what I know", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Ultimate Foodie",
    emoji: "🍽️",
    description: "Makan adalah hidup! You're a true culinary enthusiast who appreciates food sebagai art form. Restaurant research, food photography, dan flavor analysis adalah your thing!",
    traits: ["Passionate", "Knowledgeable", "Adventurous", "Dedicated"],
    strengths: ["Best food recommendations", "Culinary appreciation", "Great dining experiences"],
    weaknesses: ["Expensive hobby", "Might be food snob", "Never satisfied with average"],
    tips: ["Sometimes simple food is joyful too", "Not every meal needs to be special", "Enjoy with less pressure"],
  },
  B: {
    type: "B",
    title: "The Appreciative Eater",
    emoji: "😋",
    description: "Kamu appreciate good food tanpa obsessing! Know quality when you taste it, enjoy exploring, dan have balanced relationship dengan food.",
    traits: ["Appreciative", "Balanced", "Quality-aware", "Enjoyable"],
    strengths: ["Good food choices", "Healthy relationship", "Reliable recommendations"],
    weaknesses: ["Could explore more adventurous options"],
    tips: ["Try something completely new next time", "You're the ideal foodie!"],
  },
  C: {
    type: "C",
    title: "The Casual Food Lover",
    emoji: "🍜",
    description: "Food adalah enjoyable part of life, bukan obsession! Eat what looks good, try new things occasionally, dan don't stress about it.",
    traits: ["Casual", "Flexible", "Spontaneous", "Easy-going"],
    strengths: ["No food anxiety", "Enjoy eating", "Easy dining companion"],
    weaknesses: ["Miss some food experiences", "Could develop palate more"],
    tips: ["Once in a while, really focus on a meal", "Food can be exciting adventure!"],
  },
  D: {
    type: "D",
    title: "The Functional Eater",
    emoji: "🥣",
    description: "Food is fuel for you! Eat to live, not live to eat. Perfectly valid - there's more to life than obsessing over meals!",
    traits: ["Practical", "Simple", "Unfussy", "Functional"],
    strengths: ["No food stress", "Save money on dining", "Other interests priority"],
    weaknesses: ["Miss joy of good food", "Might not understand foodies"],
    tips: ["Food CAN be an experience", "Try a really good restaurant sometime", "It might open new world"],
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
