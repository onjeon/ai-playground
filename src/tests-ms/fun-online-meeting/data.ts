// Gaya Online Meeting
// Fun test tentang personality dalam online meeting

export const questions = [
  {
    id: 1,
    question: "Online meeting nak start. Camera kau on ke off?",
    options: [
      { text: "On! Muka kena nampak professional!", type: "A" },
      { text: "On tapi dengan virtual background", type: "B" },
      { text: "Off! Camera shy!", type: "C" },
      { text: "Ikut je majority dalam meeting", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Background meeting kau macam mana?",
    options: [
      { text: "Kemas professional setup!", type: "A" },
      { text: "Blur atau virtual background", type: "B" },
      { text: "Real background, seadanya", type: "C" },
      { text: "Rotate antara real dan blur", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila kau unmute untuk cakap?",
    options: [
      { text: "Active contribute! Banyak input!", type: "A" },
      { text: "Bila ditanya atau ada poin penting", type: "B" },
      { text: "Minimal, chat je prefer", type: "C" },
      { text: "Last resort bila kena paksa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Meeting dah 2 jam. Energy level kau?",
    options: [
      { text: "Still on! Meeting productive!", type: "A" },
      { text: "Tired tapi professional la", type: "B" },
      { text: "Zoning out already", type: "C" },
      { text: "Secretly doing other work", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Internet lag tengah present. Reaction?",
    options: [
      { text: "Panic! Try reconnect quick!", type: "A" },
      { text: "Calm, apologize dan continue", type: "B" },
      { text: "Blame WiFi, minta reschedule", type: "C" },
      { text: "Pretend tak perasan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pakaian untuk online meeting?",
    options: [
      { text: "Full attire proper!", type: "A" },
      { text: "Smart casual atas, seluar pendek bawah", type: "B" },
      { text: "T-shirt je, camera off anyway", type: "C" },
      { text: "Whatever wearing at the moment", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ada orang mute tapi background noise kuat. Kau?",
    options: [
      { text: "Politely remind untuk mute", type: "A" },
      { text: "Message private suruh mute", type: "B" },
      { text: "Diam je, host handle la", type: "C" },
      { text: "Ignore, focus on content", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Meeting boleh jadi email. Feeling?",
    options: [
      { text: "Agree! Efficient communication!", type: "A" },
      { text: "Sometimes meeting better for discussion", type: "B" },
      { text: "YASSS! Less meeting please!", type: "C" },
      { text: "Ikut je apa boss nak", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Breakout room activity. Mood kau?",
    options: [
      { text: "Lead the discussion! Take charge!", type: "A" },
      { text: "Participate actively tapi tak lead", type: "B" },
      { text: "Awkward silence champion", type: "C" },
      { text: "Harap ada orang lain yang cakap", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Meeting habis. First thing kau buat?",
    options: [
      { text: "Send follow up email/notes!", type: "A" },
      { text: "Stretch dan rest kejap", type: "B" },
      { text: "Finally! Back to real work!", type: "C" },
      { text: "Scroll phone, decompress", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Meeting MVP",
    emoji: "⭐",
    description: "Kau ni star dalam online meeting! Camera on, contribute aktif, professional setup. Boss suka kau, colleague respect kau. Meeting champion!",
    traits: ["Professional", "Active", "Engaged", "Leader"],
    strengths: ["Career visibility", "Good impression", "Productive meetings"],
    weaknesses: ["Might be too intense", "Meeting fatigue risk"],
    tips: ["Rest between meetings", "Not all meetings need full energy"],
  },
  B: {
    type: "B",
    title: "Balanced Participant",
    emoji: "⚖️",
    description: "Kau professional tapi tak over. Contribute bila perlu, mute bila tak. Perfect balance antara engaged dan efficient. Smart meeting etiquette!",
    traits: ["Balanced", "Professional", "Efficient", "Measured"],
    strengths: ["Good reputation", "Energy preserved", "Quality contributions"],
    weaknesses: ["Sometimes too passive", "Miss visibility"],
    tips: ["Speak up more", "Show presence"],
  },
  C: {
    type: "C",
    title: "Silent Observer",
    emoji: "👤",
    description: "Camera off, mute on - kau prefer observe je. Meeting adalah background noise while doing real work. Efficient? Debatable. Survival? Definitely!",
    traits: ["Observer", "Quiet", "Efficient", "Multitasker"],
    strengths: ["Get work done", "No meeting stress", "Energy saved"],
    weaknesses: ["Low visibility", "Might miss important stuff", "Perception issue"],
    tips: ["Engage more", "Presence matters too"],
  },
  D: {
    type: "D",
    title: "Meeting Survivor",
    emoji: "🎭",
    description: "Kau survive meeting je! Present tapi mentally elsewhere. Master of nod dan 'yes, I agree'. Meeting adalah necessary evil dalam corporate life!",
    traits: ["Survivor", "Adaptive", "Minimalist", "Pragmatic"],
    strengths: ["Low stress", "Do what's needed", "No overthinking"],
    weaknesses: ["Disengaged perception", "Miss opportunities"],
    tips: ["Find meaning in meetings", "Some are actually useful"],
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
