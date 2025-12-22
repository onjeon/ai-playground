// Gaya Resign Kamu
// Tes ini mengungkap bagaimana style kamu saat resign dari pekerjaan!

export const questions = [
  {
    id: 1,
    question: "Alasan utama kamu mau resign biasanya...",
    options: [
      { text: "Better opportunity, career growth", type: "A" },
      { text: "Toxic environment atau management", type: "B" },
      { text: "Burnout dan butuh break", type: "C" },
      { text: "Following passion atau dream", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Timing resign yang ideal menurutmu...",
    options: [
      { text: "Setelah dapat offer baru yang pasti", type: "A" },
      { text: "Kapanpun sudah tidak tahan", type: "B" },
      { text: "After proper rest dan reflection", type: "C" },
      { text: "When the universe gives signs", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara deliver resignation letter...",
    options: [
      { text: "Professional meeting dengan bos", type: "A" },
      { text: "Quick email, no drama", type: "B" },
      { text: "Heartfelt conversation", type: "C" },
      { text: "Creative way, memorable exit", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Notice period, kamu biasanya...",
    options: [
      { text: "Full notice, proper handover", type: "A" },
      { text: "Standard notice, nothing more", type: "B" },
      { text: "Flexible sesuai kebutuhan tim", type: "C" },
      { text: "Negotiate shorter kalau bisa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Exit interview, honest level kamu...",
    options: [
      { text: "Diplomatic tapi honest", type: "A" },
      { text: "Tell it like it is", type: "B" },
      { text: "Mostly positive, some feedback", type: "C" },
      { text: "Keep it vague, protect relationships", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Goodbye ke colleagues...",
    options: [
      { text: "Professional farewell email", type: "A" },
      { text: "To close ones only", type: "B" },
      { text: "Emotional goodbyes ke semua", type: "C" },
      { text: "Farewell party mode!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Handover process kamu...",
    options: [
      { text: "Detailed documentation semua", type: "A" },
      { text: "Basic handover, they'll figure out", type: "B" },
      { text: "Train replacement dengan sabar", type: "C" },
      { text: "Creative SOP untuk next person", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau counter-offered dengan gaji lebih...",
    options: [
      { text: "Consider seriously", type: "A" },
      { text: "No, keputusan sudah final", type: "B" },
      { text: "Depends on root cause", type: "C" },
      { text: "Negotiate even higher lol", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Last day di kantor...",
    options: [
      { text: "Clear desk, return everything proper", type: "A" },
      { text: "Leave ASAP", type: "B" },
      { text: "Spend time dengan close colleagues", type: "C" },
      { text: "Make it memorable!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Post-resign relationship dengan ex-company...",
    options: [
      { text: "Stay connected professionally", type: "A" },
      { text: "Clean break, move on", type: "B" },
      { text: "Keep close friends, others distant", type: "C" },
      { text: "Who knows, maybe come back someday", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Talking about ex-company after resign...",
    options: [
      { text: "Professional, neutral comments", type: "A" },
      { text: "Vent to trusted people", type: "B" },
      { text: "Focus on positive memories", type: "C" },
      { text: "Good stories for dinner parties", type: "D" },
    ],
  },
  {
    id: 12,
    question: "What you'll miss paling...",
    options: [
      { text: "Projects dan achievements", type: "A" },
      { text: "Nothing, good riddance", type: "B" },
      { text: "The people dan relationships", type: "C" },
      { text: "The fun times dan memories", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Professional Departer",
    emoji: "👔",
    description: "Kamu resign dengan class! Professional sampai akhir, proper handover, dan leave on good terms. Bridges intact, reputation preserved. You know how to exit gracefully.",
    traits: ["Professional", "Strategic", "Respectful", "Prepared"],
    strengths: ["Strong references", "Network preserved", "Clean exit"],
    weaknesses: ["May suppress real feelings", "Over-accommodate"],
    tips: ["It's okay untuk voice concerns", "Your wellbeing matters", "Don't burn yourself untuk smooth exit"],
  },
  B: {
    type: "B",
    title: "The Clean Breaker",
    emoji: "✂️",
    description: "Kamu tau kapan harus cut losses! Quick, decisive, dan ga look back. Once decision made, it's done. Sometimes the best thing is just to leave.",
    traits: ["Decisive", "Direct", "No-nonsense", "Independent"],
    strengths: ["Clear decisions", "No regrets", "Move on quickly"],
    weaknesses: ["May burn bridges", "Miss closure", "Seem cold"],
    tips: ["Some bridges worth maintaining", "Brief goodbye helps closure", "Future is small world"],
  },
  C: {
    type: "C",
    title: "The Sentimental Leaver",
    emoji: "💝",
    description: "Resign itu emotional journey for you! Relationships matter, goodbyes are heartfelt, dan you leave dengan lots of feelings. You treasure the connections made.",
    traits: ["Emotional", "Caring", "Relationship-focused", "Sentimental"],
    strengths: ["Strong lasting friendships", "Genuine connections", "Memorable goodbye"],
    weaknesses: ["Hard to leave", "May delay too long", "Emotional drain"],
    tips: ["Endings enable new beginnings", "You'll keep real friends", "It's okay to be sad"],
  },
  D: {
    type: "D",
    title: "The Adventurous Exiter",
    emoji: "🌟",
    description: "Resign is new adventure for you! Excited about what's next, creative farewell, dan always looking forward. Life's too short untuk stuck. Onwards!",
    traits: ["Adventurous", "Optimistic", "Creative", "Forward-looking"],
    strengths: ["Positive outlook", "Exciting energy", "Memorable exit"],
    weaknesses: ["May underplan", "Leave loose ends", "Too hasty sometimes"],
    tips: ["Some planning helps transition", "Tie up important loose ends", "Don't forget admin stuff"],
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
