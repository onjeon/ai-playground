// Jenis Anak Kau
// Test viral tentang anak personality type

export const questions = [
  {
    id: 1,
    question: "Bila mak ayah call, kau...",
    options: [
      { text: "Angkat terus, excited sembang!", type: "A" },
      { text: "Angkat, 'ha kenapa?'", type: "B" },
      { text: "Text balik 'busy, call later'", type: "C" },
      { text: "See then forget to reply", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Balik kampung, first thing kau buat?",
    options: [
      { text: "Peluk mak ayah kuat-kuat!", type: "A" },
      { text: "Salam, terus masuk bilik rehat", type: "B" },
      { text: "Cari makan, lapar!", type: "C" },
      { text: "Unpack dulu baru socialise", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Duit allowance/gaji kau share dengan family?",
    options: [
      { text: "Yes! Every month bagi parents!", type: "A" },
      { text: "Kadang-kadang bila mampu", type: "B" },
      { text: "Special occasions je", type: "C" },
      { text: "Student lagi, maybe one day", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Family WhatsApp group, kau...",
    options: [
      { text: "Active! Reply everything!", type: "A" },
      { text: "React je most times", type: "B" },
      { text: "Muted, check kadang-kadang", type: "C" },
      { text: "Left group long time ago", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila parents nak advice kau...",
    options: [
      { text: "Listen dengan penuh perhatian!", type: "A" },
      { text: "Listen, process, some I follow", type: "B" },
      { text: "Masuk telinga kiri keluar kanan", type: "C" },
      { text: "Avoid deep conversations", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kerja rumah bila balik kampung?",
    options: [
      { text: "Help semua! Cuci, masak, kemas!", type: "A" },
      { text: "Help sikit-sikit bila diminta", type: "B" },
      { text: "Rest first, I'm a guest now!", type: "C" },
      { text: "What housework?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cerita masalah dengan parents?",
    options: [
      { text: "Yes! They're my confidants!", type: "A" },
      { text: "Some things je, not everything", type: "B" },
      { text: "Jarang, jaga hati parents", type: "C" },
      { text: "Never, privacy penting", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Parents birthday, kau...",
    options: [
      { text: "Plan celebration dengan semua adik beradik!", type: "A" },
      { text: "Beli hadiah dan wish personally", type: "B" },
      { text: "WhatsApp wish je", type: "C" },
      { text: "Sometimes lupa, bad child!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila parents sakit...",
    options: [
      { text: "Balik terus jaga! Drop everything!", type: "A" },
      { text: "Check in selalu, visit bila mampu", type: "B" },
      { text: "Call tanya khabar", type: "C" },
      { text: "Hope adik beradik lain handle", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall relationship dengan parents?",
    options: [
      { text: "Super close! Best friends!", type: "A" },
      { text: "Good, healthy relationship", type: "B" },
      { text: "Okay, typical parent-child", type: "C" },
      { text: "Complicated, work in progress", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anak Mithali",
    emoji: "🏆",
    description: "Kau anak contoh! Close dengan parents, helpful, dan always show appreciation. Parents bangga dengan anak macam kau!",
    traits: ["Loving", "Caring", "Responsible", "Family-first"],
    strengths: ["Strong family bond", "Grateful child", "Support parents"],
    weaknesses: ["Maybe need own space sometimes", "Parents expectations high"],
    tips: ["It's okay to prioritize yourself too", "Balance is healthy!"],
  },
  B: {
    type: "B",
    title: "Anak Balanced",
    emoji: "⚖️",
    description: "Kau maintain good relationship dengan parents dengan healthy boundaries! Independent tapi still connected. Perfect balance!",
    traits: ["Balanced", "Independent", "Respectful", "Mature"],
    strengths: ["Healthy boundaries", "Own identity", "Good relationship"],
    weaknesses: ["Could show more appreciation", "Sometimes distant"],
    tips: ["Small gestures mean a lot", "Call lebih kerap!"],
  },
  C: {
    type: "C",
    title: "Anak Independent",
    emoji: "🦅",
    description: "Kau independent! Living your own life, family ada tapi tak clingy. Sometimes parents wonder what you're up to!",
    traits: ["Independent", "Distant", "Own path", "Private"],
    strengths: ["Self-reliant", "Own identity", "Not dependent"],
    weaknesses: ["Parents might miss you", "Could be closer"],
    tips: ["Reach out more often", "They won't be here forever"],
  },
  D: {
    type: "D",
    title: "Anak Misteri",
    emoji: "🌙",
    description: "Kau mysterious anak! Parents tak sure what's going on in your life. Maybe complicated relationship atau just very private!",
    traits: ["Private", "Mysterious", "Detached", "Independent"],
    strengths: ["Strong boundaries", "Self-reliant", "Own person"],
    weaknesses: ["Missing family connection", "Parents worry"],
    tips: ["Try opening up", "Family matters in the end"],
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
