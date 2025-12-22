// Gaya Memasak Anda
// Jenis cook mana anda?

export const questions = [
  {
    id: 1,
    question: "Kenapa anda memasak?",
    options: [
      { text: "Passion! Love creating food", type: "A" },
      { text: "Save money, healthier option", type: "B" },
      { text: "Must, takde choice", type: "C" },
      { text: "Jarang masak actually", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila masak, anda ikut...",
    options: [
      { text: "Own creativity, experiment!", type: "A" },
      { text: "Recipes dari YouTube/Google", type: "B" },
      { text: "Same few dishes je", type: "C" },
      { text: "Instant/simple je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kitchen equipment anda?",
    options: [
      { text: "Full equipped! Air fryer, mixer, etc", type: "A" },
      { text: "Essential tools yang functional", type: "B" },
      { text: "Basic pots and pans", type: "C" },
      { text: "Microwave je main tool", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Masak untuk siapa?",
    options: [
      { text: "Everyone! Love feeding people", type: "A" },
      { text: "Family dan close friends", type: "B" },
      { text: "Diri sendiri je", type: "C" },
      { text: "Rarely masak untuk orang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila recipe tak jadi...",
    options: [
      { text: "Analyze, improve, try again!", type: "A" },
      { text: "Disappointing tapi learn", type: "B" },
      { text: "Makan je walaupun tak sedap", type: "C" },
      { text: "Order food delivery", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Specialty dish anda?",
    options: [
      { text: "Multiple! Rendang, pasta, etc", type: "A" },
      { text: "Few dishes yang confirm sedap", type: "B" },
      { text: "Goreng telur level advanced", type: "C" },
      { text: "Maggi gourmet", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Grocery shopping style?",
    options: [
      { text: "Fresh market untuk ingredients!", type: "A" },
      { text: "Weekly planned shopping", type: "B" },
      { text: "Buy when need", type: "C" },
      { text: "Rarely, mostly eat out", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila guests coming, anda...",
    options: [
      { text: "Cook full spread!", type: "A" },
      { text: "Make something nice", type: "B" },
      { text: "Order catering je", type: "C" },
      { text: "Ask them to eat out", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cooking shows/content anda tengok?",
    options: [
      { text: "MasterChef, cooking channels!", type: "A" },
      { text: "Recipe videos bila nak try", type: "B" },
      { text: "Food reviews je", type: "C" },
      { text: "Tak tengok cooking content", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kitchen time untuk anda adalah...",
    options: [
      { text: "Therapy! Creative outlet", type: "A" },
      { text: "Productive time", type: "B" },
      { text: "Necessity", type: "C" },
      { text: "Avoided if possible", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Home Chef",
    emoji: "👨‍🍳",
    description: "Cooking adalah art untuk anda! Creative dalam kitchen, love feeding people. MasterChef at home!",
    traits: ["Creative", "Passionate", "Skilled", "Generous"],
    strengths: ["Amazing food", "Joy of feeding others"],
    weaknesses: ["Time-consuming", "Messy kitchen maybe"],
    tips: ["Share your recipes!", "Your food brings happiness"],
  },
  B: {
    type: "B",
    title: "Practical Cook",
    emoji: "🍳",
    description: "Cooking dengan purpose! Healthy, economical, efficient. Practical approach to kitchen!",
    traits: ["Practical", "Efficient", "Healthy", "Planned"],
    strengths: ["Sustainable cooking", "Good meal planning"],
    weaknesses: ["May lack variety"],
    tips: ["Experiment more!", "Try new recipes kadang-kadang"],
  },
  C: {
    type: "C",
    title: "Survival Cook",
    emoji: "🥘",
    description: "Cook because must survive! Basic skills, limited repertoire, tapi get the job done!",
    traits: ["Basic", "Functional", "Simple", "Practical"],
    strengths: ["Self-sufficient", "No-fuss meals"],
    weaknesses: ["Limited variety", "Could improve"],
    tips: ["Try one new recipe a week!", "Cooking can be fun"],
  },
  D: {
    type: "D",
    title: "Kitchen Avoider",
    emoji: "🍔",
    description: "Kitchen is foreign territory! Takeout, delivery, eating out - preferred options. And that's valid!",
    traits: ["Non-cook", "Outsourcer", "Busy", "Practical differently"],
    strengths: ["Supports restaurants", "More time for other things"],
    weaknesses: ["Expensive", "Less healthy maybe"],
    tips: ["Learn basic cooking!", "Even simple meals count"],
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
