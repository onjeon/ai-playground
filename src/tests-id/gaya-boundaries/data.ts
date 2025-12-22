// Gaya Menetapkan Boundaries Kamu
// Tes ini mengungkap bagaimana cara kamu menetapkan dan menjaga batasan personal!

export const questions = [
  {
    id: 1,
    question: "Saat seseorang meminta tolong tapi kamu sedang sibuk...",
    options: [
      { text: "Bilang tidak bisa dengan jelas dan tanpa guilt", type: "A" },
      { text: "Bilang tidak bisa tapi merasa bersalah", type: "B" },
      { text: "Tetap bantu walau sebenarnya tidak bisa", type: "C" },
      { text: "Marah tapi tetap bantu, lalu resentful", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Personal space dan privacy...",
    options: [
      { text: "Jelas apa yang private dan communicate it", type: "A" },
      { text: "Ada boundaries tapi kadang dilanggar orang", type: "B" },
      { text: "Tidak jelas, orang sering overstep", type: "C" },
      { text: "Sangat guarded, susah let people in", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Waktu dan energy...",
    options: [
      { text: "Protect dengan baik, tau prioritas", type: "A" },
      { text: "Try to protect tapi sering over-commit", type: "B" },
      { text: "Sering habis untuk orang lain", type: "C" },
      { text: "Sangat strict, jarang share dengan orang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat seseorang melewati batas yang tidak nyaman...",
    options: [
      { text: "Speak up langsung dengan firm", type: "A" },
      { text: "Speak up tapi dengan cara yang soft", type: "B" },
      { text: "Diam dan hope mereka realize", type: "C" },
      { text: "Cut off tanpa explanation", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam relationships, boundaries kamu...",
    options: [
      { text: "Clear dan discussed openly", type: "A" },
      { text: "Ada tapi tidak selalu di-communicate", type: "B" },
      { text: "Blurry, sering compromise diri sendiri", type: "C" },
      { text: "Very rigid, kadang push people away", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Emotional boundaries dengan orang lain...",
    options: [
      { text: "Clear, tidak take on others' emotions", type: "A" },
      { text: "Kadang affected tapi bisa regulate", type: "B" },
      { text: "Sering absorb emotions orang lain", type: "C" },
      { text: "Wall up, tidak let emotions in atau out", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saying no to family...",
    options: [
      { text: "Bisa, family juga perlu respect boundaries", type: "A" },
      { text: "Susah tapi learning", type: "B" },
      { text: "Almost impossible, guilty banget", type: "C" },
      { text: "Selalu no, distant dari family", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Work-life boundaries...",
    options: [
      { text: "Clear, work stays at work", type: "A" },
      { text: "Mostly good, kadang work leaks in", type: "B" },
      { text: "Blurry, always available", type: "C" },
      { text: "Too strict, miss opportunities", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat boundaries dilanggar berulang kali...",
    options: [
      { text: "Consequence yang jelas, mungkin end relationship", type: "A" },
      { text: "Remind lagi, give more chances", type: "B" },
      { text: "Accept it, mungkin memang begitu orangnya", type: "C" },
      { text: "Immediate cut off tanpa discussion", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Guilt saat set boundaries...",
    options: [
      { text: "Minimal, boundaries adalah hak", type: "A" },
      { text: "Ada tapi remind diri it's okay", type: "B" },
      { text: "Banyak, sering retract boundaries karena guilt", type: "C" },
      { text: "Tidak merasa guilt, lebih ke anger", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Communication saat set boundaries...",
    options: [
      { text: "Direct dan kind", type: "A" },
      { text: "Indirect, hope they get the hint", type: "B" },
      { text: "Avoid communication, just comply", type: "C" },
      { text: "Harsh atau aggressive", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall, boundary setting skill kamu...",
    options: [
      { text: "Strong dan healthy", type: "A" },
      { text: "Developing, getting better", type: "B" },
      { text: "Weak, often violated", type: "C" },
      { text: "Too rigid, walls instead of boundaries", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Healthy Boundary Setter",
    emoji: "🛡️",
    description: "Kamu excellent dalam menetapkan boundaries! Kamu tau apa yang acceptable dan communicate dengan jelas. Ini melindungi mental health dan relationships-mu.",
    traits: ["Assertive", "Clear", "Self-respecting", "Balanced"],
    strengths: ["Healthy relationships", "Protected energy", "Respected by others"],
    weaknesses: ["Some may see as rigid", "Need to stay flexible"],
    tips: ["Stay consistent", "Model for others", "Remain compassionate"],
  },
  B: {
    type: "B",
    title: "Learning Boundary Setter",
    emoji: "🌱",
    description: "Kamu dalam proses learning boundaries. Ada awareness dan effort, tapi kadang masih struggle dengan guilt atau consistency. Keep practicing!",
    traits: ["Learning", "Aware", "Improving", "Sometimes struggle"],
    strengths: ["Aware of importance", "Making progress", "Trying"],
    weaknesses: ["Inconsistent", "Guilt issues", "Sometimes crossed"],
    tips: ["Practice regularly", "Work on guilt", "Start with small nos"],
  },
  C: {
    type: "C",
    title: "Porous Boundaries",
    emoji: "💔",
    description: "Boundaries kamu cenderung porous - mudah ditembus oleh orang lain. Kamu sering mengorbankan kebutuhan sendiri untuk orang lain. Ini bisa lead ke burnout.",
    traits: ["People-pleaser", "Self-sacrificing", "Guilt-ridden", "Overwhelmed"],
    strengths: ["Caring", "Generous", "Helpful"],
    weaknesses: ["Often violated", "Burnout risk", "Resentment builds"],
    tips: ["Learn to say no", "Your needs matter", "Seek support to learn boundaries"],
  },
  D: {
    type: "D",
    title: "Rigid Boundaries",
    emoji: "🧱",
    description: "Boundaries kamu cenderung terlalu rigid - lebih seperti tembok daripada pagar. Ini bisa protect tapi juga prevent meaningful connections.",
    traits: ["Guarded", "Distant", "Defensive", "Independent"],
    strengths: ["Well-protected", "Independent", "Rarely taken advantage of"],
    weaknesses: ["Difficult to connect", "May push people away", "Lonely"],
    tips: ["Learn to be vulnerable", "Not everyone is threat", "Therapy bisa help"],
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
