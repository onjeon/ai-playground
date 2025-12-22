// Gaya Leadership Kau
// Macam mana kau lead bila given the chance?

export const questions = [
  {
    id: 1,
    question: "Bila kena lead project, kau...",
    options: [
      { text: "Take charge terus, delegate tasks", type: "A" },
      { text: "Discuss dengan team, then guide", type: "B" },
      { text: "Support everyone, ensure harmony", type: "C" },
      { text: "Give freedom, check in bila perlu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila team member tak perform, kau...",
    options: [
      { text: "Address it directly, expect improvement", type: "A" },
      { text: "Coach dan help them improve", type: "B" },
      { text: "Understand their situation, support gently", type: "C" },
      { text: "Give space, hope they figure it out", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Decision making style kau?",
    options: [
      { text: "Decide fast, move forward", type: "A" },
      { text: "Gather input, then decide", type: "B" },
      { text: "Consensus dengan everyone", type: "C" },
      { text: "Let team decide, support their choice", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila ada conflict dalam team, kau...",
    options: [
      { text: "Resolve it decisively, move on", type: "A" },
      { text: "Mediate dan find win-win", type: "B" },
      { text: "Focus on feelings dan harmony", type: "C" },
      { text: "Let them sort it out themselves", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Feedback style kau sebagai leader?",
    options: [
      { text: "Direct dan frequent", type: "A" },
      { text: "Constructive dan scheduled", type: "B" },
      { text: "Gentle dan encouraging", type: "C" },
      { text: "Minimal, trust them", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila team achieve success, kau...",
    options: [
      { text: "Acknowledge, set next challenge", type: "A" },
      { text: "Celebrate together, recognize contributions", type: "B" },
      { text: "Make sure everyone feels appreciated", type: "C" },
      { text: "Let them enjoy, stay background", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kau prefer lead team yang...",
    options: [
      { text: "Competitive dan ambitious", type: "A" },
      { text: "Collaborative dan skilled", type: "B" },
      { text: "Supportive dan harmonious", type: "C" },
      { text: "Independent dan self-driven", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila ada crisis, kau...",
    options: [
      { text: "Take control, direct action", type: "A" },
      { text: "Assess situation, strategic response", type: "B" },
      { text: "Support team emotionally first", type: "C" },
      { text: "Trust team to handle, assist bila asked", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Meeting style kau?",
    options: [
      { text: "Short, focused, action-oriented", type: "A" },
      { text: "Structured dengan clear agenda", type: "B" },
      { text: "Inclusive, everyone gets to share", type: "C" },
      { text: "Minimal meetings, trust written updates", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Leadership motto kau?",
    options: [
      { text: "Lead from the front, set the pace", type: "A" },
      { text: "Guide and develop, grow together", type: "B" },
      { text: "Care for people, results will follow", type: "C" },
      { text: "Empower others, stay supportive", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Commander",
    emoji: "⚡",
    description: "Kau the decisive leader! Take charge, make decisions, get things done. People know exactly what to do bila kau lead. Efficient tapi can be intense!",
    traits: ["Decisive", "Direct", "Results-driven", "Authoritative"],
    strengths: ["Clear direction", "Fast execution", "Crisis management pro"],
    weaknesses: ["May not hear others' input", "Can intimidate", "Team may not feel valued"],
    tips: ["Listen more", "Appreciate soft skills", "Empower, not just direct"],
  },
  B: {
    type: "B",
    title: "The Coach",
    emoji: "🎯",
    description: "Kau the developmental leader! Guide, mentor, and grow your team. Balance results dengan people development. Great at building capable teams!",
    traits: ["Guiding", "Strategic", "Developmental", "Balanced"],
    strengths: ["Build strong teams", "Sustainable results", "Respected leader"],
    weaknesses: ["Can take longer to decide", "May overthink approach"],
    tips: ["Trust your instincts more", "Sometimes quick decisions needed"],
  },
  C: {
    type: "C",
    title: "The Nurturer",
    emoji: "💚",
    description: "Kau the people-first leader! Create supportive environment, care deeply about team wellbeing. Loyal teams love you tapi sometimes results may lag!",
    traits: ["Caring", "Supportive", "Harmonious", "Empathetic"],
    strengths: ["High team morale", "Loyal team members", "Inclusive environment"],
    weaknesses: ["May avoid tough decisions", "Results sometimes secondary", "Can be too soft"],
    tips: ["Balance care dengan accountability", "Sometimes tough love needed"],
  },
  D: {
    type: "D",
    title: "The Delegator",
    emoji: "🦅",
    description: "Kau the hands-off leader! Trust your team, give autonomy, support bila needed. Works great dengan mature teams, may struggle dengan less independent ones!",
    traits: ["Trusting", "Hands-off", "Empowering", "Relaxed"],
    strengths: ["Team feels trusted", "Develop independence", "Low micromanagement"],
    weaknesses: ["Some team needs more guidance", "May seem uninvolved", "Accountability gaps"],
    tips: ["Check in more dengan some team members", "Balance freedom dengan structure"],
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
