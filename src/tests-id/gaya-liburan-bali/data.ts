// Gaya Liburan ke Bali
// Tes ini mengungkap style liburan Bali yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Area Bali yang paling attract...",
    options: [
      { text: "Seminyak/Canggu - trendy vibes", type: "A" },
      { text: "Ubud - culture dan nature", type: "B" },
      { text: "Uluwatu/Nusa Dua - beach paradise", type: "C" },
      { text: "Offbeat areas - Munduk, Amed, etc", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Akomodasi ideal...",
    options: [
      { text: "Trendy boutique hotel", type: "A" },
      { text: "Villa dengan private pool", type: "B" },
      { text: "Beach resort", type: "C" },
      { text: "Homestay atau Airbnb local", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Morning di Bali biasanya...",
    options: [
      { text: "Brunch di aesthetic cafe", type: "A" },
      { text: "Sunrise yoga atau temple visit", type: "B" },
      { text: "Beach walk, breakfast by the sea", type: "C" },
      { text: "Sleep in, no rush", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Must-do activity...",
    options: [
      { text: "Beach club hopping", type: "A" },
      { text: "Temple visits dan cultural experiences", type: "B" },
      { text: "Water sports dan beach activities", type: "C" },
      { text: "Hidden gems exploration", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Food experience di Bali...",
    options: [
      { text: "Instagram-worthy cafes dan fine dining", type: "A" },
      { text: "Mix local warungs dan nice restaurants", type: "B" },
      { text: "Seafood dinner sunset view", type: "C" },
      { text: "Authentic local food only", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sunset ritual...",
    options: [
      { text: "Beach club dengan cocktails", type: "A" },
      { text: "Tanah Lot atau temple sunset", type: "B" },
      { text: "Beach watching waves", type: "C" },
      { text: "Rooftop villa chill", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Shopping di Bali...",
    options: [
      { text: "Boutiques di Seminyak", type: "A" },
      { text: "Art markets, local crafts", type: "B" },
      { text: "Souvenir for fam", type: "C" },
      { text: "Skip shopping, focus experience", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nightlife situation...",
    options: [
      { text: "Clubs di Seminyak!", type: "A" },
      { text: "Chill bar atau live music", type: "B" },
      { text: "Beach bonfire atau sunset drinks", type: "C" },
      { text: "Early sleep, next day explore", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Duration ideal stay...",
    options: [
      { text: "Long weekend, maximum fun", type: "A" },
      { text: "1 week, balanced itinerary", type: "B" },
      { text: "4-5 days, beach fokus", type: "C" },
      { text: "2+ weeks, slow travel", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Traveling to Bali with...",
    options: [
      { text: "Squad! Group trip", type: "A" },
      { text: "Partner, romantic getaway", type: "B" },
      { text: "Family, multi-generation", type: "C" },
      { text: "Solo, self-discovery", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Transportation preference...",
    options: [
      { text: "Car dengan driver", type: "A" },
      { text: "Mix of driver dan rental scooter", type: "B" },
      { text: "Resort shuttle dan Grab", type: "C" },
      { text: "Scooter only, explore freely", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Main goal liburan ke Bali...",
    options: [
      { text: "Content dan memories for socmed", type: "A" },
      { text: "Wellness, spiritual recharge", type: "B" },
      { text: "Total relaxation", type: "C" },
      { text: "Adventure dan discovery", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Trendy Traveler",
    emoji: "📸",
    description: "Bali adalah backdrop untuk best life! Beach clubs, aesthetic cafes, dan content-worthy moments. You know all the trending spots dan love the vibe!",
    traits: ["Trendy", "Social", "Aesthetic-focused", "Energetic"],
    strengths: ["Great photos", "Know the cool spots", "Fun travel buddy"],
    weaknesses: ["Might miss authentic Bali", "Expensive trip", "Crowded places"],
    tips: ["Explore beyond Instagram spots", "Talk to locals", "Some quiet moments too"],
  },
  B: {
    type: "B",
    title: "The Balanced Explorer",
    emoji: "🌺",
    description: "Kamu experience Bali holistically! Culture, nature, wellness, dan modern comforts. Respectful traveler yang appreciate the island's depth.",
    traits: ["Balanced", "Culturally curious", "Respectful", "Wellness-oriented"],
    strengths: ["Well-rounded experience", "Meaningful trip", "Good karma"],
    weaknesses: ["Packed itinerary sometimes"],
    tips: ["Leave room for spontaneity", "You're doing Bali right!"],
  },
  C: {
    type: "C",
    title: "The Beach Lover",
    emoji: "🏖️",
    description: "Bali = Beach for you! Sun, sand, sea, repeat. Simple pleasures of island life, relaxation is the goal. Nothing wrong dengan that!",
    traits: ["Relaxed", "Beach-focused", "Simple pleasures", "Chill"],
    strengths: ["True vacation mode", "Stress-free trip", "Know the best beaches"],
    weaknesses: ["Miss cultural experiences", "Just one aspect of Bali"],
    tips: ["Maybe one cultural day?", "Ubud is worth a visit", "But beach is valid too!"],
  },
  D: {
    type: "D",
    title: "The Authentic Seeker",
    emoji: "🌿",
    description: "Kamu avoid tourist traps dan seek real Bali! Hidden gems, local interactions, dan off-beaten paths. True traveler, not tourist!",
    traits: ["Adventurous", "Authentic-seeking", "Independent", "Curious"],
    strengths: ["Unique experiences", "Support local economy", "Real connections"],
    weaknesses: ["Might miss some popular spots for reason", "Harder logistics"],
    tips: ["Some tourist spots are popular for good reason", "Balance authentic dengan accessible"],
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
