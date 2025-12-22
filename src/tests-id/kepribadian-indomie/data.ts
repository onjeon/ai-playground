// Kepribadian dari Indomie Favorit
// Tes ini mengungkap kepribadianmu berdasarkan preferensi Indomie!

export const questions = [
  {
    id: 1,
    question: "Varian Indomie favorit...",
    options: [
      { text: "Goreng Original, the classic", type: "A" },
      { text: "Mi Goreng Pedas/Rendang", type: "B" },
      { text: "Kuah Soto/Ayam Bawang", type: "C" },
      { text: "Varian unik/limited edition", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara masak Indomie...",
    options: [
      { text: "Sesuai instruksi, perfect every time", type: "A" },
      { text: "Extra bumbu, more is more", type: "B" },
      { text: "Quick, asal matang", type: "C" },
      { text: "Experimental, add-ons galore", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Add-ons ke Indomie biasanya...",
    options: [
      { text: "Nothing, murni Indomie aja", type: "A" },
      { text: "Telor, classic combo", type: "B" },
      { text: "Full meal: telor, sayur, kornet", type: "C" },
      { text: "Creative: cheese, sosis, dll", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Waktu makan Indomie...",
    options: [
      { text: "Midnight snack, late night craving", type: "A" },
      { text: "When lazy to cook proper food", type: "B" },
      { text: "Anytime, Indomie is always right", type: "C" },
      { text: "Comfort food saat sedih/stress", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Indomie kuah sisain atau habis...",
    options: [
      { text: "Slurp habis semua!", type: "A" },
      { text: "Most of it, leave a bit", type: "B" },
      { text: "Mi habis, kuah sisain", type: "C" },
      { text: "Prefer goreng, no kuah drama", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Stock Indomie di rumah...",
    options: [
      { text: "Always stocked, berbagai varian", type: "A" },
      { text: "Few packs untuk emergency", type: "B" },
      { text: "Buy when craving", type: "C" },
      { text: "Rarely, not that into it", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Indomie di warung vs masak sendiri...",
    options: [
      { text: "Warung hits different", type: "A" },
      { text: "Masak sendiri, I know my preference", type: "B" },
      { text: "Both good, depends on mood", type: "C" },
      { text: "Home cooking, save money", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Double Indomie (2 bungkus)...",
    options: [
      { text: "Regular occurrence, one not enough", type: "A" },
      { text: "Special occasions, extra hungry", type: "B" },
      { text: "Too much for me", type: "C" },
      { text: "Guilty pleasure", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Defending Indomie vs other brands...",
    options: [
      { text: "Indomie is religion, no debate", type: "A" },
      { text: "Prefer Indomie tapi respect others", type: "B" },
      { text: "All instant noodles are fine", type: "C" },
      { text: "Tried others, always come back", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Indomie saat traveling abroad...",
    options: [
      { text: "Pack Indomie, essential", type: "A" },
      { text: "Miss it, first thing when back", type: "B" },
      { text: "Find it abroad somehow", type: "C" },
      { text: "Can live without for a while", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Indomie texture preference...",
    options: [
      { text: "Al dente, slightly firm", type: "A" },
      { text: "Standard, well-cooked", type: "B" },
      { text: "Soft, overcooked comfort", type: "C" },
      { text: "Don't care, just eat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Indomie adalah...",
    options: [
      { text: "National treasure, Indonesia's pride", type: "A" },
      { text: "Perfect comfort food", type: "B" },
      { text: "Convenient cheap meal", type: "C" },
      { text: "Childhood memories", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Indomie Purist",
    emoji: "🍜",
    description: "Indomie adalah agama! Classic goreng original, cooked to perfection, no unnecessary additions. You appreciate the simple perfection of Indomie.",
    traits: ["Purist", "Traditionalist", "Appreciative", "Loyal"],
    strengths: ["Appreciate the classics", "Consistent taste", "True Indomie connoisseur"],
    weaknesses: ["Might miss new flavors", "Set in ways"],
    tips: ["Try new varians once in a while", "Classics are great, but variety too!"],
  },
  B: {
    type: "B",
    title: "The Indomie Enhancer",
    emoji: "🔥",
    description: "Indomie adalah canvas! Extra bumbu, perfect add-ons, dan customized to your taste. You elevate Indomie to gourmet level!",
    traits: ["Creative", "Flavor-seeker", "Enhancer", "Maximizer"],
    strengths: ["Best tasting Indomie", "Creative combinations", "Know your preferences"],
    weaknesses: ["Maybe too much effort untuk instant noodles?"],
    tips: ["Sometimes simple is beautiful", "Your Indomie is probably amazing though!"],
  },
  C: {
    type: "C",
    title: "The Practical Noodler",
    emoji: "⏰",
    description: "Indomie adalah solution! Quick meal, convenient, dan does the job. No fuss, no ceremony, just fuel.",
    traits: ["Practical", "Efficient", "No-fuss", "Functional"],
    strengths: ["Quick meals", "Low effort eating", "Doesn't overcomplicate"],
    weaknesses: ["Miss the Indomie experience", "Could enjoy more"],
    tips: ["Slow down and enjoy sometimes", "Indomie deserves appreciation!"],
  },
  D: {
    type: "D",
    title: "The Adventurous Noodler",
    emoji: "✨",
    description: "Indomie adalah playground! Try every varian, weird combos, dan always exploring. Indomie is for experimenting!",
    traits: ["Adventurous", "Experimental", "Open-minded", "Explorer"],
    strengths: ["Discover great combos", "Never boring meals", "Flexible palate"],
    weaknesses: ["Some experiments fail", "Might overdo it"],
    tips: ["Document your discoveries!", "Share your best combos"],
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
