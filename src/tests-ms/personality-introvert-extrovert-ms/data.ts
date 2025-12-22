// Ujian Introvert vs Extrovert
// Kenali personaliti sosial anda

export const questions = [
  {
    id: 1,
    question: "Selepas party besar, anda rasa...",
    options: [
      { text: "Exhausted, perlukan masa recharge alone", type: "A" },
      { text: "Okay, tapi perlu rest sikit", type: "B" },
      { text: "Energized! Best night ever!", type: "C" },
      { text: "Tak sabar untuk next party!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend ideal anda adalah...",
    options: [
      { text: "Stay home, baca buku, Netflix", type: "A" },
      { text: "Keluar dengan 1-2 kawan rapat", type: "B" },
      { text: "Hangout dengan group kawan", type: "C" },
      { text: "Big gathering, club, events!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Di meeting, anda biasanya...",
    options: [
      { text: "Prefer dengar dulu, cakap bila perlu", type: "A" },
      { text: "Contribute bila ada idea bagus", type: "B" },
      { text: "Active participate dalam discussion", type: "C" },
      { text: "Lead conversation, banyak idea!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila jumpa orang baru, anda...",
    options: [
      { text: "Awkward, take time to warm up", type: "A" },
      { text: "Polite tapi reserved", type: "B" },
      { text: "Friendly dan easy to talk", type: "C" },
      { text: "Instantly connect, bestfriend dalam 5 minit!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Phone anda ring. Unknown number. Anda...",
    options: [
      { text: "Reject, tunggu voicemail", type: "A" },
      { text: "Hesitate, mungkin jawab mungkin tak", type: "B" },
      { text: "Jawab, no problem", type: "C" },
      { text: "Jawab enthusiastically!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kerja berkumpulan atau solo?",
    options: [
      { text: "Solo - lebih fokus dan produktif", type: "A" },
      { text: "Solo dengan sikit collaboration", type: "B" },
      { text: "Team work - bouncing ideas fun!", type: "C" },
      { text: "Big team! More people more fun!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila anda perlukan recharge...",
    options: [
      { text: "Completely alone, no contact", type: "A" },
      { text: "Quiet time, maybe 1 close friend", type: "B" },
      { text: "Spend time with friends", type: "C" },
      { text: "Go out, meet new people!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Small talk dengan strangers adalah...",
    options: [
      { text: "Nightmare! Avoid at all costs", type: "A" },
      { text: "Awkward tapi boleh survive", type: "B" },
      { text: "Okay, quite enjoy actually", type: "C" },
      { text: "Love it! Everyone is interesting!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Surprise birthday party untuk anda?",
    options: [
      { text: "No please! Anxiety attack!", type: "A" },
      { text: "Sweet tapi overwhelming sikit", type: "B" },
      { text: "Loved it! So thoughtful!", type: "C" },
      { text: "THE BEST! More guests please!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Anda describe diri sendiri sebagai...",
    options: [
      { text: "Quiet, reserved, deep thinker", type: "A" },
      { text: "Calm, selective dengan social", type: "B" },
      { text: "Friendly, sociable, adaptable", type: "C" },
      { text: "Life of the party, very outgoing!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "True Introvert",
    emoji: "🤫",
    description: "Anda adalah introvert sejati! Recharge dengan masa alone time, deep conversations over small talk, dan prefer quality over quantity dalam friendships.",
    traits: ["Reflective", "Deep thinker", "Independent", "Observant"],
    strengths: ["Good listener", "Thoughtful", "Self-sufficient", "Creative alone"],
    weaknesses: ["May seem distant", "Takes time to open up", "Social exhaustion"],
    tips: ["Honor your need for alone time", "Find balance yang works untuk anda"],
  },
  B: {
    type: "B",
    title: "Ambivert (Leaning Introvert)",
    emoji: "🌗",
    description: "Anda adalah ambivert yang lean towards introversion! Boleh socialize dengan baik tapi still need alone time to recharge. Best of both worlds!",
    traits: ["Balanced", "Adaptable", "Selective", "Flexible"],
    strengths: ["Can switch modes", "Good at reading rooms", "Comfortable in various settings"],
    weaknesses: ["Sometimes uncertain about social needs", "May overcommit"],
    tips: ["Listen to your energy levels", "Plan downtime after social events"],
  },
  C: {
    type: "C",
    title: "Ambivert (Leaning Extrovert)",
    emoji: "🌓",
    description: "Anda adalah ambivert yang lean towards extroversion! Enjoy social situations dan gain energy dari people, tapi juga appreciate quiet moments.",
    traits: ["Sociable", "Flexible", "Engaging", "Balanced"],
    strengths: ["Easy to connect", "Adaptable", "Good networker", "Comfortable alone too"],
    weaknesses: ["May spread too thin", "Sometimes need alone time but forget"],
    tips: ["Don't overbook yourself", "Schedule some me-time"],
  },
  D: {
    type: "D",
    title: "True Extrovert",
    emoji: "🎉",
    description: "Anda adalah extrovert sejati! Gain energy dari people, love being centre of attention, dan thrive in social situations. The more the merrier!",
    traits: ["Outgoing", "Energetic", "Talkative", "Social butterfly"],
    strengths: ["Great networker", "Enthusiastic", "Brings energy to groups", "Easy to befriend"],
    weaknesses: ["May talk too much", "Need constant stimulation", "May neglect alone time"],
    tips: ["Remember to listen too", "Some alone time is healthy"],
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
