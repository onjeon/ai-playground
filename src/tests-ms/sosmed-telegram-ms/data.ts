// Gaya Telegram Kau
// Test viral tentang Telegram user personality

export const questions = [
  {
    id: 1,
    question: "Kenapa kau pilih Telegram over WhatsApp?",
    options: [
      { text: "Privacy dan features lebih power!", type: "A" },
      { text: "Channel dan group content best!", type: "B" },
      { text: "Kawan semua pakai, ikut je", type: "C" },
      { text: "Stickers collection tak jumpa kat tempat lain!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Channel Telegram kau join berapa?",
    options: [
      { text: "100+ segala jenis content!", type: "A" },
      { text: "20-50, yang useful je", type: "B" },
      { text: "5-10 je, quality over quantity", type: "C" },
      { text: "Tak join channel, chat je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Secret chat feature pernah guna?",
    options: [
      { text: "Selalu! Privacy is everything!", type: "A" },
      { text: "Kadang-kadang untuk chat sensitive", type: "B" },
      { text: "Tak pernah, normal chat cukup", type: "C" },
      { text: "Tak tahu pun ada feature ni", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sticker collection kau macam mana?",
    options: [
      { text: "50+ packs semua jenis!", type: "A" },
      { text: "Favourite je, 10-20 packs", type: "B" },
      { text: "Default stickers je", type: "C" },
      { text: "Custom stickers buat sendiri!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Group chat Telegram kau active berapa?",
    options: [
      { text: "Banyak! Work, friends, hobi semua ada!", type: "A" },
      { text: "3-5 groups yang really engage", type: "B" },
      { text: "1-2 je, important ones", type: "C" },
      { text: "Mute semua, check bila free", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Telegram Premium kau ada?",
    options: [
      { text: "Ada! Worth every sen!", type: "A" },
      { text: "Thinking about it", type: "B" },
      { text: "Free version cukup", type: "C" },
      { text: "Apa tu Premium?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bot Telegram pernah explore?",
    options: [
      { text: "Expert! Ada bot untuk semua benda!", type: "A" },
      { text: "Guna beberapa yang useful", type: "B" },
      { text: "Tak explore sangat", type: "C" },
      { text: "Tak faham bot tu apa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Last Seen dan Read Receipts kau?",
    options: [
      { text: "Hidden! Nobody's business!", type: "A" },
      { text: "Visible to contacts only", type: "B" },
      { text: "Visible to everyone, tak kisah", type: "C" },
      { text: "Tak tahu macam mana nak setting", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau admin group Telegram tak?",
    options: [
      { text: "Multiple groups! Natural leader!", type: "A" },
      { text: "Satu dua je", type: "B" },
      { text: "Member je, tak nak tanggung jawab admin", type: "C" },
      { text: "Pernah, tapi quit sebab leceh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "File sharing kat Telegram, kau...",
    options: [
      { text: "Guna selalu! No size limit best!", type: "A" },
      { text: "Kadang-kadang untuk benda besar", type: "B" },
      { text: "Prefer cloud storage lain", type: "C" },
      { text: "Tak tahu boleh share files", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Telegram Power User",
    emoji: "⚡",
    description: "Kau maxed out semua Telegram features! Privacy conscious, bot master, channel curator. Telegram is your digital sanctuary!",
    traits: ["Tech-savvy", "Privacy-focused", "Feature explorer", "Digital native"],
    strengths: ["Know all features", "Efficient communication", "Organized channels"],
    weaknesses: ["Maybe too paranoid about privacy", "Overwhelming notifications"],
    tips: ["Teach others Telegram tips", "You're basically an ambassador!"],
  },
  B: {
    type: "B",
    title: "Smart User",
    emoji: "🧠",
    description: "Kau guna Telegram dengan bijak! Know the useful features, curate good content, maintain healthy digital boundaries. Efficient!",
    traits: ["Practical", "Selective", "Efficient", "Balanced"],
    strengths: ["Good curation", "Not overwhelmed", "Productive use"],
    weaknesses: ["Miss some cool features", "Could explore more"],
    tips: ["Check out bots", "So many hidden gems!"],
  },
  C: {
    type: "C",
    title: "Basic Chatter",
    emoji: "💬",
    description: "Kau pakai Telegram untuk chat je! Simple, straightforward, tak complicated. Sometimes less is more, kan?",
    traits: ["Simple", "Focused", "No-frills", "Direct"],
    strengths: ["Not distracted", "Clean app usage", "Focused communication"],
    weaknesses: ["Missing out on features", "Not fully utilizing"],
    tips: ["Explore channels and bots", "There's so much more!"],
  },
  D: {
    type: "D",
    title: "Sticker Enthusiast",
    emoji: "🎨",
    description: "Telegram kau untuk stickers dan fun! Expressive communication, creative chats, visual personality. Words are overrated!",
    traits: ["Creative", "Expressive", "Fun-loving", "Visual communicator"],
    strengths: ["Make chats fun", "Express emotions well", "Creative expression"],
    weaknesses: ["Over-reliance on stickers", "Sometimes unclear messages"],
    tips: ["Balance dengan words", "But keep being expressive!"],
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
