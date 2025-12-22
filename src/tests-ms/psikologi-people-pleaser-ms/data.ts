// People Pleaser Ke Kau?
// Sejauh mana kau jenis nak please semua orang?

export const questions = [
  {
    id: 1,
    question: "Bila orang minta tolong tapi kau tak nak, kau...",
    options: [
      { text: "Cakap no dengan confident", type: "A" },
      { text: "Explain why tak boleh, then no", type: "B" },
      { text: "Say yes walaupun tak nak", type: "C" },
      { text: "Bagi excuse yang elaborate", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila orang tak suka dengan kau, kau rasa...",
    options: [
      { text: "Biasa je, tak semua orang kena suka", type: "A" },
      { text: "Sikit curious kenapa, tapi okay", type: "B" },
      { text: "Very bothered, nak tahu apa salah kau", type: "C" },
      { text: "Anxious dan overthink", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam meeting, pendapat kau berbeza dari semua orang. Kau...",
    options: [
      { text: "Voice out dengan confident", type: "A" },
      { text: "Share carefully, explain reasoning", type: "B" },
      { text: "Ikut je majority", type: "C" },
      { text: "Diam, takut orang judge", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Makanan yang sampai salah dari order. Kau...",
    options: [
      { text: "Complain dan minta tukar", type: "A" },
      { text: "Politely request untuk fix", type: "B" },
      { text: "Makan je walaupun bukan yang kau nak", type: "C" },
      { text: "Complain dalam hati je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila buat decision, kau consider...",
    options: [
      { text: "What's best untuk kau mainly", type: "A" },
      { text: "Balance between needs kau dan others", type: "B" },
      { text: "How others akan feel first", type: "C" },
      { text: "What akan make everyone happy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Selepas social gathering, kau...",
    options: [
      { text: "Move on, dont think much", type: "A" },
      { text: "Quick reflect, then done", type: "B" },
      { text: "Replay conversations, worry kalau cakap salah", type: "C" },
      { text: "Anxious pasal how you came across", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila receive criticism, kau...",
    options: [
      { text: "Evaluate if valid, tak ambil personal", type: "A" },
      { text: "Consider it tapi tak let it affect kau much", type: "B" },
      { text: "Take it hard, think pasal it lama", type: "C" },
      { text: "Feel crushed, question everything", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kau describe diri kau as...",
    options: [
      { text: "Confident dan independent", type: "A" },
      { text: "Self-assured tapi considerate", type: "B" },
      { text: "Always trying to make others happy", type: "C" },
      { text: "Worried about what others think", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila ada conflict antara apa kau nak dan apa orang expect...",
    options: [
      { text: "Kau prioritize apa kau nak", type: "A" },
      { text: "Try find balance yang work", type: "B" },
      { text: "Usually sacrifice apa kau nak", type: "C" },
      { text: "Always do apa orang expect", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Self-worth kau based on...",
    options: [
      { text: "Internal validation mainly", type: "A" },
      { text: "Mix of internal dan external", type: "B" },
      { text: "A lot on how others see kau", type: "C" },
      { text: "Almost entirely external validation", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Confident Soul",
    emoji: "💪",
    description: "Definitely bukan people pleaser! Kau confident, tahu apa kau nak, dan tak easily swayed by others. Kau prioritize diri sendiri dan that's great!",
    traits: ["Confident", "Self-assured", "Independent", "Assertive"],
    strengths: ["Strong sense of self", "Clear boundaries", "Authentic"],
    weaknesses: ["May seem selfish kadang-kadang", "Others may feel unheard"],
    tips: ["Balance confidence dengan empathy", "Listen to others too", "Stay humble"],
  },
  B: {
    type: "B",
    title: "Balanced Being",
    emoji: "⚖️",
    description: "Kau ada healthy balance! Care about others tapi still prioritize yourself. Kau can say no bila perlu dan yes bila genuinely want to. Great equilibrium!",
    traits: ["Balanced", "Self-aware", "Considerate", "Healthy boundaries"],
    strengths: ["Good at balancing needs", "Authentic relationships", "Emotionally intelligent"],
    weaknesses: ["Sometimes torn between choices", "May overthink balance"],
    tips: ["Trust your instincts", "Its okay to lean either way sometimes"],
  },
  C: {
    type: "C",
    title: "People Pleaser",
    emoji: "🤝",
    description: "Kau quite the people pleaser! Heart kau besar, always nak orang happy. Tapi kadang sacrifice diri sendiri too much. Remember your needs matter too!",
    traits: ["Caring", "Selfless", "Accommodating", "Sensitive"],
    strengths: ["Great friend", "Harmonious relationships", "Very considerate"],
    weaknesses: ["Burnout prone", "May lose identity", "Resentment can build"],
    tips: ["Practice saying no", "Your needs are valid", "Not everyone will like you - thats okay"],
  },
  D: {
    type: "D",
    title: "Chronic People Pleaser",
    emoji: "😰",
    description: "Kau serious people pleaser. Constantly worried about others' opinions dan sacrifice kau punya needs. Its exhausting kan? Time untuk focus on yourself more!",
    traits: ["Anxious", "Self-sacrificing", "External validation-seeking", "Conflict-avoidant"],
    strengths: ["Very empathetic", "Harmony keeper", "Thoughtful"],
    weaknesses: ["Lose sense of self", "Exhausted from pleasing", "May enable bad behavior"],
    tips: ["Start with small nos", "Your worth isnt others' approval", "Therapy can help understand roots"],
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
