// Gaya First Day Kerja Baru
// What's your new job first day style?

export const questions = [
  {
    id: 1,
    question: "Malam sebelum first day, kau...",
    options: [
      { text: "Prepare outfit, bag, documents, set 3 alarms!", type: "A" },
      { text: "Basic preparation, try relax", type: "B" },
      { text: "Netflix till late, worry tomorrow", type: "C" },
      { text: "Insomnia sebab nervous gila", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Arrival time first day...",
    options: [
      { text: "30 minit early! Make good impression!", type: "A" },
      { text: "15 minit early, reasonable", type: "B" },
      { text: "On time exactly", type: "C" },
      { text: "Late... tersesat/traffic (honest excuse)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Meeting new colleagues, kau...",
    options: [
      { text: "Introduce myself actively, remember names!", type: "A" },
      { text: "Friendly bila introduced, polite", type: "B" },
      { text: "Smile, nod, forget names immediately", type: "C" },
      { text: "Awkward wave, hope they don't talk to me", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lunch first day, kau...",
    options: [
      { text: "Join colleagues, start building relationship!", type: "A" },
      { text: "Accept invitation bila asked", type: "B" },
      { text: "Quick lunch, back to figure things out", type: "C" },
      { text: "Hide somewhere, makan alone", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Information overload first day. Kau...",
    options: [
      { text: "Take notes semua, ask clarifying questions!", type: "A" },
      { text: "Note key things, ask bila confused", type: "B" },
      { text: "Nod along, Google later", type: "C" },
      { text: "Overwhelmed, nothing goes in", type: "D" },
    ],
  },
  {
    id: 6,
    question: "First task assigned. Approach?",
    options: [
      { text: "Clarify expectations, deliver above expected!", type: "A" },
      { text: "Do best dengan information given", type: "B" },
      { text: "Try figure out, ask kalau stuck", type: "C" },
      { text: "Panic internally, stare at screen", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Office culture observation kau...",
    options: [
      { text: "Study actively - dress code, communication style!", type: "A" },
      { text: "Pick up naturally, adapt gradually", type: "B" },
      { text: "Follow what others do", type: "C" },
      { text: "Too stressed to notice anything", type: "D" },
    ],
  },
  {
    id: 8,
    question: "End of first day, energy level...",
    options: [
      { text: "Energized! Excited for tomorrow!", type: "A" },
      { text: "Tired tapi positive", type: "B" },
      { text: "Exhausted dari social interaction", type: "C" },
      { text: "Questioning life choices", type: "D" },
    ],
  },
  {
    id: 9,
    question: "First week goal kau...",
    options: [
      { text: "Impress everyone, learn everything!", type: "A" },
      { text: "Understand basics, build relationships", type: "B" },
      { text: "Survive without major mistakes", type: "C" },
      { text: "Not get fired dalam first week", type: "D" },
    ],
  },
  {
    id: 10,
    question: "First day outfit chosen...",
    options: [
      { text: "Research office dress code, perfect outfit!", type: "A" },
      { text: "Smart professional, safe choice", type: "B" },
      { text: "Whatever looks decent", type: "C" },
      { text: "Last minute panic grab from wardrobe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "New Job Superstar",
    emoji: "🌟",
    description: "First day, best foot forward! Kau prepared, eager, dan ready to impress. Colleagues probably think kau overachiever (they're right!)",
    traits: ["Super prepared", "Eager beaver", "Impression-conscious", "Proactive"],
    strengths: ["Great first impression", "Fast integration", "Sets positive tone"],
    weaknesses: ["High pressure on yourself", "May burnout maintaining standards"],
    tips: ["Sustainable pace important!", "First impressions matter but don't overdo"],
  },
  B: {
    type: "B",
    title: "Smooth Starter",
    emoji: "👌",
    description: "Confident dan calm starting new job! Kau prepared enough, adapt well, dan come across professional. Solid new hire!",
    traits: ["Balanced preparation", "Adaptable", "Professional", "Confident"],
    strengths: ["Good first impression", "Sustainable approach", "Likeable vibe"],
    weaknesses: ["May not stand out immediately", "Average start"],
    tips: ["Show initiative bila ready", "Your calm approach is strength"],
  },
  C: {
    type: "C",
    title: "Survival Mode Starter",
    emoji: "🎭",
    description: "New job adalah overwhelming! Kau focus on surviving first, thriving later. Social battery drains fast on day one!",
    traits: ["Minimal preparation", "Survival focus", "Socially drained", "Information overload"],
    strengths: ["Authentic approach", "Don't overpromise", "Room to grow"],
    weaknesses: ["May miss making good impression", "Slower integration"],
    tips: ["Little preparation helps confidence", "Push out of comfort zone sikit"],
  },
  D: {
    type: "D",
    title: "Anxious New Starter",
    emoji: "😰",
    description: "First day anxiety adalah REAL untuk kau! Nervous wreck, overwhelmed, questioning whether you made right choice. Deep breaths!",
    traits: ["High anxiety", "Overwhelmed easily", "Nervous presenter", "Self-doubt"],
    strengths: ["Humble beginning", "Can only go up from here", "Relatable to many"],
    weaknesses: ["Anxiety affects performance", "Miss opportunities to connect"],
    tips: ["Everyone nervous on first day!", "It gets better, promise!"],
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
