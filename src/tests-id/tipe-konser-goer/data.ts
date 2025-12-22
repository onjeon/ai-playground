// Tipe Kamu Saat Nonton Konser
// Tes ini mengungkap personality kamu sebagai concert goer!

export const questions = [
  {
    id: 1,
    question: "Posisi di venue konser favorit...",
    options: [
      { text: "Festival standing, front row warrior", type: "A" },
      { text: "VIP/seated, comfortable view", type: "B" },
      { text: "Anywhere dengan friends", type: "C" },
      { text: "Back area, space dan overview", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pre-concert preparation...",
    options: [
      { text: "War tiket H-1, prepare dari minggu sebelum", type: "A" },
      { text: "Book tiket, plan outfit dan transport", type: "B" },
      { text: "Spontan, ikut temen yang ajak", type: "C" },
      { text: "Minimal prep, show up aja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Di konser, kamu biasanya...",
    options: [
      { text: "Singing dan dancing all night!", type: "A" },
      { text: "Enjoying performance, moderate dancing", type: "B" },
      { text: "Vibing sama crowd", type: "C" },
      { text: "Standing, watching, absorbing", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Recording/taking photos...",
    options: [
      { text: "Record favorite songs", type: "A" },
      { text: "Few photos, mostly enjoy live", type: "B" },
      { text: "For memories sama temen", type: "C" },
      { text: "Minimal, fokus experience", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Merchandise situation...",
    options: [
      { text: "Must buy! Official merch collector", type: "A" },
      { text: "Something special kalau worth it", type: "B" },
      { text: "Tergantung design dan budget", type: "C" },
      { text: "Skip, not into merch", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Knowing the songs...",
    options: [
      { text: "All lyrics memorized!", type: "A" },
      { text: "Hits dan favorites", type: "B" },
      { text: "Know some, discover the rest", type: "C" },
      { text: "There for the experience, not specific fan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "When setlist ga sesuai harapan...",
    options: [
      { text: "Disappointed tapi still enjoy", type: "A" },
      { text: "Appreciate variety", type: "B" },
      { text: "Go with flow", type: "C" },
      { text: "Didn't have expectations anyway", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Post-concert ritual...",
    options: [
      { text: "Post everything ke socmed", type: "A" },
      { text: "Discuss highlights sama temen", type: "B" },
      { text: "Makan bareng, reminisce", type: "C" },
      { text: "Head home, process experience", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Budget for concerts...",
    options: [
      { text: "Save up for dream concerts, no limit", type: "A" },
      { text: "Reasonable, select shows carefully", type: "B" },
      { text: "Budget-friendly options preferred", type: "C" },
      { text: "Free atau cheap tickets only", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Going to concerts alone...",
    options: [
      { text: "Done it, no regrets!", type: "A" },
      { text: "Would consider for right show", type: "B" },
      { text: "Prefer dengan friends", type: "C" },
      { text: "Never, not fun alone", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Type of concerts you attend...",
    options: [
      { text: "Specific artist I love", type: "A" },
      { text: "Mix of different genres", type: "B" },
      { text: "Whatever friends are going to", type: "C" },
      { text: "Big festivals, variety", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Concert fatigue after...",
    options: [
      { text: "Worth it! Best experience", type: "A" },
      { text: "Tired but happy", type: "B" },
      { text: "Fun tapi need recovery", type: "C" },
      { text: "Exhausting honestly", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Diehard Fan",
    emoji: "🎤",
    description: "Konser adalah life! You're there for the artist, know every song, dan live for these moments. True fan who makes concerts worth it for performers!",
    traits: ["Passionate", "Dedicated", "Energetic", "Loyal"],
    strengths: ["Best concert energy", "Amazing experience", "Worth every penny"],
    weaknesses: ["Expensive hobby", "Post-concert depression real", "Might be obsessive"],
    tips: ["Take care of yourself at concerts", "Hydrate!", "It's okay to rest between shows"],
  },
  B: {
    type: "B",
    title: "The Concert Appreciator",
    emoji: "🎵",
    description: "Kamu appreciate live music dengan balance! Select shows carefully, enjoy fully, dan have great experiences. Healthy concert relationship!",
    traits: ["Appreciative", "Selective", "Balanced", "Enjoyable"],
    strengths: ["Quality over quantity", "Meaningful experiences", "Sustainable hobby"],
    weaknesses: ["Might miss some great shows"],
    tips: ["Sometimes spontaneous concerts are best", "You're doing great!"],
  },
  C: {
    type: "C",
    title: "The Social Concert Goer",
    emoji: "👯",
    description: "Concerts are about experience dengan friends! The music is backdrop, bonding is the point. Great memories with great people!",
    traits: ["Social", "Flexible", "Fun-loving", "Group-oriented"],
    strengths: ["Shared memories", "Easy-going", "Fun concert buddy"],
    weaknesses: ["Might not appreciate music fully", "Dependent on others"],
    tips: ["Try going for music you love too", "Solo concert bisa insightful"],
  },
  D: {
    type: "D",
    title: "The Casual Observer",
    emoji: "👀",
    description: "Concerts are nice tapi not your main thing! Enjoy occasionally, appreciate from comfortable distance. Low-pressure concert experience.",
    traits: ["Casual", "Relaxed", "Observer", "Low-maintenance"],
    strengths: ["No pressure", "Save money", "Enjoy without obsession"],
    weaknesses: ["Miss the full experience", "Could be more engaged"],
    tips: ["Find artist you really connect with", "Front row changes experience", "Give it a real try!"],
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
