// Gaya Networking Kau
// What's your professional networking style?

export const questions = [
  {
    id: 1,
    question: "Event networking office. Kau...",
    options: [
      { text: "First to arrive, last to leave! Collect semua contact!", type: "A" },
      { text: "Attend, mingle dengan selected people", type: "B" },
      { text: "Stand kat corner dengan food dan phone", type: "C" },
      { text: "Hilang after sign attendance", type: "D" },
    ],
  },
  {
    id: 2,
    question: "LinkedIn connection request, kau...",
    options: [
      { text: "Accept semua! More connections = more opportunities!", type: "A" },
      { text: "Accept kalau ada mutual atau relevant", type: "B" },
      { text: "Accept bila perlu je", type: "C" },
      { text: "LinkedIn? Last update 2019", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jumpa industry senior di event. Approach?",
    options: [
      { text: "Introduce diri, exchange card, follow up!", type: "A" },
      { text: "Say hi, casual conversation", type: "B" },
      { text: "Senyum dari jauh je", type: "C" },
      { text: "Avoid eye contact, makan jer", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Post LinkedIn tentang achievement kerja...",
    options: [
      { text: "Selalu! Personal branding important!", type: "A" },
      { text: "Occasionally, bila ada something big", type: "B" },
      { text: "Jarang, rasa awkward self-promote", type: "C" },
      { text: "Never, lurker sejati", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Colleague dari department lain tegur. Kau...",
    options: [
      { text: "Best friend baru! Exchange number!", type: "A" },
      { text: "Friendly chat, keep it professional", type: "B" },
      { text: "Balas secukupnya, then escape", type: "C" },
      { text: "Who are you again?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Industry conference. Strategy kau?",
    options: [
      { text: "Set target: meet X number of people!", type: "A" },
      { text: "Attend talks, connect kalau ada chance", type: "B" },
      { text: "Focus kat content, people secondar", type: "C" },
      { text: "Free food dan freebies focus", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Orang mintak recommendation dari kau untuk job. Kau...",
    options: [
      { text: "Of course! Happy to help the network!", type: "A" },
      { text: "Kalau kenal baik dan qualified, yes", type: "B" },
      { text: "Hmm tengok dulu siapa dia", type: "C" },
      { text: "Awkward, prefer not to involve", type: "D" },
    ],
  },
  {
    id: 8,
    question: "WhatsApp group alumni/industry, kau...",
    options: [
      { text: "Active! Share opportunities, engage!", type: "A" },
      { text: "Read, occasionally participate", type: "B" },
      { text: "Mute, scroll bila bored", type: "C" },
      { text: "Left group atau archive", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau describe networking sebagai...",
    options: [
      { text: "Essential skill untuk career success!", type: "A" },
      { text: "Useful tapi bukan priority", type: "B" },
      { text: "Necessary evil", type: "C" },
      { text: "Fake socializing yang painful", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Contact list professional kau...",
    options: [
      { text: "Thousands! Aku kenal semua orang!", type: "A" },
      { text: "Decent amount, quality connections", type: "B" },
      { text: "Small circle yang trusted", type: "C" },
      { text: "Same few colleagues je", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Networking Ninja",
    emoji: "🤝",
    description: "Kau boleh walk into any room dan walk out dengan 20 new contacts! Natural connector, everyone dalam industry kenal nama kau!",
    traits: ["Super sociable", "Natural connector", "Personal branding expert", "Opportunity magnet"],
    strengths: ["Wide network", "Career opportunities abundant", "Information first hand"],
    weaknesses: ["May seem fake to some", "Quality vs quantity issue"],
    tips: ["Focus on deeper relationships juga", "Genuine connections matter more"],
  },
  B: {
    type: "B",
    title: "Strategic Networker",
    emoji: "🎯",
    description: "Kau network dengan purpose! Quality over quantity, choose connections wisely. Professional approach yang effective!",
    traits: ["Strategic", "Professional", "Selective", "Balanced approach"],
    strengths: ["Quality connections", "Meaningful relationships", "Efficient networking"],
    weaknesses: ["May miss unexpected opportunities", "Network smaller"],
    tips: ["Sometimes random connections pun valuable", "Open up sikit"],
  },
  C: {
    type: "C",
    title: "Reluctant Networker",
    emoji: "😬",
    description: "Networking adalah necessary evil untuk kau. Do it bila kena, escape bila boleh. Prefer let work speak for itself!",
    traits: ["Introverted", "Quality focused", "Small circle", "Authentic connections"],
    strengths: ["Deep relationships with few", "Genuine connections", "No fake vibes"],
    weaknesses: ["Miss opportunities", "Career visibility low", "Limited reach"],
    tips: ["Networking doesn't have to be fake", "Start small, authentic approach"],
  },
  D: {
    type: "D",
    title: "Networking Allergic",
    emoji: "🙈",
    description: "Professional networking? Hard pass! Kau percaya kerja bagus cukup, tak perlu 'jual diri'. Lone wolf dalam corporate jungle!",
    traits: ["Anti-social professionally", "Work speaks for itself mentality", "Minimal connections", "Independent"],
    strengths: ["Focus on actual work", "No time wasted on fake relationships", "Authentic AF"],
    weaknesses: ["Career growth limited", "Miss many opportunities", "Out of loop"],
    tips: ["Some networking is actually valuable", "Career needs visibility juga"],
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
