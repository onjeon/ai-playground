// Tipe Mentor Kamu
// Tes ini mengungkap gaya mentoring yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat junior minta advice, kamu biasanya...",
    options: [
      { text: "Share pengalaman dan tell them what to do", type: "A" },
      { text: "Ask questions untuk help them think", type: "B" },
      { text: "Listen dulu, understand situation fully", type: "C" },
      { text: "Share resources dan let them figure out", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Feedback style kamu ke mentee...",
    options: [
      { text: "Direct dan honest, no sugarcoating", type: "A" },
      { text: "Structured: what's good, what to improve", type: "B" },
      { text: "Encouraging dengan gentle suggestions", type: "C" },
      { text: "Casual, when opportunity comes up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Meeting frequency dengan mentee ideally...",
    options: [
      { text: "Regular scheduled sessions", type: "A" },
      { text: "Structured dengan agenda", type: "B" },
      { text: "Flexible, when they need me", type: "C" },
      { text: "Ad-hoc, organic catch-ups", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat mentee bikin kesalahan...",
    options: [
      { text: "Point out langsung, teachable moment", type: "A" },
      { text: "Analyze together, find learnings", type: "B" },
      { text: "Support through the situation", type: "C" },
      { text: "Let them discover dan learn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Goal setting dengan mentee...",
    options: [
      { text: "I set challenging goals untuk them", type: "A" },
      { text: "Collaborative goal-setting process", type: "B" },
      { text: "Support their goals, whatever they are", type: "C" },
      { text: "Let them set their own direction", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Success metric untuk mentoring...",
    options: [
      { text: "Career advancement dan achievements", type: "A" },
      { text: "Skills growth dan capability", type: "B" },
      { text: "Confidence dan wellbeing", type: "C" },
      { text: "Independence dan self-sufficiency", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Topics kamu most enjoy discussing...",
    options: [
      { text: "Career strategy dan advancement", type: "A" },
      { text: "Technical skills dan problem-solving", type: "B" },
      { text: "Personal challenges dan growth", type: "C" },
      { text: "Big picture dan possibilities", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat mentee disagree dengan advice...",
    options: [
      { text: "Explain why I'm right dari experience", type: "A" },
      { text: "Discuss pros cons, find best path", type: "B" },
      { text: "Respect their perspective", type: "C" },
      { text: "Let them try their way", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Availability untuk mentee...",
    options: [
      { text: "Set hours, respect boundaries", type: "A" },
      { text: "Scheduled slots plus emergencies", type: "B" },
      { text: "Pretty available when they need", type: "C" },
      { text: "Respond when I can", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Teaching approach kamu...",
    options: [
      { text: "Tell them based on my experience", type: "A" },
      { text: "Structured framework dan methods", type: "B" },
      { text: "Socratic questioning, help discover", type: "C" },
      { text: "Point ke resources, self-learning", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Relationship dengan mentee ideally...",
    options: [
      { text: "Respected advisor dan sponsor", type: "A" },
      { text: "Trusted guide dan coach", type: "B" },
      { text: "Supportive friend dan confidant", type: "C" },
      { text: "Equal peer, mutual learning", type: "D" },
    ],
  },
  {
    id: 12,
    question: "What energizes you about mentoring...",
    options: [
      { text: "Seeing them succeed dan rise", type: "A" },
      { text: "Watching skills develop", type: "B" },
      { text: "Building meaningful relationships", type: "C" },
      { text: "Fresh perspectives from them", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Sponsor Mentor",
    emoji: "🎖️",
    description: "Kamu adalah mentor yang advocate! Direct, experience-based, dan actively push untuk mentee's advancement. You open doors dan share hard-earned wisdom.",
    traits: ["Direct", "Experienced", "Advocate", "Results-oriented"],
    strengths: ["Clear guidance", "Career acceleration", "Strong sponsorship"],
    weaknesses: ["May be too directive", "Less space for exploration", "Can create dependency"],
    tips: ["Let them make some mistakes", "Ask more questions", "Their path may differ from yours"],
  },
  B: {
    type: "B",
    title: "The Coach Mentor",
    emoji: "📋",
    description: "Kamu adalah mentor yang structured! Methodical approach, skill-focused, dan create clear development path. You help build real capabilities.",
    traits: ["Structured", "Skill-focused", "Methodical", "Developmental"],
    strengths: ["Clear progression", "Skill building", "Measurable growth"],
    weaknesses: ["May miss emotional needs", "Too structured sometimes", "Pressure to perform"],
    tips: ["Address whole person", "Flexibility helps", "Not everything can be planned"],
  },
  C: {
    type: "C",
    title: "The Nurturing Mentor",
    emoji: "🌱",
    description: "Kamu adalah mentor yang supportive! Focus on whole person, emotional support, dan safe space untuk grow. You build confidence dan resilience.",
    traits: ["Supportive", "Empathetic", "Patient", "Nurturing"],
    strengths: ["Psychological safety", "Build confidence", "Long-lasting relationships"],
    weaknesses: ["May be too soft", "Avoid tough feedback", "Slow progress sometimes"],
    tips: ["Challenge them too", "Growth sometimes uncomfortable", "Balance support dengan push"],
  },
  D: {
    type: "D",
    title: "The Empowering Mentor",
    emoji: "🦅",
    description: "Kamu adalah mentor yang empower! Give space, encourage independence, dan trust them to find their way. You create self-sufficient professionals.",
    traits: ["Empowering", "Trusting", "Hands-off", "Independence-focused"],
    strengths: ["Create autonomy", "No dependency", "Fresh perspectives from them"],
    weaknesses: ["May seem distant", "Less guidance when needed", "Might miss struggling mentees"],
    tips: ["Some structure helps early on", "Check in proactively", "Be more available untuk newer mentees"],
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
