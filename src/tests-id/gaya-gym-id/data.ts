// Gaya Kamu di Gym
// Tes ini mengungkap personality kamu sebagai gym goer!

export const questions = [
  {
    id: 1,
    question: "Waktu favorit ke gym...",
    options: [
      { text: "Pagi before work, discipline!", type: "A" },
      { text: "Sore/after work, release stress", type: "B" },
      { text: "Whenever ada waktu", type: "C" },
      { text: "Late night, sepi prefer", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Workout routine kamu...",
    options: [
      { text: "Strict program, track everything", type: "A" },
      { text: "General plan, flexible execution", type: "B" },
      { text: "Whatever feels right hari itu", type: "C" },
      { text: "Classes atau guided workouts", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gym outfit situation...",
    options: [
      { text: "Matching sets, look good feel good", type: "A" },
      { text: "Functional, comfortable", type: "B" },
      { text: "Whatever is clean", type: "C" },
      { text: "Statement pieces, express myself", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Socializing di gym...",
    options: [
      { text: "Focused, minimal chat", type: "A" },
      { text: "Friendly dengan regulars", type: "B" },
      { text: "Open to conversation", type: "C" },
      { text: "Part of the fun!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Music saat workout...",
    options: [
      { text: "Curated workout playlist, must have", type: "A" },
      { text: "Whatever gym plays is fine", type: "B" },
      { text: "Podcast kadang", type: "C" },
      { text: "No headphones, zone out", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Progress tracking...",
    options: [
      { text: "App, notes, measurements, photos", type: "A" },
      { text: "General awareness of progress", type: "B" },
      { text: "How I feel is enough", type: "C" },
      { text: "Don't track, just show up", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau gym rame banget...",
    options: [
      { text: "Adjust workout, stay efficient", type: "A" },
      { text: "Wait patiently atau share equipment", type: "B" },
      { text: "Do what's available", type: "C" },
      { text: "Leave dan come back later", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Post-workout ritual...",
    options: [
      { text: "Protein shake immediately", type: "A" },
      { text: "Stretching, cool down proper", type: "B" },
      { text: "Straight home, shower", type: "C" },
      { text: "Sauna atau chill area", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Motivation untuk gym...",
    options: [
      { text: "Physical goals, gains", type: "A" },
      { text: "Health dan longevity", type: "B" },
      { text: "Mental health, stress relief", type: "C" },
      { text: "Social, routine, habit", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Gym equipment preference...",
    options: [
      { text: "Free weights, compound movements", type: "A" },
      { text: "Mix machines dan free weights", type: "B" },
      { text: "Machines, safe dan easy", type: "C" },
      { text: "Cardio focused", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Gym knowledge level...",
    options: [
      { text: "Research everything, technique matters", type: "A" },
      { text: "Know enough untuk safe workout", type: "B" },
      { text: "Learning as I go", type: "C" },
      { text: "Basic, follow what I see", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Skipping gym reaksi...",
    options: [
      { text: "Guilty, make up session", type: "A" },
      { text: "Rest day needed sometimes", type: "B" },
      { text: "Life happens, no stress", type: "C" },
      { text: "Skipping often honestly", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Dedicated Athlete",
    emoji: "🏋️",
    description: "Gym adalah second home! Strict routine, track progress, dan committed to gains. You inspire others dengan dedication-mu!",
    traits: ["Disciplined", "Goal-oriented", "Dedicated", "Knowledgeable"],
    strengths: ["Consistent progress", "Great physique/health", "Inspiring others"],
    weaknesses: ["Might be too intense", "Rest is important too", "Balance needed"],
    tips: ["Rest days are productive", "Enjoy the journey not just destination", "Flexibility is okay"],
  },
  B: {
    type: "B",
    title: "The Balanced Fitness Enthusiast",
    emoji: "💪",
    description: "Kamu gym dengan healthy balance! Consistent effort, reasonable goals, dan enjoy the process. Sustainable fitness lifestyle!",
    traits: ["Balanced", "Consistent", "Healthy", "Sustainable"],
    strengths: ["Long-term results", "Good relationship with fitness", "Maintainable"],
    weaknesses: ["Could push harder sometimes?"],
    tips: ["You're doing great!", "Try new challenges occasionally"],
  },
  C: {
    type: "C",
    title: "The Casual Gym Goer",
    emoji: "🧘",
    description: "Gym adalah part of life, not life itself! Show up when you can, do what feels good. No pressure, just movement!",
    traits: ["Flexible", "Low-pressure", "Intuitive", "Casual"],
    strengths: ["No gym anxiety", "Enjoy workouts", "Balanced life"],
    weaknesses: ["Inconsistent results", "Could be more structured"],
    tips: ["Some structure helps progress", "Set small goals", "Consistency pays off"],
  },
  D: {
    type: "D",
    title: "The Social/Reluctant Gym Member",
    emoji: "🏃",
    description: "Gym is... complicated! Maybe there for social, classes, atau trying to build habit. Still figuring out your gym identity!",
    traits: ["Social", "Exploring", "Uncertain", "Trying"],
    strengths: ["Open to experience", "Humble learner", "Social connections"],
    weaknesses: ["Inconsistent", "Might not enjoy solo workouts"],
    tips: ["Find what you actually enjoy", "Group classes might be your thing", "Exercise doesn't have to be gym"],
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
