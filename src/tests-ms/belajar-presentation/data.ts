// Gaya Presentation Anda
// Macam mana anda bila kena present?

export const questions = [
  {
    id: 1,
    question: "Bila dapat assignment presentation, anda...",
    options: [
      { text: "Excited! Suka present", type: "A" },
      { text: "Okay, boleh handle", type: "B" },
      { text: "Nervous tapi redah je", type: "C" },
      { text: "Stress terus, tak boleh tidur", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Slide presentation anda macam mana?",
    options: [
      { text: "Cantik, creative, banyak visual", type: "A" },
      { text: "Clean dan simple, to the point", type: "B" },
      { text: "Copy paste je dari internet", type: "C" },
      { text: "Text banyak-banyak, baca je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sebelum present, anda...",
    options: [
      { text: "Practice depan cermin berkali-kali", type: "A" },
      { text: "Baca notes sekali dua", type: "B" },
      { text: "Wing it je, spontan", type: "C" },
      { text: "Doa banyak-banyak", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Masa present, eye contact anda...",
    options: [
      { text: "Pandang semua orang dengan confident", type: "A" },
      { text: "Pandang beberapa orang je", type: "B" },
      { text: "Pandang slides/dinding je", type: "C" },
      { text: "Pandang lantai atau notes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila ada soalan dari audience...",
    options: [
      { text: "Jawab dengan confident!", type: "A" },
      { text: "Cuba jawab sebaik mungkin", type: "B" },
      { text: "Nervous tapi try jawab", type: "C" },
      { text: "Blank, minta tolong groupmate", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gaya cakap anda masa present?",
    options: [
      { text: "Energetic, engaging, ada jokes", type: "A" },
      { text: "Clear dan professional", type: "B" },
      { text: "Monotone, baca je script", type: "C" },
      { text: "Cepat-cepat nak habis", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dalam group presentation, role anda?",
    options: [
      { text: "Leader, present bahagian penting", type: "A" },
      { text: "Present fair share macam semua orang", type: "B" },
      { text: "Minta bahagian yang paling sikit", type: "C" },
      { text: "Buat slides je, tak nak present", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Technical problem masa present, anda...",
    options: [
      { text: "Handle cool, improvise", type: "A" },
      { text: "Cuba fix sambil explain", type: "B" },
      { text: "Panic sikit tapi try handle", type: "C" },
      { text: "Frozen, tak tahu nak buat apa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Selepas habis present, anda rasa...",
    options: [
      { text: "Satisfied, nailed it!", type: "A" },
      { text: "Lega, at least dah siap", type: "B" },
      { text: "Overthink semua kesilapan", type: "C" },
      { text: "Trauma, tak nak present lagi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Feedback dari presentation, anda...",
    options: [
      { text: "Welcome, nak improve", type: "A" },
      { text: "Dengar dan consider", type: "B" },
      { text: "Sensitive sikit tapi okay", type: "C" },
      { text: "Tak nak dengar, dah trauma", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Natural Presenter",
    emoji: "🎤",
    description: "Stage adalah rumah anda! Confident, charismatic, dan engaging. Orang suka tengok anda present. Born entertainer!",
    traits: ["Confident", "Charismatic", "Engaging", "Natural speaker"],
    strengths: ["Captivates audience", "Handles pressure well", "Memorable presentations"],
    weaknesses: ["Kadang-kadang over-confident", "May overshadow others"],
    tips: ["Stay humble", "Help shy teammates"],
  },
  B: {
    type: "B",
    title: "Steady Presenter",
    emoji: "📋",
    description: "Professional dan reliable! Anda present dengan baik tanpa drama. Clean, clear, dan gets the job done!",
    traits: ["Professional", "Reliable", "Clear", "Prepared"],
    strengths: ["Consistent performance", "Well-prepared", "Trustworthy"],
    weaknesses: ["Could be more dynamic", "Play it safe"],
    tips: ["Add more energy", "Try new presentation styles"],
  },
  C: {
    type: "C",
    title: "Nervous Presenter",
    emoji: "😅",
    description: "Nervous tapi still buat! Anda push through walaupun takut. That's courage! Lama-lama akan improve!",
    traits: ["Courageous", "Anxious", "Trying hard", "Improving"],
    strengths: ["Pushes through fear", "Gets it done", "Room for growth"],
    weaknesses: ["Anxiety affects performance", "Needs more confidence"],
    tips: ["Practice more", "Start with small audiences"],
  },
  D: {
    type: "D",
    title: "Presentation Phobic",
    emoji: "😰",
    description: "Presentation adalah nightmare anda! Tapi takpe, ramai orang sama. Step by step, anda boleh improve!",
    traits: ["Anxious", "Avoidant", "Prefers behind scenes", "Support role"],
    strengths: ["Good at other things", "Great researcher/writer"],
    weaknesses: ["Fear of public speaking", "Avoids spotlight"],
    tips: ["Join public speaking club", "Start with safe spaces", "Everyone nervous at first!"],
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
