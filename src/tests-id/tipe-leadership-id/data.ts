// Tipe Leadership Kamu
// Tes ini mengungkap gaya kepemimpinan yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat tim butuh direction, kamu...",
    options: [
      { text: "Set vision jelas dan rally everyone", type: "A" },
      { text: "Analyze situation dan create detailed plan", type: "B" },
      { text: "Involve tim dalam decision making", type: "C" },
      { text: "Support individuals untuk find their way", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu handle underperformer...",
    options: [
      { text: "Direct feedback, clear expectations", type: "A" },
      { text: "Identify gaps, create improvement plan", type: "B" },
      { text: "Understand root cause together", type: "C" },
      { text: "Mentor dan coach patiently", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Decision making style kamu...",
    options: [
      { text: "Quick decisions, I'll own the outcome", type: "A" },
      { text: "Data-driven, analyze before deciding", type: "B" },
      { text: "Consensus-based, involve stakeholders", type: "C" },
      { text: "Empower tim untuk decide", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat tim mencapai success...",
    options: [
      { text: "Celebrate dan set next ambitious target", type: "A" },
      { text: "Document learnings dan best practices", type: "B" },
      { text: "Team celebration, shared recognition", type: "C" },
      { text: "Highlight individual contributions", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dealing with conflict dalam tim...",
    options: [
      { text: "Address directly, make the call", type: "A" },
      { text: "Facilitate rational discussion", type: "B" },
      { text: "Mediate untuk find common ground", type: "C" },
      { text: "Support both sides privately", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Communication style dengan tim...",
    options: [
      { text: "Inspiring speeches, town halls", type: "A" },
      { text: "Clear updates, structured meetings", type: "B" },
      { text: "Open discussions, two-way dialogue", type: "C" },
      { text: "One-on-one conversations", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Prioritas utama sebagai leader...",
    options: [
      { text: "Achieving ambitious results", type: "A" },
      { text: "Building efficient systems", type: "B" },
      { text: "Creating great team culture", type: "C" },
      { text: "Developing people", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat menghadapi crisis...",
    options: [
      { text: "Take charge, decisive action", type: "A" },
      { text: "Assess calmly, systematic response", type: "B" },
      { text: "Rally tim, collective problem solving", type: "C" },
      { text: "Support team through the storm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Delegation approach kamu...",
    options: [
      { text: "Assign tasks, expect results", type: "A" },
      { text: "Delegate dengan clear guidelines", type: "B" },
      { text: "Collaborative assignment", type: "C" },
      { text: "Give autonomy, available for support", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Legacy yang mau kamu tinggalkan...",
    options: [
      { text: "Transformed organization/industry", type: "A" },
      { text: "Sustainable systems dan processes", type: "B" },
      { text: "Amazing team culture", type: "C" },
      { text: "People I've developed into leaders", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Feedback style kamu ke tim...",
    options: [
      { text: "Direct dan challenging", type: "A" },
      { text: "Constructive dengan examples", type: "B" },
      { text: "Balanced, appreciation first", type: "C" },
      { text: "Encouraging, focus on growth", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi good leader menurutmu...",
    options: [
      { text: "Achieves exceptional results", type: "A" },
      { text: "Builds sustainable success", type: "B" },
      { text: "Inspires dan unites people", type: "C" },
      { text: "Grows future leaders", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Visionary Leader",
    emoji: "🔥",
    description: "Kamu adalah leader yang inspiring! Set bold vision, rally troops, dan drive transformational change. People follow you karena charisma dan conviction-mu.",
    traits: ["Visionary", "Charismatic", "Decisive", "Ambitious"],
    strengths: ["Inspire action", "Drive big changes", "Create excitement"],
    weaknesses: ["Can be overwhelming", "May overlook details", "High pressure on team"],
    tips: ["Balance vision dengan execution", "Listen to concerns", "Celebrate small wins too"],
  },
  B: {
    type: "B",
    title: "The Strategic Leader",
    emoji: "🧩",
    description: "Kamu adalah leader yang systematic! Build strong foundations, create efficient systems, dan lead dengan logic. Organizations you lead are well-run machines.",
    traits: ["Strategic", "Analytical", "Organized", "Pragmatic"],
    strengths: ["Sustainable success", "Clear processes", "Rational decisions"],
    weaknesses: ["Can be rigid", "May seem cold", "Slow to inspire"],
    tips: ["Connect emotionally too", "Embrace some chaos", "Lead hearts not just minds"],
  },
  C: {
    type: "C",
    title: "The Democratic Leader",
    emoji: "🌟",
    description: "Kamu adalah leader yang inclusive! Value input, build consensus, dan create positive culture. Teams you lead feel valued dan engaged.",
    traits: ["Inclusive", "Collaborative", "Empowering", "Diplomatic"],
    strengths: ["High engagement", "Great culture", "Diverse perspectives"],
    weaknesses: ["Slow decisions", "May avoid tough calls", "Consensus fatigue"],
    tips: ["Be decisive when needed", "Not all decisions need consensus", "Own tough choices"],
  },
  D: {
    type: "D",
    title: "The Servant Leader",
    emoji: "🌱",
    description: "Kamu adalah leader yang nurturing! Focus on developing people, remove obstacles, dan put team first. People you lead grow and thrive.",
    traits: ["Supportive", "Patient", "Humble", "Developmental"],
    strengths: ["Develop talent", "Loyal teams", "Sustainable growth"],
    weaknesses: ["May lack visibility", "Slow pace", "Undervalued by some"],
    tips: ["Don't forget results", "Self-promotion isn't bad", "Balance care dengan challenge"],
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
