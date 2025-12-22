// Team McD atau KFC?
// Fun test tentang personality based on fast food preference

export const questions = [
  {
    id: 1,
    question: "Tengah malam lapar gila. Nak pergi mana?",
    options: [
      { text: "McD 24 jam! McChicken calling!", type: "A" },
      { text: "KFC! Hot & Spicy 2 ketul!", type: "B" },
      { text: "Mana-mana pun boleh la", type: "C" },
      { text: "Masak Maggi je, malas keluar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Family outing, nak makan apa?",
    options: [
      { text: "McD Happy Meal untuk budak-budak!", type: "A" },
      { text: "KFC bucket sharing with family!", type: "B" },
      { text: "Tanya family dulu nak apa", type: "C" },
      { text: "Tak makan fast food, unhealthy", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ayam goreng paling best menurut kau?",
    options: [
      { text: "McD Spicy Ayam! Crispy outside, juicy inside!", type: "A" },
      { text: "KFC Original Recipe! The colonel knows best!", type: "B" },
      { text: "Dua-dua sedap la, tak kisah", type: "C" },
      { text: "Ayam goreng gerai lagi best!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Side dish wajib kau order?",
    options: [
      { text: "McD Fries! Golden perfection!", type: "A" },
      { text: "KFC Coleslaw dan Whipped Potato!", type: "B" },
      { text: "Main course je, skip sides", type: "C" },
      { text: "Both sides sedap actually", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Burger pilihan hati kau?",
    options: [
      { text: "McD Big Mac atau Double Cheeseburger!", type: "A" },
      { text: "KFC Zinger! Spicy power!", type: "B" },
      { text: "Tak makan burger sangat", type: "C" },
      { text: "Ramly burger lagi sedap!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Breakfast fast food, pilihan kau?",
    options: [
      { text: "McD Hotcakes dan Egg McMuffin!", type: "A" },
      { text: "KFC... takde breakfast menu pun", type: "B" },
      { text: "Nasi lemak tepi jalan lagi best", type: "C" },
      { text: "Skip breakfast, intermittent fasting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ada promo 'Buy 1 Free 1'. Mana kau pergi?",
    options: [
      { text: "McD! Promotions dia selalu best!", type: "A" },
      { text: "KFC! Snack Plate deal unbeatable!", type: "B" },
      { text: "Mana ada promo pergi situ!", type: "C" },
      { text: "Tak tergoda dengan promo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Minuman pilihan di fast food?",
    options: [
      { text: "McD Coke float atau McFlurry!", type: "A" },
      { text: "KFC Pepsi atau Mountain Dew!", type: "B" },
      { text: "Air kosong je, nak sihat", type: "C" },
      { text: "Bawak tumbler sendiri", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau kena pilih satu brand je untuk seumur hidup?",
    options: [
      { text: "McD! Variety banyak!", type: "A" },
      { text: "KFC! Ayam is life!", type: "B" },
      { text: "Susah nak pilih, dua-dua best", type: "C" },
      { text: "Taknak dua-dua, pilih healthy food", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Drive-thru jam panjang. Kau macam mana?",
    options: [
      { text: "Queue je la, McD worth the wait!", type: "A" },
      { text: "Queue je la, KFC worth the wait!", type: "B" },
      { text: "Pergi tempat lain, malas queue", type: "C" },
      { text: "Park dan walk in, faster", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Team McD Forever",
    emoji: "🍟",
    description: "Kau ni hardcore McD fan! Golden Arches adalah rumah kedua. Fries, McFlurry, Big Mac - semua kau hafal. I'm lovin' it adalah lifestyle kau!",
    traits: ["McD loyalist", "Fries lover", "Variety seeker", "Dessert fan"],
    strengths: ["Know McD menu by heart", "24-hour cravings solved", "Breakfast options"],
    weaknesses: ["Missing KFC goodness", "Limited protein options"],
    tips: ["Try KFC once in a while", "Ayam dia sedap jugak tau"],
  },
  B: {
    type: "B",
    title: "Team KFC Ride or Die",
    emoji: "🍗",
    description: "Kau ni Colonel Sanders punya anak! KFC adalah life, ayam adalah love. Original Recipe atau Hot & Spicy, dua-dua best. Finger lickin' good forever!",
    traits: ["KFC devotee", "Chicken obsessed", "Spice lover", "Bucket sharer"],
    strengths: ["Best chicken expert", "Protein power", "Family meal pro"],
    weaknesses: ["Missing McD variety", "No breakfast options"],
    tips: ["McD fries pun sedap", "Diversify sikit"],
  },
  C: {
    type: "C",
    title: "Fast Food Neutral",
    emoji: "🍔",
    description: "Kau ni tak bias! McD dan KFC sama je best. Pergi ikut mood, craving, atau proximity. Diplomatic fast food enjoyer - semua pun sedap!",
    traits: ["Flexible", "Non-loyal", "Mood-based", "Diplomatic"],
    strengths: ["Enjoy both worlds", "No FOMO", "Adaptable cravings"],
    weaknesses: ["No strong preference", "Indecisive sometimes"],
    tips: ["Having favorite is okay", "Embrace your true choice"],
  },
  D: {
    type: "D",
    title: "Fast Food Skeptic",
    emoji: "🥗",
    description: "Kau ni tak sangat into fast food. Prefer homemade atau local gerai. Healthy conscious atau just not into it. Different path, valid choice!",
    traits: ["Health conscious", "Traditional", "Local food lover", "Non-conformist"],
    strengths: ["Healthier lifestyle", "Support local", "Save money"],
    weaknesses: ["Miss convenient cravings", "Sometimes seen as boring"],
    tips: ["Occasional fast food is okay", "Treat yourself sometimes"],
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
