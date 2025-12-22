// Gaya Melukis Anda
// Jenis artist mana anda?

export const questions = [
  {
    id: 1,
    question: "Medium lukisan favorite anda?",
    options: [
      { text: "Digital art - iPad/tablet", type: "A" },
      { text: "Traditional - watercolor, acrylic", type: "B" },
      { text: "Pencil/pen sketching", type: "C" },
      { text: "Doodles je kat mana-mana", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Subject matter lukisan anda?",
    options: [
      { text: "Characters/illustrations", type: "A" },
      { text: "Landscapes/still life", type: "B" },
      { text: "Portraits/people", type: "C" },
      { text: "Abstract/random shapes", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila lukis, anda...",
    options: [
      { text: "Hours hilang! Deep focus", type: "A" },
      { text: "Scheduled art time", type: "B" },
      { text: "When mood strikes", type: "C" },
      { text: "Bila boring je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Art supplies anda?",
    options: [
      { text: "Full studio setup!", type: "A" },
      { text: "Quality supplies untuk favorites", type: "B" },
      { text: "Basic essentials", type: "C" },
      { text: "Ballpoint pen je pun jadi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Share artwork anda?",
    options: [
      { text: "Instagram/portfolio online", type: "A" },
      { text: "Close friends dan family", type: "B" },
      { text: "Rarely, private collection", type: "C" },
      { text: "Tak share, malu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila artwork tak jadi macam nak...",
    options: [
      { text: "Learn from it, improve!", type: "A" },
      { text: "Frustrating tapi try again", type: "B" },
      { text: "Accept it as is", type: "C" },
      { text: "Give up on that piece", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Art education/learning anda?",
    options: [
      { text: "Formal training atau courses", type: "A" },
      { text: "YouTube tutorials, self-taught", type: "B" },
      { text: "Pick up as you go", type: "C" },
      { text: "No learning, just do", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Commission atau sell art?",
    options: [
      { text: "Yes, side income!", type: "A" },
      { text: "Occasionally untuk friends", type: "B" },
      { text: "Not good enough to sell", type: "C" },
      { text: "Never considered", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Art inspiration datang dari?",
    options: [
      { text: "Other artists, art communities", type: "A" },
      { text: "Nature dan surroundings", type: "B" },
      { text: "Emotions dan feelings", type: "C" },
      { text: "Random thoughts", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Art goal anda?",
    options: [
      { text: "Professional artist/illustrator", type: "A" },
      { text: "Consistent hobby, improve", type: "B" },
      { text: "Personal expression", type: "C" },
      { text: "Just pass time", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Serious Artist",
    emoji: "🎨",
    description: "Art adalah career potential! Serious about craft, always improving. Professional mindset dengan creative heart!",
    traits: ["Professional", "Dedicated", "Skilled", "Ambitious"],
    strengths: ["High skill level", "Consistent output", "Career potential"],
    weaknesses: ["May be too self-critical", "Burnout risk"],
    tips: ["Enjoy the process!", "Art is also for joy"],
  },
  B: {
    type: "B",
    title: "Dedicated Hobbyist",
    emoji: "🖼️",
    description: "Art adalah serious hobby! Consistent practice, steady improvement. Balance of passion dan life!",
    traits: ["Dedicated", "Improving", "Balanced", "Passionate"],
    strengths: ["Sustainable hobby", "Visible improvement"],
    weaknesses: ["May plateau"],
    tips: ["Push boundaries!", "Try new techniques"],
  },
  C: {
    type: "C",
    title: "Expressive Artist",
    emoji: "💭",
    description: "Art untuk express feelings! Not about skill, about expression. Authentic dan personal!",
    traits: ["Expressive", "Personal", "Emotional", "Authentic"],
    strengths: ["Genuine expression", "Therapeutic art"],
    weaknesses: ["Inconsistent practice", "May lack technique"],
    tips: ["Some technique helps expression!", "Keep creating"],
  },
  D: {
    type: "D",
    title: "Casual Doodler",
    emoji: "✏️",
    description: "Doodles here and there! Not serious artist tapi creative spirit ada. Everyone starts somewhere!",
    traits: ["Casual", "Creative", "Relaxed", "Beginner"],
    strengths: ["No pressure", "Pure fun", "Potential to grow"],
    weaknesses: ["Undeveloped skill", "Lack of practice"],
    tips: ["Try drawing daily!", "You might discover passion"],
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
