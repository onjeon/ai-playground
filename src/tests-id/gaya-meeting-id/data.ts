// Tes Gaya Kamu dalam Meeting
// Bagaimana style-mu dalam rapat dan meeting?

export const questions = [
  {
    id: 1,
    question: "Sebelum meeting, kamu biasanya...",
    options: [
      { text: "Prepare agenda dan materials dengan detail", type: "A" },
      { text: "Quick review agenda", type: "B" },
      { text: "Datang dan see what happens", type: "C" },
      { text: "Sering skip preparation", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Selama meeting, kamu...",
    options: [
      { text: "Aktif memimpin atau berkontribusi", type: "A" },
      { text: "Contribute di topik yang relevan", type: "B" },
      { text: "Mostly listen, bicara kalau ditanya", type: "C" },
      { text: "Zone out atau multitask", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada disagreement dalam meeting...",
    options: [
      { text: "Voice opinion dengan confident", type: "A" },
      { text: "Share perspective dengan constructive", type: "B" },
      { text: "Stay neutral atau diam", type: "C" },
      { text: "Avoid conflict, agree aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Meeting panjang dan bertele-tele...",
    options: [
      { text: "Steer back to agenda, keep efficient", type: "A" },
      { text: "Contribute to move things along", type: "B" },
      { text: "Wait it out dengan sabar", type: "C" },
      { text: "Totally lose focus", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Virtual meeting vs in-person...",
    options: [
      { text: "In-person untuk engagement", type: "A" },
      { text: "Both work, depends on purpose", type: "B" },
      { text: "Virtual, lebih comfortable", type: "C" },
      { text: "Either, tapi prefer fewer meetings", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Note taking dalam meeting...",
    options: [
      { text: "Detailed notes dan action items", type: "A" },
      { text: "Key points dan decisions", type: "B" },
      { text: "Mental notes atau minimal", type: "C" },
      { text: "Rely on others atau recording", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau meeting terasa tidak produktif...",
    options: [
      { text: "Speak up dan suggest improvement", type: "A" },
      { text: "Mention concern dengan polite", type: "B" },
      { text: "Just get through it", type: "C" },
      { text: "Check phone atau distract", type: "D" },
    ],
  },
  {
    id: 8,
    question: "One-on-one meetings dengan atasan...",
    options: [
      { text: "Prepare agenda, maximize waktu", type: "A" },
      { text: "Have topics ready, open discussion", type: "B" },
      { text: "Let them lead, respond", type: "C" },
      { text: "Nervous dan minimal sharing", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Presenting dalam meeting...",
    options: [
      { text: "Confident dan prepared", type: "A" },
      { text: "Can do dengan adequate prep", type: "B" },
      { text: "Nervous tapi manage", type: "C" },
      { text: "Avoid kalau bisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Follow up setelah meeting...",
    options: [
      { text: "Send summary dan action items", type: "A" },
      { text: "Follow through my action items", type: "B" },
      { text: "Wait for others to follow up", type: "C" },
      { text: "Often forget atau delay", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Meeting yang kamu initiate...",
    options: [
      { text: "Well-planned dengan clear purpose", type: "A" },
      { text: "When needed dengan basic agenda", type: "B" },
      { text: "Rarely initiate meetings", type: "C" },
      { text: "Avoid initiating, prefer async", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall feeling tentang meetings...",
    options: [
      { text: "Valuable kalau done right", type: "A" },
      { text: "Necessary evil, tapi can be useful", type: "B" },
      { text: "Prefer fewer meetings", type: "C" },
      { text: "Generally waste of time", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Meeting Leader",
    emoji: "🎤",
    description: "Kamu adalah meeting leader natural! Prepared, contributive, dan drive meetings to productive outcomes. Valuable in any team setting.",
    traits: ["Prepared", "Active", "Efficient", "Leadership"],
    strengths: ["Productive meetings", "Clear outcomes", "Respected contributor"],
    weaknesses: ["Might dominate", "Can be intense"],
    tips: ["Give others space too", "Not all meetings need leadership"],
  },
  B: {
    type: "B",
    title: "Effective Contributor",
    emoji: "✋",
    description: "Kamu adalah meeting contributor yang effective! Add value tanpa dominating. Good balance antara listening dan contributing.",
    traits: ["Balanced", "Contributive", "Appropriate", "Professional"],
    strengths: ["Valued contributions", "Good team player", "Efficient"],
    weaknesses: ["Could step up more sometimes"],
    tips: ["Take more initiative when needed", "Your voice matters"],
  },
  C: {
    type: "C",
    title: "Passive Participant",
    emoji: "👂",
    description: "Kamu adalah meeting participant yang passive! Mostly listen dan contribute minimal. Might have good thoughts tapi tidak share.",
    traits: ["Quiet", "Listener", "Reserved", "Passive"],
    strengths: ["Good listener", "Not disruptive"],
    weaknesses: ["Undervalued", "Not visible", "Miss impact opportunities"],
    tips: ["Prepare one thing to contribute", "Your perspective is valuable", "Practice speaking up"],
  },
  D: {
    type: "D",
    title: "Meeting Avoider",
    emoji: "😴",
    description: "Kamu tidak engage well dalam meetings! Zone out, multitask, atau avoid. This affects visibility dan contribution to team.",
    traits: ["Disengaged", "Distracted", "Avoiding", "Minimal"],
    strengths: ["Maybe better at solo work"],
    weaknesses: ["Miss information", "Look unprofessional", "Limited visibility"],
    tips: ["Meetings are career capital", "Engagement shows interest", "Find ways to make them worthwhile"],
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
