// Kepribadian dari Roti Favorit
// Roti mana yang paling menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Preferensi tekstur...",
    options: [
      { text: "Lembut dan fluffy", type: "A" },
      { text: "Crispy di luar, soft di dalam", type: "B" },
      { text: "Rich dan berlapis", type: "C" },
      { text: "Simple dan chewy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Filling atau topping...",
    options: [
      { text: "Classic - coklat atau keju", type: "A" },
      { text: "Savory - daging atau abon", type: "B" },
      { text: "Decadent - cream atau butter", type: "C" },
      { text: "Minimal atau plain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kepribadian dasarmu...",
    options: [
      { text: "Sweet dan approachable", type: "A" },
      { text: "Substantial dan fulfilling", type: "B" },
      { text: "Rich dan sophisticated", type: "C" },
      { text: "Simple dan authentic", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Waktu terbaik untuk kamu...",
    options: [
      { text: "Pagi, fresh start", type: "A" },
      { text: "Siang, productive time", type: "B" },
      { text: "Sore, relaxed vibes", type: "C" },
      { text: "Kapan aja, consistent", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Di antara teman-teman...",
    options: [
      { text: "Yang sweet dan easy-going", type: "A" },
      { text: "Yang reliable dan berisi", type: "B" },
      { text: "Yang classy dan refined", type: "C" },
      { text: "Yang honest dan straightforward", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cara kamu approach masalah...",
    options: [
      { text: "Soft approach, diplomatis", type: "A" },
      { text: "Direct dan to the point", type: "B" },
      { text: "Calculated dan strategic", type: "C" },
      { text: "Simple dan practical", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pakaian favoritmu...",
    options: [
      { text: "Casual dan comfortable", type: "A" },
      { text: "Smart casual, put together", type: "B" },
      { text: "Elegant dan refined", type: "C" },
      { text: "Basic dan timeless", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Definisi comfort...",
    options: [
      { text: "Warmth dan familiarity", type: "A" },
      { text: "Fullness dan satisfaction", type: "B" },
      { text: "Quality dan luxury", type: "C" },
      { text: "Simplicity dan peace", type: "D" },
    ],
  },
  {
    id: 9,
    question: "First impression orang tentangmu...",
    options: [
      { text: "Friendly dan inviting", type: "A" },
      { text: "Reliable dan capable", type: "B" },
      { text: "Sophisticated dan interesting", type: "C" },
      { text: "Genuine dan unpretentious", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cara kamu memberi kebahagiaan...",
    options: [
      { text: "Sweet gestures dan kindness", type: "A" },
      { text: "Practical help dan support", type: "B" },
      { text: "Quality time dan experiences", type: "C" },
      { text: "Honest presence dan loyalty", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Relationship dengan keluarga...",
    options: [
      { text: "Hangat dan penuh kasih", type: "A" },
      { text: "Supportive dan dependable", type: "B" },
      { text: "Quality over quantity", type: "C" },
      { text: "Simple tapi deep", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hidup ideal menurutmu...",
    options: [
      { text: "Penuh dengan warmth dan love", type: "A" },
      { text: "Fulfilled dan accomplished", type: "B" },
      { text: "Rich dalam experiences", type: "C" },
      { text: "Simple dan meaningful", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Roti Coklat",
    emoji: "🍫",
    description: "Kamu adalah Roti Coklat! Sweet, familiar, dan selalu bikin happy. Seperti roti yang jadi favorit semua orang dari kecil, kamu adalah comfort food untuk jiwa. Warm dan inviting!",
    traits: ["Sweet", "Familiar", "Comforting", "Approachable"],
    strengths: ["Universally liked", "Bring comfort", "Nostalgic value"],
    weaknesses: ["Might be too common", "Overlooked sometimes"],
    tips: ["Classic is classic for reason", "Your warmth is valued"],
  },
  B: {
    type: "B",
    title: "Roti Isi Daging",
    emoji: "🥩",
    description: "Kamu adalah Roti Isi Daging! Substantial, fulfilling, dan memberikan value. Seperti roti yang mengenyangkan, kamu adalah orang yang reliable dan selalu deliver!",
    traits: ["Substantial", "Reliable", "Fulfilling", "Capable"],
    strengths: ["Great support", "Dependable", "Value-driven"],
    weaknesses: ["Might be too serious", "Heavy sometimes"],
    tips: ["Lightness is okay too", "You deliver!"],
  },
  C: {
    type: "C",
    title: "Croissant",
    emoji: "🥐",
    description: "Kamu adalah Croissant! Layered, sophisticated, dan punya depth. Seperti pastry yang butuh effort untuk dibuat, kamu adalah orang yang refined dan bernilai tinggi!",
    traits: ["Sophisticated", "Layered", "Refined", "Quality"],
    strengths: ["High value", "Interesting depth", "Memorable"],
    weaknesses: ["Might seem high maintenance", "Not for everyone"],
    tips: ["Not everyone appreciates quality", "Find your people"],
  },
  D: {
    type: "D",
    title: "Roti Tawar",
    emoji: "🍞",
    description: "Kamu adalah Roti Tawar! Simple, authentic, dan essential. Seperti roti dasar yang bisa jadi apapun, kamu adalah orang yang genuine dan tidak pretentious. Foundation yang kuat!",
    traits: ["Simple", "Authentic", "Versatile", "Essential"],
    strengths: ["No pretense", "Reliable", "Goes with everything"],
    weaknesses: ["Might seem plain", "Underestimated"],
    tips: ["Simplicity is strength", "You're more essential than you think"],
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
