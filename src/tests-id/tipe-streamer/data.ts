// Tipe Streamer Kamu
// Kalau jadi streamer, kamu bakal jadi tipe yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Content yang paling mau kamu stream...",
    options: [
      { text: "Gaming! Competitive atau story games", type: "A" },
      { text: "Just Chatting, ngobrol sama viewers", type: "B" },
      { text: "Creative content, art atau music", type: "C" },
      { text: "Mix everything, variety streamer", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Interaksi dengan viewers...",
    options: [
      { text: "Focus ke gameplay, interact sesekali", type: "A" },
      { text: "Chat adalah prioritas, super interactive", type: "B" },
      { text: "Share proses creative sambil ngobrol", type: "C" },
      { text: "Balance antara content dan chat", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Streaming schedule...",
    options: [
      { text: "Consistent, sama waktu tiap hari", type: "A" },
      { text: "Flexible, kapan mood bagus", type: "B" },
      { text: "Project-based, saat ada yang dikerjakan", type: "C" },
      { text: "Random, spontaneous streams", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tujuan utama streaming...",
    options: [
      { text: "Jadi pro, build career", type: "A" },
      { text: "Build community dan friends", type: "B" },
      { text: "Share passion dan creativity", type: "C" },
      { text: "Fun aja, no pressure", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Setup streaming...",
    options: [
      { text: "Proper setup, invest untuk quality", type: "A" },
      { text: "Good enough untuk comfortable", type: "B" },
      { text: "Focus ke tools yang dibutuhkan", type: "C" },
      { text: "Minimal, yang penting bisa stream", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat viewership rendah...",
    options: [
      { text: "Keep grinding, improvement is key", type: "A" },
      { text: "Enjoy aja, viewers will come", type: "B" },
      { text: "Focus ke quality content", type: "C" },
      { text: "Ga masalah, stream untuk fun", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Handling negative comments...",
    options: [
      { text: "Ignore dan move on", type: "A" },
      { text: "Address dengan baik, atau ban", type: "B" },
      { text: "Jarang dapat karena niche community", type: "C" },
      { text: "Ga peduli, streaming for myself", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Personality on stream...",
    options: [
      { text: "Competitive dan focused", type: "A" },
      { text: "Friendly dan entertaining", type: "B" },
      { text: "Chill dan focused ke craft", type: "C" },
      { text: "Authentic, sama kayak IRL", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Monetization...",
    options: [
      { text: "Goal! Streaming bisa jadi income", type: "A" },
      { text: "Nice to have, tapi bukan focus", type: "B" },
      { text: "Support untuk creative projects", type: "C" },
      { text: "Tidak terlalu penting", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Collaboration dengan streamer lain...",
    options: [
      { text: "Strategic untuk growth", type: "A" },
      { text: "Fun! Building friendships", type: "B" },
      { text: "Kalau project atau style cocok", type: "C" },
      { text: "Jarang, prefer solo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Durasi stream ideal...",
    options: [
      { text: "Long streams, 4+ jam", type: "A" },
      { text: "Medium, 2-3 jam comfortable", type: "B" },
      { text: "Sesuai project atau task", type: "C" },
      { text: "Short, 1-2 jam cukup", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Streaming adalah...",
    options: [
      { text: "Potential career path", type: "A" },
      { text: "Way to connect dengan people", type: "B" },
      { text: "Platform untuk creativity", type: "C" },
      { text: "Fun hobby, no strings attached", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pro Streamer",
    emoji: "🎯",
    description: "Kamu adalah Pro Streamer type! Streaming dengan serius dan punya goal jelas. Consistency, quality, dan growth adalah fokusmu. Streaming bukan cuma hobby tapi potential career!",
    traits: ["Ambitious", "Consistent", "Professional", "Goal-oriented"],
    strengths: ["Dedicated", "High quality", "Growth potential"],
    weaknesses: ["Pressure tinggi", "Burnout risk", "Work feels like work"],
    tips: ["Remember to have fun", "Burnout is real, pace yourself"],
  },
  B: {
    type: "B",
    title: "Community Streamer",
    emoji: "💬",
    description: "Kamu adalah Community Streamer! Streaming untuk build connections dan friendships. Chat adalah heart dari stream dan viewers adalah friends. Hangout virtual yang wholesome!",
    traits: ["Friendly", "Interactive", "Community-focused", "Warm"],
    strengths: ["Loyal community", "Great conversations", "Supportive space"],
    weaknesses: ["Growth slower", "Dependent on chat"],
    tips: ["Your community loves you", "Quality over quantity"],
  },
  C: {
    type: "C",
    title: "Creative Streamer",
    emoji: "🎨",
    description: "Kamu adalah Creative Streamer! Streaming untuk share creative process dan passion. Art, music, atau creative projects adalah content utama. Inspiring others through creation!",
    traits: ["Creative", "Passionate", "Skilled", "Inspiring"],
    strengths: ["Unique content", "Dedicated audience", "Showcase talent"],
    weaknesses: ["Niche audience", "Need constant creation"],
    tips: ["Your creativity inspires others", "Share your process"],
  },
  D: {
    type: "D",
    title: "Casual Streamer",
    emoji: "🌟",
    description: "Kamu adalah Casual Streamer! Streaming untuk fun tanpa pressure. No goals, no metrics, just vibes. Authentic dan relaxed approach yang refreshing!",
    traits: ["Casual", "Authentic", "Relaxed", "No-pressure"],
    strengths: ["Zero stress", "Genuine content", "Sustainable"],
    weaknesses: ["Limited growth", "Inconsistent schedule"],
    tips: ["Your casual vibe is valid", "Fun is the best content"],
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
