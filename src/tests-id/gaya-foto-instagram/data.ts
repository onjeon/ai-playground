// Gaya Foto Instagram Kamu
// Tes ini mengungkap personality kamu berdasarkan gaya foto Instagram!

export const questions = [
  {
    id: 1,
    question: "Foto feed Instagram kamu mostly...",
    options: [
      { text: "Selfies dan personal moments", type: "A" },
      { text: "Aesthetic, curated content", type: "B" },
      { text: "Mix of everything", type: "C" },
      { text: "Rarely post, mostly lurker", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Editing foto sebelum post...",
    options: [
      { text: "Filter favorit, quick edit", type: "A" },
      { text: "Detailed editing, Lightroom presets", type: "B" },
      { text: "Basic adjustments, brightness contrast", type: "C" },
      { text: "No edit, authentic", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Waktu untuk ambil 'the perfect shot'...",
    options: [
      { text: "Multiple takes sampai puas", type: "A" },
      { text: "Plan the shot, execute", type: "B" },
      { text: "Few shots, pick best", type: "C" },
      { text: "One shot, good enough", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Caption style...",
    options: [
      { text: "Witty atau quotes", type: "A" },
      { text: "Minimal, let photo speak", type: "B" },
      { text: "Story behind the photo", type: "C" },
      { text: "Emoji atau nothing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Feed aesthetic consistency...",
    options: [
      { text: "Color theme/palette maintained", type: "A" },
      { text: "Generally cohesive", type: "B" },
      { text: "Post what I like, varied", type: "C" },
      { text: "No theme, random", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Posting frequency...",
    options: [
      { text: "Regular schedule", type: "A" },
      { text: "When have good content", type: "B" },
      { text: "Sporadic, when feel like it", type: "C" },
      { text: "Very rarely", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Stories vs Feed...",
    options: [
      { text: "Both active, different content", type: "A" },
      { text: "Stories lebih active", type: "B" },
      { text: "Feed fokus, stories casual", type: "C" },
      { text: "Neither really", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Minta orang foto kamu...",
    options: [
      { text: "Often, with specific directions", type: "A" },
      { text: "Sometimes, trust their eye", type: "B" },
      { text: "Rarely, prefer natural shots", type: "C" },
      { text: "Avoid being in photos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Deleting posts...",
    options: [
      { text: "Curate actively, delete yang ga fit", type: "A" },
      { text: "Occasionally kalau cringe", type: "B" },
      { text: "Rarely, memories", type: "C" },
      { text: "Never, too much effort", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Engagement dengan followers...",
    options: [
      { text: "Reply semua, engage actively", type: "A" },
      { text: "Reply close friends, appreciate likes", type: "B" },
      { text: "Occasional engagement", type: "C" },
      { text: "Post and forget", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Photography skills untuk Instagram...",
    options: [
      { text: "Learned composition, lighting, etc", type: "A" },
      { text: "Basic knowledge, improving", type: "B" },
      { text: "Natural eye, no training", type: "C" },
      { text: "Point and shoot", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Instagram purpose untuk kamu...",
    options: [
      { text: "Self-expression dan personal brand", type: "A" },
      { text: "Document life dan memories", type: "B" },
      { text: "Connect dengan friends", type: "C" },
      { text: "Scroll content mostly", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Instagram Influencer",
    emoji: "📸",
    description: "Instagram adalah art gallery kamu! Curated feed, consistent aesthetic, dan you treat it like personal brand. Every post is intentional dan thought out!",
    traits: ["Creative", "Intentional", "Brand-conscious", "Engaged"],
    strengths: ["Beautiful feed", "Strong presence", "Influence potential"],
    weaknesses: ["Pressure to perform", "Might be inauthentic", "Time consuming"],
    tips: ["Authenticity > perfection", "Don't let likes define you", "Enjoy the real moment too"],
  },
  B: {
    type: "B",
    title: "The Thoughtful Poster",
    emoji: "🎨",
    description: "Kamu care about quality tanpa obsessing! Post when have good content, appreciate aesthetics, dan maintain decent presence. Balanced Instagram life!",
    traits: ["Quality-focused", "Moderate", "Thoughtful", "Balanced"],
    strengths: ["Good content when you post", "Not addicted", "Authentic"],
    weaknesses: ["Could be more consistent"],
    tips: ["You're doing great!", "Post more if you enjoy it"],
  },
  C: {
    type: "C",
    title: "The Casual Grammer",
    emoji: "📱",
    description: "Instagram adalah for fun! Post random moments, no pressure, dan enjoy tanpa overthinking. Social without being too serious about it!",
    traits: ["Casual", "Authentic", "Spontaneous", "Low-pressure"],
    strengths: ["No Instagram stress", "Real moments", "Enjoy without pressure"],
    weaknesses: ["Messy feed maybe", "Could document better"],
    tips: ["Nothing wrong with casual!", "Maybe save some highlights", "Your authenticity is refreshing"],
  },
  D: {
    type: "D",
    title: "The Instagram Lurker",
    emoji: "👀",
    description: "Consumer more than creator! Scroll, like, occasionally post. Instagram untuk entertainment bukan performance. Nothing wrong dengan that!",
    traits: ["Consumer", "Private", "Minimal", "Observer"],
    strengths: ["No social media pressure", "Enjoy content others create", "Private life intact"],
    weaknesses: ["Miss documenting memories", "Less connected maybe"],
    tips: ["Post once in a while, friends want to see you!", "Stories low commitment option", "But lurking is valid too"],
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
