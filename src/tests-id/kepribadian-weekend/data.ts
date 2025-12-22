// Kepribadian Weekend Kamu
// Tes ini mengungkap bagaimana kamu spend weekend!

export const questions = [
  {
    id: 1,
    question: "Wake up time di weekend...",
    options: [
      { text: "Same as weekday, body clock", type: "A" },
      { text: "Slightly later, 8-9am", type: "B" },
      { text: "Sleep in, 10-11am", type: "C" },
      { text: "Afternoon, who's counting", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saturday morning ideal...",
    options: [
      { text: "Workout atau productive activity", type: "A" },
      { text: "Lazy breakfast, slow start", type: "B" },
      { text: "Catch up on sleep", type: "C" },
      { text: "Whatever happens", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Weekend planning style...",
    options: [
      { text: "Planned activities dan agenda", type: "A" },
      { text: "General ideas, flexible", type: "B" },
      { text: "No plans, see what happens", type: "C" },
      { text: "Plans made by others, I follow", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Social vs solo weekend...",
    options: [
      { text: "Packed social calendar", type: "A" },
      { text: "Mix of both", type: "B" },
      { text: "Prefer solo/small group", type: "C" },
      { text: "Depends on week's exhaustion", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Productivity on weekends...",
    options: [
      { text: "Get things done: chores, errands", type: "A" },
      { text: "Some productivity, some rest", type: "B" },
      { text: "Minimal, it's REST day", type: "C" },
      { text: "Productive guilt vs mager reality", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Weekend meals...",
    options: [
      { text: "Nice meals out, treat yourself", type: "A" },
      { text: "Mix of home cook dan eat out", type: "B" },
      { text: "Delivery/takeout", type: "C" },
      { text: "Whatever's easy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sunday evening feeling...",
    options: [
      { text: "Ready for the week!", type: "A" },
      { text: "Okay, week can begin", type: "B" },
      { text: "Sunday scaries starting", type: "C" },
      { text: "Denial, weekend isn't over", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Weekend screen time...",
    options: [
      { text: "Less than weekday, active things", type: "A" },
      { text: "Similar, balanced", type: "B" },
      { text: "More, binge watching", type: "C" },
      { text: "Maximum, no guilt", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Going out vs staying in...",
    options: [
      { text: "Out most of weekend", type: "A" },
      { text: "One day out, one day in", type: "B" },
      { text: "Mostly in, occasional outing", type: "C" },
      { text: "Full homebody mode", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Weekend exercise...",
    options: [
      { text: "Gym/sport, active lifestyle", type: "A" },
      { text: "Light activity, walk maybe", type: "B" },
      { text: "Only if I feel like it", type: "C" },
      { text: "Rest day = NO exercise", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Weekend prep for week ahead...",
    options: [
      { text: "Meal prep, plan week, organize", type: "A" },
      { text: "Some prep Sunday evening", type: "B" },
      { text: "Minimal, wing it", type: "C" },
      { text: "Future me problem", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ideal weekend summary...",
    options: [
      { text: "Productive AND fun", type: "A" },
      { text: "Balanced rest dan activity", type: "B" },
      { text: "Maximum relaxation achieved", type: "C" },
      { text: "Time passed somehow", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Active Weekender",
    emoji: "🌟",
    description: "Weekend adalah extension of productive life! Stay active, social, dan make the most of time off. You live life to the fullest!",
    traits: ["Active", "Productive", "Social", "Energetic"],
    strengths: ["Make the most of weekends", "Great social life", "No wasted time"],
    weaknesses: ["Might not truly rest", "Burnout risk"],
    tips: ["Rest is productive too", "One slow morning won't hurt", "Recovery matters!"],
  },
  B: {
    type: "B",
    title: "The Balanced Weekender",
    emoji: "⚖️",
    description: "Perfect weekend balance! Mix of activity dan rest, social dan solo. Recharge while still enjoying life. Ideal weekend mastery!",
    traits: ["Balanced", "Flexible", "Healthy", "Moderate"],
    strengths: ["Actual work-life balance", "Recharged for week", "Enjoy without guilt"],
    weaknesses: ["Could push either direction more"],
    tips: ["You've figured it out!", "Share your secrets with stressed friends"],
  },
  C: {
    type: "C",
    title: "The Chill Weekender",
    emoji: "😌",
    description: "Weekend untuk REST! Sleep in, minimal plans, dan recharge fully. You understand that weekends exist for recovery. Self-care queen/king!",
    traits: ["Restful", "Self-care focused", "Homebody", "Recovery mode"],
    strengths: ["Actually rested by Monday", "Good self-care", "Know your needs"],
    weaknesses: ["Might miss experiences", "Could be more active"],
    tips: ["Some activity can energize too", "Balance rest dengan light fun", "You're doing self-care right!"],
  },
  D: {
    type: "D",
    title: "The Drifting Weekender",
    emoji: "🌊",
    description: "Weekends just happen! No structure, time flows, dan Monday arrives somehow. Maximum go-with-flow energy!",
    traits: ["Unstructured", "Spontaneous", "No-agenda", "Free-flowing"],
    strengths: ["Zero stress weekends", "Truly free time", "No pressure"],
    weaknesses: ["Weekend disappears", "Might feel unaccomplished"],
    tips: ["One intentional plan could help", "Still enjoy spontaneity!", "Maybe set one goal per weekend"],
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
