// Kepribadian Hangout Kamu
// Tes ini mengungkap style hangout yang cocok dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Ideal hangout activity...",
    options: [
      { text: "Makan enak di restoran bagus", type: "A" },
      { text: "Deep conversation di coffee shop", type: "B" },
      { text: "Active: sport, hiking, exploring", type: "C" },
      { text: "Chill di rumah: movie, games", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Planning hangout...",
    options: [
      { text: "Detailed itinerary", type: "A" },
      { text: "General plan, flexible execution", type: "B" },
      { text: "Last minute, spontaneous", type: "C" },
      { text: "Others plan, I show up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Energy level during hangout...",
    options: [
      { text: "High energy throughout", type: "A" },
      { text: "Steady, enjoy the moment", type: "B" },
      { text: "Depends on company", type: "C" },
      { text: "Start high, fade towards end", type: "D" },
    ],
  },
  {
    id: 4,
    question: "New place vs familiar spot...",
    options: [
      { text: "Always exploring new places", type: "A" },
      { text: "Mix of both", type: "B" },
      { text: "Familiar spots, comfort", type: "C" },
      { text: "Wherever others want", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Conversation style saat hangout...",
    options: [
      { text: "Lots of topics, energetic chat", type: "A" },
      { text: "Deep, meaningful discussions", type: "B" },
      { text: "Casual, fun banter", type: "C" },
      { text: "Listening mostly", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Documenting hangout...",
    options: [
      { text: "Photos, stories, full coverage", type: "A" },
      { text: "Few nice photos", type: "B" },
      { text: "Live the moment, minimal photos", type: "C" },
      { text: "Others take photos, I'm in them", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dealing dengan awkward silences...",
    options: [
      { text: "Fill with new topics immediately", type: "A" },
      { text: "Comfortable with some silence", type: "B" },
      { text: "Pull out phone, check something", type: "C" },
      { text: "Let others fill the gap", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Extending hangout spontaneously...",
    options: [
      { text: "Yes! The night is young", type: "A" },
      { text: "If the vibe is right", type: "B" },
      { text: "Depends on energy level", type: "C" },
      { text: "Prefer planned end time", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Meeting new people in hangout...",
    options: [
      { text: "Excited to meet new friends!", type: "A" },
      { text: "Open but cautious", type: "B" },
      { text: "Prefer familiar faces", type: "C" },
      { text: "Uncomfortable with strangers", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Post-hangout ritual...",
    options: [
      { text: "Share photos, plan next one", type: "A" },
      { text: "Text saying had good time", type: "B" },
      { text: "Reflect quietly", type: "C" },
      { text: "Recharge alone time", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cancelling plans...",
    options: [
      { text: "Almost never, commitment matters", type: "A" },
      { text: "Rare, only valid reasons", type: "B" },
      { text: "Sometimes, not big deal", type: "C" },
      { text: "Happens often honestly", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Perfect hangout outcome...",
    options: [
      { text: "Epic memories made", type: "A" },
      { text: "Meaningful connection deepened", type: "B" },
      { text: "Good time, stress-free", type: "C" },
      { text: "Survived socially", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Social Energizer",
    emoji: "⚡",
    description: "Kamu bring the energy! Initiator, planner, dan life of the hangout. People gravitate towards your enthusiasm dan spontaneity!",
    traits: ["Energetic", "Initiator", "Social", "Adventurous"],
    strengths: ["Create great memories", "Great at organizing", "Infectious energy"],
    weaknesses: ["Might burn out", "Exhaust quieter friends"],
    tips: ["Match energy to the group", "Rest between social events", "Quality matters too"],
  },
  B: {
    type: "B",
    title: "The Balanced Hanger",
    emoji: "☯️",
    description: "Perfect balance! Enjoy hangouts without overcomplicating. Quality time with quality people. You make everyone comfortable!",
    traits: ["Balanced", "Thoughtful", "Comfortable", "Genuine"],
    strengths: ["Great companion", "Adapt to any hangout", "Meaningful time"],
    weaknesses: ["Could initiate more"],
    tips: ["You're doing great!", "Plan something yourself sometime"],
  },
  C: {
    type: "C",
    title: "The Go-With-Flow Hanger",
    emoji: "🌊",
    description: "Easy-going hangout buddy! No fuss, no pressure, just vibes. You make hangouts stress-free dan enjoyable for everyone!",
    traits: ["Easy-going", "Flexible", "Low-maintenance", "Chill"],
    strengths: ["No drama", "Easy to hang with", "Adaptable"],
    weaknesses: ["Might be too passive", "Less memorable?"],
    tips: ["Take initiative sometimes", "Your chill is valuable though!"],
  },
  D: {
    type: "D",
    title: "The Selective Hanger",
    emoji: "🏠",
    description: "Social energy is limited resource for you! Choose hangouts carefully, need recharge after. Quality of people matters most!",
    traits: ["Selective", "Introverted", "Quality-focused", "Homebody"],
    strengths: ["Value true friendships", "Meaningful when you're there", "Self-aware"],
    weaknesses: ["Might miss out", "Friends might feel rejected"],
    tips: ["Push yourself sometimes", "Your friends want to see you", "Small gatherings count!"],
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
