// Tahap Perfectionist Kau
// Kau ni jenis 'good enough' atau 'must be perfect'?

export const questions = [
  {
    id: 1,
    question: "Buat presentation slides. Kau habiskan berapa lama?",
    options: [
      { text: "Siap dalam 1 jam, simple je", type: "A" },
      { text: "Few hours, make sure okay", type: "B" },
      { text: "Seharian, kena cantik!", type: "C" },
      { text: "3 hari, setiap pixel kena perfect!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Typo dalam message yang dah send. Kau...",
    options: [
      { text: "Biar je, orang faham tu", type: "A" },
      { text: "Correct dalam message seterusnya", type: "B" },
      { text: "Unsend dan hantar balik properly", type: "C" },
      { text: "MALU GILA, fikir pasal tu sampai malam!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tengah lipat baju. Ada yang tak symmetrical. Kau?",
    options: [
      { text: "Tak perasan pun, masuk almari je", type: "A" },
      { text: "Perasan tapi biar je", type: "B" },
      { text: "Lipat balik sampai betul", type: "C" },
      { text: "Lipat SEMUA balik sampai seragam!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Group assignment, member hantar kerja yang 'okay'. Kau?",
    options: [
      { text: "Terima je, dah ada contribution", type: "A" },
      { text: "Minor edit sikit je", type: "B" },
      { text: "Edit banyak untuk improve quality", type: "C" },
      { text: "Buat balik sendiri sebab tak puas hati!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nak post Instagram. Berapa banyak shots kau ambik?",
    options: [
      { text: "1-3 shots, pilih yang okay", type: "A" },
      { text: "Around 10, pilih yang best", type: "B" },
      { text: "30+ shots dengan different angles", type: "C" },
      { text: "100+ dan masih tak puas hati!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bilik kau messy sikit. Reaction kau?",
    options: [
      { text: "Normal je, nanti-nanti kemas", type: "A" },
      { text: "Weekend la kemas", type: "B" },
      { text: "Tak boleh focus sampai kemas!", type: "C" },
      { text: "Kena kemas SEKARANG sampai spotless!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kerja dah siap 90%. Deadline esok. Kau?",
    options: [
      { text: "Submit je, 90% dah bagus", type: "A" },
      { text: "Final check sekali then submit", type: "B" },
      { text: "Stay up untuk polish that 10%", type: "C" },
      { text: "ALL NIGHTER untuk make it 100% perfect!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kau score 95%. Reaction kau?",
    options: [
      { text: "YAY! That's amazing!", type: "A" },
      { text: "Happy, really good result!", type: "B" },
      { text: "Okay tapi where's the other 5%?", type: "C" },
      { text: "What went wrong?! Kena analyse mistake!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Buat kerja tapi kena follow template. Kau?",
    options: [
      { text: "Follow template exactly, senang", type: "A" },
      { text: "Follow dengan slight personal touch", type: "B" },
      { text: "Improve template tu jugak", type: "C" },
      { text: "Buat template baru yang lebih perfect!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Orang puji kerja kau. Kau rasa...",
    options: [
      { text: "Happy and accept the compliment!", type: "A" },
      { text: "Thanks tapi I know ada room to improve", type: "B" },
      { text: "Point out flaws yang orang tak nampak", type: "C" },
      { text: "They don't know how imperfect it actually is!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chill Master - 'Good Enough' Champion 😎",
    emoji: "😎",
    description: "Kau langsung tak perfectionist! 'Good enough' is your motto. Kau efficient, tak stress, dan dapat enjoy life without overthinking every detail. Sometimes people wish they could be as relaxed as you!",
    traits: ["Relaxed approach", "Efficient", "Stress-free", "Practical mindset"],
    strengths: ["Gets things done quickly", "Low stress levels", "Happy with outcomes"],
    weaknesses: ["May miss details", "Could improve quality sometimes"],
    tips: ["Sometimes extra effort pays off!", "Balance efficiency with quality"],
  },
  B: {
    type: "B",
    title: "Balanced Achiever - Quality Conscious 👌",
    emoji: "👌",
    description: "Kau ada healthy standards! Kau nak things done well tapi tak obsess sampai gila. Perfect balance between quality dan sanity. Kau tahu bila nak push harder dan bila nak accept 'good enough'!",
    traits: ["Healthy standards", "Balanced approach", "Quality conscious", "Reasonable expectations"],
    strengths: ["Good quality output", "Sustainable work habits", "Know when to stop"],
    weaknesses: ["Occasionally let things slip", "May second-guess decisions"],
    tips: ["Trust your judgment!", "Your standards are appropriate"],
  },
  C: {
    type: "C",
    title: "High Achiever - Details Matter 🎯",
    emoji: "🎯",
    description: "Kau definitely perfectionist! Details matter A LOT to kau. Kau akan redo things multiple times untuk get it right. High standards = high quality output, tapi juga high stress!",
    traits: ["Detail-oriented", "High standards", "Quality focused", "Never quite satisfied"],
    strengths: ["Excellent quality work", "Catches all errors", "Impressive outcomes"],
    weaknesses: ["Takes longer", "Self-critical", "Stress levels elevated"],
    tips: ["Practice 'good enough'", "Set time limits for tasks"],
  },
  D: {
    type: "D",
    title: "Extreme Perfectionist - Nothing Less Than Perfect 💎",
    emoji: "💎",
    description: "KAU PERFECTIONIST TAHAP MAXIMUM! Anything less than perfect is unacceptable. Kau akan redo things 100 times sampai betul-betul puas hati. Quality output amazing, tapi at what cost? SLEEP? SANITY?",
    traits: ["Extreme perfectionist", "Never satisfied", "Obsessive attention to detail", "All or nothing"],
    strengths: ["Exceptional quality", "Impeccable work", "Incredible attention to detail"],
    weaknesses: ["Burnout risk HIGH", "Takes forever", "Never truly happy with results"],
    tips: ["PLEASE take breaks!", "Perfect is enemy of done!", "Seek help if it affects daily life"],
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
