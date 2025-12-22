// Kepribadian dari Kue Tradisional
// Kue tradisional Indonesia mana yang menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Sifat dasarmu...",
    options: [
      { text: "Manis dan menyenangkan", type: "A" },
      { text: "Humble tapi berkarakter", type: "B" },
      { text: "Colorful dan ceria", type: "C" },
      { text: "Classic dan timeless", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu hadir di acara sosial...",
    options: [
      { text: "Jadi favorit banyak orang", type: "A" },
      { text: "Ada tapi tidak mencolok", type: "B" },
      { text: "Stand out dengan keunikan", type: "C" },
      { text: "Essential, selalu dibutuhkan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tekstur kepribadian...",
    options: [
      { text: "Lembut dan melting", type: "A" },
      { text: "Kenyal dan flexible", type: "B" },
      { text: "Berlapis dan complex", type: "C" },
      { text: "Simple tapi satisfying", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dalam persahabatan, kamu...",
    options: [
      { text: "Yang sweet dan caring", type: "A" },
      { text: "Yang reliable dan down to earth", type: "B" },
      { text: "Yang fun dan penuh warna", type: "C" },
      { text: "Yang selalu ada saat dibutuhkan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Warna yang menggambarkanmu...",
    options: [
      { text: "Coklat warm atau caramel", type: "A" },
      { text: "Putih atau natural", type: "B" },
      { text: "Warna-warni cerah", type: "C" },
      { text: "Hijau daun atau earthy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "First impression...",
    options: [
      { text: "Inviting dan familiar", type: "A" },
      { text: "Simple tapi curious", type: "B" },
      { text: "Eye-catching dan fun", type: "C" },
      { text: "Comforting dan nostalgic", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kamu memberi kebahagiaan...",
    options: [
      { text: "Sweetness dan indulgence", type: "A" },
      { text: "Simplicity dan honesty", type: "B" },
      { text: "Joy dan excitement", type: "C" },
      { text: "Comfort dan nostalgia", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dalam situasi sulit...",
    options: [
      { text: "Stay sweet, spread positivity", type: "A" },
      { text: "Stay grounded, practical", type: "B" },
      { text: "Bring joy dan distraction", type: "C" },
      { text: "Provide comfort dan stability", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Orang mengenalmu sebagai...",
    options: [
      { text: "The sweetheart", type: "A" },
      { text: "The humble one", type: "B" },
      { text: "The colorful one", type: "C" },
      { text: "The reliable one", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nilai yang kamu pegang...",
    options: [
      { text: "Kindness dan warmth", type: "A" },
      { text: "Authenticity dan simplicity", type: "B" },
      { text: "Joy dan creativity", type: "C" },
      { text: "Tradition dan reliability", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Di keluarga, kamu...",
    options: [
      { text: "Yang paling disayang", type: "A" },
      { text: "Yang paling humble", type: "B" },
      { text: "Yang paling fun", type: "C" },
      { text: "Yang paling diandalkan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Occasion yang cocok denganmu...",
    options: [
      { text: "Celebration dan special moments", type: "A" },
      { text: "Everyday simple moments", type: "B" },
      { text: "Festive dan meriah", type: "C" },
      { text: "Traditional gatherings", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kue Lapis",
    emoji: "🍰",
    description: "Kamu adalah Kue Lapis! Manis, berlapis, dan selalu jadi favorit. Seperti kue lapis yang punya banyak layer, kamu punya depth dan complexity yang menarik. Sweet dan inviting, kamu selalu disambut dengan senang!",
    traits: ["Sweet", "Layered", "Popular", "Warm"],
    strengths: ["Well-liked", "Interesting depth", "Good host"],
    weaknesses: ["Bisa too sweet", "People-pleasing"],
    tips: ["Not everyone needs to like you", "Authenticity over popularity"],
  },
  B: {
    type: "B",
    title: "Kue Putu",
    emoji: "🥢",
    description: "Kamu adalah Kue Putu! Humble, sederhana, tapi punya karakter kuat. Seperti putu yang unassuming tapi ternyata manis di dalam, kamu adalah hidden gem yang tidak banyak gaya tapi berisi!",
    traits: ["Humble", "Authentic", "Surprising", "Genuine"],
    strengths: ["No pretense", "True to self", "Unexpected sweetness"],
    weaknesses: ["Overlooked sometimes", "Quiet"],
    tips: ["Show yourself more", "Your sweetness deserves attention"],
  },
  C: {
    type: "C",
    title: "Kue Cubit",
    emoji: "🌈",
    description: "Kamu adalah Kue Cubit! Colorful, fun, dan selalu bikin happy. Seperti kue cubit dengan topping warna-warni, kamu adalah sumber joy dan keceriaan. Kehadiranmu selalu menambah warna!",
    traits: ["Colorful", "Fun", "Joyful", "Creative"],
    strengths: ["Spread happiness", "Creative", "Memorable"],
    weaknesses: ["Bisa superficial", "Not always taken seriously"],
    tips: ["Show your depth too", "Fun can be meaningful"],
  },
  D: {
    type: "D",
    title: "Kue Klepon",
    emoji: "🟢",
    description: "Kamu adalah Kue Klepon! Classic, comforting, dan selalu ada di acara penting. Seperti klepon yang hijau dengan gula merah di dalam, kamu adalah comfort food untuk jiwa. Traditional dan reliable!",
    traits: ["Classic", "Comforting", "Reliable", "Traditional"],
    strengths: ["Always dependable", "Nostalgic value", "Grounding presence"],
    weaknesses: ["Resistant to change", "Too traditional"],
    tips: ["Embrace some change", "Traditional is beautiful but evolution too"],
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
