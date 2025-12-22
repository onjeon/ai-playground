// Jenis Pengguna Instagram Kau
// Test viral tentang gaya Instagram personality

export const questions = [
  {
    id: 1,
    question: "Berapa kerap kau post Instagram?",
    options: [
      { text: "Everyday ada update!", type: "A" },
      { text: "Seminggu sekali kalau ada benda best", type: "B" },
      { text: "Sebulan sekali pun susah", type: "C" },
      { text: "Story je banyak, feed jarang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Before post, berapa banyak edit kau buat?",
    options: [
      { text: "Lightroom, VSCO, filter berlapis-lapis!", type: "A" },
      { text: "Sikit-sikit je, brightness contrast", type: "B" },
      { text: "Post je terus, natural is best", type: "C" },
      { text: "Edit sampai dah tak kenal muka sendiri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Caption style kau macam mana?",
    options: [
      { text: "Deep quotes dan puisi", type: "A" },
      { text: "Emoji je cukup 😎", type: "B" },
      { text: "Location tag je, malas taip", type: "C" },
      { text: "Essay panjang berjela cerita", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila kau dapat notification 'someone liked your post'?",
    options: [
      { text: "Check terus siapa like!", type: "A" },
      { text: "Tengok nanti bila free", type: "B" },
      { text: "Notification dah off lama", type: "C" },
      { text: "Excited, tambah motivation nak post lagi!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Feed aesthetic kau macam mana?",
    options: [
      { text: "Color coordinated, theme konsisten!", type: "A" },
      { text: "Mixed sikit tapi okay la", type: "B" },
      { text: "Huru-hara, post je apa ada", type: "C" },
      { text: "Bright dan colorful semua!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa lama kau ambik masa untuk pilih satu photo nak post?",
    options: [
      { text: "1 jam minimum, kena perfect!", type: "A" },
      { text: "10-15 minit je", type: "B" },
      { text: "Snap terus post, 2 minit", type: "C" },
      { text: "Tanya kawan dulu baru decide", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Story kau biasanya content apa?",
    options: [
      { text: "OOTD dan selfie!", type: "A" },
      { text: "Food dan cafe hopping", type: "B" },
      { text: "Repost memes dan tweets", type: "C" },
      { text: "Day-to-day life update", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila crush view story kau?",
    options: [
      { text: "Screenshot viewer list terus!", type: "A" },
      { text: "Happy dalam hati tapi act cool", type: "B" },
      { text: "Biasa je, tak perasan pun", type: "C" },
      { text: "Post lagi banyak story lepas tu!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "DM Instagram kau macam mana?",
    options: [
      { text: "Reply semua dalam 5 minit!", type: "A" },
      { text: "Read tapi reply lambat sikit", type: "B" },
      { text: "99+ unread messages biasa je", type: "C" },
      { text: "Active DM, suka networking", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Archive posts - kau pernah buat tak?",
    options: [
      { text: "Selalu! Feed kena curate!", type: "A" },
      { text: "Kadang-kadang bila post tak dapat likes", type: "B" },
      { text: "Takde, biar je semua", type: "C" },
      { text: "Delete terus, tak guna archive", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Influencer Wannabe",
    emoji: "📸",
    description: "Kau ambil Instagram seriously! Feed aesthetic on point, engagement penting, dan kau tahu algorithm macam mana. Kalau belum famous, soon insyaAllah!",
    traits: ["Perfectionist", "Creative", "Strategic", "Aesthetic-focused"],
    strengths: ["Content creation skills", "Visual eye", "Consistency"],
    weaknesses: ["Overthinking posts", "Too focused on likes", "Comparison trap"],
    tips: ["Post for fun, bukan validation", "Enjoy the process!"],
  },
  B: {
    type: "B",
    title: "Casual Poster",
    emoji: "📱",
    description: "Kau guna Instagram untuk share moments best je. Tak obsess dengan likes, tapi appreciate engagement. Balance yang bagus antara online dan real life!",
    traits: ["Balanced", "Genuine", "Selective", "Down-to-earth"],
    strengths: ["Authentic content", "Healthy relationship with social media", "Good boundaries"],
    weaknesses: ["Sometimes miss opportunities", "Could be more consistent"],
    tips: ["Keep being authentic", "Quality over quantity!"],
  },
  C: {
    type: "C",
    title: "Silent Stalker",
    emoji: "👀",
    description: "Kau lebih suka scroll dan observe dari jauh! Post jarang, tapi online always. Tahu semua gossip tapi never comment. Ghost mode activated!",
    traits: ["Observer", "Private", "Mysterious", "Low-key"],
    strengths: ["Not addicted to validation", "Protect privacy", "Real life focused"],
    weaknesses: ["Missing out on connections", "Too passive"],
    tips: ["Sekali-sekala interact la", "Share sikit takpe!"],
  },
  D: {
    type: "D",
    title: "Story Spammer",
    emoji: "🎬",
    description: "Feed kau mungkin kosong tapi Story kau 24/7 ada content! Dari breakfast sampai tidur semua document. Living life through 15-second clips!",
    traits: ["Spontaneous", "Expressive", "Social", "FOMO fighter"],
    strengths: ["Living in the moment", "Great storyteller", "Keeping friends updated"],
    weaknesses: ["Oversharing", "Phone battery always low", "Present but not present"],
    tips: ["Sometimes just enjoy without recording", "Be present IRL too!"],
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
