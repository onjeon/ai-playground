// Gaya Theme Park Anda
// Macam mana anda di theme park?

export const questions = [
  {
    id: 1,
    question: "Sampai theme park, anda terus...",
    options: [
      { text: "Roller coaster paling extreme!", type: "A" },
      { text: "Check map, plan route", type: "B" },
      { text: "Gentle rides dulu warm up", type: "C" },
      { text: "Makan dulu, rides later", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Queue panjang untuk ride popular...",
    options: [
      { text: "Worth it! Queue whatever it takes", type: "A" },
      { text: "Time it right, avoid peak", type: "B" },
      { text: "Skip, cari ride kurang queue", type: "C" },
      { text: "Beli express pass!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Thrill level anda?",
    options: [
      { text: "Extreme! The scarier the better", type: "A" },
      { text: "Moderate - fun tapi tak muntah", type: "B" },
      { text: "Mild - enjoy scenery je", type: "C" },
      { text: "Watch others dari bawah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Water rides, anda...",
    options: [
      { text: "Yes! Basah pun takpe!", type: "A" },
      { text: "Okay bila panas", type: "B" },
      { text: "Avoid - tak nak basah", type: "C" },
      { text: "Tengok kawan basah je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Theme park snacks, anda beli...",
    options: [
      { text: "Everything! Theme park food adalah experience", type: "A" },
      { text: "Classic choices - churros, popcorn", type: "B" },
      { text: "Bawa bekal sendiri", type: "C" },
      { text: "Makan kat luar after theme park", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Merchandise dan souvenirs...",
    options: [
      { text: "Buy all the things! Memories!", type: "A" },
      { text: "One or two meaningful items", type: "B" },
      { text: "Photos je cukup", type: "C" },
      { text: "Skip, save money untuk rides", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pergi theme park dengan siapa?",
    options: [
      { text: "Squad besar - lebih fun!", type: "A" },
      { text: "Close friends atau partner", type: "B" },
      { text: "Family - kids akan suka", type: "C" },
      { text: "Anyone yang nak pergi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila tak berani naik sesuatu...",
    options: [
      { text: "Push myself, YOLO!", type: "A" },
      { text: "Cuba sekali, see how", type: "B" },
      { text: "It's okay, skip je", type: "C" },
      { text: "Watch dan moral support", type: "D" },
    ],
  },
  {
    id: 9,
    question: "End of day kat theme park...",
    options: [
      { text: "Stay sampai tutup! Maximize!", type: "A" },
      { text: "Leave bila dah satisfied", type: "B" },
      { text: "Early exit, penat", type: "C" },
      { text: "Ikut group decision", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Post theme park, anda rasa...",
    options: [
      { text: "BEST DAY EVER! When again?!", type: "A" },
      { text: "Great day, worth it!", type: "B" },
      { text: "Fun tapi penat", type: "C" },
      { text: "Okay experience", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thrill Seeker",
    emoji: "🎢",
    description: "EXTREME is your middle name! Roller coaster junkie, no ride too scary. Theme park adalah playground anda!",
    traits: ["Adventurous", "Brave", "Energetic", "Fun-loving"],
    strengths: ["Maximizes experience", "Great company for adventure"],
    weaknesses: ["May push others too hard", "Exhausting pace"],
    tips: ["Not everyone is as brave!", "Pace yourself"],
  },
  B: {
    type: "B",
    title: "Smart Visitor",
    emoji: "🗺️",
    description: "Strategic theme park goer! Plan route, avoid queues, maximize fun with minimum stress. Efficient fun-haver!",
    traits: ["Strategic", "Balanced", "Efficient", "Smart"],
    strengths: ["Great planning", "Balanced experience"],
    weaknesses: ["May be too rigid", "Miss spontaneous fun"],
    tips: ["Be spontaneous sometimes!", "Plans can change"],
  },
  C: {
    type: "C",
    title: "Gentle Rider",
    emoji: "🎠",
    description: "Enjoy theme park vibes tanpa perlu extreme! Carousel, train ride, photo spots - all valid! Peaceful theme park experience!",
    traits: ["Gentle", "Relaxed", "Photo-focused", "Comfortable"],
    strengths: ["No stress", "Appreciates ambiance"],
    weaknesses: ["Miss thrilling experiences"],
    tips: ["Try one thrill ride!", "You might surprise yourself"],
  },
  D: {
    type: "D",
    title: "Theme Park Tourist",
    emoji: "📸",
    description: "Theme park untuk experience je! Food, photos, vibes - rides optional. There for the atmosphere!",
    traits: ["Casual", "Observer", "Flexible", "Low-key"],
    strengths: ["No pressure", "Enjoys different aspects"],
    weaknesses: ["May miss main attractions"],
    tips: ["Try at least one ride!", "That's what theme parks are for"],
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
