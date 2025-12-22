// Kepribadian dari Playlist Spotify
// Tes ini mengungkap kepribadianmu berdasarkan kebiasaan Spotify!

export const questions = [
  {
    id: 1,
    question: "Playlist organization kamu...",
    options: [
      { text: "Curated playlists untuk setiap mood", type: "A" },
      { text: "Beberapa main playlists, organized", type: "B" },
      { text: "Liked songs dump, shuffle aja", type: "C" },
      { text: "Rely on Spotify's made for you", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Discover new music biasanya lewat...",
    options: [
      { text: "Deep dive artist discographies", type: "A" },
      { text: "Release Radar dan Discover Weekly", type: "B" },
      { text: "Friend recommendations", type: "C" },
      { text: "Viral TikTok songs", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Repeat song behavior...",
    options: [
      { text: "Loop satu lagu sampai bosen", type: "A" },
      { text: "Add to playlist, rotate fairly", type: "B" },
      { text: "Listen few times, move on", type: "C" },
      { text: "Rarely repeat, always new", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Spotify Wrapped reaction...",
    options: [
      { text: "Share everything proudly!", type: "A" },
      { text: "Interesting insights, share some", type: "B" },
      { text: "Check privately, maybe share", type: "C" },
      { text: "Don't care much", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Genre preferences...",
    options: [
      { text: "Deep dalam satu genre", type: "A" },
      { text: "Few favorite genres", type: "B" },
      { text: "Eclectic mix of everything", type: "C" },
      { text: "Whatever is popular", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Podcast listening...",
    options: [
      { text: "Dedicated podcast time", type: "A" },
      { text: "Sometimes, mix dengan music", type: "B" },
      { text: "Rarely", type: "C" },
      { text: "Music only", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat driving atau commute...",
    options: [
      { text: "Road trip playlist ready!", type: "A" },
      { text: "Mood-based selection", type: "B" },
      { text: "Shuffle liked songs", type: "C" },
      { text: "Radio atau random", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sharing music dengan orang...",
    options: [
      { text: "Love sharing, collaborative playlists", type: "A" },
      { text: "Share songs yang fit their taste", type: "B" },
      { text: "Send songs randomly", type: "C" },
      { text: "Keep music taste private", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Lirik lagu...",
    options: [
      { text: "Read dan analyze lyrics", type: "A" },
      { text: "Pay attention to good lyrics", type: "B" },
      { text: "Sing along what I know", type: "C" },
      { text: "Vibes > lyrics", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Old songs vs new releases...",
    options: [
      { text: "Mix both, music is timeless", type: "A" },
      { text: "Slightly prefer classics", type: "B" },
      { text: "Mostly new releases", type: "C" },
      { text: "Nostalgia hits different", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Music saat kerja/belajar...",
    options: [
      { text: "Focus playlists, instrumental", type: "A" },
      { text: "Familiar songs, background", type: "B" },
      { text: "Energetic music, boost productivity", type: "C" },
      { text: "Silence preferred", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Premium vs Free Spotify...",
    options: [
      { text: "Premium, worth every rupiah", type: "A" },
      { text: "Premium, convenience matters", type: "B" },
      { text: "Free works fine", type: "C" },
      { text: "Don't use Spotify much anyway", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Music Curator",
    emoji: "🎧",
    description: "Music adalah seni for you! Curated playlists, deep knowledge, dan music taste is identity. You're the friend everyone asks for recommendations!",
    traits: ["Passionate", "Organized", "Knowledgeable", "Curator"],
    strengths: ["Great recommendations", "Perfect playlists", "Music exploration"],
    weaknesses: ["Maybe too intense about music?", "Judgy about others' taste?"],
    tips: ["All music taste is valid", "Share without judging", "It's okay to like mainstream too"],
  },
  B: {
    type: "B",
    title: "The Balanced Listener",
    emoji: "🎵",
    description: "Kamu appreciate music dengan healthy balance! Good taste, organized enough, dan enjoy without obsessing. Ideal music relationship!",
    traits: ["Balanced", "Appreciative", "Moderate", "Enjoyable"],
    strengths: ["Good relationship with music", "Enjoy variety", "Adaptable taste"],
    weaknesses: ["Could explore more maybe"],
    tips: ["You're doing great!", "Maybe try deep dive sometimes"],
  },
  C: {
    type: "C",
    title: "The Mood Listener",
    emoji: "🎶",
    description: "Music flows dengan life! Shuffle mode, viral songs, dan whatever feels right. Music is background to life, not life itself. Chill!",
    traits: ["Relaxed", "Spontaneous", "Social", "Trendy"],
    strengths: ["No stress about music", "Current with trends", "Easy-going"],
    weaknesses: ["Miss deeper music experiences", "Dependent on algorithm"],
    tips: ["Try curating a playlist", "Explore an artist's full album", "Intentional listening can be rewarding"],
  },
  D: {
    type: "D",
    title: "The Passive Listener",
    emoji: "🔇",
    description: "Music is not central to your life! Background noise when needed, tidak terlalu invested. Perfectly valid - there's more to life than playlists!",
    traits: ["Casual", "Independent", "Other interests", "Low-maintenance"],
    strengths: ["Not dependent on music", "Focus on other things", "Save on subscriptions"],
    weaknesses: ["Miss the joy of music", "Might seem out of touch"],
    tips: ["Music can enhance experiences", "Find genre yang clicks", "It's never too late to start"],
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
