// Attachment Style Kau
// Macam mana cara kau attach dengan orang?

export const questions = [
  {
    id: 1,
    question: "Bila partner kau tak reply message lama, kau rasa macam mana?",
    options: [
      { text: "Biasa je, mesti dia busy", type: "A" },
      { text: "Sikit risau, tapi try relax", type: "B" },
      { text: "Terus anxious, fikir macam-macam", type: "C" },
      { text: "Lega sebenarnya, nak space", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Macam mana kau handle bila orang yang kau sayang nak pergi jauh?",
    options: [
      { text: "Support dia, tahu kita okay je", type: "A" },
      { text: "Sedih sikit tapi faham", type: "B" },
      { text: "Sangat risau, takut dia lupa kita", type: "C" },
      { text: "Okay je, lagi senang sebenarnya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam relationship, kau lebih suka...",
    options: [
      { text: "Berdua tapi ada privacy masing-masing", type: "A" },
      { text: "Rapat tapi masih ada ruang", type: "B" },
      { text: "Super rapat, nak tahu semua", type: "C" },
      { text: "Banyak space, tak perlu selalu jumpa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila kena kritik oleh orang tersayang, kau...",
    options: [
      { text: "Terima dengan terbuka, tak ambil hati", type: "A" },
      { text: "Dengar dulu, proses kemudian", type: "B" },
      { text: "Terus rasa dia dah tak sayang", type: "C" },
      { text: "Buat tak tahu, malas layan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam friendship, kau jenis...",
    options: [
      { text: "Ada banyak kawan rapat, semua trusted", type: "A" },
      { text: "Sikit je kawan rapat, pilih yang betul", type: "B" },
      { text: "Clingy sikit dengan kawan rapat", type: "C" },
      { text: "Prefer sendiri, tak perlu ramai kawan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila partner kau keluar dengan kawan tanpa kau...",
    options: [
      { text: "Happy untuk dia, enjoy!", type: "A" },
      { text: "Okay, tapi harap dia update sikit", type: "B" },
      { text: "Risau sangat, asyik check phone", type: "C" },
      { text: "Lega, dapat masa sendiri", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Macam mana kau express sayang?",
    options: [
      { text: "Natural je, tak perlu overthink", type: "A" },
      { text: "Susah sikit, tapi cuba", type: "B" },
      { text: "Banyak sangat sampai orang overwhelm", type: "C" },
      { text: "Jarang sangat, awkward", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila relationship ada masalah, kau...",
    options: [
      { text: "Settle terus dengan communicate", type: "A" },
      { text: "Bagi masa, then bincang", type: "B" },
      { text: "Panic, takut putus", type: "C" },
      { text: "Pull away, nak lari dari masalah", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau percaya orang baru dengan...",
    options: [
      { text: "Senang je, sampai terbukti sebaliknya", type: "A" },
      { text: "Sikit masa untuk build trust", type: "B" },
      { text: "Cepat sangat trust, then kecewa", type: "C" },
      { text: "Susah sangat nak trust orang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila orang kata 'I love you', kau...",
    options: [
      { text: "Balas dengan natural dan happy", type: "A" },
      { text: "Balas tapi rasa sikit awkward", type: "B" },
      { text: "Sangat happy, nak dengar lagi banyak", type: "C" },
      { text: "Uncomfortable, tak tahu nak respond", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Secure Attachment",
    emoji: "💚",
    description: "Wah, kau jenis yang stable gila dalam relationship! Kau comfortable dengan intimacy tapi tak clingy. Boleh trust orang dan bagi space. Healthy vibes!",
    traits: ["Stable", "Trustful", "Balanced", "Confident"],
    strengths: ["Easy to communicate", "Tak overthink", "Healthy boundaries", "Support partner dengan natural"],
    weaknesses: ["Kadang tak faham kenapa orang lain insecure", "Mungkin underestimate relationship struggles"],
    tips: ["Terus maintain healthy habits ni", "Be patient dengan orang yang different attachment style"],
  },
  B: {
    type: "B",
    title: "Mostly Secure",
    emoji: "💛",
    description: "Kau quite secure tapi ada sikit anxiety kadang-kadang. Normal je! Kau tahu balance between close dan space, cuma sometimes need reassurance.",
    traits: ["Generally stable", "Self-aware", "Adaptable", "Caring"],
    strengths: ["Good at communication", "Willing to work on relationship", "Faham needs sendiri"],
    weaknesses: ["Kadang overthink sikit", "Need validation sometimes"],
    tips: ["Trust instinct kau", "Communicate bila feel insecure, its okay"],
  },
  C: {
    type: "C",
    title: "Anxious Attachment",
    emoji: "🧡",
    description: "Kau jenis yang sangat value connection, sampai kadang risau berlebihan. Kau loving sangat tapi fear of abandonment kadang take over. Its okay, banyak orang macam ni!",
    traits: ["Deeply loving", "Sensitive", "Need reassurance", "Fear of rejection"],
    strengths: ["Very devoted", "Perasan dengan partner needs", "Expressive dengan feelings"],
    weaknesses: ["Overthink pasal relationship", "Clingy bila anxious", "Self-worth tied to relationship"],
    tips: ["Practice self-soothing", "Build confidence dari dalam", "Communicate needs tanpa fear"],
  },
  D: {
    type: "D",
    title: "Avoidant Attachment",
    emoji: "💙",
    description: "Kau value independence sangat. Kadang susah nak let people in sebab takut vulnerable. Kau strong tapi kadang lonely jugak. Its okay to need people!",
    traits: ["Independent", "Self-reliant", "Guarded", "Value freedom"],
    strengths: ["Tak dependent on others", "Strong sense of self", "Handle alone time well"],
    weaknesses: ["Push people away", "Susah express feelings", "Miss out on deep connections"],
    tips: ["Try buka sikit, small steps", "Vulnerability bukan weakness", "Let trusted people in"],
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
