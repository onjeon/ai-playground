// Gaya TikTok Kau
// Fun test tentang personality TikTok style

export const questions = [
  {
    id: 1,
    question: "Bila bukak TikTok, apa first thing kau scroll?",
    options: [
      { text: "FYP terus! Algorithm knows me best!", type: "A" },
      { text: "Check notification dan comments dulu", type: "B" },
      { text: "Search specific content yang nak tengok", type: "C" },
      { text: "Tengok following je, tak trust FYP", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada trend viral baru. Apa action kau?",
    options: [
      { text: "Join terus! Buat video trend tu!", type: "A" },
      { text: "Tengok je, malas nak buat", type: "B" },
      { text: "Analisa dulu kenapa viral", type: "C" },
      { text: "Skip, trend ni bodoh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Berapa lama sehari kau spend kat TikTok?",
    options: [
      { text: "3+ jam, time flies!", type: "A" },
      { text: "1-2 jam, moderate la", type: "B" },
      { text: "30 minit je, ada life lain", type: "C" },
      { text: "Buka sekali-sekala je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Content apa kau paling suka tengok?",
    options: [
      { text: "Comedy dan parody!", type: "A" },
      { text: "Food dan travel reviews", type: "B" },
      { text: "Educational dan informative", type: "C" },
      { text: "Drama dan gossip!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kau pernah post TikTok sendiri?",
    options: [
      { text: "Yes! Regularly post content!", type: "A" },
      { text: "Ada sikit-sikit, for fun", type: "B" },
      { text: "Draft banyak tapi tak post", type: "C" },
      { text: "Never, consumer je", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Video kau viral dapat 1 million views. Reaction?",
    options: [
      { text: "OMG! Post lagi banyak! Fame awaits!", type: "A" },
      { text: "Excited tapi nervous sikit", type: "B" },
      { text: "Delete video, tak suka attention", type: "C" },
      { text: "Analyze why it went viral", type: "D" },
    ],
  },
  {
    id: 7,
    question: "TikTok Shop keluar barang menarik. Apa kau buat?",
    options: [
      { text: "Checkout terus! Rezeki jangan ditolak!", type: "A" },
      { text: "Tambah cart dulu, fikir kemudian", type: "B" },
      { text: "Check review dulu, baru decide", type: "C" },
      { text: "Skip, tak percaya TikTok Shop", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Malam dah pukul 2 pagi, masih scroll TikTok. Feeling?",
    options: [
      { text: "Normal je, every night macam ni", type: "A" },
      { text: "Guilty tapi tak boleh stop", type: "B" },
      { text: "Force close app, esok kerja!", type: "C" },
      { text: "One more video... okay last one...", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ada TikToker famous kau follow. Interaction macam mana?",
    options: [
      { text: "Comment setiap video! Superfan!", type: "A" },
      { text: "Like je, kadang comment", type: "B" },
      { text: "Tengok tapi tak engage", type: "C" },
      { text: "Unfollow kalau content dah boring", type: "D" },
    ],
  },
  {
    id: 10,
    question: "TikTok ban kat Malaysia. Apa jadi dengan kau?",
    options: [
      { text: "VPN terus! Tak boleh hidup tanpa TikTok!", type: "A" },
      { text: "Sedih tapi pindah ke Reels/Shorts", type: "B" },
      { text: "Finally free! Dapat life balik!", type: "C" },
      { text: "Tak effect sangat, jarang guna pun", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "TikTok Addict",
    emoji: "📱",
    description: "Kau ni level addiction dah max! FYP adalah life, screen time off the charts. TikTok bukan app - ia adalah lifestyle! Touch grass once in a while tau!",
    traits: ["Addicted", "Trendy", "Social media native", "Content hungry"],
    strengths: ["Always updated", "Know every trend", "Entertainment expert"],
    weaknesses: ["Time management issue", "Sleep deprived", "Real life neglected"],
    tips: ["Set screen time limit", "Touch grass more", "Balance online offline"],
  },
  B: {
    type: "B",
    title: "Casual Scroller",
    emoji: "🌊",
    description: "Kau enjoy TikTok tapi dengan moderate pace. Tak addicted tapi tak boring jugak. Perfect balance antara online dan real life. Well done!",
    traits: ["Balanced", "Moderate", "Selective", "Controlled"],
    strengths: ["Healthy usage", "Good balance", "Know when to stop"],
    weaknesses: ["Sometimes miss trends", "Not as updated"],
    tips: ["You're doing great", "Keep the balance"],
  },
  C: {
    type: "C",
    title: "Selective Viewer",
    emoji: "🎯",
    description: "Kau guna TikTok untuk specific purpose je. Educational content, reviews, atau research. Quality over quantity. Efficient user!",
    traits: ["Purposeful", "Efficient", "Selective", "Quality-focused"],
    strengths: ["No time wasted", "Learn useful stuff", "Not addicted"],
    weaknesses: ["Miss fun content", "Seen as boring"],
    tips: ["Enjoy entertainment too", "Relax sometimes"],
  },
  D: {
    type: "D",
    title: "TikTok Skeptic",
    emoji: "🤔",
    description: "Kau ada TikTok tapi tak really into it. Tengok sekali-sekala, judge trends dari jauh. 'Why is this viral?' - selalu kau tanya. Old soul ke?",
    traits: ["Critical", "Independent", "Non-conformist", "Skeptical"],
    strengths: ["Not addicted", "Think critically", "Has real life"],
    weaknesses: ["Out of touch", "Miss cultural moments"],
    tips: ["Don't judge too much", "Some trends are fun"],
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
