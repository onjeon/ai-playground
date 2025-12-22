// Introvert atau Extrovert?
// Kau ni team indoor atau outdoor?

export const questions = [
  {
    id: 1,
    question: "Weekend dah sampai! Apa plan kau?",
    options: [
      { text: "Netflix, selimut, aircond kuat!", type: "A" },
      { text: "Lepak dengan few close friends", type: "B" },
      { text: "Keluar dengan geng, ramai-ramai!", type: "C" },
      { text: "Party sampai pagi! LET'S GOOO!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Phone bunyi - kawan ajak keluar last minute. Reaction kau?",
    options: [
      { text: "Pretend tak nampak, continue tidur", type: "A" },
      { text: "Hmm tengok dulu siapa pergi", type: "B" },
      { text: "Okay boleh, sounds fun!", type: "C" },
      { text: "YES! Dah siap dah ni!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kat gathering besar, kau biasanya...",
    options: [
      { text: "Duduk tepi, main phone", type: "A" },
      { text: "Stick dengan orang yang aku kenal je", type: "B" },
      { text: "Mingle around, jumpa orang baru", type: "C" },
      { text: "Jadi MC tak rasmi, hype semua orang!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila kau stress, kau prefer...",
    options: [
      { text: "Sorang-sorang dalam bilik, peace", type: "A" },
      { text: "Lepak dengan 1-2 orang rapat", type: "B" },
      { text: "Keluar dengan kawan-kawan", type: "C" },
      { text: "Pergi tempat ramai, club ke karaoke ke", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kat office/sekolah, lunch time kau macam mana?",
    options: [
      { text: "Makan sorang sambil tengok phone", type: "A" },
      { text: "Dengan few close colleagues je", type: "B" },
      { text: "Join mana-mana group yang ajak", type: "C" },
      { text: "Organize lunch outing ramai-ramai!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Group project - role kau biasanya?",
    options: [
      { text: "Buat kerja sorang-sorang, hantar online", type: "A" },
      { text: "Contribute tapi tak banyak cakap", type: "B" },
      { text: "Active participate dalam discussion", type: "C" },
      { text: "Lead discussion, assign kerja semua orang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Vacation ideal kau macam mana?",
    options: [
      { text: "Staycation, rehat kat hotel", type: "A" },
      { text: "Travel dengan partner/bestie sorang", type: "B" },
      { text: "Trip dengan group kecil", type: "C" },
      { text: "Group trip besar, the more the merrier!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kawan ajak pergi event dengan strangers. Kau?",
    options: [
      { text: "Hard pass, sorry tak boleh", type: "A" },
      { text: "Pergi tapi melekat dengan kawan tu je", type: "B" },
      { text: "Okay, boleh try kenal orang baru", type: "C" },
      { text: "Best! Aku suka jumpa orang baru!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila dapat cuti panjang, kau akan...",
    options: [
      { text: "Rehat kat rumah, recharge battery", type: "A" },
      { text: "Quality time dengan family/close ones", type: "B" },
      { text: "Plan activities dengan kawan-kawan", type: "C" },
      { text: "Schedule penuh dengan hangouts!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Lepas habis social event, kau rasa...",
    options: [
      { text: "PENAT gila, nak tidur seminggu", type: "A" },
      { text: "Okay tapi perlukan masa recharge", type: "B" },
      { text: "Happy dan satisfied", type: "C" },
      { text: "Energized! Bila next event?!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Introvert Hardcore 🏠",
    emoji: "🏠",
    description: "Kau ni introvert tahap maximum! Rumah adalah happy place kau, dan social events tu macam boss fight dalam game. Kau lebih suka deep connection dengan few people daripada surface level dengan ramai orang. Nothing wrong with that - kau just recharge dengan solitude!",
    traits: ["Homebody supreme", "Deep thinker", "Selective socializing", "Solo adventurer"],
    strengths: ["Self-aware", "Great listener", "Independent", "Creative bila sorang"],
    weaknesses: ["Boleh jadi terlalu isolated", "Miss out on opportunities"],
    tips: ["Cuba keluar sikit-sikit, step by step", "Quality over quantity socializing okay!"],
  },
  B: {
    type: "B",
    title: "Introvert dengan Social Skills 🌙",
    emoji: "🌙",
    description: "Kau introvert tapi masih boleh function dalam society! Kau prefer small gatherings dan meaningful conversations. Bukan anti-social, just selective social. Kau perlukan masa recharge lepas socializing, dan that's totally valid!",
    traits: ["Selective socializer", "Quality over quantity", "Thoughtful friend", "Needs recharge time"],
    strengths: ["Balance solitude dan socializing", "Deep friendships", "Good boundaries"],
    weaknesses: ["Sometimes miss out on fun events", "Overthink social situations"],
    tips: ["Trust instincts kau", "It's okay to say no kadang-kadang"],
  },
  C: {
    type: "C",
    title: "Ambivert Balanced ⚖️",
    emoji: "⚖️",
    description: "Kau ni ambivert - boleh adapt kedua-dua situation! Kadang suka party, kadang suka sorang. Best of both worlds! Kau flexible dan boleh vibe dengan berbagai jenis orang. Social chameleon betul!",
    traits: ["Flexible", "Adaptable", "Social chameleon", "Balanced energy"],
    strengths: ["Can fit anywhere", "Versatile friend", "Good at reading situations"],
    weaknesses: ["Sometimes confuse sendiri - nak keluar ke tak?", "Energy level unpredictable"],
    tips: ["Listen to your body", "Both modes are valid!"],
  },
  D: {
    type: "D",
    title: "Extrovert Maximum 🎉",
    emoji: "🎉",
    description: "KAU NI EXTROVERT GILA! Social butterfly yang tak boleh duduk diam. Orang adalah source of energy kau. Rumah sorang-sorang? Boring! Kau thrive dalam crowds dan FOMO adalah real struggle kau!",
    traits: ["Life of the party", "Social butterfly", "Energy giver", "FOMO champion"],
    strengths: ["Networking pro", "Make friends easily", "Bring the vibes anywhere"],
    weaknesses: ["Hard to be alone", "Sometimes overwhelming to others"],
    tips: ["Learn to enjoy solitude sikit", "Not every event kena pergi!"],
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
