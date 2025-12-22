// Tes Gaya Ghosting Kamu
// Apakah kamu tim ghosting atau anti ghosting?

export const questions = [
  {
    id: 1,
    question: "Pendapatmu tentang ghosting...",
    options: [
      { text: "Absolutely wrong, disrespectful", type: "A" },
      { text: "Tidak ideal tapi sometimes understandable", type: "B" },
      { text: "Kadang necessary untuk self-protection", type: "C" },
      { text: "Easier than confrontation, why not", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau tidak interested sama seseorang...",
    options: [
      { text: "Bilang langsung dengan sopan", type: "A" },
      { text: "Kasih hints dulu, kalau tidak paham baru tegas", type: "B" },
      { text: "Slow fade, kurangi respon pelan-pelan", type: "C" },
      { text: "Ghost aja, lebih simpel", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pernah ghosting seseorang?",
    options: [
      { text: "Tidak pernah, selalu kasih closure", type: "A" },
      { text: "Jarang, dan feel guilty kalau pernah", type: "B" },
      { text: "Beberapa kali, situasi memaksa", type: "C" },
      { text: "Sering, ini cara paling mudah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Alasan yang valid untuk ghosting...",
    options: [
      { text: "Tidak ada alasan yang valid", type: "A" },
      { text: "Safety concern atau toxic person", type: "B" },
      { text: "Orang yang tidak respect boundaries", type: "C" },
      { text: "Kapanpun tidak mau lanjut, valid", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau kamu yang di-ghost...",
    options: [
      { text: "Sakit dan kecewa banget", type: "A" },
      { text: "Bingung dan butuh closure", type: "B" },
      { text: "Annoyed tapi move on aja", type: "C" },
      { text: "Understandable, mungkin aku juga gitu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Setelah berapa lama tidak balas itu dianggap ghosting?",
    options: [
      { text: "24-48 jam tanpa kabar", type: "A" },
      { text: "Beberapa hari tanpa explanation", type: "B" },
      { text: "Seminggu lebih", type: "C" },
      { text: "Ketika jelas tidak akan respond lagi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ghosting vs rejection langsung...",
    options: [
      { text: "Rejection langsung lebih baik, always", type: "A" },
      { text: "Rejection lebih respectful walau sakit", type: "B" },
      { text: "Tergantung situasi dan orangnya", type: "C" },
      { text: "Ghosting lebih gentle sometimes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau seseorang re-appear setelah ghosting kamu...",
    options: [
      { text: "Tidak akan respond, sudah no respect", type: "A" },
      { text: "Minta explanation dulu", type: "B" },
      { text: "Tergantung seberapa interested masih", type: "C" },
      { text: "Welcome back, ga masalah", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Slow fade vs hard ghost...",
    options: [
      { text: "Dua-duanya sama buruknya", type: "A" },
      { text: "Slow fade sedikit lebih gentle", type: "B" },
      { text: "Prefer slow fade, less harsh", type: "C" },
      { text: "Hard ghost lebih efisien", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Yang kamu expect dari orang yang tidak interested...",
    options: [
      { text: "Clear communication dan closure", type: "A" },
      { text: "At least satu message penjelasan", type: "B" },
      { text: "Hints yang cukup jelas", type: "C" },
      { text: "Apapun caranya, yang penting tau", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Paling susah dari di-ghost adalah...",
    options: [
      { text: "No closure dan tidak tau why", type: "A" },
      { text: "Feeling disrespected", type: "B" },
      { text: "Second guessing diri sendiri", type: "C" },
      { text: "Honestly, bukan big deal", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Di era dating apps, ghosting itu...",
    options: [
      { text: "Tetap tidak acceptable", type: "A" },
      { text: "More common tapi tetap not okay", type: "B" },
      { text: "Bagian dari culture, accept it", type: "C" },
      { text: "Normal dan expected", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anti Ghosting Absolut",
    emoji: "🚫",
    description: "Kamu percaya setiap orang deserve closure dan komunikasi yang jelas. Ghosting adalah big no-no, tidak peduli situasinya. Respect adalah segalanya.",
    traits: ["Respectful", "Communicative", "Principled", "Empathetic"],
    strengths: ["Always gives closure", "Clear communicator", "Respectful"],
    weaknesses: ["Kadang confrontation itu hard", "Terlalu idealis"],
    tips: ["Tetap pertahankan nilai ini", "Tapi protect yourself juga kalau perlu"],
  },
  B: {
    type: "B",
    title: "Reluctant Ghoster",
    emoji: "😕",
    description: "Kamu tidak suka ghosting dan selalu berusaha kasih closure. Tapi dalam situasi tertentu (safety, toxic person), kamu bisa understand kenapa orang ghosting.",
    traits: ["Understanding", "Flexible", "Guilty conscience", "Balanced"],
    strengths: ["Situational awareness", "Fair judgment", "Empathetic"],
    weaknesses: ["Might take too long to end things", "Conflict avoidant"],
    tips: ["Be direct when needed", "Your safety first"],
  },
  C: {
    type: "C",
    title: "Situational Ghoster",
    emoji: "🌫️",
    description: "Kamu ghost kalau situasi memaksa. Prefer slow fade daripada hard ghost. Bukan pilihan pertama, tapi kadang itu cara paling aman atau mudah.",
    traits: ["Pragmatic", "Non-confrontational", "Self-protective", "Adaptive"],
    strengths: ["Protects self", "Avoids unnecessary drama", "Practical"],
    weaknesses: ["Might leave people hanging", "Avoids hard conversations"],
    tips: ["Try to give closure when safe", "Put yourself in their shoes"],
  },
  D: {
    type: "D",
    title: "Casual Ghoster",
    emoji: "👻",
    description: "Ghosting adalah cara termudah untuk end things. Tidak perlu drama atau awkward conversation. Simple dan efficient. It's just dating, not that deep.",
    traits: ["Detached", "Efficient", "Non-dramatic", "Practical"],
    strengths: ["No unnecessary drama", "Moves on quickly", "Unbothered"],
    weaknesses: ["Might hurt people", "Karma bisa balik", "Lacks empathy"],
    tips: ["Consider others' feelings", "Closure matters untuk banyak orang"],
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
