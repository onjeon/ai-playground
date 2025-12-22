// Tahap Set Boundary
// Macam mana kau set dan maintain boundaries?

export const questions = [
  {
    id: 1,
    question: "Kawan minta tolong tapi kau dah exhausted. Kau...",
    options: [
      { text: "Cakap terus 'Sorry, tak boleh harini'", type: "A" },
      { text: "Explain situation dan offer alternative", type: "B" },
      { text: "Tolong jugak walaupun penat", type: "C" },
      { text: "Bagi excuse, tak sampai hati cakap no", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Colleague selalu ganggu masa kerja kau. Kau...",
    options: [
      { text: "Cakap terus 'Sorry, busy sekarang'", type: "A" },
      { text: "Set specific time untuk chat", type: "B" },
      { text: "Layan je walaupun annoying", type: "C" },
      { text: "Hint-hint tapi tak cakap direct", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Family selalu comment pasal life choices kau. Kau...",
    options: [
      { text: "Cakap firm 'Itu keputusan saya'", type: "A" },
      { text: "Explain reasoning, hope they understand", type: "B" },
      { text: "Dengar je, nanti gaduh pulak", type: "C" },
      { text: "Change topic atau avoid gathering", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Orang selalu minta favour dekat kau. Kau...",
    options: [
      { text: "Cakap no bila tak convenient", type: "A" },
      { text: "Help bila boleh, decline bila tak boleh", type: "B" },
      { text: "Almost always say yes", type: "C" },
      { text: "Say yes then regret later", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Partner nak tau password semua accounts kau. Kau...",
    options: [
      { text: "Tak bagi, privacy penting", type: "A" },
      { text: "Discuss kenapa dia nak, then decide", type: "B" },
      { text: "Bagi je, nothing to hide pun", type: "C" },
      { text: "Bagi tapi rasa uncomfortable", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila orang overshare problems pada kau non-stop, kau...",
    options: [
      { text: "Cakap 'I need break from heavy topics'", type: "A" },
      { text: "Listen then redirect conversation", type: "B" },
      { text: "Dengar semua walaupun drained", type: "C" },
      { text: "Dengar tapi slowly distance", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Boss minta kerja overtime last minute. Kau...",
    options: [
      { text: "Decline kalau ada plans", type: "A" },
      { text: "Negotiate atau offer alternative", type: "B" },
      { text: "Cancel plans dan stay", type: "C" },
      { text: "Stay tapi complain dalam hati", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Orang baru kenal tanya soalan personal sangat. Kau...",
    options: [
      { text: "Cakap 'Prefer tak share tu'", type: "A" },
      { text: "Give vague answer, redirect topic", type: "B" },
      { text: "Answer walaupun uncomfortable", type: "C" },
      { text: "Answer then regret sharing", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kawan selalu cancel plans last minute. Kau...",
    options: [
      { text: "Cakap terus kau tak okay dengan pattern ni", type: "A" },
      { text: "Mention calmly it affects you", type: "B" },
      { text: "Tak cakap apa, biar je", type: "C" },
      { text: "Stop making plans, tapi tak explain why", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Describe boundary setting skill kau.",
    options: [
      { text: "Strong, I know my limits", type: "A" },
      { text: "Getting better, work in progress", type: "B" },
      { text: "Weak, I tend to say yes to everything", type: "C" },
      { text: "Exist tapi tak consistent", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Boundary Boss",
    emoji: "🛡️",
    description: "Wah, boundaries kau solid! Kau tahu limits kau dan tak takut enforce them. Kau respect diri sendiri dan expect others to do the same!",
    traits: ["Assertive", "Self-aware", "Confident", "Clear communicator"],
    strengths: ["Protect mental health", "Clear expectations", "Respected by others"],
    weaknesses: ["May seem cold kadang-kadang", "Others mungkin tak faham", "Risk being seen as inflexible"],
    tips: ["Balance firmness dengan flexibility", "Explain why bila perlu", "Stay kind while being firm"],
  },
  B: {
    type: "B",
    title: "Balanced Boundary Setter",
    emoji: "⚖️",
    description: "Kau ada healthy balance! Boleh set boundaries tapi dengan kindness. Flexible bila perlu tapi tahu bila nak firm. Great approach!",
    traits: ["Balanced", "Diplomatic", "Flexible", "Considerate"],
    strengths: ["Maintain relationships", "Communicate well", "Adapt to situations"],
    weaknesses: ["Sometimes boundaries slip", "May overthink how to say no"],
    tips: ["Keep practicing", "Trust your instincts", "Its okay to be more firm"],
  },
  C: {
    type: "C",
    title: "Boundary Beginner",
    emoji: "🌱",
    description: "Kau struggle dengan boundaries. Heart too big sampai susah nak say no! Kau prioritize others over yourself. Sweet tapi need self-care!",
    traits: ["Selfless", "Accommodating", "People-pleaser", "Kind"],
    strengths: ["Everyone loves you", "Reliable friend", "Generous"],
    weaknesses: ["Burnout risk high", "People may take advantage", "Resentment may build"],
    tips: ["Start with small boundaries", "Your needs matter too", "'No' is a complete sentence"],
  },
  D: {
    type: "D",
    title: "Passive Boundary Keeper",
    emoji: "🎭",
    description: "Kau ada boundaries tapi struggle to communicate them directly. End up hinting atau avoiding instead of addressing. Time to practice saying no!",
    traits: ["Indirect", "Conflict-avoidant", "Passive", "Non-confrontational"],
    strengths: ["Avoid immediate conflict", "Diplomatic", "Non-aggressive"],
    weaknesses: ["Boundaries not respected", "Issues unresolved", "Build up frustration"],
    tips: ["Practice direct communication", "Its okay to disappoint people", "Clear is kind"],
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
