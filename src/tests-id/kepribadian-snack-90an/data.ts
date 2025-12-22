// Snack 90an yang Menggambarkanmu
// Snack era 90an mana yang paling menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Sifat dasarmu...",
    options: [
      { text: "Ceria dan menyenangkan", type: "A" },
      { text: "Manis dan loveable", type: "B" },
      { text: "Bold dan berkarakter", type: "C" },
      { text: "Classic dan timeless", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di antara teman-teman, kamu...",
    options: [
      { text: "Yang fun dan bikin suasana rame", type: "A" },
      { text: "Yang sweet dan baik ke semua", type: "B" },
      { text: "Yang unik dan memorable", type: "C" },
      { text: "Yang reliable dan selalu ada", type: "D" },
    ],
  },
  {
    id: 3,
    question: "First impression orang tentangmu...",
    options: [
      { text: "Colorful dan energetic", type: "A" },
      { text: "Sweet dan approachable", type: "B" },
      { text: "Interesting dan different", type: "C" },
      { text: "Familiar dan comforting", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu menghibur orang...",
    options: [
      { text: "Jokes dan fun activities", type: "A" },
      { text: "Kindness dan perhatian", type: "B" },
      { text: "Keunikan dan unpredictability", type: "C" },
      { text: "Presence yang comforting", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nostalgia menurutmu...",
    options: [
      { text: "Fun memories yang bikin happy", type: "A" },
      { text: "Warm feelings dari masa lalu", type: "B" },
      { text: "Unique experiences yang memorable", type: "C" },
      { text: "Comfort dari yang familiar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Texture kepribadianmu...",
    options: [
      { text: "Crunchy dan fun", type: "A" },
      { text: "Soft dan sweet", type: "B" },
      { text: "Unique dan surprising", type: "C" },
      { text: "Consistent dan reliable", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Warna yang menggambarkanmu...",
    options: [
      { text: "Rainbow, colorful", type: "A" },
      { text: "Pink atau pastel", type: "B" },
      { text: "Bold, merah atau hitam", type: "C" },
      { text: "Warm, coklat atau krem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nilai yang kamu pegang...",
    options: [
      { text: "Joy dan fun", type: "A" },
      { text: "Kindness dan love", type: "B" },
      { text: "Individuality dan uniqueness", type: "C" },
      { text: "Reliability dan tradition", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat hangout sama teman...",
    options: [
      { text: "Yang initiate games dan aktivitas", type: "A" },
      { text: "Yang caring dan perhatian", type: "B" },
      { text: "Yang bawa ide-ide unik", type: "C" },
      { text: "Yang reliable hadir", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Childhood vibes yang paling relate...",
    options: [
      { text: "Main di luar, lari-lari, seru!", type: "A" },
      { text: "Quality time sama keluarga", type: "B" },
      { text: "Koleksi mainan atau kartu unik", type: "C" },
      { text: "Nonton TV bareng, santai", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sesuatu yang bikin kamu happy...",
    options: [
      { text: "Fun dan excitement", type: "A" },
      { text: "Love dan affection", type: "B" },
      { text: "Discovery dan uniqueness", type: "C" },
      { text: "Comfort dan familiarity", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Orang ingat kamu sebagai...",
    options: [
      { text: "Yang seru dan fun", type: "A" },
      { text: "Yang sweet dan kind", type: "B" },
      { text: "Yang unik dan memorable", type: "C" },
      { text: "Yang reliable dan trustworthy", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chiki Balls",
    emoji: "🔴",
    description: "Kamu adalah Chiki Balls! Fun, colorful, dan selalu bikin suasana ceria. Seperti snack yang jadi favorit semua anak, kamu adalah sumber kegembiraan dan energi positif. Life of the party!",
    traits: ["Fun", "Energetic", "Colorful", "Popular"],
    strengths: ["Great vibes", "Loved by many", "Energizing presence"],
    weaknesses: ["Bisa terlalu hype", "Kadang exhausting"],
    tips: ["Calm moments are okay too", "Energy needs refueling"],
  },
  B: {
    type: "B",
    title: "Momogi",
    emoji: "🧡",
    description: "Kamu adalah Momogi! Sweet, loveable, dan selalu bikin orang merasa hangat. Seperti snack yang lembut dan manis, kamu adalah comfort food untuk jiwa teman-temanmu!",
    traits: ["Sweet", "Loveable", "Gentle", "Caring"],
    strengths: ["Great friend", "Comforting presence", "Kind heart"],
    weaknesses: ["Bisa too sweet", "Might be taken advantage"],
    tips: ["Set boundaries too", "Self-care is not selfish"],
  },
  C: {
    type: "C",
    title: "Tic Tac",
    emoji: "🟢",
    description: "Kamu adalah Tic Tac! Unique, memorable, dan punya karakter yang distinct. Seperti snack kecil tapi berkesan, kamu adalah orang yang tidak mudah dilupakan. Small but mighty!",
    traits: ["Unique", "Memorable", "Bold", "Distinctive"],
    strengths: ["Stand out", "Unforgettable", "Original"],
    weaknesses: ["Might be too different", "Not for everyone"],
    tips: ["Your uniqueness is strength", "Find your tribe"],
  },
  D: {
    type: "D",
    title: "Biskuat",
    emoji: "💪",
    description: "Kamu adalah Biskuat! Classic, reliable, dan selalu ada saat dibutuhkan. Seperti snack yang memberi energi dan selalu ada di warung, kamu adalah pilar yang bisa diandalkan!",
    traits: ["Reliable", "Strong", "Classic", "Dependable"],
    strengths: ["Always there", "Trustworthy", "Consistent"],
    weaknesses: ["Might be overlooked", "Not flashy"],
    tips: ["You matter more than you know", "Reliability is rare virtue"],
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
