// Minuman Kekinian yang Cocok
// Minuman kekinian mana yang paling menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Personality di sosial media...",
    options: [
      { text: "Aktif posting, aesthetic feed", type: "A" },
      { text: "Mix personal dan curated", type: "B" },
      { text: "Posting sesekali aja", type: "C" },
      { text: "Jarang atau tidak punya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Preferensi rasa...",
    options: [
      { text: "Manis dan creamy", type: "A" },
      { text: "Balance antara manis dan fresh", type: "B" },
      { text: "Refreshing dan tidak terlalu manis", type: "C" },
      { text: "Simple dan familiar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trend baru muncul...",
    options: [
      { text: "Harus coba duluan!", type: "A" },
      { text: "Tunggu review dulu", type: "B" },
      { text: "Coba kalau kebetulan ada", type: "C" },
      { text: "Stick sama yang biasa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hangout sama teman di cafe...",
    options: [
      { text: "Pilih tempat aesthetic dan instagramable", type: "A" },
      { text: "Yang nyaman dan menu-nya enak", type: "B" },
      { text: "Yang sepi dan bisa ngobrol", type: "C" },
      { text: "Yang dekat dan affordable", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Budget untuk minuman...",
    options: [
      { text: "Worth it untuk experience", type: "A" },
      { text: "Reasonable untuk quality", type: "B" },
      { text: "Hemat tapi masih oke", type: "C" },
      { text: "Semurah mungkin", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Topping atau add-ons...",
    options: [
      { text: "Full topping! Boba, jelly, cream", type: "A" },
      { text: "Beberapa yang melengkapi", type: "B" },
      { text: "Minimal atau standar", type: "C" },
      { text: "Tanpa topping, original taste", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Style personal kamu...",
    options: [
      { text: "Trendy dan up to date", type: "A" },
      { text: "Classic dengan twist modern", type: "B" },
      { text: "Comfortable dan effortless", type: "C" },
      { text: "Timeless dan simple", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Foto minuman sebelum minum...",
    options: [
      { text: "Wajib! Proper photoshoot", type: "A" },
      { text: "Quick snap untuk story", type: "B" },
      { text: "Kadang-kadang aja", type: "C" },
      { text: "Langsung minum aja", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat bosan dengan routine...",
    options: [
      { text: "Cari something new dan exciting", type: "A" },
      { text: "Variasi dari yang biasa", type: "B" },
      { text: "Stick dengan comfort zone", type: "C" },
      { text: "Routine is fine", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Personality dalam grup...",
    options: [
      { text: "Yang trendy dan influencer", type: "A" },
      { text: "Yang balance dan likeable", type: "B" },
      { text: "Yang chill dan relaxed", type: "C" },
      { text: "Yang classic dan reliable", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ice level preference...",
    options: [
      { text: "Less ice, more drink!", type: "A" },
      { text: "Normal ice", type: "B" },
      { text: "Extra ice, segar!", type: "C" },
      { text: "Terserah aja", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Minuman apa yang mewakili hidupmu...",
    options: [
      { text: "Yang happening dan current", type: "A" },
      { text: "Yang balance dan satisfying", type: "B" },
      { text: "Yang refreshing dan light", type: "C" },
      { text: "Yang simple dan no-fuss", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Boba Milk Tea",
    emoji: "🧋",
    description: "Kamu adalah Boba Milk Tea! Trendy, sweet, dan always instagrammable. Kamu suka hal-hal yang kekinian dan tidak mau ketinggalan trend. Full package dengan all the toppings - rich dan extra!",
    traits: ["Trendy", "Sweet", "Social media savvy", "Extra"],
    strengths: ["Always updated", "Fun personality", "Good aesthetics"],
    weaknesses: ["FOMO", "Bisa superficial", "Trend-dependent"],
    tips: ["Authenticity is trend-proof", "Substance matters too"],
  },
  B: {
    type: "B",
    title: "Thai Tea",
    emoji: "🥤",
    description: "Kamu adalah Thai Tea! Balance antara sweet dan rich, classic tapi tetap modern. Kamu punya taste yang refined tapi tidak sombong. Crowd pleaser yang tidak perlu try too hard!",
    traits: ["Balanced", "Classic modern", "Likeable", "Refined"],
    strengths: ["Universal appeal", "Good taste", "Consistent"],
    weaknesses: ["Might play safe", "Not very unique"],
    tips: ["Stand out sometimes", "Your balance is strength"],
  },
  C: {
    type: "C",
    title: "Lemon Tea",
    emoji: "🍋",
    description: "Kamu adalah Lemon Tea! Fresh, refreshing, dan tidak berlebihan. Kamu prefer simplicity dan tidak suka yang terlalu sweet atau extra. Clean dan effortless vibes!",
    traits: ["Fresh", "Simple", "Effortless", "Light"],
    strengths: ["Low maintenance", "Genuine", "Refreshing presence"],
    weaknesses: ["Might seem plain", "Miss the excitement"],
    tips: ["Add some sweetness sometimes", "Simple is beautiful"],
  },
  D: {
    type: "D",
    title: "Es Teh Manis",
    emoji: "🍵",
    description: "Kamu adalah Es Teh Manis! Classic, reliable, dan selalu ada. Tidak perlu fancy atau trending, kamu adalah comfort drink yang everyone loves. Timeless dan essential!",
    traits: ["Classic", "Reliable", "Timeless", "Essential"],
    strengths: ["Always dependable", "Universal", "No pretense"],
    weaknesses: ["Might be overlooked", "Not exciting"],
    tips: ["Try something new sometimes", "Classic is still valuable"],
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
