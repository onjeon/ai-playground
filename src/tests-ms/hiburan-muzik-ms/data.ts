// Taste Muzik Kau
// Test viral tentang music taste personality

export const questions = [
  {
    id: 1,
    question: "Genre muzik utama kau?",
    options: [
      { text: "Pop dan mainstream hits!", type: "A" },
      { text: "K-pop dan Asian music!", type: "B" },
      { text: "Hip-hop, R&B, rap!", type: "C" },
      { text: "Indie, alternative, niche!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "How do you discover new music?",
    options: [
      { text: "TikTok dan viral sounds!", type: "A" },
      { text: "Spotify recommendations", type: "B" },
      { text: "Friends' recommendations", type: "C" },
      { text: "Deep dive research sendiri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Playlist kau macam mana?",
    options: [
      { text: "Thousands of songs, semua jenis!", type: "A" },
      { text: "Curated by mood/activity", type: "B" },
      { text: "Few playlists, focused", type: "C" },
      { text: "Listen to albums, not playlists", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lagu hits viral, kau...",
    options: [
      { text: "Add to playlist immediately!", type: "A" },
      { text: "Listen if actually good", type: "B" },
      { text: "Already bored of it", type: "C" },
      { text: "Purposely avoid viral songs", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Music streaming kau guna apa?",
    options: [
      { text: "Spotify Premium all the way!", type: "A" },
      { text: "Apple Music atau YouTube Music", type: "B" },
      { text: "Free version cukup", type: "C" },
      { text: "Download/own music", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Share music dengan kawan?",
    options: [
      { text: "Always! 'Kau kena dengar ni!'", type: "A" },
      { text: "Sometimes bila lagu best", type: "B" },
      { text: "Jarang, my taste is different", type: "C" },
      { text: "Music is personal, tak share", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lyrics penting tak untuk kau?",
    options: [
      { text: "Very! Must understand meaning!", type: "A" },
      { text: "Sometimes, depends on song", type: "B" },
      { text: "Beat and melody more important", type: "C" },
      { text: "Analyze every lyric deeply", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Old songs vs new releases?",
    options: [
      { text: "New releases! Keep updated!", type: "A" },
      { text: "Mix of both", type: "B" },
      { text: "Oldies are goldies!", type: "C" },
      { text: "Timeless classics over trends", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Music while doing tasks?",
    options: [
      { text: "24/7! Always have music on!", type: "A" },
      { text: "Often, helps focus", type: "B" },
      { text: "Sometimes, depends on task", type: "C" },
      { text: "Prefer silence, music distracts", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Favorite artist's new release...",
    options: [
      { text: "Listen midnight release!", type: "A" },
      { text: "Next day, excited!", type: "B" },
      { text: "When I have time", type: "C" },
      { text: "No particular favorite artist", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mainstream Maven",
    emoji: "🎵",
    description: "Kau tahu semua hits! Playlist full of bangers, always know what's trending. The life of any playlist share!",
    traits: ["Trendy", "Social", "Updated", "Pop-oriented"],
    strengths: ["Know what's popular", "Great for parties", "Always have something to play"],
    weaknesses: ["Might miss niche gems", "Basic taste?"],
    tips: ["Explore beyond charts", "Hidden gems await!"],
  },
  B: {
    type: "B",
    title: "Balanced Listener",
    emoji: "🎧",
    description: "Kau punya balanced music taste! Open to genres, curate playlists well, appreciate both popular and niche!",
    traits: ["Balanced", "Open-minded", "Curated", "Appreciative"],
    strengths: ["Diverse taste", "Good playlists", "Open to suggestions"],
    weaknesses: ["Jack of all, master of none?", "No strong identity"],
    tips: ["Deep dive into one genre", "Find your signature sound!"],
  },
  C: {
    type: "C",
    title: "Vibe Chaser",
    emoji: "🌊",
    description: "Music for you is about the FEEL! Don't care about trends, just what sounds good to you. Authentic listener!",
    traits: ["Authentic", "Feeling-based", "Independent", "Selective"],
    strengths: ["True to self", "Not influenced by trends", "Strong preferences"],
    weaknesses: ["Might be out of loop", "Hard to relate music-wise"],
    tips: ["Share your finds", "Your taste is valid!"],
  },
  D: {
    type: "D",
    title: "Music Snob",
    emoji: "🎼",
    description: "Kau deep into music! Know obscure artists, appreciate artistry, mainstream is too basic. The connoisseur!",
    traits: ["Knowledgeable", "Selective", "Deep", "Artistic"],
    strengths: ["Deep appreciation", "Unique finds", "Musical knowledge"],
    weaknesses: ["Maybe too elitist?", "Hard to enjoy casually"],
    tips: ["Sometimes basic is okay", "Music is for fun too!"],
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
