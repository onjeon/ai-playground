// Wedang/Minuman Tradisional Favoritmu
// Minuman tradisional mana yang paling menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Saat cuaca dingin atau hujan...",
    options: [
      { text: "Cari yang hangat dan menghangatkan", type: "A" },
      { text: "Cari yang manis dan comforting", type: "B" },
      { text: "Cari yang refreshing dan menyegarkan", type: "C" },
      { text: "Cari yang familiar dan nostalgic", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Preferensi rasa...",
    options: [
      { text: "Rempah-rempah yang kaya", type: "A" },
      { text: "Manis dengan depth", type: "B" },
      { text: "Fresh dan ringan", type: "C" },
      { text: "Classic dan tidak ribet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kepribadian dasarmu...",
    options: [
      { text: "Hangat dan caring", type: "A" },
      { text: "Sweet dan nurturing", type: "B" },
      { text: "Fresh dan energizing", type: "C" },
      { text: "Grounded dan reliable", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu menyembuhkan diri saat lelah...",
    options: [
      { text: "Relax dengan sesuatu yang soothing", type: "A" },
      { text: "Comfort food atau drink", type: "B" },
      { text: "Aktivitas yang refreshing", type: "C" },
      { text: "Back to basics, simple rest", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nilai tradisi dalam hidupmu...",
    options: [
      { text: "Heritage yang dijaga", type: "A" },
      { text: "Comfort dari yang familiar", type: "B" },
      { text: "Inspiration untuk modern twist", type: "C" },
      { text: "Foundation yang penting", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Di keluarga, kamu...",
    options: [
      { text: "Yang merawat dan perhatian", type: "A" },
      { text: "Yang sweet dan loving", type: "B" },
      { text: "Yang segar dan membawa energy", type: "C" },
      { text: "Yang stable dan diandalkan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kompleksitas yang kamu suka...",
    options: [
      { text: "Rich dan berlayer", type: "A" },
      { text: "Sweet dengan depth", type: "B" },
      { text: "Simple tapi impactful", type: "C" },
      { text: "Straightforward", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Efek kehadiranmu pada orang lain...",
    options: [
      { text: "Warming dan healing", type: "A" },
      { text: "Comforting dan sweet", type: "B" },
      { text: "Energizing dan fresh", type: "C" },
      { text: "Stabilizing dan calming", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat teman butuh support...",
    options: [
      { text: "Hadir dengan warmth dan care", type: "A" },
      { text: "Beri comfort dan sweetness", type: "B" },
      { text: "Beri energy dan optimism", type: "C" },
      { text: "Beri stability dan reliability", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Aroma yang menggambarkanmu...",
    options: [
      { text: "Rempah-rempah hangat", type: "A" },
      { text: "Manis dan inviting", type: "B" },
      { text: "Fresh dan citrusy", type: "C" },
      { text: "Earthy dan natural", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Moment paling cocok untukmu...",
    options: [
      { text: "Saat perlu healing", type: "A" },
      { text: "Saat butuh comfort", type: "B" },
      { text: "Saat butuh boost", type: "C" },
      { text: "Everyday moments", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Orang mengenalmu sebagai...",
    options: [
      { text: "The healer", type: "A" },
      { text: "The sweet one", type: "B" },
      { text: "The energizer", type: "C" },
      { text: "The reliable one", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Wedang Jahe",
    emoji: "🫚",
    description: "Kamu adalah Wedang Jahe! Hangat, healing, dan penuh rempah yang menyembuhkan. Seperti wedang yang menghangatkan dari dalam, kehadiranmu memberikan comfort dan healing bagi orang di sekitarmu!",
    traits: ["Warm", "Healing", "Caring", "Rich"],
    strengths: ["Great caretaker", "Soothing presence", "Reliable comfort"],
    weaknesses: ["Bisa too intense", "Overcare kadang"],
    tips: ["Take care of yourself too", "Not everyone needs healing"],
  },
  B: {
    type: "B",
    title: "Bajigur",
    emoji: "🥥",
    description: "Kamu adalah Bajigur! Sweet, creamy, dan full of comfort. Seperti minuman Sunda yang manis dan mengenyangkan, kamu adalah sumber comfort dan warmth yang disukai semua orang!",
    traits: ["Sweet", "Comforting", "Nurturing", "Warm"],
    strengths: ["Great comfort", "Loved by all", "Nostalgic presence"],
    weaknesses: ["Bisa too sweet", "Overindulging others"],
    tips: ["Balance sweetness", "Self-care is okay"],
  },
  C: {
    type: "C",
    title: "Es Jeruk",
    emoji: "🍊",
    description: "Kamu adalah Es Jeruk! Fresh, energizing, dan selalu menyegarkan. Seperti minuman yang memberi boost vitamin C, kehadiranmu selalu memberikan energy dan semangat baru!",
    traits: ["Fresh", "Energizing", "Vibrant", "Uplifting"],
    strengths: ["Great motivator", "Positive vibes", "Energy booster"],
    weaknesses: ["Bisa overwhelming", "Not for every mood"],
    tips: ["Calm moments are okay", "Not everyone needs energy"],
  },
  D: {
    type: "D",
    title: "Teh Manis Hangat",
    emoji: "🍵",
    description: "Kamu adalah Teh Manis Hangat! Classic, reliable, dan selalu ada. Seperti minuman sederhana yang menemani setiap saat, kamu adalah constant presence yang bisa diandalkan!",
    traits: ["Reliable", "Classic", "Consistent", "Grounding"],
    strengths: ["Always there", "No drama", "Stabilizing presence"],
    weaknesses: ["Might be overlooked", "Plain perception"],
    tips: ["Simplicity is strength", "You're essential"],
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
