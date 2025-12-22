// Gaya Study Group Anda
// Apa role anda dalam study group?

export const questions = [
  {
    id: 1,
    question: "Dalam study group, anda biasanya...",
    options: [
      { text: "Jadi leader, organize semua", type: "A" },
      { text: "Contribute ideas dan notes", type: "B" },
      { text: "Dengar dan belajar dari orang lain", type: "C" },
      { text: "Datang untuk makan dan borak", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila group meeting, anda...",
    options: [
      { text: "On time, siap dengan agenda", type: "A" },
      { text: "On time, bawa notes", type: "B" },
      { text: "Lambat sikit tapi sampai", type: "C" },
      { text: "Last minute cancel 50% of the time", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Discussion dalam group, anda...",
    options: [
      { text: "Lead discussion, banyak input", type: "A" },
      { text: "Share bila ada point nak buat", type: "B" },
      { text: "Dengar lebih banyak dari cakap", type: "C" },
      { text: "Scroll phone sambil dengar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila ada conflict dalam group...",
    options: [
      { text: "Mediate dan selesaikan", type: "A" },
      { text: "Bagi pendapat diplomatic", type: "B" },
      { text: "Stay out of it", type: "C" },
      { text: "Enjoy drama je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Notes dan resources, anda...",
    options: [
      { text: "Share semua yang anda ada", type: "A" },
      { text: "Share kalau orang minta", type: "B" },
      { text: "Harap dapat dari orang lain", type: "C" },
      { text: "Apa notes? Tak buat pun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila groupmate tak faham topik...",
    options: [
      { text: "Explain sampai dia faham", type: "A" },
      { text: "Try tolong sebolehnya", type: "B" },
      { text: "Sama-sama tak faham", type: "C" },
      { text: "Good luck bro!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Group assignment deadline approaching...",
    options: [
      { text: "Check progress semua orang", type: "A" },
      { text: "Make sure bahagian anda siap", type: "B" },
      { text: "Last minute rush", type: "C" },
      { text: "Harap orang lain cover", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Study session location, anda prefer...",
    options: [
      { text: "Library - focused environment", type: "A" },
      { text: "Café - comfortable dan nice", type: "B" },
      { text: "Rumah kawan - free food", type: "C" },
      { text: "Online je - tak payah keluar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Selepas study session, anda rasa...",
    options: [
      { text: "Productive! Banyak belajar", type: "A" },
      { text: "Okay, dapat sikit knowledge", type: "B" },
      { text: "Lebih banyak borak dari study", type: "C" },
      { text: "Penat tapi tak belajar apa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Group WhatsApp anda macam mana?",
    options: [
      { text: "Active dengan study discussions", type: "A" },
      { text: "Mix study dan casual chat", type: "B" },
      { text: "Lebih banyak memes dari study", type: "C" },
      { text: "Mute, tak check pun", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Group Leader",
    emoji: "👑",
    description: "Anda backbone study group! Organize, lead, dan make sure everyone on track. Without you, group tak function!",
    traits: ["Leader", "Organized", "Responsible", "Helpful"],
    strengths: ["Great organizer", "Keeps group on track", "Reliable"],
    weaknesses: ["May burn out", "Takes on too much"],
    tips: ["Delegate more", "Take care of yourself too"],
  },
  B: {
    type: "B",
    title: "Solid Contributor",
    emoji: "🤝",
    description: "Reliable team player! Anda buat bahagian anda dengan baik dan tolong bila perlu. Every group needs you!",
    traits: ["Reliable", "Team player", "Consistent", "Helpful"],
    strengths: ["Dependable", "Fair contributor", "Good teammate"],
    weaknesses: ["Could lead more", "Stays in comfort zone"],
    tips: ["Step up kadang-kadang", "Share your ideas more"],
  },
  C: {
    type: "C",
    title: "Silent Learner",
    emoji: "👂",
    description: "Anda lebih suka absorb dari orang lain. Quiet tapi learning. Kadang-kadang the best ideas come from observers!",
    traits: ["Observer", "Listener", "Quiet", "Learning"],
    strengths: ["Good listener", "Learns from others", "Non-disruptive"],
    weaknesses: ["Could contribute more", "Relies on others"],
    tips: ["Share your thoughts", "Your input matters too!"],
  },
  D: {
    type: "D",
    title: "Social Butterfly",
    emoji: "🦋",
    description: "Study group? More like hangout session! Anda datang untuk kawan dan vibes. Belajar sikit-sikit lah... kot!",
    traits: ["Social", "Fun", "Relaxed", "Easy-going"],
    strengths: ["Good for morale", "Makes it fun", "Stress reliever"],
    weaknesses: ["Not productive", "Free rider tendency"],
    tips: ["Actually study sikit", "Be fair to groupmates"],
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
