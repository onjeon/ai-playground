// Gaya Thread Kau
// Test viral tentang Threads (Meta) personality

export const questions = [
  {
    id: 1,
    question: "Kenapa kau join Threads?",
    options: [
      { text: "Nak lari dari Twitter drama!", type: "A" },
      { text: "FOMO, semua orang join", type: "B" },
      { text: "Connect dengan IG followers", type: "C" },
      { text: "Try je, tengok macam mana", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Content kau kat Threads vs Twitter sama tak?",
    options: [
      { text: "Totally different vibe, softer kat Threads", type: "A" },
      { text: "Copy paste je, efficient!", type: "B" },
      { text: "Threads untuk personal, Twitter untuk opinions", type: "C" },
      { text: "Tak post sangat kat kedua-dua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Followers Threads kau mainly dari mana?",
    options: [
      { text: "IG friends auto follow", type: "A" },
      { text: "Strangers yang discover content", type: "B" },
      { text: "Mix both", type: "C" },
      { text: "Tak ramai followers pun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Algorithm Threads okay tak untuk kau?",
    options: [
      { text: "Best! Content relevant semua!", type: "A" },
      { text: "Okay la, improving slowly", type: "B" },
      { text: "Mess sikit, banyak random stuff", type: "C" },
      { text: "Tak perasan pun algorithm macam mana", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Missing features kat Threads yang kau nak?",
    options: [
      { text: "Hashtags dan search yang better!", type: "A" },
      { text: "DMs please!", type: "B" },
      { text: "Trending topics", type: "C" },
      { text: "Tak kisah, current features okay", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Threads atau Twitter, mana kau prefer sekarang?",
    options: [
      { text: "Threads! Less toxic!", type: "A" },
      { text: "Twitter still, more content", type: "B" },
      { text: "Both ada pros and cons", type: "C" },
      { text: "Tak active sangat kat both", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Post pertama kau kat Threads apa?",
    options: [
      { text: "Intro post yang planned!", type: "A" },
      { text: "Random thought je", type: "B" },
      { text: "Screenshot dari Twitter", type: "C" },
      { text: "Tak ingat dah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Engagement kat Threads macam mana untuk kau?",
    options: [
      { text: "Surprisingly good! Reach tinggi!", type: "A" },
      { text: "Okay la, comparable dengan platform lain", type: "B" },
      { text: "Kurang sikit dari expected", type: "C" },
      { text: "Tak track pun engagement", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau think Threads akan survive long term?",
    options: [
      { text: "Definitely! Meta power!", type: "A" },
      { text: "Maybe, kalau improve features", type: "B" },
      { text: "Doubt it, hype will die", type: "C" },
      { text: "Don't care, guna while it's here", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Vibe Threads community macam mana?",
    options: [
      { text: "Wholesome dan supportive!", type: "A" },
      { text: "Still finding its identity", type: "B" },
      { text: "Boring sikit, kurang spicy", type: "C" },
      { text: "Tak interact sangat, scroll je", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Threads Convert",
    emoji: "🧵",
    description: "Kau all in dengan Threads! Love the vibe, enjoy the community, appreciate less toxic environment. Early adopter yang committed!",
    traits: ["Early adopter", "Optimistic", "Community-focused", "Positive"],
    strengths: ["Found your platform", "Good engagement", "Positive presence"],
    weaknesses: ["Maybe too optimistic", "Platform still evolving"],
    tips: ["Keep creating", "Help build the community!"],
  },
  B: {
    type: "B",
    title: "Platform Hopper",
    emoji: "🦘",
    description: "Kau active everywhere! Threads, Twitter, semua platform kau ada. Cross-posting pro, maximize reach. Digital omnipresent!",
    traits: ["Versatile", "Strategic", "Efficient", "Multi-platform"],
    strengths: ["Wide reach", "Adaptable", "Not putting eggs in one basket"],
    weaknesses: ["Spreading too thin", "Inconsistent presence"],
    tips: ["Focus on 1-2 platforms", "Quality over quantity!"],
  },
  C: {
    type: "C",
    title: "Skeptical User",
    emoji: "🤔",
    description: "Kau join Threads tapi still skeptical. Waiting to see kalau platform worth it before fully commit. Smart observer!",
    traits: ["Cautious", "Analytical", "Wait-and-see", "Practical"],
    strengths: ["Not wasting time", "Evaluate properly", "Smart approach"],
    weaknesses: ["Miss early mover advantage", "Too hesitant"],
    tips: ["Give it a real try", "Might surprise you!"],
  },
  D: {
    type: "D",
    title: "Casual Scroller",
    emoji: "📱",
    description: "Threads kau ada account tapi mostly scroll je. Consume content, rarely create. Passive but present!",
    traits: ["Passive", "Observer", "Low-key", "Consumer"],
    strengths: ["No pressure to create", "Enjoy content", "Relaxed approach"],
    weaknesses: ["Missing opportunities", "Not building presence"],
    tips: ["Try posting something", "Engagement fun sebenarnya!"],
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
