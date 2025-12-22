// Gaya Hiking Anda
// Jenis hiker mana anda?

export const questions = [
  {
    id: 1,
    question: "Kenapa anda hiking?",
    options: [
      { text: "Challenge diri, conquer peaks!", type: "A" },
      { text: "Exercise dan fresh air", type: "B" },
      { text: "Nature photography dan peace", type: "C" },
      { text: "Sebab kawan ajak", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trail difficulty preference?",
    options: [
      { text: "Extreme! The harder the better", type: "A" },
      { text: "Moderate - challenging tapi doable", type: "B" },
      { text: "Easy trails, enjoy scenery", type: "C" },
      { text: "Flat trails please", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hiking gear anda?",
    options: [
      { text: "Full gear - proper boots, poles, backpack", type: "A" },
      { text: "Good shoes dan essentials", type: "B" },
      { text: "Basic comfortable clothes", type: "C" },
      { text: "Jeans dan sneakers pun jalan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pace hiking anda?",
    options: [
      { text: "Fast! Race to the top", type: "A" },
      { text: "Steady, sustainable pace", type: "B" },
      { text: "Slow, stop untuk photos", type: "C" },
      { text: "Very slow, frequent breaks", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila sampai peak/destination...",
    options: [
      { text: "Victory! Quick rest, next challenge!", type: "A" },
      { text: "Satisfied, enjoy the view", type: "B" },
      { text: "Photo session lengkap!", type: "C" },
      { text: "Finally! Tak nak jalan dah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Hiking companions ideal?",
    options: [
      { text: "Serious hikers yang match pace", type: "A" },
      { text: "Friends yang nak enjoy sama", type: "B" },
      { text: "Anyone yang appreciate nature", type: "C" },
      { text: "Someone to motivate me", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Trail snacks anda?",
    options: [
      { text: "Energy bars, trail mix - efficient", type: "A" },
      { text: "Packed lunch untuk picnic top", type: "B" },
      { text: "Fruits dan light snacks", type: "C" },
      { text: "Full picnic basket", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila cuaca tak best for hiking...",
    options: [
      { text: "Still go! Rain or shine", type: "A" },
      { text: "Reschedule, safety first", type: "B" },
      { text: "Cancel, tak best untuk photos", type: "C" },
      { text: "Perfect excuse tak pergi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Post-hike feeling anda?",
    options: [
      { text: "Energized! When's the next one?", type: "A" },
      { text: "Satisfied dan accomplished", type: "B" },
      { text: "Content, nice memories", type: "C" },
      { text: "Exhausted, need recovery week", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Hiking bucket list anda?",
    options: [
      { text: "All major peaks - Kinabalu, etc!", type: "A" },
      { text: "Nice trails around Malaysia", type: "B" },
      { text: "Scenic easy trails", type: "C" },
      { text: "Survive one proper hike first", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mountain Conqueror",
    emoji: "⛰️",
    description: "Peak bagging adalah life! The harder the trail, the sweeter the victory. Serious hiker dengan serious goals!",
    traits: ["Adventurous", "Driven", "Fit", "Competitive"],
    strengths: ["Physical fitness", "Determination", "Conquers challenges"],
    weaknesses: ["May push too hard", "Misses scenery"],
    tips: ["Slow down sometimes!", "Enjoy the journey"],
  },
  B: {
    type: "B",
    title: "Balanced Hiker",
    emoji: "🥾",
    description: "Hiking untuk health dan enjoyment! Perfect balance of challenge dan fun. Sustainable hiking habits!",
    traits: ["Balanced", "Healthy", "Social", "Moderate"],
    strengths: ["Sustainable hobby", "Enjoyable experience"],
    weaknesses: ["May stay comfort zone"],
    tips: ["Challenge yourself sometimes!", "Try harder trails"],
  },
  C: {
    type: "C",
    title: "Nature Lover",
    emoji: "🌲",
    description: "Hiking untuk connect dengan nature! Photos, peace, dan beauty - anda appreciate every moment. Mindful hiker!",
    traits: ["Mindful", "Appreciative", "Artistic", "Peaceful"],
    strengths: ["Deep appreciation", "Great photos", "Stress relief"],
    weaknesses: ["Slow progress", "May hold up group"],
    tips: ["Balance pace!", "Nature will wait for you"],
  },
  D: {
    type: "D",
    title: "Reluctant Hiker",
    emoji: "😅",
    description: "Hiking because FOMO atau kawan paksa! Heart tak fully in it tapi you show up. That counts for something!",
    traits: ["Social", "Hesitant", "Beginner", "Honest"],
    strengths: ["Good sport", "Tries new things"],
    weaknesses: ["Not passionate", "Struggles physically"],
    tips: ["Find your motivation!", "Start with easy trails"],
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
