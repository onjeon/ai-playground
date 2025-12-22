// Jenis Penonton Movie
// Test viral tentang movie watching style

export const questions = [
  {
    id: 1,
    question: "Movie kat mana kau prefer?",
    options: [
      { text: "Cinema! Full experience!", type: "A" },
      { text: "Home streaming, comfortable", type: "B" },
      { text: "Anywhere, laptop pun jadi", type: "C" },
      { text: "Tak tengok movie sangat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre favorite kau?",
    options: [
      { text: "Action dan superhero!", type: "A" },
      { text: "Romance dan drama", type: "B" },
      { text: "Horror dan thriller", type: "C" },
      { text: "Comedy dan feel-good", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Snacks masa movie?",
    options: [
      { text: "Full combo - popcorn, drink, nachos!", type: "A" },
      { text: "Popcorn je standard", type: "B" },
      { text: "Sneak in own snacks", type: "C" },
      { text: "Tak makan, focus movie", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila tengok dengan kawan...",
    options: [
      { text: "Comment and discuss throughout!", type: "A" },
      { text: "Whisper sikit-sikit je", type: "B" },
      { text: "Full silence, tengok properly", type: "C" },
      { text: "Prefer tengok solo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Spoiler tolerance kau?",
    options: [
      { text: "ZERO! Block semua yang spoil!", type: "A" },
      { text: "Minor spoilers okay", type: "B" },
      { text: "Spoiler me, I don't care", type: "C" },
      { text: "Sometimes cari spoiler sendiri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Post-credit scene, kau...",
    options: [
      { text: "Wait sampai habis! Tak miss!", type: "A" },
      { text: "Tengok kalau ada je", type: "B" },
      { text: "Leave bila credits start", type: "C" },
      { text: "Google je later", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Rating movie lepas tengok?",
    options: [
      { text: "Post review kat letterboxd/socmed!", type: "A" },
      { text: "Tell friends if good", type: "B" },
      { text: "Keep opinion to myself", type: "C" },
      { text: "Forget movie existed", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Rewatch favourite movie, berapa kali?",
    options: [
      { text: "Countless times! Never bored!", type: "A" },
      { text: "Few times je", type: "B" },
      { text: "Once cukup, new movies waiting", type: "C" },
      { text: "Tak rewatch, one and done", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Subtitles on atau off?",
    options: [
      { text: "Always on! Even English movies!", type: "A" },
      { text: "For foreign films only", type: "B" },
      { text: "Off, distracting", type: "C" },
      { text: "Depends on mood", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Malaysian movies, tengok tak?",
    options: [
      { text: "Support local! Tengok semua!", type: "A" },
      { text: "Selected ones yang good", type: "B" },
      { text: "Rarely, prefer Hollywood", type: "C" },
      { text: "Tak pernah", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Movie Buff",
    emoji: "🎬",
    description: "Kau serious movie lover! Know all films, follow releases, appreciate cinema as art. Probably has letterboxd account!",
    traits: ["Cinephile", "Passionate", "Knowledgeable", "Enthusiastic"],
    strengths: ["Great movie recommendations", "Appreciate good cinema", "Deep analysis"],
    weaknesses: ["Maybe too critical", "Hard to please"],
    tips: ["Sometimes just enjoy without analyzing", "Not every movie needs rating!"],
  },
  B: {
    type: "B",
    title: "Casual Viewer",
    emoji: "🍿",
    description: "Kau enjoy movies dengan casual! Watch what's popular, enjoy with friends, no deep analysis needed. Fun vibes only!",
    traits: ["Casual", "Social", "Fun", "Easy-going"],
    strengths: ["Enjoy entertainment", "No pretense", "Good company"],
    weaknesses: ["Might miss good films", "Follow mainstream only"],
    tips: ["Try indie films sometime", "Hidden gems await!"],
  },
  C: {
    type: "C",
    title: "Selective Watcher",
    emoji: "🎯",
    description: "Kau pilih-pilih dengan movies! Only watch what interests you, quality over quantity. Time is precious!",
    traits: ["Selective", "Quality-focused", "Particular", "Efficient"],
    strengths: ["Don't waste time on bad movies", "Good taste", "Efficient viewing"],
    weaknesses: ["Miss some good ones", "Too picky"],
    tips: ["Sometimes surprise yourself", "Try new genres!"],
  },
  D: {
    type: "D",
    title: "Occasional Viewer",
    emoji: "📱",
    description: "Movies bukan priority kau! Watch bila bored atau friends ajak. Other entertainment more interesting!",
    traits: ["Casual", "Other interests", "Occasional", "Flexible"],
    strengths: ["Diverse interests", "Not dependent on movies", "Flexible"],
    weaknesses: ["Miss cultural moments", "Out of loop"],
    tips: ["Good movies can change perspective", "Give them a chance!"],
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
