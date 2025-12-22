// Gaya Kejar Promotion
// What's your promotion hunting style?

export const questions = [
  {
    id: 1,
    question: "Performance review coming. Preparation kau?",
    options: [
      { text: "Document semua achievement, ready to present!", type: "A" },
      { text: "Prepare key points, professional approach", type: "B" },
      { text: "Tunggu boss evaluate je", type: "C" },
      { text: "Promotion? Survive je dah syukur", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada opportunity high-visibility project. Kau...",
    options: [
      { text: "Volunteer terus! Exposure important!", type: "A" },
      { text: "Join kalau sesuai dengan skill", type: "B" },
      { text: "Tengok dulu workload current", type: "C" },
      { text: "Let others have it, more work je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Colleague sama level dapat promotion dulu. Reaksi?",
    options: [
      { text: "Analyze kenapa dia dapat, learn dari itu!", type: "A" },
      { text: "Congrats, my turn will come", type: "B" },
      { text: "Bit jealous, tapi accept je", type: "C" },
      { text: "Whatever, title je pun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Strategy untuk dapat noticed oleh management...",
    options: [
      { text: "Active in meetings, volunteer, network dengan bosses!", type: "A" },
      { text: "Deliver good work consistently", type: "B" },
      { text: "Hope hard work akan noticed naturally", type: "C" },
      { text: "Don't care, work is work", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila salary review, kau...",
    options: [
      { text: "Present case dengan data dan justification!", type: "A" },
      { text: "Discuss professionally dengan HR/boss", type: "B" },
      { text: "Accept whatever company offer", type: "C" },
      { text: "Too awkward nak nego", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mentor atau sponsor dalam company, kau ada?",
    options: [
      { text: "Multiple! Cultivated relationships dengan seniors!", type: "A" },
      { text: "Ada satu dua yang help guide", type: "B" },
      { text: "Not really, work dengan immediate team je", type: "C" },
      { text: "What's a mentor? Boss ke?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cross-functional atau extra committee work...",
    options: [
      { text: "Join banyak! Visibility dan experience!", type: "A" },
      { text: "Select yang relevant untuk career", type: "B" },
      { text: "Core job enough already", type: "C" },
      { text: "More work, same pay? No thanks", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Career development plan kau...",
    options: [
      { text: "Clear 5-year plan dengan milestones!", type: "A" },
      { text: "General idea of direction", type: "B" },
      { text: "Go with the flow", type: "C" },
      { text: "Survive month to month", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Training dan certification, kau...",
    options: [
      { text: "Proactively pursue! Resume stacking!", type: "A" },
      { text: "Take bila company offer", type: "B" },
      { text: "Bila perlu je", type: "C" },
      { text: "Work experience enough kan?", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal career trajectory untuk kau...",
    options: [
      { text: "Fast track to senior management!", type: "A" },
      { text: "Steady climb dengan balance", type: "B" },
      { text: "Comfortable position is fine", type: "C" },
      { text: "Same level also okay, less stress", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Promotion Hunter",
    emoji: "🏹",
    description: "Promotion adalah goal utama! Kau strategic, ambitious, dan willing to do whatever it takes untuk climb that ladder. Future CEO material!",
    traits: ["Highly ambitious", "Strategic", "Visibility seeker", "Career-focused"],
    strengths: ["Fast career progression", "Clear direction", "Proactive attitude"],
    weaknesses: ["May step on others", "Work-life balance issue", "Burnout risk"],
    tips: ["Remember relationships matter too", "Don't sacrifice health untuk title"],
  },
  B: {
    type: "B",
    title: "Professional Climber",
    emoji: "📈",
    description: "Kau nak progress tapi dengan cara yang sustainable. Quality work, professional approach, trust the process. Slow and steady!",
    traits: ["Balanced ambition", "Professional", "Patient", "Consistent performer"],
    strengths: ["Sustainable growth", "Good reputation", "Respected approach"],
    weaknesses: ["May be overtaken by aggressive ones", "Sometimes too passive"],
    tips: ["Don't be too humble", "Voice out achievements more"],
  },
  C: {
    type: "C",
    title: "Content Contributor",
    emoji: "😊",
    description: "Promotion? Nice kalau dapat, tapi tak die-die nak chase. Current role comfortable, why stress? Let things happen naturally!",
    traits: ["Content", "Low ambition", "Comfort seeker", "Steady presence"],
    strengths: ["Low stress level", "Work-life balance", "Not competitive"],
    weaknesses: ["Career may stagnate", "Others advance faster", "May have regrets later"],
    tips: ["Set some goals supaya tak stuck", "Growth important untuk marketability"],
  },
  D: {
    type: "D",
    title: "Anti-Promotion League",
    emoji: "🙅",
    description: "More title = more problem! Kau happy dengan current state, promotion means more responsibility yang tak nak. Work to live, bukan live to work!",
    traits: ["Zero corporate ambition", "Minimal responsibility seeker", "Work-life prioritizer", "Anti-hustle culture"],
    strengths: ["Stress-free work life", "Clear priorities", "No rat race"],
    weaknesses: ["Career growth zero", "May feel stuck eventually", "Market value may drop"],
    tips: ["Some growth is healthy", "Stagnation boleh jadi boring"],
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
