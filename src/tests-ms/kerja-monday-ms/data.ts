// Gaya Monday Blues Kau
// How do you handle Monday mornings?

export const questions = [
  {
    id: 1,
    question: "Alarm berbunyi Monday pagi. First reaction?",
    options: [
      { text: "Okay let's go! New week new energy!", type: "A" },
      { text: "Snooze sekali... okay bangun", type: "B" },
      { text: "Snooze 5 kali minimum", type: "C" },
      { text: "Consider MC... tapi tak jadi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Routine pagi Monday kau...",
    options: [
      { text: "Gym dulu, breakfast proper, sampai awal!", type: "A" },
      { text: "Normal routine, sampai on time", type: "B" },
      { text: "Rush! Skip breakfast, grab kopi je", type: "C" },
      { text: "Survive mode - bare minimum effort", type: "D" },
    ],
  },
  {
    id: 3,
    question: "First hour di office Monday, kau...",
    options: [
      { text: "Plan the week, set priorities!", type: "A" },
      { text: "Check emails, ease into work", type: "B" },
      { text: "Kopi dulu, gossip sikit dengan colleague", type: "C" },
      { text: "Stare at screen while soul loads...", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Monday meeting. Energy level kau...",
    options: [
      { text: "Ready to contribute dan brainstorm!", type: "A" },
      { text: "Present dan attentive", type: "B" },
      { text: "Body ada, mind somewhere else", type: "C" },
      { text: "Survival mode - jangan kena call nama je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Lunch Monday, kau...",
    options: [
      { text: "Quick healthy lunch, back to work!", type: "A" },
      { text: "Normal lunch dengan colleagues", type: "B" },
      { text: "Comfort food needed! Nasi lemak extra!", type: "C" },
      { text: "Long lunch break sebab Monday kan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Petang Monday, productivity kau...",
    options: [
      { text: "Still going strong! Week baru start!", type: "A" },
      { text: "Okay la, maintain pace", type: "B" },
      { text: "Mula slow down, waiting for 6pm", type: "C" },
      { text: "Mentally checked out since 3pm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sunday malam, thoughts pasal Monday...",
    options: [
      { text: "Excited plan for the week!", type: "A" },
      { text: "Relax je, Monday will come", type: "B" },
      { text: "Sunday scaries start creeping in", type: "C" },
      { text: "Existential crisis about life choices", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Outfit Monday kau biasanya...",
    options: [
      { text: "Best outfit! Start week dengan confident!", type: "A" },
      { text: "Normal office wear, presentable", type: "B" },
      { text: "Whatever clean dalam wardrobe", type: "C" },
      { text: "Oversized - hide the Monday energy", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kopi/Teh consumption on Monday...",
    options: [
      { text: "Normal amount, tak need extra", type: "A" },
      { text: "Satu je cukup untuk start", type: "B" },
      { text: "Double shot minimum!", type: "C" },
      { text: "IV drip kopi terus kalau boleh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Monday kau describe dalam satu perkataan...",
    options: [
      { text: "Opportunity!", type: "A" },
      { text: "Normal", type: "B" },
      { text: "Struggle", type: "C" },
      { text: "Nightmare", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Monday Motivation Monster",
    emoji: "🚀",
    description: "Monday Blues? What's that? Kau wake up ready to conquer the world! Colleagues probably annoyed dengan energy level kau pagi Monday!",
    traits: ["High energy", "Optimistic", "Productive", "Morning person"],
    strengths: ["Great start to week", "Inspiring untuk team", "Achieve lebih banyak"],
    weaknesses: ["Others may find you annoying", "Mungkin burnout later"],
    tips: ["Pace yourself", "Not everyone shares your Monday energy"],
  },
  B: {
    type: "B",
    title: "Monday Neutral",
    emoji: "😊",
    description: "Kau accept Monday macam accept cuaca - it is what it is! Tak excited lebih, tak complain lebih. Balanced approach!",
    traits: ["Balanced", "Adaptable", "Consistent", "Emotionally stable"],
    strengths: ["Steady performance", "No drama", "Reliable"],
    weaknesses: ["May lack excitement", "Routine might get boring"],
    tips: ["Add sikit excitement occasionally", "Small treats help"],
  },
  C: {
    type: "C",
    title: "Monday Survivor",
    emoji: "😫",
    description: "Monday is the enemy dan kau sentiasa dalam battle mode! Survive Monday dulu, thrive later. Comfort food adalah senjata utama!",
    traits: ["Monday-resistant", "Comfort seeker", "Slow starter", "Weekend lover"],
    strengths: ["Self-aware", "Know your limits", "Appreciate weekends"],
    weaknesses: ["Slow productivity Monday", "Miss morning opportunities"],
    tips: ["Prepare Monday dari Sunday", "Monday rewards help motivate"],
  },
  D: {
    type: "D",
    title: "Monday Zombie",
    emoji: "🧟",
    description: "Monday dan kau adalah sworn enemies! Kau present physically, tapi soul masih kat weekend. Walking zombie sampai at least Tuesday!",
    traits: ["Extreme Monday allergy", "Weekend attachment issues", "Coffee dependent", "Slow to function"],
    strengths: ["Great weekend planning", "Appreciate time off", "Relatable to many"],
    weaknesses: ["Monday productivity hampir zero", "May affect career"],
    tips: ["Sleep early Sunday", "Consider kalau job fit atau tidak"],
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
