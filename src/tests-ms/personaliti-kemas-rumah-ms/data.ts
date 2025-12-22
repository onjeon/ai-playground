// Gaya Kemas Rumah
// Bilik kau macam showroom atau macam kapal pecah?

export const questions = [
  {
    id: 1,
    question: "Right now, bilik kau macam mana?",
    options: [
      { text: "Spotless, boleh masuk magazine!", type: "A" },
      { text: "Tidy, everything ada tempat", type: "B" },
      { text: "Organized chaos - I know where everything is!", type: "C" },
      { text: "Kapal pecah... tapi bilik aku, hak aku!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tetamu nak datang rumah dalam 1 jam. Kau?",
    options: [
      { text: "Ready je, tak payah buat apa pun", type: "A" },
      { text: "Quick tidy up 15 minit cukup", type: "B" },
      { text: "PANIC clean mode activated!", type: "C" },
      { text: "Sorry, rumah tak available for viewing!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pinggan mangkuk kotor. Kau basuh bila?",
    options: [
      { text: "Immediately after guna!", type: "A" },
      { text: "Before tidur, tak biar overnight", type: "B" },
      { text: "Bila dah takde pinggan clean nak guna", type: "C" },
      { text: "Bila dah jadi satu gunung dalam sink!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Baju-baju kau macam mana?",
    options: [
      { text: "Lipat cantik, susun ikut color/type!", type: "A" },
      { text: "Dalam almari, organized enough", type: "B" },
      { text: "The Chair™ ada collection sendiri", type: "C" },
      { text: "Semua atas lantai/merata tempat!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kemas bilik routine kau?",
    options: [
      { text: "Everyday, sikit-sikit maintain", type: "A" },
      { text: "Weekly cleaning session", type: "B" },
      { text: "Bila mood datang atau bila dah teruk", type: "C" },
      { text: "Once a year deep clean je!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Meja study/kerja kau condition macam mana?",
    options: [
      { text: "Clear desk, hanya essentials", type: "A" },
      { text: "Sikit cluttered tapi functional", type: "B" },
      { text: "Piles everywhere tapi I know the system!", type: "C" },
      { text: "Can't see the desk surface anymore!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cleaning products kat rumah kau?",
    options: [
      { text: "Full collection! Specific product for everything!", type: "A" },
      { text: "Basic essentials, enough to clean", type: "B" },
      { text: "Sikit je, rarely restock", type: "C" },
      { text: "Apa tu? Guna je apa yang ada!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Vacuum/mop lantai. Frequency?",
    options: [
      { text: "Every few days, tak tahan kotor!", type: "A" },
      { text: "Weekly is enough", type: "B" },
      { text: "Monthly... maybe?", type: "C" },
      { text: "Bila nampak obvious dirt je!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila kau clean, kau macam mana?",
    options: [
      { text: "Deep clean, every corner!", type: "A" },
      { text: "Thorough but reasonable", type: "B" },
      { text: "Surface clean, yang nampak je", type: "C" },
      { text: "Quick throw things into closet!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Messy space affect productivity kau tak?",
    options: [
      { text: "YES! Tak boleh focus langsung!", type: "A" },
      { text: "Sikit, prefer cleaner space", type: "B" },
      { text: "Not really, used to it", type: "C" },
      { text: "Mess is my natural habitat!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Clean Freak - Monica Geller Energy 🧹✨",
    emoji: "🧹",
    description: "KAU NI CLEAN FREAK TAHAP MAXIMUM! Bilik kau boleh masuk Instagram, spotless 24/7! Debu adalah enemy, kemas adalah life. Orang datang rumah kau macam datang showroom. Marie Kondo would be proud!",
    traits: ["Obsessively clean", "Everything has a place", "Cleans daily", "High standards"],
    strengths: ["Always guest-ready", "Calming environment", "Organized life"],
    weaknesses: ["May stress out others", "Time consuming", "Can be controlling"],
    tips: ["It's okay if things are slightly messy!", "Relax sometimes!"],
  },
  B: {
    type: "B",
    title: "Tidy Person - Responsible Adult 🏠",
    emoji: "🏠",
    description: "Kau ni NORMAL TIDY PERSON! Kemas bila kena kemas, maintain cleanliness without being obsessive. Rumah kau presentable, comfortable, and functional. The balanced approach to adulting!",
    traits: ["Reasonably tidy", "Regular cleaning", "Good habits", "Balanced approach"],
    strengths: ["Healthy cleaning habits", "Not stressful", "Good living environment"],
    weaknesses: ["Sometimes let things slide", "Not perfect but okay"],
    tips: ["Keep it up!", "Your balance is healthy"],
  },
  C: {
    type: "C",
    title: "Organized Chaos - Creative Mess 🌀",
    emoji: "🌀",
    description: "Kau ni ORGANIZED CHAOS type! Messy to outsiders tapi kau tahu where everything is. 'Jangan kacau system aku!' The Chair™ adalah wardrobe kedua. Cleaning happens bila inspiration strikes!",
    traits: ["Messy but functional", "Knows where things are", "Cleans when mood strikes", "Creative mess"],
    strengths: ["Not stressed about mess", "Personal system works", "Time for other things"],
    weaknesses: ["Can't find things sometimes", "Stress when guests come", "Cleaning becomes big project"],
    tips: ["Try 10-minute daily tidying!", "The Chair needs to be freed!"],
  },
  D: {
    type: "D",
    title: "Chaos Incarnate - Kapal Pecah Squad 🌪️",
    emoji: "🌪️",
    description: "BILIK KAU ADALAH DISASTER ZONE! Lantai adalah storage, mess is comfort. Cleaning? Once in a blue moon. Kau ada superpower - surviving in chaos! 'Organized people are just too lazy to look for things!'",
    traits: ["Extremely messy", "Rarely cleans", "Chaos is comfort", "Natural disaster room"],
    strengths: ["Not bothered by mess", "Time saved from cleaning", "Unique system (or no system)"],
    weaknesses: ["Can't find anything", "Health hazard maybe?", "Can't have guests"],
    tips: ["PLEASE clean sometimes!", "Start small - one corner!", "Future you will thank you!"],
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
