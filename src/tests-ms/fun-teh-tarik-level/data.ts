// Level Teh Tarik Kau
// Fun test tentang personality based on teh tarik preference

export const questions = [
  {
    id: 1,
    question: "Bila order teh tarik, kau specify macam mana?",
    options: [
      { text: "Teh tarik kurang manis, panas!", type: "A" },
      { text: "Teh tarik biasa je", type: "B" },
      { text: "Teh tarik special dengan susu pekat!", type: "C" },
      { text: "Teh ais limau, teh tarik boring", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Teh tarik kau datang tak 'tarik' sangat. Reaction?",
    options: [
      { text: "Minta buat balik! Quality penting!", type: "A" },
      { text: "Minum je la, dah penat tunggu", type: "B" },
      { text: "Complain kat Google Review nanti", type: "C" },
      { text: "Tak perasan pun bezanya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pukul berapa kau biasa minum teh tarik?",
    options: [
      { text: "Pagi - boost untuk start day!", type: "A" },
      { text: "Petang - tea time classic!", type: "B" },
      { text: "Malam - lepak session essential!", type: "C" },
      { text: "Bila-bila je, anytime is teh tarik time!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kawan ajak pergi Starbucks instead of mamak. Response?",
    options: [
      { text: "Boleh, variety is good", type: "A" },
      { text: "Takpe, tapi next time mamak tau!", type: "B" },
      { text: "Starbucks mana ada teh tarik proper!", type: "C" },
      { text: "Okay je, coffee pun sedap", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Apa best partner dengan teh tarik?",
    options: [
      { text: "Roti canai - combo legend!", type: "A" },
      { text: "Nasi lemak breakfast set", type: "B" },
      { text: "Maggi goreng mamak", type: "C" },
      { text: "Makan je apa-apa pun match", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cuba teh tarik kat tempat baru. Macam mana judge?",
    options: [
      { text: "Buih kena tebal, rasa kena pekat!", type: "A" },
      { text: "Rasa boleh tahan dah okay", type: "B" },
      { text: "Compare dengan mamak favourite", type: "C" },
      { text: "Tak kisah sangat, teh tarik semua sama je", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Berapa cawan teh tarik kau minum sehari?",
    options: [
      { text: "Satu je, control caffeine", type: "A" },
      { text: "2-3 cawan, moderate la", type: "B" },
      { text: "Lost count dah, hidup adalah teh tarik!", type: "C" },
      { text: "Sekali-sekala je, bukan setiap hari", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apa rasa bila tengok video abang mamak tarik teh?",
    options: [
      { text: "Respect skill dia! Art form tu!", type: "A" },
      { text: "Impressive, nak try buat sendiri", type: "B" },
      { text: "Biasa je, dah selalu tengok", type: "C" },
      { text: "Post kat story! Content viral!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau pergi oversea, teringin teh tarik tak?",
    options: [
      { text: "Sangat! First thing balik Malaysia!", type: "A" },
      { text: "Sikit-sikit, tapi boleh tahan", type: "B" },
      { text: "Bawa teh tarik sachet sendiri!", type: "C" },
      { text: "Tak sangat, explore local drinks", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau teh tarik jadi orang, relationship kau dengan dia?",
    options: [
      { text: "Soulmate - tak boleh hidup tanpa!", type: "A" },
      { text: "Best friend - always there for me", type: "B" },
      { text: "Casual friend - jumpa bila-bila", type: "C" },
      { text: "Acquaintance - kenal tapi tak rapat", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Teh Tarik Purist",
    emoji: "🫖",
    description: "Kau ni hardcore teh tarik enthusiast! Ada standard tinggi, tau bezakan teh tarik quality dengan biasa. Mamak favourite dah macam second home. Abang mamak kenal order kau!",
    traits: ["Perfectionist", "Loyal", "Traditional", "Quality-focused"],
    strengths: ["High standards", "Appreciate craftsmanship", "Consistent taste"],
    weaknesses: ["Terlalu picky", "Susah puas hati"],
    tips: ["Try variations juga", "Appreciate all kinds of teh"],
  },
  B: {
    type: "B",
    title: "Balanced Sipper",
    emoji: "⚖️",
    description: "Kau appreciate teh tarik tapi tak obsess. Enjoy secukupnya, balance dengan minuman lain. Moderate dan practical - perfect balance!",
    traits: ["Balanced", "Practical", "Adaptable", "Health-conscious"],
    strengths: ["Good balance", "Not addicted", "Open minded"],
    weaknesses: ["Kadang miss out on best spots", "Tak passionate"],
    tips: ["Sometimes indulge sikit", "Explore teh tarik culture"],
  },
  C: {
    type: "C",
    title: "Teh Tarik Addict",
    emoji: "🤤",
    description: "Kau ni level addiction dah max! Teh tarik adalah darah dalam badan kau. Satu hari tanpa teh tarik? Impossible! Veins run with teh tarik!",
    traits: ["Passionate", "Dedicated", "Enthusiastic", "Committed"],
    strengths: ["True connoisseur", "Strong preference", "Loyal customer"],
    weaknesses: ["Maybe too much caffeine", "Hard to try new things"],
    tips: ["Jaga kesihatan", "Try kurang manis sikit"],
  },
  D: {
    type: "D",
    title: "Casual Tea Enjoyer",
    emoji: "😌",
    description: "Teh tarik nice, tapi bukan essential untuk kau. Boleh hidup dengan atau tanpa. Flexible dan open to all beverages. Variety is the spice of life!",
    traits: ["Flexible", "Open-minded", "Casual", "Adventurous"],
    strengths: ["Not dependent", "Try everything", "Easy to please"],
    weaknesses: ["Miss the teh tarik culture", "Jack of all drinks"],
    tips: ["Learn to appreciate the craft", "Understand teh tarik heritage"],
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
