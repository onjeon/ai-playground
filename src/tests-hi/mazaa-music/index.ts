// भारतीय संगीत टेस्ट - आप कौन सा संगीत हैं?
// Indian Music Personality Test

export const questions = [
  {
    id: 1,
    question: "Music सुनने का mood?",
    options: [
      { text: "Deep और soulful", type: "A" },
      { text: "Upbeat और energetic", type: "B" },
      { text: "Romantic और melodious", type: "C" },
      { text: "Trendy और catchy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Favorite instrument?",
    options: [
      { text: "Sitar या tabla", type: "A" },
      { text: "Dhol या dholak", type: "B" },
      { text: "Flute या harmonium", type: "C" },
      { text: "Electronic beats", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Singer preference?",
    options: [
      { text: "Classical masters", type: "A" },
      { text: "Sufi और folk singers", type: "B" },
      { text: "Romantic playback singers", type: "C" },
      { text: "Modern indie artists", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Concert कैसा चाहिए?",
    options: [
      { text: "Intimate और acoustic", type: "A" },
      { text: "High energy और crowd", type: "B" },
      { text: "Romantic और melodious", type: "C" },
      { text: "Modern और experimental", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Music से क्या feel होता है?",
    options: [
      { text: "Spiritual और peaceful", type: "A" },
      { text: "Energized और happy", type: "B" },
      { text: "Emotional और romantic", type: "C" },
      { text: "Cool और trendy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Singing में interest?",
    options: [
      { text: "Classical training लेना चाहता हूं", type: "A" },
      { text: "Bathroom singer, fun के लिए", type: "B" },
      { text: "Romantic songs गाना पसंद", type: "C" },
      { text: "Rap या new genres", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Road trip playlist?",
    options: [
      { text: "Ghazals और classics", type: "A" },
      { text: "Punjabi और party songs", type: "B" },
      { text: "Bollywood romantic hits", type: "C" },
      { text: "Indie और English mix", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Lyrics vs music?",
    options: [
      { text: "Lyrics और meaning important", type: "A" },
      { text: "Beat और rhythm important", type: "B" },
      { text: "Melody और feel important", type: "C" },
      { text: "Overall vibe important", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Old songs vs new songs?",
    options: [
      { text: "Old is gold, always", type: "A" },
      { text: "Mix of both", type: "B" },
      { text: "90s-2000s best era", type: "C" },
      { text: "New music, fresh sound", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Music sharing?",
    options: [
      { text: "Hidden gems share करता हूं", type: "A" },
      { text: "Party playlists बनाता हूं", type: "B" },
      { text: "Romantic songs recommend", type: "C" },
      { text: "Trending tracks share", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Music discovery?",
    options: [
      { text: "Deep dive into genres", type: "A" },
      { text: "What's popular", type: "B" },
      { text: "Movie soundtracks", type: "C" },
      { text: "Social media और reels", type: "D" },
    ],
  },
  {
    id: 12,
    question: "संगीत का मतलब?",
    options: [
      { text: "आत्मा का भोजन", type: "A" },
      { text: "जश्न और मस्ती", type: "B" },
      { text: "प्यार का इज़हार", type: "C" },
      { text: "Trend और vibe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "शास्त्रीय संगीत",
    emoji: "🎵",
    description: "आप Classical Music हैं - Deep, soulful और timeless! रागों की समझ, तालों का ज्ञान। Music को seriously लेने वाले। Ustad level appreciation!",
    traits: ["Deep", "Soulful", "Traditional", "Knowledgeable"],
    strengths: ["Depth", "Appreciation", "Knowledge", "Patience"],
    weaknesses: ["Too serious कभी-कभी", "Less relatable"],
    tips: ["Light music भी enjoy करें", "Share अपना knowledge"],
  },
  B: {
    type: "B",
    title: "पंजाबी/फोक संगीत",
    emoji: "🥳",
    description: "आप Punjabi/Folk Music हैं - Energetic, celebratory और fun! Dhol की beat सुनते ही पैर थिरकने लगते हैं। Party animal, celebration lover!",
    traits: ["Energetic", "Fun", "Celebratory", "Social"],
    strengths: ["Energy", "Celebration", "Social", "Fun"],
    weaknesses: ["Too loud कभी-कभी", "Depth miss"],
    tips: ["Soft music भी try करें", "Depth explore करें"],
  },
  C: {
    type: "C",
    title: "बॉलीवुड रोमांटिक",
    emoji: "❤️",
    description: "आप Bollywood Romantic Music हैं - Melodious, emotional और dreamy! हर romantic song आपके लिए है। Dil से music सुनने वाले, love songs का collection!",
    traits: ["Romantic", "Melodious", "Emotional", "Dreamy"],
    strengths: ["Emotion", "Romance", "Melody appreciation", "Feelings"],
    weaknesses: ["Too filmy कभी-कभी", "Stuck in one genre"],
    tips: ["Other genres भी explore करें", "Live music experience लें"],
  },
  D: {
    type: "D",
    title: "इंडी/मॉडर्न म्यूज़िक",
    emoji: "🎧",
    description: "आप Indie/Modern Music हैं - Trendy, fresh और experimental! New artists discover करते हैं, underground scene में interest। Music का future!",
    traits: ["Trendy", "Fresh", "Experimental", "Modern"],
    strengths: ["Trend awareness", "Discovery", "Openness", "Modern"],
    weaknesses: ["Too trendy कभी-कभी", "Miss classics"],
    tips: ["Roots भी explore करें", "Classics appreciate करें"],
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
