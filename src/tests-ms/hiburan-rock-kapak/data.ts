// Gaya Rock Kapak Anda
// Apa jenis rock kapak fan anda?

export const questions = [
  {
    id: 1,
    question: "Band rock kapak legend mana favorite?",
    options: [
      { text: "Search - rock ballad king!", type: "A" },
      { text: "Wings - raw power!", type: "B" },
      { text: "Slam - emotional depth", type: "C" },
      { text: "Semua legend, tak boleh pilih!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila dengar rock kapak, anda...",
    options: [
      { text: "Air guitar full performance!", type: "A" },
      { text: "Headbang dan feel the beat", type: "B" },
      { text: "Sing along dengan penuh emosi", type: "C" },
      { text: "Quietly appreciate the music", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Lagu rock kapak untuk karaoke?",
    options: [
      { text: "Fantasia Bulan Madu - high notes!", type: "A" },
      { text: "Belenggu Irama - power!", type: "B" },
      { text: "Gerimis Mengundang - emotional", type: "C" },
      { text: "Semua boleh, depends on mood", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rock kapak era mana paling best?",
    options: [
      { text: "80s - the birth of legends!", type: "A" },
      { text: "90s - golden era!", type: "B" },
      { text: "2000s - modern touch", type: "C" },
      { text: "All eras, good rock is timeless", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila rock kapak main kat radio...",
    options: [
      { text: "Volume max, sing along!", type: "A" },
      { text: "Enjoy dan reminisce", type: "B" },
      { text: "Share dengan passenger", type: "C" },
      { text: "Nice background music", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Concert rock kapak reunion, anda...",
    options: [
      { text: "First row, VIP ticket!", type: "A" },
      { text: "Definitely attend!", type: "B" },
      { text: "Go kalau ada chance", type: "C" },
      { text: "Watch livestream je", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Guitar solo dalam rock kapak...",
    options: [
      { text: "Play air guitar setiap kali!", type: "A" },
      { text: "Appreciate the skills", type: "B" },
      { text: "Wait untuk vocals comeback", type: "C" },
      { text: "Nice instrumental break", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Rock kapak influence dalam hidup anda?",
    options: [
      { text: "Besar! Define my generation", type: "A" },
      { text: "Part of nostalgia", type: "B" },
      { text: "Appreciate sebagai heritage", type: "C" },
      { text: "Nice music to know", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Share rock kapak dengan younger generation?",
    options: [
      { text: "Yes! They must appreciate legends", type: "A" },
      { text: "Bila relevant je", type: "B" },
      { text: "They have their own music", type: "C" },
      { text: "Force sikit-sikit haha", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rock kapak vs current music?",
    options: [
      { text: "Rock kapak era unbeatable!", type: "A" },
      { text: "Both ada own charm", type: "B" },
      { text: "Appreciate semua era", type: "C" },
      { text: "Current music also good", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Die-Hard Rock Kapak",
    emoji: "🎸",
    description: "ROCK KAPAK IS LIFE! Anda adalah true believer. Every song, every band, every era - anda tahu semua! Living legend of fandom!",
    traits: ["Passionate", "Nostalgic", "Dedicated", "Knowledgeable"],
    strengths: ["Deep appreciation", "Preserves heritage", "Great karaoke partner"],
    weaknesses: ["May dismiss new music", "Stuck in past"],
    tips: ["Your passion is awesome!", "New music has gems too"],
  },
  B: {
    type: "B",
    title: "Nostalgic Fan",
    emoji: "📀",
    description: "Rock kapak = kenangan indah! Songs yang define your youth. Bila dengar, terus time travel to good old days!",
    traits: ["Nostalgic", "Sentimental", "Appreciative", "Connected"],
    strengths: ["Meaningful connection", "Shares memories"],
    weaknesses: ["Rose-tinted glasses", "May not be objective"],
    tips: ["Create new memories too!", "Nostalgia is beautiful"],
  },
  C: {
    type: "C",
    title: "Heritage Appreciator",
    emoji: "🏛️",
    description: "Appreciate rock kapak sebagai part of Malaysian music history! Respectful listener yang values the legacy!",
    traits: ["Respectful", "Educated", "Cultural", "Balanced"],
    strengths: ["Objective appreciation", "Understands significance"],
    weaknesses: ["May lack emotional connection"],
    tips: ["Let yourself feel the music!", "It's okay to be passionate"],
  },
  D: {
    type: "D",
    title: "Casual Listener",
    emoji: "🎵",
    description: "Rock kapak nice bila come across! Enjoy tanpa obsession. Balanced approach to retro music!",
    traits: ["Casual", "Balanced", "Open", "Relaxed"],
    strengths: ["No pressure", "Open to all music"],
    weaknesses: ["Miss the deep cuts"],
    tips: ["Explore more!", "There's magic in the classics"],
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
