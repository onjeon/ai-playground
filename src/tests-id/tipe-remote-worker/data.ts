// Tes Tipe Remote Worker Kamu
// Bagaimana style kerja remote kamu?

export const questions = [
  {
    id: 1,
    question: "Setup kerja dari rumah kamu...",
    options: [
      { text: "Dedicated home office yang proper", type: "A" },
      { text: "Flexible, bisa dari mana aja", type: "B" },
      { text: "Meja makan atau tempat seadanya", type: "C" },
      { text: "Sering dari cafe atau coworking", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Routine saat WFH...",
    options: [
      { text: "Strict schedule seperti di kantor", type: "A" },
      { text: "Flexible tapi tetap produktif", type: "B" },
      { text: "Ngalir aja, kerja kapan mood", type: "C" },
      { text: "Night owl, produktif malam hari", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Work-life boundaries saat remote...",
    options: [
      { text: "Clear boundaries, off ya off", type: "A" },
      { text: "Blur tapi masih manageable", type: "B" },
      { text: "Very blurred, kerja kapanpun", type: "C" },
      { text: "Integrate, bukan separate", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Video call dan meetings...",
    options: [
      { text: "Always camera on, professional", type: "A" },
      { text: "Camera on kalau perlu", type: "B" },
      { text: "Prefer camera off, audio aja", type: "C" },
      { text: "Minimize meetings, prefer async", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Distraction saat WFH...",
    options: [
      { text: "Minimal, sangat focused", type: "A" },
      { text: "Ada tapi bisa manage", type: "B" },
      { text: "Cukup banyak, struggle kadang", type: "C" },
      { text: "Embrace distractions, part of life", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Miss office environment?",
    options: [
      { text: "Tidak sama sekali, love WFH", type: "A" },
      { text: "Sesekali miss social aspect", type: "B" },
      { text: "Quite a bit, lonely sometimes", type: "C" },
      { text: "Prefer hybrid, best of both", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Communication dengan team saat remote...",
    options: [
      { text: "Overcommunicate untuk clarity", type: "A" },
      { text: "Regular updates dan check-ins", type: "B" },
      { text: "Minimal, when necessary", type: "C" },
      { text: "Async first, meetings kalau urgent", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dress code saat WFH...",
    options: [
      { text: "Still dress up untuk mindset kerja", type: "A" },
      { text: "Casual tapi presentable kalau meeting", type: "B" },
      { text: "Piyama squad, comfortable is key", type: "C" },
      { text: "Business on top, casual on bottom", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Productivity saat remote vs office...",
    options: [
      { text: "Way more productive di rumah", type: "A" },
      { text: "Sama aja, tergantung task", type: "B" },
      { text: "Less productive, butuh office structure", type: "C" },
      { text: "Different productivity, bukan less/more", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal work arrangement...",
    options: [
      { text: "Full remote, selamanya", type: "A" },
      { text: "Hybrid, best of both worlds", type: "B" },
      { text: "Prefer office dengan WFH options", type: "C" },
      { text: "Location independent, digital nomad style", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Breaks saat WFH...",
    options: [
      { text: "Scheduled breaks, disciplined", type: "A" },
      { text: "Take breaks when needed", type: "B" },
      { text: "What breaks? Lupa istirahat", type: "C" },
      { text: "Frequent breaks, work in sprints", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Biggest challenge WFH menurutmu...",
    options: [
      { text: "Maintaining team connection", type: "A" },
      { text: "Work-life boundaries", type: "B" },
      { text: "Staying focused dan motivated", type: "C" },
      { text: "Internet dan tech issues", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Remote Pro",
    emoji: "🏠",
    description: "Kamu adalah master WFH! Setup proper, routine disciplined, dan productivity tinggi. Remote work adalah natural habitat-mu. Office? No thanks!",
    traits: ["Disciplined", "Self-motivated", "Productive", "Independent"],
    strengths: ["High output", "Clear boundaries", "Professional setup"],
    weaknesses: ["Might miss social connections", "Can be too rigid"],
    tips: ["Schedule social time", "Flexibility juga penting"],
  },
  B: {
    type: "B",
    title: "Hybrid Champion",
    emoji: "⚖️",
    description: "Kamu thrive di hybrid environment! Appreciate flexibility WFH tapi juga value face time. Best of both worlds adalah sweet spot-mu.",
    traits: ["Flexible", "Adaptable", "Balanced", "Social but independent"],
    strengths: ["Versatile", "Good balance", "Best practices from both"],
    weaknesses: ["Might lack consistency", "Scheduling challenges"],
    tips: ["Optimize both environments", "Clear communication crucial"],
  },
  C: {
    type: "C",
    title: "Reluctant Remote",
    emoji: "😅",
    description: "WFH bukan forte-mu! Miss structure dan social aspect of office. Struggle dengan distractions dan motivation. Butuh external accountability.",
    traits: ["Social", "Structure-needing", "Easily distracted", "Office-preferring"],
    strengths: ["Self-aware", "Thrives with others", "Good at in-person collab"],
    weaknesses: ["WFH productivity suffers", "Isolation affects mood"],
    tips: ["Create more structure", "Coworking spaces might help"],
  },
  D: {
    type: "D",
    title: "Digital Nomad Soul",
    emoji: "🌍",
    description: "Kamu embrace location independence! Work from anywhere, anytime. Async communication advocate dan value freedom over structure. Digital nomad wannabe atau actual!",
    traits: ["Free spirited", "Location independent", "Async worker", "Adventurous"],
    strengths: ["Ultimate flexibility", "Self-directed", "Global mindset"],
    weaknesses: ["Time zone challenges", "Stability issues maybe"],
    tips: ["Reliable internet is key", "Maintain some routine"],
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
