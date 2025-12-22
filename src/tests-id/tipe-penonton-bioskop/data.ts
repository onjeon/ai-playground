// Tipe Kamu di Bioskop
// Tes ini mengungkap personality kamu saat nonton bioskop!

export const questions = [
  {
    id: 1,
    question: "Waktu arrival ke bioskop...",
    options: [
      { text: "30+ menit sebelum, pilih kursi, beli snacks", type: "A" },
      { text: "Pas trailers mulai, timing perfect", type: "B" },
      { text: "Last minute, masuk pas film mulai", type: "C" },
      { text: "Flexible, depends on mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Posisi kursi favorit...",
    options: [
      { text: "Tengah-tengah, premium experience", type: "A" },
      { text: "Agak belakang, overview bagus", type: "B" },
      { text: "Di mana aja yang available", type: "C" },
      { text: "Pinggir, easy exit", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Snacks situation...",
    options: [
      { text: "Full combo: popcorn, drink, nachos", type: "A" },
      { text: "Popcorn dan drink basic", type: "B" },
      { text: "Selundup snacks dari luar", type: "C" },
      { text: "Skip snacks, fokus film", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Genre film favorit untuk bioskop...",
    options: [
      { text: "Blockbuster action/superhero", type: "A" },
      { text: "Drama/thriller yang deep", type: "B" },
      { text: "Comedy sama temen", type: "C" },
      { text: "Horror untuk experience", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nonton bioskop biasanya sama...",
    options: [
      { text: "Geng besar, ramai-ramai", type: "A" },
      { text: "Sama pacar/date", type: "B" },
      { text: "Bestie atau small group", type: "C" },
      { text: "Solo, me time", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi during film...",
    options: [
      { text: "Loud reactions, ketawa/kaget", type: "A" },
      { text: "Internal reactions, absorbed", type: "B" },
      { text: "Comment ke teman sebelah", type: "C" },
      { text: "Silent focus, immersed", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat ada orang berisik di bioskop...",
    options: [
      { text: "Shush them atau minta diam", type: "A" },
      { text: "Annoyed tapi diam aja", type: "B" },
      { text: "Pindah kursi kalau bisa", type: "C" },
      { text: "Try to ignore, fokus film", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Post-credit scene...",
    options: [
      { text: "Stay sampai selesai semua!", type: "A" },
      { text: "Check dulu ada ga, baru decide", type: "B" },
      { text: "Langsung keluar, bisa cari online", type: "C" },
      { text: "Depends on film", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Review film setelah nonton...",
    options: [
      { text: "Long discussion sama temen", type: "A" },
      { text: "Personal reflection, think about it", type: "B" },
      { text: "Quick takes di social media", type: "C" },
      { text: "Move on, next film", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Frekuensi nonton bioskop...",
    options: [
      { text: "Setiap minggu, movie buff", type: "A" },
      { text: "2-3x sebulan", type: "B" },
      { text: "Sekali sebulan atau special releases", type: "C" },
      { text: "Jarang, special occasion", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bioskop experience vs streaming di rumah...",
    options: [
      { text: "Bioskop always! Experience matters", type: "A" },
      { text: "Big films bioskop, others streaming", type: "B" },
      { text: "Depends on mood", type: "C" },
      { text: "Prefer streaming honestly", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Memilih film untuk ditonton...",
    options: [
      { text: "Hype dan trending", type: "A" },
      { text: "Reviews dan ratings", type: "B" },
      { text: "Recommendation dari temen", type: "C" },
      { text: "Mood di saat itu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Cinema Enthusiast",
    emoji: "🎬",
    description: "Bioskop adalah sacred experience for you! Full preparation, premium seat, complete snacks, dan immersive experience. You truly appreciate cinema!",
    traits: ["Passionate", "Prepared", "Social", "Experience-seeker"],
    strengths: ["Maximum enjoyment", "Great movie buddy", "Know all the new releases"],
    weaknesses: ["Expensive habit", "High expectations", "Might be annoying to quieter friends"],
    tips: ["Not every film needs premium treatment", "Sometimes cozy home viewing is nice too"],
  },
  B: {
    type: "B",
    title: "The Thoughtful Viewer",
    emoji: "🤔",
    description: "Kamu nonton dengan intention! Pilih film carefully, appreciate the art, dan think deeply about what you watch. Cinema as intellectual experience!",
    traits: ["Selective", "Thoughtful", "Quality-focused", "Analytical"],
    strengths: ["Great film recommendations", "Deep appreciation", "Meaningful watches"],
    weaknesses: ["Might be too picky", "Miss fun popcorn movies"],
    tips: ["Some mindless entertainment is okay", "Not every film needs to be deep"],
  },
  C: {
    type: "C",
    title: "The Social Moviegoer",
    emoji: "👯",
    description: "Bioskop adalah social event! About bonding, laughing together, dan shared experience. Film is backdrop untuk quality time!",
    traits: ["Social", "Fun-loving", "Group-oriented", "Experience sharer"],
    strengths: ["Great at organizing movie outings", "Fun to watch with", "Create memories"],
    weaknesses: ["Might talk during movies", "Film choice influenced by group"],
    tips: ["Sometimes solo viewing gives different appreciation", "Let others pick too"],
  },
  D: {
    type: "D",
    title: "The Casual Cinemaphile",
    emoji: "🎞️",
    description: "Kamu enjoy bioskop dengan santai! No fuss, go with flow, dan appreciate it when you go. Healthy, balanced relationship dengan cinema!",
    traits: ["Relaxed", "Flexible", "Low-maintenance", "Adaptable"],
    strengths: ["No stress movie watching", "Easy to please", "Open to anything"],
    weaknesses: ["Miss some great theater experiences", "Could appreciate cinema more"],
    tips: ["Some films really deserve theater experience", "Treat yourself to premium sometimes"],
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
