// Gaya Lagu Melayu Anda
// Lagu Melayu jenis apa yang anda?

export const questions = [
  {
    id: 1,
    question: "Era lagu Melayu favorite anda?",
    options: [
      { text: "P. Ramlee era - classics forever!", type: "A" },
      { text: "90s/2000s - golden era!", type: "B" },
      { text: "Modern hits - current vibes", type: "C" },
      { text: "Semua era, good music is good music", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre lagu Melayu yang anda suka?",
    options: [
      { text: "Ballads - emotional dan mendalam", type: "A" },
      { text: "Pop upbeat - catchy dan fun", type: "B" },
      { text: "Rock - power dan energy", type: "C" },
      { text: "Mix semua - mood dependent", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila dengar lagu Melayu sedih...",
    options: [
      { text: "Nangis terus, emotional!", type: "A" },
      { text: "Feel the lyrics dalam hati", type: "B" },
      { text: "Appreciate the music", type: "C" },
      { text: "Skip, prefer happy songs", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lagu Melayu karaoke wajib anda?",
    options: [
      { text: "Evergreen classics yang semua tahu", type: "A" },
      { text: "90s/2000s hits - nostalgia!", type: "B" },
      { text: "Current chart-toppers", type: "C" },
      { text: "Deep cuts yang rare", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Artis Melayu inspiration anda?",
    options: [
      { text: "Legends - Siti, Sheila, Jamal", type: "A" },
      { text: "Versatile performers", type: "B" },
      { text: "New generation artists", type: "C" },
      { text: "Underground/indie artists", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila lagu Melayu viral...",
    options: [
      { text: "Dengar dan share everywhere!", type: "A" },
      { text: "Check out bila ada masa", type: "B" },
      { text: "Dengar sekali dua", type: "C" },
      { text: "Avoid bila too mainstream", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lyrics lagu Melayu yang anda appreciate?",
    options: [
      { text: "Puitis dan mendalam", type: "A" },
      { text: "Relatable dan real", type: "B" },
      { text: "Catchy dan fun", type: "C" },
      { text: "Meaningful dan thought-provoking", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Lagu Melayu untuk road trip?",
    options: [
      { text: "Slow classics untuk enjoy scenery", type: "A" },
      { text: "Upbeat untuk stay awake!", type: "B" },
      { text: "Rock anthems untuk energy", type: "C" },
      { text: "Playlist campur semua", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Anugerah musik, anda support siapa?",
    options: [
      { text: "Veterans yang consistent", type: "A" },
      { text: "Popular choices", type: "B" },
      { text: "New fresh talents", type: "C" },
      { text: "Underrated artists", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Lagu Melayu means apa untuk anda?",
    options: [
      { text: "Connection dengan heritage", type: "A" },
      { text: "Memories dan nostalgia", type: "B" },
      { text: "Current entertainment", type: "C" },
      { text: "Art dan expression", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Lagu Evergreen",
    emoji: "🌿",
    description: "Classic soul! Anda appreciate lagu-lagu timeless yang tak pernah pudar. Deep connection dengan heritage muzik Melayu. Vintage vibes!",
    traits: ["Traditional", "Sentimental", "Deep", "Appreciative"],
    strengths: ["Appreciates quality", "Emotional connection", "Heritage keeper"],
    weaknesses: ["May miss new talents", "Stuck in past"],
    tips: ["Explore new music too!", "Share classics dengan younger generation"],
  },
  B: {
    type: "B",
    title: "Lagu Nostalgia",
    emoji: "📀",
    description: "90s/2000s golden era adalah your thing! Memories attached to every song. That era hits different!",
    traits: ["Nostalgic", "Sentimental", "Fun", "Social"],
    strengths: ["Great karaoke partner", "Shared memories", "Good times vibes"],
    weaknesses: ["Stuck in comfort zone", "May not explore new"],
    tips: ["New music can create new memories!", "Share your playlists"],
  },
  C: {
    type: "C",
    title: "Lagu Trending",
    emoji: "📈",
    description: "Current hits adalah playlist anda! Always updated dengan latest charts. Trendy dan in-the-know!",
    traits: ["Current", "Trendy", "Social", "Updated"],
    strengths: ["Always relevant", "Knows what's hot"],
    weaknesses: ["May miss classics", "FOMO driven"],
    tips: ["Explore older music too!", "Classics are classic for a reason"],
  },
  D: {
    type: "D",
    title: "Lagu Indie",
    emoji: "🎸",
    description: "Anda dig deeper! Appreciate underground talents dan hidden gems. Music connoisseur dengan refined taste!",
    traits: ["Eclectic", "Open-minded", "Artistic", "Unique"],
    strengths: ["Discovers gems", "Supports underrated artists"],
    weaknesses: ["May be too niche", "Elitist sometimes"],
    tips: ["Mainstream has good stuff too!", "Share your discoveries"],
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
