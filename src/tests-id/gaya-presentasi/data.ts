// Gaya Presentasi Kamu
// Tes ini mengungkap style presentasi yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Sebelum presentasi penting, kamu biasanya...",
    options: [
      { text: "Rehearse berkali-kali sampai hafal", type: "A" },
      { text: "Prepare data dan backup slides", type: "B" },
      { text: "Think about storytelling dan engagement", type: "C" },
      { text: "Wing it, percaya sama improvisasi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Opening presentasi favorit kamu...",
    options: [
      { text: "Langsung ke point dan objectives", type: "A" },
      { text: "Share interesting data atau statistic", type: "B" },
      { text: "Story atau anecdote yang engaging", type: "C" },
      { text: "Icebreaker atau joke ringan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Slides presentasi kamu biasanya...",
    options: [
      { text: "Minimal text, bullet points", type: "A" },
      { text: "Data-heavy dengan charts dan graphs", type: "B" },
      { text: "Visual-focused dengan imagery", type: "C" },
      { text: "Slides? Prefer freestyle tanpa slides", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada technical difficulty...",
    options: [
      { text: "Quick pivot, lanjut tanpa slides", type: "A" },
      { text: "Troubleshoot sampai solved", type: "B" },
      { text: "Make it part of the story", type: "C" },
      { text: "Turn into comedy moment", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Q&A session, kamu...",
    options: [
      { text: "Jawab confident dan decisive", type: "A" },
      { text: "Reference data dan sources", type: "B" },
      { text: "Engage dialogue dengan audience", type: "C" },
      { text: "Make it conversational dan fun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau audience looks bored...",
    options: [
      { text: "Speed up dan get to the point", type: "A" },
      { text: "Add more supporting evidence", type: "B" },
      { text: "Switch to more engaging content", type: "C" },
      { text: "Interactive activity atau question", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Body language saat presentasi...",
    options: [
      { text: "Confident stance, minimal movement", type: "A" },
      { text: "Point ke slides dan data", type: "B" },
      { text: "Expressive dan animated", type: "C" },
      { text: "Walk around dan engage physically", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Handling tough questions...",
    options: [
      { text: "Direct answer, no BS", type: "A" },
      { text: "Thorough explanation dengan evidence", type: "B" },
      { text: "Reframe into positive narrative", type: "C" },
      { text: "Acknowledge dan deflect dengan humor", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Presentation yang paling kamu enjoy...",
    options: [
      { text: "Pitch ke executives/investors", type: "A" },
      { text: "Deep-dive technical presentation", type: "B" },
      { text: "Keynote atau public speaking", type: "C" },
      { text: "Casual team sharing", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Closing statement biasanya...",
    options: [
      { text: "Clear call to action", type: "A" },
      { text: "Summary key takeaways", type: "B" },
      { text: "Inspiring closing message", type: "C" },
      { text: "Fun memorable ending", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nervous sebelum presentasi, kamu...",
    options: [
      { text: "Channel jadi confidence", type: "A" },
      { text: "Review notes sekali lagi", type: "B" },
      { text: "Visualize success", type: "C" },
      { text: "Just be yourself, it'll be fine", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Feedback yang paling sering kamu dapat...",
    options: [
      { text: "Clear dan to the point", type: "A" },
      { text: "Well-researched dan credible", type: "B" },
      { text: "Engaging dan memorable", type: "C" },
      { text: "Fun dan entertaining", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Executive Presenter",
    emoji: "👔",
    description: "Kamu adalah presenter yang commanding! Direct, confident, dan get to the point. Perfect untuk boardroom presentations dan stakeholder pitches. Respect-nya tinggi!",
    traits: ["Authoritative", "Concise", "Confident", "Impactful"],
    strengths: ["Commands attention", "Clear message", "Decision-driving"],
    weaknesses: ["Can be intimidating", "May lack warmth", "Rushed pacing"],
    tips: ["Add personal touch sesekali", "Slow down untuk emphasis", "Smile more!"],
  },
  B: {
    type: "B",
    title: "The Data Storyteller",
    emoji: "📊",
    description: "Kamu adalah presenter yang credible! Evidence-based, thorough, dan convincing. Perfect untuk technical presentations dan analytical reviews. People trust you!",
    traits: ["Credible", "Thorough", "Prepared", "Analytical"],
    strengths: ["Well-researched", "Anticipate questions", "Build solid case"],
    weaknesses: ["Information overload", "Can be dry", "Too detailed"],
    tips: ["Balance data dengan narrative", "Less is more", "Make data visual"],
  },
  C: {
    type: "C",
    title: "The Engaging Performer",
    emoji: "🎭",
    description: "Kamu adalah presenter yang captivating! Great storyteller, visual thinker, dan memorable. Perfect untuk keynotes dan creative presentations. People remember you!",
    traits: ["Engaging", "Creative", "Memorable", "Passionate"],
    strengths: ["Hold attention", "Emotional connection", "Inspirational"],
    weaknesses: ["May lack substance", "Inconsistent", "Over-promise"],
    tips: ["Back up with solid content", "Don't sacrifice accuracy untuk drama", "Stay grounded"],
  },
  D: {
    type: "D",
    title: "The Natural Conversationalist",
    emoji: "💬",
    description: "Kamu adalah presenter yang approachable! Casual, relatable, dan authentic. Perfect untuk team presentations dan informal settings. People feel comfortable with you!",
    traits: ["Authentic", "Relatable", "Flexible", "Personable"],
    strengths: ["Easy rapport", "Genuine connection", "Adaptable"],
    weaknesses: ["May lack structure", "Too casual for formal", "Unpredictable"],
    tips: ["Add more preparation untuk formal settings", "Balance casual dengan professional", "Structure helps!"],
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
