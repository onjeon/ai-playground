// Level Keyakinan Diri
// Sejauh mana kau yakin dengan diri sendiri?

export const questions = [
  {
    id: 1,
    question: "Bila tengok diri dalam mirror, kau fikir...",
    options: [
      { text: "Looking good! Happy dengan apa yang nampak", type: "A" },
      { text: "Okay la, some things nice some meh", type: "B" },
      { text: "Focus on flaws, wish things different", type: "C" },
      { text: "Avoid mirrors, tak suka tengok", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila receive compliment, kau...",
    options: [
      { text: "Thank them genuinely, believe it", type: "A" },
      { text: "Appreciate it tapi sikit awkward", type: "B" },
      { text: "Deflect atau downplay", type: "C" },
      { text: "Dont believe it, think they lying", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila compare diri dengan others, kau rasa...",
    options: [
      { text: "Everyone unique, tak perlu compare", type: "A" },
      { text: "Sometimes compare, mostly okay", type: "B" },
      { text: "Often feel less than others", type: "C" },
      { text: "Always feel inferior", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila fail at something, kau think...",
    options: [
      { text: "Its a learning experience", type: "A" },
      { text: "Disappointing tapi akan try again", type: "B" },
      { text: "Im not good enough", type: "C" },
      { text: "Im a complete failure", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Do you feel worthy of love dan respect?",
    options: [
      { text: "Absolutely yes", type: "A" },
      { text: "Usually, most of the time", type: "B" },
      { text: "Sometimes doubt it", type: "C" },
      { text: "Rarely feel worthy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila ada opportunity baru, kau fikir...",
    options: [
      { text: "Im capable, lets go!", type: "A" },
      { text: "Nervous but will try", type: "B" },
      { text: "Not sure if Im good enough", type: "C" },
      { text: "Definitely tak layak, dont even try", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kau happy dengan who you are?",
    options: [
      { text: "Yes, love myself", type: "A" },
      { text: "Generally yes, some things want improve", type: "B" },
      { text: "Often wish I was different", type: "C" },
      { text: "Dont like much about myself", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila orang criticize kau...",
    options: [
      { text: "Consider if valid, dont take personal", type: "A" },
      { text: "Affected sikit tapi recover", type: "B" },
      { text: "Really hurt, think pasal it lama", type: "C" },
      { text: "Devastated, confirms worst fears", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau voice out opinions walaupun might be unpopular?",
    options: [
      { text: "Yes, confident dalam views", type: "A" },
      { text: "Sometimes, depends on situation", type: "B" },
      { text: "Rarely, takut kena judge", type: "C" },
      { text: "Never, opinions tak penting pun", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall, kau believe in yourself?",
    options: [
      { text: "Strongly yes", type: "A" },
      { text: "Mostly yes", type: "B" },
      { text: "Struggle dengan it", type: "C" },
      { text: "Rarely believe in myself", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Confident Queen/King",
    emoji: "👑",
    description: "Self-esteem kau solid! Kau believe in yourself, know your worth, dan dont need external validation. This confidence is attractive dan healthy!",
    traits: ["Confident", "Self-assured", "Secure", "Positive self-image"],
    strengths: ["Handle criticism well", "Take on challenges", "Healthy relationships"],
    weaknesses: ["May seem arrogant to some", "Others might feel intimidated"],
    tips: ["Stay humble", "Help others build confidence too", "Keep growing"],
  },
  B: {
    type: "B",
    title: "Generally Confident",
    emoji: "💪",
    description: "Kau ada healthy self-esteem! Mostly believe in yourself, ada doubts sometimes tapi overcome them. Good balance of confidence dan humility!",
    traits: ["Reasonably confident", "Self-aware", "Realistic", "Growing"],
    strengths: ["Grounded confidence", "Open to improvement", "Relatable"],
    weaknesses: ["Doubts can creep in during tough times"],
    tips: ["Keep building yourself", "Celebrate wins", "Remember your strengths bila doubt"],
  },
  C: {
    type: "C",
    title: "Shaky Confidence",
    emoji: "🌱",
    description: "Self-esteem kau ada tapi wobbly. Kau doubt yourself often, struggle dengan believing youre good enough. The truth is - you ARE enough!",
    traits: ["Self-doubting", "Comparing", "Seeking validation", "Critical of self"],
    strengths: ["Humble", "Strive untuk improve", "Empathetic"],
    weaknesses: ["Affect opportunities taken", "Depend on others' approval", "Self-critical"],
    tips: ["Practice self-compassion", "List your strengths daily", "Challenge negative thoughts"],
  },
  D: {
    type: "D",
    title: "Low Self-Esteem",
    emoji: "💝",
    description: "Kau really struggle dengan believing in yourself. Tak nampak value sendiri, feel unworthy. Please know - your mind is lying to you. You have worth!",
    traits: ["Low self-worth", "Self-critical", "Insecure", "Struggling"],
    strengths: ["Very empathetic", "Understand others pain", "Deeply feeling"],
    weaknesses: ["Miss opportunities", "Tolerate poor treatment", "Affects all areas of life"],
    tips: ["Please seek support", "Self-esteem can be built", "You deserve to feel good about yourself"],
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
