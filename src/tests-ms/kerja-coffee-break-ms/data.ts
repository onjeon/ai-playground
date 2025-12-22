// Gaya Coffee Break
// What's your office break style?

export const questions = [
  {
    id: 1,
    question: "Coffee break timing kau biasanya...",
    options: [
      { text: "Fixed time! 10am dan 3pm sharp!", type: "A" },
      { text: "Bila natural pause dalam kerja", type: "B" },
      { text: "Bila orang ajak atau terasa nak", type: "C" },
      { text: "Apa coffee break? Kerja terus je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Coffee break, kau pergi dengan...",
    options: [
      { text: "Gang tetap! Daily ritual sama-sama!", type: "A" },
      { text: "Whoever free time tu", type: "B" },
      { text: "Solo trip to pantry", type: "C" },
      { text: "Desk coffee, tak pergi mana", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kat pantry, conversation kau biasanya...",
    options: [
      { text: "Full gossip session! Update semua news!", type: "A" },
      { text: "Light chat, casual catch up", type: "B" },
      { text: "Quick hi, then focus on coffee", type: "C" },
      { text: "Earphones in, avoid conversation", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Duration coffee break kau...",
    options: [
      { text: "15-20 minit, proper break!", type: "A" },
      { text: "10 minit average", type: "B" },
      { text: "5 minit max, grab and go", type: "C" },
      { text: "30 seconds to refill, back to work", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Minuman pilihan kau...",
    options: [
      { text: "Barista-style! Pergi cafe proper!", type: "A" },
      { text: "Office coffee/teh, decent enough", type: "B" },
      { text: "3-in-1 atau sachet je", type: "C" },
      { text: "Air kosong, kopi makes me hyper", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Snack pairing dengan coffee...",
    options: [
      { text: "Kuih from pantry atau beli proper snack!", type: "A" },
      { text: "Whatever ada, biscuit ke roti ke", type: "B" },
      { text: "No snack, coffee sahaja", type: "C" },
      { text: "Skip both, water is enough", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila tengah busy gila, coffee break...",
    options: [
      { text: "Still penting! Mental health break!", type: "A" },
      { text: "Shorter break, tapi still go", type: "B" },
      { text: "Skip, focus on kerja", type: "C" },
      { text: "What break? Been at desk 6 hours straight", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Coffee break adalah untuk kau...",
    options: [
      { text: "Socializing dan networking!", type: "A" },
      { text: "Recharge sebentar", type: "B" },
      { text: "Caffeine fix je", type: "C" },
      { text: "Unnecessary distraction", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila colleague ajak coffee tapi kau tengah busy...",
    options: [
      { text: "Go! Kerja boleh sambung nanti!", type: "A" },
      { text: "Quick 5 min je la", type: "B" },
      { text: "Politely decline, rain check", type: "C" },
      { text: "Tak dengar pun ajakan tu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Money spent on coffee per month...",
    options: [
      { text: "Don't ask... Starbucks membership gold tier", type: "A" },
      { text: "Moderate, mix of cafe dan office", type: "B" },
      { text: "Minimal, mostly office free coffee", type: "C" },
      { text: "Almost zero, tak minum sangat", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Coffee Break Enthusiast",
    emoji: "☕",
    description: "Coffee break adalah highlight hari kau! Social hub pantry, kau tahu semua gossip, dan barista muka regular. Caffeine dan conversation adalah fuel utama!",
    traits: ["Social butterfly", "Break ritual lover", "Gossip collector", "Cafe regular"],
    strengths: ["Strong office relationships", "Always in the loop", "Work-life balance (sort of)"],
    weaknesses: ["May spend too much time/money", "Productivity might suffer", "Caffeine dependent"],
    tips: ["Balance socializing dengan actual work", "Maybe cut down Starbucks sikit"],
  },
  B: {
    type: "B",
    title: "Balanced Breaker",
    emoji: "😌",
    description: "Kau appreciate break tapi tak overdo. Healthy balance antara kerja dan recharge. Sustainable approach untuk long career!",
    traits: ["Balanced", "Socially present", "Efficient", "Self-aware"],
    strengths: ["Good time management", "Maintain relationships", "Sustainable habits"],
    weaknesses: ["Nothing extreme", "May miss some gossip"],
    tips: ["Your approach is healthy!", "Keep it up!"],
  },
  C: {
    type: "C",
    title: "Functional Breaker",
    emoji: "⚡",
    description: "Break untuk kau adalah functional - get caffeine, back to work. Efficient tapi maybe miss social aspects of office life!",
    traits: ["Efficiency-focused", "Minimal social", "Quick breaks", "Work-oriented"],
    strengths: ["High productivity", "Low coffee spending", "Self-sufficient"],
    weaknesses: ["May miss team bonding", "Seem antisocial", "Work too much?"],
    tips: ["Longer breaks help creativity", "Connection dengan colleagues penting"],
  },
  D: {
    type: "D",
    title: "Break? What Break?",
    emoji: "🤖",
    description: "Kau adalah machine yang tak perlu break! Water je cukup, kerja terus. Impressive dedication tapi... you okay bro?",
    traits: ["Workaholic", "Break-averse", "Ultra focused", "Machine-like"],
    strengths: ["Extremely productive", "Never waste time", "Dedicated worker"],
    weaknesses: ["Burnout incoming", "Health concerns", "Missing human connection"],
    tips: ["PLEASE TAKE BREAKS!", "Human need rest to function properly!"],
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
