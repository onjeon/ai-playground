// Tes Tipe Pemimpin Kamu
// Temukan leadership style yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat tim menghadapi masalah besar...",
    options: [
      { text: "Take charge dan kasih arahan jelas", type: "A" },
      { text: "Brainstorm bareng tim untuk solusi", type: "B" },
      { text: "Support tim dan pastikan mereka okay", type: "C" },
      { text: "Delegate ke yang paling capable", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Decision making style kamu...",
    options: [
      { text: "Decisive, ambil keputusan cepat", type: "A" },
      { text: "Discuss dulu, collective decision", type: "B" },
      { text: "Consider semua orang sebelum decide", type: "C" },
      { text: "Trust tim untuk decide sendiri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu memotivasi tim...",
    options: [
      { text: "Set challenging goals dan lead by example", type: "A" },
      { text: "Celebrate wins dan encourage collaboration", type: "B" },
      { text: "Personal connection dan emotional support", type: "C" },
      { text: "Give freedom dan trust mereka", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat anggota tim underperform...",
    options: [
      { text: "Direct feedback dan clear expectations", type: "A" },
      { text: "Coach dan help them improve", type: "B" },
      { text: "Understand situasi mereka dulu", type: "C" },
      { text: "Give them space to figure out", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Meeting style kamu...",
    options: [
      { text: "Efficient, agenda-driven, to the point", type: "A" },
      { text: "Interactive, everyone contributes", type: "B" },
      { text: "Check-in dulu, see how everyone is doing", type: "C" },
      { text: "Minimal meetings, async communication", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Credit untuk success...",
    options: [
      { text: "Team effort, tapi I led it well", type: "A" },
      { text: "Always share credit dengan tim", type: "B" },
      { text: "Give all credit to team", type: "C" },
      { text: "Everyone did their part independently", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Handling conflict dalam tim...",
    options: [
      { text: "Address langsung dan resolve", type: "A" },
      { text: "Facilitate discussion untuk common ground", type: "B" },
      { text: "Mediate dengan empathy", type: "C" },
      { text: "Let them sort it out themselves", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Vision dan direction...",
    options: [
      { text: "I set the vision, tim executes", type: "A" },
      { text: "Co-create vision with team", type: "B" },
      { text: "Vision yang serves everyone's needs", type: "C" },
      { text: "Flexible, adapt as we go", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Communication dengan tim...",
    options: [
      { text: "Clear directives dan updates", type: "A" },
      { text: "Open dialogue, two-way", type: "B" },
      { text: "Personal, know each person", type: "C" },
      { text: "As needed, trust them to ask", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Delegation style...",
    options: [
      { text: "Assign tasks dengan clear instructions", type: "A" },
      { text: "Match tasks dengan strengths", type: "B" },
      { text: "Consider preferences dan development", type: "C" },
      { text: "Full autonomy untuk choose tasks", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Under pressure, kamu...",
    options: [
      { text: "Take control dan guide through", type: "A" },
      { text: "Rally team dan work together", type: "B" },
      { text: "Calm everyone dan provide support", type: "C" },
      { text: "Trust team to handle their parts", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tim melihat kamu sebagai...",
    options: [
      { text: "Strong leader yang bisa diandalkan", type: "A" },
      { text: "Collaborative partner", type: "B" },
      { text: "Supportive mentor", type: "C" },
      { text: "Hands-off enabler", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Authoritative Leader",
    emoji: "👑",
    description: "Kamu adalah pemimpin yang decisive dan directional! Clear vision, strong direction, dan lead from the front. Great in crisis dan when direction needed.",
    traits: ["Decisive", "Directional", "Confident", "Results-oriented"],
    strengths: ["Clear leadership", "Fast decisions", "Good in crisis"],
    weaknesses: ["Can seem dominating", "Might not include others enough"],
    tips: ["Include team voices", "Collaboration strengthens decisions"],
  },
  B: {
    type: "B",
    title: "Democratic Leader",
    emoji: "🤝",
    description: "Kamu adalah pemimpin yang collaborative! Value input dari semua orang dan make decisions together. Creates engaged dan invested team.",
    traits: ["Collaborative", "Inclusive", "Team-oriented", "Fair"],
    strengths: ["High team engagement", "Better decisions", "Buy-in"],
    weaknesses: ["Slower decisions", "Not always feasible"],
    tips: ["Sometimes quick decisions needed", "Know when to take charge"],
  },
  C: {
    type: "C",
    title: "Servant Leader",
    emoji: "💝",
    description: "Kamu adalah pemimpin yang servant-hearted! Put team first, focus on their growth dan wellbeing. Creates loyal dan supported team.",
    traits: ["Caring", "Supportive", "People-first", "Empathetic"],
    strengths: ["High loyalty", "Great development", "Positive culture"],
    weaknesses: ["Might neglect results", "Can be taken advantage of"],
    tips: ["Balance care dengan accountability", "Your needs matter too"],
  },
  D: {
    type: "D",
    title: "Laissez-faire Leader",
    emoji: "🦅",
    description: "Kamu adalah pemimpin yang hands-off! Trust tim untuk self-manage dan give autonomy. Works great dengan experienced teams.",
    traits: ["Trusting", "Autonomous", "Freedom-giving", "Relaxed"],
    strengths: ["Empowering", "Great for seniors", "Low micromanagement"],
    weaknesses: ["Can lack direction", "Not good for juniors", "Accountability issues"],
    tips: ["Some guidance needed", "Check in more regularly", "Not all teams are self-sufficient"],
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
