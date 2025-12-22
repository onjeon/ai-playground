// Gaya Nonton Netflix Kamu
// Tes ini mengungkap personality kamu sebagai Netflix viewer!

export const questions = [
  {
    id: 1,
    question: "Waktu nonton Netflix biasanya...",
    options: [
      { text: "Every night, wind down ritual", type: "A" },
      { text: "Weekends, binge sessions", type: "B" },
      { text: "Background while doing other things", type: "C" },
      { text: "Occasionally, when there's something good", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Memilih apa yang ditonton...",
    options: [
      { text: "30+ menit scrolling, decision paralysis", type: "A" },
      { text: "Have a list/queue ready", type: "B" },
      { text: "Whatever pops up first", type: "C" },
      { text: "Specific show already in mind", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Binge watching habit...",
    options: [
      { text: "Finish series in one sitting", type: "A" },
      { text: "Few episodes per sitting", type: "B" },
      { text: "One episode at a time", type: "C" },
      { text: "Takes weeks untuk finish series", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Genre favorit...",
    options: [
      { text: "Everything! Variety is key", type: "A" },
      { text: "Specific genres I love", type: "B" },
      { text: "Trending/popular shows", type: "C" },
      { text: "Comfort rewatches", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Netflix profiles situation...",
    options: [
      { text: "Multiple profiles, share account", type: "A" },
      { text: "Personal profile, curated algorithm", type: "B" },
      { text: "Whoever's profile, doesn't matter", type: "C" },
      { text: "One profile for everyone", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi saat show favorit ended...",
    options: [
      { text: "Post-show depression, void", type: "A" },
      { text: "Sad tapi move on to next", type: "B" },
      { text: "Immediately find replacement", type: "C" },
      { text: "Not that attached honestly", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Subtitles preference...",
    options: [
      { text: "Always on, even English shows", type: "A" },
      { text: "For foreign language shows", type: "B" },
      { text: "Sometimes", type: "C" },
      { text: "Never, distracting", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Multitasking while watching...",
    options: [
      { text: "Phone scrolling constantly", type: "A" },
      { text: "Full attention untuk good shows", type: "B" },
      { text: "Eat, scroll, casual viewing", type: "C" },
      { text: "Need full focus, no distractions", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Discussing shows dengan orang...",
    options: [
      { text: "Love discussing theories, details", type: "A" },
      { text: "Recommend shows yang bagus", type: "B" },
      { text: "Casual mentions", type: "C" },
      { text: "Watch alone, discuss rarely", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Watching dengan orang lain...",
    options: [
      { text: "Love watch parties!", type: "A" },
      { text: "With partner, cozy", type: "B" },
      { text: "Prefer solo watching", type: "C" },
      { text: "Either way fine", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Continue watching vs new content...",
    options: [
      { text: "Start many, finish few", type: "A" },
      { text: "Finish before starting new", type: "B" },
      { text: "Mood-based switching", type: "C" },
      { text: "Loyal to current show", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Netflix subscription value...",
    options: [
      { text: "Worth every rupiah, use constantly", type: "A" },
      { text: "Good value, regular use", type: "B" },
      { text: "Could use more honestly", type: "C" },
      { text: "Share/borrow account", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Netflix Addict",
    emoji: "📺",
    description: "Netflix adalah life! Binge watch king/queen, know every show, dan 'one more episode' is your mantra. Your algorithm knows you better than you know yourself!",
    traits: ["Dedicated", "Binge-watcher", "Social viewer", "Entertainment-loving"],
    strengths: ["Always have recommendations", "Great watch party host", "Pop culture literacy"],
    weaknesses: ["Sleep? What's that?", "Productivity concerns", "Decision fatigue"],
    tips: ["Set watching limits", "Sleep is important!", "Touch grass between seasons"],
  },
  B: {
    type: "B",
    title: "The Intentional Viewer",
    emoji: "🎬",
    description: "Kamu watch dengan intention! Curated queue, finish what you start, dan appreciate quality content. Healthy Netflix relationship!",
    traits: ["Intentional", "Organized", "Quality-focused", "Moderate"],
    strengths: ["Meaningful watching", "Good recommendations", "Balanced consumption"],
    weaknesses: ["Might miss trending shows"],
    tips: ["Sometimes mindless watching is okay too", "You're doing great!"],
  },
  C: {
    type: "C",
    title: "The Background Watcher",
    emoji: "🔊",
    description: "Netflix adalah background untuk life! On while eating, cleaning, scrolling. Casual consumption, tidak terlalu invested. Multitasking champion!",
    traits: ["Casual", "Multitasker", "Unfocused", "Easy-going"],
    strengths: ["Not addicted", "Get other things done", "Relaxed viewing"],
    weaknesses: ["Miss plot points", "Not fully enjoying content"],
    tips: ["Try focused watching sometimes", "Some shows deserve full attention", "Quality > quantity"],
  },
  D: {
    type: "D",
    title: "The Occasional Streamer",
    emoji: "👀",
    description: "Netflix is just one option! Watch occasionally, not dependent, dan have other entertainment sources. Balanced media diet!",
    traits: ["Casual", "Balanced", "Selective", "Independent"],
    strengths: ["Not addicted", "Diverse entertainment", "Save money maybe"],
    weaknesses: ["Out of loop on shows", "Miss cultural moments"],
    tips: ["Some shows are worth the hype", "Stay updated occasionally", "But your balance is healthy"],
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
