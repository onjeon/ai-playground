// Tipe Gamer Mobile Kamu
// Tes ini mengungkap personality kamu sebagai mobile gamer!

export const questions = [
  {
    id: 1,
    question: "Game mobile favorit genre...",
    options: [
      { text: "MOBA/Battle Royale (ML, PUBG, FF)", type: "A" },
      { text: "Puzzle/Strategy (Candy Crush, Chess)", type: "B" },
      { text: "Casual/Simulation (Cooking, Building)", type: "C" },
      { text: "Gacha/RPG (Genshin, etc)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Waktu gaming mobile per hari...",
    options: [
      { text: "3+ jam, dedicated sessions", type: "A" },
      { text: "1-2 jam, scheduled", type: "B" },
      { text: "30 menit, killing time", type: "C" },
      { text: "Rarely, occasional", type: "D" },
    ],
  },
  {
    id: 3,
    question: "In-app purchases...",
    options: [
      { text: "Regular top up, support the game", type: "A" },
      { text: "Occasionally untuk special items", type: "B" },
      { text: "F2P strictly", type: "C" },
      { text: "What purchases? Free games only", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Gaming dengan teman...",
    options: [
      { text: "Squad regular, scheduled sessions", type: "A" },
      { text: "Sometimes, casual mabar", type: "B" },
      { text: "Solo player mostly", type: "C" },
      { text: "Don't game with others", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat kalah di game...",
    options: [
      { text: "Rematch! One more game", type: "A" },
      { text: "Analyze what went wrong", type: "B" },
      { text: "Meh, it's just a game", type: "C" },
      { text: "Ragequit possible", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gaming setup mobile...",
    options: [
      { text: "Gaming phone, controller, cooling fan", type: "A" },
      { text: "Good phone, maybe accessories", type: "B" },
      { text: "Whatever phone I have", type: "C" },
      { text: "Phone not for gaming really", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Competitive vs casual...",
    options: [
      { text: "Ranked grind, climb to the top!", type: "A" },
      { text: "Mix of ranked dan casual", type: "B" },
      { text: "Casual only, no stress", type: "C" },
      { text: "What's ranked?", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Game events dan updates...",
    options: [
      { text: "Follow all events, don't miss rewards", type: "A" },
      { text: "Participate in interesting ones", type: "B" },
      { text: "Play when I remember", type: "C" },
      { text: "Don't follow updates", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Gaming content consumption...",
    options: [
      { text: "Watch streamers, tutorials, esports", type: "A" },
      { text: "Occasional tips dan tricks", type: "B" },
      { text: "Just play, no need to watch", type: "C" },
      { text: "Not interested in gaming content", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Multiple games atau satu game...",
    options: [
      { text: "Main game + few side games", type: "A" },
      { text: "Focus one at a time", type: "B" },
      { text: "Many games, play randomly", type: "C" },
      { text: "One game if any", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Gaming impact ke life...",
    options: [
      { text: "Big part of social life", type: "A" },
      { text: "Fun hobby, balanced", type: "B" },
      { text: "Just time killer", type: "C" },
      { text: "Minimal, not a gamer really", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Battery saat gaming...",
    options: [
      { text: "Always prepared, powerbank ready", type: "A" },
      { text: "Watch battery, play when charged", type: "B" },
      { text: "Play until dead", type: "C" },
      { text: "Games drain too much, avoid", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Hardcore Mobile Gamer",
    emoji: "🎮",
    description: "Mobile gaming adalah serius business! Ranked grind, squad sessions, dan gaming adalah major hobby. You might be on your way to esports!",
    traits: ["Competitive", "Dedicated", "Social gamer", "Invested"],
    strengths: ["Good at games", "Strong gaming community", "Committed hobby"],
    weaknesses: ["Time consuming", "Money spending", "Might neglect other things"],
    tips: ["Balance gaming dengan life", "Take breaks for health", "It's still supposed to be fun"],
  },
  B: {
    type: "B",
    title: "The Balanced Gamer",
    emoji: "🕹️",
    description: "Gaming dengan balance! Enjoy playing, not obsessed, dan treat it sebagai healthy hobby. Perfect gaming-life balance!",
    traits: ["Balanced", "Moderate", "Enjoyable", "Healthy hobby"],
    strengths: ["Sustainable hobby", "Good at games without addiction", "Time management"],
    weaknesses: ["Could go pro? Maybe not"],
    tips: ["You're doing great!", "Perfect balance to maintain"],
  },
  C: {
    type: "C",
    title: "The Casual Mobile Player",
    emoji: "📱",
    description: "Games untuk killing time! Waiting in line, bored moments, casual entertainment. Simple pleasures, no stress approach!",
    traits: ["Casual", "Relaxed", "Time-killer", "Unfussy"],
    strengths: ["No addiction", "Games don't control you", "Simple enjoyment"],
    weaknesses: ["Miss deeper gaming experiences", "Not competitive"],
    tips: ["Maybe try getting into a game properly", "Gaming communities can be fun"],
  },
  D: {
    type: "D",
    title: "The Non-Gamer",
    emoji: "🚫",
    description: "Mobile gaming not your thing! Phone untuk other purposes, games seem like waste of time. Perfectly valid - different strokes!",
    traits: ["Non-gamer", "Productive?", "Different interests", "Phone minimalist"],
    strengths: ["Save time", "Save money", "No gaming addiction"],
    weaknesses: ["Miss social gaming", "Can't relate to gamer friends"],
    tips: ["Some games are worth trying", "Gaming can be social", "But you do you!"],
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
