// Sumber Kebahagiaan Kau
// Discover what truly makes you happy!

export const questions = [
  {
    id: 1,
    question: "Moment paling happy recently?",
    options: [
      { text: "Achieved something big", type: "A" },
      { text: "Quality time dengan loved ones", type: "B" },
      { text: "Did something fun atau adventurous", type: "C" },
      { text: "Moment of peace dan contentment", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dream day off looks like...",
    options: [
      { text: "Being productive, side projects", type: "A" },
      { text: "Full day dengan people I love", type: "B" },
      { text: "Adventure atau trying something new", type: "C" },
      { text: "Quiet day, self-care, no rush", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa yang instantly boost mood kau?",
    options: [
      { text: "Completing tasks, checking boxes", type: "A" },
      { text: "Laughing dengan friends/family", type: "B" },
      { text: "Fun experience atau entertainment", type: "C" },
      { text: "Moments of calm dan gratitude", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Happiness untuk kau means...",
    options: [
      { text: "Achieving dan progressing", type: "A" },
      { text: "Loving dan being loved", type: "B" },
      { text: "Enjoying dan experiencing", type: "C" },
      { text: "Being at peace inside", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila feel most content?",
    options: [
      { text: "After big accomplishment", type: "A" },
      { text: "Surrounded by loved ones", type: "B" },
      { text: "In the middle of fun activity", type: "C" },
      { text: "Quiet moments alone, comfortable", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Money would buy you happiness through...",
    options: [
      { text: "Status symbols dan success markers", type: "A" },
      { text: "Experiences dengan loved ones", type: "B" },
      { text: "Adventures dan entertainment", type: "C" },
      { text: "Freedom dan security to be at peace", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila unhappy, kau crave...",
    options: [
      { text: "Progress on something", type: "A" },
      { text: "Connection dengan someone", type: "B" },
      { text: "Distraction atau fun", type: "C" },
      { text: "Solitude dan quiet", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Happiest period in life so far was when...",
    options: [
      { text: "Achieving milestones", type: "A" },
      { text: "Relationships were strong", type: "B" },
      { text: "Having most fun experiences", type: "C" },
      { text: "Felt most at peace dengan self", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Social media makes kau happy bila see...",
    options: [
      { text: "Success stories dan achievements", type: "A" },
      { text: "Happy families dan friendships", type: "B" },
      { text: "Travel dan experience content", type: "C" },
      { text: "Minimalist, peaceful lifestyle", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ultimate happiness untuk kau?",
    options: [
      { text: "Being highly successful", type: "A" },
      { text: "Being deeply loved", type: "B" },
      { text: "Living exciting life", type: "C" },
      { text: "Being genuinely at peace", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Achievement Joy",
    emoji: "🎯",
    description: "Happiness kau comes from ACHIEVING! Goals crushed, progress made, success gained. Productive dan driven, accomplishment adalah your joy source. Just remember - you are not your achievements!",
    traits: ["Achievement-oriented", "Productive", "Goal-driven", "Success-focused"],
    strengths: ["Always progressing", "Clear measures of happiness", "Motivated"],
    weaknesses: ["Happiness conditional", "Rest feels wasted", "Never satisfied syndrome"],
    tips: ["Happiness exists without achievement too", "Practice being vs doing", "Celebrate more"],
  },
  B: {
    type: "B",
    title: "Connection Joy",
    emoji: "💕",
    description: "Happiness kau comes from LOVE! Relationships, connection, togetherness - people are your joy. Warm dan relational, love makes your world bright. Beautiful source tapi cultivate solo joy too!",
    traits: ["Relational", "Loving", "Connection-seeking", "Warm"],
    strengths: ["Rich relationships", "Deep connections", "Love abundance"],
    weaknesses: ["Dependent on others for joy", "Struggle bila alone", "Affected by relationship health"],
    tips: ["Learn to be happy alone too", "Not all relationships healthy", "Self-love is love too"],
  },
  C: {
    type: "C",
    title: "Experience Joy",
    emoji: "🎉",
    description: "Happiness kau comes from FUN! Experiences, adventures, entertainment - life is playground. Playful dan curious, joy in doing exciting things. Great source tapi quiet joy matters too!",
    traits: ["Fun-loving", "Experiential", "Adventurous", "Playful"],
    strengths: ["Never boring", "Great at enjoying life", "Creates memories"],
    weaknesses: ["Need constant stimulation", "Ordinary feels dull", "May avoid stillness"],
    tips: ["Joy exists dalam ordinary too", "Stillness can be happy", "Depth alongside breadth"],
  },
  D: {
    type: "D",
    title: "Peace Joy",
    emoji: "🕊️",
    description: "Happiness kau comes from PEACE! Contentment, calm, inner tranquility - serenity is your joy. Wise dan grounded, happiness from within. Beautiful source - just dont miss life too!",
    traits: ["Peaceful", "Content", "Internally-sourced", "Grounded"],
    strengths: ["Happiness sustainable", "Not dependent on external", "Deep contentment"],
    weaknesses: ["May miss exciting experiences", "Can be too detached", "Others may not understand"],
    tips: ["Balance peace dengan engagement", "Share your calm dengan others", "Some excitement is good too"],
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
