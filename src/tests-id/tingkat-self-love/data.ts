// Tingkat Self-Love Kamu
// Tes ini mengungkap seberapa baik hubunganmu dengan diri sendiri!

export const questions = [
  {
    id: 1,
    question: "Saat melihat diri di cermin, biasanya...",
    options: [
      { text: "Appreciate apa yang dilihat, flaws and all", type: "A" },
      { text: "Mostly okay, ada yang disuka ada yang tidak", type: "B" },
      { text: "Fokus pada kekurangan", type: "C" },
      { text: "Avoid, tidak suka lihat diri sendiri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Self-talk sehari-hari...",
    options: [
      { text: "Kind dan encouraging", type: "A" },
      { text: "Mostly positive dengan occasional doubt", type: "B" },
      { text: "Sering critical dan harsh", type: "C" },
      { text: "Constantly negative dan mean", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat melakukan kesalahan...",
    options: [
      { text: "Forgive diri sendiri, everyone makes mistakes", type: "A" },
      { text: "Feel bad sebentar lalu move on", type: "B" },
      { text: "Beat myself up cukup lama", type: "C" },
      { text: "Extremely harsh, never forgive self", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Comparing diri dengan orang lain...",
    options: [
      { text: "Jarang, fokus pada journey sendiri", type: "A" },
      { text: "Kadang, tapi remind diri it's not helpful", type: "B" },
      { text: "Sering, dan selalu merasa kurang", type: "C" },
      { text: "Constantly, dan always come up short", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Prioritizing own needs...",
    options: [
      { text: "Balance dengan baik, self-care penting", type: "A" },
      { text: "Try to, kadang struggling", type: "B" },
      { text: "Sering neglect untuk please others", type: "C" },
      { text: "Almost never, others always come first", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Accepting compliments...",
    options: [
      { text: "Graciously, believe them", type: "A" },
      { text: "Accept tapi slightly awkward", type: "B" },
      { text: "Dismiss atau deflect", type: "C" },
      { text: "Cannot accept, don't believe them", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Celebrating own achievements...",
    options: [
      { text: "Proudly, deserve to celebrate", type: "A" },
      { text: "Acknowledge tapi don't make big deal", type: "B" },
      { text: "Downplay, not that impressive", type: "C" },
      { text: "Never celebrate, not good enough", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setting boundaries for self-protection...",
    options: [
      { text: "Clear boundaries, self-worth non-negotiable", type: "A" },
      { text: "Learning to set better boundaries", type: "B" },
      { text: "Struggle, often let people cross", type: "C" },
      { text: "No boundaries, don't deserve them", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Spending time alone...",
    options: [
      { text: "Enjoy, good relationship with self", type: "A" },
      { text: "Okay, prefer some company tho", type: "B" },
      { text: "Uncomfortable, negative thoughts emerge", type: "C" },
      { text: "Hate it, can't stand being alone with thoughts", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Investing in personal growth...",
    options: [
      { text: "Active, because I'm worth it", type: "A" },
      { text: "Some effort, could do more", type: "B" },
      { text: "Minimal, what's the point", type: "C" },
      { text: "None, not worth investing in", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Belief in own worthiness of love...",
    options: [
      { text: "Strong, I am lovable", type: "A" },
      { text: "Mostly, dengan beberapa doubts", type: "B" },
      { text: "Questionable, often doubt it", type: "C" },
      { text: "Don't believe I deserve love", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall relationship with yourself...",
    options: [
      { text: "Loving dan supportive", type: "A" },
      { text: "Mostly positive, work in progress", type: "B" },
      { text: "Difficult, often unkind to self", type: "C" },
      { text: "Toxic, hate myself", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "High Self-Love",
    emoji: "💖",
    description: "Kamu memiliki self-love yang tinggi! Kamu treat diri sendiri dengan kindness, accept flaws, dan know your worth. Ini adalah fondasi untuk hidup yang sehat dan relationships yang baik.",
    traits: ["Self-compassionate", "Confident", "Secure", "Kind to self"],
    strengths: ["Healthy relationships", "Resilient", "Sets good boundaries", "Authentic"],
    weaknesses: ["Might seem confident to some"],
    tips: ["Continue nurturing this", "Help others develop self-love", "Stay grounded"],
  },
  B: {
    type: "B",
    title: "Growing Self-Love",
    emoji: "🌸",
    description: "Self-love kamu dalam proses berkembang! Ada progress yang baik dengan beberapa areas yang masih perlu work. Kamu di jalan yang benar.",
    traits: ["Developing", "Aware", "Working on it", "Hopeful"],
    strengths: ["Self-aware", "Making progress", "Open to growth"],
    weaknesses: ["Inconsistent", "Self-doubt masih ada", "Comparison tendencies"],
    tips: ["Be patient with yourself", "Celebrate small wins", "Practice daily affirmations"],
  },
  C: {
    type: "C",
    title: "Low Self-Love",
    emoji: "💔",
    description: "Self-love adalah area yang perlu banyak attention. Kamu cenderung harsh pada diri sendiri dan struggle dengan self-worth. This can change.",
    traits: ["Self-critical", "Struggling", "Harsh inner critic", "Comparing"],
    strengths: ["Aware there's a problem", "Room for growth"],
    weaknesses: ["Relationship with self damaging", "Affects all areas of life"],
    tips: ["Seek therapy", "Start with small acts of self-kindness", "Challenge negative self-talk"],
  },
  D: {
    type: "D",
    title: "Self-Love Crisis",
    emoji: "🩹",
    description: "Hubungan dengan diri sendiri sedang dalam krisis. Kamu mungkin experiencing self-hatred atau severe lack of self-worth. Please seek professional help.",
    traits: ["In crisis", "Self-hatred", "Struggling severely", "Need support"],
    strengths: ["Taking this test shows some awareness", "Change is possible"],
    weaknesses: ["Severely impacting quality of life", "May lead to other issues"],
    tips: ["Seek professional help immediately", "You deserve love and help", "This is treatable", "You are worthy"],
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
