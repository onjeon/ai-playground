// Gaya Casual Anda
// Apa style casual fashion anda?

export const questions = [
  {
    id: 1,
    question: "Weekend outfit anda biasanya...",
    options: [
      { text: "Still stylish, coordinate colors", type: "A" },
      { text: "Comfortable tapi presentable", type: "B" },
      { text: "T-shirt dan shorts/jeans", type: "C" },
      { text: "Pajamas sampai petang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Keluar mall, anda pakai...",
    options: [
      { text: "OOTD ready, aesthetic vibes", type: "A" },
      { text: "Nice top dengan jeans", type: "B" },
      { text: "Apa yang grab first", type: "C" },
      { text: "Same outfit pergi kedai runcit", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Footwear casual favorite anda?",
    options: [
      { text: "Trendy sneakers - Nike, Adidas", type: "A" },
      { text: "Clean white shoes", type: "B" },
      { text: "Sandal atau flip flops", type: "C" },
      { text: "Selipar Jepun everywhere", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Wardrobe casual anda ada...",
    options: [
      { text: "Banyak options untuk mix and match", type: "A" },
      { text: "Essential pieces yang versatile", type: "B" },
      { text: "Sikit je, sama setiap hari", type: "C" },
      { text: "Mostly free shirts dari events", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pergi mamak, anda...",
    options: [
      { text: "Still look put together", type: "A" },
      { text: "Casual tapi okay", type: "B" },
      { text: "T-shirt lusuh pun takpe", type: "C" },
      { text: "Seluar pendek lubang pun redah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Shopping baju casual, anda pergi mana?",
    options: [
      { text: "Zara, H&M, branded stores", type: "A" },
      { text: "Uniqlo, Cotton On - quality basics", type: "B" },
      { text: "Shopee, bundle - jimat", type: "C" },
      { text: "Jarang shopping, cukup je baju", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Color palette casual anda...",
    options: [
      { text: "Trendy colors mengikut season", type: "A" },
      { text: "Neutral - hitam, putih, grey", type: "B" },
      { text: "Random colors, tak kisah", type: "C" },
      { text: "Apa ada pakai je", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Accessories untuk casual look?",
    options: [
      { text: "Hat, watch, shades - complete!", type: "A" },
      { text: "Watch atau simple necklace", type: "B" },
      { text: "Kadang-kadang je", type: "C" },
      { text: "Zero accessories", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila kawan ajak keluar last minute...",
    options: [
      { text: "Quick outfit change, ready!", type: "A" },
      { text: "Tukar sikit, add jacket", type: "B" },
      { text: "Pergi macam tu je", type: "C" },
      { text: "Malas tukar, cancel je", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Instagram casual OOTD anda...",
    options: [
      { text: "Aesthetic, well-curated", type: "A" },
      { text: "Nice photos bila ada occasion", type: "B" },
      { text: "Jarang post outfit", type: "C" },
      { text: "Tak post langsung", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Casual Chic",
    emoji: "✨",
    description: "Casual tapi still stylish! Anda make effort even untuk simple outing. Always camera-ready! Effortlessly fashionable!",
    traits: ["Stylish", "Trendy", "Put-together", "Fashion-conscious"],
    strengths: ["Always looks good", "Instagram-worthy", "Confident"],
    weaknesses: ["High maintenance", "Shopping addiction maybe?"],
    tips: ["Enjoy your style!", "Don't stress too much about appearance"],
  },
  B: {
    type: "B",
    title: "Effortlessly Cool",
    emoji: "😎",
    description: "Clean dan simple! Anda tahu what works dan stick with it. Classic pieces yang never go wrong!",
    traits: ["Classic", "Clean", "Minimalist", "Practical"],
    strengths: ["Timeless style", "Easy to dress", "Always appropriate"],
    weaknesses: ["Could experiment more"],
    tips: ["Try new styles kadang-kadang", "Add pops of color"],
  },
  C: {
    type: "C",
    title: "Comfort First",
    emoji: "👕",
    description: "Comfort over style! Anda prioritize feeling good over looking fancy. Function over fashion!",
    traits: ["Comfortable", "Practical", "Low-key", "Easy-going"],
    strengths: ["Never uncomfortable", "Low stress about clothes"],
    weaknesses: ["Could dress up more", "First impressions suffer"],
    tips: ["Invest in comfy AND stylish pieces", "Both can coexist!"],
  },
  D: {
    type: "D",
    title: "Zero Effort Zone",
    emoji: "😴",
    description: "Fashion? Apa tu? Anda wear whatever is clean (hopefully). Life is too short to stress about clothes!",
    traits: ["Unbothered", "Minimalist", "Practical", "No fuss"],
    strengths: ["Zero clothing stress", "Saves money", "Focus on other things"],
    weaknesses: ["Could improve appearance", "May miss opportunities"],
    tips: ["One or two nice pieces go a long way", "First impressions matter sometimes"],
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
