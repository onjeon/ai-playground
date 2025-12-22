// Tes Tingkat Romantis Kamu
// Seberapa romantis kamu dalam hubungan?

export const questions = [
  {
    id: 1,
    question: "Surprise untuk pasangan...",
    options: [
      { text: "Sering dan elaborate, I love surprising!", type: "A" },
      { text: "Sesekali di momen special", type: "B" },
      { text: "Jarang, lebih prefer yang praktis", type: "C" },
      { text: "Tidak pernah, bukan style saya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Anniversary dan hari special...",
    options: [
      { text: "Plan special dan memorable setiap tahun", type: "A" },
      { text: "Celebrate dengan dinner atau quality time", type: "B" },
      { text: "Simple acknowledgment, tidak harus grand", type: "C" },
      { text: "Sering lupa atau skip", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kata-kata romantis untuk pasangan...",
    options: [
      { text: "Sering bilang I love you dan sweet words", type: "A" },
      { text: "Di momen-momen tertentu yang meaningful", type: "B" },
      { text: "Jarang verbal, lebih ke actions", type: "C" },
      { text: "Sangat jarang, awkward dengan PDA verbal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Film atau drama romantis...",
    options: [
      { text: "Love it! Sering nangis dan relate", type: "A" },
      { text: "Enjoy sesekali", type: "B" },
      { text: "Tidak terlalu suka, prefer genre lain", type: "C" },
      { text: "Skip, terlalu cheesy", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Public display of affection (PDA)...",
    options: [
      { text: "Love it, tidak malu show affection", type: "A" },
      { text: "Sesekali okay, tapi tidak berlebihan", type: "B" },
      { text: "Prefer private affection", type: "C" },
      { text: "Tidak nyaman dengan PDA", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Date night planning...",
    options: [
      { text: "Plan romantic dan thoughtful dates", type: "A" },
      { text: "Nice dinners atau aktivitas bareng", type: "B" },
      { text: "Simple, yang penting quality time", type: "C" },
      { text: "Tidak terlalu effort untuk planning", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Gift giving untuk pasangan...",
    options: [
      { text: "Thoughtful dan personal, banyak effort", type: "A" },
      { text: "Di occasions special dengan care", type: "B" },
      { text: "Praktis dan useful", type: "C" },
      { text: "Tidak terlalu into gift giving", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Momen romantis yang kamu create...",
    options: [
      { text: "Sering - candlelight, flowers, music", type: "A" },
      { text: "Di special occasions", type: "B" },
      { text: "Natural moments, tidak perlu staged", type: "C" },
      { text: "Almost never, bukan style saya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Love letters atau messages...",
    options: [
      { text: "Write heartfelt messages regularly", type: "A" },
      { text: "Di momen special atau kalau inspired", type: "B" },
      { text: "Casual messages, not too deep", type: "C" },
      { text: "Not my thing, prefer verbal/action", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Romantic gestures dalam daily life...",
    options: [
      { text: "Small gestures every day", type: "A" },
      { text: "Here and there, when I think of it", type: "B" },
      { text: "Practical care lebih dari gestures", type: "C" },
      { text: "Not really, not my love language", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ekspektasi romantisme dari pasangan...",
    options: [
      { text: "High, want romance both ways", type: "A" },
      { text: "Moderate, appreciate when it happens", type: "B" },
      { text: "Low, not that important to me", type: "C" },
      { text: "Don't care, other things more important", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara keseluruhan, kamu adalah orang yang...",
    options: [
      { text: "Sangat romantis, love is everything", type: "A" },
      { text: "Cukup romantis di momen-momen tertentu", type: "B" },
      { text: "Praktis, romance bukan prioritas", type: "C" },
      { text: "Tidak romantis sama sekali", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Romantis",
    emoji: "💕",
    description: "Kamu adalah jiwa romantis sejati! Love languages overflow, gestures thoughtful, dan selalu cari cara untuk make partner feel special. Like a romance movie protagonist!",
    traits: ["Romantic", "Thoughtful", "Expressive", "Passionate"],
    strengths: ["Partner feels loved", "Creates memories", "Keeps spark alive"],
    weaknesses: ["High expectations", "Can be overwhelming"],
    tips: ["Partner might have different love language", "Practical love matters too"],
  },
  B: {
    type: "B",
    title: "Romantis Moderat",
    emoji: "🌹",
    description: "Kamu romantis di momen-momen yang tepat! Tau kapan harus sweet dan thoughtful, tapi juga grounded dan tidak berlebihan. Balanced approach to love.",
    traits: ["Balanced", "Thoughtful", "Appropriate", "Sweet when needed"],
    strengths: ["Good balance", "Meaningful gestures", "Not overwhelming"],
    weaknesses: ["Might miss opportunities for spontaneous romance"],
    tips: ["Random romantic gestures are nice too", "Keep the spark"],
  },
  C: {
    type: "C",
    title: "Praktis dalam Cinta",
    emoji: "🔧",
    description: "Kamu lebih praktis dalam menunjukkan cinta! Actions speak louder - care through practical help dan reliability. Romance bukan prioritas utama.",
    traits: ["Practical", "Reliable", "Action-oriented", "Down to earth"],
    strengths: ["Dependable", "Shows love through actions", "Not superficial"],
    weaknesses: ["Partner might want more romance", "Can seem unromantic"],
    tips: ["Some romance can strengthen bond", "Partner might need it even if you don't"],
  },
  D: {
    type: "D",
    title: "Anti Romantis",
    emoji: "🤷",
    description: "Kamu tidak terlalu into romance! Gestures dan sweet nothings bukan style-mu. Prefer straightforward dan practical approach to relationships.",
    traits: ["Unromantic", "Practical", "Straightforward", "Reserved"],
    strengths: ["No-nonsense", "Honest", "Doesn't create false expectations"],
    weaknesses: ["Partner might feel unloved", "Miss bonding opportunities"],
    tips: ["Learn partner's love language", "Small efforts can mean a lot", "Romance doesn't have to be cheesy"],
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
