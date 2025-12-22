// Gaya Masak Kau
// Kau ni chef Gordon Ramsay atau team maggi je?

export const questions = [
  {
    id: 1,
    question: "Lapar malam-malam. Kau buat apa?",
    options: [
      { text: "Whip up something proper dari fridge", type: "A" },
      { text: "Simple cooking - goreng telur/nasi", type: "B" },
      { text: "Instant noodles/maggi is the way", type: "C" },
      { text: "Grab/FoodPanda to the rescue!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Skill masak kau level mana?",
    options: [
      { text: "Can cook almost anything dari scratch!", type: "A" },
      { text: "Basic dishes okay, nothing fancy", type: "B" },
      { text: "Survival cooking - edible enough", type: "C" },
      { text: "Air pun boleh hangus kalau aku masak!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dapur kau ada apa?",
    options: [
      { text: "Full kitchen setup, semua ada!", type: "A" },
      { text: "Basic essentials - wok, pan, pot", type: "B" },
      { text: "Kettle dan microwave cukup la", type: "C" },
      { text: "Dapur? You mean storage room?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Follow recipe bila masak?",
    options: [
      { text: "Sometimes, tapi usually improvise sendiri", type: "A" },
      { text: "Yes, step by step ikut recipe", type: "B" },
      { text: "What recipe? Agak-agak je!", type: "C" },
      { text: "Aku tak masak so tak relevan!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kawan minta kau masak untuk gathering. Kau?",
    options: [
      { text: "Sure! Nak buat apa? I got this!", type: "A" },
      { text: "Okay, tapi simple dishes je", type: "B" },
      { text: "Uhh... maggi goreng count tak?", type: "C" },
      { text: "HAHA no. Kita tapau je okay?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Weekly meal prep - kau buat tak?",
    options: [
      { text: "Yes! Prep meals for the whole week", type: "A" },
      { text: "Sometimes, bila rajin", type: "B" },
      { text: "What's meal prep?", type: "C" },
      { text: "My meal prep is knowing which restaurant to go!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Rempah ratus kat dapur kau?",
    options: [
      { text: "Full spice rack! Semua lengkap!", type: "A" },
      { text: "Basic ones - garam, gula, kicap", type: "B" },
      { text: "Sikit je, mostly expired already", type: "C" },
      { text: "Rempah? Kat restaurant ada!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Masak untuk date/special occasion. Level effort kau?",
    options: [
      { text: "Full course meal, impress them!", type: "A" },
      { text: "Something nice tapi within capability", type: "B" },
      { text: "Order nice food, pretend aku masak!", type: "C" },
      { text: "Terus bawa pergi restaurant la senang!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Grocery shopping untuk masak?",
    options: [
      { text: "Weekly trip, proper planning!", type: "A" },
      { text: "Buy as needed, basic items", type: "B" },
      { text: "Rarely, just instant food", type: "C" },
      { text: "Don't need groceries bila tak masak!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dream cooking scenario kau?",
    options: [
      { text: "Own restaurant atau cooking show!", type: "A" },
      { text: "Cook nice meals for family everyday", type: "B" },
      { text: "Just survive without burning kitchen", type: "C" },
      { text: "Personal chef to cook FOR me!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "MasterChef Material - Tangan Emas 👨‍🍳",
    emoji: "👨‍🍳",
    description: "KAU NI CHEF LEVEL! Masak apa pun jadi! Dapur adalah kingdom kau, dan rempah adalah your best friends. Orang sanggup datang jauh untuk makan masakan kau. Gordon Ramsay would approve!",
    traits: ["Excellent cook", "Creative in kitchen", "Loves cooking", "Full kitchen setup"],
    strengths: ["Save money on food", "Impress everyone", "Healthy eating", "Delicious meals always"],
    weaknesses: ["Time consuming", "High expectations from others", "Kitchen always messy after"],
    tips: ["Share your recipes!", "Consider food business maybe?"],
  },
  B: {
    type: "B",
    title: "Capable Cook - Survival Skills ✓ 🍳",
    emoji: "🍳",
    description: "Kau ni CAPABLE COOK! Basic dishes semua boleh, survival skills ada. Tak MasterChef tapi definitely tak starve. Normal functioning adult yang boleh feed themselves. Solid!",
    traits: ["Basic cooking skills", "Can survive alone", "Practical approach", "No frills cooking"],
    strengths: ["Self-sufficient", "Can feed yourself", "Not too fussy"],
    weaknesses: ["Limited repertoire", "Might get boring", "Not impressive for dates"],
    tips: ["Try one new recipe a week!", "YouTube is your friend"],
  },
  C: {
    type: "C",
    title: "Maggi Master - Instant Noodle PhD 🍜",
    emoji: "🍜",
    description: "KAU NI MAGGI MASTER! Instant noodles adalah your specialty. 101 cara masak maggi, kau tahu semua. Real cooking? That's what restaurants are for! Survival cooking at its finest!",
    traits: ["Instant food expert", "Minimal cooking", "Microwave master", "Just enough skills"],
    strengths: ["Quick meals", "Low effort", "Won't starve", "Efficient"],
    weaknesses: ["Limited skills", "Unhealthy maybe", "Can't impress anyone"],
    tips: ["Learn 3 simple dishes at least!", "Your health will thank you"],
  },
  D: {
    type: "D",
    title: "Kitchen Disaster - Grab/Panda VIP 📱",
    emoji: "📱",
    description: "KAU TAK MASAK LANGSUNG! Dapur adalah decoration. Food delivery apps adalah your best friends. Kau support local F&B industry single-handedly! Air pun kau boleh burn somehow!",
    traits: ["Cannot cook", "Food delivery expert", "Kitchen is mystery", "Restaurant regular"],
    strengths: ["Support economy", "Try many restaurants", "No kitchen disasters"],
    weaknesses: ["Expensive lifestyle", "Unhealthy maybe", "Helpless when no delivery"],
    tips: ["Learn boil water at least!", "One simple dish won't hurt!", "Save money, learn to cook!"],
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
