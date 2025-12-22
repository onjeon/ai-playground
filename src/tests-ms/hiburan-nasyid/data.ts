// Gaya Nasyid Anda
// Jenis pendengar nasyid mana anda?

export const questions = [
  {
    id: 1,
    question: "Bila anda dengar nasyid?",
    options: [
      { text: "Everyday untuk ketenangan", type: "A" },
      { text: "Bulan Ramadan terutamanya", type: "B" },
      { text: "Bila mood nak reflect", type: "C" },
      { text: "Jarang, special occasions je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Style nasyid favorite anda?",
    options: [
      { text: "Traditional - acapella, khusyuk", type: "A" },
      { text: "Modern - dengan music contemporary", type: "B" },
      { text: "Mix both - best of both worlds", type: "C" },
      { text: "Tak picky, good nasyid is good", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kumpulan nasyid era mana favorite?",
    options: [
      { text: "Raihan era - classics!", type: "A" },
      { text: "In-Team, Hijjaz - peak era", type: "B" },
      { text: "Modern groups - fresh sounds", type: "C" },
      { text: "Solo artists - intimate feel", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lyrics nasyid yang anda connect?",
    options: [
      { text: "Praise dan zikir", type: "A" },
      { text: "Inspirational messages", type: "B" },
      { text: "Social commentary", type: "C" },
      { text: "Personal spirituality", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nasyid affect anda macam mana?",
    options: [
      { text: "Deep spiritual connection", type: "A" },
      { text: "Motivated dan inspired", type: "B" },
      { text: "Calm dan peaceful", type: "C" },
      { text: "Nostalgic dan comforting", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nasyid kat mana paling best?",
    options: [
      { text: "Solat time atau after", type: "A" },
      { text: "Driving atau commute", type: "B" },
      { text: "Quiet time alone", type: "C" },
      { text: "Family gatherings", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Share nasyid dengan orang?",
    options: [
      { text: "Yes! Spread the message", type: "A" },
      { text: "Bila relevant je", type: "B" },
      { text: "Personal playlist, tak share", type: "C" },
      { text: "Recommend bila asked", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nasyid concert/event, anda...",
    options: [
      { text: "Attend bila ada peluang!", type: "A" },
      { text: "Nice experience kalau boleh", type: "B" },
      { text: "Prefer listen at home", type: "C" },
      { text: "Watch online je", type: "D" },
    ],
  },
  {
    id: 9,
    question: "New nasyid releases, anda...",
    options: [
      { text: "Keep updated, follow artists", type: "A" },
      { text: "Check bila viral", type: "B" },
      { text: "Stick dengan favorites lama", type: "C" },
      { text: "Discover randomly", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nasyid dalam hidup anda adalah...",
    options: [
      { text: "Essential spiritual food", type: "A" },
      { text: "Source of motivation", type: "B" },
      { text: "Peaceful escape", type: "C" },
      { text: "Nice background music", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Devoted Listener",
    emoji: "🤲",
    description: "Nasyid adalah part of daily routine anda! Deep spiritual connection dan genuine appreciation. Soul food for you!",
    traits: ["Spiritual", "Devoted", "Traditional", "Consistent"],
    strengths: ["Strong faith", "Committed listener", "Appreciates depth"],
    weaknesses: ["May be rigid about style", "Less open to new"],
    tips: ["Your devotion is beautiful!", "New styles can inspire too"],
  },
  B: {
    type: "B",
    title: "Seasonal Listener",
    emoji: "🌙",
    description: "Ramadan vibes bring out the nasyid lover! Peak appreciation during holy month. Seasonal connection yang meaningful!",
    traits: ["Seasonal", "Motivated", "Connected", "Meaningful"],
    strengths: ["Deep during special times", "Appreciates significance"],
    weaknesses: ["Inconsistent throughout year"],
    tips: ["Try year-round listening", "The message is always relevant"],
  },
  C: {
    type: "C",
    title: "Reflective Listener",
    emoji: "🧘",
    description: "Nasyid untuk moments of reflection! Anda seek peace dan tranquility through music. Thoughtful listener!",
    traits: ["Reflective", "Peaceful", "Thoughtful", "Introspective"],
    strengths: ["Meaningful listening", "Personal connection"],
    weaknesses: ["Only during certain moods"],
    tips: ["Share the peace", "Music can shape mood too"],
  },
  D: {
    type: "D",
    title: "Casual Listener",
    emoji: "🎵",
    description: "Appreciate nasyid bila ada occasion! Kenduri, gathering - nice background. Relaxed approach to genre!",
    traits: ["Casual", "Relaxed", "Occasional", "Open"],
    strengths: ["No pressure", "Appreciates without obsessing"],
    weaknesses: ["May miss deeper connection"],
    tips: ["Try focused listening", "Deeper appreciation awaits"],
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
