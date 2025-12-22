// Tipe Street Food Kamu
// Tes ini mengungkap personality kamu berdasarkan kebiasaan jajan street food!

export const questions = [
  {
    id: 1,
    question: "Street food favorit...",
    options: [
      { text: "Nasi goreng/mie goreng gerobak", type: "A" },
      { text: "Sate, bakso, atau soto", type: "B" },
      { text: "Gorengan dan snacks", type: "C" },
      { text: "Martabak, terang bulan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Waktu jajan street food...",
    options: [
      { text: "Late night, midnight cravings", type: "A" },
      { text: "Makan siang/sore regular", type: "B" },
      { text: "Whenever craving hits", type: "C" },
      { text: "Weekend exploring", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Memilih street food vendor...",
    options: [
      { text: "Langganan tetap, tau yang enak", type: "A" },
      { text: "Yang rame, pasti enak", type: "B" },
      { text: "Try random ones, adventurous", type: "C" },
      { text: "Recommendations dari orang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hygiene concern level...",
    options: [
      { text: "Street food immune system built", type: "A" },
      { text: "Observe dulu sebelum beli", type: "B" },
      { text: "Slightly concerned tapi YOLO", type: "C" },
      { text: "Only dari yang keliatan bersih", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Portion ordering...",
    options: [
      { text: "Banyak, street food is feast", type: "A" },
      { text: "Normal portion", type: "B" },
      { text: "Sample banyak jenis", type: "C" },
      { text: "Small, cukup untuk nyobain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Spiciness level...",
    options: [
      { text: "Pedes pol, extra sambel", type: "A" },
      { text: "Medium, balanced", type: "B" },
      { text: "Mild, ga kuat pedes", type: "C" },
      { text: "Custom sesuai mood", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Eating spot preference...",
    options: [
      { text: "Di tempat, full experience", type: "A" },
      { text: "Bungkus, makan di rumah", type: "B" },
      { text: "Stand and eat, quick", type: "C" },
      { text: "Find spot nearby untuk duduk", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Budget untuk street food...",
    options: [
      { text: "Cheap eats, that's the point", type: "A" },
      { text: "Value for money", type: "B" },
      { text: "Will pay more untuk yang enak", type: "C" },
      { text: "Compare prices", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Discovering new street food spots...",
    options: [
      { text: "Love hunting hidden gems", type: "A" },
      { text: "Open kalau lewat", type: "B" },
      { text: "Follow food accounts/reviews", type: "C" },
      { text: "Stick to known spots", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Street food dengan teman...",
    options: [
      { text: "The best! Explore bareng", type: "A" },
      { text: "Fun untuk sharing variety", type: "B" },
      { text: "Solo fine, faster", type: "C" },
      { text: "Depends, either way good", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Antri panjang di street food viral...",
    options: [
      { text: "Worth it untuk yang legend", type: "A" },
      { text: "Depends on seberapa viral", type: "B" },
      { text: "Find alternatives", type: "C" },
      { text: "Skip, probably overrated", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Street food adalah...",
    options: [
      { text: "Soul of Indonesian food", type: "A" },
      { text: "Affordable delicious options", type: "B" },
      { text: "Adventure for taste buds", type: "C" },
      { text: "Convenient meal solution", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Street Food Connoisseur",
    emoji: "🍜",
    description: "Street food adalah passion! Tau semua hidden gems, immune to street food risks, dan appreciate authentic flavors. True local food lover!",
    traits: ["Passionate", "Adventurous", "Local food expert", "Fearless eater"],
    strengths: ["Best street food recommendations", "Appreciate authentic taste", "Support local vendors"],
    weaknesses: ["Health concerns maybe?", "Might be food snob about authentic"],
    tips: ["Your stomach is legendary", "Share your knowledge!", "Maybe some moderation"],
  },
  B: {
    type: "B",
    title: "The Balanced Street Eater",
    emoji: "🥘",
    description: "Kamu enjoy street food dengan balance! Appreciate it tanpa going extreme. Know good spots, maintain reasonable caution. Smart eating!",
    traits: ["Balanced", "Practical", "Appreciative", "Sensible"],
    strengths: ["Good choices", "Healthy relationship dengan street food", "Enjoy without stress"],
    weaknesses: ["Could explore more"],
    tips: ["You're doing great!", "Maybe try something new next time"],
  },
  C: {
    type: "C",
    title: "The Street Food Explorer",
    emoji: "🗺️",
    description: "Street food adalah adventure! Try everything, discover new things, dan document the journey. Foodie explorer mode!",
    traits: ["Adventurous", "Explorer", "Open-minded", "Curious"],
    strengths: ["Discover amazing food", "Great food stories", "Diverse palate"],
    weaknesses: ["Some experiments don't work out", "Stomach testing"],
    tips: ["Trust your gut (literally)", "Some classics are classic for reason"],
  },
  D: {
    type: "D",
    title: "The Cautious Street Eater",
    emoji: "🧐",
    description: "Street food dengan caution! Enjoy it tapi selectively. Quality dan cleanliness matters. Thoughtful approach to street eating!",
    traits: ["Cautious", "Selective", "Quality-focused", "Thoughtful"],
    strengths: ["Avoid food poisoning", "Quality choices", "Discerning palate"],
    weaknesses: ["Miss some authentic experiences", "Maybe too careful"],
    tips: ["Some 'risky' food is worth it", "Street food builds immunity!", "Live a little!"],
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
