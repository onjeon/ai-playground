// फिल्म जॉनर टेस्ट - आप कौन सा मूवी जॉनर हैं?
// Movie Genre Personality Test

export const questions = [
  {
    id: 1,
    question: "Weekend movie night?",
    options: [
      { text: "Action-packed thriller", type: "A" },
      { text: "Romantic love story", type: "B" },
      { text: "Comedy और laughs", type: "C" },
      { text: "Emotional drama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Movie का best part?",
    options: [
      { text: "Climax और action", type: "A" },
      { text: "Romance और chemistry", type: "B" },
      { text: "Funny dialogues", type: "C" },
      { text: "Emotional scenes", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hero कैसा पसंद?",
    options: [
      { text: "Action hero, larger than life", type: "A" },
      { text: "Romantic, chocolate boy", type: "B" },
      { text: "Funny, comic timing", type: "C" },
      { text: "Real, relatable", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Movie देखकर क्या feel होना चाहिए?",
    options: [
      { text: "Excited और pumped up", type: "A" },
      { text: "In love और dreamy", type: "B" },
      { text: "Happy और light", type: "C" },
      { text: "Moved और thoughtful", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bollywood icon?",
    options: [
      { text: "Salman या Akshay - action", type: "A" },
      { text: "SRK - romance king", type: "B" },
      { text: "Govinda - comedy", type: "C" },
      { text: "Irrfan - meaningful roles", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Interval में?",
    options: [
      { text: "Cliffhanger पर छोड़े", type: "A" },
      { text: "Romantic song हो", type: "B" },
      { text: "Comedy scene हो", type: "C" },
      { text: "Emotional moment हो", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dialogues कैसे पसंद?",
    options: [
      { text: "Mass और punch lines", type: "A" },
      { text: "Romantic और poetic", type: "B" },
      { text: "Funny और quotable", type: "C" },
      { text: "Deep और meaningful", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Movie songs?",
    options: [
      { text: "Item songs और beats", type: "A" },
      { text: "Romantic ballads", type: "B" },
      { text: "Peppy और fun", type: "C" },
      { text: "Soulful और emotional", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Theatre experience?",
    options: [
      { text: "Whistles और cheers", type: "A" },
      { text: "Couple seat में cozy", type: "B" },
      { text: "Friends के साथ laughing", type: "C" },
      { text: "Silent, absorbed", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Villain कैसा पसंद?",
    options: [
      { text: "Powerful और dangerous", type: "A" },
      { text: "Love triangle वाला", type: "B" },
      { text: "Funny villain", type: "C" },
      { text: "Grey character", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ending कैसी?",
    options: [
      { text: "Hero wins, villain loses", type: "A" },
      { text: "Happy romantic ending", type: "B" },
      { text: "Funny twist", type: "C" },
      { text: "Open-ended या real", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Movie का purpose?",
    options: [
      { text: "Entertainment और thrill", type: "A" },
      { text: "Romance और dreams", type: "B" },
      { text: "Laughs और fun", type: "C" },
      { text: "Think और feel", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "एक्शन/मसाला",
    emoji: "💥",
    description: "आप Action/Masala Genre हैं - Entertainment king! Fights, chase scenes और mass dialogues। Salman-Akshay style blockbusters पसंद। Paisa vasool entertainment चाहिए आपको!",
    traits: ["Entertaining", "Exciting", "Mass appeal", "Fun"],
    strengths: ["Entertainment", "Excitement", "Mass connect", "Energy"],
    weaknesses: ["Less depth कभी-कभी", "Repetitive"],
    tips: ["Content films भी try करें", "Variety explore करें"],
  },
  B: {
    type: "B",
    title: "रोमांटिक",
    emoji: "💕",
    description: "आप Romantic Genre हैं - Dreamy और emotional! Love stories आपके दिल को छू जाती हैं। DDLJ से लेकर आज तक, romance पसंद है। Hopeless romantic personality!",
    traits: ["Romantic", "Dreamy", "Emotional", "Hopeful"],
    strengths: ["Romance", "Emotion", "Dreams", "Hope"],
    weaknesses: ["Too filmy expectations कभी-कभी", "Unrealistic"],
    tips: ["Real-life romance भी appreciate करें", "Other genres explore करें"],
  },
  C: {
    type: "C",
    title: "कॉमेडी",
    emoji: "😂",
    description: "आप Comedy Genre हैं - Laughter is the best medicine! Hera Pheri से लेकर हर comedy पसंद। Laughing cures everything, light-hearted personality!",
    traits: ["Funny", "Light-hearted", "Happy", "Social"],
    strengths: ["Humor", "Positivity", "Social", "Joy"],
    weaknesses: ["Avoid serious topics कभी-कभी", "Shallow"],
    tips: ["Serious content भी try करें", "Depth भी appreciate करें"],
  },
  D: {
    type: "D",
    title: "आर्ट/ड्रामा",
    emoji: "🎭",
    description: "आप Art/Drama Genre हैं - Meaningful और thought-provoking! Real stories, real emotions। Parallel cinema से लेकर content films तक। Deep thinker, cinema connoisseur!",
    traits: ["Deep", "Thoughtful", "Real", "Meaningful"],
    strengths: ["Depth", "Thinking", "Reality", "Meaning"],
    weaknesses: ["Too serious कभी-कभी", "Snob लग सकते हैं"],
    tips: ["Commercial cinema भी enjoy करें", "Light moments भी ठीक हैं"],
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
