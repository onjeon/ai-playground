// Level Suka Durian
// Fun test tentang tahap kecintaan dengan durian

export const questions = [
  {
    id: 1,
    question: "Bau durian dari jauh. First reaction?",
    options: [
      { text: "WANGI! Mana durian?!", type: "A" },
      { text: "Hmm not bad, boleh makan", type: "B" },
      { text: "Neutral je, biasa", type: "C" },
      { text: "Tutup hidung, lari!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Musim durian dah sampai. Apa action kau?",
    options: [
      { text: "Pergi kebun! Makan sampai pengsan!", type: "A" },
      { text: "Beli sikit, moderate portion", type: "B" },
      { text: "Tunggu orang belanja", type: "C" },
      { text: "Avoid area ada durian", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Musang King harga RM80/kg. Worth it tak?",
    options: [
      { text: "SANGAT! Quality durian priceless!", type: "A" },
      { text: "Okay la kalau special occasion", type: "B" },
      { text: "Mahal sangat, kampung durian okay", type: "C" },
      { text: "No amount worth it untuk durian", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Durian dengan apa combination best?",
    options: [
      { text: "Makan plain! Pure durian experience!", type: "A" },
      { text: "Durian crepe atau ice cream!", type: "B" },
      { text: "Pulut durian!", type: "C" },
      { text: "Taknak combine dengan apa-apa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tourist kata durian bau busuk. Response?",
    options: [
      { text: "Defend durian habis-habisan!", type: "A" },
      { text: "Explain it's acquired taste", type: "B" },
      { text: "Agree sikit, memang kuat bau", type: "C" },
      { text: "Setuju, memang busuk pun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Hotel kata no durian in room. Kau buat apa?",
    options: [
      { text: "Sneak in jugak! Worth the risk!", type: "A" },
      { text: "Makan habis kat luar dulu", type: "B" },
      { text: "Okay, faham la rules", type: "C" },
      { text: "Good rule, setuju 100%", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Berapa banyak durian kau boleh makan sekali duduk?",
    options: [
      { text: "Sampai perut kembung! No limit!", type: "A" },
      { text: "3-5 biji, reasonable", type: "B" },
      { text: "1-2 biji cukup", type: "C" },
      { text: "Satu sudu pun tak larat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Anak/adik tak suka durian. Apa kau rasa?",
    options: [
      { text: "Kecewa! Kena educate taste dia!", type: "A" },
      { text: "Takpe, lagi banyak untuk aku", type: "B" },
      { text: "Normal, not everyone suka", type: "C" },
      { text: "Smart kid, durian overrated", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Durian kampung vs Musang King. Opinion?",
    options: [
      { text: "Musang King is king! Premium taste!", type: "A" },
      { text: "Dua-dua best, different experience", type: "B" },
      { text: "Kampung durian underrated!", type: "C" },
      { text: "Both taste the same - not nice", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau durian extinct esok. Perasaan kau?",
    options: [
      { text: "DEVASTATED! Life meaningless!", type: "A" },
      { text: "Sad, will miss it", type: "B" },
      { text: "Takpe, ada buah lain", type: "C" },
      { text: "Best news ever!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Durian Fanatic",
    emoji: "👑",
    description: "Kau ni KING of durian lovers! Musim durian adalah best time of year. Sanggup bayar mahal, makan sampai pengsan. Durian bukan buah - ia adalah religion!",
    traits: ["Obsessed", "Passionate", "Dedicated", "Adventurous eater"],
    strengths: ["True connoisseur", "Know all varieties", "Appreciate quality"],
    weaknesses: ["Might overeat", "Expensive hobby", "Friends avoid you"],
    tips: ["Moderation is key", "Share with others too"],
  },
  B: {
    type: "B",
    title: "Durian Appreciator",
    emoji: "😋",
    description: "Kau suka durian dengan healthy amount! Enjoy bila musim, appreciate quality, tapi tak sampai obsess. Balanced durian lover!",
    traits: ["Balanced", "Appreciative", "Moderate", "Reasonable"],
    strengths: ["Enjoy without obsession", "Budget-conscious", "Good taste"],
    weaknesses: ["Might miss premium experience", "Not adventurous enough"],
    tips: ["Try more varieties", "Explore durian tourism"],
  },
  C: {
    type: "C",
    title: "Casual Durian Eater",
    emoji: "🤷",
    description: "Durian okay untuk kau, tapi bukan must-have. Makan bila ada, tak teringin sangat. Take it or leave it attitude dengan durian!",
    traits: ["Casual", "Indifferent", "Flexible", "Non-committal"],
    strengths: ["No cravings", "Save money", "Easy to please"],
    weaknesses: ["Miss out on durian culture", "Not passionate"],
    tips: ["Give it more chance", "Try fresh from kampung"],
  },
  D: {
    type: "D",
    title: "Durian Avoider",
    emoji: "🙅",
    description: "Kau dan durian tidak serasi! Bau, rasa, everything - no thanks! Rare breed in Malaysia, tapi preference kau valid jugak!",
    traits: ["Anti-durian", "Sensitive", "Different taste", "Honest"],
    strengths: ["Save money", "No addiction", "Clear preference"],
    weaknesses: ["Missing Malaysian experience", "Hard to bond over durian"],
    tips: ["Maybe try durian products first", "Or just accept it's not for you"],
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
