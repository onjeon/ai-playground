// Beach
// Gaya pantai anda?

export const questions = [
  {
    id: 1,
    question: "Soalan pertama tentang Beach?",
    options: [
      { text: "Pilihan A - sangat setuju", type: "A" },
      { text: "Pilihan B - setuju", type: "B" },
      { text: "Pilihan C - tidak pasti", type: "C" },
      { text: "Pilihan D - tidak setuju", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana approach anda tentang Beach?",
    options: [
      { text: "Sangat aktif dan proaktif", type: "A" },
      { text: "Moderate, bila perlu", type: "B" },
      { text: "Pasif, ikut flow", type: "C" },
      { text: "Tak ambil kisah", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila berkaitan Beach, anda rasa?",
    options: [
      { text: "Excited dan bersemangat!", type: "A" },
      { text: "Okay, boleh handle", type: "B" },
      { text: "Biasa je", type: "C" },
      { text: "Tak minat sangat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pengalaman anda dengan Beach?",
    options: [
      { text: "Banyak dan positif", type: "A" },
      { text: "Ada beberapa pengalaman baik", type: "B" },
      { text: "Sikit je", type: "C" },
      { text: "Hampir tiada", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam konteks Beach, anda lebih...",
    options: [
      { text: "Leader dan penggerak", type: "A" },
      { text: "Participant aktif", type: "B" },
      { text: "Observer", type: "C" },
      { text: "Mengelak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Priority Beach dalam hidup anda?",
    options: [
      { text: "Sangat penting!", type: "A" },
      { text: "Penting dalam keadaan tertentu", type: "B" },
      { text: "Tidak terlalu penting", type: "C" },
      { text: "Langsung tidak penting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila ada isu berkaitan Beach...",
    options: [
      { text: "Tackle terus dengan yakin", type: "A" },
      { text: "Fikir dulu, then act", type: "B" },
      { text: "Tunggu orang lain handle", type: "C" },
      { text: "Abaikan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Orang sekeliling describe anda dalam Beach sebagai?",
    options: [
      { text: "Expert dan go-to person", type: "A" },
      { text: "Reliable dan consistent", type: "B" },
      { text: "Average", type: "C" },
      { text: "Tidak involved", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Future goals berkaitan Beach?",
    options: [
      { text: "Nak jadi lebih baik!", type: "A" },
      { text: "Maintain je", type: "B" },
      { text: "Tak ada specific goal", type: "C" },
      { text: "Tak fikir pasal ni", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall, Beach untuk anda adalah?",
    options: [
      { text: "Sangat bermakna dan penting", type: "A" },
      { text: "Part of life yang okay", type: "B" },
      { text: "Neutral", type: "C" },
      { text: "Tidak relevan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Beach Champion",
    emoji: "🏖️",
    description: "Anda sangat cemerlang dalam Beach! Passionate, dedicated, dan inspiring. Teruskan!",
    traits: ["Passionate", "Dedicated", "Leader", "Inspiring"],
    strengths: ["High performance", "Motivates others", "Consistent excellence"],
    weaknesses: ["May burn out", "High expectations"],
    tips: ["Balance is key", "Take breaks when needed"],
  },
  B: {
    type: "B",
    title: "Beach Pro",
    emoji: "⭐",
    description: "Anda balanced dan reliable dalam Beach! Good approach dengan sustainable habits.",
    traits: ["Balanced", "Reliable", "Consistent", "Practical"],
    strengths: ["Sustainable approach", "Dependable", "Good results"],
    weaknesses: ["Could push more"],
    tips: ["Challenge yourself sometimes", "Growth is good"],
  },
  C: {
    type: "C",
    title: "Beach Casual",
    emoji: "😊",
    description: "Anda casual dengan Beach. No stress approach, enjoy when it happens!",
    traits: ["Relaxed", "Casual", "Easy-going", "Flexible"],
    strengths: ["Low stress", "Adaptable", "No pressure"],
    weaknesses: ["Could improve", "Missing opportunities"],
    tips: ["Try more!", "You might enjoy it more"],
  },
  D: {
    type: "D",
    title: "Beach Newbie",
    emoji: "🌱",
    description: "Ruang untuk grow dalam Beach! Everyone starts somewhere. Take your time!",
    traits: ["Beginner", "Potential", "Learning", "Open"],
    strengths: ["Room to grow", "Fresh perspective"],
    weaknesses: ["Needs development", "Lacking experience"],
    tips: ["Start small", "Every step counts"],
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
