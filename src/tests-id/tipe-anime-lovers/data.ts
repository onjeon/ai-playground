// Tipe Anime Lovers Indonesia
// Kamu tipe pecinta anime yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Genre anime favorit...",
    options: [
      { text: "Shonen action! Naruto, One Piece, Demon Slayer", type: "A" },
      { text: "Slice of life dan romance", type: "B" },
      { text: "Seinen atau psychological thriller", type: "C" },
      { text: "Apapun yang bagus, tidak picky", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara nonton anime...",
    options: [
      { text: "Marathon sampai episode habis!", type: "A" },
      { text: "Beberapa episode per hari, savor it", type: "B" },
      { text: "Weekly release, ikut diskusi", type: "C" },
      { text: "Random, kapan sempat", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Manga atau Light Novel...",
    options: [
      { text: "Baca juga! Ahead of anime", type: "A" },
      { text: "Sesekali, yang favorit", type: "B" },
      { text: "Prefer anime, visual lebih bagus", type: "C" },
      { text: "Tidak baca", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Merchandise anime...",
    options: [
      { text: "Collector! Figure, poster, dll", type: "A" },
      { text: "Beberapa item favorit", type: "B" },
      { text: "Jarang beli", type: "C" },
      { text: "Tidak punya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat anime favorit tamat...",
    options: [
      { text: "Post-anime depression parah!", type: "A" },
      { text: "Sedih tapi cari anime baru", type: "B" },
      { text: "Rewatch atau baca fanfic", type: "C" },
      { text: "Move on ke yang lain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sub atau dub...",
    options: [
      { text: "Sub only! Japanese voice acting superior", type: "A" },
      { text: "Sub mostly, dub kadang okay", type: "B" },
      { text: "Terserah, yang available", type: "C" },
      { text: "Dub lebih mudah", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Komunitas anime...",
    options: [
      { text: "Active! Discord, forum, event", type: "A" },
      { text: "Part of beberapa grup", type: "B" },
      { text: "Follow aja, jarang interact", type: "C" },
      { text: "Solo watcher", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Rekomendasi anime ke teman...",
    options: [
      { text: "Sering! Punya list untuk semua orang", type: "A" },
      { text: "Kalau ditanya atau match selera", type: "B" },
      { text: "Sesekali yang mainstream", type: "C" },
      { text: "Jarang recommend", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seasonal anime...",
    options: [
      { text: "Follow seasonal chart, tau apa yang airing", type: "A" },
      { text: "Pick beberapa yang menarik", type: "B" },
      { text: "Nonton yang udah selesai aja", type: "C" },
      { text: "Tidak follow seasonal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cosplay atau event anime...",
    options: [
      { text: "Pernah atau mau cosplay!", type: "A" },
      { text: "Datang ke event sebagai pengunjung", type: "B" },
      { text: "Tertarik tapi belum pernah", type: "C" },
      { text: "Tidak tertarik", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Anime dalam hidupmu...",
    options: [
      { text: "Major hobby, bagian dari identitas", type: "A" },
      { text: "Important entertainment", type: "B" },
      { text: "Salah satu hiburan yang disukai", type: "C" },
      { text: "Casual entertainment", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jumlah anime yang sudah ditonton...",
    options: [
      { text: "100+ titles!", type: "A" },
      { text: "50-100 titles", type: "B" },
      { text: "20-50 titles", type: "C" },
      { text: "Di bawah 20", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Otaku Sejati",
    emoji: "🎌",
    description: "Kamu adalah Otaku Sejati! Anime adalah life. Kamu tau segalanya tentang anime, dari classic sampai seasonal. Collection, community, dan culture - semua kamu embrace. True weeb!",
    traits: ["Passionate", "Knowledgeable", "Dedicated", "Collector"],
    strengths: ["Deep knowledge", "Great recommender", "Community connection"],
    weaknesses: ["Bisa obsessive", "Expensive hobby", "Too niche sometimes"],
    tips: ["Balance with other activities", "Share your passion wisely"],
  },
  B: {
    type: "B",
    title: "Anime Enthusiast",
    emoji: "✨",
    description: "Kamu adalah Anime Enthusiast! Dedicated tapi balanced. Kamu appreciate good anime dan punya taste yang refined tanpa extreme. Healthy anime lover!",
    traits: ["Balanced", "Appreciative", "Selective", "Knowledgeable"],
    strengths: ["Good taste", "Healthy hobby", "Enjoyable discussions"],
    weaknesses: ["Might miss some gems", "Not as connected to community"],
    tips: ["Your balance is healthy", "Keep enjoying quality anime"],
  },
  C: {
    type: "C",
    title: "Casual Watcher",
    emoji: "📺",
    description: "Kamu adalah Casual Watcher! Suka anime tapi tidak terlalu deep. Nonton yang populer atau recommended, enjoy tanpa pressure. Relaxed approach!",
    traits: ["Casual", "Relaxed", "Open-minded", "Selective"],
    strengths: ["No pressure", "Watch quality only", "Balanced life"],
    weaknesses: ["Miss great anime", "Out of discussions"],
    tips: ["Explore more genres", "Many hidden gems out there"],
  },
  D: {
    type: "D",
    title: "Newbie/Occasional Viewer",
    emoji: "🌱",
    description: "Kamu baru atau jarang nonton anime. Nothing wrong with that! Maybe you'll discover amazing anime soon, atau mungkin anime bukan untuk kamu. Either way is fine!",
    traits: ["New", "Open", "Curious", "Casual"],
    strengths: ["Fresh perspective", "No bias", "Many discoveries ahead"],
    weaknesses: ["Miss cultural references", "Limited experience"],
    tips: ["Try popular gateway anime", "You might find your favorite genre!"],
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
