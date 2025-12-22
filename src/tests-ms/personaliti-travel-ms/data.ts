// Jenis Traveler Apa Kau?
// Kau ni backpacker atau hotel 5 star je?

export const questions = [
  {
    id: 1,
    question: "Planning vacation. First thing kau buat?",
    options: [
      { text: "Research EVERYTHING, full itinerary siap!", type: "A" },
      { text: "Book essentials, flexible untuk selebihnya", type: "B" },
      { text: "Book flight/transport je, wing the rest", type: "C" },
      { text: "No plan! Show up and figure it out!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Accommodation preference kau?",
    options: [
      { text: "Hotel 5 star, comfort is key!", type: "A" },
      { text: "Nice hotel/Airbnb, decent quality", type: "B" },
      { text: "Hostel/budget stay, duit untuk experience!", type: "C" },
      { text: "Anywhere! Couch surf, camp, whatever!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Packing untuk trip. Style kau?",
    options: [
      { text: "Checklist detailed, pack seminggu awal", type: "A" },
      { text: "Organized packing, essentials semua ada", type: "B" },
      { text: "Last minute packing, hope tak lupa", type: "C" },
      { text: "Backpack kecil je, beli kalau perlu!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "First day kat destination baru. Kau?",
    options: [
      { text: "Follow itinerary yang dah plan!", type: "A" },
      { text: "Hit main attractions first", type: "B" },
      { text: "Walk around, explore randomly", type: "C" },
      { text: "Talk to locals, find hidden gems!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Makan time travel. Preference kau?",
    options: [
      { text: "Researched restaurants, booked in advance!", type: "A" },
      { text: "Mix of recommended places dan random finds", type: "B" },
      { text: "Street food mostly, authentic experience!", type: "C" },
      { text: "Eat whatever locals eat, even if unknown!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Travel companions - siapa kau prefer travel dengan?",
    options: [
      { text: "Family/close friends, planned together", type: "A" },
      { text: "Small group yang similar interest", type: "B" },
      { text: "Solo atau dengan 1-2 orang je", type: "C" },
      { text: "Solo preferably! Meet people along the way!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Travel budget kau macam mana?",
    options: [
      { text: "Comfortable budget, tak nak stress", type: "A" },
      { text: "Moderate, balance comfort dan value", type: "B" },
      { text: "Budget tight, maximize experience!", type: "C" },
      { text: "Minimum spend! Work exchange, hitchhike!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Something goes wrong during trip. Kau?",
    options: [
      { text: "Stressed! Backup plan activated!", type: "A" },
      { text: "Handle it calmly, adjust plans", type: "B" },
      { text: "Part of adventure! Go with flow", type: "C" },
      { text: "LOVE IT! Best stories come from chaos!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ideal trip duration kau?",
    options: [
      { text: "1-2 weeks, well-planned vacation", type: "A" },
      { text: "1 week, enough to explore properly", type: "B" },
      { text: "Few days short trips, sering-sering", type: "C" },
      { text: "Months! Long term travel/backpacking!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Travel photos kau macam mana?",
    options: [
      { text: "Proper photoshoot, Instagram worthy!", type: "A" },
      { text: "Nice photos at main spots", type: "B" },
      { text: "Random snaps, candid moments", type: "C" },
      { text: "Barely any! Living in the moment!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Luxury Planner - Resort & Itinerary Queen 👑",
    emoji: "👑",
    description: "KAU NI LUXURY TRAVELER dengan full planning! Every detail organized, hotel booking confirmed, itinerary color-coded! Travel in style, comfort non-negotiable. Vacation adalah untuk RELAX in luxury!",
    traits: ["Luxury seeker", "Detailed planner", "Comfort focused", "Well-organized"],
    strengths: ["Smooth trips", "Comfortable experience", "No surprises", "Instagram-worthy trips"],
    weaknesses: ["Miss spontaneous moments", "Expensive", "Stressed bila plan change"],
    tips: ["Leave some unplanned time!", "Surprises can be good!"],
  },
  B: {
    type: "B",
    title: "Balanced Explorer - Smart Traveler 🗺️",
    emoji: "🗺️",
    description: "Kau ni BALANCED TRAVELER! Plan essentials tapi flexible untuk spontaneity. Good hotels tapi not over-the-top. You know how to maximize trip enjoyment without breaking bank or being too rigid!",
    traits: ["Balanced approach", "Flexible plans", "Smart spending", "Open to experiences"],
    strengths: ["Best of both worlds", "Efficient travel", "Good experiences"],
    weaknesses: ["Sometimes torn between plans dan spontaneity", "May miss luxury or adventure extremes"],
    tips: ["You've got it figured out!", "Keep the balance!"],
  },
  C: {
    type: "C",
    title: "Budget Adventurer - Backpacker Spirit 🎒",
    emoji: "🎒",
    description: "KAU NI BACKPACKER SOUL! Travel dengan budget minimal, experience maximum! Hostels, street food, public transport - authentic travel! Duit untuk experience, bukan luxury yang tak kekal!",
    traits: ["Budget conscious", "Experience focused", "Adventurous", "Minimalist packer"],
    strengths: ["Travel more often", "Authentic experiences", "Meet interesting people"],
    weaknesses: ["Sometimes uncomfortable", "Risky situations possible", "Tiring"],
    tips: ["Self-care important too!", "Safety first always!"],
  },
  D: {
    type: "D",
    title: "Nomad Spirit - Wild & Free Explorer 🌍",
    emoji: "🌍",
    description: "KAU NI TRUE NOMAD! Zero plans, pure adventure! Wherever the wind takes you! Meet strangers, try anything, live in the moment! Travel is about the journey, not the destination. Born to roam!",
    traits: ["Spontaneous", "Fearless", "Minimalist", "Free spirit"],
    strengths: ["Amazing stories", "Meet incredible people", "True authentic experience"],
    weaknesses: ["Unpredictable situations", "Safety concerns", "Hard to maintain relationships"],
    tips: ["Keep emergency contacts!", "Some planning is survival!"],
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
