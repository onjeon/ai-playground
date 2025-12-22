// Gaya Post Story Kau
// Test viral tentang story posting behavior

export const questions = [
  {
    id: 1,
    question: "Berapa story kau post sehari average?",
    options: [
      { text: "10+ stories! Document everything!", type: "A" },
      { text: "3-5 yang curated", type: "B" },
      { text: "1-2 je kalau ada benda best", type: "C" },
      { text: "Seminggu sekali pun jarang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Content story kau biasanya apa?",
    options: [
      { text: "Selfie dan OOTD!", type: "A" },
      { text: "Food dan cafe aesthetic", type: "B" },
      { text: "Repost memes dan tweets", type: "C" },
      { text: "Random moments je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Before post story, edit dulu tak?",
    options: [
      { text: "Full edit! Preset, stickers, music!", type: "A" },
      { text: "Basic filter je", type: "B" },
      { text: "Raw, as is", type: "C" },
      { text: "Add text/caption je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila post story, kau check viewer list tak?",
    options: [
      { text: "Every 5 minutes! Who viewed?!", type: "A" },
      { text: "Sekali-sekala tengok", type: "B" },
      { text: "End of day je check", type: "C" },
      { text: "Tak kisah pun siapa tengok", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ada specific people kau nak tengok story kau?",
    options: [
      { text: "Yes! Post timing pun strategic!", type: "A" },
      { text: "Maybe ada sikit", type: "B" },
      { text: "Tak terfikir pun", type: "C" },
      { text: "Post untuk close friends je", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Music on story penting tak?",
    options: [
      { text: "Critical! Aesthetic kena on point!", type: "A" },
      { text: "Sometimes bila match vibe", type: "B" },
      { text: "Jarang pakai music", type: "C" },
      { text: "Tak tahu macam mana nak add", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Story highlights kau macam mana?",
    options: [
      { text: "Organized! Travel, Food, OOTD semua ada!", type: "A" },
      { text: "A few important ones", type: "B" },
      { text: "Random stuff je", type: "C" },
      { text: "Takde highlights langsung", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila kawan reply story, kau...",
    options: [
      { text: "Reply immediately! Start conversation!", type: "A" },
      { text: "Reply bila free", type: "B" },
      { text: "React je, malas chat", type: "C" },
      { text: "Sometimes tak perasan pun", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Post story masa boring ke masa happening?",
    options: [
      { text: "Happening! FOMO orang lain!", type: "A" },
      { text: "Both, depends on content", type: "B" },
      { text: "Bila boring, kill time", type: "C" },
      { text: "Rarely post either way", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Close Friends story kau guna?",
    options: [
      { text: "Selalu! For exclusive content!", type: "A" },
      { text: "Kadang-kadang untuk rants", type: "B" },
      { text: "Jarang, main story je", type: "C" },
      { text: "Tak set up lagi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Story Addict",
    emoji: "📲",
    description: "Story kau non-stop 24/7! Dari bangun tidur sampai tido, semua documented. Followers tahu schedule kau better than kau sendiri!",
    traits: ["Constant sharer", "Attention seeker", "Social butterfly", "Documenter"],
    strengths: ["Keep friends updated", "Good at sharing", "Creating memories"],
    weaknesses: ["Living through screen", "Oversharing", "Battery always low"],
    tips: ["Enjoy moments without recording", "Some things are better private!"],
  },
  B: {
    type: "B",
    title: "Aesthetic Storymaker",
    emoji: "✨",
    description: "Every story kau macam mini production! Curated, edited, music matching. Quality over quantity. Your feed is art!",
    traits: ["Quality-focused", "Creative", "Aesthetic", "Selective"],
    strengths: ["Beautiful content", "Good taste", "Effort shows"],
    weaknesses: ["Takes too long to post", "Miss spontaneous moments"],
    tips: ["Sometimes raw is beautiful too", "Don't stress over perfection!"],
  },
  C: {
    type: "C",
    title: "Casual Poster",
    emoji: "📱",
    description: "Kau post story bila rasa nak share je. No pressure, no strategy, just vibes. Authentic dan unpretentious!",
    traits: ["Authentic", "Relaxed", "Genuine", "Low maintenance"],
    strengths: ["Real content", "Not obsessed", "Balanced life"],
    weaknesses: ["Miss sharing good moments", "Friends want more updates"],
    tips: ["Share more! Friends suka tengok!", "You're doing great!"],
  },
  D: {
    type: "D",
    title: "Story Ghost",
    emoji: "👻",
    description: "Story kau kosong most of the time! Maybe privacy person, maybe malas, tapi kau prefer experience tanpa document. Living in the moment!",
    traits: ["Private", "Present", "Mysterious", "Unbothered"],
    strengths: ["Enjoy real life", "Not dependent on validation", "Privacy protected"],
    weaknesses: ["Friends tak tahu updates", "Miss out on interactions"],
    tips: ["Share sekali-sekala", "Kawan nak tahu pasal you!"],
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
