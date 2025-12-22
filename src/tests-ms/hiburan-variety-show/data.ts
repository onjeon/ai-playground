// Gaya Variety Show Anda
// Macam mana anda dengan variety shows Malaysia?

export const questions = [
  {
    id: 1,
    question: "Variety show jenis apa favorite?",
    options: [
      { text: "Talent shows - MasterChef, Voice", type: "A" },
      { text: "Comedy/talk shows - lawak!", type: "B" },
      { text: "Reality competition - Amazing Race", type: "C" },
      { text: "Game shows - Who Wants to Be", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila tengok variety show, anda...",
    options: [
      { text: "Invested gila dalam contestants!", type: "A" },
      { text: "Gelak dan enjoy", type: "B" },
      { text: "Analyze strategies dan gameplay", type: "C" },
      { text: "Background entertainment je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau join variety show, anda akan...",
    options: [
      { text: "Go for it! Nak menang!", type: "A" },
      { text: "For fun je, no pressure", type: "B" },
      { text: "Strategic gameplay, win smart", type: "C" },
      { text: "Never, malu kat TV!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Host variety show favorite jenis mana?",
    options: [
      { text: "Energetic dan engaging", type: "A" },
      { text: "Funny dan spontaneous", type: "B" },
      { text: "Professional dan smooth", type: "C" },
      { text: "Relatable dan friendly", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Elimination/voting episodes, anda...",
    options: [
      { text: "So stressed! Favorite jangan keluar!", type: "A" },
      { text: "Excited untuk twist!", type: "B" },
      { text: "Predict siapa keluar", type: "C" },
      { text: "Fast forward, nak result je", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Discuss variety shows dengan friends?",
    options: [
      { text: "Yes! Post-episode analysis!", type: "A" },
      { text: "Share funny moments", type: "B" },
      { text: "Debate siapa patut menang", type: "C" },
      { text: "Tak discuss sangat", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Marathon variety show seasons?",
    options: [
      { text: "Yes! Habiskan weekend!", type: "A" },
      { text: "Few episodes sehari", type: "B" },
      { text: "Watch key episodes je", type: "C" },
      { text: "Ikut schedule TV biasa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Social media reaction variety show?",
    options: [
      { text: "Live tweet/post setiap episode!", type: "A" },
      { text: "Share best moments", type: "B" },
      { text: "Read comments je", type: "C" },
      { text: "Tak engage", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Winner announced, anda...",
    options: [
      { text: "Celebrate kalau favorite, frustrated kalau tak!", type: "A" },
      { text: "Happy untuk winner", type: "B" },
      { text: "Analyze kalau deserved", type: "C" },
      { text: "Move on to next show", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Variety show influence anda?",
    options: [
      { text: "Try recipes, skills dari shows!", type: "A" },
      { text: "Entertainment value je", type: "B" },
      { text: "Learn competition strategies", type: "C" },
      { text: "Minimal influence", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Fan",
    emoji: "📺",
    description: "VARIETY SHOW IS LIFE! Anda invested 100% - favorite contestants, live discussions, emotional rollercoaster setiap episode!",
    traits: ["Invested", "Passionate", "Social", "Emotional"],
    strengths: ["Maximum entertainment value", "Great watch buddy"],
    weaknesses: ["Too emotionally invested", "Show-dependent mood"],
    tips: ["It's just a show!", "But your passion is awesome"],
  },
  B: {
    type: "B",
    title: "Entertainment Seeker",
    emoji: "😂",
    description: "Variety shows untuk fun dan gelak! Light entertainment perfect untuk unwind. No stress, just laughs!",
    traits: ["Fun-loving", "Relaxed", "Light-hearted", "Social"],
    strengths: ["Healthy relationship with shows", "Shares joy"],
    weaknesses: ["May not appreciate competition drama"],
    tips: ["Some shows are deeper!", "Try different genres"],
  },
  C: {
    type: "C",
    title: "Strategic Viewer",
    emoji: "🧠",
    description: "Analyze everything! Strategies, editing tricks, producer decisions - anda tengok with analytical mind!",
    traits: ["Analytical", "Strategic", "Critical", "Observant"],
    strengths: ["Sees behind the scenes", "Interesting perspectives"],
    weaknesses: ["May overthink entertainment", "Less pure enjoyment"],
    tips: ["Let go sometimes!", "Entertainment is meant to be fun"],
  },
  D: {
    type: "D",
    title: "Casual Watcher",
    emoji: "📱",
    description: "Variety shows nice for background! Tak terlalu invested, enjoy bila ada. Balanced media consumption!",
    traits: ["Casual", "Balanced", "Relaxed", "Independent"],
    strengths: ["No show-dependency", "Healthy consumption"],
    weaknesses: ["Miss the fun discussions", "Less social viewing"],
    tips: ["Join a watch party!", "Community viewing is fun"],
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
