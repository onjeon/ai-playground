// Gaya Pelancongan Anda
// Traveler jenis apa anda dalam Malaysia?

export const questions = [
  {
    id: 1,
    question: "Destinasi cuti ideal dalam Malaysia?",
    options: [
      { text: "Beach resort - Langkawi, Perhentian!", type: "A" },
      { text: "City trip - KL, Penang, JB", type: "B" },
      { text: "Nature - Cameron, Kinabalu", type: "C" },
      { text: "Hidden gems - off the beaten path", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Accommodation choice anda?",
    options: [
      { text: "Resort dengan all facilities", type: "A" },
      { text: "Hotel convenient di town", type: "B" },
      { text: "Chalet atau homestay - local feel", type: "C" },
      { text: "Hostel atau Airbnb - budget", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Travel planning style anda?",
    options: [
      { text: "Full itinerary, book semua awal", type: "A" },
      { text: "Basic plan, flexible untuk changes", type: "B" },
      { text: "Spontan - decide on the spot", type: "C" },
      { text: "Research deep - hidden gems!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Travel companion ideal?",
    options: [
      { text: "Partner - romantic getaway", type: "A" },
      { text: "Gang besar - lebih fun!", type: "B" },
      { text: "Family - quality time", type: "C" },
      { text: "Solo - freedom!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Aktiviti travel anda?",
    options: [
      { text: "Relax - pool, spa, beach", type: "A" },
      { text: "Explore - sightseeing, makan!", type: "B" },
      { text: "Adventure - hiking, diving", type: "C" },
      { text: "Cultural - heritage, local experience", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Food hunting masa travel?",
    options: [
      { text: "Resort dining - convenient", type: "A" },
      { text: "Famous spots - must try!", type: "B" },
      { text: "Local recommendations - authentic", type: "C" },
      { text: "Street food - the real experience", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Budget travel anda?",
    options: [
      { text: "No budget - treat yourself!", type: "A" },
      { text: "Moderate - comfort with savings", type: "B" },
      { text: "Budget conscious - smart spending", type: "C" },
      { text: "Backpacker style - minimum spend", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Souvenir shopping?",
    options: [
      { text: "Buy everything! Memories!", type: "A" },
      { text: "Selected items untuk close ones", type: "B" },
      { text: "Local handicrafts only", type: "C" },
      { text: "Photos je cukup", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Post-travel content?",
    options: [
      { text: "Full album, captions cantik!", type: "A" },
      { text: "Best shots je share", type: "B" },
      { text: "Keep memories private", type: "C" },
      { text: "Stories je, tak formal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Travel frequency dalam Malaysia?",
    options: [
      { text: "As often as possible!", type: "A" },
      { text: "Long weekends dan holidays", type: "B" },
      { text: "Once or twice a year special trip", type: "C" },
      { text: "Random trips bila mood", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Luxury Traveler",
    emoji: "🏝️",
    description: "Travel adalah untuk pamper diri! Resort life, spa treatment, poolside vibes. Anda deserve the best!",
    traits: ["Luxury-seeker", "Relaxation-focused", "Indulgent", "Comfortable"],
    strengths: ["Knows how to relax", "Quality experience"],
    weaknesses: ["May miss authentic experiences", "Expensive taste"],
    tips: ["Try local experiences too!", "Balance luxury with adventure"],
  },
  B: {
    type: "B",
    title: "Explorer Traveler",
    emoji: "🗺️",
    description: "Must see EVERYTHING! Famous spots, food hunting, sightseeing - anda tick semua off the list. Complete travel experience!",
    traits: ["Thorough", "Active", "Social", "Adventurous"],
    strengths: ["Comprehensive trips", "Good planning"],
    weaknesses: ["May be tiring", "FOMO driven"],
    tips: ["Rest is okay too!", "Quality over quantity"],
  },
  C: {
    type: "C",
    title: "Adventure Traveler",
    emoji: "🏔️",
    description: "Nature calling! Hiking, diving, jungle trekking - anda cari adventure. Malaysia's natural beauty is your playground!",
    traits: ["Adventurous", "Nature lover", "Active", "Thrill-seeker"],
    strengths: ["Healthy activities", "Unique experiences"],
    weaknesses: ["May neglect rest", "Weather dependent"],
    tips: ["Balance with relaxation", "Safety first always!"],
  },
  D: {
    type: "D",
    title: "Authentic Traveler",
    emoji: "🏘️",
    description: "Hidden gems hunter! Off the beaten path, local experiences, real Malaysia. Anda find magic in unexpected places!",
    traits: ["Authentic", "Cultural", "Budget-conscious", "Unique"],
    strengths: ["Genuine experiences", "Supports locals"],
    weaknesses: ["May be inconvenient", "Limited amenities"],
    tips: ["Popular spots are popular for reasons!", "Balance exploration"],
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
