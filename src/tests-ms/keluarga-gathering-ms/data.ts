// Gaya Family Gathering
// Test viral tentang family reunion behavior

export const questions = [
  {
    id: 1,
    question: "Family gathering announce, first thought?",
    options: [
      { text: "Yay! Finally jumpa semua!", type: "A" },
      { text: "Okay, bila dan mana?", type: "B" },
      { text: "Already thinking of excuses", type: "C" },
      { text: "Can I just video call instead?", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Role kau dalam organizing gathering?",
    options: [
      { text: "Main organizer! Plan semua!", type: "A" },
      { text: "Help dengan specific tasks", type: "B" },
      { text: "Attend je, tak involve organizing", type: "C" },
      { text: "What organizing? Just show up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cousins kau kenal semua tak?",
    options: [
      { text: "Yes! Names, ages, everything!", type: "A" },
      { text: "Close ones je, yang jauh tak kenal", type: "B" },
      { text: "Faces familiar, names confusing", type: "C" },
      { text: "Who are these people?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Conversation with extended family?",
    options: [
      { text: "Deep conversations, really connect!", type: "A" },
      { text: "Normal catch up, small talk", type: "B" },
      { text: "Surface level only", type: "C" },
      { text: "Nod and smile, minimal words", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Games and activities, kau join?",
    options: [
      { text: "Lead the games! Emcee mode!", type: "A" },
      { text: "Join kalau interesting", type: "B" },
      { text: "Watch from sidelines", type: "C" },
      { text: "Phone is more interesting", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kids kat gathering, kau...",
    options: [
      { text: "Play with them! Kids love me!", type: "A" },
      { text: "Interact sikit-sikit", type: "B" },
      { text: "Avoid, kids are chaotic", type: "C" },
      { text: "Let the actual parents handle", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Group photo time, kau...",
    options: [
      { text: "Organize everyone! 'Sikit lagi ke kanan!'", type: "A" },
      { text: "Join happily for photos", type: "B" },
      { text: "Hide at the back row", type: "C" },
      { text: "Photographer role to avoid being in photo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Elderly relatives, kau interact macam mana?",
    options: [
      { text: "Spend quality time, listen to stories!", type: "A" },
      { text: "Respectful greetings and basic chat", type: "B" },
      { text: "Quick salam and move on", type: "C" },
      { text: "Awkward, don't know what to say", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Family gathering memories...",
    options: [
      { text: "Best memories of my life!", type: "A" },
      { text: "Good memories, enjoyable", type: "B" },
      { text: "Mixed, some good some awkward", type: "C" },
      { text: "Can't remember much", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila gathering habis, feeling kau?",
    options: [
      { text: "Sad, wish it was longer!", type: "A" },
      { text: "Content, good to see family", type: "B" },
      { text: "Relief, finally over", type: "C" },
      { text: "Tired, need alone time now", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Family Champion",
    emoji: "🏆",
    description: "Kau LOVE family gatherings! Heart and soul into every reunion. The one who keeps extended family connected!",
    traits: ["Family-oriented", "Social", "Connector", "Enthusiastic"],
    strengths: ["Keep family together", "Great with all ages", "Positive energy"],
    weaknesses: ["Might exhaust yourself", "Take on too much responsibility"],
    tips: ["Let others help too", "Don't carry everything!"],
  },
  B: {
    type: "B",
    title: "Good Family Member",
    emoji: "👨‍👩‍👧‍👦",
    description: "Kau value family and show up! Maybe not over-enthusiastic but present and engaged. Solid family member!",
    traits: ["Present", "Respectful", "Reliable", "Moderate"],
    strengths: ["Consistent attendance", "Balanced approach", "No drama"],
    weaknesses: ["Could engage more", "Sometimes on autopilot"],
    tips: ["Put extra effort sometimes", "Deeper connections reward!"],
  },
  C: {
    type: "C",
    title: "Reluctant Relative",
    emoji: "😬",
    description: "Family gatherings stress you out! Go because obligation, survive and escape. Introvert or complicated family dynamics?",
    traits: ["Introverted", "Reluctant", "Stressed", "Survivor"],
    strengths: ["Self-aware", "Show up anyway", "Know your limits"],
    weaknesses: ["Missing bonding", "Might seem distant to family"],
    tips: ["Find your people in family", "One connection at a time!"],
  },
  D: {
    type: "D",
    title: "Digital Attendee",
    emoji: "📱",
    description: "Kau physically at gatherings tapi mentally elsewhere! Phone is escape, people overwhelming. Modern family member!",
    traits: ["Detached", "Phone-dependent", "Distant", "Modern"],
    strengths: ["Self-sufficient", "Low maintenance", "Independent"],
    weaknesses: ["Missing real connections", "Family might worry"],
    tips: ["Put phone down", "Present moments matter!"],
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
