// Potensi Viral Kau
// Test viral tentang viral potential assessment

export const questions = [
  {
    id: 1,
    question: "Content style kau naturally macam mana?",
    options: [
      { text: "Funny dan entertaining!", type: "A" },
      { text: "Informative dan educational", type: "B" },
      { text: "Relatable dan authentic", type: "C" },
      { text: "Controversial dan bold", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila kau nampak trending topic, kau...",
    options: [
      { text: "Jump on trend immediately!", type: "A" },
      { text: "Add my own twist to it", type: "B" },
      { text: "Tengok je, tak join", type: "C" },
      { text: "Start my own trend instead!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Post kau pernah dapat unexpectedly high engagement?",
    options: [
      { text: "Yes! Multiple times!", type: "A" },
      { text: "Sekali dua je", type: "B" },
      { text: "Never really", type: "C" },
      { text: "I aim for viral every post!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kau comfortable tak on camera?",
    options: [
      { text: "Natural! Camera loves me!", type: "A" },
      { text: "Getting better with practice", type: "B" },
      { text: "Awkward, prefer behind scenes", type: "C" },
      { text: "Don't show face, voice je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Timing post kau macam mana?",
    options: [
      { text: "Strategic! Know peak hours!", type: "A" },
      { text: "Agak-agak je timing", type: "B" },
      { text: "Post bila-bila je mood", type: "C" },
      { text: "Consistent schedule", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Niche content kau apa?",
    options: [
      { text: "Comedy dan entertainment", type: "A" },
      { text: "Lifestyle dan daily life", type: "B" },
      { text: "Specific hobby atau skill", type: "C" },
      { text: "Tak ada niche, post apa-apa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Engagement dengan audience macam mana?",
    options: [
      { text: "Reply semua! Build community!", type: "A" },
      { text: "Reply yang interesting", type: "B" },
      { text: "Jarang reply comments", type: "C" },
      { text: "One way communication je", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kau willing tak sacrifice privacy untuk fame?",
    options: [
      { text: "Yes! Fame is the goal!", type: "A" },
      { text: "Within limits", type: "B" },
      { text: "Privacy is priority", type: "C" },
      { text: "Fame without showing personal life", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Consistency posting macam mana?",
    options: [
      { text: "Daily content no fail!", type: "A" },
      { text: "Few times a week", type: "B" },
      { text: "Bila ada mood je", type: "C" },
      { text: "Unpredictable, random", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau satu post viral, next step kau?",
    options: [
      { text: "Capitalize! More similar content!", type: "A" },
      { text: "Analyze why it worked", type: "B" },
      { text: "Continue as normal", type: "C" },
      { text: "Pressure to maintain!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Viral Material",
    emoji: "🚀",
    description: "Kau ada semua ingredients untuk go viral! Charismatic, strategic, dan entertaining. One good post away from blowing up!",
    traits: ["Charismatic", "Strategic", "Entertaining", "Camera-ready"],
    strengths: ["Natural entertainer", "Know the game", "Consistent effort"],
    weaknesses: ["Might burn out chasing virality", "Comparison trap"],
    tips: ["Stay authentic", "Viral akan datang, fokus on quality!"],
  },
  B: {
    type: "B",
    title: "Slow Burn Creator",
    emoji: "📈",
    description: "Kau build audience secara organic! Maybe takkan viral overnight, tapi loyal fanbase in the making. Sustainable growth!",
    traits: ["Consistent", "Quality-focused", "Authentic", "Patient"],
    strengths: ["Genuine following", "Not dependent on trends", "Long-term growth"],
    weaknesses: ["Slower growth", "Might feel discouraged"],
    tips: ["Keep going! Consistency beats virality!", "Your audience is growing!"],
  },
  C: {
    type: "C",
    title: "Accidental Viral Candidate",
    emoji: "🎲",
    description: "Kau tak aim for viral, tapi authentic content sometimes hits different! When you least expect it, boom!",
    traits: ["Authentic", "Unpredictable", "Genuine", "Lucky"],
    strengths: ["Real content", "No pressure", "Surprise potential"],
    weaknesses: ["Inconsistent", "Not capitalizing on momentum"],
    tips: ["Be ready for when it happens", "Have a plan!"],
  },
  D: {
    type: "D",
    title: "Niche Famous Potential",
    emoji: "🎯",
    description: "Kau mungkin tak viral mainstream, tapi dalam niche kau, legend! Specialized content for dedicated audience!",
    traits: ["Specialized", "Dedicated", "Expert", "Focused"],
    strengths: ["Loyal niche audience", "Authority in field", "Meaningful impact"],
    weaknesses: ["Limited mainstream appeal", "Smaller potential reach"],
    tips: ["Niche fame is still fame", "Quality audience > quantity!"],
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
