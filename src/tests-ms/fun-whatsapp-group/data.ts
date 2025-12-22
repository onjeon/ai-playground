// Siapa Kau Dalam WhatsApp Group?
// Fun test tentang personality dalam group chat

export const questions = [
  {
    id: 1,
    question: "Ada good morning message dalam group. Apa kau buat?",
    options: [
      { text: "Reply 'Good morning!' dengan emoji bunga", type: "A" },
      { text: "Read je, tak reply", type: "B" },
      { text: "Mute group terus", type: "C" },
      { text: "Reply dengan meme!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Admin share info penting. Response kau?",
    options: [
      { text: "Reply 'Noted with thanks!'", type: "A" },
      { text: "Thumbs up reaction je", type: "B" },
      { text: "Read diam-diam", type: "C" },
      { text: "Tanya soalan follow-up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ada drama dalam group. Kau macam mana?",
    options: [
      { text: "Cuba jadi mediator, solve problem", type: "A" },
      { text: "Scroll balik baca dari awal!", type: "B" },
      { text: "Exit group, tak larat drama", type: "C" },
      { text: "Buat popcorn, enjoy the show!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kau ada info/news nak share. Macam mana share?",
    options: [
      { text: "Type panjang lebar dengan explanation", type: "A" },
      { text: "Share link je", type: "B" },
      { text: "Jarang share, bukan kau punya style", type: "C" },
      { text: "Share dengan commentary pedas!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Group plan outing. Kau contribute macam mana?",
    options: [
      { text: "Jadi organizer! Plan semua!", type: "A" },
      { text: "Ikut je apa majority decide", type: "B" },
      { text: "Read je, decide last minute", type: "C" },
      { text: "Suggest tempat gila-gila!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Notification WhatsApp kau setting macam mana?",
    options: [
      { text: "On untuk semua group!", type: "A" },
      { text: "Selected groups je", type: "B" },
      { text: "Semua muted!", type: "C" },
      { text: "On tapi ignore mostly", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ada orang tag kau dalam group. Reaction?",
    options: [
      { text: "Reply cepat-cepat!", type: "A" },
      { text: "Reply bila sempat", type: "B" },
      { text: "Pretend tak nampak", type: "C" },
      { text: "Reply dengan voice note panjang!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Berapa WhatsApp group kau ada sekarang?",
    options: [
      { text: "50+ groups! Active semua!", type: "A" },
      { text: "20-30 groups, manageable", type: "B" },
      { text: "Kurang 10, exit yang tak penting", type: "C" },
      { text: "Banyak tapi semua muted", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ada orang share fake news dalam group. Apa action?",
    options: [
      { text: "Fact check dan correct terus!", type: "A" },
      { text: "Report tapi diam je", type: "B" },
      { text: "Ignore, bukan hal kau", type: "C" },
      { text: "Reply dengan sarcasm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kau create group baru. Apa first thing kau buat?",
    options: [
      { text: "Set rules dan description", type: "A" },
      { text: "Add semua orang terus", type: "B" },
      { text: "Kau tak create group, malas", type: "C" },
      { text: "Send meme sebagai ice breaker!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Admin Energy",
    emoji: "👨‍💼",
    description: "Kau ni natural leader dalam group! Selalu reply, organize events, dan jaga group harmony. Semua orang depend on kau untuk info. Tanpa kau, group mati!",
    traits: ["Responsible", "Active", "Organized", "Helpful"],
    strengths: ["Keep group alive", "Reliable info source", "Good mediator"],
    weaknesses: ["Burnout dari terlalu active", "Terbeban dengan tanggungjawab"],
    tips: ["Take breaks tau", "Delegate to others"],
  },
  B: {
    type: "B",
    title: "The Silent Observer",
    emoji: "👀",
    description: "Kau ni lurker profesional! Read semua tapi jarang reply. Bila kau type, semua orang terkejut. Quality over quantity adalah motto kau!",
    traits: ["Quiet", "Observant", "Selective", "Thoughtful"],
    strengths: ["Never overshare", "Good listener", "Knows everything"],
    weaknesses: ["People forget you exist", "Miss important discussions"],
    tips: ["Contribute more", "Your opinion matters"],
  },
  C: {
    type: "C",
    title: "The Minimalist Member",
    emoji: "🚪",
    description: "Kau ni selective dengan groups. Mute semua, exit bila bosan. Group untuk kau adalah necessary evil. Less is more!",
    traits: ["Selective", "Independent", "Low maintenance", "Efficient"],
    strengths: ["No notification stress", "Focus on real connections", "Peace of mind"],
    weaknesses: ["Miss out on updates", "Seen as antisocial"],
    tips: ["Some groups are worth the noise", "Stay connected sikit"],
  },
  D: {
    type: "D",
    title: "The Meme Lord",
    emoji: "😂",
    description: "Kau ni entertainment dalam group! Selalu drop memes, jokes, dan random thoughts. Group boring? Kau yang make it alive! Comic relief MVP!",
    traits: ["Funny", "Creative", "Spontaneous", "Entertaining"],
    strengths: ["Lighten the mood", "Always fun", "Content creator"],
    weaknesses: ["Sometimes not taken seriously", "Might annoy some people"],
    tips: ["Know when to be serious", "Quality memes only"],
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
