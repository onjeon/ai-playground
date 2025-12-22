// Tingkat Empati Kamu
// Tes ini mengungkap seberapa empatik kamu terhadap orang lain!

export const questions = [
  {
    id: 1,
    question: "Saat teman bercerita tentang masalahnya...",
    options: [
      { text: "Fully present, rasakan apa yang mereka rasakan", type: "A" },
      { text: "Dengarkan dan coba understand perspective", type: "B" },
      { text: "Dengarkan tapi lebih fokus kasih solusi", type: "C" },
      { text: "Susah fokus, pikiran kemana-mana", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Melihat orang asing menangis di tempat umum...",
    options: [
      { text: "Hati tersentuh, ingin membantu", type: "A" },
      { text: "Concerned, hope they're okay", type: "B" },
      { text: "Notice tapi tidak terlalu affect", type: "C" },
      { text: "Tidak nyaman, avoid looking", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Menonton film atau baca buku yang emotional...",
    options: [
      { text: "Sering ikut nangis atau sangat affected", type: "A" },
      { text: "Tersentuh tapi controlled", type: "B" },
      { text: "Appreciate ceritanya tanpa terlalu emotional", type: "C" },
      { text: "Jarang affected secara emotional", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat orang lain excited tentang sesuatu...",
    options: [
      { text: "Ikut excited, their joy is contagious", type: "A" },
      { text: "Happy for them, show support", type: "B" },
      { text: "Acknowledge tapi tidak terlalu affect", type: "C" },
      { text: "Kadang annoyed kalau terlalu over", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kemampuan membaca body language dan non-verbal cues...",
    options: [
      { text: "Sangat peka, sering catch subtle signals", type: "A" },
      { text: "Cukup baik, notice yang obvious", type: "B" },
      { text: "Kadang miss, more focused on words", type: "C" },
      { text: "Tidak terlalu aware", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat seseorang berperilaku menyebalkan...",
    options: [
      { text: "Try understand apa yang mungkin mereka alami", type: "A" },
      { text: "Annoyed tapi remind diri ada reason", type: "B" },
      { text: "Judge behavior, tidak excuse it", type: "C" },
      { text: "Langsung kesal tanpa banyak thinking", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Helping others in need...",
    options: [
      { text: "Proaktif, sering notice dan offer help", type: "A" },
      { text: "Help kalau diminta atau obvious needed", type: "B" },
      { text: "Help kalau convenient untuk saya", type: "C" },
      { text: "Jarang, fokus ke urusan sendiri", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Listening to different perspectives atau opinions...",
    options: [
      { text: "Genuinely curious, want to understand", type: "A" },
      { text: "Open tapi defend my position too", type: "B" },
      { text: "Listen out of politeness", type: "C" },
      { text: "Dismiss kalau beda dengan views saya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Energy dan mood orang di sekitar...",
    options: [
      { text: "Sangat affected, absorb energy sekitar", type: "A" },
      { text: "Notice dan kadang affected", type: "B" },
      { text: "Aware tapi tidak terlalu affect saya", type: "C" },
      { text: "Tidak terlalu peka", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat someone share good news...",
    options: [
      { text: "Genuinely happy, celebrate with them", type: "A" },
      { text: "Happy for them, express congrats", type: "B" },
      { text: "Polite response, might feel envious", type: "C" },
      { text: "Neutral, doesn't affect me much", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Understanding people from different backgrounds...",
    options: [
      { text: "Very open dan curious to learn", type: "A" },
      { text: "Try to understand, some blind spots", type: "B" },
      { text: "Stick to what I know, limited exposure", type: "C" },
      { text: "Prefer people similar to me", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall, seberapa empatik kamu?",
    options: [
      { text: "Highly empathetic, sometimes too much", type: "A" },
      { text: "Fairly empathetic", type: "B" },
      { text: "Selective empathy", type: "C" },
      { text: "Not very empathetic", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Highly Empathetic",
    emoji: "💗",
    description: "Kamu memiliki empati yang sangat tinggi! Kamu sangat peka terhadap perasaan orang lain, kadang sampai menyerap emosi mereka. Ini adalah gift tapi juga perlu dijaga.",
    traits: ["Highly sensitive", "Intuitive", "Compassionate", "Understanding"],
    strengths: ["Deep connections", "Great listener", "Helps others feel understood"],
    weaknesses: ["Can be overwhelming", "Need to protect energy", "Might neglect self"],
    tips: ["Set boundaries", "Practice emotional regulation", "Self-care is essential"],
  },
  B: {
    type: "B",
    title: "Balanced Empathy",
    emoji: "💚",
    description: "Kamu memiliki empati yang seimbang! Kamu bisa understand dan connect dengan orang lain tanpa kehilangan diri sendiri. This is a healthy level.",
    traits: ["Balanced", "Understanding", "Connected", "Healthy boundaries"],
    strengths: ["Good relationships", "Can help effectively", "Not overwhelmed"],
    weaknesses: ["Could develop deeper empathy in some areas"],
    tips: ["Continue developing", "Practice active listening", "Stay open to growth"],
  },
  C: {
    type: "C",
    title: "Selective Empathy",
    emoji: "💛",
    description: "Empatimu cenderung selective - lebih mudah empati ke orang tertentu atau situasi tertentu. Ini normal tapi bisa dikembangkan lebih broad.",
    traits: ["Selective", "Practical", "Guarded", "Conditional"],
    strengths: ["Protected from overwhelm", "Practical approach"],
    weaknesses: ["Limited connections", "May miss important cues", "Could be seen as cold"],
    tips: ["Practice empathy dengan orang berbeda", "Try to understand before judging"],
  },
  D: {
    type: "D",
    title: "Developing Empathy",
    emoji: "🧡",
    description: "Empatimu masih dalam pengembangan. Ini bukan berarti kamu tidak caring, tapi mungkin tidak terlalu tuned in ke emosi orang lain. Empati bisa dilatih!",
    traits: ["Detached", "Self-focused", "Practical", "Independent"],
    strengths: ["Not overwhelmed by others' emotions", "Objective"],
    weaknesses: ["Difficulty connecting", "May seem uncaring", "Relationship challenges"],
    tips: ["Practice active listening", "Ask more questions", "Try to imagine others' perspectives"],
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
