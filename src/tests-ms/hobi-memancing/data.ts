// Gaya Memancing Anda
// Jenis pemancing mana anda?

export const questions = [
  {
    id: 1,
    question: "Kenapa anda memancing?",
    options: [
      { text: "Adrenaline bila strike!", type: "A" },
      { text: "Relaxation dan peace", type: "B" },
      { text: "Nak tangkap ikan untuk makan", type: "C" },
      { text: "Social activity dengan kawan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Spot memancing favorite?",
    options: [
      { text: "Offshore/deep sea - big game!", type: "A" },
      { text: "Sungai atau tasik - peaceful", type: "B" },
      { text: "Kolam pancing - confirm dapat", type: "C" },
      { text: "Mana-mana kawan pergi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gear memancing anda?",
    options: [
      { text: "Premium rods, reels, lures!", type: "A" },
      { text: "Decent setup, well-maintained", type: "B" },
      { text: "Basic functional gear", type: "C" },
      { text: "Pinjam kawan je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila tak dapat ikan langsung...",
    options: [
      { text: "Frustrated! Nak strike!", type: "A" },
      { text: "Takpe, enjoy je the peace", type: "B" },
      { text: "Tukar spot atau technique", type: "C" },
      { text: "Best excuse untuk lepak je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ikan yang anda target?",
    options: [
      { text: "Trophy fish! Record size!", type: "A" },
      { text: "Apa-apa yang bite", type: "B" },
      { text: "Edible fish untuk masak", type: "C" },
      { text: "Tak kisah, nak experience je", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Memancing session ideal anda?",
    options: [
      { text: "Dawn to dusk! Full day", type: "A" },
      { text: "Few peaceful hours", type: "B" },
      { text: "Until dapat cukup untuk makan", type: "C" },
      { text: "Ikut flow, bila nak balik", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila dapat big catch...",
    options: [
      { text: "Photo, measure, maybe mount!", type: "A" },
      { text: "Happy, appreciate moment", type: "B" },
      { text: "Nice, makan besar malam ni!", type: "C" },
      { text: "Post group photo!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Weather tak best untuk fishing...",
    options: [
      { text: "Still go! Dedicate fisherman", type: "A" },
      { text: "Reschedule, safety first", type: "B" },
      { text: "Cancel, fish won't bite anyway", type: "C" },
      { text: "Perfect excuse to sleep in", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Fishing knowledge anda?",
    options: [
      { text: "Expert - tides, moon phases, behavior", type: "A" },
      { text: "Good basics, still learning", type: "B" },
      { text: "Know enough to catch something", type: "C" },
      { text: "Minimal, rely on others", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Fishing trip impian anda?",
    options: [
      { text: "Game fishing abroad - marlin!", type: "A" },
      { text: "Nice fishing resort Malaysia", type: "B" },
      { text: "Fresh catch untuk BBQ family", type: "C" },
      { text: "Any trip dengan good company", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hardcore Angler",
    emoji: "🎣",
    description: "Fishing adalah passion serius! Big game, trophy catches, full dedication. Pro angler mindset!",
    traits: ["Passionate", "Dedicated", "Knowledgeable", "Adventurous"],
    strengths: ["Expert skills", "Impressive catches", "Deep knowledge"],
    weaknesses: ["May be too intense", "Expensive hobby"],
    tips: ["Enjoy simple fishing too!", "Share your knowledge"],
  },
  B: {
    type: "B",
    title: "Zen Fisher",
    emoji: "🧘",
    description: "Fishing untuk peace of mind! Nature therapy, no pressure. The catch is bonus, tranquility adalah reward!",
    traits: ["Peaceful", "Relaxed", "Nature lover", "Zen"],
    strengths: ["Mental health benefits", "Stress relief"],
    weaknesses: ["May not improve skills"],
    tips: ["Perfect approach!", "Fishing is meditation"],
  },
  C: {
    type: "C",
    title: "Practical Fisher",
    emoji: "🐟",
    description: "Fishing untuk makan! Practical approach - catch, clean, cook. Sustainable protein source!",
    traits: ["Practical", "Resourceful", "Simple", "Functional"],
    strengths: ["Purposeful fishing", "Good food outcome"],
    weaknesses: ["May miss the experience"],
    tips: ["Enjoy the process too!", "Fishing is more than food"],
  },
  D: {
    type: "D",
    title: "Social Fisher",
    emoji: "👥",
    description: "Fishing adalah excuse untuk hangout! Good company, good vibes, fish optional. Social activity!",
    traits: ["Social", "Fun-loving", "Casual", "Easy-going"],
    strengths: ["Great company", "Memorable trips"],
    weaknesses: ["May not actually fish"],
    tips: ["Actually try fishing!", "You might love it"],
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
